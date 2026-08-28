import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import MediaFeatureCard from "../../../components/MediaFeatureCard";
import { getMediaItems } from "../../../lib/media";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/jennie`;

const pageTitle =
  "JENNIE Profile: BLACKPINK, a Solo Career on Her Own Label, and the Fallen Angel EP";
const pageDescription =
  "A friendly HAEMIL profile of JENNIE, BLACKPINK's main rapper and lead vocalist, her solo run from SOLO to Odd Atelier, and her new EP Fallen Angel.";

const intro =
  "JENNIE is one of the four members of BLACKPINK, and by now her solo career is large enough to stand on its own. It's easy to see why people sometimes call her BLACKPINK's “leader” — but that's not an official title. YG Entertainment has said the group has no designated leader, and JENNIE herself has pushed back on it in interviews. What she does have is seniority: she is the oldest of the four, debuted alongside the others on August 8, 2016, and tends to be the member who speaks first when the group is introduced. This page is about her solo side, centered on her new EP, “Fallen Angel.”";

const profileFacts = [
  { label: "Stage name", value: "JENNIE / 제니" },
  { label: "Korean name", value: "Kim Jennie / 김제니" },
  { label: "Born", value: "January 16, 1996" },
  { label: "Artist type", value: "Solo artist · BLACKPINK member" },
  {
    label: "Known for",
    value:
      "BLACKPINK's rap and lead vocals, a solo career built through her own label, and the 2026 EP Fallen Angel",
  },
  {
    label: "Group debut",
    value: "August 8, 2016, with BLACKPINK on the single album SQUARE ONE",
  },
  { label: "Solo debut", value: "November 12, 2018, with the single “SOLO”" },
];

const soloTimeline = [
  {
    year: "2016",
    text: "Debuts with BLACKPINK on August 8 as the group's main rapper and lead vocalist.",
  },
  {
    year: "2018",
    text: "Releases “SOLO,” her first single as a member stepping out on her own inside the group.",
  },
  {
    year: "2023",
    text: "Starts her own label, Odd Atelier, in partnership with Columbia Records — giving her more direct say over how her solo music gets made and released.",
  },
  {
    year: "2025",
    text: "Releases “Ruby,” her first full solo studio album.",
  },
  {
    year: "2026",
    text: "Releases the digital EP “Fallen Angel” on August 28.",
  },
];

const epFacts = [
  {
    label: "Release",
    value: "Friday, August 28, 2026, 1:00 PM KST (digital EP)",
  },
  {
    label: "Digital tracklist (3 songs)",
    value: "FALLEN ANGEL (title track), HEAVEN, Less Than a Lover",
  },
  {
    label: "Physical edition (6 songs)",
    value:
      "Adds Sweet Tooth, Lock It Down, and Face. Pre-orders opened August 26 at 11:00 AM KST.",
  },
  {
    label: "Label",
    value: "Odd Atelier, in partnership with Columbia Records",
  },
];

const whyPeopleCare = [
  "“Fallen Angel” is JENNIE's first EP built entirely through Odd Atelier, the label she started in 2023 — a different setup from a song released as one artist among a bigger company roster.",
  "The MV teaser leaned into a dark fairytale look: JENNIE speaking from a puppet-theater-style stage, with a line about how “we can still fly” before the visual mood shifts for the rest of the clip.",
  "This EP feels more personal than a typical comeback. Odd Atelier itself described it as coming “from a very personal place.”",
  "The digital and physical tracklists aren't the same size: three songs digitally, six on the physical release. That's part of why fans are comparing which version to buy instead of treating it as one simple release.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly HAEMIL guide to comeback meaning in K-pop, why new releases are called comebacks, and how comeback stages, title tracks, teasers, pre-releases, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is a title track in K-pop?",
    description:
      "A title track is the main song promoted during a K-pop comeback — this guide explains how it differs from B-sides and pre-releases.",
    href: "/kpop/what-is-a-title-track-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does debut mean in K-pop?",
    description:
      "A friendly HAEMIL guide to debut meaning in K-pop, how debut differs from pre-debut, trainee, rookie group, and comeback, and why a first official release matters.",
    href: "/kpop/what-does-debut-mean-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does bias mean in K-pop?",
    description:
      "A friendly HAEMIL guide to bias meaning in K-pop, how fans choose a favorite member, and what bias wrecker, ultimate bias, bias line, 최애, and 차애 can mean.",
    href: "/kpop/what-does-bias-mean",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/jennie",
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

export default function JennieProfilePage() {
  const featuredMedia = getMediaItems().find(
    (item) => item.id === "jennie-fallen-angel-official-mv-teaser"
  );

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
          name: "JENNIE",
        },
        {
          "@type": "Thing",
          name: "BLACKPINK",
        },
        {
          "@type": "Thing",
          name: "K-pop solo artist",
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
          name: "JENNIE",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <SiteHeader />

        <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <Link
            href="/kpop"
            className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
          >
            ← Back to K-pop
          </Link>

          <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Solo artist profile
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              JENNIE
            </h1>

            <p className="mt-3 text-lg font-medium text-[var(--muted)]">
              Solo artist · BLACKPINK member · Fallen Angel (2026)
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2 md:items-start md:gap-6">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-5">
              <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                  {intro}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Quick notes
                </p>
                <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                  A few basics before you get into the EP.
                </p>
                <dl className="mt-3 space-y-2.5">
                  {profileFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text)]">
                      {fact.label}
                    </dt>
                      <dd className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          <section className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                Why people are paying attention now
              </p>

              <div className="mt-5 space-y-4">
                {whyPeopleCare.map((point) => (
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
                Solo career timeline
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {soloTimeline.map((item) => (
                  <li
                  key={item.year}
                    className="rounded-2xl bg-[var(--surface)] p-4"
                >
                    <span className="font-semibold text-[var(--text)]">
                      {item.year}
                    </span>{" "}
                    — {item.text}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Fallen Angel EP
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {epFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl bg-[var(--surface)] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text)]">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                JENNIE has released solo music before, but “Fallen Angel” is
                the first project she has made entirely through Odd Atelier,
                the label she started in 2023 with Columbia Records as a
                partner. In practice, that means more of the decisions behind
                this EP — timing, how many versions to release — are hers to
                make, instead of being shared across a bigger company roster.
              </p>

              <p>
                The title track shares its name with the EP. Two more songs,
                “HEAVEN” and “Less Than a Lover,” round out the digital
                release. The physical version adds three more tracks for a
                six-song total — a common way K-pop artists give physical
                buyers something extra without changing what streaming
                listeners get on release day.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Video shelf
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Watch the teaser
                </h2>
              </div>
            </div>

            {featuredMedia ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <MediaFeatureCard
                  item={featuredMedia}
                  featured
                  showGuideLink
                  currentPath="/kpop/jennie"
                />
              </div>
            ) : (
              <div className="mt-8 rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm font-semibold text-[var(--text)]">
                  Videos coming soon
                </p>
              </div>
            )}
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
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
        </section>
      </main>
    </>
  );
}
