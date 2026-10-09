#!/usr/bin/env node
/**
 * HAEMIL i18n contract and structural QA (no API calls or publication side effects).
 * Usage: node scripts/i18n/check.mjs <source.json> <translation.json>
 * Passing this checker does NOT mean that a translation is factually correct,
 * native-reviewed, publishable, or eligible for Google indexing.
 */
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const LOCALES = Object.freeze(['ja', 'zh-Hant', 'zh-Hans', 'es', 'ko']);
export const STATUSES = Object.freeze(['draft', 'qa_passed', 'reviewed', 'approved']);
const BLOCK_ID = /^[A-Za-z0-9][A-Za-z0-9_-]*$/;
const SOURCE_PATH = /^\/(?!\/)[^\s?#\\]*$/;
const DOT_SEGMENT = /(?:^|\/)\.{1,2}(?:\/|$)/;
// ISO 8601 date-time with an explicit UTC offset, e.g. 2026-10-09T08:00:00Z.
const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/;
const CLOCK_SKEW_MS = 5 * 60 * 1000;
// Elements that must never appear in a translated fragment, even if the
// English source somehow contained them.
const FORBIDDEN_TAGS = new Set([
  'script', 'style', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet',
  'link', 'meta', 'base', 'form', 'input', 'button', 'textarea', 'select',
  'svg', 'math', 'template', 'noscript',
]);
const TAG_PATTERN = /<\s*(\/)?\s*([A-Za-z][A-Za-z0-9-]*)([^>]*)>/g;
const ATTRIBUTE_PATTERN = /([^\s"'=<>/`]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

export function sourceHash(html) {
  return createHash('sha256').update(html.normalize('NFC'), 'utf8').digest('hex');
}

function parseTags(html) {
  const tags = [];
  for (const [, closing, name, rest] of html.matchAll(TAG_PATTERN)) {
    const attributes = [];
    if (!closing) {
      for (const [, attrName, dq, sq, bare] of rest.matchAll(ATTRIBUTE_PATTERN)) {
        attributes.push({ name: attrName.toLowerCase(), value: dq ?? sq ?? bare ?? '' });
      }
    }
    tags.push({ closing: Boolean(closing), name: name.toLowerCase(), attributes, raw: rest });
  }
  return tags;
}

// Every element and every attribute name must match the English fragment.
// Attribute values (except href, compared separately) may be translated.
function structureCounts(tags) {
  const result = new Map();
  for (const tag of tags) {
    const names = tag.attributes.map((a) => a.name).sort().join(',');
    const key = tag.closing ? `/${tag.name}` : `${tag.name}[${names}]`;
    result.set(key, (result.get(key) ?? 0) + 1);
  }
  return result;
}

function hrefs(tags) {
  return tags
    .filter((tag) => !tag.closing && tag.name === 'a')
    .flatMap((tag) => tag.attributes.filter((a) => a.name === 'href').map((a) => a.value))
    .sort();
}

function decodeForSchemeCheck(value) {
  return value
    .replace(/&#x([0-9a-f]+);?/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);?/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&colon;/gi, ':')
    .replace(/&(?:tab|newline);/gi, '')
    .replace(/[\u0000-\u0020\u007f-\u009f]/g, '')
    .toLowerCase();
}

function unsafeMarkup(html, tags) {
  // Comments, doctypes and processing instructions are never needed in fragments.
  if (/<\s*[!?]/.test(html)) return true;
  return tags.some((tag) =>
    FORBIDDEN_TAGS.has(tag.name) ||
    // Belt and braces for parser differences such as <svg/onload=...>.
    /(?:^|[\s/"'])on[a-z]+\s*=/i.test(tag.raw) ||
    tag.attributes.some((a) =>
      a.name.startsWith('on') ||
      a.name === 'style' ||
      a.name === 'srcdoc' ||
      /^(?:javascript|vbscript|data):/.test(decodeForSchemeCheck(a.value))));
}

function visibleNumbers(html) {
  // Structural check only: written-out numbers can be valid translations.
  // Flag them for review rather than silently treating them as equivalent.
  return (html.replace(/<[^>]*>/g, ' ').match(/[0-9]+(?:[.,][0-9]+)*/g) ?? []).sort();
}

export function validateTranslation(source, translation, { now = Date.now } = {}) {
  const problems = [];
  const fail = (code, message, blockId = null) => problems.push({ code, message, ...(blockId ? { blockId } : {}) });
  const object = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

  if (!object(source) || !object(translation)) {
    fail('INVALID_DOCUMENT', 'Source and translation must be JSON objects.');
    return problems;
  }
  if (source.schemaVersion !== 1 || translation.schemaVersion !== 1) {
    fail('SCHEMA_VERSION', 'Both documents must use schemaVersion: 1.');
  }
  if (source.sourceLocale !== 'en') fail('SOURCE_LOCALE', 'Source locale must be en.');
  if (typeof source.sourcePath !== 'string' || !SOURCE_PATH.test(source.sourcePath) || DOT_SEGMENT.test(source.sourcePath)) {
    fail('SOURCE_PATH', 'Source path must be an absolute site path without query or fragment.');
  }
  if (translation.sourcePath !== source.sourcePath) fail('SOURCE_PATH_MISMATCH', 'Translation sourcePath differs from source.');
  if (!LOCALES.includes(translation.locale)) fail('LOCALE', 'Unsupported target locale.');
  if (!STATUSES.includes(translation.status)) fail('STATUS', 'Unsupported review status.');
  if (typeof translation.glossaryVersion !== 'string' || !translation.glossaryVersion.trim()) {
    fail('GLOSSARY_VERSION', 'Translation must state which glossaryVersion was used.');
  }
  if (['reviewed', 'approved'].includes(translation.status) &&
      (typeof translation.reviewedBy !== 'string' || !translation.reviewedBy.trim())) {
    fail('REVIEW_MISSING', 'reviewed and approved require a named human reviewer.');
  }
  if (translation.status === 'approved') {
    const approvedAt = typeof translation.approvedAt === 'string' ? translation.approvedAt : '';
    const time = Date.parse(approvedAt);
    if (!ISO_DATE_TIME.test(approvedAt) || Number.isNaN(time)) {
      fail('APPROVAL_MISSING', 'approved requires an ISO 8601 approvedAt timestamp with a time zone.');
    } else if (time > now() + CLOCK_SKEW_MS) {
      fail('APPROVAL_IN_FUTURE', 'approvedAt must not be in the future.');
    }
  }
  if (!Array.isArray(source.blocks) || source.blocks.length === 0) {
    fail('SOURCE_BLOCKS', 'Source blocks must be a non-empty array.');
    return problems;
  }
  if (!Array.isArray(translation.blocks) || translation.blocks.length === 0) {
    fail('TRANSLATION_BLOCKS', 'Translation blocks must be a non-empty array.');
    return problems;
  }

  const sourceBlocks = new Map();
  for (const block of source.blocks) {
    if (!object(block) || typeof block.id !== 'string' || !BLOCK_ID.test(block.id) || typeof block.html !== 'string' || !block.html.trim()) {
      fail('INVALID_SOURCE_BLOCK', 'Source blocks need unique stable id and non-empty html.');
      continue;
    }
    if (sourceBlocks.has(block.id)) fail('DUPLICATE_SOURCE_ID', `Duplicate source block: ${block.id}`, block.id);
    sourceBlocks.set(block.id, block);
  }
  const translationIds = new Set();
  for (const block of translation.blocks) {
    if (!object(block) || typeof block.id !== 'string' || !BLOCK_ID.test(block.id) || typeof block.html !== 'string' || !block.html.trim()) {
      fail('INVALID_TRANSLATION_BLOCK', 'Translation blocks need stable id and non-empty html.');
      continue;
    }
    if (translationIds.has(block.id)) fail('DUPLICATE_TRANSLATION_ID', `Duplicate translation block: ${block.id}`, block.id);
    translationIds.add(block.id);
    const original = sourceBlocks.get(block.id);
    if (!original) {
      fail('UNKNOWN_BLOCK', `No matching source block: ${block.id}`, block.id);
      continue;
    }
    if (typeof block.sourceHash !== 'string' || block.sourceHash !== sourceHash(original.html)) {
      fail('STALE_SOURCE', `Translation block does not match current English source: ${block.id}`, block.id);
    }
    const sourceTags = parseTags(original.html);
    const targetTags = parseTags(block.html);
    if (unsafeMarkup(block.html, targetTags)) {
      fail('UNSAFE_HTML', `Potentially unsafe HTML in translation: ${block.id}`, block.id);
    }
    const left = structureCounts(sourceTags);
    const right = structureCounts(targetTags);
    for (const tag of new Set([...left.keys(), ...right.keys()])) {
      if ((left.get(tag) ?? 0) !== (right.get(tag) ?? 0)) {
        fail('TAG_STRUCTURE', `Markup or attribute set changed (${tag}): ${block.id}`, block.id);
      }
    }
    if (JSON.stringify(hrefs(sourceTags)) !== JSON.stringify(hrefs(targetTags))) {
      fail('LINK_TARGET', `Link destination changed: ${block.id}`, block.id);
    }
    if (JSON.stringify(visibleNumbers(original.html)) !== JSON.stringify(visibleNumbers(block.html))) {
      fail('NUMBER_REVIEW', `Number format/content changed; human review required: ${block.id}`, block.id);
    }
  }
  for (const id of sourceBlocks.keys()) {
    if (!translationIds.has(id)) fail('MISSING_BLOCK', `Missing translated block: ${id}`, id);
  }
  return problems;
}

function cli(argv) {
  if (argv.length !== 2) {
    console.error('Usage: node scripts/i18n/check.mjs <source.json> <translation.json>');
    process.exitCode = 2;
    return;
  }
  try {
    const source = JSON.parse(readFileSync(argv[0], 'utf8'));
    const translation = JSON.parse(readFileSync(argv[1], 'utf8'));
    const issues = validateTranslation(source, translation);
    for (const issue of issues) console.error(`[${issue.code}] ${issue.message}`);
    if (issues.length) {
      console.error(`FAILED: ${issues.length} issue(s). No translation approval or publication performed.`);
      process.exitCode = 1;
    } else {
      console.log('PASS: file contract and structural checks only. Semantic/native review and SEO approval are still required.');
    }
  } catch (error) {
    console.error(`FAILED: unable to read or parse JSON (${error.message}).`);
    process.exitCode = 2;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) cli(process.argv.slice(2));
