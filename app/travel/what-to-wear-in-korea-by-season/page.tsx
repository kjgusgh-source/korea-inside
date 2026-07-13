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
              If you are visiting Korea for the first time, what you wear matters
              more than you may expect. Not because Korea has one strict travel
              outfit rule — but because you will probably walk a lot. A cute
              outfit is nice. Comfortable shoes are more important.
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

                <p>Dress for walking first, then style second.</p>

                <p>
                  You will walk inside subway stations. You will walk up and down
                  stairs. You will walk through markets, palaces, shopping
                  streets, cafe alleys, hills, parks, and long station
                  transfers.
                </p>

                <p>
                  Korea can feel stylish, especially in areas like Hongdae,
                  Seongsu, Gangnam, Myeongdong, and department-store districts.
                  But as a visitor, you are not living one calm local day. You
                  are moving from place to place, often for hours.
                </p>

                <p>So your clothes should help the trip, not fight it.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spring
                </h2>

                <p>
                  Spring in Korea can feel bright and pretty, but the weather
                  can shift.
                </p>

                <p>Some days feel warm.</p>

                <p>Some mornings and nights feel cool.</p>

                <p>Rain or dust can also change how the day feels.</p>

                <p>For spring, pack light layers.</p>

                <p>
                  A light jacket, cardigan, thin knit, long-sleeve shirt, or
                  hoodie can be useful. You may take it off during the day and
                  put it back on at night.
                </p>

                <p>
                  Comfortable walking shoes are still important because spring
                  is a popular season for palaces, parks, flowers, and
                  neighborhood walks.
                </p>

                <p>
                  The trade-off is that spring photos online can make the
                  season look softer than it feels in real life.
                </p>

                <p>
                  Do not pack only light clothes because of pretty cherry
                  blossom pictures.
                </p>

                <p>Bring layers.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Summer
                </h2>

                <p>Summer in Korea can be hot, humid, and tiring.</p>

                <p>This is the season when comfort matters most.</p>

                <p>
                  Breathable clothes, light fabrics, comfortable sandals or
                  sneakers, sun protection, and rain-friendly items can help.
                </p>

                <p>
                  Summer rain can affect your plans, and humid days can make
                  long outdoor routes feel harder than expected.
                </p>

                <p>A small umbrella is useful.</p>

                <p>
                  You can also buy one easily in Korea, especially at
                  convenience stores, but prices and availability can vary by
                  area and timing.
                </p>

                <p>
                  The main mistake in summer is planning too much outdoor
                  walking.
                </p>

                <p>
                  If you wear clothes that trap heat or shoes that hurt, the
                  day becomes difficult quickly.
                </p>

                <p>
                  Plan cafe breaks, indoor stops, malls, museums, food courts,
                  or convenience store rests.
                </p>

                <p>
                  Summer can still be fun, but you need to move more gently.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Autumn
                </h2>

                <p>
                  Autumn is usually one of the easiest seasons for clothing.
                </p>

                <p>
                  Many visitors find it comfortable for walking, sightseeing,
                  shopping, and cafe hopping. A light jacket, knit,
                  long-sleeve top, or layered outfit usually works well
                  depending on the day.
                </p>

                <p>
                  Autumn is also a good season for palaces, riverside walks,
                  parks, and neighborhoods.
                </p>

                <p>But it can still get cooler in the morning or evening.</p>

                <p>Do not assume every autumn day feels the same.</p>

                <p>Layering is safer than packing only one type of outfit.</p>

                <p>
                  Autumn can also be a popular travel season, so famous areas
                  may be crowded. Comfortable shoes matter because you may spend
                  more time standing, waiting, or walking than planned.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Winter
                </h2>

                <p>Winter in Korea can feel cold and dry.</p>

                <p>If you are not used to cold weather, winter can surprise you.</p>

                <p>
                  A warm coat, scarf, gloves, thick socks, and shoes that keep
                  your feet comfortable are helpful. Layers matter because
                  indoor spaces can be heated while outside air feels sharp.
                </p>

                <p>
                  You may go from a cold street into a warm subway, cafe, mall,
                  restaurant, or museum.
                </p>

                <p>
                  That temperature difference can feel uncomfortable if your
                  outfit is too heavy or too light.
                </p>

                <p>
                  A good winter outfit should keep you warm outside but still
                  manageable indoors.
                </p>

                <p>
                  Winter is also a good season for warm food, cafes, shopping,
                  museums, malls, and slower city travel.
                </p>

                <p>The trade-off is outdoor sightseeing.</p>

                <p>
                  Palace walks, night views, and long neighborhood routes can
                  feel harder if you are underdressed.
                </p>

                <p>Comfort matters more than looking perfect.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Shoes matter most
                </p>

                <p>Shoes deserve their own section.</p>

                <p>
                  For a Korea trip, shoes can make or break the day.
                </p>

                <p>
                  Seoul has many subway stairs, station corridors, hills,
                  uneven alleys, palace grounds, markets, and long shopping
                  streets. Even if you use public transport, you may walk much
                  more than expected.
                </p>

                <p>Avoid bringing only new shoes.</p>

                <p>Avoid shoes that look good but hurt after one hour.</p>

                <p>Avoid thin soles if you plan long walking days.</p>

                <p>Bring shoes you already trust.</p>

                <p>
                  If you want stylish shoes, choose the pair that still works
                  after subway transfers and a full day outside.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Rain and shopping
                </h2>

                <p>Rain is also worth planning for.</p>

                <p>
                  A small umbrella, light rain jacket, or shoes that do not
                  become miserable in wet weather can help. Korea has many
                  convenience stores, so buying an umbrella is usually possible,
                  but it is still better not to be completely unprepared.
                </p>

                <p>
                  Rain can also make taxis harder to catch and roads slower.
                </p>

                <p>
                  So a rainy-day outfit should be comfortable enough for subway
                  movement too.
                </p>

                <p>For shopping, Korea is useful if you forget something.</p>

                <p>
                  You can find socks, basic clothes, skincare, umbrellas, heat
                  items, cooling items, and travel goods in many areas.
                </p>

                <p>
                  But do not assume buying everything after arrival is always
                  cheaper.
                </p>

                <p>
                  Famous shopping areas like Myeongdong, Hongdae, Gangnam,
                  Seongsu, Insadong, and major malls can be convenient, but they
                  can also cost more because of location and demand.
                </p>

                <p>If you need something, buy it.</p>

                <p>
                  But do not rely on tourist-area shopping as your whole packing
                  plan.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple packing mindset
                </p>

                <p>A simple first-time packing mindset is:</p>

                <p>Bring comfortable shoes.</p>

                <p>Bring layers.</p>

                <p>Prepare for rain.</p>

                <p>
                  Dress for the season, but leave room for weather changes.
                </p>

                <p>Do not overpack heavy clothes unless it is winter.</p>

                <p>Do not pack only photo outfits.</p>

                <p>
                  And do not forget that you will probably buy a few things
                  during the trip.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best Korea travel outfit is not the
                  trendiest one.
                </p>

                <p>It is the outfit that still feels good at night.</p>

                <p>After subway stairs.</p>

                <p>After a palace walk.</p>

                <p>After a cafe stop.</p>

                <p>After shopping.</p>

                <p>After one wrong station exit.</p>

                <p>After standing in a line.</p>

                <p>After walking one more street than you planned.</p>

                <p>Korea is fun when you have energy left.</p>

                <p>So wear clothes that help you keep that energy.</p>

                <p>Style is welcome.</p>

                <p>Comfort is the base.</p>
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
