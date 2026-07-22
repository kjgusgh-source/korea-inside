export type MediaCategory =
  | "kpop"
  | "drama-film"
  | "food"
  | "lifestyle"
  | "travel"
  | "memes-expressions";

export type MediaType = "youtube" | "image" | "link";

export type MediaItem = {
  id: string;
  title: string;
  category: MediaCategory;
  categoryLabel: string;
  mediaType: MediaType;
  description: string;
  cultureNote: string;
  tags: string[];

  youtubeId?: string;
  imageUrl?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  guideHref?: string;
};

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "rescene-woni-runaway-facecam",
    title: 'RESCENE Woni "Runaway" Facecam',
    category: "kpop",
    categoryLabel: "K-pop Spotlight",
    mediaType: "youtube",
    description:
      "A close-up Music Bank facecam that shows why Woni is becoming an easy RESCENE entry point for new fans.",
    cultureNote:
      "A close-up Music Bank facecam can show why member-focused clips help new fans notice one performer before they know the whole group.",
    tags: ["RESCENE", "Woni", "Runaway", "Facecam", "Fancam"],
    youtubeId: "gHoKSBaLP7E",
    sourceLabel: "KBS Kpop official Music Bank facecam",
    guideHref: "/kpop/rescene-woni-fancam-spotlight",
  },
  {
    id: "rescene-woni-pretty-girl-music-core-fancam",
    title:
      "[#최애직캠] RESCENE WONI (리센느 원이) – Pretty Girl | 쇼! 음악중심 | MBC260711",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Pretty Girl close-up fancam that shows Woni’s bright expressions and camera awareness.",
    cultureNote:
      "Music Core close-up fancams stay tight on one member, which makes small expression changes and camera-facing moments easier to notice.",
    tags: ["RESCENE", "Woni", "Pretty Girl", "Fancam", "Music Core"],
    youtubeId: "hBMeBdWSqwk",
    sourceLabel: "MBCkpop / @MBCkpop",
    guideHref: "/kpop/rescene/woni",
  },
  {
    id: "rescene-woni-runaway-music-bank-fancam",
    title:
      "[K-Fancam] 리센느 원이 직캠 'Runaway' (RESCENE WONI Fancam) @뮤직뱅크(Music Bank) 260410",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Music Bank Runaway fancam that adds a clean broadcast-stage reference to the page.",
    cultureNote:
      "Music Bank fancams often give a clear, broadcast-style read on one member’s stage focus and expression control.",
    tags: ["RESCENE", "Woni", "Runaway", "Fancam", "Music Bank"],
    youtubeId: "SVJfQP3g-fk",
    sourceLabel: "KBSKpop",
    guideHref: "/kpop/rescene/woni",
  },
  {
    id: "rescene-woni-bloom-festival-fancam",
    title:
      "260601 원이 WONI 리센느 RESCENE 💿Bloom [8K 30P] 직캠 FANCAM @순천대 축제 by GalaxyMaru",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A festival fancam that shows Woni in a more open live-event setting.",
    cultureNote:
      "University festival stages feel different from music-show broadcasts — louder crowd energy and a more open live-event mood.",
    tags: ["RESCENE", "Woni", "Bloom", "Fancam", "Festival"],
    youtubeId: "ij95u6h84-E",
    sourceLabel: "GalaxyMaru",
    guideHref: "/kpop/rescene/woni",
  },
  {
    id: "rescene-woni-ansan-love-attack-glow-up-fancam",
    title:
      '250504 리센느 원이 (RESCENE WONI) 안산 Full Ver. "LOVE ATTACK, Glow Up" 4K 60p 세로 직캠 @안산그리너스 축하공연 FANCAM',
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A longer Ansan Greeners event fancam that connects LOVE ATTACK and Glow Up in one live-event clip.",
    cultureNote:
      "Longer festival or event fancams can show how one member handles multiple songs back to back outside a typical music-show format.",
    tags: ["RESCENE", "Woni", "LOVE ATTACK", "Glow Up", "Fancam", "Festival"],
    youtubeId: "Vn77XofUdf8",
    sourceLabel: "Emerald Dream",
    guideHref: "/kpop/rescene/woni",
  },
  {
    id: "illit-wonhee-its-me-fancam",
    title: "ILLIT Wonhee “It’s Me” Fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A close-up Inkigayo fancam that shows why Wonhee is easy to remember through clear expressions, small timing changes, and camera-friendly stage moments.",
    cultureNote:
      "A close-up Inkigayo fancam can show why member-focused clips help new fans notice one performer before they know the whole group.",
    tags: ["ILLIT", "Wonhee", "It's Me", "Fancam", "Inkigayo"],
    youtubeId: "gOGU2zO4POY",
    sourceLabel: "SBS KPOP official Inkigayo fancam",
    guideHref: "/kpop/illit/wonhee",
  },
  {
    id: "cortis-keonho-joyride-fancam",
    title: "CORTIS Keonho “JoyRide” Fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A focused MCOUNTDOWN fancam that shows why Keonho is becoming an easy CORTIS entry point through rookie energy, clear stage presence, and the “French Fry Boy” fan hook.",
    cultureNote:
      "A focused MCOUNTDOWN fancam can show why member-focused clips help new fans enter a rookie boy group one performer at a time.",
    tags: ["CORTIS", "Keonho", "JoyRide", "Fancam", "MCOUNTDOWN"],
    youtubeId: "qx8VbGEWcBo",
    sourceLabel: "Mnet M2 official fancam",
    guideHref: "/kpop/cortis/keonho",
  },
  {
    id: "cortis-keonho-redred-mcountdown-fancam",
    title:
      "[입덕직캠] 코르티스 건호 직캠 4K 'REDRED' (CORTIS KEONHO FanCam) | @MCOUNTDOWN_2026.4.23",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A REDRED MCOUNTDOWN fancam that works well for showing Keonho’s performance energy and facial focus.",
    cultureNote:
      "MCOUNTDOWN fancams often stay tight on one member, which makes rookie stage energy and expression changes easier to notice than in a wide group shot.",
    tags: ["CORTIS", "Keonho", "REDRED", "Fancam", "MCOUNTDOWN"],
    youtubeId: "cxcxx0f6caM",
    sourceLabel: "M2 / @MnetM2",
    guideHref: "/kpop/cortis/keonho",
  },
  {
    id: "cortis-keonho-fashion-music-core-fancam",
    title:
      "[#최애직캠] CORTIS KEONHO (코르티스 건호) – FaSHioN | 쇼! 음악중심 | MBC250913",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A FaSHioN Music Core close-up style fancam that gives the page a different stage mood from REDRED.",
    cultureNote:
      "Music Core close-up fancams can feel softer or more camera-facing than high-energy comeback stages — useful if you want to see Keonho in a different performance mood.",
    tags: ["CORTIS", "Keonho", "FaSHioN", "Fancam", "Music Core"],
    youtubeId: "kPjbIP7kaqs",
    sourceLabel: "MBCkpop / @MBCkpop",
    guideHref: "/kpop/cortis/keonho",
  },
  {
    id: "cortis-keonho-redred-music-bank-fancam",
    title:
      "[K-Fancam] CORTIS KEONHO Fancam 'REDRED' @Music Bank 260508",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Music Bank REDRED fancam that can sit beside the MCOUNTDOWN version as another broadcast-stage reference.",
    cultureNote:
      "Comparing the same song across music shows is a common K-pop fan habit — small differences in camera style, staging, and member focus show up more clearly.",
    tags: ["CORTIS", "Keonho", "REDRED", "Fancam", "Music Bank"],
    youtubeId: "jskLPqKkHG8",
    sourceLabel: "KBS Kpop / @KBSKpop",
    guideHref: "/kpop/cortis/keonho",
  },
  {
    id: "babymonster-ahyeon-favorite-fancam-compilation",
    title: "BABYMONSTER Ahyeon Favorite Fancam Compilation",
    category: "kpop",
    categoryLabel: "K-pop Spotlight",
    mediaType: "youtube",
    description:
      "An MBCkpop #최애ZIP캠 compilation that gathers Ahyeon-focused Music Core fancam moments from DRIP through SUGAR HONEY ICE TEA.",
    cultureNote:
      "An MBCkpop #최애ZIP캠 compilation that gathers Ahyeon-focused Music Core fancam moments from DRIP through SUGAR HONEY ICE TEA.",
    tags: [
      "BABYMONSTER",
      "Ahyeon",
      "Fancam",
      "Music Core",
      "Compilation",
      "최애ZIP캠",
    ],
    youtubeId: "ZbxCI7ibDWk",
    sourceLabel: "MBCkpop",
    guideHref: "/kpop/babymonster-ahyeon-fancam-spotlight",
  },
  {
    id: "babymonster-ahyeon-choom-concert-fancam",
    title:
      "260626 베이비몬스터 아현 직캠 'CHOOM' (BABYMONSTER AHYEON FanCam)",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A CHOOM concert fancam that shows Ahyeon’s stage energy in a live setting.",
    cultureNote:
      "Concert fancams often feel more open than music-show broadcasts — louder crowd energy and a fuller live-stage read on one member.",
    tags: ["BABYMONSTER", "Ahyeon", "CHOOM", "Fancam", "Concert"],
    youtubeId: "kV1iN31Ssfs",
    sourceLabel: "KpopFanCam",
    guideHref: "/kpop/babymonster/ahyeon",
  },
  {
    id: "babymonster-ahyeon-choom-m2-fancam",
    title:
      "[Becoming a Fan] BABYMONSTER AHYEON - CHOOM [Meltin' FanCam]",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "An M2 CHOOM fancam that works well as a clean broadcast-style performance reference.",
    cultureNote:
      "M2 fancams often give a tighter, broadcast-style focus on one member’s timing and stage control.",
    tags: ["BABYMONSTER", "Ahyeon", "CHOOM", "Fancam", "M2"],
    youtubeId: "TmTdFZ4IpCk",
    sourceLabel: "M2",
    guideHref: "/kpop/babymonster/ahyeon",
  },
  {
    id: "babymonster-ahyeon-lee-mujin-service",
    title:
      "[리무진서비스] EP.140 베이비몬스터 아현 | BABYMONSTER AHYEON | Love, Maybe, vampire, HATELOVE, 꽃 길",
    category: "kpop",
    categoryLabel: "Vocal performance",
    mediaType: "youtube",
    description:
      "A Lee Mujin Service episode focused on Ahyeon’s vocal performances — useful if you want to hear her outside a music-show fancam format.",
    cultureNote:
      "Lee Mujin Service is a popular KBS vocal show where idols sing live in a car-studio setting — a different entry point from stage fancams.",
    tags: ["BABYMONSTER", "Ahyeon", "Lee Mujin Service", "Vocal"],
    youtubeId: "UTfHawj9Z6w",
    sourceLabel: "KBSKpop / Lee Mujin Service",
    guideHref: "/kpop/babymonster/ahyeon",
  },
  {
    id: "babymonster-ahyeon-drip-inkigayo-fancam",
    title:
      "[안방1열 직캠4K] 베이비몬스터 아현 'DRIP' (BABYMONSTER AHYEON FanCam)",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A DRIP Inkigayo fancam that adds a strong music-show stage reference for Ahyeon.",
    cultureNote:
      "Inkigayo fancams can give a clear read on one member’s expression control and camera awareness during a comeback stage.",
    tags: ["BABYMONSTER", "Ahyeon", "DRIP", "Fancam", "Inkigayo"],
    youtubeId: "karQAIwewUk",
    sourceLabel: "SBSKPOP ZOOM",
    guideHref: "/kpop/babymonster/ahyeon",
  },
  {
    id: "lesserafim-kim-chaewon-hot-fancam",
    title: "Kim Chaewon “HOT” fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Kim Chaewon-focused LE SSERAFIM performance clip that is easy to follow if you want to see how one member carries sharp timing, expression changes, and stage control.",
    cultureNote:
      "In K-pop, a fancam can make a familiar idol feel new again. Instead of watching the full group at once, you can follow one member closely and notice the small details that usually pass by too quickly.",
    tags: ["LE SSERAFIM", "Kim Chaewon", "fancam", "HOT", "performance"],
    youtubeId: "Xn5UNB6ZOA0",
    sourceLabel: "STUDIO CHOOM",
    guideHref: "/kpop/le-sserafim/kim-chaewon",
  },
  {
    id: "lesserafim-kim-chaewon-fancam-r-psLVwFpYk",
    title: "Kim Chaewon fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Kim Chaewon fancam that keeps the camera close enough to notice her clean facial focus and sharp stage control.",
    cultureNote:
      "When the camera stays tight on Chaewon, small timing choices and expression shifts are easier to catch than in a wide group shot.",
    tags: ["LE SSERAFIM", "Kim Chaewon", "fancam", "performance"],
    youtubeId: "r_psLVwFpYk",
    guideHref: "/kpop/le-sserafim/kim-chaewon",
  },
  {
    id: "lesserafim-kim-chaewon-fancam-WLcxeo5de1o",
    title: "Kim Chaewon fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Kim Chaewon fancam that is useful for seeing how her expressions change through the performance.",
    cultureNote:
      "Following one member through a full stage makes mood changes easier to read — from relaxed moments to sharper, more focused ones.",
    tags: ["LE SSERAFIM", "Kim Chaewon", "fancam", "performance"],
    youtubeId: "WLcxeo5de1o",
    guideHref: "/kpop/le-sserafim/kim-chaewon",
  },
  {
    id: "triples-kim-chaeyeon-baby-flower-facecam",
    title: "Kim ChaeYeon “Baby Flower” close-up fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Kim ChaeYeon-focused tripleS Baby Flower close-up fancam that works well as a first entry point for noticing her bright, camera-friendly stage image.",
    cultureNote:
      "In Korea, an ‘얼빡직캠’ means a close-up fancam where the camera stays tight on the idol’s face. It can make expressions, eye contact, and small mood changes feel more important than the full choreography.",
    tags: [
      "tripleS",
      "Kim ChaeYeon",
      "Baby Flower",
      "close-up fancam",
      "얼빡직캠",
    ],
    youtubeId: "4USO1Vxxz18",
    sourceLabel: "KBS Kpop",
    guideHref: "/kpop/triples/kim-chaeyeon",
  },
  {
    id: "kwon-eunbi-waterbomb-crazy-in-love-fancam",
    title: "Kwon Eunbi “Crazy in Love” WATERBOMB fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Kwon Eunbi WATERBOMB fancam that shows why Korean fans connect her with summer festival stages, confident performance, and the “Waterbomb Goddess” image.",
    cultureNote:
      "WATERBOMB is a Korean summer music festival where performance, audience energy, and water-based stage moments become part of the show. For some artists, one festival fancam can change how the public remembers their stage image.",
    tags: [
      "Kwon Eunbi",
      "WATERBOMB",
      "fancam",
      "Crazy in Love",
      "summer festival",
    ],
    youtubeId: "CfwQ2fe7LH0",
    sourceLabel: "Fancam",
    guideHref: "/kpop/kwon-eunbi-waterbomb-fancam-spotlight",
  },
  {
    id: "choi-yena-catch-catch-close-up-fancam",
    title: "Choi Yena “Catch Catch” Close-Up Fancam",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Choi Yena Catch Catch close-up fancam that shows why her playful expression timing and quick mood changes make a solo stage easy to replay.",
    cultureNote:
      "In Korea, an ‘얼빡직캠’ means a close-up fancam where the camera stays tight on the idol’s face. For solo artists like Yena, that format can make bright, playful stage energy feel personal and easy to remember.",
    tags: [
      "Choi Yena",
      "YENA",
      "Catch Catch",
      "close-up fancam",
      "얼빡직캠",
    ],
    youtubeId: "bOVZcRK1fyw",
    sourceLabel: "YouTube",
    guideHref: "/kpop/choi-yena-catch-catch-fancam-spotlight",
  },
  {
    id: "chuu-xo-my-cyberlove-mcountdown-fancam",
    title: 'CHUU "XO, My Cyberlove" FanCam',
    category: "kpop",
    categoryLabel: "K-pop Spotlight",
    mediaType: "youtube",
    description:
      "An Mnet M2 입덕직캠 focused on CHUU’s “XO, My Cyberlove” stage, useful for watching her solo-stage expressions, camera awareness, and bright but controlled performance mood.",
    cultureNote:
      "An Mnet M2 입덕직캠 focused on CHUU’s “XO, My Cyberlove” stage, useful for watching her solo-stage expressions, camera awareness, and bright but controlled performance mood.",
    tags: [
      "CHUU",
      "Chuu",
      "XO My Cyberlove",
      "Fancam",
      "MCOUNTDOWN",
      "Solo artist",
    ],
    youtubeId: "_-g3FoBXD3I",
    sourceLabel: "Mnet M2",
    guideHref: "/kpop/chuu-xo-my-cyberlove-fancam-spotlight",
  },
  {
    id: "hearts2hearts-ian-style-music-core-fancam",
    title: 'Hearts2Hearts Ian "STYLE" FanCam',
    category: "kpop",
    categoryLabel: "K-pop Spotlight",
    mediaType: "youtube",
    description:
      "An MBCkpop 최애직캠 focused on Hearts2Hearts Ian’s “STYLE” stage, useful for watching how a challenge-friendly point move, facial timing, and stage presence can make a rookie member easier to recognize.",
    cultureNote:
      "An MBCkpop 최애직캠 focused on Hearts2Hearts Ian’s “STYLE” stage, useful for watching how a challenge-friendly point move, facial timing, and stage presence can make a rookie member easier to recognize.",
    tags: [
      "Hearts2Hearts",
      "Ian",
      "STYLE",
      "Fancam",
      "Music Core",
      "Rookie group",
    ],
    youtubeId: "HvnrZARfPi0",
    sourceLabel: "MBCkpop",
    guideHref: "/kpop/hearts2hearts-ian-style-fancam-spotlight",
  },
  {
    id: "stray-kids-felix-soul-beam-facecam",
    title: 'Stray Kids Felix "Soul Beam" Facecam',
    category: "kpop",
    categoryLabel: "K-pop Spotlight",
    mediaType: "youtube",
    description:
      "A KBSKpop 얼빡직캠 focused on Stray Kids Felix’s “Soul Beam” stage, useful for watching facecam details, camera awareness, and how his visual image contrasts with the deep voice many fans remember from songs like MANIAC.",
    cultureNote:
      "A KBSKpop 얼빡직캠 focused on Stray Kids Felix’s “Soul Beam” stage, useful for watching facecam details, camera awareness, and how his visual image contrasts with the deep voice many fans remember from songs like MANIAC.",
    tags: [
      "Stray Kids",
      "Felix",
      "Soul Beam",
      "Facecam",
      "얼빡직캠",
      "KBSKpop",
    ],
    youtubeId: "GETUc1c1uAs",
    sourceLabel: "KBSKpop",
    guideHref: "/kpop/stray-kids-felix-soul-beam-facecam-spotlight",
  },
  {
    id: "kpop-fancam-culture",
    title: "What an eolppak facecam feels like",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A single performance clip can turn a small expression, gesture, or stage detail into a moment fans remember.",
    cultureNote:
      "Eolppak-jikcam”(=얼빡 직캠) is a close-up fancam that stays almost entirely on an idol’s face. It is the kind of video fans replay to catch small smiles, glances, and expressions that make a stage feel more personal.",
    tags: ["Performance", "K-pop","fromis_9", "Song Hayoung", "Eolppak", "Facecam"],
    youtubeId: "QGBMQVFNpvI",
    sourceLabel: "video from KBS Kpop",
    guideHref: "/kpop/fromis-9/song-hayoung",
  },
  {
  id: "lee-nagyung-fromis9-fancam",
  title: "Why Lee Nagyung quietly catches your eye",
  category: "kpop",
  categoryLabel: "On Stage",
  mediaType: "youtube",
  description:
    "A Lee Nagyung fancam is a good way to notice fromis_9’s softer visual charm: natural expressions, calm focus, and a bright stage mood that does not feel forced.",
  cultureNote:
    "fromis_9 fans are called flover. For many flover, Nagyung first stands out through her visual image, but her charm lasts because her expressions feel calm, natural, and easy to watch.",
  tags: ["fromis_9", "Lee Nagyung", "flover", "Fancam", "Visual"],
  youtubeId: "WQJISekE0oM",
  sourceLabel: "video from M2",
  guideHref: "/kpop/fromis-9/lee-nagyung",
},
{
  id: "park-jiwon-fromis9-fancam",
  title: "Why Park Jiwon brings vocal power to fromis_9",
  category: "kpop",
  categoryLabel: "On Stage",
  mediaType: "youtube",
  description:
    "A Park Jiwon fancam is a good way to notice fromis_9’s vocal energy: bright expression, strong singing presence, and a stage mood that feels open and lively.",
  cultureNote:
    "fromis_9 fans are called flover. For many flover, Jiwon stands out because she brings a strong vocal presence to fromis_9 while still matching the group’s bright and friendly image.",
  tags: ["fromis_9", "Park Jiwon", "flover", "Fancam", "Vocal"],
  youtubeId: "NFKhp4ftcEY",
  sourceLabel: "video from SBSKPOP X INKIGAYO",
  guideHref: "/kpop/fromis-9/park-jiwon",
},
  {
    id: "jang-wonyoung-ive-fancam",
    title: "How Wonyoung turns the camera into part of the stage",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Jang Wonyoung fancam is a good place to see why her stage image feels so polished: eye contact, posture, timing, and confidence all work together.",
    cultureNote:
      "IVE fans are called DIVE. For many DIVE, Wonyoung is not only a visual center. She is one of the clearest examples of IVE’s confident and elegant image — the kind of idol who seems to know exactly where the camera is.",
    tags: ["IVE", "Jang Wonyoung", "DIVE", "Fancam", "Center"],
    youtubeId: "whAtUp1akLE",
    sourceLabel: "video from KBS Kpop",
    guideHref: "/kpop/ive/jang-wonyoung",
  },
  {
    id: "an-yujin-ive-fancam",
    title: "Why An Yujin feels like IVE’s steady spark",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "An An Yujin fancam is a good way to see IVE’s bright confidence from a different angle: energetic, steady, expressive, and less princess-like than Wonyoung’s polished center image.",
    cultureNote:
      "IVE fans are called DIVE. For many DIVE, Yujin feels like the member who brings leader energy, healthy confidence, and a natural sense of fun to IVE’s stage.",
    tags: ["IVE", "An Yujin", "DIVE", "Fancam", "Leader"],
    youtubeId: "Ld6m93MWwV4",
    sourceLabel: "video from M2",
    guideHref: "/kpop/ive/an-yujin",
  },
  {
    id: "gaeul-ive-fancam",
    title: "Watching Gaeul’s calm stage control in IVE",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Gaeul fancam is a good way to notice IVE’s more mature stage color: clean movement, calm expressions, and steady control inside the group’s polished pop energy.",
    cultureNote:
      "IVE fans are called DIVE. For many DIVE, Gaeul stands out through calm presence and graceful control — the kind of charm that becomes clearer when you watch the full stage instead of only the highlight moments.",
    tags: ["IVE", "Gaeul", "DIVE", "Fancam", "Stage presence"],
    youtubeId: "UTTyXyZmDcI",
    sourceLabel: "Video from KBS Kpop",
    guideHref: "/kpop/ive/gaeul",
  },
  {
    id: "rei-ive-fancam",
    title: "Why Rei gives IVE a softer, unique color",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Rei fancam is a good way to notice IVE’s softer and more unique side: calm expressions, a distinct tone, and a charm that feels different from the group’s more polished confidence.",
    cultureNote:
      "IVE fans are called DIVE. For many DIVE, Rei’s charm is her unique color inside IVE — cute but calm, soft but memorable, and especially noticeable through her voice, rap tone, and gentle stage mood.",
    tags: ["IVE", "Rei", "DIVE", "Fancam", "Unique tone"],
    youtubeId: "frTP-_d48iE",
    sourceLabel: "video from KBS Kpop",
    guideHref: "/kpop/ive/rei",
  },
  {
    id: "liz-ive-fancam",
    title: "Listening for Liz’s soft vocal color in IVE",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Liz fancam is a good way to notice the softer side of IVE: calm expressions, controlled stage energy, and a vocal color that gives the group a warmer emotional texture.",
    cultureNote:
      "IVE fans are called DIVE. For many DIVE, Liz stands out through 음색, or vocal tone — the feeling of a voice, not just the power of a note.",
    tags: ["IVE", "Liz", "DIVE", "Fancam", "Vocal tone"],
    youtubeId: "22-ev5iBebo",
    sourceLabel: "Video from M2",
    guideHref: "/kpop/ive/liz",
  },
  {
    id: "leeseo-ive-fancam",
    title: "Watching Leeseo’s fresh maknae energy in IVE",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Leeseo fancam is a good way to notice IVE’s brighter youngest-member side: open expressions, lively reactions, and stage energy that feels fresh inside the group’s polished mood.",
    cultureNote:
      "IVE fans are called DIVE. For many DIVE, Leeseo’s charm is the mix of youthful energy and growth — the member who helps IVE feel more dynamic while still matching the group’s confident image.",
    tags: ["IVE", "Leeseo", "DIVE", "Fancam", "Maknae"],
    youtubeId: "dbx_gUiv7qY",
    sourceLabel: "Video from SBS KPOP ZOOM",
    guideHref: "/kpop/ive/leeseo",
  },
  {
    id: "leeseo-ive-lion-heart-fancam",
    title: 'IVE Leeseo "Lion Heart" FanCam',
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A MBC Gayo Daejejeon fancam that shows Leeseo in a softer, classic performance mood outside a typical IVE comeback stage.",
    cultureNote:
      "Gayo Daejejeon cover stages often let idols show a different side from their usual comeback image. For DIVE, this clip is a useful contrast to Leeseo’s brighter maknae energy on IVE’s own songs.",
    tags: ["IVE", "Leeseo", "DIVE", "Fancam", "Lion Heart", "MBC"],
    youtubeId: "tYGqpg5x7I4",
    sourceLabel: "MBCkpop",
    guideHref: "/kpop/ive/leeseo",
  },
  {
    id: "leeseo-ive-rebel-heart-music-core-fancam",
    title: 'IVE Leeseo "REBEL HEART" FanCam',
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Music Core fancam that shows Leeseo in IVE’s “REBEL HEART” stage, with a clearer look at her performance focus and expression changes.",
    cultureNote:
      "Music Core fancams often give a tighter read on how one member handles a comeback stage. For DIVE, this clip is useful if you want to see Leeseo’s focus and expression shifts inside IVE’s “REBEL HEART” performance.",
    tags: ["IVE", "Leeseo", "DIVE", "Fancam", "REBEL HEART", "Music Core"],
    youtubeId: "cVv8qbIKmGw",
    sourceLabel: "MBCkpop",
    guideHref: "/kpop/ive/leeseo",
  },
  {
    id: "leeseo-ive-love-dive-hanchedae-fancam",
    title: 'IVE Leeseo "LOVE DIVE" Hanchedae Festival FanCam',
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A festival fancam from Korea National Sport University that shows Leeseo’s “LOVE DIVE” stage in a live campus-event setting.",
    cultureNote:
      "University festival stages feel different from music-show broadcasts — louder crowd energy, less polished camera work, and a more open live-event mood. For DIVE, this clip shows Leeseo’s “LOVE DIVE” performance in that kind of setting.",
    tags: ["IVE", "Leeseo", "DIVE", "Fancam", "LOVE DIVE", "Festival"],
    youtubeId: "EnWBNXAqc8o",
    sourceLabel: "Spinel CAM",
    guideHref: "/kpop/ive/leeseo",
  },
  {
    id: "leeseo-ive-love-dive-newark-focus",
    title: 'IVE Leeseo "LOVE DIVE" Newark Focus Cam',
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Newark world tour focus cam that gives another angle on Leeseo’s “LOVE DIVE” performance outside a Korean music-show setting.",
    cultureNote:
      "World tour focus cams often show a different side from Korean broadcast fancams — wider venue energy, fan-shot angles, and a performance read shaped by a live overseas crowd. For DIVE, this Newark clip is a useful contrast to Leeseo’s “LOVE DIVE” stages filmed in Korea.",
    tags: ["IVE", "Leeseo", "DIVE", "Focus cam", "LOVE DIVE", "World tour"],
    youtubeId: "7may4UsvG_g",
    sourceLabel: "hypnosis",
    guideHref: "/kpop/ive/leeseo",
  },
  {
    id: "karina-aespa-fancam",
    title: "Why Karina feels like aespa’s front door",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Karina fancam is a good way to understand aespa’s sharp, futuristic image — clean lines, strong eye contact, controlled pauses, and a stage presence that feels almost unreal.",
    cultureNote:
      "aespa fans are called MY. For many MY, Karina’s charm is the contrast between her cool, AI-like stage image and her warmer, more human off-stage personality.",
    tags: ["aespa", "Karina", "MY", "Fancam", "Leader"],
    youtubeId: "90gUAIS-jBQ",
    sourceLabel: "video from KBS Kpop",
    guideHref: "/kpop/aespa/karina",
  },
  {
    id: "winter-aespa-fancam",
    title: "Why Winter makes small details feel sharp",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Winter fancam is a good way to notice aespa’s cleaner, quieter kind of stage power: clear expressions, neat timing, and small details that do not feel overdone.",
    cultureNote:
      "aespa fans are called MY. For many MY, Winter’s charm is not always loud or dramatic. She often stands out through a calm face, a clear vocal color, and a stage style that feels simple but precise.",
    tags: ["aespa", "Winter", "MY", "Fancam", "Stage detail"],
    youtubeId: "iF9di-AySFo",
    sourceLabel: "video from KBS Kpop",
    guideHref: "/kpop/aespa/winter",
  },
  {
    id: "ningning-aespa-fancam",
    title: "Why Ningning gives aespa a bold vocal color",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Ningning fancam is a good way to notice aespa’s more colorful side: confident expressions, strong vocal presence, and a stage mood that feels bright and bold.",
    cultureNote:
      "aespa fans are called MY. For many MY, Ningning stands out as aespa’s Chinese member with a powerful vocal color, expressive confidence, and a bold charm that adds another layer to the group’s futuristic image.",
    tags: ["aespa", "Ningning", "MY", "Fancam", "Vocal"],
    youtubeId: "5rbw6h_jM0Y",
    sourceLabel: "video from M2",
    guideHref: "/kpop/aespa/ningning",
  },
  {
    id: "jung-kook-bts-fancam",
    title: "Why Jung Kook still feels like BTS’s golden center",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Jung Kook fancam is not just about watching a good performer. It shows why fans often see him as someone who grew from BTS’s youngest member into a full solo-stage presence.",
    cultureNote:
      "BTS fans are called ARMY. For many ARMY, Jung Kook’s charm is the mix of youthful energy, strong vocals, clean dancing, and the feeling that he is always trying to get better.",
    tags: ["BTS", "Jung Kook", "ARMY", "Fancam", "Golden Maknae"],
    youtubeId: "LEX7j8nRXSk",
    sourceLabel: "YouTube fancam from Moonlit",
    guideHref: "/kpop/bts/jung-kook",
  },
  {
  id: "jimin-bts-fancam",
  title: "Why Jimin makes emotion visible through movement",
  category: "kpop",
  categoryLabel: "On Stage",
  mediaType: "youtube",
  description:
    "A Jimin fancam is a good way to understand how emotion, dance lines, facial expression, and stage focus can turn a performance into something that feels almost personal.",
  cultureNote:
    "BTS fans are called ARMY. For many ARMY, Jimin’s charm is not only that he dances well. It is the way his movement carries emotion — soft, sharp, elegant, and intense at the same time.",
  tags: ["BTS", "Jimin", "ARMY", "Fancam", "Dance line"],
  youtubeId: "2ssijwETM0s",
  sourceLabel: "video from Mnet K-POP",
  guideHref: "/kpop/bts/jimin",
},
{
  id: "v-bts-fancam",
  title: "Why V can change the mood of a stage so easily",
  category: "kpop",
  categoryLabel: "On Stage",
  mediaType: "youtube",
  description:
    "A V fancam is a good way to notice how one member can change the feeling of a performance through voice, expression, and quiet but memorable stage presence.",
  cultureNote:
    "BTS fans are called ARMY. For many ARMY, V stands out through his deep vocal tone, strong visual identity, and the way he can make a stage feel moody, playful, or dramatic with just a small change in expression.",
  tags: ["BTS", "V", "ARMY", "Fancam", "Mood"],
  youtubeId: "c7Xs9k1C8U0",
  sourceLabel: "video from M2",
  guideHref: "/kpop/bts/v",
},
  {
    id: "hoshi-seventeen-fancam",
    title: "Why Hoshi feels like SEVENTEEN’s performance engine",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A Hoshi fancam is a good way to understand SEVENTEEN’s performance identity: sharp timing, playful intensity, and the feeling that the stage is being driven from the inside.",
    cultureNote:
      "SEVENTEEN fans are called CARAT. For many CARAT, Hoshi is not only a strong dancer. He is the performance-team leader who carries SEVENTEEN’s tiger-like energy, humor, and stage control all at once.",
    tags: ["SEVENTEEN", "Hoshi", "CARAT", "Fancam", "Performance"],
    youtubeId: "KNqeIfpLouQ",
    sourceLabel: "video from Mnet K-POP",
    guideHref: "/kpop/seventeen/hoshi",
  },
  {
  id: "mingyu-seventeen-fancam",
  title: "Why Mingyu feels warm even with a big stage presence",
  category: "kpop",
  categoryLabel: "On Stage",
  mediaType: "youtube",
  description:
    "A Mingyu fancam is a good way to understand how a member can stand out through height, visuals, and presence, but still feel friendly and easy to watch.",
  cultureNote:
    "SEVENTEEN fans are called CARAT. For many CARAT, Mingyu’s charm is the mix of strong visual presence, warm personality, and the relaxed confidence that makes him feel less distant than a typical ‘perfect visual’ image.",
  tags: ["SEVENTEEN", "Mingyu", "CARAT", "Fancam", "Visual"],
  youtubeId: "dILHbP2i4IA",
  sourceLabel: "video from Mnet MBCkpop",
  guideHref: "/kpop/seventeen/mingyu",
},
{
  id: "wonwoo-seventeen-fancam",
  title: "Why Wonwoo feels calm but hard to ignore",
  category: "kpop",
  categoryLabel: "On Stage",
  mediaType: "youtube",
  description:
    "A Wonwoo fancam is a good way to notice SEVENTEEN’s quieter kind of presence: calm expressions, deep tone, controlled energy, and a stage mood that feels steady rather than loud.",
  cultureNote:
    "SEVENTEEN fans are called CARAT. For many CARAT, Wonwoo’s charm is his calm aura, low voice, and the way he can stand out without pushing for attention.",
  tags: ["SEVENTEEN", "Wonwoo", "CARAT", "Fancam", "Calm aura"],
  youtubeId: "hWEbQwhyDnM",
  sourceLabel: "video from M2",
  guideHref: "/kpop/seventeen/wonwoo",
},
     {
        id: "our-beloved-summer-first-highlight",
        title: "When old feelings return on camera",
        category: "drama-film",
        categoryLabel: "On Screen",
        mediaType: "youtube",
        description:
          "A scene from Our Beloved Summer, where two people who once knew each other too well are suddenly placed back in front of the camera. The tension is quiet, but you can feel the old memories sitting between them.",
        cultureNote:
          "K-dramas often make emotions feel bigger by saying less. A pause, an awkward look, or a familiar place can tell you that the story is not really over yet.",
        tags: ["Our Beloved Summer", "K-drama", "Old feelings"],
        youtubeId: "5Jtu4pAH0B0",
        sourceLabel: "SBS archive clip from 빽드",
        guideHref: "/dramas",
      },

{
  id: "korean-food-table-culture",
  title: "That first bite of Korean ramyeon",
  category: "food",
  categoryLabel: "On the Table",
  mediaType: "youtube",
  description:
    "A reaction-style video of people trying Korean ramyeon — the steam, the spicy broth, and the funny little pause after the first bite.",
  cultureNote:
    "Korean ramyeon is one of those foods that is fun to watch people try for the first time. This video is simply about that moment: people tasting it, reacting to it, and slowly going back for another bite.",
  tags: ["Korean ramyeon", "Food reaction", "First bite"],
  youtubeId: "EgLwaLFiCjg",
  sourceUrl: "https://www.youtube.com/watch?v=EgLwaLFiCjg",
  sourceLabel: "video from MBC every1",
  guideHref: "/food",
},
{
  id: "our-unwritten-seoul-trailer",
  title: "Our Unwritten Seoul: a quieter Seoul mood",
  category: "drama-film",
  categoryLabel: "On Screen",
  mediaType: "youtube",
  description:
    "An official trailer that shows Seoul as a city of identity, work, family, and quiet emotional change.",
  cultureNote:
    "K-dramas often make ordinary city spaces feel emotional. This trailer is a good mood example for understanding why Seoul can feel familiar before you even visit.",
  tags: ["K-drama", "Seoul", "Our Unwritten Seoul", "tvN", "Drama"],
  youtubeId: "zGSvSRLlyUA",
  sourceLabel: "Official trailer from tvN DRAMA",
  guideHref: "/dramas/why-seoul-feels-like-a-kdrama",
},
{
  id: "can-this-love-be-translated-trailer",
  title: "Can This Love Be Translated?: language and romance",
  category: "drama-film",
  categoryLabel: "On Screen",
  mediaType: "youtube",
  description:
    "An official trailer about translation, emotion, and the distance between people when language and culture do not fully match.",
  cultureNote:
    "This fits HAEMIL’s language and culture angle: sometimes the important part is not only what someone says, but how much feeling gets lost or found between languages.",
  tags: ["K-drama", "Netflix Korea", "Romance", "Translation", "Korean culture"],
  youtubeId: "IIHQ1Z2yu80",
  sourceLabel: "Official trailer from Netflix Korea",
  guideHref: "/dramas/why-seoul-feels-like-a-kdrama",
},
{
  id: "boyfriend-on-demand-trailer",
  title: "Boyfriend on Demand: modern Seoul romance",
  category: "drama-film",
  categoryLabel: "On Screen",
  mediaType: "youtube",
  description:
    "An official trailer with a more modern romance mood, connecting city life, dating imagination, and digital-era relationships.",
  cultureNote:
    "Modern K-dramas often mix everyday Seoul with fantasy-like dating situations. This kind of trailer helps show how ordinary spaces can become romantic or cinematic.",
  tags: ["K-drama", "Netflix Korea", "Romance", "Seoul", "Dating"],
  youtubeId: "ZnS0sRSWPuc",
  sourceLabel: "Official trailer from Netflix Korea",
  guideHref: "/dramas/why-seoul-feels-like-a-kdrama",
},
{
  id: "itaewon-class-jtbc-highlight",
  title: "Itaewon Class JTBC Highlight",
  category: "drama-film",
  categoryLabel: "On Screen",
  mediaType: "youtube",
  description:
    "A JTBC highlight clip that captures the mood of Itaewon Class — stubborn youth, Itaewon streets, DanBam, and the feeling of starting over.",
  cultureNote:
    "Itaewon Class turned a small bar-restaurant dream, unfair power, and a refusal to kneel into one of the K-dramas many international viewers still remember by mood.",
  tags: ["Itaewon Class", "K-drama", "JTBC", "Itaewon", "Drama"],
  youtubeId: "67fnZvwVamM",
  sourceLabel: "JTBC",
  guideHref: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
},
];

export function getMediaItems() {
  return MEDIA_ITEMS;
}