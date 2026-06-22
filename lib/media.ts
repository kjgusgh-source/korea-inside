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
    title: "Why one fancam can change everything",
    category: "kpop",
    categoryLabel: "On Stage",
    mediaType: "youtube",
    description:
      "A single performance clip can turn a small expression, gesture, or stage detail into a moment fans remember.",
    cultureNote:
      "Eolppak-jikcam”(=얼빡 직캠) is a close-up fancam that stays almost entirely on an idol’s face. It is the kind of video fans replay to catch small smiles, glances, and expressions that make a stage feel more personal.",
    tags: ["Fancam", "Performance", "K-pop"],
    youtubeId: "QGBMQVFNpvI",
    sourceLabel: "Official video from KBS Kpop",
  },
  {
    id: "drama-scene-culture",
    title: "The quiet details behind a drama scene",
    category: "drama-film",
    categoryLabel: "On Screen",
    mediaType: "youtube",
    description:
      "Korean dramas often use food, silence, streets, and small gestures to show emotions without explaining everything directly.",
    cultureNote:
      "A scene can reveal family expectations, dating manners, work culture, friendship, or the Korean sense of timing and restraint.",
    tags: ["Drama", "Emotion", "Scene"],
    sourceLabel: "Trailer, OST, or official clip",
  },
  {
    id: "food-table-culture",
    title: "Food as the easiest door into Korea",
    category: "food",
    categoryLabel: "On the Table",
    mediaType: "image",
    description:
      "From ramyeon to street food, Korean food is visual, emotional, and closely connected to dramas, idols, and daily life.",
    cultureNote:
      "Food is often where Korean warmth becomes visible — sharing, ordering together, late-night meals, and comfort after a long day.",
    tags: ["Food", "Ramyeon", "Street food"],
    sourceLabel: "Safe image or original photo later",
  },
];

export function getMediaItems() {
  return MEDIA_ITEMS;
}