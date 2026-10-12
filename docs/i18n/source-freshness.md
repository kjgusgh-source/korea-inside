# English source freshness check (P5-A)

Tool: `scripts/i18n/check-sources.mjs`. Tests: `scripts/i18n/check-sources.test.mjs`.

`sourceHash` in a translation only proves that the translation matches the
**stored** English source JSON. This check answers the other half: does the
English page (`page.tsx`) still produce that stored JSON?

It is an offline Node tool. It only reads files, never rewrites the source
JSON, the page or a translation, and does not change catalog state
(`sourceFreshness` stays `unverified` until P5-B). Next.js pages must not import
it or the extractor.

## How it works

For each `content/translations/source/<site path>.json`:

1. Check the stored file:
   - it must be schemaVersion 2
   - `sourcePath` must be a valid site path and match the file location
   - `sourceFile` must be an `app/**/page.tsx` that serves `sourcePath`, is
     inside the repository and is not a symbolic link
2. Re-extract the page with `scripts/i18n/extract.mjs` (the PR #87 extractor,
   unchanged). It is called in memory with `previous` = the stored JSON, so
   unchanged units keep their IDs and edited units keep theirs when the match
   is unambiguous.
3. Compare the stored JSON with the fresh extraction:

| Compared | How |
|---|---|
| Unit IDs | added / removed |
| Unit content | `kind`, `tag`, `text`, `hash`, meaningful `attrs`, `placeholders` (incl. link targets), `translate`, `protect` |
| Unit position | `anchor`, `group`, `path`, `origin`, `inArticle`, unit order |
| Structure | the whole rendering tree, including components, links and structure references, with `className`/`style` removed |
| Presentation | the same tree including `className`/`style` (reported separately) |
| Metadata | title and description units |
| Header | `schemaVersion`, `sourceLocale`, `sourcePath`, `sourceFile`, extractor version |
| Review notes | dynamic parts flagged by the extractor, compared without line numbers |

Line numbers and formatting are ignored. A plain SHA-256 of `page.tsx` is
recorded for information only; it never decides the result.

## Results

| Status | Meaning | What to do |
|---|---|---|
| `MATCH` | Same units, content and structure. Presentation-only edits (class/style) are listed. | Nothing. After a presentation-only edit, re-extract so the translated page gets the new classes; translations stay valid. |
| `CHANGED` | Text, link targets, metadata, units or structure differ. | Re-extract the source JSON with `previous`. Review the units listed under "changed", "new" and "removed" in every translation file shown. |
| `UNVERIFIED` | No difference was found, but part of the page cannot be checked: dynamic expressions, imported data or content components (e.g. `TermBadge`, `YouTubeEmbed`), dynamic parts already noted in the stored JSON, or a different extractor version. | Check those parts by hand. Never treat as verified. |
| `ERROR` | The check could not run: missing or unreadable file, invalid or mismatched path, symbolic link, extraction failure. | Fix the data or path. |

When nothing in a `CHANGED` result touches translated text (for example a
structure-only change), the report says so: re-extract the source JSON;
existing translations keep their units.

Exit code:

- `0`: all `MATCH`
- `1`: any `CHANGED` or `ERROR`
- `2`: otherwise `UNVERIFIED`

```
node scripts/i18n/check-sources.mjs                 # every stored source
node scripts/i18n/check-sources.mjs --json          # machine-readable
node scripts/i18n/check-sources.mjs content/translations/source/kpop/x.json
```

## JSON-LD and other exclusions

JSON-LD is not translated and translated pages do not render it.

- The structure still records the JSON-LD `data` expression, so replacing or
  rewriting that expression is reported as `CHANGED`.
- The stored source JSON has no baseline for the JSON-LD content itself (for
  example `"@type"` or `datePublished` inside `structuredData`). Those values
  cannot be compared.
- Every result therefore states "JSON-LD content not compared". This is a
  stated gap, not a hidden exception.

Imported page chrome is allowed without making a result `UNVERIFIED`:
`SiteHeader`, `JsonLd`, `next`, `next/link`, `next/navigation`, `react`. Any
other imported binding that the page uses makes the result `UNVERIFIED`, even
if the extractor did not flag it.

## First results

- `/kpop/what-does-sunbae-and-hoobae-mean-in-kpop`: **MATCH**.
  - 78 of 78 units, structure identical, no presentation differences.
  - 2 JSON-LD notes reported separately.
  - About 70 ms for the check (about 0.6 s including Node and TypeScript
    start-up).
- Coverage survey (not committed): source JSON was generated for all 112
  English article pages in a temporary copy and then checked.
  - 48 `MATCH`: content fully checkable.
  - 64 `UNVERIFIED`: content components such as `YouTubeEmbed`, `TermBadge`,
    `PostImageFigure`, `MediaFeatureCard`, or dynamic lists.
  - About 1.1 s for all 112.

Change detection (fixtures in a temporary copy):

| Edit | Result |
|---|---|
| Title text | `CHANGED`: `meta-title-…` and `header-h1-…` |
| One body sentence | `CHANGED`: the same unit ID (`header-p-78cf4305`) |
| Internal link target | `CHANGED`: the link unit (`hash`, `attrs`) and the structure |
| Section `id` / anchor | `CHANGED`: units moved, structure |
| JSON-LD `data` expression | `CHANGED`: structure only, no unit changes |
| Class only | `MATCH`, reported as presentation-only |
| Blank lines / comments | `MATCH` |
| Imported data used on the page | `UNVERIFIED` |
| Dynamic expression in the article | not `MATCH`; the expression is listed as unchecked |
| Missing page, bad `sourcePath`, wrong `sourceFile`, symbolic links, broken TSX, broken JSON | `ERROR` |

## Notes

- `scripts/i18n/extract.mjs` is a byte-identical copy of PR #87 at
  `f6a4f06` (blob `a00e712`). It is included because this branch stack does not
  contain PR #87. When the stacks are merged, keep one copy. The files are
  identical, so the merge has no conflict.
- The extractor test file (`extract.test.mjs`) is not included here. It
  belongs to PR #87.

## Next step (P5-B, not done here)

The catalog cannot run the TypeScript extractor at build time. A minimal
connection:

1. `check-sources.mjs --write-record` writes
   `content/translations/source-freshness.json`. Each entry holds
   `sourcePath`, status, extractor version, and the SHA-256 of both the stored
   source JSON and the page file.
2. `lib/i18n/catalog.ts` reads that record and sets `sourceFreshness` as
   follows. This is fail closed.
   - `verified` only if the status is `MATCH` and both hashes equal the
     current files.
   - Otherwise `changed` or `unverified`.
3. The page hash only ties the record to the exact file that was checked. The
   decision itself is always the semantic comparison above.
