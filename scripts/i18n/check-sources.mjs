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
 * Exit code: 0 all MATCH, 1 any CHANGED or ERROR, 2 otherwise UNVERIFIED.
 *
 * Details: docs/i18n/source-freshness.md
 */
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs';
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

/** Imported bindings that the page body uses, other than framework and page chrome. */
export function contentImports(code, fileName) {
  const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const imported = new Map();
  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || statement.importClause?.isTypeOnly) continue;
    const moduleName = statement.moduleSpecifier.text;
    const clause = statement.importClause;
    const names = [];
    if (clause?.name) names.push(clause.name.text);
    if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) {
      for (const element of clause.namedBindings.elements) if (!element.isTypeOnly) names.push(element.name.text);
    } else if (clause?.namedBindings && ts.isNamespaceImport(clause.namedBindings)) {
      names.push(clause.namedBindings.name.text);
    }
    if (!clause) imported.set(`(side effect) ${moduleName}`, { module: moduleName, used: true });
    for (const name of names) imported.set(name, { module: moduleName, used: false });
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
  return [...imported.entries()]
    .filter(([name, info]) => info.used && !ALLOWED_IMPORT_MODULES.has(info.module) && !ALLOWED_IMPORT_COMPONENTS.has(name))
    .map(([name, info]) => ({ name, module: info.module }));
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
  const result = { file: relJson, sourcePath: null, sourceFile: null, status: STATUS.ERROR, reasons: [], review: {}, details: null };
  const fail = (reason) => { result.status = STATUS.ERROR; result.reasons.push(reason); return result; };

  const jsonFile = safeFile(root, relJson);
  if (!jsonFile) return fail('source JSON not found (or a symbolic link / outside the repository)');
  let stored;
  try { stored = JSON.parse(readFileSync(jsonFile, 'utf8')); } catch { return fail('source JSON could not be parsed'); }
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

  const code = readFileSync(pageFile, 'utf8');
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
  result.review = {
    jsonLd: freshReview.jsonLd.map((n) => `${n.where}: ${n.reason}`),
    dynamic: freshReview.other.filter((n) => !String(n.reason).startsWith('ambiguous ID match')).map((n) => `line ${n.line} ${n.where}: ${n.reason}`),
    newSinceStored: newNotes.map((n) => `line ${n.line} ${n.where}: ${n.reason}`),
    ambiguousIds: fresh.review.filter((n) => String(n.reason).startsWith('ambiguous ID match')).map((n) => `${n.where}: ${n.reason}`),
    imports,
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
    pageSha256: sha256(code),
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
  } else if (stored.extractor !== EXTRACTOR_VERSION || newNotes.length || imports.length) {
    result.status = STATUS.UNVERIFIED;
    if (newNotes.length) result.reasons.push(`${newNotes.length} new dynamic or unchecked part(s) on the page`);
    if (imports.length) result.reasons.push(`page uses imported ${imports.map((i) => `${i.name} (${i.module})`).join(', ')}; their content is not checked`);
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
    for (const note of r.review?.ambiguousIds ?? []) console.log(`  id: ${note}`);
  }
  const counts = Object.values(STATUS).map((s) => `${s} ${results.filter((r) => r.status === s).length}`).join(', ');
  console.log(`\n${results.length} source file(s): ${counts} (${ms} ms)`);
}

function cli(argv) {
  let repo = process.cwd();
  let json = false;
  const files = [];
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--repo') repo = argv[++i];
    else if (argv[i] === '--json') json = true;
    else files.push(argv[i]);
  }
  const started = Date.now();
  const results = checkAll(repo, files);
  const ms = Date.now() - started;
  if (json) console.log(JSON.stringify({ extractor: EXTRACTOR_VERSION, ms, results }, null, 2));
  else printText(results, ms);
  process.exitCode = exitCode(results);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) cli(process.argv.slice(2));
