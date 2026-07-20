export type KpopGroupCategory = "girl-groups" | "boy-groups";

export type KpopMemberProfileFact = {
  label: string;
  value: string;
};

export type KpopMember = {
  id: string;
  name: string;
  note: string;
  pageLabel?: string;
  appealTitle?: string;
  watchTitle?: string;
  contextTitle?: string;
  intro?: string;
  profileFacts?: KpopMemberProfileFact[];
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
        note: "fromis_9’s vocal spark — bright, expressive, and known for bringing strong singing energy into the group’s fresh sound.",
        pageLabel: "Who is Park Jiwon?",
        appealTitle: "Why flover trusts her voice",
        watchTitle: "What to notice in a Jiwon fancam",
        contextTitle: "Why Jiwon gives fromis_9 more vocal weight",
        intro:
          "Park Jiwon brings a lively vocal energy to fromis_9. fromis_9 fans are called flover, and many flover connect Jiwon with the kind of voice that can make a bright song feel fuller and more emotional. Song Hayoung often shows a playful Habbang charm with strong all-rounder skill, and Lee Nagyung gives fromis_9 a softer visual brightness. Jiwon adds another layer: clear singing presence, expressive energy, and a stage mood that feels open and alive.",
        whyFansLike: [
          "flover often like Jiwon because her voice gives fromis_9 songs more lift. Even in a bright performance, her vocal presence can make the stage feel stronger.",
          "Her charm is not only technical singing. She also performs with an expressive face and a lively mood, so her fancams do not feel flat even when the camera stays on her.",
          "She helps balance fromis_9’s image. The group can feel fresh, friendly, and soft, but Jiwon adds vocal power that makes the music feel more solid.",
        ],
        watchPoints: [
          "Watch how her expression changes when her vocal part comes in. Jiwon often makes the moment feel more open and emotional.",
          "Pay attention to her mouth shape, breathing, and face during singing parts. Vocal-focused members often show their effort in small details.",
          "Compare her with Hayoung and Nagyung if you already watched their guides. Hayoung feels playful and skilled, Nagyung feels soft and natural, while Jiwon gives the group more vocal brightness and power.",
        ],
        koreanExpression: {
          hangul: "보컬",
          romanization: "bokeol",
          meaning: "vocal; a member’s singing role or singing presence in a group",
          note:
            "보컬 comes from the English word vocal, but Korean fans use it naturally when talking about idols who carry singing parts. With Jiwon, this word matters because her appeal is closely tied to how her voice supports fromis_9’s bright and emotional sound.",
        },
        culturalContext:
          "fromis_9 is often loved for a fresh, friendly, and easy-to-watch charm, but that kind of image still needs strong musical support. Jiwon helps provide that through her vocal presence. For new viewers, her fancam is useful because it shows that fromis_9 is not only about soft visuals or cute brightness. There is also singing energy behind the group’s warmth, and Jiwon is one of the members who makes that easier to hear and feel.",
        relatedMediaIds: ["park-jiwon-fromis9-fancam"],
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
        id: "gaeul",
        name: "Gaeul",
        note:
          "IVE’s calm oldest member — graceful lines, steady stage control, and a mature color inside the group’s polished energy.",
        pageLabel: "Who is Gaeul?",
        appealTitle: "Why DIVE notice her calm stage presence",
        watchTitle: "What to notice in a Gaeul fancam",
        contextTitle: "Why Gaeul gives IVE a mature balance",
        intro:
          "Gaeul is IVE’s oldest member, and her charm often comes from calm control rather than loud impact. IVE fans are called DIVE, and many DIVE notice how Gaeul brings a graceful, mature color to the group. In a team known for polished confidence and bright pop energy, she gives the stage a steadier feeling — the kind of presence that becomes clearer the longer you watch.",
        whyFansLike: [
          "DIVE often like Gaeul because her stage presence feels calm and controlled. She does not need to overpower a moment to make it memorable.",
          "Her movements can give IVE’s performances a graceful line. Even in bright or sharp songs, she often adds a smoother and more mature texture.",
          "Fans also enjoy the contrast she brings to the group. While some members stand out through bold expressions or youthful energy, Gaeul often feels composed, balanced, and quietly confident.",
        ],
        watchPoints: [
          "Watch her lines during choreography. Gaeul often looks strongest when the movement needs a clean shape or a smooth transition.",
          "Notice how she uses small expressions. Her appeal is usually not about exaggeration, but about controlled details that fit the mood of the stage.",
          "In fancams, pay attention to how steady she feels from start to finish. She can give a performance a mature balance without pulling attention away from the group.",
        ],
        koreanExpression: {
          hangul: "언니",
          romanization: "eonni",
          meaning:
            "older sister; a word younger women use for an older woman or older female friend",
          note:
            "언니 is a normal Korean word, but in K-pop fandom it can also carry a warm feeling of trust, maturity, or older-sister energy. With Gaeul, the word helps explain why fans may notice her calm and composed role inside IVE.",
        },
        culturalContext:
          "IVE’s image often mixes confidence, elegance, and youthful pop energy. Gaeul adds balance to that mix. As the oldest member, she can make the group feel steadier without making the performance feel heavy. For new viewers, Gaeul is a good member to watch when you want to notice IVE’s quieter details — clean movement, calm expressions, and the mature color that sits underneath the group’s glossy surface.",
        relatedMediaIds: ["gaeul-ive-fancam"],
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
      {
        id: "liz",
        name: "Liz",
        note:
          "IVE’s soft vocal color — calm, clear, and quietly emotional inside the group’s polished pop image.",
        pageLabel: "Who is Liz?",
        appealTitle: "Why DIVE notice her voice and calm charm",
        watchTitle: "What to notice in a Liz fancam",
        contextTitle: "Why Liz adds softness to IVE",
        intro:
          "Liz is one of the IVE members many DIVE notice through voice first. In a group often known for polished confidence, elegant visuals, and sharp pop moments, Liz adds a softer color. Her charm is not loud or overly dramatic. It often comes through in a clear vocal tone, calm expressions, and the way she gives emotional weight to a bright song.",
        whyFansLike: [
          "DIVE often like Liz because her voice has a clean and gentle color. It can make IVE’s songs feel softer without making them lose energy.",
          "Her presence gives the group a different texture. While some members catch attention through strong camera focus or bold expressions, Liz often feels steady, warm, and quietly expressive.",
          "Fans also enjoy watching the contrast between her calm image and IVE’s glossy confidence. She gives the group more emotional range and lets softer moments breathe.",
        ],
        watchPoints: [
          "Listen for her vocal color first. Liz is often easiest to notice when a line needs warmth, clarity, or a slightly emotional feeling.",
          "Watch her expressions in close-ups. She does not always need a big gesture to leave an impression; a small change in her eyes or smile can carry the mood.",
          "In fancams, notice how she keeps her energy controlled. Her appeal is not about being the loudest member on stage, but about adding a soft and stable color to the performance.",
        ],
        koreanExpression: {
          hangul: "음색",
          romanization: "eumsaek",
          meaning: "vocal tone or voice color",
          note:
            "음색 is a Korean word people use when talking about the color or texture of someone’s voice. For Liz, this word helps explain why fans often notice her singing style — not only whether a note is high or powerful, but how her voice feels inside the song.",
        },
        culturalContext:
          "IVE’s image is often confident, polished, and visually sharp. Liz adds balance to that image. Her softer vocal color and calm stage mood give the group emotional contrast, especially in songs that mix bright pop energy with a more sentimental feeling. For new viewers, Liz is a good member to watch when you want to understand that IVE is not only about confidence and visual impact, but also about voice color, softness, and emotional detail.",
        relatedMediaIds: ["liz-ive-fancam"],
      },
      {
        id: "leeseo",
        name: "Leeseo",
        note:
          "IVE Leeseo — maknae, fancams, ending fairy moments, and a useful entry point for learning how fans read visual image in K-pop.",
        pageLabel: "Who is IVE Leeseo?",
        appealTitle: "Why Leeseo works as a K-pop entry point",
        watchTitle: "What to notice in a Leeseo fancam",
        contextTitle: "How fans read visual image with Leeseo",
        intro:
          "Leeseo is a good IVE member to start with if you are learning K-pop through small details. Some new fans search her as “Lee Seo IVE,” but her stage name is usually written as Leeseo. On HAEMIL, this page uses Leeseo because that is the spelling most K-pop fans will recognize. The reason she works well as an entry point is not only that she is young or easy to remember. It is that her page connects several words new fans keep seeing: maknae, fancam, ending fairy, and visual.",
        profileFacts: [
          {
            label: "Stage name",
            value: "Leeseo / 이서.",
          },
          {
            label: "Search note",
            value:
              "Some English users search “Lee Seo IVE,” but K-pop fans usually write her stage name as Leeseo.",
          },
          {
            label: "Group",
            value: "IVE.",
          },
          {
            label: "Fan context",
            value: "Often discussed as IVE’s maknae.",
          },
          {
            label: "Good entry point",
            value: "Fancams, ending fairy moments, and visual-image talk.",
          },
          {
            label: "Watch for",
            value:
              "Expression changes, camera timing, styling, and how her stage image changes by era.",
          },
          {
            label: "Important",
            value: "Do not read “visual” as a simple beauty ranking.",
          },
        ],
        whyFansLike: [
          "Leeseo is often talked about as IVE’s maknae, the youngest member. In K-pop, maknae does not simply mean “the youngest person in the group.” It can shape how fans read a member’s image. People notice growth, confidence, small changes in stage style, and the way the youngest member fits beside older members.",
          "IVE’s image is polished, confident, and very camera-aware. Inside that kind of group, Leeseo often gives beginners a clear way to see how a young idol grows into a strong stage image without losing the feeling of being the maknae.",
          "A full-group IVE stage shows the whole formation, the choreography, and the group mood. A Leeseo fancam narrows the view. You can notice her expression changes, where she looks into the camera, how she handles quieter seconds, and how her styling changes the feeling of the same song. That is often how a new fan suddenly understands one member.",
          "An ending fairy is the short camera moment at the end of a K-pop stage. It can look simple, but fans notice timing, breathing, eye contact, and expression control. For a younger idol, those few seconds can be especially interesting because you can see the balance between fresh energy and practiced stage awareness.",
          "Leeseo is also useful for understanding how fans talk about “visual” in K-pop. This does not mean ranking members by looks. It means noticing how styling, facial impression, camera presence, and public image work together.",
        ],
        watchPoints: [
          "Start with one fancam on this page — a music-show clip, a softer year-end stage, a festival setting, or a tour focus angle. You do not need to watch all of them like homework.",
          "Notice expression changes and camera timing. Where does Leeseo look into the lens? How does she handle quieter seconds in the same song?",
          "Watch ending moments for small details: a quick expression, a calm look, a slightly playful face, or the sense that she knows exactly how long the camera will stay.",
          "Compare eras when you come back. Fans often ask what changed in her styling, image, or stage confidence — not only whether the performance was good.",
        ],
        koreanExpression: {
          hangul: "막내",
          romanization: "maknae",
          meaning: "the youngest member of a group",
          note:
            "막내 is a normal Korean word for the youngest person in a family, team, or friend group. In K-pop, it often affects how fans read a member’s image, growth, and place in the group dynamic — not just age. With Leeseo, the word helps explain why fans watch her development over time and why her stage mood can feel fresh inside IVE’s polished image.",
        },
        culturalContext:
          "With Leeseo, visual talk often connects to her age image too. She debuted young, so fans do not only look at one stage and stop there. They compare eras. They notice when her expressions become sharper, when her styling feels more mature, or when a fancam shows a different side from the group’s main concept. That is a very K-pop way of watching. You are not only asking, “Is this a good performance?” You are also asking, “What changed?” “What kind of image is this comeback giving her?” “Why did this clip make people look twice?” That is why Leeseo is a useful member page for beginners. She helps you understand IVE, but she also helps you understand how K-pop fans watch idols over time. Start with one fancam, then read the maknae guide, then the ending fairy guide, then come back and watch another clip. The page will make more sense the second time.",
        relatedMediaIds: [
          "leeseo-ive-fancam",
          "leeseo-ive-lion-heart-fancam",
          "leeseo-ive-rebel-heart-music-core-fancam",
          "leeseo-ive-love-dive-hanchedae-fancam",
          "leeseo-ive-love-dive-newark-focus",
        ],
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
{
  id: "ningning",
  name: "Ningning",
  note: "aespa’s bold vocal color — a Chinese member with strong high notes, expressive confidence, and a stage charm that feels bright and fearless.",
  pageLabel: "Who is Ningning?",
  appealTitle: "Why MY remembers her voice and confidence",
  watchTitle: "What to notice in a Ningning fancam",
  contextTitle: "Why Ningning adds color to aespa’s futuristic image",
  intro:
    "Ningning brings a bold and colorful energy to aespa. aespa fans are called MY, and many MY notice her because her voice and expressions feel very present on stage. She is aespa’s Chinese member, and that international background adds another layer to the group’s image. Karina often gives aespa a sharp first impression, Winter brings clean and quiet detail, and Ningning adds a more expressive vocal color — bright, confident, and hard to ignore once her part begins.",
  whyFansLike: [
    "MY often like Ningning because her presence feels bold without looking forced. She can make a short part feel memorable through her voice, expression, and confidence.",
    "Her vocal color is one of aespa’s strongest points. When a high note or powerful line comes in, Ningning can make the stage feel bigger and more dramatic.",
    "She also gives aespa a different kind of charm. While the group’s concept can feel sleek and futuristic, Ningning adds warmth, color, and a more expressive feeling.",
  ],
  watchPoints: [
    "Watch how her expression changes when her vocal part comes in. Ningning often performs with her face as much as with her voice.",
    "Pay attention to her confidence during high-energy moments. She can make the stage feel brighter and more open.",
    "Compare her with Karina and Winter if you already watched their guides. Karina feels sharp and powerful, Winter feels clean and restrained, while Ningning feels more colorful and vocally expressive.",
  ],
  koreanExpression: {
    hangul: "고음",
    romanization: "go-eum",
    meaning: "high note; a high-pitched vocal part in a song",
    note:
      "고 means high, and 음 means sound or note. Korean fans often talk about 고음 when a singer reaches a strong high note or carries an impressive vocal part. With Ningning, this word fits because her vocal moments often help aespa’s songs feel bigger and more dramatic.",
  },
  culturalContext:
    "aespa’s image is futuristic, sleek, and sometimes almost digital, but the group still needs human color to make that world feel alive. Ningning helps with that. As aespa’s Chinese member, she also shows how K-pop groups can bring different backgrounds into one team identity. For new viewers, a Ningning fancam is useful because it shows that aespa is not only about sharp visuals or concept. It is also about voice, confidence, and the expressive moments that make a performance feel vivid.",
  relatedMediaIds: ["ningning-aespa-fancam"],
},
    ],
    starterTags: ["Performance", "Concept", "Fancam"],
  },
  {
    id: "rescene",
    name: "RESCENE",
    category: "girl-groups",
    description:
      "RESCENE is a five-member girl group from The Muze Entertainment. For new fans, they are becoming an easy K-pop discovery because short clips, fancams, and member-focused moments make the group feel approachable.",
    members: [
      {
        id: "woni",
        name: "Woni",
        note: "A RESCENE member who is becoming easier for new fans to notice through close-up stages, short clips, and facecam-friendly performance moments.",
        intro:
          "Woni is a member of RESCENE. This page is a beginner-friendly starting point for fans who first noticed her through a facecam, a short clip, or RESCENE’s recent stage content.",
        whyFansLike: [
          "Woni is easy to notice in close-up performance clips because her expressions feel controlled rather than forced.",
          "Her appeal is not only one big moment. It is the small replayable details: eye contact, timing, and the way she keeps the camera alive.",
          "For new RESCENE fans, Woni works well as a first member to follow because a single facecam can make her stage presence clear.",
        ],
        watchPoints: [
          "Start with one official facecam before trying to learn every RESCENE member at once.",
          "Watch how Woni changes her expression during smaller transitions, not only during the chorus.",
          "Compare a full-stage video with a close-up facecam to see why member-focused videos matter in K-pop.",
          "If you remember her after the clip ends, that is exactly why fancams can create a bias candidate.",
        ],
        relatedMediaIds: ["rescene-woni-runaway-facecam"],
      },
      {
        id: "liv",
        name: "Liv",
        note: "A member of RESCENE. Full HAEMIL member guide may be added later.",
      },
      {
        id: "minami",
        name: "Minami",
        note: "A member of RESCENE. Full HAEMIL member guide may be added later.",
      },
      {
        id: "may",
        name: "May",
        note: "A member of RESCENE. Full HAEMIL member guide may be added later.",
      },
      {
        id: "zena",
        name: "Zena",
        note: "A member of RESCENE. Full HAEMIL member guide may be added later.",
      },
    ],
    starterTags: [
      "Fancam",
      "Facecam",
      "Rookie girl group",
      "Small-agency K-pop",
      "5th generation",
    ],
  },
  {
    id: "illit",
    name: "ILLIT",
    category: "girl-groups",
    description:
      "ILLIT is a five-member girl group from BELIFT LAB. For new fans, the group is easy to enter through bright stages, close-up fancams, and member moments that stay in your head after a short clip.",
    members: [
      {
        id: "yunah",
        name: "YUNAH",
        note: "An ILLIT member. Full HAEMIL member guide may be added later.",
      },
      {
        id: "minju",
        name: "MINJU",
        note: "An ILLIT member. Full HAEMIL member guide may be added later.",
      },
      {
        id: "moka",
        name: "MOKA",
        note: "An ILLIT member. Full HAEMIL member guide may be added later.",
      },
      {
        id: "wonhee",
        name: "Wonhee",
        note: "An ILLIT member who is easy for new fans to remember through close-up fancams, clear expressions, and small stage moments that feel replayable.",
        intro:
          "Wonhee is a member of ILLIT. This page is a beginner-friendly starting point for fans who first noticed her through a facecam, a short clip, or ILLIT’s bright stage performances.",
        whyFansLike: [
          "Wonhee is easy to remember because her expressions feel clear, approachable, and close to the camera.",
          "Her charm does not depend on one huge moment. It often comes through small timing changes, eye contact, and the way she keeps a stage feeling light.",
          "For new ILLIT fans, Wonhee works well as a first member to follow because a single fancam can make her individual presence easy to understand.",
        ],
        watchPoints: [
          "Start with one official fancam before trying to learn every ILLIT member at once.",
          "Watch how Wonhee changes her expression during smaller transitions, not only during the chorus.",
          "Notice how the close camera makes her charm easier to follow than a full-stage performance.",
          "If her face, timing, or one small moment stays in your head after the clip ends, that is exactly why fancams matter.",
        ],
        relatedMediaIds: ["illit-wonhee-its-me-fancam"],
      },
      {
        id: "iroha",
        name: "IROHA",
        note: "An ILLIT member. Full HAEMIL member guide may be added later.",
      },
    ],
    starterTags: [
      "Fancam",
      "Facecam",
      "Girl group",
      "BELIFT LAB",
      "Stage clips",
    ],
  },
  {
    id: "cortis",
    name: "CORTIS",
    category: "boy-groups",
    description:
      "CORTIS is a five-member boy group from BIGHIT MUSIC. For new fans, the group is easy to enter through official stage clips, rookie energy, and member-focused fancams that make one performer easier to follow at a time.",
    members: [
      {
        id: "martin",
        name: "MARTIN",
        note: "A member of CORTIS. Full HAEMIL member guide may be added later.",
      },
      {
        id: "james",
        name: "JAMES",
        note: "A member of CORTIS. Full HAEMIL member guide may be added later.",
      },
      {
        id: "juhoon",
        name: "JUHOON",
        note: "A member of CORTIS. Full HAEMIL member guide may be added later.",
      },
      {
        id: "seonghyeon",
        name: "SEONGHYEON",
        note: "A member of CORTIS. Full HAEMIL member guide may be added later.",
      },
      {
        id: "keonho",
        name: "Keonho",
        note: "A CORTIS member who is becoming easy for new fans to remember through official fancams, rookie stage clips, and the Korean fan nickname “감튀보이” — the “French Fry Boy.”",
        intro:
          "Keonho is a member of CORTIS, a five-member boy group from BIGHIT MUSIC. This page is a beginner-friendly starting point for fans who first noticed him through a fancam, a stage clip, or the Korean “French Fry Boy” nickname that made him easier to remember.",
        profileFacts: [
          {
            label: "Born",
            value:
              "February 14, 2009 — easy to remember because it falls on Valentine’s Day.",
          },
          {
            label: "Group",
            value: "CORTIS, a five-member boy group from BIGHIT MUSIC.",
          },
          {
            label: "Agency",
            value: "BIGHIT MUSIC.",
          },
          {
            label: "Debut context",
            value:
              "Part of BIGHIT MUSIC’s first new boy group in years after BTS and TOMORROW X TOGETHER.",
          },
        ],
        whyFansLike: [
          "Keonho is easy to remember because he has both a stage entry point and a casual fan hook.",
          "The “French Fry Boy” nickname gives new fans something simple to remember before they know every CORTIS member.",
          "His “JoyRide” fancam works because the focused camera makes his energy, timing, and rookie-stage feel easier to follow.",
          "For new CORTIS fans, Keonho can be a first member to recognize before learning the whole group.",
        ],
        watchPoints: [
          "Start with the official “JoyRide” fancam and see whether your eyes keep returning to him.",
          "Watch how Keonho handles smaller transitions, not only the biggest moments.",
          "Notice how a nickname or short clip can make a rookie member easier to remember.",
          "Compare the fancam with a full CORTIS stage to see why member-focused videos matter.",
        ],
        relatedMediaIds: [
          "cortis-keonho-joyride-fancam",
          "cortis-keonho-redred-mcountdown-fancam",
          "cortis-keonho-fashion-music-core-fancam",
          "cortis-keonho-redred-music-bank-fancam",
        ],
      },
    ],
    starterTags: [
      "Fancam",
      "Boy group",
      "BIGHIT MUSIC",
      "MCOUNTDOWN",
      "Rookie stage",
    ],
  },
  {
    id: "le-sserafim",
    name: "LE SSERAFIM",
    category: "girl-groups",
    description:
      "LE SSERAFIM is a five-member girl group from SOURCE MUSIC, known for a sharp, confident performance image. On HAEMIL, start with Kim Chaewon first — one of the members whose stage details are easy to notice in fancams.",
    members: [
      {
        id: "kim-chaewon",
        name: "Kim Chaewon",
        note: "Kim Chaewon is the leader of LE SSERAFIM, a former IZ*ONE member, and one of those idols whose fancams make people understand the group’s sharp stage image very quickly.",
        intro:
          "Kim Chaewon is not a hard name to recognize in K-pop. Many fans already know her from IZ*ONE, and now as the leader of LE SSERAFIM. Her fancams are interesting because they show how she keeps refreshing an image fans already know. In LE SSERAFIM, Chaewon often feels like the member who makes the group’s confident concept easier to read. Her stage style is not only about big expressions. It is the quick switch: cute to sharp, relaxed to focused, soft to intense. That contrast is one reason Korean fans often remember her stages so easily.",
        profileFacts: [
          {
            label: "Korean name",
            value: "Kim Chaewon / 김채원.",
          },
          {
            label: "Born",
            value: "August 1, 2000.",
          },
          {
            label: "Group",
            value:
              "LE SSERAFIM, a five-member girl group from SOURCE MUSIC.",
          },
          {
            label: "Agency",
            value: "SOURCE MUSIC.",
          },
          {
            label: "Role",
            value: "Leader of LE SSERAFIM.",
          },
          {
            label: "Former group",
            value: "Former member of IZ*ONE.",
          },
          {
            label: "Reported MBTI",
            value:
              "ESTP — MBTI is often used in Korea as a quick, casual way to talk about idol personality.",
          },
          {
            label: "Reported height",
            value: "164 cm.",
          },
          {
            label: "Entry point",
            value:
              "A good member to start with if you want to understand LE SSERAFIM’s sharp but playful stage image.",
          },
        ],
        whyFansLike: [
          "She carries both sides of LE SSERAFIM well: the clean, confident image and the playful charm fans already know from her variety and fan clips.",
          "As the leader, she gives the group a clear center of gravity without needing to look overly serious all the time.",
          "Her fancams are easy to rewatch because small facial changes, short eye-contact moments, and quick mood switches happen often.",
          "For Korean fans, Chaewon is also easy to talk about through familiar profile details like MBTI, leadership, and her IZ*ONE-to-LE SSERAFIM story.",
        ],
        watchPoints: [
          "Watch how quickly she changes mood between cute, cool, and sharp expressions.",
          "Notice how she keeps the performance clean without making every camera moment feel too heavy.",
          "Look at how she balances leader-like control with a lighter, more playful image.",
          "If you are new to LE SSERAFIM, use her fancam as a way to understand the group’s confident stage color first.",
        ],
        relatedMediaIds: [
          "lesserafim-kim-chaewon-hot-fancam",
          "lesserafim-kim-chaewon-fancam-r-psLVwFpYk",
          "lesserafim-kim-chaewon-fancam-WLcxeo5de1o",
        ],
      },
    ],
    starterTags: [
      "SOURCE MUSIC",
      "performance",
      "fancam-friendly",
      "girl group",
    ],
  },
  {
    id: "triples",
    name: "tripleS",
    category: "girl-groups",
    description:
      "tripleS is a large girl group from MODHAUS with a unique member system, where fans often discover one member first before slowly learning the wider team. On HAEMIL, start with Kim ChaeYeon — a familiar Korean TV face whose close-up fancam gives an easy first entry point into the group.",
    members: [
      {
        id: "kim-chaeyeon",
        name: "Kim ChaeYeon",
        note: "Kim ChaeYeon is tripleS S4, a former child actress and Korean TV face whose Baby Flower close-up fancam makes her bright image easy to remember.",
        intro:
          "Kim ChaeYeon is not a completely new face to Korean viewers. Before tripleS, she was already familiar through childhood acting and Korean TV, especially BoNiHaNi, a children’s program many Koreans remember from after-school TV. That background gives her idol image a different feeling: she does not look like someone suddenly appearing from nowhere. In tripleS, ChaeYeon has the kind of camera-friendly brightness that works well in a close-up fancam. The Baby Flower facecam is a good place to start because it shows her in a soft, fresh stage mood without making the performance feel too heavy. You can see why some fans imagine her fitting a Korean summer festival mood someday, including WATERBOMB-style stages, but it is better to read that as fan expectation rather than an official title.",
        profileFacts: [
          {
            label: "Korean name",
            value: "Kim ChaeYeon / 김채연.",
          },
          {
            label: "Member code",
            value: "S4 in tripleS.",
          },
          {
            label: "Born",
            value: "December 4, 2004.",
          },
          {
            label: "Group",
            value: "tripleS, a large-member girl group from MODHAUS.",
          },
          {
            label: "Agency",
            value: "MODHAUS.",
          },
          {
            label: "Before tripleS",
            value:
              "A former child actress and a familiar Korean TV face through BoNiHaNi.",
          },
          {
            label: "Reported MBTI",
            value:
              "ESFP — MBTI is often used in Korea as a quick, casual way to talk about idol personality.",
          },
          {
            label: "Reported height",
            value: "170 cm.",
          },
          {
            label: "Entry point",
            value:
              "A good member to start with if you want to see tripleS through a bright, close-up fancam.",
          },
        ],
        whyFansLike: [
          "She has a familiar Korean TV background, so some fans feel like they have watched her grow from a child actress into an idol.",
          "Her image fits bright, fresh stages well without feeling too plain or flat.",
          "The Baby Flower close-up fancam makes her easy to follow because her expressions feel natural and camera-friendly.",
          "She gives new tripleS listeners a simple entry point into a very large group: remember one face first, then slowly learn the wider team.",
          "Some fans already connect her with a future summer-festival image, but that should be understood as expectation and mood rather than an official nickname.",
        ],
        watchPoints: [
          "Watch how naturally she handles close-up camera moments without making every expression feel forced.",
          "Notice the soft, bright mood of the Baby Flower stage and how well it fits her image.",
          "Pay attention to why she feels familiar to Korean viewers — her TV background changes how some fans read her idol image.",
          "If you are new to tripleS, use this fancam as a small first door into the group instead of trying to memorize every member at once.",
          "Think of the WATERBOMB connection only as a fan-imagined future fit: summer styling, bright confidence, and a camera-friendly stage mood.",
        ],
        relatedMediaIds: ["triples-kim-chaeyeon-baby-flower-facecam"],
      },
    ],
    starterTags: [
      "MODHAUS",
      "large-member group",
      "close-up fancam",
      "girl group",
    ],
  },
  {
    id: "babymonster",
    name: "BABYMONSTER",
    category: "girl-groups",
    description:
      "BABYMONSTER is a seven-member girl group from YG Entertainment that debuted on April 1, 2024. HAEMIL currently starts with Ahyeon as the first covered member, using her MBCkpop #최애ZIP캠 compilation as a beginner-friendly entry point into the group’s performance image. Other official members include Ruka, Pharita, Asa, Rami, Rora, and Chiquita — member guides may be added later.",
    members: [
      {
        id: "ahyeon",
        name: "Ahyeon",
        note: "A BABYMONSTER member who is a good entry point for new fans through member-focused fancam compilations, expression control, camera awareness, and stage presence.",
        intro:
          "Ahyeon is a member of BABYMONSTER. On HAEMIL, her page starts with a fancam-focused entry point because member-focused videos are one of the easiest ways for new K-pop fans to understand individual performance style. Her MBCkpop #최애ZIP캠 compilation is useful because it shows several performance moods in one place, making it easier to notice expression control, camera awareness, and stage presence.",
        profileFacts: [
          {
            label: "Korean name",
            value: "Ahyeon / 아현",
          },
          {
            label: "Born",
            value: "April 11, 2007",
          },
          {
            label: "Group",
            value: "BABYMONSTER, a seven-member girl group from YG Entertainment.",
          },
          {
            label: "Agency",
            value: "YG Entertainment",
          },
          {
            label: "Group debut",
            value: "April 1, 2024",
          },
        ],
        whyFansLike: [
          "Her MBCkpop #최애ZIP캠 compilation lets you compare several performance moods in one video instead of searching stage by stage.",
          "Expression control stands out in compilation format — you can see how she shifts face, energy, and camera focus depending on the song.",
          "For new BABYMONSTER fans, Ahyeon works well as a first member to follow because the video makes individual performance style easier to read.",
          "Stage presence shows in transitions too, not only in the obvious highlight moments.",
        ],
        watchPoints: [
          "Start with the #최애ZIP캠 compilation before trying to learn every BABYMONSTER song at once.",
          "Watch how her expressions change before and after highlight moments across different clips.",
          "Notice camera awareness — when she looks into the camera, when she stays with choreography, and when she keeps the mood without a big gesture.",
          "Try a three-pass watch: casual first, then expressions, then camera timing.",
          "Compare one clip with a full-group stage to see why member-focused videos matter in K-pop.",
        ],
        relatedMediaIds: ["babymonster-ahyeon-favorite-fancam-compilation"],
      },
    ],
    starterTags: [
      "Fancam",
      "Girl group",
      "YG Entertainment",
      "Music Core",
      "Compilation fancam",
    ],
  },
  {
    id: "hearts2hearts",
    name: "Hearts2Hearts",
    category: "girl-groups",
    description:
      "Hearts2Hearts (하츠투하츠) is a rookie girl group from SM Entertainment that debuted on February 24, 2025. HAEMIL currently starts with Ian as the first covered member because her STYLE fancam and challenge-friendly performance moments make her a beginner-friendly entry point into the group’s stage image. Other official members exist — member guides may be added later.",
    members: [
      {
        id: "ian",
        name: "Ian",
        note: "A Hearts2Hearts member who became easier for many casual viewers to notice through challenge-friendly STYLE performance moments, point choreography, and clear stage timing.",
        intro:
          "Ian is a member of Hearts2Hearts. On HAEMIL, her page starts with her “STYLE” fancam because many casual viewers noticed her through challenge-friendly performance moments. Her appeal should be explained through point choreography, camera timing, and stage presence — not as someone defined only by one viral clip.",
        profileFacts: [
          {
            label: "Stage name",
            value: "Ian / 이안",
          },
          {
            label: "Reported birth date",
            value: "October 9, 2009",
          },
          {
            label: "Group",
            value:
              "Hearts2Hearts (하츠투하츠), a rookie girl group from SM Entertainment.",
          },
          {
            label: "Agency",
            value: "SM Entertainment",
          },
          {
            label: "Group debut",
            value: "February 24, 2025",
          },
        ],
        whyFansLike: [
          "Her STYLE fancam shows how a challenge-friendly point move can make a rookie member easier to recognize without reducing her to one viral clip.",
          "Timing and expression control matter — the movement lands clearly, then connects back to the rest of the stage.",
          "For new Hearts2Hearts fans, Ian works well as a first member to follow because the fancam makes point choreography and stage presence easier to read.",
          "The Ian challenge may be the doorway, but the fancam shows what happens before and after the familiar moment.",
        ],
        watchPoints: [
          "Start with the STYLE fancam before trying to learn every Hearts2Hearts member at once.",
          "Watch the challenge-friendly part, then what Ian does right before and after it.",
          "Notice facial timing and whether the performance still holds together outside the short clip.",
          "Try a three-pass watch: familiar part first, then transitions, then face and timing when she is not the main highlight.",
          "Compare one fancam with a full-group stage to see why member-focused videos matter in K-pop.",
        ],
        relatedMediaIds: ["hearts2hearts-ian-style-music-core-fancam"],
      },
    ],
    starterTags: [
      "Fancam",
      "Girl group",
      "SM Entertainment",
      "Rookie group",
      "Music Core",
    ],
  },
  {
    id: "stray-kids",
    name: "Stray Kids",
    category: "boy-groups",
    description:
      "Stray Kids (스트레이 키즈) is a K-pop boy group from JYP Entertainment. HAEMIL currently starts with Felix as the first covered member because his facecam, deep-voice contrast, and stage presence make him a beginner-friendly entry point into the group’s performance image. Other official members exist — member guides may be added later.",
    members: [
      {
        id: "felix",
        name: "Felix",
        note: "A Stray Kids member many casual listeners first remember through his deep voice, with facecams that also show expression control, visual contrast, and camera awareness.",
        intro:
          "Felix is a member of Stray Kids. Many casual K-pop viewers first remember him through his unusually deep voice, especially in songs fans often mention like MANIAC. On HAEMIL, his page starts with a KBSKpop “Soul Beam” facecam because it shows another side of his appeal: close-up expression control, camera awareness, visual contrast, and stage presence.",
        profileFacts: [
          {
            label: "Stage name",
            value: "Felix / 필릭스",
          },
          {
            label: "Born",
            value: "September 15, 2000",
          },
          {
            label: "Group",
            value:
              "Stray Kids (스트레이 키즈), a boy group from JYP Entertainment.",
          },
          {
            label: "Agency",
            value: "JYP Entertainment",
          },
        ],
        whyFansLike: [
          "Many casual listeners first remember Felix because of his deep voice — MANIAC is one song fans often bring up, but it is not the whole story.",
          "His public image often has contrast: a low vocal color alongside softer facial impressions, bright expressions, and camera-friendly styling.",
          "Close-up facecams show expression timing and stage presence that a voice-only memory cannot explain on its own.",
          "For new Stray Kids fans, Felix works well as a first member to follow because the fancam makes visual and performance details easier to read.",
        ],
        watchPoints: [
          "Start with the “Soul Beam” facecam before trying to learn every Stray Kids song at once.",
          "Watch small eye changes, soft expressions, and direct camera moments — not only the deep-voice image you may already know.",
          "Notice whether his attention stays steady when the camera is close.",
          "Try a three-pass watch: casual first, then expressions, then think about voice-vs-face contrast.",
          "Compare one facecam with a full-group stage to see why member-focused videos matter in K-pop.",
        ],
        relatedMediaIds: ["stray-kids-felix-soul-beam-facecam"],
      },
    ],
    starterTags: [
      "Fancam",
      "Boy group",
      "JYP Entertainment",
      "Facecam",
      "Close-up fancam",
    ],
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
        note: "BTS’s mood-maker — known for a deep vocal tone, strong visual identity, and a stage presence that can feel relaxed but unforgettable.",
        pageLabel: "Who is V?",
        appealTitle: "Why ARMY remembers his atmosphere",
        watchTitle: "What to notice in a V fancam",
        contextTitle: "Why V changes the emotional color of BTS",
        intro:
          "V brings a very distinct mood to BTS. BTS fans are called ARMY, and many ARMY first notice him because of his face or his deep voice, but that is only part of the story. What really makes V memorable is the atmosphere he creates. Jung Kook often feels steady and all-round, Jimin often feels emotional and movement-driven, and V gives BTS another texture: a looser, moodier, and more character-based presence that can make even a short moment feel cinematic.",
        whyFansLike: [
          "ARMY often like V because he does not need to move the most or sing the highest note to stand out. His charm often comes from the way he changes the mood around him.",
          "His vocal tone is one of the easiest in BTS to recognize. It is lower and more textured, which helps some songs feel warmer, moodier, or more dramatic.",
          "He also has a strong face for the camera. Small expressions, eye contact, or even a quiet pause can make his fancams feel memorable without looking forced.",
        ],
        watchPoints: [
          "Watch his facial expressions closely. V often changes the feeling of a moment with very small choices rather than big reactions.",
          "Pay attention to how his voice and image work together. His deeper tone often matches the mood he creates on stage.",
          "Compare him with Jung Kook and Jimin if you already watched their guides. Jung Kook often feels steady and athletic, Jimin feels emotional and fluid, while V feels more atmospheric and character-driven.",
        ],
        koreanExpression: {
          hangul: "분위기",
          romanization: "bunwigi",
          meaning: "mood, aura, or atmosphere",
          note:
            "분위기 is a common Korean word for the feeling or mood someone gives off. Fans use it a lot when an idol has a strong aura that changes how a stage feels. With V, this word fits well because his appeal often comes from the atmosphere he creates, not only from choreography or line distribution.",
        },
        culturalContext:
          "In K-pop, fans do not only talk about skill in a technical way. They also talk about feeling: who changes the mood, who creates emotional texture, and who leaves a strong impression even in a short shot. V is a good example of that. He shows why atmosphere matters so much in idol performance. For new viewers, a V fancam is useful because it explains how presence can work through expression, tone, and mood, not just through big performance moments.",
        relatedMediaIds: ["v-bts-fancam"],
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
        note: "SEVENTEEN’s calm aura — low voice, quiet confidence, and a stage presence that feels steady without being loud.",
        pageLabel: "Who is Wonwoo?",
        appealTitle: "Why CARAT notices his quiet presence",
        watchTitle: "What to notice in a Wonwoo fancam",
        contextTitle: "Why Wonwoo adds calm weight to SEVENTEEN",
        intro:
          "Wonwoo brings a quieter kind of presence to SEVENTEEN. SEVENTEEN fans are called CARAT, and many CARAT like Wonwoo because he does not need to be the loudest member to stand out. Hoshi often pushes the stage forward with performance energy, and Mingyu gives the group a warm visual presence. Wonwoo adds something different: calm focus, a low voice, and a steady mood that makes the performance feel more grounded.",
        whyFansLike: [
          "CARAT often like Wonwoo because his charm feels calm and controlled. He does not overdo his expressions, but that restraint can make him feel even more memorable.",
          "His low voice gives SEVENTEEN another texture. In a group with bright energy and strong performance, Wonwoo’s tone can make a song feel deeper and more balanced.",
          "He also has a quiet kind of confidence. Even when he is not trying to dominate the camera, his posture, gaze, and timing can make people keep watching.",
        ],
        watchPoints: [
          "Watch his eyes and small expression changes. Wonwoo often works with subtle details rather than big reactions.",
          "Pay attention to his stillness. Sometimes the way he holds a moment is what makes his stage presence feel strong.",
          "Compare him with Hoshi and Mingyu if you already watched their guides. Hoshi feels intense and performance-driven, Mingyu feels warm and visually open, while Wonwoo feels calmer and more atmospheric.",
        ],
        koreanExpression: {
          hangul: "저음",
          romanization: "jeo-eum",
          meaning: "low tone or low-pitched voice",
          note:
            "저 means low, and 음 means sound or note. Korean fans use 저음 when they talk about a voice that feels deep, low, or calm. With Wonwoo, this word fits because his lower tone is one of the things that makes his presence feel steady and memorable.",
        },
        culturalContext:
          "SEVENTEEN is often known for bright teamwork, strong performance, and friendly energy. Wonwoo shows another side of that balance. He proves that a member does not have to be loud or dramatic to leave an impression. In K-pop, fans often notice the members who create contrast inside a group. Wonwoo’s calm aura and low voice give SEVENTEEN a deeper texture, making the group feel more layered rather than only energetic.",
        relatedMediaIds: ["wonwoo-seventeen-fancam"],
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