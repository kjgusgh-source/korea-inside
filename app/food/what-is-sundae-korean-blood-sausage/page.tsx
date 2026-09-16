import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-sundae-korean-blood-sausage`;

const pageTitle = "What Is Sundae? Korea’s Blood Sausage Street Food Explained";
const pageDescription =
  "A friendly HAEMIL guide to sundae, Korea’s blood sausage street food, from bunsik shops and market stalls to tteokbokki sauce, dipping salts, offal sides, and regional styles.";

const heroImage = {
  src: "/images/food/sundae.webp",
  alt: "Korean sundae blood sausage with assorted offal",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

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
              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                The Basics: What Sundae Actually Is
              </h2>

              <p>
                Korean blood sausage — for some visitors, the English name alone
                makes it sound like a food you would only try on a dare. In
                Korea, though, sundae is just another item on the everyday menu:
                something you find at markets, bunsik shops, street stalls,
                late-night places, and delivery apps, sitting in the same lineup
                as tteokbokki, twigim, eomuk, and gimbap. Sundae, or 순대, is
                usually made with glass noodles, blood, and casing, though the
                exact recipe and texture shift from shop to shop. It comes
                sliced into thick rounds and served warm. Most first-time
                visitors expect something sharp or overwhelming and are
                surprised that it is not — the taste is mild and savory rather
                than dramatic, and the texture is soft, a little chewy, and
                filling. That calm flavor is exactly why it works so well next
                to something spicy.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                The Natural Pairing: Sundae and Tteokbokki Sauce
              </h2>

              <p>
                One of the most natural ways to eat sundae is to dip it
                straight into tteokbokki sauce. Sundae itself is mild, so the
                red sauce brings the heat, sweetness, and stickiness that it is
                missing on its own. Order sundae alongside tteokbokki at a
                bunsik shop and the two feel like they were made for the same
                table: tteokbokki for spicy chew, twigim for fried crunch,
                eomuk for warm broth, and sundae for something soft and a
                little heavier to round things out. If it is your first time,
                order it with tteokbokki rather than on its own — that
                combination is closer to how most Koreans actually eat it, and
                it gives you the sauce to lean on if the flavor feels
                unfamiliar at first.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                The Offal Question: What &quot;Everything Included&quot; Means
              </h2>

              <p>
                Some shops serve sundae together with liver, lung, or other
                offal pieces, and this is usually the part that catches
                visitors off guard. At a market stall or an old-style shop, the
                owner may ask whether you want it &quot;everything&quot;
                included — meaning sundae plus those extra organ pieces on the
                side. This is a real local preference question, not a test:
                some people love the extra parts, plenty of others stick to
                plain sundae, and both answers are completely normal. If you
                are not sure, it is fine to just ask for sundae by itself the
                first time. Dipping salt varies by shop too — plain salt or
                seasoned salt in some places, ssamjang or chojang in others,
                depending on the region and the shop&apos;s own habit.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                Not One Fixed Food: Regional and Style Differences
              </h2>

              <p>
                Sundae is not one fixed dish either, the way the English
                translation might suggest. The basic bunsik-shop version is
                simple and made for quick eating. Chapssal sundae, made with
                glutinous rice, tends to feel fuller and a bit more
                old-fashioned. Regional styles go further still — richer
                texture, more blood, or different fillings — and Byeongcheon
                sundae is one specific regional name that many Koreans would
                recognize on sight. A school-area bunsik shop, a market stall,
                and a restaurant known for a regional specialty are not really
                serving the same food; they are just different versions of the
                same idea, shaped by where you happen to be standing.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                How to Try It for the First Time
              </h2>

              <p>
                The most approachable first try is at a bunsik shop or market
                stall: a small portion, ideally alongside tteokbokki. Try one
                piece plain, then dip the next in sauce; if the shop offers
                salt, try that too. Sundae often makes more sense by the
                second or third bite — the first is really about getting used
                to the idea, and the texture and sauce pairing click into
                place after that. It is cheap enough to share, filling enough
                to work as a snack meal on its own, mild enough to balance out
                something spicy, and familiar enough that many Koreans connect
                it with school days, market streets, and food ordered on a
                whim late at night.
              </p>

              <p>
                So do not treat it like a scary food just because the English
                translation says blood sausage. Treat it the way Koreans do —
                as snack-shop food, a soft and savory piece sitting on the same
                table as red tteokbokki, fried twigim, and warm eomuk broth,
                usually with someone next to you saying, &quot;Just try
                one.&quot; That is really the moment sundae makes the most
                sense: not eaten alone, not treated as a dare, but as one more
                piece of the plate.
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
