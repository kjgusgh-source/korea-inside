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
import SiteSearchBox from "../components/SiteSearchBox";
import KpopStagePicks from "../components/KpopStagePicks";
import BackToTopButton from "../components/BackToTopButton";
import {
  HOME_KPOP_STAGE_PICKS_DEFAULT_IDS,
  HOME_KPOP_STAGE_PICKS_EXPANDED_IDS,
  resolveHomeKpopStagePicks,
} from "../lib/homeKpopStagePicks";

const CONTENT_HUB_LINKS: Partial<Record<string, string>> = {
  kpop: "/kpop",
  food: "/food",
  "memes-expressions": "/kpop/glossary",
  "travel-hidden-places": "/travel",
};

export default function Home() {
  const posts = getAllPosts();
  const contentHubs = getContentHubs();
  const onStageItems = getOnStageItems();
  const mediaItems = getMediaItems();
  const heroPost = posts[0];
  const latestPosts = posts.slice(1);
  const defaultKpopPicks = resolveHomeKpopStagePicks(
    mediaItems,
    HOME_KPOP_STAGE_PICKS_DEFAULT_IDS
  );
  const expandedKpopPicks = resolveHomeKpopStagePicks(
    mediaItems,
    HOME_KPOP_STAGE_PICKS_EXPANDED_IDS
  );
  const screenAndTableItems = mediaItems.filter(
    (item) => item.category === "drama-film" || item.category === "food"
  );

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <SiteHeader />

        <section className="grid items-start gap-8 pt-6 pb-12 md:grid-cols-[1.2fr_0.8fr] md:pt-8 md:pb-14">
          <div className="flex flex-col justify-start md:-mt-2">
            <div className="mb-7 inline-flex w-fit rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              Friendly cultural notes from the inside
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
              HAEMIL
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Beautiful Korean stories, told by a local friend.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Not a textbook. Not a tourist brochure. HAEMIL shares the small
              scenes, living words, and hidden context behind everyday Korean
              culture.
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

            <div className="mt-8 max-w-2xl">
              <SiteSearchBox compact />

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                <span>Scroll to explore more</span>
                <span>↓</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:max-w-[430px] md:justify-self-end">
            <Link
              href={`/${heroPost.categorySlug}/${heroPost.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1"
            >
              <div className="absolute right-6 top-6 text-7xl opacity-10">
                🇰🇷
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Editor’s first pick
              </p>

              <div className="mt-6">
                <p className="mb-3 text-sm text-[var(--muted)]">
                  {heroPost.categoryLabel} · {heroPost.readingTime}
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-3xl">
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

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            New on HAEMIL
          </p>

          <h2 className="mt-3 max-w-3xl text-2xl font-semibold md:text-3xl">
            HAEMIL opened on July 1, 2026.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            This is a new and growing guide to Korean pop culture, food, travel,
            words, and everyday scenes. New pages will be added steadily. If
            there is a K-pop video, Korean phrase, drama scene, food, or travel
            idea you want explained, send a request — it may become a future
            HAEMIL guide.
          </p>
        </section>

        <section className="py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop stage picks
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Start with a few fancams, then go deeper.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              A small set of stage clips to watch first, with links to the member
              guides that explain why fans replay them.
            </p>
          </div>

          <KpopStagePicks
            defaultItems={defaultKpopPicks}
            expandedItems={expandedKpopPicks}
          />
        </section>

        <section className="py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                On Screen & On the Table
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Drama scenes and food moments to watch next.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              K-pop is one door into Korea. These picks sit in a separate lane
              from stage clips.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {screenAndTableItems.map((item) => (
              <MediaFeatureCard key={item.id} item={item} />
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
              <OnStageCard key={item.id} item={item} featured={index === 0} />
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
              HAEMIL begins with the strongest global interests — idols, dramas,
              films, and food — then connects them to everyday culture, travel,
              language, and local scenes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contentHubs.map((hub, index) => {
              const href = CONTENT_HUB_LINKS[hub.id];
              const card = (
                <ContentHubCard hub={hub} featured={index === 0} />
              );

              if (href) {
                return (
                  <Link
                    key={hub.id}
                    href={href}
                    className="block transition hover:-translate-y-1"
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <div key={hub.id} className="relative">
                  {card}
                  <p className="mt-3 text-xs text-[var(--muted)]">
                    More coming soon
                  </p>
                </div>
              );
            })}
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
                  <span className="text-[var(--muted)]">{post.readingTime}</span>
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
            <p>
              Warm local notes on Korean culture, language, and everyday life.
            </p>
          </div>
        </footer>
      </section>

      <FeaturedKpopArticles />
      <FeaturedMemberGuides />
      <BackToTopButton />
    </main>
  );
}
