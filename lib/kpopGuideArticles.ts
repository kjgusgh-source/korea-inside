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
    {
        title: "What is an ending fairy in K-pop?",
        description:
          "Learn what ending fairy means, why final close-up shots go viral, and how idols use a few seconds to show charm after a stage.",
        href: "/kpop/what-is-ending-fairy",
        label: "Music shows",
      },
      {
        title: "What is maknae in K-pop?",
        description:
          "Learn what maknae means, why the youngest member matters in K-pop, and how fans use words like golden maknae.",
        href: "/kpop/what-is-maknae",
        label: "Korean fan words",
      },
      {
        title: "What is center in K-pop?",
        description:
          "Learn what center means in K-pop, why the center member matters, and how fans understand stage focus and group image.",
        href: "/kpop/what-is-center-in-kpop",
        label: "K-pop positions",
      },
  ];
  
  export function getKpopGuideArticles() {
    return kpopGuideArticles;
  }