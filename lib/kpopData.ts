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
        note: "fromis_9ˀ�s bright all-rounder — known for clear vocals, sharp dancing, and the soft charm fans call Habbang.",
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
          "fromis_9ˀ�s charm is not only about big impact. A lot of their appeal comes from freshness, friendliness, and small details that feel natural. Nagyung helps show that side of the group. She may first be noticed as a visual member, but her real appeal is how calmly she keeps the stage mood bright. For new viewers, her fancam is useful because it shows that K-pop visual charm can be gentle and approachable, not only dramatic or untouchable.",
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
        relatedMediaIds: [
          "an-yujin-ive-fancam",
          "ive-an-yujin-i-am-ulsan-fancam",
          "izone-an-yujin-sequence-one-reeler-fancam",
          "ive-an-yujin-lion-heart-music-festival-fancam",
          "ive-an-yujin-accendio-music-core-fancam",
          "izone-an-yujin-secret-story-of-the-swan-mcountdown-fancam",
        ],
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
        relatedMediaIds: [
          "jang-wonyoung-ive-fancam",
          "ive-jang-wonyoung-xoxz-tima-fancam",
          "ive-jang-wonyoung-multi-song-show-what-i-am-fancam",
          "ive-jang-wonyoung-bang-bang-mcountdown-fancam",
          "ive-jang-wonyoung-bang-bang-music-bank-fancam",
          "ive-jang-wonyoung-rebel-heart-music-bank-fancam",
          "ive-jang-wonyoung-attitude-music-core-fancam",
        ],
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
            "막내 is a nor