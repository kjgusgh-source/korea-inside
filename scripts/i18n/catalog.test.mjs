#!/usr/bin/env node
/**
 * Tests for lib/i18n/catalog.ts (offline; no network, no API calls).
 *
 *   node --test scripts/i18n/catalog.test.mjs
 *
 * Node 22 strips TypeScript types natively. A small resolve hook lets Node
 * load the TypeScript sources the way Next.js does: extensionless relative
 * imports resolve to ".ts", and "server-only" (provided by Next.js) is
 * replaced by an empty module. Fixtures are written to a temporary folder
 * outside the repository; repository files are only read.
 */
import { register } from 'node:module';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const TYPESCRIPT = pathToFileURL(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'), 'node_modules/typescript/lib/typescript.js')).href;
// Also loads .tsx (compiled with the project's own TypeScript) and Next.js
// subpaths such as "next/navigation", for the route tests at the end.
register('data:text/javascript,' + encodeURIComponent(`
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
let ts;
export async function resolve(specifier, context, next) {
  if (specifier === 'server-only') return { url: 'data:text/javascript,export {}', shortCircuit: true };
  try {
    return await next(specifier, context);
  } catch (error) {
    if (/^next\\/[a-z-]+$/.test(specifier)) return next(specifier + '.js', context);
    if (!/^\\.\\.?\\//.test(specifier) || /\\.[cm]?[jt]sx?$/.test(specifier)) throw error;
    try { return await next(specifier + '.ts', context); } catch { return next(specifier + '.tsx', context); }
  }
}
export async function load(url, context, next) {
  if (url.startsWith('file:') && url.endsWith('.tsx')) {
    ts ??= (await import(${JSON.stringify(TYPESCRIPT)})).default;
    const source = readFileSync(fileURLToPath(url), 'utf8');
    const { outputText } = ts.transpileModule(source, {
      fileName: fileURLToPath(url),
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    });
    return { format: 'module', source: outputText, shortCircuit: true };
  }
  if (url.startsWith('file:') && url.endsWith('.json')) return { ...(await next(url, { ...context, importAttributes: { type: 'json' } })), shortCircuit: true };
  return next(url, context);
}`));

const {
  approvalRecords, catalogDecision, checkSourcePath, clearCatalogCache, getTranslation, isRealDateTime, listTranslations, loadCatalog,
  publishDecision, renderableEntries, resolveEnvironment, routeSegments,
} = await import('../../lib/i18n/catalog.ts');

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const REAL_ROOT = path.join(REPO, 'content/translations');
const PAGE = '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop';
const REL = 'kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json';
const sha = (file) => `sha256:${createHash('sha256').update(readFileSync(file)).digest('hex')}`;
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
const writeJson = (file, value) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`); };
const problems = (entry) => entry.errors.map((e) => e.problem);
const readdirRecursive = (dir) => readdirSync(dir, { recursive: true });

const temps = [];
/**
 * Temporary content/translations holding exactly one page: the real Sunbae
 * source JSON and Japanese translation (other real translations are not
 * copied, so counts inside a fixture never depend on the repository). `edit`
 * may change it.
 */
function fixture(edit = () => {}) {
  const base = mkdtempSync(path.join(tmpdir(), 'haemil-catalog-'));
  temps.push(base);
  const root = path.join(base, 'content', 'translations');
  for (const dir of ['source', 'ja']) {
    mkdirSync(path.dirname(path.join(root, dir, REL)), { recursive: true });
    cpSync(path.join(REAL_ROOT, dir, REL), path.join(root, dir, REL));
  }
  edit(root);
  clearCatalogCache();
  return root;
}
process.on('exit', () => { for (const dir of temps) rmSync(dir, { recursive: true, force: true }); });

/** Same page copied to a second path (source and translation), for isolation tests. */
function addSecondPage(root, slug = 'copy-page') {
  for (const dir of ['source', 'ja']) {
    const doc = readJson(path.join(root, dir, REL));
    doc.sourcePath = `/kpop/${slug}`;
    writeJson(path.join(root, dir, 'kpop', `${slug}.json`), doc);
  }
}

function approvals(entry, kinds = ['quality', 'production', 'indexing'], overrides = {}) {
  return kinds.map((kind) => ({
    kind, locale: entry.locale, sourcePath: entry.sourcePath,
    sourceSha256: entry.files.source.sha256, translationSha256: entry.files.translation.sha256,
    approvedBy: 'owner', approvedAt: '2026-10-12T09:00:00Z', ...overrides,
  }));
}

// ---------------------------------------------------------------------------
// Real repository data
// ---------------------------------------------------------------------------

test('real data: the Japanese Sunbae draft is found and valid, with verified source freshness (committed MATCH record)', () => {
  clearCatalogCache();
  const before = sha(path.join(REAL_ROOT, 'ja', REL));
  const catalog = loadCatalog({ root: REAL_ROOT });
  assert.deepEqual(catalog.issues, []);
  // The repository may hold any number of translations; this test checks the Sunbae one.
  const keys = catalog.entries.map((e) => e.key);
  assert.equal(new Set(keys).size, keys.length, 'each page is registered once per locale');
  const matches = catalog.entries.filter((e) => e.key === `ja:${PAGE}`);
  assert.equal(matches.length, 1);
  const [entry] = matches;
  assert.equal(entry.key, `ja:${PAGE}`);
  assert.equal(entry.locale, 'ja');
  assert.equal(entry.sourcePath, PAGE);
  assert.equal(entry.urlPath, `/ja${PAGE}`);
  assert.equal(entry.status, 'draft');
  assert.equal(entry.validation, 'valid');
  assert.equal(entry.sourceFreshness, 'verified');
  assert.deepEqual(entry.sourceFreshnessDetail, { reason: 'matches the source freshness record', notCompared: ['json-ld'] });
  assert.deepEqual(entry.errors, []);
  assert.equal(entry.files.translation.path, `content/translations/ja/${REL}`);
  assert.equal(entry.files.source.path, `content/translations/source/${REL}`);
  assert.equal(entry.files.translation.sha256, before);
  assert.equal(entry.files.source.sha256, sha(path.join(REAL_ROOT, 'source', REL)));
  assert.equal(entry.englishPageFile, 'app/kpop/what-does-sunbae-and-hoobae-mean-in-kpop/page.tsx');
  assert.deepEqual(routeSegments(entry), ['kpop', 'what-does-sunbae-and-hoobae-mean-in-kpop']);
  const record = getTranslation('ja', PAGE, { root: REAL_ROOT });
  assert.equal(record.entry, entry);
  assert.equal(record.translation.status, 'draft');
  // Reading never changes the file.
  assert.equal(sha(path.join(REAL_ROOT, 'ja', REL)), before);
});

test('real data: publish decisions per environment', () => {
  clearCatalogCache();
  const entry = getTranslation('ja', PAGE, { root: REAL_ROOT }).entry;
  for (const environment of ['preview', 'development']) {
    const d = publishDecision(entry, environment);
    assert.equal(d.render, true, environment);
    assert.equal(d.robots, 'noindex');
    assert.equal(d.listInLanguageMenu, false);
    assert.equal(d.includeInSitemap, false);
  }
  const prod = publishDecision(entry, 'production');
  assert.equal(prod.render, false);
  assert.equal(prod.robots, 'noindex');
  assert.equal(prod.listInLanguageMenu, false);
  assert.equal(prod.includeInSitemap, false);
  for (const reason of ['locale-not-public', 'status-not-approved', 'no-quality-approval', 'no-production-approval']) {
    assert.ok(prod.reasons.includes(reason), reason);
  }
  // Source freshness is verified (committed MATCH record); that alone never allows production.
  assert.ok(!prod.reasons.some((reason) => reason.startsWith('source-freshness')), prod.reasons.join(', '));
  // Every Japanese draft in the repository is blocked in production.
  assert.deepEqual(renderableEntries('ja', 'production', { root: REAL_ROOT }), []);
  // Preview lists exactly the valid Japanese entries with a known status, Sunbae among them.
  const preview = renderableEntries('ja', 'preview', { root: REAL_ROOT }).map((e) => e.key);
  const expected = listTranslations({ root: REAL_ROOT })
    .filter((e) => e.locale === 'ja' && e.validation === 'valid' && e.status !== null)
    .map((e) => e.key);
  assert.deepEqual(preview, expected);
  assert.ok(preview.includes(`ja:${PAGE}`));
});

// ---------------------------------------------------------------------------
// Failures (fixtures outside the repository)
// ---------------------------------------------------------------------------

test('missing English source: entry is invalid', () => {
  const root = fixture((r) => rmSync(path.join(r, 'source', REL)));
  const [entry] = listTranslations({ root });
  assert.equal(entry.validation, 'invalid');
  assert.ok(problems(entry).includes('English source file not found'));
  assert.equal(entry.files.source, null);
  assert.equal(getTranslation('ja', PAGE, { root }).translation, null);
});

test('missing translation: no entry for the page; missing units make the entry stale', () => {
  const root = fixture((r) => {
    addSecondPage(r);
    rmSync(path.join(r, 'ja', 'kpop', 'copy-page.json'));
  });
  assert.equal(getTranslation('ja', '/kpop/copy-page', { root }), undefined);
  assert.equal(listTranslations({ root }).length, 1);

  const root2 = fixture((r) => {
    const file = path.join(r, 'ja', REL);
    const doc = readJson(file);
    doc.units = doc.units.slice(1);
    writeJson(file, doc);
  });
  const [entry] = listTranslations({ root: root2 });
  assert.equal(entry.validation, 'stale');
  assert.ok(problems(entry).includes('missing translation'));
});

test('sourceHash mismatch: stale', () => {
  const root = fixture((r) => {
    const file = path.join(r, 'source', REL);
    const doc = readJson(file);
    const unit = doc.units.find((u) => u.translate);
    unit.hash = '0'.repeat(64);
    writeJson(file, doc);
  });
  const [entry] = listTranslations({ root });
  assert.equal(entry.validation, 'stale');
  assert.ok(problems(entry).includes('sourceHash does not match the English source (stale)'));
  assert.equal(publishDecision(entry, 'preview').render, false);
});

test('damaged placeholder: invalid', () => {
  const root = fixture((r) => {
    const file = path.join(r, 'ja', REL);
    const doc = readJson(file);
    const unit = doc.units.find((u) => u.text.includes('{em1}'));
    unit.text = unit.text.replace('{/em1}', '');
    writeJson(file, doc);
  });
  const [entry] = listTranslations({ root });
  assert.equal(entry.validation, 'invalid');
  assert.ok(problems(entry).some((p) => p.includes('unclosed placeholder') || p.includes('placeholders are missing')));
  assert.equal(publishDecision(entry, 'preview').render, false);
});

test('unsupported locales are rejected and reported', () => {
  const root = fixture((r) => {
    for (const dir of ['zh-hant', 'fr', 'en']) cpSync(path.join(r, 'ja'), path.join(r, dir), { recursive: true });
  });
  const catalog = loadCatalog({ root });
  assert.equal(catalog.entries.length, 1);
  const byId = Object.fromEntries(catalog.issues.map((i) => [i.id, i.problem]));
  assert.match(byId['zh-hant'], /unsupported locale folder; use the locale code "zh-Hant"/);
  assert.match(byId.fr, /unsupported locale folder/);
  assert.match(byId.en, /translations into en are not allowed/);
  assert.equal(getTranslation('fr', PAGE, { root }), undefined);
  assert.equal(getTranslation('zh-hant', PAGE, { root }), undefined);
  assert.equal(getTranslation('en', PAGE, { root }), undefined);
});

test('planned locale with valid data is not rendered in preview', () => {
  const root = fixture((r) => {
    const doc = readJson(path.join(r, 'ja', REL));
    doc.locale = 'zh-Hant';
    writeJson(path.join(r, 'zh-Hant', REL), doc);
  });
  const entry = getTranslation('zh-Hant', PAGE, { root }).entry;
  assert.equal(entry.validation, 'valid');
  assert.equal(entry.urlPath, `/zh-hant${PAGE}`);
  const d = publishDecision(entry, 'preview');
  assert.equal(d.render, false);
  assert.ok(d.reasons.includes('locale-planned'));
});

test('invalid JSON: only that entry is invalid', () => {
  const root = fixture((r) => {
    addSecondPage(r);
    writeFileSync(path.join(r, 'ja', 'kpop', 'copy-page.json'), '{ "schemaVersion": 2, ');
  });
  const broken = getTranslation('ja', '/kpop/copy-page', { root }).entry;
  assert.equal(broken.validation, 'invalid');
  assert.ok(problems(broken).includes('translation JSON could not be parsed'));
  assert.equal(getTranslation('ja', PAGE, { root }).entry.validation, 'valid');
});

test('duplicate registration and duplicate unit IDs are invalid', () => {
  const root = fixture((r) => cpSync(path.join(r, 'ja', REL), path.join(r, 'ja', 'kpop', 'stray-copy.json')));
  const entries = listTranslations({ root });
  assert.equal(entries.length, 2);
  for (const entry of entries) {
    assert.equal(entry.validation, 'invalid');
    assert.ok(problems(entry).some((p) => p.startsWith('more than one translation file registers this page')));
  }
  assert.equal(getTranslation('ja', PAGE, { root }), undefined);

  const root2 = fixture((r) => {
    const file = path.join(r, 'ja', REL);
    const doc = readJson(file);
    doc.units.push({ ...doc.units[0] });
    writeJson(file, doc);
  });
  const [entry] = listTranslations({ root: root2 });
  assert.equal(entry.validation, 'invalid');
  assert.ok(problems(entry).includes('duplicate translation unit'));
});

// ---------------------------------------------------------------------------
// Several translations (fixtures; exact counts are known inside each fixture)
// ---------------------------------------------------------------------------

/** Make the copy at `slug` stale: its stored English source no longer matches the translation. */
function makeStale(root, slug) {
  const file = path.join(root, 'source', 'kpop', `${slug}.json`);
  const doc = readJson(file);
  doc.units.find((u) => u.translate).hash = '0'.repeat(64);
  writeJson(file, doc);
}
const keysOf = (entries) => entries.map((e) => e.key);

test('two valid translations: both in the catalog, both render in preview, neither in production', () => {
  const root = fixture((r) => addSecondPage(r, 'a-second-page'));
  const entries = listTranslations({ root });
  assert.equal(entries.length, 2);
  assert.deepEqual(entries.map((e) => [e.key, e.validation, e.status]), [
    ['ja:/kpop/a-second-page', 'valid', 'draft'],
    [`ja:${PAGE}`, 'valid', 'draft'],
  ]);
  assert.deepEqual(keysOf(renderableEntries('ja', 'preview', { root })), ['ja:/kpop/a-second-page', `ja:${PAGE}`]);
  assert.deepEqual(renderableEntries('ja', 'production', { root }), []);
});

test('a stale and an invalid translation do not affect the valid ones', () => {
  const root = fixture((r) => {
    for (const slug of ['ok-page', 'stale-page', 'broken-page']) addSecondPage(r, slug);
    makeStale(r, 'stale-page');
    writeFileSync(path.join(r, 'ja', 'kpop', 'broken-page.json'), '{ "schemaVersion": 2, ');
  });
  const state = Object.fromEntries(listTranslations({ root }).map((e) => [e.key, e.validation]));
  assert.deepEqual(state, {
    'ja:/kpop/broken-page': 'invalid',
    'ja:/kpop/ok-page': 'valid',
    'ja:/kpop/stale-page': 'stale',
    [`ja:${PAGE}`]: 'valid',
  });
  assert.deepEqual(keysOf(renderableEntries('ja', 'preview', { root })), ['ja:/kpop/ok-page', `ja:${PAGE}`]);
  assert.deepEqual(renderableEntries('ja', 'production', { root }), []);
  assert.equal(getTranslation('ja', '/kpop/stale-page', { root }).translation, null);
  assert.equal(getTranslation('ja', PAGE, { root }).entry.validation, 'valid');
});

test('many translations: no fixed count anywhere, every draft blocked in production', () => {
  const slugs = Array.from({ length: 11 }, (_, i) => `many-page-${String(i + 1).padStart(2, '0')}`);
  const root = fixture((r) => { for (const slug of slugs) addSecondPage(r, slug); });
  const entries = listTranslations({ root });
  assert.equal(entries.length, 12);
  assert.ok(entries.every((e) => e.validation === 'valid' && e.status === 'draft'));
  const expected = [...slugs.map((slug) => `ja:/kpop/${slug}`), `ja:${PAGE}`].sort();
  assert.deepEqual(keysOf(renderableEntries('ja', 'preview', { root })), expected);
  assert.deepEqual(renderableEntries('ja', 'production', { root }), []);
  for (const slug of slugs) assert.equal(getTranslation('ja', `/kpop/${slug}`, { root }).entry.urlPath, `/ja/kpop/${slug}`);
});

test('path escape attempts are rejected without reading outside the folder', () => {
  assert.equal(checkSourcePath('/kpop/../../etc/passwd'), null);
  assert.equal(checkSourcePath('/kpop//x'), null);
  assert.equal(checkSourcePath('/Kpop/x'), null);
  assert.equal(checkSourcePath('/kpop/x/'), null);
  assert.equal(checkSourcePath('/kpop/x%2e'), null);
  assert.equal(checkSourcePath('\\kpop\\x'), null);
  assert.equal(checkSourcePath('/kpop/what-is-maknae'), '/kpop/what-is-maknae');

  const outside = mkdtempSync(path.join(tmpdir(), 'haemil-outside-'));
  temps.push(outside);
  writeJson(path.join(outside, 'secret.json'), { schemaVersion: 2, sourcePath: '/kpop/secret' });
  const root = fixture((r) => {
    const file = path.join(r, 'ja', REL);
    const doc = readJson(file);
    doc.sourcePath = '/../../../etc/passwd';
    writeJson(path.join(r, 'ja', 'kpop', 'escape.json'), doc);
    writeJson(path.join(r, 'ja', 'kpop', 'Bad_Name.json'), readJson(file));
    symlinkSync(path.join(outside, 'secret.json'), path.join(r, 'ja', 'kpop', 'linked.json'));
    symlinkSync(outside, path.join(r, 'ja', 'linked-dir'));
  });
  const catalog = loadCatalog({ root });
  const escape = catalog.entries.find((e) => e.files.translation.path.endsWith('escape.json'));
  assert.equal(escape.validation, 'invalid');
  assert.ok(problems(escape).includes('sourcePath in the file is not a valid site path'));
  const badName = catalog.entries.find((e) => e.files.translation.path.endsWith('Bad_Name.json'));
  assert.equal(badName.validation, 'invalid');
  assert.equal(badName.sourcePath, null);
  const linkIssues = catalog.issues.filter((i) => i.problem === 'symbolic links are not followed').map((i) => i.id).sort();
  assert.deepEqual(linkIssues, ['ja/kpop/linked.json', 'ja/linked-dir']);
  assert.ok(!catalog.entries.some((e) => e.files.translation.path.includes('linked')));
  assert.equal(getTranslation('ja', '/../kpop/x', { root }), undefined);
  assert.equal(getTranslation('ja', PAGE, { root }).entry.validation, 'valid');
});

test('unknown status is invalid; the catalog never changes a status', () => {
  const root = fixture((r) => {
    const file = path.join(r, 'ja', REL);
    const doc = readJson(file);
    doc.status = 'qa_passed';
    writeJson(file, doc);
  });
  const before = sha(path.join(root, 'ja', REL));
  const [entry] = listTranslations({ root });
  assert.equal(entry.status, null);
  assert.equal(entry.validation, 'invalid');
  assert.equal(publishDecision(entry, 'preview').render, false);
  assert.equal(sha(path.join(root, 'ja', REL)), before);
});

test('status "approved" alone does not publish; approval records must match the exact files', () => {
  const root = fixture((r) => {
    const file = path.join(r, 'ja', REL);
    const doc = readJson(file);
    doc.status = 'approved';
    writeJson(file, doc);
  });
  const [entry] = listTranslations({ root });
  assert.equal(entry.status, 'approved');
  assert.equal(entry.validation, 'valid');

  const none = publishDecision(entry, 'production');
  assert.equal(none.render, false);
  assert.ok(none.reasons.includes('no-quality-approval'));
  assert.ok(none.reasons.includes('no-production-approval'));
  assert.ok(!none.reasons.includes('status-not-approved'));

  // Matching records are recognised, but Japanese is not a public locale and
  // the English page freshness is unverified, so production still refuses.
  const matching = publishDecision(entry, 'production', approvals(entry));
  assert.equal(matching.render, false);
  assert.equal(matching.robots, 'noindex');
  assert.equal(matching.listInLanguageMenu, false);
  assert.equal(matching.includeInSitemap, false);
  assert.ok(!matching.reasons.includes('no-quality-approval'));
  assert.ok(!matching.reasons.includes('no-production-approval'));
  assert.deepEqual(matching.reasons.sort(), ['locale-not-public', 'source-freshness-unverified']);

  // Records for other bytes, missing approver or a bad date do not count.
  for (const overrides of [{ translationSha256: 'sha256:other' }, { sourceSha256: 'sha256:other' }, { approvedBy: ' ' }, { approvedAt: 'yesterday' }, { locale: 'es' }]) {
    const d = publishDecision(entry, 'production', approvals(entry, ['quality', 'production'], overrides));
    assert.ok(d.reasons.includes('no-quality-approval'), JSON.stringify(overrides));
  }
  // Approvals never make preview pages indexable or listed.
  const preview = publishDecision(entry, 'preview', approvals(entry));
  assert.equal(preview.render, true);
  assert.equal(preview.robots, 'noindex');
  assert.equal(preview.listInLanguageMenu, false);
  assert.equal(preview.includeInSitemap, false);
});

test('environment: VERCEL_ENV=production and unknown Vercel values are production', () => {
  assert.equal(resolveEnvironment({ VERCEL_ENV: 'production', VERCEL: '1' }), 'production');
  assert.equal(resolveEnvironment({ VERCEL_ENV: 'preview', VERCEL: '1' }), 'preview');
  assert.equal(resolveEnvironment({ VERCEL_ENV: 'development' }), 'development');
  assert.equal(resolveEnvironment({ VERCEL_ENV: 'staging' }), 'production');
  assert.equal(resolveEnvironment({ VERCEL: '1' }), 'production');
  assert.equal(resolveEnvironment({}), 'development');

  const previous = process.env.VERCEL_ENV;
  process.env.VERCEL_ENV = 'production';
  try {
    clearCatalogCache();
    const environment = resolveEnvironment();
    assert.equal(environment, 'production');
    assert.deepEqual(renderableEntries('ja', environment, { root: REAL_ROOT }), []);
  } finally {
    if (previous === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = previous;
  }
});

test('missing translations folder: empty catalog with an issue, no exception', () => {
  clearCatalogCache();
  const catalog = loadCatalog({ root: path.join(tmpdir(), 'haemil-catalog-does-not-exist') });
  assert.deepEqual(catalog.entries, []);
  assert.deepEqual(catalog.issues, [{ id: '(catalog)', problem: 'translations folder not found' }]);
});

// ---------------------------------------------------------------------------
// Source freshness record (P5-B1). Records are generated with the real checker
// in temporary folders; no record is added to the repository.
// ---------------------------------------------------------------------------

const { checkAll, writeRecord } = await import('./check-sources.mjs');
const PAGE_FILE = 'app/kpop/what-does-sunbae-and-hoobae-mean-in-kpop/page.tsx';
const RECORD = 'content/i18n/source-freshness.json';
const TOOL_FILES = ['scripts/i18n/check-sources.mjs', 'scripts/i18n/extract.mjs'];
const TS_PACKAGE = 'node_modules/typescript/package.json';

/**
 * Temporary repository: translations, the English Sunbae page, copies of the
 * checker and extractor code, the installed TypeScript package.json and
 * (unless `record` is false) a record written by the checker. `page` edits the
 * page before the record is written.
 */
function freshFixture({ edit = () => {}, page = (text) => text, record = true } = {}) {
  const root = fixture(edit);
  const base = path.dirname(path.dirname(root));
  const pageFile = path.join(base, PAGE_FILE);
  mkdirSync(path.dirname(pageFile), { recursive: true });
  writeFileSync(pageFile, page(readFileSync(path.join(REPO, PAGE_FILE), 'utf8')));
  for (const file of [...TOOL_FILES, TS_PACKAGE]) {
    mkdirSync(path.dirname(path.join(base, file)), { recursive: true });
    writeFileSync(path.join(base, file), readFileSync(path.join(REPO, file)));
  }
  if (record) writeRecord(base, checkAll(base));
  clearCatalogCache();
  return { root, base, pageFile, recordFile: path.join(base, RECORD) };
}
const entryOf = (root) => getTranslation('ja', PAGE, { root }).entry;
const editRecord = (file, change) => { const doc = readJson(file); change(doc); writeJson(file, doc); clearCatalogCache(); };

test('freshness: MATCH record with the exact hashes → verified (JSON-LD listed as not compared)', () => {
  const { root, recordFile } = freshFixture();
  const record = readJson(recordFile);
  assert.equal(record.entries.length, 1);
  assert.equal(record.entries[0].status, 'MATCH');
  const entry = entryOf(root);
  assert.equal(entry.validation, 'valid');
  assert.equal(entry.sourceFreshness, 'verified');
  assert.deepEqual(entry.sourceFreshnessDetail, { reason: 'matches the source freshness record', notCompared: ['json-ld'] });
  assert.equal(record.entries[0].sourceJsonSha256, entry.files.source.sha256);
  // Verified freshness is not an approval: the draft still does not render in production.
  const prod = publishDecision(entry, 'production');
  assert.equal(prod.render, false);
  assert.ok(!prod.reasons.includes('source-freshness-verified') && !prod.reasons.some((r) => r.startsWith('source-freshness')));
  assert.ok(prod.reasons.includes('status-not-approved'));
});

test('freshness: no record → unverified (temporary repository without a record)', () => {
  const { root, recordFile } = freshFixture({ record: false });
  assert.throws(() => readFileSync(recordFile), 'the temporary repository has no record');
  const entry = entryOf(root);
  assert.equal(entry.validation, 'valid');
  assert.equal(entry.sourceFreshness, 'unverified');
  assert.equal(entry.sourceFreshnessDetail.reason, 'no source freshness record');
});

test('freshness: page.tsx changed after the record → changed (even a comment)', () => {
  for (const change of [(t) => `// comment only\n${t}`, (t) => t.replace('You may have heard an idol say', 'You might have heard an idol say')]) {
    const { root, pageFile } = freshFixture();
    writeFileSync(pageFile, change(readFileSync(pageFile, 'utf8')));
    clearCatalogCache();
    const entry = entryOf(root);
    assert.equal(entry.sourceFreshness, 'changed');
    assert.match(entry.sourceFreshnessDetail.reason, /differs from the checked version/);
  }
});

test('freshness: source JSON bytes changed after the record → changed', () => {
  const { root } = freshFixture();
  const file = path.join(root, 'source', REL);
  writeFileSync(file, JSON.stringify(readJson(file)));
  clearCatalogCache();
  const entry = entryOf(root);
  assert.equal(entry.validation, 'valid');
  assert.equal(entry.sourceFreshness, 'changed');
});

test('freshness: damaged or unsupported record → unverified', () => {
  const cases = [
    (file) => writeFileSync(file, '{ "schemaVersion": 1, '),
    (file) => editRecord(file, (doc) => { doc.schemaVersion = 1; }),
    (file) => editRecord(file, (doc) => { delete doc.tools; }),
    (file) => editRecord(file, (doc) => { doc.tools.files.reverse(); }),
    (file) => editRecord(file, (doc) => { doc.tools.files[1].sha256 = 'sha256:short'; }),
    (file) => editRecord(file, (doc) => { doc.entries[0].pageSha256 = 'sha256:short'; }),
    (file) => editRecord(file, (doc) => { doc.entries[0].status = 'OK'; }),
    (file) => editRecord(file, (doc) => { doc.entries = 'none'; }),
  ];
  for (const damage of cases) {
    const { root, recordFile } = freshFixture();
    damage(recordFile);
    clearCatalogCache();
    const entry = entryOf(root);
    assert.equal(entry.sourceFreshness, 'unverified', entry.sourceFreshnessDetail.reason);
    assert.match(entry.sourceFreshnessDetail.reason, /source freshness record/);
  }
  const linked = freshFixture();
  const target = `${linked.recordFile}.real`;
  writeFileSync(target, readFileSync(linked.recordFile));
  rmSync(linked.recordFile);
  symlinkSync(target, linked.recordFile);
  clearCatalogCache();
  assert.equal(entryOf(linked.root).sourceFreshness, 'unverified', 'a linked record is not read');
});

test('freshness: path mismatch in the record → unverified', () => {
  for (const change of [
    (e) => { e.sourceFile = 'app/kpop/what-is-maknae/page.tsx'; },
    (e) => { e.sourceJson = 'content/translations/source/kpop/other.json'; },
  ]) {
    const { root, recordFile } = freshFixture();
    editRecord(recordFile, (doc) => change(doc.entries[0]));
    assert.equal(entryOf(root).sourceFreshness, 'unverified');
  }
  // The source JSON must name the page that serves its sourcePath.
  const { root, recordFile } = freshFixture();
  editRecord(path.join(root, 'source', REL), (doc) => { doc.sourceFile = 'app/kpop/what-is-maknae/page.tsx'; });
  editRecord(recordFile, (doc) => { doc.entries[0].sourceFile = 'app/kpop/what-is-maknae/page.tsx'; });
  assert.equal(entryOf(root).sourceFreshness, 'unverified');
});

test('freshness: extractor version mismatch → unverified', () => {
  const { root, recordFile } = freshFixture();
  editRecord(recordFile, (doc) => { doc.entries[0].extractorVersion = 'extract-pilot-2'; });
  const entry = entryOf(root);
  assert.equal(entry.sourceFreshness, 'unverified');
  assert.match(entry.sourceFreshnessDetail.reason, /extractor version/);
});

test('freshness: UNVERIFIED or ERROR results never verify', () => {
  // A real UNVERIFIED result: the page uses imported data.
  const { root, recordFile } = freshFixture({
    page: (t) => t.replace('import JsonLd from "../../../components/JsonLd";', 'import JsonLd from "../../../components/JsonLd";\nimport { kpopGroups } from "../../../lib/kpopData";')
      .replace('export default function SunbaeHoobaePage() {', 'export const groupCount = kpopGroups.length;\n\nexport default function SunbaeHoobaePage() {'),
  });
  assert.equal(readJson(recordFile).entries[0].status, 'UNVERIFIED');
  assert.equal(entryOf(root).sourceFreshness, 'unverified');
  // ERROR (and a forged MATCH-less record) with current hashes.
  const other = freshFixture();
  editRecord(other.recordFile, (doc) => { doc.entries[0].status = 'ERROR'; });
  assert.equal(entryOf(other.root).sourceFreshness, 'unverified');
});

test('freshness: CHANGED result with current hashes → changed, not verified', () => {
  // The page differs from the stored source JSON when the record is written.
  const { root, recordFile } = freshFixture({ page: (t) => t.replace('You may have heard an idol say', 'You might have heard an idol say') });
  assert.equal(readJson(recordFile).entries[0].status, 'CHANGED');
  const entry = entryOf(root);
  assert.equal(entry.sourceFreshness, 'changed');
  assert.equal(entry.sourceFreshnessDetail.reason, 'checker found changes');
});

test('freshness: status "approved" with verified freshness still needs approvals and a public locale', () => {
  const { root } = freshFixture({ edit: (r) => editRecord(path.join(r, 'ja', REL), (doc) => { doc.status = 'approved'; }) });
  const entry = entryOf(root);
  assert.equal(entry.status, 'approved');
  assert.equal(entry.sourceFreshness, 'verified');
  const alone = publishDecision(entry, 'production');
  assert.equal(alone.render, false);
  assert.deepEqual(alone.reasons.sort(), ['locale-not-public', 'no-production-approval', 'no-quality-approval']);
  const withRecords = publishDecision(entry, 'production', approvals(entry));
  assert.equal(withRecords.render, false, 'Japanese is not a public locale');
  assert.deepEqual(withRecords.reasons, ['locale-not-public']);
  assert.deepEqual(renderableEntries('ja', 'production', { root }), []);
});

test('freshness: a record is never reused for another page or translation', () => {
  // A second page whose source JSON has the same content and page file name.
  const { root, recordFile } = freshFixture({ edit: (r) => addSecondPage(r) });
  const second = getTranslation('ja', '/kpop/copy-page', { root }).entry;
  assert.equal(second.sourceFreshness, 'unverified');
  assert.equal(entryOf(root).sourceFreshness, 'verified');
  const sunbaeEntry = (doc) => doc.entries.find((e) => e.sourcePath === PAGE);
  // Replacing the second page's entry with the Sunbae entry (hashes, MATCH) does not verify it.
  editRecord(recordFile, (doc) => {
    const copy = { ...sunbaeEntry(doc), sourcePath: '/kpop/copy-page', sourceJson: 'content/translations/source/kpop/copy-page.json' };
    doc.entries = [...doc.entries.filter((e) => e.sourcePath !== '/kpop/copy-page'), copy];
  });
  assert.equal(getTranslation('ja', '/kpop/copy-page', { root }).entry.sourceFreshness, 'unverified');
  assert.equal(entryOf(root).sourceFreshness, 'verified');
  // Two entries for one page are ambiguous.
  editRecord(recordFile, (doc) => { doc.entries.push({ ...sunbaeEntry(doc) }); });
  assert.equal(entryOf(root).sourceFreshness, 'unverified');
  assert.match(entryOf(root).sourceFreshnessDetail.reason, /more than one record entry/);
});

test('freshness: page file behind a symbolic link is not read', () => {
  const { root, base, pageFile } = freshFixture();
  const real = path.join(base, 'page-copy.tsx');
  writeFileSync(real, readFileSync(pageFile));
  rmSync(pageFile);
  symlinkSync(real, pageFile);
  clearCatalogCache();
  const entry = entryOf(root);
  assert.equal(entry.sourceFreshness, 'unverified');
  assert.equal(entry.sourceFreshnessDetail.reason, 'English page file could not be read');

  // A linked folder on the way to the page is not followed either.
  const dir = freshFixture();
  const outside = mkdtempSync(path.join(tmpdir(), 'haemil-outside-'));
  temps.push(outside);
  cpSync(path.join(dir.base, 'app', 'kpop'), outside, { recursive: true });
  rmSync(path.join(dir.base, 'app', 'kpop'), { recursive: true });
  symlinkSync(outside, path.join(dir.base, 'app', 'kpop'));
  clearCatalogCache();
  assert.equal(entryOf(dir.root).sourceFreshness, 'unverified');
});

test('record: sorted, stable bytes, written only on request', async () => {
  const { base, recordFile } = freshFixture({ edit: (r) => addSecondPage(r, 'a-first-page') });
  const first = readFileSync(recordFile, 'utf8');
  writeRecord(base, checkAll(base));
  assert.equal(readFileSync(recordFile, 'utf8'), first, 'same input, same bytes');
  const paths = readJson(recordFile).entries.map((e) => e.sourcePath);
  assert.deepEqual(paths, [...paths].sort());
  assert.ok(!/\d{4}-\d{2}-\d{2}T/.test(first), 'no timestamps');
  const { base: plain } = freshFixture({ record: false });
  const { execFileSync } = await import('node:child_process');
  try { execFileSync(process.execPath, [path.join(REPO, 'scripts/i18n/check-sources.mjs'), '--repo', plain], { encoding: 'utf8' }); } catch { /* exit code only */ }
  assert.throws(() => readFileSync(path.join(plain, RECORD)), 'no record without --write-record');
});

test('record: an ERROR entry for another page does not invalidate the record', () => {
  const { root, recordFile } = freshFixture();
  editRecord(recordFile, (doc) => {
    doc.entries.push({
      sourcePath: '/kpop/broken-page', sourceFile: null, sourceJson: 'content/translations/source/kpop/broken-page.json',
      status: 'ERROR', extractorVersion: doc.extractorVersion, sourceJsonSha256: null, pageSha256: null, notCompared: [],
    });
  });
  assert.equal(entryOf(root).sourceFreshness, 'verified');
});

test('record: written only inside the repository, as .json, outside content/translations and app', async () => {
  const { recordTarget } = await import('./check-sources.mjs');
  const { base } = freshFixture({ record: false });
  assert.equal(recordTarget(base), path.join(base, RECORD));
  for (const bad of ['content/translations/source/kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json', 'content/translations/ja/x.json', 'app/x.json', '../outside.json', 'content/i18n/record.txt']) {
    assert.throws(() => recordTarget(base, bad), undefined, bad);
  }
  const sourceBefore = sha(path.join(base, 'content/translations/source', REL));
  assert.throws(() => writeRecord(base, checkAll(base), 'content/translations/source/kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json'));
  assert.equal(sha(path.join(base, 'content/translations/source', REL)), sourceBefore, 'source JSON untouched');
});

// ---------------------------------------------------------------------------
// P5-B1.1: the record is bound to the checker and extractor code; safe record path
// ---------------------------------------------------------------------------

test('record: holds the exact hashes of the checker and extractor code that ran, and the TypeScript version', () => {
  const { recordFile } = freshFixture();
  const record = readJson(recordFile);
  assert.equal(record.schemaVersion, 2);
  assert.deepEqual(record.tools, {
    files: TOOL_FILES.map((file) => ({ path: file, sha256: sha(path.join(REPO, file)) })),
    parser: `typescript@${readJson(path.join(REPO, TS_PACKAGE)).version}`,
  });
});

test('freshness: extractor or checker code changed after the record → unverified, even with the same version string', () => {
  for (const file of TOOL_FILES) {
    const { root, base, recordFile } = freshFixture();
    const target = path.join(base, file);
    // A real behaviour change that keeps EXTRACTOR_VERSION as it is.
    writeFileSync(target, `${readFileSync(target, 'utf8')}\n// changed after the record\n`);
    clearCatalogCache();
    const record = readJson(recordFile);
    const source = readJson(path.join(root, 'source', REL));
    assert.equal(record.entries[0].extractorVersion, source.extractor, 'stored version strings still agree');
    const entry = entryOf(root);
    assert.equal(entry.sourceFreshness, 'unverified', file);
    assert.match(entry.sourceFreshnessDetail.reason, /checker or extractor code differs from the record/);
    // Re-running the checker from other code does not make the old repository code verified.
    writeRecord(base, checkAll(base));
    clearCatalogCache();
    assert.equal(entryOf(root).sourceFreshness, 'unverified', 'record from other code is rejected');
    // Restoring the exact code makes the record usable again.
    writeFileSync(target, readFileSync(path.join(REPO, file)));
    clearCatalogCache();
    assert.equal(entryOf(root).sourceFreshness, 'verified');
  }
});

test('freshness: missing or linked checker code, or another TypeScript version → unverified', () => {
  const missing = freshFixture();
  rmSync(path.join(missing.base, 'scripts/i18n/extract.mjs'));
  clearCatalogCache();
  assert.match(entryOf(missing.root).sourceFreshnessDetail.reason, /checker code could not be read/);
  assert.equal(entryOf(missing.root).sourceFreshness, 'unverified');

  const linked = freshFixture();
  const real = path.join(linked.base, 'extract-copy.mjs');
  writeFileSync(real, readFileSync(path.join(linked.base, 'scripts/i18n/extract.mjs')));
  rmSync(path.join(linked.base, 'scripts/i18n/extract.mjs'));
  symlinkSync(real, path.join(linked.base, 'scripts/i18n/extract.mjs'));
  clearCatalogCache();
  assert.equal(entryOf(linked.root).sourceFreshness, 'unverified', 'a linked extractor is not read');

  const parser = freshFixture();
  editRecord(path.join(parser.base, TS_PACKAGE), (doc) => { doc.version = '0.0.1-other'; });
  const entry = entryOf(parser.root);
  assert.equal(entry.sourceFreshness, 'unverified');
  assert.match(entry.sourceFreshnessDetail.reason, /TypeScript version differs/);

  // A forged tools block (right shape, wrong hash) is rejected too.
  const forged = freshFixture();
  editRecord(forged.recordFile, (doc) => { doc.tools.files[0].sha256 = `sha256:${'0'.repeat(64)}`; });
  assert.equal(entryOf(forged.root).sourceFreshness, 'unverified');
});

test('record path: symbolic links on the way are refused and nothing is written outside the repository', async () => {
  const { recordTarget } = await import('./check-sources.mjs');
  const outside = mkdtempSync(path.join(tmpdir(), 'haemil-outside-'));
  temps.push(outside);
  const outsideFiles = () => JSON.stringify(readdirRecursive(outside));

  // content/i18n is a link to a folder outside the repository.
  const a = freshFixture({ record: false });
  symlinkSync(outside, path.join(a.base, 'content/i18n'));
  assert.throws(() => recordTarget(a.base), /symbolic link: content\/i18n/);
  assert.throws(() => writeRecord(a.base, checkAll(a.base)), /symbolic link/);
  assert.equal(outsideFiles(), '[]', 'nothing written through the link');

  // content itself is a link (the translations live behind it).
  const b = freshFixture({ record: false });
  const moved = mkdtempSync(path.join(tmpdir(), 'haemil-content-'));
  temps.push(moved);
  cpSync(path.join(b.base, 'content'), moved, { recursive: true });
  rmSync(path.join(b.base, 'content'), { recursive: true });
  symlinkSync(moved, path.join(b.base, 'content'));
  assert.throws(() => recordTarget(b.base), /symbolic link: content$/);
  assert.throws(() => recordTarget(b.base, 'content/i18n/deeper/record.json'), /symbolic link: content$/);

  // The record file itself is a link to a source JSON: refused, source untouched.
  const c = freshFixture({ record: false });
  const sourceFile = path.join(c.base, 'content/translations/source', REL);
  const before = sha(sourceFile);
  mkdirSync(path.join(c.base, 'content/i18n'));
  symlinkSync(sourceFile, path.join(c.base, RECORD));
  assert.throws(() => writeRecord(c.base, checkAll(c.base)), /symbolic link/);
  assert.equal(sha(sourceFile), before);

  // A file where a folder should be.
  const d = freshFixture({ record: false });
  writeFileSync(path.join(d.base, 'content/i18n'), 'x');
  assert.throws(() => recordTarget(d.base), /goes through a file/);
});

test('record path: only .json under content/i18n/; existing non-record files are never overwritten', async () => {
  const { recordTarget } = await import('./check-sources.mjs');
  const { base } = freshFixture({ record: false });
  for (const bad of ['package.json', 'tsconfig.json', 'content/record.json', 'content/i18n/../translations/ja/x.json', 'scripts/i18n/record.json', 'content/i18n', 'content/i18n/']) {
    assert.throws(() => recordTarget(base, bad), undefined, bad);
  }
  assert.equal(recordTarget(base, 'content/i18n/other/record.json'), path.join(base, 'content/i18n/other/record.json'));

  // Another JSON file in content/i18n is not replaced.
  const other = path.join(base, 'content/i18n/glossary.json');
  writeJson(other, { terms: [] });
  const before = sha(other);
  assert.throws(() => writeRecord(base, checkAll(base), 'content/i18n/glossary.json'), /never overwritten/);
  assert.equal(sha(other), before);

  // An existing record (also an older schema) is replaced, without leftovers.
  writeJson(path.join(base, RECORD), { schemaVersion: 1, generator: 'scripts/i18n/check-sources.mjs', entries: [] });
  writeRecord(base, checkAll(base));
  assert.equal(readJson(path.join(base, RECORD)).schemaVersion, 2);
  assert.deepEqual(readdirRecursive(path.join(base, 'content/i18n')).sort(), ['glossary.json', 'source-freshness.json']);
});

// ---------------------------------------------------------------------------
// Approval records (content/i18n/approvals.json). The repository has none;
// every record below is written to a temporary folder only. Japanese is not a
// public locale, so even fully approved pages stay out of production here: the
// tests check that every other gate is satisfied ("locale-not-public" is then
// the only reason left) and that nothing is approved by accident.
// ---------------------------------------------------------------------------

const APPROVALS = 'content/i18n/approvals.json';
const NO_RECORDS = ['no-quality-approval', 'no-production-approval'];
const approvalsDoc = (records) => ({ schemaVersion: 1, records });
const writeApprovals = (base, doc) => { writeJson(path.join(base, APPROVALS), doc); clearCatalogCache(); };
const setStatus = (status) => (root) => {
  const file = path.join(root, 'ja', REL);
  writeJson(file, { ...readJson(file), status });
};
const decide = (root, environment = 'production', sourcePath = PAGE) =>
  catalogDecision(getTranslation('ja', sourcePath, { root }).entry, environment, { root });
const approvalIssues = (root) => loadCatalog({ root }).issues.filter((i) => i.id === '(approvals)');

test('approvals: the repository has no approval records; production lists no Japanese page', () => {
  clearCatalogCache();
  assert.equal(existsSync(path.join(REPO, APPROVALS)), false, 'no approval file is committed');
  assert.deepEqual(approvalRecords({ root: REAL_ROOT }), []);
  assert.deepEqual(approvalIssues(REAL_ROOT), []);
  for (const entry of listTranslations({ root: REAL_ROOT }).filter((e) => e.locale === 'ja')) {
    const d = catalogDecision(entry, 'production', { root: REAL_ROOT });
    assert.equal(d.render, false, entry.key);
    assert.ok(NO_RECORDS.every((r) => d.reasons.includes(r)), entry.key);
  }
  assert.deepEqual(renderableEntries('ja', 'production', { root: REAL_ROOT }), []);
});

test('approvals: matching records from the file satisfy every gate except the public locale', () => {
  const { root, base } = freshFixture({ edit: setStatus('approved') });
  const entry = entryOf(root);
  writeApprovals(base, approvalsDoc(approvals(entry)));
  const loaded = approvalRecords({ root });
  assert.deepEqual(loaded.map((r) => r.kind), ['quality', 'production', 'indexing']);
  assert.deepEqual(approvalIssues(root), []);
  const d = decide(root);
  assert.equal(d.render, false);
  assert.deepEqual(d.reasons, ['locale-not-public']);
  assert.equal(d.robots, 'noindex');
  assert.equal(d.listInLanguageMenu, false);
  assert.equal(d.includeInSitemap, false);
  // The file loader gives exactly the decision of the same records passed in memory.
  assert.deepEqual(d, publishDecision(entryOf(root), 'production', approvals(entryOf(root))));
  assert.deepEqual(renderableEntries('ja', 'production', { root }), []);
  // Records are read-only data.
  assert.throws(() => { loaded[0].kind = 'production'; });
});

test('approvals: quality, production and indexing are separate; a missing kind blocks', () => {
  const { root, base } = freshFixture({ edit: setStatus('approved') });
  const entry = entryOf(root);
  const cases = [
    [['production', 'indexing'], ['no-quality-approval']],
    [['quality', 'indexing'], ['no-production-approval']],
    [['indexing'], NO_RECORDS],
    [[], NO_RECORDS],
  ];
  for (const [kinds, missing] of cases) {
    writeApprovals(base, approvalsDoc(approvals(entry, kinds)));
    const d = decide(root);
    assert.equal(d.render, false, kinds.join(','));
    for (const reason of missing) assert.ok(d.reasons.includes(reason), `${kinds.join(',')}: ${reason}`);
    for (const reason of NO_RECORDS.filter((r) => !missing.includes(r))) assert.ok(!d.reasons.includes(reason), `${kinds.join(',')}: ${reason}`);
  }
});

test('approvals: a draft translation stays blocked even with matching records', () => {
  const { root, base } = freshFixture();
  const entry = entryOf(root);
  assert.equal(entry.status, 'draft');
  writeApprovals(base, approvalsDoc(approvals(entry)));
  const d = decide(root);
  assert.equal(d.render, false);
  assert.ok(d.reasons.includes('status-not-approved'));
  assert.ok(NO_RECORDS.every((r) => !d.reasons.includes(r)), 'the records match, the status still blocks');
});

test('approvals: stale hashes, another page and another locale never apply', () => {
  const { root, base } = freshFixture({ edit: (r) => { setStatus('approved')(r); addSecondPage(r, 'copy-page'); } });
  const entry = entryOf(root);
  const copy = getTranslation('ja', '/kpop/copy-page', { root }).entry;
  // Records for Sunbae only: the second Japanese page gets nothing.
  writeApprovals(base, approvalsDoc(approvals(entry)));
  assert.deepEqual(decide(root).reasons, ['locale-not-public']);
  const other = decide(root, 'production', '/kpop/copy-page');
  assert.ok(NO_RECORDS.every((r) => other.reasons.includes(r)));
  // A record that names the other page but carries Sunbae's hashes does not match it.
  writeApprovals(base, approvalsDoc(approvals(entry, ['quality', 'production'], { sourcePath: '/kpop/copy-page' })));
  assert.ok(NO_RECORDS.every((r) => decide(root, 'production', '/kpop/copy-page').reasons.includes(r)));
  assert.ok(NO_RECORDS.every((r) => decide(root).reasons.includes(r)));
  // Another locale, or old hashes, do not match.
  for (const overrides of [{ locale: 'es' }, { translationSha256: copy.files.translation.sha256 }, { sourceSha256: `sha256:${'0'.repeat(64)}` }]) {
    writeApprovals(base, approvalsDoc(approvals(entry, ['quality', 'production'], overrides)));
    assert.ok(NO_RECORDS.every((r) => decide(root).reasons.includes(r)), JSON.stringify(overrides));
  }
  // Records written for the current bytes stop matching after any edit of the translation.
  writeApprovals(base, approvalsDoc(approvals(entry)));
  const file = path.join(root, 'ja', REL);
  writeFileSync(file, `${readFileSync(file, 'utf8')}\n`);
  clearCatalogCache();
  assert.ok(NO_RECORDS.every((r) => decide(root).reasons.includes(r)));
});

test('approvals: changed or unverified English source blocks even with matching records', () => {
  const changed = freshFixture({ edit: setStatus('approved') });
  writeFileSync(changed.pageFile, `${readFileSync(changed.pageFile, 'utf8')}\n// edited after the check\n`);
  clearCatalogCache();
  writeApprovals(changed.base, approvalsDoc(approvals(entryOf(changed.root))));
  const c = decide(changed.root);
  assert.equal(c.render, false);
  assert.ok(c.reasons.includes('source-freshness-changed'));

  const unverified = freshFixture({ edit: setStatus('approved'), record: false });
  writeApprovals(unverified.base, approvalsDoc(approvals(entryOf(unverified.root))));
  const u = decide(unverified.root);
  assert.equal(u.render, false);
  assert.ok(u.reasons.includes('source-freshness-unverified'));
});

test('approvals: a missing file approves nothing; a damaged or redirected file is ignored as a whole and reported', () => {
  const { root, base } = freshFixture({ edit: setStatus('approved') });
  const good = approvals(entryOf(root));
  // Missing: nothing approved, nothing to report.
  clearCatalogCache();
  assert.deepEqual(approvalRecords({ root }), []);
  assert.deepEqual(approvalIssues(root), []);

  const file = path.join(base, APPROVALS);
  const blocked = (label) => {
    clearCatalogCache();
    assert.deepEqual(approvalRecords({ root }), [], label);
    assert.equal(approvalIssues(root).length, 1, label);
    assert.ok(NO_RECORDS.every((r) => decide(root).reasons.includes(r)), label);
  };
  const raw = (text) => { mkdirSync(path.dirname(file), { recursive: true }); rmSync(file, { recursive: true, force: true }); writeFileSync(file, text); };
  raw('{ "schemaVersion": 1, '); blocked('broken JSON');
  raw('[]'); blocked('JSON array');
  writeApprovals(base, { schemaVersion: 2, records: good }); blocked('other schema');
  writeApprovals(base, { schemaVersion: 1, records: {} }); blocked('records not a list');
  const invalid = {
    'extra field': { note: 'x' }, 'unknown kind': { kind: 'publish' }, 'English locale': { locale: 'en' },
    'unknown locale': { locale: 'zz' }, 'unsafe path': { sourcePath: '/kpop/../x' }, 'uppercase hash': { sourceSha256: `sha256:${'A'.repeat(64)}` },
    'blank approver': { approvedBy: ' ' }, 'no time zone': { approvedAt: '2026-10-12T09:00:00' }, 'impossible date': { approvedAt: '2026-13-45T09:00:00Z' },
  };
  for (const [label, override] of Object.entries(invalid)) {
    // One bad record makes the whole file unusable, including the valid ones next to it.
    writeApprovals(base, approvalsDoc([...good, { ...good[0], ...override }]));
    blocked(label);
  }
  const withoutTime = { ...good[1] };
  delete withoutTime.approvedAt;
  writeApprovals(base, approvalsDoc([...good.slice(0, 1), withoutTime]));
  blocked('missing field');
  raw(`${JSON.stringify(approvalsDoc(good))}${' '.repeat(1_000_001)}`); blocked('oversized file');
  rmSync(file, { force: true }); mkdirSync(file); blocked('folder instead of a file');
  rmSync(file, { recursive: true, force: true });

  // Symbolic links: at the file and on the way (content/i18n).
  const elsewhere = mkdtempSync(path.join(tmpdir(), 'haemil-approvals-'));
  temps.push(elsewhere);
  writeJson(path.join(elsewhere, 'approvals.json'), approvalsDoc(good));
  symlinkSync(path.join(elsewhere, 'approvals.json'), file);
  blocked('file is a symbolic link');
  rmSync(file, { force: true });
  const i18n = path.join(base, 'content/i18n');
  cpSync(i18n, path.join(elsewhere, 'i18n'), { recursive: true });
  writeJson(path.join(elsewhere, 'i18n', 'approvals.json'), approvalsDoc(good));
  rmSync(i18n, { recursive: true, force: true });
  symlinkSync(path.join(elsewhere, 'i18n'), i18n);
  blocked('folder on the way is a symbolic link');
});

test('approval dates: only calendar dates and times that exist, with a time zone', () => {
  const accepted = [
    '2028-02-29T09:00:00Z', // leap year
    '2000-02-29T09:00:00Z', // century divisible by 400
    '2026-10-14T11:00:00+09:00', '2026-10-14T02:00:00-05:30', '2026-10-14T02:00Z', '2026-10-14T02:00:00.123Z',
    '2026-12-31T23:59:59Z', '2026-01-01T00:00:00+14:00', '2026-01-01T00:00:00-12:00',
  ];
  const rejected = [
    '2026-02-30T09:00:00Z', '2026-04-31T09:00:00Z', '2026-02-29T09:00:00Z', '2100-02-29T09:00:00Z',
    '2026-13-01T09:00:00Z', '2026-00-10T09:00:00Z', '2026-01-00T09:00:00Z', '2026-01-32T09:00:00Z',
    '2026-10-14T24:00:00Z', '2026-10-14T23:60:00Z', '2026-10-14T23:59:60Z',
    '2026-10-14T09:00:00', '2026-10-14T09:00:00z', '2026-10-14 09:00:00Z', '2026-10-14', 'yesterday', '',
    '2026-10-14T09:00:00+15:00', '2026-10-14T09:00:00+14:30', '2026-10-14T09:00:00+09:60', '2026-10-14T09:00:00+0900',
  ];
  // Date.parse() alone would accept these impossible dates by moving them to another day.
  assert.ok(!Number.isNaN(Date.parse('2026-02-30T09:00:00Z')));
  for (const value of accepted) assert.equal(isRealDateTime(value), true, value);
  for (const value of rejected) assert.equal(isRealDateTime(value), false, value);
  for (const value of [undefined, null, 20261014, {}]) assert.equal(isRealDateTime(value), false, String(value));

  // In the file: one impossible date makes the whole file unusable; a real leap day is accepted.
  const { root, base } = freshFixture({ edit: setStatus('approved') });
  const good = approvals(entryOf(root));
  for (const value of ['2026-02-30T09:00:00Z', '2026-04-31T09:00:00Z', '2026-02-29T09:00:00Z', '2026-10-14T09:00:00']) {
    writeApprovals(base, approvalsDoc([...good.slice(0, 2), { ...good[2], approvedAt: value }]));
    assert.deepEqual(approvalRecords({ root }), [], value);
    assert.equal(approvalIssues(root).length, 1, value);
    assert.ok(NO_RECORDS.every((r) => decide(root).reasons.includes(r)), value);
  }
  writeApprovals(base, approvalsDoc(approvals(entryOf(root), ['quality', 'production', 'indexing'], { approvedAt: '2028-02-29T09:00:00+09:00' })));
  assert.equal(approvalRecords({ root }).length, 3);
  assert.deepEqual(approvalIssues(root), []);
  assert.deepEqual(decide(root).reasons, ['locale-not-public']);
  // Records passed in memory follow the same date rule.
  const entry = entryOf(root);
  const memory = publishDecision(entry, 'production', approvals(entry, ['quality', 'production'], { approvedAt: '2026-02-30T09:00:00Z' }));
  assert.ok(NO_RECORDS.every((r) => memory.reasons.includes(r)));
});

test('approvals: the file holds exactly schemaVersion and records; anything else voids it', () => {
  const { root, base } = freshFixture({ edit: setStatus('approved') });
  const good = approvals(entryOf(root));
  for (const [label, doc] of Object.entries({
    'extra top-level field': { schemaVersion: 1, records: good, note: 'approved' },
    'extra approvals list': { schemaVersion: 1, records: good, approvals: good },
    'no records': { schemaVersion: 1 },
    'no schemaVersion': { records: good },
  })) {
    writeApprovals(base, doc);
    assert.deepEqual(approvalRecords({ root }), [], label);
    const issues = approvalIssues(root);
    assert.equal(issues.length, 1, label);
    assert.ok(NO_RECORDS.every((r) => decide(root).reasons.includes(r)), label);
    if (label.startsWith('extra')) assert.match(issues[0].problem, /exactly schemaVersion and records/, label);
  }
  writeApprovals(base, { records: good, schemaVersion: 1 }); // key order does not matter
  assert.equal(approvalRecords({ root }).length, 3);
  assert.deepEqual(approvalIssues(root), []);
});

test('routes: generated pages, page metadata and renderableEntries use the same decision', async () => {
  const { localeEnvironment, localeMetadata, localeStaticParams } = await import('../../lib/i18n/LocalePage.tsx');
  const { root, base } = freshFixture({ edit: (r) => { setStatus('approved')(r); addSecondPage(r, 'copy-page'); } });
  writeApprovals(base, approvalsDoc(approvals(entryOf(root))));
  const saved = { cwd: process.cwd() };
  for (const key of ['VERCEL', 'VERCEL_ENV', 'NODE_ENV']) saved[key] = process.env[key];
  const expected = { preview: [PAGE, '/kpop/copy-page'].sort(), production: [] };
  process.chdir(base); // the routes read <cwd>/content/translations
  try {
    for (const vars of [{ VERCEL_ENV: 'preview' }, { VERCEL_ENV: 'production' }, { NODE_ENV: 'production' }]) {
      for (const key of ['VERCEL', 'VERCEL_ENV', 'NODE_ENV']) delete process.env[key];
      Object.assign(process.env, vars);
      clearCatalogCache();
      const environment = localeEnvironment();
      const listed = localeStaticParams('ja').map(({ slug }) => `/${slug.join('/')}`).sort();
      const allowed = renderableEntries('ja', environment).map((e) => e.sourcePath).sort();
      assert.deepEqual(listed, allowed, JSON.stringify(vars));
      assert.deepEqual(listed, expected[environment], JSON.stringify(vars));
      for (const entry of listTranslations().filter((e) => e.locale === 'ja')) {
        const slug = routeSegments(entry);
        if (listed.includes(entry.sourcePath)) assert.equal(typeof localeMetadata('ja', slug).title, 'string');
        else assert.throws(() => localeMetadata('ja', slug), (error) => error?.digest === 'NEXT_HTTP_ERROR_FALLBACK;404', `${entry.key} must be a 404`);
      }
    }
  } finally {
    process.chdir(saved.cwd);
    for (const key of ['VERCEL', 'VERCEL_ENV', 'NODE_ENV']) {
      if (saved[key] === undefined) delete process.env[key]; else process.env[key] = saved[key];
    }
    clearCatalogCache();
  }
});
