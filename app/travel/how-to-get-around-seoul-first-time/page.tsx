import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-get-around-seoul-first-time`;

const pageTitle =
  "How to Get Around Seoul for First-Time Visitors: Subway, Taxi, Rush Hour, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to getting around Seoul for first-time visitors, covering subway, buses, taxis, rush hour, airport routes, walking, maps, and honest local travel tips.";

const quickAnswer = [
  "Best all-around transport: Subway",
  "Best app habit: Use Naver Map or KakaoMap",
  "Best card: T-money or a transit card",
  "Best airport route for many visitors: AREX or airport bus depending on destination",
  "Taxi is useful when: late night, luggage, short local rides, bad weather",
  "Taxi can be worse when: rush hour, heavy traffic, crossing the city",
  "Main local tip: plan by subway line and station, not only by neighborhood name",
  "Biggest mistake: crossing Seoul too many times in one day",
];

const relatedGuides = [
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
    label: "Travel guide",
    title: "How to get from Incheon Airport to Seoul",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
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
    title: "What to do in Myeongdong for the first time",
    description:
      "A local-friendly first guide to Myeongdong, from K-beauty shops and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.",
    href: "/travel/what-to-do-in-myeongdong-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/how-to-get-around-seoul-first-time",
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

export default function HowToGetAroundSeoulFirstTimePage() {
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
          name: "Seoul transportation",
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
          name: "How to get around Seoul",
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
              For most first-time visitors, the subway is the most predictable
              way to move around Seoul — not always the only option, but usually
              the base. Taxis, buses, airport trains, and walking all matter
              too; this guide is about when each one actually helps.
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
                  The subway is not perfect — it can be crowded, transfers tiring,
                  some stations huge, some exits confusing — but it helps you
                  avoid Seoul traffic, which is the bigger daily problem for most
                  visitors.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Traffic and rush hour
                </h2>

                <p>
                  Seoul traffic gets heavy during weekday commutes — morning and
                  evening rush hour crowd subways and slow roads. Taxis help when
                  you are tired, carrying luggage, or traveling late at night, but
                  during rush hour, rain, or events they can stall while the subway
                  stays more predictable. Think of taxis as useful sometimes, not
                  your main plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Why the subway is your base
                </h2>

                <p>
                  Use the subway as your base — it connects Myeongdong, Hongdae,
                  Jongno, Gangnam, Jamsil, Seoul Station, Dongdaemun, Itaewon,
                  and most visitor areas. The advantage is predictability: a
                  subway route with a transfer is usually clearer than a taxi route
                  that looks simple until traffic hits. That is why locals often
                  choose the subway even when a taxi looks more comfortable on the
                  map.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Subway trade-offs
                </p>

                <p>
                  During weekday rush hour, trains can be packed. If you are
                  traveling with big luggage, avoid commute times when possible.
                  If you must travel then, give yourself more time and avoid
                  tight schedules.
                </p>

                <p>
                  Some stations also require long walks between lines. A transfer
                  may look simple in an app but feel longer underground.
                </p>

                <p>
                  For first-time visitors, fewer transfers are often better
                  than the fastest-looking route.
                </p>

                <p>
                  A slightly longer ride with one easy transfer can feel better
                  than a complicated route with stairs, crowds, and long station
                  walks.
                </p>

                <p>
                  This matters especially when choosing where to stay. Do not
                  choose only by neighborhood name. Choose by station.
                </p>

                <p>
                  A hotel three minutes from a useful subway station can feel
                  much better than a hotel in a famous area that requires a long
                  uphill walk.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Buses
                </h2>

                <p>
                  Buses go where the subway does not, but they are less
                  beginner-friendly — you need direction, stop names, and timing
                  more carefully, and traffic slows them during rush hour too.
                  With Naver Map or KakaoMap they get easier; on a nervous first
                  day, start with the subway and add buses when the map clearly
                  shows they save effort.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  When taxis help — and when they do not
                </h2>

                <p>
                  Taxis help with heavy luggage, late nights, bad weather, too
                  many subway transfers, or short annoying walks — but crossing
                  Seoul during commute time can make them expensive, slow, and
                  stressful, especially over the Han River. A taxi is comfort;
                  the subway is predictability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Airport travel
                </h2>

                <p>
                  For airport travel, match the mode to your hotel — AREX or
                  airport train if Seoul Station or a rail-connected area works,
                  limousine bus if your stop is close and you want fewer subway
                  transfers with luggage, taxi if you arrive late, travel with
                  family, or have heavy bags. Traffic still matters; a car route
                  can feel very different by time of day and destination.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Maps, exits, and payment
                </h2>

                <p>
                  Install Naver Map or KakaoMap before you arrive — they are
                  usually more useful than Google Maps for local routes, exits,
                  buses, and walking directions. Station exits matter a lot in
                  Seoul; exit 1 and exit 8 can put you on opposite sides of a
                  wide road, and the wrong one adds ten minutes or a busy
                  crossing. Follow the exit guidance in the app. A T-money card
                  simplifies subway and bus taps and transfers; set it up early
                  rather than when you are already tired.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Walking and pacing
                </h2>

                <p>
                  Walking is part of Seoul travel even when you use the subway
                  — stations, exits, alleys, palaces, markets, and shopping
                  streets add up. Comfortable shoes matter more than people
                  expect. A route that says 25 minutes may still include stairs,
                  long underground walks, waiting, and crowded streets; leave
                  space and Seoul feels much easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Group nearby areas
                </h2>

                <p>
                  Group nearby areas instead of crossing the city all day —
                  Gyeongbokgung morning, Jamsil afternoon, Hongdae evening, Gangnam
                  at night can turn the day into transportation. Myeongdong, Namsan,
                  Euljiro, Jongno, and Insadong fit together; Hongdae, Yeonnam, and
                  Mangwon; Gangnam, Sinsa, COEX, or Jamsil depending on your plan.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Rush hour tip
                </p>

                <p>
                  Rush hour is what first-time visitors underestimate — weekday
                  mornings and evenings fill stations, trains, buses, and roads.
                  If you can, wait it out with coffee or a later breakfast, start
                  sightseeing after the worst crowd, or finish dinner slowly
                  instead of crossing the city at peak commute time.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Subway as your base, taxis when they reduce stress, buses when
                  the route is simple, map apps for exits and transfers, and days
                  built around areas rather than random famous spots — Seoul is
                  very connected but still a big city. Smoother movement leaves
                  more energy for food, streets, cafes, and the parts that make a
                  first trip feel real.
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
