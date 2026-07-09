import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-cortis`;

const pageTitle =
  "Who Is CORTIS? A Friendly Guide to the New Boy Group K-pop Fans Are Watching";
const pageDescription =
  "A friendly HAEMIL guide to CORTIS, the new BIGHIT MUSIC boy group, their five members, and why new K-pop fans may want to start with their group page and Keonho spotlight.";

const relatedGuides = [
  {
    label: "Group page",
    title: "Start with the CORTIS group page",
    description:
      "See the group overview, starter tags, and the members HAEMIL covers so far.",
    href: "/kpop/cortis",
  },
  {
    label: "Member guide",
    title: "Meet Keonho",
    description:
      "Start here if you first noticed Keonho through a fancam, stage clip, or Korean fan nickname.",
    href: "/kpop/cortis/keonho",
  },
  {
    label: "K-pop Spotlight",
    title: "Watch the Keonho fancam spotlight",
    description:
      "A closer look at Keonho’s JoyRide fancam, nickname hook, and why he can be an easy first member to remember.",
    href: "/kpop/cortis-keonho-fancam-spotlight",
  },
  {
    label: "K-pop guide",
    title: "Learn what a rookie group means in K-pop",
    description:
      "A simple guide to how K-pop fans discover rookie groups through first stages, short clips, fancams, and the first member they remember.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-cortis",
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

export default function WhoIsCortisPage() {
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
          name: "CORTIS",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "BIGHIT MUSIC",
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
          name: "Who is CORTIS?",
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
              Boy group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is CORTIS? A Friendly Guide to the New Boy Group K-pop Fans
              Are Watching
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to K-pop, CORTIS may feel like one of those names
              that suddenly starts appearing everywhere at once.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                They are a five-member boy group under BIGHIT MUSIC, with
                Martin, James, Juhoon, Seonghyeon, and Keonho. For many
                international fans, that label connection alone makes people
                curious. BIGHIT is already familiar because of BTS and TOMORROW
                X TOGETHER, so when a new boy group appears from the same
                company, people naturally want to know what kind of team they
                are.
              </p>

              <p>But CORTIS is not interesting only because of the company name.</p>

              <p>
                The group&apos;s image is built around a more free,
                self-directed feeling. Even the name points to the idea of
                coloring outside the lines. That is a useful way to read them as
                a new fan. They are not presented only as a polished rookie group
                waiting to be explained by a company profile. The appeal is
                closer to watching a young team trying to show its own mood,
                taste, and energy from the start.
              </p>

              <p>
                That makes them a good group for HAEMIL readers to follow
                slowly.
              </p>

              <p>
                With rookie groups, it can be tempting to memorize everything at
                once: every member, every position, every nickname, every song,
                every fandom detail. But that is not always the best way in.
                Sometimes it is easier to start with one simple question: what
                kind of feeling does this group leave behind?
              </p>

              <p>
                For CORTIS, the first impression is youthful, active, and a
                little restless in a good way.
              </p>

              <p>
                Their stages and clips often feel like they are trying to move
                forward quickly. There is a boyish energy, but not in a soft or
                overly cute way. It feels more like a group built around motion,
                confidence, and the idea of trying things before everything
                becomes too fixed.
              </p>

              <p>
                That is why Keonho has been an easy first doorway for many
                viewers.
              </p>

              <p>
                A single member can sometimes make a new group easier to
                remember. You do not need to understand the whole team
                immediately. You notice one face, one stage moment, one fancam,
                and then the group becomes less distant. Keonho works well in
                that role because his visuals and stage presence are easy for
                casual viewers to recognize quickly.
              </p>

              <p>But CORTIS should not be reduced to only one member.</p>

              <p>
                The better way to read the group is this: Keonho may be the
                first door for some fans, but the group itself is the room you
                enter after that. Once you start from one member, it becomes
                easier to notice how the team moves together, how the members
                balance each other, and why the group has its own rookie
                identity.
              </p>

              <p>This is also where Korean K-pop culture matters.</p>

              <p>
                In Korea, a new idol group does not grow only through official
                music videos. It grows through short clips, stage moments,
                member edits, fancams, airport photos, variety-style content,
                and small online conversations. A rookie group can become
                familiar piece by piece, even before a casual viewer knows every
                detail.
              </p>

              <p>CORTIS fits that kind of discovery well.</p>

              <p>
                You might first see a Keonho clip. Then you might check the
                group page. Then you notice the other members. Then one
                performance or behind-the-scenes moment makes the group feel
                more real. That slow process is normal in K-pop, especially with
                new groups.
              </p>

              <p>So if CORTIS feels unfamiliar right now, that is fine.</p>

              <p>
                You do not need to become an expert immediately. Start with the
                group name. Remember the five members. Watch one or two stages.
                If one member catches your eye, follow that thread. K-pop often
                becomes easier when you let one small moment lead you to the
                next one.
              </p>

              <p>
                For HAEMIL, CORTIS is worth watching because they show how a
                rookie boy group starts becoming visible.
              </p>

              <p>
                Not all at once. Not only through one headline. More like a
                collection of small signals: a familiar label, a clear group
                concept, a standout member, a few replayed clips, and the
                feeling that more people are beginning to pay attention.
              </p>

              <p>That is usually how a new K-pop group starts to feel real.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related K-pop guides
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
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
