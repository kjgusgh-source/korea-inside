"use client";

import { motion, type TargetAndTransition } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

type BlurTextSnapshot = {
  filter?: string;
  opacity?: number;
  y?: number;
};

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: BlurTextSnapshot;
  animationTo?: BlurTextSnapshot[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  /**
   * Word/letter index offset. Lets several BlurText instances that make up
   * one visual sentence (e.g. a styled mid-sentence emphasis span) continue
   * a single stagger sequence instead of each restarting its delay count
   * from zero.
   */
  startIndex?: number;
};

function buildKeyframes(
  from: BlurTextSnapshot,
  steps: BlurTextSnapshot[]
): Record<string, Array<string | number | undefined>> {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ]);

  const keyframes: Record<string, Array<string | number | undefined>> = {};
  keys.forEach((key) => {
    keyframes[key] = [
      from[key as keyof BlurTextSnapshot],
      ...steps.map((step) => step[key as keyof BlurTextSnapshot]),
    ];
  });
  return keyframes;
}

export default function BlurText({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  startIndex = 0,
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Reduced-motion users get the final text immediately. No observer is
      // created, so there is no scroll-gated state that could ever leave
      // the text hidden.
      setReducedMotion(true);
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo<BlurTextSnapshot>(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo<BlurTextSnapshot[]>(
    () => [
      { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? 5 : -5 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  if (reducedMotion) {
    return (
      <span
        ref={ref}
        className={className}
        style={{ display: "inline-flex", flexWrap: "wrap" }}
      >
        {elements.map((segment, index) => (
          <span className="inline-block" key={index}>
            {segment === " " ? " " : segment}
            {animateBy === "words" && index < elements.length - 1 && " "}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const globalIndex = startIndex + index;

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (globalIndex * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot as TargetAndTransition}
            animate={
              (inView
                ? animateKeyframes
                : fromSnapshot) as TargetAndTransition
            }
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === " " ? " " : segment}
            {animateBy === "words" && index < elements.length - 1 && " "}
          </motion.span>
        );
      })}
    </span>
  );
}
