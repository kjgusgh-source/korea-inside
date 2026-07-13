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
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Myeongdong
                </h2>

                <p>
                  Myeongdong is the easiest first stop — central, busy,
                  tourist-friendly, with shopping, street snacks, Namsan, and
                  easy links to Euljiro, City Hall, and Jongno. The trade-off is
                  tourist-area pricing on the busiest streets.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hongdae
                </h2>

                <p>
                  Hongdae is young Seoul — cafes, casual shopping, music,
                  late-night food, clubs, and a playful street mood. Good if you
                  like walking without a strict plan. Weekend evenings get loud
                  and crowded, and the most central streets are not always the
                  best value.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gangnam
                </h2>

                <p>
                  Gangnam is modern and commercial — polished, wide, busy, good
                  for shopping, restaurants, COEX, Sinsa, and Apgujeong. If your
                  main plans are palaces, Bukchon, and Insadong, Gangnam adds
                  more subway time than expected and can feel expensive as a
                  major business district.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Insadong and Jongno
                </h2>

                <p>
                  Insadong and Jongno are older Seoul — palaces, tea houses,
                  galleries, hanok alleys, Ikseon-dong, and slower walks. Good
                  if you want culture over shopping-district energy. Some
                  streets quiet down at night, and souvenir shops or hanok cafes
                  can cost more because the atmosphere is part of the draw.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Euljiro
                </h2>

                <p>
                  Euljiro feels more local and less polished — close to
                  Myeongdong but with older alleys, small restaurants, bars,
                  print-shop streets, and a rougher local-cool mood. Harder to
                  read on a first visit; some streets look plain by day and
                  come alive at night. Naver Map or KakaoMap helps here.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Seongsu
                </h2>

                <p>
                  Seongsu is trendy and cafe-heavy — design shops, pop-up spaces,
                  converted industrial buildings, and a newer Seoul mood. Trendy
                  does not always mean cheap; popular weekends can feel crowded,
                  and some spots are more about atmosphere than value.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Jamsil
                </h2>

                <p>
                  Jamsil suits family and southeast Seoul plans — Lotte World,
                  Lotte World Tower, malls, and lake walks in a clean,
                  organized area. If your trip is mostly Myeongdong, Hongdae,
                  and palaces, Jamsil can feel far.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Itaewon
                </h2>

                <p>
                  Itaewon feels international — global food, bars, cafes, and a
                  mixed cultural mood. Better as a focused visit than a default
                  base for every first-time itinerary, depending on your plans.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Yeonnam and Mangwon
                </h2>

                <p>
                  Yeonnam and Mangwon are softer alternatives near Hongdae —
                  more relaxed, cafe-friendly, and neighborhood-like without the
                  loudest nightlife. Walking routes and exact location matter
                  more here than at a major station area.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Group nearby areas
                </p>

                <p>
                  The biggest neighborhood mistake is squeezing too many areas
                  into one day — Seoul is connected but still big. Group nearby
                  spots: Myeongdong, Namsan, Euljiro, Jongno, and Insadong;
                  Hongdae, Yeonnam, and Mangwon; Gangnam, Sinsa, COEX, and
                  Jamsil depending on your route. That saves energy, subway
                  time, and money.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Subway access and taxis
                </h2>

                <p>
                  Subway access matters more than neighborhood fame — a famous
                  name is not useful if your hotel is far from the station or up
                  a long hill. A less famous area on a good line can feel much
                  better in real life. Taxis are not always faster either;
                  during rush hour or rain they can stall while the subway stays
                  more predictable.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  You do not have to visit every neighborhood on this list —
                  pick the moods that match your trip. Myeongdong for ease,
                  Hongdae for young energy, Gangnam for modern south Seoul,
                  Insadong and Jongno for older streets, Euljiro for local-cool
                  near the center, Seongsu for cafes and design, Jamsil for
                  family plans, Itaewon for international food, Yeonnam and
                  Mangwon for a softer Hongdae-adjacent feel. Group nearby areas
                  and Seoul gets easier to enjoy.
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
