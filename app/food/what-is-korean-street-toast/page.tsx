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
              <p>It is warmer, sweeter, messier, and much more everyday.</p>

              <p>
                In Korea, 길거리 토스트 means &quot;street toast.&quot; It usually
                means a simple toasted sandwich made with buttered bread, egg,
                cabbage or vegetables, and a sweet sauce. Depending on the stall,
                it may also have ham, cheese, ketchup, sugar, or other small
                additions.
              </p>

              <p>It is not fancy food.</p>

              <p>That is why people like it.</p>

              <p>
                Street toast feels like something you buy on the way somewhere.
                On the way to school. Before work. Near a subway station. Around
                a market. In a busy morning street where the smell of butter,
                egg, and toasted bread makes people slow down for a minute.
              </p>

              <p>The first thing to understand is the taste.</p>

              <p>Korean street toast is often sweet.</p>

              <p>
                For some visitors, that can be surprising. You may expect an egg
                sandwich to be salty, but Korean street toast often has a soft
                sweetness from sugar, sauce, or ketchup-style flavor. The egg and
                cabbage make it feel like a meal, while the sweetness makes it
                feel almost like comfort food.
              </p>

              <p>That balance is the point.</p>

              <p>
                It is not trying to be a perfect sandwich. It is trying to be
                quick, warm, cheap, and satisfying.
              </p>

              <p>The egg is usually the heart of it.</p>

              <p>
                Many versions use a flat egg patty mixed with shredded cabbage,
                carrot, or other vegetables. The bread is toasted on a griddle
                with butter or margarine. Then the vendor adds sauce, maybe
                cheese or ham, folds everything together, and wraps it so you can
                carry it away.
              </p>

              <p>When it is good, the outside is lightly crisp and the inside is soft.</p>

              <p>That is why street toast is especially nice in the morning.</p>

              <p>
                It feels simple, but it has a very Korean kind of comfort. Rice is
                still central to Korean meals, but bread foods like toast have
                become part of everyday quick eating too. Street toast sits
                somewhere between breakfast, snack, and cheap meal.
              </p>

              <p>It is not a traditional Korean dish in the old sense.</p>

              <p>But it is very Korean in the way people actually eat it.</p>

              <p>You can think of it as Korean busy-morning food.</p>

              <p>
                The kind of thing that does not need a long explanation when you
                are standing near a stall. You see the bread. You smell the egg.
                You hear the griddle. You order one, hold it in paper, and eat it
                before it gets cold.
              </p>

              <p>That small scene is part of the taste.</p>

              <p>
                At many old-school toast stalls, the feeling is not only about
                the recipe. It is also about the rhythm: bread on the griddle,
                egg cooking flat, sauce added quickly, the sandwich wrapped, and
                the next person waiting nearby.
              </p>

              <p>That is very different from a café brunch mood.</p>

              <p>It is also different from modern toast chains.</p>

              <p>
                In Korea, you may see Isaac Toast or Eggdrop and think, &quot;Is
                this the same thing as street toast?&quot; The answer is: related,
                but not exactly the same.
              </p>

              <p>
                Isaac Toast is probably the chain many people connect with Korean
                toast. It feels more organized than a street stall, with a set
                menu, consistent flavors, and a familiar takeout style. It still
                keeps the sweet-and-savory Korean toast feeling, but it is
                cleaner, more standardized, and easier to find as a brand.
              </p>

              <p>Eggdrop feels different again.</p>

              <p>
                Eggdrop is more like a modern egg sandwich brand, with a softer,
                more brunch-like image. The sandwiches often feel thicker, richer,
                and more designed for photos. It belongs to Korea&apos;s wider
                toast and egg sandwich culture, but it does not feel like the
                same old street-cart toast you might find near a market.
              </p>

              <p>So the easiest way to separate them is this:</p>

              <p>Street toast feels like morning street food.</p>

              <p>Isaac Toast feels like a Korean toast chain.</p>

              <p>Eggdrop feels like a modern egg sandwich café brand.</p>

              <p>All three can be good, but they give different moods.</p>

              <p>For a traveler, that difference matters.</p>

              <p>
                If you want the old local feeling, look for a small stall or
                market-style toast shop. If you want an easy chain version, Isaac
                Toast is a comfortable place to start. If you want a softer, more
                modern egg sandwich, Eggdrop may feel more familiar.
              </p>

              <p>None of these is the &quot;only correct&quot; version.</p>

              <p>Korean toast culture is flexible.</p>

              <p>
                That is also why recipes online can look different from each
                other. Some use cabbage. Some use cheese. Some use ham. Some add
                sugar. Some use ketchup. Some use a special sweet sauce. A street
                vendor may make it one way, while a chain store builds a whole
                menu around it.
              </p>

              <p>Do not worry too much about finding the most authentic one.</p>

              <p>For a first try, the best version is the one you can eat warm.</p>

              <p>
                Order it, hold it carefully, and take a bite while the bread is
                still crisp. Notice the sweetness first. Then the egg. Then the
                cabbage. Then the buttery bread. If you expected a salty
                sandwich, it may feel strange for two seconds. After that, it
                usually starts to make sense.
              </p>

              <p>Korean street toast is not trying to impress you.</p>

              <p>
                It is trying to feed you quickly and make the morning feel a
                little better.
              </p>

              <p>That is why it has stayed around.</p>

              <p>
                In a city like Seoul, food can be trendy, expensive, beautiful,
                and fast-changing. But street toast is still one of those foods
                that feels easy to understand. It is small. It is warm. It is
                familiar even if you have never eaten it before.
              </p>

              <p>
                For HAEMIL readers, this is a good food to try because it shows
                a softer side of Korean street food.
              </p>

              <p>Not spicy.</p>

              <p>Not dramatic.</p>

              <p>Not something you need a group to enjoy.</p>

              <p>
                Just bread, egg, cabbage, sauce, and a few minutes on a hot
                griddle.
              </p>

              <p>Sometimes that is enough.</p>
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
