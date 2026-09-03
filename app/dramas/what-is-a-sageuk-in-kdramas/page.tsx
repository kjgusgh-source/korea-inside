import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/dramas/what-is-a-sageuk-in-kdramas`;

const pageTitle = "What Is a Sageuk? | Korean Historical Drama Genre Explained";
const pageDescription =
  "A friendly guide to sageuk, the Korean historical drama genre — what actually counts as one, how jeongtong, fusion, and faction sageuk differ, and the details that often confuse first-time viewers.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/dramas/what-is-a-sageuk-in-kdramas",
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
    title: "What Is Second Lead Syndrome in K-Dramas?",
    description:
      "A friendly guide to second lead syndrome: what the term means, why viewers end up rooting for the second lead, and how it compares to Korea's own word for the same feeling.",
    href: "/dramas/what-is-second-lead-syndrome-in-kdramas",
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

export default function WhatIsASageukInKdramasPage() {
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
          name: "Sageuk",
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
          name: "What is a sageuk?",
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
              What is a sageuk in K-dramas?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you have been working through a Netflix or Disney+
              recommendation list and landed on something with hanbok, formal
              bowing, and characters addressing a king, you have probably
              seen the word &quot;sageuk&quot; in a review or a genre tag.
              K-drama sites use it constantly without ever explaining it, so
              here is the actual answer.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  The term
                </p>
                <p className="mt-2 text-2xl font-semibold">Sageuk</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A general Korean word for a drama or film set in the
                  country&apos;s past — not the title of one specific show.
                  Any historical Korean drama can be called a sageuk.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Time period
                </p>
                <p className="mt-2 text-2xl font-semibold">Before 1897</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Sageuk are typically set sometime before 1897, when the
                  Joseon dynasty came to an end. Once a story moves into the
                  modern era, it usually stops being called a sageuk.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In Korean
                </p>
                <p className="mt-2 text-2xl font-semibold">史劇</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  史 means &quot;history&quot; and 劇 means &quot;play&quot; or
                  &quot;drama&quot; — so sageuk translates literally to
                  &quot;history drama.&quot;
                </p>
              </div>
            </div>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Meaning
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A sageuk can be almost any kind of story — as long as it
              happens in the past
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              One thing that trips up first-time viewers is expecting
              &quot;sageuk&quot; to mean one consistent tone, the way
              &quot;period drama&quot; can suggest something slow and formal
              in English. That is not quite how it works here. A sageuk can
              be a romance, a political thriller, a comedy, an action drama,
              or even a horror story. The one requirement is the historical
              setting — everything else about the story stays open.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              If you are new to K-dramas, the formal way characters speak to
              each other is usually the first thing that stands out. Sageuk
              dialogue leans heavily on court-era speech levels and titles,
              because Joseon-era Korea ran on a strict hierarchy between
              kings, officials, and commoners. That formality is not just a
              writing choice — it reflects how differently people were
              expected to speak depending on rank, which is also why so much
              of the dialogue is really about who is allowed to say what to
              whom.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Subtitles also tend to flatten a lot of that hierarchy. You
              will often see several different Korean royal or noble titles
              all translated as &quot;Your Highness&quot; or &quot;Your
              Majesty&quot; in English, even though the original dialogue is
              distinguishing between very specific ranks. It is a small
              detail, but it explains why the English subtitles can feel
              repetitive in scenes that are actually full of social nuance in
              Korean.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Sub-genres
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Sageuk split into a few different styles
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Once you start reading about sageuk, you will run into a few
              Korean sub-labels that describe how closely a show sticks to
              real history.
            </p>

            <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--text)]">
                  정통사극 (jeongtong sageuk, &quot;orthodox sageuk&quot;):
                </span>{" "}
                stays close to recorded history, with a more formal tone and
                careful attention to real events, court records, and
                period-accurate detail. KBS&apos;s{" "}
                <span className="font-semibold text-[var(--text)]">
                  Jeong Do-jeon
                </span>{" "}
                (2014) is a well-known example, following the real-life
                scholar-official through the fall of Goryeo and the founding
                of the Joseon dynasty.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  퓨전사극 (fusion sageuk):
                </span>{" "}
                keeps the historical setting but tells the story with more
                modern pacing and romance-driven plots, sometimes with music
                or humor that would not have existed at the time.{" "}
                <span className="font-semibold text-[var(--text)]">
                  Sungkyunkwan Scandal
                </span>{" "}
                (2010) is a useful example, sending a young woman disguised as
                a man into Joseon&apos;s elite all-male academy for a story
                that leans into romance and modern pacing.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  팩션사극 (faction sageuk, from &quot;fact&quot; plus
                  &quot;fiction&quot;):
                </span>{" "}
                builds around real historical figures or events, then
                invents relationships, motives, or plot twists that are not
                part of the historical record.{" "}
                <span className="font-semibold text-[var(--text)]">
                  Tree with Deep Roots
                </span>{" "}
                (2011) is one familiar example, weaving a fictional court
                murder mystery around the real history of King Sejong&apos;s
                creation of Hangul.
              </li>
            </ul>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Because many sageuk are built around real dynasties, kings, or
              events that Korean viewers already learned about in school,
              part of the suspense often comes from how a character is
              interpreted rather than what ultimately happens to them. Local
              audiences frequently already know how a king&apos;s reign
              ended before the show even starts, so whether a sageuk lands
              tends to come down to the performances and the writing more
              than to surprising the audience with the facts.
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
