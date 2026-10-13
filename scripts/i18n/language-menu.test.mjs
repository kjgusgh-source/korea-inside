#!/usr/bin/env node
/**
 * Tests for the header language menu (offline; no network, no API calls).
 *
 *   node --test scripts/i18n/language-menu.test.mjs
 *
 * - app/api/i18n/available/route.ts: the menu data per environment, built
 *   from the same list as the locale routes.
 * - components/HeaderControls.tsx: validating that data and building the
 *   menu entries.
 *
 * Node 22 strips TypeScript types natively; .tsx files are compiled here with
 * the project's own TypeScript (no extra package). "server-only" is replaced
 * by an empty module, as in catalog.test.mjs, and Next.js subpath imports
 * such as "next/link" resolve to their .js files. Fixtures are written to a
 * temporary folder; repository files are only read.
 */
import { register } from 'node:module';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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
const { localeStaticParams } = await import('../../lib/i18n/LocalePage.tsx');
const { clearCatalogCache, listTranslations } = await import('../../lib/i18n/catalog.ts');
const { LOCALE_CODES } = await import('../../lib/i18n/locales.ts');
const { languageOptions, parseLanguageAvailability } = await import('../../components/HeaderControls.tsx');

const PAGE = '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop';
const REL = 'kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json';
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
/** Run `fn` in a temporary repository whose content/translations is a copy that `edit` may change. */
async function inFixture(edit, fn) {
  const base = mkdtempSync(path.join(tmpdir(), 'haemil-menu-'));
  temps.push(base);
  cpSync(path.join(REPO, 'content/translations'), path.join(base, 'content/translations'), { recursive: true });
  edit(path.join(base, 'content/translations'));
  const cwd = process.cwd();
  process.chdir(base); // the catalog reads <cwd>/content/translations
  clearCatalogCache();
  try { return await fn(); } finally { process.chdir(cwd); clearCatalogCache(); }
}
process.chdir(REPO);

// ---------------------------------------------------------------------------
// Menu data (route)
// ---------------------------------------------------------------------------

test('menu data on Preview: exactly the generated translated pages, paths and locale codes only', async () => {
  const data = await menuData({ VERCEL_ENV: 'preview' });
  assert.deepEqual(data, { version: 1, pages: { [PAGE]: ['ja'] } });
  const generated = await withEnv({ VERCEL_ENV: 'preview' }, () => localeStaticParams('ja').map(({ slug }) => `/${slug.join('/')}`));
  assert.deepEqual(Object.keys(data.pages).filter((p) => data.pages[p].includes('ja')), generated, 'same list as /ja/[...slug]');
  assert.ok(/^[\x20-\x7e]*$/.test(JSON.stringify(data)), 'no translated text in the data');
});

test('menu data on Production lists no draft (Vercel Production and a plain production build)', async () => {
  assert.deepEqual(await menuData({ VERCEL_ENV: 'production' }), { version: 1, pages: {} });
  assert.deepEqual(await menuData({ NODE_ENV: 'production' }), { version: 1, pages: {} });
  assert.deepEqual(await menuData({ VERCEL: '1' }), { version: 1, pages: {} }, 'unknown Vercel environment counts as production');
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
    assert.deepEqual(await menuData({ VERCEL_ENV: 'preview' }), { version: 1, pages: {} });
  });
  // Invalid: broken JSON.
  await inFixture((root) => writeFileSync(path.join(root, 'ja', REL), '{ "broken": '), async () => {
    assert.equal(listTranslations()[0].validation, 'invalid');
    assert.deepEqual(await menuData({ VERCEL_ENV: 'preview' }), { version: 1, pages: {} });
  });
  // Planned locale (no route yet): a valid Spanish copy is not listed.
  await inFixture((root) => {
    const doc = readJson(path.join(root, 'ja', REL));
    doc.locale = 'es';
    writeJson(path.join(root, 'es', REL), doc);
  }, async () => assert.deepEqual((await menuData({ VERCEL_ENV: 'preview' })).pages, { [PAGE]: ['ja'] }));
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
    assert.deepEqual(Object.values(data.pages), [['ja'], ['ja']]);
  });
});

// ---------------------------------------------------------------------------
// Menu entries (HeaderControls)
// ---------------------------------------------------------------------------

const entries = (pathname, availability) => {
  const { current, options } = languageOptions(pathname, availability);
  return { current: current.code, options: options.map((o) => `${o.locale.code}:${o.href ?? '-'}${o.current ? ':current' : ''}`) };
};
const available = (pages) => parseLanguageAvailability({ version: 1, pages });

test('English page with a Japanese translation: English is current, Japanese links to /ja + the English slug', () => {
  assert.deepEqual(entries(PAGE, available({ [PAGE]: ['ja'] })), { current: 'en', options: ['en:-:current', `ja:/ja${PAGE}`] });
});

test('Japanese page: English links back to the English path, Japanese is current', () => {
  assert.deepEqual(entries(`/ja${PAGE}`, available({ [PAGE]: ['ja'] })), { current: 'ja', options: [`en:${PAGE}`, 'ja:-:current'] });
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
  assert.deepEqual(entries(PAGE, data).options, ['en:-:current', `ja:/ja${PAGE}`, `zh-Hant:/zh-hant${PAGE}`, `es:/es${PAGE}`]);
  assert.deepEqual(entries(`/zh-hant${PAGE}`, data).options, [`en:${PAGE}`, `ja:/ja${PAGE}`, 'zh-Hant:-:current', `es:/es${PAGE}`]);
  assert.deepEqual(LOCALE_CODES.slice(0, 2), ['en', 'ja']);
});

test('menu data validation drops anything unexpected', () => {
  const data = parseLanguageAvailability({
    version: 1,
    pages: {
      [PAGE]: ['ja', 'xx', 'en', 3],
      '../kpop/x': ['ja'], '/kpop/X': ['ja'], '/kpop/x/': ['ja'], '//kpop': ['ja'], '/kpop/%2e%2e': ['ja'],
      '/kpop/only-unknown': ['xx'], '/kpop/not-a-list': 'ja',
    },
  });
  assert.deepEqual([...data.entries()], [[PAGE, ['ja']]]);
  for (const bad of [null, 'x', [], { version: 2, pages: { [PAGE]: ['ja'] } }, { version: 1, pages: [] }, { version: 1 }]) {
    assert.equal(parseLanguageAvailability(bad).size, 0, JSON.stringify(bad));
  }
});
