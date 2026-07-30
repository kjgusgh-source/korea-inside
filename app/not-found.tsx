import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found | HAEMIL",
  description: "This HAEMIL page could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

const QUICK_LINKS = [
  { label: "K-pop", href: "/kpop" },
  { label: "Food", href: "/food" },
  { label: "Travel", href: "/travel" },
  { label: "Drama", href: "/dramas" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <SiteHeader />

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 py-16 text-center md:p-10 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            This page wandered off.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
            The page you were looking for doesn&apos;t exist, or the link may
            be outdated. Let&apos;s get you back to something real.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Back to HAEMIL home
          </Link>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
