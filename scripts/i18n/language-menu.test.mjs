#!/usr/bin/env node
/**
 * Tests for the header language menu (offline; no network, no API calls).
 *
 *   node --test scripts/i18n/language-menu.test.mjs
 *
 * - app/api/i18n/available/route.ts: the menu data per environment, built
 *   from the same list as the locale routes.
 * - components/HeaderControls.tsx: validating that data (version 2) and
 *   building the menu entries, with drafts marked per page.
 * - lib/i18n/TranslatedPage.tsx and LocalePage.tsx: the notice above a
 *   translated page (draft preview or published translation).
 *
 * Node 22 strips TypeScript types natively; .tsx files are compiled here with
 * the project's own TypeScript (no extra package). "server-only" is replaced
 * by an empty module, as in catalog.test.mjs, and Next.js subpath imports
 * such as "next/link" resolve to their .js files. Fixtures are written to a
 * temporary folder; repository files are only read.
 *
 * Release state: the tests on the repository's own data know two states,
 * before release (no approval file: every Japanese page is a draft, nothing in
 * production) and Sunbae released under policy B (approval file present: the
 * Japanese Sunbae page is the only published one). catalog.test.mjs checks
 * that the approval file holds exactly the expected records.
 */
import { register } from 'node:module';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const TYPESCRIPT = pathToFileURL(path.join(REPO, 'node_modules/typescript/lib/typescript.js')).href;

register('data:text/javascript,' + encodeURIComponent(`
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
let ts;
export async function resolve(specifier, context, next) {
  if (specifier === 'server-only') return { url: 'data:text/javascript,export {}', shortCircuit: true };
  try {
    return await next(specifier, context);
  } catch (error) {
    // Next.js subpaths (next/link, next/navigation) have no "exports" map: ESM needs the .js file.
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

const { GET } = await import('../../app/api/i18n/available/route.ts');
const { LocaleTranslationPage, localeMenuEntries, localeStaticParams } = await import('../../lib/i18n/LocalePage.tsx');
const { JA_UI, TranslationNotice } = await import('../../lib/i18n/TranslatedPage.tsx');
const { catalogDecision, clearCatalogCache, getTranslation, listTranslations } = await import('../../lib/i18n/catalog.ts');
const { renderToStaticMarkup } = await import('react-dom/server');
const { createElement } = await import('react');
const { LOCALE_CODES } = await import('../../lib/i18n/locales.ts');
const { languageOptions, parseLanguageAvailability } = await import('../../components/HeaderControls.tsx');

const PAGE = '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop';
const REL = 'kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json';
const RELEASED = existsSync(path.join(REPO, 'content/i18n/approvals.json'));
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
const writeJson = (file, value) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`); };

/** Run `fn` with these environment variables (others as they are), then restore. */
async function withEnv(vars, fn) {
  const saved = {};
  for (const key of ['VERCEL', 'VERCEL_ENV', 'NODE_ENV']) { saved[key] = process.env[key]; delete process.env[key]; }
  Object.assign(process.env, vars);
  try { return await fn(); } finally {
    for (const [key, value] of Object.entries(saved)) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
  }
}
const menuData = async (vars) => withEnv(vars, async () => {
  const response = GET();
  assert.match(response.headers.get('content-type') ?? '', /application\/json/);
  return response.json();
});

const temps = [];
process.on('exit', () => { for (const dir of temps) rmSync(dir, { recursive: true, force: true }); });
/**
 * Run `fn` in a temporary repository whose content/translations holds exactly
 * one page: the real Sunbae source JSON and Japanese translation (other real
 * translations are not copied, so counts inside a fixture never depend on the
 * repository). `edit` may change it.
 */
async function inFixture(edit, fn) {
  const base = mkdtempSync(path.join(tmpdir(), 'haemil-menu-'));
  temps.push(base);
  for (const dir of ['source', 'ja']) {
    mkdirSync(path.dirname(path.join(base, 'content/translations', dir, REL)), { recursive: true });
    cpSync(path.join(REPO, 'content/translations', dir, REL), path.join(base, 'content/translations', dir, REL));
  }
  edit(path.join(base, 'content/translations'));
  const cwd = process.cwd();
  process.chdir(base); // the catalog reads <cwd>/content/translations
  clearCatalogCache();
  try { return await fn(); } finally { process.chdir(cwd); clearCatalogCache(); }
}
process.chdir(REPO);

// ---------------------------------------------------------------------------
// Menu data (route), version 2
// ---------------------------------------------------------------------------

const ja = (draft) => ({ code: 'ja', draft });

test('menu data on Preview: exactly the generated translated pages, each marked draft by the publish policy', async () => {
  const data = await menuData({ VERCEL_ENV: 'preview' });
  assert.equal(data.version, 2);
  // The repository may hold any number of translations; Sunbae must be among them,
  // as a draft before release and as a published page after it.
  assert.deepEqual(data.pages[PAGE], [ja(!RELEASED)]);
  const generated = await withEnv({ VERCEL_ENV: 'preview' }, () => localeStaticParams('ja').map(({ slug }) => `/${slug.join('/')}`));
  assert.deepEqual(Object.keys(data.pages).filter((p) => data.pages[p].some((l) => l.code === 'ja')), generated, 'same list as /ja/[...slug]');
  // Every listed locale has a generated page for that path, and its draft flag is the production decision.
  await withEnv({ VERCEL_ENV: 'preview' }, () => {
    for (const [sourcePath, locales] of Object.entries(data.pages)) {
      for (const { code, draft } of locales) {
        assert.ok(localeStaticParams(code).some(({ slug }) => `/${slug.join('/')}` === sourcePath), `${code} ${sourcePath}`);
        const entry = getTranslation(code, sourcePath).entry;
        assert.equal(draft, !catalogDecision(entry, 'production').render, `${code} ${sourcePath}`);
      }
    }
  });
  assert.deepEqual(Object.keys(data.pages), [...Object.keys(data.pages)].sort(), 'sorted');
  assert.ok(/^[\x20-\x7e]*$/.test(JSON.stringify(data)), 'no translated text in the data');
});

test('menu data on Production lists no draft (Vercel Production and a plain production build)', async () => {
  // Before release: nothing. After release: only the published Japanese Sunbae page, not marked draft.
  const expected = { version: 2, pages: RELEASED ? { [PAGE]: [ja(false)] } : {} };
  assert.deepEqual(await menuData({ VERCEL_ENV: 'production' }), expected);
  assert.deepEqual(await menuData({ NODE_ENV: 'production' }), expected);
  assert.deepEqual(await menuData({ VERCEL: '1' }), expected, 'unknown Vercel environment counts as production');
});

test('menu data leaves out stale and invalid translations and planned locales', async () => {
  // Stale: the stored English source changed after the translation was made.
  await inFixture((root) => {
    const file = path.join(root, 'source', REL);
    const doc = readJson(file);
    doc.units.find((u) => u.translate).hash = '0'.repeat(64);
    writeJson(file, doc);
  }, async () => {
    assert.equal(listTranslations()[0].validation, 'stale');
    assert.deepEqual(await menuData({ VERCEL_ENV: 'preview' }), { version: 2, pages: {} });
  });
  // Invalid: broken JSON.
  await inFixture((root) => writeFileSync(path.join(root, 'ja', REL), '{ "broken": '), async () => {
    assert.equal(listTranslations()[0].validation, 'invalid');
    assert.deepEqual(await menuData({ VERCEL_ENV: 'preview' }), { version: 2, pages: {} });
  });
  // Planned locale (no route yet): a valid Spanish copy is not listed.
  await inFixture((root) => {
    const doc = readJson(path.join(root, 'ja', REL));
    doc.locale = 'es';
    writeJson(path.join(root, 'es', REL), doc);
  }, async () => assert.deepEqual((await menuData({ VERCEL_ENV: 'preview' })).pages, { [PAGE]: [ja(true)] }));
});

test('menu data: several pages are sorted and each lists its own locales', async () => {
  await inFixture((root) => {
    for (const dir of ['source', 'ja']) {
      const doc = readJson(path.join(root, dir, REL));
      doc.sourcePath = '/kpop/a-first-page';
      writeJson(path.join(root, dir, 'kpop', 'a-first-page.json'), doc);
    }
  }, async () => {
    const data = await menuData({ VERCEL_ENV: 'preview' });
    assert.deepEqual(Object.keys(data.pages), ['/kpop/a-first-page', PAGE]);
    assert.deepEqual(Object.values(data.pages), [[ja(true)], [ja(true)]]);
  });
});

/** Copy the Sunbae page (source and Japanese) to /kpop/<slug>. */
function copyPage(root, slug) {
  for (const dir of ['source', 'ja']) {
    const doc = readJson(path.join(root, dir, REL));
    doc.sourcePath = `/kpop/${slug}`;
    writeJson(path.join(root, dir, 'kpop', `${slug}.json`), doc);
  }
}
const staticPaths = (vars) => withEnv(vars, () => localeStaticParams('ja').map(({ slug }) => `/${slug.join('/')}`));

test('menu data and static pages: a stale and an invalid page are left out, the others stay', async () => {
  await inFixture((root) => {
    for (const slug of ['ok-page', 'stale-page', 'broken-page']) copyPage(root, slug);
    const file = path.join(root, 'source', 'kpop', 'stale-page.json');
    const doc = readJson(file);
    doc.units.find((u) => u.translate).hash = '0'.repeat(64);
    writeJson(file, doc);
    writeFileSync(path.join(root, 'ja', 'kpop', 'broken-page.json'), '{ "broken": ');
  }, async () => {
    const state = Object.fromEntries(listTranslations().map((e) => [e.sourcePath, e.validation]));
    assert.deepEqual(state, { '/kpop/broken-page': 'invalid', '/kpop/ok-page': 'valid', '/kpop/stale-page': 'stale', [PAGE]: 'valid' });
    const data = await menuData({ VERCEL_ENV: 'preview' });
    assert.deepEqual(data, { version: 2, pages: { '/kpop/ok-page': [ja(true)], [PAGE]: [ja(true)] } });
    assert.deepEqual(await staticPaths({ VERCEL_ENV: 'preview' }), ['/kpop/ok-page', PAGE]);
    assert.deepEqual(await menuData({ VERCEL_ENV: 'production' }), { version: 2, pages: {} });
    assert.deepEqual(await staticPaths({ VERCEL_ENV: 'production' }), []);
  });
});

test('menu data and static pages with many translations: no fixed count, none in production', async () => {
  const slugs = Array.from({ length: 11 }, (_, i) => `many-page-${String(i + 1).padStart(2, '0')}`);
  await inFixture((root) => { for (const slug of slugs) copyPage(root, slug); }, async () => {
    const expected = [...slugs.map((slug) => `/kpop/${slug}`), PAGE].sort();
    const data = await menuData({ VERCEL_ENV: 'preview' });
    assert.deepEqual(Object.keys(data.pages), expected);
    assert.ok(Object.values(data.pages).every((locales) => locales.length === 1 && locales[0].code === 'ja' && locales[0].draft === true));
    assert.deepEqual(await staticPaths({ VERCEL_ENV: 'preview' }), expected);
    for (const vars of [{ VERCEL_ENV: 'production' }, { NODE_ENV: 'production' }]) {
      assert.deepEqual(await menuData(vars), { version: 2, pages: {} }, JSON.stringify(vars));
      assert.deepEqual(await staticPaths(vars), [], JSON.stringify(vars));
    }
  });
});

test('localeMenuEntries lists exactly the generated pages, with the same draft decision as the page notice', async () => {
  await withEnv({ VERCEL_ENV: 'preview' }, () => {
    clearCatalogCache();
    const listed = localeMenuEntries('ja');
    assert.deepEqual(listed.map((e) => e.sourcePath), localeStaticParams('ja').map(({ slug }) => `/${slug.join('/')}`));
    for (const { sourcePath, draft } of listed) {
      // The page element passes the notice to the renderer; its kind must match the menu flag.
      // (Read from the element tree: SiteHeader needs the Next.js router to render.)
      const page = LocaleTranslationPage({ locale: 'ja', slug: sourcePath.slice(1).split('/') });
      const notice = page.props.afterComponent.SiteHeader;
      assert.equal(notice.type, TranslationNotice, sourcePath);
      assert.equal(notice.props.kind, draft ? 'preview' : 'published', sourcePath);
      assert.equal(notice.props.englishPath, sourcePath);
    }
  });
  await withEnv({ VERCEL_ENV: 'production' }, () => {
    clearCatalogCache();
    assert.deepEqual(localeMenuEntries('ja'), RELEASED ? [{ sourcePath: PAGE, draft: false }] : []);
  });
  clearCatalogCache();
});

// ---------------------------------------------------------------------------
// Notice above a translated page
// ---------------------------------------------------------------------------

test('notice: a draft shows the preview notice; a published page shows the translation notice without draft or review claims', () => {
  const preview = renderToStaticMarkup(createElement(TranslationNotice, { englishPath: PAGE, ui: JA_UI, kind: 'preview' }));
  const published = renderToStaticMarkup(createElement(TranslationNotice, { englishPath: PAGE, ui: JA_UI, kind: 'published' }));
  assert.match(preview, /data-notice="preview"/);
  assert.ok(preview.includes('下書き') && preview.includes('公開していません'));
  assert.match(published, /data-notice="published"/);
  for (const word of ['下書き', '非公開', '公開していません', 'プレビュー', 'Draft', 'draft', 'ネイティブ', '校閲', '確認済み', '品質', 'チェック済み']) {
    assert.ok(!published.includes(word), `published notice must not say ${word}`);
  }
  assert.ok(published.includes(JA_UI.publishedLabel) && published.includes(JA_UI.publishedBody));
  // Both keep the link to the English original.
  for (const html of [preview, published]) {
    assert.ok(html.includes(`href="${PAGE}"`) && html.includes('hrefLang="en"') && html.includes(JA_UI.englishOriginal));
  }
});

// ---------------------------------------------------------------------------
// Menu entries (HeaderControls)
// ---------------------------------------------------------------------------

const entries = (pathname, availability) => {
  const { current, options } = languageOptions(pathname, availability);
  return { current: current.code, options: options.map((o) => `${o.locale.code}:${o.href ?? '-'}${o.current ? ':current' : ''}${o.draft ? ':draft' : ''}`) };
};
/** Version 2 data from { path: [codes] }; every listed page has the same draft flag. */
const available = (pages, draft = true) => parseLanguageAvailability({
  version: 2,
  pages: Object.fromEntries(Object.entries(pages).map(([p, codes]) => [p, codes.map((code) => ({ code, draft }))])),
});

test('English page with a Japanese translation: English is current, Japanese links to /ja + the English slug', () => {
  assert.deepEqual(entries(PAGE, available({ [PAGE]: ['ja'] })), { current: 'en', options: ['en:-:current', `ja:/ja${PAGE}:draft`] });
});

test('Japanese page: English links back to the English path, Japanese is current', () => {
  assert.deepEqual(entries(`/ja${PAGE}`, available({ [PAGE]: ['ja'] })), { current: 'ja', options: [`en:${PAGE}`, 'ja:-:current:draft'] });
});

test('draft label per page: a published translation has none, a draft keeps it, English never has one', () => {
  assert.deepEqual(entries(PAGE, available({ [PAGE]: ['ja'] }, false)).options, ['en:-:current', `ja:/ja${PAGE}`]);
  assert.deepEqual(entries(`/ja${PAGE}`, available({ [PAGE]: ['ja'] }, false)).options, [`en:${PAGE}`, 'ja:-:current']);
  const mixed = parseLanguageAvailability({ version: 2, pages: { [PAGE]: [{ code: 'ja', draft: false }, { code: 'es', draft: true }] } });
  assert.deepEqual(entries(PAGE, mixed).options, ['en:-:current', `ja:/ja${PAGE}`, `es:/es${PAGE}:draft`]);
});

test('English page without a translation: only English, no link', () => {
  const data = available({ [PAGE]: ['ja'] });
  assert.deepEqual(entries('/kpop/what-is-maknae', data), { current: 'en', options: ['en:-:current'] });
  assert.deepEqual(entries('/', data), { current: 'en', options: ['en:-:current'] });
});

test('no data (request failed) or a translated URL the data does not list: no guessed links', () => {
  assert.deepEqual(entries(PAGE, null), { current: 'en', options: ['en:-:current'] });
  assert.deepEqual(entries(`/ja${PAGE}`, null), { current: 'ja', options: ['ja:-:current'] });
  assert.deepEqual(entries('/ja/kpop/not-translated', available({ [PAGE]: ['ja'] })), { current: 'ja', options: ['ja:-:current'] });
  assert.deepEqual(entries('/ja', available({ [PAGE]: ['ja'] })), { current: 'ja', options: ['ja:-:current'] });
});

test('a new locale in the data works without new menu code (order from locales.ts)', () => {
  const data = available({ [PAGE]: ['es', 'zh-Hant', 'ja'] });
  assert.deepEqual(entries(PAGE, data).options, ['en:-:current', `ja:/ja${PAGE}:draft`, `zh-Hant:/zh-hant${PAGE}:draft`, `es:/es${PAGE}:draft`]);
  assert.deepEqual(entries(`/zh-hant${PAGE}`, data).options, [`en:${PAGE}`, `ja:/ja${PAGE}:draft`, 'zh-Hant:-:current:draft', `es:/es${PAGE}:draft`]);
  assert.deepEqual(LOCALE_CODES.slice(0, 2), ['en', 'ja']);
});

test('menu data validation drops anything unexpected', () => {
  const data = parseLanguageAvailability({
    version: 2,
    pages: {
      [PAGE]: [ja(false), { code: 'xx', draft: false }, { code: 'en', draft: false }, 3, 'ja', { code: 'es' }, { code: 'es', draft: 'no' }, null],
      '/kpop/twice': [ja(false), ja(true)], // ambiguous: left out
      '../kpop/x': [ja(true)], '/kpop/X': [ja(true)], '/kpop/x/': [ja(true)], '//kpop': [ja(true)], '/kpop/%2e%2e': [ja(true)],
      '/kpop/only-unknown': [{ code: 'xx', draft: true }], '/kpop/not-a-list': ja(true),
    },
  });
  assert.deepEqual([...data.entries()], [[PAGE, [ja(false)]]]);
  for (const bad of [null, 'x', [], { version: 3, pages: { [PAGE]: [ja(true)] } }, { version: 2, pages: [] }, { version: 2 }, { version: '2', pages: { [PAGE]: [ja(true)] } }]) {
    assert.equal(parseLanguageAvailability(bad).size, 0, JSON.stringify(bad));
  }
});

test('old version 1 data is ignored safely: no exception, no links', () => {
  const v1 = { version: 1, pages: { [PAGE]: ['ja'] } };
  const data = parseLanguageAvailability(v1);
  assert.equal(data.size, 0);
  assert.deepEqual(entries(PAGE, data), { current: 'en', options: ['en:-:current'] });
  assert.deepEqual(entries(`/ja${PAGE}`, data), { current: 'ja', options: ['ja:-:current'] });
});
