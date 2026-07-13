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
                  Some aisles still feel local. Others feel built for visitors,
                  and a few stalls can get pushy if you are not used to Korean
                  markets. Treat Gwangjang as a place to try two or three foods
                  and move on — not a checklist where every viral dish has to
                  happen in one visit, and not a place where every price is
                  automatically fair.
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
                  It is oily, loud-market food — not delicate, but exactly what
                  makes sense on a hot griddle in a narrow aisle. The only
                  caution is that it can be heavy.
                </p>

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
                  Think of it as a small bite between other foods — easy to pick
                  up and share, not a full meal. It is famous now, so it will
                  not feel like a secret find, and that is fine.
                </p>
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

                <p>
                  Bring small cash. Some stalls take cards, but payment style
                  varies, and relying on one method can leave you stuck at the
                  counter.
                </p>

                <p>
                  Check the price before you sit or order. Gwangjang gets a lot
                  of foreign visitors, and food-alley prices are not always the
                  best value — that does not mean every vendor is dishonest, but
                  it does mean you should look for a visible menu, ask if needed,
                  and keep walking if someone calls you over without a clear
                  price. There are many stalls.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Moving through the market
                </h2>

                <p>
                  The aisles are narrow — people stop for photos, staff call out
                  to customers, and someone behind you may be carrying hot food.
                  Step to the side before checking your phone, take photos
                  quickly, and avoid blocking people eating or working.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How market seating works
                </h2>

                <p>
                  Market seats are not cafe seats. At many stalls the rhythm is
                  sit, order, eat, pay, move on. You do not need to rush, but
                  lingering after you finish — especially when people are waiting
                  — can feel awkward. That is just how busy market eating works.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple first visit
                </p>

                <p>
                  Try bindaetteok, add mayak gimbap if you want a small snack,
                  choose yukhoe only if you are comfortable with raw beef, and
                  pick noodles if you want something warm and calmer — then stop
                  and eat again later somewhere else.
                </p>
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
                <p>
                  Go hungry but not desperate, bring small cash, check prices,
                  pick two or three foods, and eat while things are still hot.
                  Gwangjang can be crowded, touristy, noisy, and oily — and the
                  reason people still go is the feeling: a hot pancake on a
                  metal counter, a small roll of gimbap, frying oil in the air,
                  and a market auntie calling you over from a narrow aisle. It
                  is messy, and that is part of it.
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
