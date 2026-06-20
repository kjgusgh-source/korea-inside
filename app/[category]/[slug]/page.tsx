import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "../../../components/ThemeToggle";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "../../../lib/posts";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

function getPostAccent(category: string) {
  if (category === "memes" || category === "kpop") {
    return {
      color: "var(--electric)",
      background: "var(--electric-soft)",
    };
  }

  if (category === "travel" || category === "food") {
    return {
      color: "var(--celadon)",
      background: "var(--celadon-soft)",
    };
  }

  return {
    color: "var(--accent)",
    background: "var(--accent-soft)",
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    category: post.categorySlug,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    return {
      title: "Article Not Found | Korea Inside",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const accent = getPostAccent(post.category);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="group">
            <p className="text-2xl font-semibold tracking-tight">
              Korea <span className="text-[var(--accent)]">Inside</span>
            </p>
            <p className="mt-1 hidden text-xs text-[var(--muted)] sm:block">
              A warm local guide to Korean culture
            </p>
          </Link>

          <ThemeToggle />
        </header>

        <article className="mx-auto mt-14 max-w-4xl md:mt-20">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            ← Back to Korea Inside
          </Link>

          <div className="mt-10 rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-xl shadow-[var(--shadow)] md:px-12 md:py-14">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-4 py-2 text-sm font-medium"
                style={{
                  color: accent.color,
                  backgroundColor: accent.background,
                }}
              >
                {post.categoryLabel}
              </span>

              <span className="text-sm text-[var(--muted)]">
                {post.readingTime}
              </span>

              <span className="text-sm text-[var(--muted)]">
                {post.publishedAt}
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {post.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              {post.description}
            </p>

            <div className="mt-12 border-t border-[var(--border)] pt-10">
              <div className="space-y-7 text-lg leading-9 text-[var(--text)]">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Cultural Context
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              The feeling behind the scene
            </h2>

            <p className="mt-5 text-lg leading-9 text-[var(--muted)]">
              {post.culturalContext}
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-20 border-t border-[var(--border)] pt-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  More notes
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Keep exploring Korea
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => {
                  const relatedAccent = getPostAccent(relatedPost.category);

                  return (
                    <Link
                      key={relatedPost.id}
                      href={`/${relatedPost.categorySlug}/${relatedPost.slug}`}
                      className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
                    >
                      <p
                        className="text-sm font-medium"
                        style={{ color: relatedAccent.color }}
                      >
                        {relatedPost.categoryLabel}
                      </p>

                      <h3 className="mt-4 text-xl font-semibold leading-tight">
                        {relatedPost.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                        {relatedPost.excerpt}
                      </p>

                      <p className="mt-6 text-sm font-semibold text-[var(--accent)]">
                        Read note →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </article>
      </section>
    </main>
  );
}
