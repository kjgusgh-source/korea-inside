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
  "Where to buy: Usually convenience stores and subway stations, depending on location and stock",
  "Where to recharge: Subway ticket machines and many convenience stores; cash may still be useful",
  "Use it for: Subway gates, buses, and some everyday payments depending on the store/service",
  "Current fare note: Seoul’s official subway page lists adult base fare as KRW 1,550 by card and KRW 1,650 by single-ride cash ticket as of June 28, 2025; always check current station information",
  "Transfer tip: Tap every time. On buses, tap when boarding and tap again when getting off",
  "Common mistake: Forgetting to tap off a bus can affect your next fare or transfer",
  "Climate Card note: Compare it only if you will ride many times mostly inside Seoul",
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
              A T-money card is one of the small things that makes Korea feel
              much easier.
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
                At first, it is just a plastic transportation card.
              </p>

              <p>
                After one or two days, it becomes the thing you reach for
                without thinking.
              </p>

              <p>
                You tap it at the subway gate. You tap it on the bus. You
                recharge it when the balance gets low. You stop worrying about
                buying a ticket every time you move. That small habit makes
                traveling in Korea feel much less stressful.
              </p>

              <p>
                For most first-time visitors, T-money is the easiest default
                choice.
              </p>

              <p>
                You can use a single-journey subway ticket, but that is usually
                only comfortable if you are taking one ride and nothing else. A
                T-money card is better if you will use the subway more than
                once, take buses, or move around Seoul during the day.
              </p>

              <p>The basic idea is simple.</p>

              <p>Buy the card.</p>

              <p>Add money to it.</p>

              <p>Tap in.</p>

              <p>Ride.</p>

              <p>Tap out.</p>

              <p>Recharge when needed.</p>

              <p>That is the whole rhythm.</p>

              <p>
                You can usually buy a T-money card at convenience stores or
                subway stations, depending on the location and stock.
                Convenience stores are often the easiest place to start because
                travelers already go there for water, snacks, and SIM or daily
                items. Subway stations may also have machines or service
                points, but the setup can vary.
              </p>

              <p>
                If one place does not have the card you want, try another
                convenience store.
              </p>

              <p>That is normal.</p>

              <p>
                Recharging is also usually simple, but this is where travelers
                should be a little careful. Subway ticket machines and many
                convenience stores can recharge transportation cards. Cash may
                still be useful for recharging in some situations, so do not
                arrive with only a foreign card and no Korean cash at all.
              </p>

              <p>You do not need to carry a lot.</p>

              <p>Just enough to solve small transportation problems.</p>

              <p>
                Public transportation fares and card rules can change, so if
                something on a machine or notice looks different from what you
                expected, check the station screen, official notices, or the
                card issuer.
              </p>

              <p>
                When you use the subway, tap your card at the gate when you
                enter. The gate will read the card and open. When you arrive at
                your destination, tap again to exit. Do not forget the second
                tap. The system needs to know where your ride ended.
              </p>

              <p>On buses, the habit is even more important.</p>

              <p>Tap when you get on.</p>

              <p>Tap again when you get off.</p>

              <p>
                Some visitors forget the second tap because buses in their
                country may not require it. In Korea, tapping off helps the
                system calculate the fare and transfer correctly. If you
                forget, your next ride or transfer may not work the way you
                expect.
              </p>

              <p>
                This is especially important because transfers are one of the
                biggest reasons T-money is useful.
              </p>

              <p>
                With a transportation card, Korea&apos;s public transport system
                can recognize many subway-to-bus, bus-to-subway, and bus-to-bus
                transfers. That does not mean every transfer is free in every
                situation forever. The rules depend on the route, system, time
                window, and sometimes whether you are taking the same bus route
                again.
              </p>

              <p>The local habit is simple:</p>

              <p>Tap every time.</p>

              <p>Do not wait too long between rides.</p>

              <p>
                Do not assume the same-route bus will count as a normal
                transfer.
              </p>

              <p>
                And if you are unsure, just think of T-money as making
                transfers smoother, not magical.
              </p>

              <p>For a traveler, that is enough.</p>

              <p>A common example looks like this:</p>

              <p>You take the subway to a station near your destination.</p>

              <p>You tap out.</p>

              <p>You walk to the bus stop.</p>

              <p>You take a short bus ride.</p>

              <p>You tap on and tap off.</p>

              <p>
                If the transfer is valid, the card system handles the fare
                benefit automatically. You do not need to ask the driver for a
                transfer ticket.
              </p>

              <p>
                That quiet automatic feeling is why locals like transportation
                cards.
              </p>

              <p>
                It is also why T-money feels better after you use it a few
                times. The first day, you may check every gate and every
                balance screen. By the third day, you just tap and move.
              </p>

              <p>There are a few small mistakes to avoid.</p>

              <p>
                Do not keep the card deep in your bag when you are approaching
                the gate. People behind you may be moving quickly. Hold the
                card before you reach the reader.
              </p>

              <p>
                Do not tap your wallet if it has several transportation or
                contactless cards inside. The reader may get confused. Take out
                the card you want to use.
              </p>

              <p>
                Do not forget to check your balance. If the balance is too low,
                the gate or bus reader may reject the card. Recharge before it
                gets stressful.
              </p>

              <p>Do not throw the card away after one ride. It is reusable.</p>

              <p>
                And do not treat it like a pass that covers every public
                transport service in Korea. It is widely useful, but rules and
                coverage can vary by region and service.
              </p>

              <p>
                If you are staying mostly in Seoul and taking public transport
                many times, you may also want to compare the Climate Card.
              </p>

              <p>
                But for many first-time visitors, T-money is still simpler. It
                is flexible, easy to understand, and good for mixed trips where
                you might take subways, buses, taxis, trains, or leave Seoul for
                a day. The Climate Card can be useful, but only if its valid
                area and pass type match your actual trip.
              </p>

              <p>T-money is the safer first explanation.</p>

              <p>Climate Card is the comparison.</p>

              <p>
                Another small local tip: keep your T-money card somewhere easy
                to reach.
              </p>

              <p>Not in your suitcase.</p>

              <p>Not in a deep pocket under five other things.</p>

              <p>
                Put it in a card holder, phone pouch, or wallet pocket you can
                open quickly. Korea&apos;s subway and bus system moves fast, and
                having the card ready makes you feel less like you are blocking
                the flow.
              </p>

              <p>This is not about rushing.</p>

              <p>It is about joining the rhythm.</p>

              <p>Tap.</p>

              <p>Move.</p>

              <p>Stand to the side if you need to check something.</p>

              <p>Then continue.</p>

              <p>
                For HAEMIL readers, the best way to understand T-money is not
                as a complicated travel product. Think of it as your small
                permission slip for daily movement in Korea.
              </p>

              <p>It helps you ride the subway.</p>

              <p>It helps you take the bus.</p>

              <p>It helps you transfer without thinking too much.</p>

              <p>
                It helps you feel less nervous the next time you walk into a
                station.
              </p>

              <p>
                And once you get used to that small beep at the gate, Korea
                starts to feel much easier to move through.
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
