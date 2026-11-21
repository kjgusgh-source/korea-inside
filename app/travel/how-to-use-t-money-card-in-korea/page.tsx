import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-use-t-money-card-in-korea`;

const pageTitle = "How to Use a T-money Card in Korea: A First-Time Visitor Guide";
const pageDescription =
  "A friendly HAEMIL guide to using a T-money card in Korea, from buying and recharging it to tapping on buses, subway gates, transfer discounts, and common first-time mistakes.";

const quickFacts = [
  "Best for: First-time visitors using Korean subways and buses",
  "Where to buy: Start at a convenience store; T-money’s foreigner guide lists subway station machines and information centers as top-up points",
  "Where to recharge: Convenience stores or subway station machines, with cash in Korean won (KRW 1,000 to 90,000 at a time, in KRW 1,000 steps)",
  "Use it for: Subway gates, buses, and some everyday payments depending on the store/service",
  "Subway fare: Adult base fare is KRW 1,550 with a transportation card (since June 28, 2025) and KRW 1,650 with a single-journey ticket, plus a KRW 500 deposit you get back (Seoul’s official fares as of June 2026); always check current station information",
  "Foreign credit cards: Since March 17, 2026, new ticket machines at Line 1–8 stations accept them for single-journey tickets and Climate Card short-term passes; Seoul’s announcement does not cover regular T-money top-ups",
  "Transfer tip: Tap every time. On buses, tap when boarding and tap again when getting off",
  "Common mistake: Forgetting to tap off a bus can affect your next fare or transfer",
  "Climate Card note: The 30-day pass has ended; the 1- to 7-day short-term passes are still sold for rides inside Seoul",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Korean subway first-time guide",
    description:
      "A local-friendly first guide to Korean subway rides, transfers, station signs, apps, etiquette, and simple mistakes to avoid.",
    href: "/travel/how-to-use-korean-subway",
  },
  {
    label: "Travel guide",
    title: "Seoul night travel guide",
    description:
      "Han River, Namsan, Euljiro, Cheonggyecheon, late-night streets, convenience-store snacks, and quiet city moods.",
    href: "/travel/night-seoul-han-river-namsan-euljiro",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Travel",
    title: "Open the Travel hub",
    description:
      "Map-friendly HAEMIL guides for exploring Korea through neighborhoods, food, local routes, and small details.",
    href: "/travel",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/how-to-use-t-money-card-in-korea",
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

export default function HowToUseTMoneyCardInKoreaPage() {
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
          name: "T-money card",
        },
        {
          "@type": "Thing",
          name: "Korean public transportation",
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
          name: "Travel",
          item: `${siteUrl}/travel`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to use a T-money card in Korea",
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
              href="/travel"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Travel
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Travel guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              How to Use a T-money Card in Korea: A First-Time Visitor Guide
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A T-money card is one of the small things that makes getting
              around Korea feel much easier — tap at subway gates and on buses,
              recharge when the balance runs low, and stop buying a ticket every
              time you move.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                For most first-time visitors, T-money is the easiest default —
                better than a single-journey subway ticket if you will ride more
                than once, take buses, or move around Seoul during the day. The
                rhythm is straightforward: buy the card, add money, tap in, ride,
                tap out, recharge when needed. For an adult, a basic subway ride
                costs 1,550 won with a transportation card and 1,650 won with a
                single-journey ticket, which also needs a 500 won deposit that
                you get back after the ride.
              </p>

              <p>
                The easiest place to buy a T-money card is usually a
                convenience store — travelers already go there for water,
                snacks, and daily items. T-money&apos;s own foreigner guide
                lists convenience stores for buying and topping up, while the
                machines and information centers in subway stations appear as
                top-up points. If one store does not have the card you want,
                try another convenience store — that is normal.
              </p>

              <p>
                Recharging is simple, but bring cash. T-money&apos;s foreigner
                guide describes top-ups with cash in Korean won, in 1,000 won
                steps from 1,000 to 90,000 won at a time, and a card can hold
                up to 500,000 won. You can top up at a convenience store counter
                or at the reload machines in subway stations. Public
                transportation fares and card rules can change, so if something
                on a machine or notice looks different from what you expected,
                check the station screen, official notices, or the card issuer.
              </p>

              <p>
                One 2026 change is easy to misread. Since March 17, 2026, the
                new ticket machines at Line 1–8 stations in Seoul accept
                overseas-issued credit and debit cards — but Seoul&apos;s
                announcement covers single-journey tickets and Climate Card
                short-term passes, with a service fee of about 3.7% on average.
                It does not cover topping up a regular T-money card, so keep
                some Korean cash for that.
              </p>

              <p>
                On the subway, tap at the gate when you enter and tap again when
                you exit — the system needs both reads to calculate the fare.
                On buses, tap when you get on and again when you get off; some
                visitors forget the second tap because buses in their country
                may not require it, but in Korea tapping off helps the system
                calculate fare and transfer correctly. A missed tap can affect
                your next ride or transfer.
              </p>

              <p>
                Transfers are one of the biggest reasons T-money is useful.
                With a transportation card, the Seoul-area transfer discount
                links the subway with city and village buses, as long as you
                board the next ride within 30 minutes of tapping off the last
                one — 60 minutes between 9 p.m. and 7 a.m. Getting back on the
                same bus route does not count as a transfer. The base fare
                covers the first 10 km of the whole trip; after that, a small
                distance charge is added (100 won for every extra 5 km for
                adults). Tap every time, do not wait too long between rides,
                and think of T-money as making transfers smoother, not magical.
              </p>

              <p>
                A common pattern: subway to a station near your destination, tap
                out, walk to the bus stop, short bus ride with tap on and tap
                off — if the transfer is valid, the card handles the fare benefit
                automatically without asking the driver for a transfer ticket.
                That quiet automatic feeling is why locals reach for
                transportation cards. By the third day you may just tap and move
                instead of checking every gate and balance screen.
              </p>

              <p>
                A few small habits help: hold the card ready before the gate
                instead of digging through your bag while people queue behind
                you; take the card out of your wallet if several contactless
                cards are stacked together, because the reader may get confused;
                recharge before the balance gets too low; and remember the card
                is reusable, not a one-ride ticket. T-money is widely useful for
                subway and bus travel, but it does not cover every payment
                situation in Korea — restaurant bills, some shops, and regional
                services may still need cash or another method.
              </p>

              <p>
                If you are staying mostly in Seoul and riding public transport
                many times, you may want to compare the Climate Card short-term
                pass. The 30-day Climate Card ended on October 1, 2026, but the
                1-, 2-, 3-, 5-, and 7-day passes are still sold. As of October
                2026, Seoul lists them at 5,000, 8,000, 10,000, 15,000, and
                20,000 won, plus 3,000 won for the physical card. A pass starts
                on the day you charge it and runs until the last service of its
                final day. It covers the subway inside Seoul and Seoul city and
                village buses, but not the Shinbundang Line, GTX, airport or
                red express buses, or subway stations outside Seoul. One
                exception helps on the way out: you can board the Airport
                Railroad at a covered station in Seoul, such as Seoul Station,
                Hongik University, or Gimpo Airport, and get off at Incheon
                Airport Terminal 1 or 2. You cannot use the pass to board at
                the airport stations. Seoul&apos;s notices do not mention the
                separate non-stop Airport Express train, so do not assume the
                pass covers it. For mixed
                trips with subways, buses, taxis, trains, or a day outside
                Seoul, T-money stays simpler and more flexible. Keep the card
                somewhere easy to reach — a phone pouch or wallet pocket you can
                open quickly — and stand to the side if you need to check
                something before tapping again.
              </p>

              <p>
                Once you get used to that small beep at the gate, daily movement
                in Korea starts to feel less nervous — less about memorizing
                fares, more about knowing the card is ready when you walk into
                the next station or bus stop.
              </p>

              <p className="text-sm italic leading-7 md:text-base">
                Fares, passes, and payment rules checked on November 21, 2026,
                against the Seoul Metropolitan Government&apos;s transport pages,
                Seoul&apos;s official tourism site (Visit Seoul), and
                T-money&apos;s foreigner guide. They can change, so check
                station notices before you ride.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related travel guides
                </h2>
              </div>

              <Link
                href="/travel"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Travel →
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
