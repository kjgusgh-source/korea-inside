import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import HomeHero from "../components/HomeHero";
import HomeCarousel from "../components/HomeCarousel";
import HomeExploreGrid from "../components/HomeExploreGrid";
import HomePopularTabs from "../components/HomePopularTabs";
import IdolRequestForm from "../components/IdolRequestForm";
import BackToTopButton from "../components/BackToTopButton";
import SectionReveal from "../components/SectionReveal";
import LightRays from "../components/LightRays";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 4);

  return (
    <main className="home-page relative isolate min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div
        aria-hidden="true"
        className="home-page-rays pointer-events-none absolute inset-x-0 top-0 z-0 hidden md:block"
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#b96f3f"
          raysSpeed={1.15}
          lightSpread={0.42}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={1.15}
          saturation={0.9}
          followMouse={true}
          mouseInfluence={0.22}
          noiseAmount={0.045}
          distortion={0.075}
        />
      </div>

      <div className="relative z-10">
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <SiteHeader />

        <HomeHero />

        <section className="py-8 md:py-14">
          <SectionReveal variant="preview">
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              Not a textbook. Not a tourist brochure. HAEMIL shares the small
              scenes, living words, and hidden context behind everyday Korean
              culture.
            </p>

            <h2 className="mb-6 mt-6 text-2xl font-semibold md:text-3xl">
              Korea right now
            </h2>

            <HomeCarousel />
          </SectionReveal>
        </section>

        <section className="border-t border-[var(--border)] py-8 md:py-14">
          <SectionReveal>
            <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
              Explore by interest
            </h2>

            <HomeExploreGrid />
          </SectionReveal>
        </section>

        <section className="border-t border-[var(--border)] py-8 md:py-14">
          <SectionReveal>
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
              Popular with HAEMIL readers
            </h2>

            <HomePopularTabs />
          </SectionReveal>
        </section>

        <section id="latest" className="border-t border-[var(--border)] py-8 md:py-14">
          <SectionReveal>
            <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
              Latest notes
            </h2>

            <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
              {latestPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/${post.categorySlug}/${post.slug}`}
                  className="group flex flex-col gap-2 py-6 transition md:flex-row md:items-baseline md:gap-8 md:py-7"
                >
                  <span className="font-mono text-sm text-[var(--muted)] md:w-10 md:shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-[var(--accent)]">
                        {post.categoryLabel}
                      </span>
                      <span className="text-[var(--muted)]">{post.readingTime}</span>
                    </div>

                    <h3 className="text-2xl font-semibold leading-tight transition group-hover:text-[var(--accent)]">
                      {post.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 max-w-2xl leading-7 text-[var(--muted)] md:line-clamp-none">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </section>
      </section>

      <section className="mx-auto max-w-7xl border-t border-[var(--border)] px-5 py-10 md:px-8 md:py-20">
        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-10">
            <div>
              <div className="mb-4 h-[2px] w-12 bg-[var(--accent)]" aria-hidden="true" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                HAEMIL SINCE JULY 1, 2026
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                A small guide, growing with every question.
              </h2>

              <p className="mt-5 leading-7 text-[var(--muted)]">
                HAEMIL began with a simple idea: make Korean culture easier to
                understand, not through textbook definitions, but through the
                small details a local friend would point out.
              </p>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                HAEMIL is still growing. Your questions, requests, and
                experiences can help shape what comes next.
              </p>
            </div>

            <IdolRequestForm showHeading={false} />
          </div>
        </SectionReveal>
      </section>

      <BackToTopButton />
      </div>
    </main>
  );
}
