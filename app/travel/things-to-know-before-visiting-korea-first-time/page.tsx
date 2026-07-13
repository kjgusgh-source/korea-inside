import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/things-to-know-before-visiting-korea-first-time`;

const pageTitle =
  "Things to Know Before Visiting Korea for the First Time: Local-Friendly Travel Tips";
const pageDescription =
  "A practical HAEMIL guide to what first-time visitors should know before traveling to Korea, including Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and local tips.";

const quickAnswer = [
  "Best thing to prepare: Naver Map or KakaoMap",
  "Best transport habit: use subway as your base",
  "Biggest Seoul mistake: crossing the city too many times in one day",
  "Rush hour warning: subway and roads can both be crowded",
  "Taxi tip: useful sometimes, but not always faster",
  "Food tip: ordering systems vary by restaurant",
  "Cost tip: famous tourist areas are convenient but often cost more",
  "Local mindset: plan less tightly and leave room for small surprises",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "How to get around Seoul for first-time visitors",
    description:
      "A practical Seoul transport guide for first-time visitors, with subway, taxi, rush hour, airport routes, walking, maps, and local trade-offs.",
    href: "/travel/how-to-get-around-seoul-first-time",
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
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
    title: "Naver Map and KakaoMap travel guide",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
  },
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "Food guide",
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/things-to-know-before-visiting-korea-first-time",
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

export default function ThingsToKnowBeforeVisitingKoreaFirstTimePage() {
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
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "First-time visitors",
        },
        {
          "@type": "Thing",
          name: "Seoul travel tips",
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
          name: "Things to know before visiting Korea",
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
              If it is your first time visiting Korea, the country can feel both
              easy and confusing. Easy because Seoul is connected, convenient,
              fast, and full of things to do. Confusing because the small
              systems may be different from what you expect. This guide is not
              here to scare you — but your trip becomes much smoother when you
              know a few practical things before you arrive.
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
                <p>Maps work differently.</p>

                <p>Restaurants work differently.</p>

                <p>Subway stations can be huge.</p>

                <p>Famous areas can be more expensive.</p>

                <p>Taxis are not always the fastest choice.</p>

                <p>
                  And a day that looks simple on your phone can feel tiring
                  when you are actually walking through the city.
                </p>

                <p>Korea is a very rewarding place to visit.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Prepare Naver Map or KakaoMap
                </h2>

                <p>First, prepare Naver Map or KakaoMap.</p>

                <p>
                  Google Maps can still help with general searching, but in
                  Korea, Naver Map and KakaoMap are usually more useful for
                  local routes, subway exits, buses, walking directions, and
                  place details.
                </p>

                <p>This matters more than people expect.</p>

                <p>
                  In Seoul, choosing the right station exit can save a lot of
                  walking. Exit 2 and Exit 8 may place you on completely
                  different sides of a large road.
                </p>

                <p>
                  If you are visiting for the first time, do not rely only on
                  memory or screenshots.
                </p>

                <p>
                  Use a local map app and follow the exit guidance.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Use the subway as your base
                </h2>

                <p>Second, use the subway as your main transport base.</p>

                <p>
                  Seoul&apos;s subway is usually the most predictable way to
                  move between major areas like Myeongdong, Hongdae, Jongno,
                  Gangnam, Jamsil, Seoul Station, and Dongdaemun.
                </p>

                <p>It can be crowded.</p>

                <p>Transfers can be long.</p>

                <p>Some stations feel like underground cities.</p>

                <p>
                  But the subway helps you avoid traffic, and that matters in
                  Seoul.
                </p>

                <p>Taxis can be useful, but they are not always better.</p>

                <p>
                  A taxi is helpful when you have heavy luggage, when it is
                  late, when the weather is bad, or when the subway route is too
                  complicated.
                </p>

                <p>
                  But during morning and evening rush hour, rain, events, or
                  heavy traffic, a taxi can become slow and stressful.
                </p>

                <p>
                  Sometimes the subway is crowded, but still more predictable.
                </p>

                <p>A good rule is simple:</p>

                <p>Subway for most city movement.</p>

                <p>Taxi when it actually reduces stress.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Rush hour
                </p>

                <p>Rush hour is real.</p>

                <p>
                  During weekday commute times, subway cars, stations, buses,
                  and roads can become very crowded.
                </p>

                <p>
                  If you do not need to move at that exact time, wait a little.
                </p>

                <p>Have coffee.</p>

                <p>Eat breakfast slowly.</p>

                <p>
                  Start sightseeing after the busiest movement passes.
                </p>

                <p>
                  Or stay near your dinner area instead of crossing the city
                  late.
                </p>

                <p>This small choice can make Seoul feel much easier.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Group nearby areas
                </h2>

                <p>
                  Another common mistake is planning too many distant areas in
                  one day.
                </p>

                <p>Seoul is connected, but it is still big.</p>

                <p>
                  Doing a palace in the morning, Gangnam in the afternoon,
                  Hongdae in the evening, and Jamsil at night may look possible
                  on a map, but it can turn your day into transportation.
                </p>

                <p>Group nearby areas instead.</p>

                <p>
                  Myeongdong, Namsan, Euljiro, Jongno, Insadong, and palace
                  areas can work together.
                </p>

                <p>Hongdae, Yeonnam, and Mangwon can work together.</p>

                <p>
                  Gangnam, Sinsa, Apgujeong, COEX, and Jamsil can work
                  together depending on your plan.
                </p>

                <p>This is one of the easiest ways to save energy.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Famous areas and costs
                </h2>

                <p>
                  Famous areas are convenient, but not always cheap.
                </p>

                <p>
                  Myeongdong, Hongdae, Gangnam, Insadong, Jamsil, and popular
                  cafe streets are well-known for a reason. They are easy to
                  reach, full of options, and comfortable for visitors.
                </p>

                <p>
                  But because they are central, tourist-friendly, or
                  commercial, food, cafes, shopping, and hotels in the busiest
                  spots can cost more than quieter local neighborhoods.
                </p>

                <p>That does not mean you should avoid them.</p>

                <p>For a first trip, convenience can be worth it.</p>

                <p>Just understand the trade-off.</p>

                <p>
                  If you want better value, try walking one or two streets away
                  from the main road or staying one or two subway stops away
                  from the most famous station.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Choose by station, not only by name
                </h2>

                <p>
                  Do not choose your hotel only by neighborhood name.
                </p>

                <p>Choose by station.</p>

                <p>
                  A hotel three minutes from a useful subway station can feel
                  better than a more famous address that requires a long uphill
                  walk with luggage.
                </p>

                <p>
                  This is especially important in Seoul because you will walk
                  more than expected.
                </p>

                <p>You walk inside stations.</p>

                <p>You walk from exits.</p>

                <p>
                  You walk through markets, shopping streets, palace grounds,
                  cafe alleys, and river parks.
                </p>

                <p>Comfortable shoes matter.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ordering food
                </h2>

                <p>Ordering food may feel confusing at first.</p>

                <p>Some restaurants use staff ordering.</p>

                <p>Some use kiosks.</p>

                <p>Some use tablets at the table.</p>

                <p>Some ask you to pay first.</p>

                <p>
                  Some let you eat first and pay at the counter later.
                </p>

                <p>Some have self-service water.</p>

                <p>Some have a table bell.</p>

                <p>This is normal.</p>

                <p>Look around before you panic.</p>

                <p>
                  If there is a kiosk, check for an English or language button.
                </p>

                <p>
                  If there is a table bell, you can press it when you need
                  staff.
                </p>

                <p>
                  If water is not brought to you, check for a self-service
                  corner.
                </p>

                <p>
                  If there are side dishes, try a little first and refill only
                  where it seems clearly allowed.
                </p>

                <p>
                  You do not have to understand everything perfectly on your
                  first meal.
                </p>

                <p>
                  Korean restaurants become easier after a few tries.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spice, convenience stores, and cafes
                </h2>

                <p>Spicy food can be stronger than expected.</p>

                <p>
                  Not all Korean food is spicy, but spicy dishes are common.
                  Tteokbokki, spicy stews, spicy noodles, and red-sauce dishes
                  can vary a lot.
                </p>

                <p>
                  If you are sensitive to spice, start with gentler foods like
                  gimbap, kalguksu, seolleongtang, gukbap, dumplings, grilled
                  meat, porridge, or non-spicy noodles.
                </p>

                <p>
                  You can enjoy Korea without eating spicy food every day.
                </p>

                <p>
                  Convenience stores are more useful than you may think.
                </p>

                <p>
                  They are good for quick breakfast, late-night snacks, drinks,
                  triangle gimbap, cup ramyeon, lunch boxes, desserts, and
                  small travel needs.
                </p>

                <p>
                  Convenience store food is not the same as a full restaurant
                  experience, but it can save your day when you are tired,
                  jet-lagged, or between plans.
                </p>

                <p>Cafes are part of the travel experience too.</p>

                <p>
                  Korea has many cafes, from simple chain cafes to beautiful
                  dessert spaces. They are good places to rest, plan your next
                  move, charge your energy, and enjoy the neighborhood mood.
                </p>

                <p>
                  But cafes in famous areas can be expensive, especially when
                  you are paying for atmosphere and location.
                </p>

                <p>It can still be worth it.</p>

                <p>Just do not expect every cafe stop to be cheap.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Weather and flexibility
                </h2>

                <p>Weather changes the trip more than people expect.</p>

                <p>Summer can feel hot and humid.</p>

                <p>Winter can feel cold and dry.</p>

                <p>
                  Spring and autumn are popular because walking is easier, but
                  popular areas can also become crowded.
                </p>

                <p>
                  Rainy days can make taxis harder to catch and roads slower.
                </p>

                <p>
                  Very hot or cold days can make long outdoor plans tiring.
                </p>

                <p>
                  Do not build an itinerary that depends on perfect weather
                  every day.
                </p>

                <p>
                  Have a flexible indoor option, like a cafe, mall, museum,
                  food court, or shopping street.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Not everything is effortless
                </p>

                <p>
                  Korea is convenient, but not every moment is effortless.
                </p>

                <p>That is actually part of real travel.</p>

                <p>You may choose the wrong subway exit.</p>

                <p>You may stand in front of a kiosk too long.</p>

                <p>
                  You may enter a restaurant and realize it is not what you
                  expected.
                </p>

                <p>You may walk more than your app suggested.</p>

                <p>
                  You may find that the famous place is too crowded and choose
                  somewhere nearby instead.
                </p>

                <p>That is okay.</p>

                <p>A good Korea trip does not have to be perfect.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best first Korea trip is built with a
                  little space.
                </p>

                <p>Use local map apps.</p>

                <p>Use the subway as your base.</p>

                <p>Avoid unnecessary city-crossing.</p>

                <p>Be careful during rush hour.</p>

                <p>Use taxis when they truly help.</p>

                <p>Expect famous areas to cost more.</p>

                <p>Learn restaurant systems slowly.</p>

                <p>
                  Leave room for convenience store meals, cafe breaks, and
                  unplanned streets.
                </p>

                <p>
                  Korea is easiest when you do not try to control every minute.
                </p>

                <p>Plan enough to feel safe.</p>

                <p>Leave enough room to enjoy the city.</p>

                <p>That balance is what makes the first trip feel good.</p>
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
