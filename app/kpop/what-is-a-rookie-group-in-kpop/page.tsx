import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-rookie-group-in-kpop`;

const pageTitle = 'What Does "Rookie Group" Mean in K-pop?';
const pageDescription =
  "A friendly HAEMIL guide to what “rookie group” means in K-pop, why new idols are remembered through clips and fancams, and how fans find their first entry point.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-a-rookie-group-in-kpop",
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

export default function WhatIsARookieGroupInKpopPage() {
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
          name: "Rookie group",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "K-pop fan culture",
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
          name: "K-pop",
          item: `${siteUrl}/kpop`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: 'What does "rookie group" mean in K-pop?',
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop term
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What Does &quot;Rookie Group&quot; Mean in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In K-pop, a rookie group is more than just a group that recently
              debuted.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                It is the stage where fans are still learning the names, the
                faces, the voices, and the small details that make each member
                easier to remember. Nothing feels fully fixed yet. The group is
                still becoming familiar to people, one performance at a time.
              </p>

              <p>That is why rookie groups can feel exciting.</p>

              <p>
                When a group is new, fans do not always enter through the whole
                team at once. They might start with one fancam. One short clip.
                One member whose expression stays in their head. One nickname
                that appears in comments before they even know the full
                discography.
              </p>

              <p>This is very normal in K-pop.</p>

              <p>
                A company name can make people check a rookie group once. A
                debut song can make people curious. But the thing that makes
                someone stay is usually more personal. It might be a stage
                detail, a voice tone, a dance line, a funny moment, or a member
                who suddenly becomes easy to recognize.
              </p>

              <p>That first memory matters.</p>

              <p>
                For example, a new fan might not know every CORTIS member yet.
                But they may remember Keonho through a &quot;JoyRide&quot;
                fancam, or through a small nickname like &quot;French Fry
                Boy.&quot; That does not mean the whole group is only about one
                member. It simply means one member can become the first door
                into the team.
              </p>

              <p>
                The same thing can happen with a girl group. A fan may hear
                ILLIT&apos;s name first, then remember Wonhee because a
                close-up fancam or short clip makes her feel familiar. Later,
                they start learning the other members too.
              </p>

              <p>
                Rookie K-pop often begins like that: not with perfect knowledge,
                but with one clear starting point.
              </p>

              <p>
                This is also why fancams are important for rookie groups. A full
                group stage can be fun, but it can be hard to follow when every
                face is new. A fancam slows everything down. You can watch one
                performer, notice their timing, expressions, and stage habits,
                then decide whether you want to see more.
              </p>

              <p>
                Rookie groups also live in a very sensitive moment.
              </p>

              <p>
                Fans are curious, but they are also still deciding what the group
                feels like. Is the team bright? Intense? Soft? Playful?
                Performance-focused? Concept-heavy? A rookie group is still
                building that image in real time.
              </p>

              <p>
                That is why early clips, debut stages, teaser photos, and small
                fan reactions can matter so much. They help fans form a first
                impression before the group has years of history behind them.
              </p>

              <p>
                But being a rookie does not mean being unfinished in a bad way.
              </p>

              <p>
                It means the group is still open. Fans can watch the growth
                happen from the beginning. They can remember the first stage, the
                first viral moment, the first member they noticed, and the first
                song that made the group feel real to them.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand a rookie group
                is this:
              </p>

              <p>
                A rookie group is a team at the beginning of its public memory.
              </p>

              <p>
                The songs are new. The fan jokes are new. The member impressions
                are still forming. And for many fans, the whole journey starts
                with one small moment that makes them think, &quot;Wait, I want
                to know who that is.&quot;
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
