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
              <p>You see something fried.</p>

              <p>You point at it.</p>

              <p>You eat it with tteokbokki sauce.</p>

              <p>That is already half the story.</p>

              <p>
                Twigim, or 튀김, simply means fried food. But when Koreans talk
                about twigim at a bunsik shop or street stall, they usually mean
                casual fried snacks served next to foods like tteokbokki, eomuk,
                sundae, and gimbap.
              </p>

              <p>It is not fancy food.</p>

              <p>It is snack food.</p>

              <p>That is why it feels so natural beside tteokbokki.</p>

              <p>
                Tteokbokki is spicy, sweet, chewy, and covered in red sauce.
                Twigim is fried, usually crisp on the outside, and easy to dip.
                Put them together, and the sauce suddenly has a second job. It
                is not only for the rice cakes anymore. It becomes a dipping
                sauce for everything on the plate.
              </p>

              <p>This is one of the most Korean ways to eat twigim.</p>

              <p>You do not always eat it dry.</p>

              <p>You dip it into tteokbokki sauce.</p>

              <p>Sometimes you ask the shop to pour sauce over it.</p>

              <p>
                Sometimes the twigim sits next to the tteokbokki long enough
                that the crisp edges become softer and red. That may sound like
                a problem if you only think fried food should stay crunchy, but
                in Korea, saucy twigim has its own charm.
              </p>

              <p>Fresh and crispy is good.</p>

              <p>Soft with tteokbokki sauce is also good.</p>

              <p>They are just different moods.</p>

              <p>
                The most famous twigim for many Koreans is probably gimmari.
              </p>

              <p>
                Gimmari is a fried seaweed roll filled with glass noodles. It
                looks simple, but it is one of the best foods to dip into
                tteokbokki sauce. The seaweed outside gets fried, the noodles
                inside stay soft, and the sauce fills in the flavor.
              </p>

              <p>
                If you are trying Korean bunsik food for the first time, gimmari
                is a good place to start.
              </p>

              <p>Fried mandu is another easy choice.</p>

              <p>
                These are fried dumplings, often crisp and simple. They are not
                always the most delicate dumplings in the world, but that is
                not the point. At a bunsik shop, fried mandu works because it is
                easy, familiar, and very good with sauce.
              </p>

              <p>Fried squid is also common.</p>

              <p>
                It can be chewy, salty, and satisfying, especially when the
                batter is still crisp. Some shops sell squid pieces, some sell
                longer pieces, and some may not have it at all. Like most bunsik
                food, the exact menu depends on the shop.
              </p>

              <p>Fried sweet potato is a softer option.</p>

              <p>
                It is a little sweet, warm, and less intense than squid or
                dumplings. If you do not want something too salty, sweet potato
                twigim can feel comforting.
              </p>

              <p>
                You may also see fried vegetables, fried shrimp, or other
                shop-specific pieces.
              </p>

              <p>This is why twigim can be fun.</p>

              <p>There is no single correct plate.</p>

              <p>
                One small shop may have five basic types. A market stall may
                have a big display. A school-area bunsik shop may keep it
                simple. A busy place may fry in larger batches, while a smaller
                place may have fewer choices.
              </p>

              <p>Do not worry about finding the perfect one.</p>

              <p>Look for what seems fresh.</p>

              <p>
                If the pieces look too old or too oily, skip them. If people
                are ordering and the fried snacks are moving quickly, that is
                usually a better sign.
              </p>

              <p>
                Twigim is sometimes compared to tempura, and the comparison is
                understandable because both are fried. But Korean bunsik-style
                twigim does not always feel like delicate Japanese tempura. It
                is often more casual, more sauce-friendly, and more connected to
                snack-shop eating.
              </p>

              <p>The mood is different.</p>

              <p>
                Tempura may make you think of a clean plate and light batter.
              </p>

              <p>
                Twigim may make you think of a red tteokbokki tray, paper cups
                of eomuk broth, and people choosing pieces from a warm display
                case.
              </p>

              <p>That difference matters.</p>

              <p>Twigim is not only about frying. It is about where it lives.</p>

              <p>It lives beside tteokbokki.</p>

              <p>It lives near market alleys.</p>

              <p>It lives in bunsik shops where students stop after school.</p>

              <p>
                It lives on small plates shared between friends who say they are
                not that hungry, then finish everything anyway.
              </p>

              <p>That is why twigim feels so familiar in Korea.</p>

              <p>
                It is not usually the main character, but it makes the whole
                snack meal better.
              </p>

              <p>If you order tteokbokki alone, it can feel like one spicy dish.</p>

              <p>
                If you add twigim, the meal becomes more fun. You get chew from
                the rice cakes, crunch from the fried snacks, warmth from eomuk
                broth if you have it, and maybe sundae or gimbap on the side.
              </p>

              <p>This is the classic bunsik feeling.</p>

              <p>Not one perfect dish.</p>

              <p>A small table full of things that work together.</p>

              <p>For first-time visitors, an easy order is:</p>

              <p>One tteokbokki.</p>

              <p>A few pieces of twigim.</p>

              <p>One cup of eomuk broth if the shop offers it.</p>

              <p>That is enough to understand the rhythm.</p>

              <p>
                Take one fried piece. Dip it in the red sauce. Eat it while it
                is still warm. Then try another piece after it has soaked a
                little. You may find that the softer, saucier version feels
                just as good as the crispy one.
              </p>

              <p>That is the small discovery.</p>

              <p>
                Korean fried snacks are not only about crunch. They are about
                sauce, sharing, and the comfort of eating something simple with
                something spicy.
              </p>

              <p>
                For HAEMIL readers, twigim is worth knowing because it makes
                tteokbokki culture easier to understand. Once you notice twigim,
                you stop seeing Korean snack food as separate items. You start
                seeing the full plate.
              </p>

              <p>Tteokbokki gives the sauce.</p>

              <p>Twigim gives the crunch.</p>

              <p>Eomuk gives the broth.</p>

              <p>Sundae gives the heavier side.</p>

              <p>Gimbap makes it feel like a meal.</p>

              <p>
                Together, they create the kind of casual Korean food scene that
                many locals grew up with.
              </p>

              <p>
                So if you see twigim at a market or bunsik shop, do not
                overthink it.
              </p>

              <p>Choose two or three pieces.</p>

              <p>Dip them in tteokbokki sauce.</p>

              <p>That is the most natural way in.</p>
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
