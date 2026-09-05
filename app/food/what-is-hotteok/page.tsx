import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-hotteok`;

const pageTitle = "What Is Hotteok? Korea's Warm Street Pancake, Explained";
const pageDescription =
  "A friendly HAEMIL guide to hotteok, Korea's warm filled street pancake, covering the classic sweet version plus seed, gireum, and vegetable hotteok, and why topped versions are everywhere now.";

const heroImage = {
  src: "/images/food/hotteok-classic.webp",
  alt: "A hand holding a white paper cup with two whole, golden-brown hotteok on a Korean street.",
  credit: "AI-generated image by HAEMIL",
  license: "Owned by HAEMIL",
};

const gireumImage = {
  src: "/images/food/hotteok-gireum.webp",
  alt: "A round, golden-brown hotteok held by hand in front of a street stall sign that reads 호떡.",
  credit: "AI-generated image by HAEMIL",
  license: "Owned by HAEMIL",
};

const vegetableImage = {
  src: "/images/food/hotteok-vegetable.webp",
  alt: "Two whole, golden-brown hotteok served on a piece of paper wrapping.",
  credit: "AI-generated image by HAEMIL",
  license: "Owned by HAEMIL",
};

const toppingsImage = {
  src: "/images/food/hotteok-assorted-toppings.webp",
  alt: "Hotteok topped with a mix of crushed nuts and seeds on the outside.",
  credit: "AI-generated image by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: Hotteok / 호떡",
  "Type: Warm, pan-fried dough pancake with a filling inside",
  "Classic filling: Melted brown sugar, cinnamon, and often a few crushed peanuts",
  "Styles you'll commonly see: Seed hotteok (씨앗호떡), gireum hotteok (기름호떡), and vegetable hotteok (야채호떡)",
  "Where to find it: Street stalls, markets, night markets, and some bakeries or cafes",
  "Season: Most associated with fall and winter, though some stalls sell it year-round",
  "Heads up: The filling stays hot much longer than the dough, so give it a minute before biting in",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "What Is Tteokbokki?",
    description:
      "Chewy rice cakes in red sauce — what tteokbokki is, where you find it, and the classic add-ons at bunsik shops.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "What Is Bungeoppang?",
    description:
      "Fish-shaped winter street snacks — red bean bungeoppang and the cold-day stall mood that feels local, not staged.",
    href: "/food/what-is-bungeoppang",
  },
  {
    label: "Food guide",
    title: "What Is Twigim?",
    description:
      "Korean fried snack-shop sides — gimmari, mandu, and dipping twigim back into tteokbokki sauce like locals do.",
    href: "/food/what-is-twigim-korean-fried-snacks",
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
    canonical: "/food/what-is-hotteok",
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

export default function WhatIsHotteokPage() {
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
          name: "Hotteok",
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
          name: "What is hotteok?",
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
              What Is Hotteok? Korea&apos;s Warm Street Pancake, Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Hotteok is one of those Korean street snacks that looks simple
              from the outside and then surprises you with what&apos;s
              actually inside.
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
                The Basics: What Hotteok Actually Is
              </h2>

              <p>
                Hotteok, or 호떡, is a warm, pan-fried dough pancake with a
                filling pressed inside it. A vendor flattens a ball of soft
                dough on a hot griddle, usually with a flat metal press, so
                the outside turns golden and slightly crisp while the inside
                stays soft and warm. In the classic version, that inside is
                filled with melted brown sugar and cinnamon, sometimes with a
                few crushed peanuts mixed in, so the first bite releases a
                warm, syrupy center. Most stalls hand it to you in a small
                paper cup or wrapper, which is less about presentation and
                more about the fact that the filling gets seriously hot.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                Why Hotteok Feels Like a Cold-Weather Snack
              </h2>

              <p>
                Hotteok has a strong association with fall and winter in
                Korea. As the weather cools down, street vendors with
                griddles start showing up outside subway exits, near markets,
                and along busy shopping streets, and the smell of hotteok
                cooking is one of the more familiar signs that colder weather
                has arrived. You can still find hotteok in some markets and
                shops during warmer months, but the mental image most people
                have — a steaming hotteok in a paper cup on a chilly evening
                — is very much tied to the cooler seasons.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                A Few Hotteok Styles You&apos;ll Likely See in Korea
              </h2>

              <p>
                The brown-sugar version is what most people picture first,
                but it is really just one recognizable style among a few. If
                you spend some time around Korean street food, you will
                likely come across these as well.
              </p>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Classic Sweet Hotteok
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:text-base">
                    The original, and still the most common. Melted brown
                    sugar and cinnamon fill the dough, and the syrup stays hot
                    long after the outside has cooled down enough to hold.
                    This is the version shown at the top of this page.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Seed Hotteok (씨앗호떡)
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:text-base">
                    Seed hotteok mixes sunflower seeds, pumpkin seeds, and
                    other nuts into the filling instead of relying only on
                    syrup, so each bite has more crunch alongside the
                    sweetness. It&apos;s a recognizable style you&apos;ll see
                    at street stalls in a number of cities, and it&apos;s
                    especially associated with market areas in Busan.
                  </p>
                </div>

                <PostImageFigure image={gireumImage} variant="inline" align="left" />

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Gireum Hotteok (기름호떡)
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:text-base">
                    Gireum literally means &quot;oil,&quot; and it&apos;s one
                    of the names you&apos;ll sometimes see used for hotteok
                    cooked this way. Exactly how much oil goes into the pan,
                    and how thin or crisp the result turns out, tends to
                    depend on the stall — hotteok-making style varies quite a
                    bit from vendor to vendor, even for what looks like the
                    same snack. This one came from a small street stand
                    simply marked 호떡.
                  </p>
                </div>

                <PostImageFigure image={vegetableImage} variant="inline" align="right" />

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Vegetable Hotteok (야채호떡)
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:text-base">
                    Not every hotteok is sweet. Vegetable hotteok swaps the
                    sugar filling for shredded vegetables, sometimes mixed
                    with glass noodles and a light savory sauce, so it eats
                    more like a handheld savory pancake than a dessert. It
                    shows up less often than the sweet versions, but it&apos;s
                    a good option if you want something filling that
                    isn&apos;t sugary.
                  </p>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                Why Some Hotteok Now Come with Toppings
              </h2>

              <PostImageFigure image={toppingsImage} variant="inline" align="left" />

              <p>
                You may also come across hotteok finished with toppings
                pressed onto the outside — crushed nuts, seeds, sesame, or
                sliced almonds added after cooking. Compared with seed or
                gireum hotteok, which are established names people already
                recognize, this topped-on-top look feels like a newer
                variation, and it&apos;s not something every stall does.
                Where you do see it, the exact toppings vary a lot from
                vendor to vendor, so no two trays look quite the same.
              </p>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  A local note from HAEMIL
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] md:text-base">
                  Lately, I&apos;ve been noticing more hotteok with toppings
                  pressed onto the outside — nuts, seeds, sesame, sliced
                  almonds — more often than I used to. I can&apos;t say
                  exactly when this started or how common it is everywhere,
                  but it&apos;s the kind of small shift you start noticing.
                </p>
              </div>
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
