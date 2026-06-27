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
    sourceLabel: "Official video from KBS Kpop",
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
    sourceLabel: "YouTube fancam",
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
    sourceLabel: "YouTube fancam",
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
        sourceLabel: "Official SBS archive clip from 빽드",
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
  sourceLabel: "Official video from MBC every1",
},
];

export function getMediaItems() {
  return MEDIA_ITEMS;
}