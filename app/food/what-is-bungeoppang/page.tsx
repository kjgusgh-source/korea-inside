import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-bungeoppang`;

const pageTitle = "What Is Bungeoppang? Korea’s Fish-Shaped Winter Snack";
const pageDescription =
  "A friendly HAEMIL guide to bungeoppang, Korea’s fish-shaped winter street snack filled with red bean, custard, or other sweet fillings — and why it feels so nostalgic in cold weather.";

const heroImage = {
  src: "/images/food/bungeoppang.webp",
  alt: "Fresh bungeoppang fish-shaped Korean pastries",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: Bungeoppang / 붕어빵",
  "Meaning: Fish-shaped bread, often translated as “carp bread”",
  "Important: It does not contain fish",
  "Classic filling: Sweet red bean paste",
  "Other fillings: Custard, cream, sweet potato, chocolate, or seasonal variations depending on the vendor",
  "Best season: Winter and cold weather",
  "Where to find it: Street stalls, markets, subway-area stalls, and some snack shops, depending on season and neighborhood",
  "Good for: A warm street snack while walking",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean street toast guide",
    description:
      "A local-friendly guide to Korea’s sweet egg sandwich, from old street stalls to modern toast chains.",
    href: "/food/what-is-korean-street-toast",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Korean BBQ guide for first-time visitors",
    description:
      "A warm beginner-friendly guide to what to order first, how to eat with banchan and ssam, and why Korean barbecue feels social.",
    href: "/food/korean-bbq-guide-first-time",
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
    canonical: "/food/what-is-bungeoppang",
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

export default function WhatIsBungeoppangPage() {
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
          name: "Bungeoppang",
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
          name: "What is bungeoppang?",
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
              What Is Bungeoppang? Korea&apos;s Fish-Shaped Winter Snack
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Bungeoppang is one of those Korean foods that looks confusing for
              about two seconds.
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
                It is shaped like a fish, but it does not taste like fish and
                does not contain fish. Bungeoppang, or 붕어빵, is a warm
                fish-shaped snack usually filled with sweet red bean paste. The
                name roughly means &quot;carp bread,&quot; because the mold
                looks like a small fish — but for many Koreans, the important
                part is the season.
              </p>

              <p>
                Bungeoppang feels like winter. You usually start noticing it
                when the air gets cold — a small stall near a subway station,
                market street, school area, or neighborhood corner, with a metal
                mold, warm batter, sweet filling, and that smell that makes
                people check their pockets for coins or a card. A good
                bungeoppang is lightly crisp outside, soft inside, warm enough to
                hold carefully, and sweet without feeling like a big dessert.
                The classic filling is red bean paste (pat); if you are new to
                Korean sweets, it may feel unusual at first, but it is one of
                the most familiar sweet flavors here — gentle, earthy, and not
                too loud.
              </p>

              <p>
                These days you may also find custard or cream-filled bungeoppang,
                plus sweet potato, chocolate, cheese, or seasonal fillings
                depending on the vendor and neighborhood. The red bean one is
                the old classic; custard is the easy modern favorite for many
                first-time visitors. Part of the fun is choosing between them —
                Koreans sometimes joke about red bean vs custard, head first vs
                tail first, crisp vs soft. Not serious questions, but they show
                how familiar the snack feels.
              </p>

              <p>
                For travelers, bungeoppang gives you a very local winter moment.
                Find a stall, choose a filling, and eat it while it is still
                warm — the outside still has a little crispness and the filling
                is hot. If you carry it around too long, it becomes softer; still
                good, but not the same.
              </p>

              <p>
                Bungeoppang can be seasonal. In Korea it is much easier to find
                in winter than in the middle of summer. Some shops sell it
                year-round, and some cafés or snack brands make their own
                versions, but the classic street-stall feeling belongs to cold
                weather. Visit in December, January, or February and the charm
                clicks faster — cold hands really do make bungeoppang taste
                better in feeling, not just as a joke.
              </p>

              <p>
                When the weather is cold, a warm fish-shaped snack becomes more
                than a snack — a small comfort. People buy a few pieces to
                share; office workers grab one on the way home; students eat them
                after class. It reminds people of winter streets, school days,
                neighborhood stalls, and ordinary evenings — closer to a small
                seasonal memory you can eat than a luxury dessert.
              </p>

              <p>
                You may hear comparisons to Japanese taiyaki. The two snacks are
                related in shape and idea, but in Korea bungeoppang has its own
                everyday feeling, tied to winter street stalls and the comfort of
                finding one when the weather turns cold. It is not about the fish
                shape — it is about the cold day, standing near a warm stall for
                a minute, choosing red bean or custard, and eating something
                simple before you keep walking. If you see it in Korea, try one,
                especially in winter.
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
