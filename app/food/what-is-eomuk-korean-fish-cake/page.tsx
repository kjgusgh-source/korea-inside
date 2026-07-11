import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-eomuk-korean-fish-cake`;

const pageTitle = "What Is Eomuk? Korea’s Fish Cake Street Snack Explained";
const pageDescription =
  "A friendly HAEMIL guide to eomuk, Korean fish cake, from hot skewers and winter broth to flat sheets, balls, Busan-style varieties, and why it appears next to tteokbokki so often.";

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
              <p>You may see it in tteokbokki.</p>

              <p>You may see it on a wooden skewer in hot broth.</p>

              <p>
                You may see it folded, rolled, flat, round, spicy, or stuffed
                with cheese.
              </p>

              <p>And you may hear people call it eomuk or odeng.</p>

              <p>So what is it?</p>

              <p>
                Eomuk, or 어묵, is Korean fish cake. It is usually made from
                processed fish paste mixed with starch, seasoning, and other
                ingredients depending on the product. In English, &quot;fish
                cake&quot; can sound a little strange, because it is not a sweet
                cake and it does not feel like dessert at all.
              </p>

              <p>It is savory.</p>

              <p>It is chewy.</p>

              <p>And in Korea, it is very everyday.</p>

              <p>
                The version many travelers notice first is skewered eomuk in hot
                broth. This is the one you often see at street stalls, markets,
                or bunsik shops. A long piece of fish cake is folded onto a
                wooden skewer and kept warm in a light broth. People stand near
                the stall, eat the skewer, and sometimes sip the broth from a
                paper cup.
              </p>

              <p>In cold weather, that broth matters.</p>

              <p>Sometimes the broth is the reason people stop.</p>

              <p>
                A warm eomuk skewer on a winter street does not feel fancy, but
                it feels deeply comforting. It is quick, cheap, and easy to eat
                while standing. That is why many Koreans connect eomuk with
                winter, late-night snacks, and old market streets.
              </p>

              <p>You may also hear the word odeng.</p>

              <p>
                In Korea, odeng, or 오뎅, is a very common casual word,
                especially when people are talking about skewered fish cake in
                broth. The word comes from Japanese oden, so eomuk is the more
                Korean standard word. But in daily life, many people still say
                odeng naturally.
              </p>

              <p>A simple way to understand it is this:</p>

              <p>Eomuk is the Korean word for fish cake.</p>

              <p>
                Odeng is the casual street-food word many people use, especially
                for the skewered version.
              </p>

              <p>Do not worry too much if you hear both.</p>

              <p>Koreans use both depending on the situation.</p>

              <p>
                The important thing to know is that eomuk is not only one
                shape.
              </p>

              <p>There are many types.</p>

              <p>
                Flat sheet eomuk is common in home cooking and bunsik food. You
                may see it sliced into tteokbokki, stir-fried as a side dish, or
                added to soup. It is thin, flexible, and easy to cut.
              </p>

              <p>
                Skewered eomuk is the street-stall version. It is often folded
                on a stick and served in warm broth. This is the one many people
                casually call odeng.
              </p>

              <p>
                Ball-shaped eomuk can appear in soups or snack shops. Some are
                plain, and some may have bits of vegetables or different
                seasoning inside.
              </p>

              <p>
                Long bar-style eomuk is often eaten as a snack. You may see
                versions with vegetables, spicy flavor, cheese, crab-style
                filling, or other additions depending on the shop.
              </p>

              <p>There are also premium or Busan-style eomuk shops.</p>

              <p>
                Busan is strongly connected with Korean fish cake culture,
                partly because of its port city identity and long food industry
                around seafood. When Koreans say Busan eomuk, they often
                imagine a slightly more serious fish cake shop with many shapes,
                fillings, and gift-box style products.
              </p>

              <p>But even Busan eomuk is not one single thing.</p>

              <p>Some are simple.</p>

              <p>Some are fancy.</p>

              <p>Some are for soup.</p>

              <p>Some are for snacking.</p>

              <p>
                Some are filled with cheese, vegetables, shrimp-style flavors,
                spicy fillings, or glass noodles.
              </p>

              <p>That variety is part of why eomuk can surprise visitors.</p>

              <p>
                At first, it may look like one small side ingredient. Then you
                walk into a bigger eomuk shop and see a whole display case full
                of different shapes. Suddenly it feels less like &quot;one fish
                cake&quot; and more like a small category of Korean food.
              </p>

              <p>Eomuk also appears inside tteokbokki.</p>

              <p>
                In many tteokbokki shops, the red spicy rice cakes come with
                pieces of fish cake. The eomuk soaks up the sauce and makes the
                dish feel more like a snack meal. Some people even like the fish
                cake pieces as much as the rice cakes.
              </p>

              <p>
                This is why eomuk and tteokbokki feel so close in Korean food
                culture.
              </p>

              <p>They belong to the same casual world.</p>

              <p>
                Bunsik shops, school areas, market stalls, winter streets, paper
                cups of broth, red sauce, fried snacks, and people eating
                quickly before going somewhere else.
              </p>

              <p>Eomuk is not usually the star of a fancy meal.</p>

              <p>
                It is more like a familiar supporting character that Koreans see
                everywhere.
              </p>

              <p>You can find it in soups.</p>

              <p>You can find it in lunch boxes.</p>

              <p>You can find it as a side dish.</p>

              <p>You can find it in convenience store snacks.</p>

              <p>You can find it on skewers at markets.</p>

              <p>
                And if you visit Busan, you may find whole shops built around
                it.
              </p>

              <p>
                For first-time visitors, the easiest way to try eomuk is at a
                street stall or bunsik shop.
              </p>

              <p>Choose one skewer.</p>

              <p>Eat it while it is warm.</p>

              <p>Sip the broth if the shop offers it.</p>

              <p>
                Then try tteokbokki next to it if you want the classic pairing.
              </p>

              <p>
                If you are worried about seafood flavor, start with the
                broth-skewer version. It is usually mild, savory, and easy to
                understand. It does not taste like raw fish. It tastes more like
                a soft, warm, slightly chewy snack with a seafood-based
                background.
              </p>

              <p>The texture is important.</p>

              <p>
                Good eomuk should not feel like bread or cake. It should have a
                gentle chew. Some versions are soft and smooth. Some are
                bouncier. Some are thicker and richer. The texture depends on
                the fish paste, the amount of starch, and how it is made.
              </p>

              <p>That is why quality can vary.</p>

              <p>
                A cheap convenience store fish cake snack may feel different from
                a good Busan eomuk shop. A market skewer may feel different
                from packaged eomuk cooked at home. None of these is
                automatically wrong. They just belong to different situations.
              </p>

              <p>
                For HAEMIL readers, eomuk is worth knowing because it helps
                unlock a lot of Korean casual food.
              </p>

              <p>Once you recognize it, you start seeing it everywhere.</p>

              <p>In tteokbokki sauce.</p>

              <p>In warm soup.</p>

              <p>On street skewers.</p>

              <p>Inside snack-shop menus.</p>

              <p>Next to fried food.</p>

              <p>At winter markets.</p>

              <p>
                That is when eomuk stops being &quot;that fish cake thing&quot;
                and starts feeling like part of daily Korea.
              </p>

              <p>Not dramatic.</p>

              <p>Not expensive.</p>

              <p>Not difficult.</p>

              <p>Just warm, savory, chewy, and always nearby.</p>
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
