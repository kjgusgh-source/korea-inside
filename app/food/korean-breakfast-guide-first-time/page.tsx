import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-breakfast-guide-first-time`;

const pageTitle =
  "Korean Breakfast Guide for First-Time Visitors: What to Eat in the Morning";
const pageDescription =
  "A practical HAEMIL guide to Korean breakfast for first-time visitors, including gimbap, convenience stores, gukbap, haejangguk, seolleongtang, Korean street toast, bakeries, brunch cafes, hotel breakfast, and local map tips.";

const quickAnswer = [
  "Easiest option: hotel breakfast or convenience store breakfast",
  "Most local-feeling simple option: gimbap",
  "Warm Korean choice: gukbap, haejangguk, seolleongtang, or another soup with rice",
  "Easy sweet/savory choice: Korean street toast or bakery bread",
  "Modern city option: brunch cafes and Western-style breakfast, usually better for a slower morning",
  "Cafe caution: many pretty cafes open later than early breakfast time",
  "Map search terms: 아침식사, 24시, 김밥, 국밥, 해장국, 설렁탕, 토스트, 베이커리, 브런치",
  "Main warning: 24-hour places still exist, but do not assume every area has easy early breakfast",
  "Local tip: check the map before walking, especially in cafe-heavy or nightlife-heavy neighborhoods",
];

const relatedGuides = [
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
  {
    label: "Food guide",
    title: "What to eat at a Korean convenience store",
    description:
      "A practical guide to Korean convenience store food, from triangle gimbap and cup ramyeon to kimbap, lunchboxes, drinks, snacks, and late-night options.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "What is gimbap?",
    description:
      "A local-friendly guide to Korea's seaweed rice roll, from everyday bunsik shops and convenience stores to tuna gimbap, mini gimbap, and picnic memories.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
  },
  {
    label: "Food guide",
    title: "Korean soups and stews guide for first-time visitors",
    description:
      "A practical guide to Korean soups and stews, from kimchi-jjigae and doenjang-jjigae to sundubu, seolleongtang, galbitang, samgyetang, rice, side dishes, and local tips.",
    href: "/food/korean-soups-and-stews-guide-first-time",
  },
  {
    label: "Food guide",
    title: "What is Korean street toast?",
    description:
      "A local-friendly guide to Korea's sweet egg sandwich, from old street stalls to modern toast chains like Isaac Toast and Eggdrop.",
    href: "/food/what-is-korean-street-toast",
  },
  {
    label: "Food guide",
    title: "Korean cafe culture guide for first-time visitors",
    description:
      "A practical guide to Korean cafes, including ordering, Wi-Fi, receipts, outlets, desserts, study mood, photo spots, one-drink rules, and local etiquette.",
    href: "/food/korean-cafe-culture-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "A practical guide to Korean apps travelers may actually use, from Naver Map, KakaoMap, Papago, Kakao T, and subway apps to Baemin, CatchTable, Yanolja, and Yeogi Eottae.",
    href: "/travel/korea-travel-apps-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-breakfast-guide-first-time",
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

export default function KoreanBreakfastGuideFirstTimePage() {
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
          name: "Korean breakfast",
        },
        {
          "@type": "Thing",
          name: "Seoul breakfast",
        },
        {
          "@type": "Thing",
          name: "Korean brunch cafe",
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
          name: "Food",
          item: `${siteUrl}/food`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Korean breakfast guide",
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
              href="/food"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Food
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Food guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Breakfast in Korea is not hard, but it is different from what many
              travelers expect. Rice and soup, gimbap, convenience stores,
              bakeries, and brunch cafes are all normal morning choices — the
              trick is knowing what fits your route and your schedule.
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
                <p>Breakfast in Korea can surprise first-time visitors.</p>

                <p>Not because there is nothing to eat.</p>

                <p>There is plenty.</p>

                <p>But the morning rhythm may be different from what you expect.</p>

                <p>
                  Some travelers imagine a classic Korean breakfast with rice,
                  soup, grilled fish, and side dishes.
                </p>

                <p>That kind of meal exists.</p>

                <p>
                  But it is not always the easiest thing to find near your hotel
                  early in the morning.
                </p>

                <p>And modern Korea does not have only one breakfast style.</p>

                <p>Some people eat rice and soup.</p>

                <p>Some grab gimbap.</p>

                <p>Some buy something at a convenience store.</p>

                <p>Some go to a bakery.</p>

                <p>Some drink coffee and eat bread.</p>

                <p>Some go to brunch cafes when the morning is slower.</p>

                <p>
                  So the better question is not &ldquo;What is the traditional
                  Korean breakfast?&rdquo;
                </p>

                <p>The better question is:</p>

                <p>
                  What can I actually eat near my route before the day starts?
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hotel breakfast
                </h2>

                <p>
                  For many visitors, the easiest answer is hotel breakfast.
                </p>

                <p>It is not the most local answer.</p>

                <p>But it is simple.</p>

                <p>
                  If your hotel has breakfast and you have an early palace day,
                  airport move, tour, or train ride, it can save time and stress.
                </p>

                <p>
                  You do not have to think about maps, menus, weather, or opening
                  times.
                </p>

                <p>That can be worth it.</p>

                <p>But you do not need hotel breakfast every day.</p>

                <p>
                  Korea has many simple morning options if you know what to look
                  for.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience store breakfast
                </h2>

                <p>
                  Convenience stores are one of the most practical breakfast
                  choices.
                </p>

                <p>This does not have to feel sad.</p>

                <p>
                  In Korea, convenience stores are part of normal daily life.
                </p>

                <p>
                  You can buy triangle gimbap, regular gimbap, boiled eggs,
                  yogurt, milk, coffee, bread, bananas, drinks, cup ramyeon, or
                  a small lunchbox-style meal.
                </p>

                <p>It is not the most beautiful breakfast.</p>

                <p>
                  But it is useful, quick, and easy to understand when you are
                  still half-awake.
                </p>

                <p>
                  For an early train or airport move, convenience store breakfast
                  can make more sense than searching for an open restaurant.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gimbap
                </h2>

                <p>
                  Gimbap is one of the best local-feeling breakfast foods.
                </p>

                <p>
                  It is easy to eat, not too heavy, and works well before a long
                  walking day.
                </p>

                <p>
                  You may find it at gimbap shops, bunsik-style places,
                  convenience stores, or casual restaurants.
                </p>

                <p>
                  A roll of gimbap with soup or a drink can be enough for the
                  morning.
                </p>

                <p>
                  It is also easier than ordering a big stew if you are not fully
                  awake yet.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Soup and rice in the morning
                </h2>

                <p>If you want something warmer, look for soup-and-rice meals.</p>

                <p>
                  Gukbap, haejangguk, seolleongtang, and similar dishes can work
                  well in the morning.
                </p>

                <p>These are not delicate brunch foods.</p>

                <p>They are practical.</p>

                <p>Hot broth.</p>

                <p>Rice.</p>

                <p>Maybe meat, vegetables, or noodles.</p>

                <p>Something warm before walking outside.</p>

                <p>
                  Haejangguk has a hangover-soup image, but you do not need to be
                  hungover to eat it.
                </p>

                <p>
                  Seolleongtang is milder and often needs salt, pepper,
                  scallions, or kimchi to bring out the flavor.
                </p>

                <p>Gukbap can be filling and direct.</p>

                <p>
                  This kind of breakfast is good if you want to feel like you
                  actually ate a meal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  24-hour restaurants — check before you walk
                </h2>

                <p>There are still 24-hour restaurants in Korea.</p>

                <p>But visitors should not assume they are everywhere.</p>

                <p>
                  After the pandemic era, many late-night and 24-hour dining
                  habits changed, and some places that used to stay open longer
                  now close earlier than people remember.
                </p>

                <p>This is why checking a map app matters.</p>

                <p>
                  If you search &ldquo;24시&rdquo; and see a place nearby, still
                  check the latest information before walking there.
                </p>

                <p>
                  Do not plan your whole morning around an old idea of Korea
                  where everything is open all night.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Where breakfast is easier — and where it is not
                </h2>

                <p>The area matters too.</p>

                <p>
                  Breakfast near traditional markets, major stations, office
                  districts, hospitals, and busy central streets can be easier.
                </p>

                <p>These places often have people moving early.</p>

                <p>
                  Workers, commuters, vendors, travelers, and local residents
                  create morning demand.
                </p>

                <p>
                  Depending on your exact location, areas like Jongno, Myeongdong,
                  Seoul Station, market areas, and office neighborhoods can have
                  more practical breakfast choices.
                </p>

                <p>
                  On the other hand, some cafe-heavy or nightlife-heavy
                  neighborhoods can feel quiet in the morning.
                </p>

                <p>
                  Hongdae, Seongsu, and pretty cafe streets can be great later in
                  the day.
                </p>

                <p>
                  But they are not always the easiest places for very early
                  breakfast.
                </p>

                <p>That does not mean you should avoid staying there.</p>

                <p>It just means you should check before walking around hungry.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Korean street toast
                </h2>

                <p>Korean street toast is another easy morning food.</p>

                <p>
                  It is often made with egg, cabbage, sauce, and toast.
                </p>

                <p>
                  It can taste slightly sweet, which surprises some visitors.
                </p>

                <p>This is not the same as a slow cafe brunch.</p>

                <p>It is more like a quick Korean morning snack.</p>

                <p>
                  If you find a toast shop near a station or busy street, it can
                  be a good first breakfast.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bakery bread and coffee
                </h2>

                <p>Bread and bakery cafes are also common.</p>

                <p>Korea has large bakery chains and small bakeries.</p>

                <p>
                  You can get bread, pastries, coffee, sandwiches, or simple
                  baked snacks.
                </p>

                <p>
                  This is often easier than searching for a full restaurant
                  breakfast.
                </p>

                <p>
                  It may not feel deeply traditional, but it is how many people
                  actually solve a quick morning.
                </p>

                <p>For travelers, that matters.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Brunch cafes and Western-style breakfast
                </h2>

                <p>
                  Brunch cafes and Western-style breakfast places are common
                  now, especially in Seoul.
                </p>

                <p>
                  You can find eggs, toast, pancakes, salads, sandwiches, coffee,
                  and dessert-like brunch menus.
                </p>

                <p>This can be a good choice if you are not rushing.</p>

                <p>
                  But many brunch cafes are better for a slower late morning than
                  a very early start.
                </p>

                <p>Some open later than travelers expect.</p>

                <p>Some are popular on weekends.</p>

                <p>Some are more expensive than a simple Korean breakfast.</p>

                <p>That is not a problem if brunch is part of your plan.</p>

                <p>
                  Just do not depend on a brunch cafe before an early tour unless
                  you checked it first.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Map apps and Korean search terms
                </h2>

                <p>Use Naver Map or KakaoMap.</p>

                <p>Search the area around your hotel.</p>

                <p>Useful Korean search words include:</p>

                <p className="font-medium text-[var(--text)]">
                  아침식사, 24시, 김밥, 국밥, 해장국, 설렁탕, 토스트, 베이커리,
                  브런치.
                </p>

                <p>
                  You do not need to speak Korean perfectly to use these words.
                </p>

                <p>
                  Copy and paste them into a map app near your hotel area.
                </p>

                <p>
                  Then check distance, photos, reviews, and opening information
                  before walking.
                </p>

                <p>
                  Opening times can change, so do not trust your plan blindly.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple first-time breakfast plan
                </p>

                <p>
                  If you have a packed schedule, do not make breakfast
                  complicated.
                </p>

                <p>
                  A palace day, train to Busan, airport move, or early tour is
                  not the best time to chase a famous restaurant.
                </p>

                <p>Eat something close.</p>

                <p>Save your energy.</p>

                <p>Korea has better meals waiting later in the day.</p>

                <p>Hotel breakfast when you need zero stress.</p>

                <p>Convenience store breakfast when you start early.</p>

                <p>Gimbap when you want something easy and Korean.</p>

                <p>Soup and rice when you want a warm meal.</p>

                <p>Toast or bakery bread when you want something quick.</p>

                <p>Brunch cafe when your morning is slower.</p>

                <p>That is enough.</p>

                <p>You do not need a perfect breakfast every day.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>For HAEMIL readers, the honest answer is this:</p>

                <p>
                  Korean breakfast is not always a beautiful table of traditional
                  dishes.
                </p>

                <p>Sometimes it is gimbap in a small shop.</p>

                <p>Sometimes it is soup with rice.</p>

                <p>Sometimes it is toast near a station.</p>

                <p>Sometimes it is coffee and bread from a bakery.</p>

                <p>Sometimes it is a brunch cafe with eggs and coffee.</p>

                <p>
                  Sometimes it is triangle gimbap from a convenience store because
                  your train leaves early.
                </p>

                <p>That is not a failure.</p>

                <p>That is real travel.</p>

                <p>Eat simply in the morning.</p>

                <p>Check the map before walking.</p>

                <p>And do not assume every neighborhood wakes up at the same time.</p>

                <p>
                  Breakfast in Korea becomes much easier when you stop chasing an
                  ideal version of it.
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
                  Related food guides
                </h2>
              </div>

              <Link
                href="/food"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Food →
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
