import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import IdolRequestForm from "../../components/IdolRequestForm";
import KpopExplorer from "../../components/KpopExplorer";
import { getKpopGroups } from "../../lib/kpopData";
import { getPublishedMemberGuides } from "../../lib/publishedGuides";

export default function KpopPage() {
  const groups = getKpopGroups();
  const publishedGuides = getPublishedMemberGuides();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10">
            K
          </div>

          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop / Idols
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Start with the idol you like. Stay for the culture around it.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            K-pop is one of the easiest ways to enter Korean culture. This page
            helps visitors find groups, members, fancams, stage words, fan
            culture, and the small moments that make people curious about Korea.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
  <Link
    href="/kpop/glossary"
    className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
  >
    Open K-pop glossary →
  </Link>

  <Link
    href="/kpop/what-is-a-fancam"
    className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
  >
    What is a fancam? →
  </Link>

  <Link
    href="/kpop/what-does-bias-mean"
    className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
  >
    What does bias mean? →
  </Link>
</div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Published member guides
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">
            Start with the members fans are already talking about.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            These guides explain not only who each idol is, but why fans notice
            them, what kind of role they play in their group, and which Korean
            fan words make their stage moments easier to understand.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publishedGuides.map(({ group, member }) => (
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

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {member.note}
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <KpopExplorer groups={groups} />

        <IdolRequestForm />
      </div>
    </main>
  );
}