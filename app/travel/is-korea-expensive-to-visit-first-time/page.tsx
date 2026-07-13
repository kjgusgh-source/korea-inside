import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/is-korea-expensive-to-visit-first-time`;

const pageTitle =
  "Is Korea Expensive to Visit? A First-Time Traveler's Honest Cost Guide";
const pageDescription =
  "A practical HAEMIL guide to whether Korea feels expensive for first-time visitors, covering Seoul hotels, tourist areas, food, cafes, transport, taxis, shopping, convenience stores, and budget trade-offs.";

const quickAnswer = [
  "Short answer: Korea can be affordable or expensive depending on travel style.",
  "Most expensive part: accommodation in popular areas and busy seasons.",
  "Easy place to overspend: cafes, shopping, taxis, and tourist-heavy streets.",
  "Good-value choices: subway, gimbap, bunsik, soups, convenience stores, food courts.",
  "Taxi caution: useful sometimes, but traffic can make it slower and less efficient.",
  "Local tip: stay near a useful subway station, not only a famous neighborhood name.",
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
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
    title: "3 days in Seoul itinerary for first-time visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
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
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/is-korea-expensive-to-visit-first-time",
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

export default function IsKoreaExpensiveToVisitFirstTimePage() {
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
          name: "Travel budget",
        },
        {
          "@type": "Thing",
          name: "Seoul travel",
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
          name: "Is Korea expensive to visit?",
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
              If you are visiting Korea for the first time, you may wonder if
              Korea is expensive. The honest answer is: it depends on how you
              travel. Korea can feel very convenient and reasonable — or
              expensive — depending on where you stay, how you move, and how
              often you follow famous spots.
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
                  Korea can feel very convenient and reasonable if you use the
                  subway, eat simple local meals, stay near a practical
                  station, and do not chase every famous cafe or shopping
                  street.
                </p>

                <p>
                  But Korea can also feel expensive if you stay in the most
                  popular areas, take taxis often, visit trendy cafes every
                  day, shop a lot, and eat mostly in tourist-heavy streets.
                </p>

                <p>
                  So the better question is not &ldquo;Is Korea cheap or
                  expensive?&rdquo;
                </p>

                <p>The better question is:</p>

                <p>Where does money disappear on a Korea trip?</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Accommodation
                </h2>

                <p>
                  For many first-time visitors, accommodation is the biggest
                  cost.
                </p>

                <p>
                  Areas like Myeongdong, Hongdae, Gangnam, Insadong, Seoul
                  Station, and Jamsil are popular because they are convenient.
                  They are close to subway lines, shopping, sightseeing,
                  restaurants, or major attractions.
                </p>

                <p>That convenience has value.</p>

                <p>
                  But it also means hotels and stays in the busiest spots can
                  cost more, especially during popular travel seasons or near
                  major stations.
                </p>

                <p>That does not mean you should avoid famous areas.</p>

                <p>
                  For a first trip, staying somewhere convenient can save time
                  and stress.
                </p>

                <p>But it helps to understand the trade-off.</p>

                <p>
                  A cheaper stay far from your route may look good when
                  booking, but it can become tiring if it adds long transfers
                  every day.
                </p>

                <p>
                  A slightly more expensive stay near a useful subway station
                  may feel better in real life.
                </p>

                <p>The local tip is simple:</p>

                <p>Choose by station, not only by neighborhood name.</p>

                <p>
                  A hotel three minutes from a useful station can be better than
                  a famous address with a long uphill walk.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Food
                </h2>

                <p>Food can be affordable, but not every meal is cheap.</p>

                <p>
                  Simple Korean meals can be good value. Gimbap, bunsik,
                  soups, noodles, stews, food courts, convenience store meals,
                  and casual local restaurants can help balance your budget.
                </p>

                <p>But famous tourist areas can feel more expensive.</p>

                <p>
                  Myeongdong, Hongdae, Gangnam, Insadong, Seongsu, and other
                  popular streets are easy and fun, but restaurants and cafes in
                  the busiest spots often charge more because of location,
                  demand, and atmosphere.
                </p>

                <p>That does not make them bad.</p>

                <p>Sometimes you are paying for convenience.</p>

                <p>Sometimes you are paying for a nice space.</p>

                <p>Sometimes you are paying because the place is popular.</p>

                <p>For a first trip, that can be okay.</p>

                <p>
                  Just do not make every meal a famous restaurant.
                </p>

                <p>
                  A simple local meal near your hotel can be just as useful as
                  a viral restaurant across the city.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes and shopping
                </h2>

                <p>Cafes are one of the easiest places to overspend.</p>

                <p>
                  Korea has a strong cafe culture, and cafes can be part of the
                  fun. Some are simple. Some are beautiful. Some are
                  dessert-focused. Some are more about interior design and
                  atmosphere.
                </p>

                <p>
                  In trendy areas, a cafe stop can feel less like a quick drink
                  and more like a small experience.
                </p>

                <p>
                  That is enjoyable, but it can add up quickly if you do it
                  several times a day.
                </p>

                <p>
                  A good balance is to choose one cafe you really want to
                  enjoy, then use simpler cafes or convenience stores for quick
                  drinks.
                </p>

                <p>Shopping can also surprise people.</p>

                <p>
                  Korea is fun for shopping because there are cosmetics shops,
                  fashion streets, lifestyle stores, character goods, snacks,
                  stationery, skincare, and department stores.
                </p>

                <p>
                  But shopping streets are designed to make you keep picking up
                  small things.
                </p>

                <p>
                  A few small purchases can become a large part of your travel
                  budget.
                </p>

                <p>
                  This is especially true in areas like Myeongdong, Hongdae,
                  Gangnam, Seongsu, and major malls.
                </p>

                <p>
                  If you like shopping, set a loose daily limit in your mind.
                </p>

                <p>That helps you enjoy it without regret later.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Transportation
                </h2>

                <p>
                  Transportation is usually one of the easier costs to control.
                </p>

                <p>
                  The subway is the best base for most first-time visitors. It
                  is predictable, connected, and useful for moving between major
                  areas.
                </p>

                <p>
                  A T-money card or transit card makes public transportation
                  easier.
                </p>

                <p>
                  The subway can be crowded, especially during weekday rush
                  hour, but it is usually more predictable than road traffic.
                </p>

                <p>
                  Taxis are useful, but they are not always the budget-friendly
                  choice.
                </p>

                <p>
                  A taxi can be helpful late at night, in bad weather, with
                  heavy luggage, or when the subway route is too complicated.
                </p>

                <p>
                  But during rush hour, rain, events, or heavy traffic, taxis
                  can get stuck and feel slower than the subway.
                </p>

                <p>
                  If you take taxis across the city often, costs can rise
                  quickly.
                </p>

                <p>
                  Think of taxis as a comfort tool, not your main transport
                  plan.
                </p>

                <p>Subway for most movement.</p>

                <p>Taxi when it actually reduces stress.</p>

                <p>That balance works well in Seoul.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Convenience stores and food courts
                </h2>

                <p>
                  Convenience stores are helpful for saving money and energy.
                </p>

                <p>They are not just emergency snack stops.</p>

                <p>
                  You can use them for breakfast, late-night food, drinks,
                  triangle gimbap, cup ramyeon, lunch boxes, desserts, and small
                  travel needs.
                </p>

                <p>
                  Convenience store food is not a replacement for every meal,
                  but it can save your day when you are tired or between plans.
                </p>

                <p>
                  It also helps balance more expensive restaurant or cafe days.
                </p>

                <p>Food courts can be useful too.</p>

                <p>
                  In malls, stations, department stores, and large buildings,
                  food courts can make ordering easier and give you several
                  choices in one place.
                </p>

                <p>
                  They are not always the cheapest option, but they can be
                  convenient, especially when traveling with friends or family
                  who want different foods.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Plan your days wisely
                </p>

                <p>
                  Another budget mistake is crossing the city too much.
                </p>

                <p>
                  Every long transfer costs time, energy, and sometimes extra
                  spending.
                </p>

                <p>
                  If you go from Myeongdong to Jamsil, then to Hongdae, then to
                  Gangnam in one day, the day may look full but feel exhausting.
                </p>

                <p>
                  You may end up taking more taxis, buying more drinks, and
                  eating wherever is easiest because you are tired.
                </p>

                <p>A better plan is to group nearby areas.</p>

                <p>Central Seoul day.</p>

                <p>Old Seoul day.</p>

                <p>Hongdae and northwest Seoul day.</p>

                <p>Gangnam or Jamsil day.</p>

                <p>This saves both energy and money.</p>

                <p>Weather can also affect cost.</p>

                <p>
                  On very hot, cold, or rainy days, you may spend more on
                  taxis, cafes, malls, or indoor activities.
                </p>

                <p>That is normal.</p>

                <p>
                  But it helps to build flexible plans instead of forcing long
                  outdoor routes in bad weather.
                </p>

                <p>
                  If you need a break, a cafe, mall, museum, food court, or
                  convenience store stop can keep the day comfortable.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For first-time visitors, the best budget strategy is not to
                  be cheap all day.
                </p>

                <p>
                  It is to choose where spending actually improves the trip.
                </p>

                <p>A convenient hotel near a station may be worth it.</p>

                <p>A taxi with heavy luggage may be worth it.</p>

                <p>
                  A beautiful cafe you really wanted to visit may be worth it.
                </p>

                <p>Korean BBQ with friends may be worth it.</p>

                <p>
                  But a taxi during traffic, a random expensive cafe just
                  because you are tired, or a hotel far from your itinerary may
                  not be worth it.
                </p>

                <p>That is the difference.</p>

                <p>
                  For HAEMIL readers, Korea is not a place where every good
                  experience has to be expensive.
                </p>

                <p>Some of the best first-trip moments can be simple:</p>

                <p>a warm bowl of soup,</p>

                <p>a gimbap lunch,</p>

                <p>a convenience store snack,</p>

                <p>a subway ride across the city,</p>

                <p>a quiet palace walk,</p>

                <p>a night view,</p>

                <p>a cafe break after too much walking.</p>

                <p>
                  Korea can be affordable if you travel with balance.
                </p>

                <p>
                  It can be expensive if every choice is based on convenience,
                  trend, or famous locations.
                </p>

                <p>So plan your spending around comfort, not pressure.</p>

                <p>Spend where it saves energy.</p>

                <p>Save where the famous option does not really matter.</p>

                <p>
                  That is the easiest way to enjoy Korea without feeling
                  surprised by the cost.
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
