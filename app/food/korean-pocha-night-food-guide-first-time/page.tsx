import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-pocha-night-food-guide-first-time`;

const pageTitle =
  "Korean Pocha and Night Food Guide for First-Time Visitors: Anju, Pojangmacha, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to Korean pocha and night food for first-time visitors, including anju, pojangmacha, eomuk-tang, tteokbokki, dakbal, jeon, cash tips, price checks, and local etiquette.";

const quickAnswer = [
  "Pocha meaning: casual Korean night food and drinking spot",
  "Old-style version: pojangmacha, often tent-style or street-side",
  "Modern version: indoor pocha, more like a casual bar/restaurant",
  "Key word: anju, food eaten with drinks",
  "Easy first foods: eomuk-tang, tteokbokki, pajeon, gyeran-mari",
  "Stronger choices: dakbal, golbaengi-muchim, spicy stews",
  "Bring: small cash, especially for old-style or small places",
  "Main warning: check the menu and price before sitting or ordering",
  "Local tip: if the place feels pushy, unclear, or too expensive, keep walking",
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
    title: "Korean soups and stews guide for first-time visitors",
    description:
      "A practical guide to Korean soups and stews, from kimchi-jjigae and doenjang-jjigae to sundubu, seolleongtang, galbitang, samgyetang, rice, side dishes, and local tips.",
    href: "/food/korean-soups-and-stews-guide-first-time",
  },
  {
    label: "Food guide",
    title: "What is eomuk?",
    description:
      "A local-friendly guide to Korean fish cake skewers, from street broth cups and bunsik shops to convenience store snacks and winter comfort food.",
    href: "/food/what-is-eomuk-korean-fish-cake",
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
    title: "Gwangjang Market food guide for first-time visitors",
    description:
      "A practical first-time guide to eating at Gwangjang Market, with bindaetteok, mayak gimbap, yukhoe, noodles, cash tips, crowds, and tourist-pricing cautions.",
    href: "/food/gwangjang-market-food-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "Korea etiquette tips for tourists",
    description:
      "A practical first-time Korea etiquette guide with subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
  {
    label: "Travel guide",
    title: "Seoul neighborhood guide for first-time visitors",
    description:
      "A practical guide to Seoul neighborhoods, from Myeongdong and Hongdae to Gangnam, Insadong, Euljiro, Seongsu, Jamsil, and Itaewon.",
    href: "/travel/seoul-neighborhood-guide-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-pocha-night-food-guide-first-time",
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

export default function KoreanPochaNightFoodGuideFirstTimePage() {
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
          name: "Korean pocha",
        },
        {
          "@type": "Thing",
          name: "Korean anju",
        },
        {
          "@type": "Thing",
          name: "Korean night food",
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
          name: "Korean pocha and night food guide",
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
              Pocha is one of those Korean words that sounds simple until you
              actually visit one. It can mean a casual night food place, a
              drinking spot, an indoor bar with shared dishes, or an old-style
              pojangmacha tent. The feeling changes depending on where you go —
              so pocha is more of a mood than one exact thing.
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
                  Pocha is not one exact thing — it is a late-evening mood: small
                  tables, hot food, soju or beer nearby, something salty or spicy
                  in the middle, people talking louder than they meant to. Not
                  quite dinner, not just snacks.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Old-style pojangmacha vs modern indoor pocha
                </h2>

                <p>
                  Old-style pojangmacha is the drama image — plastic covers, small
                  stools, steam from broth, a little cramped. Memorable, but menus
                  can be simple, prices less clear, and payment style varies. It
                  is fine to look, check the menu, and keep walking. Modern indoor
                  pocha usually feels more like a casual bar or restaurant, with
                  clearer menus and more seats — still pocha-style food, just not
                  the tent in your head. For a first visit, indoor is often the
                  easier step.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What is anju?
                </h2>

                <p>
                  Anju means food eaten with alcohol — salty, spicy, greasy,
                  shareable, not always light. If a stew tastes too salty alone,
                  it may be meant to go slowly with drinks, rice, or other dishes.
                  You do not need to drink heavily; many people come mostly for
                  the food. Pocha is usually built around drinking culture, so
                  expect alcohol around you, but if you do not drink, pick a
                  place where ordering food without much alcohol feels normal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Easy first pocha foods
                </h2>

                <p>
                  Eomuk-tang, also called odeng-tang, is one of the easiest
                  first pocha foods.
                </p>

                <p>It is a warm fish cake soup.</p>

                <p>It is simple, comforting, and good on a cold night.</p>

                <p>
                  The broth is usually not too difficult for beginners, and the
                  skewers or fish cake pieces are easy to share.
                </p>

                <p>If you are unsure what to order, this is a gentle start.</p>

                <p>Tteokbokki also works well at night.</p>

                <p>
                  It is chewy, spicy, sweet, and familiar to many people who
                  already know Korean street food.
                </p>

                <p>
                  At pocha-style places, it may come in a larger portion than a
                  street snack.
                </p>

                <p>
                  Sometimes it has fish cake, noodles, eggs, or extra toppings.
                </p>

                <p>It is easy to understand, but it can get filling quickly.</p>

                <p>Do not order too many heavy dishes with it.</p>

                <p>Pajeon or kimchi-jeon is good for sharing.</p>

                <p>
                  Jeon is Korean-style pan-fried food, often eaten on rainy
                  days in the Korean imagination.
                </p>

                <p>
                  At night, it works because it is warm, oily, and easy to
                  split between people.
                </p>

                <p>Pajeon has green onion.</p>

                <p>Kimchi-jeon has kimchi.</p>

                <p>
                  Neither is fancy, but both feel right with a casual drink.
                </p>

                <p>Gyeran-mari is a softer choice.</p>

                <p>It is a rolled omelet, usually sliced and shared.</p>

                <p>
                  This is good if the table already has spicy food and you want
                  something mild.
                </p>

                <p>
                  It is also one of the easiest pocha foods for visitors who do
                  not want bones, raw food, or extreme spice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Stronger anju choices
                </h2>

                <p>Dakbal is more intense.</p>

                <p>Dakbal means chicken feet.</p>

                <p>Some people love the spicy, chewy texture.</p>

                <p>Some people cannot handle it at all.</p>

                <p>It is often very spicy and very much an anju dish.</p>

                <p>
                  Do not order it just because it sounds famous.
                </p>

                <p>
                  Order it only if you actually want that texture and heat.
                </p>

                <p>Golbaengi-muchim is another strong anju dish.</p>

                <p>
                  It is a spicy, tangy sea snail salad often mixed with
                  vegetables and noodles.
                </p>

                <p>The flavor can be sour, spicy, and sharp.</p>

                <p>
                  It is good if you like bold food, but it may surprise
                  first-time visitors.
                </p>

                <p>This is not a gentle beginner dish.</p>

                <p>
                  Budae-jjigae or spicy shared stews can also appear in
                  pocha-style nights.
                </p>

                <p>
                  These dishes are good with groups because the pot sits in the
                  middle and everyone eats together.
                </p>

                <p>
                  But shared stews are less convenient if you are alone.
                </p>

                <p>
                  If you are solo, look for smaller dishes, soup bowls, or
                  places where individual ordering feels natural.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Solo travelers and shared tables
                </h2>

                <p>Pocha is usually easier with two or more people.</p>

                <p>That does not mean solo travelers cannot go.</p>

                <p>It just means you should choose carefully.</p>

                <p>Some dishes are large.</p>

                <p>Some tables expect sharing.</p>

                <p>
                  Some places may feel awkward if you only want one small plate
                  and a long stay.
                </p>

                <p>
                  A casual indoor pocha or simple night restaurant is usually
                  easier than a tiny crowded tent if you are alone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Prices, cash, and payment
                </h2>

                <p>
                  Check the menu and price before you sit, especially at night in
                  tourist-heavy areas. Some places are normal; some are expensive
                  because of the location; outdoor or small tents may not show
                  prices as clearly as a regular restaurant. Do not sit down just
                  because someone calls you over. Cash helps at old-style or
                  street-side spots; indoor places often take cards, but payment
                  style varies — do not rely on one method only.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Noise and street manners
                </h2>

                <p>
                  Pocha areas get loud — people drink, laugh, and stay late, and
                  that is part of it. Still, do not block narrow sidewalks, stand
                  in doorways, or shout near residential buildings late at night.
                  If you are taking photos, avoid putting strangers clearly in
                  the frame, especially when people are drinking.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple first pocha night
                </p>

                <p>
                  Start with eomuk-tang, add one shared dish like pajeon,
                  tteokbokki, or gyeran-mari, and save dakbal or golbaengi for
                  when your group actually wants heat. Pocha food is heavier than
                  it looks — indoor pocha for the easy first night, old-style
                  tent only if you are ready to check price, menu, and payment
                  carefully.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Pocha is worth understanding because it shows a real night
                  rhythm — someone tired after work, someone meeting friends,
                  someone ordering one more dish after saying they were done,
                  someone heading to the subway. Go with curiosity, check the
                  price, bring a little cash, order less than you think, and pick
                  a place clear enough that you can actually relax.
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
