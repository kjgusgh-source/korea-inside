import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-dance-practice-in-kpop`;

const pageTitle =
  "What Is a Dance Practice in K-pop? Why Fans Watch Choreography Videos";
const pageDescription =
  "A friendly HAEMIL guide to dance practice meaning in K-pop, how choreography videos show formations, point moves, timing, and how they differ from fancams, stages, performance videos, and dance challenges.";

const quickFacts = [
  "Basic meaning: A dance practice is a choreography-focused video that shows the full dance more clearly.",
  "Korean expression: 안무 연습 영상 is a common way to describe a dance practice video.",
  "Best for: Formations, timing, body lines, synchronization, transitions, and point choreography.",
  "Different from a music video: A music video focuses on concept, scenes, editing, and image; dance practice focuses on choreography.",
  "Different from a fancam: A fancam follows one member; dance practice usually shows the whole group.",
  "Different from a performance video: A performance video can be more produced, styled, and camera-directed.",
  "Local tip: Fans often watch dance practices after the title track to understand the stage more clearly.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What is point choreography in K-pop?",
    description:
      "A friendly guide to point choreography and 포인트 안무 in K-pop, the signature move fans remember, copy, replay, and connect to killing parts and dance challenges.",
    href: "/kpop/what-is-point-choreography-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is a fancam?",
    description:
      "A friendly guide to K-pop fancam meaning, why member-focused videos matter, and how fancams differ from facecams, ending fairy moments, and full-stage clips.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop starter guide",
    title: "What is stage presence in K-pop?",
    description:
      "A friendly guide to stage presence in K-pop, why some idols are hard to look away from, and how it connects to fancams, center, visual, and killing parts.",
    href: "/kpop/what-is-stage-presence-in-kpop",
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
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
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
    canonical: "/kpop/what-is-dance-practice-in-kpop",
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

export default function WhatIsDancePracticeInKpopPage() {
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
          name: "K-pop dance practice",
        },
        {
          "@type": "Thing",
          name: "안무 연습 영상",
        },
        {
          "@type": "Thing",
          name: "K-pop choreography",
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
          name: "What is a dance practice?",
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
              If you search &quot;dance practice meaning in K-pop,&quot; the
              simple answer is this: a dance practice is a choreography-focused
              video that shows the full dance more clearly.
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
              <p>In Korean, fans may call it 안무 연습 영상.</p>

              <p>That means choreography practice video.</p>

              <p>
                But in K-pop, a dance practice is not always just raw practice
                footage.
              </p>

              <p>
                Many dance practice videos are polished enough to be official
                content.
              </p>

              <p>They may be filmed in a practice room.</p>

              <p>They may use a simple camera.</p>

              <p>They may show the whole group from the front.</p>

              <p>
                They may have casual outfits, training clothes, or coordinated
                styling.
              </p>

              <p>The main point is simple:</p>

              <p>You can see the dance.</p>

              <p>That is why fans watch them.</p>

              <p>
                A music video can be beautiful, but it often cuts between
                scenes, close-ups, sets, story moments, and visual effects.
              </p>

              <p>
                A music show stage can be exciting, but the camera may move
                quickly from member to member.
              </p>

              <p>A fancam can help you follow one person.</p>

              <p>
                But a dance practice helps you understand the choreography as a
                whole.
              </p>

              <p>You can see formations.</p>

              <p>You can see who moves where.</p>

              <p>You can see the timing.</p>

              <p>You can see the transitions.</p>

              <p>You can see the point choreography.</p>

              <p>You can see how the group works together.</p>

              <p>That is the special role of a dance practice.</p>

              <p>
                For beginners, this can make a K-pop song much easier to
                understand.
              </p>

              <p>Sometimes you hear a title track and enjoy it.</p>

              <p>Then you watch the music video and understand the concept.</p>

              <p>Then you watch a stage and feel the performance energy.</p>

              <p>
                But when you watch the dance practice, you finally see how the
                choreography is built.
              </p>

              <p>Where the members stand.</p>

              <p>How the center changes.</p>

              <p>How the chorus move repeats.</p>

              <p>How the group creates shapes.</p>

              <p>How the ending pose lands.</p>

              <p>That is why dance practice videos are useful.</p>

              <p>They show the structure behind the stage.</p>

              <p>
                A dance practice is also closely connected to point choreography.
              </p>

              <p>
                Point choreography is the signature move or gesture people
                remember from a song.
              </p>

              <p>A dance practice makes that move easier to see.</p>

              <p>
                In a music video, the point move may appear between fast cuts.
              </p>

              <p>On a stage, the camera may zoom in on one member.</p>

              <p>
                But in a dance practice, you can usually see how the whole group
                performs the point move together.
              </p>

              <p>
                You can see whether the move is simple, sharp, cute, powerful,
                or easy to copy.
              </p>

              <p>
                You can see why it might become part of a dance challenge.
              </p>

              <p>
                You can also see how each member adds a slightly different
                feeling while staying inside the same choreography.
              </p>

              <p>
                That is one reason dance practice videos are fun to replay.
              </p>

              <p>They are not only for dancers.</p>

              <p>
                They are for fans who want to understand the performance more
                clearly.
              </p>

              <p>Dance practice is different from fancam.</p>

              <p>A fancam follows one member.</p>

              <p>A dance practice usually shows the whole group.</p>

              <p>
                If you want to understand one member&apos;s expression, stage
                presence, or camera awareness, a fancam may be better.
              </p>

              <p>
                If you want to understand the formation and choreography, a
                dance practice may be better.
              </p>

              <p>Both are useful.</p>

              <p>They just answer different questions.</p>

              <p>A fancam asks:</p>

              <p>How does this member perform?</p>

              <p>A dance practice asks:</p>

              <p>How does this choreography work?</p>

              <p>That difference is important.</p>

              <p>
                Dance practice is also different from a close-up fancam or
                facecam.
              </p>

              <p>
                A close-up fancam focuses on the idol&apos;s face and
                expressions.
              </p>

              <p>A dance practice usually gives you more distance.</p>

              <p>You may not see every tiny facial change.</p>

              <p>But you can see the body movement more clearly.</p>

              <p>You can see the footwork.</p>

              <p>You can see the spacing.</p>

              <p>You can see whether the group is synchronized.</p>

              <p>You can see how the choreography fills the room.</p>

              <p>
                That is why people who enjoy dance often like practice videos.
              </p>

              <p>Dance practice is also different from a performance video.</p>

              <p>
                This can be confusing because the two can look similar.
              </p>

              <p>A performance video is often more produced.</p>

              <p>
                It may have stronger lighting, styled outfits, camera movement,
                sets, or cinematic editing.
              </p>

              <p>A dance practice is usually more straightforward.</p>

              <p>The focus is the choreography.</p>

              <p>Of course, the line is not always perfect.</p>

              <p>
                Some official dance practice videos are very clean and planned.
              </p>

              <p>Some performance videos are simple.</p>

              <p>But the feeling is different.</p>

              <p>A performance video presents the stage image.</p>

              <p>A dance practice shows the choreography more directly.</p>

              <p>That is the easiest way to understand it.</p>

              <p>Dance practice is also connected to comeback.</p>

              <p>
                When a group has a comeback, fans often wait for several pieces
                of content.
              </p>

              <p>The music video.</p>

              <p>The comeback stage.</p>

              <p>The fancams.</p>

              <p>The dance practice.</p>

              <p>The dance challenge.</p>

              <p>Each one shows a different side of the title track.</p>

              <p>The music video shows concept.</p>

              <p>The stage shows performance energy.</p>

              <p>The fancam shows one member.</p>

              <p>The dance practice shows choreography.</p>

              <p>The dance challenge shows a short, repeatable part.</p>

              <p>Together, they help fans understand the comeback.</p>

              <p>
                A dance practice can also change how people feel about a song.
              </p>

              <p>Sometimes a title track feels simple at first.</p>

              <p>
                Then the dance practice shows clever formations or clean
                transitions.
              </p>

              <p>
                Sometimes the chorus becomes more memorable when you see the
                point choreography clearly.
              </p>

              <p>
                Sometimes a member&apos;s movement looks sharper in the practice
                room than it did in the music video.
              </p>

              <p>
                Sometimes the group&apos;s synchronization becomes the most
                impressive part.
              </p>

              <p>
                That is why fans often say they liked a song more after watching
                the dance practice.
              </p>

              <p>
                The choreography can reveal things the audio alone does not
                show.
              </p>

              <p>Dance practice also helps fans notice center changes.</p>

              <p>
                In K-pop, center means the member placed in the main focus of a
                formation or performance moment.
              </p>

              <p>A dance practice makes center movement easier to follow.</p>

              <p>You can see who starts in the middle.</p>

              <p>Who moves forward.</p>

              <p>Who leads the chorus shape.</p>

              <p>Who moves to the side.</p>

              <p>Who comes back for the killing part.</p>

              <p>This is harder to see in a fast-edited music video.</p>

              <p>
                But in a dance practice, the full formation is usually visible.
              </p>

              <p>That makes the performance easier to read.</p>

              <p>
                Dance practice can also show stage presence in a different way.
              </p>

              <p>
                Stage presence is not only about facial expressions or camera
                close-ups.
              </p>

              <p>It can also appear in body control.</p>

              <p>Timing.</p>

              <p>Clean lines.</p>

              <p>Energy.</p>

              <p>How strongly a member finishes a move.</p>

              <p>How naturally they move between positions.</p>

              <p>
                How they keep the song&apos;s mood even without stage lighting
                or dramatic camera work.
              </p>

              <p>A practice room can reveal that.</p>

              <p>There are fewer distractions.</p>

              <p>No big set.</p>

              <p>No audience noise.</p>

              <p>No dramatic editing.</p>

              <p>Just the performers and the choreography.</p>

              <p>That can make strengths and weaknesses easier to see.</p>

              <p>
                This is why dance practice videos are often loved by fans who
                care about performance.
              </p>

              <p>They feel closer to the work behind the stage.</p>

              <p>You can see the amount of coordination needed.</p>

              <p>
                You can see how difficult a simple-looking move may actually be.
              </p>

              <p>
                You can see how many small details have to match for the group
                to look clean.
              </p>

              <p>A three-minute stage may look effortless.</p>

              <p>
                A dance practice reminds you that it is built from repetition,
                timing, and teamwork.
              </p>

              <p>
                For beginners, one good way to watch a dance practice is to
                compare it with the music video.
              </p>

              <p>Watch the music video first.</p>

              <p>Notice the concept, styling, and main mood.</p>

              <p>Then watch the dance practice.</p>

              <p>Notice what was hidden by camera cuts.</p>

              <p>The formations.</p>

              <p>The full chorus.</p>

              <p>The footwork.</p>

              <p>The transitions.</p>

              <p>The point move.</p>

              <p>The way members move around each other.</p>

              <p>After that, watch a fancam.</p>

              <p>
                Now you can see how one member performs inside the choreography
                you just learned.
              </p>

              <p>This order makes K-pop stages easier to understand.</p>

              <p>Music video first.</p>

              <p>Dance practice second.</p>

              <p>Fancam third.</p>

              <p>
                You do not have to watch everything this way, but it helps when
                you are learning a group.
              </p>

              <p>Dance practice is also useful for dance challenges.</p>

              <p>
                A dance challenge usually uses a short part of the choreography.
              </p>

              <p>Often, it comes from the point choreography.</p>

              <p>
                When fans or other idols copy the challenge, they usually
                perform a small section of the dance.
              </p>

              <p>
                If you watch the full dance practice, you can see where that
                challenge part comes from.
              </p>

              <p>You can understand how it fits into the whole song.</p>

              <p>That makes the short clip feel less random.</p>

              <p>It becomes part of the larger choreography.</p>

              <p>
                That is why dance practice videos are important in modern
                K-pop.
              </p>

              <p>They are not only behind-the-scenes content.</p>

              <p>They are part of how fans learn the song.</p>

              <p>They help casual viewers recognize the point choreography.</p>

              <p>They help dancers cover the song.</p>

              <p>They help fans compare members.</p>

              <p>
                They help people appreciate the teamwork behind a comeback.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand dance practice
                is this:
              </p>

              <p>A music video shows the concept.</p>

              <p>A title track gives the comeback its main song.</p>

              <p>A stage shows performance energy.</p>

              <p>A fancam follows one member.</p>

              <p>A close-up fancam shows expressions.</p>

              <p>A dance challenge shows the short part people copy.</p>

              <p>A dance practice shows the full choreography clearly.</p>

              <p>
                It is the video you watch when you want to see how the
                performance is built.
              </p>

              <p>Not only the image.</p>

              <p>Not only the highlight.</p>

              <p>The whole dance.</p>

              <p>That is why K-pop fans keep watching dance practice videos.</p>

              <p>They make the stage easier to understand.</p>

              <p>
                And once you understand the choreography, every fancam and stage
                becomes more fun to watch.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">안무 연습 영상</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              안무 연습 영상 is a common Korean way to describe a dance practice
              video — a choreography-focused clip that shows the full dance more
              clearly than a music video or fast-edited stage.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              English-speaking fans often say &quot;dance practice&quot; too. In
              K-pop, these videos are not always raw rehearsal footage. Many are
              official content filmed in a practice room so fans can study
              formations, timing, and point choreography.
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
