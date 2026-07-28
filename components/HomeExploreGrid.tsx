import Link from "next/link";

const EXPLORE_ITEMS = [
  {
    icon: "🎤",
    title: "K-pop",
    description: "Idols, fancams, and fandom culture.",
    href: "/kpop",
  },
  {
    icon: "🍜",
    title: "Food",
    description: "Street food, home meals, and drama favorites.",
    href: "/food",
  },
  {
    icon: "🧭",
    title: "Travel",
    description: "Neighborhoods, filming spots, hidden corners.",
    href: "/travel",
  },
  {
    icon: "🎬",
    title: "Drama",
    description: "Scenes and shows that carry Korean emotion.",
    href: "/dramas",
  },
  {
    icon: "💬",
    title: "Korean words",
    description: "Slang and fan words, explained simply.",
    href: "/kpop/glossary",
  },
  {
    icon: "🍵",
    title: "Culture tips",
    description: "Everyday etiquette before you go.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
];

export default function HomeExploreGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
      {EXPLORE_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex min-h-[44px] flex-col items-center gap-2 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--card)] text-2xl transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-[var(--accent-soft)]">
            <span aria-hidden="true">{item.icon}</span>
          </span>
          <span className="text-balance text-sm font-semibold text-[var(--text)]">
            {item.title}
          </span>
          <span className="line-clamp-2 text-xs leading-5 text-[var(--muted)]">
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  );
}
