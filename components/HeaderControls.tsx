"use client";

import { useEffect, useId, useRef, useState } from "react";
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

const LANGUAGES = [
  { code: "en", label: "English", available: true },
  { code: "ko", label: "한국어", available: false },
  { code: "ja", label: "日本語", available: false },
];

export function HeaderLanguageControl() {
  const { open, setOpen, containerRef, buttonRef } = usePopover();
  const popoverId = useId();

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Language: English"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={popoverId}
        className={CONTROL_BUTTON_CLASSES}
      >
        <span aria-hidden="true">🌐</span>
        <span>EN</span>
      </button>

      {open && (
        <div
          id={popoverId}
          role="listbox"
          aria-label="Choose language"
          className="animate-[header-pop_220ms_ease-out] motion-reduce:animate-none absolute right-0 top-12 z-50 w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg"
        >
          {LANGUAGES.map((language) => (
            <div
              key={language.code}
              role="option"
              aria-selected={language.available}
              aria-disabled={!language.available}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                language.available
                  ? "font-semibold text-[var(--text)]"
                  : "text-[var(--muted)]"
              }`}
            >
              <span>{language.label}</span>
              {!language.available && (
                <span className="text-xs text-[var(--muted)]">
                  Coming later
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
