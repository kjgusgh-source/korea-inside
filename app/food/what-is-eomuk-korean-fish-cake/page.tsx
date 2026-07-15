import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-eomuk-korean-fish-cake`;

const pageTitle = "What Is Eomuk? Korea’s Fish Cake Street Snack Explained";
const pageDescription =
  "A friendly HAEMIL guide to eomuk, Korean fish cake, from hot skewers and winter broth to flat sheets, balls, Busan-style varieties, and why it appears next to tteokbokki so often.";

const heroImage = {
  src: "/images/food/eomuk.png",
  alt: "Korean eomuk fish cake skewers in warm broth",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: Eomuk / 어묵",
  "Common casual word: Odeng / 오뎅, often used for skewered fish cake in hot broth",
  "Main idea: Savory fish cake made from processed fish paste, usually mixed with starch or seasoning depending on the product",
  "Common forms: Flat sheets, folded skewers, rolls, balls, long bars, vegetable eomuk, spicy eomuk, cheese-filled versions, and soup-style pieces",
  "Where to find it: Street stalls, bunsik shops, markets, convenience stores, supermarkets, and Busan-style eomuk shops",
  "Common pairings: Tteokbokki, fish cake broth, twigim, sundae, gimbap, and winter street snacks",
  "Taste: Savory, slightly chewy, warm, and comforting",
  "Important: It is not a sweet cake, and it does not taste like dessert",
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
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Cup ramyeon convenience store guide",
    description:
      "A local-friendly guide to Korean cup ramyeon, hot water machines, convenience store counters, and easy local pairings.",
    href: "/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
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
    canonical: "/food/what-is-eomuk-korean-fish-cake",
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

export default function WhatIsEomukKoreanFishCakePage() {
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
          name: "Eomuk",
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
          name: "What is eomuk?",
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
              What Is Eomuk? Korea&apos;s Fish Cake Street Snack Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Eomuk is one of those Korean foods that can be easy to miss if
              nobody explains it.
            </p>
          </article>

          <PostImageFigure image={heroImage} variant="hero" priority />

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
                You may see it in tteokbokki, on a wooden skewer in hot broth,
                folded, rolled, flat, round, spicy, or stuffed with cheese — and
                hear people call it eomuk or odeng. Eomuk, or 어묵, is Korean fish
                cake made from processed fish paste mixed with starch and
                seasoning. In English &quot;fish cake&quot; can sound strange —
                it is not sweet and not dessert at all. It is savory, chewy, and
                very everyday in Korea.
              </p>

              <p>
                The version many travelers notice first is skewered eomuk in hot
                broth — a long piece folded onto a wooden skewer, kept warm in
                light broth at street stalls, markets, or bunsik shops. People
                stand near the stall, eat the skewer, and sometimes sip the broth
                from a paper cup. In cold weather that broth matters; sometimes
                it is the reason people stop. A warm eomuk skewer on a winter
                street is quick, cheap, and deeply comforting.
              </p>

              <p>
                You may also hear odeng (오뎅), a casual word especially for
                skewered fish cake in broth — from Japanese oden, while eomuk is
                the more standard Korean word. Koreans use both naturally. Eomuk
                is not only one shape: flat sheets sliced into tteokbokki or
                soup; skewered street-stall versions; ball-shaped pieces in
                soups; long bar-style snacks with vegetables, spicy flavor, or
                cheese; and Busan-style shops with many shapes and gift-box
                products. Busan is strongly connected with fish cake culture as a
                port city — when Koreans say Busan eomuk they often imagine a
                more serious shop, though even there styles range from simple to
                fancy.
              </p>

              <p>
                Eomuk also appears inside tteokbokki — pieces soak up the red
                sauce and make the dish feel more like a snack meal. Some people
                like the fish cake as much as the rice cakes. Eomuk and
                tteokbokki belong to the same casual world: bunsik shops, school
                areas, market stalls, winter streets, paper cups of broth, and
                people eating quickly before going somewhere else. It is usually
                a familiar supporting character, not the star of a fancy meal —
                in soups, lunch boxes, side dishes, convenience store snacks, and
                whole shops in Busan.
              </p>

              <p>
                For a first try, choose one skewer at a street stall or bunsik
                shop, eat it while warm, sip the broth if offered, then try
                tteokbokki next to it for the classic pairing. If you are worried
                about seafood flavor, the broth-skewer version is usually mild and
                savory — not raw fish, more like a soft, warm, slightly chewy
                snack with a seafood-based background. Good eomuk has a gentle
                chew; some versions are soft and smooth, others bouncier or
                thicker depending on the fish paste and starch. Quality varies —
                a convenience store snack, a market skewer, and a good Busan shop
                belong to different situations, none automatically wrong.
              </p>

              <p>
                Once you recognize eomuk, you start seeing it everywhere — in
                tteokbokki sauce, warm soup, street skewers, snack-shop menus,
                next to fried food, at winter markets. It stops being &quot;that
                fish cake thing&quot; and starts feeling like part of daily Korea:
                warm, savory, chewy, and always nearby.
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
