import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import IdolRequestForm from "../../components/IdolRequestForm";
import KpopGuideArticleList from "../../components/KpopGuideArticleList";
import KpopExplorer from "../../components/KpopExplorer";
import { getKpopGroups } from "../../lib/kpopData";
import { getPublishedMemberGuides } from "../../lib/publishedGuides";
import { getKpopGuideArticles } from "../../lib/kpopGuideArticles";
import { getKpopSoloArtists } from "../../lib/kpopSoloArtists";

export default function KpopPage() {
  const groups = getKpopGroups();
  const soloArtists = getKpopSoloArtists();
  const publishedGuides = getPublishedMemberGuides();
  const guideArticles = getKpopGuideArticles();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10">
            K
          </div>

          <div className="relative md:flex md:items-center md:justify-between md:gap-6">
            <div className="md:min-w-0 md:flex-1">
              <Link
                href="/"
                className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
              >
                ← Back home
              </Link>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop / Idols
              </p>

              <h1
                aria-label="Start with the idol you like. Stay for the culture around it."
                className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:max-w-4xl md:text-[52px] lg:text-[56px]"
              >
                <span aria-hidden="true" className="block md:hidden">
                  Start with the idol you like. Stay for the culture around it.
                </span>
                <span aria-hidden="true" className="hidden md:block md:whitespace-nowrap">
                  Start with the idol you like.
                </span>
                <span aria-hidden="true" className="hidden md:block md:whitespace-nowrap">
                  Stay for the culture around it.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                K-pop is one of the easiest ways to enter Korean culture. This
                page helps visitors find groups, members, fancams, stage
                words, fan culture, and the small moments that make people
                curious about Korea.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative mx-auto mt-[10px] h-[145px] w-[170px] md:mx-0 md:mr-[20px] md:mt-0 md:h-[157px] md:w-[247px] md:shrink-0"
            >
              <div className="absolute left-0 top-[2px] h-[143px] w-[110px] -rotate-6 overflow-hidden rounded-2xl border border-[var(--border)] shadow-md md:h-[153px] md:w-[118px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/gHoKSBaLP7E/hqdefault.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-[60px] top-0 h-[143px] w-[110px] rotate-3 overflow-hidden rounded-2xl border border-[var(--border)] shadow-md md:left-[65px] md:h-[153px] md:w-[118px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/ZbxCI7ibDWk/hqdefault.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-[129px] top-[4px] hidden h-[153px] w-[118px] rotate-6 overflow-hidden rounded-2xl border border-[var(--border)] shadow-md md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/GETUc1c1uAs/hqdefault.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop guides & spotlights
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">
            Start with the words fans use, then follow the spotlight moments
            people keep replaying.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            These short guides and spotlight picks explain the words, stage
            habits, and replayable moments that show up again and again in
            K-pop comments, fancams, member guides, and fan conversations.
          </p>

          <KpopGuideArticleList
            articles={guideArticles}
            visibleCount={6}
            gridClassName="grid gap-5 md:grid-cols-3"
            cardClassName="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
            cardSpacing="hub"
          />
        </section>

        <KpopExplorer groups={groups} soloArtists={soloArtists} />

        <details className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              All K-pop groups
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">
              Browse every group HAEMIL covers.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Jump straight to a group page for members, fancams, and stage
              details.
            </p>

            <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
              Show all groups ↓
            </p>
          </summary>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <Link
                key={group.id}
                href={`/kpop/${group.id}`}
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {group.category === "girl-groups" ? "Girl group" : "Boy group"}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                  {group.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {group.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Open group page →
                </p>
              </Link>
            ))}
          </div>
        </details>

        <details className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
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

            <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
              Show member guides ↓
            </p>
          </summary>

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
        </details>

        <IdolRequestForm />
      </div>
    </main>
  );
}