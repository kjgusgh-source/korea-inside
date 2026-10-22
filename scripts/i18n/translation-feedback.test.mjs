#!/usr/bin/env node
/**
 * Tests for the reader feedback block of the Japanese Sunbae page (offline;
 * no network, no API calls, nothing is sent to /api/requests or Supabase).
 *
 *   node --test scripts/i18n/translation-feedback.test.mjs
 *
 * - lib/i18n/LocalePage.tsx: where the block is shown (only the published
 *   Japanese Sunbae page) and its topic title.
 * - components/TranslationFeedback.tsx: the form itself (input checks, the
 *   request it sends, success and failure handling, one request at a time,
 *   open and close, focus).
 *
 * Display: Japanese is not a public locale in the repository and no approval
 * record exists. As in sitemap-hreflang.test.mjs, public pages are tested with
 * a second copy of the modules in which lib/i18n/locales.ts marks Japanese
 * public ("?public-ja", changed in memory by this file's module loader; the
 * file on disk is only read). Approval records, approved statuses and source
 * freshness records are written to temporary folders only. Pages are
 * rendered with the real React server renderer; components/SiteHeader is
 * replaced by an empty component because it needs the Next.js router.
 *
 * Form: there is no DOM in Node and no test package is added. The component
 * is therefore loaded a second time ("?hooks") with React's useState, useRef
 * and useId replaced by a minimal hook runtime defined below; everything else
 * is the real component code and the real React elements it returns. The
 * test calls the event handlers on those elements as a browser would
 * (click, input, submit), mocks fetch and window.location, and renders again
 * after each step. What this cannot show (real keyboard events, focus rings,
 * layout and widths) is checked in a browser, outside this file.
 *
 * Node 22 strips TypeScript types natively; .tsx files (and .ts files of the
 * public copy) are compiled with the project's own TypeScript, as in the
 * other i18n tests.
 */
import { register } from 'node:module';
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
const HOOKS = '?hooks';

/** Minimal hook runtime for one mounted TranslationFeedback (see the header). */
const HOOK_RUNTIME = 'data:text/javascript,' + encodeURIComponent(`
const rt = { states: [], refs: [], s: 0, r: 0 };
export function __reset() { rt.states = []; rt.refs = []; rt.s = 0; rt.r = 0; }
export function __begin() { rt.s = 0; rt.r = 0; }
export function useState(initial) {
  const i = rt.s++;
  if (!(i in rt.states)) rt.states[i] = typeof initial === 'function' ? initial() : initial;
  return [rt.states[i], (value) => { rt.states[i] = typeof value === 'function' ? value(rt.states[i]) : value; }];
}
export function useRef(initial) {
  const i = rt.r++;
  if (!(i in rt.refs)) rt.refs[i] = { current: initial };
  return rt.refs[i];
}
export function useId() { return '_t_'; }
`);
const SITE_HEADER_STUB = 'data:text/javascript,' + encodeURIComponent('export default function SiteHeader() { return null; }');

register('data:text/javascript,' + encodeURIComponent(`
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const REPO_URL = ${JSON.stringify(pathToFileURL(REPO).href + '/')};
const PUBLIC_JA = ${JSON.stringify(PUBLIC_JA)};
const HOOKS = ${JSON.stringify(HOOKS)};
const QUERIES = [PUBLIC_JA, HOOKS];
const HOOK_RUNTIME = ${JSON.stringify(HOOK_RUNTIME)};
const SITE_HEADER_STUB = ${JSON.stringify(SITE_HEADER_STUB)};
const JA_PRIVATE = 'support: "preview",\\n    publication: "not-public",';
const JA_PUBLIC = 'support: "preview",\\n    publication: "public",';
const REACT_IMPORT = 'from "react";';
let ts;
const own = (url) => url.startsWith(REPO_URL) && !url.slice(REPO_URL.length).startsWith('node_modules/');
const queryOf = (value) => (value ? QUERIES.find((q) => value.endsWith(q)) : undefined);
async function resolveInner(specifier, context, next) {
  if (specifier === 'server-only') return { url: 'data:text/javascript,export {}', shortCircuit: true };
  if (/(^|\\/)components\\/SiteHeader(\\.tsx)?$/.test(specifier)) return { url: SITE_HEADER_STUB, shortCircuit: true };
  try {
    return await next(specifier, context);
  } catch (error) {
    if (/^next\\/[a-z-]+$/.test(specifier)) return next(specifier + '.js', context);
    if (!/^\\.\\.?\\//.test(specifier) || /\\.[cm]?[jt]sx?$/.test(specifier)) throw error;
    try { return await next(specifier + '.ts', context); } catch { return next(specifier + '.tsx', context); }
  }
}
export async function resolve(specifier, context, next) {
  const parentQuery = queryOf(context.parentURL);
  const parentURL = parentQuery ? context.parentURL.slice(0, -parentQuery.length) : context.parentURL;
  const ownQuery = queryOf(specifier);
  const bare = ownQuery ? specifier.slice(0, -ownQuery.length) : specifier;
  const result = await resolveInner(bare, { ...context, parentURL }, next);
  // "?public-ja": every repository module below it is loaded again with the query.
  // "?hooks": only the module asked for (its React import is replaced, nothing else).
  const query = ownQuery ?? (parentQuery === PUBLIC_JA ? PUBLIC_JA : undefined);
  if (query && own(result.url)) return { ...result, url: result.url + query, shortCircuit: true };
  return result;
}
export async function load(url, context, next) {
  const query = queryOf(url);
  const plain = query ? url.slice(0, -query.length) : url;
  if (plain.startsWith('file:') && /\\.tsx?$/.test(plain) && (query || plain.endsWith('.tsx'))) {
    ts ??= (await import(${JSON.stringify(TYPESCRIPT)})).default;
    let source = readFileSync(fileURLToPath(plain), 'utf8');
    if (query === PUBLIC_JA && plain.endsWith('/lib/i18n/locales.ts')) {
      if (source.split(JA_PRIVATE).length !== 2) throw new Error('locales.ts: Japanese entry not found as expected');
      source = source.replace(JA_PRIVATE, JA_PUBLIC);
    }
    if (query === HOOKS) {
      if (!plain.endsWith('/components/TranslationFeedback.tsx')) throw new Error('hooks runtime is only for TranslationFeedback');
      if (source.split(REACT_IMPORT).length !== 2) throw new Error('TranslationFeedback: React import not found as expected');
      source = source.replace(REACT_IMPORT, 'from ' + JSON.stringify(HOOK_RUNTIME) + ';');
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

// Repository as it is (Japanese not public) and the same modules with Japanese public in memory.
const real = {
  page: await import('../../lib/i18n/LocalePage.tsx'),
  catalog: await import('../../lib/i18n/catalog.ts'),
  locales: await import('../../lib/i18n/locales.ts'),
  Feedback: (await import('../../components/TranslationFeedback.tsx')).default,
};
const pub = {
  page: await import('../../lib/i18n/LocalePage.tsx' + PUBLIC_JA),
  catalog: await import('../../lib/i18n/catalog.ts' + PUBLIC_JA),
  locales: await import('../../lib/i18n/locales.ts' + PUBLIC_JA),
  Feedback: (await import('../../components/TranslationFeedback.tsx' + PUBLIC_JA)).default,
};
const hooked = await import('../../components/TranslationFeedback.tsx' + HOOKS);
const runtime = await import(HOOK_RUNTIME);
const englishSunbae = (await import('../../app/kpop/what-does-sunbae-and-hoobae-mean-in-kpop/page.tsx')).default;
const { checkAll, writeRecord } = await import('./check-sources.mjs');
const { renderToStaticMarkup } = await import('react-dom/server');
const { createElement, isValidElement } = await import('react');

const SUNBAE = '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop';
const ANIME = '/kpop/why-kpop-idols-feel-like-anime-characters';
const PAGES = [SUNBAE, ANIME];
const TOPIC = 'Japanese translation feedback — Sunbae';
const TOOL_FILES = ['scripts/i18n/check-sources.mjs', 'scripts/i18n/extract.mjs', 'node_modules/typescript/package.json'];
const APPROVALS = 'content/i18n/approvals.json';
const rel = (sourcePath) => `${sourcePath.slice(1)}.json`;
const pageFile = (sourcePath) => `app${sourcePath}/page.tsx`;
const slugOf = (sourcePath) => sourcePath.slice(1).split('/');
const sha = (file) => `sha256:${createHash('sha256').update(readFileSync(file)).digest('hex')}`;
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
const writeJson = (file, value) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`); };

// The approved Japanese copy of the block (must not change without a new review).
const COPY = {
  heading: '翻訳について',
  body: 'この記事はAIを使って英語から日本語に翻訳・編集しています。不自然な表現や内容の誤りにお気づきでしたら、ぜひお知らせください。',
  open: 'フィードバックを送る',
  label: '気になる点を教えてください',
  submit: '送信する',
  sending: '送信中…',
  empty: '内容を入力してください。',
  success: 'フィードバックを受け付けました。ありがとうございます。いただいた内容は、HAEMILで確認します。',
  failure: '送信できませんでした。時間をおいて、もう一度お試しください。',
};

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
 * Temporary repository with the real Sunbae and anime pages (source JSON,
 * Japanese translation, English page.tsx, checker and extractor code) and a
 * source freshness record written by the real checker. `approve` maps a page
 * to the approval kinds it gets; an approved page also gets status
 * "approved" unless `keepDraft` lists it. `edit` runs last.
 */
function fixture({ approve = {}, keepDraft = [], edit = () => {} } = {}) {
  const base = mkdtempSync(path.join(tmpdir(), 'haemil-feedback-'));
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
  const records = [];
  for (const [sourcePath, kinds] of Object.entries(approve)) {
    const translation = path.join(base, 'content/translations/ja', rel(sourcePath));
    if (!keepDraft.includes(sourcePath)) writeJson(translation, { ...readJson(translation), status: 'approved' });
    const source = path.join(base, 'content/translations/source', rel(sourcePath));
    for (const kind of kinds) {
      records.push({
        kind, locale: 'ja', sourcePath, sourceSha256: sha(source), translationSha256: sha(translation),
        approvedBy: 'test fixture (not an approval)', approvedAt: '2026-10-22T09:00:00+09:00',
      });
    }
  }
  writeRecord(base, checkAll(base));
  if (records.length > 0) writeJson(path.join(base, APPROVALS), { schemaVersion: 1, records });
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

/** Every React element in a tree (children, and elements passed in other props). */
function elements(node, out = []) {
  if (Array.isArray(node)) { for (const child of node) elements(child, out); return out; }
  if (!isValidElement(node)) return out;
  out.push(node);
  for (const [key, value] of Object.entries(node.props ?? {})) {
    if (key === 'children' || isValidElement(value) || Array.isArray(value)) elements(value, out);
    else if (value && typeof value === 'object' && !Array.isArray(value)) for (const v of Object.values(value)) elements(v, out);
  }
  return out;
}

/**
 * What a reader gets for the Japanese page: 404, or the page with the
 * feedback block (topic title, number of blocks in the HTML, whether the
 * block is the last child of <article>) or without it.
 */
function japanesePage(m, sourcePath) {
  let page;
  try {
    page = m.page.LocaleTranslationPage({ locale: 'ja', slug: slugOf(sourcePath) });
  } catch (error) {
    assert.match(String(error?.digest ?? error?.message), /NEXT_HTTP_ERROR_FALLBACK;404|NEXT_NOT_FOUND/, 'only a 404 may be thrown');
    return 404;
  }
  const blocks = elements(page).filter((e) => e.type === m.Feedback);
  const html = renderToStaticMarkup(page);
  const count = html.split('data-feedback="translation"').length - 1;
  const article = html.slice(html.indexOf('<article'), html.lastIndexOf('</article>'));
  return {
    feedback: blocks.length > 0,
    topics: blocks.map((b) => b.props.topicTitle),
    count,
    lastInArticle: count === 1 && /<section[^>]*data-feedback="translation"[\s\S]*<\/section>$/.test(article)
      && article.lastIndexOf('<section') === article.indexOf('<section aria-labelledby'),
    html,
  };
}
const shownOn = (m, sourcePath) => {
  const result = japanesePage(m, sourcePath);
  return result === 404 ? 404 : result.feedback;
};

// ---------------------------------------------------------------------------
// A. Where the block is shown
// ---------------------------------------------------------------------------

test('repository data: the Japanese Sunbae draft has no feedback block on Preview and is not served on Production', async () => {
  assert.equal(existsSync(path.join(REPO, APPROVALS)), false, 'no approval file is committed');
  assert.equal(real.locales.LOCALES.ja.publication, 'not-public');
  assert.equal(readJson(path.join(REPO, 'content/translations/ja', rel(SUNBAE))).status, 'draft');
  process.chdir(REPO);
  for (const m of [real, pub]) m.catalog.clearCatalogCache();
  await withEnv(PREVIEW, () => {
    const sunbae = japanesePage(real, SUNBAE);
    assert.notEqual(sunbae, 404, 'the draft renders on Preview');
    assert.equal(sunbae.feedback, false);
    assert.equal(sunbae.count, 0);
    assert.ok(sunbae.html.includes('data-notice="preview"'), 'draft notice');
    assert.equal(shownOn(real, ANIME), false);
  });
  for (const vars of [PRODUCTION, { NODE_ENV: 'production' }]) {
    await withEnv(vars, () => {
      assert.equal(shownOn(real, SUNBAE), 404, JSON.stringify(vars));
      assert.equal(shownOn(real, ANIME), 404, JSON.stringify(vars));
    });
  }
});

test('published Japanese Sunbae (public locale, approved, quality + production records, verified source): one block, the fixed topic, at the end of the article', async () => {
  const base = fixture({ approve: { [SUNBAE]: ['quality', 'production'] } });
  for (const vars of [PRODUCTION, PREVIEW]) {
    await inRepo(base, vars, () => {
      const page = japanesePage(pub, SUNBAE);
      assert.notEqual(page, 404, JSON.stringify(vars));
      assert.equal(page.feedback, true, JSON.stringify(vars));
      assert.deepEqual(page.topics, [TOPIC]);
      assert.equal(page.count, 1, 'exactly one block');
      assert.ok(page.lastInArticle, 'last child of <article>');
      assert.ok(page.html.includes('data-notice="published"'), 'published notice');
      // The anime page is still a draft: no block (Preview), not served (Production).
      assert.equal(shownOn(pub, ANIME), vars === PRODUCTION ? 404 : false);
    });
  }
});

test('status "draft" blocks the block even with matching approval records', async () => {
  const base = fixture({ approve: { [SUNBAE]: ['quality', 'production', 'indexing'] }, keepDraft: [SUNBAE] });
  await inRepo(base, PRODUCTION, () => assert.equal(shownOn(pub, SUNBAE), 404));
  await inRepo(base, PREVIEW, () => assert.equal(shownOn(pub, SUNBAE), false));
});

test('Japanese not public (repository locales.ts) blocks the block even when everything else is approved', async () => {
  const base = fixture({ approve: { [SUNBAE]: ['quality', 'production', 'indexing'] } });
  await inRepo(base, PRODUCTION, () => {
    assert.equal(shownOn(real, SUNBAE), 404);
    assert.equal(shownOn(pub, SUNBAE), true, 'same data with a public locale shows it');
  });
  await inRepo(base, PREVIEW, () => assert.equal(shownOn(real, SUNBAE), false));
});

test('a missing approval record blocks the block (quality or production; no records at all)', async () => {
  const cases = [[['production'], 'no quality'], [['quality'], 'no production'], [['indexing'], 'indexing only']];
  for (const [kinds, label] of cases) {
    const base = fixture({ approve: { [SUNBAE]: kinds } });
    await inRepo(base, PRODUCTION, () => assert.equal(shownOn(pub, SUNBAE), 404, label));
    await inRepo(base, PREVIEW, () => assert.equal(shownOn(pub, SUNBAE), false, label));
  }
  // Status "approved" without any approval file.
  const none = fixture({ edit: (root) => {
    const file = path.join(root, 'content/translations/ja', rel(SUNBAE));
    writeJson(file, { ...readJson(file), status: 'approved' });
  } });
  await inRepo(none, PRODUCTION, () => assert.equal(shownOn(pub, SUNBAE), 404, 'no records'));
  await inRepo(none, PREVIEW, () => assert.equal(shownOn(pub, SUNBAE), false, 'no records'));
});

test('records for other bytes or an unverified English source block the block', async () => {
  // The translation changed after it was approved: the records no longer match.
  const changed = fixture({ approve: { [SUNBAE]: ['quality', 'production'] }, edit: (root) => {
    const file = path.join(root, 'content/translations/ja', rel(SUNBAE));
    writeFileSync(file, `${readFileSync(file, 'utf8').trimEnd()}\n\n`);
  } });
  await inRepo(changed, PRODUCTION, () => assert.equal(shownOn(pub, SUNBAE), 404, 'changed translation'));
  // The source freshness record is missing.
  const unverified = fixture({ approve: { [SUNBAE]: ['quality', 'production'] }, edit: (root) => rmSync(path.join(root, 'content/i18n/source-freshness.json')) });
  await inRepo(unverified, PRODUCTION, () => assert.equal(shownOn(pub, SUNBAE), 404, 'unverified source'));
  await inRepo(unverified, PREVIEW, () => assert.equal(shownOn(pub, SUNBAE), false, 'unverified source'));
});

test('another published Japanese article gets no block; Sunbae keeps its own', async () => {
  const base = fixture({ approve: { [SUNBAE]: ['quality', 'production'], [ANIME]: ['quality', 'production'] } });
  await inRepo(base, PRODUCTION, () => {
    const anime = japanesePage(pub, ANIME);
    assert.notEqual(anime, 404, 'the anime page is published in this fixture');
    assert.ok(anime.html.includes('data-notice="published"'));
    assert.equal(anime.feedback, false);
    assert.equal(anime.count, 0);
    assert.deepEqual(japanesePage(pub, SUNBAE).topics, [TOPIC]);
  });
});

test('English Sunbae page: no feedback block (the English route does not use the Japanese renderer)', async () => {
  const tree = englishSunbae();
  const all = elements(tree);
  assert.ok(all.length > 10, 'the English page element tree was read');
  assert.ok(!all.some((e) => e.type === real.Feedback || e.type === pub.Feedback || e.type === hooked.default));
  assert.ok(!all.some((e) => e.props?.['data-feedback'] !== undefined));
  const html = renderToStaticMarkup(tree);
  assert.ok(html.includes('<article') && !html.includes('data-feedback') && !html.includes('翻訳について'));
});

// ---------------------------------------------------------------------------
// B and C. The form (real component code, minimal hook runtime, mocked fetch)
// ---------------------------------------------------------------------------

/**
 * Mount the component with the hook runtime. Returns helpers that act as a
 * browser would and re-render after each step. Elements with a ref get a
 * stable fake node; focus() only works when no ancestor is hidden (as in a
 * browser). requestAnimationFrame callbacks run after the next render.
 */
function mount({ location = { origin: 'https://haemilkorea.com', pathname: `/ja${SUNBAE}`, search: '', hash: '' }, respond } = {}) {
  runtime.__reset();
  const nodes = new Map();
  const frames = [];
  const calls = [];
  let tree = null;
  let active = null;
  const nameOf = (el) => `${el.type}#${el.props.id ?? el.props['aria-controls'] ?? el.props.type ?? ''}`;
  const visible = (name) => {
    let found = false;
    (function walk(node, hidden) {
      if (Array.isArray(node)) { node.forEach((n) => walk(n, hidden)); return; }
      if (!isValidElement(node)) return;
      const isHidden = hidden || node.props.hidden === true;
      if (typeof node.type === 'string' && nameOf(node) === name && !isHidden) found = true;
      walk(node.props.children, isHidden);
    })(tree, false);
    return found;
  };
  globalThis.window = { location: { ...location, href: `${location.origin}${location.pathname}${location.search}${location.hash}` } };
  globalThis.requestAnimationFrame = (fn) => { frames.push(fn); return frames.length; };
  globalThis.fetch = async (url, init) => {
    calls.push({ url, method: init?.method, headers: init?.headers, body: JSON.parse(init?.body ?? 'null') });
    return respond(calls.length);
  };
  const render = () => {
    runtime.__begin();
    tree = hooked.default({ topicTitle: TOPIC });
    for (const el of elements(tree)) {
      const ref = el.props.ref ?? el.ref;
      if (ref && typeof ref === 'object') {
        const name = nameOf(el);
        if (!nodes.has(name)) nodes.set(name, { name, focus() { if (visible(name)) active = name; } });
        ref.current = nodes.get(name);
      }
    }
    while (frames.length > 0) frames.shift()();
    return tree;
  };
  render();
  const all = () => elements(tree);
  const one = (predicate, label) => {
    const found = all().filter(predicate);
    assert.equal(found.length, 1, label);
    return found[0];
  };
  const text = (node) => {
    if (node === null || node === undefined || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(text).join('');
    return isValidElement(node) ? text(node.props.children) : '';
  };
  const q = {
    section: () => one((e) => e.type === 'section', 'section'),
    opener: () => one((e) => e.type === 'button' && e.props['aria-controls'], 'opener'),
    panel: () => one((e) => e.props.id === q.opener().props['aria-controls'], 'panel'),
    form: () => one((e) => e.type === 'form', 'form'),
    field: () => one((e) => e.type === 'textarea', 'textarea'),
    label: () => one((e) => e.type === 'label', 'label'),
    submit: () => one((e) => e.type === 'button' && e.props.type === 'submit', 'submit'),
    status: () => one((e) => e.props.role === 'status', 'status'),
    count: () => one((e) => typeof e.props.id === 'string' && e.props.id.endsWith('-count'), 'count'),
  };
  const ui = {
    q, calls, text,
    get active() { return active; },
    get tree() { return tree; },
    isOpen: () => q.opener().props['aria-expanded'] === true && q.panel().props.hidden === false,
    isClosed: () => q.opener().props['aria-expanded'] === false && q.panel().props.hidden === true,
    message: () => text(q.status()),
    value: () => q.field().props.value,
    focus: (name) => nodes.get(name)?.focus(),
    fieldName: () => nameOf(q.field()),
    openerName: () => nameOf(q.opener()),
    /** Click the opener button (a native button: Enter and Space do the same). */
    toggle: () => { q.opener().props.onClick({}); render(); },
    /** Type into the textarea: the browser keeps at most maxLength characters and ignores input when read-only. */
    type: (value) => {
      const field = q.field();
      if (field.props.readOnly) return;
      field.props.onChange({ target: { value: value.slice(0, field.props.maxLength) } });
      render();
    },
    /** A value set without the browser limit (for example by a script). */
    setRaw: (value) => { q.field().props.onChange({ target: { value } }); render(); },
    /** Submit the form (submit button or Enter in a single-line control); resolves when the handler finishes. */
    submit: async () => {
      let prevented = false;
      const done = q.form().props.onSubmit({ preventDefault: () => { prevented = true; } });
      render();
      assert.equal(prevented, true, 'no page navigation');
      await done;
      render();
    },
    /** Start a submission without waiting for it. */
    submitNow: () => {
      const done = q.form().props.onSubmit({ preventDefault() {} });
      render();
      return done.then(render);
    },
  };
  return ui;
}

const json = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body });
const notJson = (status) => ({ ok: status >= 200 && status < 300, status, json: async () => { throw new SyntaxError('Unexpected token <'); } });
const ok = () => json(200, { ok: true });
function deferred() {
  let resolve;
  const promise = new Promise((r) => { resolve = r; });
  return { promise, resolve };
}

test('server render: collapsed by default, approved Japanese copy, the field is inside the hidden panel', () => {
  const html = renderToStaticMarkup(createElement(real.Feedback, { topicTitle: TOPIC }));
  assert.match(html, /<button[^>]*type="button"[^>]*aria-expanded="false"[^>]*aria-controls="([^"]+)"/);
  const panelId = html.match(/aria-controls="([^"]+)"/)[1];
  assert.match(html, new RegExp(`<div id="${panelId}" hidden="">`), 'panel hidden');
  assert.ok(html.indexOf('<textarea') > html.indexOf(`<div id="${panelId}" hidden="">`), 'textarea inside the hidden panel');
  for (const key of ['heading', 'body', 'open', 'label', 'submit']) assert.ok(html.includes(COPY[key]), key);
  for (const key of ['sending', 'empty', 'success', 'failure']) assert.ok(!html.includes(COPY[key]), `${key} not shown yet`);
  assert.match(html, /maxLength="1000"/);
  assert.ok(html.includes('0 / 1000文字'));
  assert.match(html, /<section aria-labelledby="([^"]+)" data-feedback="translation"/);
  const headingId = html.match(/<section aria-labelledby="([^"]+)"/)[1];
  assert.match(html, new RegExp(`<h2 id="${headingId}"`), 'section labelled by its heading');
});

test('open and close: the opener toggles the panel and moves focus to the field when it opens', () => {
  const ui = mount({ respond: ok });
  assert.ok(ui.isClosed());
  assert.equal(ui.q.opener().props.type, 'button', 'native button (keyboard: Enter and Space)');
  assert.equal(ui.text(ui.q.opener()), COPY.open);
  assert.equal(ui.q.label().props.htmlFor, ui.q.field().props.id, 'label points to the field');
  ui.toggle();
  assert.ok(ui.isOpen());
  assert.equal(ui.active, ui.fieldName(), 'focus moved to the field');
  ui.focus(ui.openerName());
  ui.toggle();
  assert.ok(ui.isClosed());
  assert.equal(ui.active, ui.openerName(), 'focus stays on the opener');
  assert.equal(ui.calls.length, 0);
});

test('empty and spaces-only input: nothing is sent, a Japanese message, the field is marked invalid and focused', async () => {
  const ui = mount({ respond: ok });
  ui.toggle();
  for (const value of ['', '   ', ' \n\t　']) {
    ui.type(value);
    ui.focus(ui.openerName());
    await ui.submit();
    assert.equal(ui.calls.length, 0, JSON.stringify(value));
    assert.equal(ui.message(), COPY.empty);
    assert.equal(ui.q.field().props['aria-invalid'], true);
    assert.ok(ui.q.field().props['aria-describedby'].split(' ').includes(ui.q.status().props.id), 'message described');
    assert.equal(ui.active, ui.fieldName(), 'focus back in the field');
    assert.ok(ui.isOpen());
  }
  ui.type('あ');
  assert.equal(ui.message(), '', 'typing clears the message');
  assert.equal(ui.q.field().props['aria-invalid'], undefined);
});

test('success: one POST to /api/requests with the fixed fields, path only (no query, no hash), trimmed text', async () => {
  const ui = mount({
    location: { origin: 'https://haemilkorea.com', pathname: `/ja${SUNBAE}`, search: '?_vercel_share=TOKEN&x=1', hash: '#section' },
    respond: ok,
  });
  ui.toggle();
  ui.type('  「後から加わった人」の表現について  ');
  await ui.submit();
  assert.equal(ui.calls.length, 1);
  const [call] = ui.calls;
  assert.equal(call.url, '/api/requests');
  assert.equal(call.method, 'POST');
  assert.deepEqual(call.headers, { 'Content-Type': 'application/json' });
  assert.deepEqual(call.body, {
    requestType: 'bug_or_confusing_page',
    topicTitle: TOPIC,
    pageUrl: `https://haemilkorea.com/ja${SUNBAE}`,
    requestMessage: '「後から加わった人」の表現について',
  });
  assert.ok(!call.body.pageUrl.includes('?') && !call.body.pageUrl.includes('#') && !call.body.pageUrl.includes('TOKEN'));
  assert.deepEqual(Object.keys(call.body).sort(), ['pageUrl', 'requestMessage', 'requestType', 'topicTitle'], 'nothing else is sent');
  // After success: thanks message, text cleared, panel closed, focus on the visible opener.
  assert.equal(ui.message(), COPY.success);
  assert.equal(ui.value(), '');
  assert.ok(ui.isClosed());
  assert.equal(ui.active, ui.openerName());
  // Opening again starts a new message (the thanks message goes away).
  ui.toggle();
  assert.equal(ui.message(), '');
  assert.ok(ui.isOpen());
});

test('1,000 characters: the field stops at 1,000, the counter follows, the request never carries more', async () => {
  const ui = mount({ respond: ok });
  ui.toggle();
  assert.equal(ui.q.field().props.maxLength, 1000);
  ui.type('あ'.repeat(1100));
  assert.equal(ui.value().length, 1000);
  assert.equal(ui.text(ui.q.count()), '1000 / 1000文字');
  await ui.submit();
  assert.equal(ui.calls[0].body.requestMessage.length, 1000);
  // A longer value set without the browser limit is still cut to 1,000 after trimming.
  ui.toggle();
  ui.setRaw(`   ${'い'.repeat(1200)}`);
  await ui.submit();
  assert.equal(ui.calls[1].body.requestMessage, 'い'.repeat(1000));
});

test('only {ok: true} with a 2xx status is a success; every other answer shows the failure message and keeps the text', async () => {
  const answers = {
    'server error 500': () => json(500, { error: 'Failed to save request.' }),
    'bad request 400': () => json(400, { error: 'Invalid request type.' }),
    '200 without ok': () => json(200, {}),
    '200 with ok: false': () => json(200, { ok: false }),
    '200 with ok: "true"': () => json(200, { ok: 'true' }),
    '200 with null': () => json(200, null),
    '500 with ok: true': () => json(500, { ok: true }),
    'not JSON (HTML)': () => notJson(200),
    'network error': () => { throw new TypeError('Failed to fetch'); },
  };
  for (const [label, answer] of Object.entries(answers)) {
    let fail = true;
    const ui = mount({ respond: () => (fail ? answer() : ok()) });
    ui.toggle();
    ui.type('表現が不自然です');
    await ui.submit();
    assert.equal(ui.calls.length, 1, label);
    assert.equal(ui.message(), COPY.failure, label);
    assert.equal(ui.value(), '表現が不自然です', `${label}: text kept`);
    assert.ok(ui.isOpen(), `${label}: panel stays open`);
    assert.equal(ui.text(ui.q.submit()), COPY.submit, `${label}: button usable again`);
    assert.equal(ui.q.field().props.readOnly, false, label);
    // Editing clears the failure message; sending again works.
    ui.type('表現が不自然です。');
    assert.equal(ui.message(), '', label);
    fail = false;
    await ui.submit();
    assert.equal(ui.calls.length, 2, `${label}: retry sent`);
    assert.equal(ui.message(), COPY.success, `${label}: retry succeeded`);
  }
});

test('one request at a time: repeated submits while sending send nothing more; the field is read-only meanwhile', async () => {
  const pending = deferred();
  const ui = mount({ respond: () => pending.promise });
  ui.toggle();
  ui.type('二重送信テスト');
  const first = ui.submitNow();
  assert.equal(ui.text(ui.q.submit()), COPY.sending);
  assert.equal(ui.q.submit().props['aria-disabled'], true);
  assert.equal(ui.q.field().props.readOnly, true);
  ui.type('変更');
  assert.equal(ui.value(), '二重送信テスト', 'read-only while sending');
  const more = [ui.submitNow(), ui.submitNow(), ui.submitNow()];
  assert.equal(ui.calls.length, 1, 'still one request');
  pending.resolve(ok());
  await Promise.all([first, ...more]);
  assert.equal(ui.calls.length, 1);
  assert.equal(ui.message(), COPY.success);
  // The lock is released: a new message can be sent.
  ui.toggle();
  ui.type('二通目');
  await ui.submit();
  assert.equal(ui.calls.length, 2);
});

test('one request at a time also after a failure: the lock is released and the text is still there', async () => {
  const pending = deferred();
  let n = 0;
  const ui = mount({ respond: () => (++n === 1 ? pending.promise : ok()) });
  ui.toggle();
  ui.type('失敗テスト');
  const first = ui.submitNow();
  ui.submitNow();
  pending.resolve(json(500, { error: 'Failed to save request.' }));
  await first;
  await new Promise((r) => setImmediate(r));
  assert.equal(ui.calls.length, 1);
  assert.equal(ui.message(), COPY.failure);
  assert.equal(ui.value(), '失敗テスト');
  await ui.submit();
  assert.equal(ui.calls.length, 2);
  assert.equal(ui.message(), COPY.success);
});

test('closing the panel while sending: a failure keeps the text for the next opening, a success still thanks', async () => {
  for (const [answer, message, value] of [[json(500, {}), COPY.failure, '閉じた後'], [json(200, { ok: true }), COPY.success, '']]) {
    const pending = deferred();
    const ui = mount({ respond: () => pending.promise });
    ui.toggle();
    ui.type('閉じた後');
    const done = ui.submitNow();
    ui.toggle();
    assert.ok(ui.isClosed());
    pending.resolve(answer);
    await done;
    assert.equal(ui.message(), message);
    assert.equal(ui.value(), value);
    ui.toggle();
    assert.ok(ui.isOpen());
    assert.equal(ui.value(), value, 'text after reopening');
  }
});

test('no test data is left in the repository', () => {
  assert.equal(existsSync(path.join(REPO, APPROVALS)), false, 'no approval file');
  for (const sourcePath of PAGES) assert.equal(readJson(path.join(REPO, 'content/translations/ja', rel(sourcePath))).status, 'draft', sourcePath);
  assert.equal(real.locales.LOCALES.ja.publication, 'not-public', 'locales.ts unchanged on disk');
  assert.ok(!temps.some((dir) => dir.startsWith(REPO)), 'fixtures are outside the repository');
});
