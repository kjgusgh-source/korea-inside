import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-twigim-korean-fried-snacks`;

const pageTitle = "What Is Twigim? Korea’s Fried Snacks for Tteokbokki Sauce";
const pageDescription =
  "A friendly HAEMIL guide to twigim, Korean fried snacks often eaten with tteokbokki sauce, from gimmari and fried mandu to squid, sweet potato, and bunsik shop pairings.";

const quickFacts = [
  "Korean name: Twigim / 튀김",
  "Meaning: Fried food or fried snacks",
  "Common types: Gimmari, fried mandu, fried squid, fried sweet potato, fried vegetables, and fried shrimp depending on the shop",
  "Where to find it: Bunsik shops, markets, street stalls, school-area snack shops, and some casual restaurants",
  "Common pairings: Tteokbokki, eomuk broth, sundae, gimbap, and ramyeon",
  "Local habit: Many people dip twigim in tteokbokki sauce",
  "Texture: Crispy when fresh, softer and saucier when dipped",
  "Important: The exact menu varies a lot by shop",
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
    title: "Eomuk fish cake guide",
    description:
      "A local-friendly guide to Korean fish cake, from street-stall skewers and warm broth to the many shapes you see in tteokbokki, soup, and snack shops.",
    href: "/food/what-is-eomuk-korean-fish-cake",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
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
    canonical: "/food/what-is-twigim-korean-fried-snacks",
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

export default function WhatIsTwigimKoreanFriedSnacksPage() {
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
          name: "Twigim",
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
          name: "What is twigim?",
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
              What Is Twigim? Korea&apos;s Fried Snacks for Tteokbokki Sauce
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Twigim is one of the easiest Korean foods to understand with your
              eyes.
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
                You see something fried, point at it, eat it with tteokbokki
                sauce — that is already half the story. Twigim, or 튀김, simply
                means fried food, but at a bunsik shop or street stall it usually
                means casual fried snacks served next to tteokbokki, eomuk,
                sundae, and gimbap. Tteokbokki is spicy, sweet, and chewy;
                twigim is fried and easy to dip. Put them together and the red
                sauce becomes a dipping sauce for everything on the plate.
              </p>

              <p>
                You do not always eat twigim dry — dip it into tteokbokki sauce,
                or ask the shop to pour sauce over it. Sometimes the pieces sit
                next to the tteokbokki long enough that crisp edges turn soft
                and red. Fresh and crispy is good; soft with sauce is also good.
                They are just different moods.
              </p>

              <p>
                Gimmari is probably the most famous twigim — a fried seaweed
                roll filled with glass noodles, simple but one of the best foods
                to dip. Fried mandu (dumplings) are another easy choice: crisp,
                familiar, and very good with sauce. Fried squid is common too —
                chewy, salty, satisfying when the batter is still crisp. Fried
                sweet potato is a softer option if you want something less salty.
                You may also see fried vegetables, shrimp, or shop-specific
                pieces; there is no single correct plate, and menus vary a lot by
                shop.
              </p>

              <p>
                Look for what seems fresh. If pieces look too old or oily, skip
                them; if people are ordering and fried snacks are moving quickly,
                that is usually a better sign. Twigim is sometimes compared to
                tempura, but bunsik-style twigim is more casual and
                sauce-friendly — think red tteokbokki tray, paper cups of eomuk
                broth, and people choosing from a warm display case, not a clean
                light-batter plate.
              </p>

              <p>
                Twigim is not usually the main character, but it makes the whole
                snack meal better. Order tteokbokki alone and it can feel like
                one spicy dish; add twigim and you get chew from the rice cakes,
                crunch from the fried snacks, warmth from eomuk broth if you
                have it, and maybe sundae or gimbap on the side — the classic
                bunsik feeling of a small table full of things that work together.
              </p>

              <p>
                For a first try: one tteokbokki, a few pieces of twigim, and a
                cup of eomuk broth if the shop offers it. Take one fried piece,
                dip it in the red sauce while it is warm, then try another after
                it has soaked a little — the softer, saucier version can feel
                just as good as the crispy one. Korean fried snacks are about
                sauce, sharing, and eating something simple with something spicy.
                Once you notice twigim, Korean snack food stops looking like
                separate items and starts looking like one full plate.
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
