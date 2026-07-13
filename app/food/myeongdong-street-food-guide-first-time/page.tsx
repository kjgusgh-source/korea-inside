import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/myeongdong-street-food-guide-first-time`;

const pageTitle =
  "Myeongdong Street Food Guide for First-Time Visitors: What to Eat and What to Watch Out For";
const pageDescription =
  "A practical HAEMIL guide to Myeongdong street food for first-time visitors, including egg bread, tteokbokki, eomuk, hotteok, chicken bites, skewers, tourist prices, cash tips, and local advice.";

const quickAnswer = [
  "Best first snack: gyeran-ppang, Korean egg bread",
  "Classic choices: tteokbokki and eomuk",
  "Sweet choice: hotteok",
  "Easy sharing food: dakgangjeong or fried chicken bites",
  "Tourist-style snacks: cheese-heavy skewers, tornado potato, large grilled snacks",
  "Bring: small cash, because payment style can vary by stall",
  "Main warning: Myeongdong street food can be more expensive than local neighborhoods",
  "Local tip: check the price first, pick 2 or 3 snacks, and keep walking if a stall feels unclear",
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
    title: "What is tteokbokki?",
    description:
      "A local-friendly guide to Korea's spicy rice cake snack, from chewy tteok and red sauce to bunsik shops, markets, and classic add-ons.",
    href: "/food/what-is-tteokbokki",
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
    title: "Gwangjang Market food guide for first-time visitors",
    description:
      "A practical first-time guide to eating at Gwangjang Market, with bindaetteok, mayak gimbap, yukhoe, noodles, cash tips, crowds, and tourist-pricing cautions.",
    href: "/food/gwangjang-market-food-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "What to do in Myeongdong for the first time",
    description:
      "A local-friendly first guide to Myeongdong, from K-beauty shops and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.",
    href: "/travel/what-to-do-in-myeongdong-first-time",
  },
  {
    label: "Travel guide",
    title: "Seoul neighborhood guide for first-time visitors",
    description:
      "A practical guide to Seoul neighborhoods, from Myeongdong and Hongdae to Gangnam, Insadong, Euljiro, Seongsu, Jamsil, and Itaewon.",
    href: "/travel/seoul-neighborhood-guide-first-time",
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
    canonical: "/food/myeongdong-street-food-guide-first-time",
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

export default function MyeongdongStreetFoodGuideFirstTimePage() {
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
          name: "Myeongdong street food",
        },
        {
          "@type": "Thing",
          name: "Seoul street food",
        },
        {
          "@type": "Thing",
          name: "Korean street food",
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
          name: "Myeongdong street food guide",
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
              Myeongdong is one of the easiest places to try Korean street food
              on a first Seoul trip. It is central, simple to find, and full of
              food stalls near shops and cafes. But Myeongdong street food is
              fun and convenient — not always cheap, and not always the most
              local version of Korean food. Go for easy first bites. Just keep
              your eyes open.
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
                  It is better to understand what Myeongdong street food really
                  is.
                </p>

                <p>It is fun.</p>

                <p>It is convenient.</p>

                <p>It is very tourist-friendly.</p>

                <p>And it is not always cheap.</p>

                <p>
                  Myeongdong is not the place I would describe as a quiet local
                  food secret.
                </p>

                <p>Many visitors go there.</p>

                <p>Many stalls are used to foreign tourists.</p>

                <p>
                  Some foods feel more like travel snacks than everyday Korean
                  meals.
                </p>

                <p>That does not make them bad.</p>

                <p>
                  It just means you should not expect every bite to be the
                  best-value or most local version of Korean food.
                </p>

                <p>Go for the mood.</p>

                <p>Go for easy first snacks.</p>

                <p>Go because it is simple.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Gyeran-ppang (Korean egg bread)
                </h2>

                <p>
                  A good first snack is gyeran-ppang, Korean egg bread.
                </p>

                <p>
                  It is warm, soft, slightly sweet, and easy to understand even
                  if you are new to Korean food.
                </p>

                <p>
                  There is usually an egg baked into the bread, and the smell
                  feels very street-food-like when it is fresh.
                </p>

                <p>
                  This is a nice choice because it is not too messy and not too
                  spicy.
                </p>

                <p>
                  If you are tired from walking or shopping, one egg bread can
                  feel better than trying to sit down for a full meal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tteokbokki
                </h2>

                <p>Tteokbokki is another classic choice.</p>

                <p>It is chewy rice cakes in a red sauce.</p>

                <p>
                  Some versions are spicy, some are sweeter, and some are
                  milder than they look.
                </p>

                <p>
                  In Myeongdong, tteokbokki is easy to try because you do not
                  need to commit to a full restaurant meal.
                </p>

                <p>But if you are sensitive to spice, start small.</p>

                <p>Do not assume every red sauce is the same.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Eomuk
                </h2>

                <p>
                  Eomuk, or Korean fish cake skewers, is good when you want
                  something warm and simple.
                </p>

                <p>
                  It is often eaten with broth, especially when the weather is
                  cold.
                </p>

                <p>
                  For many Koreans, eomuk feels like a quick street snack rather
                  than a fancy food.
                </p>

                <p>That is why it works well in Myeongdong.</p>

                <p>
                  It is easy to eat, easy to share, and good between shopping
                  stops.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hotteok
                </h2>

                <p>Hotteok is the sweet choice.</p>

                <p>
                  It is a filled pancake, often with a sweet syrup-like inside.
                </p>

                <p>When it is hot, it can be very good.</p>

                <p>But be careful with the filling.</p>

                <p>It can be hotter than you expect.</p>

                <p>
                  Hotteok is better when you eat it slowly instead of taking one
                  big bite right away.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Dakgangjeong and chicken bites
                </h2>

                <p>Dakgangjeong or fried chicken bites are easy to share.</p>

                <p>These are usually sweet, crispy, sticky, and casual.</p>

                <p>
                  They are not the same as sitting down for Korean fried
                  chicken, but they work well as a walking snack.
                </p>

                <p>
                  If you are traveling with someone, this kind of food is
                  better shared.
                </p>

                <p>
                  Street food gets heavy quickly if you try to eat everything
                  alone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Skewers, tourist snacks, and sweet drinks
                </h2>

                <p>
                  You may also see skewers, grilled snacks, cheese-heavy foods,
                  tornado potato, fruit drinks, and bigger tourist-style snacks.
                </p>

                <p>Some of these are fun.</p>

                <p>Some are more for photos than flavor.</p>

                <p>
                  Some are not really &quot;traditional Korean food&quot; in a
                  deep sense.
                </p>

                <p>That is okay.</p>

                <p>
                  Myeongdong street food has become a mix of Korean snacks,
                  tourist snacks, and trendy-looking foods.
                </p>

                <p>You do not have to judge it too seriously.</p>

                <p>
                  Just do not confuse every stall with everyday Korean home
                  food.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Prices, cash, and payment
                </h2>

                <p>Now, the important part:</p>

                <p>Check the price before ordering.</p>

                <p>
                  Myeongdong is a tourist-heavy area, and street food here can
                  feel more expensive than food in quieter local neighborhoods.
                </p>

                <p>That does not mean every stall is bad.</p>

                <p>It means you should act like a careful traveler.</p>

                <p>Look for a visible price.</p>

                <p>Ask before you order if you are unsure.</p>

                <p>
                  Do not feel pressured to buy just because someone is holding
                  food out or calling to you.
                </p>

                <p>If something feels unclear, keep walking.</p>

                <p>There will be another stall.</p>

                <p>Small cash is useful in Myeongdong.</p>

                <p>
                  Some stalls may accept cards or other payment methods, but
                  payment style can vary.
                </p>

                <p>Do not assume every stall works the same way.</p>

                <p>
                  If you only have one payment option, you may feel awkward at
                  the counter.
                </p>

                <p>Having small cash makes street food easier.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Order less than you think
                </h2>

                <p>Order less than you think.</p>

                <p>
                  This is the mistake many first-time visitors make.
                </p>

                <p>
                  They see ten snacks, buy too much, and feel full before they
                  actually enjoy anything.
                </p>

                <p>Myeongdong street food is better as a light food walk.</p>

                <p>Pick two or three things.</p>

                <p>Eat them while they are hot.</p>

                <p>Then stop.</p>

                <p>You can always eat again later.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Do not block the street
                </h2>

                <p>Also, do not block the street.</p>

                <p>Myeongdong can get crowded.</p>

                <p>
                  People are shopping, walking, filming, waiting, and eating all
                  at the same time.
                </p>

                <p>If you need to check your phone, step to the side.</p>

                <p>If you want a photo, take it quickly.</p>

                <p>
                  If you are eating something messy, do not stand in the middle
                  of the walking path.
                </p>

                <p>This is simple, but it makes the area easier for everyone.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Street food vs a proper meal
                </h2>

                <p>
                  Myeongdong street food is not the best place for a full
                  dinner.
                </p>

                <p>It can be, if you are just snacking.</p>

                <p>
                  But if you want a calmer meal, sit down at a restaurant
                  nearby or go to another area after walking around.
                </p>

                <p>Street food is good for tasting.</p>

                <p>A restaurant is better when you want to rest.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple first visit
                </p>

                <p>Try egg bread.</p>

                <p>Try tteokbokki or eomuk.</p>

                <p>Add hotteok if you want something sweet.</p>

                <p>Share chicken bites or a skewer if something looks good.</p>

                <p>Skip anything that looks overpriced or too heavy.</p>

                <p>That is enough.</p>

                <p>You do not need to eat every famous-looking snack.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Part of the neighborhood, not the whole food plan
                </h2>

                <p>
                  Myeongdong works best when you treat it as part of the
                  neighborhood, not the whole food plan.
                </p>

                <p>Shop a little.</p>

                <p>Walk a little.</p>

                <p>Eat one or two snacks.</p>

                <p>Look at the lights and signs.</p>

                <p>Then move on to your next stop.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the honest answer is this:
                </p>

                <p>Myeongdong street food is not hidden.</p>

                <p>It is not always cheap.</p>

                <p>It is not always the most local food in Korea.</p>

                <p>
                  But it is easy, lively, and useful for a first taste of Seoul.
                </p>

                <p>Go with small cash.</p>

                <p>Check prices.</p>

                <p>Choose what actually looks good.</p>

                <p>Do not order too much.</p>

                <p>
                  And remember that the best snack is not always the most viral
                  one.
                </p>

                <p>
                  Sometimes it is just warm egg bread on a cold evening, eaten
                  while you are still figuring out Seoul.
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
