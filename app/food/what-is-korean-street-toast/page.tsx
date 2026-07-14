import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-korean-street-toast`;

const pageTitle =
  "What Is Korean Street Toast? A Local-Friendly Guide to Korea’s Sweet Egg Sandwich";
const pageDescription =
  "A friendly HAEMIL guide to Korean street toast, the sweet egg sandwich found near markets, stations, and morning food stalls — plus how it differs from chains like Isaac Toast and Eggdrop.";

const quickFacts = [
  "Korean name: 길거리 토스트 / gilgeori toast",
  "Common style: Toasted bread, egg, cabbage, vegetables, ham or cheese depending on the vendor, and a sweet sauce",
  "Where to find it: Near markets, subway stations, old-school food stalls, and busy morning areas",
  "Taste: Sweet, buttery, eggy, and simple",
  "Chain examples: Isaac Toast and Eggdrop are modern Korean toast/sandwich chains, but they feel different from old street-cart toast",
  "Good for: Breakfast, a quick snack, or a cheap light meal",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Korean BBQ guide for first-time visitors",
    description:
      "A warm beginner-friendly guide to what to order first, how to eat with banchan and ssam, and why Korean barbecue feels social.",
    href: "/food/korean-bbq-guide-first-time",
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
    canonical: "/food/what-is-korean-street-toast",
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

export default function WhatIsKoreanStreetToastPage() {
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
          name: "Korean street toast",
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
          name: "What is Korean street toast?",
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
              What Is Korean Street Toast? A Local-Friendly Guide to Korea&apos;s
              Sweet Egg Sandwich
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Korean street toast is not the same as the toast you might imagine
              from a café.
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
                It is warmer, sweeter, messier, and much more everyday than café
                toast. In Korea, 길거리 토스트 means &quot;street toast&quot; — a
                simple toasted sandwich with buttered bread, egg, cabbage or
                vegetables, and a sweet sauce, sometimes with ham, cheese,
                ketchup, or sugar depending on the stall. Street toast feels
                like something you buy on the way somewhere: before school, before
                work, near a subway station, around a market, in a busy morning
                street where butter, egg, and toasted bread make people slow
                down for a minute.
              </p>

              <p>
                The taste is often sweet, which can surprise visitors who expect
                a salty egg sandwich. Korean street toast usually has a soft
                sweetness from sugar, sauce, or ketchup-style flavor — the egg
                and cabbage make it feel like a meal, while the sweetness makes
                it comfort food. It is not trying to be a perfect sandwich; it is
                quick, warm, cheap, and satisfying. Many versions use a flat egg
                patty mixed with shredded cabbage or carrot; the bread is toasted
                on a griddle with butter or margarine, then sauce, cheese, or
                ham is added, everything folded and wrapped so you can carry it
                away. When it is good, the outside is lightly crisp and the inside
                is soft — especially nice in the morning.
              </p>

              <p>
                It is not a traditional Korean dish in the old sense, but very
                Korean in how people actually eat it — busy-morning food where
                you see the bread, smell the egg, hear the griddle, order one,
                hold it in paper, and eat before it gets cold. At old-school
                stalls, the rhythm matters as much as the recipe: bread on the
                griddle, egg cooking flat, sauce added quickly, sandwich wrapped,
                next person waiting — very different from a café brunch mood.
              </p>

              <p>
                You may see Isaac Toast or Eggdrop and wonder if they are the
                same thing. Related, but not exactly. Isaac Toast is a Korean
                toast chain — more organized, with a set menu and consistent
                sweet-and-savory flavors, cleaner and easier to find as a brand.
                Eggdrop is a modern egg sandwich brand with a softer, more
                brunch-like image — thicker, richer, more designed for photos.
                Street toast feels like morning street food; Isaac Toast feels
                like a Korean toast chain; Eggdrop feels like a modern egg
                sandwich café. All three can be good, but they give different
                moods.
              </p>

              <p>
                For the old local feeling, look for a small stall or
                market-style toast shop. For an easy chain version, Isaac Toast
                is a comfortable start. For a softer modern sandwich, Eggdrop may
                feel more familiar. Recipes vary — some use cabbage, cheese, ham,
                sugar, ketchup, or special sweet sauce — so the warm version you
                can eat right away is a fine first try.
              </p>

              <p>
                Order it, hold it carefully, and take a bite while the bread is
                still crisp. Notice the sweetness first, then the egg, cabbage,
                and buttery bread. If you expected salty, it may feel strange for
                two seconds — then it usually clicks. Korean street toast is not
                trying to impress you; it feeds you quickly and makes the morning
                feel a little better. In a city where food can be trendy and
                fast-changing, street toast has stayed because it is small, warm,
                and familiar even if you have never eaten it before — not spicy,
                not dramatic, just bread, egg, cabbage, sauce, and a few minutes
                on a hot griddle.
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
