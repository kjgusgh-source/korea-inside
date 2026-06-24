import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold">
            HAE<span className="text-[var(--accent)]">MIL</span>
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
            Beautiful Korean stories, told by a local friend.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-[var(--muted)]">
          <Link
            href="/about"
            className="transition hover:text-[var(--accent)]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[var(--accent)]"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="transition hover:text-[var(--accent)]"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}