import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Seoul Travel Guides | HAEMIL",
  description:
    "Map-friendly HAEMIL guides for understanding Seoul by area, mood, and local movement.",
  openGraph: {
    title: "Seoul Travel Guides | HAEMIL",
    description:
      "Map-friendly HAEMIL guides for understanding Seoul by area, mood, and local movement.",
    type: "website",
  },
};

const SEOUL_AREA_GUIDES = [
  {
    title: "Old Seoul",
    description:
      "Jongno, Ikseon-dong, Insadong, Bukchon, palaces, hanok alleys, tea houses, markets, and older city layers.",
    href: "/travel/old-seoul-jongno-ikseondong-bukchon",
  },
  {
    title: "West Seoul",
    description:
      "Hongdae, Yeonnam, Mangwon, Hapjeong, cafes, small shops, street music, market food, and young local energy.",
    href: "/travel/west-seoul-hongdae-yeonnam-mangwon",
  },
  {
    title: "Trendy Seoul",
    description:
      "Seongsu, Apgujeong, Cheongdam, Sinsa, cafes, pop-ups, fashion, beauty, and polished modern Seoul.",
    href: "/travel/trendy-seoul-seongsu-apgujeong-cheongdam",
  },
  {
    title: "Shopping Seoul",
    description:
      "Myeongdong, Namsan, Euljiro, Dongdaemun, DDP, cosmetics, shopping streets, night views, and design spaces.",
    href: "/travel/shopping-seoul-myeongdong-namsan-dongdaemun",
  },
  {
    title: "Night Seoul",
    description:
      "Han River, Namsan, Euljiro, Cheonggyecheon, late-night streets, convenience-store snacks, and quiet city moods.",
    href: "/travel/night-seoul-han-river-namsan-euljiro",
  },
];

export default function SeoulTravelPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <SiteHeader />

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--celadon)] opacity-10">
            S
          </div>

          <Link
            href="/travel"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back to Travel
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Seoul
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Seoul Travel Guides
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Map-friendly HAEMIL guides for understanding Seoul by area, mood,
            and local movement.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Seoul is too large to explain with one checklist. Start with the
            area that matches your mood: old streets, young neighborhoods, cafe
            streets, shopping, night views, or riverside walks.
          </p>
        </section>

        <section className="mt-12 pb-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Seoul area guides
          </p>

          <p className="mb-8 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Choose by mood, not by checklist. Seoul feels different depending
            on which side of the city you enter first.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {SEOUL_AREA_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-[var(--celadon)]">Travel</span>
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
