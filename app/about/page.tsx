import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "About | HAEMIL",
  description:
    "HAEMIL shares Korean stories, K-pop moments, food, language, and culture like a local friend explaining Korea to you.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          About HAEMIL
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Beautiful Korean stories, told by a local friend.
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted)]">
          <p>
            HAEMIL is a culture guide for people who discovered Korea through
            K-pop, dramas, food, travel, language, or a single video that stayed
            in their mind.
          </p>

          <p>
            This site is not a textbook and not a tourist brochure. HAEMIL
            explains Korean culture in a warm, simple, and story-like way, as if
            a local friend were sitting next to you and saying, “This is why
            that moment feels special.”
          </p>

          <p>
            K-pop is one of the easiest doors into Korea, but it is not the only
            story here. From idol fancams and stage details to Korean words,
            food habits, everyday emotions, and cultural context, HAEMIL helps
            visitors understand the feeling behind the scene.
          </p>
        </div>
      </section>
    </main>
  );
}