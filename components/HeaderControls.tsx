"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LOCALE_CODES,
  LOCALES,
  isLocaleCode,
  localeFromPathname,
  type LocaleCode,
  type LocaleConfig,
} from "../lib/i18n/locales";
import SiteSearchBox from "./SiteSearchBox";

const CONTROL_BUTTON_CLASSES =
  "flex h-9 items-center justify-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 text-sm font-medium text-[var(--text)] transition duration-150 hover:-translate-y-0.5 hover:border-[var(--accent)]";

function usePopover() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return { open, setOpen, containerRef, buttonRef };
}

export function HeaderSearchControl() {
  const { open, setOpen, containerRef, buttonRef } = usePopover();
  const popoverId = useId();

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Search HAEMIL"
        aria-expanded={open}
        aria-controls={popoverId}
        className={`${CONTROL_BUTTON_CLASSES} w-9 px-0`}
      >
        <span aria-hidden="true">🔍</span>
      </button>

      {open && (
        <div
          id={popoverId}
          role="dialog"
          aria-label="Search HAEMIL"
          className="animate-[header-pop_220ms_ease-out] motion-reduce:animate-none fixed inset-x-4 top-20 z-50 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg md:absolute md:inset-x-auto md:right-0 md:top-12 md:w-[320px]"
        >
          <SiteSearchBox compact />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Language menu
//
// Lists only languages that have a generated page for the current English
// path, from /api/i18n/available (built at build time from the same list as
// the locale routes; see app/api/i18n/available/route.ts). The list is
// fetched the first time a menu is opened. If it cannot be loaded, only the
// current language is shown: links are never guessed. Translated pages use
// the English slug under the locale prefix (e.g. /ja/kpop/...).
// ---------------------------------------------------------------------------

const AVAILABLE_URL = "/api/i18n/available";
const SITE_PATH = /^\/[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/;

/** English path -> locales with a translated page. */
export type LanguageAvailability = ReadonlyMap<string, readonly LocaleCode[]>;

/** Validate the menu data. Anything unexpected is dropped, never repaired. */
export function parseLanguageAvailability(data: unknown): LanguageAvailability {
  const result = new Map<string, LocaleCode[]>();
  if (!data || typeof data !== "object") return result;
  const { version, pages } = data as { version?: unknown; pages?: unknown };
  if (version !== 1 || !pages || typeof pages !== "object" || Array.isArray(pages)) return result;
  for (const [sourcePath, codes] of Object.entries(pages)) {
    if (!SITE_PATH.test(sourcePath) || !Array.isArray(codes)) continue;
    const locales = LOCALE_CODES.filter(
      (code) => codes.includes(code) && isLocaleCode(code) && LOCALES[code].urlPrefix !== null,
    );
    if (locales.length) result.set(sourcePath, locales);
  }
  return result;
}

export type LanguageOption = {
  locale: LocaleConfig;
  /** Where the option leads; null for the current language. */
  href: string | null;
  current: boolean;
};

/**
 * Menu entries for a page: the current language, plus English and every
 * translated page of the same English path when the data lists them. A
 * translated URL that the data does not list (or no data) gets no links.
 */
export function languageOptions(
  pathname: string | null,
  availability: LanguageAvailability | null,
): { current: LocaleConfig; options: LanguageOption[] } {
  const current = localeFromPathname(pathname);
  const path = pathname || "/";
  const englishPath = current.urlPrefix === null ? path : path.slice(current.urlPrefix.length + 1) || "/";
  const translated = availability?.get(englishPath) ?? [];
  if (current.urlPrefix !== null && !translated.includes(current.code)) {
    return { current, options: [{ locale: current, href: null, current: true }] };
  }
  const codes = LOCALE_CODES.filter((code) => LOCALES[code].urlPrefix === null || translated.includes(code));
  return {
    current,
    options: codes.map((code) => {
      const locale = LOCALES[code];
      const isCurrent = code === current.code;
      const href = locale.urlPrefix === null ? englishPath : `/${locale.urlPrefix}${englishPath}`;
      return { locale, href: isCurrent ? null : href, current: isCurrent };
    }),
  };
}

let availabilityCache: LanguageAvailability | null = null;
let availabilityRequest: Promise<LanguageAvailability> | null = null;

function loadAvailability(): Promise<LanguageAvailability> {
  if (availabilityCache) return Promise.resolve(availabilityCache);
  availabilityRequest ??= fetch(AVAILABLE_URL, { credentials: "same-origin" })
    .then((response) => {
      if (!response.ok) throw new Error(`language list: HTTP ${response.status}`);
      return response.json();
    })
    .then((data: unknown) => {
      availabilityCache = parseLanguageAvailability(data);
      return availabilityCache;
    })
    .catch((error: unknown) => {
      availabilityRequest = null; // try again next time the menu opens
      throw error;
    });
  return availabilityRequest;
}

type LoadState = "idle" | "loading" | "ready" | "error";

export function HeaderLanguageControl() {
  const pathname = usePathname();
  const { open, setOpen, containerRef, buttonRef } = usePopover();
  const popoverId = useId();
  const [availability, setAvailability] = useState<LanguageAvailability | null>(availabilityCache);
  const [loadState, setLoadState] = useState<LoadState>(availabilityCache ? "ready" : "idle");
  const { current, options } = languageOptions(pathname, availability);
  const draft = current.support === "preview";

  function toggle() {
    const opening = !open;
    setOpen(opening);
    if (!opening || availability) return;
    setLoadState("loading");
    loadAvailability().then(
      (data) => {
        setAvailability(data);
        setLoadState("ready");
      },
      () => setLoadState("error"),
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={`Language: ${current.englishName}${draft ? " (draft preview)" : ""}`}
        aria-expanded={open}
        aria-controls={popoverId}
        className={CONTROL_BUTTON_CLASSES}
      >
        <span aria-hidden="true">🌐</span>
        <span>{current.displayCode}</span>
      </button>

      {open && (
        <div
          id={popoverId}
          className="animate-[header-pop_220ms_ease-out] motion-reduce:animate-none absolute right-0 top-12 z-50 w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg"
        >
          <ul aria-label="Choose language" className="flex flex-col gap-0.5">
            {options.map((option) => {
              const note = option.locale.support === "preview" ? "Draft preview" : null;
              const content = (
                <>
                  <span lang={option.locale.htmlLang}>{option.locale.nativeName}</span>
                  <span className="flex items-center gap-1.5 text-xs">
                    {note && <span className="text-[var(--muted)]">{note}</span>}
                    {option.current && (
                      <span aria-hidden="true" className="text-[var(--accent)]">
                        ✓
                      </span>
                    )}
                  </span>
                </>
              );
              return (
                <li key={option.locale.code}>
                  {option.href ? (
                    <Link
                      href={option.href}
                      prefetch={false}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-[var(--text)] transition duration-150 hover:bg-[var(--border)]/40 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                    >
                      {content}
                    </Link>
                  ) : (
                    <span
                      aria-current="true"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-[var(--text)]"
                    >
                      {content}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          {loadState === "loading" && (
            <p role="status" className="px-3 py-1 text-xs text-[var(--muted)]">
              Checking other languages…
            </p>
          )}
          {loadState === "error" && (
            <p role="status" className="px-3 py-1 text-xs text-[var(--muted)]">
              Other languages could not be loaded.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
