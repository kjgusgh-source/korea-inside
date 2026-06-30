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
        note: "fromis_9’s soft visual charm — calm expressions, natural brightness, and a stage presence that grows on you quietly.",
        pageLabel: "Who is Lee Nagyung?",
        appealTitle: "Why flover notices her natural charm",
        watchTitle: "What to notice in a Nagyung fancam",
        contextTitle: "Why Nagyung fits fromis_9’s softer brightness",
        intro:
          "Lee Nagyung is one of the fromis_9 members who can catch your eye without pushing too hard. fromis_9 fans are called flover, and many flover first notice Nagyung because of her visual image. But the longer you watch her, the more her charm feels calm and natural rather than flashy. If Song Hayoung has that bright Habbang energy with a strong vocal-and-dance contrast, Nagyung shows a softer kind of fromis_9 charm: clean expressions, gentle brightness, and a stage mood that feels easy to stay with.",
        whyFansLike: [
          "flover often like Nagyung because her charm does not feel forced. She can stand out visually, but her expressions usually feel relaxed and natural.",
          "Her stage image fits fromis_9’s bright and fresh mood well. She adds a calm visual softness instead of making the performance feel too intense.",
          "She is also the kind of member who becomes more memorable after a few clips. At first you may notice her face, but later you start noticing the small smiles, eye contact, and gentle timing.",
        ],
        watchPoints: [
          "Watch her expression during the smaller moments, not only during the main part of the choreography.",
          "Pay attention to how naturally she holds the camera. Nagyung often feels noticeable without making the performance feel heavy.",
          "Compare her with Song Hayoung’s guide if you already watched it. Hayoung often feels bright and playful with a strong skill contrast, while Nagyung feels calmer, softer, and more quietly visual.",
        ],
        koreanExpression: {
          hangul: "청량",
          romanization: "cheongnyang",
          meaning: "fresh, clear, and refreshing; often used for a bright and clean mood",
          note:
            "청량 is a Korean word people use for something that feels fresh and clear, like a cool drink or a bright summer mood. In K-pop, fans often use it for songs, styling, or idols who give a clean and refreshing feeling. Nagyung fits this word because her stage charm often feels soft, bright, and easy to watch.",
        },
        culturalContext:
          "fromis_9’s charm is not only about big impact. A lot of their appeal comes from freshness, friendliness, and small details that feel natural. Nagyung helps show that side of the group. She may first be noticed as a visual member, but her real appeal is how calmly she keeps the stage mood bright. For new viewers, her fancam is useful because it shows that K-pop visual charm can be gentle and approachable, not only dramatic or untouchable.",
        relatedMediaIds: ["lee-nagyung-fromis9-fancam"],
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
        id: "an-yujin",
        name: "An Yujin",
        note: "IVE’s leader-like spark — bright energy, clean performance, and the kind of confidence that feels natural rather than distant.",
        pageLabel: "Who is An Yujin?",
        appealTitle: "Why DIVE trusts her energy",
        watchTitle: "What to notice in a Yujin fancam",
        contextTitle: "Why Yujin gives IVE a different kind of confidence",
        intro:
          "An Yujin gives IVE a different kind of confidence from Jang Wonyoung. IVE fans are called DIVE, and many DIVE see Yujin as the member who brings a more active, healthy, and grounded energy to the group. If Wonyoung often feels elegant and camera-perfect, Yujin feels more like the spark that keeps the stage moving. She can look polished, but she rarely feels distant.",
        whyFansLike: [
          "DIVE often like Yujin because her confidence feels natural. She does not always need to look untouchable; sometimes her charm comes from looking relaxed, bright, and fully present.",
          "Her stage energy fits IVE well because the group’s image is built around self-confidence. Yujin adds a more lively and direct version of that confidence.",
          "She also has the kind of presence that makes people trust the stage. Even when the performance is playful or fast, she looks steady, focused, and comfortable leading the mood.",
        ],
        watchPoints: [
          "Watch how she uses her smile. Yujin’s expressions often feel open and energetic, which makes the stage feel less cold and more alive.",
          "Pay attention to her posture and timing during transitions. She often keeps the performance clean without making it look too stiff.",
          "Compare her with Wonyoung’s style if you already watched Wonyoung’s guide. Wonyoung often shows IVE’s elegant confidence, while Yujin shows a brighter, more grounded confidence.",
        ],
        koreanExpression: {
          hangul: "리더미",
          romanization: "rideo-mi",
          meaning: "leader-like charm or leader energy",
          note:
            "리더 means leader, and 미 is often added in Korean fan slang to mean a certain kind of charm or vibe. 리더미 is used when someone naturally gives a steady, responsible, or reliable feeling, even without saying much.",
        },
        culturalContext:
          "IVE’s confidence does not come from only one member or one image. Wonyoung often represents the elegant, polished side of the group, while Yujin helps make IVE feel more active, direct, and easy to connect with. That balance matters. For new viewers, Yujin can make IVE feel less like a distant concept and more like a group with real energy behind the confidence.",
        relatedMediaIds: ["an-yujin-ive-fancam"],
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
        note: "IVE’s soft unique color — calm expressions, cute charm, and a rap tone that makes her stand out without trying too hard.",
        pageLabel: "Who is Rei?",
        appealTitle: "Why DIVE remembers her unique color",
        watchTitle: "What to notice in a Rei fancam",
        contextTitle: "Why Rei gives IVE a softer side",
        intro:
          "Rei brings a different kind of charm to IVE. IVE fans are called DIVE, and many DIVE like Rei because she does not feel like a copy of the group’s more polished image. Jang Wonyoung often shows IVE’s elegant confidence, and An Yujin brings bright leader energy. Rei feels softer, calmer, and a little more unexpected. Her charm is not loud, but once you notice her tone, expressions, and cute way of carrying herself, she becomes easy to remember.",
        whyFansLike: [
          "DIVE often like Rei because her charm feels unique inside IVE. She has a soft and slightly dreamy mood that makes her stand out from the group’s sharper confidence.",
          "Her voice and rap tone are a big part of her color. Even when her part is short, it can feel memorable because her delivery has a different texture.",
          "She also has a cute, natural character that fans enjoy. It does not feel like forced aegyo; it feels more like a calm, slightly shy charm that appears in small moments.",
        ],
        watchPoints: [
          "Watch her expressions during transitions. Rei often stands out through small, calm details rather than big dramatic reactions.",
          "Pay attention to her tone and rhythm when her part comes in. Her delivery can change the texture of the song for a moment.",
          "Compare her with Wonyoung and Yujin if you already watched their guides. Wonyoung feels elegant, Yujin feels bright and grounded, while Rei gives IVE a softer and more unique color.",
        ],
        koreanExpression: {
          hangul: "음색",
          romanization: "eumsaek",
          meaning: "vocal tone or color; the unique sound of someone’s voice",
          note:
            "음색 literally means the color of a sound. Korean fans use this word when a singer or rapper has a voice that feels easy to recognize. With Rei, 음색 fits because her voice and rap tone help her stand out inside IVE without needing to overpower the stage.",
        },
        culturalContext:
          "IVE’s image is often described through confidence, elegance, and a polished stage mood. Rei adds another layer to that. She shows that a member can stand out not only by being the strongest center or the loudest performer, but by having a clear personal color. For new viewers, Rei is useful because she makes IVE feel more varied: still confident, but also softer, cuter, and more individual.",
        relatedMediaIds: ["rei-ive-fancam"],
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
  note: "aespa’s quiet detail-maker — clean expressions, clear vocal color, and a calm stage charm that becomes stronger the more you watch.",
  pageLabel: "Who is Winter?",
  appealTitle: "Why MY keeps noticing the small details",
  watchTitle: "What to notice in a Winter fancam",
  contextTitle: "Why Winter balances aespa’s sharper image",
  intro:
    "Winter has a different kind of charm from Karina. aespa fans are called MY, and many MY like Winter because she does not always need to look intense to stand out. Karina often gives aespa a strong, futuristic first impression, while Winter can make the group feel cleaner and more minimal. Her expressions are usually smaller, but that is why people replay her clips — the details are easy to miss the first time.",
  whyFansLike: [
    "Winter’s charm often feels calm rather than loud. She can look almost expressionless for a second, then change the mood with one small glance or smile.",
    "Her vocal color is one of the things fans notice quickly. It has a clear, bright feeling that fits aespa’s sharp sound without making the stage feel too heavy.",
    "She also gives aespa a different kind of balance. While the group’s concept can feel futuristic and intense, Winter’s presence can make it feel simpler, cleaner, and easier to watch.",
  ],
  watchPoints: [
    "Watch her small facial changes. Winter’s charm often comes from tiny shifts, not big reactions.",
    "Pay attention to her timing. Even when the movement looks simple, she often keeps the line clean and controlled.",
    "Compare her with Karina’s stage style. Karina often feels powerful and front-facing, while Winter can feel quieter but surprisingly memorable.",
  ],
  koreanExpression: {
    hangul: "담백한 매력",
    romanization: "dambaekhan maeryeok",
    meaning: "a clean, simple charm that does not feel overdone",
    note:
      "담백하다 is a Korean word often used for food that is clean and not too heavy, but people also use it for a person’s style or charm. For Winter, 담백한 매력 fits because her stage appeal often feels neat, calm, and quietly clear rather than dramatic.",
  },
  culturalContext:
    "aespa’s image is usually strong, sleek, and futuristic. Winter helps that image feel less one-note. She does not have to dominate the screen in a loud way; instead, she gives the group a cleaner texture. For new viewers, a Winter fancam is useful because it shows that aespa’s charm is not only about intensity. Sometimes it is also about restraint, timing, and the small details that make a performance feel polished.",
  relatedMediaIds: ["winter-aespa-fancam"],
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
        note: "BTS’s emotional performer — known for elegant dance lines, expressive details, and a stage presence that feels soft and intense at once.",
        pageLabel: "Who is Jimin?",
        appealTitle: "Why ARMY feels his performance, not just watches it",
        watchTitle: "What to notice in a Jimin fancam",
        contextTitle: "Why Jimin shows the emotional side of BTS performance",
        intro:
          "Jimin is one of the BTS members who makes performance feel emotional before you even understand the lyrics. BTS fans are called ARMY, and many ARMY talk about Jimin not only as a strong dancer, but as someone who can make movement feel like a feeling. Jung Kook often shows the growth of BTS’s golden maknae, while Jimin shows another side of the group: softness, tension, elegance, and emotional focus all happening on the same stage.",
        whyFansLike: [
          "ARMY often notice Jimin’s dance line first. His movements can look soft and light, but they still have control underneath, which makes the stage feel delicate without feeling weak.",
          "His facial expressions are a big part of his charm. He does not only perform the choreography; he often makes the mood of the song visible through his eyes, timing, and small changes in expression.",
          "Jimin’s stage presence feels emotional in a very direct way. Even when the performance is powerful, there is often a vulnerable or graceful feeling that makes people keep watching.",
        ],
        watchPoints: [
          "Watch his hands, shoulders, and neck line. Jimin’s details often make the choreography feel more fluid and expressive.",
          "Pay attention to how his expression changes with the mood of the song. His face often follows the emotion, not just the beat.",
          "Compare him with Jung Kook’s style if you already watched Jung Kook’s guide. Jung Kook often feels steady and athletic, while Jimin often feels more emotional and dance-line focused.",
        ],
        koreanExpression: {
          hangul: "춤선",
          romanization: "chumseon",
          meaning: "dance line; the visible shape and flow of someone’s movement while dancing",
          note:
            "춤 means dance, and 선 means line. Korean fans use 춤선 when they talk about how a dancer’s body line looks during movement. With Jimin, this word fits because fans often notice the flow of his arms, shoulders, neck, and overall movement, not only the big dance points.",
        },
        culturalContext:
          "In K-pop, dancing is not only about matching the choreography. Fans also talk about texture: how heavy, light, sharp, soft, elegant, or emotional a member’s movement feels. Jimin is a good example of that. His fancams help new viewers understand why fans care about dance lines and facial expression so much. He shows that a stage can feel powerful without losing softness, and emotional without becoming too dramatic.",
        relatedMediaIds: ["jimin-bts-fancam"],
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
        note: "SEVENTEEN’s warm visual presence — tall, bright, and surprisingly friendly for someone who stands out so easily.",
        pageLabel: "Who is Mingyu?",
        appealTitle: "Why CARAT sees more than just a visual",
        watchTitle: "What to notice in a Mingyu fancam",
        contextTitle: "Why Mingyu makes SEVENTEEN feel approachable",
        intro:
          "Mingyu is one of the SEVENTEEN members people often notice quickly, even before they know the group well. SEVENTEEN fans are called CARAT, and many CARAT understand why new viewers first react to his height, visuals, and strong screen presence. But the reason fans stay with Mingyu is not only that he looks impressive. His charm is that he can look like a classic K-pop visual on stage, then feel warm, funny, and surprisingly approachable once you see more of him.",
        whyFansLike: [
          "CARAT often like Mingyu because his presence is easy to notice, but it does not feel cold. He can fill the screen without making the stage feel distant.",
          "His charm works well inside SEVENTEEN because the group has a friendly and energetic image. Mingyu adds a big visual impact, but he still feels like part of the team’s warm atmosphere.",
          "There is also a relaxed confidence in the way he performs. He does not always need to push too hard to stand out; sometimes his size, timing, and open expression already do a lot of the work.",
        ],
        watchPoints: [
          "Watch how he carries his height on stage. Mingyu naturally draws attention, but the important part is how relaxed he looks while doing it.",
          "Pay attention to his smile and expression between bigger moments. His warmth often comes through in small, casual-looking details.",
          "Compare him with Hoshi’s style if you already watched Hoshi’s guide. Hoshi often pushes the stage forward with performance energy, while Mingyu gives the stage a bigger and warmer visual presence.",
        ],
        koreanExpression: {
          hangul: "피지컬",
          romanization: "pijikeol",
          meaning: "physical presence; often used for height, proportions, or body frame",
          note:
            "피지컬 comes from the English word physical, but Korean fans use it a lot when talking about idols with strong height, proportions, or overall body presence. With Mingyu, this word fits because he stands out physically, but his warm image keeps that presence from feeling too intimidating.",
        },
        culturalContext:
          "In K-pop, a visual member is not only someone who looks good in photos. Fans also notice how that member changes the feeling of a group: whether they make the stage feel elegant, bright, powerful, distant, or friendly. Mingyu is useful for new viewers because he shows a warmer version of visual presence. He stands out immediately, but the more you watch him, the more his easygoing and team-friendly charm becomes part of the appeal.",
        relatedMediaIds: ["mingyu-seventeen-fancam"],
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