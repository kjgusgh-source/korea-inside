import Link from "next/link";
import { getKpopGuideArticles } from "../lib/kpopGuideArticles";

export default function FeaturedKpopArticles() {
  const articles = getKpopGuideArticles();

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop starter guides
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            New to K-pop? Start with the words fans use every day.
          </h2>
        </div>

        <Link
          href="/kpop"
          className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
        >
          Explore K-pop →
        </Link>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
        Fancams, bias, ending fairy, and Korean fan words can feel confusing at
        first. These guides explain them like a local friend, without making
        K-pop feel like a textbook.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {article.label}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
              {article.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {article.description}
            </p>

            <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}