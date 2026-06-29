import Link from "next/link";
import { getPublishedMemberGuides } from "../lib/publishedGuides";

export default function FeaturedMemberGuides() {
  const featuredMembers = getPublishedMemberGuides();

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Featured guides
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Start with one member, then understand the world around them.
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
        These guides are not just profile pages. Each one explains why fans
        notice a member, what role they play in their group, and which Korean
        fan words or stage moments help new viewers understand them better.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredMembers.map(({ group, member }) => (
          <Link
            key={`${group.id}-${member.id}`}
            href={`/kpop/${group.id}/${member.id}`}
            className="group rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {group.name}
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">
              {member.name}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {member.note}
            </p>

            <p className="mt-5 text-sm font-semibold text-[var(--accent)] transition group-hover:translate-x-1">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}