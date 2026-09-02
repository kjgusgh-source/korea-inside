import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/korea-autumn-foliage-guide`;

const pageTitle =
  "Korea Autumn Foliage 2026: When and Where to See Fall Colors";
const pageDescription =
  "A practical HAEMIL guide to Korea's 2026 autumn foliage season — how the colors move from northern mountains to the southern coast, and how to time a trip around it.";

const heroImage = {
  src: "/images/travel/korea-autumn-foliage/korea-autumn-foliage.webp",
  alt: "Autumn foliage colors across a hillside in Korea.",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const leavesImage = {
  src: "/images/travel/korea-autumn-foliage/korean-autumn-leaves.webp",
  alt: "Close-up of red and orange autumn leaves in Korea.",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "General pattern: colors move north to south, and high mountains to lower cities, over several weeks",
  "Earliest color: northern mountain areas such as Seoraksan and Odaesan, typically late September to mid-October",
  "Mid-season: Seoul and central Korea, typically late October to early November",
  "Latest color: southern regions such as Busan and Naejangsan, typically mid-to-late November",
  "Official forecast: Korea's weather agency (KMA) usually releases its own foliage forecast in early September — treat any dates before that as travel-industry estimates, not confirmed figures",
  "This guide covers general timing and regions, not a full map — pair it with a maps app once you pick a destination",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Best Time to Visit Korea for First-Time Visitors",
    description:
      "A practical HAEMIL guide comparing spring, summer, autumn, and winter by weather, crowds, costs, clothing, and travel style.",
    href: "/travel/best-time-to-visit-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "What to Wear in Korea by Season",
    description:
      "Packing for Seoul walks — comfortable shoes, subway stairs, rain layers, and what to wear season by season without overpacking.",
    href: "/travel/what-to-wear-in-korea-by-season",
  },
  {
    label: "Travel",
    title: "Open the Travel hub",
    description:
      "Map-friendly HAEMIL guides for exploring Korea through neighborhoods, food, local routes, and small details that make a trip easier to understand.",
    href: "/travel",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/korea-autumn-foliage-guide",
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
export default function KoreaAutumnFoliageGuidePage() {
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
          name: "Korea autumn foliage",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "Fall foliage Korea 2026",
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
          name: "Travel",
          item: `${siteUrl}/travel`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Korea autumn foliage 2026",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
          <SiteHeader />

          <article className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/travel"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Travel
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Travel guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Korea Autumn Foliage 2026: When and Where to See Fall Colors
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Autumn foliage in Korea does not arrive all at once. It moves
              down the map over several weeks, starting in the northern
              mountains and finishing along the southern coast — so the right
              time to go really depends on which part of the country you are
              visiting.
            </p>
          </article>

          <PostImageFigure image={heroImage} variant="hero" priority />

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                The easiest way to think about Korean autumn foliage is as a
                slow wave moving from north to south, and from high ground to
                low ground. Northern mountain areas — Seoraksan and Odaesan
                are the two most talked about — usually turn first, from late
                September into mid-October. A handful of international travel
                sites have already published 2026 predictions with narrower
                date ranges for these mountains, but those are travel-industry
                estimates, not an official forecast. Korea's own weather
                agency, the KMA, typically publishes its official autumn
                foliage forecast in early September, so it is worth checking
                that directly if you want the most current read closer to
                your trip.
              </p>

              <PostImageFigure
                image={leavesImage}
                variant="inline"
                align="right"
              />

              <p>
                Once the color starts moving south, Seoul and the rest of
                central Korea are next, generally landing somewhere in late
                October to early November. This is the stretch most
                first-time visitors end up seeing, since it overlaps with a
                lot of standard Korea itineraries. Expect city parks,
                palace grounds, and hillside trails to fill up with both
                color and crowds during this window — the same popular-area
                crowding that shows up during cherry blossom season in
                spring, just with reds and oranges instead of pink.
              </p>

              <p>
                Southern regions, including Busan and areas like Naejangsan,
                turn last, typically in the mid-to-late November range. If
                your trip falls later in the season, heading south is
                generally your better bet for still catching color once
                Seoul has already passed peak.
              </p>

              <p>
                One honest caveat worth repeating: none of the specific dates
                above are locked in this far ahead of the season. Korean
                autumn foliage forecasts shift from year to year based on
                temperature and rainfall, and the closer estimates only
                firm up once the KMA releases its own numbers. If your travel
                dates are flexible, it is worth checking an updated forecast
                a few weeks before you go rather than booking everything
                around a prediction made months in advance.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related travel guides
                </h2>
              </div>

              <Link
                href="/travel"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Travel →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--celadon)]">
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
