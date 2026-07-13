import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-get-around-seoul-first-time`;

const pageTitle =
  "How to Get Around Seoul for First-Time Visitors: Subway, Taxi, Rush Hour, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to getting around Seoul for first-time visitors, covering subway, buses, taxis, rush hour, airport routes, walking, maps, and honest local travel tips.";

const quickAnswer = [
  "Best all-around transport: Subway",
  "Best app habit: Use Naver Map or KakaoMap",
  "Best card: T-money or a transit card",
  "Best airport route for many visitors: AREX or airport bus depending on destination",
  "Taxi is useful when: late night, luggage, short local rides, bad weather",
  "Taxi can be worse when: rush hour, heavy traffic, crossing the city",
  "Main local tip: plan by subway line and station, not only by neighborhood name",
  "Biggest mistake: crossing Seoul too many times in one day",
];

const relatedGuides = [
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
    title: "Naver Map and KakaoMap travel guide",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
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
    title: "What to do in Myeongdong for the first time",
    description:
      "A local-friendly first guide to Myeongdong, from K-beauty shops and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.",
    href: "/travel/what-to-do-in-myeongdong-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/how-to-get-around-seoul-first-time",
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

export default function HowToGetAroundSeoulFirstTimePage() {
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
          name: "Seoul travel",
        },
        {
          "@type": "Thing",
          name: "Seoul transportation",
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
          name: "How to get around Seoul",
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
              If it is your first time visiting Seoul, the easiest way to move
              around is usually the subway. Not always — but usually. Seoul has
              taxis, buses, airport trains, local trains, walking streets, and
              very busy roads. For most first-time visitors, the subway is the
              most predictable way to travel between major areas.
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
                <p>It is not perfect.</p>

                <p>It can be crowded.</p>

                <p>Transfers can be tiring.</p>

                <p>Some stations are huge.</p>

                <p>Some exits are confusing.</p>

                <p>
                  But the subway helps you avoid one big Seoul problem: traffic.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Traffic and rush hour
                </h2>

                <p>
                  Seoul traffic can be heavy, especially during weekday commute
                  hours. In the morning and evening rush hour, roads can move
                  slowly and subway cars can become very crowded.
                </p>

                <p>This is why a taxi is not always the easy answer.</p>

                <p>
                  A taxi may feel comfortable when you are tired, carrying
                  luggage, or traveling late at night. But during rush hour,
                  rain, events, or busy weekend nights, a taxi can get stuck in
                  traffic and feel slower than the subway.
                </p>

                <p>
                  For a first Seoul trip, think of taxis as useful sometimes,
                  not as your main plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Why the subway is your base
                </h2>

                <p>The subway should usually be your base.</p>

                <p>
                  It connects most places visitors want to go: Myeongdong,
                  Hongdae, Jongno, Gangnam, Jamsil, Seoul Station, Dongdaemun,
                  Itaewon, and many more.
                </p>

                <p>The biggest advantage is predictability.</p>

                <p>
                  If a subway route says you need a transfer, you can usually
                  understand the movement clearly. A taxi route may look simple,
                  but traffic can change the feeling completely.
                </p>

                <p>
                  That is why locals often choose the subway even when a taxi
                  looks more comfortable on the map.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Subway trade-offs
                </p>

                <p>
                  During weekday rush hour, trains can be packed. If you are
                  traveling with big luggage, avoid commute times when possible.
                  If you must travel then, give yourself more time and avoid
                  tight schedules.
                </p>

                <p>
                  Some stations also require long walks between lines. A transfer
                  may look simple in an app but feel longer underground.
                </p>

                <p>
                  For first-time visitors, fewer transfers are often better
                  than the fastest-looking route.
                </p>

                <p>
                  A slightly longer ride with one easy transfer can feel better
                  than a complicated route with stairs, crowds, and long station
                  walks.
                </p>

                <p>
                  This matters especially when choosing where to stay. Do not
                  choose only by neighborhood name. Choose by station.
                </p>

                <p>
                  A hotel three minutes from a useful subway station can feel
                  much better than a hotel in a famous area that requires a long
                  uphill walk.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Buses
                </h2>

                <p>
                  Buses can be useful, but they are less beginner-friendly.
                </p>

                <p>
                  Seoul buses go many places the subway does not. They can be
                  great for locals and repeat visitors. But for first-time
                  visitors, buses can feel harder because you need to know the
                  direction, stop name, and timing more carefully.
                </p>

                <p>Traffic also affects buses.</p>

                <p>During rush hour, buses can be slow too.</p>

                <p>
                  If you are comfortable using Naver Map or KakaoMap, buses
                  become easier. But if this is your first Seoul trip and you are
                  nervous, start with the subway first.
                </p>

                <p>
                  Use buses when the map clearly shows that they save effort.
                </p>

                <p>Do not force them on your first day.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  When taxis help — and when they do not
                </h2>

                <p>Taxis are useful in the right situation.</p>

                <p>
                  Use a taxi when you have heavy luggage, when it is late, when
                  the weather is bad, when the subway route requires too many
                  transfers, or when the distance is short but annoying to walk.
                </p>

                <p>But be careful with taxis during rush hour.</p>

                <p>
                  If you are going from one side of Seoul to another during
                  commute time, a taxi can become expensive, slow, and stressful.
                  The subway may be crowded, but it can still be more
                  predictable.
                </p>

                <p>
                  This is especially true when crossing the Han River or moving
                  between major business and tourist areas at busy times.
                </p>

                <p>A taxi is comfort.</p>

                <p>The subway is predictability.</p>

                <p>That is the simple way to think about it.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Airport travel
                </h2>

                <p>For airport travel, choose based on your destination.</p>

                <p>
                  If you are going to Seoul Station or an area connected easily
                  by rail, the airport train can be simple.
                </p>

                <p>
                  If your hotel is closer to an airport bus stop, the airport
                  limousine bus may be more comfortable because you avoid
                  carrying luggage through subway transfers.
                </p>

                <p>
                  If you arrive late, have a lot of luggage, or travel with
                  family, a taxi can make sense.
                </p>

                <p>But again, traffic matters.</p>

                <p>
                  Airport-to-Seoul by car can feel very different depending on
                  time of day, destination, and road conditions.
                </p>

                <p>Do not assume taxi is always fastest.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Maps, exits, and payment
                </h2>

                <p>For maps, use Naver Map or KakaoMap.</p>

                <p>
                  Google Maps can be helpful for general location checking, but
                  in Korea, Naver Map and KakaoMap are usually more useful for
                  local routes, exits, buses, and walking directions.
                </p>

                <p>For a first trip, install at least one before you arrive.</p>

                <p>When using the subway, pay attention to exits.</p>

                <p>In Seoul, the station exit can matter a lot.</p>

                <p>
                  Exit 1 and Exit 8 may be on very different sides of a huge
                  road.
                </p>

                <p>
                  Choosing the wrong exit can add ten minutes of walking or make
                  you cross busy streets.
                </p>

                <p>Map apps usually tell you which exit to use.</p>

                <p>Follow that.</p>

                <p>For payment, use a T-money card or another transit card.</p>

                <p>
                  It makes subway and bus travel easier because you do not need
                  to buy a ticket every time. It also makes transfers simpler.
                </p>

                <p>
                  If you plan to use public transportation often, prepare your
                  transit card early instead of figuring it out when you are
                  already tired.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Walking and pacing
                </h2>

                <p>Walking is part of Seoul travel.</p>

                <p>Even if you use the subway, you will walk a lot.</p>

                <p>You walk inside stations.</p>

                <p>You walk from exits.</p>

                <p>You walk through alleys.</p>

                <p>
                  You walk around palaces, shopping streets, cafes, riverside
                  parks, and markets.
                </p>

                <p>
                  This is why comfortable shoes matter more than people expect.
                </p>

                <p>
                  Do not plan your itinerary only by travel time in an app.
                </p>

                <p>
                  A route that says 25 minutes may still include stairs, long
                  station walks, waiting time, and crowded streets.
                </p>

                <p>Leave space.</p>

                <p>
                  Seoul is more enjoyable when you are not rushing every hour.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Group nearby areas
                </h2>

                <p>
                  One common mistake is crossing the city too many times in one
                  day.
                </p>

                <p>
                  For example, doing Gyeongbokgung in the morning, Jamsil in the
                  afternoon, Hongdae in the evening, and Gangnam at night may
                  look possible.
                </p>

                <p>
                  But it can make your day feel like transportation, not travel.
                </p>

                <p>Group nearby areas instead.</p>

                <p>
                  Myeongdong, Namsan, Euljiro, Jongno, and Insadong can work
                  together.
                </p>

                <p>Hongdae, Yeonnam, and Mangwon can work together.</p>

                <p>
                  Gangnam, Sinsa, Apgujeong, COEX, or Jamsil can work together
                  depending on your plan.
                </p>

                <p>This is the easiest way to save energy.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Rush hour tip
                </p>

                <p>
                  Rush hour is the main thing first-time visitors underestimate.
                </p>

                <p>
                  Morning and evening commute times can be crowded in stations,
                  trains, buses, and roads. People are going to work, school,
                  appointments, and home. Everyone is moving at once.
                </p>

                <p>If you do not need to travel then, wait a little.</p>

                <p>Have coffee.</p>

                <p>Eat breakfast later.</p>

                <p>
                  Start sightseeing after the worst commute crowd passes.
                </p>

                <p>
                  Or finish dinner slowly instead of trying to move across the
                  city at the busiest time.
                </p>

                <p>This small change can make Seoul feel much easier.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best way to get around Seoul is not
                  to choose one perfect method.
                </p>

                <p>Use the subway as your main base.</p>

                <p>Use taxis when they actually reduce stress.</p>

                <p>Use buses when the route is simple.</p>

                <p>
                  Use airport trains or airport buses depending on your hotel.
                </p>

                <p>Use map apps for exits and transfers.</p>

                <p>And build your day around areas, not random famous spots.</p>

                <p>Seoul is very connected.</p>

                <p>But it is still a big city.</p>

                <p>
                  The smoother your movement is, the more energy you have left
                  for the parts that actually matter:
                </p>

                <p>food,</p>

                <p>streets,</p>

                <p>cafes,</p>

                <p>palaces,</p>

                <p>night views,</p>

                <p>small surprises,</p>

                <p>and the feeling of being in Seoul for the first time.</p>
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
