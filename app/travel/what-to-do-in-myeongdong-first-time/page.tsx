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
              Myeongdong is one of the easiest places to start in Seoul — not the
              most hidden or cheapest, but busy, bright, and full of subway
              access, K-beauty, street food, hotels, and money exchange for a
              first evening walk.
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
                Myeongdong is easy because it puts many first-time visitor needs
                in one place: subway access, hotels, shopping, K-beauty stores,
                street food, restaurants, money exchange shops, and simple routes
                toward other central Seoul areas. That is why many travelers end
                up here early in their trip — you arrive, check in, you are
                tired but not ready to sleep, and you want food, a phone charger,
                skincare, a walk, and maybe one place that feels like, &quot;Okay,
                I am really in Seoul now.&quot; Myeongdong can do that.
              </p>

              <p>
                The main feeling is busy and bright — cosmetic stores, fashion
                shops, snack stalls, signs, tourists, workers, students, hotel
                guests, and people walking in every direction. At night, the area
                can feel even more active as the lights come on and street food
                stalls become easier to notice. This is not quiet Seoul or the
                Seoul of small alleys and slow cafés; it is the Seoul of your
                first evening, when you still do not know the city well and need
                somewhere simple to walk.
              </p>

              <p>
                Myeong-dong Station is the easiest start for many visitors,
                especially on Line 4. Euljiro 1-ga Station can also be useful
                depending on where you are coming from. Before you leave the
                station, check your exit number on Naver Map or KakaoMap — the
                wrong exit can put you on the wrong side of a large road or make
                you walk in a circle with luggage. Myeongdong is not impossible to
                navigate, but starting from the right exit helps a lot.
              </p>

              <p>
                Once outside, walk the main shopping streets first rather than
                trying to do everything immediately. Look around, notice the
                skincare stores, street food carts, cafés, small restaurants, and
                side streets. Myeongdong works better as a soft first walk than a
                checklist you must finish.
              </p>

              <p>
                K-beauty shopping is one of the main reasons visitors come here.
                You can find skincare, sheet masks, makeup, sunscreen, lip
                products, cleansers, and beauty tools. Some stores focus on
                tourists, and some products may be promoted heavily — browse first,
                compare prices, check whether tax refund is available, and if a
                staff member recommends many items at once, it is okay to smile
                and take your time. Myeongdong is convenient for beauty shopping,
                but convenience is not the same as always cheapest; if you enjoy
                shopping, it is a good place to start, and if you are trying to
                save money, compare before buying a big bag of products.
              </p>

              <p>
                Street food is another big part of the experience — skewers, fried
                snacks, grilled seafood, egg bread, hotteok-style sweets, fruit
                cups, cheese-heavy snacks, and many foods designed to look fun in
                photos. It is easy to try one or two things while walking. The
                honest local-friend note: Myeongdong street food is fun, but it
                can be tourist-priced. Enjoy it for what it is — easy, bright,
                convenient, good for small bites. For the cheapest or most local
                street food feeling, a traditional market may be better; for a
                simple first-night snack in a famous area, Myeongdong is fine.
                Check the price before ordering, try one thing first, share if you
                are with someone, then decide if you want more.
              </p>

              <p>
                For a calmer break, walk toward Myeongdong Cathedral. It sits
                close to the shopping area, but the mood changes when you arrive
                — streets feel a little quieter, the building feels older, and the
                space gives you a pause from the signs and shopping noise. You do
                not need to be religious to appreciate it as a landmark; it
                reminds you Myeongdong is not only shops.
              </p>

              <p>
                Myeongdong is also known for money exchange shops. Many visitors
                change cash here because the area has many exchange places and is
                easy to reach. Compare rates before changing a large amount, use
                official-looking shops, keep your receipt, and avoid making money
                decisions when you are exhausted from a flight. Change what you
                need, then continue your trip.
              </p>

              <p>
                If you still have energy, Myeongdong connects nicely with Namsan.
                Many visitors use the area as a starting point toward Namsan Cable
                Car or N Seoul Tower — a good evening plan if the weather is nice
                and your legs are still okay. After a long flight, do not force
                it; Namsan is better when you can enjoy the view, not when you are
                dragging yourself uphill half-asleep. Check the route on Naver Map
                or KakaoMap — the walk, cable car area, and timing can feel
                different depending on where you start.
              </p>

              <p>
                Myeongdong is also close to other central Seoul areas — Euljiro,
                City Hall, Cheonggyecheon, Namdaemun, Namsan, and parts of
                central shopping Seoul are not far away. That makes it a practical
                base or first-night area even if you do not spend your whole trip
                there. It is not the quiet local neighborhood with a secret café,
                not the cheapest food area in Seoul, not where every Korean spends
                every weekend, and not the only place to buy skincare — and that
                is okay. Myeongdong does not have to be everything; it is useful
                because it is simple.
              </p>

              <p>
                A good first-time plan: arrive by subway, follow the right exit,
                walk the main streets, browse a few beauty shops, try one or two
                street foods, visit Myeongdong Cathedral for a quieter moment,
                compare money exchange only if you need cash, then continue to
                Namsan or go back to your hotel. If you are traveling with
                friends, choose a meeting point — Myeongdong can get crowded in
                the evening or on weekends, and it is easy to lose each other for
                a few minutes if someone stops for shopping while someone else
                walks ahead for food. Keep your bag close in crowded tourist areas,
                the same basic attention you would give anywhere.
              </p>

              <p>
                Myeongdong is best understood as a first step into Seoul — bright,
                busy, convenient, sometimes overpriced, sometimes very fun. It is
                not the deepest version of Korea, but it is one of the easiest
                places to begin. On your first night in a new country, easy is
                sometimes exactly what you need.
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
