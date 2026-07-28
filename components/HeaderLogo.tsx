"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export default function HeaderLogo() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(readTheme());

    const observer = new MutationObserver(() => {
      setTheme(readTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const src =
    theme === "dark"
      ? "/brand/haemil-logo-dark.png"
      : "/brand/haemil-logo-light.png";

  return (
    <Image
      src={src}
      alt="HAEMIL"
      width={2172}
      height={724}
      priority
      className="h-auto w-[100px] object-contain md:w-[120px]"
    />
  );
}
