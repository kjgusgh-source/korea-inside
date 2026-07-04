import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import { getKpopGroupById, getKpopGroups } from "../../../lib/kpopData";
import { getKpopGuideArticles } from "../../../lib/kpopGuideArticles";
import { iveGroupHub } from "../../../lib/iveGroupHub";

type PageProps = {
  params: Promise<{
    group: string;
  }>;
};

export function generateStaticParams() {
  return getKpopGroups().map((group) => ({
    group: group.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { group: groupId } = await params;
  const group = getKpopGroupById(groupId);

  if (!group) {
    return {
      title: "K-pop Group | HAEMIL",
    };
  }

  return {
    title: `${group.name} | HAEMIL`,
    description: `${group.name} fancams, members, stage moments, and the Korean culture around them.`,
  };
}

export default async function KpopGroupPage({ params }: PageProps) {
  const { group: groupId } = await params;
  const group = getKpopGroupById(groupId);

  if (!group) {
    notFound();
  }

  const isIve = group.id === "ive";
  const iveRelatedGuides = isIve
    ? iveGroupHub.relatedGuideHrefs
        .map((href) => getKpopGuideArticles().find((article) => article.href === href))
        .filter((article): article is NonNullable<typeof article> => article !== undefined)
    : [];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10">
            {group.name.slice(0, 1)}
          </div>

          <Link
            href="/kpop"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back to K-pop
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop group
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {group.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {group.description}
          </p>

          {isIve &&
            iveGroupHub.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg"
              >
                {paragraph}
              </p>
            ))}

          <div className="mt-6 flex flex-wrap gap-2">
            {group.starterTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Members
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Choose a member to follow the stage details.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              {isIve
                ? iveGroupHub.memberSectionNote
                : "Member pages will collect fancams, facecams, stage words, and small moments that help new fans understand why people replay these clips."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {group.members.map((member) => (
              <Link
                key={member.id}
                href={`/kpop/${group.id}/${member.id}`}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <p className="text-xl font-semibold text-[var(--text)]">
                  {member.name}
                </p>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {member.note}
                </p>

                <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
                  Open member page →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {isIve && (
          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop starter guides
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">
              {iveGroupHub.relatedGuideTitle}
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              {iveGroupHub.relatedGuideDescription}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {iveRelatedGuides.map((article) => (
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

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {article.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                    Read guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Fancam picks
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            {isIve ? iveGroupHub.fancamTitle : "Group videos will live here."}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
            {isIve
              ? iveGroupHub.fancamDescription
              : "This section will later collect official stages, group fancams, dance practices, and cultural notes about the words or fan moments around this group."}
          </p>
        </section>
      </div>
    </main>
  );
}
