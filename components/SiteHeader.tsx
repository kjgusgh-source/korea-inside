import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type SiteHeaderProps = {
  showNav?: boolean;
};

export default function SiteHeader({ showNav = true }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="group">
          <p className="text-3xl font-semibold tracking-tight md:text-4xl">
            HAE<span className="text-[var(--accent)]">MIL</span>
          </p>

          <p className="mt-2 hidden text-sm leading-5 text-[var(--muted)] sm:block">
            Beautiful Korean stories, told by a local friend.
          </p>
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-3 md:w-auto">
        {showNav && (
          <nav className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-sm text-[var(--muted)] md:flex-none md:gap-6 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0">
            <Link
              href="/kpop"
              className="shrink-0 rounded-full px-3 py-2 hover:text-[var(--accent)] md:p-0"
            >
              K-pop
            </Link>

            <Link
              href="/travel"
              className="shrink-0 rounded-full px-3 py-2 hover:text-[var(--accent)] md:p-0"
            >
              Travel
            </Link>

            <Link
              href="/food"
              className="shrink-0 rounded-full px-3 py-2 hover:text-[var(--accent)] md:p-0"
            >
              Food
            </Link>

            <Link
              href="/kpop/glossary"
              className="shrink-0 rounded-full px-3 py-2 hover:text-[var(--accent)] md:p-0"
            >
              Glossary
            </Link>

            <Link
              href="/#latest"
              className="shrink-0 rounded-full px-3 py-2 hover:text-[var(--accent)] md:p-0"
            >
              Latest
            </Link>
          </nav>
        )}

        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}