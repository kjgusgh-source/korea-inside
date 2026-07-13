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
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Naver Map and KakaoMap
                </h2>

                <p>
                  Naver Map or KakaoMap matters because Google Maps alone often
                  misses local detail — subway exits, bus stops, alley walks,
                  cafes on upper floors. Exit 2 and Exit 8 can put you on opposite
                  sides of a wide road. Download one before you land, search your
                  hotel and a few neighborhoods, and get used to it before you
                  are tired with luggage.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  KakaoTalk
                </h2>

                <p>
                  KakaoTalk is Korea&apos;s everyday messenger — guesthouses,
                  shops, and new friends may ask for it. Your trip will not fail
                  without it; maps and translation are more urgent for most
                  short visits.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Papago
                </h2>

                <p>
                  Papago is the translation app many travelers use in Korea —
                  menus, signs, kiosks, product labels, and short phrases. Image
                  translation helps when there is no English, but food names,
                  slang, and handwritten menus still trip it up. Use it as a
                  helper alongside pointing at photos and watching what locals
                  order.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kakao T
                </h2>

                <p>
                  Kakao T helps when you have luggage, rain, or too many subway
                  transfers — but use the subway as your base and taxis when they
                  actually reduce stress. Rush hour and rain can make a taxi crawl;
                  sign-up, payment, and foreign card support also vary. A clear
                  road feels comfortable; a jammed one does not.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Subway route apps
                </h2>

                <p>
                  Naver Map or KakaoMap handle most subway routes; a dedicated
                  subway app can help if the map feels overwhelming at first.
                  Check your route before you enter a crowded station — standing
                  mid-platform during rush hour while figuring out transfers is
                  no fun.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Baemin (Baedal Minjok)
                </h2>

                <p>
                  Baemin is the big local delivery app, but address entry, payment,
                  sign-up, and building confusion can block visitors. Good to know
                  it exists — for most first-timers, restaurants, food courts,
                  convenience stores, and takeout are simpler day-one options.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  CatchTable
                </h2>

                <p>
                  CatchTable helps with reservations and waitlists at some
                  popular restaurants, which matters if you have specific places
                  in mind. Not every good meal needs a booking — plenty of the
                  best travel food is a simple spot you find on your route.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Yanolja / NOL and Yeogi Eottae
                </h2>

                <p>
                  Yanolja (also seen as NOL) and Yeogi Eottae are the local apps
                  Koreans use for hotels, motels, pensions, and domestic travel
                  deals. Useful names to recognize, but language, payment, and
                  cancellation rules can be harder for visitors — global booking
                  platforms may still feel easier for most tourists.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Weather app
                </h2>

                <p>
                  Summer humidity, winter cold, and sudden rain can reshape your
                  day — check the forecast before leaving and keep a small umbrella
                  or layer handy.
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

                <p>
                  Start with maps, translation, and transport — add Baemin,
                  CatchTable, or booking apps only if they match your style. Too
                  many unfamiliar apps at once can make the trip harder, not
                  easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Offline backup
                </h2>

                <p>
                  Save your hotel name and address in Korean, screenshot your
                  airport route and first-day neighborhood, and carry a battery
                  pack if you map all day — apps help until your phone dies or
                  loses signal at the worst moment.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Korean apps are tools, not a ranking list to complete — the
                  right subway exit, a translated menu line, a taxi when you really
                  need one. Use what works, and stay calm when one app does not
                  cooperate on the first try.
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
