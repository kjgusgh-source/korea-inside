import { LOCALE_CODES, LOCALES, type LocaleCode } from "../../../../lib/i18n/locales";
import { localeStaticParams } from "../../../../lib/i18n/LocalePage";

/*
 * HAEMIL i18n — data for the header language menu.
 *
 * GET /api/i18n/available
 *   { "version": 1, "pages": { "<English path>": ["<locale code>", ...] } }
 *
 * For each English page, the locales whose translated page is generated in
 * this build. It uses the same list as the locale routes
 * (localeStaticParams, which applies the catalog and the publish policy for
 * this environment), so a link in the menu always has a page behind it.
 * On Production no draft is listed.
 *
 * Built once at build time (force-static); nothing is read per request. It
 * holds paths and locale codes only, never translation text.
 */
export const dynamic = "force-static";

type Available = { version: 1; pages: Record<string, LocaleCode[]> };

export function GET(): Response {
  const byPath = new Map<string, LocaleCode[]>();
  for (const code of LOCALE_CODES) {
    if (LOCALES[code].urlPrefix === null) continue; // English: the source pages themselves
    for (const { slug } of localeStaticParams(code)) {
      const sourcePath = `/${slug.join("/")}`;
      byPath.set(sourcePath, [...(byPath.get(sourcePath) ?? []), code]);
    }
  }
  const pages: Record<string, LocaleCode[]> = {};
  for (const sourcePath of [...byPath.keys()].sort()) pages[sourcePath] = byPath.get(sourcePath)!;
  const body: Available = { version: 1, pages };
  return Response.json(body);
}
