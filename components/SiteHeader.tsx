import Link from "next/link";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import TranslateButton from "./TranslateButton";

type SiteHeaderProps = {
  showNav?: boolean;
};

export default function SiteHeader({ showNav = true }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <BrandMark />

          <div>
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">
              HAE<span className="text-[var(--accent)]">MIL</span>
            </p>

            <p className="mt-2 hidden text-sm leading-5 text-[var(--muted)] sm:block">
              Beautiful Korean stories, told by a local friend.
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <TranslateButton />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-3 md:w-auto md:mx-auto">
        {showNav && (
          <nav className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-sm text-[var(--muted)] md:flex-none md:gap-8 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:tracking-wide">
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
              href="/dramas"
              className="shrink-0 rounded-full px-3 py-2 hover:text-[var(--accent)] md:p-0"
            >
              Drama
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
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <TranslateButton />
        <ThemeToggle />
      </div>
    </header>
  );
}