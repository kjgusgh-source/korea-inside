import type { PostTrailer } from "../lib/posts";
import YouTubeEmbed from "./YouTubeEmbed";

type PostTrailerListProps = {
  trailers: PostTrailer[];
};

export default function PostTrailerList({ trailers }: PostTrailerListProps) {
  return (
    <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
        Official trailers
      </p>

      <div className="mt-8 space-y-6">
        {trailers.map((trailer) => {
          const watchUrl = `https://www.youtube.com/watch?v=${trailer.youtubeId}`;

          return (
            <article
              key={trailer.youtubeId}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
                {trailer.sourceLabel}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--text)]">
                {trailer.title}
              </h3>

              {trailer.koreanTitle && (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {trailer.koreanTitle}
                </p>
              )}

              <div className="mt-4">
                <YouTubeEmbed
                  youtubeId={trailer.youtubeId}
                  title={trailer.title}
                />
              </div>

              {trailer.note && (
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {trailer.note}
                </p>
              )}

              <a
                href={watchUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Watch on YouTube →
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
