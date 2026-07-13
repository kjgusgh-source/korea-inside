import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { getPostsByCategory } from "../../lib/posts";

const STANDALONE_TRAVEL_GUIDES = [
  {
    id: "3-days-in-seoul-itinerary-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "3 Days in Seoul Itinerary for First-Time Visitors",
    description:
      "A practical local-friendly Seoul route for first-time visitors, with Myeongdong, Namsan, palaces, Insadong, Hongdae or Gangnam, plus honest travel trade-offs.",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
    readingTime: "9 min read",
  },
  {
    id: "where-to-stay-in-seoul-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Where to Stay in Seoul for the First Time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
    readingTime: "10 min read",
  },
  {
    id: "how-to-use-korean-subway",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Use the Korean Subway",
    description:
      "A local-friendly first guide to Korean subway rides, T-money cards, transfers, station signs, apps, etiquette, and simple mistakes to avoid.",
    href: "/travel/how-to-use-korean-subway",
    readingTime: "8 min read",
  },
  {
    id: "how-to-use-t-money-card-in-korea",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Use a T-money Card in Korea",
    description:
      "A local-friendly guide to buying, recharging, tapping, transferring, and avoiding common T-money mistakes on Korean subways and buses.",
    href: "/travel/how-to-use-t-money-card-in-korea",
    readingTime: "7 min read",
  },
  {
    id: "naver-map-kakaomap-korea-travel-guide",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "Naver Map or KakaoMap?",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
    readingTime: "8 min read",
  },
  {
    id: "how-to-get-from-incheon-airport-to-seoul",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "How to Get from Incheon Airport to Seoul",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
    readingTime: "8 min read",
  },
  {
    id: "what-to-do-in-myeongdong-first-time",
    category: "travel",
    categoryLabel: "Travel guide",
    title: "What to Do in Myeongdong",
    description:
      "A local-friendly first guide to Myeongdong, from K-beauty shops and street food to Myeongdong Cathedral, money exchange, subway exits, and nearby Namsan.",
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
