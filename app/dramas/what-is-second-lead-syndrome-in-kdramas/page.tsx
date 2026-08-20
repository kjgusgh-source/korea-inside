import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/dramas/what-is-second-lead-syndrome-in-kdramas`;

const pageTitle =
  "What Is Second Lead Syndrome in K-Dramas? | Meaning & Why It Happens";
const pageDescription =
  "A friendly guide to second lead syndrome in K-dramas: what the term means, why viewers end up rooting for the second lead, and how it compares to Korea's own word for the same feeling.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/dramas/what-is-second-lead-syndrome-in-kdramas",
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

const relatedGuides = [
  {
    label: "K-drama guide",
    title: "Why Itaewon Class Is a Good First K-drama",
    description:
      "A local-friendly guide to the 2020 JTBC hit, from Itaewon and DanBam to youth ambition, unfair power, and why the drama stayed memorable.",
    href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
  },
  {
    label: "K-drama guide",
    title: "Why Teach You a Lesson Is a Good First K-drama",
    description:
      "An honest guide to Netflix's most-watched K-drama of 2026, its ERPB inspectors, the school-violence premise behind it, and who this intense show is really for.",
    href: "/dramas/why-teach-you-a-lesson-is-a-good-first-kdrama",
  },
  {
    label: "Drama / Film",
    title: "Open the Drama hub",
    description:
      "HAEMIL guides for understanding Korean dramas, films, city moods, and the cultural details that make them feel familiar.",
    href: "/dramas",
  },
  {
    label: "K-pop guide",
    title: "K-pop glossary",
    description:
      "HAEMIL's growing glossary of K-pop terms, explained the way a friend who already knows the fandom would explain them.",
    href: "/kpop/glossary",
  },
];

export default function WhatIsSecondLeadSyndromeInKdramasPage() {
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
          name: "Second lead syndrome",
        },
        {
          "@type": "Thing",
          name: "K-drama",
        },
        {
          "@type": "Thing",
          name: "Korean pop culture",
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
          name: "Drama & Film",
          item: `${siteUrl}/dramas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is second lead syndrome?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/dramas"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Drama & Film
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-drama guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What is second lead syndrome in K-dramas?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Second lead syndrome is the name K-drama fans give to a very
              specific kind of heartbreak: you started the show rooting for
              the main couple, and somewhere along the way you switched sides.
              Now you are quietly hoping the &quot;wrong&quot; person wins.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  The term
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Second lead syndrome
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A fan term, not an official industry term — used when
                  viewers end up wanting the second lead to get the love
                  interest instead of the first lead.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Who it happens to
                </p>
                <p className="mt-2 text-2xl font-semibold">Any viewer</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  It is common enough that K-drama fans casually ask each
                  other, &quot;did you catch second lead syndrome on this
                  one?&quot; the way they would ask about a plot twist.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In Korean
                </p>
                <p className="mt-2 text-2xl font-semibold">서브병</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Korean has its own newer slang for a similar feeling — more
                  on how it compares below.
                </p>
              </div>
            </div>
          </article>

          <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Meaning
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                It is a viewer problem, not a plot problem.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Most K-drama romances are built around one main couple. The
                lead actor and lead actress are supposed to end up together,
                and the story is structured to get you there. Second lead
                syndrome is what happens when that structure works against
                itself — the show did its job of making you care about
                someone, it just happened to be the wrong someone.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                Fan sites such as whatNerd, Medium, Tatler Asia, and
                ScreenRant have all written about the pattern, and they
                generally describe it the same way: it is not a flaw in the
                drama, it is a side effect of the drama doing its job of
                making a secondary character feel real.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Why it happens
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    The temperature gap:
                  </span>{" "}
                  the first lead is frequently written cold, guarded, or slow
                  to open up, while the second lead is warm and attentive from
                  the start. Warmth reads fast on screen.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    A more relatable ache:
                  </span>{" "}
                  the second lead often carries a one-sided crush or bad
                  timing — a feeling many viewers recognize from their own
                  lives more than a dramatic, sweeping romance.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    The math is against them:
                  </span>{" "}
                  once you know the genre, you know the second lead is
                  structurally not going to end up with the love interest.
                  Knowing someone is set up to lose tends to make an audience
                  protective of them.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Examples fans bring up
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A few names come up again and again in these lists.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Ask different fans which second lead broke their heart, and you
              will hear some of the same names — characters like Han Ji-pyeong
              in Start-Up, Han Seo-jun in True Beauty, or Baek In-ho in Cheese
              in the Trap tend to show up on multiple outlets&apos; lists.
              Treat this as a common talking point among fans rather than an
              official ranking: these are editorial picks by individual sites,
              not a confirmed or complete list, and different viewers will
              name different characters.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              What those examples tend to have in common is not fame or
              screen time. It is that the character was written with a full,
              specific inner life instead of existing only to create tension
              for the main couple.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean culture note
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Korean has its own word for a similar feeling — 서브병
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Korean fan slang includes its own newer term for this kind of
              attachment: 서브병, roughly &quot;sub[character] sickness,&quot;
              used when someone catches feelings for a supporting character
              instead of the lead in a drama, film, or webtoon — most often a
              supporting male character.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              It is worth being careful here: no source directly confirms
              that 서브병 and &quot;second lead syndrome&quot; are officially
              the same concept translated across two languages. What is fair
              to say is that both terms exist because the same emotional
              pattern shows up for both Korean and international audiences —
              a well-written supporting character can pull the audience&apos;s
              heart away from the story&apos;s intended center, and both
              fandoms eventually needed a word for it.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related guides
                </h2>
              </div>

              <Link
                href="/dramas"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Drama & Film →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
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
        </div>
      </main>
    </>
  );
}
