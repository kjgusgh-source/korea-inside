import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/dramas/what-is-makjang`;

const pageTitle = "What Is Makjang? K-Drama's Wildest Genre, Explained";
const pageDescription =
  "A friendly guide to makjang (막장), the K-drama genre built on secret identities, revenge, and affairs, from its coal-mine origins to The Penthouse and the daytime classic Temptation of Wife.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/dramas/what-is-makjang",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "HAEMIL",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const relatedGuides = [
  {
    label: "K-drama guide",
    title: "What Is Second Lead Syndrome in K-Dramas?",
    description:
      "A friendly guide to second lead syndrome: what the term means, why viewers end up rooting for the second lead, and how it compares to Korea's own word for the same feeling.",
    href: "/dramas/what-is-second-lead-syndrome-in-kdramas",
  },
  {
    label: "K-drama guide",
    title: "Why Itaewon Class Is a Good First K-drama",
    description:
      "A local-friendly guide to the 2020 JTBC hit, from Itaewon and DanBam to youth ambition, unfair power, and why the drama stayed memorable.",
    href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
  },
  {
    label: "K-drama guide",
    title: "Why Teach You a Lesson Is a Good First K-drama",
    description:
      "An honest guide to Netflix's most-watched K-drama of 2026, its ERPB inspectors, the school-violence premise behind it, and who this intense show is really for.",
    href: "/dramas/why-teach-you-a-lesson-is-a-good-first-kdrama",
  },
  {
    label: "K-pop guide",
    title: "K-pop glossary",
    description:
      "HAEMIL's growing glossary of K-pop terms, explained the way a friend who already knows the fandom would explain them.",
    href: "/kpop/glossary",
  },
];

export default function WhatIsMakjangPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      author: {
        "@type": "Organization",
        name: "HAEMIL",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "HAEMIL",
        url: siteUrl,
      },
      inLanguage: "en",
      about: [
        {
          "@type": "Thing",
          name: "Makjang",
        },
        {
          "@type": "Thing",
          name: "K-drama",
        },
        {
          "@type": "Thing",
          name: "Korean pop culture",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Drama & Film",
          item: `${siteUrl}/dramas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is makjang?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/dramas"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Drama & Film
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-drama guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What is makjang in K-dramas?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If a K-drama has a secret twin, a sudden case of amnesia, an
              affair that somehow involves three different family members,
              and a birth secret revealed in the final ten minutes, fans have
              a one-word label for it: makjang. It is not a compliment
              exactly, but it is not really an insult either.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  The word
                </p>
                <p className="mt-2 text-2xl font-semibold">막장 (makjang)</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Literally the dead-end of a coal mine shaft — the point
                  where there is nowhere further to dig.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  As a drama label
                </p>
                <p className="mt-2 text-2xl font-semibold">A genre, sort of</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Shows built on secret identities, revenge, affairs, and
                  reversals that keep going long past where most dramas would
                  stop.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  How Koreans use it
                </p>
                <p className="mt-2 text-2xl font-semibold">Both ways</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  As real criticism of a show that lost the plot, and as a
                  half-joking label for a guilty-pleasure favorite.
                </p>
              </div>
            </div>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Where the word comes from
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              It started underground, not on a drama set
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Makjang was a mining term first. It described the very end of
                a coal mine tunnel — the deepest, furthest point a miner
                could reach, with nowhere left to go. The mining meaning helps explain
                the image behind the modern expression. When Koreans call a show makjang, they are
                saying it has gone all the way to the end of the tunnel: the
                writers pushed the plot past any believable stopping point,
                and there is nowhere further left to escalate to.
              </p>

              <p>
                You will sometimes see the word translated as
                &quot;trashy&quot; or &quot;over the top,&quot; and those
                translations are not wrong, but they miss the specific image
                behind the Korean word. Makjang is not just messy. It is
                messy because the story kept digging, past the point where a
                more careful drama would have turned back.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              What actually makes a drama makjang
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A checklist of familiar ingredients
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              There is no official rulebook, but reviewers and fans tend to
              point to the same handful of ingredients when they call
              something makjang:
            </p>

            <ul className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--text)]">
                  A hidden identity or a secret birth:
                </span>{" "}
                someone turns out to be a long-lost child, a switched-at-birth
                sibling, or the secret heir to a family fortune no one saw
                coming.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Revenge that takes over the whole plot:
                </span>{" "}
                a wronged character spends the rest of the show working their
                way back into the lives of the people who hurt them, often
                under a new identity or a new face.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  An affair that pulls in the whole family:
                </span>{" "}
                infidelity in a makjang drama rarely stays between two
                people. It tends to ripple out until in-laws, business
                partners, and childhood friends are all tangled in it too.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Wealthy families behaving badly:
                </span>{" "}
                chaebol-style households fighting over inheritance, company
                control, or a marriage nobody approves of are a recurring
                backdrop.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Reversals that keep resetting the stakes:
                </span>{" "}
                a plot twist that would end most dramas — a death, a
                confession, a downfall — turns out to be temporary, and the
                story keeps escalating from there.
              </li>
            </ul>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              One or two of these on their own do not make a drama makjang —
              plenty of respected shows use a hidden identity or a revenge
              plot without earning the label. What pushes a drama into
              makjang territory is stacking several of them together and
              refusing to slow down.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              The shows people point to first
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              From prestige hits to the daytime classic
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                The Penthouse: War in Life is one of the clearest modern
                examples of makjang. SKY Castle is a more borderline case: it
                uses some makjang-like ingredients — wealthy families,
                shocking secrets, crime, and extreme reversals — but wraps
                them inside a sharper satire of Korea's education culture.
                That difference is why Korean viewers could debate whether it
                was really makjang at all.
              </p>

              <p>
                But if you ask which drama earns the label the most, several
                entertainment outlets point further back, to Temptation of
                Wife (아내의 유혹), which aired on SBS from late 2008 into
                2009 across 129 episodes. It is frequently described as close
                to the purest version of the genre: a wife is betrayed by her
                husband and best friend, seemingly dies, then returns under a
                new identity and a changed face to work her way back into
                their lives. The show was a genuine ratings hit, averaging 26.9 percent
                nationwide and peaking at 37.5 percent, while lead actress
                Jang Seo-hee won the SBS Drama Awards grand prize (daesang)
                for the role.
                If you want to see where the makjang reputation really comes
                from, Temptation of Wife is usually the drama people mean.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean culture note
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Koreans use the word far outside of dramas, too
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                If you only know makjang from English-language drama
                recommendation lists, it can read like a fixed genre tag,
                similar to how you might sort movies into horror or romance.
                In Korean, though, 막장 is used much more loosely. Someone
                might describe a messy office conflict, a chaotic breakup, or
                a ridiculous news story as 막장 상황 (a makjang situation) —
                the drama meaning grew out of the same everyday word, not the
                other way around.
              </p>

              <p>
                That wider use also explains why the tone around makjang
                dramas in Korea is more complicated than &quot;so bad it's
                good.&quot; These shows are a long-running staple of daytime
                and weekend television, watched by grandparents alongside
                younger family members, and there is real nostalgia mixed in
                with the eye-rolling. A viewer can call a drama makjang, mean
                it as a genuine complaint about the writing, and still tune
                in every week — the label describes the plot, not necessarily
                how much someone enjoys watching it.
              </p>

              <p>
                For international fans, makjang moments often show up first
                as short clips — a slap, a dramatic reveal, someone waking up
                from amnesia at the worst possible moment — shared without
                much context. Those clips are usually funny on their own, but
                they can leave out the fact that the plot twist is part of a
                recognized, long-running Korean drama tradition with its own
                name, rather than one show going uniquely off the rails.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related guides
                </h2>
              </div>

              <Link
                href="/dramas"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Drama & Film →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
                    {guide.label}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {guide.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                    Read guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
