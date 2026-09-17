import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import MediaFeatureCard from "../../../components/MediaFeatureCard";
import { getMediaItems } from "../../../lib/media";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/lisa`;

const pageTitle =
  "LISA Profile: BLACKPINK, Her Label LLOUD, and the Single \"SaWaDiKa\"";
const pageDescription =
  "A friendly HAEMIL profile of LISA, BLACKPINK's member, her own label LLOUD, and \"SaWaDiKa,\" the lead single from her upcoming EP \"PRESS PLAY.\"";

const intro =
  "LISA is one of the four members of BLACKPINK, and like her groupmates JENNIE and JISOO, she now runs her solo work through a label of her own, LLOUD Co. On September 3, 2026, she released “SaWaDiKa,” a solo single distributed worldwide through RCA Records. It is also the first song out from PRESS PLAY, her upcoming EP due on October 23, 2026. This page covers what “SaWaDiKa” is, how it fits into a bigger pattern in BLACKPINK's solo era right now, and where to watch the official video.";

const profileFacts = [
  { label: "Stage name", value: "LISA" },
  { label: "Artist type", value: "Solo artist · BLACKPINK member" },
  { label: "Own label", value: "LLOUD Co." },
  {
    label: "Known for",
    value:
      "BLACKPINK, and running her solo work through her own label, LLOUD",
  },
  {
    label: "Latest single",
    value: "“SaWaDiKa” — released September 3, 2026",
  },
  {
    label: "Upcoming EP",
    value: "“PRESS PLAY” — out October 23, 2026",
  },
];

const soloTimeline = [
  {
    year: "2026",
    text: "Releases the solo single “SaWaDiKa” on September 3, distributed worldwide through RCA Records under her own label, LLOUD Co.",
  },
  {
    year: "2026",
    text: "Prepares to release “PRESS PLAY,” her upcoming EP, on October 23, with “SaWaDiKa” as its lead single.",
  },
];

const singleFacts = [
  {
    label: "Release",
    value: "Thursday, September 3, 2026 (digital single)",
  },
  {
    label: "Label / Distribution",
    value: "LLOUD Co., distributed worldwide through RCA Records",
  },
  {
    label: "Part of",
    value: "Lead single from the upcoming EP “PRESS PLAY,” out October 23, 2026",
  },
  {
    label: "Music video",
    value: "Directed by Bang Jae Yeob, filmed in Bangkok",
  },
];

const whyPeopleCare = [
  "“SaWaDiKa” is not really a stand-alone single — it's the first song out from PRESS PLAY, the EP LISA has set for October 23. That gives it a different job than most single releases: it's an opening chapter, not the whole story.",
  "LISA now puts her music out through her own label, LLOUD Co., with RCA Records handling distribution outside Korea. That's the same kind of setup JENNIE built with Odd Atelier and JISOO built with Blissoo, which makes LISA the third of BLACKPINK's four members running her solo career this way. If you assumed BLACKPINK's solo releases all still went through one shared company, this is the update: each member now has her own label behind her own music.",
  "The official video was directed by Bang Jae Yeob and filmed in Bangkok, described in coverage of the release as LISA's hometown. Her videos have often leaned on elaborate sets, so shooting somewhere personal like this changes how the song is being presented.",
  "September turned into a busy month for BLACKPINK's individual releases — JISOO put out “CLICK” just one day after “SaWaDiKa.” If you are new to the group, that's worth knowing: even when BLACKPINK is not promoting together, its four members are often still releasing music, just on their own separate schedules.",
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
    label: "BLACKPINK member profile",
    title: "Meet JENNIE, another BLACKPINK member with her own label",
    description:
      "JENNIE built her own label, Odd Atelier, before LISA started LLOUD — this profile covers her solo run and 2026 EP Fallen Angel.",
    href: "/kpop/jennie",
  },
  {
    label: "BLACKPINK member profile",
    title: "Meet JISOO, another BLACKPINK member with her own label",
    description:
      "JISOO runs her solo career through her own label, Blissoo — this profile covers her English-language single CLICK.",
    href: "/kpop/jisoo",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/lisa",
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

export default function LisaProfilePage() {
  const featuredMedia = getMediaItems().find(
    (item) => item.id === "lisa-sawadika-official-mv"
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
          name: "LISA",
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
          name: "LISA",
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
              LISA
            </h1>

            <p className="mt-3 text-lg font-medium text-[var(--muted)]">
              Solo artist · BLACKPINK member · SaWaDiKa (2026)
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
                  A few basics before you get into “SaWaDiKa.”
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
                  key={item.year + item.text}
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
              SaWaDiKa
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
                “SaWaDiKa” works less like a one-off release and more like a
                preview. LISA has set October 23 for “PRESS PLAY,” her
                upcoming EP, and this single is the first piece of it fans
                have actually heard. That is a common way for K-pop artists
                to build up to a bigger release — put out a lead single
                first, then follow with the full project a few weeks later.
              </p>

              <p>
                The way LISA is putting the song out also says something
                about how BLACKPINK's solo careers have developed. She
                releases “SaWaDiKa” through her own label, LLOUD Co., with
                RCA Records distributing it worldwide. JENNIE has Odd
                Atelier and JISOO has Blissoo, so LISA becomes the third of
                BLACKPINK's four members to run her solo music through a
                company of her own rather than through one label shared by
                the whole group. If your picture of BLACKPINK's solo era is
                still “one agency handles everyone,” this is the part that
                has changed.
              </p>

              <p>
                The official music video was directed by Bang Jae Yeob and
                filmed in Bangkok — described in coverage of the release as
                LISA's hometown. For an artist whose videos have often been
                built around big, constructed sets, filming somewhere with
                that kind of personal tie is a smaller detail worth
                noticing, since it puts a different frame around a song that
                could otherwise read as just another single rollout.
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
                  currentPath="/kpop/lisa"
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
