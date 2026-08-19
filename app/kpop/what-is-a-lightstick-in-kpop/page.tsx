import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-lightstick-in-kpop`;

const pageTitle = "What Is a K-pop Lightstick? | Eungwonbong Meaning Explained";
const pageDescription =
  "A lightstick, or 응원봉, is the official light-up wand a K-pop group's agency sells for fans to carry - here's what it means, where the idea is said to have started, and why fans want their own group's design.";

const quickFacts = [
  "Korean word: Eungwonbong / 응원봉, which combines the words for \"cheering\" and \"stick.\"",
  "Basic meaning: The official light-up wand a K-pop group's agency sells, made in that group's own shape and colors.",
  "Not a generic glow stick: Each group's lightstick is its own licensed design, so carrying the right one shows which fandom you belong to.",
  "Often app-connected: Many current lightsticks pair with Bluetooth so their color can change along with everyone else's in the venue.",
  "Often named by fans: Groups and fandoms give their lightstick a nickname, such as BTS's Army Bomb or TWICE's Candy Bong.",
  "Widely repeated origin story: Many outlets credit BIGBANG's 2006-2007 \"bang bong\" as the design that made official lightsticks standard, though the original company announcement itself is hard to track down directly.",
  "Not every nickname is official: Some lightstick nicknames you see online come from fans or entertainment press, not a confirmed company name.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What does bias mean in K-pop?",
    description:
      "A friendly guide to K-pop bias meaning, favorite members, bias wreckers, ultimate bias, and why one member keeps catching your attention.",
    href: "/kpop/what-does-bias-mean",
  },
  {
    label: "K-pop starter guide",
    title: "What is a fancam?",
    description:
      "A friendly guide to K-pop fancam meaning, why member-focused videos matter, and how fancams differ from facecams and full-stage clips.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop starter guide",
    title: "What is a music show in K-pop?",
    description:
      "A friendly guide to Korean K-pop music shows, comeback stages, fancams, and why weekly performances matter to fans.",
    href: "/kpop/what-is-a-music-show-in-kpop",
  },
  {
    label: "Fan words",
    title: "Open the K-pop glossary",
    description:
      "A friendly guide to Korean K-pop fan words like bias, maknae, fancam, ending fairy, and eolppak-jikcam.",
    href: "/kpop/glossary",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-a-lightstick-in-kpop",
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

export default function WhatIsALightstickInKpopPage() {
  const relatedMemberGuides = getPublishedMemberGuides().slice(0, 4);

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
          name: "K-pop lightstick",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "Korean fan culture",
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
          name: "What is a lightstick?",
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

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-10">
            <Link
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <div className="flex items-center gap-3">
              <TermBadge term="lightstick" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {pageTitle}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:mt-6 md:text-lg">
              If you search &quot;kpop lightstick meaning,&quot; the short
              answer is this: a lightstick, or 응원봉, is the official
              light-up wand a K-pop group&apos;s agency sells so fans can
              carry that group&apos;s own shape and color at a concert.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--gold)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <h2 className="text-xl font-semibold text-[var(--text)] md:text-2xl">
                What a lightstick actually is
              </h2>

              <p>
                A lightstick is not just any glow stick you bring to a show.
                It is a specific product, designed and licensed by a group&apos;s
                own agency, sold under that group&apos;s name. Each one has its
                own shape, its own colors, and usually its own nickname that
                fans came up with once it was released.
              </p>

              <p>
                That is the detail that trips up a lot of newer fans. Any
                bright wand can light up a crowd. Only the official one
                carries the group&apos;s identity, which is why fans specifically
                save up for the right lightstick instead of grabbing a random
                glow stick on the way to a concert.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Where the idea is said to have started
              </h2>

              <p>
                Ask K-pop fans where lightsticks came from, and you will hear
                the same story repeated across fan blogs and entertainment
                outlets: BIGBANG&apos;s &quot;bang bong,&quot; released around
                2006-2007, is usually pointed to as the release that made an
                official, group-specific lightstick a standard part of K-pop
                merchandise. It is worth being honest about the limits here -
                that account comes from secondary coverage repeated
                consistently over the years, not from a company announcement
                that is easy to track down directly. Treat it as the widely
                accepted industry story rather than a confirmed first.
              </p>

              <p>
                Whatever the exact first case was, the pattern it set stuck.
                Within a few years, having your own official lightstick became
                close to a standard step for a K-pop group with an active
                fandom, not an unusual extra.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                A few designs that show how different they can be
              </h2>

              <p>
                BTS&apos;s Army Bomb is one of the more recognizable examples.
                Fan and press accounts point to a reveal around March 2015,
                with a globe-shaped design and Bluetooth pairing that lets
                staff or a phone app change its color remotely during a show.
              </p>

              <p>
                TWICE&apos;s Candy Bong takes its name from &quot;Candy
                Boy,&quot; a track off their debut album, and carries that
                theme into the object itself - a candy-shaped wand in the
                group&apos;s colors, apricot and neon magenta, that can also
                sync colors through an app and double as a small night light.
              </p>

              <p>
                Neither design looks anything like the other, and that is the
                point. A lightstick is meant to be recognizable as one
                specific group&apos;s object, not a shape every fandom shares.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why a concert full of lightsticks looks the way it does
              </h2>

              <p>
                Once Bluetooth pairing became common, lightsticks stopped
                being something each fan controlled on their own. At a
                concert, a whole section - sometimes an entire arena - can
                change color together, on cue, without anyone touching a
                button. That is what produces the wide, glowing crowd shots
                fans post after a show.
              </p>

              <p>
                It also changes what the object is doing in the room. A
                lightstick is not only there so one fan can wave something
                bright. Synced together, it turns thousands of individual fans
                into one visible, moving mass of color that the performers can
                see and react to.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                What carrying one says, and what it does not
              </h2>

              <p>
                Because each group&apos;s lightstick is its own licensed
                design, carrying it at a show is an easy way to signal which
                fandom you are part of before you say a word. That reading -
                the lightstick as a visible marker of fandom belonging, not
                just a prop - shows up often in how fans and writers talk
                about them, though it is an interpretation rather than
                something any single company has stated outright.
              </p>

              <p>
                One thing worth being careful about: lightstick nicknames you
                come across online are not all official. Fandoms and
                entertainment press coin plenty of playful names for a
                group&apos;s lightstick, and some of those spread widely
                enough to sound official even when the agency itself has never
                confirmed that exact name. If a nickname does not show up on
                the group&apos;s own store or announcements, it is safer to
                treat it as fan language rather than a fact.
              </p>

              <p>
                For a first-time concertgoer, the practical takeaway is
                simple: check which lightstick belongs to the group you are
                seeing, and know that the one you are holding is doing more
                than lighting up a dark venue. It is telling everyone around
                you, and the group on stage, exactly who you came for.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">응원봉</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              응원봉 (eungwonbong) combines 응원, meaning &quot;cheering&quot;
              or &quot;support,&quot; with 봉, meaning &quot;stick&quot; or
              &quot;rod.&quot; The word itself is not exclusive to K-pop - it
              can describe cheering sticks used at sports games too - but in
              everyday K-pop conversation, 응원봉 almost always means the
              official group lightstick.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              You will also see individual lightsticks referred to by their
              fan nicknames, such as Army Bomb or Candy Bong, rather than the
              generic word 응원봉. Both are correct - one is the general term,
              the other is what fans call their specific group&apos;s design.
            </p>
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

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Try watching with context
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides to read next
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {relatedMemberGuides.map(({ group, member }) => (
                <Link
                  key={`${group.id}-${member.id}`}
                  href={`/kpop/${group.id}/${member.id}`}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    {group.name}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {member.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
                    {member.note}
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
