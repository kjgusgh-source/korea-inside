import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/what-to-do-in-myeongdong-first-time`;

const pageTitle = "What to Do in Myeongdong: A First-Time Visitor Guide";
const pageDescription =
  "A friendly HAEMIL guide to Myeongdong for first-time visitors, from K-beauty shopping and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.";

const quickFacts = [
  "Best for: First-time visitors who want shopping, cosmetics, street food, and an easy central Seoul area",
  "Main station: Myeong-dong Station is the easiest start for many visitors, but Euljiro 1-ga can also be useful depending on your route",
  "Good for: K-beauty, skincare, street food, casual restaurants, currency exchange, hotels, and simple first-night exploring",
  "Nearby landmark: Myeongdong Cathedral is a calm landmark close to the busy shopping streets",
  "Nearby add-on: Namsan / N Seoul Tower can be connected from the area if you still have energy",
  "Local tip: Check the exit number before leaving the station. The wrong exit can make the area feel more confusing",
  "Street food tip: Check prices before ordering; Myeongdong street food can be more tourist-priced than local markets",
  "Honest note: Myeongdong is convenient and fun, but it is not the quietest or cheapest version of Seoul",
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
    label: "Travel guide",
    title: "Incheon Airport to Seoul guide",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
  },
  {
    label: "Travel guide",
    title: "Seoul night travel guide",
    description:
      "Han River, Namsan, Euljiro, Cheonggyecheon, late-night streets, convenience-store snacks, and quiet city moods.",
    href: "/travel/night-seoul-han-river-namsan-euljiro",
  },
  {
    label: "Food",
    title: "Open the Food hub",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea and how to order without turning every meal into homework.",
    href: "/food",
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
    canonical: "/travel/what-to-do-in-myeongdong-first-time",
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

export default function WhatToDoInMyeongdongFirstTimePage() {
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
          name: "Myeongdong",
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
          name: "What to do in Myeongdong",
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
              What to Do in Myeongdong: A First-Time Visitor Guide
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Myeongdong is one of the easiest places to start in Seoul.
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
              <p>Not because it is the most hidden.</p>

              <p>Not because it is the most local.</p>

              <p>And not because it is the cheapest.</p>

              <p>
                Myeongdong is easy because it puts many first-time visitor
                needs in one place: subway access, hotels, shopping, K-beauty
                stores, street food, restaurants, money exchange shops, and a few
                simple routes toward other Seoul areas.
              </p>

              <p>That is why many travelers end up here early in their trip.</p>

              <p>You arrive in Korea.</p>

              <p>You check in.</p>

              <p>You are tired, but not ready to sleep.</p>

              <p>
                You want food, a phone charger, skincare, a walk, and maybe one
                place that feels like, &quot;Okay, I am really in Seoul
                now.&quot;
              </p>

              <p>Myeongdong can do that.</p>

              <p>
                The main feeling of Myeongdong is busy and bright. It has
                cosmetic stores, fashion shops, snack stalls, signs, tourists,
                workers, students, hotel guests, and people walking in every
                direction. At night, the area can feel even more active because
                the lights come on and the street food stalls become easier to
                notice.
              </p>

              <p>This is not quiet Seoul.</p>

              <p>It is not the Seoul of small alleys and slow cafés.</p>

              <p>
                It is the Seoul of your first evening, when you still do not
                know the city well and need somewhere simple to walk.
              </p>

              <p>Start with the subway.</p>

              <p>
                Myeong-dong Station is the easiest start for many visitors,
                especially if you are coming by Line 4. Euljiro 1-ga Station can
                also be useful depending on where you are coming from. Before
                you leave the station, check your exit number on Naver Map or
                KakaoMap.
              </p>

              <p>This matters.</p>

              <p>
                In Korea, the wrong subway exit can put you on the wrong side of
                a large road or make you walk in a circle with luggage.
                Myeongdong is not impossible to navigate, but it is busy enough
                that starting from the right exit helps a lot.
              </p>

              <p>
                Once you are outside, do not try to do everything immediately.
              </p>

              <p>Just walk the main shopping streets first.</p>

              <p>Look around.</p>

              <p>See the signs.</p>

              <p>
                Notice the skincare stores, street food carts, cafés, small
                restaurants, and side streets. Myeongdong is better when you
                treat it like a soft first walk, not a checklist you must
                finish.
              </p>

              <p>
                K-beauty shopping is one of the main reasons visitors come here.
              </p>

              <p>
                You can find skincare, sheet masks, makeup, sunscreen, lip
                products, cleansers, and beauty tools. Some stores focus on
                tourists, and some products may be promoted heavily. That does
                not mean you should buy everything right away.
              </p>

              <p>Browse first.</p>

              <p>Compare prices.</p>

              <p>Check whether a tax refund is available.</p>

              <p>
                And if a staff member recommends many items at once, it is okay
                to smile and take your time.
              </p>

              <p>
                Myeongdong is convenient for beauty shopping, but convenience is
                not the same as &quot;always cheapest.&quot; If you enjoy
                shopping, it is a good place to start. If you are trying to save
                money, compare before buying a big bag of products.
              </p>

              <p>
                Street food is another big part of the Myeongdong experience.
              </p>

              <p>
                You may see skewers, fried snacks, grilled seafood, egg bread,
                hotteok-style sweets, fruit cups, cheese-heavy snacks, and many
                foods designed to look fun in photos. It is easy to try one or
                two things while walking.
              </p>

              <p>But here is the honest local-friend advice:</p>

              <p>
                Myeongdong street food is fun, but it can be tourist-priced.
              </p>

              <p>
                That does not mean you should avoid it. It means you should
                enjoy it for what it is: easy, bright, convenient, and good for
                small bites. If you want the cheapest or most local street food
                feeling, a traditional market may be better. If you want a
                simple first-night snack in a famous area, Myeongdong is fine.
              </p>

              <p>Check the price before ordering.</p>

              <p>Order one thing first.</p>

              <p>Share if you are with someone.</p>

              <p>Then decide if you want more.</p>

              <p>
                For a calmer break, walk toward Myeongdong Cathedral.
              </p>

              <p>
                The cathedral sits close to the shopping area, but the mood
                changes when you arrive. The streets feel a little quieter, the
                building feels older, and the space gives you a pause from all
                the signs and shopping noise. You do not need to be religious
                to appreciate it as a landmark.
              </p>

              <p>
                It is one of those places that reminds you Myeongdong is not
                only shops.
              </p>

              <p>There is history here too.</p>

              <p>Myeongdong is also known for money exchange shops.</p>

              <p>
                Many visitors change cash here because the area has many
                exchange places and is easy to reach. Still, do not rush.
                Compare rates before changing a large amount. Use
                official-looking shops, keep your receipt, and avoid making
                money decisions when you are exhausted from a flight.
              </p>

              <p>
                You do not need to turn your first night into a finance
                mission.
              </p>

              <p>Change what you need.</p>

              <p>Then continue your trip.</p>

              <p>
                If you still have energy, Myeongdong can connect nicely with
                Namsan.
              </p>

              <p>
                Many visitors use the area as a starting point toward Namsan
                Cable Car or N Seoul Tower. This can be a good evening plan if
                the weather is nice and your legs are still okay. But do not
                force it after a long flight. Namsan is better when you can
                enjoy the view, not when you are dragging yourself uphill
                half-asleep.
              </p>

              <p>Check the route on Naver Map or KakaoMap.</p>

              <p>
                The walk, cable car area, and timing can feel different
                depending on where you start.
              </p>

              <p>
                Myeongdong is also useful because it is close to other central
                Seoul areas. Euljiro, City Hall, Cheonggyecheon, Namdaemun,
                Namsan, and parts of central shopping Seoul are not far away.
                That makes it a practical base or first-night area even if you
                do not spend your whole trip there.
              </p>

              <p>But it helps to know what Myeongdong is not.</p>

              <p>
                It is not the quiet local neighborhood where you discover a
                secret café with no tourists.
              </p>

              <p>It is not the cheapest food area in Seoul.</p>

              <p>It is not where every Korean spends every weekend.</p>

              <p>It is not the only place to buy skincare.</p>

              <p>And that is okay.</p>

              <p>Myeongdong does not have to be everything.</p>

              <p>It is useful because it is simple.</p>

              <p>
                For first-time visitors, a good Myeongdong plan can look like
                this:
              </p>

              <p>Arrive by subway.</p>

              <p>Follow the right exit.</p>

              <p>Walk the main streets.</p>

              <p>Browse a few beauty shops.</p>

              <p>Try one or two street foods.</p>

              <p>Visit Myeongdong Cathedral for a quieter moment.</p>

              <p>Compare money exchange only if you need cash.</p>

              <p>Then continue to Namsan or go back to your hotel.</p>

              <p>That is enough.</p>

              <p>
                You do not need to squeeze every famous thing into one night.
              </p>

              <p>
                If you are traveling with friends, choose a meeting point.
                Myeongdong can get crowded, especially in the evening or on
                weekends. If someone stops for shopping and someone else walks
                ahead for food, it is easy to lose each other for a few
                minutes.
              </p>

              <p>Keep your bag close.</p>

              <p>Not because you need to be scared.</p>

              <p>
                Just because crowded tourist areas anywhere in the world deserve
                basic attention.
              </p>

              <p>
                For HAEMIL readers, Myeongdong is best understood as a first
                step into Seoul.
              </p>

              <p>It is bright.</p>

              <p>It is busy.</p>

              <p>It is convenient.</p>

              <p>It is sometimes overpriced.</p>

              <p>It is sometimes very fun.</p>

              <p>
                It is not the deepest version of Korea, but it is one of the
                easiest places to begin.
              </p>

              <p>
                And sometimes, on your first night in a new country, easy is
                exactly what you need.
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
