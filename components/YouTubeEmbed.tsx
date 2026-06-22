type YouTubeEmbedProps = {
    youtubeId?: string;
    title: string;
  };
  
  export default function YouTubeEmbed({ youtubeId, title }: YouTubeEmbedProps) {
    if (!youtubeId) {
      return (
        <div className="flex aspect-video items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--surface)] p-6 text-center">
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">
              Video placeholder
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              A safe official YouTube video can be connected here later.
            </p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }