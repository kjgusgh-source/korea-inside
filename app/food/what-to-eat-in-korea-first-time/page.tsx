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
              If it is your first time visiting Korea, food can feel exciting
              and confusing at the same time. You may know Korean BBQ,
              tteokbokki, kimchi, fried chicken, or convenience store food from
              videos. But when you actually arrive, the question becomes more
              practical: what should I eat first?
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
                <p>Where should I start?</p>

                <p>What is easy if I am tired?</p>

                <p>What works if I am alone?</p>

                <p>What if I cannot handle spicy food?</p>

                <p>The honest answer is simple:</p>

                <p>Do not try to eat everything in one trip.</p>

                <p>Choose a few meals that match your day.</p>

                <p>
                  A good first Korea food plan should have a mix of one proper
                  meal, one casual snack meal, one comfort food meal, one
                  convenience store moment, and one cafe or dessert stop.
                </p>

                <p>
                  That is enough to make the trip feel full without turning
                  every meal into homework.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Korean BBQ
                </h2>

                <p>Korean BBQ is a classic first meal.</p>

                <p>
                  It feels social, warm, and very Korean for many visitors. You
                  grill meat at the table, eat it with lettuce, sauces, garlic,
                  side dishes, and maybe rice or stew.
                </p>

                <p>It is fun because the meal is not only about the food.</p>

                <p>It is about the table.</p>

                <p>The sound of grilling meat.</p>

                <p>The side dishes.</p>

                <p>The way people wrap one bite and eat slowly.</p>

                <p>But Korean BBQ is not always the easiest meal for everyone.</p>

                <p>
                  It can be more expensive than simple local meals, especially
                  in famous tourist areas. Some restaurants are better for
                  groups than solo travelers. Some places may expect you to
                  order a certain amount of meat.
                </p>

                <p>
                  So Korean BBQ is a great first experience, but it does not
                  have to be your first meal right after landing.
                </p>

                <p>
                  Choose it when you have time, energy, and someone to eat with.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gimbap
                </h2>

                <p>For an easier casual meal, try gimbap.</p>

                <p>
                  Gimbap is rice and fillings rolled in seaweed, then sliced
                  into small pieces. It is simple, portable, and good when you
                  do not want a heavy meal.
                </p>

                <p>
                  It is also one of the easiest foods for first-time visitors
                  because it is familiar enough to understand, but still very
                  Korean in daily life.
                </p>

                <p>
                  Gimbap works well for lunch, a travel day, or a quick meal
                  before sightseeing.
                </p>

                <p>It is also useful when you are eating alone.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tteokbokki
                </h2>

                <p>
                  If you want a more street-food feeling, try tteokbokki.
                </p>

                <p>
                  Tteokbokki is chewy rice cakes in a spicy-sweet red sauce.
                  Many visitors imagine it as a street food, but you can also
                  find it in bunsik restaurants, food courts, markets, and
                  casual snack shops.
                </p>

                <p>The trade-off is spice.</p>

                <p>
                  Tteokbokki can be stronger than it looks. Some versions are
                  mild, but others are very spicy. If you are sensitive to
                  spice, share it with another food like gimbap, fried snacks,
                  or fish cake soup.
                </p>

                <p>Tteokbokki is fun, but it is not always a full meal by itself.</p>

                <p>It is better as part of a casual snack-style meal.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bunsik
                </h2>

                <p>That kind of casual Korean snack food is called bunsik.</p>

                <p>
                  Bunsik can include tteokbokki, gimbap, twigim, fish cake,
                  ramen, sundae, and other simple foods. It is not fancy, but
                  it is one of the easiest ways to understand everyday Korean
                  eating.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Soup and stew
                </h2>

                <p>For a comforting meal, try soup or stew.</p>

                <p>
                  Korea has many warm, practical meals built around rice and
                  soup.
                </p>

                <p>
                  Gukbap, seolleongtang, kalguksu, soft tofu stew, kimchi
                  stew, soybean paste stew, and similar dishes can be good when
                  you are tired from walking.
                </p>

                <p>These meals are often easier than they look.</p>

                <p>
                  You sit down, eat with rice, add side dishes, and go at your
                  own pace.
                </p>

                <p>
                  Some soups are spicy, but not all. If you want something
                  gentler, look for clear broths, beef bone soup, noodle soup,
                  or non-spicy options.
                </p>

                <p>
                  Soup meals are especially good in colder weather or after a
                  long travel day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Korean fried chicken
                </h2>

                <p>Korean fried chicken is another easy choice.</p>

                <p>
                  It is popular, familiar, and good for sharing. Many visitors
                  like trying Korean-style fried chicken because the texture,
                  sauces, and side dishes can feel different from fried chicken
                  at home.
                </p>

                <p>It is also useful at night.</p>

                <p>
                  If you are tired after sightseeing and do not want a
                  complicated restaurant experience, fried chicken can be a
                  comfortable dinner.
                </p>

                <p>
                  The trade-off is that portions can be large, and some famous
                  places can have long waits or delivery-focused systems. It can
                  also feel heavy if you eat it too often.
                </p>

                <p>
                  Treat it as a fun meal, not the only Korean food experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience store food
                </h2>

                <p>Convenience store food is worth trying too.</p>

                <p>
                  In Korea, convenience stores are not only for emergency
                  snacks. They can be useful for breakfast, late-night food,
                  drinks, triangle gimbap, cup ramyeon, lunch boxes, desserts,
                  and travel snacks.
                </p>

                <p>
                  This does not mean convenience store food is always the best
                  food in Korea.
                </p>

                <p>It means it is part of the real travel experience.</p>

                <p>
                  When you are tired, jet-lagged, or between plans, a
                  convenience store can save your day.
                </p>

                <p>
                  It is also a good way to try small things without committing
                  to a full restaurant meal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes and dessert
                </h2>

                <p>For cafes and dessert, leave space.</p>

                <p>
                  Korea has a strong cafe culture. Some cafes are simple, some
                  are beautiful, some are dessert-focused, and some are more
                  about atmosphere than coffee.
                </p>

                <p>
                  Desserts can include bingsu, cakes, pastries, traditional
                  sweets, or seasonal items.
                </p>

                <p>The trade-off is cost.</p>

                <p>
                  Cafes in famous areas like Myeongdong, Hongdae, Seongsu,
                  Gangnam, Insadong, or near major tourist streets can feel
                  expensive. Sometimes you are paying for the location and
                  atmosphere as much as the drink.
                </p>

                <p>That can still be worth it.</p>

                <p>Just do not expect every cafe stop to be cheap.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Planning tips
                </p>

                <p>
                  One important local tip is to avoid planning every famous
                  restaurant.
                </p>

                <p>
                  Popular places can have lines, limited seating, break times,
                  or ordering systems that feel confusing. If your schedule
                  depends on too many famous restaurants, the trip can become
                  stressful.
                </p>

                <p>
                  Instead, plan a few key meals and leave the rest flexible.
                </p>

                <p>
                  A simple local restaurant near your hotel can be better than
                  crossing the city for one viral place when you are tired.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tourist areas and value
                </h2>

                <p>
                  Tourist areas are convenient, but they are not always the
                  best value.
                </p>

                <p>
                  Myeongdong, Hongdae, Gangnam, Insadong, and other famous
                  areas are popular for a reason. They are easy to reach, full
                  of options, and comfortable for visitors.
                </p>

                <p>
                  But because they are central, commercial, or tourist-friendly,
                  food and cafes on the busiest streets can cost more.
                </p>

                <p>That does not mean you should avoid them.</p>

                <p>For a first trip, convenience matters.</p>

                <p>
                  But if you want better value, walk one or two streets away
                  from the busiest road, or eat near a less famous station.
                </p>

                <p>You do not need to chase the cheapest food.</p>

                <p>You just need to understand the trade-off.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  A simple first food plan
                </p>

                <p>
                  For first-time visitors, a simple food plan could look like
                  this:
                </p>

                <p>One Korean BBQ meal.</p>

                <p>One bunsik meal with tteokbokki and gimbap.</p>

                <p>One soup or stew meal.</p>

                <p>One fried chicken night.</p>

                <p>One convenience store breakfast or late-night snack.</p>

                <p>One cafe or dessert stop.</p>

                <p>That is already a good first Korea food experience.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spice and solo dining
                </h2>

                <p>If you are worried about spice, start slowly.</p>

                <p>
                  Not all Korean food is spicy, but spicy food is common. Red
                  sauce does not always mean impossible, but it can be stronger
                  than expected.
                </p>

                <p>
                  Look for soups, noodles, grilled meat, gimbap, dumplings, rice
                  bowls, porridge, or non-spicy stews when you need a break.
                </p>

                <p>It is okay not to eat spicy food every day.</p>

                <p>If you are traveling alone, choose easier meals.</p>

                <p>
                  Gimbap, noodles, soups, convenience store meals, food courts,
                  simple rice dishes, and cafes are usually easier than
                  group-style meals.
                </p>

                <p>
                  Korean BBQ can still be possible alone in some places, but it
                  is not always the smoothest beginner option.
                </p>

                <p>
                  If you are with friends, BBQ, fried chicken, and shared
                  dishes become easier.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best food trip in Korea is not about
                  checking off the longest list.
                </p>

                <p>It is about matching food to the moment.</p>

                <p>BBQ when you want a social meal.</p>

                <p>Gimbap when you want something easy.</p>

                <p>Tteokbokki when you want a casual snack.</p>

                <p>Soup when you are tired.</p>

                <p>Fried chicken when you want a relaxed night.</p>

                <p>
                  Convenience store food when the day does not go as planned.
                </p>

                <p>Cafe dessert when you want to sit down and enjoy the mood.</p>

                <p>
                  That balance will teach you more about Korean food than
                  forcing every famous dish into one trip.
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
