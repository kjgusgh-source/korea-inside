import Link from "next/link";
import KpopGuideArticleList from "./KpopGuideArticleList";
import { getKpopGuideArticles } from "../lib/kpopGuideArticles";

export default function FeaturedKpopArticles() {
  const articles = getKpopGuideArticles();

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop guides & spotlights
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Start with the words, stages, and spotlight moments fans actually
            click.
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
        first. These starter guides and spotlight picks explain them like a
        local friend, without making K-pop feel like a textbook.
      </p>

      <KpopGuideArticleList
        articles={articles}
        visibleCount={6}
        gridClassName="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        cardClassName="group rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        cardSpacing="home"
      />
    </section>
  );
}
