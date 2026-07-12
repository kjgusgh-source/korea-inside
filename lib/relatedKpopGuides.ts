import {
  getKpopGuideArticles,
  type KpopGuideArticle,
} from "./kpopGuideArticles";

const guideHrefByKey = {
  aegyo: "/kpop/what-is-aegyo",
  bias: "/kpop/what-does-bias-mean",
  biasWrecker: "/kpop/what-is-a-bias-wrecker-in-kpop",
  center: "/kpop/what-is-center-in-kpop",
  closeUpFancam: "/kpop/what-is-close-up-fancam-in-kpop",
  fancam: "/kpop/what-is-a-fancam",
  glossary: "/kpop/glossary",
  killingPart: "/kpop/what-is-killing-part-in-kpop",
  maknae: "/kpop/what-is-maknae",
  endingFairy: "/kpop/what-is-ending-fairy",
  rookie: "/kpop/what-is-a-rookie-group-in-kpop",
  stagePresence: "/kpop/what-is-stage-presence-in-kpop",
  pointChoreography: "/kpop/what-is-point-choreography-in-kpop",
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
  leeseo: ["maknae", "fancam", "endingFairy", "visual", "center"],
  winter: ["fancam", "glossary"],
  ningning: ["fancam", "glossary"],
  wonhee: ["fancam", "rookie", "glossary"],
  keonho: ["fancam", "rookie", "glossary"],
  woni: ["fancam", "rookie", "glossary"],
  "kim-chaeyeon": ["fancam", "glossary"],
  ahyeon: ["fancam", "stagePresence", "closeUpFancam", "killingPart"],
  ian: ["fancam", "pointChoreography", "stagePresence", "killingPart"],
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
