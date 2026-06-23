import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import IdolRequestForm from "../../components/IdolRequestForm";
import KpopExplorer from "../../components/KpopExplorer";
import { getKpopGroups } from "../../lib/kpopData";

export default function KpopPage() {
  const groups = getKpopGroups();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--accent)] opacity-10">
            K
          </div>

          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop / Idols
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Start with the idol you like. Stay for the culture around it.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            K-pop is one of the easiest ways to enter Korean culture. This page
            helps visitors find groups, members, fancams, stage words, fan
            culture, and the small moments that make people curious about Korea.
          </p>
        </section>

        <KpopExplorer groups={groups} />

        <IdolRequestForm />
      </div>
    </main>
  );
}