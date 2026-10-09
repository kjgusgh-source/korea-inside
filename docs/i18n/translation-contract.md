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
IDs; missing or unexpected blocks; out-of-date source hashes; changed link
URLs; changed numeric tokens; unsafe embedded HTML; and any change to the
element structure of a block. Every element (including `<p>`) and every
attribute **name** must match the English fragment; attribute values other
than `href` may be translated. Added elements such as `<img>` or `<div>`, or
added attributes such as `style` or `data-*`, therefore fail as `TAG_STRUCTURE`.

`UNSAFE_HTML` is raised for comments/doctypes, `script`, `style`, `iframe`,
`object`, `embed`, `svg`, `math`, `form` and other forbidden elements, any
`on*` event attribute (including forms like `<svg/onload=…>`), `style` and
`srcdoc` attributes, and `javascript:`, `vbscript:` or `data:` URLs (also when
written with character references).

`approvedAt` must be an ISO 8601 date-time with a time zone
(e.g. `2026-10-09T17:00:00+09:00`) and must not be in the future.
`sourcePath` may not contain `.`/`..` segments or backslashes.

Numbers written out in a target language (e.g. "a year" → `1年`) trigger a
**false positive** that requires explicit human examination, not silent
acceptance.

### Important limitations

- **PASS is not a quality certificate.** Semantic accuracy, cultural nuance,
  hallucinations, naturalness, terminology and locale-specific copy require
  separate glossary checks, bilingual review, and editorial approval.
- Structural checks cannot see meaning: a link whose boundary moves to the
  wrong words, a mistranslated term, or an invented fact can still PASS.
- Regular expressions in this checker are an early structural safety net,
  **not a full HTML parser or sanitizer**. Never render unchecked translated
  HTML with `dangerouslySetInnerHTML`; the rendering layer needs a trusted
  parser/sanitizer and controlled component rendering, approved separately.
- `status` is recorded metadata; this checker does not advance statuses.
  `draft` -> `qa_passed` -> `reviewed` -> `approved` requires distinct
  validated editorial steps. `reviewed` requires `reviewedBy`, and `approved`
  additionally requires `approvedAt`.
- A translation with a stale source hash must not appear as a current,
  indexable translation. A future publishing layer must enforce this.
- **All translations start `noindex`**, and only per-locale page-specific
  explicit SEO approval may later enable indexing. This PR has no routes,
  metadata, sitemap, hreflang, robots, or GSC mutations.
- Future glossary, extraction, rendering and publication steps are separate
  PRs, and must preserve English site behavior and SEO.
