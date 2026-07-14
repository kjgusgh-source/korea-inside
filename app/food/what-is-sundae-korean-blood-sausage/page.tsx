import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-sundae-korean-blood-sausage`;

const pageTitle = "What Is Sundae? Korea’s Blood Sausage Street Food Explained";
const pageDescription =
  "A friendly HAEMIL guide to sundae, Korea’s blood sausage street food, from bunsik shops and market stalls to tteokbokki sauce, dipping salts, offal sides, and regional styles.";

const quickFacts = [
  "Korean name: Sundae / 순대",
  "English description: Korean blood sausage",
  "Common style: Usually made with glass noodles, blood, and casing, though recipes and styles vary",
  "Where to find it: Bunsik shops, markets, street stalls, pocha-style places, and delivery menus",
  "Common pairings: Tteokbokki, twigim, eomuk broth, gimbap, and other bunsik foods",
  "Local habit: Many people dip sundae in tteokbokki sauce",
  "Dips: Salt, seasoned salt, ssamjang, or chojang depending on region and shop",
  "Extra sides: Some places serve liver, lung, or other offal pieces together",
  "Important: It is normal everyday snack food in Korea, not only a “challenge food.”",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Tteokbokki spicy rice cake guide",
    description:
      "A local-friendly guide to Korea’s spicy rice cake snack, from chewy tteok and red sauce to bunsik shops, markets, and classic add-ons.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "Twigim fried snacks guide",
    description:
      "A local-friendly guide to Korean fried snacks, from gimmari and fried mandu to the very Korean habit of dipping twigim in tteokbokki sauce.",
    href: "/food/what-is-twigim-korean-fried-snacks",
  },
  {
    label: "Food guide",
    title: "Eomuk fish cake guide",
    description:
      "A local-friendly guide to Korean fish cake, from street-stall skewers and warm broth to the many shapes you see in tteokbokki, soup, and snack shops.",
    href: "/food/what-is-eomuk-korean-fish-cake",
  },
  {
    label: "Food",
    title: "Open the Food hub",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea and how to order without turning every meal into homework.",
    href: "/food",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/what-is-sundae-korean-blood-sausage",
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

export default function WhatIsSundaeKoreanBloodSausagePage() {
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
          name: "Sundae",
        },
        {
          "@type": "Thing",
          name: "Korean food",
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
          name: "Food",
          item: `${siteUrl}/food`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is sundae?",
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
              What Is Sundae? Korea&apos;s Blood Sausage Street Food Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Sundae can sound surprising in English.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Korean blood sausage — for some visitors the English name makes
                it feel like a food challenge before they even see it. In Korea,
                though, sundae is everyday snack food at markets, bunsik shops,
                street stalls, late-night places, and delivery menus. It belongs
                to the same world as tteokbokki, twigim, eomuk, and gimbap.
              </p>

              <p>
                Sundae, or 순대, is usually made with glass noodles, blood, and
                casing, though ingredients and texture vary. It is sliced into
                thick pieces and served warm. The taste is milder than many
                first-time visitors expect — not sharp or bloody in a dramatic
                way. The texture is soft, slightly chewy, and filling; the flavor
                is savory and calm, which is why it works so well next to spicy
                tteokbokki sauce.
              </p>

              <p>
                One of the most natural ways to eat sundae is to dip it into
                tteokbokki sauce. The sundae is mild; the red sauce adds heat,
                sweetness, and stickiness. Order sundae with tteokbokki at a
                bunsik shop and the two foods feel meant for the same table —
                tteokbokki for spicy chew, twigim for fried crunch, eomuk for
                warm broth, sundae for something soft and heavier. For a first
                try, order it with tteokbokki rather than alone; that is how
                Koreans usually experience it.
              </p>

              <p>
                Some places serve sundae with liver, lung, or other offal pieces,
                which can surprise visitors. At a market or old-style shop, the
                owner may ask whether you want &quot;everything&quot; included —
                sundae plus extra organ pieces. Some people love those parts;
                some skip them. Both are normal; start with only sundae if you
                are unsure. Dipping sauce also varies: salt or seasoned salt in
                some places, ssamjang or chojang in others depending on region
                and shop.
              </p>

              <p>
                Sundae is not one fixed food either. The basic bunsik-shop version
                is simple and made for quick eating. Chapssal sundae uses
                glutinous rice and can feel fuller and more old-fashioned.
                Regional styles use more blood, different fillings, or richer
                texture — Byeongcheon sundae is a regional name many Koreans
                recognize. A school-area bunsik shop, a market stall, and a
                regional specialty restaurant will not feel the same; they are
                just different sundae moods.
              </p>

              <p>
                The most approachable first try is at a bunsik shop or market
                stall: a small portion with tteokbokki if you can. Try one
                piece plain, then dip the next in sauce; if the shop gives you
                salt, try that too. Sundae often makes more sense after the
                second or third bite — the first is about getting used to the
                idea, then texture and sauce pairing become easier. It is cheap
                enough to share, filling enough for a snack meal, mild enough to
                balance spicy food, and familiar enough that many Koreans connect
                it with school days, market streets, and late-night delivery.
              </p>

              <p>
                Do not treat it like a scary food just because the English
                translation says blood sausage. Treat it like Korean snack-shop
                food — a soft, savory piece on the same table as red tteokbokki,
                fried twigim, and warm eomuk broth, with someone saying,
                &quot;Just try one.&quot; That is usually when sundae makes the
                most sense: not alone, not as a dare, but as part of the plate.
              </p>
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
