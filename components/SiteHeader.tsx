import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type SiteHeaderProps = {
  showNav?: boolean;
};

export default function SiteHeader({ showNav = true }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="group">
        <p className="text-2xl font-semibold tracking-tight">
          Korea <span className="text-[var(--accent)]">Inside</span>
        </p>
        <p className="mt-1 hidden text-xs text-[var(--muted)] sm:block">
          A warm local guide to Korean culture
        </p>
      </Link>

      <div className="flex items-center gap-3">
        {showNav && (
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
  <Link href="/kpop" className="hover:text-[var(--accent)]">
    K-pop
  </Link>
  <Link href="/#latest" className="hover:text-[var(--accent)]">
    Latest
  </Link>
</nav>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}