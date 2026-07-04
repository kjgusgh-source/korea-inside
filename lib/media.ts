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
},
];

export function getMediaItems() {
  return MEDIA_ITEMS;
}