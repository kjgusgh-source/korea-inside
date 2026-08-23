import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-bts`;

const pageTitle = "Who Is BTS? A Guide to Their 2026 Comeback";
const pageDescription =
  "A friendly guide to BTS's 2026 comeback — how military service kept the group apart, why ARIRANG and 'SWIM' mark their return, and where the 'NORMAL' video fits in.";

const relatedGuides = [
  {
    label: "Group page",
    title: "Explore BTS's group page",
    description:
      "See all seven members and find the BTS guides available on HAEMIL.",
    href: "/kpop/bts",
  },
  {
    label: "Member guide",
    title: "Meet Jung Kook",
    description:
      "Read Jung Kook's member guide and learn why ARMY watched him grow into a performer who can carry a stage on his own.",
    href: "/kpop/bts/jung-kook",
  },
  {
    label: "Member guide",
    title: "Meet Jimin",
    description:
      "Read Jimin's member guide and see how his movement carries as much feeling as his voice.",
    href: "/kpop/bts/jimin",
  },
  {
    label: "Member guide",
    title: "Meet V",
    description:
      "Read V's member guide and hear the deeper, moodier tone he adds to BTS.",
    href: "/kpop/bts/v",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-bts",
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

export default function WhoIsBtsPage() {
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
          name: "BTS",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "HYBE",
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
          name: "Who is BTS?",
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
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Boy group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is BTS? A Guide to Their 2026 Comeback
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              By the summer of 2025, all seven members of BTS had finished
              South Korea&apos;s mandatory military service — the last item
              on a list that had kept the group apart, one enlistment at a
              time, for years. In March 2026 they came back together for{" "}
              <em>ARIRANG</em>, their first full studio album since{" "}
              <em>Map of the Soul: 7</em>, and by April they were on stage
              again for their first world tour since 2022. Here is what
              changed while they were gone, what the comeback actually
              sounds like, and where to go next if you already know one or
              two of the seven members.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Why 2026 feels like a different kind of comeback
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                BTS releases have been called comebacks before, but this one
                carries more weight than a new single or a mini album
                usually does. Between 2022 and 2025, each of the seven
                members carried out South Korea&apos;s mandatory military
                service on a staggered schedule rather than all at once, so
                for years &quot;BTS&quot; mostly meant seven separate
                schedules instead of one group calendar.
              </p>

              <p>
                Jin finished his service first, in June 2024, and J-Hope
                followed that October. RM and V were discharged on the same
                day, June 10, 2025, then Jimin and Jung Kook the day after,
                June 11. Suga was the last to return, on June 21, 2025 — the
                point at which all seven members were finally free to work
                as a group again.
              </p>

              <p>
                That gap is why <em>ARIRANG</em> matters beyond being a new
                release. It is the first studio album the full group has
                recorded together since <em>Map of the Soul: 7</em> in
                February 2020, and the tour that followed is BTS&apos;s
                first as a complete group since 2022.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              <em>ARIRANG</em> and &quot;SWIM&quot;
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                BTS released <em>ARIRANG</em> on March 20, 2026 — the
                group&apos;s fifth Korean-language studio album and tenth
                full-length release overall. The title track,
                &quot;SWIM,&quot; debuted at No. 1 on the Billboard Hot 100,
                and by early April, thirteen of the album&apos;s fourteen
                tracks had charted on the same list, missing only the short
                interlude &quot;No. 29.&quot;
              </p>

              <p>
                &quot;SWIM&quot; leans into a steady, propulsive sound, and
                the title itself points at staying in motion rather than
                standing still — a fitting idea for a comeback that arrives
                after nearly three years of separate schedules.
              </p>

              <p>
                The world tour that followed began on April 9, 2026, as the
                group&apos;s 82nd overall concert run, and is scheduled to
                continue through March 2027.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Watch &quot;NORMAL&quot;
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              BTS (방탄소년단) &quot;NORMAL&quot; Official MV
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                &quot;SWIM&quot; was the song built for charts and comeback
                stages, but a different track ended up defining how BTS
                chose to close out this stretch of promotion. &quot;NORMAL,&quot;
                a B-side from <em>ARIRANG</em>, got a music video of its own
                months after the album&apos;s release, and Big Hit Music
                chose to premiere it on Spotify first, on July 17, 2026,
                before it reached other platforms.
              </p>

              <p>
                Directed by Tanu Muino, the video follows the seven members
                through the quiet hours after a night out rather than
                through a stage performance, trading the polish of a
                title-track release for something closer to seven people at
                ease with each other. It went on to become the
                most-streamed K-pop music video in a single day on Spotify —
                a notable result for a song that was never pushed as the
                album&apos;s lead single.
              </p>
            </div>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="GEk4jHwfFTA"
                title="BTS (방탄소년단) 'NORMAL' Official MV"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Official music video uploaded by HYBE LABELS.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Meet the seven members</h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                BTS is RM (leader and main rapper), Jin (vocalist), Suga
                (rapper and producer, also known for solo work as Agust D),
                J-Hope (rapper and the group&apos;s dance leader), Jimin
                (vocalist and dancer), V (vocalist), and Jung Kook (vocalist
                and the group&apos;s youngest member).
              </p>

              <p>
                HAEMIL already has full guides for three of them. Jung
                Kook&apos;s guide looks at why ARMY watched him grow from
                the group&apos;s golden maknae into a performer who can
                carry a stage on his own. Jimin&apos;s guide focuses on how
                his movement carries as much feeling as his voice. V&apos;s
                guide covers the deeper, more textured tone that gives BTS
                one of its most recognizable moods.
              </p>

              <p>
                RM, Jin, Suga, and J-Hope do not have dedicated HAEMIL guides
                yet. Their group page is the place to find more about all
                seven members as HAEMIL adds to this coverage.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Why BTS is worth watching again in 2026
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                BTS spent years being talked about in the past tense by
                casual observers — a huge group that was technically on
                hiatus while its members completed military service.{" "}
                <em>ARIRANG</em> and the tour that followed close that
                chapter, but they do not simply pick up where 2020 left off.
                &quot;SWIM&quot; and &quot;NORMAL&quot; show two very
                different sides of the same comeback: one built for a
                comeback stage, the other filmed like nobody was watching.
              </p>

              <p>
                If you are discovering BTS through this comeback,
                &quot;SWIM&quot; is the most direct way in, since it is the
                song built to represent the album. From there, the seven
                members and years of material are easier to explore one
                guide at a time.
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
                  Related K-pop guides
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
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
