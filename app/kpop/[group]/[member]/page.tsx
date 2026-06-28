import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../../components/SiteHeader";
import MediaFeatureCard from "../../../../components/MediaFeatureCard";
import {
  getKpopGroupById,
  getKpopGroups,
  getKpopMemberById,
} from "../../../../lib/kpopData";
import { getMediaItems } from "../../../../lib/media";
import MoreKpopGuides from "../../../../components/MoreKpopGuides";

type PageProps = {
  params: Promise<{
    group: string;
    member: string;
  }>;
};

export function generateStaticParams() {
  return getKpopGroups().flatMap((group) =>
    group.members.map((member) => ({
      group: group.id,
      member: member.id,
    }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { group: groupId, member: memberId } = await params;
  const group = getKpopGroupById(groupId);
  const member = getKpopMemberById(groupId, memberId);

  if (!group || !member) {
    return {
      title: "K-pop Member | HAEMIL",
    };
  }

  return {
    title: `${member.name} from ${group.name} | HAEMIL`,
    description:
      member.intro ??
      `${member.name} from ${group.name}: fancams, performance notes, Korean expressions, and cultural context.`,
  };
}

export default async function KpopMemberPage({ params }: PageProps) {
  const { group: groupId, member: memberId } = await params;
  const group = getKpopGroupById(groupId);
  const member = getKpopMemberById(groupId, memberId);

  if (!group || !member) {
    notFound();
  }

  const relatedMediaItems = getMediaItems().filter((item) =>
    (member.relatedMediaIds ?? []).includes(item.id)
  );

  const intro =
    member.intro ??
    `${member.name} is a member of ${group.name}. This page collects performance notes, fan-friendly explanations, and Korean culture context for new visitors.`;

  const whyFansLike = member.whyFansLike ?? [
    member.note,
    "Fans often notice small stage details, expressions, and performance moments through fancams.",
  ];

  const watchPoints = member.watchPoints ?? [
    "Start with one official video or fancam.",
    "Look for small expressions, timing, gestures, and the way the performance feels different from a full-stage view.",
    "Come back to the cultural notes to understand why fans talk about these moments.",
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <Link
          href={`/kpop/${group.id}`}
          className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
        >
          ← Back to {group.name}
        </Link>

        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Member guide
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            {member.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-[var(--muted)]">
            {group.name}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {intro}
          </p>
        </div>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Why fans notice this member
            </p>

            <div className="mt-5 space-y-4">
              {whyFansLike.map((point) => (
                <p
                  key={point}
                  className="rounded-2xl bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]"
                >
                  {point}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Watch points
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
              {watchPoints.map((point) => (
                <li key={point} className="rounded-2xl bg-[var(--surface)] p-4">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </section>

        {member.koreanExpression && (
          <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              {member.koreanExpression.hangul}
            </h2>

            <p className="mt-2 text-sm font-medium text-[var(--muted)]">
              {member.koreanExpression.romanization}
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              <span className="font-semibold text-[var(--text)]">Meaning:</span>{" "}
              {member.koreanExpression.meaning}
            </p>

            <p className="mt-4 rounded-2xl bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]">
              {member.koreanExpression.note}
            </p>
          </section>
        )}

        {member.culturalContext && (
          <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Cultural context
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Why this kind of moment matters
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--muted)]">
              {member.culturalContext}
            </p>
          </section>
        )}

        <section className="mt-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Video shelf
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Start with one clip
              </h2>
            </div>

            <Link
              href="/kpop"
              className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
            >
              Request another idol →
            </Link>
          </div>

          {relatedMediaItems.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedMediaItems.map((item, index) => (
                <MediaFeatureCard
                  key={item.id}
                  item={item}
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm font-semibold text-[var(--text)]">
                Videos coming soon
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                This member page is ready. Official fancams and stage clips can
                be connected here later.
              </p>
            </div>
          )}
        </section>
      </section>
      <MoreKpopGuides currentGroupId={group.id} currentMemberId={member.id} />
    </main>
  );
}