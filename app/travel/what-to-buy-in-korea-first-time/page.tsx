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
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Skincare
                </h2>

                <p>
                  Skincare is popular and overwhelming — sheet masks, sunscreens,
                  cleansers, lip products, and travel-size items everywhere. Start
                  with a few small, packable pieces rather than a full routine on
                  day one. Beauty streets in Myeongdong, Hongdae, Gangnam, and
                  major malls are convenient but not always the best value; compare
                  calmly and skip panic-buying viral products that may not suit your
                  skin.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Snacks and food souvenirs
                </h2>

                <p>
                  Korean snacks make easy souvenirs — packaged treats, seaweed
                  snacks, instant coffee sticks, tea, ramyeon, and seasonal
                  convenience store items are light, shareable, and easy to
                  explain. Watch luggage space; a few bags are fine, ten bags fill
                  a suitcase. For food items, stick to sealed packaged goods and
                  check what your home country allows — rules vary.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience store finds
                </h2>

                <p>
                  Convenience stores are good for small finds beyond cheap food —
                  drinks, desserts, candies, and seasonal items let you try things
                  during the trip before deciding what to bring home. Taste a few
                  snacks first; if you like them, buy more near the end so you
                  are not hauling bags around Seoul from day one.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Stationery, fashion, and traditional souvenirs
                </h2>

                <p>
                  Stationery and cute small goods — notebooks, pens, stickers,
                  pouches, character items — pack easily and feel more personal
                  than generic tourist souvenirs, though small items add up fast.
                  Fashion can be fun for socks, caps, bags, and seasonal basics,
                  but sizing and quality vary; try things on and check whether
                  you would wear it after the trip. Trendy streets are commercial,
                  not always cheap. Traditional-style items from Insadong or
                  palace-area shops — tea, paper goods, bookmarks, pouches — can
                  be meaningful when the item feels special, not only because the
                  street looks pretty.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafe goods and lifestyle items
                </h2>

                <p>
                  Cafe goods — mugs, tumblers, beans, postcards — make nice
                  personal souvenirs when the place mattered to you, but trendy
                  neighborhood cafes can charge a lot for design. Buy when the
                  memory is real, not only because the display looked good.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Shopping strategy
                </p>

                <p>
                  A useful strategy: look around on the first day, notice prices
                  and what keeps catching your eye, try snacks and beauty items
                  before bulk-buying, check luggage space, then shop more seriously
                  mid-trip or near the end — that avoids carrying bags all over
                  Seoul and regretting early purchases.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Where to shop
                </h2>

                <p>
                  Where you shop shapes what you find: Myeongdong for beauty and
                  easy tourist browsing, Hongdae for young fashion and cute goods,
                  Gangnam and malls for polished lifestyle shopping, Insadong for
                  traditional-style souvenirs, convenience stores everywhere for
                  small trials. Each has trade-offs — touristy, crowded, expensive,
                  or atmosphere-priced — so pick based on what you actually want,
                  not a perfect shopping district.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Easy first-trip shopping list
                </p>

                <p>
                  An easy first-trip list: a few skincare items, some packaged
                  snacks, one or two stationery or character goods, a small
                  traditional-style souvenir, a convenience store favorite, and
                  maybe one personal fashion or lifestyle piece — enough to
                  remember the trip without filling your suitcase.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best purchase is often not the viral product everyone
                  mentions online — it is the snack you actually liked, the small
                  gift someone will use, the notebook you will keep, or the cafe
                  mug from a place you loved. Shopping stays fun when it connects
                  to your trip, not a checklist or pressure to buy everything
                  Korean social media says is popular.
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
