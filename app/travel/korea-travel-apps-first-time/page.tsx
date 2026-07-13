import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/korea-travel-apps-first-time`;

const pageTitle =
  "Best Korea Travel Apps for First-Time Visitors: Naver Map, Kakao T, Papago, Baemin, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to Korea travel apps for first-time visitors, including Naver Map, KakaoMap, KakaoTalk, Papago, Kakao T, subway apps, Baemin, CatchTable, Yanolja, Yeogi Eottae, and local app tips.";

const quickAnswer = [
  "Start here: Naver Map is the easiest first pick for most travelers; KakaoMap is a strong backup",
  "Messaging: KakaoTalk is Korea’s everyday app, but tourists do not need it for every trip",
  "Translation: Papago helps with menus, signs, kiosks, and image translation — not always perfect",
  "Taxis: Kakao T can help with luggage, rain, and late nights, but sign-up and payment may vary",
  "Subway: Naver Map or KakaoMap often enough; an official Seoul Subway app can help beginners",
  "Food delivery: Baemin is famous locally, but restaurants and convenience stores are often easier",
  "Restaurants: CatchTable helps at some popular places, but not every meal needs a reservation",
  "Local tip: Download maps and translation before arrival; save Korean addresses offline",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Naver Map and KakaoMap travel guide",
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
    title: "How to use the Korean subway",
    description:
      "A local-friendly first guide to Korean subway rides, T-money cards, transfers, station signs, apps, etiquette, and simple mistakes to avoid.",
    href: "/travel/how-to-use-korean-subway",
  },
  {
    label: "Travel guide",
    title: "How to use a T-money card in Korea",
    description:
      "A local-friendly guide to buying, recharging, tapping, transferring, and avoiding common T-money mistakes on Korean subways and buses.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Food guide",
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
  },
  {
    label: "Travel guide",
    title: "Korea etiquette tips for tourists",
    description:
      "A practical first-time Korea etiquette guide with subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/korea-travel-apps-first-time",
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

export default function KoreaTravelAppsFirstTimePage() {
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
          name: "Korea travel apps",
        },
        {
          "@type": "Thing",
          name: "Naver Map",
        },
        {
          "@type": "Thing",
          name: "Kakao T",
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
          name: "Korea travel apps",
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
              If you are visiting Korea for the first time, apps can make the
              trip much easier. But the useful apps are not always the ones
              travelers expect. Korea has its own app habits — Naver Map for
              places, KakaoTalk for messaging, Kakao T for taxis, Baemin for
              delivery, and more. You do not need to master all of them, but
              knowing what each one is for can save a lot of confusion.
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
                  Many locals use KakaoTalk for messaging.
                </p>

                <p>Naver Map or KakaoMap for places and routes.</p>

                <p>Kakao T for taxis.</p>

                <p>Baemin for food delivery.</p>

                <p>CatchTable for some restaurant reservations.</p>

                <p>
                  Yanolja or Yeogi Eottae for local stays and travel bookings.
                </p>

                <p>
                  For a short trip, you do not need to master all of them.
                </p>

                <p>
                  But knowing what each app is for can save you a lot of
                  confusion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Naver Map and KakaoMap
                </h2>

                <p>
                  The first app to prepare is a local map app.
                </p>

                <p>
                  For most first-time visitors, Naver Map is the easiest place
                  to start.
                </p>

                <p>KakaoMap is also useful.</p>

                <p>
                  These apps are important because Korea can be difficult to
                  navigate with only a global map app. Local place names, subway
                  exits, buses, walking routes, and small restaurants are often
                  easier to understand through Korean map apps.
                </p>

                <p>This matters in Seoul.</p>

                <p>A subway exit can change your whole route.</p>

                <p>
                  Exit 2 and Exit 8 may put you on different sides of a wide
                  road.
                </p>

                <p>
                  A restaurant may look close, but the walking route may involve
                  stairs, alleys, or a large crossing.
                </p>

                <p>
                  A cafe may be inside a building, underground, or on an upper
                  floor.
                </p>

                <p>
                  Naver Map or KakaoMap can help with those small details.
                </p>

                <p>Download at least one before you arrive.</p>

                <p>Search your hotel.</p>

                <p>Search Myeongdong.</p>

                <p>Search Hongdae.</p>

                <p>Search Incheon Airport.</p>

                <p>Search one restaurant or cafe.</p>

                <p>
                  Get used to the app before you are tired and carrying luggage.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  KakaoTalk
                </h2>

                <p>KakaoTalk is Korea&apos;s everyday messenger.</p>

                <p>
                  If you make Korean friends, contact a local service, message a
                  guesthouse, follow a shop channel, or need to communicate with
                  someone in Korea, KakaoTalk may appear.
                </p>

                <p>
                  For many Koreans, KakaoTalk is not just a chat app.
                </p>

                <p>It is part of daily communication.</p>

                <p>
                  But for a short tourist trip, you may not need to use it much.
                </p>

                <p>
                  Do not feel like your Korea trip will fail without KakaoTalk.
                </p>

                <p>
                  It is useful to know, and helpful if someone asks for it, but
                  maps and translation apps are more urgent for most travelers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Papago
                </h2>

                <p>A translation app is very useful.</p>

                <p>
                  Papago is commonly used by travelers in Korea, especially for
                  Korean menus, signs, notices, product labels, kiosks, and short
                  phrases.
                </p>

                <p>
                  Image translation can help when a menu has no English.
                </p>

                <p>
                  It can also help with convenience store products, restaurant
                  signs, or kiosk screens.
                </p>

                <p>But translations are not always perfect.</p>

                <p>
                  Food names, slang, short notices, and handwritten menus can
                  still be confusing.
                </p>

                <p>Use translation as a helper.</p>

                <p>
                  Pointing at a menu photo, using simple words, and watching
                  what other customers do can be just as useful.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kakao T
                </h2>

                <p>Kakao T is useful for taxis.</p>

                <p>
                  A taxi can help when you have luggage, when it is raining,
                  when it is late, or when the subway route has too many
                  transfers.
                </p>

                <p>
                  Kakao T can make calling a taxi easier than trying to catch
                  one on the street.
                </p>

                <p>But do not build your whole trip around taxis.</p>

                <p>
                  During rush hour, rain, events, or heavy traffic, a taxi can
                  be slower and more stressful than the subway.
                </p>

                <p>
                  This is especially true when crossing the city.
                </p>

                <p>
                  A taxi feels comfortable when the road is clear.
                </p>

                <p>
                  It feels very different when traffic is barely moving.
                </p>

                <p>
                  Also, app sign-up, payment options, language support, and
                  foreign card support can vary by time and user situation.
                </p>

                <p>So the safest mindset is:</p>

                <p>Use the subway as your base.</p>

                <p>
                  Use Kakao T or taxis when they actually reduce stress.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Subway route apps
                </h2>

                <p>A subway app can also help.</p>

                <p>
                  Naver Map or KakaoMap can handle most subway routes, but some
                  first-time visitors like having a dedicated subway route app
                  too.
                </p>

                <p>
                  An official Seoul Subway app or a clear subway map app can
                  help you check lines, transfers, stations, exits, and route
                  flow.
                </p>

                <p>
                  This is useful when Seoul&apos;s subway map feels too large at
                  first.
                </p>

                <p>Still, do not overcomplicate it.</p>

                <p>
                  If Naver Map already gives you a clear route, that may be
                  enough.
                </p>

                <p>
                  The key is to check your route before entering a crowded
                  station.
                </p>

                <p>
                  During rush hour, standing in the middle of a station while
                  trying to understand transfers can feel stressful.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Baemin (Baedal Minjok)
                </h2>

                <p>
                  Baemin, or Baedal Minjok, is Korea&apos;s famous food delivery
                  app.
                </p>

                <p>Many locals use food delivery often.</p>

                <p>
                  For travelers, Baemin can be tempting because the food
                  options are huge.
                </p>

                <p>
                  But food delivery is not always the easiest choice on a short
                  trip.
                </p>

                <p>Your hotel address may be hard to enter.</p>

                <p>The delivery pin may need to be exact.</p>

                <p>
                  Payment or sign-up may not work smoothly for every foreign
                  visitor.
                </p>

                <p>Some buildings are confusing for riders.</p>

                <p>Some menus may still be hard to understand.</p>

                <p>If it works for you, great.</p>

                <p>
                  But do not depend on delivery apps as your main food plan.
                </p>

                <p>
                  For most first-time visitors, eating at restaurants, using food
                  courts, buying convenience store meals, or getting takeout
                  can be much simpler.
                </p>

                <p>Baemin is good to know.</p>

                <p>It is not something you must master on day one.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  CatchTable
                </h2>

                <p>CatchTable is useful if you care about restaurants.</p>

                <p>
                  Some popular restaurants use reservation or waitlist systems,
                  and CatchTable can help you discover places, check
                  availability, or manage reservations where supported.
                </p>

                <p>
                  This can be helpful if your trip includes specific restaurants
                  you really want to try.
                </p>

                <p>But not every restaurant is on CatchTable.</p>

                <p>Not every good meal needs a reservation.</p>

                <p>
                  And some of the best travel meals in Korea are simple places
                  you find near your route.
                </p>

                <p>Use CatchTable when it helps.</p>

                <p>Do not turn every meal into a reservation project.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Yanolja / NOL and Yeogi Eottae
                </h2>

                <p>
                  Yanolja, now also seen as NOL, and Yeogi Eottae are Korean
                  travel and accommodation apps.
                </p>

                <p>
                  Koreans may use these for hotels, motels, pensions, stays,
                  leisure, and domestic travel deals.
                </p>

                <p>
                  They can be useful for understanding local accommodation
                  options or last-minute domestic travel mood.
                </p>

                <p>But foreign visitors should be careful.</p>

                <p>
                  Language support, payment, account setup, cancellation rules,
                  and customer support can vary.
                </p>

                <p>
                  For many tourists, global booking platforms may still feel
                  easier.
                </p>

                <p>
                  Think of Yanolja/NOL and Yeogi Eottae as useful local names to
                  know, not apps you must use for every booking.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Weather app
                </h2>

                <p>A weather app is also worth having.</p>

                <p>Korea&apos;s weather can change your day.</p>

                <p>Summer humidity can make walking harder.</p>

                <p>
                  Rain can slow traffic and make taxis harder to catch.
                </p>

                <p>Winter cold can make outdoor plans tiring.</p>

                <p>
                  Spring and autumn can be beautiful, but the day can still
                  shift.
                </p>

                <p>Check the weather before leaving your stay.</p>

                <p>
                  A small umbrella, warmer layer, or indoor backup plan can
                  save the day.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple app setup
                </p>

                <p>
                  <strong className="text-[var(--text)]">Naver Map</strong> or{" "}
                  <strong className="text-[var(--text)]">KakaoMap</strong> for
                  movement
                </p>

                <p>
                  <strong className="text-[var(--text)]">Papago</strong> or
                  another translation app for language help
                </p>

                <p>
                  <strong className="text-[var(--text)]">Kakao T</strong> if you
                  may need taxis
                </p>

                <p>
                  A subway app if subway maps make you nervous
                </p>

                <p>
                  <strong className="text-[var(--text)]">KakaoTalk</strong> if
                  you need to communicate with locals
                </p>

                <p>
                  <strong className="text-[var(--text)]">Baemin</strong> only if
                  delivery actually works for your situation
                </p>

                <p>
                  <strong className="text-[var(--text)]">CatchTable</strong> if
                  you want restaurant reservations
                </p>

                <p>
                  <strong className="text-[var(--text)]">Yanolja/NOL</strong> or{" "}
                  <strong className="text-[var(--text)]">Yeogi Eottae</strong> if
                  you want to understand local booking apps
                </p>

                <p>Weather app for daily adjustments</p>

                <p>You do not need to download everything.</p>

                <p>
                  Too many unfamiliar apps can make the trip more confusing.
                </p>

                <p>Start with maps, translation, and transport.</p>

                <p>
                  Then add food, taxi, or booking apps only if they match your
                  travel style.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Offline backup
                </h2>

                <p>One last local tip:</p>

                <p>Do not rely only on live apps.</p>

                <p>Save your hotel name and address in Korean.</p>

                <p>Screenshot your first airport route.</p>

                <p>Screenshot your first-day neighborhood.</p>

                <p>Save important places in your map app.</p>

                <p>
                  Carry a battery pack if you use maps all day.
                </p>

                <p>
                  Apps are helpful, but your phone can lose battery, signal, or
                  patience at the worst moment.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, Korea travel apps are not about having the
                  perfect phone setup.
                </p>

                <p>They are about reducing small stress.</p>

                <p>Finding the right subway exit.</p>

                <p>Understanding a menu.</p>

                <p>Calling a taxi when you really need one.</p>

                <p>Checking a restaurant reservation.</p>

                <p>Knowing why locals mention KakaoTalk or Baemin.</p>

                <p>
                  And still being okay if one app does not work perfectly.
                </p>

                <p>Use Korean apps as tools, not pressure.</p>

                <p>
                  That is the best way to make your first Korea trip smoother.
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
