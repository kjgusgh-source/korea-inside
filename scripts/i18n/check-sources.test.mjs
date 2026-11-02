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
import { STATUS, TRUSTED_COMPONENTS, articlePhotoProblems, buildRecord, checkAll, checkSitePath, checkSourceFile, contentImports, exitCode, routeOfPageFile, trustedComponentImports } from './check-sources.mjs';
import { extractFromTsx } from './extract.mjs';

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

// ---------------------------------------------------------------------------
// Trusted shared component: ArticlePhoto (Gangneung travel story)
// ---------------------------------------------------------------------------

const GN_PAGE = 'app/travel/3-days-in-gangneung/page.tsx';
const GN_SOURCE = 'content/translations/source/travel/3-days-in-gangneung.json';
const PHOTO = 'components/ArticlePhoto.tsx';
const COVER_SRC = 'src="/images/travel/3-days-in-gangneung/gangmun-beach-cover.webp"';
const STOREFRONT = '<ArticlePhoto\n                  src="/images/travel/3-days-in-gangneung/yukyoung-tangsuyuk-storefront.webp"';

/**
 * Temporary repository with the Gangneung page, its stored source JSON and the
 * ArticlePhoto component. `reextract` stores a fresh extraction of the edited
 * page (as if the source JSON had been updated with it), so only the component
 * checks can fail.
 */
function photoFixture({ page = (s) => s, component = (s) => s, reextract = false, sunbae = false } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), 'haemil-photo-'));
  temps.push(root);
  for (const file of [GN_PAGE, GN_SOURCE, PHOTO, ...(sunbae ? [PAGE, SOURCE, JA] : [])]) {
    mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    cpSync(path.join(REPO, file), path.join(root, file));
  }
  const pageFile = path.join(root, GN_PAGE);
  writeFileSync(pageFile, page(readFileSync(pageFile, 'utf8')));
  const componentFile = path.join(root, PHOTO);
  writeFileSync(componentFile, component(readFileSync(componentFile, 'utf8')));
  if (reextract) {
    const sourceFile = path.join(root, GN_SOURCE);
    const previous = JSON.parse(readFileSync(sourceFile, 'utf8'));
    const fresh = extractFromTsx(readFileSync(pageFile, 'utf8'), { fileName: GN_PAGE, sourcePath: '/travel/3-days-in-gangneung', previous });
    writeFileSync(sourceFile, `${JSON.stringify(fresh, null, 2)}\n`);
  }
  return root;
}
const photoReasons = (result) => result.reasons.join('; ');

test('real data: the Gangneung page matches, ArticlePhoto is checked and its file hash is recorded for this page only', () => {
  const before = [GN_PAGE, GN_SOURCE, PHOTO].map((f) => sha(path.join(REPO, f)));
  const result = checkSourceFile(REPO, GN_SOURCE);
  assert.equal(result.status, STATUS.MATCH, photoReasons(result));
  assert.deepEqual(result.review.imports, []);
  assert.deepEqual(result.review.components, []);
  assert.deepEqual(result.components, [{ path: PHOTO, sha256: `sha256:${sha(path.join(REPO, PHOTO))}` }]);
  assert.equal(TRUSTED_COMPONENTS.ArticlePhoto.sha256, `sha256:${sha(path.join(REPO, PHOTO))}`, 'the reviewed hash is the committed component');
  const sunbae = checkSourceFile(REPO, SOURCE);
  assert.deepEqual(sunbae.components, [], 'pages without the component bind no component file');
  const record = buildRecord([result, sunbae], { files: [], parser: 'typescript@test' });
  const byPath = Object.fromEntries(record.entries.map((e) => [e.sourcePath, e]));
  assert.deepEqual(byPath['/travel/3-days-in-gangneung'].components, result.components);
  assert.equal('components' in byPath[`/kpop/${SLUG}`], false, 'Sunbae entry keeps its previous shape');
  assert.deepEqual([GN_PAGE, GN_SOURCE, PHOTO].map((f) => sha(path.join(REPO, f))), before);
});

test('ArticlePhoto file changed (even a comment): UNVERIFIED for the page that uses it, MATCH for others', () => {
  const root = photoFixture({ component: (t) => `// edited\n${t}`, sunbae: true });
  const gn = checkSourceFile(root, GN_SOURCE);
  assert.equal(gn.status, STATUS.UNVERIFIED);
  assert.match(photoReasons(gn), /components\/ArticlePhoto\.tsx differs from the reviewed version/);
  assert.equal(checkSourceFile(root, SOURCE).status, STATUS.MATCH, 'Sunbae does not use the component');
});

test('ArticlePhoto file missing: not MATCH', () => {
  const root = photoFixture();
  rmSync(path.join(root, PHOTO));
  const result = checkSourceFile(root, GN_SOURCE);
  assert.equal(result.status, STATUS.UNVERIFIED);
  assert.match(photoReasons(result), /ArticlePhoto\.tsx not found/);
});

test('ArticlePhoto prop changed on the page: CHANGED against the stored source JSON', () => {
  const edits = [
    (t) => t.replace(COVER_SRC, 'src="/images/travel/3-days-in-gangneung/gangmun-beach-waves.webp"'),
    (t) => t.replace('width={1050}', 'width={1000}'),
    (t) => t.replace('layout="cover"', 'layout="single"'),
    (t) => t.replace(STOREFRONT, `${STOREFRONT}\n                  layout="pair"`),
    (t) => t.replace('alt="Gate 5 of Gangneung Jungang Market', 'alt="Gate 6 of Gangneung Jungang Market'),
  ];
  for (const edit of edits) {
    const root = photoFixture({ page: edit });
    assert.notEqual(readFileSync(path.join(root, GN_PAGE), 'utf8'), readFileSync(path.join(REPO, GN_PAGE), 'utf8'), 'the edit applied');
    const result = checkSourceFile(root, GN_SOURCE);
    assert.equal(result.status, STATUS.CHANGED, photoReasons(result));
  }
});

test('ArticlePhoto with a disallowed or dynamic prop: never MATCH, even after re-extracting the source JSON', () => {
  const edits = [
    [(t) => t.replace(STOREFRONT, `${STOREFRONT}\n                  priority`), /prop priority is not allowed/],
    [(t) => t.replace(COVER_SRC, 'src="https://example.com/cover.webp"'), /src must be a static \/images\/ path/],
    [(t) => t.replace(COVER_SRC, 'src={"/images/" + "travel/3-days-in-gangneung/gangmun-beach-cover.webp".slice(0)}'), /src must be a static|dynamic/],
    [(t) => t.replace('width={1050}', 'width={1050.5}'), /width must be a static positive integer/],
    [(t) => t.replace('layout="cover"', 'layout="full"'), /layout must be single, pair or cover/],
  ];
  for (const [edit, expected] of edits) {
    const root = photoFixture({ page: edit, reextract: true });
    const result = checkSourceFile(root, GN_SOURCE);
    assert.equal(result.status, STATUS.UNVERIFIED, photoReasons(result));
    assert.match(photoReasons(result), expected);
  }
});

test('ArticlePhoto from another file, under another name or defined in the page: not trusted', () => {
  const importLine = 'import ArticlePhoto from "../../../components/ArticlePhoto";';
  const cases = [
    (t) => t.replace(importLine, 'import ArticlePhoto from "../../../components/OtherPhoto";'),
    (t) => t.replace(importLine, 'import Photo from "../../../components/ArticlePhoto";').split('<ArticlePhoto').join('<Photo'),
    (t) => t.replace(importLine, 'function ArticlePhoto(props: { src: string; alt: string; width: number; height: number; layout?: string }) { return <p>{props.alt}</p>; }'),
  ];
  for (const edit of cases) {
    const root = photoFixture({ page: edit, reextract: true });
    if (edit === cases[0]) writeFileSync(path.join(root, 'components/OtherPhoto.tsx'), readFileSync(path.join(REPO, PHOTO)));
    const result = checkSourceFile(root, GN_SOURCE);
    assert.notEqual(result.status, STATUS.MATCH, photoReasons(result));
  }
});

test('helpers: trusted component imports need the exact file and a default import', () => {
  const body = '\nexport default function P() { return <ArticlePhoto src="/images/a.webp" alt="A" width={1} height={1} />; }';
  assert.deepEqual(trustedComponentImports(`import ArticlePhoto from "../../../components/ArticlePhoto";${body}`, 'app/travel/x/page.tsx'), ['ArticlePhoto']);
  assert.deepEqual(contentImports(`import ArticlePhoto from "../../../components/ArticlePhoto";${body}`, 'app/travel/x/page.tsx'), []);
  assert.deepEqual(trustedComponentImports(`import ArticlePhoto from "../../components/ArticlePhoto";${body}`, 'app/travel/x/page.tsx'), []);
  assert.deepEqual(contentImports(`import { ArticlePhoto } from "../../../components/ArticlePhoto";${body}`, 'app/travel/x/page.tsx'), [{ name: 'ArticlePhoto', module: '../../../components/ArticlePhoto' }]);
  assert.deepEqual(articlePhotoProblems({ attrs: { src: '/images/a.webp', alt: 'A', width: 1, height: 2 }, attributeUnits: { alt: 'u' } }), []);
  assert.ok(articlePhotoProblems({ attrs: { src: '/images/../a.webp', alt: 'A', width: 1, height: 2 }, attributeUnits: { alt: 'u' } }).length);
  assert.ok(articlePhotoProblems({ attrs: { src: '/images/a.webp', alt: 'A', width: 1, height: 2 }, attributeUnits: {} }).length, 'alt must be a unit');
  assert.ok(articlePhotoProblems({ attrs: { src: '/images/a.webp', alt: 'A', width: { dynamic: 'w' }, height: 2 }, attributeUnits: { alt: 'u' } }).length);
});
