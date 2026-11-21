import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-use-korean-subway`;

const pageTitle = "How to Use the Korean Subway: A First-Time Visitor Guide";
const pageDescription =
  "A friendly HAEMIL guide to using the Korean subway for the first time, from T-money cards and station gates to transfers, apps, etiquette, and when a Climate Card may be worth considering.";

const quickFacts = [
  "Best first card: T-money or another rechargeable Korean transportation card",
  "Single-journey ticket: One subway ride only, not buses; it includes a KRW 500 deposit you get back at the station’s deposit refund machine",
  "Subway fare: Adult base fare is KRW 1,550 with a transportation card (since June 28, 2025) and KRW 1,650 with a single-journey ticket (Seoul’s official fares as of June 2026); always check current station information",
  "Useful apps: Naver Map or KakaoMap for routes, exits, transfers, and walking directions",
  "Climate Card: The 30-day pass has ended; the 1- to 7-day short-term passes still work on the subway and buses inside Seoul",
  "Local tip: The exit number matters. Exit 1 and Exit 8 can feel like completely different places",
  "Etiquette: Stand on the side, let people get off first, keep your voice low, and avoid priority seats unless you need them",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Seoul night travel guide",
    description:
      "Han River, Namsan, Euljiro, Cheonggyecheon, late-night streets, convenience-store snacks, and quiet city moods.",
    href: "/travel/night-seoul-han-river-namsan-euljiro",
  },
  {
    label: "Food guide",
    title: "What to eat in Seoul for a first-time visitor",
    description:
      "A warm first guide to Seoul food, from street snacks and markets to neighborhood meals that feel local.",
    href: "/food/what-to-eat-in-seoul-first-time",
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
    canonical: "/travel/how-to-use-korean-subway",
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

export default function HowToUseKoreanSubwayPage() {
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
          name: "Korean subway",
        },
        {
          "@type": "Thing",
          name: "Seoul travel",
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
          name: "How to use the Korean subway",
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
              How to Use the Korean Subway: A First-Time Visitor Guide
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              The Korean subway can look complicated at first — many lines,
              colors, and exits, and in Seoul one station can feel like a small
              underground city. The routine is simpler than the map suggests:
              choose a route, tap in, transfer if needed, find the right exit,
              and tap out.
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
                Memorizing the whole map is not the goal — you need a
                transportation card or ticket, a map app for routes and exits,
                and a little patience when a station feels bigger than expected.
              </p>

              <p>
                For most first-time visitors, a T-money card or another
                rechargeable Korean transportation card is the easiest choice.
                Tap when you enter the gate, ride, then tap again when you leave
                — that second tap matters, because the fare system needs both
                reads. You can also buy a single-journey subway ticket at a
                station machine for one ride. For an adult, the base fare is
                1,650 won on a single-journey ticket, compared with 1,550 won on
                a transportation card, and longer trips cost a little more. The
                machine shows the fare for your destination and adds a 500 won
                deposit, which you get back
                from the station&apos;s deposit refund machine after the ride —
                as long as the ticket is not lost or damaged. It is less
                convenient if you will move around more than once, and
                single-journey tickets work for subway only, not buses. Since
                March 17, 2026, the new ticket machines at Line 1–8 stations
                also accept overseas-issued credit and debit cards for these
                tickets, with a service fee of about 3.7% on average.
              </p>

              <p>
                If you are staying in Seoul and riding a lot, you may hear about
                the Climate Card — worth checking, not something every traveler
                needs automatically. The 30-day Climate Card ended on October
                1, 2026; what visitors can still buy is the short-term pass for
                1, 2, 3, 5, or 7 days. As of October 2026, Seoul lists them at
                5,000 to 20,000 won, plus 3,000 won for the physical card. The
                pass covers the subway inside Seoul and Seoul city and village
                buses, but not the Shinbundang Line, GTX, airport or red
                express buses, or subway stations outside Seoul. One exception
                helps on the way out: you can board the Airport Railroad at a
                covered station in Seoul, such as Seoul Station, Hongik
                University, or Gimpo Airport, and get off at Incheon Airport
                Terminal 1 or 2. You cannot use the pass to board at the
                airport stations. Seoul&apos;s notices do not mention the
                separate non-stop Airport Express train, so do not assume the
                pass covers it. For simple
                trips, T-money is usually easier; for Seoul-heavy, subway-heavy
                days, the short-term pass may be worth comparing.
              </p>

              <p>
                Naver Map and KakaoMap save the most stress — they show which
                line to take, where to transfer, which exit to use, and how long
                the walk is after you leave the station. Check your route before
                entering a large station, especially during rush hour. The exit
                number matters a lot: exit 1 and exit 8 can put you on opposite
                sides of a huge road, several minutes apart. If the app says
                exit 6, follow exit 6 — &quot;any exit&quot; is one of the most
                common first-time mistakes.
              </p>

              <p>
                Station signs at major stops usually show Korean, English,
                Chinese characters, and Japanese, and line colors help when
                things feel busy — follow green for Line 2, blue for Line 4,
                and so on. Transfers can surprise visitors: at large stations
                you may walk up stairs, down stairs, through a corridor, and
                around a corner before you reach the next platform. Keep following
                the line color and transfer signs; the fastest-looking route is
                not always the easiest one with luggage or during rush hour.
              </p>

              <p>
                Before you go down to the platform, check the direction and
                final station name — some stations have platforms on opposite
                sides, and entering the wrong direction can mean going back up
                or crossing through another passage. When the train arrives, stand
                to the side of the doors, let people off first, then board.
                During rush hour the cars fill up and the flow moves quickly;
                blocking the door or standing in the middle draws attention you
                do not want.
              </p>

              <p>
                Inside the train, keep your voice lower than on the street —
                Korean subways are not always silent, but loud phone calls and
                group conversations feel out of place. Priority seats and pink
                pregnancy seats are marked for people who need them; even when
                the train is empty, leaving them open is the easier choice as a
                visitor. At the gate, locals move fast because they do it daily —
                hold your card ready before the reader, and step slightly aside
                if you need to search your bag. If the gate does not open, tap
                again, check your balance, or ask station staff; it happens.
              </p>

              <p>
                A simple first-ride routine: open Naver Map or KakaoMap, search
                your destination, check line, transfer, and exit number, tap in,
                follow the line color, transfer if needed, get off, follow the
                exit number, tap out. The subway feels hard because it is big,
                fast, and full of small details — once those details click, it
                becomes one of the most useful parts of traveling in Korea,
                linking palaces, markets, cafes, riverside parks, and quiet
                neighborhoods without fighting traffic.
              </p>

              <p>
                After a few rides the rhythm changes — you stop staring at every
                sign, start following colors, and learn why the exit number
                mattered all along. By trip&apos;s end, tapping in and walking
                into a station may feel completely normal.
              </p>

              <p className="text-sm italic leading-7 md:text-base">
                Fares, ticket, and pass details checked on November 21, 2026,
                against the Seoul Metropolitan Government&apos;s transport
                pages and Seoul&apos;s official tourism site (Visit Seoul). They
                can change, so check station notices before you ride.
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
