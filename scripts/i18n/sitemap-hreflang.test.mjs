#!/usr/bin/env node
/**
 * Tests for the search engine settings of translated pages (offline; no
 * network, no API calls).
 *
 *   node --test scripts/i18n/sitemap-hreflang.test.mjs
 *
 * - lib/i18n/LocalePage.tsx: robots and canonical of a translated page
 *   (localeMetadata), the indexed pages (indexedTranslations) and the sitemap
 *   language links (withTranslationAlternates).
 * - app/sitemap.ts: the sitemap with those links, serialized with Next.js's
 *   own sitemap XML writer.
 *
 * Japanese is not a public locale in the repository and no approval record
 * exists. Tests of public pages therefore load a second copy of the modules
 * in which lib/i18n/locales.ts marks Japanese public. The change is made in
 * memory by this file's module loader (URLs with "?public-ja"); the file on
 * disk is only read. Approval records, approved statuses and source freshness
 * records are written to temporary folders only.
 *
 * Node 22 strips TypeScript types natively; .ts and .tsx files are compiled
 * here with the project's own TypeScript (no extra package). "server-only" is
 * replaced by an empty module and Next.js subpath imports such as "next/link"
 * resolve to their .js files, as in the other i18n tests.
 */
import { register, createRequire } from 'node:module';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const TYPESCRIPT = pathToFileURL(path.join(REPO, 'node_modules/typescript/lib/typescript.js')).href;
const PUBLIC_JA = '?public-ja';

register('data:text/javascript,' + encodeURIComponent(`
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const REPO_URL = ${JSON.stringify(pathToFileURL(REPO).href + '/')};
const QUERY = ${JSON.stringify(PUBLIC_JA)};
const JA_PRIVATE = 'support: "preview",\\n    publication: "not-public",';
const JA_PUBLIC = 'support: "preview",\\n    publication: "public",';
let ts;
const own = (url) => url.startsWith(REPO_URL) && !url.slice(REPO_URL.length).startsWith('node_modules/');
async function resolveInner(specifier, context, next) {
  if (specifier === 'server-only') return { url: 'data:text/javascript,export {}', shortCircuit: true };
  try {
    return await next(specifier, context);
  } catch (error) {
    if (/^next\\/[a-z-]+$/.test(specifier)) return next(specifier + '.js', context);
    if (!/^\\.\\.?\\//.test(specifier) || /\\.[cm]?[jt]sx?$/.test(specifier)) throw error;
    try { return await next(specifier + '.ts', context); } catch { return next(specifier + '.tsx', context); }
  }
}
export async function resolve(specifier, context, next) {
  const parentPublic = Boolean(context.parentURL && context.parentURL.endsWith(QUERY));
  const parentURL = parentPublic ? context.parentURL.slice(0, -QUERY.length) : context.parentURL;
  const wantPublic = parentPublic || specifier.endsWith(QUERY);
  const bare = specifier.endsWith(QUERY) ? specifier.slice(0, -QUERY.length) : specifier;
  const result = await resolveInner(bare, { ...context, parentURL }, next);
  // The "public Japanese" copy: every repository module below it is loaded again with the query.
  if (wantPublic && own(result.url)) return { ...result, url: result.url + QUERY, shortCircuit: true };
  return result;
}
export async function load(url, context, next) {
  const isPublic = url.endsWith(QUERY);
  const plain = isPublic ? url.slice(0, -QUERY.length) : url;
  if (plain.startsWith('file:') && /\\.tsx?$/.test(plain) && (isPublic || plain.endsWith('.tsx'))) {
    ts ??= (await import(${JSON.stringify(TYPESCRIPT)})).default;
    let source = readFileSync(fileURLToPath(plain), 'utf8');
    if (isPublic && plain.endsWith('/lib/i18n/locales.ts')) {
      if (source.split(JA_PRIVATE).length !== 2) throw new Error('locales.ts: Japanese entry not found as expected');
      source = source.replace(JA_PRIVATE, JA_PUBLIC);
    }
    const { outputText } = ts.transpileModule(source, {
      fileName: fileURLToPath(plain),
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    });
    return { format: 'module', source: outputText, shortCircuit: true };
  }
  if (plain.startsWith('file:') && plain.endsWith('.json')) {
    return { format: 'json', source: readFileSync(fileURLToPath(plain), 'utf8'), shortCircuit: true };
  }
  return next(url, context);
}`));

// Repository as it is (Japanese not public).
const real = {
  page: await import('../../lib/i18n/LocalePage.tsx'),
  catalog: await import('../../lib/i18n/catalog.ts'),
  locales: await import('../../lib/i18n/locales.ts'),
  sitemap: (await import('../../app/sitemap.ts')).default,
};
// Same modules with Japanese marked public in memory.
const pub = {
  page: await import('../../lib/i18n/LocalePage.tsx' + PUBLIC_JA),
  catalog: await import('../../lib/i18n/catalog.ts' + PUBLIC_JA),
  locales: await import('../../lib/i18n/locales.ts' + PUBLIC_JA),
  sitemap: (await import('../../app/sitemap.ts' + PUBLIC_JA)).default,
};
const { checkAll, writeRecord } = await import('./check-sources.mjs');
const require = createRequire(path.join(REPO, 'package.json'));
const { resolveSitemap } = require('next/dist/build/webpack/loaders/metadata/resolve-route-data.js');

const BASE_URL = 'https://haemilkorea.com';
const SUNBAE = '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop';
const ANIME = '/kpop/why-kpop-idols-feel-like-anime-characters';
const PAGES = [SUNBAE, ANIME];
const TOOL_FILES = ['scripts/i18n/check-sources.mjs', 'scripts/i18n/extract.mjs', 'node_modules/typescript/package.json'];
const APPROVALS = 'content/i18n/approvals.json';
const rel = (sourcePath) => `${sourcePath.slice(1)}.json`;
const pageFile = (sourcePath) => `app${sourcePath}/page.tsx`;
const sha = (file) => `sha256:${createHash('sha256').update(readFileSync(file)).digest('hex')}`;
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
const writeJson = (file, value) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`); };
const slugOf = (sourcePath) => sourcePath.slice(1).split('/');
const xml = (entries) => resolveSitemap(entries);

/** Run `fn` with these environment variables (others as they are), then restore. */
async function withEnv(vars, fn) {
  const saved = {};
  for (const key of ['VERCEL', 'VERCEL_ENV', 'NODE_ENV']) { saved[key] = process.env[key]; delete process.env[key]; }
  Object.assign(process.env, vars);
  try { return await fn(); } finally {
    for (const [key, value] of Object.entries(saved)) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
  }
}
const PRODUCTION = { VERCEL: '1', VERCEL_ENV: 'production' };
const PREVIEW = { VERCEL: '1', VERCEL_ENV: 'preview' };

const temps = [];
process.on('exit', () => { for (const dir of temps) rmSync(dir, { recursive: true, force: true }); });

/**
 * Temporary repository with the real Sunbae and anime pages: source JSON,
 * Japanese translation, English page.tsx, the checker and extractor code and
 * a source freshness record written by the real checker. `approve` lists the
 * approval kinds for Sunbae (its status is then "approved"); `edit` runs
 * after the records are written (to make them stale).
 */
function fixture({ approve = [], edit = () => {}, approvalsDoc = null } = {}) {
  const base = mkdtempSync(path.join(tmpdir(), 'haemil-seo-'));
  temps.push(base);
  for (const sourcePath of PAGES) {
    for (const dir of ['source', 'ja']) {
      const target = path.join(base, 'content/translations', dir, rel(sourcePath));
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(path.join(REPO, 'content/translations', dir, rel(sourcePath)), target);
    }
    mkdirSync(path.dirname(path.join(base, pageFile(sourcePath))), { recursive: true });
    cpSync(path.join(REPO, pageFile(sourcePath)), path.join(base, pageFile(sourcePath)));
  }
  for (const file of TOOL_FILES) {
    mkdirSync(path.dirname(path.join(base, file)), { recursive: true });
    cpSync(path.join(REPO, file), path.join(base, file));
  }
  const translation = path.join(base, 'content/translations/ja', rel(SUNBAE));
  if (approve.length > 0) writeJson(translation, { ...readJson(translation), status: 'approved' });
  writeRecord(base, checkAll(base));
  const source = path.join(base, 'content/translations/source', rel(SUNBAE));
  const records = approve.map((kind) => ({
    kind, locale: 'ja', sourcePath: SUNBAE, sourceSha256: sha(source), translationSha256: sha(translation),
    approvedBy: 'test fixture (not an approval)', approvedAt: '2026-10-14T09:00:00+09:00',
  }));
  if (approvalsDoc) writeJson(path.join(base, APPROVALS), approvalsDoc(records));
  else if (records.length > 0) writeJson(path.join(base, APPROVALS), { schemaVersion: 1, records });
  edit(base);
  return base;
}

/** Run `fn` inside the temporary repository (the catalog reads <cwd>/content). */
async function inRepo(base, vars, fn) {
  const cwd = process.cwd();
  process.chdir(base);
  for (const m of [real, pub]) m.catalog.clearCatalogCache();
  try { return await withEnv(vars, fn); } finally {
    process.chdir(cwd);
    for (const m of [real, pub]) m.catalog.clearCatalogCache();
  }
}

/** What a build would produce for Sunbae and the anime page. */
function snapshot(m) {
  const generated = m.page.localeStaticParams('ja').map(({ slug }) => `/${slug.join('/')}`);
  const metadata = {};
  for (const sourcePath of PAGES) {
    try {
      metadata[sourcePath] = m.page.localeMetadata('ja', slugOf(sourcePath));
    } catch (error) {
      assert.match(String(error?.digest ?? error?.message), /NEXT_HTTP_ERROR_FALLBACK;404|NEXT_NOT_FOUND/, 'only a 404 may be thrown');
      metadata[sourcePath] = 404;
    }
  }
  const entries = m.sitemap();
  return { generated, metadata, indexed: m.page.indexedTranslations(), entries, xml: xml(entries) };
}

const NOINDEX = { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } };
const urlCount = (entries, url) => entries.filter((e) => e.url === url).length;
const withoutAlternates = (entries) => entries.filter((e) => !e.alternates);
const jaUrls = (entries) => entries.map((e) => e.url).filter((u) => u.startsWith(`${BASE_URL}/ja/`));

// Sitemap of the repository as it is, used as the "unchanged" reference.
process.chdir(REPO);
const REAL_ENTRIES = await withEnv(PRODUCTION, () => real.sitemap());
const REAL_XML = xml(REAL_ENTRIES);

// ---------------------------------------------------------------------------
// Repository data (no approval records, Japanese not public, drafts)
// ---------------------------------------------------------------------------

test('repository data: the Japanese translations are drafts without approval records', () => {
  assert.equal(existsSync(path.join(REPO, APPROVALS)), false, 'no approval file is committed');
  assert.equal(real.locales.LOCALES.ja.publication, 'not-public');
  for (const sourcePath of PAGES) assert.equal(readJson(path.join(REPO, 'content/translations/ja', rel(sourcePath))).status, 'draft', sourcePath);
});

test('repository data: no Japanese URL, no language links and no xhtml namespace in the sitemap, on any environment', async () => {
  for (const vars of [PRODUCTION, PREVIEW, { NODE_ENV: 'production' }, {}]) {
    await withEnv(vars, () => {
      assert.deepEqual(real.page.indexedTranslations(), [], JSON.stringify(vars));
      const entries = real.sitemap();
      assert.deepEqual(jaUrls(entries), [], JSON.stringify(vars));
      assert.equal(entries.filter((e) => e.alternates).length, 0);
      assert.equal(xml(entries), REAL_XML, 'same sitemap bytes in every environment');
    });
  }
  assert.ok(!REAL_XML.includes('xmlns:xhtml') && !REAL_XML.includes('hreflang') && !REAL_XML.includes('/ja/'));
  assert.equal(urlCount(REAL_ENTRIES, `${BASE_URL}${SUNBAE}`), 1, 'the English Sunbae page is listed once');
  assert.equal(new Set(REAL_ENTRIES.map((e) => e.url)).size, REAL_ENTRIES.length, 'no duplicate URL');
});

test('repository data: Preview drafts render with noindex and no canonical; Production renders none', async () => {
  await withEnv(PREVIEW, () => {
    for (const sourcePath of PAGES) {
      const metadata = real.page.localeMetadata('ja', slugOf(sourcePath));
      assert.deepEqual(metadata.robots, NOINDEX, sourcePath);
      assert.equal(metadata.alternates, undefined, sourcePath);
    }
  });
  await withEnv(PRODUCTION, () => assert.deepEqual(real.page.localeStaticParams('ja'), []));
});

test('the canonical base and the sitemap base are the same site URL', () => {
  assert.match(readFileSync(path.join(REPO, 'app/layout.tsx'), 'utf8'), /metadataBase: new URL\("https:\/\/haemilkorea\.com"\)/);
  assert.match(readFileSync(path.join(REPO, 'app/sitemap.ts'), 'utf8'), /const baseUrl = "https:\/\/haemilkorea\.com";/);
  // The English Sunbae canonical is its path; the sitemap lists base + path.
  assert.match(readFileSync(path.join(REPO, pageFile(SUNBAE)), 'utf8'), /alternates: \{ canonical: path \}/);
});

// ---------------------------------------------------------------------------
// Japanese public (in memory) with temporary approval records
// ---------------------------------------------------------------------------

test('quality + production, no indexing: Sunbae renders with noindex, no canonical, not in the sitemap; anime 404', async () => {
  const base = fixture({ approve: ['quality', 'production'] });
  await inRepo(base, PRODUCTION, () => {
    const s = snapshot(pub);
    assert.deepEqual(s.generated, [SUNBAE]);
    assert.deepEqual(s.metadata[SUNBAE].robots, NOINDEX);
    assert.equal(s.metadata[SUNBAE].alternates, undefined, 'no canonical');
    assert.equal(s.metadata[ANIME], 404);
    assert.deepEqual(s.indexed, []);
    assert.deepEqual(jaUrls(s.entries), []);
    assert.equal(s.xml, REAL_XML, 'sitemap unchanged');
  });
});

test('quality + production + indexing: index, self canonical, one Japanese sitemap URL, mutual hreflang with x-default English', async () => {
  const base = fixture({ approve: ['quality', 'production', 'indexing'] });
  await inRepo(base, PRODUCTION, () => {
    const s = snapshot(pub);
    const en = `${BASE_URL}${SUNBAE}`;
    const jaUrl = `${BASE_URL}/ja${SUNBAE}`;
    assert.deepEqual(s.generated, [SUNBAE]);
    assert.deepEqual(s.metadata[SUNBAE].robots, { index: true, follow: true });
    assert.deepEqual(s.metadata[SUNBAE].alternates, { canonical: `/ja${SUNBAE}` });
    assert.equal(new URL(s.metadata[SUNBAE].alternates.canonical, BASE_URL).href, jaUrl, 'canonical = sitemap URL');
    assert.equal(s.metadata[SUNBAE].openGraph.locale, 'ja_JP');
    assert.equal(s.metadata[ANIME], 404);
    assert.deepEqual(s.indexed, [{ locale: 'ja', hreflang: 'ja', sourcePath: SUNBAE, urlPath: `/ja${SUNBAE}` }]);

    // Exactly one Japanese URL, and it is a generated page (HTTP 200 in a build).
    assert.deepEqual(jaUrls(s.entries), [jaUrl]);
    for (const url of jaUrls(s.entries)) assert.ok(s.generated.includes(url.slice(`${BASE_URL}/ja`.length)), url);
    assert.equal(urlCount(s.entries, en), 1, 'English URL not duplicated');
    assert.equal(new Set(s.entries.map((e) => e.url)).size, s.entries.length, 'no duplicate URL');

    // Mutual language links, English as x-default, in this order.
    const languages = { en, ja: jaUrl, 'x-default': en };
    const english = s.entries.find((e) => e.url === en);
    const japanese = s.entries.find((e) => e.url === jaUrl);
    assert.deepEqual(english.alternates, { languages });
    assert.deepEqual(Object.keys(english.alternates.languages), ['en', 'ja', 'x-default']);
    assert.deepEqual(japanese.alternates, { languages });
    assert.equal(japanese.changeFrequency, english.changeFrequency);
    assert.equal(japanese.priority, english.priority);
    assert.equal('lastModified' in japanese, false, 'no invented date');
    assert.equal(s.entries.indexOf(japanese), s.entries.indexOf(english) + 1, 'listed right after its English page');

    // Every other entry is exactly as before, in the same order.
    const strip = (e) => { const copy = { ...e }; delete copy.alternates; return copy; };
    assert.deepEqual(s.entries.filter((e) => e.url !== jaUrl).map(strip), REAL_ENTRIES.map(strip));
    assert.equal(withoutAlternates(s.entries).length, REAL_ENTRIES.length - 1);

    // Next.js XML: xhtml namespace and the three links on both URLs.
    assert.match(s.xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9" xmlns:xhtml="http:\/\/www\.w3\.org\/1999\/xhtml">\n/);
    const links = [
      `<xhtml:link rel="alternate" hreflang="en" href="${en}" />`,
      `<xhtml:link rel="alternate" hreflang="ja" href="${jaUrl}" />`,
      `<xhtml:link rel="alternate" hreflang="x-default" href="${en}" />`,
    ].join('\n');
    for (const loc of [en, jaUrl]) assert.ok(s.xml.includes(`<url>\n<loc>${loc}</loc>\n${links}\n`), loc);
    assert.equal(s.xml.split('<xhtml:link').length - 1, 6, 'links only on the two connected URLs');
  });
});

test('a missing approval kind blocks: 404, no sitemap entry, no hreflang', async () => {
  for (const approve of [['indexing'], ['production', 'indexing'], ['quality', 'indexing'], ['quality'], ['production']]) {
    const base = fixture({ approve });
    await inRepo(base, PRODUCTION, () => {
      const s = snapshot(pub);
      assert.deepEqual(s.generated, [], approve.join('+'));
      assert.equal(s.metadata[SUNBAE], 404, approve.join('+'));
      assert.deepEqual(s.indexed, []);
      assert.equal(s.xml, REAL_XML, approve.join('+'));
    });
  }
});

test('stale approvals or source freshness: 404, no sitemap entry, no hreflang (fail closed)', async () => {
  const all = ['quality', 'production', 'indexing'];
  const cases = {
    'translation edited after the records': (base) => {
      const file = path.join(base, 'content/translations/ja', rel(SUNBAE));
      writeFileSync(file, readFileSync(file, 'utf8') + '\n');
    },
    'source JSON edited after the records': (base) => {
      const file = path.join(base, 'content/translations/source', rel(SUNBAE));
      writeFileSync(file, readFileSync(file, 'utf8') + '\n');
    },
    'English page changed after the freshness record': (base) => {
      const file = path.join(base, pageFile(SUNBAE));
      writeFileSync(file, readFileSync(file, 'utf8') + '\n// changed\n');
    },
    'no source freshness record': (base) => rmSync(path.join(base, 'content/i18n/source-freshness.json')),
    'damaged approval file': (base) => writeFileSync(path.join(base, APPROVALS), '{ "schemaVersion": 1, "records": ['),
  };
  for (const [name, edit] of Object.entries(cases)) {
    const base = fixture({ approve: all, edit });
    await inRepo(base, PRODUCTION, () => {
      const s = snapshot(pub);
      assert.deepEqual(s.generated, [], name);
      assert.equal(s.metadata[SUNBAE], 404, name);
      assert.deepEqual(s.indexed, [], name);
      assert.equal(s.xml, REAL_XML, name);
    });
  }
  // An approval file with an extra top-level field is void as a whole.
  const base = fixture({ approve: all, approvalsDoc: (records) => ({ schemaVersion: 1, records, note: 'x' }) });
  await inRepo(base, PRODUCTION, () => assert.equal(snapshot(pub).xml, REAL_XML));
});

test('Preview and development never index, even with every approval record', async () => {
  const base = fixture({ approve: ['quality', 'production', 'indexing'] });
  for (const vars of [PREVIEW, { VERCEL_ENV: 'development' }, {}]) {
    await inRepo(base, vars, () => {
      const s = snapshot(pub);
      assert.deepEqual(s.generated, PAGES.toSorted(), JSON.stringify(vars));
      for (const sourcePath of PAGES) {
        assert.deepEqual(s.metadata[sourcePath].robots, NOINDEX, `${sourcePath} ${JSON.stringify(vars)}`);
        assert.equal(s.metadata[sourcePath].alternates, undefined);
      }
      assert.deepEqual(s.indexed, []);
      assert.equal(s.xml, REAL_XML);
    });
  }
});

test('a non-public locale is never indexed, whatever records exist (repository locales)', async () => {
  const base = fixture({ approve: ['quality', 'production', 'indexing'] });
  await inRepo(base, PRODUCTION, () => {
    const s = snapshot(real);
    assert.deepEqual(s.generated, []);
    assert.equal(s.metadata[SUNBAE], 404);
    assert.equal(s.xml, REAL_XML);
  });
});

// ---------------------------------------------------------------------------
// withTranslationAlternates (pure)
// ---------------------------------------------------------------------------

const page = (sourcePath, locale = 'ja') => ({ locale, hreflang: locale, sourcePath, urlPath: `/${locale}${sourcePath}` });
const entry = (p, extra = {}) => ({ url: `${BASE_URL}${p}`, changeFrequency: 'monthly', priority: 0.7, ...extra });

test('withTranslationAlternates: no translations returns the input itself', () => {
  const entries = [entry('/a'), entry('/b')];
  assert.equal(pub.page.withTranslationAlternates(entries, [], BASE_URL), entries);
});

test('withTranslationAlternates: missing, duplicated or already linked English URL skips the page (fail closed)', () => {
  const warn = console.warn; const warnings = []; console.warn = (m) => warnings.push(m);
  try {
    const entries = [entry('/a'), entry('/b'), entry('/b'), entry('/c', { alternates: { languages: { en: 'x' } } }), entry('/ja/d'), entry('/d')];
    const out = pub.page.withTranslationAlternates(entries, [page('/missing'), page('/b'), page('/c'), page('/d')], BASE_URL);
    assert.deepEqual(out, entries);
    assert.equal(warnings.length, 4);
    assert.ok(warnings.every((w) => w.startsWith('[i18n] sitemap: ')));
  } finally { console.warn = warn; }
});

test('withTranslationAlternates: duplicate input is listed once; other entries keep their order and values', () => {
  const entries = [entry('/a'), entry('/b', { priority: 0.5, lastModified: new Date('2026-01-02T00:00:00Z') }), entry('/c')];
  const out = pub.page.withTranslationAlternates(entries, [page('/b'), page('/b')], BASE_URL);
  assert.deepEqual(out.map((e) => e.url), [`${BASE_URL}/a`, `${BASE_URL}/b`, `${BASE_URL}/ja/b`, `${BASE_URL}/c`]);
  assert.equal(out[0], entries[0]);
  assert.equal(out[3], entries[2]);
  assert.deepEqual(out[2], { url: `${BASE_URL}/ja/b`, changeFrequency: 'monthly', priority: 0.5, alternates: { languages: { en: `${BASE_URL}/b`, ja: `${BASE_URL}/ja/b`, 'x-default': `${BASE_URL}/b` } } });
  assert.equal(out[1].lastModified, entries[1].lastModified);
  assert.equal(entries[1].alternates, undefined, 'input not mutated');
});

test('withTranslationAlternates: several locales for one page are all linked, in locales.ts order', () => {
  const entries = [entry('/a')];
  const out = pub.page.withTranslationAlternates(entries, [page('/a', 'es'), page('/a', 'ja')], BASE_URL);
  const languages = { en: `${BASE_URL}/a`, ja: `${BASE_URL}/ja/a`, es: `${BASE_URL}/es/a`, 'x-default': `${BASE_URL}/a` };
  assert.deepEqual(out.map((e) => e.url), [`${BASE_URL}/a`, `${BASE_URL}/ja/a`, `${BASE_URL}/es/a`]);
  for (const e of out) assert.deepEqual(Object.entries(e.alternates.languages), Object.entries(languages));
});
