import Link from "next/link";
import { getKpopGroupById, getKpopMemberById } from "../lib/kpopData";

const publishedMemberIds = [
  { groupId: "fromis-9", memberId: "song-hayoung" },
  { groupId: "ive", memberId: "jang-wonyoung" },
  { groupId: "aespa", memberId: "karina" },
  { groupId: "bts", memberId: "jung-kook" },
  { groupId: "seventeen", memberId: "hoshi" },
];

type MoreKpopGuidesProps = {
  currentGroupId: string;
  currentMemberId: string;
};

export default function MoreKpopGuides({
  currentGroupId,
  currentMemberId,
}: MoreKpopGuidesProps) {
  const guides = publishedMemberIds
    .filter(
      (item) =>
        item.groupId !== currentGroupId || item.memberId !== currentMemberId
    )
    .flatMap(({ groupId, memberId }) => {
      const group = getKpopGroupById(groupId);
      const member = getKpopMemberById(groupId, memberId);

      if (!group || !member) {
        return [];
      }

      return [{ group, member }];
    })
    .slice(0, 3);

  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            More K-pop guides
          </p>

          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Keep exploring through another member.
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
        {guides.map(({ group, member }) => (
          <Link
            key={`${group.id}-${member.id}`}
            href={`/kpop/${group.id}/${member.id}`}
            className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {group.name}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
              {member.name}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
              {member.note}
            </p>

            <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
              Read next →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}