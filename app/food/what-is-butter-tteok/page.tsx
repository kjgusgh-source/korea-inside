import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-butter-tteok`;

const pageTitle = "What Is Butter Tteok? Korea’s Viral Butter Rice Cake, Explained";
const pageDescription =
  "A friendly HAEMIL guide to butter tteok, Korea’s viral butter rice cake trend from early 2026 — what it tastes like, where it came from, and how it compares to Dubai chewy cookies.";

const heroImage = {
  src: "/images/food/butter-tteok.webp",
  alt: "A shell-shaped butter tteok pastry with a crisp, caramelized crust.",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const dubaiCookieImage = {
  src: "/images/food/dubai-chewy-cookie.webp",
  alt: "A Dubai chewy cookie, the Korean bakery take on the pistachio-kunafa Dubai chocolate trend.",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: Butter tteok / 버터떡",
  "What it is: A baked glutinous-rice dessert made with butter and milk",
  "Texture: Crisp and caramelized outside, soft and chewy inside",
  "Background: Popularized in Korea as 'Shanghai butter tteok,' a baked glutinous-rice dessert commonly linked in Korean coverage to Shanghai-style huangyou niangao",
  "Trend timing: Went viral across Korea in early 2026, peaking around March",
  "Also trending in 2026: Dubai chewy cookies (두바이쫀득쿠키), a pistachio-kunafa treat that became popular just before butter tteok",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "What Is Tteokbokki?",
    description:
      "Chewy rice cakes in red sauce — a very different kind of tteok, and one of Korea's most everyday comfort foods.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "What Is Bungeoppang?",
    description:
      "Fish-shaped winter street snacks — another Korean treat that trades on shape and nostalgia as much as flavor.",
    href: "/food/what-is-bungeoppang",
  },
  {
    label: "Food",
    title: "Open the Food hub",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea and how to order without turning every meal into homework.",
    href: "/food",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/what-is-butter-tteok",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "HAEMIL",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function WhatIsButterTteokPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      author: {
        "@type": "Organization",
        name: "HAEMIL",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "HAEMIL",
        url: siteUrl,
      },
      inLanguage: "en",
      about: [
        {
          "@type": "Thing",
          name: "Butter Tteok",
        },
        {
          "@type": "Thing",
          name: "Korean food",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Food",
          item: `${siteUrl}/food`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is butter tteok?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
          <SiteHeader />

          <article className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/food"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Food
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Food guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What Is Butter Tteok? Korea&apos;s Viral Butter Rice Cake, Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Butter tteok looks like a scallop shell that wandered into a Korean
              bakery case, and for a few months in 2026, it felt like it was
              everywhere.
            </p>
          </article>

          <PostImageFigure image={heroImage} variant="hero" priority />

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                The name is a little confusing at first. Butter tteok is not the
                chewy rice cake you get in tteokbokki, floating in red sauce at a
                street stall. It borrows the word tteok because it is made from
                glutinous rice dough, but the resemblance mostly stops there.
                Bakeries mix the rice dough with butter and milk, pour it into a
                small shell-shaped mold, and bake it until the outside turns crisp
                and caramelized. Break one open and the inside is soft, dense, and
                pleasantly chewy — closer to a rich rice cookie than anything
                you would call a snack.
              </p>

              <p>
                In Korea, the trend became widely known as &quot;Shanghai butter
                tteok.&quot; Korean coverage commonly connects it with
                Shanghai-style huangyou niangao, although similar baked
                glutinous-rice desserts also exist in other food traditions.
              </p>

              <p>
                Part of why butter tteok spread so quickly says less about the
                tteok itself and more about how dessert trends move in Korea. A
                new treat can go from unknown to sold-out within a couple of
                weeks once a few cafés post it and the hashtags start climbing —
                the same pattern that carried tanghulu (candied fruit skewers)
                through Korea a couple of years earlier. One professor
                interviewed by local media around the peak of the trend pointed
                to exactly that: Korean dessert trends now tend to have very
                short lifespans, rising fast and cooling just as quickly.
              </p>

              <p>
                If you are reading this expecting butter tteok to still be the
                hottest thing in Seoul, it is worth being straightforward: it
                is not, not anymore. Coverage from late March 2026 already
                described daily sales at popular stores dropping to about half
                of what they were just weeks earlier, and several Korean
                outlets reported through the spring that the initial rush had
                cooled considerably. Search interest followed the same
                pattern, spiking sharply in mid-March and falling off soon
                after. None of that makes butter tteok a bad dessert — it just
                means this page sits closer to explaining what swept through
                Korea's cafés earlier in 2026 than promising you will find a
                line out the door today.
              </p>

              <p>
                If you have spent any time around Korean dessert cafés, you
                will notice these viral treats rarely arrive alone — one trend
                tends to fade just as another takes its place. Before butter
                tteok, it was Dubai chewy cookies (두바이쫀득쿠키), the Korean
                take on the pistachio-and-kunafa Dubai chocolate that went
                viral worldwide. In Seoul, some bakeries reportedly had
                customers lining up for hours when Dubai chewy cookies first
                landed. Butter tteok arrived a little after, cheaper and
                easier to find, and picked up plenty of media coverage of its
                own. Butter tteok followed as the next major viral dessert
                trend as interest in Dubai chewy cookies cooled. That kind of
                quick handoff, one dessert trend giving way to the next, is
                fairly normal in Korea right now.
              </p>

              <PostImageFigure
                image={dubaiCookieImage}
                variant="inline"
                align="right"
              />

              <p>
                If you want to try butter tteok while traveling in Korea,
                versions have appeared at independent bakeries, cafés,
                convenience stores, and larger chains, although availability
                varies as the trend has cooled. Ask for the plain version first; the butter
                and caramelized crust do most of the work, and the filled
                versions build on that base flavor rather than replacing it.
                Like a lot of Korean dessert trends, it may not stay on every
                menu for long, so if a bakery near you still has it, that is
                reason enough to give it a try.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related food guides
                </h2>
              </div>

              <Link
                href="/food"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Food →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--celadon)]">
                    {guide.label}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {guide.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                    Read guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
