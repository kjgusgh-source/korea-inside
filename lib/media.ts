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