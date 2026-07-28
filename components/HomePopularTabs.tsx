"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getMediaItems } from "../lib/media";
import {
  HOME_KPOP_STAGE_PICKS_DEFAULT_IDS,
  resolveHomeKpopStagePicks,
} from "../lib/homeKpopStagePicks";

type PopularItem = {
  id: string;
  title: string;
  categoryLabel: string;
  href: string;
  imageSrc?: string;
  youtubeThumbnailId?: string;
};

const KPOP_ITEMS: PopularItem[] = resolveHomeKpopStagePicks(
  getMediaItems(),
  HOME_KPOP_STAGE_PICKS_DEFAULT_IDS
).map((item) => ({
  id: item.id,
  title: item.title,
  categoryLabel: "K-pop",
  href: item.guideHref ?? "/kpop",
  youtubeThumbnailId: item.youtubeId,
}));

const FOOD_ITEMS: PopularItem[] = [
  {
    id: "what-is-gimbap",
    title: "What Is Gimbap?",
    categoryLabel: "Food",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
    imageSrc: "/images/food/gimbap.jpg",
  },
  {
    id: "what-is-bungeoppang",
    title: "What Is Bungeoppang?",
    categoryLabel: "Food",
    href: "/food/what-is-bungeoppang",
    imageSrc: "/images/food/bungeoppang.webp",
  },
  {
    id: "what-is-eomuk",
    title: "What Is Eomuk?",
    categoryLabel: "Food",
    href: "/food/what-is-eomuk-korean-fish-cake",
    imageSrc: "/images/food/eomuk.webp",
  },
  {
    id: "what-is-sundae",
    title: "What Is Sundae?",
    categoryLabel: "Food",
    href: "/food/what-is-sundae-korean-blood-sausage",
    imageSrc: "/images/food/sundae.webp",
  },
  {
    id: "what-is-twigim",
    title: "What Is Twigim?",
    categoryLabel: "Food",
    href: "/food/what-is-twigim-korean-fried-snacks",
    imageSrc: "/images/food/twigim.webp",
  },
  {
    id: "what-is-korean-street-toast",
    title: "What Is Korean Street Toast?",
    categoryLabel: "Food",
    href: "/food/what-is-korean-street-toast",
    imageSrc: "/images/food/korean-street-toast.webp",
  },
];

const TRAVEL_ITEMS: PopularItem[] = [
  {
    id: "gangneung-guide",
    title: "Gangneung & the East Coast",
    categoryLabel: "Travel",
    href: "/travel/gangneung-travel-guide-first-time",
    imageSrc: "/images/home/travel-mookho-skywalk.jpg",
  },
  {
    id: "seoul-neighborhoods",
    title: "Seoul Neighborhoods",
    categoryLabel: "Travel",
    href: "/travel/seoul-neighborhood-guide-first-time",
    imageSrc: "/images/home/travel-seoul-namsan-tower.jpg",
  },
  {
    id: "3-days-in-seoul",
    title: "3 Days in Seoul Itinerary",
    categoryLabel: "Travel",
    href: "/travel/3-days-in-seoul-itinerary-first-time",
  },
  {
    id: "korean-subway",
    title: "How to Use the Korean Subway",
    categoryLabel: "Travel",
    href: "/travel/how-to-use-korean-subway",
  },
  {
    id: "best-time-to-visit",
    title: "Best Time to Visit Korea",
    categoryLabel: "Travel",
    href: "/travel/best-time-to-visit-korea-first-time",
  },
  {
    id: "etiquette-tips",
    title: "Korea Etiquette Tips",
    categoryLabel: "Travel",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
];

const DRAMA_ITEMS: PopularItem[] = [
  {
    id: "itaewon-class-highlight",
    title: "Itaewon Class JTBC Highlight",
    categoryLabel: "Drama",
    href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
    youtubeThumbnailId: "67fnZvwVamM",
  },
  {
    id: "our-beloved-summer",
    title: "Our Beloved Summer",
    categoryLabel: "Drama",
    href: "/dramas",
    youtubeThumbnailId: "5Jtu4pAH0B0",
  },
];

const ALL_ITEMS: PopularItem[] = [
  KPOP_ITEMS[1], // Jang Wonyoung (IVE)
  KPOP_ITEMS[2], // Karina (aespa)
  KPOP_ITEMS[3], // Jung Kook (BTS)
  FOOD_ITEMS[0], // Gimbap
  TRAVEL_ITEMS[0], // Gangneung
  DRAMA_ITEMS[0], // Itaewon Class
].filter(Boolean);

const TABS = ["All", "K-pop", "Food", "Travel", "Drama"] as const;
type Tab = (typeof TABS)[number];

const TAB_ITEMS: Record<Tab, PopularItem[]> = {
  All: ALL_ITEMS,
  "K-pop": KPOP_ITEMS,
  Food: FOOD_ITEMS,
  Travel: TRAVEL_ITEMS,
  Drama: DRAMA_ITEMS,
};

export default function HomePopularTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const items = TAB_ITEMS[activeTab];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter popular content by category"
        className="flex flex-wrap gap-2"
      >
        {TABS.map((tab) => {
          const isSelected = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-150 ${
                isSelected
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        className={`mt-6 grid min-h-[320px] gap-4 transition-opacity duration-200 sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {items.map((item) => {
          const hasImage = Boolean(item.imageSrc || item.youtubeThumbnailId);

          return (
            <Link
              key={item.id}
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {hasImage && (
                <div className="relative aspect-video w-full overflow-hidden">
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt=""
                      fill
                      sizes="360px"
                      className="object-cover transition duration-200 group-hover:scale-[1.03]"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeThumbnailId}/hqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
              )}

              <div
                className={`flex flex-1 flex-col p-4 ${hasImage ? "" : "justify-center"}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {item.categoryLabel}
                </p>
                <p className="mt-1.5 line-clamp-2 text-base font-semibold text-[var(--text)]">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
