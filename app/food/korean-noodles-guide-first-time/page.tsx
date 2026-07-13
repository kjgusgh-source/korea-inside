import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-noodles-guide-first-time`;

const pageTitle =
  "Korean Noodles Guide for First-Time Visitors: Ramyeon, Kalguksu, Naengmyeon, Jjajangmyeon, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to Korean noodle dishes for first-time visitors, including ramyeon, kalguksu, naengmyeon, bibim guksu, makguksu, kongguksu, jjajangmyeon, jjamppong, convenience store noodles, spice, scissors, and local eating tips.";

const quickAnswer = [
  "Easiest first warm noodle: kalguksu",
  "Easiest casual noodle: ramyeon or convenience store cup ramyeon",
  "Best cold noodle to know: naengmyeon",
  "Spicy cold choice: bibim guksu or bibim naengmyeon",
  "Korean-Chinese comfort choice: jjajangmyeon or jjamppong",
  "Summer local choice: makguksu or kongguksu",
  "Solo traveler tip: noodle shops are usually easier than BBQ or shared stews",
  "Local tip: naengmyeon may come with scissors, vinegar, and mustard",
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
    title: "Korean breakfast guide for first-time visitors",
    description:
      "A practical guide to breakfast in Korea, from gimbap, convenience stores, gukbap, haejangguk, and seolleongtang to street toast, bakeries, brunch cafes, and hotel breakfast.",
    href: "/food/korean-breakfast-guide-first-time",
  },
  {
    label: "Food guide",
    title: "What to eat at a Korean convenience store",
    description:
      "A practical guide to Korean convenience store food, from triangle gimbap and cup ramyeon to kimbap, lunchboxes, drinks, snacks, and late-night options.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Korean pocha and night food guide for first-time visitors",
    description:
      "A practical guide to Korean pocha night food, with anju, pojangmacha, eomuk-tang, tteokbokki, dakbal, jeon, cash tips, price checks, and local etiquette.",
    href: "/food/korean-pocha-night-food-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "A practical guide to Korean apps travelers may actually use, from Naver Map, KakaoMap, Papago, Kakao T, and subway apps to Baemin, CatchTable, Yanolja, and Yeogi Eottae.",
    href: "/travel/korea-travel-apps-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-noodles-guide-first-time",
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

export default function KoreanNoodlesGuideFirstTimePage() {
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
          name: "Korean noodles",
        },
        {
          "@type": "Thing",
          name: "Naengmyeon",
        },
        {
          "@type": "Thing",
          name: "Korean ramyeon",
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
          name: "Korean noodles guide",
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
              When you are tired, alone, or not ready for a big shared meal,
              noodles are one of the easiest Korean meals. Walk in, order one
              bowl, eat, and leave — no grill, no shared pot, not much to figure
              out.
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
                  Korean noodles are useful when you do not want a complicated
                  meal.
                </p>

                <p>That sounds simple, but it matters when you are traveling.</p>

                <p>Some Korean foods are better with two or more people.</p>

                <p>Some need grilling.</p>

                <p>Some come as a shared pot.</p>

                <p>Some require knowing how the table works.</p>

                <p>Noodles are easier.</p>

                <p>You can walk in, order one bowl, eat, and leave.</p>

                <p>
                  That makes them good for solo travelers, tired travelers, rainy
                  days, hot days, early lunches, late meals, and moments when
                  you do not want to think too much.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ramyeon — not Japanese ramen
                </h2>

                <p>The first thing to know is ramyeon.</p>

                <p>Korean ramyeon is not the same as Japanese ramen.</p>

                <p>
                  In Korea, ramyeon usually means instant-style noodles or casual
                  spicy noodles. It is not usually the slow pork-broth ramen shop
                  image that many travelers know from Japan.
                </p>

                <p>Cup ramyeon at a convenience store is normal travel food.</p>

                <p>
                  A simple bowl of ramyeon at a small restaurant or snack place
                  can also be normal.
                </p>

                <p>It is not fancy.</p>

                <p>That is the point.</p>

                <p>
                  It is quick, salty, spicy, cheap-feeling in mood even when
                  prices vary, and useful when you just need food.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kalguksu — warm and simple
                </h2>

                <p>If you want something warmer and more meal-like, try kalguksu.</p>

                <p>Kalguksu means knife-cut noodles.</p>

                <p>
                  The noodles are usually thicker and softer than instant noodles,
                  and the broth often feels simple and comforting.
                </p>

                <p>
                  It can be seafood-based, chicken-based, anchovy-based, or
                  different depending on the place.
                </p>

                <p>
                  Kalguksu is good on rainy days or when you are tired from
                  walking.
                </p>

                <p>It is not loud food.</p>

                <p>
                  It is the kind of food that feels better when you sit down
                  properly and let the bowl slow you down.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Naengmyeon — cold, chewy, and surprising
                </h2>

                <p>
                  Naengmyeon is cold noodles, and it can surprise first-time
                  visitors.
                </p>

                <p>The noodles are chewy.</p>

                <p>The broth can be cold, light, sour, or icy.</p>

                <p>
                  The flavor may feel quieter than expected if you are used to
                  hot, salty noodle soup.
                </p>

                <p>
                  Some places serve scissors with naengmyeon because the noodles
                  can be long and chewy.
                </p>

                <p>Cutting the noodles is normal.</p>

                <p>You may also see vinegar and mustard on the table.</p>

                <p>Add a little first, not too much.</p>

                <p>
                  Naengmyeon is especially good when the weather is hot or after
                  a heavy meal like BBQ.
                </p>

                <p>But it is not for everyone on the first bite.</p>

                <p>Some people love it.</p>

                <p>Some people need time.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bibim guksu and makguksu
                </h2>

                <p>
                  Bibim naengmyeon or bibim guksu is the spicier, saucier
                  direction.
                </p>

                <p>Bibim means mixed.</p>

                <p>
                  Instead of a clear cold broth, you get noodles mixed with a red
                  sauce.
                </p>

                <p>It can be sweet, spicy, tangy, and strong.</p>

                <p>This is better if you like sauce and heat.</p>

                <p>
                  If you are sensitive to spice, do not assume cold noodles are
                  always mild.
                </p>

                <p>A cold dish can still be spicy.</p>

                <p>
                  Makguksu is another cold noodle dish, often linked with
                  buckwheat noodles.
                </p>

                <p>
                  It can feel lighter and more regional than a basic tourist-area
                  noodle meal.
                </p>

                <p>
                  You may see it with sauce, broth, vegetables, or perilla
                  depending on the place.
                </p>

                <p>
                  Makguksu is good when you want something cold but not as
                  familiar as standard naengmyeon.
                </p>

                <p>
                  It can be refreshing, but again, the flavor may be more subtle
                  than visitors expect.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kongguksu — summer soybean noodles
                </h2>

                <p>Kongguksu is one of the most Korean summer surprises.</p>

                <p>It is noodles in cold soybean soup.</p>

                <p>The soup is pale, thick, and nutty.</p>

                <p>
                  It can taste very plain if you expect something salty or spicy.
                </p>

                <p>Some people add salt.</p>

                <p>Some enjoy the clean soybean flavor as it is.</p>

                <p>Kongguksu is not a dramatic travel food.</p>

                <p>
                  It is more like, &ldquo;It is hot, I need something cold,
                  filling, and calm.&rdquo;
                </p>

                <p>That is why locals eat it.</p>

                <p>That is also why some visitors do not understand it at first.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Jjajangmyeon and jjamppong
                </h2>

                <p>Jjajangmyeon is Korean-Chinese comfort food.</p>

                <p>It has noodles with black bean sauce.</p>

                <p>
                  The sauce is dark, savory, slightly sweet, and usually easier
                  for many visitors than spicy red dishes.
                </p>

                <p>This is not traditional Korean royal food.</p>

                <p>It is everyday Korean-Chinese food.</p>

                <p>Delivery food.</p>

                <p>Moving-day food.</p>

                <p>Casual restaurant food.</p>

                <p>
                  A dish people order when they want something simple and filling.
                </p>

                <p>
                  If you are nervous about spice, jjajangmyeon can be an easy
                  choice.
                </p>

                <p>
                  Jjamppong is the spicy seafood noodle side of Korean-Chinese
                  food.
                </p>

                <p>
                  It has red broth, seafood or vegetables, and a stronger flavor.
                </p>

                <p>It can be hot, spicy, salty, and filling.</p>

                <p>
                  If jjajangmyeon feels soft and easy, jjamppong feels louder.
                </p>

                <p>
                  Some people order both together when eating with someone else.
                </p>

                <p>Alone, choose based on your mood.</p>

                <p>Black sauce if you want comfort.</p>

                <p>Red soup if you want heat.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Japchae — know it, but do not expect it everywhere
                </h2>

                <p>
                  Japchae is made with glass noodles, but it is not usually the
                  same kind of noodle meal.
                </p>

                <p>
                  You may see it as a side dish, party food, buffet food, or part
                  of a larger meal.
                </p>

                <p>
                  It is sweet-savory and made with vegetables, meat, and glass
                  noodles.
                </p>

                <p>
                  It is worth knowing, but do not expect every noodle restaurant
                  to serve japchae as a main bowl.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Choose by weather and energy
                </p>

                <p>Cold day or rain: kalguksu or jjamppong.</p>

                <p>Hot day: naengmyeon, makguksu, or kongguksu.</p>

                <p>No energy: ramyeon or convenience store cup noodles.</p>

                <p>Nervous about spice: jjajangmyeon or mild kalguksu.</p>

                <p>Want something very Korean and cold: naengmyeon.</p>

                <p>Want spicy sauce: bibim guksu.</p>

                <p>
                  Want a quick solo meal: almost any noodle shop is easier than
                  BBQ.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  When your food plans fail
                </h2>

                <p>Noodles are also good when your food plans fail.</p>

                <p>The restaurant you saved is closed.</p>

                <p>The line is too long.</p>

                <p>You are too hungry to search.</p>

                <p>Your group cannot agree.</p>

                <p>You are alone and do not want a shared dish.</p>

                <p>This is when noodles help.</p>

                <p>A simple bowl can save the day.</p>

                <p>Do not overthink it.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ordering tips
                </h2>

                <p>Ordering noodles is usually straightforward.</p>

                <p>Look for photos.</p>

                <p>Check whether the dish is hot or cold.</p>

                <p>Check whether it is spicy.</p>

                <p>Use a translation app if needed.</p>

                <p>
                  If there are table scissors with cold noodles, use them
                  carefully.
                </p>

                <p>If there is vinegar or mustard, add slowly.</p>

                <p>If the bowl is hot, do not rush the first bite.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, Korean noodles are not about finding one
                  perfect dish.
                </p>

                <p>They are about having options.</p>

                <p>
                  Warm, cold, spicy, plain, quick, heavy, soft, chewy,
                  solo-friendly, convenience-store easy, restaurant-simple.
                </p>

                <p>That is why noodles are useful in Korea.</p>

                <p>They are not always the most exciting meal of the trip.</p>

                <p>
                  But sometimes, after too much walking and too many choices, a
                  good bowl of noodles is exactly what you needed.
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
