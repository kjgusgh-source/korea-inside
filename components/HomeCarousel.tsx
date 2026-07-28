"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

type CarouselItem = {
  id: string;
  title: string;
  categoryLabel: string;
  href: string;
  imageSrc?: string;
  youtubeThumbnailId?: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: "rescene-woni-runaway-facecam",
    title: 'RESCENE Woni "Runaway" Facecam',
    categoryLabel: "K-pop",
    href: "/kpop/rescene-woni-fancam-spotlight",
    youtubeThumbnailId: "gHoKSBaLP7E",
  },
  {
    id: "babymonster-ahyeon-fancam-spotlight",
    title: "BABYMONSTER Ahyeon Fancam Spotlight",
    categoryLabel: "K-pop",
    href: "/kpop/babymonster-ahyeon-fancam-spotlight",
    youtubeThumbnailId: "ZbxCI7ibDWk",
  },
  {
    id: "stray-kids-felix-soul-beam",
    title: 'Stray Kids Felix "Soul Beam" Facecam',
    categoryLabel: "K-pop",
    href: "/kpop/stray-kids-felix-soul-beam-facecam-spotlight",
    youtubeThumbnailId: "GETUc1c1uAs",
  },
  {
    id: "what-is-tteokbokki",
    title: "What Is Tteokbokki?",
    categoryLabel: "Food",
    href: "/food/what-is-tteokbokki",
    imageSrc: "/images/food/tteokbokki-pixabay-709k.jpg",
  },
  {
    id: "travel-seoul",
    title: "Seoul",
    categoryLabel: "Travel",
    href: "/travel/seoul",
    imageSrc: "/images/home/travel-seoul-alley.jpg",
  },
  {
    id: "itaewon-class-highlight",
    title: "Itaewon Class JTBC Highlight",
    categoryLabel: "Drama",
    href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
    youtubeThumbnailId: "67fnZvwVamM",
  },
];

const TOTAL_ITEMS = CAROUSEL_ITEMS.length;

function HandPointLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* extended index finger */}
      <rect x="2.5" y="8.7" width="12.5" height="4.6" rx="2.3" />
      {/* folded knuckles */}
      <circle cx="16.8" cy="7.8" r="2.6" />
      <circle cx="18.7" cy="8.5" r="2.4" />
      <circle cx="20.4" cy="9.6" r="2.1" />
      {/* palm / back of hand */}
      <rect x="12.5" y="9" width="9" height="9" rx="4" />
      {/* thumb */}
      <ellipse cx="18.6" cy="16.3" rx="3.1" ry="2.2" />
    </svg>
  );
}

function HandPointRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* extended index finger */}
      <rect x="9" y="8.7" width="12.5" height="4.6" rx="2.3" />
      {/* folded knuckles */}
      <circle cx="7.2" cy="7.8" r="2.6" />
      <circle cx="5.3" cy="8.5" r="2.4" />
      <circle cx="3.6" cy="9.6" r="2.1" />
      {/* palm / back of hand */}
      <rect x="2.5" y="9" width="9" height="9" rx="4" />
      {/* thumb */}
      <ellipse cx="5.4" cy="16.3" rx="3.1" ry="2.2" />
    </svg>
  );
}

export default function HomeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);

  // Purely visual "nudge" feedback on the hand icons after a click.
  // Kept entirely separate from activeIndex / goToSlide so it can never
  // affect carousel navigation state.
  const [pulse, setPulse] = useState({ left: 0, right: 0 });

  const setActive = useCallback((index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  // Single source of truth for navigation: computes the target card,
  // updates state immediately, and scrolls the track directly (not
  // scrollIntoView, so it can never move an ancestor/vertical scroll).
  const goToSlide = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const wrapped = ((index % TOTAL_ITEMS) + TOTAL_ITEMS) % TOTAL_ITEMS;
      const card = track.children[wrapped] as HTMLElement | undefined;
      if (!card) return;

      setActive(wrapped);

      isNavigatingRef.current = true;
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }

      const targetLeft =
        card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left: targetLeft, behavior: "smooth" });

      function clearNavigating() {
        isNavigatingRef.current = false;
        track?.removeEventListener("scrollend", clearNavigating);
      }

      if ("onscrollend" in window) {
        track.addEventListener("scrollend", clearNavigating, { once: true });
      } else {
        navigationTimeoutRef.current = setTimeout(clearNavigating, 500);
      }
    },
    [setActive]
  );

  // Keeps activeIndex in sync with the user's own touch swipe / manual
  // scroll. Ignored entirely while a programmatic goToSlide() scroll is
  // still animating, so it can never fight over the target card.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function handleScroll() {
      if (!track || isNavigatingRef.current) return;

      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(track.children).forEach((child, index) => {
        const card = child as HTMLElement;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    }

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [setActive]);

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndexRef.current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndexRef.current - 1);
    }
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Korea right now"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CAROUSEL_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              className={`group w-[78%] shrink-0 snap-center overflow-hidden rounded-2xl border bg-[var(--card)] transition-[transform,opacity,box-shadow,border-color] duration-[450ms] ease-out sm:w-[45%] lg:w-[31%] ${
                isActive
                  ? "z-10 border-[var(--accent)] shadow-lg md:scale-100 md:opacity-100"
                  : "border-[var(--border)] shadow-sm md:scale-[0.95] md:opacity-70"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 78vw, 400px"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : item.youtubeThumbnailId ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://img.youtube.com/vi/${item.youtubeThumbnailId}/hqdefault.jpg`}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>

              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {item.categoryLabel}
                </p>
                <p className="mt-1.5 line-clamp-1 text-base font-semibold text-[var(--text)]">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <style>{`
        @keyframes hand-nudge-left {
          0% { transform: translateX(0); }
          45% { transform: translateX(-6px); }
          100% { transform: translateX(0); }
        }
        @keyframes hand-nudge-right {
          0% { transform: translateX(0); }
          45% { transform: translateX(6px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              goToSlide(activeIndexRef.current - 1);
              setPulse((current) => ({ ...current, left: current.left + 1 }));
            }}
            aria-label="Previous story"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out hover:bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-sm motion-safe:active:scale-95 motion-safe:active:duration-150"
          >
            <span className="inline-flex transition-transform ease-out motion-safe:group-hover:-translate-x-1 motion-safe:group-hover:duration-200 motion-safe:group-active:-translate-x-1.5 motion-safe:group-active:duration-150">
              <HandPointLeftIcon
                key={pulse.left}
                className={`h-[22px] w-[22px] ${
                  pulse.left > 0
                    ? "motion-safe:animate-[hand-nudge-left_220ms_ease-out_1]"
                    : ""
                }`}
              />
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              goToSlide(activeIndexRef.current + 1);
              setPulse((current) => ({ ...current, right: current.right + 1 }));
            }}
            aria-label="Next story"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out hover:bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-sm motion-safe:active:scale-95 motion-safe:active:duration-150"
          >
            <span className="inline-flex transition-transform ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-hover:duration-200 motion-safe:group-active:translate-x-1.5 motion-safe:group-active:duration-150">
              <HandPointRightIcon
                key={pulse.right}
                className={`h-[22px] w-[22px] ${
                  pulse.right > 0
                    ? "motion-safe:animate-[hand-nudge-right_220ms_ease-out_1]"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          role="tablist"
          aria-label="Slide indicators"
          className="flex items-center gap-1.5"
        >
          {CAROUSEL_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-5 bg-[var(--accent)]"
                  : "w-1.5 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
