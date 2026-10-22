#!/usr/bin/env node
/**
 * Tests for scripts/i18n/check-sources.mjs (offline).
 *
 *   node --test scripts/i18n/check-sources.test.mjs
 *
 * Fixtures are copies of the real Sunbae page and its stored source JSON in a
 * temporary folder outside the repository. Repository files are only read.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { STATUS, checkAll, checkSitePath, checkSourceFile, contentImports, exitCode, routeOfPageFile } from './check-sources.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const SLUG = 'what-does-sunbae-and-hoobae-mean-in-kpop';
const PAGE = `app/kpop/${SLUG}/page.tsx`;
const SOURCE = `content/translations/source/kpop/${SLUG}.json`;
const JA = `content/translations/ja/kpop/${SLUG}.json`;
const sha = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');

const temps = [];
process.on('exit', () => { for (const dir of temps) rmSync(dir, { recursive: true, force: true }); });

/** Temporary repository with the Sunbae page, its source JSON and the ja translation. */
function fixture({ page = (s) => s, source = (s) => s } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), 'haemil-sources-'));
  temps.push(root);
  for (const file of [PAGE, SOURCE, JA]) {
    mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    cpSync(path.join(REPO, file), path.join(root, file));
  }
  const pageFile = path.join(root, PAGE);
  writeFileSync(pageFile, page(readFileSync(pageFile, 'utf8')));
  const sourceFile = path.join(root, SOURCE);
  writeFileSync(sourceFile, `${JSON.stringify(source(JSON.parse(readFileSync(sourceFile, 'utf8'))), null, 2)}\n`);
  return root;
}

const replaceOnce = (from, to) => (text) => {
  assert.equal(text.split(from).length, 2, `expected exactly one "${from}" in the page`);
  return text.replace(from, to);
};

// ---------------------------------------------------------------------------

test('real data: the Sunbae page matches its stored source JSON; nothing is written', () => {
  const before = [PAGE, SOURCE, JA].map((f) => sha(path.join(REPO, f)));
  const result = checkSourceFile(REPO, SOURCE);
  assert.equal(result.status, STATUS.MATCH, result.reasons.join('; '));
  assert.equal(result.sourcePath, `/kpop/${SLUG}`);
  assert.equal(result.details.units.stored, 78);
  assert.equal(result.details.units.current, 78);
  assert.deepEqual(result.details.contentChanged, []);
  assert.equal(result.details.structureChanged, false);
  assert.equal(result.details.presentationChanged, false);
  assert.equal(result.review.jsonLd.length, 2, 'JSON-LD is reported separately');
  assert.deepEqual(result.review.imports, []);
  assert.deepEqual([PAGE, SOURCE, JA].map((f) => sha(path.join(REPO, f))), before);
});

test('line-only edits (blank lines, comments) still match', () => {
  const root = fixture({ page: replaceOnce('export default function SunbaeHoobaePage() {', '// moved down a few lines\n\n\nexport default function SunbaeHoobaePage() {') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.MATCH, result.reasons.join('; '));
  assert.equal(result.details.presentationChanged, false);
});

test('English title change: CHANGED, title units and the ja translation are listed', () => {
  // The title text appears in the metadata constant and in the h1.
  const root = fixture({ page: (text) => text.split('What These Korean Words Really Mean').join('What These Korean Words Actually Mean') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.CHANGED);
  const ids = result.details.contentChanged.map((c) => c.id);
  assert.ok(ids.includes('meta-title-67882371'), ids.join(','));
  assert.ok(ids.includes('header-h1-299cbd58'), ids.join(','));
  assert.ok(result.details.contentChanged.every((c) => c.fields.includes('text') && c.fields.includes('hash')));
  const ja = result.details.translations.find((t) => t.locale === 'ja');
  assert.ok(ja.affectedUnits.includes('meta-title-67882371'));
});

test('English body sentence change: CHANGED, the same unit ID is reported', () => {
  const root = fixture({ page: replaceOnce('You may have heard an idol say', 'You might have heard an idol say') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.CHANGED);
  assert.deepEqual(result.details.contentChanged.map((c) => c.id), ['header-p-78cf4305']);
  assert.match(result.details.contentChanged[0].after, /You might have heard/);
  assert.deepEqual(result.details.added, []);
  assert.deepEqual(result.details.removed, []);
});

test('internal link change: CHANGED (link target is part of the unit)', () => {
  const root = fixture({ page: replaceOnce('href: "/kpop/what-is-maknae" }', 'href: "/kpop/what-is-maknae-guide" }') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.CHANGED);
  assert.ok(result.details.contentChanged.length + result.details.added.length >= 1);
  assert.ok(result.details.contentChanged.every((c) => !c.fields.includes('text')) || result.details.added.length, 'text itself did not change');
});

test('meaningful structure change (section id / anchor): CHANGED', () => {
  const root = fixture({ page: replaceOnce('<section id="meaning" className="space-y-4 scroll-mt-24">', '<section id="definition" className="space-y-4 scroll-mt-24">') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.CHANGED);
  assert.ok(result.details.structureChanged || result.details.moved.length);
});

test('style class only: MATCH, reported as presentation-only', () => {
  const root = fixture({ page: replaceOnce('<section id="meaning" className="space-y-4 scroll-mt-24">', '<section id="meaning" className="space-y-6 scroll-mt-24">') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.MATCH, result.reasons.join('; '));
  assert.equal(result.details.presentationChanged, true);
  assert.ok(result.reasons.some((r) => r.startsWith('presentation-only')));
  assert.deepEqual(result.details.contentChanged, []);
});

test('missing English page file: ERROR', () => {
  const root = fixture();
  rmSync(path.join(root, PAGE));
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.ERROR);
  assert.match(result.reasons[0], /English page file not found/);
});

test('wrong sourcePath / sourceFile: ERROR', () => {
  const cases = [
    [{ sourcePath: '/kpop/other-page' }, /file location does not match sourcePath/],
    [{ sourcePath: '/kpop/../secret' }, /sourcePath is not a valid site path/],
    [{ sourceFile: 'app/kpop/what-is-maknae/page.tsx' }, /serves \/kpop\/what-is-maknae/],
    [{ sourceFile: '../../etc/page.tsx' }, /not an app\/\*\*\/page.tsx path/],
    [{ sourceFile: 'app/../../outside/page.tsx' }, /serves|not found/],
  ];
  for (const [patch, expected] of cases) {
    const root = fixture({ source: (doc) => ({ ...doc, ...patch }) });
    const result = checkSourceFile(root, SOURCE);
    assert.equal(result.status, STATUS.ERROR, JSON.stringify(patch));
    assert.match(result.reasons.join(' '), expected, JSON.stringify(patch));
  }
  const linked = fixture();
  rmSync(path.join(linked, PAGE));
  symlinkSync(path.join(REPO, PAGE), path.join(linked, PAGE));
  assert.equal(checkSourceFile(linked, SOURCE).status, STATUS.ERROR, 'symbolic links are not followed');

  // A linked folder on the way to the page is rejected too.
  const outside = mkdtempSync(path.join(tmpdir(), 'haemil-outside-'));
  temps.push(outside);
  mkdirSync(path.join(outside, SLUG), { recursive: true });
  cpSync(path.join(REPO, PAGE), path.join(outside, SLUG, 'page.tsx'));
  const linkedDir = fixture();
  rmSync(path.join(linkedDir, 'app', 'kpop'), { recursive: true });
  symlinkSync(outside, path.join(linkedDir, 'app', 'kpop'));
  assert.equal(checkSourceFile(linkedDir, SOURCE).status, STATUS.ERROR, 'linked folders are not followed');
});

test('structure-only change (JSON-LD data expression): CHANGED without unit changes', () => {
  const root = fixture({
    page: (text) => replaceOnce('<JsonLd data={structuredData} />', '<JsonLd data={structuredData.slice(0, 1)} />')(text),
  });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.CHANGED);
  assert.equal(result.details.structureChanged, true);
  assert.deepEqual(result.details.contentChanged, []);
  assert.deepEqual(result.details.moved, []);
  assert.ok(result.reasons.some((r) => r.startsWith('no translated text changed')));
});

test('extraction failure (broken TSX) and unreadable JSON: ERROR', () => {
  const root = fixture({ page: (text) => text.replace('export default function SunbaeHoobaePage() {', 'export default function SunbaeHoobaePage( {') });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.ERROR);
  assert.match(result.reasons[0], /extraction failed/);

  const bad = fixture();
  writeFileSync(path.join(bad, SOURCE), '{ "schemaVersion": 2, ');
  assert.match(checkSourceFile(bad, SOURCE).reasons[0], /could not be parsed/);
});

test('imported data used by the page: UNVERIFIED (not silently MATCH)', () => {
  const root = fixture({
    page: (text) => replaceOnce('import JsonLd from "../../../components/JsonLd";', 'import JsonLd from "../../../components/JsonLd";\nimport { kpopGroups } from "../../../lib/kpopData";')(text)
      .replace('export default function SunbaeHoobaePage() {', 'export const groupCount = kpopGroups.length;\n\nexport default function SunbaeHoobaePage() {'),
  });
  const result = checkSourceFile(root, SOURCE);
  assert.equal(result.status, STATUS.UNVERIFIED, result.reasons.join('; '));
  assert.deepEqual(result.review.imports, [{ name: 'kpopGroups', module: '../../../lib/kpopData' }]);
});

test('dynamic expression in the article: not MATCH, reported as unchecked', () => {
  const root = fixture({
    page: (text) => replaceOnce('import JsonLd from "../../../components/JsonLd";', 'import JsonLd from "../../../components/JsonLd";\nimport { kpopGroups } from "../../../lib/kpopData";')(text)
      .replace('<section id="meaning" className="space-y-4 scroll-mt-24">', '<section id="meaning" className="space-y-4 scroll-mt-24">\n<p>{kpopGroups[0].name}</p>'),
  });
  const result = checkSourceFile(root, SOURCE);
  assert.notEqual(result.status, STATUS.MATCH);
  assert.ok(result.review.newSinceStored.length >= 1 || result.status === STATUS.CHANGED, result.reasons.join('; '));
});

test('helpers: site paths, routes and imports', () => {
  assert.equal(checkSitePath('/kpop/x'), '/kpop/x');
  for (const bad of ['/kpop/../x', '/Kpop/x', '/kpop/x/', 'kpop/x', '/kpop//x']) assert.equal(checkSitePath(bad), null, bad);
  assert.equal(routeOfPageFile('app/kpop/x/page.tsx'), '/kpop/x');
  assert.equal(routeOfPageFile('app/(guides)/kpop/x/page.tsx'), '/kpop/x');
  assert.equal(routeOfPageFile('lib/x/page.tsx'), null);
  assert.deepEqual(contentImports('import type { Metadata } from "next";\nimport Link from "next/link";\nimport SiteHeader from "./SiteHeader";\nexport const m: Metadata = {};\nexport default function P() { return <Link href="/"><SiteHeader /></Link>; }', 'page.tsx'), []);
  assert.deepEqual(contentImports('import { data } from "../lib/data";\nexport default function P() { return <p>{data}</p>; }', 'page.tsx'), [{ name: 'data', module: '../lib/data' }]);
});

test('CLI: exit codes and read-only run over all stored sources', () => {
  const ok = fixture();
  assert.equal(exitCode(checkAll(ok)), 0);
  const out = execFileSync(process.execPath, [path.join(HERE, 'check-sources.mjs'), '--repo', ok, '--json'], { encoding: 'utf8' });
  assert.equal(JSON.parse(out).results[0].status, STATUS.MATCH);

  const changed = fixture({ page: replaceOnce('You may have heard an idol say', 'You might have heard an idol say') });
  let code = 0;
  try { execFileSync(process.execPath, [path.join(HERE, 'check-sources.mjs'), '--repo', changed], { encoding: 'utf8' }); } catch (error) { code = error.status; }
  assert.equal(code, 1);
  assert.equal(exitCode([{ status: STATUS.UNVERIFIED }]), 2);
});
