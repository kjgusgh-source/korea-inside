import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ContentHubCard from "../components/ContentHubCard";
import MediaFeatureCard from "../components/MediaFeatureCard";
import OnStageCard from "../components/OnStageCard";
import { getContentHubs } from "../lib/contentHubs";
import { getMediaItems } from "../lib/media";
import { getOnStageItems } from "../lib/onStage";
import { getAllPosts } from "../lib/posts";
import FeaturedMemberGuides from "../components/FeaturedMemberGuides";
import FeaturedKpopArticles from "../components/FeaturedKpopArticles";
import IdolRequestForm from "../components/IdolRequestForm";

const editorialNotes = [
  "Living Korean language",
  "Local scenes, not stereotypes",
  "Tradition beside modern life",
];

export default function Home() {
  const posts = getAllPosts();
  const contentHubs = getContentHubs();
  const onStageItems = getOnStageItems();
  const mediaItems = getMediaItems();
  const heroPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
      <SiteHeader />

        <section className="grid gap-8 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              Friendly cultural notes from the inside
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
  HAEMIL
</p>

<h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
  Beautiful Korean stories, told by a local friend.
</h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Not a textbook. Not a tourist brochure. HAEMIL shares the
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

          <div className="flex flex-col gap-5">
  <Link
    href={`/${heroPost.categorySlug}/${heroPost.slug}`}
    className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1"
  >
    <div className="absolute right-6 top-6 text-7xl opacity-10">
      🇰🇷
    </div>

    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
      Editor’s first pick
    </p>

    <div className="mt-12">
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

  <IdolRequestForm compact />
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
                Korea culture map
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                K-pop opens the door, but Korea is wider than one stage.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            HAEMIL begins with the strongest global interests — idols,
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
            <p>© 2026 HAEMIL</p>
            <p>Warm local notes on Korean culture, language, and everyday life.</p>
          </div>
        </footer>
      </section>

      <FeaturedKpopArticles />
      
      <FeaturedMemberGuides />
    </main>
  );
}
