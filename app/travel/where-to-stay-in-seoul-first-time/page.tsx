import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/where-to-stay-in-seoul-first-time`;

const pageTitle =
  "Where to Stay in Seoul for the First Time: Myeongdong, Hongdae, Gangnam, or Insadong?";
const pageDescription =
  "A friendly HAEMIL guide to where first-time visitors should stay in Seoul, comparing Myeongdong, Hongdae, Gangnam, Insadong, Seoul Station, and Jamsil by travel style.";

const quickAnswer = [
  "Best all-around first stay: Myeongdong, but expect tourist-area prices.",
  "Best for nightlife and young energy: Hongdae, but weekends can be crowded and noisy.",
  "Best for modern city plans: Gangnam, but it can be pricier and farther from old Seoul.",
  "Best for traditional atmosphere: Insadong / Jongno, but nights can be quieter.",
  "Best for train convenience: Seoul Station, but less charming as a neighborhood.",
  "Best for family or Lotte World plans: Jamsil, but farther from many classic sights.",
  "Best value tip: Look one or two subway stops away from the most famous station.",
];

const relatedGuides = [
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
    canonical: "/travel/where-to-stay-in-seoul-first-time",
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

export default function WhereToStayInSeoulFirstTimePage() {
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
          name: "Where to stay in Seoul",
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
          name: "Where to stay in Seoul",
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
              If it is your first time visiting Seoul, choosing where to stay
              can feel confusing — neighborhood names sound familiar before you
              know what they feel like, and the subway map looks busy. The
              useful question is not &quot;which area is best&quot; but which
              station and daily route fit your trip.
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
                  There is no single best area for everyone — it depends on your
                  travel style, budget, and how much convenience you want on a
                  first trip.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Before choosing
                </p>

                <p>
                  Famous areas — Myeongdong, Hongdae, Gangnam, Insadong,
                  Seoul Station, Jamsil — are popular because they are easy to
                  recognize and close to what visitors want. That also means
                  hotels, cafes, and restaurants nearby can cost more than
                  quieter neighborhoods, especially near major stations or in
                  busy seasons. For a first trip, that convenience can be worth
                  paying for; just choose with clear expectations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Myeongdong
                </h2>

                <p>
                  Myeongdong is the easiest all-around base for many first-time
                  visitors — central, busy, used to tourists, with Namsan, City
                  Hall, Euljiro, and Jongno within easy reach. The trade-off is
                  tourist-area pricing on the busiest streets; convenient, but
                  not always the best value. Good if you want simple sightseeing,
                  shopping, and a central first base.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hongdae
                </h2>

                <p>
                  Hongdae suits travelers who want young energy — cafes,
                  late-night food, street mood, music, and a casual atmosphere.
                  Hongik University Station also connects to the airport railroad
                  line. Weekend nights get loud and crowded, and the most central
                  streets are not always cheap, though nearby areas can offer
                  better value.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gangnam
                </h2>

                <p>
                  Gangnam is polished, modern, and commercial — good for COEX,
                  Sinsa, Apgujeong, beauty clinics, and south-of-river plans.
                  Palaces, Bukchon, Insadong, and older Seoul are mostly north
                  of the Han River, so Gangnam adds subway time for classic
                  sightseeing and can run pricier because of its business image.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Insadong / Jongno
                </h2>

                <p>
                  Insadong and Jongno fit a more traditional Seoul mood — close
                  to palaces, tea houses, hanok alleys, galleries, and slow
                  morning walks. If Gyeongbokgung, Bukchon, and Ikseon-dong are
                  on your list, this area can feel right. Some streets quiet
                  down at night, and hanok-style stays can cost more because the
                  atmosphere is part of the appeal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Seoul Station
                </h2>

                <p>
                  Seoul Station is a transport base more than a charming
                  neighborhood — useful for KTX day trips, late arrivals, or
                  early departures, with decent links to central Seoul. Streets
                  around large stations can feel busy and less cozy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Jamsil
                </h2>

                <p>
                  Jamsil works for family plans and southeast Seoul — Lotte
                  World, Lotte World Tower, malls, and lake walks are nearby.
                  If your trip is mostly palaces, Myeongdong, and Hongdae,
                  Jamsil can feel far and mall-centered, which is not what
                  every traveler wants.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Better-value tips
                </p>

                <p>
                  Think by station, not only by famous neighborhood name. Staying
                  three minutes from a useful subway line beats staying in a
                  famous area but walking fifteen minutes uphill with luggage.
                  You can often find better value one or two stops away — near
                  Myeongdong without the busiest shopping street, near Hongdae
                  without the loudest nightlife zone, near Gangnam without the
                  priciest commercial blocks.
                </p>

                <p>
                  Price still depends on season, hotel level, and exact street.
                  Famous station areas tend to cost more, but a cheaper hotel far
                  from your daily route can tire you out with long transfers.
                  Match your stay to where you will actually go in the morning,
                  eat at night, and how much subway time feels okay.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  If you are unsure: Myeongdong for classic sightseeing, Hongdae
                  for cafes and nightlife, Insadong or Jongno for palaces,
                  Gangnam for modern south Seoul, Seoul Station for train
                  convenience, Jamsil for Lotte World or family plans. The best
                  base is not the trendiest name — it is the one that balances
                  comfort, movement, and budget for how you actually travel.
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
