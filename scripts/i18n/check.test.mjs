import test from 'node:test';
import assert from 'node:assert/strict';
import { sourceHash, validateTranslation } from './check.mjs';

const english = {
  schemaVersion: 1,
  sourceLocale: 'en',
  sourcePath: '/kpop/what-does-sunbae-and-hoobae-mean-in-kpop',
  blocks: [
    { id: 'intro', html: '<p>A <em>sunbae</em> joined 2 years earlier. <a href="/kpop">Explore K-pop</a>.</p>' },
    { id: 'example', html: '<p>Age does not determine who is senior.</p>' },
  ],
};
const ja = {
  schemaVersion: 1,
  locale: 'ja',
  sourcePath: english.sourcePath,
  status: 'draft',
  glossaryVersion: 'pilot-2026-10',
  blocks: [
    { id: 'intro', sourceHash: sourceHash(english.blocks[0].html), html: '<p>2年前に入った<em>先輩</em>です。<a href="/kpop">K-popを見る</a>。</p>' },
    { id: 'example', sourceHash: sourceHash(english.blocks[1].html), html: '<p>年齢だけで先輩は決まりません。</p>' },
  ],
};
const clone = (v) => structuredClone(v);
const has = (issues, code) => issues.some((i) => i.code === code);

test('valid document passes structural checks without changing review status', () => {
  assert.deepEqual(validateTranslation(english, ja), []);
  assert.equal(ja.status, 'draft');
});

test('stale source text is rejected even when block ID stays stable', () => {
  const changed = clone(english);
  changed.blocks[0].html = changed.blocks[0].html.replace('2 years', '3 years');
  assert.equal(has(validateTranslation(changed, ja), 'STALE_SOURCE'), true);
});

test('missing, unknown, and duplicate blocks fail', () => {
  const missing = clone(ja);
  missing.blocks.pop();
  assert.equal(has(validateTranslation(english, missing), 'MISSING_BLOCK'), true);
  const extra = clone(ja);
  extra.blocks.push({ id: 'invented', sourceHash: 'x', html: '<p>invented</p>' });
  assert.equal(has(validateTranslation(english, extra), 'UNKNOWN_BLOCK'), true);
  const duplicate = clone(ja);
  duplicate.blocks.push(clone(duplicate.blocks[0]));
  assert.equal(has(validateTranslation(english, duplicate), 'DUPLICATE_TRANSLATION_ID'), true);
});

test('changed links, markup or numbers require review', () => {
  const altered = clone(ja);
  altered.blocks[0].html = '<p>3年前に入った先輩です。<a href="https://example.com">K-popを見る</a>。</p>';
  const errors = validateTranslation(english, altered);
  for (const code of ['LINK_TARGET', 'TAG_STRUCTURE', 'NUMBER_REVIEW']) {
    assert.equal(has(errors, code), true, `Expected ${code}`);
  }
});

test('unapproved locale, review metadata and unsafe markup are rejected', () => {
  const altered = clone(ja);
  altered.locale = 'zh';
  altered.status = 'approved';
  altered.blocks[1].html += '<script>alert(1)</script>';
  const errors = validateTranslation(english, altered);
  for (const code of ['LOCALE', 'REVIEW_MISSING', 'APPROVAL_MISSING', 'UNSAFE_HTML']) {
    assert.equal(has(errors, code), true, `Expected ${code}`);
  }
});

test('reviewed and approved require explicit human record', () => {
  const reviewed = clone(ja);
  reviewed.status = 'reviewed';
  assert.equal(has(validateTranslation(english, reviewed), 'REVIEW_MISSING'), true);
  const approved = clone(ja);
  approved.status = 'approved';
  approved.reviewedBy = 'native-reviewer';
  approved.approvedAt = '2026-10-09T08:00:00Z';
  assert.deepEqual(validateTranslation(english, approved), []);
});

test('event handlers hidden behind "/" separators and script URLs are rejected', () => {
  const vectors = [
    '<p>2年前に入った<em>先輩</em>です。<a href="/kpop">K-popを見る</a>。<svg/onload=alert(1)></svg></p>',
    '<p>2年前に入った<em>先輩</em>です。<a href="/kpop"/onclick="alert(1)">K-popを見る</a>。</p>',
    '<p>2年前に入った<em>先輩</em>です。<a href="java&#x73;cript:alert(1)">K-popを見る</a>。</p>',
    '<p>2年前に入った<em>先輩</em>です。<a href="/kpop">K-popを見る</a>。<!-- hidden --></p>',
  ];
  for (const html of vectors) {
    const altered = clone(ja);
    altered.blocks[0].html = html;
    assert.equal(has(validateTranslation(english, altered), 'UNSAFE_HTML'), true, html);
  }
});

test('added elements, removed paragraphs and new attributes fail closed', () => {
  const vectors = [
    '<p>2年前に入った<em>先輩</em>です。<a href="/kpop">K-popを見る</a>。<img src="https://example.com/x.png"></p>',
    '2年前に入った<em>先輩</em>です。<a href="/kpop">K-popを見る</a>。',
    '<p>2年前に入った<em>先輩</em>です。<a href="/kpop" style="position:fixed">K-popを見る</a>。</p>',
    '<p>2年前に入った<em>先輩</em>です。<a data-href="/kpop" href="/kpop">K-popを見る</a>。</p>',
  ];
  for (const html of vectors) {
    const altered = clone(ja);
    altered.blocks[0].html = html;
    assert.equal(has(validateTranslation(english, altered), 'TAG_STRUCTURE'), true, html);
  }
});

test('prose that merely contains "on...=" is not treated as markup', () => {
  const altered = clone(ja);
  altered.blocks[1].html = '<p>onboarding = 新人研修。年齢だけで先輩は決まりません。</p>';
  assert.deepEqual(validateTranslation(english, altered), []);
});

test('approvedAt must be an ISO 8601 time with zone and not in the future', () => {
  const approved = clone(ja);
  approved.status = 'approved';
  approved.reviewedBy = 'native-reviewer';
  const now = () => Date.parse('2026-10-09T12:00:00Z');
  for (const value of ['2026', 'Oct 9 2026', '2026-10-09', '2026-10-09T08:00:00']) {
    approved.approvedAt = value;
    assert.equal(has(validateTranslation(english, approved, { now }), 'APPROVAL_MISSING'), true, value);
  }
  approved.approvedAt = '2026-10-10T00:00:00Z';
  assert.equal(has(validateTranslation(english, approved, { now }), 'APPROVAL_IN_FUTURE'), true);
  approved.approvedAt = '2026-10-09T17:00:00+09:00';
  assert.deepEqual(validateTranslation(english, approved, { now }), []);
});

test('source paths with dot segments or backslashes are rejected', () => {
  for (const sourcePath of ['/kpop/../admin', '/./kpop', '/kpop\\x']) {
    const source = { ...clone(english), sourcePath };
    const target = { ...clone(ja), sourcePath };
    assert.equal(has(validateTranslation(source, target), 'SOURCE_PATH'), true, sourcePath);
  }
});

test('source hashes are deterministic for NFC Unicode', () => {
  assert.equal(sourceHash('e\u0301'), sourceHash('\u00e9'));
});

// ---------------------------------------------------------------------------
// Review round 2: tokenizer bypasses, attribute integrity, nesting, paths.
// ---------------------------------------------------------------------------
const richEnglish = {
  schemaVersion: 1,
  sourceLocale: 'en',
  sourcePath: '/food/what-is-tteokbokki',
  blocks: [
    {
      id: 'links',
      html: '<p>See <a href="/food/what-is-bunsik" class="inline-link">bunsik</a> and <a href="/food/what-is-buldak" class="inline-link">buldak</a>.</p>',
    },
    { id: 'figure', html: '<p><img src="/images/tteokbokki.jpg" alt="Tteokbokki in a pan" width="800"></p>' },
    { id: 'nesting', html: '<p><em>Sundae</em> is often ordered with <strong>tteokbokki</strong>.</p>' },
  ],
};
const richJa = {
  schemaVersion: 1,
  locale: 'ja',
  sourcePath: richEnglish.sourcePath,
  status: 'draft',
  glossaryVersion: 'pilot-2026-10',
  blocks: [
    {
      id: 'links',
      sourceHash: sourceHash(richEnglish.blocks[0].html),
      html: '<p><a href="/food/what-is-bunsik" class="inline-link">粉食</a>と<a href="/food/what-is-buldak" class="inline-link">プルダック</a>を見てください。</p>',
    },
    {
      id: 'figure',
      sourceHash: sourceHash(richEnglish.blocks[1].html),
      html: '<p><img src="/images/tteokbokki.jpg" alt="鍋に入ったトッポッキ" width="800"></p>',
    },
    {
      id: 'nesting',
      sourceHash: sourceHash(richEnglish.blocks[2].html),
      html: '<p><em>スンデ</em>は<strong>トッポッキ</strong>と一緒によく注文されます。</p>',
    },
  ],
};
const withBlock = (index, html) => {
  const altered = clone(richJa);
  altered.blocks[index].html = html;
  return validateTranslation(richEnglish, altered);
};

test('rich fixture passes, including translated alt text', () => {
  assert.deepEqual(validateTranslation(richEnglish, richJa), []);
});

test('a quoted ">" inside an attribute value cannot hide an event handler', () => {
  const errors = withBlock(0, '<p><a href="/food/what-is-bunsik" class=" >" onclick="alert(1)">粉食</a>と<a href="/food/what-is-buldak" class="inline-link">プルダック</a>を見てください。</p>');
  assert.equal(has(errors, 'UNSAFE_HTML'), true);
  const single = withBlock(0, "<p><a href='/food/what-is-bunsik' class='>' onmouseover='alert(1)'>粉食</a>と<a href=\"/food/what-is-buldak\" class=\"inline-link\">プルダック</a>を見てください。</p>");
  assert.equal(has(single, 'UNSAFE_HTML'), true);
});

test('attributes glued without whitespace are still tokenized as attributes', () => {
  const errors = withBlock(0, '<p><a href="/food/what-is-bunsik"onclick="alert(1)" class="inline-link">粉食</a>と<a href="/food/what-is-buldak" class="inline-link">プルダック</a>を見てください。</p>');
  assert.equal(has(errors, 'UNSAFE_HTML'), true);
});

test('changing a locked attribute value such as img src or class fails', () => {
  assert.equal(has(withBlock(1, '<p><img src="https://example.com/tracker.png" alt="鍋に入ったトッポッキ" width="800"></p>'), 'ATTRIBUTE_VALUE'), true);
  assert.equal(has(withBlock(1, '<p><img src="/images/tteokbokki.jpg" alt="鍋に入ったトッポッキ" width="1"></p>'), 'ATTRIBUTE_VALUE'), true);
  const swappedClass = '<p><a href="/food/what-is-bunsik" class="hidden">粉食</a>と<a href="/food/what-is-buldak" class="inline-link">プルダック</a>を見てください。</p>';
  assert.equal(has(withBlock(0, swappedClass), 'ATTRIBUTE_VALUE'), true);
});

test('swapping the destinations of two links fails even though the sorted set is equal', () => {
  const errors = withBlock(0, '<p><a href="/food/what-is-buldak" class="inline-link">粉食</a>と<a href="/food/what-is-bunsik" class="inline-link">プルダック</a>を見てください。</p>');
  assert.equal(has(errors, 'LINK_TARGET'), true);
});

test('moving or re-nesting tags fails even when tag counts are unchanged', () => {
  assert.equal(has(withBlock(2, '<p><em>スンデは<strong>トッポッキ</strong></em>と一緒によく注文されます。</p>'), 'TAG_STRUCTURE'), true);
  assert.equal(has(withBlock(2, '<p><strong>スンデ</strong>は<em>トッポッキ</em>と一緒によく注文されます。</p>'), 'TAG_STRUCTURE'), true);
});

test('duplicate attributes, attributes on end tags and unterminated tags are rejected', () => {
  assert.equal(has(withBlock(1, '<p><img src="/images/tteokbokki.jpg" src="https://example.com/x.png" alt="鍋に入ったトッポッキ" width="800"></p>'), 'UNSAFE_HTML'), true);
  assert.equal(has(withBlock(2, '<p><em>スンデ</em onclick="alert(1)">は<strong>トッポッキ</strong>と一緒によく注文されます。</p>'), 'UNSAFE_HTML'), true);
  assert.equal(has(withBlock(2, '<p><em>スンデ</em>は<strong>トッポッキ</strong>と一緒によく注文されます。</p><a href="/x"'), 'UNSAFE_HTML'), true);
});

test('elements that switch the tokenizer into raw-text modes are rejected', () => {
  for (const html of [
    '<p><em>スンデ</em>は<strong>トッポッキ</strong>と<title></p><img src=x onerror=alert(1)></title></p>',
    '<p><em>スンデ</em>は<strong>トッポッキ</strong>と<textarea></textarea></p>',
    '<p><em>スンデ</em>は<strong>トッポッキ</strong>と<noscript></noscript></p>',
  ]) {
    assert.equal(has(withBlock(2, html), 'UNSAFE_HTML'), true, html);
  }
});

test('percent-encoded, doubled and non-canonical source paths are rejected', () => {
  for (const sourcePath of [
    '/kpop/%2e%2e/admin',
    '/kpop/%2E%2E/admin',
    '/kpop/%252e%252e/admin',
    '/kpop/.%2e/admin',
    '/kpop%2fadmin',
    '//example.com/kpop',
    '/kpop//sunbae',
    '/kpop/sunbae/',
    '/KPOP/sunbae',
    '/kpop/sunbae%00',
    '/kpop/sünbae',
  ]) {
    const source = { ...clone(english), sourcePath };
    const target = { ...clone(ja), sourcePath };
    assert.equal(has(validateTranslation(source, target), 'SOURCE_PATH'), true, sourcePath);
  }
  const root = { ...clone(english), sourcePath: '/' };
  assert.equal(has(validateTranslation(root, { ...clone(ja), sourcePath: '/' }), 'SOURCE_PATH'), false);
});
