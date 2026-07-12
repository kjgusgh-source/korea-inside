export type KpopSoloArtist = {
  id: string;
  name: string;
  note: string;
  description: string;
  href: string;
  tags: string[];
};

export const KPOP_SOLO_ARTISTS: KpopSoloArtist[] = [
  {
    id: "kwon-eunbi",
    name: "Kwon Eunbi",
    note: "Solo artist · Former IZ*ONE member",
    description:
      "Known for WATERBOMB Korea, confident summer festival stages, and the viral performance image that helped more casual fans recognize her as a solo artist.",
    href: "/kpop/kwon-eunbi-waterbomb-fancam-spotlight",
    tags: ["Solo artist", "Former IZ*ONE", "WATERBOMB", "Festival spotlight"],
  },
  {
    id: "choi-yena",
    name: "Choi Yena",
    note: "Solo artist · Former IZ*ONE member",
    description:
      "Known for bright solo stages, anime-like idol energy, and close-up fancams where her playful expressions are easy to catch.",
    href: "/kpop/choi-yena-catch-catch-fancam-spotlight",
    tags: ["Solo artist", "Former IZ*ONE", "Close-up fancam", "Catch Catch"],
  },
  {
    id: "chuu",
    name: "CHUU",
    note: "Solo artist · Former LOONA member · Chuu Can Do It",
    description:
      "Known for her bright public image, solo music, Chuu Can Do It variety presence, and a fan-supported career turn after a difficult agency transition.",
    href: "/kpop/chuu-xo-my-cyberlove-fancam-spotlight",
    tags: ["Solo artist", "Former LOONA", "Fancam", "Chuu Can Do It"],
  },
];

export function getKpopSoloArtists() {
  return KPOP_SOLO_ARTISTS;
}
