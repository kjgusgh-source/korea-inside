import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/how-to-order-food-in-korea`;

const pageTitle =
  "How to Order Food in Korea: A Friendly Restaurant Guide for First-Time Visitors";
const pageDescription =
  "A practical HAEMIL guide to ordering food in Korea, covering kiosks, table bells, self-service water, side dishes, paying, solo dining, spicy food, and restaurant tips for first-time visitors.";

const quickAnswer = [
  "Most common ways to order: staff, kiosk, table tablet, or counter",
  'Useful Korean phrase: "이거 하나 주세요" means "One of this, please"',
  "Water: often self-service",
  "Side dishes: usually come with the meal, but refills depend on the restaurant",
  "Table bell: press it when you need staff, if there is one",
  "Payment: often at the counter after eating",
  "Solo dining: easy for noodles, gimbap, soups, bunsik, convenience stores; BBQ can be harder",
  "Main caution: tourist areas are easier but can be pricier and crowded",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
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
    title: "Korean BBQ guide for first-time visitors",
    description:
      "A warm beginner-friendly guide to what to order first, how to eat with banchan and ssam, and why Korean barbecue feels social.",
    href: "/food/korean-bbq-guide-first-time",
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
    title: "What is bunsik?",
    description:
      "A local-friendly guide to Korean snack-shop food culture, where tteokbokki, gimbap, twigim, sundae, and eomuk all belong on the same table.",
    href: "/food/what-is-bunsik-korean-snack-food",
  },
  {
    label: "Food guide",
    title: "What is gimbap?",
    description:
      "A local-friendly guide to Korea's seaweed rice roll, from everyday bunsik shops and convenience stores to tuna gimbap and picnic memories.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
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
    canonical: "/food/how-to-order-food-in-korea",
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

export default function HowToOrderFoodInKoreaPage() {
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
          name: "Korean restaurant etiquette",
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
          name: "How to order food in Korea",
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
              Ordering food in Korea can feel a little scary on your first trip.
              Not because it is impossible — but because the system may be
              different from what you are used to. Once you know these patterns,
              eating in Korea becomes much easier.
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
                  Some restaurants have staff who take your order; others use
                  kiosks, tablets at the table, or counter ordering where you pay
                  first. Some let you eat first and pay at the counter later.
                  Water may be self-service, and a table bell may be how you
                  call staff. During busy hours, everything can move quickly —
                  none of this is wrong, just different from what you might know
                  at home.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  First thing to know
                </p>

                <p>
                  There is not one single restaurant system in Korea. A small
                  gimbap shop, a Korean BBQ restaurant, a cafe, a food court, a
                  bunsik place, and a traditional soup restaurant may all work
                  differently — so if one place feels confusing, look around for
                  small clues: a kiosk near the entrance, a menu on the wall, a
                  tablet on the table, people paying before they sit, a table
                  bell, or water near a self-service corner. These usually tell
                  you what to do.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ordering from staff
                </h2>

                <p>
                  In many simple restaurants, you sit down, look at the menu, and
                  order from staff. If you do not speak Korean, pointing is
                  completely normal — point to the menu and say{" "}
                  <span className="rounded-[1rem] border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[var(--text)]">
                    &ldquo;이거 하나 주세요.&rdquo;
                  </span>{" "}
                  (&ldquo;One of this, please&rdquo;). Pronunciation does not
                  need to be perfect; most staff will understand if you point
                  clearly and stay polite.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tourist areas
                </h2>

                <p>
                  In tourist-heavy areas like Myeongdong, Hongdae, Insadong,
                  Gangnam, or near major attractions, restaurants may be more
                  used to foreign visitors — some have English or picture menus,
                  which can make ordering easier. The trade-off is that these
                  areas can be more expensive or crowded because they are
                  convenient and visitor-friendly. For a first trip, easy
                  ordering can be worth it; for better value, walk one or two
                  streets away from the busiest road.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kiosks
                </h2>

                <p>
                  Kiosks are common in casual restaurants, cafes, fast-food
                  places, and food courts — you choose food and pay on a machine
                  before eating. Some have English and accept foreign cards
                  smoothly; others do not. If a kiosk feels difficult, look for a
                  language button first (English, EN, or a globe icon). If it
                  still does not work, choose another place or ask staff politely.
                  Kiosks are convenient when they work, but they can feel
                  stressful when the line behind you is moving fast — that is
                  normal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Table tablets and counter ordering
                </h2>

                <p>
                  Table tablets let you sit down, choose food, and send the order
                  from the table — easier than speaking, though menus may still
                  be mostly Korean, so photos help. If you are unsure, choose
                  simple dishes you recognize or use a translation app carefully.
                  At some restaurants you order at the counter first, pay, get a
                  receipt or number, and wait — common in cafes, food courts,
                  noodle places, and casual spots. When your number is called or
                  shown on a screen, pick up your food. After eating, you may
                  need to return the tray yourself; if other people are carrying
                  trays back, you probably should too.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Water and utensils
                </h2>

                <p>
                  Water is often self-service — many restaurants have a water
                  machine, cups, or a water bottle area, though sometimes water
                  is already on the table or staff bring it. If you do not see
                  water, look near the wall, counter, or self-service corner;
                  utensils may be there too. Spoons, chopsticks, napkins,
                  scissors, tongs, or extra side dishes can sit in a drawer under
                  the table or near a self-service station, which can surprise
                  first-time visitors — in Korea, opening the table drawer for
                  spoons and chopsticks is very normal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Side dishes (banchan)
                </h2>

                <p>
                  Side dishes are called banchan — many Korean meals come with
                  small plates like kimchi, pickled vegetables, fish cake, or
                  salad. In some restaurants, side dishes are refilled for free;
                  in others, only some are refillable, and in self-service places
                  you may get more from a side-dish corner. Do not assume every
                  side dish can be refilled endlessly, but if the place clearly
                  has a self-service banchan area, taking a reasonable amount is
                  usually fine. Take a little first and go back if you need more.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Table bell and payment
                </h2>

                <p>
                  If there is a small button on the table, press it when you need
                  staff — to order, get more water, ask for extra side dishes, or
                  get help. This is not rude; it is part of the system. Without a
                  bell, raise your hand slightly or make eye contact — in busy
                  restaurants, staff may not check on your table unless you call
                  them. Payment often happens at the counter after eating: you
                  finish, stand up, and pay near the entrance or cashier, and
                  staff may already know your table number. At kiosks or cafes,
                  you usually pay first — both systems are normal, so watch what
                  other customers do. Tipping is not part of Korean restaurant
                  culture; just pay the amount shown.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spicy food and solo dining
                </h2>

                <p>
                  Some Korean food is mild, but spicy dishes can run stronger
                  than expected — tteokbokki, spicy stews, spicy noodles, and
                  red-sauce dishes vary a lot by restaurant. If you are sensitive
                  to spice, start with gimbap, kalguksu, seolleongtang, gukbap,
                  dumplings, grilled meat, porridge, or non-spicy noodles. Solo
                  dining is possible, but some foods are easier: gimbap, noodles,
                  soups, stews, convenience store meals, bunsik, food courts,
                  cafes, and simple rice dishes are usually solo-friendly. Korean
                  BBQ can be harder alone because some restaurants expect at
                  least two servings of meat or are designed for groups — not
                  impossible, but maybe not the smoothest first restaurant
                  experience. On your first day alone, a gimbap place, noodle
                  shop, soup restaurant, food court, or convenience store meal
                  can feel much less stressful.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Busy times
                </p>

                <p>
                  During lunch, dinner, weekends, or after work hours, restaurants
                  can move quickly — staff may not have time to explain
                  everything slowly, and popular or tourist areas can have lines.
                  If you feel nervous, eat a little earlier or later than the
                  busiest meal time; a quieter restaurant makes the first ordering
                  experience much easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Save a few food names
                </h2>

                <p>
                  Saving a few food names before you go helps — gimbap,
                  tteokbokki, kalguksu, gukbap, bibimbap, fried chicken, Korean
                  BBQ, soft tofu stew, or convenience store cup ramyeon. When you
                  recognize even one word on a menu, the restaurant feels less
                  intimidating.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Stay flexible: try the language button on a kiosk, use the
                  table bell when you need staff, check for self-service water,
                  try side dishes a little at a time, and pick an easier place
                  if the room feels too busy. Save Korean BBQ for when you have
                  company or more energy. Most first-time visitors learn by
                  watching the room — look around, point clearly, stay polite,
                  and choose food that matches your energy. Korean restaurants
                  become much easier after the first few meals, and once ordering
                  feels less stressful, the food becomes much more fun.
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
