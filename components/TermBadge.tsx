type TermBadgeName =
  | "fancam"
  | "center"
  | "ending-fairy"
  | "killing-part"
  | "point-choreography"
  | "stage-presence"
  | "visual"
  | "bias";

const BADGE_GLYPHS: Record<TermBadgeName, React.ReactNode> = {
  fancam: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <rect x="66" y="66" width="124" height="124" rx="20" fill="var(--accent)" fillOpacity="0.07" />
      <path
        d="M70 84V66a6 6 0 0 1 6-6h18M186 84V66a6 6 0 0 0-6-6h-18M70 172v18a6 6 0 0 0 6 6h18M186 172v18a6 6 0 0 1-6 6h-18"
        stroke="var(--accent)"
        strokeWidth="7"
      />
      <circle cx="128" cy="128" r="38" fill="var(--accent)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="128" cy="128" r="20" fill="var(--accent)" fillOpacity="0.18" />
      <circle cx="128" cy="128" r="20" stroke="var(--accent)" strokeWidth="4" />
      <circle cx="116" cy="116" r="6" fill="var(--card)" />
    </>
  ),
  center: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="128" cy="128" r="54" stroke="var(--celadon)" strokeWidth="7" />
      <circle cx="128" cy="128" r="15" fill="var(--accent)" stroke="var(--accent)" strokeWidth="4" />
      <path d="M128 58v34M128 164v34M58 128h34M164 128h34" stroke="var(--celadon)" strokeWidth="7" />
      <path
        d="M66 82h18M66 82v18M190 82h-18M190 82v18M66 174h18M66 174v-18M190 174h-18M190 174v-18"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeOpacity="0.5"
      />
    </>
  ),
  "ending-fairy": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="128" cy="118" r="48" fill="var(--accent)" fillOpacity="0.06" />
      <path d="M128 64l11 30 30 11-30 11-11 30-11-30-30-11 30-11z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="4" />
      <path
        d="M80 140l7 19 19 7-19 7-7 19-7-19-19-7 19-7z"
        fill="var(--accent)"
        fillOpacity="0.45"
        stroke="var(--accent)"
        strokeWidth="4"
      />
      <path
        d="M172 138l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"
        fill="var(--accent)"
        fillOpacity="0.45"
        stroke="var(--accent)"
        strokeWidth="4"
      />
    </>
  ),
  "killing-part": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M70 66l58 23-27 118-45-18z" fill="var(--accent)" fillOpacity="0.13" />
      <path d="M86 62l45 18-15 37-45-18z" fill="var(--accent)" fillOpacity="0.45" stroke="var(--accent)" strokeWidth="5" />
      <path d="M110 102l-27 93" stroke="var(--accent)" strokeWidth="6" />
      <path
        d="M164 82l8 20 20 8-20 8-8 20-8-20-20-8 20-8z"
        fill="var(--accent)"
        stroke="var(--accent)"
        strokeWidth="4"
      />
    </>
  ),
  "point-choreography": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <ellipse cx="128" cy="134" rx="60" ry="68" fill="var(--accent)" fillOpacity="0.05" />
      <circle cx="128" cy="83" r="16" fill="var(--accent)" fillOpacity="0.45" stroke="var(--accent)" strokeWidth="5" />
      <path
        d="M128 100v44M128 116l-38 25M128 116l40 12M128 144l-24 48M128 144l34 44"
        stroke="var(--accent)"
        strokeWidth="8"
      />
      <path
        d="M176 78l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"
        fill="var(--accent)"
        fillOpacity="0.45"
        stroke="var(--accent)"
        strokeWidth="3"
      />
    </>
  ),
  "stage-presence": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M84 58v26M172 58v26M72 84l30 48M184 84l-30 48" stroke="var(--accent)" strokeWidth="7" strokeOpacity="0.3" />
      <circle cx="128" cy="126" r="24" fill="var(--accent)" fillOpacity="0.45" stroke="var(--accent)" strokeWidth="5" />
      <rect
        x="118"
        y="146"
        width="20"
        height="54"
        rx="10"
        fill="var(--accent)"
        fillOpacity="0.45"
        stroke="var(--accent)"
        strokeWidth="5"
      />
      <path d="M128 200v14M112 214h32" stroke="var(--accent)" strokeWidth="5" />
      <path
        d="M62 152l5 13 13 5-13 5-5 13-5-13-13-5 13-5zM194 146l5 13 13 5-13 5-5 13-5-13-13-5 13-5z"
        fill="var(--accent)"
        fillOpacity="0.5"
      />
    </>
  ),
  visual: (
    <>
      <defs>
        <radialGradient id="termbadge-visual-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="128" cy="128" r="50" fill="url(#termbadge-visual-glow)" />
      <path d="M128 128 98 84a52 52 0 0 1 30-16z" fill="var(--accent)" />
      <path d="M128 128 172 98a52 52 0 0 1 16 30z" fill="var(--accent)" fillOpacity="0.75" />
      <path d="M128 128 154 172a52 52 0 0 1-30 16z" fill="var(--accent)" fillOpacity="0.55" />
      <path d="M128 128 84 154a52 52 0 0 1-16-30z" fill="var(--celadon)" fillOpacity="0.7" />
      <circle cx="128" cy="128" r="10" fill="var(--card)" stroke="var(--accent)" strokeWidth="3" />
    </>
  ),
  bias: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M128 182L78 132c-22-22-7-56 24-56 13 0 21 8 26 15 5-7 13-15 26-15 31 0 46 34 24 56z"
        fill="var(--celadon)"
        fillOpacity="0.35"
        stroke="var(--celadon)"
        strokeWidth="6"
      />
      <path
        d="M128 150c-12 0-22-8-22-18 0-9 8-16 18-16 6 0 10 3 14 7 4-4 8-7 14-7 10 0 18 7 18 16 0 10-10 18-22 18z"
        fill="var(--celadon)"
        stroke="var(--celadon)"
        strokeWidth="4"
      />
      <circle cx="178" cy="76" r="7" fill="var(--accent)" />
    </>
  ),
};

export default function TermBadge({
  term,
  className,
}: {
  term: TermBadgeName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 256 256" fill="none" aria-hidden="true" className={className}>
      {BADGE_GLYPHS[term]}
    </svg>
  );
}
