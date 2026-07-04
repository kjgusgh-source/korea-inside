import Link from "next/link";
import type { MediaItem } from "../lib/media";
import YouTubeEmbed from "./YouTubeEmbed";

type MediaFeatureCardProps = {
  item: MediaItem;
  featured?: boolean;
  showGuideLink?: boolean;
  currentPath?: string;
};

export default function MediaFeatureCard({
  item,
  featured = false,
  showGuideLink = false,
  currentPath,
}: MediaFeatureCardProps) {
  const watchUrl =
    item.sourceUrl ??
    (item.youtubeId ? `https://www.youtube.com/watch?v=${item.youtubeId}` : "");
  const shouldShowGuideLink =
    showGuideLink &&
    item.guideHref &&
    item.guideHref !== currentPath;

  return (
    <article
      className={`overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="p-4">
        {item.mediaType === "youtube" ? (
          <YouTubeEmbed youtubeId={item.youtubeId} title={item.title} />
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--surface)] p-6 text-center">
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">
                Visual placeholder
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                A safe image, official visual, or original photo can be
                connected here later.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 pt-2">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <p className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
            {item.categoryLabel}
          </p>

          {item.sourceLabel && (
            <p className="text-xs text-[var(--muted)]">
              Source: {item.sourceLabel}
            </p>
          )}
        </div>

        <h3 className="text-2xl font-semibold leading-tight text-[var(--text)]">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          {item.description}
        </p>

        <div className="mt-5 rounded-[1.25rem] bg-[var(--surface)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Cultural note
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {item.cultureNote}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {watchUrl && (
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Watch on YouTube →
            </a>

            {shouldShowGuideLink && (
              <Link
                href={item.guideHref!}
                className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Read the related guide →
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}