import Link from "next/link";
import { getRelatedKpopGuidesForMember } from "../lib/relatedKpopGuides";

type RelatedKpopGuideLinksProps = {
  memberId: string;
};

export default function RelatedKpopGuideLinks({
  memberId,
}: RelatedKpopGuideLinksProps) {
  const guides = getRelatedKpopGuidesForMember(memberId);

  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Related K-pop guides
          </p>

          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Words that help on this page.
          </h2>
        </div>

        <Link
          href="/kpop"
          className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
        >
          See all K-pop →
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {guides.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {article.label}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
              {article.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
              {article.description}
            </p>

            <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
