# Translation catalog contract (P2; source freshness P5-B; approval records E1; search engines E3)

Module: `lib/i18n/catalog.ts` (server only). Tests: `scripts/i18n/catalog.test.mjs`.

The catalog finds translation files, validates them with the existing
schemaVersion 2 validator (`lib/i18n/validateTranslation.mjs`, unchanged) and
decides where each translation may be shown. It only reads files. It never
writes, approves or changes a status.

The catalog was added in P2, before anything used it. Today
`lib/i18n/LocalePage.tsx` uses it (through `renderableEntries` and
`catalogDecision`, the same decision) for three things:

- the shared locale route (`app/ja/[...slug]/page.tsx`, P3)
- the header language menu data (`app/api/i18n/available/route.ts`, P4)
- the translated entries of the XML sitemap (`app/sitemap.ts`, E3)

## Data layout

```
content/translations/source/<site path>.json          English source
content/translations/<locale code>/<site path>.json   translation
```

- Folder names and the `locale` field use locale codes from
  `lib/i18n/locales.ts`: `ja`, `zh-Hant`, `zh-Hans`, `es`, `ko`.
- URLs use the locale's `urlPrefix`, e.g. `zh-Hant` → `/zh-hant/...`.
- A translation must sit at the path given by its own `sourcePath`, e.g.
  `ja/kpop/what-is-maknae.json` ↔ `"sourcePath": "/kpop/what-is-maknae"`.

## Path and input rules

Site paths are checked, never normalized: `/` followed by lowercase ASCII
slug segments (`a-z`, `0-9`, single `-`), at most 8 segments, no trailing
slash. Anything else is rejected — `..`, `//`, `\`, `%2e`, uppercase,
non-ASCII.

| Input | Result |
|---|---|
| Unknown locale folder (`fr`, `zh-hant`) | catalog issue, folder skipped (with a hint for the right code) |
| `en` folder | catalog issue; English is the source language |
| Symbolic link (file or folder) | catalog issue, not followed |
| Non-JSON file | catalog issue, ignored |
| File name that is not a site path | entry `invalid` |
| JSON that does not parse / is not an object | entry `invalid` |
| `sourcePath` in the file not a valid site path | entry `invalid` |
| File location differs from `sourcePath` | entry `invalid`, registered under the declared page |
| Two files register the same locale + page | all of them `invalid` (ambiguous) |
| English source JSON missing or unreadable | entry `invalid` |
| `getTranslation` with an unknown locale or unsafe path | `undefined`, no disk access |

One broken file only affects its own entry (and, for duplicates, the entries
it collides with). The catalog never throws for bad data.

## Entry

```ts
type CatalogEntry = {
  key: string;                 // "ja:/kpop/..."
  locale: LocaleCode;
  sourcePath: string | null;   // English page path
  urlPath: string | null;      // "/ja/kpop/..."
  files: {
    translation: { path: string; sha256: string };
    source: { path: string; sha256: string } | null;
  };
  englishPageFile: string | null;  // e.g. app/kpop/.../page.tsx, from the source JSON
  status: "draft" | "reviewed" | "approved" | null;  // as written in the file
  validation: "valid" | "stale" | "invalid";
  sourceFreshness: "unverified" | "verified" | "changed";
  sourceFreshnessDetail: { reason: string; notCompared: string[] };
  errors: { id: string; problem: string }[];
  warnings: { id: string; problem: string }[];
};
```

`sha256` is `"sha256:<hex>"` of the exact file bytes. Paths are repository
relative.

### Validation state

- `stale` — every error is one of: `sourceHash does not match the English
  source (stale)`, `missing translation`, `unknown unit ID`. The translation
  was made for another version of the stored English source.
- `invalid` — any other error: placeholders, markup, protected Hangul,
  duplicate units, schema, locale, status (`qa_passed` and other values are
  not allowed here), structure references, file and path problems.
- `valid` — no errors.

This classification depends on the validator's problem texts. The tests pin
them; a change to those texts must update `STALE_PROBLEMS`.

### Source freshness

`sourceHash` only proves that a translation matches the **stored English
source JSON**. It does not prove that the JSON still matches the English page
(`page.tsx`).

Since P5-B the catalog reads that answer from the freshness record
`content/i18n/source-freshness.json`. The record is written only by
`node scripts/i18n/check-sources.mjs --write-record`. The catalog reads the
record and the checker and extractor code as data; it imports neither. It
fails closed:

- `verified`: all of these hold.
  - The record has exactly one `MATCH` entry for the page.
  - Its paths and extractor version match the source JSON.
  - Its file hashes equal the current source JSON and `page.tsx` bytes.
  - Its code hashes (`check-sources.mjs`, `extract.mjs`) and TypeScript
    version equal the current ones.
- `changed`: the source JSON or `page.tsx` bytes differ from the checked
  version, or the checker result was `CHANGED`.
- `unverified`: everything else, for example:
  - no record, or a damaged record
  - a change to the checker or extractor code
  - another TypeScript version
  - an `UNVERIFIED` or `ERROR` result

`sourceFreshnessDetail` gives the reason and the parts that were not compared
(`["json-ld"]`). Details are in `docs/i18n/source-freshness.md`.

Production publishing requires `"verified"`. `verified` is not a translation,
publishing or indexing approval, and it does not change `status`.

## API

| Function | Purpose |
|---|---|
| `loadCatalog({ root? })` | `{ root, entries, issues }`, cached per root |
| `listTranslations({ root? })` | all entries, valid or not |
| `getTranslation(locale, sourcePath, { root? })` | `{ entry, source, translation }` or `undefined`; documents only for valid entries; `undefined` for duplicates |
| `publishDecision(entry, environment, approvals = [])` | `{ render, robots, listInLanguageMenu, includeInSitemap, reasons }`; pure function, records passed in |
| `approvalRecords({ root? })` | the repository's approval records (see below); `[]` when the file is missing or unusable |
| `catalogDecision(entry, environment, { root? })` | `publishDecision` with the repository's approval records; used by every route |
| `isRealDateTime(value)` | `true` for an ISO 8601 date-time with a time zone whose date and time exist |
| `resolveEnvironment(env = process.env)` | `"production"`, `"preview"` or `"development"` |
| `renderableEntries(locale, environment, { root? })` | entries with `render: true` by `catalogDecision` (for `generateStaticParams`) |
| `routeSegments(entry)` | `["kpop", "what-is-maknae"]` for a catch-all route |
| `checkSourcePath(value)` | the path if valid, otherwise `null` |
| `clearCatalogCache()` | tests only |

`resolveEnvironment`: `VERCEL_ENV=production` → production; `preview` →
preview; `development` → development; any other value, or `VERCEL` set
without `VERCEL_ENV` → production (fail closed); no Vercel variables (local
builds) → development.

## Publish policy

Three approvals are separate: translation quality, production publishing, and
search indexing. `status: "approved"` in a translation file is never enough
on its own.

```ts
type ApprovalRecord = {
  kind: "quality" | "production" | "indexing";
  locale: LocaleCode;
  sourcePath: string;
  sourceSha256: string;       // must equal entry.files.source.sha256
  translationSha256: string;  // must equal entry.files.translation.sha256
  approvedBy: string;         // non-empty, at most 200 characters
  approvedAt: string;         // ISO 8601 with time zone; the date must exist
};
```

Records must match the exact bytes of both files, the locale and the page.
Any later edit to the English source JSON or the translation voids them. A
record for one kind never counts for another: a production record is not a
quality or indexing approval.

### Approval records file (E1)

Since E1 the catalog reads approval records from one file:

```
content/i18n/approvals.json
{ "schemaVersion": 1, "records": [ ApprovalRecord, ... ] }
```

- **Fixed path.** The path is below the repository root of the catalog. No
  option or environment variable can point elsewhere.
- **No file = no approvals.** A missing file means 0 approvals. This is the
  normal state and is not reported.
- **A damaged file is void as a whole.** The catalog then uses 0 approvals
  and reports a catalog issue `(approvals)`. Valid records next to a bad one
  are not used either. The file is void when any of these is true:
  - it, or a folder on the way, is a symbolic link
  - it is not a regular file, cannot be read, or is larger than 1 MB
  - it is not a JSON object
  - its top level holds anything other than exactly `schemaVersion` and
    `records`
  - `schemaVersion` is not 1, or `records` is not a list
  - any record is not exactly the shape above: a missing or extra field, an
    unknown kind, `en` or an unknown locale, an unsafe path, a hash that is
    not lowercase `sha256:<64 hex>`, an empty or overlong `approvedBy`, or an
    `approvedAt` without a time zone or with a date or time that does not
    exist (`2026-02-30`, `2026-04-31`, `2026-02-29`, `24:00`). `2028-02-29`
    is accepted. `Date.parse()` alone is not used, because it moves
    impossible dates to another day.
- **`approvedBy` is an audit label.** It records who gave the approval in
  chat. It is not a login and does not authenticate anyone. Control over the
  file comes from review of the change that adds it.
- **Build time only.** Routes are fully static, so the file is read when the
  site is built. It is not traced into the function bundles. If a route were
  ever rendered at request time, the file would be missing there, and nothing
  would be approved (fail closed).
- **No records exist today.** No `approvals.json` is committed, and Japanese
  is still a non-public locale. Who may add records, and when, needs its own
  approval for each record.

| Case | preview / development | production |
|---|---|---|
| valid draft / reviewed, preview locale (`ja`) | render, noindex | not rendered |
| valid, planned locale (`zh-*`, `es`, `ko`) | not rendered (`locale-planned`) | not rendered |
| stale / invalid | not rendered, reported | not rendered, reported |
| `status: "approved"` without matching records | render, noindex | not rendered |
| all records match, preview locale (`ja`) today | render, noindex | not rendered (`locale-not-public`; also `source-freshness-<state>` unless `verified`) |

Production rendering requires all of:

- a valid entry
- a public locale (`LOCALES[x].publication === "public"`, English only today)
- `status: "approved"`
- `sourceFreshness: "verified"`
- a matching quality approval
- a matching production approval

`robots: "index"` and `includeInSitemap` additionally need a matching
indexing approval, in production only.

`listInLanguageMenu` is true only for production-eligible entries in
production. Preview pages are never indexed.

The header language menu (P4) does not read `listInLanguageMenu`. It lists
the pages that `/api/i18n/available` reports, and that list is built from the
same `renderableEntries` as the locale route. So:

- on Preview, the Japanese drafts are listed with a "Draft preview" label
- on Production, nothing is listed

## Search engines (E3)

The robots decision of a translated page drives its metadata and the sitemap
(`lib/i18n/LocalePage.tsx`: `localeMetadata`, `indexedTranslations`,
`withTranslationAlternates`). A page is *indexed* when it renders and
`publishDecision` gives `robots: "index"` and `includeInSitemap` in the
current environment. That needs Production and all three approvals.

| Production records (all other gates pass) | HTTP | robots | canonical | sitemap | hreflang |
|---|---|---|---|---|---|
| quality + production | 200 | noindex, nofollow, nocache | none | not listed | none |
| quality + production + indexing | 200 | index, follow | itself (`/ja/...`) | listed once | `en`, `ja`, `x-default` |
| any of quality or production missing | 404 | — | — | not listed | none |
| stale records or source freshness, damaged file | 404 | — | — | not listed | none |

Preview and development never index, whatever records exist: drafts there
are noindex with no canonical, and the sitemap lists no translation.

- **Canonical.** The translated page's own path. Like the English pages, it is
  resolved against the root layout's `metadataBase`
  (`https://haemilkorea.com`), the same base as the sitemap URLs. English
  canonicals are unchanged.
- **hreflang in the sitemap only.** No hreflang is added to any HTML page. For
  each English page with an indexed translation:
  - the English entry gets
    `alternates.languages = { en: English URL, ja: Japanese URL, "x-default": English URL }`
    (more locales are added in `locales.ts` order)
  - the translated URL is added right after it, with the same links and the
    English entry's `changeFrequency` and `priority`
  - the translated URL has no `lastModified`, since no date is recorded for
    the translation

  Next.js writes these as `<xhtml:link rel="alternate" hreflang="..." href="..." />`
  and adds `xmlns:xhtml` to `<urlset>` only when some entry has links.
- **Unchanged when nothing is indexed.** With no indexed translation, the
  sitemap entries are passed through as they are, so `sitemap.xml` is byte
  for byte the same as before. English entries without a translation never
  change.
- **Fails closed.** A page's translations are left out of the sitemap, with a
  build warning `[i18n] sitemap: ...`, when any of these is true:
  - its English URL is not listed exactly once
  - its English URL already has language links
  - a translated URL is already listed

  The sitemap URLs come from `localeStaticParams`, so every listed
  translation is a generated page.
- **Not changed:** `robots.txt`, JSON-LD (translated pages have none), English
  page metadata, and Open Graph (`og:locale` only, no `og:url`).

Search engines are not asked to index anything by this code. An indexing
record is its own approval, given per page.

`noindex` is not access control. Non-public translations must not be
rendered in production at all; the route must 404.

English pages are not handled by the catalog and keep their current behavior.

## Build environment (checked locally, not on Vercel)

- The catalog reads `process.cwd()/content/translations` with `node:fs`. In
  `next build` this is the project root, so static generation sees every
  file.
- **Fully static routes** (`generateStaticParams` + `dynamicParams = false`):
  - The catalog is read only at build time.
  - A standalone build kept serving the prerendered page after the
    `content` folder was removed from the deployed copy.
- **Dynamic routes** that read the catalog at request time:
  - They depend on output file tracing. Next traced the two existing
    translation files into the function bundle.
  - When the files were missing at run time, the catalog returned no
    entries plus the issue `translations folder not found`. It did not throw.
- `import "server-only"` is provided by Next.js (no package installed).
  Importing the catalog from a client component fails the build.
- **Recommendation for P3:** keep translated routes fully static, so no
  request-time file access is needed.
  - A build-time manifest (generated JSON) would also work.
  - It adds a generation step and a second copy of the data that can go out
    of date, so it is not used now.
- Vercel itself was not exercised in P2 because no route uses the catalog
  yet. The first real check is the P3 Preview deployment.

## Not in P2

The P2 list is kept as a record:

- shared locale routes: added later (P3)
- header language menu: added later (P4)
- English page freshness check: added later (P5-A, P5-B)
- approval record storage: reading added in E1 (`content/i18n/approvals.json`); no records exist
- sitemap, robots, canonical and hreflang: added in E3 (above); no page is indexed, because no records exist and Japanese is not public
