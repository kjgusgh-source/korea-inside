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
 * (page.tsx), according to the record written by
 * `scripts/i18n/check-sources.mjs --write-record`
 * (content/i18n/source-freshness.json):
 * - verified: the record says MATCH for exactly these source JSON and page
 *   bytes, written by exactly the checker and extractor code in the repository
 *   (byte hashes) with the same TypeScript version. It covers the translation
 *   extraction only (units, structure, metadata); see
 *   `sourceFreshnessDetail.notCompared`.
 * - changed: the files differ from the checked version, or the check found
 *   changes. Re-run the checker.
 * - unverified: no usable record (missing, damaged, ambiguous, other paths,
 *   other extractor version or checker/extractor code, unreadable files,
 *   UNVERIFIED/ERROR result).
 * None of these is a translation, publishing or indexing approval.
 */
export type SourceFreshness = "unverified" | "verified" | "changed";

export type SourceFreshnessDetail = {
  reason: string;
  /** Parts the checker did not compare (e.g. "json-ld"), from the record. */
  notCompared: string[];
};

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
  /** English page file recorded in the source JSON. */
  englishPageFile: string | null;
  /** Status written in the translation file. Read only; never changed here. */
  status: TranslationStatus | null;
  validation: ValidationState;
  sourceFreshness: SourceFreshness;
  sourceFreshnessDetail: SourceFreshnessDetail;
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
 * A separate approval record (not stored in translation files), read from
 * content/i18n/approvals.json (see readApprovals). A record approves exactly
 * one locale + page + source bytes + translation bytes for one kind.
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

// ---------------------------------------------------------------------------
// Source freshness record (written by scripts/i18n/check-sources.mjs)
// ---------------------------------------------------------------------------

const FRESHNESS_RECORD_SCHEMA_VERSION = 2;
/**
 * Checker code a record must have been written with, compared as exact bytes
 * (read as files, never imported). Same list and order as TOOL_FILES in
 * scripts/i18n/check-sources.mjs.
 */
const RECORD_TOOL_FILES = ["scripts/i18n/check-sources.mjs", "scripts/i18n/extract.mjs"];
const TYPESCRIPT_PACKAGE = "node_modules/typescript/package.json";
const RECORD_STATUSES = new Set(["MATCH", "CHANGED", "UNVERIFIED", "ERROR"]);
const SHA256 = /^sha256:[0-9a-f]{64}$/;
const PAGE_SEGMENT = /^[A-Za-z0-9_()[\]-][A-Za-z0-9._()[\]-]*$/;

type FreshnessRecordEntry = {
  sourcePath: string;
  /** null for ERROR results whose source JSON names no page. */
  sourceFile: string | null;
  sourceJson: string;
  status: string;
  extractorVersion: string;
  sourceJsonSha256: string | null;
  pageSha256: string | null;
  notCompared: string[];
};

type RecordTools = { files: { path: string; sha256: string }[]; parser: string };

type FreshnessRecord = { problem: string | null; tools: RecordTools | null; bySourcePath: Map<string, FreshnessRecordEntry[]> };

function isRecordTools(value: unknown): value is RecordTools {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const t = value as Record<string, unknown>;
  return Array.isArray(t.files) && t.files.length === RECORD_TOOL_FILES.length &&
    t.files.every((f, i) => {
      if (!f || typeof f !== "object") return false;
      const file = f as Record<string, unknown>;
      return file.path === RECORD_TOOL_FILES[i] && typeof file.sha256 === "string" && SHA256.test(file.sha256);
    }) &&
    typeof t.parser === "string" && /^typescript@\S+$/.test(t.parser);
}

function isRecordEntry(value: unknown): value is FreshnessRecordEntry {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const e = value as Record<string, unknown>;
  const hash = (h: unknown) => h === null || (typeof h === "string" && SHA256.test(h));
  return checkSourcePath(e.sourcePath) !== null &&
    (e.sourceFile === null || typeof e.sourceFile === "string") &&
    typeof e.sourceJson === "string" &&
    typeof e.status === "string" && RECORD_STATUSES.has(e.status) &&
    typeof e.extractorVersion === "string" && e.extractorVersion !== "" &&
    hash(e.sourceJsonSha256) && hash(e.pageSha256) &&
    Array.isArray(e.notCompared) && e.notCompared.every((n) => typeof n === "string");
}

/** Read and validate the record. Any damage makes the whole record unusable (fail closed). */
function readFreshnessRecord(file: string): FreshnessRecord {
  const empty = (problem: string): FreshnessRecord => ({ problem, tools: null, bySourcePath: new Map() });
  const read = readJson(file);
  if ("error" in read) return empty(read.error === "file not found" ? "no source freshness record" : `source freshness record ${read.error}`);
  const record = read.json;
  if (record.schemaVersion !== FRESHNESS_RECORD_SCHEMA_VERSION || !Array.isArray(record.entries)) {
    return empty("source freshness record has an unsupported schema");
  }
  if (!isRecordTools(record.tools)) return empty("source freshness record has no valid checker code hashes");
  if (!record.entries.every(isRecordEntry)) return empty("source freshness record has an invalid entry");
  const bySourcePath = new Map<string, FreshnessRecordEntry[]>();
  for (const entry of record.entries as FreshnessRecordEntry[]) {
    bySourcePath.set(entry.sourcePath, [...(bySourcePath.get(entry.sourcePath) ?? []), entry]);
  }
  return { problem: null, tools: record.tools, bySourcePath };
}

/** Site path served by an App Router page file (route groups skipped), or null. */
function routeOfPageFile(file: string): string | null {
  const parts = file.split("/");
  if (parts[0] !== "app" || parts.at(-1) !== "page.tsx" || !parts.every((p) => PAGE_SEGMENT.test(p))) return null;
  return `/${parts.slice(1, -1).filter((p) => !(p.startsWith("(") && p.endsWith(")"))).join("/")}`;
}

/**
 * Bytes of a regular file inside the repository ("/"-separated relative path);
 * null if missing, a symbolic link on the way, or outside. Read as data only:
 * nothing read here is imported or executed.
 */
function readRepoFile(repoRoot: string, relative: string): Buffer | null {
  const parts = relative.split("/");
  if (parts.some((p) => p === "" || p === "." || p === "..")) return null;
  let current = repoRoot;
  try {
    for (const part of parts) {
      // Tracing only: these files are read at build time and are not bundled.
      current = path.join(/*turbopackIgnore: true*/ current, part);
      if (lstatSync(current).isSymbolicLink()) return null;
    }
    if (!isInside(repoRoot, current) || !lstatSync(current).isFile()) return null;
    return readFileSync(current);
  } catch {
    return null;
  }
}

function readPageFile(repoRoot: string, relative: string): Buffer | null {
  return routeOfPageFile(relative) === null ? null : readRepoFile(repoRoot, relative);
}

/**
 * The record must come from the checker and extractor code in this repository
 * (exact bytes) and the installed TypeScript version. A changed extractor that
 * kept its version string is caught here. Returns a problem, or null.
 */
function toolProblem(tools: RecordTools, repoRoot: string): string | null {
  for (const file of tools.files) {
    const bytes = readRepoFile(repoRoot, file.path);
    if (!bytes) return `checker code could not be read: ${file.path}`;
    if (sha256(bytes) !== file.sha256) return `checker or extractor code differs from the record (${file.path}); re-run the checker`;
  }
  const pkg = readRepoFile(repoRoot, TYPESCRIPT_PACKAGE);
  let version: unknown;
  try {
    version = pkg ? (JSON.parse(pkg.toString("utf8")) as { version?: unknown }).version : undefined;
  } catch {
    version = undefined;
  }
  if (typeof version !== "string") return "installed TypeScript version could not be read";
  if (`typescript@${version}` !== tools.parser) return "TypeScript version differs from the record; re-run the checker";
  return null;
}

function freshnessFor(
  entry: CatalogEntry,
  source: JsonObject,
  record: FreshnessRecord,
  repoRoot: string,
  pageCache: Map<string, Buffer | null>,
): { state: SourceFreshness; detail: SourceFreshnessDetail } {
  const unverified = (reason: string) => ({ state: "unverified" as const, detail: { reason, notCompared: [] } });
  if (record.problem) return unverified(record.problem);
  if (!entry.sourcePath || !entry.files.source) return unverified("English source not loaded");
  const matches = record.bySourcePath.get(entry.sourcePath) ?? [];
  if (!matches.length) return unverified("no record entry for this page");
  if (matches.length > 1) return unverified("more than one record entry for this page");
  const r = matches[0];
  const pageFile = typeof source.sourceFile === "string" ? source.sourceFile : null;
  if (!pageFile || routeOfPageFile(pageFile) !== entry.sourcePath) return unverified("sourceFile in the source JSON is not the page for sourcePath");
  if (r.sourceFile !== pageFile) return unverified("record sourceFile does not match the source JSON");
  if (r.sourceJson !== entry.files.source.path) return unverified("record sourceJson does not match this source file");
  if (r.extractorVersion !== source.extractor) return unverified("record extractor version differs from the source JSON");
  if (r.status === "UNVERIFIED" || r.status === "ERROR" || !r.sourceJsonSha256 || !r.pageSha256) {
    return unverified(`checker result was ${r.status}`);
  }
  if (!pageCache.has(pageFile)) pageCache.set(pageFile, readPageFile(repoRoot, pageFile));
  const pageBytes = pageCache.get(pageFile);
  if (!pageBytes) return unverified("English page file could not be read");
  if (r.sourceJsonSha256 !== entry.files.source.sha256 || r.pageSha256 !== sha256(pageBytes)) {
    return { state: "changed", detail: { reason: "source JSON or page differs from the checked version; re-run the checker", notCompared: [] } };
  }
  if (r.status === "CHANGED") return { state: "changed", detail: { reason: "checker found changes", notCompared: [] } };
  return { state: "verified", detail: { reason: "matches the source freshness record", notCompared: [...r.notCompared] } };
}

// ---------------------------------------------------------------------------
// Approval records (content/i18n/approvals.json, written only on the owner's request)
// ---------------------------------------------------------------------------

/**
 * File format (schemaVersion 1):
 *
 *   { "schemaVersion": 1,
 *     "records": [ { "kind": "quality" | "production" | "indexing",
 *                    "locale": "ja", "sourcePath": "/kpop/...",
 *                    "sourceSha256": "sha256:<hex>", "translationSha256": "sha256:<hex>",
 *                    "approvedBy": "<name>", "approvedAt": "<ISO 8601 with time zone>" } ] }
 *
 * The path is fixed below the repository (no option can move it). Fail closed:
 * a missing file means no approvals; a file behind a symbolic link, unreadable,
 * oversized, unparsable, with another schema, or with any record that is not
 * exactly this shape is ignored as a whole and reported as a catalog issue.
 */
const APPROVALS_FILE = "content/i18n/approvals.json";
const APPROVALS_SCHEMA_VERSION = 1;
const APPROVALS_MAX_BYTES = 1_000_000;
const APPROVAL_KINDS: readonly ApprovalKind[] = ["quality", "production", "indexing"];
const APPROVAL_FIELDS = ["approvedAt", "approvedBy", "kind", "locale", "sourcePath", "sourceSha256", "translationSha256"];

type ApprovalSet = { problem: string | null; records: readonly ApprovalRecord[] };

function isApprovalRecord(value: unknown): value is ApprovalRecord {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const r = value as Record<string, unknown>;
  const keys = Object.keys(r).sort();
  return keys.length === APPROVAL_FIELDS.length && keys.every((key, i) => key === APPROVAL_FIELDS[i]) &&
    APPROVAL_KINDS.includes(r.kind as ApprovalKind) &&
    isLocaleCode(r.locale) && r.locale !== "en" &&
    checkSourcePath(r.sourcePath) !== null &&
    typeof r.sourceSha256 === "string" && SHA256.test(r.sourceSha256) &&
    typeof r.translationSha256 === "string" && SHA256.test(r.translationSha256) &&
    typeof r.approvedBy === "string" && r.approvedBy.trim() !== "" && r.approvedBy.length <= 200 &&
    typeof r.approvedAt === "string" && ISO_DATE_TIME.test(r.approvedAt) && !Number.isNaN(Date.parse(r.approvedAt));
}

function readApprovals(repoRoot: string): ApprovalSet {
  const none = (problem: string | null): ApprovalSet => ({ problem, records: [] });
  let current = repoRoot;
  let bytes: Buffer;
  try {
    for (const part of APPROVALS_FILE.split("/")) {
      // Tracing only: read at build time, not bundled.
      current = path.join(/*turbopackIgnore: true*/ current, part);
      let stat;
      try {
        stat = lstatSync(current);
      } catch (error) {
        // Missing file (or folder): no approval records, nothing is approved. Any other error is reported.
        if ((error as NodeJS.ErrnoException).code === "ENOENT") return none(null);
        return none("approval records could not be read; no approval is used");
      }
      if (stat.isSymbolicLink()) return none("approval records: symbolic links are not followed; no approval is used");
    }
    const stat = lstatSync(current);
    if (!isInside(repoRoot, current) || !stat.isFile()) return none("approval records: not a regular file; no approval is used");
    if (stat.size > APPROVALS_MAX_BYTES) return none("approval records: file is too large; no approval is used");
    bytes = readFileSync(current);
  } catch {
    return none("approval records could not be read; no approval is used");
  }
  let doc: unknown;
  try {
    doc = JSON.parse(bytes.toString("utf8"));
  } catch {
    return none("approval records: JSON could not be parsed; no approval is used");
  }
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) return none("approval records: JSON is not an object; no approval is used");
  const { schemaVersion, records } = doc as { schemaVersion?: unknown; records?: unknown };
  if (schemaVersion !== APPROVALS_SCHEMA_VERSION || !Array.isArray(records)) {
    return none("approval records: unsupported schema; no approval is used");
  }
  const bad = records.findIndex((record) => !isApprovalRecord(record));
  if (bad !== -1) return none(`approval records: record ${bad} is invalid; no approval is used`);
  return { problem: null, records: Object.freeze(records.map((record) => Object.freeze({ ...(record as ApprovalRecord) }))) };
}

function buildCatalog(root: string, recordFile: string): { catalog: Catalog; records: Map<string, Built>; approvals: ApprovalSet } {
  const resolvedRoot = path.resolve(root);
  const repoRoot = path.dirname(path.dirname(resolvedRoot));
  const freshnessRecord = readFreshnessRecord(recordFile);
  if (!freshnessRecord.problem && freshnessRecord.tools) {
    freshnessRecord.problem = toolProblem(freshnessRecord.tools, repoRoot);
  }
  const pageCache = new Map<string, Buffer | null>();
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
        sourceFreshnessDetail: { reason: "English source not loaded", notCompared: [] },
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
      const freshness = freshnessFor(entry, source, freshnessRecord, repoRoot, pageCache);
      entry.sourceFreshness = freshness.state;
      entry.sourceFreshnessDetail = freshness.detail;

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
  const approvals = readApprovals(repoRoot);
  if (approvals.problem) issues.push({ id: "(approvals)", problem: approvals.problem });
  return { catalog: { root: resolvedRoot, entries: built.map((r) => r.entry), issues }, records, approvals };
}

const cache = new Map<string, ReturnType<typeof buildCatalog>>();

export type CatalogOptions = {
  root?: string;
  /** Source freshness record; default <repository>/content/i18n/source-freshness.json. */
  freshnessRecord?: string;
};

function load(options?: CatalogOptions) {
  // The bundler's file tracer cannot see which folder `options.root` points
  // to (tests pass a temporary folder), so without this comment it treats
  // the whole project as read and adds it to the route's server bundle.
  // The ignore applies to tracing only; the path is still resolved and
  // checked as before. The default folder stays traced through
  // defaultCatalogRoot().
  const root = path.resolve(/*turbopackIgnore: true*/ options?.root ?? defaultCatalogRoot());
  // Same reason as above: derived from `root`, not traced.
  const recordFile = path.resolve(
    /*turbopackIgnore: true*/ options?.freshnessRecord ?? path.join(path.dirname(path.dirname(root)), "content", "i18n", "source-freshness.json"),
  );
  const key = `${root}\u0000${recordFile}`;
  if (!cache.has(key)) cache.set(key, buildCatalog(root, recordFile));
  return cache.get(key)!;
}

/** Drop cached catalogs (tests). */
export function clearCatalogCache(): void {
  cache.clear();
}

export function loadCatalog(options?: CatalogOptions): Catalog {
  return load(options).catalog;
}

/** Every translation file found, valid or not. */
export function listTranslations(options?: CatalogOptions): CatalogEntry[] {
  return load(options).catalog.entries;
}

/**
 * One translation by locale code and English page path. Invalid input
 * (unknown locale, unsafe path) returns undefined without touching the disk.
 */
export function getTranslation(locale: string, sourcePath: string, options?: CatalogOptions): TranslationRecord | undefined {
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

/**
 * Approval records of the repository that holds this catalog
 * (content/i18n/approvals.json). Empty when the file is missing or unusable.
 */
export function approvalRecords(options?: CatalogOptions): readonly ApprovalRecord[] {
  return load(options).approvals.records;
}

/**
 * The publish decision for a catalog entry with the repository's approval
 * records. Every route decision goes through this function (the static
 * params, the page and its metadata, and the language menu data), so they
 * cannot disagree.
 */
export function catalogDecision(entry: CatalogEntry, environment: Environment, options?: CatalogOptions): PublishDecision {
  return publishDecision(entry, environment, approvalRecords(options));
}

/** Entries of one locale that may be rendered here (for generateStaticParams). */
export function renderableEntries(locale: LocaleCode, environment: Environment, options?: CatalogOptions): CatalogEntry[] {
  return listTranslations(options).filter(
    (entry) => entry.locale === locale && catalogDecision(entry, environment, options).render,
  );
}

/** Route segments of a translated page below its locale prefix, e.g. ["kpop", "what-is-maknae"]. */
export function routeSegments(entry: CatalogEntry): string[] {
  return entry.sourcePath ? entry.sourcePath.slice(1).split("/") : [];
}
