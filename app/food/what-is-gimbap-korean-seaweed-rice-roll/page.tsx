import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-gimbap-korean-seaweed-rice-roll`;

const pageTitle = "What Is Gimbap? Korea’s Seaweed Rice Roll Explained";
const pageDescription =
  "A friendly HAEMIL guide to gimbap, Korea’s seaweed rice roll, from bunsik shops and convenience stores to picnic memories, tuna gimbap, mini gimbap, and tteokbokki sauce pairings.";

const heroImage = {
  src: "/images/food/gimbap.jpg",
  alt: "Sliced Korean gimbap wrapped in seaweed",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: Gimbap / 김밥",
  "Meaning: Gim means seaweed, and bap means rice",
  "Main idea: A Korean seaweed rice roll made with seasoned rice and fillings",
  "Common fillings: Pickled radish, egg, carrot, spinach, ham, tuna mayo, cheese, beef, crab stick, vegetables, or kimchi depending on the shop",
  "Where to find it: Bunsik shops, convenience stores, snack shops, train stations, school-trip lunches, picnic boxes, and hiking food",
  "Common pairings: Tteokbokki, ramyeon, eomuk broth, twigim, and convenience store drinks",
  "Taste: Savory, slightly nutty from sesame oil, filling, and easy to eat",
  "Important: It is often compared to sushi, but it has its own Korean everyday-food feeling",
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
    canonical: "/food/what-is-gimbap-korean-seaweed-rice-roll",
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

export default function WhatIsGimbapKoreanSeaweedRiceRollPage() {
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
          name: "Gimbap",
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
          name: "What is gimbap?",
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
              What Is Gimbap? Korea&apos;s Seaweed Rice Roll Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Gimbap is one of the easiest Korean foods to like.
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
              <p>It is simple.</p>

              <p>It is portable.</p>

              <p>It is filling without feeling heavy.</p>

              <p>
                And in Korea, it shows up almost everywhere: bunsik shops,
                convenience stores, school trips, picnics, hiking bags, train
                rides, quick lunches, and late-night snack tables.
              </p>

              <p>
                Gimbap, or 김밥, means seaweed rice roll. Gim means seaweed, and
                bap means rice. The basic idea is simple: seasoned rice and
                fillings are rolled inside a sheet of dried seaweed, then sliced
                into small round pieces.
              </p>

              <p>It looks neat.</p>

              <p>But it does not feel fancy.</p>

              <p>That is part of the charm.</p>

              <p>
                Gimbap is everyday food. It is the kind of thing Koreans buy
                when they need a quick meal, pack when they are going somewhere,
                or order beside tteokbokki at a bunsik shop. It can be homemade,
                cheap, casual, nostalgic, or surprisingly satisfying depending
                on the moment.
              </p>

              <p>
                If you are new to Korean food, you may compare gimbap to sushi.
              </p>

              <p>
                That comparison is understandable because both use seaweed,
                rice, and a rolled shape. But gimbap has a different feeling.
                Sushi often uses vinegared rice and may focus on raw fish. Gimbap
                usually uses rice seasoned with sesame oil and salt, and the
                fillings are often cooked, pickled, or prepared in advance.
              </p>

              <p>The flavor is warmer and more everyday.</p>

              <p>Not restaurant-special.</p>

              <p>More lunchbox-comfort.</p>

              <p>
                A classic gimbap often includes pickled yellow radish, egg,
                carrot, spinach, and some kind of protein like ham, beef, or
                crab stick-style filling. But there is no single fixed version.
                Shops and families make it differently.
              </p>

              <p>
                That is why gimbap menus can be longer than visitors expect.
              </p>

              <p>
                Tuna gimbap is one of the easiest versions to try. It usually
                has tuna mayo, vegetables, and rice rolled together, making it
                soft, savory, and familiar for many first-time visitors.
              </p>

              <p>
                Cheese gimbap is another common choice. The cheese makes the
                roll feel a little richer, especially if you are eating it with
                spicy tteokbokki.
              </p>

              <p>Vegetable gimbap is simple and light.</p>

              <p>Beef gimbap feels more filling.</p>

              <p>
                Kimchi gimbap can be sharper and more Korean in flavor.
              </p>

              <p>
                Mini gimbap, or 꼬마김밥, is smaller and often served with
                mustard-style dipping sauce. It is easy to eat quickly, and it
                feels more snack-like than a full roll.
              </p>

              <p>
                Chungmu gimbap, or 충무김밥, is a different style from
                Tongyeong. It is usually served as small plain rice rolls with
                spicy squid or radish side dishes. It may surprise people who
                expect every gimbap to have many fillings inside.
              </p>

              <p>This variety is part of why gimbap is so useful.</p>

              <p>It can be a meal.</p>

              <p>It can be a snack.</p>

              <p>It can be part of a picnic.</p>

              <p>
                It can be something you grab from a convenience store before a
                train.
              </p>

              <p>
                It can be something a parent makes in the morning for a school
                trip.
              </p>

              <p>
                In Korea, gimbap has a strong picnic and school-trip feeling.
              </p>

              <p>
                Many Koreans remember opening a lunchbox and seeing rows of
                gimbap inside. It is easy to share, easy to pack, and easy to
                eat without a fork or spoon. That makes it perfect for moving
                around.
              </p>

              <p>
                Mountains, parks, buses, trains, school events, family outings
                — gimbap fits all of them.
              </p>

              <p>But gimbap also belongs to bunsik culture.</p>

              <p>
                At a bunsik shop, gimbap often sits next to tteokbokki, ramyeon,
                eomuk, twigim, and sundae. If tteokbokki is spicy and saucy,
                gimbap helps balance it. You can dip a piece of gimbap into
                tteokbokki sauce, and that small habit makes the meal feel very
                Korean.
              </p>

              <p>This is one of the easiest local pairings to try.</p>

              <p>Order tteokbokki.</p>

              <p>Order one roll of gimbap.</p>

              <p>Dip one piece lightly into the red sauce.</p>

              <p>That is it.</p>

              <p>
                You will understand why the two foods appear together so often.
              </p>

              <p>
                Gimbap also works well with ramyeon. The noodles are hot and
                salty, while the gimbap gives you rice, vegetables, and
                something more filling. At convenience stores, triangle kimbap
                may be more common as a quick snack, but full gimbap rolls are
                also easy to find in many places.
              </p>

              <p>The quality can vary a lot.</p>

              <p>
                A fresh handmade gimbap from a good shop feels different from a
                packaged convenience store roll. Homemade gimbap feels different
                again. Some are packed with fillings. Some are mostly rice. Some
                taste strongly of sesame oil. Some are drier. Some are made to be
                cheap and fast.
              </p>

              <p>That does not mean only one version is correct.</p>

              <p>It means gimbap changes with the situation.</p>

              <p>
                If you are tired and need something easy, convenience store
                gimbap can be useful.
              </p>

              <p>
                If you are near a busy bunsik shop, fresh gimbap is better.
              </p>

              <p>
                If someone makes it at home, that can feel more personal than
                anything you buy.
              </p>

              <p>For first-time visitors, start simple.</p>

              <p>
                Try classic gimbap or tuna gimbap first. Add tteokbokki if you
                want the bunsik-shop feeling. Add ramyeon if you want a quick
                meal. If you see mini gimbap, try it as a snack. If you visit a
                market or a regional restaurant, you may find a version that
                feels very different from the basic one.
              </p>

              <p>
                Do not worry too much about finding the &quot;best&quot;
                gimbap. A good first gimbap is usually fresh, easy to eat, and
                next to something warm or spicy.
              </p>

              <p>
                Gimbap is a food for movement — mornings, buses, small shops,
                school memories, hiking bags, quick lunches, and dipping into
                tteokbokki sauce when nobody is trying to be elegant. That
                everyday feeling is why gimbap has stayed so close to Korean
                daily life: useful, familiar, and quietly comforting.
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
