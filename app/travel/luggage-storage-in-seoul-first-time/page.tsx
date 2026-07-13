import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/luggage-storage-in-seoul-first-time`;

const pageTitle =
  "Luggage Storage in Seoul for First-Time Visitors: Lockers, Hotels, Stations, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to luggage storage in Seoul for first-time visitors, covering hotel storage, station lockers, airport options, suitcase movement, subway stairs, rush hour, and local travel tips.";

const quickAnswer = [
  "Easiest option: ask your hotel or stay if they can hold luggage",
  "Useful option: station lockers, if available and your suitcase fits",
  "Good for airport days: airport or major transport-area storage options, depending on your route",
  "Main warning: do not drag luggage across Seoul during rush hour if you can avoid it",
  "Subway tip: fewer transfers are better with suitcases",
  "Local tip: plan luggage first, sightseeing second on arrival and departure days",
  "Avoid: carrying large luggage to Bukchon, palaces, crowded markets, small cafes, or nightlife streets",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Korea arrival day checklist for first-time visitors",
    description:
      "A practical first-day Korea guide covering airport arrival, internet setup, maps, transport, hotel check-in, first meal, Wi-Fi, and local travel tips.",
    href: "/travel/korea-arrival-day-checklist-first-time",
  },
  {
    label: "Travel guide",
    title: "How to get from Incheon Airport to Seoul",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "3 days in Seoul itinerary for first-time visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
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
    canonical: "/travel/luggage-storage-in-seoul-first-time",
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

export default function LuggageStorageInSeoulFirstTimePage() {
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
          name: "Seoul luggage storage",
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
          name: "Luggage storage in Seoul",
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
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If it is your first time visiting Seoul, luggage can affect your
              day more than you expect. On a map, stopping somewhere before
              hotel check-in may look easy. In real life, you may be carrying a
              suitcase through subway stairs, station exits, busy crossings,
              narrow alleys, hills, and crowded streets. The best local advice
              is simple: plan your luggage before you plan your sightseeing.
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
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Hotel or stay luggage storage
                </h2>

                <p>
                  If your hotel or guesthouse can hold luggage before check-in or
                  after check-out, that is usually the smoothest option — drop
                  your bags, then start the day lighter. Policies vary, so ask
                  your stay directly; it is especially helpful when you land before
                  check-in time.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Station lockers
                </h2>

                <p>
                  Station lockers in major hubs, malls, and transport areas can
                  hold a bag for a few hours while you walk around — but they can
                  be full, hard to find inside a big station, too small for a
                  large suitcase, or far from the exit you need. Payment and
                  language support vary too. Treat lockers as a bonus when they
                  work, not the backbone of a tight plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Moving through large stations with luggage
                </h2>

                <p>
                  Seoul Station, Hongdae, Gangnam, Jamsil, Express Bus Terminal,
                  and other big hubs mean long walks, stairs, escalators, crowds,
                  and many exits. The shortest map route is not always the easiest
                  with a suitcase — fewer transfers and a path with elevators
                  often beats a faster-looking line change.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Rush hour and suitcases
                </h2>

                <p>
                  Weekday morning and evening rush hour is the worst time to move
                  with luggage — subway cars and walkways fill with commuters
                  moving fast. If you can, wait it out with coffee or a simple
                  meal and move when crowds thin.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Taxis with luggage
                </h2>

                <p>
                  Taxis help with heavy bags, rain, family travel, or awkward
                  subway routes — but rush hour, rain, events, and traffic can
                  make them slow and expensive for the distance. Sometimes the
                  subway is crowded yet more predictable; pick based on the day,
                  not the idea that a taxi is always easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Where not to take large luggage
                </h2>

                <p>
                  Bukchon, palace areas, Insadong alleys, Ikseon-dong, crowded
                  markets, small cafes, and busy nightlife streets are rough with
                  a large suitcase — narrow paths, stairs, crowds, and in
                  Bukchon, real residential streets. Store luggage first, then
                  visit.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes and restaurants are not storage
                </h2>

                <p>
                  Cafes and restaurants are not luggage storage. Some larger
                  cafes have space near your table, but many Seoul spots are
                  compact and fast-paced — do not expect staff to watch your
                  suitcase while you leave. If you sit with bags, keep them close
                  and out of walkways.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Departure day
                </h2>

                <p>
                  On departure day, ask your stay about post check-out storage if
                  your flight is later. If that is not an option, look at station
                  or airport-area storage depending on your route — but skip a
                  far, transfer-heavy sightseeing plan before the airport. Stay
                  near your final route: central Seoul if you leave from Seoul
                  Station, near the bus stop if you take an airport bus.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Keep arrival and departure days lighter
                </h2>

                <p>
                  Arrival and departure days work best when they are lighter than
                  normal sightseeing — a convenience store meal, a nearby cafe, a
                  short neighborhood walk, or one easy shopping street can be
                  plenty. The goal is to enjoy the day without fighting your
                  suitcase.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  In Seoul, bags first and sightseeing second usually wins — drop
                  luggage at your stay when you can, use lockers when they are
                  convenient, skip rush hour with suitcases, and keep transfers
                  low. Seoul feels much better when your hands are free.
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
