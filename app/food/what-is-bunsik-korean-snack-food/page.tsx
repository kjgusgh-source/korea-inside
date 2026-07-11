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
                You may not see it translated perfectly in English.
              </p>

              <p>Sometimes people call it Korean snack food.</p>

              <p>Sometimes it feels like street food.</p>

              <p>Sometimes it feels like a small restaurant meal.</p>

              <p>
                The easiest way to understand it is this: bunsik is the food you
                eat when you want something quick, cheap, warm, spicy, and
                familiar.
              </p>

              <p>
                Bunsik, or 분식, has roots in the idea of light or flour-based
                meals, but in daily Korean life, people often use it to talk
                about casual snack-shop food. A bunsikjip, or 분식집, is a place
                where you might find tteokbokki, gimbap, twigim, sundae, eomuk,
                ramyeon, and other simple foods on the same menu.
              </p>

              <p>It is not fancy.</p>

              <p>That is exactly why people love it.</p>

              <p>
                A bunsik shop can be near a school, a market, a subway station, a
                neighborhood street, or a busy shopping area. Some are tiny.
                Some are chain-style. Some feel old and local. Some are clean and
                modern. The menus can change a lot, but the feeling is usually
                similar: fast food, but Korean and more emotional than the
                phrase &quot;fast food&quot; sounds.
              </p>

              <p>For many Koreans, bunsik has an after-school feeling.</p>

              <p>
                You finish class, stop by a small shop with friends, order
                tteokbokki, add twigim, maybe share gimbap, and eat quickly
                before going home or going to an academy. That memory is not the
                same for everyone, but the feeling is familiar enough that
                bunsik often carries a little nostalgia.
              </p>

              <p>It is food for small money and big cravings.</p>

              <p>Tteokbokki is often the center.</p>

              <p>
                The red sauce is spicy, sweet, thick, and easy to share. It
                covers chewy rice cakes, fish cake pieces, and sometimes noodles
                or eggs. But the sauce does not stay only with the rice cakes.
                At a bunsik shop, tteokbokki sauce becomes the thing that
                connects the table.
              </p>

              <p>You dip twigim in it.</p>

              <p>You dip sundae in it.</p>

              <p>You might even touch a piece of gimbap to it.</p>

              <p>
                That is why bunsik is better understood as a set of foods, not
                just separate menu items.
              </p>

              <p>Twigim gives you the fried side.</p>

              <p>
                Twigim simply means fried food, but in a bunsik shop it usually
                means fried snacks like gimmari, fried mandu, squid, sweet
                potato, vegetables, or shrimp depending on the shop. Fresh
                twigim is crispy, but when it meets tteokbokki sauce, it becomes
                softer and saucier. Both versions are good.
              </p>

              <p>That is very Korean.</p>

              <p>
                Crunch is nice, but sauce is also part of the comfort.
              </p>

              <p>Eomuk gives you warmth.</p>

              <p>
                Eomuk is Korean fish cake, and you often see it inside tteokbokki
                or on skewers in warm broth. At some shops, the broth is served
                in a paper cup or from a self-serve area. On a cold day, that
                simple broth can feel just as important as the food itself.
              </p>

              <p>It is light, savory, and comforting.</p>

              <p>Gimbap makes the meal feel complete.</p>

              <p>
                A roll of gimbap gives you rice, seaweed, vegetables, egg, and
                fillings in neat slices. It balances spicy food well. If
                tteokbokki is the red, loud part of the meal, gimbap is the calm
                part that makes you feel like you actually ate something.
              </p>

              <p>
                This is why tteokbokki and gimbap appear together so often.
              </p>

              <p>They make sense as a pair.</p>

              <p>Sundae is the one that may surprise visitors.</p>

              <p>
                In English, Korean sundae is usually described as blood sausage,
                which can sound intense. But inside bunsik culture, it is not
                treated like a scary food. It is just one of the common things
                people order with tteokbokki. Its soft, mild, savory taste works
                well with the spicy sauce.
              </p>

              <p>
                Some shops also serve liver, lung, or other pieces on the side.
              </p>

              <p>You can try those later if you want.</p>

              <p>
                For a first time, just sundae with tteokbokki sauce is enough.
              </p>

              <p>Ramyeon also belongs to this world.</p>

              <p>
                At a bunsik shop, ramyeon can be a quick hot bowl next to
                gimbap. At a convenience store, cup ramyeon becomes its own
                everyday meal. Different setting, similar comfort: noodles, heat,
                salt, spice, and something easy when you do not want to think
                too hard.
              </p>

              <p>That is the deeper feeling of bunsik.</p>

              <p>It is food that does not ask too much from you.</p>

              <p>You do not need a reservation.</p>

              <p>You do not need a long menu explanation.</p>

              <p>You do not need to dress nicely.</p>

              <p>You just walk in, choose a few familiar things, and eat.</p>

              <p>
                For travelers, the hardest part may be knowing what to order
                first.
              </p>

              <p>
                A safe first order is tteokbokki and twigim. That gives you the
                spicy sauce and the fried snack pairing. If you want something
                more filling, add gimbap. If the shop has eomuk broth, try a
                cup. If you feel curious, add sundae and dip one piece in the
                tteokbokki sauce.
              </p>

              <p>
                That one table will explain more than a long definition.
              </p>

              <p>Bunsik is not one perfect dish.</p>

              <p>It is a small food system.</p>

              <p>Spicy rice cakes.</p>

              <p>Fried snacks.</p>

              <p>Seaweed rice rolls.</p>

              <p>Fish cake broth.</p>

              <p>Blood sausage.</p>

              <p>Instant noodles.</p>

              <p>Cheap plates.</p>

              <p>Shared bites.</p>

              <p>A little mess.</p>

              <p>A lot of comfort.</p>

              <p>
                Every shop is different, so do not expect the same exact menu
                everywhere. A market stall may focus on tteokbokki and eomuk. A
                neighborhood bunsikjip may sell gimbap, ramyeon, and simple rice
                dishes. A modern chain may make everything cleaner and more
                standardized. None of these is the only real version.
              </p>

              <p>Bunsik changes with the place.</p>

              <p>But the mood stays familiar.</p>

              <p>
                For HAEMIL readers, bunsik is worth understanding because it
                connects many Korean foods that may look separate at first. Once
                you know the idea of a bunsik shop, tteokbokki, gimbap, twigim,
                sundae, and eomuk stop feeling random.
              </p>

              <p>They become one table.</p>

              <p>
                And that table is one of the easiest ways to taste everyday
                Korea.
              </p>

              <p>Not fancy Korea.</p>

              <p>Not expensive Korea.</p>

              <p>
                Just the Korea of school streets, market corners, late snacks,
                quick lunches, and people saying, &quot;Let&apos;s just get
                bunsik.&quot;
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
