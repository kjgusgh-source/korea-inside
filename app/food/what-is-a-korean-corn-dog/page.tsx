import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-a-korean-corn-dog`;

const pageTitle = "What Is a Korean Corn Dog? Korea’s Fried Street Snack, Explained";
const pageDescription =
  "A friendly HAEMIL guide to the Korean corn dog — the panko-crusted street snack with potato and ramyeon-cracker toppings that looks nothing like an American corn dog, plus where to find one.";

const quickFacts = [
  "Korean name: Korean corn dog / 콘도그 (also called Korean hot dog)",
  "Batter: Wheat or glutinous rice flour dough rolled in panko breadcrumbs, not cornmeal",
  "Common toppings: Cubed potato, crushed ramen noodles (ramyeon-ttang), sugar coating, crushed hot Cheetos",
  "Common fillings: Sausage, mozzarella cheese, or a half-and-half combination",
  "Where to find it: Street carts, night markets, college-area stalls, and specialty corn dog shops",
  "How it differs from the U.S. version: Cornmeal batter and carnival-food context in the U.S., versus panko batter and everyday street food in Korea",
  "Background: Commonly traced to the 1950s postwar period and localized over time, based on repeated food-media reporting rather than one official source",
  "Good to know: The social media spike was around 2021; today it is a steady street snack, not a new trend",
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
    title: "Bungeoppang fish-shaped snack guide",
    description:
      "Fish-shaped winter street snacks — red bean bungeoppang and the cold-day stall mood that feels local, not staged.",
    href: "/food/what-is-bungeoppang",
  },
  {
    label: "Food guide",
    title: "Myeongdong street food guide",
    description:
      "Fun first-time snacks in Myeongdong, with tourist-price reality on the main streets and easier bites one alley over.",
    href: "/food/myeongdong-street-food-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean pocha and night food guide",
    description:
      "Pocha nights explained — anju with drinks, old street tents vs indoor pocha, and the cash and price checks worth doing first.",
    href: "/food/korean-pocha-night-food-guide-first-time",
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
    canonical: "/food/what-is-a-korean-corn-dog",
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

export default function WhatIsAKoreanCornDogPage() {
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
          name: "Korean corn dog",
        },
        {
          "@type": "Thing",
          name: "Korean street food",
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
          name: "What is a Korean corn dog?",
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
              What Is a Korean Corn Dog? Korea&apos;s Fried Street Snack,
              Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              The name translates the same way, but almost nothing else about
              it does.
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
                If you grew up eating an American corn dog, the first bite of
                a Korean one can be a small shock. The shape is familiar, the
                name translates the same way, but everything about the
                outside is different. Korean corn dogs (콘도그) are one of
                those foods that gets lost in translation on purpose: the
                word says corn dog, but the batter usually has no corn in it
                at all.
              </p>

              <p>
                American corn dogs are dipped in a cornmeal batter, so the
                shell fries up smooth, a little grainy, and slightly sweet in
                that classic carnival-food way. Korean corn dogs skip the
                cornmeal entirely. The stick goes into a wheat flour or
                glutinous rice flour dough instead, then gets rolled in panko
                breadcrumbs before it hits the fryer. That panko coating is
                the giveaway — it fries up craggy and crunchy rather than
                smooth, which is exactly why a Korean corn dog looks rougher
                and lumpier than the one you might remember from a fair back
                home.
              </p>

              <p>
                Once you know the base, the toppings are where Korean corn
                dogs really separate from the American version. A potato hot
                dog (감자핫도그) presses small cubes of potato straight into
                the dough before frying, so the surface turns craggy in a
                completely different way — half panko crunch, half
                roasted-potato bite. Some stalls swap the panko for crushed
                ramen noodles, sold as a ramyeon-ttang style, which fries up
                nuttier and a little more brittle. Others roll the finished
                corn dog straight into sugar while it is still hot, so the
                outside turns sweet against a savory sausage or mozzarella
                filling, or coat it in crushed hot Cheetos for a
                spicy-orange crust. Fillings vary too — plain sausage, pure
                mozzarella that stretches when you pull the first bite apart,
                or a half-sausage-half-cheese combination that lets you taste
                both without choosing.
              </p>

              <p>
                American corn dogs are mostly festival and amusement-park
                food, handed over with ketchup and mustard packets and eaten
                standing near a ride. Korean corn dogs do not really carry
                that seasonal, special-occasion feeling — they are a normal
                street snack you can find on almost any night, wrapped in a
                paper sleeve from a cart, a night-market stall, or a
                specialty corn dog shop near a university area. That
                everyday-ness is part of what makes it a corn dog in name
                only; the fair-food association just does not carry over.
              </p>

              <p>
                Where the dish actually came from is less settled. Multiple
                food outlets trace Korean corn dogs back to the 1950s, after
                the Korean War, when corn dogs are said to have been
                introduced through contact with the U.S. military and then
                gradually localized into the panko-and-toppings version
                people eat today. That account shows up consistently across
                food writing, though it comes from repeated reporting rather
                than one single official source, so it is worth treating as
                the commonly told history rather than a confirmed fact.
              </p>

              <p>
                It is easy to assume Korean corn dogs are a brand-new trend,
                since international food media keeps circling back to them,
                but the social media spike mostly happened around 2021, when
                clips of the cheese-pull and sugar-coated versions spread
                widely online. What is left now is closer to a steady street
                food than a fresh discovery — the kind of snack that sits
                comfortably next to tteokbokki and bungeoppang on a Korean
                street food list, rather than something trying to go viral
                again. If you are curious where to start, a plain or
                half-cheese version from a cart is an easy first order, and
                the potato or ramyeon-ttang toppings are worth trying once
                you know what you are biting into.
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
