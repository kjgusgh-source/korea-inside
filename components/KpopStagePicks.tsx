"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "../lib/media";
import MediaFeatureCard from "./MediaFeatureCard";

type KpopStagePicksProps = {
  defaultItems: MediaItem[];
  expandedItems: MediaItem[];
};

export default function KpopStagePicks({
  defaultItems,
  expandedItems,
}: KpopStagePicksProps) {
  const [expanded, setExpanded] = useState(false);
  const sectionTopRef = useRef<HTMLDivElement>(null);
  const firstNewItemRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<"expand" | "collapse" | null>(null);
  const visibleItems = expanded ? expandedItems : defaultItems;
  const canExpand = expandedItems.length > defaultItems.length;

  useEffect(() => {
    if (scrollTargetRef.current === "expand" && expanded) {
      firstNewItemRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (scrollTargetRef.current === "collapse" && !expanded) {
      sectionTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    scrollTargetRef.current = null;
  }, [expanded]);

  const handleToggleExpanded = () => {
    scrollTargetRef.current = expanded ? "collapse" : "expand";
    setExpanded((current) => !current);
  };

  return (
    <div ref={sectionTopRef}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, index) => {
          const isFirstNewItem = expanded && index === defaultItems.length;

          return (
            <div
              key={item.id}
              ref={isFirstNewItem ? firstNewItemRef : undefined}
            >
              <MediaFeatureCard item={item} showGuideLink />
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          {canExpand && (
            <button
              type="button"
              onClick={handleToggleExpanded}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}

          <Link
            href="/kpop"
            className="inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5"
          >
            Explore more K-pop →
          </Link>
        </div>
      </div>
    </div>
  );
}
