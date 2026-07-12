import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-does-debut-mean-in-kpop`;

const pageTitle =
  "What Does Debut Mean in K-pop? How Idols Officially Start";
const pageDescription =
  "A friendly HAEMIL guide to debut meaning in K-pop, how debut differs from pre-debut, trainee, rookie group, and comeback, and why a first official release matters.";

const quickFacts = [
  "Basic meaning: Debut is the official start of a K-pop idol, solo artist, or group.",
  "Korean word: 데뷔 is used in Korean too.",
  "Pre-debut: The time before an idol or group officially debuts.",
  "Trainee: A person preparing for debut through training in singing, dance, performance, language, or media skills.",
  "Rookie group: A group that has debuted recently.",
  "Different from comeback: Debut is the first official start; comeback is a later new release and promotion period.",
  "Local tip: Fans may follow idols before debut through teasers, survival shows, pre-debut content, or trainee history.",
];

const relatedGuides = [
  {
    label: "K-pop term",
    title: 'What does "rookie group" mean in K-pop?',
    description:
      "A simple guide to how K-pop fans discover rookie groups through first stages, short clips, fancams, and the first member they remember.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is a title track in K-pop?",
    description:
      "A friendly guide to title track meaning in K-pop, how it differs from B-sides and pre-releases, and why one song usually represents a comeback.",
    href: "/kpop/what-is-a-title-track-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does concept mean in K-pop?",
    description:
      "A friendly guide to K-pop concept meaning, how idols change their image each comeback, and how music, styling, choreography, stages, and visuals create an era.",
    href: "/kpop/what-does-concept-mean-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is a fancam?",
    description:
      "A friendly guide to K-pop fancam meaning, why member-focused videos matter, and how fancams differ from facecams, ending fairy moments, and full-stage clips.",
    href: "/kpop/what-is-a-fancam",
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
    canonical: "/kpop/what-does-debut-mean-in-kpop",
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

export default function WhatDoesDebutMeanInKpopPage() {
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
          name: "K-pop debut",
        },
        {
          "@type": "Thing",
          name: "데뷔",
        },
        {
          "@type": "Thing",
          name: "Trainee",
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
          name: "What does debut mean?",
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
              K-pop starter guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you search &quot;debut meaning in K-pop,&quot; the simple
              answer is this: a debut is the official start of a K-pop idol,
              solo artist, or group.
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
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>In Korean, people also say 데뷔.</p>

              <p>
                A debut is not just the first time someone sings or dances.
              </p>

              <p>
                It is the moment they are officially introduced to the public as
                an artist.
              </p>

              <p>
                That may happen through a first song, music video, album,
                showcase, music show stage, or promotion period.
              </p>

              <p>
                In K-pop, debut matters because it gives an artist a starting
                point.
              </p>

              <p>Before debut, a person may be a trainee.</p>

              <p>
                After debut, they become an official idol, group member, or solo
                artist.
              </p>

              <p>That difference is important.</p>

              <p>A trainee is someone preparing for debut.</p>

              <p>In Korean, trainee is 연습생.</p>

              <p>
                Trainees may practice singing, dancing, performance, facial
                expressions, language, media skills, and stage basics. Some train
                for a short time. Some train for years.
              </p>

              <p>
                But it is better not to explain the trainee system in only one
                way.
              </p>

              <p>It is not always a glamorous dream story.</p>

              <p>It is also not always only a dark story.</p>

              <p>
                For beginners, the safest way to understand it is simple:
              </p>

              <p>A trainee is someone preparing for the chance to debut.</p>

              <p>Not every trainee debuts.</p>

              <p>Not every debut path looks the same.</p>

              <p>Some idols are known before debut.</p>

              <p>Some are introduced very quietly.</p>

              <p>Some appear through survival shows.</p>

              <p>Some appear in pre-debut videos.</p>

              <p>
                Some are revealed through teaser photos and profile films.
              </p>

              <p>Some fans follow them before the official start.</p>

              <p>That period is called pre-debut.</p>

              <p>Pre-debut means the time before official debut.</p>

              <p>In Korean fan talk, you may see 데뷔 전.</p>

              <p>
                Pre-debut content can include practice videos, trainee clips,
                survival show appearances, teaser images, short introductions,
                or old performance videos.
              </p>

              <p>
                Sometimes pre-debut fans feel especially attached because they
                watched the artist grow before debut.
              </p>

              <p>
                But the official debut is still the point where the artist
                begins publicly under that group or solo name.
              </p>

              <p>That is why fans often ask:</p>

              <p>When did they debut?</p>

              <p>What was their debut song?</p>

              <p>What was their debut stage?</p>

              <p>Who was in the debut lineup?</p>

              <p>
                These questions help fans understand the beginning of an
                artist&apos;s career.
              </p>

              <p>Debut is different from comeback.</p>

              <p>
                This is one of the easiest places for beginners to get confused.
              </p>

              <p>A debut is the first official start.</p>

              <p>
                A comeback is a later release and promotion period after debut.
              </p>

              <p>So a new group debuts first.</p>

              <p>
                Then, months later, they may have a comeback with a new song or
                album.
              </p>

              <p>A solo artist can debut too.</p>

              <p>A member from a group may later make a solo debut.</p>

              <p>That does not mean they are new to the industry.</p>

              <p>It means they are officially starting as a solo artist.</p>

              <p>This is why K-pop uses debut in several ways.</p>

              <p>Group debut.</p>

              <p>Solo debut.</p>

              <p>Unit debut.</p>

              <p>Japanese debut.</p>

              <p>Acting debut.</p>

              <p>Official debut.</p>

              <p>The word depends on the context.</p>

              <p>But the basic feeling is the same:</p>

              <p>It is the first official start in that role or market.</p>

              <p>Debut is also connected to rookie group.</p>

              <p>A rookie group is a group that has debuted recently.</p>

              <p>Rookie does not mean bad or unskilled.</p>

              <p>It means new.</p>

              <p>
                Fans may watch rookie groups closely because the early stages
                show how the members introduce themselves, how the company
                presents the group, and what kind of concept they start with.
              </p>

              <p>A debut can shape a rookie group&apos;s first image.</p>

              <p>The debut song may show the sound.</p>

              <p>The debut music video may show the concept.</p>

              <p>The debut stage may show performance style.</p>

              <p>The debut styling may show visual direction.</p>

              <p>
                The first fancams may help fans notice individual members.
              </p>

              <p>That first impression can matter a lot.</p>

              <p>But debut is not the whole story.</p>

              <p>Some groups grow slowly after debut.</p>

              <p>Some become more noticeable after a later comeback.</p>

              <p>
                Some members become easier to recognize through fancams, variety
                clips, killing parts, or point choreography after the debut
                period.
              </p>

              <p>That is normal in K-pop.</p>

              <p>A debut opens the door.</p>

              <p>The career continues after that.</p>

              <p>Debut is also connected to concept.</p>

              <p>
                A concept is the overall mood, image, story, and style of a
                comeback or era.
              </p>

              <p>
                A debut concept is the first version of how a group wants to be
                seen.
              </p>

              <p>Maybe the debut feels bright.</p>

              <p>Maybe it feels bold.</p>

              <p>Maybe it feels mysterious.</p>

              <p>Maybe it feels youthful.</p>

              <p>Maybe it feels performance-focused.</p>

              <p>
                Fans often remember debut concepts because they are the first
                official image of the artist.
              </p>

              <p>Later, fans may compare future comebacks to the debut.</p>

              <p>They may say the group changed a lot.</p>

              <p>They may say the group kept the same identity.</p>

              <p>
                They may say the debut concept fit one member especially well.
              </p>

              <p>Those conversations are part of K-pop watching.</p>

              <p>Debut is also connected to title track.</p>

              <p>
                A title track is the main song promoted during a comeback or
                debut release.
              </p>

              <p>
                For a debut, the title track often becomes the first song casual
                listeners hear from the group.
              </p>

              <p>
                It usually gets the music video, choreography, stages, and
                fancams.
              </p>

              <p>
                That means the debut title track carries a lot of pressure.
              </p>

              <p>It has to introduce the artist quickly.</p>

              <p>It has to show the concept.</p>

              <p>It has to give the group a memorable first stage.</p>

              <p>
                Sometimes a debut song becomes the song people always associate
                with the group&apos;s beginning.
              </p>

              <p>Sometimes later songs become more famous.</p>

              <p>Both can happen.</p>

              <p>That is why debut is important, but not final.</p>

              <p>A strong debut can help.</p>

              <p>
                But a slower start does not mean the artist has no future.
              </p>

              <p>
                K-pop careers can change through later comebacks, viral clips,
                performances, tours, variety shows, and fandom growth.
              </p>

              <p>
                For beginners, it helps to watch debut content in a simple order.
              </p>

              <p>First, watch the debut music video.</p>

              <p>That shows the concept and title track.</p>

              <p>Second, watch a debut stage.</p>

              <p>That shows how the song works in performance.</p>

              <p>Third, watch a few fancams.</p>

              <p>That helps you notice individual members.</p>

              <p>
                Fourth, look at the group profile or member introductions.
              </p>

              <p>That gives you names, roles, and basic context.</p>

              <p>You do not need to learn everything at once.</p>

              <p>
                K-pop debuts can come with many names, teasers, and terms.
              </p>

              <p>
                It is okay to start with one stage and one member who catches
                your attention.
              </p>

              <p>Debut is also when fans begin forming first impressions.</p>

              <p>Some fans notice the center.</p>

              <p>Some notice the visual image.</p>

              <p>Some notice the main vocal.</p>

              <p>Some notice the dancer.</p>

              <p>Some notice the maknae.</p>

              <p>Some notice a killing part.</p>

              <p>Some notice stage presence.</p>

              <p>
                Some notice a funny or warm personality in debut content.
              </p>

              <p>That is how early fandom starts.</p>

              <p>But a debut image can change.</p>

              <p>Members may become more confident.</p>

              <p>The group may try new concepts.</p>

              <p>The music may shift.</p>

              <p>The choreography may grow harder.</p>

              <p>A member who was quiet at debut may stand out later.</p>

              <p>
                That is one reason fans enjoy watching rookie groups grow.
              </p>

              <p>You are not only watching the first song.</p>

              <p>You are watching the beginning of a path.</p>

              <p>There is one more thing to remember.</p>

              <p>Debut is official, but interest can start before debut.</p>

              <p>Some fans follow pre-debut trainees.</p>

              <p>Some learn names through teaser photos.</p>

              <p>Some watch survival shows.</p>

              <p>Some see practice videos.</p>

              <p>
                Some notice a member through short clips even before the
                official song arrives.
              </p>

              <p>
                So when a group finally debuts, some fans may already feel
                familiar with them.
              </p>

              <p>
                Other viewers may be meeting them for the first time.
              </p>

              <p>Both experiences are normal.</p>

              <p>
                For HAEMIL readers, the easiest way to understand debut is this:
              </p>

              <p>A trainee prepares before debut.</p>

              <p>Pre-debut is the time before the official start.</p>

              <p>Debut is the first official introduction.</p>

              <p>A rookie group is newly debuted.</p>

              <p>A title track gives the debut its main song.</p>

              <p>A concept gives the debut its image.</p>

              <p>A fancam helps fans notice individual members.</p>

              <p>
                A comeback is what happens later, when the artist returns with a
                new release.
              </p>

              <p>
                So when K-pop fans say, &quot;They debuted,&quot; they usually
                mean:
              </p>

              <p>This artist has officially started.</p>

              <p>The first era has begun.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">데뷔 · 데뷔 전 · 연습생</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              데뷔 is the Korean word for debut — the official start of an idol,
              solo artist, or group. 데뷔 전 means pre-debut, the period before
              that official start. 연습생 means trainee, someone preparing for
              the chance to debut.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              English-speaking fans often say &quot;debut,&quot;
              &quot;pre-debut,&quot; and &quot;trainee&quot; too. The basic map
              stays the same: prepare, follow early content if you want, then
              recognize the official debut as the starting point of the public
              career.
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
        </div>
      </main>
    </>
  );
}
