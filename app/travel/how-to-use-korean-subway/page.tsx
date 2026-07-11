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
  "Single-journey ticket: Good for one subway ride, but less convenient and not for buses",
  "Current fare note: Seoul’s official subway page lists adult base fare as KRW 1,550 by card and KRW 1,650 by single-ride cash ticket as of June 28, 2025; always check current station information",
  "Useful apps: Naver Map or KakaoMap for routes, exits, transfers, and walking directions",
  "Climate Card: Worth checking if you will ride often inside Seoul, but confirm the valid area before buying",
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
              The Korean subway can look complicated at first.
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
              <p>There are many lines.</p>

              <p>Many colors.</p>

              <p>Many exits.</p>

              <p>
                And if you are in Seoul, one station can feel almost like a small
                underground city.
              </p>

              <p>
                But the basic routine is simple once you understand it. You do
                not need to memorize the whole map. You only need to know how to
                choose a route, tap in, transfer, find the right exit, and not
                panic when a station feels bigger than expected.
              </p>

              <p>Start with a transportation card.</p>

              <p>
                For most first-time visitors, a T-money card or another
                rechargeable Korean transportation card is the easiest choice.
                You can use it for subway rides, and it is much more convenient
                than buying a single ticket every time. You tap the card when
                you enter the gate, ride the subway, then tap again when you
                leave.
              </p>

              <p>That second tap matters.</p>

              <p>
                Do not just walk out behind someone else or assume the gate
                already knows where you went. The fare system needs both taps.
              </p>

              <p>
                You can also buy a single-journey subway ticket at a station
                machine. This is fine if you only need one ride, but it is less
                convenient if you will use public transportation more than once.
                Also, single-journey subway tickets are for subway use only, so
                they are not as flexible as a rechargeable transportation card.
              </p>

              <p>
                If you are staying in Seoul and riding a lot, you may also hear
                about the Climate Card.
              </p>

              <p>
                Think of it as something to check, not something every traveler
                needs automatically. It can be useful if you plan to use public
                transportation many times inside Seoul. Short-term options
                exist, including 1-day, 2-day, 3-day, 5-day, and 7-day passes.
                But the valid area matters, so do not assume it covers every
                train, airport route, or trip outside Seoul.
              </p>

              <p>If your trip is simple, T-money is usually easier.</p>

              <p>
                If your trip is Seoul-heavy and subway-heavy, Climate Card may
                be worth comparing.
              </p>

              <p>Next, use an app.</p>

              <p>
                This is the part that saves you the most stress. In Korea, Naver
                Map and KakaoMap are often more useful than trying to read the
                whole subway map by yourself. They can show which line to take,
                where to transfer, which exit to use, and how long the walk is
                after you leave the station.
              </p>

              <p>The exit number is very important.</p>

              <p>
                In Korea, subway stations often have many exits. Exit 1 and Exit
                8 can place you on different sides of a huge road, or several
                minutes away from each other. If your map app says Exit 6, try
                to follow Exit 6. Do not think, &quot;Any exit is fine.&quot;
                Sometimes any exit is not fine.
              </p>

              <p>That is one of the most common first-time mistakes.</p>

              <p>The station signs are usually helpful.</p>

              <p>
                Major subway stations in Seoul and other big cities often show
                Korean, English, Chinese characters, and Japanese. Line colors
                and numbers also help. If you are taking Line 2, follow the
                green Line 2 signs. If you are transferring to Line 4, follow
                the blue Line 4 signs. The color system is useful when the
                station feels busy.
              </p>

              <p>Transfers can be long.</p>

              <p>
                This surprises many visitors. A transfer in Korea does not
                always mean walking across one small platform. At large
                stations, you may walk up stairs, down stairs, through a
                corridor, around a corner, and then down again. It can still be
                normal. Just keep following the line color and transfer signs.
              </p>

              <p>Do not rush unless you really have to.</p>

              <p>Another thing to know: the direction matters.</p>

              <p>
                Before you go down to the platform, check the final station or
                direction. Some stations have platforms on opposite sides, and
                if you enter the wrong direction, you may need to go back up or
                cross through another passage. Apps usually help with this, but
                it is still worth checking the station names on the sign.
              </p>

              <p>When the train arrives, stand to the side of the doors.</p>

              <p>Let people get off first.</p>

              <p>Then get on.</p>

              <p>
                This sounds simple, but it is one of those small rules that
                makes the subway flow. During rush hour, people move quickly,
                and standing in the middle of the door can make you feel very
                visible in the wrong way.
              </p>

              <p>Inside the train, keep your voice low.</p>

              <p>
                Korean subways are not always silent, but they are usually
                calmer than some visitors expect. Loud phone calls or loud group
                conversations can feel out of place. If you are traveling with
                friends, use a softer voice than you would on a street.
              </p>

              <p>Priority seats are another thing to notice.</p>

              <p>
                You will see seats for older people, pregnant passengers, people
                with disabilities, or people who need extra care. It is safest
                not to sit there unless you really need the seat. Some locals
                are relaxed about it when the train is empty, but as a visitor,
                avoiding those seats is the easier choice.
              </p>

              <p>There are also pink pregnancy seats in many trains.</p>

              <p>Even if the train is not full, it is better to leave them open.</p>

              <p>
                At the gate, do not worry if everyone seems faster than you.
              </p>

              <p>
                Locals move through subway gates very quickly because they do it
                every day. You can take one second to check your card. Just step
                slightly to the side if you need to search your bag or check
                your phone.
              </p>

              <p>If your card does not work, do not panic.</p>

              <p>
                Try tapping again. Check whether the card has enough balance. If
                the gate still does not open, look for station staff or a help
                gate. It happens.
              </p>

              <p>For a simple first ride, follow this routine:</p>

              <p>Open Naver Map or KakaoMap.</p>

              <p>Search your destination.</p>

              <p>Check the line, transfer, and exit number.</p>

              <p>Tap in with your transportation card.</p>

              <p>Follow the line color.</p>

              <p>Transfer slowly if needed.</p>

              <p>Get off.</p>

              <p>Follow the exit number.</p>

              <p>Tap out.</p>

              <p>That is enough.</p>

              <p>
                The Korean subway is not hard because the system is bad. It
                feels hard because it is big, fast, and full of small details.
                Once you learn those details, it becomes one of the most useful
                parts of traveling in Korea.
              </p>

              <p>
                It can take you to palaces, markets, cafés, riverside parks,
                shopping streets, universities, food alleys, and quiet
                neighborhoods.
              </p>

              <p>And after a few rides, the feeling changes.</p>

              <p>The first time, you may stare at every sign.</p>

              <p>The third time, you start following colors.</p>

              <p>The fifth time, you understand why the exit number matters.</p>

              <p>
                By the end of the trip, tapping your card and walking into the
                station may feel completely normal.
              </p>

              <p>That is when Korea starts to feel easier.</p>

              <p>Not because you know every line.</p>

              <p>Because you know the rhythm.</p>
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
