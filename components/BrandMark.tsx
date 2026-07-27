"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export default function BrandMark() {
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
      ? "/brand/haemil-symbol-dark.png"
      : "/brand/haemil-symbol-light.png";

  return (
    <Image
      src={src}
      alt=""
      width={512}
      height={512}
      priority
      className="h-9 w-9 object-contain md:h-11 md:w-11"
    />
  );
}
