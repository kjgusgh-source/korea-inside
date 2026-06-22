export type OnStageItem = {
    id: string;
    title: string;
    eyebrow: string;
    description: string;
    details: string[];
  };
  
  export const ON_STAGE_ITEMS: OnStageItem[] = [
    {
      id: "idol-portraits",
      title: "Idol Portraits",
      eyebrow: "Faces & stories",
      description:
        "Meet the names, roles, charms, and small moments that help each idol feel familiar beyond the stage.",
      details: ["Members", "Roles", "First moments"],
    },
    {
      id: "fancam-moments",
      title: "Fancam Moments",
      eyebrow: "One camera, one moment",
      description:
        "A closer look at performances, expressions, styling, and the short clips fans keep coming back to.",
      details: ["Fancams", "Stage details", "Viral clips"],
    },
    {
      id: "fandom-scenes",
      title: "Fandom Scenes",
      eyebrow: "Around the stage",
      description:
        "Fan chants, lightsticks, birthday cafés, comments, and the culture that grows around K-pop performances.",
      details: ["Fan chants", "Lightsticks", "Birthday cafés"],
    },
  ];
  
  export function getOnStageItems() {
    return ON_STAGE_ITEMS;
  }