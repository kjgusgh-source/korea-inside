import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/naengmyeon-korean-cold-noodles-guide-first-time`;

const pageTitle =
  "Naengmyeon Guide: Korean Cold Noodles, Regional Styles, and What to Eat with Them";
const pageDescription =
  "A friendly first-time guide to naengmyeon, Korean cold noodles, including mul naengmyeon, bibim naengmyeon, Pyongyang-style, Hamheung-style, hoe naengmyeon, yukhoe naengmyeon, and what to eat with them.";

const quickAnswer = [
  "Naengmyeon = Korean cold noodles — popular in summer and often ordered after Korean BBQ.",
  "Mul naengmyeon = cold broth noodles; refreshing and usually the easiest first order.",
  "Bibim naengmyeon = spicy mixed noodles; stronger and saucier.",
  "Pyongyang-style = milder, broth-focused; Hamheung-style = chewier noodles, often spicier sauce.",
  "Hoe and yukhoe naengmyeon are special menus — not at every shop.",
  "Pairs naturally with galbi, mandu, or suyuk; many Koreans order cold noodles after grilled meat.",
  "Add vinegar and mustard a little at a time — taste before adding more.",
  "Scissors on the table are normal for cutting long noodles.",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean BBQ guide for first-time visitors",
    description:
      "Samgyeopsal, banchan, ssam, and the social rhythm of Korean barbecue — useful before pairing cold noodles with grilled meat.",
    href: "/food/korean-bbq-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean Noodles Guide for First-Time Visitors",
    description:
      "Ramyeon, kalguksu, bibim guksu, makguksu, and other noodle dishes beyond naengmyeon.",
    href: "/food/korean-noodles-guide-first-time",
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
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, and paying.",
    href: "/food/how-to-order-food-in-korea",
  },
  {
    label: "Food guide",
    title: "Korean soups and stews guide for first-time visitors",
    description:
      "Jjigae, gukbap, and hot pots — warming one-bowl meals that contrast nicely with cold noodles on a different day.",
    href: "/food/korean-soups-and-stews-guide-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/naengmyeon-korean-cold-noodles-guide-first-time",
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

export default function NaengmyeonKoreanColdNoodlesGuideFirstTimePage() {
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
          name: "Naengmyeon",
        },
        {
          "@type": "Thing",
          name: "Korean food",
        },
        {
          "@type": "Thing",
          name: "Korean noodles",
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
          name: "Naengmyeon guide",
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
              Naengmyeon is Korean cold noodles — a bowl that shows up in hot
              weather, after a long day, and surprisingly often at the end of a
              Korean BBQ meal. The menu can look detailed: mul, bibim, Pyongyang,
              Hamheung, hoe, yukhoe. This guide is for reading those words before
              you order, not for ranking the “best” naengmyeon shop in Korea.
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
                  What is naengmyeon?
                </h2>

                <p>
                  Naengmyeon means cold noodles. The noodles are usually chewy
                  buckwheat or starch-based strands served cold — in icy broth
                  for mul naengmyeon, or mixed with sauce for bibim naengmyeon.
                  Koreans eat it often in summer, but it also appears after
                  grilled meat when people want something cold and light to
                  finish the meal. If you have never had cold noodle soup, it
                  can feel unusual at first; that is normal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Mul naengmyeon: cold broth noodles
                </h2>

                <p>
                  Mul naengmyeon comes in a cold, often slightly tangy broth with
                  noodles, cucumber, egg, and sometimes pear or beef. It is
                  refreshing rather than heavy — the kind of bowl people want on
                  a hot day or after oily food. The broth is usually mild. If
                  you want your first naengmyeon experience to feel gentle, mul
                  is the usual starting point.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bibim naengmyeon: spicy mixed noodles
                </h2>

                <p>
                  Bibim naengmyeon is mixed with a spicy, sweet, and sour red
                  sauce instead of broth. It can feel stronger and more
                  assertive than mul — less “refreshing soup,” more “cold spicy
                  noodle dish.” If you already like bibim-style Korean sauces,
                  this may fit you better than mul. If spice is a concern, start
                  with mul instead.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Pyongyang naengmyeon: subtle, mild, broth-focused
                </h2>

                <p>
                  Pyongyang-style naengmyeon is usually associated with a milder,
                  more broth-focused bowl — less sharp spice, more emphasis on
                  the noodle texture and clear cold soup. Not every restaurant
                  labels it this way, and styles vary. If you see “Pyongyang” on
                  the menu, expect something subtler than a heavy bibim sauce,
                  though the exact taste still depends on the shop.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hamheung naengmyeon: chewier noodles and spicy sauce
                </h2>

                <p>
                  Hamheung-style naengmyeon is often linked to chewier, more
                  elastic noodles and a spicier mixed sauce — closer to bibim
                  energy than mild mul broth. Again, names and recipes differ by
                  restaurant. If you want something with more bite in both
                  texture and flavor, Hamheung-style menus can be worth trying
                  once you know the basic mul and bibim difference.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hoe naengmyeon and yukhoe naengmyeon
                </h2>

                <p>
                  Some naengmyeon menus go beyond the basic mul and bibim styles.
                  Hoe naengmyeon usually means spicy cold noodles with seasoned
                  raw fish or skate-style toppings, depending on the restaurant.
                  Yukhoe naengmyeon is another special-style version, topped with
                  seasoned raw beef. These are not always the safest first order
                  for everyone, but they show how wide Korean cold noodle menus
                  can be. They are also not on every naengmyeon menu — check the
                  board or ask before assuming they are available.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Naengmyeon after Korean BBQ
                </h2>

                <p>
                  Naengmyeon is often eaten by itself, but it also appears
                  naturally beside meat. After Korean BBQ, some people order cold
                  noodles as a final bowl. The cold broth or spicy sauce cuts
                  through the heaviness of grilled meat, which is why naengmyeon
                  and galbi feel so natural together. If you are at a BBQ
                  place that also serves naengmyeon, ordering one bowl to share
                  at the end is a very local move. For grilling and table
                  basics, the{" "}
                  <Link
                    href="/food/korean-bbq-guide-first-time"
                    className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                  >
                    Korean BBQ guide
                  </Link>{" "}
                  covers the meal before the cold noodles arrive.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What to eat with naengmyeon: galbi, mandu, suyuk
                </h2>

                <p>
                  Many Koreans eat naengmyeon with grilled meat, especially
                  galbi or Korean BBQ. Mandu (dumplings) and suyuk (boiled
                  pork slices) also show up as natural side orders at naengmyeon
                  restaurants — shared plates while the noodles stay the main
                  bowl. You do not need all of them. One noodle bowl plus one
                  shared side is enough for many tables.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How Koreans adjust the flavor: vinegar, mustard, broth
                </h2>

                <p>
                  Mul naengmyeon often comes with vinegar and mustard on the
                  side — and sometimes extra cold broth. Add a little, taste,
                  then adjust. Do not pour everything in at once; the bowl can
                  go too sharp or too strong quickly. Scissors on the table are
                  normal — use them to cut the long noodles so they are easier
                  to eat. Staff may offer to cut for you if you look unsure.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <h2 className="text-xl font-semibold text-[var(--text)]">
                  What to order first
                </h2>

                <p>
                  If it is your first time, mul naengmyeon is the easiest
                  starting point when you want something refreshing. Bibim
                  naengmyeon is better if you already like spicy Korean sauces.
                  If you are eating grilled meat, ordering naengmyeon at the end
                  of the meal is one of the most Korean ways to understand why
                  this dish stays popular every summer.
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
