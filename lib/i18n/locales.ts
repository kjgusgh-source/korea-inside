/*
 * HAEMIL i18n — shared locale settings.
 *
 * Pure data plus small helpers: no fs, no server-only APIs, no React, no
 * network. Safe to import from server components, client components and
 * Node scripts.
 *
 * Each locale has two separate states:
 * - support: what the site can do with the locale today.
 *     "source"  English, the original content.
 *     "preview" protected draft previews exist (never public).
 *     "planned" reserved only: no pages and no UI strings yet.
 * - publication: whether pages in this locale may be public.
 *     Only English is "public". Changing a value here does not publish
 *     anything by itself; publishing needs its own approval and code path.
 *
 * Values marked "provisional" (og locale and display code of planned
 * locales, Chinese typography) are placeholders for later steps. They are
 * not used by any page yet and must be reviewed before a page relies on them.
 */

export type LocaleCode = "en" | "ja" | "zh-Hant" | "zh-Hans" | "es" | "ko";
export type LocaleSupport = "source" | "preview" | "planned";
export type LocalePublication = "public" | "not-public";

export type LocaleTypography = {
  /** Classes added to <em> in translated text. */
  emphasisClassName: string;
  /** English source classes replaced while rendering this locale. */
  classReplacements: Readonly<Record<string, string>>;
};

export type LocaleConfig = {
  /** BCP 47 code used in data files (translation `locale`). */
  code: LocaleCode;
  /** First URL path segment (lowercase). null: served at the site root. */
  urlPrefix: string | null;
  /** Value for <html lang> and lang attributes. */
  htmlLang: string;
  /** Open Graph locale (language_TERRITORY). */
  ogLocale: string;
  /** Language name in its own language. */
  nativeName: string;
  englishName: string;
  /** Short code for compact UI such as a header button. */
  displayCode: string;
  support: LocaleSupport;
  publication: LocalePublication;
  /** Presentation changes for translated pages. null: English styles as is. */
  typography: LocaleTypography | null;
};

// CJK fonts have no true italic, so emphasis is shown bold instead of a
// synthetic slant, and the wide English kicker letter-spacing is reduced.
const JAPANESE_TYPOGRAPHY: LocaleTypography = {
  emphasisClassName: "font-bold not-italic",
  classReplacements: { "tracking-[0.22em]": "tracking-[0.06em]" },
};

// Provisional: same reasoning as Japanese, not yet checked with Chinese pages.
const CHINESE_TYPOGRAPHY: LocaleTypography = {
  emphasisClassName: "font-bold not-italic",
  classReplacements: { "tracking-[0.22em]": "tracking-[0.06em]" },
};

// Latin script: italic emphasis and English letter-spacing are kept.
const SPANISH_TYPOGRAPHY: LocaleTypography = {
  emphasisClassName: "",
  classReplacements: {},
};

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALES: Readonly<Record<LocaleCode, LocaleConfig>> = Object.freeze({
  en: {
    code: "en",
    urlPrefix: null,
    htmlLang: "en",
    ogLocale: "en_US",
    nativeName: "English",
    englishName: "English",
    displayCode: "EN",
    support: "source",
    publication: "public",
    typography: null,
  },
  ja: {
    code: "ja",
    urlPrefix: "ja",
    htmlLang: "ja",
    ogLocale: "ja_JP",
    nativeName: "日本語",
    englishName: "Japanese",
    displayCode: "JA",
    support: "preview",
    publication: "public",
    typography: JAPANESE_TYPOGRAPHY,
  },
  "zh-Hant": {
    code: "zh-Hant",
    urlPrefix: "zh-hant",
    htmlLang: "zh-Hant",
    ogLocale: "zh_TW", // provisional
    nativeName: "繁體中文",
    englishName: "Traditional Chinese",
    displayCode: "繁中", // provisional
    support: "planned",
    publication: "not-public",
    typography: CHINESE_TYPOGRAPHY,
  },
  "zh-Hans": {
    code: "zh-Hans",
    urlPrefix: "zh-hans",
    htmlLang: "zh-Hans",
    ogLocale: "zh_CN", // provisional
    nativeName: "简体中文",
    englishName: "Simplified Chinese",
    displayCode: "简中", // provisional
    support: "planned",
    publication: "not-public",
    typography: CHINESE_TYPOGRAPHY,
  },
  es: {
    code: "es",
    urlPrefix: "es",
    htmlLang: "es",
    ogLocale: "es_ES", // provisional
    nativeName: "Español",
    englishName: "Spanish",
    displayCode: "ES", // provisional
    support: "planned",
    publication: "not-public",
    typography: SPANISH_TYPOGRAPHY,
  },
  // Kept for compatibility: the URL prefix already maps to <html lang="ko">
  // and the header lists Korean as coming later. No support change here.
  ko: {
    code: "ko",
    urlPrefix: "ko",
    htmlLang: "ko",
    ogLocale: "ko_KR", // provisional
    nativeName: "한국어",
    englishName: "Korean",
    displayCode: "KO", // provisional
    support: "planned",
    publication: "not-public",
    typography: null,
  },
});

export const LOCALE_CODES = Object.freeze(Object.keys(LOCALES) as LocaleCode[]);

export function isLocaleCode(value: unknown): value is LocaleCode {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(LOCALES, value);
}

export function getLocale(code: LocaleCode): LocaleConfig {
  return LOCALES[code];
}

/** Locale whose URL prefix equals this path segment (case-insensitive). */
export function localeFromPrefix(segment: string | null | undefined): LocaleConfig | undefined {
  const prefix = (segment ?? "").toLowerCase();
  if (!prefix) return undefined;
  return LOCALE_CODES.map((code) => LOCALES[code]).find((locale) => locale.urlPrefix === prefix);
}

/** Locale of a site path from its first segment. Paths without a locale prefix are English. */
export function localeFromPathname(pathname: string | null | undefined): LocaleConfig {
  const firstSegment = (pathname ?? "/").split("/")[1];
  return localeFromPrefix(firstSegment) ?? LOCALES[DEFAULT_LOCALE];
}

/** <html lang> value for a site path. */
export function htmlLangFromPathname(pathname: string | null | undefined): string {
  return localeFromPathname(pathname).htmlLang;
}
