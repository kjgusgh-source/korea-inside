import type { TravelQuickGuide as TravelQuickGuideData } from "../lib/posts";

type TravelQuickGuideProps = {
  guide: TravelQuickGuideData;
};

export default function TravelQuickGuide({ guide }: TravelQuickGuideProps) {
  return (
    <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
        Quick guide
      </p>

      <h2 className="mt-4 text-3xl font-semibold">{guide.sectionTitle}</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guide.groups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="text-lg font-semibold leading-tight text-[var(--text)]">
              {group.title}
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
              {group.items.map((item, index) => (
                <li key={`${group.title}-${index}`} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--celadon)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
