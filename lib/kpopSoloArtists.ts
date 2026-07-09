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
];

export function getKpopSoloArtists() {
  return KPOP_SOLO_ARTISTS;
}
