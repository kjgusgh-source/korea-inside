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
                  They show a quieter side of Korean food.
                </p>

                <p>Not barbecue.</p>

                <p>Not street food.</p>

                <p>Not cafe dessert.</p>

                <p>
                  Just the kind of meal people eat when they are hungry, tired,
                  cold, hungover, busy, or in need of something warm.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Guk, tang, jjigae, jeongol — without overthinking it
                </h2>

                <p>The words can be confusing at first.</p>

                <p>Guk usually means a lighter soup.</p>

                <p>Tang often feels like a deeper soup or broth dish.</p>

                <p>
                  Jjigae is closer to a stew, usually stronger, saltier, and
                  served bubbling hot.
                </p>

                <p>
                  Jeongol is more like a shared hot pot cooked at the table.
                </p>

                <p>But do not worry too much about memorizing the categories.</p>

                <p>
                  In real life, the more useful question is simple:
                </p>

                <p>Is this an individual bowl, or is this a shared pot?</p>

                <p>That matters more when you are ordering.</p>

                <p>If you are alone, individual soups are easier.</p>

                <p>
                  If you are with two or more people, shared stews and hot pots
                  become easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kimchi-jjigae and doenjang-jjigae
                </h2>

                <p>Kimchi-jjigae is one of the most familiar Korean stews.</p>

                <p>
                  It is made with kimchi and often pork, tofu, or other
                  ingredients depending on the restaurant.
                </p>

                <p>The flavor is sour, spicy, salty, and warm.</p>

                <p>It is not meant to be a delicate soup.</p>

                <p>It is meant to be eaten with rice.</p>

                <p>This is important.</p>

                <p>
                  If you taste kimchi-jjigae alone and think it is too strong,
                  try it with rice.
                </p>

                <p>That is how it makes sense.</p>

                <p>Doenjang-jjigae is another everyday stew.</p>

                <p>It uses doenjang, Korean soybean paste.</p>

                <p>
                  The smell and flavor can be stronger than visitors expect.
                </p>

                <p>
                  It can feel earthy, salty, and very Korean in a home-meal
                  way.
                </p>

                <p>Some people love it immediately.</p>

                <p>Some need time.</p>

                <p>
                  Doenjang-jjigae is not usually a flashy food, but it is one
                  of the dishes that makes a Korean table feel complete.
                </p>

                <p>It is especially common with rice and grilled meat meals.</p>
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

                <p>It looks intense when it arrives.</p>

                <p>It may still be boiling.</p>

                <p>Do not touch the bowl.</p>

                <p>Do not rush the first spoon.</p>

                <p>Let it calm down a little.</p>

                <p>
                  Sundubu is nice because the tofu softens the broth, so even
                  when it is spicy, the texture can feel comforting.
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

                <p>Seolleongtang is a mild beef bone soup.</p>

                <p>It often looks plain at first.</p>

                <p>White broth.</p>

                <p>Sliced beef.</p>

                <p>Noodles or rice depending on the place.</p>

                <p>
                  When it arrives, the flavor may feel lighter than expected.
                </p>

                <p>That is normal.</p>

                <p>
                  At many places, you season it yourself with salt, pepper,
                  scallions, or kimchi.
                </p>

                <p>This is part of eating seolleongtang.</p>

                <p>
                  Do not judge it before adding a little seasoning.
                </p>

                <p>It is a comfort food, not a loud food.</p>

                <p>Galbitang is another good option if you want something milder.</p>

                <p>It is a beef short rib soup.</p>

                <p>
                  The broth is usually clearer than spicy stews, and the meat
                  makes it feel more filling.
                </p>

                <p>
                  For first-time visitors who are nervous about spice, galbitang
                  can be a safer choice.
                </p>

                <p>
                  It still feels Korean, but it is not usually a red, spicy
                  bowl.
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
                  The biggest mistake with Korean stews is treating them like
                  Western soup.
                </p>

                <p>
                  Many jjigae dishes are strong because they are meant to be
                  eaten with rice.
                </p>

                <p>A spoon of stew.</p>

                <p>A bite of rice.</p>

                <p>A side dish.</p>

                <p>Another spoon of broth.</p>

                <p>That rhythm matters.</p>

                <p>
                  If you eat only the broth, it may feel too salty or intense.
                </p>

                <p>Rice balances it.</p>

                <p>Side dishes also matter.</p>

                <p>
                  Some restaurants bring banchan with soup or stew.
                </p>

                <p>Some may refill certain side dishes.</p>

                <p>Some may not.</p>

                <p>Do not assume every item is unlimited.</p>

                <p>
                  If there is a self-service area, take a reasonable amount.
                </p>

                <p>
                  It is better to get a little more later than to waste food.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hot bowls and shared pots
                </h2>

                <p>Be careful with hot bowls.</p>

                <p>Korean soups and stews can arrive boiling.</p>

                <p>
                  Stone bowls, metal pots, and shared burners can stay hot for
                  a long time.
                </p>

                <p>
                  The food may look ready, but the bowl may still be dangerous
                  to touch.
                </p>

                <p>Use the spoon.</p>

                <p>Wait before taking a big bite.</p>

                <p>
                  If there is a shared pot, let the person cooking or the staff
                  handle it if you are unsure.
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

                <p>If you want spicy and classic, try kimchi-jjigae.</p>

                <p>If you want soft tofu and heat, try sundubu-jjigae.</p>

                <p>If you want mild comfort, try seolleongtang or galbitang.</p>

                <p>If you want a stronger everyday flavor, try doenjang-jjigae.</p>

                <p>
                  If you are with friends and want a shared meal, try
                  budae-jjigae or gamjatang.
                </p>

                <p>If you want a summer stamina meal, try samgyetang.</p>

                <p>You do not need to try every soup on one trip.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, Korean soups and stews are worth trying
                  because they feel close to daily life.
                </p>

                <p>They are not always pretty.</p>

                <p>They are not always gentle.</p>

                <p>
                  Sometimes they are salty, spicy, plain, boiling, or messy.
                </p>

                <p>
                  But they make sense when you eat them the Korean way:
                </p>

                <p>with rice,</p>

                <p>with side dishes,</p>

                <p>slowly enough not to burn your mouth,</p>

                <p>
                  and without trying to turn every meal into a checklist.
                </p>

                <p>
                  A good bowl of soup after a long walk can tell you more about
                  Korea than another viral snack.
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
