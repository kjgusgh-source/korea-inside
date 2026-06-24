import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../../components/SiteHeader";
import MediaFeatureCard from "../../../../components/MediaFeatureCard";
import { getMediaItems } from "../../../../lib/media";
import {
  getKpopGroupById,
  getKpopGroups,
  getKpopMemberById,
} from "../../../../lib/kpopData";

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
    description: `${member.name} fancams, stage moments, and performance notes from ${group.name}.`,
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
    member.relatedMediaIds?.includes(item.id)
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10">
            {member.name.slice(0, 1)}
          </div>

          <Link
            href={`/kpop/${group.id}`}
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back to {group.name}
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop member
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {member.name}
          </h1>

          <p className="mt-3 text-xl font-semibold text-[var(--accent)]">
            {group.name}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {member.note}
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Facecam picks
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Close-up moments will live here.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              This section will collect official facecams, eolppak clips, and
              expression-focused stage moments.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Performance notes
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              What to watch in the stage.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Later, HAEMIL can explain expressions, dance points, fan reactions,
              and small details that new fans may miss.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Fan questions
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Ask about this member soon.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Anonymous questions will later help visitors ask about fancams,
              Korean fan words, and the culture around this idol.
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
    Video shelf
  </p>

  <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
    {member.name} fancam picks
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
    Official videos, facecams, stage clips, and short local notes will be
    collected here so new fans can understand the moment more easily.
  </p>

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
        This member page is ready. Official fancams and stage clips can be
        connected here later.
      </p>
    </div>
  )}
</section>
      </div>
    </main>
  );
}