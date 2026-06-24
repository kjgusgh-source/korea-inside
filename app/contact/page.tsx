import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | HAEMIL",
  description:
    "Contact HAEMIL or suggest Korean culture topics, idols, groups, fancams, and stories to cover next.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Suggest a story, idol, fancam, or Korean culture moment.
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted)]">
          <p>
            HAEMIL grows from the questions people have about Korea. If there is
            an idol, group, video, Korean word, food, drama scene, or cultural
            habit you want explained, you can send a request through the K-pop
            request form.
          </p>

          <p>
            Requests are reviewed before they become new pages. HAEMIL may use
            submitted ideas to decide what to cover next, but not every request
            will be published.
          </p>

          <div className="pt-4">
            <Link
              href="/kpop"
              className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Go to request form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}