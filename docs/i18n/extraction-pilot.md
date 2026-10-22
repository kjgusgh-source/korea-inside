# HAEMIL i18n — source extractor (from the PR #87 pilot)

`scripts/i18n/extract.mjs` is an offline Node tool. It calls no translation
API and changes no English content or SEO. Tests:
`node --test scripts/i18n/extract.test.mjs`.

This document started as the PR #87 (PR-2B) pilot report. The extractor and
its tests are unchanged from PR #87 (`f6a4f06`). The first part below says how
the tool is used in the integrated code today. The later sections describe the
format and record the pilot results as they were measured for PR #87; they
were not re-measured for the integration.

## Current status in the integrated code

What is in use:

- **Stored English sources.** The source JSON files under
  `content/translations/source/` were made with this extractor
  (`extractor: "extract-pilot-1"`). There are two today:
  `/kpop/what-does-sunbae-and-hoobae-mean-in-kpop` (78 units) and
  `/kpop/why-kpop-idols-feel-like-anime-characters` (56 units).
- **Freshness check.** `scripts/i18n/check-sources.mjs` imports
  `extractFromTsx` and `EXTRACTOR_VERSION` from this file and re-extracts each
  page to compare it with the stored JSON (`docs/i18n/source-freshness.md`).
- **Bound to the code.** The freshness record
  (`content/i18n/source-freshness.json`) stores the SHA-256 of this file. Any
  edit to `extract.mjs`, even without a version change, makes every page
  `sourceFreshness: "unverified"` until the record is written again with
  `node scripts/i18n/check-sources.mjs --write-record`.

What is separate from this file:

- **Runtime validation and rendering.** Translated pages do not import this
  file. They use `lib/i18n/validateTranslation.mjs` (its own implementation of
  the placeholder, markup and protected-term rules) and
  `lib/i18n/TranslatedPage.tsx`, which builds React elements from
  `structure` and passes text to React as strings. Translated HTML is not
  inserted.
- **Offline helpers.** `translationStatus`, `reviewNotes`, `renderUnitHtml`,
  `toSchemaV1` and `compareWithBuiltHtml` are used by the command line and the
  tests only.

Not done:

- **JSON-LD.** Translated pages render no JSON-LD. Generating it per locale is
  not implemented.
- **Shared UI strings.** There is no catalogue for shared UI strings
  (`SiteHeader`, `SiteFooter`).
- **PR #86.** PR #86 (`check.mjs`, schemaVersion 1) is not part of the
  integration. Nothing in the repository checks the v1 view any more (see
  "Compatibility with PR #86").

## Goal

A translator — human or AI — should only ever edit **text**. HTML tags, link
targets, images, classes and components stay in the trusted English structure
and are re-applied when a translated page is rendered.

## How it works

`scripts/i18n/extract.mjs` reads the English page component (`page.tsx`) with
the **TypeScript compiler**, which is already a devDependency (no new packages).
It walks the JSX returned by the default export and produces a
`schemaVersion: 2` source document:

- `units` — translatable text, one per heading, paragraph, list item, table
  cell, caption, link-only element, metadata title/description, and
  translatable attribute (`alt`, `title`, `aria-label`).
- `structure` — the locked element tree (tags, attributes, classes, components,
  list expansions) that references units by ID.
- `review` — everything the extractor could not evaluate statically. It flags
  these for a person instead of guessing.

Static data used by `.map()` (for example the `terms`, `workplaceTerms` and
`relatedGuides` arrays) is expanded when the array is a literal of plain
objects and the callback is a single `return`. Anything else is put on the
review list.

JSX text follows React's whitespace rule: line breaks collapse to one space and
`{" "}` keeps its space. The extractor checks this against the built page.

### Units: text with placeholders

Inline elements become numbered placeholders. Their attributes are stored in
the unit, never in the text:

```json
{
  "id": "meaning-p-afaf986d",
  "kind": "block",
  "tag": "p",
  "text": "The National Institute of Korean Language’s {a1}dictionary entry for 선배{/a1} describes … Its {a2}entry for 후배{/a2} describes the person who came later.",
  "placeholders": {
    "a1": { "tag": "a", "attrs": { "className": "…", "href": "https://krdict.korean.go.kr/…66306", "target": "_blank", "rel": "noopener noreferrer" } },
    "a2": { "tag": "a", "attrs": { "…": "…" } }
  },
  "attrs": {},
  "hash": "<sha256 of tag + text + meaningful attributes (own and placeholders)>",
  "protect": ["선배", "후배"],
  "translate": true,
  "firstPerson": false
}
```

- `protect`: Hangul runs and the brand name. They must appear unchanged in the
  translation.
- `translate: false`: units that are only Korean or brand text (for example the
  `선배` card, the `대리` table cell). They are kept as is.
- `firstPerson`: the operator's own experience ("I grew up…"). The translation
  must keep the first person and must not generalise.

A unit that is itself a link (for example `← Back to K-pop` or a related-guide
card) keeps its own locked attributes in `attrs`, e.g. `{ "href": "/kpop" }`.

### Meaningful vs presentation attributes

| Class | Attributes | Effect of a change |
|---|---|---|
| Meaningful (hashed) | `href`, `src`, `srcset`, `lang`, `dir`, `cite`, `datetime`, `scope`, `colspan`, `rowspan`, `headers` | translations of that unit become **stale** |
| Translatable | `alt`, `title`, `aria-label` | own units; an `alt` unit also hashes its image's `src` |
| Presentation / behaviour (locked, not hashed) | `className`, `style`, `id`, `target`, `rel`, `width`, `height`, `data-*` | no effect on translations; re-applied from the English structure |

### Stable IDs and change detection

- `hash` covers the unit text, the unit's own meaningful attributes (a
  standalone link's `href`, an image's `src` for its `alt` unit) and the
  meaningful attributes of every placeholder. A CSS-only change marks nothing
  stale.
- `translationStatus(source, translation)` lists each unit as `current`,
  `stale` (same ID, English changed), `missing` or `unknown` (translation for a
  unit that no longer exists).
- **Units with `translate: false`** (Korean-only terms such as `선배` or `대리`,
  brand-only text) are listed as `keep`. They are rendered from the English
  source as is, are never reported as `missing`, and do not need an entry in a
  translation file. If a translation file contains one anyway, it is listed as
  `ignored` and renderers must not use it.
- A new unit's ID comes from its anchor (nearest section `id`/`aria-label`,
  list key), its tag, and a short content hash. It does not depend on position,
  so inserting or reordering paragraphs does not renumber other units.
- With `--previous <last source.json>` the extractor reconciles IDs:
  1. identical content keeps its ID. Same-anchor pairs are matched first; a
     remaining one-to-one pair is a moved block;
  2. edited text with the same tag in the same anchor (or the same list, so a
     related link whose `href` key changed still matches) keeps its ID when
     wording overlaps at least 50% and one old unit is clearly closest. The
     hash changes, so existing translations become **stale** instead of
     disappearing;
  3. everything else gets a new ID.
  Identical repeated units in one anchor (for example two `Read more` links to
  the same URL) are interchangeable and are paired in document order.
- **Ambiguous matches are never chosen silently.** If identical text could
  belong to several old IDs, if two old units are about equally close (within
  0.15), or if two edited blocks claim the same old unit, the block gets a new
  ID and a `review` entry naming the candidates. A person maps the old
  translation by hand.
- Workflow rule: always extract with `--previous` pointing at the committed
  source snapshot. Without it, an edited paragraph gets a new ID.

### Unit IDs vs temporary references

- The unit `id` is the **persistent** identifier stored in source and
  translation files.
- While extracting, every unit also gets a temporary reference that is unique
  per extracted unit (not derived from text, tag or anchor). The structure
  is first built with these references and then rewritten to final IDs. The
  temporary reference is **never exported**.
- So two `Read more` links in one section that point to different URLs, two
  identical headings, buttons, table cells or `alt` texts each get their own
  unit and their own structure reference.
- `structureReferences(source)` checks the result: every ID referenced by
  `structure` exists, no unit is referenced twice, and every non-metadata unit
  is referenced exactly once.

### Translations (schemaVersion 2)

```json
{ "schemaVersion": 2, "sourcePath": "/kpop/…", "locale": "ja", "status": "draft",
  "glossaryVersion": "…", "units": [{ "id": "meaning-p-afaf986d", "sourceHash": "…",
  "text": "国立国語院の{a1}「선배」の辞書項目{/a1}では…{a2}「후배」の項目{/a2}では…" }] }
```

`validateUnitText` **blocks** the following:

- missing, extra, duplicated or re-nested placeholders, or unknown placeholders
- stray `{`/`}`
- any HTML markup in the text
- a missing protected term

`reviewNotes` **flags for review** two cases that can be correct in another
language:

- placeholders in a different order
- changed numbers

`renderUnitHtml` rebuilds HTML only from the English placeholder definitions,
with all text escaped.

## Pilot result — `/kpop/what-does-sunbae-and-hoobae-mean-in-kpop`

Recorded for PR #87 and not re-measured for the integration. At that time,
the built `<article>` HTML of `main` (51b2a16) was byte-identical (SHA-1) to
Production when checked. It was used as the comparison reference.

| Item | Result |
|---|---|
| Units | 78 (metadata 2, blocks 74, attributes 2) |
| Headings / paragraphs | h1 1, h2 9, body paragraphs 29; header: kicker, lede, back link |
| Table | caption 1, header cells 3, 4 rows × 3 cells from `workplaceTerms` |
| Cards / related links | 3 term cards × 3 lines, 7 related-guide links |
| Inline markup | 16 blocks with 30 placeholders (em, strong, 9 links) |
| Korean-only kept units | 7 · protected Hangul terms tracked per unit |
| First-person units | 14 |
| Images / alt text | none on this page (covered by fixture tests) |
| Review items | 2: `<JsonLd>` data is dynamic, and JSON-LD must be generated per locale |
| Built HTML comparison | 68 text segments; 67 units exact, 7 inside the related-links grid, **0 not found, 0 uncovered** |
| Duplicates | 0 (IDs unique; no block extracted twice) |
| Inserted paragraph / swapped sections | 0 existing IDs changed |
| Edited paragraph with `--previous` | same ID, new hash (stale) |
| Re-extraction with `--previous` | all 78 IDs and hashes unchanged; the earlier pilot snapshot (`ac19f96`, older hash formula) also maps to all 78 old IDs |
| Structure references | 0 missing, 0 duplicated, 0 unreferenced |
| Translation status with only translatable units translated | 71 current, 7 `keep` (Korean-only), 0 missing |
| Standalone links | 8 (back link + 7 related guides): `href` kept in `attrs` and in the v1 view |
| `href` change on the back link / a related link / an inline citation | exactly 1 unit stale each |
| CSS-only change (all `className` values) or `rel` change | 0 units stale |
| Identical or near-identical units (same tag, similarity ≥ 0.5) | none on this page, so no ambiguity risk |

Not extracted on purpose:

- `SiteHeader`/`SiteFooter`: shared UI strings belong in a separate UI
  catalogue.
- JSON-LD: it is to be rebuilt per locale from the translated title and
  description.

Neither has been built yet (see "Current status").

## HTML-in-text vs text + placeholders

The same Japanese translation of the BoA paragraph was checked in both modes,
with typical AI mistakes injected:

| Mistake | Text + placeholders (`validateUnitText`/`reviewNotes`) | HTML in text (PR #86 `check.mjs`) |
|---|---|---|
| Link URL changed | impossible: the URL is not in the text | blocked (`LINK_TARGET`) |
| Two links swapped | review note (order differs) | blocked (`LINK_TARGET`) |
| Link boundary moved | passes (meaning problem) | passes (meaning problem) |
| Emphasis dropped | blocked | blocked |
| Image injected | blocked (markup in text) | blocked |
| Event handler injected | blocked (markup in text) | blocked |
| Year 2000 → 2001 | review note | review (`NUMBER_REVIEW`) |

What the translator must handle on this page:

| Mode | Characters to handle | Overhead |
|---|---|---|
| Plain text | 7,686 | — |
| Text + placeholders | 8,022 | +4% |
| HTML with link attributes (v1) | 8,690 | +13% |
| Built HTML with classes | 9,473 | +23% |

In HTML mode, the translator also sees 30 attribute values and 9 URLs that it
could change.

**Recommendation (PR #87):** text + placeholders (schemaVersion 2) as the
translation format, with HTML kept only as a derived compatibility view. The
page renderer should build React elements from `structure` and the placeholder
definitions, and never insert translated HTML (`dangerouslySetInnerHTML`).

Later work adopted schemaVersion 2 as the stored format.
`lib/i18n/TranslatedPage.tsx` builds React elements and does not use
`dangerouslySetInnerHTML`.

## Compatibility with PR #86 (schemaVersion 1) — pilot record

PR #86 is not part of the integration. The points below describe the pilot
as it was. The v1 view (`toSchemaV1`, `--v1`) is still in `extract.mjs`, but
nothing in the repository checks it, so it is not a second gate today.


- `toSchemaV1(source)` emits PR #86 blocks. The wrapper and placeholders
  carry only `href`/`target`/`rel`/`src`/`alt`/`title`/`aria-label`; classes
  are presentation and stay in `structure`. Standalone links keep their URL on
  the wrapper (`<a href="/kpop">← Back to K-pop</a>`). (The first pilot commit
  dropped it; it is fixed and tested.)
- The v1 view is a compatibility aid. Link integrity for v2 translations comes
  from the placeholder rules and the unit hash, not from the v1 view: v1 does
  not carry metadata or attribute units.
- The Sunbae v1 view (67 translatable blocks) passed PR #86's `check.mjs` as an
  identity translation. This was checked locally against the PR #86 branch; the
  check is not part of this PR.
- Migration path: v2 is the stored format. v1 is generated when needed. A v2
  translation becomes v1 through `renderUnitHtml`, after `validateUnitText`
  passes, so PR #86 checks still apply as a second gate.
- **PR dependency (at the time):** PR #87 was based on `main` and imported
  nothing from PR #85 or PR #86. Cross-checking v1 against PR #86 was a local
  verification step.

## Limitations

- Only patterns the extractor can evaluate statically are extracted. Pages
  built from external data, conditionals or helper components go on the review
  list.
- The built-HTML comparison is a text-coverage aid for humans, not a structural
  HTML parser.
- Placeholder checks cannot see meaning: a link around the wrong words, a
  mistranslated term or an invented fact can still pass. Native review stays
  mandatory.
- **Narrow exception (2026-10-21).** Native review is still the default for
  every translated page. The owner chose one exception: the Japanese Sunbae
  page (`/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop`) may be published
  as a **noindex** pilot on the basis of AI cross-review, after the owner
  separately accepts the risks and gives the final approvals.
  - Scope, review history and open risks: `ja-editorial-review.md`.
  - Automated checks and AI review are not a human native review and are not
    recorded as one.
  - The exception does not extend to any other page, including the Japanese
    anime page.
  - Quality, production and indexing approvals stay separate (see
    `catalog-contract.md`); the exception includes no indexing approval.
- `firstPerson` and `protect` are heuristics that guide review. They do not
  replace it.

## Commands

```bash
node --test scripts/i18n/extract.test.mjs
node scripts/i18n/extract.mjs app/kpop/what-does-sunbae-and-hoobae-mean-in-kpop/page.tsx \
  --path /kpop/what-does-sunbae-and-hoobae-mean-in-kpop \
  --previous <previous-source.json> --html <built-page.html> \
  --out source.json --v1 source.v1.json --report report.md
```

The `--report`, `--v1` and `--html` comparison outputs are working material.
Do not commit them and do not publish them.

A source JSON that is stored for translation goes under
`content/translations/source/`. After adding or re-extracting one, run
`node scripts/i18n/check-sources.mjs --write-record` and commit the record in
the same change (`docs/i18n/source-freshness.md`).
