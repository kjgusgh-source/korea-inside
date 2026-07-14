import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/3-days-in-seoul-itinerary-first-time`;

const pageTitle =
  "3 Days in Seoul Itinerary for First-Time Visitors: A Local-Friendly Route";
const pageDescription =
  "A practical HAEMIL 3-day Seoul itinerary for first-time visitors, covering Myeongdong, Namsan, palaces, Insadong, Hongdae, Gangnam, subway tips, and honest trade-offs.";

const quickAnswer = [
  "Best base for this itinerary: Myeongdong, Euljiro, Jongno, or Hongdae",
  "Best first day: Myeongdong, Namsan, Euljiro",
  "Best cultural day: Gyeongbokgung, Bukchon, Insadong, Ikseon-dong",
  "Best final day choice: Hongdae for young energy, Gangnam for modern city mood",
  "Main caution: famous areas are convenient but can be crowded and more expensive",
  "Local tip: keep each day in one side of the city to avoid tiring subway transfers",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "What to do in Myeongdong for the first time",
    description:
      "A local-friendly first guide to Myeongdong, from K-beauty shops and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.",
    href: "/travel/what-to-do-in-myeongdong-first-time",
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
    title: "How to get from Incheon Airport to Seoul",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
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
    title: "What to eat in Seoul for the first time",
    description:
      "A practical Seoul food guide for first-time visitors, covering markets, street food, cafes, and simple meals that feel local.",
    href: "/food/what-to-eat-in-seoul-first-time",
  },
  {
    label: "Food",
    title: "Explore Korean food guides",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea and how to order without turning every meal into homework.",
    href: "/food",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/3-days-in-seoul-itinerary-first-time",
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

export default function ThreeDaysInSeoulItineraryFirstTimePage() {
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
          name: "Seoul travel",
        },
        {
          "@type": "Thing",
          name: "Seoul itinerary",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
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
          name: "3 days in Seoul itinerary",
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
              Three days in Seoul is enough for a good first feeling of the city
              — not everything, Seoul is too big for that — but a solid mix of
              classic sightseeing, food, older neighborhoods, cafes, and modern
              energy. The key is keeping each day full but not rushed.
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
                  Seoul looks easy on a map, but subway transfers, hills, crowds,
                  and walking time can make a packed itinerary tiring — group
                  nearby areas and leave room for cafe breaks or weather shifts.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 1: Myeongdong, Namsan, Euljiro
                </h2>

                <p>
                  Day 1 eases you into Seoul — start in Myeongdong, touristy but
                  useful for a first day with shops, street food, cafes, and easy
                  subway access. Food and snacks on the busiest streets cost more
                  than quieter neighborhoods, but the convenience can be worth
                  it when you are still finding your feet. Walk the main streets,
                  try simple snacks if you want, then head toward Namsan for a
                  first city view that shows how Seoul spreads across mountains,
                  rivers, and old and new districts. In the evening, Euljiro is a
                  nice contrast — older alleys, small restaurants, and a
                  local-cool mood close to Myeongdong but harder to read without
                  Naver Map or KakaoMap.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 1 idea:</strong>{" "}
                    Myeongdong → Namsan → Euljiro
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    easy first day, shopping, city view, simple food, central
                    movement
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    Myeongdong can be crowded and tourist-priced, and Euljiro
                    can be harder to read without a map.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 2: Palace, Bukchon, Insadong, Ikseon-dong
                </h2>

                <p>
                  Day 2 is older Seoul — one palace such as Gyeongbokgung or
                  Changdeokgung is enough for most first-timers, then walk toward
                  Bukchon, Insadong, or Ikseon-dong. Bukchon has hanok streets and
                  hill views but is a real neighborhood; walk quietly. Insadong
                  suits tea, crafts, and slower walking; Ikseon-dong is more
                  cafe-heavy and can feel crowded on weekends. Expect more walking
                  than you planned — narrow streets, slopes, and comfortable shoes
                  matter.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 2 idea:</strong>{" "}
                    Palace → Bukchon or Insadong → Ikseon-dong → Jongno dinner
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    history, hanok streets, tea, walking, traditional mood
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    lots of walking, weekend crowds, some cafes and hanok-style
                    spaces can be expensive because of the atmosphere.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 3: Pick your style
                </h2>

                <p>
                  Day 3 depends on your style — pick one direction, not Hongdae,
                  Gangnam, Jamsil, Seongsu, and Itaewon in one day.
                </p>

                <h3 className="text-xl font-semibold text-[var(--text)]">
                  Hongdae
                </h3>

                <p>
                  Hongdae suits young energy — cafes, casual shopping, street
                  mood, late-night food, and a playful Seoul feeling. Weekend
                  evenings get loud and crowded, and the most central streets are
                  convenient but not always the best value.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    Day 3 Hongdae idea:
                  </strong>{" "}
                  Yeonnam-dong cafe walk → Hongdae shopping streets → dinner
                  or late-night food
                </p>

                <h3 className="text-xl font-semibold text-[var(--text)]">
                  Gangnam
                </h3>

                <p>
                  Gangnam fits modern Seoul — polished shopping, restaurants, and
                  south-of-river plans. If you are staying near Myeongdong or
                  Jongno, it adds subway time and can feel expensive as a major
                  business district.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    Day 3 Gangnam idea:
                  </strong>{" "}
                  Sinsa or Garosu-gil → COEX or Gangnam shopping area → dinner
                  in south Seoul
                </p>

                <h3 className="text-xl font-semibold text-[var(--text)]">
                  Jamsil
                </h3>

                <p>
                  Jamsil works for family plans or Lotte World — malls, lake
                  walks, and a clean organized area. Farther from classic
                  first-time spots like palaces and Myeongdong if that is most
                  of your trip.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    Day 3 Jamsil idea:
                  </strong>{" "}
                  Lotte World or mall area → lake walk → relaxed dinner
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Easiest 3-day version
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 1:</strong>{" "}
                  Myeongdong, Namsan, Euljiro
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 2:</strong>{" "}
                  Palace, Bukchon, Insadong, Ikseon-dong
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 3:</strong>{" "}
                  Hongdae if you want young energy, or Gangnam if you want
                  modern city mood, or Jamsil if you want family plans
                </p>

                <p>
                  This keeps each day focused — central Seoul, old Seoul, then
                  young or modern Seoul on day three.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Plan by area, not by checklist
                </h2>

                <p>
                  A common mistake is crossing Seoul too many times in one day —
                  palace in the morning, Gangnam afternoon, Hongdae evening,
                  Jamsil after that looks possible on a map but feels exhausting
                  once transfers add up. Group nearby areas: central Seoul one
                  day, old Seoul another, Hongdae or Gangnam or Jamsil on day
                  three.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Food, transport, and walking
                </h2>

                <p>
                  Leave meals flexible — simple spots near where you already are
                  beat viral restaurants across the city. Myeongdong, Hongdae,
                  Gangnam, and Insadong can run pricier on main streets; walking
                  one or two blocks off the busiest spot often helps. Convenience
                  stores, bunsik, gimbap, and food courts balance the budget. Get
                  comfortable with the subway early — T-money and Naver Map or
                  KakaoMap beat guessing routes — and expect more walking than
                  the app suggests between stations, exits, and alleys.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best three-day Seoul route is not the one with the most
                  stops — it is the one that still feels good at night, with
                  energy left for dinner and a walk instead of only checking
                  places off a list. Use this as a base, not a rule; the unplanned
                  cafe or street snack often becomes the memory you keep.
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
