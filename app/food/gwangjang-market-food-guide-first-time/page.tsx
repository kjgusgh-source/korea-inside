import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/gwangjang-market-food-guide-first-time`;

const pageTitle =
  "Gwangjang Market Food Guide for First-Time Visitors: What to Eat and What to Watch Out For";
const pageDescription =
  "A practical HAEMIL guide to Gwangjang Market food for first-time visitors, including bindaetteok, mayak gimbap, yukhoe, noodles, cash tips, crowds, tourist pricing, and local market etiquette.";

const quickAnswer = [
  "Best first food: bindaetteok or nokdujeon",
  "Easy snack: mayak gimbap",
  "Famous but optional: yukhoe",
  "Comfort choice: kalguksu or a warm noodle bowl",
  "Bring: small cash, because payment style can vary by stall",
  "Main warning: check the price before ordering, especially in tourist-heavy food alleys",
  "Best approach: pick 2 or 3 foods, not everything",
  "Local tip: if a stall feels pushy or unclear, keep walking",
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
    label: "Food guide",
    title: "What is tteokbokki?",
    description:
      "A local-friendly guide to Korea's spicy rice cake snack, from chewy tteok and red sauce to bunsik shops, markets, and classic add-ons.",
    href: "/food/what-is-tteokbokki",
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
    title: "How to get around Seoul for first-time visitors",
    description:
      "A practical Seoul transport guide for first-time visitors, with subway, taxi, rush hour, airport routes, walking, maps, and local trade-offs.",
    href: "/travel/how-to-get-around-seoul-first-time",
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
    canonical: "/food/gwangjang-market-food-guide-first-time",
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

export default function GwangjangMarketFoodGuideFirstTimePage() {
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
          name: "Gwangjang Market",
        },
        {
          "@type": "Thing",
          name: "Seoul market food",
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
          name: "Gwangjang Market food guide",
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
              Gwangjang Market is worth visiting on a first Seoul trip. But it
              is better to know what kind of place it is before you go. It is
              famous, crowded, and has a lot of tourists now. That does not mean
              you should skip it — just go with clear eyes and try a few foods,
              not every viral dish on the list.
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
                  It is not a quiet hidden market.
                </p>

                <p>It is famous.</p>

                <p>It is crowded.</p>

                <p>It has a lot of tourists now.</p>

                <p>
                  Some parts feel local, some parts feel very visitor-focused,
                  and some parts can feel a little too pushy if you are not used
                  to Korean markets.
                </p>

                <p>
                  Gwangjang Market is best when you treat it as a place to try a
                  few foods and feel the market energy.
                </p>

                <p>Not as a place where every stall is perfect.</p>

                <p>Not as a place where everything is automatically cheap.</p>

                <p>
                  Not as a place where you need to eat every viral dish.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bindaetteok (nokdujeon)
                </h2>

                <p>
                  The food most people notice first is bindaetteok, also called
                  nokdujeon.
                </p>

                <p>It is a mung bean pancake cooked on a hot griddle.</p>

                <p>
                  You will probably smell it before you decide to eat it.
                </p>

                <p>
                  It is oily, warm, crispy outside, softer inside, and very
                  filling.
                </p>

                <p>
                  This is one of the better first foods at Gwangjang Market
                  because it actually feels like market food.
                </p>

                <p>It is not delicate.</p>

                <p>It is not fancy.</p>

                <p>
                  It is the kind of food that makes sense in a noisy market
                  aisle.
                </p>

                <p>The only caution is that it can be heavy.</p>

                <p>
                  If you eat a whole one alone, you may not have much room left
                  for anything else.
                </p>

                <p>If you are with someone, sharing is better.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Mayak gimbap
                </h2>

                <p>Mayak gimbap is another easy food to try.</p>

                <p>
                  It is a small, simple gimbap, usually eaten with a dipping
                  sauce.
                </p>

                <p>
                  Do not expect it to feel like a full restaurant meal.
                </p>

                <p>It is more like a small market snack.</p>

                <p>That is why it works.</p>

                <p>
                  It is easy to pick up, easy to share, and not too hard for
                  first-time visitors to understand.
                </p>

                <p>
                  But because it is so famous, it may not feel like a secret
                  local discovery.
                </p>

                <p>Just eat it for what it is:</p>

                <p>a simple bite between other foods.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Yukhoe
                </h2>

                <p>
                  Yukhoe is one of the most famous foods around Gwangjang
                  Market.
                </p>

                <p>Yukhoe is Korean-style raw beef.</p>

                <p>
                  Some visitors come to the market specifically for it.
                </p>

                <p>
                  Japanese visitors may be especially curious about yukhoe
                  because raw beef dishes are much more sensitive and tightly
                  regulated in Japan than in Korea.
                </p>

                <p>But yukhoe is not something everyone has to try.</p>

                <p>If you are uncomfortable with raw meat, skip it.</p>

                <p>
                  If you do try it, choose a place that looks clean, busy in a
                  normal way, and clear about what it serves.
                </p>

                <p>
                  Do not eat raw beef just because a guide says it is famous.
                </p>

                <p>Eat it only if you actually want to.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kalguksu and noodle bowls
                </h2>

                <p>
                  Kalguksu or warm noodle bowls are good when the market starts
                  to feel too oily.
                </p>

                <p>A bowl of noodles can slow things down.</p>

                <p>
                  It feels more like a meal and less like chasing snacks.
                </p>

                <p>
                  This can be a good choice if you are tired, cold, or
                  overwhelmed by the crowd.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tteokbokki, eomuk, and market snacks
                </h2>

                <p>
                  Tteokbokki, eomuk, and other simple market snacks are also
                  easy to find.
                </p>

                <p>
                  They are familiar Korean street foods, but the same warning
                  applies:
                </p>

                <p>do not order too much at once.</p>

                <p>
                  Market food gets heavy faster than you think.
                </p>

                <p>
                  A few bites here and there can be more enjoyable than forcing
                  a full checklist.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cash, prices, and payment
                </h2>

                <p>Now, the practical part.</p>

                <p>Bring some cash.</p>

                <p>
                  Some places may accept cards, but food stalls and market
                  counters can vary.
                </p>

                <p>
                  If you only rely on one payment method, you may feel stuck.
                </p>

                <p>Small cash is useful in a market like this.</p>

                <p>You should also check the price before ordering.</p>

                <p>This is important.</p>

                <p>
                  Gwangjang Market has many foreign visitors, and some travelers
                  feel that prices in very tourist-heavy food areas are not
                  always the best value.
                </p>

                <p>This does not mean every vendor is dishonest.</p>

                <p>It means you should act like a careful traveler.</p>

                <p>Look for a visible menu.</p>

                <p>Ask the price before you sit.</p>

                <p>Do not sit down only because someone calls you over.</p>

                <p>If the price feels unclear, keep walking.</p>

                <p>There are many stalls.</p>

                <p>You do not have to choose the first one.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Moving through the market
                </h2>

                <p>The market aisles can be narrow.</p>

                <p>People stop suddenly.</p>

                <p>Staff may call out to customers.</p>

                <p>Tourists take photos.</p>

                <p>Someone is trying to carry hot food behind you.</p>

                <p>
                  This is not the place to stand in the middle of the path and
                  check your phone for five minutes.
                </p>

                <p>Step to the side first.</p>

                <p>
                  If you want photos, take them quickly and avoid blocking people
                  eating or working.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How market seating works
                </h2>

                <p>Market seats are not cafe seats.</p>

                <p>At many stalls, the rhythm is simple:</p>

                <p>sit,</p>

                <p>order,</p>

                <p>eat,</p>

                <p>pay,</p>

                <p>move on.</p>

                <p>
                  You do not need to rush nervously, but it is not the best
                  place to stay for a long time after finishing food, especially
                  when people are waiting.
                </p>

                <p>This is just how busy market eating works.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple first visit
                </p>

                <p>Try bindaetteok.</p>

                <p>Add mayak gimbap if you want a small snack.</p>

                <p>Try yukhoe only if you are comfortable with raw beef.</p>

                <p>Choose noodles if you want something warm and calmer.</p>

                <p>Then stop.</p>

                <p>That is enough.</p>

                <p>You can eat again later somewhere else.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Fitting it into your day
                </h2>

                <p>
                  Gwangjang Market also fits well with a Jongno or old Seoul
                  day.
                </p>

                <p>
                  You can connect it with Insadong, Ikseon-dong, Euljiro,
                  Dongdaemun, or palace areas depending on your route.
                </p>

                <p>But do not bring big luggage.</p>

                <p>
                  A suitcase in these narrow aisles will make the visit worse
                  for you and for everyone around you.
                </p>

                <p>Drop your bags first.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best way to enjoy Gwangjang Market is
                  not to believe every viral video.
                </p>

                <p>Go hungry, but not desperate.</p>

                <p>Bring small cash.</p>

                <p>Check prices.</p>

                <p>Pick two or three foods.</p>

                <p>Avoid pushy or unclear stalls.</p>

                <p>Do not block the aisle.</p>

                <p>Eat while the food is hot.</p>

                <p>And accept that the market is a little messy.</p>

                <p>That is part of the place.</p>

                <p>
                  Gwangjang Market can be crowded, touristy, noisy, oily, and
                  not always the cheapest.
                </p>

                <p>But it can still be memorable.</p>

                <p>A hot pancake on a metal counter.</p>

                <p>A small roll of gimbap.</p>

                <p>A bowl of noodles.</p>

                <p>The smell of frying oil.</p>

                <p>People moving in every direction.</p>

                <p>A market auntie calling you over.</p>

                <p>
                  A quick meal that feels very different from a polished cafe
                  street.
                </p>

                <p>That is the reason to go.</p>

                <p>Not because it is perfect.</p>

                <p>Because it feels alive.</p>
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
