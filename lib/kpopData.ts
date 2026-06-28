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
        note: "IVE’s unmistakable center of attention — polished, elegant, and very aware of how to use the camera.",
        pageLabel: "Who is Jang Wonyoung?",
        appealTitle: "Why DIVE keeps watching her",
        watchTitle: "What to notice in a Wonyoung fancam",
        contextTitle: "Why she fits IVE so well",
        intro:
          "Jang Wonyoung is one of the easiest IVE members to recognize, even for people who are new to K-pop. IVE fans are called DIVE, and many DIVE see Wonyoung as a member who understands the camera almost too well. She does not only stand out because she is tall or pretty. Her real strength is how polished she makes every small moment feel — the way she looks into the camera, holds her posture, smiles at the right second, and makes a stage feel like it was built around confidence.",
        whyFansLike: [
          "Wonyoung has the kind of presence that makes people look at her first, but what keeps fans watching is how controlled it feels. She rarely looks like she is just waiting for her part.",
          "Her charm fits IVE’s identity really well. IVE songs often carry a confident, elegant, almost untouchable feeling, and Wonyoung naturally makes that mood easier to understand.",
          "A lot of fans also notice how professional she feels. She has been watched by the public since she was very young, so her stage image feels carefully built, not accidental.",
        ],
        watchPoints: [
          "Watch her eye contact. Wonyoung often uses the camera like part of the choreography, not just something recording her.",
          "Look at her posture between moves. Even when she is not doing the biggest dance point, she keeps the IVE mood alive.",
          "Pay attention to the small facial changes. Her expressions are usually clean and controlled, which is why short clips of her spread so easily.",
        ],
        koreanExpression: {
          hangul: "센터",
          romanization: "senteo",
          meaning: "center; the member who often draws the viewer’s attention in a group performance",
          note:
            "In K-pop, 센터 does not only mean standing in the middle. It often means the member who best delivers the group’s image at a certain moment. For Wonyoung, fans often connect this idea with her camera awareness, posture, and polished stage presence.",
        },
        culturalContext:
          "IVE’s image is built around confidence rather than cuteness alone. That is why Wonyoung feels so central to the group’s first impression. She gives new viewers an easy way to understand IVE’s mood: elegant, self-aware, and a little untouchable. For DIVE, her appeal is not just her visual image. It is the way she turns that image into performance — through timing, expression, and the calm confidence she brings to the stage.",
        relatedMediaIds: ["jang-wonyoung-ive-fancam"],
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
  note: "aespa’s leader — sharp stage presence, strong camera awareness, and a surprisingly warm off-stage charm.",
  pageLabel: "Who is Karina?",
  appealTitle: "Why MY can’t look away from her",
  watchTitle: "What to notice in a Karina fancam",
  contextTitle: "Why Karina feels like aespa’s front door",
  intro:
    "Karina is often the first aespa member people notice. aespa fans are called MY, and for many MY, Karina has a very specific kind of charm: she can look almost unreal on stage, but still feel warm and slightly awkward in a human way off stage. That contrast is important. In aespa, where the group image is futuristic, sharp, and a little otherworldly, Karina feels like the member who makes that concept easy to understand at first glance.",
  whyFansLike: [
    "A lot of MY talk about Karina’s ‘AI-like’ visual, but what makes her interesting is that she does not feel empty or cold. The stage image is sharp, but her personality outside the stage often feels softer and more playful.",
    "As aespa’s leader, she gives the group a clear center of gravity. Even when the concept is complicated — avatars, KWANGYA, futuristic styling — Karina makes the performance feel focused.",
    "Her dancing works well with aespa’s style. The movements are often clean, angular, and powerful, so her controlled posture and strong lines make the group’s sound easier to see with your eyes.",
  ],
  watchPoints: [
    "Watch how she uses stillness. Karina does not always need big movement to look powerful; sometimes the pause before a move is what makes her stand out.",
    "Pay attention to her eyes and head angles. In aespa stages, small camera-facing details can make the performance feel colder, sharper, or more intense.",
    "Try noticing the gap between her stage image and her off-stage charm. That contrast is one reason MY often describe her as both unreal and surprisingly relatable.",
  ],
  koreanExpression: {
    hangul: "냉미녀",
    romanization: "naeng-minyeo",
    meaning: "a cool-looking beauty; someone with a cold, elegant, sharp visual impression",
    note:
      "냉 means cold, and 미녀 means beauty. Fans often use this kind of word for idols who have a calm, sharp, or untouchable image. With Karina, the fun is that her stage image can feel very 냉미녀, while her off-stage personality often feels much warmer.",
  },
  culturalContext:
    "aespa is not a group built only around cuteness or simple freshness. Their image is more futuristic, sleek, and sometimes almost digital. Karina fits that world because she can make the concept look natural instead of forced. For new viewers, she often works like aespa’s front door: you see the sharp visual first, then slowly notice the leadership, the dance control, the camera sense, and the warmer personality underneath.",
  relatedMediaIds: ["karina-aespa-fancam"],
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
        id: "jung-kook",
        name: "Jung Kook",
        note: "BTS’s youngest member, main vocal presence, and the performer fans often call the golden maknae.",
        pageLabel: "Who is Jung Kook?",
        appealTitle: "Why ARMY watched him grow up on stage",
        watchTitle: "What to notice in a Jung Kook fancam",
        contextTitle: "Why his stage feels bigger than one role",
        intro:
          "Jung Kook is one of the easiest BTS members to introduce, but one of the hardest to explain simply. BTS fans are called ARMY, and many ARMY grew up watching him grow too — from the youngest member of the group into a performer who can carry a stage on his own. That is why his fancams feel different from a normal 'good singer, good dancer' clip. You are watching someone with years of BTS stage history behind every small move.",
        whyFansLike: [
          "ARMY often call Jung Kook the golden maknae, because he has always been known for doing many things well — singing, dancing, performing, sports, covers, and later solo music too.",
          "What makes him interesting is that his skill does not feel cold. Even when the performance is polished, there is still a young, sincere, slightly restless energy in the way he moves.",
          "His voice is a huge part of BTS’s emotional color, but his fancams also remind people that he is not only a vocalist. He performs with his whole body, not just with the microphone.",
        ],
        watchPoints: [
          "Watch how he keeps the energy alive even between the obvious highlight moments. Jung Kook rarely looks like he is just waiting for his part.",
          "Pay attention to the balance between power and softness. His movement can be sharp, but his expression often keeps the stage from feeling too hard.",
          "Try watching the clip with his BTS history in mind. For ARMY, part of the emotion is seeing the youngest member who once looked almost shy now owning the stage with confidence.",
        ],
        koreanExpression: {
          hangul: "황금막내",
          romanization: "hwanggeum-maknae",
          meaning: "golden youngest member; a maknae who seems good at almost everything",
          note:
            "막내 means the youngest member in a group. 황금 means golden. Fans use 황금막내 for Jung Kook because he became known as the youngest BTS member who could sing, dance, perform, and keep improving in many different areas.",
        },
        culturalContext:
          "In K-pop, the maknae is often seen as the youngest member who grows up in front of fans. Jung Kook is one of the clearest examples of that feeling. ARMY did not only watch a performer become famous; they watched a young member slowly become more confident, more skilled, and more independent. That history is why even a single fancam can carry more weight for fans. It is not just a stage clip. It is another small piece of a long growth story.",
        relatedMediaIds: ["jung-kook-bts-fancam"],
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
        note: "SEVENTEEN’s performance-team leader — tiger energy, sharp dancing, and playful stage control.",
        pageLabel: "Who is Hoshi?",
        appealTitle: "Why CARAT knows the stage changes when Hoshi turns on",
        watchTitle: "What to notice in a Hoshi fancam",
        contextTitle: "Why he feels so SEVENTEEN",
        intro:
          "Hoshi is one of the clearest ways to understand SEVENTEEN’s performance side. SEVENTEEN fans are called CARAT, and for many CARAT, Hoshi is the member who makes the group’s dance identity feel alive. He is the performance-team leader, but his charm is not only that he dances well. It is the way he switches on: playful and almost silly one moment, then suddenly sharp, intense, and completely locked into the stage.",
        whyFansLike: [
          "CARAT often connect Hoshi with tiger energy. It is partly a joke, partly a real description of how he performs — bright, loud, playful, and suddenly fierce when the music starts.",
          "As SEVENTEEN’s performance-team leader, he feels like someone who understands the whole shape of a stage, not only his own part. Even in a solo fancam, you can feel that group-performance mindset.",
          "His charm is the contrast. Off stage, he can feel funny, chaotic, and warm. On stage, the lines get sharper, the eyes change, and the performance feels much more controlled than his playful image might suggest.",
        ],
        watchPoints: [
          "Watch how quickly his expression changes when the performance starts. Hoshi often makes the switch from playful to intense feel almost instant.",
          "Pay attention to his shoulders, head angles, and timing. His dance does not only look powerful; it often feels very exact.",
          "Look for the moments where he seems to push the energy of the stage forward. That is one reason CARAT see him as more than just a good dancer.",
        ],
        koreanExpression: {
          hangul: "호랑해",
          romanization: "horanghae",
          meaning: "a playful Hoshi phrase mixing tiger and love",
          note:
            "Hoshi is strongly connected with tiger jokes and tiger imagery. 호랑해 sounds like 사랑해, which means 'I love you,' but it uses 호랑 from 호랑이, meaning tiger. It is a very Hoshi-like fan expression: funny, cute, and strangely serious at the same time.",
        },
        culturalContext:
          "SEVENTEEN is known for performance as a group, not just individual star power. That is why Hoshi’s role matters. He gives new viewers a way to understand how SEVENTEEN can feel playful and friendly, but still extremely sharp once the stage begins. For CARAT, Hoshi is not only the tiger guy or the funny member. He is one of the people who makes SEVENTEEN’s performance identity feel believable.",
        relatedMediaIds: ["hoshi-seventeen-fancam"],
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