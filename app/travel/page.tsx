import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { getPostsByCategory } from "../../lib/posts";

const STANDALONE_TRAVEL_GUIDES = [
  {
    id: "things-to-know-before-visiting-korea-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Things to Know Before Visiting Korea for the First Time",
    description:
      "Small systems that surprise first-time visitors — maps, subway rush hour, restaurant ordering, and famous-area prices without a warning-list tone.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
    readingTime: "9 min read",
  },
  {
    id: "korea-etiquette-tips-for-tourists",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Korea Etiquette Tips for Tourists",
    description:
      "Subway manners, restaurant habits, tipping, trash, shoes, and the quiet rules that help you blend in without overthinking every step.",
    href: "/travel/korea-etiquette-tips-for-tourists",
    readingTime: "8 min read",
  },
  {
    id: "best-time-to-visit-korea-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Best Time to Visit Korea for First-Time Visitors",
    description:
      "Spring cherry blossoms, humid summer, autumn walking weather, and cold winter — what each season actually feels like for a first Korea trip.",
    href: "/travel/best-time-to-visit-korea-first-time",
    readingTime: "8 min read",
  },
  {
    id: "what-to-wear-in-korea-by-season",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "What to Wear in Korea by Season",
    description:
      "Packing for Seoul walks — comfortable shoes, subway stairs, rain layers, and what to wear season by season without overpacking.",
    href: "/travel/what-to-wear-in-korea-by-season",
    readingTime: "8 min read",
  },
  {
    id: "is-korea-expensive-to-visit-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Is Korea Expensive to Visit?",
    description:
      "An honest cost picture for first-time travelers — hotels, food, cafes, transport, and where famous Seoul areas quietly raise the bill.",
    href: "/travel/is-korea-expensive-to-visit-first-time",
    readingTime: "8 min read",
  },
  {
    id: "what-to-buy-in-korea-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "What to Buy in Korea for the First Time",
    description:
      "Skincare, snacks, stationery, and souvenirs worth the suitcase space — plus what is easy to overbuy in tourist shopping streets.",
    href: "/travel/what-to-buy-in-korea-first-time",
    readingTime: "8 min read",
  },
  {
    id: "3-days-in-seoul-itinerary-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "3 Days in Seoul Itinerary for First-Time Visitors",
    description:
      "A first-time Seoul itinerary grouped by area — Myeongdong and Namsan, palace day, then Hongdae or Gangnam without crossing the city all day.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
    readingTime: "9 min read",
  },
  {
    id: "7-days-in-korea-itinerary-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "7 Days in Korea Itinerary for First-Time Visitors",
    description:
      "One week split between Seoul and a second city — realistic pacing, transport between stops, and room for food detours.",
    href: "/travel/7-days-in-korea-itinerary-first-time",
    readingTime: "12 min read",
  },
  {
    id: "where-to-stay-in-seoul-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Where to Stay in Seoul for the First Time",
    description:
      "Choosing a Seoul base by subway stop, not just neighborhood name — Myeongdong, Hongdae, Gangnam, Jongno, and when convenience beats hype.",
    href: "/travel/where-to-stay-in-seoul-first-time",
    readingTime: "10 min read",
  },
  {
    id: "seoul-neighborhood-guide-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Seoul Neighborhood Guide for First-Time Visitors",
    description:
      "How Myeongdong, Hongdae, Gangnam, Insadong, Euljiro, and Jamsil feel different — so you pick an area that matches your trip mood.",
    href: "/travel/seoul-neighborhood-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "how-to-get-around-seoul-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Get Around Seoul for First-Time Visitors",
    description:
      "Subway as your base, taxis when traffic allows, Naver Map exits, rush hour, and why a simple route beats a fast-looking one.",
    href: "/travel/how-to-get-around-seoul-first-time",
    readingTime: "8 min read",
  },
  {
    id: "how-to-use-korean-subway",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Use the Korean Subway",
    description:
      "Tap in and out, follow line colors, survive long transfers, and find the right exit before a huge Seoul station swallows you.",
    href: "/travel/how-to-use-korean-subway",
    readingTime: "8 min read",
  },
  {
    id: "how-to-use-t-money-card-in-korea",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Use a T-money Card in Korea",
    description:
      "Buy, recharge, tap on buses twice, and keep enough balance — T-money for daily Seoul subway and bus movement without fare guesswork.",
    href: "/travel/how-to-use-t-money-card-in-korea",
    readingTime: "7 min read",
  },
  {
    id: "naver-map-kakaomap-korea-travel-guide",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Naver Map or KakaoMap?",
    description:
      "Why Google Maps is not enough in Korea — Naver Map and KakaoMap for subway exits, bus stops, Korean place names, and saved hotel addresses.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
    readingTime: "8 min read",
  },
  {
    id: "korea-travel-apps-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Best Korea Travel Apps for First-Time Visitors",
    description:
      "Apps worth setting up before landing — Naver Map, KakaoMap, Papago, Kakao T, and a few others for maps, rides, and reservations.",
    href: "/travel/korea-travel-apps-first-time",
    readingTime: "10 min read",
  },
  {
    id: "korea-sim-esim-wifi-guide-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Korea SIM, eSIM, and Wi-Fi Guide for First-Time Visitors",
    description:
      "eSIM vs SIM vs pocket Wi-Fi for a first Korea trip — what to activate at the airport and when cafe Wi-Fi is not enough.",
    href: "/travel/korea-sim-esim-wifi-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "korea-arrival-day-checklist-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Korea Arrival Day Checklist for First-Time Visitors",
    description:
      "Your first hours after landing — internet, maps, airport train or bus, hotel check-in, and a low-stress first meal in Seoul.",
    href: "/travel/korea-arrival-day-checklist-first-time",
    readingTime: "8 min read",
  },
  {
    id: "luggage-storage-in-seoul-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Luggage Storage in Seoul for First-Time Visitors",
    description:
      "Hotel storage, station lockers, and moving with a suitcase — where to drop bags so subway stairs do not ruin the day.",
    href: "/travel/luggage-storage-in-seoul-first-time",
    readingTime: "8 min read",
  },
  {
    id: "how-to-get-from-incheon-airport-to-seoul",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Get from Incheon Airport to Seoul",
    description:
      "AREX, airport bus, or taxi from Incheon Airport — pick the route that matches your hotel, luggage, and arrival time, not only the cheapest fare.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
    readingTime: "8 min read",
  },
  {
    id: "what-to-do-in-myeongdong-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "What to Do in Myeongdong",
    description:
      "K-beauty streets, snack alleys, cathedral side walks, money exchange, and the subway exit that saves ten minutes of walking in Myeongdong.",
    href: "/travel/what-to-do-in-myeongdong-first-time",
    readingTime: "8 min read",
  },
];

export const metadata: Metadata = {
  title: "Travel in Korea | HAEMIL",
  description:
    "Map-friendly HAEMIL guides for exploring Korea through neighborhoods, food, local routes, and small details that make a trip easier to understand.",
  openGraph: {
    title: "Travel in Korea | HAEMIL",
    description:
      "Map-friendly HAEMIL guides for exploring Korea through neighborhoods, food, local routes, and small details that make a trip easier to understand.",
    type: "website",
  },
};

function getPostAccent(category: string) {
  if (category === "travel" || category === "food") {
    return "var(--celadon)";
  }

  return "var(--accent)";
}

export default function TravelPage() {
  const travelPosts = getPostsByCategory("travel");
  const travelGuides = [
    ...STANDALONE_TRAVEL_GUIDES.map((guide) => ({
      id: guide.id,
      category: guide.category,
      categoryLabel: guide.categoryLabel,
      title: guide.title,
      description: guide.description,
      href: guide.href,
      readingTime: guide.readingTime,
    })),
    ...travelPosts.map((post) => ({
      id: String(post.id),
      category: post.category,
      categoryLabel: post.categoryLabel,
      title: post.title,
      description: post.description,
      href: `/${post.categorySlug}/${post.slug}`,
      readingTime: post.readingTime,
    })),
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <SiteHeader />

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--celadon)] opacity-10">
            T
          </div>

          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Travel
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Travel in Korea
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Map-friendly HAEMIL guides for exploring Korea through neighborhoods,
            food, local routes, and small details that make a trip easier to
            understand.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Start here when you want to plan a Korea trip without turning it into
            a checklist. HAEMIL travel guides focus on places people actually
            visit, how areas feel, what to eat nearby, and how to choose a route
            that makes sense.
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Seoul area guides
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
            Not sure where to start in Seoul?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Start with HAEMIL’s Seoul area hub. Choose the side of the city
            that fits your mood: old streets, young neighborhoods, cafe streets,
            shopping, night views, or riverside walks.
          </p>

          <Link
            href="/travel/seoul"
            className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            Explore Seoul guides →
          </Link>
        </section>

        <section className="mt-12 pb-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Travel guides
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {travelGuides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span style={{ color: getPostAccent(guide.category) }}>
                    {guide.categoryLabel}
                  </span>
                  <span className="text-[var(--muted)]">{guide.readingTime}</span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {guide.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-[var(--accent)]">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
