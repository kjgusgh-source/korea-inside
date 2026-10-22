import type { Metadata, MetadataRoute } from "next";
import { notFound } from "next/navigation";
import {
  catalogDecision,
  getTranslation,
  listTranslations,
  renderableEntries,
  resolveEnvironment,
  routeSegments,
  type CatalogEntry,
  type Environment,
  type TranslationRecord,
} from "./catalog";
import { LOCALE_CODES, LOCALES, type LocaleCode } from "./locales";
import TranslationFeedback from "../../components/TranslationFeedback";
import TranslatedPage, {
  PREVIEW_UI,
  TranslationNotice,
  prepareTranslation,
  typographyFor,
  type PreparedTranslation,
  type SourceDocument,
  type TranslationDocument,
} from "./TranslatedPage";

/*
 * HAEMIL i18n — shared translated page for one locale route
 * (app/<prefix>/[...slug]/page.tsx). Server only (imports the catalog).
 *
 * A translation is rendered only when the catalog says it is valid and the
 * publish policy allows it in this environment, with the repository's
 * approval records (catalogDecision; the same decision as renderableEntries).
 * Everything else is a 404.
 * Pages are generated at build time; the route file sets dynamicParams = false.
 */

/**
 * Environment for translated routes. Same as the catalog's
 * resolveEnvironment(), with one extra fail-closed rule: a production
 * Node build or server (NODE_ENV=production) without Vercel variables is
 * treated as production, so a self-hosted deployment never shows drafts.
 * Drafts therefore render only on Vercel Preview / development
 * (VERCEL_ENV=preview|development) or under `next dev`.
 */
export function localeEnvironment(env: Record<string, string | undefined> = process.env): Environment {
  const resolved = resolveEnvironment(env);
  if (resolved === "development" && env.NODE_ENV === "production" && env.VERCEL_ENV === undefined) {
    return "production";
  }
  return resolved;
}

/**
 * `published`: the entry passes the production publish policy (approval
 * records, status, source freshness, public locale), whatever the current
 * environment is. Drafts shown on Preview are not published; on Production
 * only published entries render at all.
 *
 * `indexed`: search engines may index the page here. This is the policy's
 * robots decision for the current environment: only on Production, and only
 * with a matching indexing approval on top of the publishing approvals. It is
 * never true on Preview or in development, whatever records exist.
 */
type Renderable = { entry: CatalogEntry; prepared: PreparedTranslation; published: boolean; indexed: boolean };

function isPublished(entry: CatalogEntry): boolean {
  return catalogDecision(entry, "production").render;
}

/**
 * Valid, allowed translation for a route, prepared for rendering; otherwise null.
 * prepareTranslation() is only called after the catalog has classified the
 * entry as valid and the policy allows rendering, so it is not expected to
 * throw. If it does, the page is not generated (404) and the reason is logged
 * to the build output instead of failing the whole site build.
 */
function loadRenderable(locale: LocaleCode, slug: readonly string[] | undefined): Renderable | null {
  if (!Array.isArray(slug) || slug.length === 0) return null;
  const record: TranslationRecord | undefined = getTranslation(locale, `/${slug.join("/")}`);
  if (!record || record.entry.validation !== "valid" || !record.source || !record.translation) return null;
  const decision = catalogDecision(record.entry, localeEnvironment());
  if (!decision.render || !PREVIEW_UI[locale] || !record.entry.status) return null;
  try {
    const prepared = prepareTranslation(
      record.source as unknown as SourceDocument,
      record.translation as unknown as TranslationDocument,
      { locale, allowedStatuses: [record.entry.status] },
    );
    return {
      entry: record.entry,
      prepared,
      published: isPublished(record.entry),
      indexed: decision.robots === "index" && decision.includeInSitemap,
    };
  } catch (error) {
    console.error(`[i18n] ${record.entry.key}: not rendered — ${error instanceof Error ? error.message : String(error)}`);
    return null;
  }
}

/** Internal links that have a renderable page in this locale point to it; others stay English. */
function localizedPaths(locale: LocaleCode): Map<string, string> {
  return new Map(
    renderableEntries(locale, localeEnvironment())
      .filter((entry) => entry.sourcePath && entry.urlPath)
      .map((entry) => [entry.sourcePath as string, entry.urlPath as string]),
  );
}

/**
 * Reader feedback at the end of the article: the Japanese Sunbae pilot only,
 * and only once it is published (production publish policy passed and status
 * approved). Drafts on Preview and every other page never show it.
 */
const FEEDBACK_PAGES: Readonly<Partial<Record<LocaleCode, Readonly<Record<string, string>>>>> = {
  ja: { "/kpop/what-does-sunbae-and-hoobae-mean-in-kpop": "Japanese translation feedback — Sunbae" },
};

function feedbackTopic(locale: LocaleCode, item: Renderable): string | null {
  if (!item.published || item.entry.status !== "approved" || !item.entry.sourcePath) return null;
  return FEEDBACK_PAGES[locale]?.[item.entry.sourcePath] ?? null;
}

function renderElement(locale: LocaleCode, item: Renderable) {
  const ui = PREVIEW_UI[locale]!;
  const topic = feedbackTopic(locale, item);
  return (
    <TranslatedPage
      prepared={item.prepared}
      ui={ui}
      typography={typographyFor(locale)}
      localizedPaths={localizedPaths(locale)}
      afterComponent={{
        SiteHeader: <TranslationNotice englishPath={item.entry.sourcePath!} ui={ui} kind={item.published ? "published" : "preview"} />,
      }}
      articleEnd={topic ? <TranslationFeedback topicTitle={topic} /> : undefined}
    />
  );
}

/**
 * Params for generateStaticParams: only entries the catalog allows here and
 * that render without errors. An entry whose structure the renderer cannot
 * handle is left out (404) and logged, rather than failing the build.
 */
export function localeStaticParams(locale: LocaleCode): { slug: string[] }[] {
  // Report (not hide) translations that are skipped because their data is broken or out of date.
  for (const entry of listTranslations()) {
    if (entry.locale !== locale || entry.validation === "valid") continue;
    const first = entry.errors[0];
    console.warn(`[i18n] ${entry.key}: ${entry.validation}, not rendered — ${first ? `${first.id}: ${first.problem}` : "no details"} (${entry.errors.length} error(s))`);
  }
  const params: { slug: string[] }[] = [];
  for (const entry of renderableEntries(locale, localeEnvironment())) {
    const slug = routeSegments(entry);
    const item = loadRenderable(locale, slug);
    if (!item) continue;
    try {
      // The renderer builds the element tree eagerly and throws on markup it
      // does not allow, so calling it here checks the page before it is listed.
      TranslatedPage({ prepared: item.prepared, ui: PREVIEW_UI[locale]!, typography: typographyFor(locale) });
    } catch (error) {
      console.error(`[i18n] ${entry.key}: not rendered — ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    params.push({ slug });
  }
  return params;
}

/**
 * Language menu data for one locale: exactly the pages that localeStaticParams
 * generates in this build, each marked draft unless it passes the production
 * publish policy. On Production every listed page is published (drafts are
 * not generated there).
 */
export function localeMenuEntries(locale: LocaleCode): { sourcePath: string; draft: boolean }[] {
  const entries: { sourcePath: string; draft: boolean }[] = [];
  for (const { slug } of localeStaticParams(locale)) {
    const item = loadRenderable(locale, slug);
    if (!item?.entry.sourcePath) continue;
    entries.push({ sourcePath: item.entry.sourcePath, draft: !item.published });
  }
  return entries;
}

/**
 * Metadata for a translated page.
 *
 * - Indexed (Production, quality + production + indexing approvals): index,
 *   follow and a self-referencing canonical (resolved against the root
 *   layout's metadataBase, like the English pages). The language links
 *   (hreflang) are in the XML sitemap only, not in the HTML.
 * - Everything else that renders (Preview drafts; Production pages without
 *   an indexing approval): noindex/nofollow/nocache and no canonical.
 *
 * No JSON-LD in either case.
 */
export function localeMetadata(locale: LocaleCode, slug: readonly string[] | undefined): Metadata {
  const item = loadRenderable(locale, slug);
  if (!item) notFound();
  const { title, description } = item.prepared;
  const indexed = item.indexed && item.entry.urlPath !== null;
  return {
    title,
    description,
    ...(indexed ? { alternates: { canonical: item.entry.urlPath! } } : {}),
    robots: indexed
      ? { index: true, follow: true }
      : {
          index: false,
          follow: false,
          nocache: true,
          googleBot: { index: false, follow: false },
        },
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "HAEMIL",
      locale: LOCALES[locale].ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** A translated page that search engines may index, for the XML sitemap. */
export type IndexedTranslation = {
  locale: LocaleCode;
  /** hreflang value (the locale's htmlLang). */
  hreflang: string;
  /** English page path, e.g. "/kpop/what-is-maknae". */
  sourcePath: string;
  /** Translated page path, e.g. "/ja/kpop/what-is-maknae". */
  urlPath: string;
};

/**
 * Translated pages generated in this build whose metadata says index (see
 * localeMetadata). Built from localeStaticParams, so every listed URL is a
 * generated page. Empty on Preview and in development, and on Production
 * without indexing approvals.
 */
export function indexedTranslations(): IndexedTranslation[] {
  const pages: IndexedTranslation[] = [];
  for (const locale of LOCALE_CODES) {
    if (LOCALES[locale].urlPrefix === null) continue;
    for (const { slug } of localeStaticParams(locale)) {
      const item = loadRenderable(locale, slug);
      if (!item?.indexed || !item.entry.sourcePath || !item.entry.urlPath) continue;
      pages.push({ locale, hreflang: LOCALES[locale].htmlLang, sourcePath: item.entry.sourcePath, urlPath: item.entry.urlPath });
    }
  }
  return pages;
}

/**
 * Adds indexed translations to the site's sitemap entries.
 *
 * For each English page with at least one indexed translation:
 * - the English entry gets alternates.languages
 *   { en: English URL, <hreflang>: translated URL, ..., "x-default": English URL }
 * - each translated URL is added right after it, with the same languages and
 *   the English entry's changeFrequency and priority (no lastModified: there
 *   is no recorded date for the translation).
 *
 * The other entries are returned unchanged, in the same order. Without
 * indexed translations the input array itself is returned.
 *
 * Fails closed: a page is skipped (with a build warning) when its English URL
 * is not in the sitemap exactly once, already has language alternates, or a
 * translated URL is already listed. Duplicate translations are listed once.
 */
export function withTranslationAlternates(
  entries: MetadataRoute.Sitemap,
  translations: readonly IndexedTranslation[],
  baseUrl: string,
): MetadataRoute.Sitemap {
  if (translations.length === 0) return entries;
  const bySource = new Map<string, Map<LocaleCode, IndexedTranslation>>();
  for (const page of translations) {
    const locales = bySource.get(page.sourcePath) ?? new Map<LocaleCode, IndexedTranslation>();
    if (!locales.has(page.locale)) locales.set(page.locale, page);
    bySource.set(page.sourcePath, locales);
  }
  const listed = new Set(entries.map((entry) => entry.url));
  const additions = new Map<number, MetadataRoute.Sitemap>();
  const replaced = new Map<number, MetadataRoute.Sitemap[number]>();
  for (const [sourcePath, locales] of bySource) {
    const englishUrl = `${baseUrl}${sourcePath}`;
    const matches = entries.flatMap((entry, index) => (entry.url === englishUrl ? [index] : []));
    const pages = LOCALE_CODES.flatMap((code) => (locales.has(code) ? [locales.get(code)!] : []));
    const urls = pages.map((page) => `${baseUrl}${page.urlPath}`);
    let problem: string | null = null;
    if (matches.length !== 1) problem = `English URL listed ${matches.length} times`;
    else if (entries[matches[0]].alternates?.languages) problem = "English entry already has language alternates";
    else if (urls.some((url) => listed.has(url))) problem = "translated URL already listed";
    if (problem) {
      console.warn(`[i18n] sitemap: ${sourcePath} translations not listed — ${problem}`);
      continue;
    }
    const english = entries[matches[0]];
    const languages: Record<string, string> = { [LOCALES.en.htmlLang]: englishUrl };
    pages.forEach((page, i) => { languages[page.hreflang] = urls[i]; });
    languages["x-default"] = englishUrl;
    replaced.set(matches[0], { ...english, alternates: { languages } });
    additions.set(
      matches[0],
      urls.map((url) => ({
        url,
        ...(english.changeFrequency ? { changeFrequency: english.changeFrequency } : {}),
        ...(typeof english.priority === "number" ? { priority: english.priority } : {}),
        alternates: { languages: { ...languages } },
      })),
    );
  }
  if (replaced.size === 0) return entries;
  return entries.flatMap((entry, index) => [replaced.get(index) ?? entry, ...(additions.get(index) ?? [])]);
}

/** Page body for a translated route; 404 unless the translation may be rendered here. */
export function LocaleTranslationPage({ locale, slug }: { locale: LocaleCode; slug: readonly string[] | undefined }) {
  const item = loadRenderable(locale, slug);
  if (!item) notFound();
  return renderElement(locale, item);
}
