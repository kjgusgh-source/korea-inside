export type KpopGroupCategory = "girl-groups" | "boy-groups";

export type KpopMember = {
  id: string;
  name: string;
  note: string;
  intro?: string;
  whyFansLike?: string[];
  watchPoints?: string[];
  koreanExpression?: {
    hangul: string;
    romanization: string;
    meaning: string;
    note: string;
  };
  culturalContext?: string;
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
        note: "fromis_9’s bright all-rounder — known for clear vocals, sharp dancing, and the soft charm fans call Habbang.",
        pageLabel: "Who is Song Hayoung?",
        appealTitle: "Why flovers keep talking about her",
        watchTitle: "What to look for in her fancam",
        contextTitle: "Why this clip shows her role in fromis_9",
        intro:
  "Song Hayoung is one of those fromis_9 members who becomes more interesting the more you pay attention. fromis_9 fans are called flovers, and many flovers connect her with the nickname Habbang — a soft, playful image that fits her bright smile. But on stage, she is not just the cute member in the group. She is also one of the members who helps carry fromis_9 through both vocals and dance. That gap between her light, friendly image and her solid stage skill is a big part of why fans keep coming back to her clips.",
        whyFansLike: [
          "A lot of flovers like Hayoung because she has a natural kind of charm. She can look playful and harmless one second, then suddenly feel completely locked in once the performance starts.",
          "Her voice has a clear, bright color that stands out in fromis_9 songs without feeling too heavy. It fits the group’s fresh and emotional sound really well.",
          "She is also strong as a dancer, so even when a fancam is focused on her face, the performance does not feel empty. Her timing, posture, and little movements still make the clip feel alive.",
        ],
        watchPoints: [
          "Watch the change between her off-stage image and her stage expression. That contrast is one of the easiest ways to understand why fans like her.",
          "Pay attention to her eyes and smile during the small in-between moments, not only during the main killing part.",
          "Even in an eolppak fancam, try not to look only at her face. Notice how her shoulders, rhythm, and timing still follow the performance closely.",
        ],
        koreanExpression: {
          hangul: "얼빡직캠",
          romanization: "eolppak-jikcam",
          meaning: "a close-up fancam where an idol’s face fills most of the screen",
          note:
            "얼빡 is casual Korean fan slang for a very close face shot, and 직캠 means fancam. Fans watch this kind of video because tiny expressions become easier to catch — a quick smile, a small glance, or the moment an idol’s mood changes with the song.",
        },
        culturalContext:
          "For fromis_9 fans, Hayoung is not only remembered for one big viral moment. Her appeal is built through repeated small details: the clear voice, the bright smile, the surprisingly firm dance line, and the way she can make a close-up clip feel warm without overdoing it. That is why an eolppak fancam works well for her. It gives new viewers a simple way to see the contrast flovers already know — soft and playful on the surface, but steady and skilled on stage.",
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