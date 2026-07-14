import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-bunsik-korean-snack-food`;

const pageTitle = "What Is Bunsik? Korea’s Snack-Shop Food Culture Explained";
const pageDescription =
  "A friendly HAEMIL guide to bunsik, Korea’s casual snack-shop food culture, from tteokbokki, gimbap, twigim, sundae, and eomuk to the after-school and market-stall feeling behind it.";

const quickFacts = [
  "Korean name: Bunsik / 분식",
  "Place name: Bunsikjip / 분식집, a casual Korean snack shop",
  "Main idea: Affordable, quick, casual Korean snack-shop food",
  "Common foods: Tteokbokki, gimbap, twigim, sundae, eomuk, ramyeon, and other simple dishes",
  "Where to find it: School areas, markets, neighborhood shops, subway areas, street stalls, and casual restaurants",
  "Mood: Spicy, warm, cheap, shareable, nostalgic, and very everyday",
  "Good first order: Tteokbokki with twigim, gimbap with ramyeon, or eomuk broth on the side",
  "Important: Every shop has its own menu, so do not expect every bunsik place to look the same",
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
    title: "Gimbap seaweed rice roll guide",
    description:
      "A local-friendly guide to Korea’s seaweed rice roll, from everyday bunsik shops and convenience stores to tuna gimbap, mini gimbap, and picnic memories.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
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
    title: "Sundae blood sausage guide",
    description:
      "A local-friendly guide to Korean blood sausage, from market stalls and bunsik shops to tteokbokki sauce, dipping salts, and regional styles.",
    href: "/food/what-is-sundae-korean-blood-sausage",
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
    canonical: "/food/what-is-bunsik-korean-snack-food",
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

export default function WhatIsBunsikKoreanSnackFoodPage() {
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
          name: "Bunsik",
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
          name: "What is bunsik?",
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
              Food culture guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What Is Bunsik? Korea&apos;s Snack-Shop Food Culture Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Bunsik is one of the best words to know before eating casual food
              in Korea.
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
                You may not see it translated perfectly in English — sometimes
                Korean snack food, sometimes street food, sometimes a small
                restaurant meal. Bunsik, or 분식, is the food you eat when you
                want something quick, cheap, warm, spicy, and familiar. A
                bunsikjip (분식집) is a casual snack shop where you might find
                tteokbokki, gimbap, twigim, sundae, eomuk, ramyeon, and other
                simple foods on the same menu.
              </p>

              <p>
                A bunsik shop can be near a school, market, subway station,
                neighborhood street, or busy shopping area — tiny or chain-style,
                old and local or clean and modern. Menus change, but the feeling
                is usually similar: fast food, but Korean and more emotional than
                the phrase sounds. For many Koreans, bunsik carries an
                after-school feeling — finish class, stop with friends, order
                tteokbokki, add twigim, share gimbap, eat quickly before going
                home. Food for small money and big cravings.
              </p>

              <p>
                Tteokbokki is often the center — red sauce that is spicy, sweet,
                thick, and easy to share, covering chewy rice cakes, fish cake,
                and sometimes noodles or eggs. At a bunsik shop, tteokbokki sauce
                connects the table: you dip twigim in it, dip sundae in it, maybe
                touch gimbap to it. Twigim gives the fried side — gimmari, fried
                mandu, squid, sweet potato, vegetables, or shrimp depending on the
                shop. Fresh twigim is crispy; in sauce it turns softer and
                saucier. Both are good, and that mix is very Korean.
              </p>

              <p>
                Eomuk gives warmth — inside tteokbokki or on skewers in broth,
                sometimes served in a paper cup or from a self-serve area. On a
                cold day that simple broth can matter as much as the food.
                Gimbap makes the meal feel complete — rice, seaweed, vegetables,
                and fillings in neat slices that balance spicy food well. If
                tteokbokki is the loud red part, gimbap is the calm part that
                makes you feel like you actually ate something.
              </p>

              <p>
                Sundae may surprise visitors — in English it is usually blood
                sausage, which can sound intense — but in bunsik culture it is
                just a common order with tteokbokki. Soft, mild, savory, it
                works well with spicy sauce. Some shops serve liver, lung, or
                other pieces on the side; for a first time, just sundae with
                tteokbokki sauce is fine. Ramyeon belongs here too — a hot bowl
                at a bunsik shop next to gimbap, or cup ramyeon at a convenience
                store. Different setting, similar comfort: noodles, heat, salt,
                spice, something easy when you do not want to think too hard.
              </p>

              <p>
                For travelers, a safe first order is tteokbokki and twigim for
                the spicy sauce and fried pairing. Add gimbap if you want
                something more filling; try a cup of eomuk broth if the shop has
                it; add sundae and dip one piece in the sauce if you feel
                curious. That one table explains more than a long definition.
                Bunsik is not one perfect dish — it is a small food system of
                spicy rice cakes, fried snacks, seaweed rolls, fish cake broth,
                blood sausage, instant noodles, cheap plates, and shared bites.
              </p>

              <p>
                Every shop is different. A market stall may focus on tteokbokki
                and eomuk; a neighborhood bunsikjip may sell gimbap, ramyeon,
                and simple rice dishes; a modern chain may standardize everything.
                None is the only real version, but the mood stays familiar. Once
                you know bunsik, tteokbokki, gimbap, twigim, sundae, and eomuk
                stop feeling random and become one table — one of the easiest
                ways to taste everyday Korea, the Korea of school streets, market
                corners, late snacks, and people saying, &quot;Let&apos;s just
                get bunsik.&quot;
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
