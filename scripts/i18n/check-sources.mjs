#!/usr/bin/env node
/**
 * HAEMIL i18n — English source freshness check (offline developer tool).
 *
 * For every stored schemaVersion 2 English source JSON
 * (content/translations/source/<site path>.json) this re-extracts the English
 * page named in its `sourceFile` with the existing extractor
 * (scripts/i18n/extract.mjs, reused unchanged, with `previous` set to the stored
 * JSON so unit IDs are kept) and compares the result with the stored JSON.
 *
 * It only reads files. It never writes the source JSON, the page or any
 * translation, and it does not change catalog state (`sourceFreshness`).
 * It is a Node tool only; Next.js pages must not import it.
 *
 * Results
 *   MATCH       the page still produces the stored units, structure and metadata
 *               (presentation-only edits such as class names are listed separately)
 *   CHANGED     meaningful content or structure differs; lists the units to review
 *   UNVERIFIED  the page uses content the extractor cannot evaluate statically
 *               (dynamic expressions, imported data or components), or a different
 *               extractor version; a match cannot be confirmed automatically
 *   ERROR       the check could not run (missing or invalid file, bad path,
 *               extraction failure)
 *
 * Usage
 *   node scripts/i18n/check-sources.mjs [--repo <dir>] [--json] [source.json ...]
 *   node scripts/i18n/check-sources.mjs --write-record [--record <file>] [--repo <dir>]
 * Exit code: 0 all MATCH, 1 any CHANGED or ERROR, 2 otherwise UNVERIFIED.
 *
 * --write-record (explicit only) writes the results of a full run to
 * content/i18n/source-freshness.json (or --record <file> under content/i18n/):
 * exact SHA-256 of the stored source JSON and of the page file at check time,
 * plus the SHA-256 of the checker and extractor code that ran and the
 * TypeScript version. Sorted, no timestamps, so the same input gives the same
 * bytes. The catalog reads it to set `sourceFreshness`. A MATCH record covers
 * the translation extraction only (units, structure, metadata); JSON-LD
 * content is listed under `notCompared`. It is not a translation, publishing
 * or indexing approval.
 *
 * Details: docs/i18n/source-freshness.md
 */
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { EXTRACTOR_VERSION, extractFromTsx } from './extract.mjs';

export const STATUS = Object.freeze({ MATCH: 'MATCH', CHANGED: 'CHANGED', UNVERIFIED: 'UNVERIFIED', ERROR: 'ERROR' });

const SOURCE_DIR = path.join('content', 'translations', 'source');
const TRANSLATIONS_DIR = path.join('content', 'translations');
const SEGMENT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
// Attributes that only change presentation. The extractor already leaves them
// out of unit hashes; here they are separated from meaningful structure changes.
const PRESENTATION_ATTRIBUTES = new Set(['className', 'style']);
// Unit fields that carry the translatable content (the hash covers tag, text and
// meaningful attributes; the others decide whether and how it is translated).
const CONTENT_FIELDS = ['kind', 'tag', 'text', 'hash', 'attrs', 'placeholders', 'translate', 'protect'];
// Unit fields that describe where the unit sits on the page.
const POSITION_FIELDS = ['anchor', 'group', 'path', 'origin', 'inArticle'];
// Imports that are page chrome or framework code, not article content.
const ALLOWED_IMPORT_MODULES = new Set(['next', 'next/link', 'next/navigation', 'react']);
const ALLOWED_IMPORT_COMPONENTS = new Set(['SiteHeader', 'JsonLd']);
/**
 * Shared article components whose output is fixed by the component file and
 * whose page-specific content comes only from static props that the extractor
 * stores (translatable props such as alt become units; the others are compared
 * as structure). A component is trusted only when:
 * - it is a default import under exactly this name from exactly `file`;
 * - every use passes only the allowed props, as static values (`checkUse`);
 * - the component file has exactly the reviewed bytes (`sha256`).
 * Otherwise the page stays UNVERIFIED. The record stores the component file's
 * hash in the entry of each page that uses it, so a later change to the file
 * affects only those pages (see lib/i18n/catalog.ts). Any edit to the file
 * needs a review of the component and an update of `sha256` here, then a new
 * record (docs/i18n/source-freshness.md, "Shared components").
 */
const PHOTO_SRC = /^\/images\/[a-z0-9][a-z0-9/_-]*\.(?:webp|jpe?g|png|avif)$/;
const PHOTO_LAYOUTS = new Set(['single', 'pair', 'cover']);
const PHOTO_PROPS = new Set(['src', 'alt', 'width', 'height', 'layout']);
export const TRUSTED_COMPONENTS = Object.freeze({
  ArticlePhoto: Object.freeze({
    file: 'components/ArticlePhoto.tsx',
    sha256: 'sha256:794a83a1c8058116967978e319a0206783a9fec7d1f9fd17317af682bcb2fb03',
    checkUse: articlePhotoProblems,
  }),
});

/** Problems with one <ArticlePhoto> node of an extracted structure (empty when it only has static, allowed props). */
export function articlePhotoProblems(node) {
  const attrs = node?.attrs ?? {};
  const problems = [];
  for (const name of Object.keys(attrs)) if (!PHOTO_PROPS.has(name)) problems.push(`prop ${name} is not allowed`);
  if (typeof attrs.src !== 'string' || !PHOTO_SRC.test(attrs.src)) problems.push('src must be a static /images/ path');
  if (typeof attrs.alt !== 'string' || !attrs.alt.trim() || typeof node?.attributeUnits?.alt !== 'string') problems.push('alt must be static text');
  for (const name of ['width', 'height']) {
    if (!Number.isInteger(attrs[name]) || attrs[name] <= 0) problems.push(`${name} must be a static positive integer`);
  }
  if (attrs.layout !== undefined && !(typeof attrs.layout === 'string' && PHOTO_LAYOUTS.has(attrs.layout))) problems.push('layout must be single, pair or cover');
  return problems;
}

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const toPosix = (p) => p.split(path.sep).join('/');
const stable = (value) => JSON.stringify(value, (_key, v) => (v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b))) : v));
const same = (a, b) => stable(a) === stable(b);

/** Site path check (same rule as the catalog): "/kpop/what-is-maknae". */
export function checkSitePath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.length > 300) return null;
  const segments = value.slice(1).split('/');
  return segments.length && segments.length <= 8 && segments.every((s) => SEGMENT.test(s)) ? value : null;
}

/** Site path served by an App Router page file, e.g. app/kpop/x/page.tsx → /kpop/x. Route groups are skipped. */
export function routeOfPageFile(file) {
  const parts = toPosix(file).split('/');
  if (parts[0] !== 'app' || parts.at(-1) !== 'page.tsx') return null;
  const segments = parts.slice(1, -1).filter((s) => !(s.startsWith('(') && s.endsWith(')')));
  return `/${segments.join('/')}`;
}

/** Regular file inside root (no symlinks, no escape), or null. */
function safeFile(root, relative) {
  if (typeof relative !== 'string' || !relative || path.isAbsolute(relative) || relative.includes('\\')) return null;
  const full = path.resolve(root, relative);
  const rel = path.relative(root, full);
  if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) return null;
  // Every path component must exist and none may be a symbolic link.
  let current = root;
  for (const part of rel.split(path.sep)) {
    current = path.join(current, part);
    let stat;
    try { stat = lstatSync(current); } catch { return null; }
    if (stat.isSymbolicLink()) return null;
  }
  return lstatSync(full).isFile() ? full : null;
}

function withoutPresentation(node) {
  if (Array.isArray(node)) return node.map(withoutPresentation);
  if (!node || typeof node !== 'object') return node;
  const out = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === 'attrs' && value && typeof value === 'object') {
      out.attrs = Object.fromEntries(Object.entries(value).filter(([name]) => !PRESENTATION_ATTRIBUTES.has(name)));
    } else out[key] = withoutPresentation(value);
  }
  return out;
}

/** Review notes without line numbers (moving code must not count as a change). */
const reviewKey = (note) => `${note.where} :: ${note.reason}`;

/**
 * Notes for intentionally untranslated JSON-LD: the JsonLd component and its
 * dynamic `data` attribute on the same line.
 */
function splitReview(review) {
  const jsonLdLines = new Set(review.filter((n) => String(n.where).includes('JsonLd')).map((n) => n.line));
  const jsonLd = [];
  const other = [];
  for (const note of review) {
    const isJsonLd = String(note.where).includes('JsonLd') ||
      (note.reason === 'attribute data is dynamic and was locked as an expression' && jsonLdLines.has(note.line));
    (isJsonLd ? jsonLd : other).push(note);
  }
  return { jsonLd, other };
}

/** Repository path a relative module specifier points to (from the page file), or null. */
function importedPath(fileName, moduleName) {
  if (!/^\.\.?\//.test(moduleName)) return null;
  const joined = path.posix.normalize(path.posix.join(path.posix.dirname(toPosix(fileName)), moduleName));
  return joined.startsWith('../') ? null : joined;
}

/** Name of the trusted component this import is, or null. */
function trustedComponentOf(name, info, fileName) {
  const trusted = Object.hasOwn(TRUSTED_COMPONENTS, name) ? TRUSTED_COMPONENTS[name] : null;
  if (!trusted || !info.isDefault) return null;
  const target = importedPath(fileName, info.module);
  return target === trusted.file || target === trusted.file.replace(/\.tsx$/, '') ? name : null;
}

/** Non-type imports of a page and whether the page body uses them. */
function scanImports(code, fileName) {
  const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const imported = new Map();
  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || statement.importClause?.isTypeOnly) continue;
    const moduleName = statement.moduleSpecifier.text;
    const clause = statement.importClause;
    const names = [];
    if (clause?.name) names.push([clause.name.text, true]);
    if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) {
      for (const element of clause.namedBindings.elements) if (!element.isTypeOnly) names.push([element.name.text, false]);
    } else if (clause?.namedBindings && ts.isNamespaceImport(clause.namedBindings)) {
      names.push([clause.namedBindings.name.text, false]);
    }
    if (!clause) imported.set(`(side effect) ${moduleName}`, { module: moduleName, used: true, isDefault: false });
    for (const [name, isDefault] of names) imported.set(name, { module: moduleName, used: false, isDefault });
  }
  const visit = (node) => {
    if (ts.isImportDeclaration(node)) return;
    if (ts.isIdentifier(node) && imported.has(node.text)) {
      const parent = node.parent;
      const isTypePosition = parent && (ts.isTypeReferenceNode(parent) || ts.isTypeQueryNode(parent));
      if (!isTypePosition) imported.get(node.text).used = true;
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return [...imported.entries()].filter(([, info]) => info.used);
}

/** Imported bindings that the page body uses, other than framework, page chrome and trusted components. */
export function contentImports(code, fileName) {
  return scanImports(code, fileName)
    .filter(([name, info]) => !ALLOWED_IMPORT_MODULES.has(info.module) && !ALLOWED_IMPORT_COMPONENTS.has(name) && !trustedComponentOf(name, info, fileName))
    .map(([name, info]) => ({ name, module: info.module }));
}

/** Trusted components (TRUSTED_COMPONENTS) that the page imports correctly and uses. */
export function trustedComponentImports(code, fileName) {
  return scanImports(code, fileName)
    .map(([name, info]) => trustedComponentOf(name, info, fileName))
    .filter(Boolean);
}

function componentNodes(node, out = []) {
  if (!node || typeof node !== 'object') return out;
  if (typeof node.component === 'string') out.push(node);
  for (const child of node.children ?? []) componentNodes(child, out);
  return out;
}

/**
 * Check the trusted components of a page: correct import for every use,
 * allowed static props, reviewed component bytes. Returns the problems and,
 * for the record, the hashes of the component files the page uses.
 */
export function checkTrustedComponents(root, code, fileName, structure) {
  const imported = new Set(trustedComponentImports(code, fileName));
  const nodes = componentNodes(structure).filter((n) => Object.hasOwn(TRUSTED_COMPONENTS, n.component));
  const used = [...new Set([...imported, ...nodes.map((n) => n.component)])].sort();
  const problems = [];
  const components = [];
  for (const name of used) {
    const trusted = TRUSTED_COMPONENTS[name];
    const uses = nodes.filter((n) => n.component === name);
    if (!imported.has(name)) {
      problems.push(`<${name}> is not the default import of ${trusted.file}; its content is not checked`);
      continue;
    }
    uses.forEach((node, i) => {
      for (const problem of trusted.checkUse(node)) problems.push(`<${name}> #${i + 1}: ${problem}`);
    });
    const file = safeFile(root, trusted.file);
    if (!file) {
      problems.push(`${trusted.file} not found (or a symbolic link / outside the repository)`);
      continue;
    }
    const hash = `sha256:${sha256(readFileSync(file))}`;
    if (hash !== trusted.sha256) problems.push(`${trusted.file} differs from the reviewed version; review it and update TRUSTED_COMPONENTS`);
    components.push({ path: trusted.file, sha256: hash });
  }
  return { problems, components };
}

/** Translation files that exist for a site path, with the unit IDs they translate. */
function translationsFor(repo, sitePath) {
  const base = path.join(repo, TRANSLATIONS_DIR);
  let locales = [];
  try { locales = readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory() && d.name !== 'source').map((d) => d.name); } catch { return []; }
  const out = [];
  for (const locale of locales.sort()) {
    const file = safeFile(repo, toPosix(path.join(TRANSLATIONS_DIR, locale, ...sitePath.slice(1).split('/'))) + '.json');
    if (!file) continue;
    try {
      const doc = JSON.parse(readFileSync(file, 'utf8'));
      out.push({ locale, file: toPosix(path.relative(repo, file)), unitIds: new Set((doc.units ?? []).map((u) => u.id)) });
    } catch {
      out.push({ locale, file: toPosix(path.relative(repo, file)), unitIds: new Set(), unreadable: true });
    }
  }
  return out;
}

/**
 * Compare a stored source document with a fresh extraction of the same page.
 * Returns the differences, grouped by meaning.
 */
export function compareSources(stored, fresh) {
  const storedById = new Map(stored.units.map((u) => [u.id, u]));
  const freshById = new Map(fresh.units.map((u) => [u.id, u]));
  const removed = stored.units.filter((u) => !freshById.has(u.id)).map((u) => u.id);
  const added = fresh.units.filter((u) => !storedById.has(u.id)).map((u) => u.id);
  const contentChanged = [];
  const moved = [];
  for (const unit of stored.units) {
    const next = freshById.get(unit.id);
    if (!next) continue;
    const fields = CONTENT_FIELDS.filter((f) => !same(unit[f], next[f]));
    if (fields.length) contentChanged.push({ id: unit.id, fields, before: unit.text, after: next.text });
    else if (POSITION_FIELDS.some((f) => !same(unit[f], next[f]))) moved.push(unit.id);
  }
  const unitOrderChanged = !same(stored.units.map((u) => u.id).filter((id) => freshById.has(id)), fresh.units.map((u) => u.id).filter((id) => storedById.has(id)));
  const structureChanged = !same(withoutPresentation(stored.structure), withoutPresentation(fresh.structure));
  const presentationChanged = !structureChanged && !same(stored.structure, fresh.structure);
  const header = ['schemaVersion', 'sourceLocale', 'sourcePath', 'sourceFile'].filter((k) => !same(stored[k], fresh[k]));
  return { removed, added, contentChanged, moved, unitOrderChanged, structureChanged, presentationChanged, header };
}

/**
 * Check one stored source JSON (path relative to the repository root or absolute
 * inside it). Never throws for bad data; problems become ERROR results.
 */
export function checkSourceFile(repo, sourceJson) {
  const root = path.resolve(repo);
  const relJson = toPosix(path.isAbsolute(sourceJson) ? path.relative(root, sourceJson) : sourceJson);
  const result = {
    file: relJson, sourcePath: null, sourceFile: null, status: STATUS.ERROR, reasons: [], review: {}, details: null,
    extractorVersion: EXTRACTOR_VERSION,
    // "sha256:<hex>" of the exact bytes read during this check.
    hashes: { sourceJson: null, page: null },
  };
  const fail = (reason) => { result.status = STATUS.ERROR; result.reasons.push(reason); return result; };

  const jsonFile = safeFile(root, relJson);
  if (!jsonFile) return fail('source JSON not found (or a symbolic link / outside the repository)');
  let stored;
  const jsonBytes = readFileSync(jsonFile);
  result.hashes.sourceJson = `sha256:${sha256(jsonBytes)}`;
  try { stored = JSON.parse(jsonBytes.toString('utf8')); } catch { return fail('source JSON could not be parsed'); }
  if (!stored || typeof stored !== 'object' || !Array.isArray(stored.units) || stored.schemaVersion !== 2) return fail('source JSON is not a schemaVersion 2 document');

  const sitePath = checkSitePath(stored.sourcePath);
  result.sourcePath = typeof stored.sourcePath === 'string' ? stored.sourcePath : null;
  if (!sitePath) return fail('sourcePath is not a valid site path');
  const expectedJson = toPosix(path.join(SOURCE_DIR, ...sitePath.slice(1).split('/'))) + '.json';
  if (relJson !== expectedJson) return fail(`file location does not match sourcePath (expected ${expectedJson})`);

  result.sourceFile = typeof stored.sourceFile === 'string' ? stored.sourceFile : null;
  const route = routeOfPageFile(stored.sourceFile ?? '');
  if (!route) return fail('sourceFile is not an app/**/page.tsx path');
  if (route !== sitePath) return fail(`sourceFile serves ${route}, not ${sitePath}`);
  const pageFile = safeFile(root, stored.sourceFile);
  if (!pageFile) return fail('English page file not found (or a symbolic link / outside the repository)');

  const pageBytes = readFileSync(pageFile);
  result.hashes.page = `sha256:${sha256(pageBytes)}`;
  const code = pageBytes.toString('utf8');
  let fresh;
  try {
    fresh = extractFromTsx(code, { fileName: stored.sourceFile, sourcePath: sitePath, previous: stored });
  } catch (error) {
    return fail(`extraction failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  const parseErrors = fresh.review.filter((n) => String(n.reason).startsWith('TypeScript parse error'));
  if (parseErrors.length) return fail(`extraction failed: ${parseErrors[0].reason}`);

  const diff = compareSources(stored, fresh);
  const storedReview = splitReview(stored.review ?? []);
  const freshReview = splitReview(fresh.review ?? []);
  const storedOther = new Set(storedReview.other.map(reviewKey));
  const newNotes = freshReview.other.filter((n) => !storedOther.has(reviewKey(n)) && !String(n.reason).startsWith('ambiguous ID match'));
  const imports = contentImports(code, stored.sourceFile);
  const trusted = checkTrustedComponents(root, code, stored.sourceFile, fresh.structure);
  result.components = trusted.components;
  result.review = {
    jsonLd: freshReview.jsonLd.map((n) => `${n.where}: ${n.reason}`),
    dynamic: freshReview.other.filter((n) => !String(n.reason).startsWith('ambiguous ID match')).map((n) => `line ${n.line} ${n.where}: ${n.reason}`),
    newSinceStored: newNotes.map((n) => `line ${n.line} ${n.where}: ${n.reason}`),
    ambiguousIds: fresh.review.filter((n) => String(n.reason).startsWith('ambiguous ID match')).map((n) => `${n.where}: ${n.reason}`),
    imports,
    components: trusted.problems,
  };

  const changed = diff.header.length || diff.removed.length || diff.added.length || diff.contentChanged.length ||
    diff.moved.length || diff.unitOrderChanged || diff.structureChanged;
  const translations = translationsFor(root, sitePath);
  const affectedIds = [...diff.contentChanged.map((c) => c.id), ...diff.removed];
  result.details = {
    units: { stored: stored.units.length, current: fresh.units.length },
    ...diff,
    reviewUnits: {
      retranslate: diff.contentChanged.map((c) => c.id),
      translateNew: diff.added,
      dropTranslation: diff.removed,
    },
    translations: translations.map((t) => ({
      locale: t.locale,
      file: t.file,
      affectedUnits: affectedIds.filter((id) => t.unitIds.has(id)),
      ...(t.unreadable ? { unreadable: true } : {}),
    })),
    pageSha256: result.hashes.page,
  };

  if (stored.extractor !== EXTRACTOR_VERSION) {
    result.reasons.push(`stored JSON was made by ${stored.extractor ?? 'an unknown extractor'}, checker uses ${EXTRACTOR_VERSION}`);
  }
  if (changed) {
    result.status = STATUS.CHANGED;
    if (diff.contentChanged.length) result.reasons.push(`${diff.contentChanged.length} unit(s) changed text or meaningful attributes`);
    if (diff.added.length) result.reasons.push(`${diff.added.length} new unit(s)`);
    if (diff.removed.length) result.reasons.push(`${diff.removed.length} unit(s) no longer on the page`);
    if (diff.moved.length || diff.unitOrderChanged) result.reasons.push('units moved or reordered');
    if (diff.structureChanged) result.reasons.push('page structure changed (elements, links, components or attributes other than class/style)');
    if (diff.header.length) result.reasons.push(`header fields differ: ${diff.header.join(', ')}`);
    if (!diff.contentChanged.length && !diff.added.length && !diff.removed.length) {
      result.reasons.push('no translated text changed: re-extract the source JSON; existing translations keep their units');
    }
  } else if (stored.extractor !== EXTRACTOR_VERSION || newNotes.length || imports.length || trusted.problems.length) {
    result.status = STATUS.UNVERIFIED;
    if (newNotes.length) result.reasons.push(`${newNotes.length} new dynamic or unchecked part(s) on the page`);
    if (imports.length) result.reasons.push(`page uses imported ${imports.map((i) => `${i.name} (${i.module})`).join(', ')}; their content is not checked`);
    result.reasons.push(...trusted.problems);
  } else {
    result.status = STATUS.MATCH;
  }
  if (diff.presentationChanged) result.reasons.push('presentation-only changes (class/style): re-extract the source JSON; translations stay valid');
  if (freshReview.jsonLd.length) {
    // Not an exception that hides changes: the stored JSON has no baseline for
    // JSON-LD, so its content cannot be compared. Translated pages omit JSON-LD.
    result.reasons.push('JSON-LD content not compared (no stored baseline; translated pages do not render JSON-LD)');
  }
  if (storedReview.other.length) {
    // Dynamic parts that were already present when the JSON was stored.
    result.reasons.push(`${storedReview.other.length} dynamic part(s) already noted in the stored JSON (not compared)`);
    if (result.status === STATUS.MATCH) result.status = STATUS.UNVERIFIED;
  }
  return result;
}

/** All stored source JSON files below content/translations/source. */
export function listSourceFiles(repo) {
  const root = path.resolve(repo);
  const base = path.join(root, SOURCE_DIR);
  const files = [];
  const walk = (dir, depth) => {
    if (depth > 8) return;
    let items = [];
    try { items = readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const item of items.sort((a, b) => a.name.localeCompare(b.name))) {
      const full = path.join(dir, item.name);
      if (item.isSymbolicLink()) continue;
      if (item.isDirectory()) walk(full, depth + 1);
      else if (item.isFile() && item.name.endsWith('.json')) files.push(toPosix(path.relative(root, full)));
    }
  };
  if (existsSync(base)) walk(base, 0);
  return files;
}

export function checkAll(repo, files = null) {
  const list = files?.length ? files : listSourceFiles(repo);
  return list.map((file) => checkSourceFile(repo, file));
}

// ---------------------------------------------------------------------------
// Freshness record (written only with --write-record)
// ---------------------------------------------------------------------------

export const RECORD_SCHEMA_VERSION = 2;
export const RECORD_GENERATOR = 'scripts/i18n/check-sources.mjs';
const RECORD_DIR = 'content/i18n';
export const DEFAULT_RECORD_FILE = path.join('content', 'i18n', 'source-freshness.json');

/**
 * Code a record is bound to (repository-relative path → module that ran).
 * A change to either file, even one that keeps EXTRACTOR_VERSION, makes the
 * catalog reject the record until the checker is run again.
 */
const TOOL_FILES = Object.freeze([
  ['scripts/i18n/check-sources.mjs', new URL(import.meta.url)],
  ['scripts/i18n/extract.mjs', new URL('./extract.mjs', import.meta.url)],
]);

/** Exact SHA-256 of the checker and extractor code that is running, and the TypeScript version. */
export function toolIdentity() {
  return {
    files: TOOL_FILES.map(([file, url]) => ({ path: file, sha256: `sha256:${sha256(readFileSync(url))}` })),
    parser: `typescript@${ts.version}`,
  };
}

/**
 * Record for a full run. Entries are sorted by sourcePath and keys are in a
 * fixed order; there is no timestamp, so the same input gives the same bytes.
 * Results without a valid sourcePath cannot be matched to a page and are left out.
 */
export function buildRecord(results, tools = toolIdentity()) {
  const entries = results
    .filter((r) => checkSitePath(r.sourcePath))
    .map((r) => ({
      sourcePath: r.sourcePath,
      sourceFile: typeof r.sourceFile === 'string' ? r.sourceFile : null,
      sourceJson: r.file,
      status: r.status,
      extractorVersion: r.extractorVersion,
      sourceJsonSha256: r.hashes?.sourceJson ?? null,
      pageSha256: r.hashes?.page ?? null,
      // Only for pages that use a trusted shared component (TRUSTED_COMPONENTS).
      ...(r.components?.length ? { components: r.components.map((c) => ({ path: c.path, sha256: c.sha256 })) } : {}),
      notCompared: r.review?.jsonLd?.length ? ['json-ld'] : [],
    }))
    .sort((a, b) => (a.sourcePath < b.sourcePath ? -1 : a.sourcePath > b.sourcePath ? 1 : a.sourceJson < b.sourceJson ? -1 : 1));
  return {
    schemaVersion: RECORD_SCHEMA_VERSION,
    generator: RECORD_GENERATOR,
    extractorVersion: EXTRACTOR_VERSION,
    tools: { files: tools.files.map((t) => ({ path: t.path, sha256: t.sha256 })), parser: tools.parser },
    note: 'MATCH covers the translation extraction (units, structure, metadata) only; see notCompared. Not a translation, publishing or indexing approval.',
    entries,
  };
}

export function serializeRecord(record) {
  return `${JSON.stringify(record, null, 2)}\n`;
}

/** An existing file may only be replaced when it is a record written by this tool. */
function isRecordFile(file) {
  try {
    const doc = JSON.parse(readFileSync(file, 'utf8'));
    return Boolean(doc) && typeof doc === 'object' && doc.generator === RECORD_GENERATOR && Array.isArray(doc.entries);
  } catch {
    return false;
  }
}

/**
 * Where a record may be written: a .json file under content/i18n/ of the
 * repository (so never a translation, a source JSON, a page or another config
 * file). No folder on the way and not the file itself may be a symbolic link,
 * and an existing file is replaced only if it is a record. The repository
 * folder itself (--repo) is trusted. Returns the absolute path, or throws.
 */
export function recordTarget(repo, file = DEFAULT_RECORD_FILE) {
  if (typeof file !== 'string' || !file) throw new Error('record path is missing');
  const root = path.resolve(repo);
  const target = path.resolve(root, file);
  const rel = toPosix(path.relative(root, target));
  if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) throw new Error('record must be inside the repository');
  if (!rel.startsWith(`${RECORD_DIR}/`) || !rel.endsWith('.json')) throw new Error(`record must be a .json file under ${RECORD_DIR}/`);
  const parts = rel.split('/');
  let current = root;
  for (let i = 0; i < parts.length; i += 1) {
    current = path.join(current, parts[i]);
    let stat;
    try {
      stat = lstatSync(current);
    } catch (error) {
      if (error?.code === 'ENOENT') break; // the rest does not exist yet
      throw error;
    }
    const shown = parts.slice(0, i + 1).join('/');
    if (stat.isSymbolicLink()) throw new Error(`record path contains a symbolic link: ${shown}`);
    if (i < parts.length - 1) {
      if (!stat.isDirectory()) throw new Error(`record path goes through a file: ${shown}`);
    } else if (!stat.isFile()) {
      throw new Error('record path is not a regular file');
    } else if (!isRecordFile(current)) {
      throw new Error('an existing file that is not a source freshness record is never overwritten');
    }
  }
  return target;
}

/**
 * Write the record for a full run. Returns the absolute path written.
 * The target is checked before and after creating missing folders, and the
 * file is replaced through a new temporary file in the same folder (a rename
 * never follows a link at the target).
 */
export function writeRecord(repo, results, file = DEFAULT_RECORD_FILE) {
  const bytes = serializeRecord(buildRecord(results));
  const target = recordTarget(repo, file);
  mkdirSync(path.dirname(target), { recursive: true });
  recordTarget(repo, file);
  const temp = path.join(path.dirname(target), `.${path.basename(target)}.${process.pid}.tmp`);
  writeFileSync(temp, bytes, { flag: 'wx' });
  try {
    renameSync(temp, target);
  } catch (error) {
    rmSync(temp, { force: true });
    throw error;
  }
  return target;
}

export function exitCode(results) {
  if (results.some((r) => r.status === STATUS.CHANGED || r.status === STATUS.ERROR)) return 1;
  if (results.some((r) => r.status === STATUS.UNVERIFIED)) return 2;
  return 0;
}

function printText(results, ms) {
  for (const r of results) {
    console.log(`${r.status.padEnd(10)} ${r.sourcePath ?? r.file}`);
    for (const reason of r.reasons) console.log(`  - ${reason}`);
    const d = r.details;
    if (d) {
      console.log(`  units: stored ${d.units.stored}, current ${d.units.current}`);
      for (const c of d.contentChanged) console.log(`  changed ${c.id} [${c.fields.join(', ')}]`);
      for (const id of d.added) console.log(`  new ${id}`);
      for (const id of d.removed) console.log(`  removed ${id}`);
      for (const t of d.translations) if (t.affectedUnits.length || d.added.length) console.log(`  review ${t.locale}: ${t.file} (${t.affectedUnits.length} affected unit(s)${d.added.length ? `, ${d.added.length} new` : ''})`);
    }
    if (r.review?.jsonLd?.length) console.log(`  JSON-LD (not translated, not compared): ${r.review.jsonLd.length} note(s)`);
    for (const note of r.review?.newSinceStored ?? []) console.log(`  unchecked: ${note}`);
    for (const c of r.components ?? []) console.log(`  component: ${c.path} ${c.sha256}`);
    for (const note of r.review?.ambiguousIds ?? []) console.log(`  id: ${note}`);
  }
  const counts = Object.values(STATUS).map((s) => `${s} ${results.filter((r) => r.status === s).length}`).join(', ');
  console.log(`\n${results.length} source file(s): ${counts} (${ms} ms)`);
}

function cli(argv) {
  let repo = process.cwd();
  let json = false;
  let write = false;
  let recordFile = DEFAULT_RECORD_FILE;
  const files = [];
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--repo') repo = argv[++i];
    else if (argv[i] === '--json') json = true;
    else if (argv[i] === '--write-record') write = true;
    else if (argv[i] === '--record') recordFile = argv[++i];
    else files.push(argv[i]);
  }
  if (write) {
    try { recordTarget(repo, recordFile); } catch (error) {
      console.error(`--write-record: ${error.message}`);
      process.exitCode = 1;
      return;
    }
  }
  if (write && files.length) {
    // A partial run would drop the other pages from the record.
    console.error('--write-record needs a full run; do not pass source files.');
    process.exitCode = 1;
    return;
  }
  const started = Date.now();
  const results = checkAll(repo, files);
  const ms = Date.now() - started;
  if (json) console.log(JSON.stringify({ extractor: EXTRACTOR_VERSION, ms, results }, null, 2));
  else printText(results, ms);
  if (write) {
    const target = writeRecord(repo, results, recordFile);
    if (!json) console.log(`record written: ${path.relative(path.resolve(repo), target) || target}`);
  }
  process.exitCode = exitCode(results);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) cli(process.argv.slice(2));
