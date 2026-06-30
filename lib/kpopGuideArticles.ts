export type KpopGuideArticle = {
    title: string;
    description: string;
    href: string;
    label: string;
  };
  
  export const kpopGuideArticles: KpopGuideArticle[] = [
    {
      title: "K-pop Glossary",
      description:
        "A friendly guide to Korean K-pop fan words like bias, maknae, fancam, ending fairy, and eolppak-jikcam.",
      href: "/kpop/glossary",
      label: "Fan words",
    },
    {
      title: "What is a fancam in K-pop?",
      description:
        "Learn why fans watch fancams, what makes them go viral, and how facecams and eolppak-jikcam clips are different.",
      href: "/kpop/what-is-a-fancam",
      label: "Stage culture",
    },
    {
      title: "What does bias mean in K-pop?",
      description:
        "Understand bias, bias wrecker, ultimate bias, and Korean fan words like choe-ae and cha-ae.",
      href: "/kpop/what-does-bias-mean",
      label: "Fandom basics",
    },
  ];
  
  export function getKpopGuideArticles() {
    return kpopGuideArticles;
  }