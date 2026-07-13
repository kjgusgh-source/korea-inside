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
              If it is your first time visiting Seoul, three days is enough to
              get a good first feeling of the city. Not everything — Seoul is
              too big for that. But three days can give you a nice mix of
              classic sightseeing, food, walking streets, older neighborhoods,
              cafes, shopping, and modern city energy.
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
                  The key is not to put too much into one day.
                </p>

                <p>
                  Seoul looks easy on a map, but subway transfers, hills, crowds,
                  and walking time can make a packed itinerary tiring.
                </p>

                <p>
                  A good first Seoul route should feel full, but not rushed.
                </p>

                <p>This HAEMIL itinerary is built around that idea.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 1: Myeongdong, Namsan, Euljiro
                </h2>

                <p>Day 1 is for arriving into Seoul slowly.</p>

                <p>Start with Myeongdong.</p>

                <p>
                  Myeongdong is touristy, but it is useful for a first day. You
                  can walk around without needing a perfect plan. There are
                  shops, street food, cafes, cosmetics stores, convenience
                  stores, and easy subway access.
                </p>

                <p>It is not the cheapest area.</p>

                <p>
                  Because Myeongdong is central and visitor-friendly, food,
                  snacks, cafes, and shopping around the busiest streets can
                  cost more than in quieter local neighborhoods.
                </p>

                <p>
                  Still, for a first day, the convenience can be worth it.
                </p>

                <p>Use Myeongdong to get used to Seoul.</p>

                <p>Walk the main streets.</p>

                <p>Try simple street snacks if you want.</p>

                <p>Look around the shops.</p>

                <p>
                  Then move toward Namsan Seoul Tower or the Namsan area if you
                  still have energy.
                </p>

                <p>
                  Namsan is a good first Seoul view because it helps you
                  understand the city&apos;s size. Seoul is not just one
                  downtown. It spreads across mountains, rivers, old districts,
                  apartment areas, and modern business zones.
                </p>

                <p>In the evening, Euljiro is a nice contrast.</p>

                <p>
                  It is close to Myeongdong, but the feeling is different.
                  Euljiro has older alleys, small restaurants, bars, cafes, and
                  a more local-cool mood. Some parts can feel hidden or
                  confusing for first-time visitors, so use Naver Map or
                  KakaoMap instead of relying only on instinct.
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

                <p>Day 2 is for older Seoul.</p>

                <p>Start with Gyeongbokgung or Changdeokgung.</p>

                <p>
                  You do not need to visit every palace. One palace is enough
                  for most first-time visitors unless you really love history.
                </p>

                <p>
                  After the palace, walk toward Bukchon, Insadong, or
                  Ikseon-dong.
                </p>

                <p>
                  Bukchon has hanok-style streets and hill views, but it is
                  also a real neighborhood. Walk quietly and do not treat every
                  alley like a photo studio.
                </p>

                <p>
                  Insadong is easier for tea, crafts, galleries, souvenirs,
                  and slower walking.
                </p>

                <p>
                  Ikseon-dong is more cafe-heavy and stylish, with narrow
                  alleys and hanok-style spaces. It can be charming, but it can
                  also feel crowded on weekends.
                </p>

                <p>
                  This day is good because it shows a different Seoul from
                  Myeongdong or Gangnam.
                </p>

                <p>Less neon.</p>

                <p>More walking.</p>

                <p>More old streets.</p>

                <p>More small details.</p>

                <p>But the trade-off is physical energy.</p>

                <p>
                  You may walk more than expected, and some areas have narrow
                  streets or slopes. Comfortable shoes matter.
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

                <p>Day 3 should depend on your travel style.</p>

                <p>
                  Do not try to do Hongdae, Gangnam, Jamsil, Seongsu, and
                  Itaewon all in one day.
                </p>

                <p>Pick one main direction.</p>

                <h3 className="text-xl font-semibold text-[var(--text)]">
                  Hongdae
                </h3>

                <p>Choose Hongdae if you want young energy.</p>

                <p>
                  Hongdae is good for cafes, casual shopping, street mood,
                  late-night food, busking, small shops, and a more youthful
                  Seoul feeling. It is also useful if you like walking without
                  a strict plan.
                </p>

                <p>The trade-off is noise and crowds.</p>

                <p>
                  Weekend evenings can feel very busy. The most central streets
                  around Hongik University Station are convenient, but not
                  always the best value.
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

                <p>Choose Gangnam if you want modern Seoul.</p>

                <p>
                  Gangnam is better for polished shopping streets, restaurants,
                  clinics, offices, big roads, and a cleaner commercial city
                  feeling. It is useful if your plans are south of the Han
                  River.
                </p>

                <p>The trade-off is distance.</p>

                <p>
                  If you are staying near Myeongdong or Jongno, Gangnam can
                  take more time than you expect. It can also feel expensive
                  because it is a major business and commercial district.
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
                  Choose Jamsil if you are traveling with family or want Lotte
                  World.
                </p>

                <p>
                  Jamsil is practical for Lotte World, Lotte World Tower,
                  malls, lake walks, and family-friendly plans.
                </p>

                <p>
                  The trade-off is that it is farther from many classic
                  first-time Seoul areas. If your trip is mostly palaces,
                  Myeongdong, Hongdae, and old neighborhoods, Jamsil may feel
                  out of the way.
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

                <p>This keeps each day focused.</p>

                <p>That matters more than people think.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Plan by area, not by checklist
                </h2>

                <p>
                  A common Seoul travel mistake is crossing the city too many
                  times in one day.
                </p>

                <p>
                  For example, doing a palace in the morning, Gangnam in the
                  afternoon, Hongdae at night, and Jamsil after that may look
                  possible, but it can feel exhausting.
                </p>

                <p>
                  Seoul&apos;s subway is useful, but transfers take time and
                  energy.
                </p>

                <p>A better plan is to group nearby areas.</p>

                <p>Central Seoul day.</p>

                <p>Old Seoul day.</p>

                <p>Young or modern Seoul day.</p>

                <p>That is enough for a first trip.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Food, transport, and walking
                </h2>

                <p>Food also matters.</p>

                <p>Do not plan every meal too perfectly.</p>

                <p>Leave space for simple meals near where you already are.</p>

                <p>
                  In tourist-heavy areas like Myeongdong, Hongdae, Gangnam, and
                  Insadong, popular restaurants and cafes can cost more,
                  especially on main streets. That does not mean you should
                  avoid them, but it helps to walk one or two streets away from
                  the busiest spot if you want better value.
                </p>

                <p>
                  Convenience stores, bunsik shops, gimbap places, casual Korean
                  restaurants, and food courts can help balance the budget.
                </p>

                <p>For transport, get used to the subway early.</p>

                <p>
                  A T-money card or transit card makes movement easier. Naver
                  Map or KakaoMap will usually be more useful in Korea than
                  guessing routes from memory.
                </p>

                <p>Also, do not underestimate walking.</p>

                <p>
                  Even if you use the subway, you may walk a lot between
                  stations, exits, alleys, shops, and attractions.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best 3-day Seoul itinerary is not the
                  one with the most stops.
                </p>

                <p>
                  It is the one that still feels good at night.
                </p>

                <p>
                  You should have enough energy to eat dinner, walk a little,
                  and enjoy the city instead of only checking places off a list.
                </p>

                <p>Seoul is better when you leave room for small surprises.</p>

                <p>A cafe you did not plan.</p>

                <p>A street snack.</p>

                <p>A quiet palace corner.</p>

                <p>
                  A subway ride that suddenly makes the city feel huge.
                </p>

                <p>A night walk that becomes your favorite memory.</p>

                <p>Use this itinerary as a base, not a rule.</p>

                <p>That is the best way to enjoy Seoul for the first time.</p>
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
