import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-aegyo`;

const pageTitle =
  "What Is Aegyo in K-pop? | Meaning, Examples & Korean Fan Culture";
const pageDescription =
  "A friendly guide to what aegyo means in K-pop, where fans see it, and why it is about mood, timing, and playful charm — not just acting cute.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-aegyo",
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

const relatedMemberIds = ["rei", "jimin", "v", "song-hayoung"];

export default function WhatIsAegyoPage() {
  const publishedGuides = getPublishedMemberGuides();
  const relatedGuides = relatedMemberIds.flatMap((memberId) => {
    const match = publishedGuides.find(({ member }) => member.id === memberId);
    return match ? [match] : [];
  });

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
          name: "Aegyo",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "Korean fan culture",
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
          name: "K-pop",
          item: `${siteUrl}/kpop`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is aegyo?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What is aegyo in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In K-pop, aegyo usually means cute or charming behavior — a playful
              voice, a soft expression, a small gesture meant to pull people in.
              But fans do not use the word only like a simple label for “acting
              cute.” Aegyo is often about mood, timing, and the social warmth
              between an idol and the people watching.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Korean word
                </p>
                <p className="mt-2 text-2xl font-semibold">애교</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  aegyo — charming or adorable behavior used to win people over.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In K-pop
                </p>
                <p className="mt-2 text-2xl font-semibold">Playful charm</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  It can look natural, teasing, exaggerated, or even a little
                  awkward — and fans often enjoy all of those versions.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  More than cute
                </p>
                <p className="mt-2 text-2xl font-semibold">Mood & timing</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A short line, a glance, or the way someone reacts in a group
                  moment can feel like aegyo even without big gestures.
                </p>
              </div>
            </div>
          </article>

          <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Meaning
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Aegyo is charm you can feel in the moment.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                In everyday Korean, 애교 can describe the way someone speaks
                sweetly, pouts lightly, jokes around, or tries to soften a
                situation. It is not limited to one age or one personality type.
                Some people use it naturally. Others turn it on only when the
                mood calls for it.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                In K-pop, that same idea shows up in interviews, fan events,
                and short clips where idols let their off-stage side come
                through. Sometimes it is clearly intentional. Sometimes it
                feels spontaneous — a laugh, a shy pause, or the way someone
                responds when members tease each other.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Where fans see it
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Variety shows:
                  </span>{" "}
                  games, punishments, and group banter often bring out playful
                  expressions.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                  fansign events:
                  </span>{" "}
                  idols may use softer voices or small gestures when talking
                  directly to fans.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Short clips:
                  </span>{" "}
                  a few seconds on camera can spread fast when the timing feels
                  warm or funny.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Stage interactions:
                  </span>{" "}
                  even during performances, a glance or reaction between members
                  can read as charming without looking childish.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Not everyone is natural at it
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Some idols lean into it. Others resist it — and fans notice both.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Not every idol feels comfortable doing aegyo on command. Some
              members are playful by nature and slip into it easily. Others look
              stiff, embarrassed, or deliberately deadpan when asked — and
              fans sometimes like that just as much. The awkward version can
              feel honest, funny, or unexpectedly charming.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              That is one reason aegyo is not simply “cute acting.” It is also
              about personality, comfort level, and the relationship between an
              idol and the people in front of them. A forced moment can feel
              flat. A small, natural one can stay in fans’ memories for years.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kpop/glossary"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Open K-pop glossary →
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean culture note
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Why international fans sometimes misunderstand it
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              From outside Korea, aegyo can look like “just acting cute,”
              especially when clips are edited to highlight big gestures or
              high-pitched voices. That view misses a lot. In Korean pop
              culture, aegyo can also be social charm: reading the room,
              playing along with a joke, or using the right tone at the right
              moment.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Timing matters. So does context. A member who rarely does aegyo
              might suddenly say one soft line in a variety game, and the whole
              mood of the clip changes. Fans are often reacting to that shift —
              not only to the gesture itself. Once you start watching for mood
              and timing, aegyo becomes easier to read without turning it into
              something shallow or childish.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides to read next
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {relatedGuides.map(({ group, member }) => (
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
