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
                  If your hotel or stay can hold your luggage, that is usually
                  the easiest option.
                </p>

                <p>
                  Many travelers first ask their hotel, guesthouse, or
                  accommodation whether they can leave bags before check-in or
                  after check-out. Policies vary, so you should check with your
                  own stay.
                </p>

                <p>When it works, this is usually the smoothest choice.</p>

                <p>You go straight to your stay.</p>

                <p>Drop your bags.</p>

                <p>Then start the day lighter.</p>

                <p>
                  This is especially helpful if you arrive in Seoul before
                  check-in time.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Station lockers
                </h2>

                <p>Station lockers can also be useful.</p>

                <p>
                  You may find lockers in major stations, subway areas, malls,
                  or transport hubs. They can help if you want to store a bag
                  for a few hours while you walk around.
                </p>

                <p>But lockers are not perfect.</p>

                <p>They can be full.</p>

                <p>They may be hard to find inside a large station.</p>

                <p>The size may not fit a large suitcase.</p>

                <p>Payment or language support may vary.</p>

                <p>
                  The locker may be far from the exit you actually need.
                </p>

                <p>
                  So do not build a tight plan around a locker unless you have
                  some flexibility.
                </p>

                <p>A locker is useful when it works.</p>

                <p>
                  It is stressful when you are tired and every locker is full.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Moving through large stations with luggage
                </h2>

                <p>Large stations can be confusing with luggage.</p>

                <p>
                  Seoul Station, Hongdae, Gangnam, Jamsil, Express Bus
                  Terminal, and other big stations can involve long walks,
                  stairs, escalators, crowds, and many exits.
                </p>

                <p>
                  If you have a suitcase, the shortest route on a map may not
                  feel like the easiest route in real life.
                </p>

                <p>
                  With luggage, fewer transfers are usually better than the
                  fastest-looking route.
                </p>

                <p>
                  A slightly longer route with elevators, simpler transfers, or
                  fewer station changes can feel much better.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Rush hour and suitcases
                </h2>

                <p>Rush hour is the worst time to move with luggage.</p>

                <p>
                  During weekday morning and evening commute times, subway cars
                  and station walkways can become very crowded. People are
                  moving quickly to work, school, appointments, or home.
                </p>

                <p>
                  Dragging a large suitcase through that flow can feel stressful
                  for you and inconvenient for everyone around you.
                </p>

                <p>
                  If you can, avoid moving across Seoul with luggage during rush
                  hour.
                </p>

                <p>Wait a little.</p>

                <p>Have coffee.</p>

                <p>Eat something simple.</p>

                <p>Move when the crowd is lighter.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Taxis with luggage
                </h2>

                <p>Taxis can help, but they are not always the answer.</p>

                <p>
                  A taxi can be useful if you have heavy luggage, bad weather,
                  family members, or a difficult subway route.
                </p>

                <p>
                  But during rush hour, rain, events, or heavy traffic, a taxi
                  can be slow and expensive for the amount of distance you
                  cover.
                </p>

                <p>
                  Sometimes the subway is crowded but still more predictable.
                </p>

                <p>Sometimes the taxi is more comfortable.</p>

                <p>
                  Choose based on the day, not just the idea that taxi is always
                  easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Where not to take large luggage
                </h2>

                <p>
                  Avoid taking large luggage to delicate or crowded areas.
                </p>

                <p>
                  Bukchon, palace areas, Insadong alleys, Ikseon-dong, crowded
                  markets, small cafes, and busy nightlife streets are not fun
                  with a suitcase.
                </p>

                <p>Some places have narrow paths.</p>

                <p>Some have stairs.</p>

                <p>Some are crowded.</p>

                <p>Some are real residential areas.</p>

                <p>
                  Dragging luggage through those places can make the experience
                  worse.
                </p>

                <p>If you want to visit those areas, store your luggage first.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes and restaurants are not storage
                </h2>

                <p>Cafes and restaurants are not luggage storage.</p>

                <p>
                  Some large cafes may have space near your table, but many
                  smaller Seoul cafes are compact. Restaurants can be busy,
                  narrow, or fast-paced.
                </p>

                <p>
                  Do not expect a cafe or restaurant to watch your suitcase
                  while you leave.
                </p>

                <p>
                  If you sit down with luggage, keep it close and avoid blocking
                  walkways.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Departure day
                </h2>

                <p>For departure day, keep the plan simple.</p>

                <p>
                  If your flight is later, ask your stay about luggage storage
                  after check-out.
                </p>

                <p>
                  If that is not possible, consider a station or airport-area
                  storage option depending on your route.
                </p>

                <p>
                  But do not plan a far, complicated sightseeing day with luggage
                  before going to the airport.
                </p>

                <p>Departure day already has enough stress.</p>

                <p>
                  You need to think about transport, timing, airport movement,
                  and your bags.
                </p>

                <p>One good plan is to stay near your final route.</p>

                <p>
                  If you leave from Seoul Station, spend time nearby or in
                  central Seoul.
                </p>

                <p>
                  If you leave by airport bus, stay near the bus stop area.
                </p>

                <p>
                  If you are carrying big luggage, avoid plans that require
                  many transfers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Keep arrival and departure days lighter
                </h2>

                <p>
                  Arrival day and departure day should be lighter than normal
                  sightseeing days.
                </p>

                <p>That does not mean boring.</p>

                <p>It means realistic.</p>

                <p>
                  A convenience store meal, a nearby cafe, a short neighborhood
                  walk, or one easy shopping street can be enough.
                </p>

                <p>
                  The goal is to enjoy the day without fighting your suitcase.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the easiest luggage rule in Seoul is this:
                </p>

                <p>Bags first, sightseeing second.</p>

                <p>Drop luggage at your stay if possible.</p>

                <p>
                  Use lockers when they are convenient, not as a risky last
                  hope.
                </p>

                <p>Avoid rush hour with suitcases.</p>

                <p>Choose fewer transfers.</p>

                <p>Do not drag large bags into crowded alleys.</p>

                <p>And keep arrival and departure days simple.</p>

                <p>Seoul is much more enjoyable when your hands are free.</p>
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
