# English source freshness check (P5-A, P5-B)

Tool: `scripts/i18n/check-sources.mjs`. Tests: `scripts/i18n/check-sources.test.mjs`.

`sourceHash` in a translation only proves that the translation matches the
**stored** English source JSON. This check answers the other half: does the
English page (`page.tsx`) still produce that stored JSON?

It is an offline Node tool. It never rewrites the source JSON, the page or a
translation. Only with `--write-record` does it write one file, the freshness
record (see below), which the catalog reads to set `sourceFreshness`. Next.js
pages must not import it or the extractor.

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

Line numbers and formatting are ignored. The SHA-256 of `page.tsx` never
decides the result; the record uses it only to tie a result to the exact bytes
that were checked.

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
node scripts/i18n/check-sources.mjs --write-record  # full run + record
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

## Freshness record (P5-B)

Status:

- P5-B1: `--write-record` and the catalog connection.
- P5-B1.1: the record is bound to the checker and extractor code; the record
  path is restricted.
- P5-B2: first record committed (Sunbae, `MATCH`).

### File

`content/i18n/source-freshness.json`, written only by
`node scripts/i18n/check-sources.mjs --write-record` (a full run; never edit it
by hand). Entries are sorted and there are no timestamps, so the same input
gives the same bytes.

`schemaVersion: 2`:

| Field | Content |
|---|---|
| `tools.files` | SHA-256 of `scripts/i18n/check-sources.mjs` and `scripts/i18n/extract.mjs` as they ran |
| `tools.parser` | TypeScript version used by the extractor, e.g. `typescript@5.9.3` |
| `entries[]` | `sourcePath`, `sourceFile`, `sourceJson`, `status`, `extractorVersion`, `sourceJsonSha256`, `pageSha256`, `notCompared` (`["json-ld"]` when the page has JSON-LD) |

The record can only be written as a `.json` file under `content/i18n/`. A
symbolic link in any folder on the way, or at the file, is refused, and an
existing file that is not a record is never replaced.

### Catalog result (`sourceFreshness`)

`lib/i18n/catalog.ts` reads the record, the two code files and
`node_modules/typescript/package.json` as data at build time (nothing is
imported). It fails closed.

| Result | When |
|---|---|
| `verified` | All of these hold: one `MATCH` entry for the page; matching paths and extractor version; both file hashes equal the current source JSON and `page.tsx`; both code hashes and the TypeScript version equal the current ones. |
| `changed` | The source JSON or `page.tsx` bytes differ from the checked version (also for a style- or comment-only edit), or the result was `CHANGED`. |
| `unverified` | Everything else, including: no record or a damaged record; any change to the checker or extractor code, even when the version string is unchanged; another TypeScript version; an `UNVERIFIED` or `ERROR` result; unreadable files. |

### What `verified` does not mean

`verified` only says that the stored English source JSON still matches the
English page, for the translation extraction. JSON-LD content is not compared
(`notCompared`).

It is not a translation quality approval, a production approval or an indexing
approval. The translation `status` is not changed. Production rendering still
needs all of these:

- a public locale
- `status: approved`
- separate quality and production approval records

Indexing needs its own approval. Japanese is a preview locale, so Japanese
pages stay 404 in production.

### When to write the record again

Run `node scripts/i18n/check-sources.mjs --write-record` and commit the record
in the same change whenever any of these changes:

- an English page that has a source JSON
- a source JSON, added or re-extracted
- `scripts/i18n/check-sources.mjs` or `scripts/i18n/extract.mjs`
- the installed TypeScript version

Until then, the affected pages show `changed` or `unverified`.

If the result is not `MATCH`:

1. Re-extract the source JSON.
2. Review the translations listed in the report.
3. Run the checker again.

Do not edit hashes by hand.
