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
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

register('data:text/javascript,' + encodeURIComponent(`
export async function resolve(specifier, context, next) {
  if (specifier === 'server-only') return { url: 'data:text/javascript,export {}', shortCircuit: true };
  try {
    return await next(specifier, context);
  } catch (error) {
    if (/^\\.\\.?\\//.test(specifier) && !/\\.[cm]?[jt]sx?$/.test(specifier)) return next(specifier + '.ts', context);
    throw error;
  }
}`));

const {
  checkSourcePath, clearCatalogCache, getTranslation, listTranslations, loadCatalog,
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

const temps = [];
/** Copy the real translations folder to a temporary content/translations and let `edit` change it. */
function fixture(edit = () => {}) {
  const base = mkdtempSync(path.join(tmpdir(), 'haemil-catalog-'));
  temps.push(base);
  const root = path.join(base, 'content', 'translations');
  cpSync(REAL_ROOT, root, { recursive: true });
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

test('real data: the Japanese Sunbae draft is found and valid, with unverified source freshness', () => {
  clearCatalogCache();
  const before = sha(path.join(REAL_ROOT, 'ja', REL));
  const catalog = loadCatalog({ root: REAL_ROOT });
  assert.deepEqual(catalog.issues, []);
  assert.equal(catalog.entries.length, 1);
  const [entry] = catalog.entries;
  assert.equal(entry.key, `ja:${PAGE}`);
  assert.equal(entry.locale, 'ja');
  assert.equal(entry.sourcePath, PAGE);
  assert.equal(entry.urlPath, `/ja${PAGE}`);
  assert.equal(entry.status, 'draft');
  assert.equal(entry.validation, 'valid');
  assert.equal(entry.sourceFreshness, 'unverified');
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
  const [entry] = listTranslations({ root: REAL_ROOT });
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
  for (const reason of ['locale-not-public', 'status-not-approved', 'source-freshness-unverified', 'no-quality-approval', 'no-production-approval']) {
    assert.ok(prod.reasons.includes(reason), reason);
  }
  assert.deepEqual(renderableEntries('ja', 'production', { root: REAL_ROOT }), []);
  assert.deepEqual(renderableEntries('ja', 'preview', { root: REAL_ROOT }).map((e) => e.key), [`ja:${PAGE}`]);
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

/**
 * Temporary repository: translations, the English Sunbae page and (unless
 * `record` is false) a record written by the checker. `page` edits the page
 * before the record is written.
 */
function freshFixture({ edit = () => {}, page = (text) => text, record = true } = {}) {
  const root = fixture(edit);
  const base = path.dirname(path.dirname(root));
  const pageFile = path.join(base, PAGE_FILE);
  mkdirSync(path.dirname(pageFile), { recursive: true });
  writeFileSync(pageFile, page(readFileSync(path.join(REPO, PAGE_FILE), 'utf8')));
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

test('freshness: no record → unverified (real repository has none)', () => {
  clearCatalogCache();
  const real = getTranslation('ja', PAGE, { root: REAL_ROOT }).entry;
  assert.equal(real.sourceFreshness, 'unverified');
  assert.equal(real.sourceFreshnessDetail.reason, 'no source freshness record');
  const { root } = freshFixture({ record: false });
  assert.equal(entryOf(root).sourceFreshness, 'unverified');
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
    (file) => editRecord(file, (doc) => { doc.schemaVersion = 2; }),
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
