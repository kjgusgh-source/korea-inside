import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/7-days-in-korea-itinerary-first-time`;

const pageTitle =
  "7 Days in Korea Itinerary for First-Time Visitors: Seoul, Busan, Gyeongju, and Local Tips";
const pageDescription =
  "A practical HAEMIL 7-day Korea itinerary for first-time visitors, with Seoul, Busan, Gyeongju, transport tips, food ideas, realistic travel trade-offs, and local-friendly planning advice.";

const quickAnswer = [
  "Best simple route: Seoul 4 days + Busan 2 days + Gyeongju 1 day",
  "Easier slow route: Seoul 5 days + Busan 2 days",
  "Best for history: Add Gyeongju",
  "Best for less moving: Stay in Seoul and do one day trip",
  "Main caution: Do not change cities too often with luggage",
  "Transport tip: Plan city changes outside rush hour when possible",
  "Food tip: Leave meals flexible instead of chasing famous restaurants every day",
  "Local mindset: A good Korea itinerary should leave energy at night",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "3 days in Seoul itinerary for first-time visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
  },
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
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
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "Best time to visit Korea for first-time visitors",
    description:
      "A practical HAEMIL guide to Korea seasons, weather, crowds, cherry blossoms, summer heat, autumn leaves, winter travel, and realistic first-time planning.",
    href: "/travel/best-time-to-visit-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "What to wear in Korea by season",
    description:
      "A practical HAEMIL guide to Korea clothing by season, with spring, summer, autumn, and winter tips for first-time visitors and realistic packing advice.",
    href: "/travel/what-to-wear-in-korea-by-season",
  },
  {
    label: "Travel guide",
    title: "Is Korea expensive to visit?",
    description:
      "A practical HAEMIL guide to Korea travel costs for first-time visitors, with food, transport, shopping, stays, and honest budget trade-offs.",
    href: "/travel/is-korea-expensive-to-visit-first-time",
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
    canonical: "/travel/7-days-in-korea-itinerary-first-time",
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

export default function SevenDaysInKoreaItineraryFirstTimePage() {
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
          name: "Korea itinerary",
        },
        {
          "@type": "Thing",
          name: "Seoul Busan Gyeongju",
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
          name: "7 days in Korea itinerary",
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
              If it is your first time visiting Korea, seven days is a good
              amount of time. Not enough to see everything. But enough to feel
              more than one side of the country. You can see Seoul&apos;s
              palaces, shopping streets, cafes, food, subway life, and night
              views. You can add Busan for the ocean, markets, hills, and a
              slower coastal feeling. You can add Gyeongju for history, old
              streets, tombs, and a calmer cultural mood.
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
                <p>The important thing is not to move too much.</p>

                <p>
                  Korea is well connected, but changing cities still takes
                  energy.
                </p>

                <p>
                  You have to pack, check out, move with luggage, find the
                  station, take the train, arrive, move again, and settle in.
                </p>

                <p>
                  That can make a trip feel more tiring than it looks on a map.
                </p>

                <p>
                  For most first-time visitors, the best one-week route is
                  simple:
                </p>

                <p>Seoul for four days.</p>

                <p>Busan for two days.</p>

                <p>Gyeongju for one day.</p>

                <p>Or, if you want an easier trip:</p>

                <p>Seoul for five days.</p>

                <p>Busan for two days.</p>

                <p>Both are good.</p>

                <p>The right choice depends on how much movement you enjoy.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 1: Arrive in Seoul and settle in
                </h2>

                <p>Day 1 should be gentle.</p>

                <p>Arrive in Seoul, check in, and do not plan too much.</p>

                <p>
                  After a flight, even simple things can feel tiring: finding
                  the airport route, buying a transit card, checking into your
                  stay, understanding the neighborhood, and getting your first
                  meal.
                </p>

                <p>
                  Choose an easy area like Myeongdong, Euljiro, Jongno, or
                  Hongdae depending on where you stay.
                </p>

                <p>Walk nearby.</p>

                <p>Eat something simple.</p>

                <p>Visit a convenience store.</p>

                <p>Get used to the subway station near your hotel.</p>

                <p>Do not make the first day a full sightseeing race.</p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 1 idea:</strong>{" "}
                    Arrive in Seoul → check in → short walk near your base →
                    simple dinner
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    settling in, understanding your area, recovering from travel
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    you may feel like you are &quot;wasting&quot; a day, but
                    saving energy early makes the rest of the trip better.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 2: Palace, Bukchon, Insadong, Ikseon-dong
                </h2>

                <p>Day 2 can be classic Seoul.</p>

                <p>
                  Start with a palace such as Gyeongbokgung or Changdeokgung.
                </p>

                <p>
                  Then walk toward Bukchon, Insadong, or Ikseon-dong.
                </p>

                <p>
                  This gives you older Seoul: palace walls, hanok-style
                  streets, tea, small alleys, galleries, cafes, and cultural
                  mood.
                </p>

                <p>Do not try to visit every palace.</p>

                <p>
                  One palace plus one or two nearby neighborhoods is enough for
                  most first-time visitors.
                </p>

                <p>
                  This day can involve more walking than expected, so
                  comfortable shoes matter.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 2 idea:</strong>{" "}
                    Palace → Bukchon or Insadong → Ikseon-dong → Jongno dinner
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    history, traditional atmosphere, walking, tea, photos
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    weekends can be crowded, and some hanok-style cafes or
                    souvenir areas can cost more because of the atmosphere.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 3: Myeongdong, Namsan, Euljiro
                </h2>

                <p>Day 3 can be central Seoul and night mood.</p>

                <p>
                  Use Myeongdong, Namsan, Euljiro, Namdaemun, or City Hall
                  depending on your energy.
                </p>

                <p>
                  Myeongdong is touristy, but it is easy.
                </p>

                <p>Namsan gives a good first city view.</p>

                <p>
                  Euljiro gives a more local-cool contrast with older alleys,
                  small restaurants, and bars.
                </p>

                <p>
                  This is a good day to understand that Seoul is not one single
                  mood.
                </p>

                <p>
                  It can be bright and touristy on one street, then older and
                  more hidden a few blocks away.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 3 idea:</strong>{" "}
                    Myeongdong → Namsan → Euljiro
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    shopping, street snacks, city view, central movement
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    Myeongdong can be crowded and tourist-priced, while Euljiro
                    can be harder to read without Naver Map or KakaoMap.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 4: Hongdae, Gangnam, or Seongsu
                </h2>

                <p>Day 4 can be your choice day in Seoul.</p>

                <p>
                  Choose Hongdae if you want young energy, cafes, casual
                  shopping, late-night food, and street mood.
                </p>

                <p>
                  Choose Gangnam if you want modern Seoul, shopping, beauty,
                  restaurants, COEX, Sinsa, or Apgujeong.
                </p>

                <p>
                  Choose Seongsu if you like cafes, design shops, pop-up spaces,
                  and trendy streets.
                </p>

                <p>Do not try to do all three in one day.</p>

                <p>Pick one direction and enjoy it properly.</p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 4 idea:</strong>{" "}
                    Hongdae and Yeonnam, or Gangnam and Sinsa, or Seongsu and
                    nearby cafes
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    choosing the Seoul mood that fits you
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    popular areas can be crowded and can cost more, especially
                    around famous streets, cafes, and shopping zones.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 5: Travel to Busan and easy evening
                </h2>

                <p>Day 5 is a good day to move to Busan.</p>

                <p>
                  Do not plan a heavy sightseeing morning before changing
                  cities.
                </p>

                <p>Travel days always take more energy than expected.</p>

                <p>
                  Check out, get to the station, take the train, arrive in
                  Busan, move to your stay, and settle in.
                </p>

                <p>After that, keep the day simple.</p>

                <p>Walk near your Busan base.</p>

                <p>Eat something local.</p>

                <p>
                  If you still have energy, visit a nearby beach, market, or
                  evening street depending on where you are staying.
                </p>

                <p>Busan feels different from Seoul.</p>

                <p>
                  It is still a big city, but the ocean, hills, bridges,
                  markets, and wider coastal feeling change the mood.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 5 idea:</strong>{" "}
                    Seoul → Busan → check in → easy local walk → dinner
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    city change, coastal mood, slower evening
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    moving with luggage takes energy, so do not overpack this
                    day.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 6: Busan coastal or market day
                </h2>

                <p>Day 6 can be your main Busan day.</p>

                <p>Choose a route that fits your style.</p>

                <p>
                  For a classic first Busan feeling, combine a coastal view,
                  market or food area, and one relaxed neighborhood.
                </p>

                <p>Do not try to cross Busan too many times either.</p>

                <p>
                  Busan is spread out, and travel time can be longer than
                  expected.
                </p>

                <p>
                  If you like ocean views, focus on beach and coastal areas.
                </p>

                <p>
                  If you like markets and food, focus on central market areas.
                </p>

                <p>
                  If you like colorful streets and photos, choose one
                  neighborhood and give it time.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 6 idea:</strong>{" "}
                    coastal walk or beach area → market or local food → relaxed
                    evening
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    ocean, food, different city mood from Seoul
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    Busan distances can feel longer than they look, and some
                    popular areas can be crowded during peak travel times.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Day 7: Gyeongju or slow return to Seoul
                </h2>

                <p>Day 7 has two good options.</p>

                <h3 className="text-xl font-semibold text-[var(--text)]">
                  Option one: Gyeongju
                </h3>

                <p>
                  Gyeongju is good if you want history, slower streets, old
                  capital atmosphere, tomb areas, traditional mood, and a calm
                  contrast after Seoul and Busan.
                </p>

                <p>
                  It is one of the easiest ways to make a one-week Korea trip
                  feel more cultural.
                </p>

                <p>But adding Gyeongju means another move.</p>

                <p>
                  That can be worth it if you enjoy history.
                </p>

                <p>
                  It may be too much if you dislike changing cities.
                </p>

                <h3 className="text-xl font-semibold text-[var(--text)]">
                  Option two: Stay in Busan or return to Seoul slowly
                </h3>

                <p>
                  This is better if you want less stress before departure.
                </p>

                <p>
                  A slower final day can sometimes be better than adding one
                  more famous place.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p>
                    <strong className="text-[var(--text)]">Day 7 idea:</strong>{" "}
                    Gyeongju history day, or slow Busan morning and return to
                    Seoul
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Good for:</strong>{" "}
                    history and variety, or a calmer end to the trip
                  </p>
                  <p>
                    <strong className="text-[var(--text)]">Trade-off:</strong>{" "}
                    Gyeongju adds movement, while skipping it gives less
                    variety but more rest.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Easiest 7-day version
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 1:</strong> Arrive
                  in Seoul and settle in
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 2:</strong> Palace,
                  Bukchon, Insadong, Ikseon-dong
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 3:</strong>{" "}
                  Myeongdong, Namsan, Euljiro
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 4:</strong>{" "}
                  Hongdae, Gangnam, or Seongsu
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 5:</strong> Travel
                  to Busan and easy evening
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 6:</strong> Busan
                  coastal or market day
                </p>

                <p>
                  <strong className="text-[var(--text)]">Day 7:</strong> Gyeongju
                  day or slow return to Seoul
                </p>

                <p>
                  This route gives you a good first mix: old Seoul, modern
                  Seoul, shopping streets, food, cafes, subway life, coastal
                  Korea, and maybe historical Korea.
                </p>

                <p>But it still leaves breathing room.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Common planning mistakes
                </h2>

                <p>
                  One common mistake is trying to add too many cities.
                </p>

                <p>
                  Seoul, Busan, Gyeongju, Jeju, Jeonju, Sokcho, and DMZ-style
                  trips can all sound interesting.
                </p>

                <p>
                  But seven days is not enough to do everything comfortably.
                </p>

                <p>
                  A trip with fewer places often feels better than a trip with
                  many checkmarks.
                </p>

                <p>
                  Another mistake is planning every meal too tightly.
                </p>

                <p>
                  Korea has great food, but famous restaurants can have lines,
                  break times, or confusing ordering systems. If every meal
                  depends on one famous place, the trip can become stressful.
                </p>

                <p>Plan a few food goals.</p>

                <p>Leave the rest flexible.</p>

                <p>
                  Some of the best Korea meals are simple: gimbap, soup, noodles,
                  bunsik, convenience store snacks, fried chicken, barbecue, or
                  a random restaurant near your stay.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Transport and weather
                </h2>

                <p>Transport planning also matters.</p>

                <p>
                  Try not to move across the city during rush hour with
                  luggage.
                </p>

                <p>
                  Morning and evening commute periods can make subways, roads,
                  and stations crowded.
                </p>

                <p>
                  Taxis can be useful, but during traffic they may be slower
                  and more stressful than expected.
                </p>

                <p>
                  For most city movement, use the subway as your base.
                </p>

                <p>
                  Use taxis when they truly reduce stress.
                </p>

                <p>For city changes, keep the day lighter.</p>

                <p>Weather can change this itinerary too.</p>

                <p>
                  In summer, reduce outdoor walking and add indoor breaks.
                </p>

                <p>
                  In winter, plan shorter outdoor blocks and warmer food or cafe
                  stops.
                </p>

                <p>
                  In spring and autumn, walking is easier, but popular areas can
                  be crowded and stays can cost more during busy travel periods.
                </p>

                <p>A good itinerary should adjust to the season.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best 7-day Korea trip is not the one
                  that proves you saw everything.
                </p>

                <p>
                  It is the one that lets you enjoy Korea without being tired
                  every night.
                </p>

                <p>
                  Spend enough time in Seoul to understand the city.
                </p>

                <p>
                  Add Busan if you want ocean and a different rhythm.
                </p>

                <p>Add Gyeongju if history matters to you.</p>

                <p>Skip one place if your body needs rest.</p>

                <p>
                  Korea is better when you leave room for small moments:
                </p>

                <p>a quiet palace path,</p>

                <p>a convenience store snack,</p>

                <p>a subway ride across the river,</p>

                <p>a cafe you did not plan,</p>

                <p>a warm bowl of soup,</p>

                <p>
                  a night street that feels better than the famous attraction.
                </p>

                <p>Use this itinerary as a base, not a rule.</p>

                <p>
                  That is the easiest way to enjoy Korea for the first time.
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
