import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pagePath = "/kpop/who-is-monsta-x";
const pageUrl = `${siteUrl}${pagePath}`;

const pageTitle = "Who Is MONSTA X? Members, Music, and Their 2026 Comeback";
const pageDescription =
  "A friendly guide to MONSTA X: the six current members, their 2015 debut and 11th anniversary, and their 2026 EP The Phase with title track \"MAGIC.\"";

const quickFacts = [
  { label: "Debut", value: "May 14, 2015, with the mini album TRESPASS" },
  { label: "Agency", value: "STARSHIP Entertainment" },
  {
    label: "Members",
    value: "Shownu, Minhyuk, Kihyun, Hyungwon, Joohoney, I.M",
  },
  { label: "Fandom", value: "Monbebe" },
  { label: "Latest EP", value: "The Phase (September 4, 2026)" },
  { label: "Title track", value: "\"MAGIC\"" },
];

const members = [
  {
    name: "Shownu",
    note: "Released the unit EP LOVE ME with Hyungwon in May 2026.",
  },
  {
    name: "Minhyuk",
    note: "Released his first solo track, \"Reaching,\" in June 2026.",
  },
  {
    name: "Kihyun",
    note: "Released his EP BORDERLINE in July 2026.",
  },
  {
    name: "Hyungwon",
    note: "Wrote \"Sweet Night, Sweet Morning,\" the self-composed track on The Phase, and shared LOVE ME with Shownu.",
  },
  {
    name: "Joohoney",
    note: "Also known as Jooheon. Took part in writing the lyrics for \"MAGIC\" and released the mini album 光 (INSANITY) in January 2026.",
  },
  {
    name: "I.M",
    note: "Has released solo music since his first EP, DUALITY, in 2021, while staying an active member of the group.",
  },
];

const tracks = [
  "MAGIC",
  "Type X",
  "SURVIVOR",
  "Electric Heart",
  "That's My Girl",
  "Sweet Night, Sweet Morning",
];

const relatedGuides = [
  {
    label: "K-pop term",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
  },
  {
    label: "K-pop term",
    title: "What is a title track in K-pop?",
    description:
      "A friendly guide to title track meaning in K-pop, how it differs from B-sides and pre-releases, and why one song usually represents a comeback.",
    href: "/kpop/what-is-a-title-track-in-kpop",
  },
  {
    label: "K-pop term",
    title: "What is a dance practice in K-pop?",
    description:
      "A friendly guide to K-pop dance practice videos, why fans watch choreography clearly, and how they differ from fancams, stages, and performance videos.",
    href: "/kpop/what-is-dance-practice-in-kpop",
  },
  {
    label: "Boy group guide",
    title: "Who is PENTAGON?",
    description:
      "Another long-running boy group guide: PENTAGON's 10th anniversary comeback, their current lineup, and what has changed since their debut.",
    href: "/kpop/who-is-pentagon",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "HAEMIL",
    type: "article",
    locale: "en_US",
    images: ["/brand/haemil-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/brand/haemil-og.png"],
  },
};

const linkClass =
  "font-semibold text-[var(--accent)] underline-offset-4 hover:underline";

export default function WhoIsMonstaXPage() {
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
          name: "MONSTA X",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Organization",
          name: "STARSHIP Entertainment",
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
          name: "Who is MONSTA X?",
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
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Boy group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is MONSTA X? Members, Music, and Their 2026 Comeback
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you know the name MONSTA X but could not name all six members
              yet, this is a good place to start. We will begin with the group
              itself, then go through who is in it today, what their music is
              known for, and why their 2026 EP is an easy way in.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Who is MONSTA X?</h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                MONSTA X is a six-member boy group from STARSHIP
                Entertainment. They debuted on May 14, 2015, with their first
                mini album, <em>TRESPASS</em>, and marked their 11th
                anniversary in May 2026. In other words, by the time their
                latest EP came out, they had been releasing music as a group
                for more than eleven years.
              </p>

              <p>
                That is a lot of music to catch up on. STARSHIP&apos;s
                official discography for the group runs from{" "}
                <em>TRESPASS</em> through thirteen numbered mini albums, three
                full-length albums (the second one released in two parts),
                and a number of digital singles, before <em>The Phase</em>{" "}
                arrived in September 2026. You do not need to know all of it
                to enjoy the group, but it helps to know that a new release
                from MONSTA X sits on top of a long catalog.
              </p>

              <p>
                Their fans are called Monbebe. You will see that name a lot
                in comments, concert titles, and fan posts, so it is worth
                knowing early.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                Quick facts
              </p>

              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm font-semibold text-[var(--text)]">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[var(--muted)] md:text-base">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Who are the members?</h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                STARSHIP&apos;s official profile lists six current members:
                Shownu, Minhyuk, Kihyun, Hyungwon, Joohoney, and I.M. Instead
                of giving everyone a fixed role, here is one recent, easy to
                check detail about each member, mostly from 2026, so you have
                something concrete to look up next.
              </p>

              <p>
                One naming note: Joohoney is also known as Jooheon, and you
                will see both spellings in English-language news. We use
                Joohoney on this page.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <p className="text-lg font-semibold text-[var(--text)]">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    {member.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
              These are snapshots, not full profiles. Each member has done far
              more than one line can hold, but a recent release is often the
              easiest thing to search for when someone catches your eye.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              What kind of music is MONSTA X known for?
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                When English-language Korean media introduce MONSTA X, two
                descriptions come up again and again. One is that they are
                known for high-energy performances. The other is that the
                members are actively involved in songwriting and production.
                Korea JoongAng Daily used both when <em>The Phase</em> came
                out.
              </p>

              <p>
                The second point is easy to see in the new EP. Joohoney took
                part in writing the lyrics for &quot;MAGIC,&quot; and the
                closing track, &quot;Sweet Night, Sweet Morning,&quot; is a
                song Hyungwon wrote himself. Add the solo and unit releases
                members put out earlier in 2026, and you get a group where
                making the music is part of the job, not something left
                entirely to outside writers.
              </p>

              <p>
                The performance side is harder to explain in words, so the
                honest advice is to watch. The &quot;MAGIC&quot; video further
                down this page is a good first look, and comparing it with one
                of their older official videos will show you what has stayed
                consistent over the years.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              What stands out after more than eleven years?
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Nobody outside a group can fully explain why it lasts. That
                usually comes down to things fans only see part of. What we
                can do is point out a few patterns that are easy to check in
                MONSTA X&apos;s official record.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>
                    <strong className="text-[var(--text)]">
                      They kept releasing as a group.
                    </strong>{" "}
                    Group releases appear in the discography every year from
                    2015 to 2023. After a quieter stretch between{" "}
                    <em>REASON</em> (January 2023) and <em>THE X</em>{" "}
                    (September 2025), <em>The Phase</em> followed in September
                    2026.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>
                    <strong className="text-[var(--text)]">
                      The members work on the music.
                    </strong>{" "}
                    Writing credits from members show up on group releases,
                    including the current EP.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>
                    <strong className="text-[var(--text)]">
                      They reached beyond Korean-language releases.
                    </strong>{" "}
                    &quot;baby blue&quot; (November 2025) and &quot;growing
                    pains&quot; (February 2026) came out as U.S. digital
                    singles, aimed at listeners outside Korea.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>
                    <strong className="text-[var(--text)]">
                      Solo work runs alongside the group.
                    </strong>{" "}
                    In 2026 alone, Joohoney, Shownu and Hyungwon, Kihyun, and
                    Minhyuk all released their own music before the six came
                    back together for <em>The Phase</em>.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">What is The Phase?</h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                <em>The Phase</em> is the EP MONSTA X released on September 4,
                2026. It is their first Korean EP since <em>THE X</em>,
                released in September 2025. That does not mean they were
                silent in between: the two U.S. singles and several member
                releases filled that time. As a Korean group release, though,{" "}
                <em>The Phase</em> picks up where <em>THE X</em> left off.
              </p>

              <p>The EP has six tracks:</p>

              <ol className="grid gap-2 sm:grid-cols-2">
                {tracks.map((track, index) => (
                  <li
                    key={track}
                    className="rounded-[1rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text)]"
                  >
                    <span className="mr-2 text-sm text-[var(--muted)]">
                      {index + 1}.
                    </span>
                    {track}
                  </li>
                ))}
              </ol>

              <p>
                You do not need to go through all six to get started.
                &quot;MAGIC&quot; is the{" "}
                <Link href="/kpop/what-is-a-title-track-in-kpop" className={linkClass}>
                  title track
                </Link>
                , which means it is the song the group leads with on music
                shows and in the main video.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Why &quot;MAGIC&quot; is a useful 2026 starting point
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                With a group that has more than eleven years of music,
                starting from the very beginning can feel like homework.
                &quot;MAGIC&quot; is easier. It is the current title track,
                all six members are in it, and the official video gives you
                their faces, voices, and performance style in about three
                minutes.
              </p>

              <p>
                Korea JoongAng Daily described the song as combining rhythmic
                guitar riffs with a punchy beat, and as mentioned above,
                Joohoney took part in writing the lyrics. If you have only
                heard of MONSTA X as a name, this is the version of the group
                you are meeting right now.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Watch &quot;MAGIC&quot;
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              MONSTA X — &quot;MAGIC&quot; Official MV
            </h2>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="QqqrJle7dRA"
                title="MONSTA X MAGIC Official MV"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Official music video for &quot;MAGIC,&quot; released on
              STARSHIP&apos;s official YouTube channel on September 4, 2026.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Where should a new listener start?
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                There is no single right order, but this one keeps things
                simple:
              </p>

              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-semibold text-[var(--celadon)]">1.</span>
                  <span>
                    Watch the &quot;MAGIC&quot; video above and try to match
                    each face and voice to the six names in the member list.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[var(--celadon)]">2.</span>
                  <span>
                    Go back to one or two older official videos. Korea
                    JoongAng Daily coverage of the group lists songs such as
                    &quot;Dramarama&quot; (2017), &quot;Shoot Out&quot;
                    (2018), and &quot;Love Killa&quot; (2020) among their
                    known songs, and all three have official music videos on
                    STARSHIP&apos;s YouTube channel.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[var(--celadon)]">3.</span>
                  <span>
                    If the performance side is what pulls you in, look for
                    the dance practice videos on MONSTA X&apos;s official
                    channel. Our{" "}
                    <Link
                      href="/kpop/what-is-dance-practice-in-kpop"
                      className={linkClass}
                    >
                      dance practice guide
                    </Link>{" "}
                    explains why fans like watching choreography that way.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[var(--celadon)]">4.</span>
                  <span>
                    If one member stands out, try their 2026 solo or unit
                    release from the member list. It is a quick way to hear
                    them on their own.
                  </span>
                </li>
              </ol>

              <p>
                If the K-pop release vocabulary is still new to you, our{" "}
                <Link
                  href="/kpop/what-does-comeback-mean-in-kpop"
                  className={linkClass}
                >
                  guide to what a comeback means
                </Link>{" "}
                explains why a new EP like <em>The Phase</em> gets called a
                comeback even when a group never really went away.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                A local take from HAEMIL
              </p>
              <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--muted)] md:text-base">
                <p>
                  I knew MONSTA X mostly by name before putting this guide
                  together. Joohoney was one of the few members I already
                  recognized, because I remembered him as Jooheon from Show Me
                  the Money, the Korean rap competition show. Shownu was
                  familiar to me for his smile and athletic build.
                </p>
                <p>
                  So this is not written from the perspective of a longtime
                  Monbebe. It is closer to the perspective of someone finally
                  putting the names, members, and music together properly,
                  which might be exactly where you are too.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related HAEMIL guides
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
