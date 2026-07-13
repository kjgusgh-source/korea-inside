import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/best-time-to-visit-korea-first-time`;

const pageTitle =
  "Best Time to Visit Korea for First-Time Visitors: Seasons, Weather, Crowds, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to the best time to visit Korea for first-time travelers, comparing spring, summer, autumn, and winter by weather, crowds, costs, clothing, and travel style.";

const quickAnswer = [
  "Best overall seasons: Spring and autumn",
  "Best for comfortable walking: Autumn",
  "Best for flowers and bright city mood: Spring",
  "Best for lower-pressure city travel: Winter, if you can handle cold",
  "Most tiring season for walking: Summer",
  "Main crowd warning: Spring flowers and autumn foliage can make popular areas busy",
  "Cost warning: popular seasons and famous areas can cost more",
  "Local tip: choose the season that matches your walking style, not only the prettiest photos",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Is Korea expensive to visit?",
    description:
      "An honest first-time traveler's guide to Korea costs, with Seoul hotels, tourist areas, food, cafes, transport, taxis, shopping, and better-value local tips.",
    href: "/travel/is-korea-expensive-to-visit-first-time",
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
    title: "How to get around Seoul for first-time visitors",
    description:
      "A practical Seoul transport guide for first-time visitors, with subway, taxi, rush hour, airport routes, walking, maps, and local trade-offs.",
    href: "/travel/how-to-get-around-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "What to buy in Korea for the first time",
    description:
      "A practical first-time Korea shopping guide with skincare, snacks, stationery, fashion, traditional souvenirs, convenience store finds, and honest local tips.",
    href: "/travel/what-to-buy-in-korea-first-time",
  },
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/best-time-to-visit-korea-first-time",
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

export default function BestTimeToVisitKoreaFirstTimePage() {
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
          name: "Best time to visit Korea",
        },
        {
          "@type": "Thing",
          name: "Korea weather",
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
          name: "Best time to visit Korea",
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
              If you are visiting Korea for the first time, the best time to go
              is usually spring or autumn. But that does not mean they are
              perfect for everyone. Korea has four clear seasons, and each one
              changes the feeling of the trip. The best season depends on what
              kind of traveler you are.
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
                <p>Spring feels bright and fresh.</p>

                <p>Summer feels hot, humid, and energetic.</p>

                <p>Autumn feels clear, comfortable, and easy to walk in.</p>

                <p>
                  Winter feels cold, dry, and calmer, but also cozy in a
                  different way.
                </p>

                <p>Do you want flowers?</p>

                <p>Comfortable walking?</p>

                <p>Night markets and summer energy?</p>

                <p>Quiet cafes and warm food?</p>

                <p>Lower-pressure sightseeing?</p>

                <p>
                  Or the classic first-time Seoul experience with good weather?
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Autumn
                </h2>

                <p>
                  For many first-time visitors, autumn is the easiest season to
                  enjoy.
                </p>

                <p>
                  The weather is usually more comfortable for walking, the air
                  often feels clearer, and outdoor plans can feel less tiring
                  than summer. Palace walks, shopping streets, parks, cafes,
                  riverside areas, and neighborhoods like Insadong, Hongdae,
                  Myeongdong, and Seongsu can feel easier to explore.
                </p>

                <p>The trade-off is popularity.</p>

                <p>
                  Autumn can be busy because many people want good weather and
                  fall colors. Famous areas, photo spots, hotels, cafes, and
                  day-trip places can feel more crowded, especially during peak
                  travel periods.
                </p>

                <p>Autumn is beautiful, but it is not a secret.</p>

                <p>
                  Choose autumn if you want comfortable walking, outdoor
                  sightseeing, and a balanced first Korea trip.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spring
                </h2>

                <p>Spring is also a favorite for first-time visitors.</p>

                <p>
                  The city feels lighter after winter. Flowers, parks, palace
                  grounds, cafe streets, and walking routes can feel very
                  pretty. Spring is especially popular because many travelers
                  imagine Korea with cherry blossoms, soft weather, and bright
                  streets.
                </p>

                <p>But spring also has trade-offs.</p>

                <p>
                  Flower timing changes every year, and famous blossom spots can
                  become crowded. Weather can also shift more than people
                  expect. Some days feel warm and lovely, while others can feel
                  chilly, dusty, or rainy.
                </p>

                <p>Do not build your whole trip around one flower date.</p>

                <p>Use spring as a mood, not a guarantee.</p>

                <p>
                  Choose spring if you want a bright city feeling, flowers,
                  lighter clothes, and outdoor walks.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Summer
                </h2>

                <p>
                  Summer in Korea can be fun, but it is not the easiest season
                  for everyone.
                </p>

                <p>
                  It can be hot, humid, rainy, and tiring if your itinerary has
                  too much walking. Subway stations, shopping streets, and
                  outdoor attractions can feel heavy when the weather is sticky.
                </p>

                <p>This does not mean summer is bad.</p>

                <p>
                  Summer has its own energy. Nights can feel lively, cafes feel
                  useful, convenience stores become your friend, and indoor
                  plans like malls, museums, food courts, and shopping streets
                  can save the day.
                </p>

                <p>But you need to plan more gently.</p>

                <p>Do not pack every day with outdoor walking.</p>

                <p>
                  Leave room for air-conditioning breaks, cafes, and indoor
                  stops.
                </p>

                <p>
                  Also remember that rain can change transport. Taxis may be
                  harder to catch or slower in traffic, and walking routes can
                  feel less comfortable.
                </p>

                <p>
                  Choose summer if you do not mind heat and humidity, and if you
                  are willing to slow down during the day.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Winter
                </h2>

                <p>
                  Winter is cold, but it can be a good choice for some travelers.
                </p>

                <p>
                  Seoul in winter can feel dry, sharp, and quiet compared with
                  busier seasons. You may spend more time in cafes, restaurants,
                  malls, museums, and warm indoor places. Korean soups, stews,
                  street snacks, hot drinks, and convenience store food can feel
                  especially comforting.
                </p>

                <p>The trade-off is the cold.</p>

                <p>
                  Outdoor sightseeing can be harder if you are not dressed well.
                  Palace walks, night views, and long neighborhood routes may
                  feel tiring. You may need to plan shorter outdoor blocks and
                  more indoor breaks.
                </p>

                <p>
                  Winter can be good if you like a calmer city mood, warm food,
                  cafes, shopping, and fewer outdoor expectations.
                </p>

                <p>
                  Choose winter if you can handle cold weather and prefer a
                  slower trip.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Quick season guide
                </p>

                <p>Choose autumn if you want comfort.</p>

                <p>Choose spring if you want a bright, pretty mood.</p>

                <p>
                  Choose winter if you want a calmer city trip and do not mind
                  cold.
                </p>

                <p>
                  Be careful with summer if you dislike heat, humidity, or rain.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cost and crowds
                </h2>

                <p>Cost can also change by season.</p>

                <p>
                  Popular travel periods can make hotels and flights more
                  expensive, especially in famous areas like Myeongdong,
                  Hongdae, Gangnam, Insadong, Seoul Station, and Jamsil. Spring
                  and autumn can feel more competitive because many visitors
                  want those seasons.
                </p>

                <p>That does not mean you should avoid them.</p>

                <p>It just means you should book with clear expectations.</p>

                <p>
                  If budget matters, look at practical station access instead
                  of only the most famous neighborhood name. Staying one or two
                  subway stops away from the busiest area can sometimes feel
                  like better value.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Match the season to your itinerary
                </h2>

                <p>Your itinerary also matters.</p>

                <p>
                  If your trip is mostly palaces, walking streets,
                  neighborhoods, and outdoor views, spring or autumn will
                  probably feel better.
                </p>

                <p>
                  If your trip is mostly shopping, cafes, food, beauty,
                  museums, malls, and indoor experiences, winter or summer can
                  still work.
                </p>

                <p>
                  If you hate crowds, avoid building your trip around the most
                  famous seasonal photo spots.
                </p>

                <p>
                  If you hate walking in heat, avoid making summer a packed
                  outdoor trip.
                </p>

                <p>
                  If you hate cold, winter may not be worth the calmer mood.
                </p>

                <p>A good local-style way to think is this:</p>

                <p>
                  Do not choose a season only because of photos online.
                </p>

                <p>Choose the season that matches your daily energy.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Walking and comfort
                </h2>

                <p>Korea is a walking-heavy destination.</p>

                <p>
                  You will walk inside subway stations, through markets, up
                  hills, around palaces, across shopping streets, and between
                  cafes and restaurants.
                </p>

                <p>Comfort matters.</p>

                <p>
                  Weather affects how much you enjoy the same place.
                </p>

                <p>
                  Myeongdong in good walking weather feels different from
                  Myeongdong in heavy rain.
                </p>

                <p>
                  A palace in autumn feels different from a palace in freezing
                  wind.
                </p>

                <p>
                  Hongdae at night feels different in summer heat and winter
                  cold.
                </p>

                <p>The place is the same, but your body feels it differently.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best time to visit Korea is not only
                  the prettiest season.
                </p>

                <p>
                  It is the season that lets you enjoy the trip without fighting
                  the weather all day.
                </p>

                <p>
                  Spring and autumn are the safest answers for most first-time
                  visitors.
                </p>

                <p>Autumn is probably the easiest for walking.</p>

                <p>Spring is beautiful if you keep your plans flexible.</p>

                <p>Summer needs slower planning.</p>

                <p>Winter needs warm clothes and more indoor breaks.</p>

                <p>
                  Choose the season that fits your comfort, your budget, and
                  your itinerary.
                </p>

                <p>
                  That is better than chasing the perfect travel photo.
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
