"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type SiteSearchBoxProps = {
  defaultValue?: string;
  compact?: boolean;
};

export default function SiteSearchBox({
  defaultValue = "",
  compact = false,
}: SiteSearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <section
      className={
        compact
          ? "rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4"
          : "rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7"
      }
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          Search HAEMIL
        </p>

        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Search K-pop words, idols, Korean culture, food, places, and fan
          expressions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try maknae, bias, fancam, Jung Kook..."
          className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
        />

        <button
          type="submit"
          className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Search
        </button>
      </form>
    </section>
  );
}