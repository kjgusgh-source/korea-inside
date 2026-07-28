"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

type MegaMenuLink = {
  label: string;
  href: string;
};

type MegaMenuFeatured = {
  title: string;
  href: string;
  imageSrc?: string;
  youtubeThumbnailId?: string;
};

type MegaMenuCategory = {
  label: string;
  href: string;
  mainLinks: MegaMenuLink[];
  guideLinks: MegaMenuLink[];
  featured: MegaMenuFeatured;
};

const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    label: "K-pop",
    href: "/kpop",
    mainLinks: [
      { label: "All K-pop", href: "/kpop" },
      { label: "Glossary", href: "/kpop/glossary" },
      { label: "IVE", href: "/kpop/ive" },
      { label: "aespa", href: "/kpop/aespa" },
    ],
    guideLinks: [
      { label: "What is a fancam?", href: "/kpop/what-is-a-fancam" },
      { label: "What does bias mean?", href: "/kpop/what-does-bias-mean" },
      {
        label: "What is a comeback?",
        href: "/kpop/what-does-comeback-mean-in-kpop",
      },
    ],
    featured: {
      title: 'RESCENE Woni "Runaway" Facecam',
      href: "/kpop/rescene-woni-fancam-spotlight",
      youtubeThumbnailId: "gHoKSBaLP7E",
    },
  },
  {
    label: "Food",
    href: "/food",
    mainLinks: [
      { label: "All Food", href: "/food" },
      {
        label: "What to Eat in Korea",
        href: "/food/what-to-eat-in-korea-first-time",
      },
      {
        label: "Convenience Store Food",
        href: "/food/what-to-eat-at-korean-convenience-store",
      },
    ],
    guideLinks: [
      {
        label: "What is Bunsik?",
        href: "/food/what-is-bunsik-korean-snack-food",
      },
      {
        label: "What is Gimbap?",
        href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
      },
      { label: "What is Bungeoppang?", href: "/food/what-is-bungeoppang" },
    ],
    featured: {
      title: "What is Tteokbokki?",
      href: "/food/what-is-tteokbokki",
      imageSrc: "/images/food/tteokbokki-pixabay-709k.jpg",
    },
  },
  {
    label: "Travel",
    href: "/travel",
    mainLinks: [
      { label: "All Travel", href: "/travel" },
      {
        label: "3 Days in Seoul",
        href: "/travel/3-days-in-seoul-itinerary-first-time",
      },
      {
        label: "Best Time to Visit",
        href: "/travel/best-time-to-visit-korea-first-time",
      },
    ],
    guideLinks: [
      {
        label: "How to Use the Subway",
        href: "/travel/how-to-use-korean-subway",
      },
      {
        label: "Travel Apps in Korea",
        href: "/travel/korea-travel-apps-first-time",
      },
      {
        label: "Etiquette Tips",
        href: "/travel/korea-etiquette-tips-for-tourists",
      },
    ],
    featured: {
      title: "Seoul",
      href: "/travel/seoul",
      imageSrc: "/images/home/travel-seoul-alley.jpg",
    },
  },
  {
    label: "Drama",
    href: "/dramas",
    mainLinks: [{ label: "All Dramas", href: "/dramas" }],
    guideLinks: [],
    featured: {
      title: "Why Itaewon Class Is a Good First K-drama",
      href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
      youtubeThumbnailId: "67fnZvwVamM",
    },
  },
];

export default function HeaderMegaMenu() {
  const pathname = usePathname();
  const [openHref, setOpenHref] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openCategory(href: string) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenHref(href);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenHref(null), 150);
  }

  return (
    <div
      className="hidden items-center gap-8 md:flex"
      onMouseLeave={scheduleClose}
    >
      {MEGA_MENU_CATEGORIES.map((category) => {
        const isOpen = openHref === category.href;
        const isActive =
          pathname === category.href ||
          pathname.startsWith(`${category.href}/`);

        return (
          <div
            key={category.href}
            className="relative h-[72px]"
            onMouseEnter={() => openCategory(category.href)}
            onFocus={() => openCategory(category.href)}
          >
            <Link
              href={category.href}
              className="relative flex h-full items-center text-sm font-semibold text-[var(--text)] transition duration-150 hover:text-[var(--accent)]"
              aria-expanded={isOpen}
            >
              {category.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[var(--accent)] transition-transform duration-200 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
                aria-hidden="true"
              />
            </Link>

            {isOpen && (
              <div
                role="menu"
                className="animate-[header-pop_220ms_ease-out] motion-reduce:animate-none absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg"
              >
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      Explore
                    </p>
                    <ul className="space-y-1.5">
                      {category.mainLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-[var(--text)] transition hover:text-[var(--accent)]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {category.guideLinks.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                        Learn
                      </p>
                      <ul className="space-y-1.5">
                        {category.guideLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-sm text-[var(--text)] transition hover:text-[var(--accent)]"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link href={category.featured.href} className="group block">
                    <div className="relative mb-2 h-20 w-full overflow-hidden rounded-xl bg-[var(--card)]">
                      {category.featured.imageSrc ? (
                        <Image
                          src={category.featured.imageSrc}
                          alt=""
                          fill
                          sizes="140px"
                          className="object-cover"
                        />
                      ) : category.featured.youtubeThumbnailId ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://img.youtube.com/vi/${category.featured.youtubeThumbnailId}/hqdefault.jpg`}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>
                    <p className="text-xs font-semibold text-[var(--text)] transition group-hover:text-[var(--accent)]">
                      {category.featured.title}
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
