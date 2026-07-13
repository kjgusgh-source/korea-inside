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

                <p>Get connected.</p>

                <p>Get to your stay.</p>

                <p>Eat something easy.</p>

                <p>Learn your neighborhood.</p>

                <p>Sleep well.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  1. Check your internet before leaving the airport
                </h2>

                <p>
                  First, check your internet before leaving the airport area.
                </p>

                <p>If you are using eSIM, make sure it is working.</p>

                <p>
                  If you are using a SIM card, make sure your phone has data.
                </p>

                <p>
                  If you are using roaming, check that your maps and messages
                  load.
                </p>

                <p>
                  If you are using pocket Wi-Fi, make sure it is charged and
                  connected.
                </p>

                <p>
                  Korea has a lot of Wi-Fi, especially in hotels, cafes, malls,
                  stations, and many indoor places. In cafes, the Wi-Fi name and
                  password are often written on the wall, near the counter, or
                  on the receipt.
                </p>

                <p>
                  But on arrival day, you do not want to depend only on finding
                  free Wi-Fi.
                </p>

                <p>You need data while moving.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  2. Open your map app before you start moving
                </h2>

                <p>Second, open your map app before you start moving.</p>

                <p>Use Naver Map or KakaoMap if you can.</p>

                <p>Search your hotel or stay.</p>

                <p>Check the route.</p>

                <p>Check the subway station or airport bus stop.</p>

                <p>Check the exit if you are using the subway.</p>

                <p>
                  A station exit can make a big difference in Korea.
                </p>

                <p>
                  The wrong exit can add a long walk with luggage.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  3. Choose airport transport based on your energy
                </h2>

                <p>
                  Third, choose airport transport based on your energy, not only
                  price.
                </p>

                <p>
                  Airport trains can be good if your stay is near a useful
                  station.
                </p>

                <p>
                  Airport buses can be more comfortable if the stop is close to
                  your hotel.
                </p>

                <p>
                  Taxis can help if you have a lot of luggage, arrive late, or
                  travel with family.
                </p>

                <p>But taxis are not always fastest.</p>

                <p>
                  Traffic, rain, rush hour, or events can make roads slow.
                </p>

                <p>
                  Do not assume a taxi is always the easiest answer.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  4. Do not overplan sightseeing before check-in
                </h2>

                <p>
                  Fourth, do not overplan sightseeing before check-in.
                </p>

                <p>
                  Even if your flight arrives early, dragging luggage around
                  the city can make the day feel heavy.
                </p>

                <p>
                  If you cannot check in yet, ask whether your stay can hold
                  luggage.
                </p>

                <p>
                  If not, look for a simple luggage option nearby, but do not
                  build your whole first day around complicated movement.
                </p>

                <p>
                  Arrival day is not the best day for a packed itinerary.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  5. Learn the area around your stay
                </h2>

                <p>Fifth, learn the area around your stay.</p>

                <p>Find the nearest subway station.</p>

                <p>Find the nearest convenience store.</p>

                <p>Find one simple restaurant or cafe.</p>

                <p>Check where the main road is.</p>

                <p>Check which station exit gets you home.</p>

                <p>
                  This sounds small, but it makes the rest of the trip easier.
                </p>

                <p>
                  A convenience store is especially useful on the first day.
                </p>

                <p>
                  You can buy water, snacks, a quick meal, tissues, a small
                  umbrella, or basic travel items.
                </p>

                <p>
                  You can also get a first feeling of Korean daily life without
                  needing to order a full restaurant meal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  6. Choose an easy first meal
                </h2>

                <p>Sixth, choose an easy first meal.</p>

                <p>
                  Do not make your first meal too complicated unless you already
                  have energy.
                </p>

                <p>Good first-day meals can be:</p>

                <p>gimbap,</p>

                <p>noodles,</p>

                <p>soup,</p>

                <p>fried chicken,</p>

                <p>convenience store food,</p>

                <p>a food court meal,</p>

                <p>or a simple restaurant near your hotel.</p>

                <p>
                  Korean BBQ is fun, but it may not be the easiest first meal if
                  you are alone, tired, or unsure how ordering works.
                </p>

                <p>
                  Save it for a day when you can enjoy it properly.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  7. Avoid crossing the city on arrival day
                </h2>

                <p>Seventh, avoid crossing the city on arrival day.</p>

                <p>
                  If you are staying in Myeongdong, do not force yourself to go
                  to Hongdae, Gangnam, and Jamsil right away.
                </p>

                <p>
                  If you are staying in Hongdae, do not rush to palaces and
                  then Gangnam in the same evening.
                </p>

                <p>Pick one nearby area.</p>

                <p>Walk a little.</p>

                <p>Eat.</p>

                <p>Rest.</p>

                <p>A good first day makes the second day better.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  8. Prepare your phone for the next morning
                </h2>

                <p>Eighth, prepare your phone for the next morning.</p>

                <p>Charge it.</p>

                <p>Save your hotel address.</p>

                <p>Save your first sightseeing route.</p>

                <p>Save one or two food options.</p>

                <p>Check the weather.</p>

                <p>If you have a power bank, charge that too.</p>

                <p>
                  You may see power bank rental options in busy parts of Korea,
                  but it is still easier to start the day with your own battery
                  ready.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best Korea arrival day is not
                  impressive.
                </p>

                <p>It is smooth.</p>

                <p>
                  You do not need to see five famous places immediately.
                </p>

                <p>
                  You need to arrive safely, understand your area, eat
                  something, and feel ready for tomorrow.
                </p>

                <p>Korea becomes much easier after the first night.</p>

                <p>So keep arrival day light.</p>

                <p>
                  Your real trip starts better when you are not already
                  exhausted.
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
