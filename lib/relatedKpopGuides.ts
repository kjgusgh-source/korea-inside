import {
  getKpopGuideArticles,
  type KpopGuideArticle,
} from "./kpopGuideArticles";

const guideHrefByKey = {
  aegyo: "/kpop/what-is-aegyo",
  center: "/kpop/what-is-center-in-kpop",
  fancam: "/kpop/what-is-a-fancam",
  glossary: "/kpop/glossary",
  maknae: "/kpop/what-is-maknae",
  visual: "/kpop/what-is-visual-in-kpop",
} as const;

type GuideKey = keyof typeof guideHrefByKey;

const relatedGuidesByMemberId: Record<string, GuideKey[]> = {
  "jang-wonyoung": ["visual", "center", "fancam"],
  karina: ["visual", "center", "fancam"],
  "an-yujin": ["fancam", "glossary"],
  gaeul: ["fancam", "glossary"],
  "jung-kook": ["maknae", "glossary"],
  "song-hayoung": ["aegyo", "fancam", "glossary"],
  "lee-nagyung": ["fancam", "glossary"],
  "park-jiwon": ["fancam", "glossary"],
  jimin: ["aegyo", "fancam", "glossary"],
  v: ["visual", "aegyo", "fancam"],
  hoshi: ["fancam", "glossary"],
  mingyu: ["visual", "fancam", "glossary"],
  wonwoo: ["visual", "fancam", "glossary"],
  rei: ["aegyo", "fancam", "glossary"],
  liz: ["fancam", "glossary"],
  leeseo: ["maknae", "fancam", "glossary"],
  winter: ["fancam", "glossary"],
  ningning: ["fancam", "glossary"],
};

export function getRelatedKpopGuidesForMember(
  memberId: string
): KpopGuideArticle[] {
  const guideKeys = relatedGuidesByMemberId[memberId];

  if (!guideKeys) {
    return [];
  }

  const articlesByHref = new Map(
    getKpopGuideArticles().map((article) => [article.href, article])
  );

  return guideKeys
    .map((key) => articlesByHref.get(guideHrefByKey[key]))
    .filter((article): article is KpopGuideArticle => article !== undefined);
}
