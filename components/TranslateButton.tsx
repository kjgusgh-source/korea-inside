"use client";

import { useEffect, useState } from "react";

export default function TranslateButton() {
  const [translateUrl, setTranslateUrl] = useState<string>("https://translate.google.com/");

  useEffect(() => {
    setTranslateUrl(
      `https://translate.google.com/translate?sl=auto&u=${encodeURIComponent(
        window.location.href
      )}`
    );
  }, []);

  return (
    <a
      href={translateUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Translate this page with Google Translate (opens in a new tab, choose your language there)"
      title="Opens Google Translate in a new tab — choose your language there"
      className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] md:text-sm"
    >
      <span aria-hidden="true">🌐</span>
      <span className="hidden sm:inline">Translate</span>
      <span aria-hidden="true" className="hidden sm:inline">
        ↗
      </span>
    </a>
  );
}
