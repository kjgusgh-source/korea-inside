import { preconnect } from "react-dom";

/*
 * The official YouTube embedded player for the Visual guide only.
 *
 * Kept deliberately simple so it follows the YouTube API Services policies:
 * - The iframe is in the server HTML (no click-to-load facade, no copied or
 *   cropped thumbnail, no separate YouTube logo). YouTube's own player shows
 *   the thumbnail, title, channel and branding.
 * - No autoplay. Privacy-enhanced mode (youtube-nocookie.com).
 * - The player box is at least 200px tall, so the viewport never drops under
 *   the 200 x 200 px minimum on narrow phones.
 * - Referrer policy strict-origin-when-cross-origin (YouTube's recommendation),
 *   so the embed can identify the site.
 * - A plain link to the video on YouTube always sits under the player, so
 *   readers still have a way to watch if the embed fails or is blocked.
 */

type OfficialYouTubePlayerProps = {
  videoId: string;
  /** The video title exactly as it appears on YouTube. */
  youtubeTitle: string;
  channelName: string;
  channelUrl: string;
  /** Short HAEMIL note shown under the source line. */
  note?: string;
};

export default function OfficialYouTubePlayer({
  videoId,
  youtubeTitle,
  channelName,
  channelUrl,
  note,
}: OfficialYouTubePlayerProps) {
  preconnect("https://www.youtube-nocookie.com");

  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <figure className="mt-4 max-w-3xl md:mt-8">
      <div className="relative aspect-video min-h-[200px] w-full overflow-hidden rounded-[1.25rem] bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1`}
          title={`YouTube video: ${youtubeTitle}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Source line first, so the fallback link stays near the player. */}
      <figcaption className="mt-3 space-y-1.5 text-sm leading-6">
        <span className="block text-[var(--muted)]">
          Video:{" "}
          <a
            href={channelUrl}
            className="font-semibold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
          >
            {channelName}
          </a>{" "}
          on YouTube ·{" "}
          <a
            href={watchUrl}
            className="font-semibold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
          >
            Watch on YouTube ↗
          </a>
        </span>
        <span lang="ko" className="block text-[var(--text)]">
          {youtubeTitle}
        </span>
        {note ? (
          <span className="block text-xs leading-5 text-[var(--muted)]">
            {note}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
