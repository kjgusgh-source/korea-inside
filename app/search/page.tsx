import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteSearchBox from "../../components/SiteSearchBox";
import { getSearchIndex, searchItems } from "../../lib/searchIndex";

export const metadata: Metadata = {
  title: "Search | HAEMIL",
  description: "Search HAEMIL guides about K-pop, Korean culture, fan words, idols, food, and everyday life.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.trim() : "";
  const results = query ? searchItems(query) : getSearchIndex().slice(0, 8);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Search
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {query ? `Search results for “${query}”` : "Search HAEMIL"}
          </h1>

          <div className="mt-8 max-w-3xl">
            <SiteSearchBox defaultValue={query} />
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Results
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                {query
                  ? `${results.length} result${results.length === 1 ? "" : "s"} found`
                  : "Popular places to start"}
              </h2>
            </div>
          </div>

          {results.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
                    Open guide →
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="text-2xl font-semibold">No results yet.</h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Try another word like maknae, bias, fancam, Jung Kook, Wonyoung,
                Korean meme, or K-pop glossary.
              </p>

              <Link
                href="/kpop"
                className="mt-5 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Browse K-pop guides
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}