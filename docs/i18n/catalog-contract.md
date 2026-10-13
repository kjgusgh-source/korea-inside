# Translation catalog contract (P2)

Module: `lib/i18n/catalog.ts` (server only). Tests: `scripts/i18n/catalog.test.mjs`.

The catalog finds translation files, validates them with the existing
schemaVersion 2 validator (`lib/i18n/validateTranslation.mjs`, unchanged) and
decides where each translation may be shown. It only reads files. It never
writes, approves or changes a status.

In this step no page uses the catalog. The shared locale routes (P3) will.

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
  englishPageFile: string | null;  // e.g. app/kpop/.../page.tsx (recorded, not checked)
  status: "draft" | "reviewed" | "approved" | null;  // as written in the file
  validation: "valid" | "stale" | "invalid";
  sourceFreshness: "unverified" | "verified" | "changed";
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
(`page.tsx`). That check is P5. Until then every entry is
`sourceFreshness: "unverified"`, and production publishing requires
`"verified"`.

## API

| Function | Purpose |
|---|---|
| `loadCatalog({ root? })` | `{ root, entries, issues }`, cached per root |
| `listTranslations({ root? })` | all entries, valid or not |
| `getTranslation(locale, sourcePath, { root? })` | `{ entry, source, translation }` or `undefined`; documents only for valid entries; `undefined` for duplicates |
| `publishDecision(entry, environment, approvals = [])` | `{ render, robots, listInLanguageMenu, includeInSitemap, reasons }` |
| `resolveEnvironment(env = process.env)` | `"production"`, `"preview"` or `"development"` |
| `renderableEntries(locale, environment, { root?, approvals? })` | entries with `render: true` (for `generateStaticParams`) |
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
  approvedBy: string;         // non-empty
  approvedAt: string;         // ISO 8601 with time zone
};
```

Records must match the exact bytes of both files. Any later edit to the
English source JSON or the translation voids them. **P2 defines this shape
only. No approval records exist, none are loaded, and nothing is enabled.**
Where records will be stored, and who may add them, needs its own approval.

| Case | preview / development | production |
|---|---|---|
| valid draft / reviewed, preview locale (`ja`) | render, noindex | not rendered |
| valid, planned locale (`zh-*`, `es`, `ko`) | not rendered (`locale-planned`) | not rendered |
| stale / invalid | not rendered, reported | not rendered, reported |
| `status: "approved"` without matching records | render, noindex | not rendered |
| all records match, today | render, noindex | not rendered (`locale-not-public`, `source-freshness-unverified`) |

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
production. Preview pages are never listed and never indexed.

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

- shared locale routes (P3)
- header language menu (P4)
- English page freshness check (P5)
- approval record storage
- sitemap, robots, canonical and hreflang changes
