import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/korea-arrival-day-checklist-first-time`;

const pageTitle =
  "Korea Arrival Day Checklist for First-Time Visitors: Airport, Internet, Transport, and First Meal";
const pageDescription =
  "A practical HAEMIL arrival-day checklist for first-time Korea visitors, covering airport arrival, SIM or eSIM setup, Wi-Fi, maps, transport, hotel check-in, first meal, and local tips.";

const quickAnswer = [
  "Keep arrival day light: get connected, get to your stay, eat something easy, learn your neighborhood",
  "Internet first: confirm eSIM, SIM, roaming, or pocket Wi-Fi before leaving the airport area",
  "Maps: open Naver Map or KakaoMap and check your route and station exit before moving",
  "Transport: choose based on energy and luggage, not price alone",
  "Check-in: do not overplan sightseeing before you can drop luggage",
  "Neighborhood: find the nearest subway station, convenience store, and simple meal spot",
  "First meal: keep it easy — gimbap, noodles, soup, convenience store food, or food court",
  "Tonight: charge your phone, save your hotel address, and check the weather for tomorrow",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Korea SIM, eSIM, and Wi-Fi guide",
    description:
      "A practical first-time Korea internet guide comparing SIM cards, eSIMs, pocket Wi-Fi, roaming, cafe Wi-Fi, public Wi-Fi, phone numbers, and power bank tips.",
    href: "/travel/korea-sim-esim-wifi-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "A practical guide to Korean apps travelers may actually use, from Naver Map, KakaoMap, Papago, Kakao T, and subway apps to Baemin, CatchTable, Yanolja, and Yeogi Eottae.",
    href: "/travel/korea-travel-apps-first-time",
  },
  {
    label: "Travel guide",
    title: "How to get from Incheon Airport to Seoul",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
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
    title: "How to use a T-money card in Korea",
    description:
      "A local-friendly guide to buying, recharging, tapping, transferring, and avoiding common T-money mistakes on Korean subways and buses.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
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
    canonical: "/travel/korea-arrival-day-checklist-first-time",
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

export default function KoreaArrivalDayChecklistFirstTimePage() {
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
          name: "Korea arrival day",
        },
        {
          "@type": "Thing",
          name: "Korea travel checklist",
        },
        {
          "@type": "Thing",
          name: "First time Korea",
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
          name: "Korea arrival day checklist",
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
              Your first day in Korea does not need to be packed. In fact, it
              should not be. Arrival day is when small things take more energy
              than expected — internet, luggage, check-in, your first meal, and a
              new subway system all at once. The best plan is simple: get
              connected, get to your stay, eat something easy, learn your
              neighborhood, and sleep well.
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
                  Simple arrival-day plan
                </p>

                <p>
                  Get connected, reach your stay, eat something easy, learn your
                  neighborhood, sleep — that is a full arrival day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  1. Check your internet before leaving the airport
                </h2>

                <p>
                  Confirm eSIM, SIM, roaming, or pocket Wi-Fi works before you
                  leave the airport area — Korea has plenty of Wi-Fi in hotels,
                  cafes, and stations (often on the wall, counter, or receipt),
                  but you need data while moving on day one.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  2. Open your map app before you start moving
                </h2>

                <p>
                  Open Naver Map or KakaoMap, search your stay, and check the
                  route, station, and exit before you start moving — the wrong
                  exit can mean a long walk with luggage.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  3. Choose airport transport based on your energy
                </h2>

                <p>
                  Pick transport by energy and luggage, not price alone — airport
                  train if your stay is near a useful station, bus if the stop is
                  close, taxi if you are late or loaded down. Taxis are not always
                  fastest; traffic and rain can slow them too.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  4. Do not overplan sightseeing before check-in
                </h2>

                <p>
                  Even if you land early, dragging luggage across the city before
                  check-in makes the day heavy. Ask your stay to hold bags if they
                  can; if not, look for a simple nearby option — but keep arrival
                  day light, not packed with sightseeing.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  5. Learn the area around your stay
                </h2>

                <p>
                  Find your nearest station exit, convenience store, and one
                  simple place to eat — small details that make the rest of the
                  trip easier. A convenience store run gives you water, snacks,
                  and a first taste of daily Korea without a full restaurant
                  order.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  6. Choose an easy first meal
                </h2>

                <p>
                  Keep the first meal simple — gimbap, noodles, soup, convenience
                  store food, or something near the hotel. Korean BBQ can wait
                  until you have energy and know how ordering works.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  7. Avoid crossing the city on arrival day
                </h2>

                <p>
                  Stay near your neighborhood on day one — one area, a short
                  walk, food, rest. Crossing Myeongdong, Hongdae, and Gangnam in
                  one evening with jet lag rarely pays off.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  8. Prepare your phone for the next morning
                </h2>

                <p>
                  Charge your phone and power bank, save your hotel address and
                  tomorrow&apos;s route, check the weather — rental battery
                  stations exist in busy areas, but starting with your own charge
                  is easier.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best arrival day is smooth, not impressive — arrive safely,
                  learn your block, eat something, sleep. Korea gets easier after
                  the first night; starting exhausted makes everything harder.
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
