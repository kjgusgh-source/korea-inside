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
      title: 'What Does "Rookie Group" Mean in K-pop?',
      description:
        "A simple guide to how K-pop fans discover rookie groups through first stages, short clips, fancams, and the first member they remember.",
      href: "/kpop/what-is-a-rookie-group-in-kpop",
      label: "K-pop term",
    },
    {
      title:
        "K-pop Spotlight: Why RESCENE Woni Is Getting Attention Through Fancams",
      description:
        "A friendly K-pop spotlight on RESCENE Woni, her Runaway facecam, and why small moments, expressions, and replayable clips can help a new idol catch attention.",
      href: "/kpop/rescene-woni-fancam-spotlight",
      label: "K-pop Spotlight",
    },
    {
      title:
        "K-pop Spotlight: Why ILLIT Wonhee Keeps Catching Attention in Fancams",
      description:
        "A friendly K-pop spotlight on ILLIT Wonhee, her “It’s Me” fancam, and why clear expressions, small timing changes, and close-up stage clips make her easy to remember.",
      href: "/kpop/illit-wonhee-fancam-spotlight",
      label: "K-pop Spotlight",
    },
    {
      title:
        "K-pop Spotlight: Who Is CORTIS Keonho, the “French Fry Boy” Fans Keep Noticing?",
      description:
        "A friendly K-pop spotlight on CORTIS Keonho, the BIGHIT rookie member fans are noticing through “JoyRide” fancams, Korean nickname moments, and his easy-to-remember stage presence.",
      href: "/kpop/cortis-keonho-fancam-spotlight",
      label: "K-pop Spotlight",
    },
    {
      title:
        "Why tripleS Kim ChaeYeon’s “Baby Flower” Facecam Feels So Easy to Remember",
      description:
        "A close-up look at Kim ChaeYeon’s Baby Flower facecam, her familiar Korean TV background, and why she is an easy first door into tripleS.",
      href: "/kpop/triples-kim-chaeyeon-baby-flower-fancam-spotlight",
      label: "Fancam spotlight",
    },
    {
      title: "Why Kwon Eunbi Is Called Korea’s “Waterbomb Goddess”",
      description:
        "A friendly look at Kwon Eunbi, WATERBOMB Korea, and how one summer festival image reshaped her solo stage identity.",
      href: "/kpop/kwon-eunbi-waterbomb-fancam-spotlight",
      label: "Festival spotlight",
    },
    {
      title: "What Is WATERBOMB Korea?",
      description:
        "A simple guide to the Korean summer festival behind viral K-pop fancams, stage moments, and names like Kwon Eunbi’s “Waterbomb Goddess.”",
      href: "/kpop/what-is-waterbomb-korea",
      label: "K-pop culture guide",
    },
    {
      title: "K-pop Rookie Guide: Who Is CORTIS?",
      description:
        "A friendly starter guide to CORTIS, the BIGHIT MUSIC boy group, with a simple way to understand the members, the debut context, and why Keonho’s fancam can be an easy first door.",
      href: "/kpop/who-is-cortis",
      label: "Rookie guide",
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
      {
        title: "What is aegyo in K-pop?",
        description:
          "Learn what aegyo means in K-pop, where fans see it, and why it is about mood, timing, and playful charm — not just acting cute.",
        href: "/kpop/what-is-aegyo",
        label: "Korean fan words",
      },
      {
        title: "What is visual in K-pop?",
        description:
          "Learn what visual means in K-pop, how it connects to group image and concept photos, and why it is not a beauty ranking.",
        href: "/kpop/what-is-visual-in-kpop",
        label: "K-pop positions",
      },
  ];
  
  export function getKpopGuideArticles() {
    return kpopGuideArticles;
  }