import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import { getKpopGroupById, getKpopGroups } from "../../../lib/kpopData";
import { getKpopGuideArticles } from "../../../lib/kpopGuideArticles";
import { iveGroupHub } from "../../../lib/iveGroupHub";
import { publishedMemberIds } from "../../../lib/publishedGuides";

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
    alternates: {
      canonical: `/kpop/${group.id}`,
    },
    openGraph: {
      title: `${group.name} | HAEMIL`,
      description: `${group.name} fancams, members, stage moments, and the Korean culture around them.`,
      url: `https://haemilkorea.com/kpop/${group.id}`,
      siteName: "HAEMIL",
      type: "website",
      locale: "en_US",
      images: ["/brand/haemil-og.png"],
    },
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

  const isPublishedMember = (memberId: string) =>
    publishedMemberIds.some(
      (entry) => entry.groupId === group.id && entry.memberId === memberId
    );
  const publishedMembers = group.members.filter((member) =>
    isPublishedMember(member.id)
  );
  const otherMembers = group.members.filter(
    (member) => !isPublishedMember(member.id)
  );
  // The group's existing "Who Is" guide, if HAEMIL has one. Its own title and
  // description are reused; nothing is written here for it.
  const groupGuide = isIve
    ? undefined
    : getKpopGuideArticles().find(
        (article) => article.href === `/kpop/who-is-${group.id}`
      );
  // Only published content is shown: no "will be added later" notes, and no
  // video section for groups without group videos (IVE keeps its own hub).
  const memberHeading =
    isIve || publishedMembers.length > 1
      ? "Choose a member to follow the stage details."
      : publishedMembers.length === 1
        ? `Start with ${publishedMembers[0].name}'s member guide.`
        : `${group.name} members`;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
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

        {groupGuide && (
          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              {groupGuide.label}
            </p>

            <Link
              href={groupGuide.href}
              className="group mt-5 block rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold leading-tight text-[var(--text)]">
                {groupGuide.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {groupGuide.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                Read guide →
              </p>
            </Link>
          </section>
        )}

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                {!isIve && publishedMembers.length === 1 ? "Member guide" : "Members"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                {memberHeading}
              </h2>
            </div>

            {isIve && (
              <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                {iveGroupHub.memberSectionNote}
              </p>
            )}
          </div>

          {publishedMembers.length > 0 && (
            <div className="grid gap-5 md:grid-cols-3">
              {publishedMembers.map((member) => (
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
          )}

          {/* Members without a published guide: names only, no link, no stub card. */}
          {otherMembers.length > 0 && (
            <div className={publishedMembers.length > 0 ? "mt-8" : undefined}>
              {publishedMembers.length > 0 && (
                <p className="text-sm font-semibold text-[var(--muted)]">
                  Other members
                </p>
              )}

              <ul
                aria-label={`${group.name} members`}
                className={`flex flex-wrap gap-2${publishedMembers.length > 0 ? " mt-3" : ""}`}
              >
                {otherMembers.map((member) => (
                  <li
                    key={member.id}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--text)]"
                  >
                    {member.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
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

        {isIve && (
          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Fancam picks
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {iveGroupHub.fancamTitle}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              {iveGroupHub.fancamDescription}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
