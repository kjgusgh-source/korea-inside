import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { getPostsByCategory } from "../../lib/posts";

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
            {dramaPosts.map((post) => (
              <Link
                key={post.id}
                href={`/${post.categorySlug}/${post.slug}`}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span style={{ color: getPostAccent(post.category) }}>
                    {post.categoryLabel}
                  </span>
                  <span className="text-[var(--muted)]">{post.readingTime}</span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {post.description}
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
