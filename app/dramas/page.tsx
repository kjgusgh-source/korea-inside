import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { getPostsByCategory } from "../../lib/posts";

const STANDALONE_DRAMA_GUIDES = [
  {
    id: "why-itaewon-class-is-a-good-first-kdrama",
    category: "dramas",
    categoryLabel: "K-drama guide",
    title: "Why Itaewon Class Is a Good First K-drama",
    description:
      "A local-friendly guide to the 2020 JTBC hit, from Itaewon and DanBam to youth ambition, unfair power, and why the drama stayed memorable.",
    href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
    readingTime: "7 min read",
  },
];

export const metadata: Metadata = {
  title: "Drama & Film | HAEMIL",
  description:
    "HAEMIL guides for understanding Korean dramas, films, city moods, everyday scenes, and the places or cultural details that make them feel familiar.",
  openGraph: {
    title: "Drama & Film | HAEMIL",
    description:
      "HAEMIL guides for understanding Korean dramas, films, city moods, everyday scenes, and the places or cultural details that make them feel familiar.",
    type: "website",
  },
};

function getPostAccent(category: string) {
  if (category === "dramas") {
    return "var(--electric)";
  }

  if (category === "travel" || category === "food") {
    return "var(--celadon)";
  }

  return "var(--accent)";
}

export default function DramasPage() {
  const dramaPosts = getPostsByCategory("dramas");
  const dramaGuides = [
    ...STANDALONE_DRAMA_GUIDES.map((guide) => ({
      id: guide.id,
      category: guide.category,
      categoryLabel: guide.categoryLabel,
      title: guide.title,
      description: guide.description,
      href: guide.href,
      readingTime: guide.readingTime,
    })),
    ...dramaPosts.map((post) => ({
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
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--electric)] opacity-10">
            D
          </div>

          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Drama / Film
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Drama & Film
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            HAEMIL guides for understanding Korean dramas, films, city moods,
            everyday scenes, and the places or cultural details that make them
            feel familiar.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Start here when you want K-dramas and Korean films to feel easier to
            understand. These guides do not only list titles. They explain the
            everyday places, emotions, words, and cultural details that often
            appear on screen.
          </p>
        </section>

        <section className="mt-12 pb-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Drama guides
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {dramaGuides.map((guide) => (
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
