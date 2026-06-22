export type ContentHub = {
    id: string;
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    highlights: string[];
    accentColor: string;
  };
  
  export const CONTENT_HUBS: ContentHub[] = [
    {
      id: "kpop",
      title: "K-pop / Idols",
      subtitle: "The main gateway into Korean culture",
      badge: "On Stage",
      description:
        "Explore idol groups, members, fancams, performances, fandom culture, and the moments that make K-pop feel so alive around the world.",
      highlights: ["Idol profiles", "Fancam picks", "Fandom culture"],
      accentColor: "#A33B39",
    },
    {
      id: "drama-film",
      title: "Drama / Film",
      subtitle: "Stories that carry Korean emotions",
      badge: "On Screen",
      description:
        "Understand Korean dramas and films through characters, scenes, emotions, filming locations, food, language, and the cultural details behind them.",
      highlights: ["Drama guides", "Film notes", "Iconic scenes"],
      accentColor: "#1F51FF",
    },
    {
      id: "food",
      title: "Food",
      subtitle: "The easiest way to feel Korea",
      badge: "On the Table",
      description:
        "From ramyeon and street food to drama-famous meals and idol-loved snacks, Korean food is one of the most welcoming doors into the culture.",
      highlights: ["Street food", "Convenience store food", "Drama meals"],
      accentColor: "#B86B3C",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      subtitle: "Everyday Korea beyond the screen",
      badge: "In Daily Life",
      description:
        "A look into PC bangs, convenience stores, late-night cafés, birthday cafés, delivery culture, and the small details of daily Korean life.",
      highlights: ["PC bang", "Convenience stores", "Birthday cafés"],
      accentColor: "#5A8B78",
    },
    {
      id: "travel-hidden-places",
      title: "Travel / Hidden Places",
      subtitle: "Places that make Korea feel real",
      badge: "Out in Korea",
      description:
        "Discover filming spots, local neighborhoods, night walks, quiet streets, and places connected to K-pop, dramas, food, and everyday culture.",
      highlights: ["Filming locations", "Local neighborhoods", "Night walks"],
      accentColor: "#6E5AA8",
    },
    {
      id: "memes-expressions",
      title: "Memes & Expressions",
      subtitle: "Small words with big cultural meaning",
      badge: "In the Comments",
      description:
        "Learn living Korean expressions, internet phrases, fan language, and emotional words that appear in K-pop, dramas, comments, and daily life.",
      highlights: ["Korean slang", "Fan words", "Cultural context"],
      accentColor: "#888888",
    },
  ];
  
  export function getContentHubs() {
    return CONTENT_HUBS;
  }