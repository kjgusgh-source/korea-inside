import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/best-time-to-visit-korea-first-time`;

const pageTitle =
  "Best Time to Visit Korea for First-Time Visitors: Seasons, Weather, Crowds, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to the best time to visit Korea for first-time travelers, comparing spring, summer, autumn, and winter by weather, crowds, costs, clothing, and travel style.";

const quickAnswer = [
  "Best overall seasons: Spring and autumn",
  "Best for comfortable walking: Autumn",
  "Best for flowers and bright city mood: Spring",
  "Best for lower-pressure city travel: Winter, if you can handle cold",
  "Most tiring season for walking: Summer",
  "Main crowd warning: Spring flowers and autumn foliage can make popular areas busy",
  "Cost warning: popular seasons and famous areas can cost more",
  "Local tip: choose the season that matches your walking style, not only the prettiest photos",
];

const relatedGuides = [
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "3 days in Seoul itinerary for first-time visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
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
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/best-time-to-visit-korea-first-time",
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

export default function BestTimeToVisitKoreaFirstTimePage() {
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
          name: "Best time to visit Korea",
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
          name: "Best time to visit Korea",
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
              If you are visiting Korea for the first time, the best time to go
              is usually spring or autumn — but neither is perfect for everyone.
              Korea has four clear seasons, and each one changes how walking,
              crowds, and daily plans feel. Pick the season that matches your
              energy, not only the photos you saw online.
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
              <div className="space-y-4">
                <p>
                  Korea has four clear seasons, and each one changes how the trip
                  feels — spring bright and fresh, summer hot and humid, autumn
                  clear and easy to walk in, winter cold and dry but cozy in its
                  own way. Match the season to what you want: flowers, comfortable
                  walking, summer night energy, warm food and cafes, or lower-pressure
                  sightseeing — not only the prettiest photos online.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Autumn
                </h2>

                <p>
                  For many first-time visitors, autumn is the easiest season —
                  comfortable walking weather, clearer air, and outdoor plans that
                  feel less tiring than summer. Palaces, Insadong, Hongdae,
                  Myeongdong, and Seongsu are easier to explore on foot. The
                  trade-off is popularity: fall colors and good weather draw
                  crowds, and hotels, cafes, and photo spots can feel busier
                  during peak travel periods.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spring
                </h2>

                <p>
                  Spring is a favorite too — the city feels lighter after winter,
                  with flowers, palace grounds, and cafe streets that photograph
                  well. Flower timing shifts every year, famous blossom spots get
                  crowded, and weather can swing from warm to chilly, dusty, or
                  rainy. Treat spring as a mood, not a guarantee; build flexible
                  plans rather than one fixed flower date.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Summer
                </h2>

                <p>
                  Summer can be fun but tiring — hot, humid, and heavy on outdoor
                  walking. Subway stations and shopping streets feel sticky when
                  the weather is at its worst. Nights stay lively, cafes and
                  convenience stores become useful, and indoor plans like malls,
                  museums, and food courts can save the day. Plan gently: leave
                  room for air-conditioning breaks, and remember rain can slow
                  taxis and make walking routes less comfortable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Winter
                </h2>

                <p>
                  Winter is cold but can suit travelers who prefer a calmer mood
                  — dry, sharp Seoul with more time in cafes, restaurants, malls,
                  and museums. Korean soups, stews, street snacks, and hot drinks
                  hit differently. The trade-off is outdoor sightseeing: palace
                  walks and night views need proper clothing and shorter outdoor
                  blocks. Good if you can handle cold and want warm food, shopping,
                  and fewer outdoor expectations.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Quick season guide
                </p>

                <p>
                  Autumn for comfort, spring for a bright pretty mood, winter
                  for a calmer city trip if you can handle cold — and summer
                  only if you are willing to slow down and you do not mind heat,
                  humidity, or rain.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cost and crowds
                </h2>

                <p>
                  Popular travel periods can push up hotels and flights,
                  especially in Myeongdong, Hongdae, Gangnam, Insadong, Seoul
                  Station, and Jamsil during spring and autumn. Book with clear
                  expectations; if budget matters, look at practical station
                  access and stays one or two subway stops from the busiest area.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Match the season to your itinerary
                </h2>

                <p>
                  Palaces, walking streets, and outdoor views usually feel better
                  in spring or autumn. Shopping, cafes, food, beauty, museums, and
                  malls can work in winter or summer too. If you hate crowds, skip
                  building the trip around the most famous seasonal photo spots; if
                  you hate heat, do not pack summer with outdoor-only days; if you
                  hate cold, winter&apos;s calmer mood may not be worth the
                  trade-off. Choose the season that matches your daily energy, not
                  only photos online.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Walking and comfort
                </h2>

                <p>
                  Korea is a walking-heavy destination — subway stations, markets,
                  palace grounds, hills, and shopping streets add up. The same
                  place feels different in good walking weather versus heavy rain,
                  freezing wind, or summer heat. Myeongdong, palaces, and Hongdae
                  at night all change with what your body can handle.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best time to visit is not only the prettiest season — it is
                  the one that lets you enjoy the trip without fighting weather
                  all day. Spring and autumn work for most first-timers; autumn
                  is probably the easiest for walking, spring needs flexible
                  plans, summer needs slower pacing, winter needs warm clothes
                  and more indoor breaks. Match comfort, budget, and itinerary —
                  that beats chasing the perfect travel photo.
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
