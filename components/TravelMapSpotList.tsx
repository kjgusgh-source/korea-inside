import type { TravelMapSpot } from "../lib/posts";

function getMapHref(mapQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
}

function groupSpotsByArea(spots: TravelMapSpot[]) {
  const areaOrder: string[] = [];
  const groups = new Map<string, TravelMapSpot[]>();

  spots.forEach((spot) => {
    if (!groups.has(spot.area)) {
      areaOrder.push(spot.area);
      groups.set(spot.area, []);
    }
    groups.get(spot.area)!.push(spot);
  });

  return areaOrder.map((area) => ({
    area,
    spots: groups.get(area)!,
  }));
}

type TravelMapSpotListProps = {
  spots: TravelMapSpot[];
  sectionTitle?: string;
};

export default function TravelMapSpotList({
  spots,
  sectionTitle,
}: TravelMapSpotListProps) {
  const spotsByArea = groupSpotsByArea(spots);

  return (
    <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
        Map at a glance
      </p>

      {sectionTitle && (
        <h2 className="mt-4 text-3xl font-semibold">{sectionTitle}</h2>
      )}

      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
        Open a spot in Google Maps to see where it sits. No heavy map embed here
        — just quick links you can use while planning.
      </p>

      <div className="mt-8 space-y-10">
        {spotsByArea.map(({ area, spots: areaSpots }) => (
          <div key={area}>
            <h3 className="text-xl font-semibold text-[var(--text)]">{area}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {areaSpots.map((spot) => (
                <article
                  key={spot.name}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--celadon)]">
                    {spot.category}
                  </p>

                  <h4 className="mt-3 text-lg font-semibold leading-tight text-[var(--text)]">
                    {spot.name}
                  </h4>

                  {spot.note && (
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {spot.note}
                    </p>
                  )}

                  <a
                    href={getMapHref(spot.mapQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Open in Google Maps →
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
