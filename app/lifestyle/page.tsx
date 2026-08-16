import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { getPostsByCategory } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Korea Now | HAEMIL",
  description:
    "HAEMIL guides to everyday, present-day Korea — the trends, routines, and small cultural habits locals live with right now.",
  openGraph: {
    title: "Korea Now | HAEMIL",
    description:
      "HAEMIL guides to everyday, present-day Korea — the trends, routines, and small cultural habits locals live with right now.",
    type: "website",
  },
};

function getPostAccent() {
  return "var(--accent)";
}

export default function LifestylePage() {
  const lifestylePosts = getPostsByCategory("lifestyle");
  const lifestyleGuides = lifestylePosts.map((post) => ({
    id: String(post.id),
    category: post.category,
    categoryLabel: post.categoryLabel,
    title: post.title,
    description: post.description,
    href: `/${post.categorySlug}/${post.slug}`,
    readingTime: post.readingTime,
  }));

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <SiteHeader />

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10">
            K
          </div>

          <div className="relative md:flex md:items-center md:justify-between md:gap-8">
            <div className="md:min-w-0 md:flex-1">
              <Link
                href="/"
                className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
              >
                ← Back home
              </Link>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Korea Now
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Korea Now
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                HAEMIL guides to everyday, present-day Korea — the trends,
                routines, and small cultural habits locals live with right
                now.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                Start here for the parts of Korean life that do not always
                make it into a travel guide. These notes explain daily
                spaces, habits, and objects that shape ordinary life in
                Korea.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 pb-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Korea Now guides
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {lifestyleGuides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span style={{ color: getPostAccent() }}>
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
