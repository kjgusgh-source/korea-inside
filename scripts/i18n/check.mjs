#!/usr/bin/env node
/**
 * HAEMIL i18n contract and structural QA (no API calls or publication side effects).
 * Usage: node scripts/i18n/check.mjs <source.json> <translation.json>
 * Passing this checker does NOT mean that a translation is factually correct,
 * native-reviewed, safe to render as raw HTML, publishable, or eligible for
 * Google indexing.
 */
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const LOCALES = Object.freeze(['ja', 'zh-Hant', 'zh-Hans', 'es', 'ko']);
export const STATUSES = Object.freeze(['draft', 'qa_passed', 'reviewed', 'approved']);
// Attribute values that a translator may change. Every other attribute value
// (href, src, class, width, ...) must stay byte-identical to the English source.
export const TRANSLATABLE_ATTRIBUTES = Object.freeze(['alt', 'title', 'aria-label']);

const BLOCK_ID = /^[A-Za-z0-9][A-Za-z0-9_-]*$/;
// Canonical HAEMIL site paths only: lowercase ASCII slug segments separated by
// single slashes, no trailing slash. Percent-encoding, dot segments, uppercase,
// non-ASCII and empty segments are rejected instead of being normalized.
const SOURCE_PATH = /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/;
// ISO 8601 date-time with an explicit UTC offset, e.g. 2026-10-09T08:00:00Z.
const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/;
const CLOCK_SKEW_MS = 5 * 60 * 1000;

// Elements that are never allowed in a fragment. Many of them also switch the
// browser tokenizer into RAWTEXT/RCDATA/foreign-content modes, which this
// checker deliberately does not model, so tokenizing stops when one is seen.
const FORBIDDEN_ELEMENTS = new Set([
  'script', 'style', 'xmp', 'iframe', 'noembed', 'noframes', 'noscript', 'textarea', 'title', 'plaintext',
  'svg', 'math', 'template', 'frame', 'frameset', 'object', 'embed', 'applet', 'link', 'meta', 'base',
  'form', 'input', 'button', 'select', 'option', 'image',
]);
const UNSAFE_ATTRIBUTES = new Set(['style', 'srcdoc', 'formaction', 'action', 'xmlns', 'xlink:href']);
const WHITESPACE = new Set(['\t', '\n', '\f', '\r', ' ']);

export function sourceHash(html) {
  return createHash('sha256').update(html.normalize('NFC'), 'utf8').digest('hex');
}

const isAsciiAlpha = (c) => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
const asciiLower = (c) => (c >= 'A' && c <= 'Z' ? c.toLowerCase() : c);

/**
 * A deliberately small subset of the WHATWG HTML tokenizer (data, tag open,
 * end tag open, tag name, attribute name/value and self-closing states).
 * It reproduces how browsers split tags and attributes, including quoted ">"
 * characters, attributes glued without whitespace and "/" separators.
 * Anything outside that subset (comments, doctypes, processing instructions,
 * bogus end tags, NUL, EOF inside a tag, raw-text elements, duplicate
 * attributes, attributes on end tags) is reported as an error so callers can
 * fail closed instead of guessing.
 */
export function tokenizeFragment(html) {
  const tokens = [];
  const errors = [];
  let text = '';
  let i = 0;
  const flushText = () => {
    if (text) tokens.push({ type: 'text', value: text });
    text = '';
  };

  while (i < html.length) {
    const c = html[i];
    if (c === '\u0000') return { tokens, errors: [...errors, 'NUL character'] };
    if (c !== '<') {
      text += c;
      i += 1;
      continue;
    }
    const next = html[i + 1];
    if (next === '!') return { tokens, errors: [...errors, 'comment, doctype or CDATA section'] };
    if (next === '?') return { tokens, errors: [...errors, 'processing instruction'] };
    let closing = false;
    let j = i + 1;
    if (next === '/') {
      closing = true;
      j = i + 2;
      if (!isAsciiAlpha(html[j] ?? '')) return { tokens, errors: [...errors, 'bogus or empty end tag'] };
    } else if (!isAsciiAlpha(next ?? '')) {
      text += c; // A bare "<" is text for browsers too.
      i += 1;
      continue;
    }
    flushText();

    const tag = { type: closing ? 'end' : 'start', name: '', attrs: [], selfClosing: false };
    let state = 'tagName';
    let attr = null;
    let emitted = false;
    const startAttr = () => {
      attr = { name: '', value: '' };
      tag.attrs.push(attr);
    };
    const finishAttrName = () => {
      if (attr && tag.attrs.slice(0, -1).some((a) => a.name === attr.name)) {
        errors.push(`duplicate attribute "${attr.name}"`);
      }
    };

    while (j < html.length && !emitted) {
      const ch = html[j];
      if (ch === '\u0000') return { tokens, errors: [...errors, 'NUL character'] };
      switch (state) {
        case 'tagName':
          if (WHITESPACE.has(ch)) state = 'beforeAttrName';
          else if (ch === '/') state = 'selfClosingStart';
          else if (ch === '>') emitted = true;
          else tag.name += asciiLower(ch);
          j += 1;
          break;
        case 'beforeAttrName':
          if (WHITESPACE.has(ch)) {
            j += 1;
          } else if (ch === '/' || ch === '>') {
            state = 'afterAttrName';
          } else if (ch === '=') {
            startAttr();
            attr.name = '=';
            state = 'attrName';
            j += 1;
          } else {
            startAttr();
            state = 'attrName';
          }
          break;
        case 'attrName':
          if (WHITESPACE.has(ch) || ch === '/' || ch === '>') {
            finishAttrName();
            state = 'afterAttrName';
          } else if (ch === '=') {
            finishAttrName();
            state = 'beforeAttrValue';
            j += 1;
          } else {
            attr.name += asciiLower(ch);
            j += 1;
          }
          break;
        case 'afterAttrName':
          if (WHITESPACE.has(ch)) {
            j += 1;
          } else if (ch === '/') {
            state = 'selfClosingStart';
            j += 1;
          } else if (ch === '=') {
            state = 'beforeAttrValue';
            j += 1;
          } else if (ch === '>') {
            emitted = true;
            j += 1;
          } else {
            startAttr();
            state = 'attrName';
          }
          break;
        case 'beforeAttrValue':
          if (WHITESPACE.has(ch)) {
            j += 1;
          } else if (ch === '"') {
            state = 'attrValueDouble';
            j += 1;
          } else if (ch === "'") {
            state = 'attrValueSingle';
            j += 1;
          } else if (ch === '>') {
            emitted = true;
            j += 1;
          } else {
            state = 'attrValueUnquoted';
          }
          break;
        case 'attrValueDouble':
        case 'attrValueSingle':
          if (ch === (state === 'attrValueDouble' ? '"' : "'")) state = 'afterAttrValueQuoted';
          else attr.value += ch;
          j += 1;
          break;
        case 'attrValueUnquoted':
          if (WHITESPACE.has(ch)) state = 'beforeAttrName';
          else if (ch === '>') emitted = true;
          else attr.value += ch;
          j += 1;
          break;
        case 'afterAttrValueQuoted':
          if (WHITESPACE.has(ch)) {
            state = 'beforeAttrName';
            j += 1;
          } else if (ch === '/') {
            state = 'selfClosingStart';
            j += 1;
          } else if (ch === '>') {
            emitted = true;
            j += 1;
          } else {
            state = 'beforeAttrName'; // Missing whitespace: the browser starts a new attribute.
          }
          break;
        case 'selfClosingStart':
          if (ch === '>') {
            tag.selfClosing = true;
            emitted = true;
            j += 1;
          } else {
            state = 'beforeAttrName';
          }
          break;
        default:
          return { tokens, errors: [...errors, `internal tokenizer state ${state}`] };
      }
    }
    if (!emitted) return { tokens, errors: [...errors, `unterminated <${closing ? '/' : ''}${tag.name}> tag`] };
    if (closing && tag.attrs.length) errors.push(`attributes on end tag </${tag.name}>`);
    tokens.push(tag);
    i = j;
    if (!closing && FORBIDDEN_ELEMENTS.has(tag.name)) {
      return { tokens, errors: [...errors, `forbidden element <${tag.name}>`] };
    }
  }
  flushText();
  return { tokens, errors };
}

function decodeReferences(value) {
  return value
    .replace(/&#x([0-9a-f]+);?/gi, (m, hex) => safeCodePoint(Number.parseInt(hex, 16), m))
    .replace(/&#([0-9]+);?/g, (m, dec) => safeCodePoint(Number.parseInt(dec, 10), m))
    .replace(/&colon;/gi, ':')
    .replace(/&(?:tab|newline);/gi, '')
    .replace(/&nbsp;?/gi, ' ')
    .replace(/&amp;?/gi, '&');
}

function safeCodePoint(code, fallback) {
  return Number.isInteger(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : fallback;
}

function hasScriptUrl(value) {
  const normalized = decodeReferences(value).replace(/[\u0000-\u0020\u007f-\u009f]/g, '').toLowerCase();
  return /^(?:javascript|vbscript|data):/.test(normalized);
}

const elementTokens = (tokens) => tokens.filter((t) => t.type !== 'text');

function unsafeReasons(parsed) {
  const reasons = [...parsed.errors];
  for (const tag of elementTokens(parsed.tokens)) {
    for (const { name, value } of tag.attrs) {
      if (name.startsWith('on')) reasons.push(`event handler attribute ${name} on <${tag.name}>`);
      else if (UNSAFE_ATTRIBUTES.has(name)) reasons.push(`unsafe attribute ${name} on <${tag.name}>`);
      if (hasScriptUrl(value)) reasons.push(`script-capable URL in ${name} on <${tag.name}>`);
    }
  }
  return reasons;
}

// Ordered element signature: the browser tree builder is deterministic for a
// given sequence of tag tokens, so an identical sequence (ignoring the
// self-closing flag, which HTML elements ignore) means identical nesting.
function signature(tag) {
  const names = tag.attrs.map((a) => a.name).sort().join(',');
  return tag.type === 'end' ? `</${tag.name}>` : `<${tag.name}[${names}]>`;
}

function orderedHrefs(tokens) {
  return elementTokens(tokens)
    .filter((t) => t.type === 'start' && t.name === 'a')
    .map((t) => t.attrs.find((a) => a.name === 'href')?.value ?? null);
}

function visibleNumbers(tokens) {
  // Structural check only: written-out numbers can be valid translations.
  // Flag them for review rather than silently treating them as equivalent.
  const parts = [];
  for (const token of tokens) {
    if (token.type === 'text') parts.push(decodeReferences(token.value));
    else for (const a of token.attrs) if (TRANSLATABLE_ATTRIBUTES.includes(a.name)) parts.push(decodeReferences(a.value));
  }
  return (parts.join(' ').match(/[0-9]+(?:[.,][0-9]+)*/g) ?? []).sort();
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
  if (typeof source.sourcePath !== 'string' || !SOURCE_PATH.test(source.sourcePath)) {
    fail('SOURCE_PATH', 'Source path must be a canonical lowercase site path (no encoding, dot segments or trailing slash).');
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
    const parsed = tokenizeFragment(block.html);
    const reasons = unsafeReasons(parsed);
    if (reasons.length) fail('SOURCE_MARKUP', `Source block uses unsupported markup (${reasons[0]}): ${block.id}`, block.id);
    sourceBlocks.set(block.id, { ...block, parsed });
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
    const parsed = tokenizeFragment(block.html);
    const reasons = unsafeReasons(parsed);
    if (reasons.length) {
      fail('UNSAFE_HTML', `Potentially unsafe or unsupported HTML in translation (${reasons[0]}): ${block.id}`, block.id);
    }

    const left = elementTokens(original.parsed.tokens);
    const right = elementTokens(parsed.tokens);
    const firstDifference = Array.from({ length: Math.max(left.length, right.length) }, (_, k) => k)
      .find((k) => !left[k] || !right[k] || signature(left[k]) !== signature(right[k]));
    if (firstDifference !== undefined) {
      const expected = left[firstDifference] ? signature(left[firstDifference]) : 'end of block';
      const actual = right[firstDifference] ? signature(right[firstDifference]) : 'end of block';
      fail('TAG_STRUCTURE', `Element order, nesting or attribute set changed at tag ${firstDifference + 1} (expected ${expected}, found ${actual}): ${block.id}`, block.id);
    } else {
      for (let k = 0; k < left.length; k += 1) {
        for (const a of left[k].attrs) {
          if (a.name === 'href' || TRANSLATABLE_ATTRIBUTES.includes(a.name)) continue;
          const translated = right[k].attrs.find((b) => b.name === a.name);
          if (!translated || translated.value !== a.value) {
            fail('ATTRIBUTE_VALUE', `Locked attribute ${a.name} changed on <${left[k].name}>: ${block.id}`, block.id);
          }
        }
      }
    }
    if (JSON.stringify(orderedHrefs(original.parsed.tokens)) !== JSON.stringify(orderedHrefs(parsed.tokens))) {
      fail('LINK_TARGET', `Link destination or order changed: ${block.id}`, block.id);
    }
    if (JSON.stringify(visibleNumbers(original.parsed.tokens)) !== JSON.stringify(visibleNumbers(parsed.tokens))) {
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
      console.log('PASS: file contract and structural checks only. Semantic/native review, render-time sanitizing and SEO approval are still required.');
    }
  } catch (error) {
    console.error(`FAILED: unable to read or parse JSON (${error.message}).`);
    process.exitCode = 2;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) cli(process.argv.slice(2));
