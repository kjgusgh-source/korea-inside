import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-soups-and-stews-guide-first-time`;

const pageTitle =
  "Korean Soups and Stews Guide for First-Time Visitors: Jjigae, Tang, Guk, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to Korean soups and stews for first-time visitors, including kimchi-jjigae, doenjang-jjigae, sundubu, budae-jjigae, seolleongtang, galbitang, samgyetang, rice, side dishes, and local eating tips.";

const quickAnswer = [
  "Easiest first choice: sundubu-jjigae or kimchi-jjigae",
  "Mild comfort choice: seolleongtang or galbitang",
  "Strong everyday flavor: doenjang-jjigae",
  "Shared spicy option: budae-jjigae or gamjatang",
  "Summer / stamina food: samgyetang",
  "Main tip: many stews are meant to be eaten with rice, not alone like Western soup",
  "Solo dining tip: individual soups are easier than shared hot pots",
  "Local caution: bowls and stone pots can be very hot",
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
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
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
    title: "What is bunsik?",
    description:
      "A local-friendly guide to Korean snack-shop food culture, where tteokbokki, gimbap, twigim, sundae, and eomuk all belong on the same table.",
    href: "/food/what-is-bunsik-korean-snack-food",
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
    label: "Travel guide",
    title: "Korea etiquette tips for tourists",
    description:
      "A practical first-time Korea etiquette guide with subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-soups-and-stews-guide-first-time",
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

export default function KoreanSoupsAndStewsGuideFirstTimePage() {
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
          name: "Korean soups and stews",
        },
        {
          "@type": "Thing",
          name: "Korean jjigae",
        },
        {
          "@type": "Thing",
          name: "Korean food",
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
          name: "Korean soups and stews guide",
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
              Korean soups and stews are everyday food — not only cold-weather
              food. A lot of Korean meals make more sense as rice, hot broth,
              side dishes, and something salty or spicy enough to keep the rice
              moving. If you are tired from walking in Seoul, this is the kind
              of food Koreans actually sit down for.
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
                  Korean soups and stews show a quieter side of the table — not
                  barbecue, not street snacks, but the warm bowl people reach for
                  when they are hungry, tired, cold, or just done walking for the
                  day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Guk, tang, jjigae, jeongol — without overthinking it
                </h2>

                <p>
                  Guk usually means a lighter soup. Tang often feels like a
                  deeper broth dish. Jjigae is a stew — stronger, saltier, often
                  bubbling hot. Jeongol is a shared hot pot at the table. You do
                  not need to memorize all of this; the useful question is
                  whether you are ordering one bowl for yourself or a shared pot
                  for the table. Solo travelers do better with individual soups;
                  groups can handle budae-jjigae, gamjatang, or jeongol more
                  easily.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kimchi-jjigae and doenjang-jjigae
                </h2>

                <p>
                  Kimchi-jjigae is sour, spicy, salty, and warm — meant to be
                  eaten with rice, not sipped like Western soup. If it tastes too
                  strong alone, try a spoonful with rice first. Doenjang-jjigae
                  uses soybean paste and can smell earthy and very home-meal
                  Korean; some people love it immediately, others need a few
                  bites. It often shows up alongside rice and grilled meat.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Sundubu-jjigae
                </h2>

                <p>
                  Sundubu-jjigae is a good first stew for many visitors.
                </p>

                <p>
                  It uses soft tofu and comes bubbling hot, often in a small
                  stone bowl.
                </p>

                <p>
                  There may be seafood, pork, beef, kimchi, or other versions
                  depending on the place.
                </p>

                <p>
                  It arrives in a small stone bowl, often still boiling — do not
                  touch the bowl, and let the first spoon cool a little. The soft
                  tofu can make even a spicy broth feel comforting.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Budae-jjigae
                </h2>

                <p>Budae-jjigae is a very different kind of stew.</p>

                <p>
                  It often includes sausage, ham, noodles, kimchi, beans, or
                  other mixed ingredients.
                </p>

                <p>It is a shared dish, and it has a modern, post-war history rather than an old royal-food feeling.</p>

                <p>
                  Many visitors find it easy to enjoy because the ingredients
                  feel familiar.
                </p>

                <p>But it can be salty and heavy.</p>

                <p>This is not a light soup.</p>

                <p>It is better with people, rice, and time.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Seolleongtang and galbitang
                </h2>

                <p>
                  Seolleongtang is mild beef bone soup — white broth, sliced
                  beef, sometimes noodles or rice — and it can taste lighter than
                  you expect until you season it. Salt, pepper, scallions, or
                  kimchi at the table are part of the meal; try that before you
                  decide it is too plain. Galbitang, beef short rib soup, is
                  another milder choice if red spicy stews feel like too much.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Samgyetang, gamjatang, and seafood stews
                </h2>

                <p>Samgyetang is often connected with summer in Korea.</p>

                <p>
                  That may surprise visitors because it is hot chicken soup.
                </p>

                <p>
                  But in Korea, people often eat hot stamina foods during hot
                  weather too.
                </p>

                <p>
                  Samgyetang usually has a small chicken with rice, ginseng,
                  garlic, or other ingredients depending on the restaurant.
                </p>

                <p>It is filling and gentle, but it can also feel unfamiliar if you are not used to whole-chicken soup.</p>

                <p>Gamjatang is a shared pork bone stew.</p>

                <p>Despite the name, it is not only about potatoes.</p>

                <p>
                  It usually has pork bones, broth, vegetables, and strong
                  seasoning.
                </p>

                <p>
                  It can be fun with a group, but it is not the easiest first
                  solo meal.
                </p>

                <p>
                  There are bones, shared portions, and a stronger table-food
                  feeling.
                </p>

                <p>
                  If you are with friends and want something hearty, it can be
                  memorable.
                </p>

                <p>
                  If you are alone and tired, choose a simpler individual bowl.
                </p>

                <p>
                  Maeuntang or seafood stews can be good if you like fish and
                  spicy broth.
                </p>

                <p>But they can be more challenging for beginners.</p>

                <p>
                  The broth may be spicy, the fish bones can take attention, and
                  the flavor can be stronger than expected.
                </p>

                <p>This is better if you already like seafood.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Eat stews the Korean way — with rice
                </h2>

                <p>
                  Many jjigae dishes taste strong because they are built for rice:
                  stew, rice, side dish, another spoon of broth. Without rice,
                  the broth can feel too salty. Banchan may come with your order,
                  but refills vary by place — take a reasonable amount from
                  self-service areas rather than loading the table at once.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hot bowls and shared pots
                </h2>

                <p>
                  Stone bowls, metal pots, and shared burners stay hot a long
                  time — use the spoon, wait before a big bite, and let staff
                  handle a shared pot if you are unsure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ordering alone vs with others
                </h2>

                <p>
                  Ordering can also feel different depending on the dish.
                </p>

                <p>Individual soups are usually simple.</p>

                <p>One person can order one bowl.</p>

                <p>
                  Shared stews often have a minimum portion or are ordered by
                  size.
                </p>

                <p>Some are better for two people or more.</p>

                <p>
                  If you are traveling alone, look for dishes like
                  sundubu-jjigae, kimchi-jjigae, seolleongtang, galbitang, or a
                  simple gukbap-style meal.
                </p>

                <p>
                  If you are with others, budae-jjigae, gamjatang, jeongol, or
                  larger shared stews become easier.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Choose by mood
                </p>

                <p>
                  Spicy and classic: kimchi-jjigae. Soft tofu and heat: sundubu.
                  Mild comfort: seolleongtang or galbitang. Everyday depth:
                  doenjang-jjigae. With friends: budae-jjigae or gamjatang.
                  Summer stamina: samgyetang. One trip does not need every soup
                  on the list.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Korean soups and stews sit close to daily life — sometimes
                  salty, spicy, plain, or boiling hot, but they click when you
                  eat them with rice and side dishes and give the bowl a minute
                  to cool. After a long walk, one good bowl can tell you more
                  about Korea than another viral snack on your checklist.
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
