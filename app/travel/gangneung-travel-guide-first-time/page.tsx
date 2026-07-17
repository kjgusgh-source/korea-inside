import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/gangneung-travel-guide-first-time`;

const pageTitle =
  "Gangneung Travel Guide for First-Time Visitors: Sea, Markets, Coffee, and the BTS Bus Stop";
const pageDescription =
  "A friendly first-time guide to Gangneung, one of Korea’s favorite east coast travel cities, with clear sea views, seafood, markets, coffee streets, and the BTS Bus Stop near Jumunjin and Hyangho Beach.";

const quickAnswer = [
  "Gangneung is one of Korea’s favorite east coast travel cities — come for the open sea, seafood, markets, and cafe streets.",
  "Add the BTS Bus Stop near Jumunjin and Hyangho Beach if you want a K-pop photo stop with a real coastal day around it.",
  "It works best as a slower day or overnight trip, not a rushed checklist.",
  "From Seoul, many people take the train or an intercity bus; check Korail, bus apps, or Naver Map on the day.",
  "A rental car helps if you want to link Gyeongpo, Anmok, the market, and the northern beaches in one go.",
];

type MapPlace = {
  name: string;
  note: string;
  googleMapQuery: string;
  naverMapQuery: string;
};

const mapPlaces: MapPlace[] = [
  {
    name: "Gyeongpo Beach / Gyeongpo area",
    note: "A classic first stop — long sea walk, open views, and an easy place to feel you are actually on the east coast.",
    googleMapQuery: "Gyeongpo Beach Gangneung",
    naverMapQuery: "경포해변",
  },
  {
    name: "Anmok Coffee Street",
    note: "Beachside cafes in a row; good when you want coffee with the sea nearby, not only a quick photo.",
    googleMapQuery: "Anmok Coffee Street Gangneung",
    naverMapQuery: "강릉 안목커피거리",
  },
  {
    name: "Gangneung Jungang Market",
    note: "Market snacks, casual food, and a more everyday eating mood than tourist-street pricing.",
    googleMapQuery: "Gangneung Jungang Market",
    naverMapQuery: "강릉중앙시장",
  },
  {
    name: "Jumunjin Beach / Hyangho Beach",
    note: "The quieter northern coast — where the BTS Bus Stop fits naturally into a beach day.",
    googleMapQuery: "Jumunjin Beach Gangneung",
    naverMapQuery: "주문진해변",
  },
  {
    name: "BTS Bus Stop",
    note: "A photo spot tied to BTS album imagery — not a normal bus stop for getting around.",
    googleMapQuery: "BTS Bus Stop Gangneung",
    naverMapQuery: "강릉 BTS 버스정류장",
  },
  {
    name: "Ojukheon",
    note: "A calmer cultural stop if you want something beyond beaches and cafes for an hour or two.",
    googleMapQuery: "Ojukheon Gangneung",
    naverMapQuery: "오죽헌",
  },
  {
    name: "Gangmun Beach",
    note: "Another beach-and-cafe area that works well for photos and a slow walk.",
    googleMapQuery: "Gangmun Beach Gangneung",
    naverMapQuery: "강문해변",
  },
  {
    name: "Chodang Sundubu Village",
    note: "A local food direction worth knowing — especially if you want soft tofu stew after the sea air.",
    googleMapQuery: "Chodang Sundubu Village Gangneung",
    naverMapQuery: "초당순두부마을",
  },
];

const naverMapSearchUrl = (query: string) =>
  `https://map.naver.com/p/search/${encodeURIComponent(query)}`;

const googleMapSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "Apps worth setting up before landing — Naver Map, KakaoMap, Papago, Kakao T, and a few others for maps, rides, and reservations.",
    href: "/travel/korea-travel-apps-first-time",
  },
  {
    label: "Travel guide",
    title: "Naver Map and KakaoMap guide",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
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
    title: "7 days in Korea itinerary for first-time visitors",
    description:
      "One week split between Seoul and a second city — realistic pacing, transport between stops, and room for food detours.",
    href: "/travel/7-days-in-korea-itinerary-first-time",
  },
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "K-pop guide",
    title: "What is a fancam?",
    description:
      "A local-friendly guide to K-pop fancams, from music show stages and close-up cams to why fans save and share them.",
    href: "/kpop/what-is-a-fancam",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/gangneung-travel-guide-first-time",
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

export default function GangneungTravelGuideFirstTimePage() {
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
          name: "Gangneung",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "Gangwon Province",
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
          name: "Gangneung travel guide",
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
              Gangneung is not a secret place in Korea. Koreans already know it
              as one of the classic east coast trips — the kind of city people
              visit for blue sea, seafood, market food, coffee, and a slower
              mood than Seoul. For many overseas visitors, though, Gangneung
              still feels less familiar than Seoul, Busan, or Jeju. That is what
              makes it worth introducing properly: not as a small BTS-only stop,
              but as one of Korea’s favorite coastal cities, with the BTS Bus
              Stop as one memorable place you can add to the trip.
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
                  Why Koreans like Gangneung
                </h2>

                <p>
                  If you ask Korean friends where they went on a long weekend,
                  Gangneung comes up a lot. People go for beaches, seafood,
                  Jungang Market, coffee streets, and that relaxed feeling you
                  get when you leave Seoul for a night or two. It is not hidden
                  — summer trips, family drives, and cafe dates by the sea are
                  normal here. What is different is that many overseas visitors
                  still plan around Seoul first and only later hear about
                  Gangneung, often through the coast or through a K-pop photo
                  spot. The city deserves to be understood on its own terms
                  before any one landmark.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What makes the Gangwon East Sea feel different
                </h2>

                <p>
                  The East Sea here feels open — wind, light, and a long horizon
                  instead of city walls. You notice people walking slowly,
                  stopping for photos, or just standing by the water for a minute.
                  Gyeongpo, Gangmun, and the northern Jumunjin coast all have
                  different moods, but the basic idea is the same: you came for
                  the sea, not to race through ten stops before sunset.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Places to save on your map
                </h2>

                <p>
                  Save a few pins before you go — then adjust on the day. These
                  are search links, not fixed coordinates; open Naver Map or
                  Google Maps and pick the place that looks right.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {mapPlaces.map((place) => (
                    <article
                      key={place.name}
                      className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5"
                    >
                      <h3 className="text-lg font-semibold text-[var(--text)]">
                        {place.name}
                      </h3>

                      <p className="mt-3 text-sm leading-7">{place.note}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <a
                          href={naverMapSearchUrl(place.naverMapQuery)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          Open in Naver Map →
                        </a>

                        <a
                          href={googleMapSearchUrl(place.googleMapQuery)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          Open in Google Maps →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What to eat in Gangneung
                </h2>

                <p>
                  Gangneung is an easy city to eat in without a fancy plan.
                  Seafood is the headline — grilled fish, stews, raw fish sets,
                  and simple coastal meals depending on what looks good that day.
                  Jungang Market is useful when you want snacks and small bites
                  in one place. Chodang sundubu (soft tofu stew) is another local
                  direction many Korean travelers know; the Chodang area is worth
                  a pin if you want something warm after the beach. Casual Korean
                  food, market food, and coffee all fit the same trip — you do
                  not need one famous restaurant name. Walk, look, and choose what
                  is busy and fresh.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Coffee and cafe streets
                </h2>

                <p>
                  In Korea, Gangneung and coffee trips often go together. Anmok
                  Coffee Street is the name many people know — a row of cafes
                  near the beach where you can sit with the sea in view. It is
                  not only for Instagram; locals actually use it to rest between
                  walks, eat something light, and wait out the wind. Pick a cafe
                  when your legs need a break. That is a normal Gangneung day,
                  not a side quest.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  The BTS Bus Stop near Jumunjin and Hyangho Beach
                </h2>

                <p>
                  Up on the northern coast, near Jumunjin Beach and Hyangho
                  Beach, there is a bus stop structure people call the BTS Bus
                  Stop. It connects to BTS album imagery — especially{" "}
                  <em>You Never Walk Alone</em> and <em>Spring Day</em> — because
                  it was built for jacket filming and later came back as a photo
                  spot fans recognize. It is not a normal bus stop. You do not
                  wait there for city buses; you visit, take photos, and keep
                  moving along the coast.
                </p>

                <p>
                  If you are a BTS fan, the meaning is obvious. If you are not,
                  it can still be a nice northern-coast stop — quiet water, open
                  road, less crowded than central beach strips. Just know it is
                  a small photo spot, not a theme park. One stop in a Gangneung
                  day that already includes the sea and a meal is enough for most
                  people.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  A suggested easy day flow
                </h2>

                <p>
                  Here is one relaxed route — not a strict schedule. Morning:
                  walk Gyeongpo or Anmok by the sea. Lunch: Jungang Market snacks
                  or a seafood meal nearby. Afternoon: coffee on Anmok Coffee
                  Street. Later, if you still have energy, head north to
                  Jumunjin or Hyangho Beach and the BTS Bus Stop.
                </p>

                <p>
                  If the BTS Bus Stop is your main reason to come, flip it:
                  start north while you are fresh, take your photos, then drift
                  back toward Gyeongpo, the market, or a cafe on the way down.
                  Summer and holiday weekends get crowded; shoulder seasons can
                  feel easier for parking and lines.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How to get to Gangneung
                </h2>

                <p>
                  From Seoul, many visitors take the train to Gangneung Station
                  or an intercity bus from a major terminal. Schedules, prices,
                  and seat availability change — check Korail, your bus app,
                  Naver Map, or KakaoMap on the day you travel rather than
                  relying on fixed numbers from a guide written months ago.
                </p>

                <p>
                  Gangneung is well known enough inside Korea that day tours and
                  package trips from Seoul exist. They can work if you do not
                  want to drive, though you trade freedom for a fixed route. Once
                  you arrive, taxis, local buses, and rental cars all become part
                  of the picture depending on how many stops you want in one day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How to get to the BTS Bus Stop from Gangneung
                </h2>

                <p>
                  The BTS Bus Stop sits on the northern coast, not beside every
                  central Gangneung stop. From Gangneung Station or the main
                  beach areas, plan on a separate drive or bus ride — but it
                  still fits naturally into a Gangneung day if you are already
                  combining Jumunjin and Hyangho Beach. A rental car or taxi is
                  usually the easiest way to link those spots without waiting on
                  infrequent buses.
                </p>

                <p>
                  Local buses toward Jumunjin and Hyangho-ri may work depending
                  on where you start; route numbers such as 314 sometimes show
                  up in map apps, but check Naver Map or KakaoMap on the day —
                  these buses are not as frequent or simple as Seoul subway
                  lines. If you drive, parking may be available near beach areas,
                  but read local signs when you arrive. Do not assume every lot
                  is free or open all day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Who Gangneung is good for
                </h2>

                <p>
                  Gangneung fits people who want the sea outside Seoul — couples,
                  friends, families, solo travelers okay with trains or driving,
                  cafe people, market eaters, and BTS fans who want a meaningful
                  but simple photo stop. It is less ideal if you only have two
                  days in Korea and need to stay central, or if you want every
                  hour packed tight. If you like slower domestic travel — water,
                  food, coffee, wind — Gangneung will probably feel right. Think
                  of it as a coastal add-on to a longer Korea trip, not a
                  replacement for Seoul.
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
