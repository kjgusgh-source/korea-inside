import type { MediaItem } from "./media";

export const HOME_KPOP_STAGE_PICKS_DEFAULT_IDS = [
  "lee-nagyung-fromis9-fancam",
  "jang-wonyoung-ive-fancam",
  "karina-aespa-fancam",
  "jung-kook-bts-fancam",
  "v-bts-fancam",
  "hoshi-seventeen-fancam",
] as const;

export const HOME_KPOP_STAGE_PICKS_EXPANDED_IDS = [
  "lee-nagyung-fromis9-fancam",
  "jang-wonyoung-ive-fancam",
  "karina-aespa-fancam",
  "jung-kook-bts-fancam",
  "v-bts-fancam",
  "hoshi-seventeen-fancam",
  "gaeul-ive-fancam",
  "liz-ive-fancam",
  "winter-aespa-fancam",
  "jimin-bts-fancam",
  "mingyu-seventeen-fancam",
  "wonwoo-seventeen-fancam",
] as const;

export function resolveHomeKpopStagePicks(
  mediaItems: MediaItem[],
  ids: readonly string[]
) {
  return ids
    .map((id) => mediaItems.find((item) => item.id === id))
    .filter((item): item is MediaItem => item !== undefined);
}
