import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import MediaFeatureCard from "../../../components/MediaFeatureCard";
import { getMediaItems } from "../../../lib/media";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/jisoo`;

const pageTitle =
  "JISOO Profile: BLACKPINK, Her Own Label Blissoo, and the English Single \"CLICK\"";
const pageDescription =
  "A friendly HAEMIL profile of JISOO, BLACKPINK's vocalist, her own label Blissoo, and CLICK, her first single recorded fully in English.";

const intro =
  "JISOO is one of the four members of BLACKPINK, and her solo career has grown at its own pace rather than all at once. She released her debut solo single album, “ME,” in 2023, then started her own label, Blissoo, in 2024 — making her the third BLACKPINK member to run her own company, after JENNIE's Odd Atelier and LISA's LLOUD. This page is about her newest release: “CLICK,” out on September 4, 2026, and notable as the first single she has recorded fully in English.";

const profileFacts = [
  { label: "Stage name", value: "JISOO / 지수" },
  { label: "Korean name", value: "Kim Ji-soo / 김지수" },
  { label: "Born", value: "January 3, 1995" },
  { label: "Artist type", value: "Solo artist · BLACKPINK member" },
  {
    label: "Known for",
    value:
      "BLACKPINK's vocals, her own label Blissoo, and the 2026 English-language single “CLICK”",
  },
  {
    label: "Group debut",
    value: "August 8, 2016, with BLACKPINK on the single album SQUARE ONE",
  },
  {
    label: "Solo debut",
    value: "March 31, 2023, with the single album “ME” and its title track “Flower”",
  },
];

const soloTimeline = [
  {
    year: "2016",
    text: "Debuts with BLACKPINK on August 8 as one of the group's four members.",
  },
  {
    year: "2023",
    text: "Releases “ME,” her solo debut single album, led by the title track “Flower.”",
  },
  {
    year: "2024",
    text: "Starts her own label, Blissoo, moving her solo career onto an independent footing.",
  },
  {
    year: "2025",
    text: "Releases “Amortage,” her debut EP under Blissoo and Warner Records, led by the single “earthquake.”",
  },
  {
    year: "2026",
    text: "Releases “CLICK” on September 4, her first single recorded fully in English.",
  },
];

const singleFacts = [
  {
    label: "Release",
    value: "Friday, September 4, 2026 (digital single)",
  },
  {
    label: "Digital version",
    value: "One track, running 2 minutes 39 seconds",
  },
  {
    label: "Physical edition",
    value: "A longer 5-minute 18-second cut, with a photobook, an NFC tag, and a vinyl pressing",
  },
  {
    label: "Label / Distribution",
    value: "Blissoo, distributed globally through Warner Records",
  },
];

const whyPeopleCare = [
  "“CLICK” is the first JISOO single recorded fully in English. Her 2025 EP “Amortage” had English tracks on it, but its lead single, “earthquake,” was mostly in Korean, with an English version sold separately as a bonus cut — so this is a different kind of release, not just another bilingual track.",
  "The teaser leaned hard into a dark fairytale-carnival mood: JISOO holds up what looks like an amusement park ticket while unsettling animatronic-style dolls appear around her, closer in tone to a horror movie opening than a typical K-pop comeback teaser.",
  "The music video was directed by Joseph Kahn, who has directed Taylor Swift's “Bad Blood” and Eminem's “Without Me,” and it was filmed in Bangkok, Thailand rather than on a set in Korea.",
  "JISOO is now the third BLACKPINK member with her own label, after JENNIE's Odd Atelier and LISA's LLOUD — worth knowing if you have mostly followed BLACKPINK as a group and assumed solo work still ran through one shared agency.",
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
    label: "BLACKPINK member profile",
    title: "Meet JENNIE, another BLACKPINK member going solo",
    description:
      "JENNIE built her own label, Odd Atelier, before JISOO started Blissoo — this profile covers her solo run and 2026 EP Fallen Angel.",
    href: "/kpop/jennie",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/jisoo",
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

export default function JisooProfilePage() {
  const featuredMedia = getMediaItems().find(
    (item) => item.id === "jisoo-click-official-mv"
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
          name: "JISOO",
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
          name: "JISOO",
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
              JISOO
            </h1>

            <p className="mt-3 text-lg font-medium text-[var(--muted)]">
              Solo artist · BLACKPINK member · CLICK (2026)
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
                  A few basics before you get into “CLICK.”
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
              CLICK
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {singleFacts.map((fact) => (
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
                CLICK is JISOO's first release through Warner Records since
                her 2025 EP “Amortage,” but it works differently. Amortage's
                lead single, “earthquake,” was mostly in Korean, with an
                English version sold separately as a bonus track. CLICK flips
                that around — the song is in English from the start, which is
                part of why it is being described as her first English-language
                single rather than just another bilingual release.
              </p>

              <p>
                If you are used to K-pop releases arriving as full mini
                albums, CLICK's digital version might look small: it is one
                track, running 2 minutes and 39 seconds. That is a fairly
                common way for an artist to put out a single English track
                without committing to a full EP right away. A physical
                edition is also available, running longer at 5 minutes and 18
                seconds and packaged with a photobook, an NFC tag, and a
                vinyl pressing — the kind of collectible extras that
                physical K-pop releases often add on top of the music itself.
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
                  Watch the official MV
                </h2>
              </div>
            </div>

            {featuredMedia ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <MediaFeatureCard
                  item={featuredMedia}
                  featured
                  showGuideLink
                  currentPath="/kpop/jisoo"
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
