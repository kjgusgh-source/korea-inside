"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionRevealVariant = "default" | "preview";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional entrance delay in ms, applied via transition-delay only. */
  delay?: number;
  /**
   * "default": current behavior for Explore / Popular / Latest / Join.
   * "preview": starts already partly visible (dimmed, slightly scaled/
   * desaturated) instead of hidden, for sections that should read as
   * "present" even above the fold, then sharpens on scroll.
   */
  variant?: SectionRevealVariant;
};

const OBSERVER_OPTIONS: Record<SectionRevealVariant, IntersectionObserverInit> = {
  default: { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
  preview: { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
  variant = "default",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isPreview = variant === "preview";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    // Reduced-motion users get the content immediately rather than
    // waiting on a scroll-triggered observer callback.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let startTimer: ReturnType<typeof setTimeout> | null = null;

    function start() {
      if (!node) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        });
      }, OBSERVER_OPTIONS[variant]);
      observer.observe(node);
    }

    if (isPreview) {
      // Keeps the dimmed preview state on screen briefly so a section
      // that's already in view on load reads as "sharpening up" rather
      // than snapping to fully sharp within the same frame. Once the
      // observer is live, scrolling fast still reveals immediately.
      startTimer = setTimeout(start, 150);
    } else {
      start();
    }

    return () => {
      if (startTimer) clearTimeout(startTimer);
      observer?.disconnect();
    };
  }, [variant, isPreview]);

  const transitionClasses = isPreview
    ? "transition-[opacity,transform,filter] duration-[800ms]"
    : "transition-[opacity,transform] duration-[700ms]";

  const hiddenClasses = isPreview
    ? "opacity-70 translate-y-6 scale-[0.985] saturate-[0.8]"
    : "opacity-60 translate-y-4 scale-[0.99]";

  const visibleClasses = isPreview
    ? "opacity-100 translate-y-0 scale-100 saturate-100"
    : "opacity-100 translate-y-0 scale-100";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`section-reveal ${transitionClasses} ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
        isPreview ? "motion-reduce:filter-none" : ""
      } ${isVisible ? visibleClasses : hiddenClasses} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
