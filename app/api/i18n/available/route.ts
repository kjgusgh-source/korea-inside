import { LOCALE_CODES, LOCALES, type LocaleCode } from "../../../../lib/i18n/locales";
import { localeMenuEntries } from "../../../../lib/i18n/LocalePage";

/*
 * HAEMIL i18n — data for the header language menu.
 *
 * GET /api/i18n/available
 *   { "version": 2,
 *     "pages": { "<English path>": [{ "code": "<locale code>", "draft": <boolean> }, ...] } }
 *
 * For each English page, the locales whose translated page is generated in
 * this build (the same list as the locale routes: localeStaticParams), so a
 * link in the menu always has a page behind it. "draft" is true unless the
 * page passes the production publish policy (approval records, status,
 * source freshness, public locale); the menu labels drafts. On Production
 * only published pages are generated, so no draft is listed.
 *
 * Built once at build time (force-static); nothing is read per request. It
 * holds paths, locale codes and booleans only, never translation text.
 */
export const dynamic = "force-static";

type MenuLocale = { code: LocaleCode; draft: boolean };
type Available = { version: 2; pages: Record<string, MenuLocale[]> };

export function GET(): Response {
  const byPath = new Map<string, MenuLocale[]>();
  for (const code of LOCALE_CODES) {
    if (LOCALES[code].urlPrefix === null) continue; // English: the source pages themselves
    for (const { sourcePath, draft } of localeMenuEntries(code)) {
      byPath.set(sourcePath, [...(byPath.get(sourcePath) ?? []), { code, draft }]);
    }
  }
  const pages: Record<string, MenuLocale[]> = {};
  for (const sourcePath of [...byPath.keys()].sort()) pages[sourcePath] = byPath.get(sourcePath)!;
  const body: Available = { version: 2, pages };
  return Response.json(body);
}
