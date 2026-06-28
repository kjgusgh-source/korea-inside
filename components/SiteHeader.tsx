import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type SiteHeaderProps = {
  showNav?: boolean;
};

export default function SiteHeader({ showNav = true }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="group">
        <p className="text-3xl font-semibold tracking-tight md:text-4xl">
          HAE<span className="text-[var(--accent)]">MIL</span>
        </p>

        <p className="mt-2 hidden text-sm leading-5 text-[var(--muted)] sm:block">
          Beautiful Korean stories, told by a local friend.
        </p>
      </Link>

      <div className="flex items-center gap-3">
        {showNav && (
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <Link href="/kpop" className="hover:text-[var(--accent)]">
              K-pop
            </Link>

            <Link
              href="/kpop/glossary"
              className="hover:text-[var(--accent)]"
            >
              Glossary
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