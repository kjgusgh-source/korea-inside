export type KpopGroupCategory = "girl-groups" | "boy-groups";

export type KpopMember = {
  id: string;
  name: string;
  note: string;
  relatedMediaIds?: string[];
};

export type KpopGroup = {
  id: string;
  name: string;
  category: KpopGroupCategory;
  description: string;
  members: KpopMember[];
  starterTags: string[];
};

// Starter sample data.
// Later, we can update names, pages, and videos carefully.
export const KPOP_GROUPS: KpopGroup[] = [
  {
    id: "fromis-9",
    name: "fromis_9",
    category: "girl-groups",
    description:
      "Bright performances, expressive stages, and member-focused fancams that are easy for new fans to explore.",
    members: [
      {
        id: "song-hayoung",
        name: "Song Hayoung",
        note: "Facecams, bright expressions, and small stage details.",
        relatedMediaIds: ["kpop-fancam-culture"],
      },
      {
        id: "lee-nagyung",
        name: "Lee Nagyung",
        note: "Visual moments, stage presence, and fan-favorite clips.",
      },
      {
        id: "park-jiwon",
        name: "Park Jiwon",
        note: "Vocals, performance moments, and emotional stage clips.",
      },
    ],
    starterTags: ["Facecam", "Stage", "Expressions"],
  },
  {
    id: "ive",
    name: "IVE",
    category: "girl-groups",
    description:
      "Glossy stages, viral moments, and idol performances that often travel far beyond Korea.",
    members: [
      {
        id: "ahn-yujin",
        name: "Ahn Yujin",
        note: "Performance clips, variety moments, and confident stages.",
      },
      {
        id: "jang-wonyoung",
        name: "Jang Wonyoung",
        note: "Visual moments, ending fairy clips, and stage styling.",
      },
      {
        id: "rei",
        name: "Rei",
        note: "Rap parts, cute moments, and fan-loved clips.",
      },
    ],
    starterTags: ["Ending fairy", "Viral clips", "Stage styling"],
  },
  {
    id: "aespa",
    name: "aespa",
    category: "girl-groups",
    description:
      "High-concept visuals, sharp performances, and stage moments with a strong digital style.",
    members: [
      {
        id: "karina",
        name: "Karina",
        note: "Performance focus, visual clips, and powerful stage moments.",
      },
      {
        id: "winter",
        name: "Winter",
        note: "Vocals, expressions, and clean performance clips.",
      },
      {
        id: "ningning",
        name: "Ningning",
        note: "Vocal highlights, stage details, and live performance moments.",
      },
    ],
    starterTags: ["Performance", "Concept", "Fancam"],
  },
  {
    id: "bts",
    name: "BTS",
    category: "boy-groups",
    description:
      "Global stages, fan culture, and performances that opened K-pop to many first-time listeners.",
    members: [
      {
        id: "jungkook",
        name: "Jung Kook",
        note: "Live stages, dance clips, and vocal performance moments.",
      },
      {
        id: "v",
        name: "V",
        note: "Expression-focused clips, visuals, and stage mood.",
      },
      {
        id: "jimin",
        name: "Jimin",
        note: "Dance lines, performance details, and emotional stages.",
      },
    ],
    starterTags: ["Live stage", "Dance", "Global fandom"],
  },
  {
    id: "seventeen",
    name: "SEVENTEEN",
    category: "boy-groups",
    description:
      "Sharp choreography, group energy, and performance videos that show how organized K-pop stages can feel.",
    members: [
      {
        id: "hoshi",
        name: "Hoshi",
        note: "Dance-focused clips, choreography details, and stage power.",
      },
      {
        id: "mingyu",
        name: "Mingyu",
        note: "Visual clips, stage moments, and fan-favorite scenes.",
      },
      {
        id: "wonwoo",
        name: "Wonwoo",
        note: "Low-tone parts, calm presence, and performance clips.",
      },
    ],
    starterTags: ["Choreography", "Group stage", "Performance"],
  },
];

export function getKpopGroups() {
  return KPOP_GROUPS;
}

export function getKpopGroupsByCategory(category: KpopGroupCategory) {
  return KPOP_GROUPS.filter((group) => group.category === category);
}

export function getKpopGroupById(groupId: string) {
  return KPOP_GROUPS.find((group) => group.id === groupId);
}

export function getKpopMemberById(groupId: string, memberId: string) {
  const group = getKpopGroupById(groupId);

  if (!group) {
    return undefined;
  }

  return group.members.find((member) => member.id === memberId);
}