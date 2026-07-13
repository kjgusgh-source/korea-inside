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
              can feel confusing. Seoul is big, the subway map looks busy, and
              neighborhood names can sound familiar before you know what they
              actually feel like.
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
                <p>The honest answer is this:</p>

                <p>There is no single best area for everyone.</p>

                <p>
                  The best place to stay depends on your travel style, budget,
                  and how much convenience you want.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Before choosing
                </p>

                <p>
                  One thing to know first: the most famous areas are often not
                  the cheapest.
                </p>

                <p>
                  Myeongdong, Hongdae, Gangnam, Insadong, Seoul Station, and
                  Jamsil are popular because they are convenient, easy to
                  recognize, and close to things visitors want. That also means
                  hotels, cafes, restaurants, and shopping nearby can cost more
                  than quieter local neighborhoods, especially near major
                  stations or during busy travel seasons.
                </p>

                <p>That does not mean you should avoid them.</p>

                <p>
                  For a first trip, convenience can be worth paying for.
                </p>

                <p>But it is better to choose with clear expectations.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Myeongdong
                </h2>

                <p>
                  Myeongdong is the easiest all-around base for many first-time
                  visitors.
                </p>

                <p>
                  It is central, busy, and used to tourists. You can reach Namsan
                  Seoul Tower, Namdaemun, City Hall, Euljiro, and Jongno fairly
                  easily. If your trip is short and you want a simple base,
                  Myeongdong makes travel feel less stressful.
                </p>

                <p>
                  The trade-off is that Myeongdong can feel touristy. Street
                  food, cafes, cosmetics shops, and restaurants in the most
                  crowded parts may feel more expensive than in local
                  neighborhoods. It is convenient, but not always the best value.
                </p>

                <p>
                  Choose Myeongdong if you want easy sightseeing, shopping, and
                  a central first base.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hongdae
                </h2>

                <p>Hongdae is better if you want young energy.</p>

                <p>
                  It has cafes, late-night food, street mood, small shops,
                  music, clubs, and a more casual atmosphere. It can also be
                  useful for airport access because Hongik University Station
                  connects to the airport railroad line.
                </p>

                <p>
                  The trade-off is noise and crowds. Weekend nights can feel
                  very busy, and popular streets around the station are not
                  always cheap. You can still find better-value stays around
                  nearby areas, but the most central Hongdae spots can cost more
                  because of the location.
                </p>

                <p>
                  Choose Hongdae if you want nightlife, cafes, and a younger
                  Seoul mood.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gangnam
                </h2>

                <p>Gangnam is polished, modern, and commercial.</p>

                <p>
                  It works well if your plans are mostly south of the Han
                  River, such as COEX, Sinsa, Apgujeong, Jamsil, beauty
                  clinics, shopping, or business-related plans. The area feels
                  clean, modern, and city-like.
                </p>

                <p>
                  The trade-off is distance from many classic first-time
                  sightseeing spots. Palaces, Bukchon, Insadong, Myeongdong,
                  and older Seoul areas are mostly north of the river. Gangnam
                  can also be expensive because of its business and commercial
                  image.
                </p>

                <p>
                  Choose Gangnam if you want modern Seoul, shopping,
                  restaurants, beauty, or south-of-river plans.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Insadong / Jongno
                </h2>

                <p>
                  Insadong and Jongno are good for a more traditional Seoul
                  mood.
                </p>

                <p>
                  This area is close to palaces, tea houses, old streets,
                  hanok-style alleys, galleries, temples, and slower walking
                  routes. If your dream Seoul trip includes Gyeongbokgung,
                  Changdeokgung, Bukchon, Ikseon-dong, and quiet morning walks,
                  this area can feel very right.
                </p>

                <p>
                  The trade-off is that some streets become quieter at night.
                  Depending on the exact location, late-night food and shopping
                  may feel more limited than Hongdae or Myeongdong. Some
                  hanok-style or boutique stays can also be expensive because the
                  atmosphere itself is part of the appeal.
                </p>

                <p>
                  Choose Insadong or Jongno if you want history, walking, tea,
                  palaces, and a calmer central base.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Seoul Station
                </h2>

                <p>Seoul Station is practical.</p>

                <p>
                  It is useful if you are taking trains, arriving late, leaving
                  early, or planning day trips by KTX. It also connects fairly
                  well to central Seoul.
                </p>

                <p>
                  The trade-off is atmosphere. Seoul Station is more of a
                  transport base than a neighborhood you choose for charm. Some
                  streets around large stations can feel busy or less cozy.
                </p>

                <p>
                  Choose Seoul Station if transport convenience matters more
                  than neighborhood mood.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Jamsil
                </h2>

                <p>Jamsil is good for family plans or southeast Seoul.</p>

                <p>
                  It is useful for Lotte World, Lotte World Tower, malls, lake
                  walks, and some concerts or events. If you are traveling with
                  kids or your itinerary is focused on Lotte World, Jamsil can
                  make the trip easier.
                </p>

                <p>
                  The trade-off is distance. If your first Seoul trip is mostly
                  about palaces, Myeongdong, Hongdae, and older neighborhoods,
                  Jamsil may feel far. It can also feel mall-centered, which
                  may not be what every traveler wants.
                </p>

                <p>
                  Choose Jamsil if your plans are centered around Lotte World,
                  family activities, malls, or southeast Seoul.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Better-value tips
                </p>

                <p>
                  A good value tip is to think by station, not only by famous
                  neighborhood name.
                </p>

                <p>
                  In Seoul, staying three minutes from a useful subway station
                  can be better than staying in a famous area but walking
                  fifteen minutes uphill with luggage.
                </p>

                <p>
                  You can often find better value by looking one or two subway
                  stops away from the most famous area.
                </p>

                <p>
                  For example, you may stay near Myeongdong without being on
                  the busiest shopping street.
                </p>

                <p>
                  You may stay near Hongdae without being in the loudest nightlife
                  zone.
                </p>

                <p>
                  You may stay near Gangnam without being right beside the most
                  expensive commercial streets.
                </p>

                <p>
                  The exact price depends on season, hotel level, room size,
                  booking timing, and location. But as a general rule, famous
                  station areas and tourist-heavy streets tend to cost more.
                </p>

                <p>
                  For a first trip, do not chase the cheapest area only.
                </p>

                <p>
                  A cheaper hotel can become tiring if it adds long transfers
                  every day.
                </p>

                <p>
                  At the same time, do not assume the most famous neighborhood
                  is always the best.
                </p>

                <p>Think about your actual days.</p>

                <p>Where will you go in the morning?</p>

                <p>Where will you eat at night?</p>

                <p>How late will you return?</p>

                <p>How much subway time feels okay?</p>

                <p>Do you want busy streets or quieter walks?</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final recommendation
                </p>

                <p>
                  If you are unsure, Myeongdong is the safest first choice for
                  classic sightseeing.
                </p>

                <p>
                  Hongdae is better for nightlife, cafes, and young energy.
                </p>

                <p>
                  Insadong or Jongno is better for palaces and traditional
                  atmosphere.
                </p>

                <p>
                  Gangnam is better for modern city plans and south Seoul.
                </p>

                <p>Seoul Station is best for transport.</p>

                <p>
                  Jamsil is best for Lotte World or family-centered plans.
                </p>

                <p>
                  For HAEMIL readers, the best Seoul base is not the trendiest
                  place.
                </p>

                <p>It is the place that makes your own trip easier.</p>

                <p>
                  A famous neighborhood can save time, but it may cost more.
                </p>

                <p>
                  A quieter neighborhood can be better value, but it may add
                  transfers.
                </p>

                <p>
                  The best choice is the one that balances comfort, movement,
                  and budget for the way you actually travel.
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
