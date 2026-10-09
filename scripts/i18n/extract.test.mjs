import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import {
  extractFromTsx, cleanJsxText, validateUnitText, reviewNotes, renderUnitHtml, toSchemaV1, compareWithBuiltHtml, plainText, translationStatus,
} from './extract.mjs';

const PAGE = `
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const pageTitle = "Sunbae vs Hoobae";
export const metadata: Metadata = { title: pageTitle, description: "A local guide to seniority." };

const terms = [
  { korean: "선배", detail: "Someone who started before you." },
  { korean: "후배", detail: "Someone who started later." },
];
const rows = [
  { term: "사수", meaning: "Sasu · informal trainer" },
  { term: "대리", meaning: "Daeri · assistant manager" },
];
const linkClass = "underline";

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article>
        <header>
          <h1>Sunbae vs Hoobae</h1>
          <p>
            I grew up in Korea, and an idol may call
            another artist <em>sunbaenim</em> (선배님).
          </p>
        </header>
        <section id="meaning" aria-label="Meaning">
          <h2>What does it mean?</h2>
          <p>
            See the <a className={linkClass} href="https://example.org/dict" target="_blank" rel="noopener noreferrer">dictionary entry</a>{" "}
            and our <Link className={linkClass} href="/expressions/korean-age">age guide</Link>.
          </p>
          <ul>
            <li>School <strong>clubs</strong></li>
            <li>Military units</li>
          </ul>
          <figure>
            <img src="/images/club.jpg" alt="Students at a university club" width="800" />
            <figcaption>A university club room</figcaption>
          </figure>
          <div>
            {terms.map((term) => (
              <div key={term.korean}>
                <p>{term.korean}</p>
                <p>{term.detail}</p>
              </div>
            ))}
          </div>
          <table>
            <caption>Workplace terms</caption>
            <thead><tr><th scope="col">Korean</th><th scope="col">Meaning</th></tr></thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.term}><th scope="row">{row.term}</th><td>{row.meaning}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}
`;

const extract = (code = PAGE, previous = null) => extractFromTsx(code, { fileName: 'fixture.tsx', sourcePath: '/kpop/fixture', previous });
const byText = (source, text) => source.units.find((u) => plainText(u.text) === text);

test('extracts metadata, headings, paragraphs, emphasis, links, lists, tables, images and captions', () => {
  const source = extract();
  assert.equal(source.schemaVersion, 2);
  assert.ok(byText(source, 'A local guide to seniority.'), 'meta description');
  assert.equal(byText(source, 'Sunbae vs Hoobae')?.kind, 'meta');
  assert.ok(source.units.some((u) => u.tag === 'h1' && u.text === 'Sunbae vs Hoobae'), 'h1');
  assert.ok(byText(source, 'What does it mean?'), 'h2');
  const intro = source.units.find((u) => u.tag === 'p' && u.text.includes('{em1}sunbaenim{/em1}'));
  assert.equal(intro.text, 'I grew up in Korea, and an idol may call another artist {em1}sunbaenim{/em1} (선배님).');
  assert.equal(intro.firstPerson, true);
  assert.deepEqual(intro.protect, ['선배님']);
  const links = source.units.find((u) => u.text.includes('{a1}dictionary entry{/a1}'));
  assert.equal(links.text, 'See the {a1}dictionary entry{/a1} and our {a2}age guide{/a2}.');
  assert.equal(links.placeholders.a1.attrs.href, 'https://example.org/dict');
  assert.equal(links.placeholders.a2.attrs.href, '/expressions/korean-age');
  assert.equal(links.placeholders.a2.attrs.component, 'Link');
  assert.ok(source.units.some((u) => u.tag === 'li' && u.text === 'School {strong1}clubs{/strong1}'), 'li with strong');
  assert.ok(source.units.some((u) => u.kind === 'attr' && u.tag === 'img@alt' && u.text === 'Students at a university club'), 'img alt');
  assert.ok(source.units.some((u) => u.kind === 'attr' && u.text === 'Meaning'), 'aria-label');
  assert.ok(byText(source, 'A university club room')?.tag === 'figcaption');
  assert.ok(byText(source, 'Workplace terms')?.tag === 'caption');
  assert.equal(byText(source, '대리')?.translate, false, 'Korean-only cell is kept, not translated');
  assert.ok(byText(source, 'Daeri · assistant manager')?.origin.startsWith('data:rows'));
});

test('JSX whitespace follows React: line breaks collapse and {" "} keeps its space', () => {
  assert.equal(cleanJsxText('\n    Hello\n    world  \n  '), 'Hello world');
  assert.equal(cleanJsxText('  a  '), '  a  ');
  const source = extract();
  assert.ok(source.units.some((u) => u.text.includes('{/a1} and our')), 'space from {" "} survives');
});

test('every visible fixture string is extracted exactly once (no omissions, no duplicates)', () => {
  const source = extract();
  const expected = [
    'Sunbae vs Hoobae', 'A local guide to seniority.', 'What does it mean?', 'School clubs', 'Military units',
    'Students at a university club', 'A university club room', '선배', 'Someone who started before you.',
    '후배', 'Someone who started later.', 'Workplace terms', 'Korean', 'Meaning', '사수', 'Sasu · informal trainer',
    '대리', 'Daeri · assistant manager',
  ];
  const plains = source.units.map((u) => plainText(u.text));
  for (const text of expected) assert.ok(plains.includes(text), `missing: ${text}`);
  const ids = source.units.map((u) => u.id);
  assert.equal(new Set(ids).size, ids.length, 'unit IDs are unique');
  const blockTexts = source.units.filter((u) => u.kind === 'block').map((u) => `${u.anchor}|${u.tag}|${u.text}`);
  assert.equal(new Set(blockTexts).size, blockTexts.length, 'no block extracted twice');
  assert.deepEqual(source.review, [], 'fixture needs no manual review');
});

test('table structure is preserved: header row, one row per data item, cell order', () => {
  const source = extract();
  const find = (node, pred) => {
    if (!node || typeof node !== 'object') return null;
    if (pred(node)) return node;
    for (const value of Object.values(node)) {
      const hit = Array.isArray(value) ? value.map((v) => find(v, pred)).find(Boolean) : find(value, pred);
      if (hit) return hit;
    }
    return null;
  };
  const table = find(source.structure, (n) => n.element === 'table');
  const tbody = table.children.find((c) => c.element === 'tbody');
  const list = tbody.children.find((c) => c.list === 'rows');
  assert.equal(list.children.length, 2, 'two data rows');
  for (const row of list.children) {
    assert.deepEqual(row.children.map((c) => c.element), ['th', 'td'], 'th then td in every row');
    assert.ok(row.children.every((c) => typeof c.unit === 'string'), 'every cell links to a unit');
  }
  const thead = table.children.find((c) => c.element === 'thead');
  assert.equal(thead.children[0].children.length, 2, 'two header cells');
});

test('links cannot be damaged through placeholder translations', () => {
  const source = extract();
  const unit = source.units.find((u) => u.text.includes('{a1}dictionary entry{/a1}'));
  const good = '{a2}年齢ガイド{/a2}と{a1}辞書の項目{/a1}を見てください。';
  assert.deepEqual(validateUnitText(unit, good), []);
  const html = renderUnitHtml(unit, good);
  assert.ok(html.includes('<a href="https://example.org/dict" target="_blank" rel="noopener noreferrer">辞書の項目</a>'));
  assert.ok(html.includes('<a href="/expressions/korean-age">年齢ガイド</a>'));
  for (const bad of [
    '{a1}辞書の項目{/a1}を見てください。',
    '{a1}辞書{a2}年齢{/a1}{/a2}',
    '{a1}辞書{/a1}{a1}もう一つ{/a1}{a2}年齢{/a2}',
    '{a3}偽{/a3}{a1}辞書{/a1}{a2}年齢{/a2}',
    '<a href="https://evil.example">辞書</a>{a1}x{/a1}{a2}y{/a2}',
    '{a1}辞書{/a1}{a2}年齢{/a2} {oops}',
  ]) {
    assert.ok(validateUnitText(unit, bad).length > 0, bad);
    assert.throws(() => renderUnitHtml(unit, bad));
  }
  assert.ok(renderUnitHtml(unit, '{a1}A&B{/a1}{a2}1 > 0{/a2}').includes('A&amp;B</a><a href="/expressions/korean-age">1 &gt; 0'), 'text is escaped');
});

test('reordered links and changed numbers are surfaced as review notes', () => {
  const source = extract();
  const unit = source.units.find((u) => u.text.includes('{a1}dictionary entry{/a1}'));
  assert.deepEqual(reviewNotes(unit, '{a1}辞書の項目{/a1}と{a2}年齢ガイド{/a2}を見てください。'), []);
  assert.match(reviewNotes(unit, '{a2}辞書の項目{/a2}と{a1}年齢ガイド{/a1}を見てください。').join(), /placeholder order differs/);
  const age = source.units.find((u) => u.tag === 'p' && u.text.includes('sunbaenim'));
  assert.match(reviewNotes(age, `${age.text} 2001`).join(), /numbers differ/);
});

test('protected Korean terms must survive translation', () => {
  const source = extract();
  const unit = source.units.find((u) => u.text.includes('{em1}sunbaenim{/em1}'));
  assert.deepEqual(validateUnitText(unit, '私は韓国で育ちました。アイドルは{em1}ソンベニム{/em1}（선배님）と呼びます。'), []);
  assert.deepEqual(validateUnitText(unit, '私は韓国で育ちました。{em1}ソンベニム{/em1}と呼びます。'), ['protected term missing: 선배님']);
});

test('block IDs stay stable when paragraphs are inserted or reordered, and edits keep the ID with a new hash', () => {
  const first = extract();
  const sameUnit = (a) => (b) => b.kind === a.kind && b.tag === a.tag && b.anchor === a.anchor && b.text === a.text;
  const inserted = extract(PAGE.replace('<h2>What does it mean?</h2>', '<h2>What does it mean?</h2>\n<p>A brand new paragraph.</p>'));
  for (const unit of first.units) assert.equal(inserted.units.find(sameUnit(unit))?.id, unit.id, `insert changed ${unit.id}`);
  const reordered = extract(PAGE.replace('<li>School <strong>clubs</strong></li>\n            <li>Military units</li>', '<li>Military units</li>\n            <li>School <strong>clubs</strong></li>'));
  for (const unit of first.units) assert.equal(reordered.units.find(sameUnit(unit))?.id, unit.id, `reorder changed ${unit.id}`);
  const edited = extract(PAGE.replace('A university club room', 'A small university club room'), first);
  const before = first.units.find((u) => u.text === 'A university club room');
  const after = edited.units.find((u) => u.text === 'A small university club room');
  assert.equal(after.id, before.id, 'edited block keeps its ID when the previous snapshot is supplied');
  assert.notEqual(after.hash, before.hash, 'edited block gets a new hash so translations become stale');
});

test('dynamic or complex content is flagged for review instead of guessed', () => {
  const tricky = PAGE
    .replace('<h2>What does it mean?</h2>', '<h2>{isNew ? "New" : "Old"} meaning</h2>')
    .replace('<SiteHeader />', '<SiteHeader /><Callout>Important note</Callout>')
    .replace('{terms.map((term) => (', '{loadTerms().map((term) => (');
  const source = extract(tricky);
  const reasons = source.review.map((r) => r.reason).join('\n');
  assert.match(reasons, /dynamic expression|mixes text/);
  assert.match(reasons, /component <Callout> has text children/);
  assert.match(reasons, /not a static array/);
});

test('schemaVersion 1 view is accepted by the PR #86 contract shape', () => {
  const v1 = toSchemaV1(extract());
  assert.equal(v1.schemaVersion, 1);
  assert.ok(v1.blocks.length > 0);
  for (const block of v1.blocks) {
    assert.match(block.id, /^[A-Za-z0-9][A-Za-z0-9_-]*$/);
    assert.match(block.html, /^<([a-z0-9]+)>[\s\S]*<\/\1>$/);
    assert.doesNotMatch(block.html, /className|class=/, 'presentation classes stay in the structure, not in translator HTML');
  }
});

test('built HTML comparison reports text the extractor missed', () => {
  const source = extract();
  const html = '<html><body><article><h1>Sunbae vs Hoobae</h1><p>Unexpected <em>extra</em> text</p></article></body></html>';
  const result = compareWithBuiltHtml(source, html);
  assert.equal(result.results.find((r) => r.id === source.units.find((u) => u.tag === 'h1').id).status, 'exact');
  assert.deepEqual(result.uncovered, ['Unexpected extra text']);
});

test('real Sunbae page: extraction is complete against the built English HTML snapshot rules', () => {
  const path = 'app/kpop/what-does-sunbae-and-hoobae-mean-in-kpop/page.tsx';
  assert.ok(existsSync(path), `real page ${path} not found: update this test when the page moves instead of skipping it`);
  const code = readFileSync(path, 'utf8');
  const source = extractFromTsx(code, { fileName: path, sourcePath: '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop' });
  const ids = source.units.map((u) => u.id);
  assert.equal(new Set(ids).size, ids.length, 'unique IDs');
  assert.ok(source.units.some((u) => u.tag === 'h1'));
  assert.ok(source.units.some((u) => u.tag === 'caption'));
  const hrefsInCode = [...code.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const hrefsInUnits = source.units.flatMap((u) => Object.values(u.placeholders).map((p) => p.attrs.href)).filter(Boolean);
  for (const href of hrefsInCode.filter((h) => h !== '/kpop')) assert.ok(hrefsInUnits.includes(href), `inline link lost: ${href}`);
  for (const unit of source.units) assert.deepEqual(validateUnitText(unit, unit.text), [], `English text must validate against itself: ${unit.id}`);
});

// ---------------------------------------------------------------------------
// Review round 2: hashes cover meaningful attributes of the unit itself,
// v1 keeps standalone link URLs, ambiguous ID matches go to review.
// ---------------------------------------------------------------------------
const LINKS_PAGE = `
import Link from "next/link";
const guides = [
  { label: "What Is Maknae?", href: "/kpop/what-is-maknae" },
  { label: "What Is Nunchi?", href: "/expressions/nunchi" },
];
export default function Page() {
  return (
    <article>
      <header>
        <Link href="/kpop" className="text-sm hover:underline">← Back to K-pop</Link>
        <h1>Links and images</h1>
      </header>
      <section id="body">
        <p>Read the <a href="https://example.org/dict" className="link" target="_blank" rel="noopener">dictionary</a> first.</p>
        <img src="/images/club.jpg" alt="Students at a club" className="rounded" />
      </section>
      <section id="related">
        {guides.map((guide) => (
          <Link key={guide.href} href={guide.href} className="card">{guide.label} →</Link>
        ))}
      </section>
    </article>
  );
}
`;
const extractLinks = (code = LINKS_PAGE, previous = null) => extractFromTsx(code, { fileName: 'links.tsx', sourcePath: '/kpop/links', previous });
const translationFor = (source) => ({
  schemaVersion: 2, sourcePath: source.sourcePath, locale: 'ja', status: 'draft', glossaryVersion: 'test',
  units: source.units.map((u) => ({ id: u.id, sourceHash: u.hash, text: u.text })),
});
const unitByText = (source, text) => source.units.find((u) => plainText(u.text) === text);

test('a standalone link URL change makes its translation stale and keeps its ID', () => {
  const before = extractLinks();
  const translation = translationFor(before);
  const after = extractLinks(LINKS_PAGE.replace('<Link href="/kpop"', '<Link href="/kpop/glossary"'), before);
  const a = unitByText(before, '← Back to K-pop');
  const b = unitByText(after, '← Back to K-pop');
  assert.equal(b.id, a.id, 'same ID');
  assert.notEqual(b.hash, a.hash, 'hash changes with href');
  assert.deepEqual(translationStatus(after, translation).stale, [a.id]);
});

test('data-driven standalone links, inline links and image sources are covered by the hash', () => {
  const before = extractLinks();
  const translation = translationFor(before);
  const related = extractLinks(LINKS_PAGE.replace('href: "/expressions/nunchi"', 'href: "/expressions/jeong"'), before);
  assert.deepEqual(translationStatus(related, translation).stale, [unitByText(before, 'What Is Nunchi? →').id]);
  const inline = extractLinks(LINKS_PAGE.replace('https://example.org/dict', 'https://example.org/other'), before);
  assert.deepEqual(translationStatus(inline, translation).stale, [unitByText(before, 'Read the dictionary first.').id]);
  const image = extractLinks(LINKS_PAGE.replace('/images/club.jpg', '/images/other.jpg'), before);
  assert.deepEqual(translationStatus(image, translation).stale, [unitByText(before, 'Students at a club').id], 'alt text is stale when the image changes');
});

test('presentation-only changes (class, target, rel) do not make translations stale', () => {
  const before = extractLinks();
  const translation = translationFor(before);
  const restyled = extractLinks(LINKS_PAGE
    .replaceAll('className="card"', 'className="card card--large"')
    .replace('className="link"', 'className="link link--accent"')
    .replace('className="rounded"', 'className="rounded-xl"')
    .replace('rel="noopener"', 'rel="noopener noreferrer"'), before);
  const status = translationStatus(restyled, translation);
  assert.deepEqual(status.stale, []);
  assert.deepEqual(status.missing, []);
  assert.deepEqual(status.unknown, []);
});

test('schemaVersion 1 view keeps the URL of standalone links', () => {
  const v1 = toSchemaV1(extractLinks());
  const html = v1.blocks.map((b) => b.html);
  assert.ok(html.includes('<a href="/kpop">← Back to K-pop</a>'), html.join('\n'));
  assert.ok(html.includes('<a href="/kpop/what-is-maknae">What Is Maknae? →</a>'));
  assert.ok(html.includes('<a href="/expressions/nunchi">What Is Nunchi? →</a>'));
});

const DUP_PAGE = `
export default function Page() {
  return (
    <article>
      <section id="school"><p>See the guide below.</p><p>Seniors can help juniors settle in.</p><p>Seniors can help juniors settle in quickly.</p></section>
      <section id="work"><p>See the guide below.</p></section>
    </article>
  );
}
`;
const extractDup = (code, previous = null) => extractFromTsx(code, { fileName: 'dup.tsx', sourcePath: '/kpop/dup', previous });

test('identical sentences in different sections keep their own IDs with --previous', () => {
  const before = extractDup(DUP_PAGE);
  const after = extractDup(DUP_PAGE, before);
  const ids = (s) => s.units.filter((u) => u.text === 'See the guide below.').map((u) => `${u.anchor}:${u.id}`);
  assert.deepEqual(ids(after), ids(before));
  assert.notEqual(before.units.find((u) => u.anchor === 'school' && u.text === 'See the guide below.').id,
    before.units.find((u) => u.anchor === 'work' && u.text === 'See the guide below.').id);
  assert.equal(after.review.filter((r) => /ambiguous/.test(r.reason)).length, 0);
});

test('ambiguous ID matches are flagged for review instead of chosen silently', () => {
  const before = extractDup(DUP_PAGE);
  const oldIds = new Set(before.units.map((u) => u.id));
  // The repeated sentence moves to a new section: two equally good old IDs.
  const moved = extractDup(DUP_PAGE.replace('<section id="work"><p>See the guide below.</p></section>', '<section id="kpop"><p>See the guide below.</p></section>')
    .replace('<p>See the guide below.</p><p>Seniors', '<p>Seniors'), before);
  const movedUnit = moved.units.find((u) => u.text === 'See the guide below.');
  assert.equal(oldIds.has(movedUnit.id), false, 'no old ID is reused for an ambiguous move');
  assert.match(moved.review.map((r) => r.reason).join('\n'), /ambiguous/);
  // An edit that is equally close to two old paragraphs.
  const edited = extractDup(DUP_PAGE.replace('<p>Seniors can help juniors settle in.</p><p>Seniors can help juniors settle in quickly.</p>', '<p>Seniors can help juniors settle in fast.</p>'), before);
  const editedUnit = edited.units.find((u) => u.text === 'Seniors can help juniors settle in fast.');
  assert.equal(oldIds.has(editedUnit.id), false, 'no old ID is reused for an ambiguous edit');
  assert.match(edited.review.map((r) => r.reason).join('\n'), /ambiguous/);
});

test('real Sunbae page: 78 units, 8 standalone links keep their URLs in v2 and v1, and re-extraction is stable', () => {
  const path = 'app/kpop/what-does-sunbae-and-hoobae-mean-in-kpop/page.tsx';
  assert.ok(existsSync(path), `real page ${path} not found`);
  const code = readFileSync(path, 'utf8');
  const sourcePath = '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop';
  const source = extractFromTsx(code, { fileName: path, sourcePath });
  assert.equal(source.units.length, 78);
  assert.equal(new Set(source.units.map((u) => u.id)).size, 78);
  const expected = ['/kpop', ...[...code.matchAll(/href: "([^"]+)"/g)].map((m) => m[1])];
  assert.equal(expected.length, 8);
  const standalone = source.units.filter((u) => u.kind === 'block' && u.tag === 'a');
  assert.deepEqual(standalone.map((u) => u.attrs?.href), expected);
  const v1 = toSchemaV1(source);
  for (const unit of standalone) {
    const block = v1.blocks.find((b) => b.id === unit.id);
    assert.ok(block.html.startsWith(`<a href="${unit.attrs.href}">`), block.html);
  }
  const again = extractFromTsx(code, { fileName: path, sourcePath, previous: source });
  assert.deepEqual(again.units.map((u) => [u.id, u.hash]), source.units.map((u) => [u.id, u.hash]));
  assert.deepEqual(translationStatus(again, translationFor(source)), { current: source.units.map((u) => u.id), stale: [], missing: [], unknown: [] });
  const edited = extractFromTsx(code.replace('I grew up in a small town in Korea', 'I grew up in a very small town in Korea'), { fileName: path, sourcePath, previous: source });
  const oldUnit = source.units.find((u) => u.text.startsWith('I grew up in a small town'));
  const newUnit = edited.units.find((u) => u.text.startsWith('I grew up in a very small town'));
  assert.equal(newUnit.id, oldUnit.id);
  assert.notEqual(newUnit.hash, oldUnit.hash);
  assert.deepEqual(translationStatus(edited, translationFor(source)).stale, [oldUnit.id]);
});
