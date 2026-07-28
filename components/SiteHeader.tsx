"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMegaMenu from "./HeaderMegaMenu";
import { HeaderSearchControl, HeaderLanguageControl } from "./HeaderControls";
import ThemeToggle from "./ThemeToggle";

type SiteHeaderProps = {
  showNav?: boolean;
};

const MOBILE_NAV_LINKS = [
  { label: "K-pop", href: "/kpop" },
  { label: "Travel", href: "/travel" },
  { label: "Food", href: "/food" },
  { label: "Drama", href: "/dramas" },
  { label: "Glossary", href: "/kpop/glossary" },
  { label: "Latest", href: "/#latest" },
];

export default function SiteHeader({ showNav = true }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <HeaderLogo />
        </Link>

        {showNav && (
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <HeaderMegaMenu />
            <Link
              href="/#latest"
              className="text-sm font-semibold text-[var(--text)] transition duration-150 hover:text-[var(--accent)]"
            >
              Latest
            </Link>
          </div>
        )}

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <HeaderSearchControl />
          <HeaderLanguageControl />
          <ThemeToggle />
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <HeaderSearchControl />
          <HeaderLanguageControl />
          <ThemeToggle />
        </div>
      </div>

      {showNav && (
        <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap border-b border-[var(--border)] py-3 text-[13px] font-medium [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
          {MOBILE_NAV_LINKS.map((link) => {
            const isActive =
              link.href !== "/#latest" &&
              (pathname === link.href || pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative shrink-0 pb-1 transition-colors duration-150 ${
                  isActive ? "text-[var(--text)]" : "text-[var(--muted)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
