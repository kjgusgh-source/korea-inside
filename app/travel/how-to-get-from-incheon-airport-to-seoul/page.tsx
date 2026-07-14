import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-get-from-incheon-airport-to-seoul`;

const pageTitle = "How to Get from Incheon Airport to Seoul: A First-Time Visitor Guide";
const pageDescription =
  "A friendly HAEMIL guide to getting from Incheon Airport to Seoul by AREX train, airport bus, taxi, or taxi app, with local tips for luggage, late-night arrivals, and avoiding unofficial taxi offers.";

const quickFacts = [
  "Best budget choice: AREX all-stop train",
  "Fastest to Seoul Station: AREX Express Train",
  "Easiest with luggage: Airport limousine bus if your hotel is near a stop",
  "Best late at night: Official airport taxi stand or a trusted taxi app",
  "Taxi app: Kakao T is Korea’s common taxi-hailing app; Uber Taxi may also be available",
  "Taxi caution: Avoid random taxi or van offers inside the terminal. Use official stands or trusted apps",
  "Local tip: Seoul Station is not always your final answer. Check where your hotel actually is",
  "Useful apps: Naver Map or KakaoMap for route checks before leaving the airport",
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
    title: "T-money card travel guide",
    description:
      "A local-friendly guide to buying, recharging, tapping, transferring, and avoiding common T-money mistakes on Korean subways and buses.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "Naver Map and KakaoMap guide",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
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
    canonical: "/travel/how-to-get-from-incheon-airport-to-seoul",
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

export default function HowToGetFromIncheonAirportToSeoulPage() {
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
          name: "Incheon Airport",
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
          name: "How to get from Incheon Airport to Seoul",
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
              How to Get from Incheon Airport to Seoul: A First-Time Visitor
              Guide
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Landing at Incheon Airport is exciting — and then practical fast.
              You have luggage, you may be tired, and you need to reach Seoul
              without turning the first hour into stress. The airport is well
              connected; the right choice depends on your hotel, luggage, arrival
              time, and energy more than any single &quot;best&quot; option.
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
                AREX, the Airport Railroad, connects Incheon Airport with Seoul
                and is usually the cleanest, most predictable option because it
                avoids road traffic. If your destination is Seoul Station, Hongdae,
                Gongdeok, Digital Media City, or somewhere easy to reach by subway
                transfer, the train is often the smartest first choice.
              </p>

              <p>
                There are two main types. The AREX Express Train runs non-stop
                between Incheon Airport and Seoul Station — simple and comfortable
                if Seoul Station works for your hotel or next transfer. Official
                travel guidance lists the Express Train at about 43 minutes from
                Terminal 1 to Seoul Station and about 51 minutes from Terminal 2.
                The all-stop train is cheaper and stops at several stations along
                the way; it takes longer, but it can be more useful than visitors
                expect. If you are going to Hongdae, Gongdeok, Digital Media City,
                Gimpo Airport, or another area on the Airport Railroad line, the
                all-stop train may save you from riding all the way to Seoul
                Station and coming back again.
              </p>

              <p>
                Seoul Station is famous, but it is not always the best destination.
                Check your hotel location first. If you are staying in Myeongdong,
                Euljiro, Dongdaemun, Gangnam, Hongdae, or Itaewon, the best route
                may be different. Open Naver Map or KakaoMap before leaving the
                airport and search your hotel name or Korean address — the app will
                usually tell you whether train, bus, or taxi makes more sense.
              </p>

              <p>
                The airport limousine bus is another good option. It is not always
                the fastest, because traffic can change everything, but it can be
                much easier with luggage: put your bag under the bus, sit down, and
                get off near your hotel area. If your hotel is close to a limousine
                bus stop, that can feel much softer than carrying a suitcase through
                subway transfers — especially after a long flight, when you want
                fewer stairs, fewer transfers, and less thinking. The downside is
                traffic; a bus that feels fine in the middle of the day can crawl
                during rush hour. Seoul guidance often describes airport limousine
                bus rides as around 60 to 80 minutes depending on route, area, and
                traffic — treat that as a guide, not a promise.
              </p>

              <p>
                If you are arriving late at night, check carefully. Public
                transportation does not run the same way all night; some airport
                buses and trains stop before very late arrivals. Night buses may
                exist on some routes, but they are not always the easiest first
                choice if you are tired, carrying luggage, or staying far from the
                stop — which is when taxis become more tempting.
              </p>

              <p>
                A taxi from Incheon Airport can be the easiest option if you arrive
                late, travel with family, carry heavy luggage, or stay somewhere
                awkward to reach by train — no transfers, no suitcase through a big
                station. But taxis cost more: tolls, late-night surcharges, traffic,
                and taxi type all affect the final price. Deluxe or jumbo taxis cost
                more than regular taxis; international taxis may offer language
                support but can also cost more or require reservation. Use an
                official taxi stand or a trusted taxi app, and do not follow random
                people inside the terminal offering a taxi or van. Most rides are
                normal, but airports everywhere attract people who know visitors are
                tired — Incheon Airport itself warns about illegal solicitation and
                overcharging by call vans pretending to be taxis, and advises using
                designated stands. If someone approaches too aggressively inside the
                terminal, smile, say no, and go to the official taxi area; ask
                airport staff if you feel unsure.
              </p>

              <p>
                Kakao T is Korea&apos;s common taxi-hailing app — similar in role to
                Grab or Uber elsewhere, though setup can feel different. You can set
                your destination before the ride, reduce language stress, and keep a
                record of the trip so the driver sees where you want to go without
                you pronouncing a hotel name perfectly in Korean. Depending on your
                phone, payment method, and account, Kakao T may not feel as smooth as
                apps at home; some travelers register a card, others pay the driver,
                and some try Uber Taxi in areas where it is available. Install and
                check your taxi app before you actually need it at midnight — open it
                after landing, enter your hotel, and compare the route. If the app
                feels confusing, use the official taxi stand instead.
              </p>

              <p>
                A simple decision guide for many first-time visitors: take the AREX
                all-stop train for the cheapest simple route; take the AREX Express
                Train for the fastest rail link to Seoul Station; take the airport
                limousine bus if your hotel is near a stop and you have luggage; use
                an official taxi stand or trusted taxi app if you arrive very late,
                have heavy luggage, or travel as a group; avoid anyone offering a
                taxi inside the terminal.
              </p>

              <p>
                Know your first move before you land — save your hotel name and
                address in Korean, save it in Naver Map or KakaoMap, take a
                screenshot, and check whether your hotel is closer to Seoul Station,
                Hongdae, Myeongdong, Gangnam, or another area. Do not choose Seoul
                Station just because everyone mentions it; Seoul is large. If you
                are staying in Hongdae, the all-stop train may be more direct. If you
                are in Myeongdong, you may need a subway transfer or taxi after Seoul
                Station. If you are in Gangnam, an airport bus might feel easier than
                crossing the city with luggage. Pick the route that gets you close
                to your bed with the least stress — train if your hotel is easy to
                reach by rail, bus if your luggage is heavy and the stop is close,
                taxi if it is late or you are exhausted.
              </p>

              <p>
                Your first ride into Seoul does not have to be perfect — it just
                needs to be calm. Once you are in the city, checked in, and your
                suitcase is down, the rest of the trip usually feels much easier.
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
