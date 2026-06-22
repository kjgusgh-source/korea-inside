import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ContentHubCard from "../components/ContentHubCard";
import MediaFeatureCard from "../components/MediaFeatureCard";
import OnStageCard from "../components/OnStageCard";
import { getContentHubs } from "../lib/contentHubs";
import { getMediaItems } from "../lib/media";
import { getOnStageItems } from "../lib/onStage";
import { getAllPosts } from "../lib/posts";

const editorialNotes = [
  "Living Korean language",
  "Local scenes, not stereotypes",
  "Tradition beside modern life",
];

const categoryHighlights = [
  {
    title: "Living Language",
    label: "Memes & Expressions",
    text: "Words Koreans actually use in chats, shows, fandoms, and everyday moments.",
  },
  {
    title: "Everyday Korea",
    label: "Lifestyle",
    text: "Convenience stores, PC bangs, late-night routines, and the small systems that shape daily life.",
  },
  {
    title: "City & Memory",
    label: "Places",
    text: "Old palaces, glowing streets, quiet alleys, and the way history still breathes inside the city.",
  },
  {
    title: "Warm Context",
    label: "Culture",
    text: "Not just what Koreans do, but why those habits feel natural here.",
  },
];

export default function Home() {
  const posts = getAllPosts();
  const contentHubs = getContentHubs();
  const onStageItems = getOnStageItems();
  const mediaItems = getMediaItems();
  const heroPost = posts[0];
  const featuredPosts = posts.slice(1, 4);
  const latestPosts = posts.slice(4);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
      <SiteHeader />

        <section className="grid gap-8 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              Friendly cultural notes from the inside
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Korea, explained like a local friend would.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Not a textbook. Not a tourist brochure. Korea Inside shares the
              small scenes, living words, and hidden context behind everyday
              Korean culture.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${heroPost.categorySlug}/${heroPost.slug}`}
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5"
              >
                Start with today’s story
              </Link>

              <a
                href="#latest"
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5"
              >
                Browse latest notes
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {editorialNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--text)]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/${heroPost.categorySlug}/${heroPost.slug}`}
            className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1"
          >
            <div className="absolute right-6 top-6 text-7xl text-[var(--accent)] opacity-10">
              內
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Editor’s first pick
            </p>

            <div className="mt-24">
              <p className="mb-3 text-sm text-[var(--muted)]">
                {heroPost.categoryLabel} · {heroPost.readingTime}
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                {heroPost.title}
              </h2>

              <p className="mt-5 leading-7 text-[var(--muted)]">
                {heroPost.excerpt}
              </p>

              <p className="mt-8 text-sm font-semibold text-[var(--accent)]">
                Read the note →
              </p>
            </div>
          </Link>
        </section>

        <section className="py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                On Stage
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                The moments around Korean pop culture.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              Songs, faces, stages, comments, fan rituals, and small details
              that make K-pop feel alive beyond the performance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {onStageItems.map((item, index) => (
              <OnStageCard
                key={item.id}
                item={item}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Visual culture picks
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                See the culture before reading about it.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              Korea is often understood through stages, scenes, food, streets,
              and small visual moments. These picks are built for watching
              first, then understanding the context behind them.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item, index) => (
              <MediaFeatureCard
                key={item.id}
                item={item}
                featured={index === 0}
              />
            ))}
          </div>
        </section>
        
        <section
          id="stories"
          className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8"
        >
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Selected stories
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Start with what feels alive now
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              Short cultural notes for people who want to understand Korea
              through real scenes, not stiff explanations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/${post.categorySlug}/${post.slug}`}
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <p className="text-sm text-[var(--accent)]">
                  {post.categoryLabel}
                </p>

                <h3 className="mt-5 text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">{post.readingTime}</span>
                  <span className="font-semibold text-[var(--accent)]">
                    Open →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Korea culture map
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                K-pop opens the door, but Korea is wider than one stage.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              Korea Inside begins with the strongest global interests — idols,
              dramas, films, and food — then connects them to everyday culture,
              travel, language, and local scenes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contentHubs.map((hub, index) => (
              <ContentHubCard
                key={hub.id}
                hub={hub}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        <section id="guide" className="py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Our way of seeing Korea
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Pride, without shouting.
            </h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              Korea Inside does not try to prove that Korea is better than
              anywhere else. It simply opens the door, points to a scene, and
              says: “This is how it feels here.”
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {categoryHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5"
              >
                <p className="text-sm text-[var(--accent)]">{item.label}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="latest" className="pb-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Latest notes
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              More from the inside
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`/${post.categorySlug}/${post.slug}`}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-[var(--accent)]">
                    {post.categoryLabel}
                  </span>
                  <span className="text-[var(--muted)]">
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="border-t border-[var(--border)] py-8 text-sm text-[var(--muted)]">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <p>© 2026 Korea Inside</p>
            <p>Warm local notes on Korean culture, language, and everyday life.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
