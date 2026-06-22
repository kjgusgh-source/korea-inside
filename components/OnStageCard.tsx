import type { OnStageItem } from "../lib/onStage";

type OnStageCardProps = {
  item: OnStageItem;
  featured?: boolean;
};

export default function OnStageCard({
  item,
  featured = false,
}: OnStageCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)] ${
        featured ? "md:col-span-2 md:p-8" : ""
      }`}
    >
      <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10 transition group-hover:scale-110">
        ♫
      </div>

      <p className="mb-5 inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
        {item.eyebrow}
      </p>

      <h3 className="relative text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
        {item.title}
      </h3>

      <p className="relative mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
        {item.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {item.details.map((detail) => (
          <span
            key={detail}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
          >
            {detail}
          </span>
        ))}
      </div>
    </article>
  );
}