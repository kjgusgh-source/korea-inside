import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-cafe-culture-guide-first-time`;

const pageTitle =
  "Korean Cafe Culture Guide for First-Time Visitors: Wi-Fi, Desserts, Study Cafes, and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to Korean cafe culture for first-time visitors, including ordering, Wi-Fi, receipts, outlets, desserts, study cafes, photo spots, one-drink rules, and local etiquette.";

const quickAnswer = [
  "Most useful cafe type: large franchise cafe for resting, Wi-Fi, and easier seating",
  "Best local-feeling choice: small neighborhood cafe, if you do not need to stay long",
  "Common rule: one drink per person is often expected",
  "Wi-Fi tip: check the wall, counter, table sign, or receipt",
  "Toilet tip: some cafes use a passcode, sometimes printed on the receipt",
  "Work/study tip: large cafes are usually safer than tiny photo cafes",
  "Main warning: pretty cafes can be crowded and not always the best value",
  "Local tip: order first, take the buzzer, sit down, and return the tray if the cafe is self-service",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
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
    title: "What to eat at a Korean convenience store",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, 24-hour culture, and how locals follow new items.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Myeongdong street food guide for first-time visitors",
    description:
      "A practical first-time guide to Myeongdong street food, with egg bread, tteokbokki, eomuk, hotteok, chicken bites, skewers, tourist prices, and cash tips.",
    href: "/food/myeongdong-street-food-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "A practical guide to Korean apps travelers may actually use, from Naver Map, KakaoMap, Papago, Kakao T, and subway apps to Baemin, CatchTable, Yanolja, and Yeogi Eottae.",
    href: "/travel/korea-travel-apps-first-time",
  },
  {
    label: "Travel guide",
    title: "Korea SIM, eSIM, and Wi-Fi guide",
    description:
      "A practical first-time Korea internet guide comparing SIM cards, eSIMs, pocket Wi-Fi, roaming, cafe Wi-Fi, public Wi-Fi, phone numbers, and power bank tips.",
    href: "/travel/korea-sim-esim-wifi-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "What to buy in Korea for the first time",
    description:
      "A practical first-time Korea shopping guide with skincare, snacks, stationery, fashion, traditional souvenirs, convenience store finds, and honest local tips.",
    href: "/travel/what-to-buy-in-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Korea etiquette tips for tourists",
    description:
      "A practical first-time Korea etiquette guide with subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-cafe-culture-guide-first-time",
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

export default function KoreanCafeCultureGuideFirstTimePage() {
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
          name: "Korean cafe culture",
        },
        {
          "@type": "Thing",
          name: "Seoul cafes",
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
          name: "Food",
          item: `${siteUrl}/food`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Korean cafe culture guide",
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
              href="/food"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Food
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Food guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Korean cafes are not only about coffee. They are part of how
              people move through the day — resting, waiting, using Wi-Fi,
              eating dessert, taking photos, or escaping the weather. That makes
              them useful for first-time visitors. But Korean cafe culture is
              not as simple as finding a pretty cafe and staying all afternoon.
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
                  You go to a cafe when you are tired from walking.
                </p>

                <p>When it is raining.</p>

                <p>When it is too hot.</p>

                <p>When you are waiting for a friend.</p>

                <p>When you need Wi-Fi.</p>

                <p>When you want dessert.</p>

                <p>When you want a quiet seat.</p>

                <p>When you want photos.</p>

                <p>When you just need a clean place to sit for a while.</p>

                <p>
                  Some cafes are made for resting.
                </p>

                <p>Some are made for photos.</p>

                <p>Some are made for dessert.</p>

                <p>Some are better for studying.</p>

                <p>Some are too small to stay long.</p>

                <p>
                  Some look beautiful but feel crowded and expensive once you
                  sit down.
                </p>

                <p>So it helps to know what kind of cafe you are entering.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Large franchise cafes
                </h2>

                <p>
                  Large franchise cafes are usually the easiest choice when you
                  are tired.
                </p>

                <p>They are not always special, but they are practical.</p>

                <p>
                  You can usually sit more comfortably, use Wi-Fi, charge your
                  phone if there is an outlet nearby, and take a break without
                  feeling too much pressure.
                </p>

                <p>
                  If you are using maps all day, translating menus, checking
                  routes, and taking photos, a large cafe can become a very
                  useful travel stop.
                </p>

                <p>It may not be the cutest cafe of the trip.</p>

                <p>
                  But sometimes the best cafe is the one where you can actually
                  rest.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Small independent cafes
                </h2>

                <p>Small independent cafes feel more personal.</p>

                <p>They can be prettier, quieter, and more memorable.</p>

                <p>Some have handmade desserts.</p>

                <p>Some have a very specific mood.</p>

                <p>Some are hidden on the second or third floor.</p>

                <p>Some are inside old buildings or small alleys.</p>

                <p>
                  These cafes can be great, but they are not always good for
                  long stays.
                </p>

                <p>Seats may be limited.</p>

                <p>Tables may be close together.</p>

                <p>The owner may be handling everything alone.</p>

                <p>
                  If the cafe is full and people are waiting, sitting for hours
                  with one drink can feel uncomfortable.
                </p>

                <p>That does not mean you have to rush.</p>

                <p>Just read the room.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Photo cafes
                </h2>

                <p>Photo cafes are common in Korea.</p>

                <p>
                  Some cafes are famous because of the interior, not because of
                  the coffee.
                </p>

                <p>That is not always a bad thing.</p>

                <p>Travel is allowed to be fun.</p>

                <p>
                  If you want a pretty drink, a dessert plate, and a few
                  photos, that is part of the experience.
                </p>

                <p>But be honest with yourself.</p>

                <p>
                  A cafe can be beautiful and still not be the best value.
                </p>

                <p>A dessert can look better than it tastes.</p>

                <p>
                  A place can be famous online and still feel crowded in real
                  life.
                </p>

                <p>
                  Do not force a long trip across Seoul for one cafe unless you
                  actually enjoy that kind of plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Dessert cafes and spending
                </h2>

                <p>Dessert cafes are a big part of Korean cafe culture.</p>

                <p>
                  You may see cakes, croffles, waffles, bingsu, macarons, salt
                  bread, cream-filled pastries, seasonal fruit desserts, and many
                  drinks that feel closer to dessert than coffee.
                </p>

                <p>This is fun, but it can add up quickly.</p>

                <p>
                  If you visit two or three cafes in one day and order dessert
                  each time, the cafe budget can become bigger than expected.
                </p>

                <p>That is not a warning to avoid cafes.</p>

                <p>It is just something to notice.</p>

                <p>
                  Cafes are one of the easiest places to accidentally spend
                  money in Korea.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How ordering works
                </h2>

                <p>Ordering is usually simple.</p>

                <p>
                  In many cafes, you order at the counter or use a kiosk.
                </p>

                <p>You pay first.</p>

                <p>
                  Then you receive a buzzer, a receipt, or an order number.
                </p>

                <p>
                  When your drink is ready, the buzzer rings or the staff calls
                  your order.
                </p>

                <p>
                  After you finish, some cafes expect you to return the tray to
                  a return area.
                </p>

                <p>Others clear the table for you.</p>

                <p>If you are not sure, look at what other customers do.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Wi-Fi, receipts, and toilets
                </h2>

                <p>Wi-Fi is common.</p>

                <p>
                  In many Korean cafes, the Wi-Fi name and password are written
                  somewhere inside.
                </p>

                <p>Check the wall.</p>

                <p>Check near the counter.</p>

                <p>Check the table sign.</p>

                <p>Check the receipt.</p>

                <p>
                  Sometimes the password is printed at the bottom of the
                  receipt, so do not throw it away too quickly.
                </p>

                <p>If you cannot find it, asking staff is normal.</p>

                <p>Toilets can also work differently.</p>

                <p>Some cafes have a toilet inside.</p>

                <p>Some share a toilet in the building.</p>

                <p>Some require a passcode.</p>

                <p>
                  That passcode may be written on the receipt, near the
                  counter, or on a small sign.
                </p>

                <p>
                  This is one of those small details that surprises visitors.
                </p>

                <p>
                  So if you think you may need the toilet, keep your receipt
                  for a while.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Outlets and charging
                </h2>

                <p>Outlets are useful but not guaranteed.</p>

                <p>Some large cafes have many outlets.</p>

                <p>Some small cafes have almost none.</p>

                <p>Some seats near the wall are good for charging.</p>

                <p>
                  Some cafes may not want every customer using laptops for
                  hours.
                </p>

                <p>
                  If you really need to charge your phone, do not assume every
                  pretty cafe will work.
                </p>

                <p>
                  Large cafes, study-friendly cafes, or franchise cafes are
                  usually safer choices.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  One drink per person
                </h2>

                <p>One drink per person is common.</p>

                <p>
                  Not every cafe will say it loudly, but many cafes expect each
                  person to order something.
                </p>

                <p>
                  This matters especially in small cafes or popular dessert
                  cafes.
                </p>

                <p>
                  If two people take a table and order one drink, it may feel
                  awkward.
                </p>

                <p>The safe habit is simple:</p>

                <p>one person, one drink.</p>

                <p>If you are sharing dessert too, that is even better.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Working or studying in cafes
                </h2>

                <p>Working or studying in cafes depends on the cafe.</p>

                <p>
                  In Korea, many people do study or work in cafes.
                </p>

                <p>
                  You will see laptops, books, tablets, and people staying for
                  a long time.
                </p>

                <p>But that does not mean every cafe is a study cafe.</p>

                <p>A large quiet cafe may be fine.</p>

                <p>
                  A small photogenic cafe with six tables may not be the best
                  place to open a laptop for three hours.
                </p>

                <p>If you need to work, choose the cafe for that purpose.</p>

                <p>
                  Do not choose the prettiest place and then expect it to act
                  like an office.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Noise and location
                </h2>

                <p>Noise level depends on the area.</p>

                <p>
                  A cafe in Hongdae, Myeongdong, Seongsu, or near a tourist
                  street can be loud and busy.
                </p>

                <p>A neighborhood cafe may be calm.</p>

                <p>
                  A large franchise cafe near an office area can feel full of
                  workers and students.
                </p>

                <p>A dessert cafe may be full of people taking photos.</p>

                <p>Korean cafes are not all quiet.</p>

                <p>Choose based on what you need that day.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes as weather shelters
                </h2>

                <p>
                  For first-time visitors, cafes are also good weather shelters.
                </p>

                <p>In summer, they save you from heat and humidity.</p>

                <p>In winter, they give you a warm place to sit.</p>

                <p>
                  On rainy days, they help you slow down instead of forcing
                  another outdoor plan.
                </p>

                <p>
                  This is why I think cafes should be part of a Korea
                  itinerary, not just an extra.
                </p>

                <p>A cafe break can make the whole day better.</p>

                <p>But do not plan only around viral cafes.</p>

                <p>
                  A simple cafe near your route is often more useful than a
                  famous cafe across the city.
                </p>

                <p>If the cafe is already near your plan, great.</p>

                <p>If it takes 40 minutes each way, think twice.</p>

                <p>
                  Seoul is big, and cafe-hopping can eat your day faster than
                  you expect.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best way to use Korean cafes is
                  simple.
                </p>

                <p>
                  Use large cafes when you need rest, Wi-Fi, a toilet, or
                  charging.
                </p>

                <p>
                  Use small cafes when you want mood and do not need to stay
                  too long.
                </p>

                <p>
                  Use dessert cafes when you actually want dessert, not just
                  because you saw them online.
                </p>

                <p>Check the receipt for Wi-Fi or toilet codes.</p>

                <p>Order one drink per person.</p>

                <p>
                  Do not take up a tiny table forever if people are waiting.
                </p>

                <p>
                  And remember that the best cafe on a trip is not always the
                  most famous one.
                </p>

                <p>
                  Sometimes it is the cafe that gives your feet a break, your
                  phone a little battery, and your day enough energy to keep
                  going.
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
                  Related food guides
                </h2>
              </div>

              <Link
                href="/food"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Food →
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
