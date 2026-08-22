type TermBadgeName =
  | "fancam"
  | "center"
  | "ending-fairy"
  | "killing-part"
  | "point-choreography"
  | "stage-presence"
  | "visual"
  | "bias"
  | "comeback"
  | "debut"
  | "concept"
  | "title-track"
  | "music-show"
  | "waterbomb"
  | "close-up-fancam"
  | "dance-practice"
  | "aegyo"
  | "bias-wrecker"
  | "rookie-group"
  | "maknae"
  | "photocard";

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
  comeback: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle
        cx="128"
        cy="128"
        r="54"
        stroke="var(--accent)"
        strokeWidth="10"
        strokeDasharray="282.7 56.6"
        transform="rotate(-60 128 128)"
      />
      <path d="M140 64L162 84L152 96Z" fill="var(--accent)" />
      <path
        d="M182 66L188.3 77.7L200 84L188.3 90.3L182 102L175.7 90.3L164 84L175.7 77.7Z"
        fill="var(--gold)"
      />
      <path
        d="M200 108L203.5 114.5L210 118L203.5 121.5L200 128L196.5 121.5L190 118L196.5 114.5Z"
        fill="var(--gold)"
      />
    </>
  ),
  debut: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <rect
        x="70"
        y="86"
        width="86"
        height="100"
        rx="10"
        stroke="var(--celadon)"
        strokeWidth="6"
        transform="rotate(-7 113 136)"
      />
      <rect
        x="86"
        y="78"
        width="86"
        height="100"
        rx="10"
        fill="var(--card)"
        stroke="var(--gold)"
        strokeWidth="6"
        transform="rotate(4 129 128)"
      />
      <rect x="96" y="88" width="76" height="66" rx="6" fill="var(--accent)" fillOpacity="0.14" />
      <path d="M100 148l20-24 14 16 12-14 20 22z" fill="var(--accent)" fillOpacity="0.4" />
      <circle cx="150" cy="102" r="8" fill="var(--gold)" fillOpacity="0.6" />
      <circle cx="104" cy="168" r="6" fill="var(--accent)" />
      <circle cx="124" cy="168" r="6" fill="var(--gold)" />
      <circle cx="144" cy="168" r="6" fill="var(--celadon)" />
      <path
        d="M160 66c-10-8-24-2-24 10 0 10 24 26 24 26s24-16 24-26c0-12-14-18-24-10z"
        fill="var(--accent)"
      />
    </>
  ),
  concept: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <rect
        x="62"
        y="58"
        width="132"
        height="16"
        rx="8"
        fill="var(--gold)"
        fillOpacity="0.5"
        stroke="var(--gold)"
        strokeWidth="4"
      />
      <path
        d="M70 74c4 34 4 76-6 108h30c8-32 6-76 0-108z"
        fill="var(--accent)"
        fillOpacity="0.25"
        stroke="var(--accent)"
        strokeWidth="6"
      />
      <path
        d="M186 74c-4 34-4 76 6 108h-30c-8-32-6-76 0-108z"
        fill="var(--accent)"
        fillOpacity="0.25"
        stroke="var(--accent)"
        strokeWidth="6"
      />
      <path d="M128 108l10 24 24 10-24 10-10 24-10-24-24-10 24-10z" stroke="var(--gold)" strokeWidth="6" />
      <path d="M64 190h128" stroke="var(--celadon)" strokeWidth="6" strokeOpacity="0.5" />
    </>
  ),
  "title-track": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M60 186h136l-14-20H74z"
        fill="var(--celadon)"
        fillOpacity="0.25"
        stroke="var(--accent)"
        strokeWidth="6"
      />
      <path d="M60 186v14h136v-14" stroke="var(--accent)" strokeWidth="6" />
      <g transform="rotate(-18 118 130)">
        <rect
          x="100"
          y="70"
          width="36"
          height="52"
          rx="18"
          fill="var(--accent)"
          fillOpacity="0.35"
          stroke="var(--accent)"
          strokeWidth="6"
        />
        <path d="M118 122v34" stroke="var(--accent)" strokeWidth="6" />
        <path d="M100 156h36" stroke="var(--accent)" strokeWidth="6" />
      </g>
      <path
        d="M150 176h44v-30l16-8v46l-16-8h-44z"
        fill="var(--accent)"
        fillOpacity="0.3"
        stroke="var(--accent)"
        strokeWidth="6"
      />
      <circle cx="164" cy="164" r="6" fill="var(--card)" />
      <path d="M186 84l7 16 16 7-16 7-7 16-7-16-16-7 16-7z" fill="var(--gold)" />
    </>
  ),
  "music-show": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="150" cy="128" r="46" fill="var(--card)" stroke="var(--celadon)" strokeWidth="6" />
      <circle cx="150" cy="128" r="10" fill="var(--accent)" />
      <path d="M150 82a46 46 0 0 1 46 46" stroke="var(--celadon)" strokeWidth="6" strokeOpacity="0.5" />
      <circle cx="98" cy="172" r="18" fill="var(--accent)" fillOpacity="0.85" stroke="var(--accent)" strokeWidth="4" />
      <path d="M116 172V88l52-12v72" stroke="var(--accent)" strokeWidth="9" />
      <circle cx="152" cy="160" r="16" fill="var(--accent)" fillOpacity="0.85" stroke="var(--accent)" strokeWidth="4" />
      <path d="M148 60l8 13 11-17 11 17 8-13v18h-38z" fill="var(--gold)" />
    </>
  ),
  waterbomb: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M128 64c-24 36-46 62-46 86a46 46 0 0 0 92 0c0-24-22-50-46-86z"
        fill="var(--celadon)"
        fillOpacity="0.28"
        stroke="var(--accent)"
        strokeWidth="7"
      />
      <circle cx="116" cy="140" r="13" fill="var(--card)" opacity="0.85" />
      <circle cx="144" cy="130" r="7" fill="var(--card)" opacity="0.7" />
      <path
        d="M90 178c-6 8-6 16 0 22a11 11 0 0 0 16-16z"
        fill="var(--celadon)"
        fillOpacity="0.28"
        stroke="var(--accent)"
        strokeWidth="5"
      />
      <path d="M172 67L178 78L189 84L178 90L172 101L166 90L155 84L166 78Z" fill="var(--gold)" />
      <path
        d="M186 107L189.2 112.9L195 116L189.2 119.1L186 125L182.8 119.1L177 116L182.8 112.9Z"
        fill="var(--accent)"
      />
      <circle cx="100" cy="90" r="6" fill="var(--accent)" />
      <circle cx="86" cy="120" r="6" fill="var(--celadon)" />
    </>
  ),
  "close-up-fancam": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M70 84V66a6 6 0 0 1 6-6h18M186 84V66a6 6 0 0 0-6-6h-18M70 172v18a6 6 0 0 0 6 6h18M186 172v18a6 6 0 0 1-6 6h-18"
        stroke="var(--accent)"
        strokeWidth="7"
      />
      <circle cx="128" cy="128" r="54" stroke="var(--accent)" strokeWidth="9" strokeDasharray="299 40" />
      <path d="M90 178c6-30 20-46 36-46s30 16 36 46z" fill="var(--celadon)" />
      <circle cx="126" cy="106" r="25" fill="var(--celadon)" />
      <rect x="170" y="99" width="26" height="26" rx="7" fill="var(--gold)" />
    </>
  ),
  "dance-practice": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="128" cy="82" r="15" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M128 97v42M128 109l-36 22M128 109l38 8M128 139l-22 46M128 139l30 42"
        stroke="var(--accent)"
        strokeWidth="8"
      />
      <path d="M58 124h26" stroke="var(--gold)" strokeWidth="7" />
      <path d="M58 124l14-8M58 124l14 8" stroke="var(--gold)" strokeWidth="7" />
      <path d="M60 108h16M64 96h12" stroke="var(--celadon)" strokeWidth="6" strokeOpacity="0.6" />
      <path d="M198 124h-26" stroke="var(--gold)" strokeWidth="7" />
      <path d="M198 124l-14-8M198 124l-14 8" stroke="var(--gold)" strokeWidth="7" />
      <path d="M196 108h-16M192 96h-12" stroke="var(--celadon)" strokeWidth="6" strokeOpacity="0.6" />
      <path d="M56 196h58M144 196h58" stroke="var(--celadon)" strokeWidth="6" strokeOpacity="0.4" />
    </>
  ),
  aegyo: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M92 122c6-14 26-14 32 0" stroke="var(--accent)" strokeWidth="7" fill="none" />
      <path d="M164 122c6-14 26-14 32 0" stroke="var(--accent)" strokeWidth="7" fill="none" />
      <path d="M116 152c4 10 8 10 12 10s8 0 12-10" stroke="var(--accent)" strokeWidth="7" fill="none" />
      <ellipse cx="94" cy="148" rx="14" ry="9" fill="var(--accent)" fillOpacity="0.22" />
      <ellipse cx="194" cy="148" rx="14" ry="9" fill="var(--accent)" fillOpacity="0.22" />
      <circle cx="89" cy="145" r="2.4" fill="var(--card)" />
      <circle cx="99" cy="151" r="2" fill="var(--card)" />
      <circle cx="189" cy="145" r="2.4" fill="var(--card)" />
      <circle cx="199" cy="151" r="2" fill="var(--card)" />
      <path
        d="M74,91.6 L71.5,89.4 C62.8,81.4 57,76.2 57,69.8 C57,64.5 61.1,60.4 66.4,60.4 C69.3,60.4 72.2,61.8 74,64 C75.9,61.8 78.7,60.4 81.7,60.4 C86.9,60.4 91,64.5 91,69.8 C91,76.2 85.2,81.4 76.5,89.4 Z"
        fill="var(--gold)"
      />
      <path d="M108,56 L112,62 L118,66 L112,70 L108,76 L104,70 L98,66 L104,62 Z" fill="var(--gold)" />
    </>
  ),
  "bias-wrecker": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M100,139.2 L97,136.5 C86.1,126.7 79,120.2 79,112.3 C79,105.8 84.1,100.7 90.55,100.7 C94.2,100.7 97.7,102.4 100,105.1 C102.3,102.4 105.8,100.7 109.45,100.7 C115.9,100.7 121,105.8 121,112.3 C121,120.2 113.9,126.7 103,136.5 Z"
        fill="var(--celadon)"
      />
      <path
        d="M138,149.5 L135.2,147 C125.5,138.1 119,132.2 119,125.05 C119,119.2 123.6,114.6 129.45,114.6 C132.8,114.6 135.9,116.1 138,118.6 C140.1,116.1 143.2,114.6 146.55,114.6 C152.4,114.6 157,119.2 157,125.05 C157,132.2 150.5,138.1 140.8,147 Z"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="6"
      />
      <path d="M155 84L166 78L172 67L178 78L189 84L178 90L172 101L166 90Z" fill="var(--gold)" />
      <circle cx="145" cy="70" r="4" fill="var(--gold)" />
      <circle cx="196" cy="98" r="4" fill="var(--gold)" />
    </>
  ),
  "rookie-group": (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M50,168 c3,-16 12,-24 26,-24 s22,8 26,24z" fill="var(--celadon)" />
      <circle cx="76" cy="132" r="16" fill="var(--celadon)" />
      <path d="M154,168 c3,-16 12,-24 26,-24 s22,8 26,24z" fill="var(--celadon)" />
      <circle cx="180" cy="132" r="16" fill="var(--celadon)" />
      <path d="M92,168 c4,-22 17,-33 36,-33 s32,11 36,33" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="128" cy="118" r="22" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M180 66l7 16 16 7-16 7-7 16-7-16-16-7 16-7z" fill="var(--gold)" />
    </>
  ),
  photocard: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <rect
        x="66"
        y="70"
        width="82"
        height="114"
        rx="14"
        fill="var(--card)"
        stroke="var(--celadon)"
        strokeWidth="6"
        transform="rotate(-9 107 127)"
      />
      <rect
        x="104"
        y="66"
        width="82"
        height="114"
        rx="14"
        fill="var(--card)"
        stroke="var(--accent)"
        strokeWidth="7"
        transform="rotate(7 145 123)"
      />
      <circle cx="145" cy="104" r="19" fill="var(--accent)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="4" />
      <path d="M120 154c6-15 20-22 33-15" stroke="var(--accent)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M184 82l7 16 16 7-16 7-7 16-7-16-16-7 16-7z" fill="var(--gold)" />
    </>
  ),
  maknae: (
    <>
      <rect x="34" y="34" width="188" height="188" rx="46" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M50,170 c4,-24 18,-36 32,-36 s28,12 32,36" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="82" cy="118" r="22" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M142,170 c4,-24 18,-36 32,-36 s28,12 32,36" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="174" cy="118" r="22" fill="var(--card)" stroke="var(--accent)" strokeWidth="7" />
      <path d="M111,188 c2,-13 9,-19 17,-19 s15,6 17,19" fill="var(--celadon)" />
      <circle cx="128" cy="158" r="13" fill="var(--celadon)" />
      <path d="M128,126 L132,132 L138,136 L132,140 L128,146 L124,140 L118,136 L124,132 Z" fill="var(--gold)" />
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
