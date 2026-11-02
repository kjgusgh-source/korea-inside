/**
 * HAEMIL i18n — photos and video embeds in translated pages
 * (lib/i18n/TranslatedPage.tsx, components/ArticlePhoto.tsx).
 *
 *   node --test scripts/i18n/translated-page.test.mjs
 *
 * The translated page renders only what the trusted English source JSON
 * describes. These tests check, with the real Gangneung travel story:
 * - every ArticlePhoto of the English page is rendered in the same order,
 *   with the same files and sizes and the translated alt text;
 * - the YouTube embed keeps its privacy-enhanced src and attributes and gets
 *   the translated title;
 * - Korean words in {span} placeholders keep lang="ko";
 * and, with altered copies of the source in memory, that anything outside the
 * allowed set (other iframe hosts, autoplay, other photo sources or
 * attributes) is rejected instead of rendered.
 *
 * .tsx files are compiled with the project's own TypeScript, as in the other
 * i18n tests. SiteHeader is replaced by an empty component; next/image is the
 * real component (CommonJS, so its default export is re-exported).
 */
import { register } from 'node:module';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const TYPESCRIPT = pathToFileURL(path.join(REPO, 'node_modules/typescript/lib/typescript.js')).href;
const SITE_HEADER_STUB = 'data:text/javascript,' + encodeURIComponent('export default function SiteHeader() { return null; }');
const NEXT_IMAGE = 'data:text/javascript,' + encodeURIComponent(`import m from ${JSON.stringify(pathToFileURL(path.join(REPO, 'node_modules/next/image.js')).href)}; export default m.default;`);

register('data:text/javascript,' + encodeURIComponent(`
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const SITE_HEADER_STUB = ${JSON.stringify(SITE_HEADER_STUB)};
const NEXT_IMAGE = ${JSON.stringify(NEXT_IMAGE)};
let ts;
export async function resolve(specifier, context, next) {
  if (specifier === 'server-only') return { url: 'data:text/javascript,export {}', shortCircuit: true };
  if (/(^|\\/)components\\/SiteHeader(\\.tsx)?$/.test(specifier)) return { url: SITE_HEADER_STUB, shortCircuit: true };
  if (specifier === 'next/image') return { url: NEXT_IMAGE, shortCircuit: true };
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
    const { outputText } = ts.transpileModule(readFileSync(fileURLToPath(url), 'utf8'), {
      fileName: fileURLToPath(url),
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    });
    return { format: 'module', source: outputText, shortCircuit: true };
  }
  return next(url, context);
}`));

const { default: TranslatedPage, prepareTranslation, TranslationValidationError } = await import('../../lib/i18n/TranslatedPage.tsx');
const { default: EnglishPage } = await import('../../app/travel/3-days-in-gangneung/page.tsx');
const { renderToStaticMarkup } = await import('react-dom/server');
const { createElement } = await import('react');

const PAGE = 'travel/3-days-in-gangneung.json';
const readJson = (file) => JSON.parse(readFileSync(path.join(REPO, file), 'utf8'));
const SOURCE = readJson(`content/translations/source/${PAGE}`);
const JA = readJson(`content/translations/ja/${PAGE}`);
const OPTIONS = { locale: 'ja', allowedStatuses: ['draft', 'approved'] };
const clone = (value) => structuredClone(value);
const render = (source, translation = JA) =>
  renderToStaticMarkup(createElement(TranslatedPage, { prepared: prepareTranslation(source, translation, OPTIONS) }));

const unescape = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const images = (html) => [...html.matchAll(/<img\b[^>]*>/g)].map(([tag]) => {
  const attr = (name) => { const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`)); return m ? unescape(m[1]) : undefined; };
  return { alt: attr('alt'), src: attr('src'), width: attr('width'), height: attr('height'), sizes: attr('sizes'), loading: attr('loading'), fetchPriority: attr('fetchPriority') ?? attr('fetchpriority') };
});
const iframes = (html) => [...html.matchAll(/<iframe\b[^>]*>/g)].map(([tag]) => tag);

function photoNodes(node, out = []) {
  if (node.component === 'ArticlePhoto') out.push(node);
  for (const child of node.children ?? []) photoNodes(child, out);
  return out;
}
function findNode(node, match) {
  if (match(node)) return node;
  for (const child of node.children ?? []) {
    const found = findNode(child, match);
    if (found) return found;
  }
  return null;
}
const jaText = (id) => JA.units.find((u) => u.id === id).text;

test('Gangneung (ja draft): the 16 photos of the English page, same order, files and sizes, with Japanese alt text', () => {
  const english = images(renderToStaticMarkup(createElement(EnglishPage)));
  const japanese = images(render(SOURCE));
  const nodes = photoNodes(SOURCE.structure);
  assert.equal(nodes.length, 16);
  assert.equal(english.length, 16);
  assert.equal(japanese.length, 16);
  for (const [i, node] of nodes.entries()) {
    const en = english[i];
    const ja = japanese[i];
    assert.equal(ja.src, en.src, `photo ${i + 1}: same optimized src`);
    assert.ok(ja.src.includes(encodeURIComponent(node.attrs.src)), `photo ${i + 1}: ${node.attrs.src}`);
    assert.deepEqual([ja.width, ja.height, ja.sizes, ja.loading, ja.fetchPriority], [en.width, en.height, en.sizes, en.loading, en.fetchPriority], `photo ${i + 1}: same size and loading`);
    assert.equal(en.alt, node.attrs.alt, `photo ${i + 1}: English alt is the source alt`);
    assert.equal(ja.alt, jaText(node.attributeUnits.alt), `photo ${i + 1}: Japanese alt`);
    assert.notEqual(ja.alt, en.alt);
  }
  assert.notEqual(japanese[0].loading, 'lazy', 'the cover photo is not lazy-loaded (priority)');
  assert.ok(japanese.slice(1).every((img) => img.loading === 'lazy'), 'the other photos are lazy-loaded');
});

test('Gangneung (ja draft): the YouTube Short keeps its privacy-enhanced embed and gets the Japanese title', () => {
  const html = render(SOURCE);
  const [frame, ...rest] = iframes(html);
  assert.equal(rest.length, 0);
  assert.match(frame, /\ssrc="https:\/\/www\.youtube-nocookie\.com\/embed\/B6ZFfvpyJFA"/);
  assert.ok(frame.includes(` title="${jaText('ktx-figure-iframe-title-696a4e4f')}"`));
  assert.match(frame, /\sloading="lazy"/);
  assert.match(frame, /\sreferrerPolicy="strict-origin-when-cross-origin"/i);
  assert.match(frame, /\sallowFullScreen=""/i);
  assert.doesNotMatch(frame, /autoplay/);
  const english = iframes(renderToStaticMarkup(createElement(EnglishPage)));
  assert.equal(english.length, 1);
  assert.equal(frame.replace(/\stitle="[^"]*"/, ''), english[0].replace(/\stitle="[^"]*"/, ''), 'same attributes apart from the title');
  assert.equal((html.match(/<figure\b/g) ?? []).length, 17, '16 photos and the video');
});

test('Gangneung (ja draft): Korean words in span placeholders keep lang="ko"; no JSON-LD is rendered', () => {
  const html = render(SOURCE);
  assert.ok(html.includes('<span lang="ko">육영탕수육</span>'));
  assert.ok(html.includes('<span lang="ko">짬뽕순두부</span>'));
  assert.doesNotMatch(html, /application\/ld\+json/);
});

const rejects = (mutate, pattern) => {
  const source = clone(SOURCE);
  mutate(source);
  assert.throws(() => render(source), (error) => error instanceof TranslationValidationError && pattern.test(error.message));
};
const iframeOf = (source) => findNode(source.structure, (n) => n.element === 'iframe');
const photoOf = (source) => photoNodes(source.structure)[1];

test('iframe: only youtube-nocookie embeds, with a title, without autoplay', () => {
  rejects((s) => { iframeOf(s).attrs.src = 'https://www.youtube.com/embed/B6ZFfvpyJFA'; }, /iframe src not allowed/);
  rejects((s) => { iframeOf(s).attrs.src = 'https://www.youtube-nocookie.com/embed/B6ZFfvpyJFA?autoplay=1'; }, /iframe src not allowed/);
  rejects((s) => { iframeOf(s).attrs.src = 'https://example.com/embed/B6ZFfvpyJFA'; }, /iframe src not allowed/);
  rejects((s) => { iframeOf(s).attrs.allow = 'autoplay; encrypted-media'; }, /iframe allow not allowed/);
  rejects((s) => { iframeOf(s).attrs.loading = 'auto'; }, /iframe loading not allowed/);
  rejects((s) => { iframeOf(s).attrs.referrerPolicy = 'unsafe-url'; }, /iframe referrerPolicy not allowed/);
  rejects((s) => { iframeOf(s).attrs.sandbox = 'allow-scripts'; }, /attribute not allowed: iframe@sandbox/);
  rejects((s) => { const f = iframeOf(s); delete f.attrs.title; f.attributeUnits = {}; }, /iframe without a title/);
});

test('ArticlePhoto: only site images, integer sizes, known layouts and attributes, with a translated alt', () => {
  rejects((s) => { photoOf(s).attrs.src = 'https://example.com/photo.webp'; }, /ArticlePhoto src not allowed/);
  rejects((s) => { photoOf(s).attrs.src = '/images/../secret.webp'; }, /ArticlePhoto src not allowed/);
  rejects((s) => { photoOf(s).attrs.src = '/images/travel/photo.svg'; }, /ArticlePhoto src not allowed/);
  rejects((s) => { photoOf(s).attrs.width = '900'; }, /integer width and height/);
  rejects((s) => { photoOf(s).attrs.layout = 'full'; }, /ArticlePhoto layout not allowed/);
  rejects((s) => { photoOf(s).attrs.priority = true; }, /ArticlePhoto attribute not allowed: priority/);
  rejects((s) => { photoOf(s).attributeUnits = {}; }, /ArticlePhoto without an alt text/);
});

test('other imported components and raw img elements are still rejected', () => {
  rejects((s) => { photoOf(s).component = 'TripPhoto'; }, /component not supported: TripPhoto/);
  rejects((s) => { const n = photoOf(s); delete n.component; n.element = 'img'; }, /element not allowed: img/);
});
