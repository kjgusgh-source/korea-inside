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
              Landing at Incheon Airport feels exciting.
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
              <p>And then, very quickly, it becomes practical.</p>

              <p>You have luggage.</p>

              <p>You may be tired.</p>

              <p>Your phone battery may already be lower than you want.</p>

              <p>
                And now you need to get from the airport to Seoul without making
                the first hour of your trip stressful.
              </p>

              <p>
                The good news is that Incheon Airport is well connected. You
                have several real choices: AREX train, airport limousine bus,
                taxi, taxi app, and sometimes a late-night bus or private
                transfer.
              </p>

              <p>
                The best choice depends less on what is &quot;best&quot; in
                general, and more on where your hotel is, how much luggage you
                have, what time you arrive, and how tired you are.
              </p>

              <p>Start with the train.</p>

              <p>
                AREX, the Airport Railroad, connects Incheon Airport with Seoul.
                It is usually the cleanest and most predictable option because
                it avoids road traffic. If your destination is Seoul Station,
                Hongdae, Gongdeok, Digital Media City, or somewhere easy to
                reach by subway transfer, the train can be the smartest first
                choice.
              </p>

              <p>There are two main types.</p>

              <p>
                The AREX Express Train runs non-stop between Incheon Airport and
                Seoul Station. It is simple, comfortable, and good if Seoul
                Station is useful for your hotel or your next transfer. As a
                current reference, official travel guidance lists the Express
                Train at about 43 minutes from Terminal 1 to Seoul Station and
                about 51 minutes from Terminal 2.
              </p>

              <p>
                The all-stop train is cheaper and stops at several stations
                along the way. It takes longer, but it can be more useful than
                visitors expect. If you are going to Hongdae, Gongdeok, Digital
                Media City, Gimpo Airport, or another area connected to the
                Airport Railroad line, the all-stop train may save you from
                going all the way to Seoul Station and coming back again.
              </p>

              <p>That is an important local point.</p>

              <p>
                Seoul Station is famous, but it is not always the best
                destination.
              </p>

              <p>Check your hotel location first.</p>

              <p>
                If your hotel is in Myeongdong, Euljiro, Dongdaemun, Gangnam,
                Hongdae, or Itaewon, the best route may be different. Open Naver
                Map or KakaoMap before leaving the airport and search your hotel
                name or Korean address. The app will usually tell you whether
                train, bus, or taxi makes more sense.
              </p>

              <p>The airport limousine bus is another good option.</p>

              <p>
                It is not always the fastest, because traffic can change
                everything. But it can be much easier with luggage. You put your
                bag under the bus, sit down, and get off near your hotel area.
                If your hotel is close to a limousine bus stop, this can feel
                much softer than carrying a suitcase through subway transfers.
              </p>

              <p>This is especially true after a long flight.</p>

              <p>
                The bus is good for people who want fewer stairs, fewer
                transfers, and less thinking.
              </p>

              <p>The downside is traffic.</p>

              <p>
                A bus that feels perfect in the middle of the day can feel slow
                during rush hour. As a current reference, Seoul guidance often
                describes airport limousine bus rides as around 60 to 80 minutes
                depending on route, area, and traffic. Treat that as a guide,
                not a promise.
              </p>

              <p>If you are arriving late at night, check carefully.</p>

              <p>
                Public transportation does not run the same way all night. Some
                airport buses and trains stop before very late arrivals. Night
                buses may exist on some routes, but they are not always the
                easiest first choice if you are tired, carrying luggage, or
                staying far from the stop.
              </p>

              <p>This is when taxis become more tempting.</p>

              <p>
                A taxi from Incheon Airport can be the easiest option if you
                are arriving late, traveling with family, carrying heavy
                luggage, or staying somewhere awkward to reach by train. You do
                not need to transfer. You do not need to carry your suitcase
                through a big station. You just go to your destination.
              </p>

              <p>But a taxi is more expensive.</p>

              <p>
                Tolls, late-night surcharges, traffic, and taxi type can affect
                the final cost. Deluxe or jumbo taxis cost more than regular
                taxis. International taxis may offer language support, but they
                can also cost more or require reservation.
              </p>

              <p>So the rule is simple:</p>

              <p>Use an official taxi stand or a trusted taxi app.</p>

              <p>
                Do not follow random people inside the terminal offering a taxi
                or van.
              </p>

              <p>
                This is not to scare you. Most taxi rides are normal. But
                airports everywhere attract people who know visitors are tired
                and confused. Incheon Airport itself warns travelers about
                illegal solicitation and overcharging by call vans pretending
                to be taxis, and advises people to use designated taxi stands.
              </p>

              <p>That advice is worth following.</p>

              <p>
                If someone approaches you inside the terminal and says
                &quot;taxi?&quot; too aggressively, you do not need to argue.
                Just smile, say no, and go to the official taxi area. If you
                feel unsure, ask airport staff.
              </p>

              <p>Kakao T is also worth knowing.</p>

              <p>
                Kakao T is Korea&apos;s common taxi-hailing app. If you are used
                to apps like Grab or Uber in other countries, Kakao T plays a
                similar role in Korea, though the details can feel different. You
                can set your destination before the ride, reduce language
                stress, and keep a record of the trip.
              </p>

              <p>That record is useful.</p>

              <p>
                It helps because the driver can see where you want to go. You
                do not have to pronounce a hotel name perfectly in Korean. You
                also have the route and ride information inside the app.
              </p>

              <p>For visitors, the only tricky part is setup.</p>

              <p>
                Depending on your phone, payment method, and account situation,
                Kakao T may not feel as smooth as apps you use at home. Some
                travelers may use card registration. Some may choose to pay the
                driver. Some may also try Uber Taxi, which is available in Korea
                in some areas. The safest advice is to install and check your
                taxi app before you actually need it at midnight.
              </p>

              <p>
                Do not wait until you are standing outside the airport tired.
              </p>

              <p>
                If you plan to use a taxi app, open it after landing, enter
                your hotel, and compare the route. If the app feels confusing,
                use the official taxi stand instead.
              </p>

              <p>For many first-time visitors, this is the easiest decision guide:</p>

              <p>
                If you want the cheapest simple route, take the AREX all-stop
                train.
              </p>

              <p>
                If you want the fastest train to Seoul Station, take the AREX
                Express Train.
              </p>

              <p>
                If your hotel is near an airport bus stop and you have luggage,
                take the airport limousine bus.
              </p>

              <p>
                If you arrive very late, have heavy luggage, or travel as a
                group, use an official taxi stand or a trusted taxi app.
              </p>

              <p>
                If someone offers you a taxi inside the terminal, avoid it.
              </p>

              <p>That is enough.</p>

              <p>
                You do not need to over-plan every detail, but you should know
                your first move before you land. Save your hotel name and
                address in Korean. Save it in Naver Map or KakaoMap. Take a
                screenshot. Check whether your hotel is closer to Seoul
                Station, Hongdae, Myeongdong, Gangnam, or another area.
              </p>

              <p>This small preparation makes the airport feel easier.</p>

              <p>
                One more local tip: do not choose Seoul Station just because
                everyone mentions it.
              </p>

              <p>
                Seoul Station is useful, but Seoul is large. If you are staying
                in Hongdae, the all-stop train may be more direct. If you are
                staying in Myeongdong, you may need a subway transfer or taxi
                after Seoul Station. If you are staying in Gangnam, an airport
                bus might feel easier than crossing the city with luggage.
              </p>

              <p>
                The best route is the route that gets you close to your bed
                with the least stress.
              </p>

              <p>
                For HAEMIL readers, my honest local-friend advice is this:
              </p>

              <p>Take the train if your hotel is easy to reach by rail.</p>

              <p>
                Take the bus if your luggage is heavy and the stop is close.
              </p>

              <p>
                Take a taxi if it is late, you are exhausted, or you are
                traveling with people.
              </p>

              <p>
                Use Kakao T or an official taxi stand if you choose taxi.
              </p>

              <p>Avoid unofficial offers.</p>

              <p>
                And before you leave the arrival hall, check your route once on
                Naver Map or KakaoMap.
              </p>

              <p>Your first ride into Seoul does not have to be perfect.</p>

              <p>It just has to be calm.</p>

              <p>
                Once you are in the city, have checked in, and put your suitcase
                down, Korea will feel much easier.
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
