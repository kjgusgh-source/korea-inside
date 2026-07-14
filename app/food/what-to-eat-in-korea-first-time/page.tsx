import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-to-eat-in-korea-first-time`;

const pageTitle =
  "What to Eat in Korea for the First Time: A Friendly Food Guide for Beginners";
const pageDescription =
  "A practical HAEMIL guide to what first-time visitors should eat in Korea, from Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience store meals, cafes, and local food tips.";

const quickAnswer = [
  "Best first proper meal: Korean BBQ or a simple Korean set meal",
  "Best easy snack meal: Gimbap, tteokbokki, or bunsik",
  "Best solo-friendly food: Gimbap, noodles, soups, convenience store meals",
  "Best late-night food: Fried chicken, convenience store food, bunsik, or simple soup restaurants",
  "Best comfort food: Gukbap, kalguksu, seolleongtang, or soft tofu stew",
  "Main caution: famous tourist areas can be convenient but often cost more",
  "Local tip: leave space for unplanned meals instead of booking every meal",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean BBQ guide for first-time visitors",
    description:
      "A warm beginner-friendly guide to what to order first, how to eat with banchan and ssam, and why Korean barbecue feels social.",
    href: "/food/korean-bbq-guide-first-time",
  },
  {
    label: "Food guide",
    title: "What to eat in Seoul for the first time",
    description:
      "A practical Seoul food guide for first-time visitors, covering markets, street food, cafes, Han River ramyeon, late-night meals, and more.",
    href: "/food/what-to-eat-in-seoul-first-time",
  },
  {
    label: "Food guide",
    title: "What is tteokbokki?",
    description:
      "A local-friendly guide to Korea's spicy rice cake snack, from chewy tteok and red sauce to bunsik shops, markets, and classic add-ons.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "What is gimbap?",
    description:
      "A local-friendly guide to Korea's seaweed rice roll, from everyday bunsik shops and convenience stores to tuna gimbap and picnic memories.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
  },
  {
    label: "Food guide",
    title: "What is bunsik?",
    description:
      "A local-friendly guide to Korean snack-shop food culture, where tteokbokki, gimbap, twigim, sundae, and eomuk all belong on the same table.",
    href: "/food/what-is-bunsik-korean-snack-food",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Travel guide",
    title: "3 days in Seoul itinerary for first-time visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
  },
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/what-to-eat-in-korea-first-time",
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

export default function WhatToEatInKoreaFirstTimePage() {
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
          name: "Korean food",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "First-time visitors",
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
          name: "What to eat in Korea for the first time",
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
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              On a first trip to Korea, food can feel exciting and confusing at
              once — you may know BBQ, tteokbokki, kimchi, fried chicken, or
              convenience store meals from videos, but the practical question is
              simpler: what should you eat first, and what fits your day?
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick answer
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickAnswer.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-8 text-base leading-8 text-[var(--muted)] md:text-lg">
              <div className="space-y-4">
                <p>
                  Where to start, what works when you are tired or alone, and
                  what to do if spice is a problem — the short answer is not to
                  eat every famous Korean dish in one trip. Choose meals that
                  match your energy, group size, weather, and neighborhood. A
                  good first food plan mixes one proper meal, one casual snack
                  meal, one comfort-food bowl, one convenience store moment, and
                  one cafe or dessert stop — enough to feel full without turning
                  every meal into homework.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Korean BBQ
                </h2>

                <p>
                  Korean BBQ is a classic first proper meal — social, warm, and
                  very Korean for many visitors. You grill meat at the table,
                  wrap bites with lettuce, sauces, garlic, and side dishes, and
                  the meal is as much about the table rhythm as the food itself.
                  It can cost more than simple local meals, especially in famous
                  tourist areas, and some places work better for groups than
                  solo travelers or expect a minimum meat order. Choose BBQ when
                  you have time, energy, and someone to eat with — not
                  necessarily your first meal right after landing.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gimbap
                </h2>

                <p>
                  For an easier casual meal, try gimbap — rice and fillings
                  rolled in seaweed and sliced into small pieces. It is simple,
                  portable, familiar enough to understand, and still very Korean
                  in daily life. Gimbap works well for lunch, a travel day, or
                  eating alone before sightseeing.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tteokbokki
                </h2>

                <p>
                  For a street-food feeling, try tteokbokki — chewy rice cakes
                  in a spicy-sweet red sauce you can find in bunsik shops,
                  markets, food courts, and casual snack spots. Spice varies a
                  lot; if you are sensitive, share it with gimbap, fried snacks,
                  or fish cake soup. Tteokbokki is fun as part of a casual
                  snack-style meal rather than a full dinner on its own.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bunsik
                </h2>

                <p>
                  That casual snack-shop style is called bunsik — tteokbokki,
                  gimbap, twigim, fish cake, ramen, sundae, and other simple
                  foods on one table. Not fancy, but one of the easiest ways to
                  understand everyday Korean eating.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Soup and stew
                </h2>

                <p>
                  For a comforting meal, try soup or stew — gukbap,
                  seolleongtang, kalguksu, soft tofu stew, kimchi stew, soybean
                  paste stew, and similar one-bowl meals built around rice and
                  broth. You sit down, eat at your own pace, and add side dishes
                  as they come. Not all are spicy; clear broths, beef bone soup,
                  and noodle soups are gentler options. Soup meals shine in cold
                  weather or after a long walking day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Korean fried chicken
                </h2>

                <p>
                  Korean fried chicken is popular, familiar, and good for
                  sharing — texture, sauces, and side dishes can feel different
                  from fried chicken at home, and it works well at night when
                  you want a comfortable dinner without a complicated restaurant
                  experience. Portions can be large, famous places may have long
                  waits, and it can feel heavy if you eat it too often — treat it
                  as a fun meal, not your only Korean food experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience store food
                </h2>

                <p>
                  Convenience store food is part of the real trip — useful for
                  breakfast, late-night snacks, triangle gimbap, cup ramyeon,
                  lunch boxes, and small bites when you are tired, jet-lagged, or
                  between plans. It is not always the best food in Korea, but it
                  saves a day and lets you try small things without committing
                  to a full restaurant meal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes and dessert
                </h2>

                <p>
                  Leave space for cafes and dessert — Korea has a strong cafe
                  culture, from simple coffee stops to dessert-focused spaces and
                  atmosphere-heavy streets. Bingsu, cakes, pastries, and
                  seasonal sweets are common; famous areas like Myeongdong,
                  Hongdae, Gangnam, and Insadong can run pricier when you are
                  paying for location as much as the drink. That trade-off can
                  still be worth it — just expect cafe stops in tourist streets
                  to cost more than a quick chain coffee.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Planning tips
                </p>

                <p>
                  Avoid planning every famous restaurant — popular places can
                  have lines, limited seating, break times, or ordering systems
                  that feel confusing, and a schedule built on too many viral
                  spots gets stressful fast. Plan a few key meals and leave the
                  rest flexible; a simple local restaurant near your hotel can
                  beat crossing the city for one famous place when you are tired.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tourist areas and value
                </h2>

                <p>
                  Tourist areas like Myeongdong, Hongdae, Gangnam, and Insadong
                  are convenient and full of options, but food and cafes on the
                  busiest streets often cost more because they are central and
                  visitor-friendly. That does not mean avoiding them — on a first
                  trip, convenience matters. For better value, walk one or two
                  streets off the main road or eat near a less famous station.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  A simple first food plan
                </p>

                <p>
                  A simple first Korea food week could include one Korean BBQ
                  meal, one bunsik stop with tteokbokki and gimbap, one soup
                  or stew bowl, one fried chicken night, one convenience store
                  breakfast or late snack, and one cafe or dessert stop — already
                  a solid first experience without chasing every famous dish.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spice and solo dining
                </h2>

                <p>
                  If spice worries you, start slowly — not all Korean food is
                  spicy, but red-sauce dishes can run stronger than expected.
                  Gimbap, soups, noodles, grilled meat, dumplings, rice bowls,
                  and porridge give you breaks between spicy meals. Solo dining
                  is easier with gimbap, noodles, soups, convenience store food,
                  food courts, and cafes; Korean BBQ can work alone in some
                  places but is smoother with friends or when you are ready for a
                  group-style meal.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The best first food trip matches food to the moment — BBQ when
                  you want something social, gimbap when you want easy, tteokbokki
                  for a casual snack, soup when you are tired, fried chicken for a
                  relaxed night, convenience store food when the day shifts, cafe
                  dessert when you want to sit with the mood. That balance teaches
                  you more about Korean eating than forcing every famous dish into
                  one visit.
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
