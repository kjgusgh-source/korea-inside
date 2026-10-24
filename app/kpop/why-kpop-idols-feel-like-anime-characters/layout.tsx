import type { ReactNode } from "react";
import Link from "next/link";
import { localeMenuEntries } from "../../../lib/i18n/LocalePage";
import { LOCALES } from "../../../lib/i18n/locales";

const SOURCE_PATH = "/kpop/why-kpop-idols-feel-like-anime-characters";

/**
 * English anime guide only: a plain, server-rendered link to its Japanese
 * translation, shown only when that translation is published (the production
 * publish policy of lib/i18n/catalog.ts: approval records, status, source
 * freshness, public locale). Drafts get no link. It lives here, not in
 * page.tsx, so the English source and its extracted units are unchanged; the
 * Japanese route does not use this layout.
 */
export default function AnimeGuideLayout({ children }: { children: ReactNode }) {
  const published = localeMenuEntries("ja").some((entry) => entry.sourcePath === SOURCE_PATH && !entry.draft);
  return (
    <>
      {children}
      {published ? (
        <nav aria-label="Other languages" className="text-[var(--text)]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-8">
            <p className="text-sm leading-7 text-[var(--muted)]">
              Also available in{" "}
              <Link
                href={`/${LOCALES.ja.urlPrefix}${SOURCE_PATH}`}
                hrefLang="ja"
                lang="ja"
                className="font-semibold text-[color-mix(in_srgb,var(--accent)_75%,var(--text))] underline underline-offset-4 hover:text-[var(--text)]"
              >
                {LOCALES.ja.nativeName}
              </Link>
            </p>
          </div>
        </nav>
      ) : null}
    </>
  );
}
