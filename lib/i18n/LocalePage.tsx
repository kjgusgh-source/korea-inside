import type { Metadata } from "next";
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
import { LOCALES, type LocaleCode } from "./locales";
import TranslatedPage, {
  PREVIEW_UI,
  PreviewNotice,
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

type Renderable = { entry: CatalogEntry; prepared: PreparedTranslation };

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
    return { entry: record.entry, prepared };
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

function renderElement(locale: LocaleCode, item: Renderable) {
  const ui = PREVIEW_UI[locale]!;
  return (
    <TranslatedPage
      prepared={item.prepared}
      ui={ui}
      typography={typographyFor(locale)}
      localizedPaths={localizedPaths(locale)}
      afterComponent={{ SiteHeader: <PreviewNotice englishPath={item.entry.sourcePath!} ui={ui} /> }}
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
 * Metadata for a translated page. Translations are never indexed in this
 * step: noindex/nofollow/nocache, no canonical, no hreflang, no JSON-LD.
 * Indexing needs its own approval and code (later step).
 */
export function localeMetadata(locale: LocaleCode, slug: readonly string[] | undefined): Metadata {
  const item = loadRenderable(locale, slug);
  if (!item) notFound();
  const { title, description } = item.prepared;
  return {
    title,
    description,
    robots: {
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

/** Page body for a translated route; 404 unless the translation may be rendered here. */
export function LocaleTranslationPage({ locale, slug }: { locale: LocaleCode; slug: readonly string[] | undefined }) {
  const item = loadRenderable(locale, slug);
  if (!item) notFound();
  return renderElement(locale, item);
}
