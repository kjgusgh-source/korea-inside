import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/seoul-neighborhood-guide-first-time`;

const pageTitle =
  "Seoul Neighborhood Guide for First-Time Visitors: Myeongdong, Hongdae, Gangnam, Insadong, and More";
const pageDescription =
  "A practical HAEMIL guide to Seoul neighborhoods for first-time visitors, explaining Myeongdong, Hongdae, Gangnam, Insadong, Euljiro, Seongsu, Jamsil, Itaewon, and local travel trade-offs.";

const quickAnswer = [
  "Best first-time tourist base: Myeongdong or Jongno",
  "Best young energy: Hongdae",
  "Best modern city mood: Gangnam",
  "Best traditional Seoul: Insadong / Jongno",
  "Best local-cool night mood: Euljiro",
  "Best trendy cafes and design mood: Seongsu",
  "Best family / Lotte World plans: Jamsil",
  "Best international food mood: Itaewon",
  "Main warning: famous neighborhoods are convenient but can be crowded and cost more",
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
    title: "What to do in Myeongdong for the first time",
    description:
      "A local-friendly first guide to Myeongdong, from K-beauty shops and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.",
    href: "/travel/what-to-do-in-myeongdong-first-time",
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
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
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
    canonical: "/travel/seoul-neighborhood-guide-first-time",
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

export default function SeoulNeighborhoodGuideFirstTimePage() {
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
          name: "Seoul neighborhoods",
        },
        {
          "@type": "Thing",
          name: "Seoul travel",
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
          name: "Seoul neighborhood guide",
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
              Seoul can feel confusing on a first trip because the city is not
              built around one single center. There is old Seoul, modern Seoul,
              student Seoul, shopping Seoul, cafe Seoul, and nightlife Seoul.
              The best neighborhood is not always the most famous one — it is
              the one that matches your energy, budget, and route.
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
                  That is why choosing where to go depends on what kind of day
                  you want.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Myeongdong
                </h2>

                <p>Myeongdong is the easiest first stop.</p>

                <p>
                  It is central, busy, tourist-friendly, and simple to
                  understand. You can shop, try street snacks, find cosmetics
                  stores, reach Namsan, and move to Euljiro, City Hall,
                  Jongno, or Namdaemun without much trouble.
                </p>

                <p>
                  The trade-off is that Myeongdong can feel touristy. Food,
                  cafes, snacks, and shopping around the busiest streets can
                  cost more than in quieter local areas.
                </p>

                <p>
                  Choose Myeongdong if you want an easy first Seoul experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hongdae
                </h2>

                <p>Hongdae is for young energy.</p>

                <p>
                  It has cafes, casual shopping, music, late-night food, clubs,
                  street mood, and a more playful feeling. It is good if you
                  like walking without a strict plan.
                </p>

                <p>
                  The trade-off is crowds and noise. Weekend evenings can feel
                  very busy, and the most central streets are not always the
                  best value.
                </p>

                <p>
                  Choose Hongdae if you want nightlife, cafes, casual shopping,
                  and a younger Seoul mood.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gangnam
                </h2>

                <p>Gangnam is modern and commercial.</p>

                <p>
                  It feels polished, wide, busy, and city-like. It is useful
                  for shopping, restaurants, beauty clinics, business plans,
                  COEX, Sinsa, Apgujeong, or south-of-river routes.
                </p>

                <p>
                  The trade-off is distance from older Seoul. If your main
                  plans are palaces, Bukchon, Insadong, Myeongdong, and Jongno,
                  Gangnam can take more subway time than expected. It can also
                  feel expensive because it is a major business and commercial
                  district.
                </p>

                <p>
                  Choose Gangnam if you want modern Seoul, shopping,
                  restaurants, and south Seoul plans.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Insadong and Jongno
                </h2>

                <p>Insadong and Jongno are for older Seoul.</p>

                <p>
                  This area is close to palaces, tea houses, galleries,
                  temples, hanok-style alleys, Ikseon-dong, and slower walking
                  routes. It is a good choice if you want Seoul to feel more
                  cultural and less like a shopping district.
                </p>

                <p>
                  The trade-off is that some streets become quieter at night.
                  Certain cafes, hanok-style spaces, and souvenir shops can also
                  cost more because the atmosphere is part of the experience.
                </p>

                <p>
                  Choose Insadong or Jongno if you want palaces, tea, history,
                  walking, and a calmer central mood.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Euljiro
                </h2>

                <p>Euljiro feels more local and hidden.</p>

                <p>
                  It is close to Myeongdong, but the mood is different. You can
                  find older alleys, small restaurants, bars, cafes, print-shop
                  streets, and a slightly rougher local-cool feeling.
                </p>

                <p>
                  The trade-off is that Euljiro can be harder to read for
                  first-time visitors. Some streets feel plain during the day
                  and more interesting at night. It is better with Naver Map or
                  KakaoMap.
                </p>

                <p>
                  Choose Euljiro if you want a less polished Seoul mood near
                  the center.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Seongsu
                </h2>

                <p>Seongsu is trendy and cafe-heavy.</p>

                <p>
                  It is known for cafes, design shops, pop-up spaces, fashion,
                  converted industrial-style buildings, and a newer Seoul trend
                  mood.
                </p>

                <p>
                  The trade-off is that trendy does not always mean cheap. Some
                  cafes and shops are more about atmosphere than value, and
                  popular weekends can feel crowded.
                </p>

                <p>
                  Choose Seongsu if you like cafes, design, lifestyle shops,
                  and trend-watching.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Jamsil
                </h2>

                <p>Jamsil is practical for family plans.</p>

                <p>
                  It is useful for Lotte World, Lotte World Tower, malls, lake
                  walks, and southeast Seoul plans. It can feel clean,
                  organized, and comfortable.
                </p>

                <p>
                  The trade-off is distance. If your trip is mostly about
                  Myeongdong, Hongdae, palaces, and older Seoul, Jamsil may feel
                  far.
                </p>

                <p>
                  Choose Jamsil if your plans are centered around Lotte World,
                  malls, family activities, or southeast Seoul.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Itaewon
                </h2>

                <p>Itaewon feels international.</p>

                <p>
                  It has global food, bars, cafes, and a more mixed cultural
                  feeling than many other areas. It can be interesting if you
                  want food variety or a different side of Seoul.
                </p>

                <p>
                  The trade-off is that Itaewon is not the easiest area for
                  every first-time itinerary. It can be better as a focused
                  visit than a default base, depending on your plans.
                </p>

                <p>
                  Choose Itaewon if you want international food, nightlife, and
                  a more global mood.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Yeonnam and Mangwon
                </h2>

                <p>
                  Yeonnam and Mangwon are softer alternatives near Hongdae.
                </p>

                <p>
                  They can feel more relaxed, cafe-friendly, and
                  neighborhood-like while still being close to the Hongdae area.
                  These areas are good if you want a young Seoul mood without
                  staying in the loudest part.
                </p>

                <p>
                  The trade-off is that they may be less straightforward for a
                  first-time visitor than major station areas. Walking routes
                  and exact location matter.
                </p>

                <p>
                  Choose Yeonnam or Mangwon if you want cafes, small shops, and
                  a softer local feel near Hongdae.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Group nearby areas
                </p>

                <p>
                  The biggest Seoul neighborhood mistake is trying to visit too
                  many areas in one day.
                </p>

                <p>Seoul is connected, but it is still big.</p>

                <p>
                  Myeongdong, Gangnam, Hongdae, Jamsil, and Insadong can all
                  fit into one trip, but they should not all be squeezed into
                  one day.
                </p>

                <p>Group nearby areas.</p>

                <p>
                  Myeongdong, Namsan, Euljiro, Jongno, and Insadong can work
                  together.
                </p>

                <p>Hongdae, Yeonnam, and Mangwon can work together.</p>

                <p>
                  Gangnam, Sinsa, Apgujeong, COEX, and Jamsil can work together
                  depending on your route.
                </p>

                <p>This saves energy, subway time, and money.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Subway access and taxis
                </h2>

                <p>
                  For first-time visitors, subway access matters more than
                  neighborhood fame.
                </p>

                <p>
                  A famous neighborhood is not useful if your hotel is far from
                  the station or requires a long uphill walk. A less famous
                  area near a good subway line can feel much better in real
                  life.
                </p>

                <p>Also remember that taxis are not always faster.</p>

                <p>
                  During rush hour, rain, events, or heavy traffic, taxis can
                  get stuck. The subway may be crowded, but it is often more
                  predictable.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the easiest way to understand Seoul is
                  this:
                </p>

                <p>Myeongdong is easy.</p>

                <p>Hongdae is young.</p>

                <p>Gangnam is modern.</p>

                <p>Insadong and Jongno are traditional.</p>

                <p>Euljiro is local-cool.</p>

                <p>Seongsu is trendy.</p>

                <p>Jamsil is family-friendly and mall-centered.</p>

                <p>Itaewon is international.</p>

                <p>
                  Yeonnam and Mangwon are softer cafe neighborhoods near
                  Hongdae.
                </p>

                <p>You do not need to visit all of them.</p>

                <p>Pick the neighborhoods that match your trip.</p>

                <p>That is how Seoul becomes easier to enjoy.</p>
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
