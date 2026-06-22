import type { ContentHub } from "../lib/contentHubs";

type ContentHubCardProps = {
  hub: ContentHub;
  featured?: boolean;
};

export default function ContentHubCard({
  hub,
  featured = false,
}: ContentHubCardProps) {
  return (
    <article
      className={`rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        featured ? "md:col-span-2 md:p-8" : ""
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p
            className="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: hub.accentColor }}
          >
            {hub.badge}
          </p>

          <h3 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
            {hub.title}
          </h3>

          <p className="mt-2 text-sm text-[var(--muted)]">{hub.subtitle}</p>
        </div>
      </div>

      <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
        {hub.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {hub.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
          >
            {highlight}
          </span>
        ))}
      </div>
    </article>
  );
}