import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/what-to-buy-in-korea-first-time`;

const pageTitle =
  "What to Buy in Korea for the First Time: Skincare, Snacks, Souvenirs, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to what first-time visitors can buy in Korea, from skincare and snacks to stationery, fashion, traditional souvenirs, convenience store finds, and honest shopping tips.";

const quickAnswer = [
  "Easiest things to buy: snacks, sheet masks, small skincare items, stationery, socks, character goods",
  "Best practical gifts: Korean snacks, tea, small beauty items, cute stationery",
  "Best personal buys: skincare, fashion basics, cafe goods, lifestyle items",
  "Best food souvenirs: packaged snacks, instant coffee, tea, ramyeon, seaweed snacks",
  "Main caution: tourist-heavy streets can cost more",
  "Local tip: leave luggage space and do not buy every viral item on the first day",
];

const relatedGuides = [
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
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/what-to-buy-in-korea-first-time",
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

export default function WhatToBuyInKoreaFirstTimePage() {
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
          name: "Korea shopping",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "Souvenirs",
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
          name: "What to buy in Korea",
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
              If it is your first time visiting Korea, shopping can be fun very
              quickly. There are skincare shops, snack aisles, convenience
              stores, cute stationery, fashion streets, and small souvenir
              corners everywhere. But it is also easy to buy too much too early.
              The best things to buy are the ones you will actually use, carry
              home safely, or enjoy sharing with someone.
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
                  The best things to buy in Korea are not always the most viral
                  items online.
                </p>

                <p>
                  For a first trip, think small, practical, and easy to pack.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Skincare
                </h2>

                <p>
                  Skincare is one of the most popular things visitors buy in
                  Korea.
                </p>

                <p>
                  You will see sheet masks, sunscreens, cleansers, lip products,
                  hand creams, serums, and travel-size beauty items in many
                  shopping areas.
                </p>

                <p>This can be fun, but also overwhelming.</p>

                <p>There are too many choices.</p>

                <p>A good first-time rule is simple:</p>

                <p>Do not buy a full routine on your first day.</p>

                <p>
                  Start with a few small items, especially things that are easy
                  to pack and easy to gift. Sheet masks, hand creams, lip
                  balms, and small skincare products are usually easier than
                  heavy bottles.
                </p>

                <p>
                  Also remember that popular beauty streets can feel convenient
                  but not always cheap. In areas like Myeongdong, Hongdae,
                  Gangnam, or major malls, you may be paying for location and
                  convenience too.
                </p>

                <p>That does not make it bad.</p>

                <p>
                  It just means you should compare calmly and avoid
                  panic-buying.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Snacks and food souvenirs
                </h2>

                <p>Korean snacks are another easy choice.</p>

                <p>
                  Packaged snacks, seaweed snacks, instant coffee sticks, tea,
                  ramyeon, candies, cookies, and seasonal convenience store
                  items can be fun souvenirs.
                </p>

                <p>Snacks are good because they are easy to share.</p>

                <p>
                  They also give people at home a small taste of Korea without
                  needing a big explanation.
                </p>

                <p>The trade-off is luggage space.</p>

                <p>
                  Snacks can be light, but bulky. A few bags are fine. Ten bags
                  can suddenly fill your suitcase.
                </p>

                <p>
                  If you plan to buy food items, check what you are allowed to
                  bring back to your country. Rules can differ, so avoid risky
                  items and keep it simple with sealed packaged goods.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience store finds
                </h2>

                <p>Convenience stores are good for small finds.</p>

                <p>
                  Korean convenience stores are useful for travel snacks, drinks,
                  desserts, triangle gimbap, cup ramyeon, small candies, and
                  seasonal items.
                </p>

                <p>They are not only for cheap food.</p>

                <p>
                  They are also an easy way to explore small Korean products
                  without spending too much at once.
                </p>

                <p>
                  The nice part is that you can try things during the trip
                  before deciding what to bring home.
                </p>

                <p>
                  Instead of buying a big snack haul immediately, taste a few
                  things first.
                </p>

                <p>
                  If you like them, buy more near the end of the trip.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Stationery, fashion, and traditional souvenirs
                </h2>

                <p>
                  Stationery and cute small goods are also good souvenirs.
                </p>

                <p>
                  Korea has many notebooks, pens, stickers, pouches, character
                  items, keyrings, cards, and small lifestyle goods.
                </p>

                <p>These are easy to pack and easy to give as gifts.</p>

                <p>
                  They also feel more personal than random tourist souvenirs.
                </p>

                <p>The trade-off is that small items add up.</p>

                <p>
                  A few cute things can become a full shopping basket before you
                  notice.
                </p>

                <p>
                  Choose items that feel useful, not only cute in the store.
                </p>

                <p>Fashion can be fun, but sizing and quality vary.</p>

                <p>
                  Korea is good for casual fashion, socks, caps, bags,
                  accessories, and seasonal basics.
                </p>

                <p>
                  Shopping streets can be enjoyable even if you are only
                  browsing.
                </p>

                <p>But do not assume every item is a bargain.</p>

                <p>
                  Some areas are trendy because they are commercial, not
                  because they are cheap.
                </p>

                <p>
                  Also, sizes may feel different from what you are used to.
                </p>

                <p>
                  Try things on when possible, check fabric and stitching, and
                  think about whether you would still wear it after the trip.
                </p>

                <p>Traditional-style souvenirs can be meaningful.</p>

                <p>
                  Small items inspired by hanbok, Korean patterns, tea culture,
                  paper goods, crafts, bookmarks, pouches, or simple home items
                  can make nice gifts.
                </p>

                <p>
                  Insadong and palace-area shops are often connected to this
                  kind of souvenir mood.
                </p>

                <p>The trade-off is that atmosphere can affect price.</p>

                <p>
                  A beautiful traditional-style shop in a popular area may cost
                  more than a simple store elsewhere.
                </p>

                <p>That can be okay if the item feels special.</p>

                <p>
                  Just do not buy only because the street feels pretty.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafe goods and lifestyle items
                </h2>

                <p>
                  Cafe goods and lifestyle items can also be tempting.
                </p>

                <p>
                  Korea has strong cafe culture, and some cafes sell mugs,
                  tumblers, beans, bags, postcards, or small design goods.
                </p>

                <p>
                  These can feel like memories from a specific place, which makes
                  them nice personal souvenirs.
                </p>

                <p>
                  But cafe items can be expensive, especially in trendy
                  neighborhoods.
                </p>

                <p>
                  Buy them when the place really matters to you, not just
                  because the display looks nice.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Shopping strategy
                </p>

                <p>
                  One good shopping strategy is to wait until the middle of the
                  trip.
                </p>

                <p>On the first day, look around.</p>

                <p>Notice prices.</p>

                <p>Notice what you keep thinking about.</p>

                <p>Try snacks before buying many.</p>

                <p>Test whether you actually like a beauty item.</p>

                <p>See how much luggage space you have.</p>

                <p>Then shop more seriously later.</p>

                <p>
                  This helps you avoid carrying bags around Seoul and regretting
                  early purchases.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Where to shop
                </h2>

                <p>Where you shop also matters.</p>

                <p>
                  Myeongdong is convenient for beauty, snacks, tourist shopping,
                  and easy browsing.
                </p>

                <p>
                  Hongdae is better for young fashion, cute goods, casual shops,
                  and street mood.
                </p>

                <p>
                  Gangnam and malls are better for polished shopping, beauty,
                  lifestyle, and department-store-style browsing.
                </p>

                <p>
                  Insadong is better for traditional-style souvenirs and
                  cultural items.
                </p>

                <p>Convenience stores are good everywhere.</p>

                <p>
                  Markets can be interesting, but they may feel more confusing
                  for first-time visitors.
                </p>

                <p>None of these areas is perfect.</p>

                <p>Myeongdong can feel touristy.</p>

                <p>Hongdae can be crowded.</p>

                <p>Gangnam can be expensive.</p>

                <p>Insadong can charge more for atmosphere.</p>

                <p>Malls are comfortable but not always the best value.</p>

                <p>
                  That is why the best shopping choice depends on what you
                  actually want.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Easy first-trip shopping list
                </p>

                <p>
                  For first-time visitors, the easiest shopping list is:
                </p>

                <p>a few skincare items,</p>

                <p>some packaged snacks,</p>

                <p>one or two stationery or character goods,</p>

                <p>a small traditional-style souvenir,</p>

                <p>a convenience store favorite,</p>

                <p>and maybe one personal fashion or lifestyle item.</p>

                <p>That is enough.</p>

                <p>You do not need to bring half of Korea home.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best thing to buy in Korea is not
                  always the thing everyone online says is popular.
                </p>

                <p>
                  It is the thing that still feels useful or meaningful after
                  the trip.
                </p>

                <p>A snack you actually liked.</p>

                <p>A small gift someone will enjoy.</p>

                <p>A skincare item you can pack easily.</p>

                <p>A notebook you will use.</p>

                <p>A tea or souvenir that reminds you of a quiet street.</p>

                <p>A cafe item from a place you loved.</p>

                <p>
                  Shopping in Korea is most fun when it stays connected to your
                  trip.
                </p>

                <p>Not pressure.</p>

                <p>Not a checklist.</p>

                <p>
                  Just small things that help you remember the feeling of being
                  here.
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
