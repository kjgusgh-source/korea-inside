import "server-only";
import { createHash } from "node:crypto";
import { lstatSync, readdirSync, readFileSync, type Dirent } from "node:fs";
import path from "node:path";
import { LOCALES, isLocaleCode, type LocaleCode } from "./locales";
import { validateTranslation } from "./validateTranslation.mjs";

/*
 * HAEMIL i18n — translation catalog and publish policy (server only).
 *
 * Finds English source JSON and translation JSON under content/translations,
 * validates every translation with the existing schemaVersion 2 validator,
 * and decides where each one may be shown. It reads files only; it never
 * writes, approves or promotes anything.
 *
 * Layout (data paths use locale codes, URLs use the prefixes in locales.ts):
 *   content/translations/source/<site path>.json     English source
 *   content/translations/<locale code>/<site path>.json  translation
 *
 * Contract: docs/i18n/catalog-contract.md
 */

export const TRANSLATION_STATUSES = ["draft", "reviewed", "approved"] as const;
export type TranslationStatus = (typeof TRANSLATION_STATUSES)[number];

/** valid: renderable data. stale: out of step with the stored English source. invalid: broken data. */
export type ValidationState = "valid" | "stale" | "invalid";

/**
 * Whether the stored English source JSON still matches the English page
 * (page.tsx). P2 cannot check this, so every entry is "unverified".
 * The source-freshness check (P5) will set "verified" or "changed".
 */
export type SourceFreshness = "unverified" | "verified" | "changed";

export type Environment = "production" | "preview" | "development";

export type CatalogIssue = { id: string; problem: string };

export type FileIdentity = {
  /** Repository-relative path with "/" separators. */
  path: string;
  /** "sha256:<hex>" of the exact file bytes. */
  sha256: string;
};

export type CatalogEntry = {
  /** "<locale>:<site path>", or "<locale>:file:<relative file>" when no valid site path exists. */
  key: string;
  locale: LocaleCode;
  /** English page path, e.g. "/kpop/what-does-sunbae-and-hoobae-mean-in-kpop". null if unusable. */
  sourcePath: string | null;
  /** Translated page URL, e.g. "/ja/kpop/...". null if unusable. */
  urlPath: string | null;
  files: { translation: FileIdentity; source: FileIdentity | null };
  /** English page file recorded in the source JSON (not read or checked in P2). */
  englishPageFile: string | null;
  /** Status written in the translation file. Read only; never changed here. */
  status: TranslationStatus | null;
  validation: ValidationState;
  sourceFreshness: SourceFreshness;
  errors: CatalogIssue[];
  warnings: CatalogIssue[];
};

export type JsonObject = Record<string, unknown>;

export type TranslationRecord = {
  entry: CatalogEntry;
  /** Parsed documents, present only when the entry is valid. */
  source: JsonObject | null;
  translation: JsonObject | null;
};

export type Catalog = {
  root: string;
  entries: CatalogEntry[];
  /** Problems that do not belong to one entry (unknown locale folders, symlinks, stray files). */
  issues: CatalogIssue[];
};

export type ApprovalKind = "quality" | "production" | "indexing";

/**
 * A separate approval record (not stored in translation files). P2 defines the
 * shape only; no approvals are recorded or loaded anywhere yet.
 */
export type ApprovalRecord = {
  kind: ApprovalKind;
  locale: LocaleCode;
  sourcePath: string;
  /** Must equal entry.files.source.sha256 and entry.files.translation.sha256. */
  sourceSha256: string;
  translationSha256: string;
  approvedBy: string;
  approvedAt: string;
};

export type PublishDecision = {
  environment: Environment;
  /** The translated page may be rendered in this environment. */
  render: boolean;
  /** Robots directive for the page. Only "index" with an indexing approval in production. */
  robots: "noindex" | "index";
  /** May appear in a public language menu (needs production approval). */
  listInLanguageMenu: boolean;
  /** May appear in the sitemap / hreflang set (needs indexing approval). */
  includeInSitemap: boolean;
  /** Why something is not allowed; empty when everything is allowed. */
  reasons: string[];
};

const SEGMENT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_SEGMENTS = 8;
const MAX_DEPTH = 8;
const SOURCE_DIR = "source";
const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/;

// Validator problems that mean "translated for a different version of the
// stored English source". Everything else is broken data (invalid).
const STALE_PROBLEMS = [
  "sourceHash does not match the English source (stale)",
  "missing translation",
  "unknown unit ID",
];

export function defaultCatalogRoot(): string {
  return path.join(process.cwd(), "content", "translations");
}

/**
 * Check a site path without normalizing it. Returns the same string when it
 * is a lowercase slug path such as "/kpop/what-is-maknae", otherwise null.
 * "..", "//", backslashes, encoded characters, uppercase and trailing
 * slashes are all rejected.
 */
export function checkSourcePath(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 300 || !value.startsWith("/")) return null;
  const segments = value.slice(1).split("/");
  if (!segments.length || segments.length > MAX_SEGMENTS) return null;
  return segments.every((segment) => SEGMENT.test(segment)) ? value : null;
}

function sha256(bytes: Buffer): string {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function toPosix(relative: string): string {
  return relative.split(path.sep).join("/");
}

function isInside(parent: string, child: string): boolean {
  const relative = path.relative(parent, child);
  return relative !== "" && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function repoPath(root: string, file: string): string {
  return toPosix(path.relative(path.dirname(path.dirname(root)), file));
}

function readJson(file: string): { bytes: Buffer; json: JsonObject } | { error: string } {
  let bytes: Buffer;
  try {
    const stat = lstatSync(file);
    if (stat.isSymbolicLink() || !stat.isFile()) return { error: "not a regular file" };
    bytes = readFileSync(file);
  } catch {
    return { error: "file not found" };
  }
  try {
    const json: unknown = JSON.parse(bytes.toString("utf8"));
    if (!json || typeof json !== "object" || Array.isArray(json)) return { error: "JSON is not an object" };
    return { bytes, json: json as JsonObject };
  } catch {
    return { error: "JSON could not be parsed" };
  }
}

/** File for a checked site path inside a base folder, or null if it would leave the folder. */
function fileForSitePath(base: string, sitePath: string): string | null {
  const file = path.resolve(base, ...sitePath.slice(1).split("/")) + ".json";
  return isInside(base, file) ? file : null;
}

function listJsonFiles(dir: string, base: string, issues: CatalogIssue[], depth = 0): string[] {
  if (depth > MAX_DEPTH) {
    issues.push({ id: toPosix(path.relative(base, dir)), problem: "folder nesting is too deep; skipped" });
    return [];
  }
  let items: Dirent[];
  try {
    items = readdirSync(dir, { withFileTypes: true });
  } catch {
    issues.push({ id: toPosix(path.relative(base, dir)), problem: "folder could not be read" });
    return [];
  }
  const files: string[] = [];
  for (const item of items.sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, item.name);
    const id = toPosix(path.relative(base, full));
    if (item.isSymbolicLink()) issues.push({ id, problem: "symbolic links are not followed" });
    else if (item.isDirectory()) files.push(...listJsonFiles(full, base, issues, depth + 1));
    else if (item.isFile() && item.name.endsWith(".json")) files.push(full);
    else issues.push({ id, problem: "ignored: not a .json file" });
  }
  return files;
}

function classify(errors: CatalogIssue[]): ValidationState {
  if (!errors.length) return "valid";
  return errors.every((error) => STALE_PROBLEMS.includes(error.problem)) ? "stale" : "invalid";
}

type Built = { entry: CatalogEntry; source: JsonObject | null; translation: JsonObject | null };

function buildCatalog(root: string): { catalog: Catalog; records: Map<string, Built> } {
  const resolvedRoot = path.resolve(root);
  const sourceRoot = path.join(resolvedRoot, SOURCE_DIR);
  const issues: CatalogIssue[] = [];
  const built: Built[] = [];
  const sourceCache = new Map<string, ReturnType<typeof readJson>>();

  let top: Dirent[] = [];
  try {
    top = readdirSync(resolvedRoot, { withFileTypes: true });
  } catch {
    issues.push({ id: "(catalog)", problem: "translations folder not found" });
  }

  for (const item of top.sort((a, b) => a.name.localeCompare(b.name))) {
    if (item.name === SOURCE_DIR) continue;
    if (item.isSymbolicLink()) { issues.push({ id: item.name, problem: "symbolic links are not followed" }); continue; }
    if (!item.isDirectory()) { issues.push({ id: item.name, problem: "ignored: not a locale folder" }); continue; }
    if (!isLocaleCode(item.name)) {
      const hint = Object.values(LOCALES).find((l) => l.urlPrefix === item.name.toLowerCase() || l.code.toLowerCase() === item.name.toLowerCase());
      issues.push({ id: item.name, problem: `unsupported locale folder${hint ? `; use the locale code "${hint.code}"` : ""}` });
      continue;
    }
    if (item.name === "en") { issues.push({ id: item.name, problem: "English is the source language; translations into en are not allowed" }); continue; }
    const locale = item.name;
    const localeRoot = path.join(resolvedRoot, locale);

    for (const file of listJsonFiles(localeRoot, resolvedRoot, issues)) {
      const relative = toPosix(path.relative(localeRoot, file));
      const derivedPath = checkSourcePath(`/${relative.replace(/\.json$/, "")}`);
      const errors: CatalogIssue[] = [];
      const warnings: CatalogIssue[] = [];
      const fail = (problem: string, id = "(translation)") => errors.push({ id, problem });

      const read = readJson(file);
      const translationIdentity: FileIdentity = {
        path: repoPath(resolvedRoot, file),
        sha256: "bytes" in read ? sha256(read.bytes) : "sha256:unavailable",
      };
      const entry: CatalogEntry = {
        key: derivedPath ? `${locale}:${derivedPath}` : `${locale}:file:${relative}`,
        locale,
        sourcePath: derivedPath,
        urlPath: null,
        files: { translation: translationIdentity, source: null },
        englishPageFile: null,
        status: null,
        validation: "invalid",
        sourceFreshness: "unverified",
        errors,
        warnings,
      };
      const record: Built = { entry, source: null, translation: null };
      built.push(record);

      if (!derivedPath) { fail("file path is not a valid site path (lowercase slug segments only)"); continue; }
      if ("error" in read) { fail(`translation ${read.error}`); continue; }
      const translation = read.json;

      const declared = checkSourcePath(translation.sourcePath);
      if (!declared) { fail("sourcePath in the file is not a valid site path"); continue; }
      if (declared !== derivedPath) {
        // Registered under the declared page so that a misplaced copy is reported as a duplicate.
        entry.key = `${locale}:${declared}`;
        entry.sourcePath = declared;
        fail(`file location does not match sourcePath ${declared}`);
      }
      if (typeof translation.status === "string" && (TRANSLATION_STATUSES as readonly string[]).includes(translation.status)) {
        entry.status = translation.status as TranslationStatus;
      }

      const sourceFile = fileForSitePath(sourceRoot, declared);
      if (!sourceFile) { fail("English source path leaves the source folder"); continue; }
      if (!sourceCache.has(sourceFile)) sourceCache.set(sourceFile, readJson(sourceFile));
      const sourceRead = sourceCache.get(sourceFile)!;
      if ("error" in sourceRead) { fail(`English source ${sourceRead.error}`, "(source)"); continue; }
      const source = sourceRead.json;
      entry.files.source = { path: repoPath(resolvedRoot, sourceFile), sha256: sha256(sourceRead.bytes) };
      entry.englishPageFile = typeof source.sourceFile === "string" ? source.sourceFile : null;

      const result = validateTranslation(source, translation, { locale, allowedStatuses: [...TRANSLATION_STATUSES] });
      errors.push(...result.errors);
      warnings.push(...result.warnings);
      entry.urlPath = `/${LOCALES[locale].urlPrefix}${declared}`;
      record.source = source;
      record.translation = translation;
    }
  }

  // A page may be registered once per locale. Ambiguous registrations are all invalid.
  const byKey = new Map<string, Built[]>();
  for (const record of built) byKey.set(record.entry.key, [...(byKey.get(record.entry.key) ?? []), record]);
  for (const group of byKey.values()) {
    if (group.length < 2) continue;
    const files = group.map((r) => r.entry.files.translation.path).join(", ");
    for (const record of group) record.entry.errors.push({ id: "(catalog)", problem: `more than one translation file registers this page: ${files}` });
  }

  const records = new Map<string, Built>();
  for (const record of built) {
    record.entry.validation = classify(record.entry.errors);
    if (record.entry.validation !== "valid") { record.source = null; record.translation = null; }
    if (byKey.get(record.entry.key)!.length === 1) records.set(record.entry.key, record);
  }
  return { catalog: { root: resolvedRoot, entries: built.map((r) => r.entry), issues }, records };
}

const cache = new Map<string, ReturnType<typeof buildCatalog>>();

function load(options?: { root?: string }) {
  // The bundler's file tracer cannot see which folder `options.root` points
  // to (tests pass a temporary folder), so without this comment it treats
  // the whole project as read and adds it to the route's server bundle.
  // The ignore applies to tracing only; the path is still resolved and
  // checked as before. The default folder stays traced through
  // defaultCatalogRoot().
  const root = path.resolve(/*turbopackIgnore: true*/ options?.root ?? defaultCatalogRoot());
  if (!cache.has(root)) cache.set(root, buildCatalog(root));
  return cache.get(root)!;
}

/** Drop cached catalogs (tests). */
export function clearCatalogCache(): void {
  cache.clear();
}

export function loadCatalog(options?: { root?: string }): Catalog {
  return load(options).catalog;
}

/** Every translation file found, valid or not. */
export function listTranslations(options?: { root?: string }): CatalogEntry[] {
  return load(options).catalog.entries;
}

/**
 * One translation by locale code and English page path. Invalid input
 * (unknown locale, unsafe path) returns undefined without touching the disk.
 */
export function getTranslation(locale: string, sourcePath: string, options?: { root?: string }): TranslationRecord | undefined {
  if (!isLocaleCode(locale) || locale === "en") return undefined;
  const checked = checkSourcePath(sourcePath);
  if (!checked) return undefined;
  const record = load(options).records.get(`${locale}:${checked}`);
  return record ? { entry: record.entry, source: record.source, translation: record.translation } : undefined;
}

/**
 * Deployment environment. Vercel Production is "production"; any other
 * unknown Vercel value also counts as production (fail closed). Without
 * Vercel variables (local builds) it is "development".
 */
export function resolveEnvironment(env: Record<string, string | undefined> = process.env): Environment {
  const value = env.VERCEL_ENV;
  if (value === "preview") return "preview";
  if (value === "development") return "development";
  if (value === "production") return "production";
  if (value !== undefined || env.VERCEL !== undefined) return "production";
  return "development";
}

function hasApproval(entry: CatalogEntry, kind: ApprovalKind, approvals: readonly ApprovalRecord[]): boolean {
  if (!entry.files.source || !entry.sourcePath) return false;
  return approvals.some((a) =>
    a.kind === kind &&
    a.locale === entry.locale &&
    a.sourcePath === entry.sourcePath &&
    a.sourceSha256 === entry.files.source!.sha256 &&
    a.translationSha256 === entry.files.translation.sha256 &&
    typeof a.approvedBy === "string" && a.approvedBy.trim() !== "" &&
    typeof a.approvedAt === "string" && ISO_DATE_TIME.test(a.approvedAt),
  );
}

/**
 * Where an entry may be shown. The status in the translation file is never
 * enough on its own: public use needs separate approval records that match
 * the exact source and translation bytes, a public locale and a verified
 * English source. noindex is not access control; non-public pages must not
 * be rendered in production at all.
 */
export function publishDecision(
  entry: CatalogEntry,
  environment: Environment,
  approvals: readonly ApprovalRecord[] = [],
): PublishDecision {
  const reasons: string[] = [];
  const locale = LOCALES[entry.locale];
  const valid = entry.validation === "valid";
  if (!valid) reasons.push(`validation-${entry.validation}`);

  const publicChecks: [boolean, string][] = [
    [locale.publication === "public", "locale-not-public"],
    [entry.status === "approved", "status-not-approved"],
    [entry.sourceFreshness === "verified", `source-freshness-${entry.sourceFreshness}`],
    [hasApproval(entry, "quality", approvals), "no-quality-approval"],
    [hasApproval(entry, "production", approvals), "no-production-approval"],
  ];
  const publicReasons = publicChecks.filter(([ok]) => !ok).map(([, reason]) => reason);
  const publicEligible = valid && publicReasons.length === 0;
  const indexEligible = publicEligible && hasApproval(entry, "indexing", approvals);

  let render: boolean;
  if (environment === "production") {
    render = publicEligible;
    reasons.push(...publicReasons);
  } else {
    const previewable = locale.support === "preview";
    if (!previewable) reasons.push(`locale-${locale.support}`);
    if (entry.status === null) reasons.push("status-unknown");
    render = valid && previewable && entry.status !== null;
    reasons.push("not-public-outside-production");
  }
  if (!indexEligible && environment === "production" && publicEligible) reasons.push("no-indexing-approval");

  const index = environment === "production" && render && indexEligible;
  return {
    environment,
    render,
    robots: index ? "index" : "noindex",
    listInLanguageMenu: environment === "production" && publicEligible,
    includeInSitemap: index,
    reasons: [...new Set(reasons)],
  };
}

/** Entries of one locale that may be rendered here (for generateStaticParams in P3). */
export function renderableEntries(
  locale: LocaleCode,
  environment: Environment,
  options?: { root?: string; approvals?: readonly ApprovalRecord[] },
): CatalogEntry[] {
  return listTranslations(options).filter(
    (entry) => entry.locale === locale && publishDecision(entry, environment, options?.approvals).render,
  );
}

/** Route segments of a translated page below its locale prefix, e.g. ["kpop", "what-is-maknae"]. */
export function routeSegments(entry: CatalogEntry): string[] {
  return entry.sourcePath ? entry.sourcePath.slice(1).split("/") : [];
}
