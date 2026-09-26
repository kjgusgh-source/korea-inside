import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/dramas/what-is-a-chaebol`;

const pageTitle =
  "What Is a Chaebol? The K-Drama Word Behind Every Rich Family Romance, Explained";
const pageDescription =
  "A friendly guide to chaebol (재벌), the real Korean business term behind K-drama's rich-family romances — from King the Land and Crash Landing on You to Queen of Tears, and how it differs from a Western conglomerate.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/dramas/what-is-a-chaebol",
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
    title: "What Is Makjang? K-Drama's Wildest Genre, Explained",
    description:
      "A friendly guide to makjang, the K-drama genre built on secret identities, revenge, and affairs — including the chaebol households that often show up in the background of its plots.",
    href: "/dramas/what-is-makjang",
  },
  {
    label: "K-drama guide",
    title: "What Is a Sageuk in K-dramas?",
    description:
      "A friendly guide to sageuk, the Korean historical drama genre — how jeongtong, fusion, and faction sageuk differ, and the details that often confuse first-time viewers.",
    href: "/dramas/what-is-a-sageuk-in-kdramas",
  },
  {
    label: "K-drama guide",
    title: "What Is Second Lead Syndrome in K-Dramas?",
    description:
      "A friendly guide to second lead syndrome: what the term means, why viewers end up rooting for the second lead, and how it compares to Korea's own word for the same feeling.",
    href: "/dramas/what-is-second-lead-syndrome-in-kdramas",
  },
  {
    label: "K-pop guide",
    title: "K-pop glossary",
    description:
      "HAEMIL's growing glossary of K-pop terms, explained the way a friend who already knows the fandom would explain them.",
    href: "/kpop/glossary",
  },
];

export default function WhatIsAChaebolPage() {
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
          name: "Chaebol",
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
          name: "What is a chaebol?",
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
              What is a chaebol in K-dramas?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If a K-drama's lead character owns a hotel chain, an airline, or a
              fashion house without ever quite explaining where the money came
              from, there is a decent chance you are watching a chaebol story.
              Recap sites and fan accounts usually shorthand it as the
              &quot;chaebol romance,&quot; but chaebol itself is not made-up
              drama vocabulary. It is a real term for how a small number of
              Korean family businesses are actually built and run, both on
              screen and off.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  The word
                </p>
                <p className="mt-2 text-2xl font-semibold">재벌 (chaebol)</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A compound of jae (財), meaning wealth, and beol (閥),
                  meaning clan or clique.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  As a drama trope
                </p>
                <p className="mt-2 text-2xl font-semibold">Rich, and answering to no one</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A lead whose family runs several companies at once, falling
                  for someone the family would never have chosen for them.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  How Koreans use it
                </p>
                <p className="mt-2 text-2xl font-semibold">Both real and shorthand</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The actual word for Samsung, Hyundai, LG, and SK, and
                  drama shorthand for &quot;this family is too powerful to be
                  normal.&quot;
                </p>
              </div>
            </div>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Where the word comes from
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A family word before it was a drama word
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Chaebol comes from two Chinese-character roots: jae (財),
                meaning wealth, and beol (閥), meaning clan or faction. Put
                together, the word describes exactly what it sounds like
                — a family that holds a fortune together as a group, rather
                than a single company that just happens to be big. Samsung,
                Hyundai, LG, and SK are the names most people recognize, and
                each one is still associated with its founding family
                generations later: the Lees at Samsung, the Chungs at
                Hyundai, the Koos at LG, the Cheys at SK.
              </p>

              <p>
                It is tempting to just translate chaebol as
                &quot;conglomerate,&quot; and dictionaries often do. The two
                words describe slightly different things, though. A
                conglomerate, in the usual Western sense, is a company that
                owns businesses across several industries. A chaebol is
                that, plus one more layer: the founding family keeps real
                control over the whole group even after it grows far beyond
                what their direct shares could justify, often because the
                group's own affiliate companies hold stakes in each other.
                That web of cross-ownership is why a chaebol heir on screen
                can plausibly run a hotel, an airline, and a fashion label
                all at once — in real life, the structure that lets one
                family sit at the top of that many businesses is the whole
                point of the word.
              </p>

              <p>
                Britannica notes that in the early 2000s, chaebol accounted
                for roughly two-thirds of South Korea's exports — a
                striking number, though it describes that period rather than
                the present day.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              What actually makes a chaebol
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A checklist, not an official registry
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              There is no government stamp that certifies a company as a
              chaebol, but a few features come up again and again when the
              word gets used:
            </p>

            <ul className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Family control across generations:
                </span>{" "}
                one family stays in charge of the whole group, often for two
                or three generations — the founder's grandchildren are
                still making the decisions, not professional managers hired
                from outside.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  A network, not one company:
                </span>{" "}
                a chaebol is rarely a single business. It is a cluster of
                affiliated companies — electronics, construction,
                insurance, hotels — held together rather than one
                corporation with one stock ticker.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Control that outruns the paperwork:
                </span>{" "}
                the family's actual ownership stake is often far smaller than
                the share of the group they effectively run, thanks to
                affiliates holding shares in one another.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  A handful of familiar surnames:
                </span>{" "}
                Samsung, Hyundai, LG, SK, and a short list of others make up
                most of what people mean when they say chaebol.
              </li>
            </ul>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A K-drama does not need to show all of this on screen for a
              family business to register as a chaebol. Usually it just
              needs one detail — a company that spans hotels, planes, and
              department stores, all owned by the same grandfather — for
              viewers to recognize the shape of it.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              The dramas people point to first
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Three shows built on the same setup
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                King the Land is one of the clearest recent examples. Gu Won
                is heir to King Group, a family business that spans hotels,
                an airline, and a fashion label, and the series' central
                romance is between him and Cheon Sa-rang, a hotel concierge
                with no connection to that world at all.
              </p>

              <p>
                Crash Landing on You works from the same setup at a
                different angle. Yoon Se-ri is already a chaebol heiress
                before the story properly starts — she crash-lands in
                North Korea after a paragliding accident, and the rest of
                the series plays out the culture clash from there.
              </p>

              <p>
                Queen of Tears might be the most literal version of the
                trope. Hong Hae-in is third-generation heir to Queens Group,
                married to Baek Hyun-woo, the son of an ordinary farming
                family — the class gap between the two families is not a
                subplot, it is the entire premise of the show.
              </p>

              <p>
                Some culture writers have also traced how the
                &quot;chaebol heir&quot; character itself has changed over
                the years — from the fairly flat, cold archetype of
                earlier dramas, through the deliberately funny version in
                What&apos;s Wrong with Secretary Kim and the more
                melancholy one in The Heirs, toward the more complicated
                characters recent dramas tend to write, who often want out
                of the family business rather than into it. That is one
                reading among several rather than a settled fact, but it is
                a useful way to notice how the trope keeps shifting.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean culture note
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              It is a news word as much as a drama word
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Outside of dramas, chaebol is not a niche or old-fashioned
                word — it is standard vocabulary in Korean news and
                everyday conversation about the economy. When people bring
                up &quot;Korea&apos;s top four chaebol&quot; or debate
                chaebol reform, they mean the same handful of family-run
                business groups a K-drama lead&apos;s family probably
                belongs to.
              </p>

              <p>
                That is also why the word tends to bring two different kinds
                of readers to the same search result: people who want the
                straightforward definition, and people who ran into the
                word mid-drama and want to know if &quot;chaebol&quot; is
                just a fancy way of saying &quot;rich family,&quot; or
                something more specific. It is the second thing — the
                family-control structure described above is what actually
                separates a chaebol from a merely wealthy family in a
                drama.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
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
