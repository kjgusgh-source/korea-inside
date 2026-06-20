"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("korea-inside-theme");
    const initialTheme: Theme = savedTheme === "dark" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("korea-inside-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#1A1A1A" : "#FAF9F6",
        color: theme === "light" ? "#FAF9F6" : "#1A1A1A",
        borderColor: theme === "light" ? "#1A1A1A" : "#FAF9F6",
      }}
      className="relative z-50 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}