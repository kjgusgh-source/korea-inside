import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/what-to-wear-in-korea-by-season`;

const pageTitle =
  "What to Wear in Korea by Season: A Practical Packing Guide for First-Time Visitors";
const pageDescription =
  "A practical HAEMIL guide to what to wear in Korea by season, with spring, summer, autumn, and winter clothing tips, comfortable shoes, rain, subway walking, and local travel notes.";

const quickAnswer = [
  "Best year-round rule: Comfortable shoes matter more than perfect outfits.",
  "Spring: Light layers, jacket, comfortable walking shoes.",
  "Summer: Breathable clothes, rain-friendly items, sun protection.",
  "Autumn: Layers, light jacket or knit, good walking shoes.",
  "Winter: Warm coat, scarf, gloves, heat-friendly layers.",
  "Rain tip: Pack or buy a small umbrella.",
  "Subway tip: Avoid shoes that hurt after stairs and transfers.",
  "Local tip: Korea can be stylish, but travel comfort matters first.",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Best time to visit Korea for first-time visitors",
    description:
      "A practical first-time Korea travel guide comparing spring, summer, autumn, and winter by weather, crowds, costs, clothing, and travel style.",
    href: "/travel/best-time-to-visit-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Is Korea expensive to visit?",
    description:
      "An honest first-time traveler's guide to Korea costs, with Seoul hotels, tourist areas, food, cafes, transport, taxis, shopping, and better-value local tips.",
    href: "/travel/is-korea-expensive-to-visit-first-time",
  },
  {
    label: "Travel guide",
    title: "How to get around Seoul for first-time visitors",
    description:
      "A practical Seoul transport guide for first-time visitors, with subway, taxi, rush hour, airport routes, walking, maps, and local trade-offs.",
    href: "/travel/how-to-get-around-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "What to buy in Korea for the first time",
    description:
      "A practical first-time Korea shopping guide with skincare, snacks, stationery, fashion, traditional souvenirs, convenience store finds, and honest local tips.",
    href: "/travel/what-to-buy-in-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/what-to-wear-in-korea-by-season",
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

export default function WhatToWearInKoreaBySeasonPage() {
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
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "Packing for Korea",
        },
        {
          "@type": "Thing",
          name: "Korea weather",
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
          name: "What to wear in Korea by season",
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
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              What you wear in Korea matters more than you might expect — not
              because there is one strict outfit rule, but because you will walk
              a lot: subway stairs, palace grounds, market alleys, and long
              station transfers. A cute outfit is nice; comfortable shoes matter
              more.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick answer
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickAnswer.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-8 text-base leading-8 text-[var(--muted)] md:text-lg">
              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  The easiest rule
                </p>

                <p>
                  Dress for walking first, style second. You will climb subway
                  stairs, cross markets, walk palace grounds, and transfer between
                  stations for hours — Korea can look stylish in Hongdae, Seongsu,
                  Gangnam, and department-store districts, but as a visitor you
                  are moving all day, not living one calm local routine. Clothes
                  should help the trip, not fight it.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spring
                </h2>

                <p>
                  Spring can feel bright and pretty, but weather shifts — warm
                  afternoons, cool mornings and nights, rain or dust on some days.
                  Pack light layers: jacket, cardigan, thin knit, or hoodie you
                  can remove midday and put back on at night. Comfortable walking
                  shoes matter because spring draws palace, park, and flower walks.
                  Cherry blossom photos online can make the season look softer
                  than it feels; bring layers, not only light clothes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Summer
                </h2>

                <p>
                  Summer is hot, humid, and tiring — breathable clothes, light
                  fabrics, comfortable sneakers or sandals, sun protection, and
                  rain-friendly items help most. A small umbrella is useful; you
                  can buy one at convenience stores, though prices vary. The main
                  mistake is planning too much outdoor walking in clothes that
                  trap heat or shoes that hurt — build in cafe breaks, malls,
                  museums, and convenience store rests, and move more gently.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Autumn
                </h2>

                <p>
                  Autumn is usually the easiest season for clothing — comfortable
                  for walking, sightseeing, and cafe hopping with a light jacket,
                  knit, or layered outfit. Mornings and evenings can still cool
                  down, so layering beats packing one type of outfit. Popular
                  areas get crowded in peak autumn travel; comfortable shoes matter
                  because you may stand and walk more than planned.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Winter
                </h2>

                <p>
                  Winter is cold and dry — a warm coat, scarf, gloves, thick
                  socks, and comfortable shoes help if you are not used to Korean
                  winter. Layers matter because you move from cold streets into
                  heated subways, cafes, malls, and restaurants; an outfit that
                  works outside should still feel manageable indoors. Palace walks
                  and night views get harder if you are underdressed — comfort
                  beats looking perfect.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Shoes matter most
                </p>

                <p>
                  Shoes can make or break a Korea trip. Seoul means subway stairs,
                  long station corridors, hills, uneven alleys, palace grounds,
                  markets, and shopping streets — even with public transport, you
                  walk more than expected. Bring shoes you already trust, not
                  brand-new pairs or thin soles for long days. If you want
                  stylish shoes, pick ones that still work after transfers and a
                  full day outside.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Rain and shopping
                </h2>

                <p>
                  Pack for rain — a small umbrella, light rain jacket, or shoes
                  that handle wet weather. Convenience stores sell umbrellas, but
                  coming somewhat prepared helps. Rain can slow taxis too, so
                  rainy-day outfits should work for subway movement. You can buy
                  socks, basic clothes, umbrellas, and travel goods in Korea, but
                  tourist areas like Myeongdong, Hongdae, Gangnam, Seongsu, and
                  major malls may cost more than quieter shops.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple packing mindset
                </p>

                <p>
                  Simple first-time packing: comfortable shoes, layers, rain
                  prep, season-appropriate clothes with room for weather shifts.
                  Skip heavy packing unless it is winter, and skip suitcases
                  full of photo-only outfits — you will probably buy a few things
                  during the trip anyway.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best Korea travel outfit is the one that still feels good
                  after subway stairs, a palace walk, shopping, a cafe stop, one
                  wrong station exit, and one extra street you did not plan.
                  Style is welcome; comfort is the base. Korea is more fun when
                  you have energy left at night.
                </p>
              </div>
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
