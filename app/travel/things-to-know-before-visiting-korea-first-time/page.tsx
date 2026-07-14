import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/things-to-know-before-visiting-korea-first-time`;

const pageTitle =
  "Things to Know Before Visiting Korea for the First Time: Local-Friendly Travel Tips";
const pageDescription =
  "A practical HAEMIL guide to what first-time visitors should know before traveling to Korea, including Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and local tips.";

const quickAnswer = [
  "Best thing to prepare: Naver Map or KakaoMap",
  "Best transport habit: use subway as your base",
  "Biggest Seoul mistake: crossing the city too many times in one day",
  "Rush hour warning: subway and roads can both be crowded",
  "Taxi tip: useful sometimes, but not always faster",
  "Food tip: ordering systems vary by restaurant",
  "Cost tip: famous tourist areas are convenient but often cost more",
  "Local mindset: plan less tightly and leave room for small surprises",
];

const relatedGuides = [
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
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "How to use the Korean subway",
    description:
      "A local-friendly first guide to Korean subway rides, T-money cards, transfers, station signs, apps, etiquette, and simple mistakes to avoid.",
    href: "/travel/how-to-use-korean-subway",
  },
  {
    label: "Travel guide",
    title: "How to use a T-money card in Korea",
    description:
      "A local-friendly guide to buying, recharging, tapping, transferring, and avoiding common T-money mistakes on Korean subways and buses.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "Naver Map and KakaoMap travel guide",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
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
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/things-to-know-before-visiting-korea-first-time",
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

export default function ThingsToKnowBeforeVisitingKoreaFirstTimePage() {
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
          name: "First-time visitors",
        },
        {
          "@type": "Thing",
          name: "Seoul travel tips",
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
          name: "Things to know before visiting Korea",
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
              Korea can feel both easy and confusing on a first trip — connected
              and convenient, but with small systems that work differently from
              what many visitors expect. This is practical prep, not a warning
              list: a few things to know before you arrive can make the first days
              much smoother.
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
                  Maps work differently, restaurants use different ordering
                  systems, subway stations can be huge, famous areas often cost
                  more, and taxis are not always faster — a day that looks simple
                  on your phone can feel tiring once you are walking the city.
                  Korea is very rewarding to visit; these are the small frictions
                  worth knowing upfront.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Prepare Naver Map or KakaoMap
                </h2>

                <p>
                  Prepare Naver Map or KakaoMap — Google Maps helps for general
                  searching, but local apps are usually better for routes, subway
                  exits, buses, and walking directions. In Seoul, the right exit
                  can save a lot of walking; exit 2 and exit 8 may put you on
                  opposite sides of a wide road. Follow exit guidance rather than
                  relying on memory or screenshots alone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Use the subway as your base
                </h2>

                <p>
                  Use the subway as your main transport base — it connects
                  Myeongdong, Hongdae, Jongno, Gangnam, Jamsil, Seoul Station,
                  and Dongdaemun predictably, even when crowded or transfer-heavy.
                  Taxis help with heavy luggage, late nights, or bad weather, but
                  during rush hour or rain they can stall while the subway stays
                  more reliable. Subway for most city movement; taxi when it
                  actually reduces stress.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Rush hour
                </p>

                <p>
                  Weekday rush hour fills subway cars, stations, buses, and roads
                  — if you can, wait with coffee or a slower breakfast, start
                  sightseeing after the worst crowd, or stay near dinner instead
                  of crossing the city late. A small timing shift makes Seoul feel
                  much easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Group nearby areas
                </h2>

                <p>
                  Planning too many distant areas in one day is a common mistake
                  — Seoul is connected but big. Palace morning, Gangnam afternoon,
                  Hongdae evening, and Jamsil at night can turn the day into
                  transportation. Group nearby spots: Myeongdong, Namsan, Euljiro,
                  Jongno, Insadong, and palaces; Hongdae, Yeonnam, and Mangwon;
                  Gangnam, Sinsa, COEX, and Jamsil depending on your plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Famous areas and costs
                </h2>

                <p>
                  Famous areas like Myeongdong, Hongdae, Gangnam, Insadong, and
                  Jamsil are convenient and full of options, but food, cafes,
                  shopping, and hotels on the busiest streets often cost more.
                  That trade-off can be worth it on a first trip; for better value,
                  try one or two streets away from the main road or staying one
                  or two subway stops from the famous station.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Choose by station, not only by name
                </h2>

                <p>
                  Choose your hotel by station, not only neighborhood name — three
                  minutes from a useful line beats a famous address with a long
                  uphill walk with luggage. You will walk inside stations, from
                  exits, through markets, palace grounds, and cafe alleys more
                  than expected; comfortable shoes matter.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ordering food
                </h2>

                <p>
                  Restaurant ordering varies — staff may take your order, or you
                  may use a kiosk, tablet, pay-first system, or pay at the counter
                  after eating. Self-service water corners and table bells are
                  common; look around before you panic, check for a language
                  button on kiosks, and take side dishes in reasonable amounts.
                  Korean restaurants get easier after a few tries.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spice, convenience stores, and cafes
                </h2>

                <p>
                  Not all Korean food is spicy, but spicy dishes are common and
                  intensity varies — if you are sensitive, start with gentler
                  options like gimbap, kalguksu, gukbap, dumplings, or non-spicy
                  noodles. Convenience stores are more useful than many visitors
                  expect for breakfast, late-night food, triangle gimbap, and
                  small travel needs when you are tired or between plans. Cafes
                  are part of the experience too — good for rest and planning —
                  but famous-area cafes can be expensive when you are paying for
                  atmosphere and location.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Weather and flexibility
                </h2>

                <p>
                  Weather reshapes the trip — summer heat and humidity, winter
                  cold and dryness, spring and autumn crowds on popular walking
                  routes, rainy days that slow taxis and roads. Build flexible
                  indoor options like cafes, malls, museums, or food courts
                  rather than an itinerary that needs perfect weather every day.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Not everything is effortless
                </p>

                <p>
                  Korea is convenient, but not every moment is effortless — wrong
                  subway exit, kiosk confusion, a restaurant that is not what you
                  expected, walking farther than the app suggested, or a famous
                  place too crowded so you pick somewhere nearby instead. That is
                  normal; a good first trip does not have to be perfect.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  A good first Korea trip leaves a little space — local map apps,
                  subway as your base, fewer unnecessary city-crossings, taxis
                  when they truly help, realistic expectations about famous-area
                  prices, and room for convenience store meals and unplanned
                  streets. Plan enough to feel safe; leave enough room to enjoy
                  the city without controlling every minute.
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
