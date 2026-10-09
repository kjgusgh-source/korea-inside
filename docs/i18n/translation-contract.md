# HAEMIL i18n — translation data contract (pilot v1)

This PR adds an **offline contract/structural validator only**. It does not add routes,
translate content, configure billing, publish pages, or change English SEO.

## Storage (planned; not created by this PR)

- English source snapshot: `content/translations/source/<category>/<slug>.json`
- Target: `content/translations/<locale>/<category>/<slug>.json`
- Supported target locales: `ja`, `zh-Hant`, `zh-Hans`, `es`, `ko` (Korean initially for operator QA).
- Use a **stable block ID**, not a source-text hash as the ID. Each target block
  stores `sourceHash = SHA-256(NFC(original HTML fragment))`; changed source
  blocks are detected without changing their logical IDs.
- Source extraction from built HTML is a **future PR**. Human verification will
  be needed to ensure interactive/complex TSX content is represented correctly.

Source JSON example:

```json
{
  "schemaVersion": 1,
  "sourceLocale": "en",
  "sourcePath": "/kpop/what-does-sunbae-and-hoobae-mean-in-kpop",
  "blocks": [{ "id": "intro", "html": "<p>A sunbae can be younger.</p>" }]
}
```

Translation JSON example (replace the placeholder hash with the actual hash
of the corresponding English `html` fragment):

```json
{
  "schemaVersion": 1,
  "sourcePath": "/kpop/what-does-sunbae-and-hoobae-mean-in-kpop",
  "locale": "ja",
  "status": "draft",
  "glossaryVersion": "pilot-2026-10",
  "blocks": [{ "id": "intro", "sourceHash": "SHA256_OF_SOURCE_HTML", "html": "<p>ソンベは年下の場合もあります。</p>" }]
}
```

## Offline checks

Run with Node.js; this does **not** call a translation API:

```bash
node --test scripts/i18n/check.test.mjs
node scripts/i18n/check.mjs path/to/source.json path/to/translation.json
```

The checker fails closed for: schema/locale/status errors; invalid or duplicate
IDs; missing or unexpected blocks; out-of-date source hashes; and the markup
rules below. Numbers written out in a target language (e.g. "a year" → `1年`)
trigger `NUMBER_REVIEW`, a **false positive by design** that requires explicit
human examination, not silent acceptance.

### How markup is read

Each block is read by `tokenizeFragment`, a small dependency-free subset of the
WHATWG HTML tokenizer (tag, attribute-name and attribute-value states). It
splits tags and attributes the way browsers do — quoted `>` inside attribute
values, attributes glued without whitespace (`href="/x"onclick=…`) and `/`
separators (`<svg/onload=…>`) are handled. It does **not** implement the rest
of HTML; instead, anything outside the subset is rejected (`UNSAFE_HTML` in
translations, `SOURCE_MARKUP` in sources): comments, doctypes, CDATA,
processing instructions, bogus or attribute-bearing end tags, NUL characters,
tags left open at the end of a block, duplicate attributes, and elements that
switch the tokenizer into other modes or are never needed in body copy
(`script`, `style`, `title`, `textarea`, `noscript`, `iframe`, `svg`, `math`,
`template`, `form`, `input`, `meta`, `link`, `object`, `embed`, …).

`UNSAFE_HTML` is also raised for any `on*` attribute, `style`, `srcdoc`,
`formaction`, `action`, `xmlns`, `xlink:href`, and for `javascript:`,
`vbscript:` or `data:` URLs (also when written with character references).

### Structure and attribute integrity

- `TAG_STRUCTURE`: the ordered sequence of tags must equal the English block —
  same elements, same order, same nesting, same attribute **names** per tag.
  Equal tag counts are not enough; moving `<strong>` inside `<em>` fails.
- `LINK_TARGET`: the ordered list of `<a href>` values must be identical, so
  swapping two links fails even though the set of URLs is unchanged.
- `ATTRIBUTE_VALUE`: attribute values are **locked by default** and must be
  byte-identical to the source (`src`, `class`, `width`, …). Only the values of
  `TRANSLATABLE_ATTRIBUTES` (`alt`, `title`, `aria-label`) may differ. Any change
  to that list is a policy change and needs separate approval.

### Other rules

- `approvedAt` must be an ISO 8601 date-time with a time zone
  (e.g. `2026-10-09T17:00:00+09:00`) and must not be in the future.
- `sourcePath` must be a canonical HAEMIL path: lowercase ASCII slug segments,
  single slashes, no trailing slash (`/` is allowed). Percent-encoding
  (`%2e%2e`, `%2f`, double encoding), dot segments, uppercase, non-ASCII and
  empty segments are **rejected, not normalized**.

### Important limitations

- **PASS is not a quality certificate.** Semantic accuracy, cultural nuance,
  hallucinations, naturalness, terminology and locale-specific copy require
  separate glossary checks, bilingual review, and editorial approval.
- Structural checks cannot see meaning: a link whose boundary moves to the
  wrong words, a mistranslated term, or an invented fact can still PASS.
- **PASS is not a rendering-safety certificate.** The tokenizer subset was
  differentially tested against Chromium, but it is not a sanitizer and does
  not model tree construction. Never render translated HTML with
  `dangerouslySetInnerHTML`; the rendering layer must rebuild output from an
  allowlist of elements and attributes (see "Next format" below), approved
  separately.
- A translation with a stale source hash must not appear as a current,
  indexable translation. A future publishing layer must enforce this.
- **All translations start `noindex`**, and only per-locale page-specific
  explicit SEO approval may later enable indexing. This PR has no routes,
  metadata, sitemap, hreflang, robots, or GSC mutations.
- Future glossary, extraction, rendering and publication steps are separate
  PRs, and must preserve English site behavior and SEO.

## Publication safety principles (for any future publishing layer)

`status`, `reviewedBy` and `approvedAt` are **claims typed into a file**. Anyone
who can edit the JSON can set them, so they prove nothing on their own.

1. The checker never advances a status and never publishes. PASS only means
   the file is structurally consistent with the current English source.
2. A publishing step must verify approval against a **separate, trusted
   record** that the translation file cannot forge — for example an approval
   recorded through a protected-branch pull-request review by an allowlisted
   reviewer, or an authenticated approval log kept outside the content files.
3. That approval must be bound to the exact content it approves: source path,
   locale, every block's `sourceHash`, and a hash of the translated blocks.
   Any later edit to either the English source or the translation invalidates
   it automatically.
4. Native review and operator (publishing/SEO) approval are distinct records
   by distinct roles; one does not imply the other.
5. Indexing is a third, explicit, per-page decision. Without it the page stays
   `noindex` and out of the sitemap and hreflang sets.
6. Missing, stale or unverifiable approval → do not publish (fail closed).

## Next format (proposal, not implemented)

To remove HTML from translator input entirely, a later schema version can store
the English block as a structure (element tree with locked attributes) and let
translations supply only text runs with placeholders, e.g.
`"text": "{a1}粉食{/a1}と{a2}プルダック{/a2}を見てください。"`. The renderer then
builds React elements from the English structure, so a translation cannot add
elements, attributes or URLs at all. This needs its own approval because it
changes the data contract.
