import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-dujjonku-dubai-chewy-cookie`;

const pageTitle = "What Is Dujjonku (두쫀쿠)? Korea's Dubai Chewy Cookie, Explained";
const pageDescription =
  "A friendly HAEMIL guide to dujjonku, one of Korea's biggest viral desserts of 2026 — what it is, where it came from, and why it tastes different from shop to shop.";

const heroImage = {
  src: "/images/food/dubai-chewy-cookie.webp",
  alt: "A Dubai chewy cookie, the Korean bakery take on the pistachio-kadayif Dubai chocolate trend.",
  credit: "AI-generated image by HAEMIL",
  license: "Owned by HAEMIL",
};

const tanghuluImage = {
  src: "/images/food/tanghulu-strawberry.webp",
  alt: "Candied strawberry tanghulu skewers, an earlier Korean viral street snack trend.",
  credit: "AI-generated image by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: 두쫀쿠 (dujjonku) — short for 두바이 쫀득쿠키, or \"Dubai chewy cookie\"",
  "What it is: A ball-shaped cookie with a chewy marshmallow shell wrapped around a crunchy kadayif and pistachio filling, finished with cocoa powder",
  "Inspired by: Dubai chocolate, the pistachio-and-kadayif chocolate bar that first went viral in Korea in 2024",
  "Where to find it: Independent cafés and bakeries, plus convenience store versions from chains like CU and GS25",
  "Texture and flavor vary noticeably from shop to shop, depending on the kadayif, marshmallow, and pistachio spread each maker uses",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "What Is Butter Tteok?",
    description:
      "Another 2026 Korean viral dessert — a baked glutinous-rice treat with its own short, fast-moving trend cycle.",
    href: "/food/what-is-butter-tteok",
  },
  {
    label: "Food guide",
    title: "What Is Tteokbokki?",
    description:
      "Chewy rice cakes in red sauce — one of Korea's most everyday comfort foods, and a very different kind of chewy.",
    href: "/food/what-is-tteokbokki",
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
    canonical: "/food/what-is-dujjonku-dubai-chewy-cookie",
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
export default function WhatIsDujjonkuPage() {
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
          name: "Dujjonku",
        },
        {
          "@type": "Thing",
          name: "Dubai chewy cookie",
        },
        {
          "@type": "Thing",
          name: "Korean food",
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
          name: "What is dujjonku?",
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
              What Is Dujjonku (두쫀쿠)? Korea&apos;s Dubai Chewy Cookie,
              Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you saw a ball-shaped cocoa-dusted dessert spreading through
              Korean cafés in 2026, that was dujjonku — and it did not come
              out of nowhere.
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
            <div className="flow-root space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                What is dujjonku?
              </h2>

              <p>
                Dujjonku (두쫀쿠) is Korean shorthand for 두바이 쫀득쿠키, or
                &quot;Dubai chewy cookie.&quot; It is a small, ball-shaped
                treat built around a chewy, marshmallow-like shell wrapped
                around a filling of butter-fried kadayif (thin shredded
                pastry threads) and pistachio cream, then dusted in cocoa
                powder for a look that is often compared to a truffle. Bite
                into one and you get a mix of textures in a single piece:
                stretchy on the outside, crunchy in the middle, and rich with
                pistachio flavor throughout.
              </p>

              <h2 className="text-2xl font-semibold text-[var(--text)]">
                How it came out of the Dubai chocolate craze
              </h2>

              <p>
                Dujjonku did not appear out of nowhere — its direct
                background is the Dubai chocolate trend. The original Dubai
                chocolate bar, filled with pistachio cream, tahini, and
                crunchy kadayif, went viral in Korea starting in 2024 after
                short-form videos showing its gooey, fibrous cross-section
                spread widely online. Korean bakers took that same flavor
                combination — pistachio and kadayif — and reworked it into a
                new, chewier cookie format in 2025, and by early 2026 it had
                become a viral dessert in its own right, with independent
                cafés and convenience store chains like CU and GS25 both
                selling their own versions. Some coverage also linked a
                widely shared celebrity social media moment to the early-2026
                jump in demand, though by most accounts the trend was already
                building before that. Exactly who made the first version, and
                precisely when, is not something that can be pinned down from
                available reporting, so this page does not claim a single
                inventor or an exact starting date.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="flow-root space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                Korea moves through dessert trends fast
              </h2>

              <PostImageFigure
                image={tanghuluImage}
                variant="inline"
                align="right"
              />

              <p>
                Dujjonku is really just the latest stop in a pattern that
                keeps repeating in Korea. Tanghulu — candied fruit on a
                skewer, coated in a hard sugar shell — was one of the biggest
                viral snacks in Korea before any of this, surging across
                Korea in 2023 as ASMR videos of the crackling sugar shell
                took over social media. Tanghulu did not create dujjonku,
                and the two trends are not directly connected; the more
                accurate way to think about it is that Korea's dessert scene
                simply moves through viral trends quickly, one after another.
                Tanghulu had its moment, Dubai chocolate followed, and
                dujjonku became one of 2026's clearest examples of that same
                fast-moving dessert cycle.
              </p>

              <h2 className="text-2xl font-semibold text-[var(--text)]">
                Why texture changes so much from shop to shop
              </h2>

              <p>
                Because dujjonku is really three components layered
                together — kadayif, marshmallow, and pistachio spread — small
                differences in each one add up to a very different final
                bite. Recipes vary in how crisp the kadayif is, how thick and
                chewy the marshmallow layer feels, and how generous or
                strongly flavored the pistachio filling is. None of these
                choices is objectively &quot;correct&quot; — they just
                explain why two dujjonku from two different cafés can taste
                like fairly different desserts.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                A local note from HAEMIL
              </h2>

              <p>
                I tried dujjonku from several shops in Korea, and the
                texture varied more than I expected. Some had very crunchy
                kadayif, while others were much softer, and the marshmallow
                layer could range from light and stretchy to quite dense and
                chewy. The biggest difference for me was the pistachio
                filling — versions with a stronger, higher-quality pistachio
                flavor and a more generous amount of it tasted noticeably
                richer and better balanced. For me, it is really that balance
                between kadayif, marshmallow, and pistachio that decides
                whether a dujjonku is just okay or genuinely great, more than
                any single ingredient on its own.
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
