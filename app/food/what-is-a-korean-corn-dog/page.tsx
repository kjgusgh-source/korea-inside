import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-a-korean-corn-dog`;

const pageTitle = "What Is a Korean Corn Dog? Korea's Twist on a Fairground Snack";
const pageDescription =
  "A friendly HAEMIL guide to the Korean corn dog, the panko-crusted street snack that swaps cornmeal batter for a crunchy coating, plus the gamja and ramyeontang variants worth knowing before you order.";

const quickFacts = [
  "American corn dogs use a cornmeal batter; Korean ones use a flour-and-rice-flour dough rolled in panko breadcrumbs before frying",
  "Common fillings: sausage, mozzarella cheese, or half of each on one skewer",
  "Popular variants: gamja hot dog (cubed potato pressed into the batter) and ramyeontang hot dog (coated in crushed ramen snack for extra crunch)",
  "Usual toppings after frying: sugar, ketchup, and mustard — optional, and often all three at once",
  "Where to find it: street stalls, night markets, and dedicated corn dog chains across Korea",
  "Not a brand-new trend: the social media wave peaked around 2021; today it is a steady, everyday street snack",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "What is tteokbokki?",
    description:
      "Chewy rice cakes in red sauce — what tteokbokki is, where you find it, and the classic add-ons at bunsik shops.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "What is bungeoppang?",
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
              What Is a Korean Corn Dog? Korea&apos;s Twist on a Fairground Snack
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A Korean corn dog looks like carnival food until you bite through the crust
              and realize it is not the same snack at all.
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
                You will notice the crust before you notice anything else. Bite into a
                Korean corn dog and the outside cracks first — a rough, panko shell that
                shatters a little before you reach the soft, slightly chewy dough
                underneath. That crackly texture is the main thing that separates it from
                the corn dog you might already know. American corn dogs are dipped in a
                cornmeal batter that fries into a smoother, cake-like coating; Korean ones
                use a flour-and-rice-flour dough finished with panko breadcrumbs, so the
                surface ends up rougher, crunchier, and noticeably thicker.
              </p>

              <p>
                The two snacks also live in different moments. In the US, a corn dog is
                usually fair food or ballpark food, eaten standing near a stand with
                ketchup and mustard as the whole point of the meal. In Korea, it shows up
                on almost any street corner or market alley as a casual, anytime bite —
                something you grab between shops, not something you plan a trip around.
                Line one up next to a Western-style hot dog and the shapes barely match:
                one is a straight bun-and-sausage sandwich, the other is a thick,
                battered, deep-fried skewer.
              </p>

              <p>
                The variants are where it gets more interesting than a simple sausage on
                a stick. A gamja hot dog presses small cubes of potato into the batter
                before frying, so alongside the panko crunch you get little crisp potato
                edges poking out around the skewer. A ramyeontang version goes further,
                coating the batter in crushed ramen snack before it hits the oil — the
                surface turns bumpier and crunches louder with every bite. Then there is
                the cheese factor: order one filled with mozzarella and the first pull
                off the stick stretches several inches before it snaps.
              </p>

              <p>
                The story behind the dish traces back to the 1950s, when it is commonly
                said to have arrived in Korea through American military bases during and
                after the Korean War, then gradually localized into its own version over
                the following decades. Multiple food outlets repeat this account, though
                it comes from historical retellings rather than a single official record.
              </p>

              <p>
                It is also worth being clear about what kind of trend this actually is.
                Korean corn dogs had a real viral spike around 2021, when TikTok videos of
                the cheese-pull moment traveled widely. That spike has passed — what is
                left is not a fading fad but a snack that settled into daily street food,
                still turning up regularly in food coverage well into 2026. Calling it
                &quot;the latest trend&quot; would overstate what is really a snack that
                stuck around.
              </p>

              <p>
                If you want to try one, street stalls in busy shopping areas are the
                easiest starting point — the{" "}
                <Link
                  href="/food/myeongdong-street-food-guide-first-time"
                  className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                >
                  Myeongdong street food guide
                </Link>{" "}
                covers what a stall-heavy street looks like and what else is worth trying
                nearby. Night markets and pocha-style food streets carry them too,
                alongside other stall snacks covered in the{" "}
                <Link
                  href="/food/korean-pocha-night-food-guide-first-time"
                  className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                >
                  Korean pocha and night food guide
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">Related food guides</h2>
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
