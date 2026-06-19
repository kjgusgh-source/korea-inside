import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korea Inside | Discover the Real Korea Beyond K-Pop",
  description:
    "Explore Korean memes, expressions, food, hidden places, K-pop, dramas, and cultural stories explained for global visitors.",
};

const categories = [
  {
    title: "Korean Memes",
    description: "Understand viral Korean jokes, internet slang, and social media trends.",
    tag: "Memes",
  },
  {
    title: "Korean Expressions",
    description: "Learn words like Nunchi, Jeong, Fighting, Aegyo, and why they matter.",
    tag: "Language",
  },
  {
    title: "K-Pop",
    description: "Beginner-friendly guides to idols, fandoms, comeback culture, and music shows.",
    tag: "Music",
  },
  {
    title: "Korean Food",
    description: "From convenience store snacks to regional dishes and drinking culture.",
    tag: "Food",
  },
  {
    title: "K-Dramas",
    description: "Discover drama recommendations and the cultural meanings behind scenes.",
    tag: "Drama",
  },
  {
    title: "Hidden Places",
    description: "Local spots, historic streets, small towns, and places tourists often miss.",
    tag: "Travel",
  },
];

const featuredPosts = [
  {
    title: "What Is Nunchi? The Korean Art of Reading the Room",
    category: "Korean Expressions",
    excerpt:
      "Nunchi is more than politeness. It is a social skill deeply connected to Korean relationships and daily life.",
  },
  {
    title: "Why Korean Convenience Stores Feel Different",
    category: "Korean Lifestyle",
    excerpt:
      "From instant ramen tables to seasonal snacks, Korean convenience stores are part of everyday culture.",
  },
  {
    title: "What Does Fighting Mean in Korea?",
    category: "Korean Expressions",
    excerpt:
      "Foreigners often hear Koreans say 'Fighting!' — but it does not mean fighting someone.",
  },
];

const trends = [
  "Nunchi",
  "Jeong",
  "Korean PC Bang",
  "Convenience Store Culture",
  "Korean Memes",
  "Hidden Seoul",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#E30B5C33,transparent_35%),radial-gradient(circle_at_bottom_right,#1F51FF33,transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight">
              Korea <span className="text-[#E30B5C]">Inside</span>
            </div>
            <nav className="hidden gap-6 text-sm text-white/70 md:flex">
              <a href="#memes" className="hover:text-white">
                Memes
              </a>
              <a href="#expressions" className="hover:text-white">
                Expressions
              </a>
              <a href="#kpop" className="hover:text-white">
                K-Pop
              </a>
              <a href="#travel" className="hover:text-white">
                Hidden Korea
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                The real Korea, explained for the world
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Discover the Real Korea{" "}
                <span className="bg-gradient-to-r from-[#E30B5C] to-[#1F51FF] bg-clip-text text-transparent">
                  Beyond K-Pop
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Korea Inside helps global visitors understand Korean memes,
                expressions, food, hidden places, dramas, K-pop, and everyday
                culture — with context only locals can explain.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#featured"
                  className="rounded-full bg-[#E30B5C] px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_30px_rgba(227,11,92,0.35)] transition hover:scale-105"
                >
                  Start Exploring
                </a>
                <a
                  href="#categories"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Categories
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {trends.map((trend) => (
                  <span
                    key={trend}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60"
                  >
                    #{trend}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#E30B5C] via-[#121212] to-[#1F51FF] p-[1px]">
                <div className="rounded-[1.5rem] bg-[#161616] p-6">
                  <p className="text-sm font-semibold text-[#E30B5C]">
                    Today&apos;s Culture Note
                  </p>
                  <h2 className="mt-4 text-3xl font-black">
                    What foreigners often misunderstand about Korea
                  </h2>
                  <p className="mt-4 leading-7 text-white/65">
                    Many Korean behaviors are connected to ideas like respect,
                    group harmony, speed, hospitality, and historical resilience.
                    Korea Inside explains the hidden context behind what you see
                    in dramas, streets, restaurants, and online communities.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-3xl">🧠</div>
                      <p className="mt-3 font-bold">Nunchi</p>
                      <p className="mt-1 text-sm text-white/55">
                        Reading the room
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-3xl">🔥</div>
                      <p className="mt-3 font-bold">Fighting</p>
                      <p className="mt-1 text-sm text-white/55">
                        Korean encouragement
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-3xl">🍜</div>
                      <p className="mt-3 font-bold">Food Culture</p>
                      <p className="mt-1 text-sm text-white/55">
                        More than meals
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-3xl">📍</div>
                      <p className="mt-3 font-bold">Hidden Korea</p>
                      <p className="mt-1 text-sm text-white/55">
                        Beyond tourist maps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E30B5C]">
              Explore Korea
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Culture categories built for global readers
            </h2>
          </div>
          <p className="max-w-xl text-white/60">
            Each category is designed around what international visitors search
            for, misunderstand, or become curious about after watching Korean
            content.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#E30B5C]/60 hover:bg-white/[0.07]"
            >
              <span className="rounded-full bg-[#E30B5C]/15 px-3 py-1 text-xs font-bold text-[#E30B5C]">
                {category.tag}
              </span>
              <h3 className="mt-6 text-2xl font-black">{category.title}</h3>
              <p className="mt-3 leading-7 text-white/60">
                {category.description}
              </p>
              <p className="mt-6 text-sm font-bold text-white/80 group-hover:text-[#E30B5C]">
                Explore →
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="featured"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1F51FF]">
              Featured Stories
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Start with what foreigners actually wonder about
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-white/10 bg-[#121212] p-7"
              >
                <p className="text-sm font-bold text-[#1F51FF]">
                  {post.category}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-snug">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-white/60">{post.excerpt}</p>
                <button className="mt-8 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:border-[#E30B5C] hover:text-[#E30B5C]">
                  Read Article
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#E30B5C]/20 to-[#1F51FF]/20 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                Monetization Ready
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Built for SEO, AdSense, and long-term content growth
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Korea Inside will grow through searchable evergreen articles:
                Korean expressions, cultural explainers, hidden travel guides,
                food guides, and entertainment context.
              </p>
            </div>
            <div className="rounded-3xl border border-dashed border-white/20 bg-black/20 p-6 text-center">
              <p className="text-sm text-white/50">Future Ad Space</p>
              <p className="mt-3 text-2xl font-black">Google AdSense Ready</p>
              <p className="mt-2 text-sm text-white/50">
                Reserved layout area to prevent CLS later
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/45">
        <p>© 2026 Korea Inside. Explaining Korea to the world.</p>
      </footer>
    </main>
  );
}
