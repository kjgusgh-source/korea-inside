import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/is-korea-expensive-to-visit-first-time`;

const pageTitle =
  "Is Korea Expensive to Visit? A First-Time Traveler's Honest Cost Guide";
const pageDescription =
  "A practical HAEMIL guide to whether Korea feels expensive for first-time visitors, covering Seoul hotels, tourist areas, food, cafes, transport, taxis, shopping, convenience stores, and budget trade-offs.";

const quickAnswer = [
  "Short answer: Korea can be affordable or expensive depending on travel style.",
  "Most expensive part: accommodation in popular areas and busy seasons.",
  "Easy place to overspend: cafes, shopping, taxis, and tourist-heavy streets.",
  "Good-value choices: subway, gimbap, bunsik, soups, convenience stores, food courts.",
  "Taxi caution: useful sometimes, but traffic can make it slower and less efficient.",
  "Local tip: stay near a useful subway station, not only a famous neighborhood name.",
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
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
    title: "3 days in Seoul itinerary for first-time visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
  },
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "Food guide",
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/is-korea-expensive-to-visit-first-time",
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

export default function IsKoreaExpensiveToVisitFirstTimePage() {
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
          name: "Travel budget",
        },
        {
          "@type": "Thing",
          name: "Seoul travel",
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
          name: "Is Korea expensive to visit?",
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
              If you are visiting Korea for the first time, you may wonder whether
              the trip will feel expensive. Korea can feel very convenient and
              reasonable — or pricey — depending on where you stay, how you move,
              and how often you follow famous spots. The useful question is where
              money actually disappears on a first trip.
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
                  Korea can feel reasonable if you use the subway, eat simple
                  local meals, stay near a practical station, and skip chasing
                  every famous cafe or shopping street. It can also feel expensive
                  if you stay in the busiest areas, take taxis often, visit trendy
                  cafes daily, and shop mostly on tourist-heavy streets. Neither
                  story is the whole picture — your travel style decides which
                  one you get.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Accommodation
                </h2>

                <p>
                  For many first-time visitors, accommodation is the biggest
                  cost. Myeongdong, Hongdae, Gangnam, Insadong, Seoul Station,
                  and Jamsil are popular because they sit near subway lines,
                  sightseeing, and restaurants — that convenience has value, but
                  hotels in the busiest spots often cost more, especially in peak
                  seasons. A cheaper stay far from your daily route can look good
                  when booking and feel tiring once you add long transfers every
                  day. Choose by station, not only neighborhood name — three
                  minutes from a useful line beats a famous address with an uphill
                  walk.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Food
                </h2>

                <p>
                  Food can be affordable, but not every meal is cheap. Gimbap,
                  bunsik, soups, noodles, food courts, convenience store meals,
                  and casual local restaurants help balance the budget. Myeongdong,
                  Hongdae, Gangnam, Insadong, and Seongsu are fun, but restaurants
                  and cafes on the busiest streets often charge more for location
                  and atmosphere — sometimes worth it, sometimes you are paying
                  for convenience. Mix in simple meals near your hotel; a local
                  spot on your block can be as satisfying as a viral restaurant
                  across the city.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes and shopping
                </h2>

                <p>
                  Cafes are one of the easiest places to overspend — Korea&apos;s
                  cafe culture is part of the fun, but in trendy areas a stop can
                  feel like a small experience rather than a quick drink, and
                  several visits a day add up fast. Pick one cafe you really want,
                  then use simpler spots or convenience stores for quick drinks.
                  Shopping surprises people too: cosmetics, snacks, stationery,
                  skincare, and character goods are designed to make you keep
                  picking up small things. A loose daily limit in your head helps
                  you enjoy Myeongdong, Hongdae, Gangnam, Seongsu, and major malls
                  without regret later.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Transportation
                </h2>

                <p>
                  Transportation is usually easier to control. The subway is the
                  best base for most first-time visitors — predictable, connected,
                  and workable with a T-money card even during crowded rush hour.
                  Taxis help late at night, in bad weather, or with heavy luggage,
                  but during traffic they can stall and cost more than the subway
                  for the distance. Use taxis as a comfort tool, not your main
                  transport plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience stores and food courts
                </h2>

                <p>
                  Convenience stores are useful beyond emergency snacks — breakfast,
                  late-night food, triangle gimbap, cup ramyeon, lunch boxes, and
                  small travel needs can balance more expensive restaurant or cafe
                  days. Food courts in malls, stations, and department stores make
                  ordering easier when traveling with people who want different
                  foods; not always the cheapest option, but convenient.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Plan your days wisely
                </p>

                <p>
                  Crossing Seoul too much is another budget mistake — long
                  transfers cost time and energy, and tired days lead to more
                  taxis, drinks, and eating wherever is easiest. Group nearby
                  areas: central Seoul one day, old Seoul another, Hongdae and
                  northwest Seoul, Gangnam or Jamsil. Weather matters too; on
                  very hot, cold, or rainy days you may spend more on taxis,
                  cafes, and indoor stops, so flexible plans beat forced outdoor
                  routes.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best budget strategy is not to be cheap all day — it is to
                  choose where spending actually improves the trip. A convenient
                  hotel near a station, a taxi with heavy luggage, or Korean BBQ
                  with friends may be worth it; a taxi stuck in traffic or a
                  random expensive cafe because you are tired may not. Korea is
                  not a place where every good moment has to cost a lot — a warm
                  bowl of soup, gimbap lunch, convenience store snack, or quiet
                  palace walk can be some of the best first-trip memories. Spend
                  where it saves energy; save where the famous option does not
                  really matter.
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
