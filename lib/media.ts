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
    id: "jennie-fallen-angel-official-mv-teaser",
    title: 'JENNIE "FALLEN ANGEL" (Official MV Teaser)',
    category: "kpop",
    categoryLabel: "K-pop Spotlight",
    mediaType: "youtube",
    description:
      "The first MV teaser for JENNIE's solo title track \"FALLEN ANGEL,\" released ahead of her 2026 EP of the same name.",
    cultureNote:
      "The teaser leans into a dark fairytale look, with JENNIE speaking a line from a puppet-theater-style stage before the color and mood shift for the rest of the clip.",
    tags: ["BLACKPINK", "JENNIE", "Fallen Angel", "MV Teaser", "Odd Atelier"],
    youtubeId: "CNQujRtii44",
    sourceLabel: "Official \"FALLEN ANGEL\" MV teaser, as reported by Soompi",
    guideHref: "/kpop/jennie",
  },
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
    id: "babymonster-ahyeo