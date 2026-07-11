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
              <p>Korean blood sausage.</p>

              <p>
                For some visitors, that name makes it feel like a food challenge
                before they even see it. But in Korea, sundae is not usually
                treated like a strange or extreme food. It is everyday snack
                food. You see it at markets, bunsik shops, street stalls,
                late-night food places, and delivery menus.
              </p>

              <p>
                It belongs to the same world as tteokbokki, twigim, eomuk, and
                gimbap.
              </p>

              <p>That is the first thing to understand.</p>

              <p>
                Sundae, or 순대, is a Korean blood sausage. A common snack-shop
                version is made with glass noodles, blood, and casing, though the
                exact ingredients and texture can vary. It is usually sliced
                into thick pieces and served warm.
              </p>

              <p>
                The taste is milder than many first-time visitors expect.
              </p>

              <p>
                It is not usually sharp or bloody in the dramatic way people
                imagine. The texture is soft, slightly chewy, and filling. The
                flavor is savory and calm, which is why it works so well next to
                spicy tteokbokki sauce.
              </p>

              <p>That sauce matters.</p>

              <p>
                One of the most natural ways to eat sundae in Korea is to dip it
                into tteokbokki sauce. The sundae itself is mild, and the red
                sauce adds heat, sweetness, and stickiness. If you order sundae
                with tteokbokki at a bunsik shop, the two foods start to feel
                like they were meant to sit on the same table.
              </p>

              <p>
                This is why sundae is easier to understand as part of a set.
              </p>

              <p>Tteokbokki gives you spicy chew.</p>

              <p>Twigim gives you fried crunch.</p>

              <p>Eomuk gives you warm broth.</p>

              <p>Sundae gives you something soft, savory, and heavier.</p>

              <p>
                Together, they create the classic Korean snack-shop feeling.
              </p>

              <p>
                You do not have to eat sundae alone like a formal dish. In
                fact, for a first try, it may be better not to. Order it with
                tteokbokki or eat it with other bunsik foods. That way, you
                understand how Koreans usually experience it: not as one isolated
                sausage, but as part of a casual meal.
              </p>

              <p>
                Some places also serve sundae with liver, lung, or other offal
                pieces.
              </p>

              <p>This can surprise visitors.</p>

              <p>
                If you order sundae at a market or old-style shop, the owner may
                ask whether you want &quot;everything&quot; included. In Korean,
                that can mean sundae plus extra organ pieces. Some people love
                those parts. Some people skip them. Both are normal.
              </p>

              <p>If you are not sure, you can start with only sundae.</p>

              <p>
                The dipping sauce can also change depending on where you are.
              </p>

              <p>
                In some places, sundae comes with salt or seasoned salt. In
                other regions or shops, people may eat it with ssamjang, a thick
                savory dipping paste, or chojang, a red vinegared chili sauce.
                This is one of those small Korean food details that locals
                notice quickly.
              </p>

              <p>
                Ask two Koreans how they dip sundae, and you may get different
                answers.
              </p>

              <p>That is part of the fun.</p>

              <p>Sundae is not one single fixed food either.</p>

              <p>
                The basic bunsik-shop sundae is the easiest version to find. It
                is simple, soft, and made for quick eating. Chapssal sundae uses
                glutinous rice and can feel fuller and more old-fashioned. Some
                regional styles use more blood, different fillings, or a richer
                texture. Byeongcheon sundae is one regional name many Koreans
                recognize when talking about famous sundae areas.
              </p>

              <p>For a traveler, you do not need to memorize every type.</p>

              <p>
                Just know that sundae can change a lot depending on where you
                eat it.
              </p>

              <p>
                A simple plate at a school-area bunsik shop will not feel the
                same as a regional specialty sundae restaurant. A market stall
                may serve it one way, while a delivery tteokbokki set may
                include a softer, more casual version.
              </p>

              <p>None of these is automatically wrong.</p>

              <p>They are just different sundae moods.</p>

              <p>
                The most approachable way to try sundae is at a bunsik shop or
                market stall.
              </p>

              <p>Order a small portion.</p>

              <p>Add tteokbokki if you can.</p>

              <p>Try one piece plain first.</p>

              <p>Then dip the next piece in sauce.</p>

              <p>If the shop gives you salt, try that too.</p>

              <p>
                You may find that sundae makes more sense after the second or
                third bite. The first bite is often about getting used to the
                idea. After that, the texture and the pairing with sauce become
                easier.
              </p>

              <p>
                That is why sundae has stayed in Korean daily food culture.
              </p>

              <p>It is cheap enough to share.</p>

              <p>Filling enough to count as a snack meal.</p>

              <p>Mild enough to balance spicy food.</p>

              <p>
                And familiar enough that many Koreans connect it with school
                days, market streets, winter evenings, or late-night delivery.
              </p>

              <p>It is not fancy.</p>

              <p>It is not trying to be beautiful.</p>

              <p>But it has a place.</p>

              <p>
                For HAEMIL readers, the best way to think about sundae is this:
              </p>

              <p>
                Do not treat it like a scary food just because the English
                translation says blood sausage.
              </p>

              <p>Treat it like a Korean snack-shop food.</p>

              <p>
                A soft, savory piece on the same table as red tteokbokki, fried
                twigim, warm eomuk broth, and a few friends saying,
                &quot;Just try one.&quot;
              </p>

              <p>That is usually how sundae makes the most sense.</p>

              <p>Not alone.</p>

              <p>Not as a dare.</p>

              <p>But as part of the plate.</p>
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
