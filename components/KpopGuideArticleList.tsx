import Link from "next/link";
import type { KpopGuideArticle } from "../lib/kpopGuideArticles";

type KpopGuideArticleListProps = {
  articles: KpopGuideArticle[];
  visibleCount?: number;
  gridClassName?: string;
  cardClassName?: string;
  cardSpacing?: "home" | "hub";
};

function GuideArticleCard({
  article,
  cardClassName,
  cardSpacing = "hub",
}: {
  article: KpopGuideArticle;
  cardClassName: string;
  cardSpacing?: "home" | "hub";
}) {
  const descriptionClassName =
    cardSpacing === "home"
      ? "mt-4 text-sm leading-7 text-[var(--muted)]"
      : "mt-3 text-sm leading-6 text-[var(--muted)]";
  const ctaClassName =
    cardSpacing === "home"
      ? "mt-5 text-sm font-semibold text-[var(--accent)]"
      : "mt-4 text-sm font-semibold text-[var(--accent)]";

  return (
    <Link key={article.href} href={article.href} className={cardClassName}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
        {article.label}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
        {article.title}
      </h3>

      <p className={descriptionClassName}>{article.description}</p>

      <p className={ctaClassName}>Read guide →</p>
    </Link>
  );
}

export default function KpopGuideArticleList({
  articles,
  visibleCount = 6,
  gridClassName = "grid gap-5 md:grid-cols-3",
  cardClassName = "group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md",
  cardSpacing = "hub",
}: KpopGuideArticleListProps) {
  const visibleArticles = articles.slice(0, visibleCount);
  const hiddenArticles = articles.slice(visibleCount);

  return (
    <div className="mt-8">
      <div className={gridClassName}>
        {visibleArticles.map((article) => (
          <GuideArticleCard
            key={article.href}
            article={article}
            cardClassName={cardClassName}
            cardSpacing={cardSpacing}
          />
        ))}
      </div>

      {hiddenArticles.length > 0 ? (
        <details className="mt-5">
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <p className="text-sm font-semibold text-[var(--accent)]">
              Show more K-pop guides & spotlights ↓
            </p>
          </summary>

          <div className={`${gridClassName} mt-5`}>
            {hiddenArticles.map((article) => (
              <GuideArticleCard
                key={article.href}
                article={article}
                cardClassName={cardClassName}
                cardSpacing={cardSpacing}
              />
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}
