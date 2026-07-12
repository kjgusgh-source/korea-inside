import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-point-choreography-in-kpop`;

const pageTitle =
  "What Is Point Choreography in K-pop? The Move Everyone Remembers";
const pageDescription =
  "A friendly HAEMIL guide to point choreography meaning in K-pop, how 포인트 안무 works, and how it differs from killing parts, dance challenges, fancams, and stage presence.";

const quickFacts = [
  "Basic meaning: Point choreography is the signature move or gesture people remember from a K-pop song.",
  "Korean expression: 포인트 안무 means the key dance point of a song.",
  "Best for: Making a song easy to recognize, copy, and share.",
  "Often seen in: Choruses, hooks, dance breaks, TikTok or Shorts challenges, and comeback stages.",
  "Different from killing part: A killing part can be any replayable moment; point choreography is specifically a dance or gesture.",
  "Different from stage presence: Stage presence is how an idol holds attention; point choreography is the move the song wants people to remember.",
  "Local tip: Korean fans may talk about whether a song has a clear 포인트 안무 when discussing a comeback.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
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
    title: "What is a fancam?",
    description:
      "A friendly guide to K-pop fancam meaning, why member-focused videos matter, and how fancams differ from facecams, ending fairy moments, and full-stage clips.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop starter guide",
    title: "What is center in K-pop?",
    description:
      "A friendly guide to center meaning in K-pop, why the focus member matters, and how center differs from visual, killing part, fancam, and ending fairy moments.",
    href: "/kpop/what-is-center-in-kpop",
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
    canonical: "/kpop/what-is-point-choreography-in-kpop",
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

export default function WhatIsPointChoreographyInKpopPage() {
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
          name: "Point choreography",
        },
        {
          "@type": "Thing",
          name: "포인트 안무",
        },
        {
          "@type": "Thing",
          name: "K-pop dance",
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
          name: "What is point choreography?",
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
              If you search &quot;point choreography in K-pop,&quot; the simple
              answer is this: point choreography is the signature move or
              gesture people remember from a K-pop song.
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
              <p>In Korean, fans often call it 포인트 안무.</p>

              <p>It means the key dance point of the song.</p>

              <p>Not the whole choreography.</p>

              <p>Not every move.</p>

              <p>
                The part that makes people say, &quot;Oh, I know that
                dance.&quot;
              </p>

              <p>That is point choreography.</p>

              <p>
                In K-pop, a song is not only remembered by melody or lyrics. It
                is also remembered by movement. A hand gesture, a small pose, a
                chorus move, a shoulder movement, a finger sign, or a simple
                step can become the part everyone copies.
              </p>

              <p>That is why point choreography matters.</p>

              <p>It gives the song a visual hook.</p>

              <p>
                When a group has a comeback, fans often look for the point
                choreography quickly. They watch the music video, the comeback
                stage, and the dance practice, then start noticing which move
                feels like the key point of the era.
              </p>

              <p>Sometimes the move is easy to copy.</p>

              <p>Sometimes it is sharp and stylish.</p>

              <p>Sometimes it is cute.</p>

              <p>Sometimes it is powerful.</p>

              <p>
                Sometimes it is very small, but the timing makes it memorable.
              </p>

              <p>A good point choreography does not need to be difficult.</p>

              <p>
                Actually, many strong point dances are simple enough for fans
                to remember.
              </p>

              <p>That is part of the reason they spread.</p>

              <p>
                If people can copy the move, it can travel through dance
                challenges, short clips, fan edits, school performances, random
                play dance, and social media.
              </p>

              <p>
                This is why K-pop companies and choreographers often think about
                point choreography carefully.
              </p>

              <p>
                A title track needs a part that people can recognize quickly.
              </p>

              <p>
                The music may be catchy, but the dance gives fans something to
                see and repeat.
              </p>

              <p>
                Point choreography is also one reason K-pop stages feel so
                replayable.
              </p>

              <p>You may watch the full stage once for the group.</p>

              <p>Then you watch again to see the chorus move.</p>

              <p>
                Then you watch a fancam to see how one member performs that
                point.
              </p>

              <p>
                Then you watch a close-up fancam to see their expression during
                the same move.
              </p>

              <p>
                The move becomes a small anchor for the whole comeback.
              </p>

              <p>
                Point choreography is related to killing part, but it is not
                exactly the same.
              </p>

              <p>
                A killing part is any short moment fans replay again and again.
              </p>

              <p>It can be a vocal line.</p>

              <p>It can be a facial expression.</p>

              <p>It can be a camera close-up.</p>

              <p>It can be a lyric.</p>

              <p>It can be a gesture.</p>

              <p>It can be a dance move.</p>

              <p>Point choreography is more specific.</p>

              <p>
                It is the dance or gesture people remember from the
                choreography.
              </p>

              <p>So a point choreography can become a killing part.</p>

              <p>But not every killing part is point choreography.</p>

              <p>That difference is important.</p>

              <p>
                For example, if fans keep replaying one member&apos;s
                expression before the chorus, that may be a killing part.
              </p>

              <p>
                If fans remember the chorus hand move and copy it, that is point
                choreography.
              </p>

              <p>Sometimes both happen at the same time.</p>

              <p>
                The move is memorable, and the idol performing it makes it even
                more replayable.
              </p>

              <p>
                That is where point choreography, killing part, and stage
                presence can overlap.
              </p>

              <p>
                Stage presence is how an idol holds attention during a
                performance.
              </p>

              <p>
                Point choreography is the move the song wants people to
                remember.
              </p>

              <p>
                A performer with strong stage presence can make point
                choreography feel sharper, softer, cooler, cuter, or more
                powerful depending on the concept.
              </p>

              <p>
                The same move can feel different depending on who performs it.
              </p>

              <p>One member may make it playful.</p>

              <p>Another may make it intense.</p>

              <p>Another may make it clean and elegant.</p>

              <p>
                That is why fans still watch individual fancams even when
                everyone is doing the same choreography.
              </p>

              <p>The move is the same.</p>

              <p>The feeling can be different.</p>

              <p>Point choreography is also connected to center moments.</p>

              <p>
                In many K-pop stages, the point move appears when the formation
                gives focus to one or more members. The center may lead the
                shape, start the movement, or make the key gesture easier to
                see.
              </p>

              <p>But point choreography is not the same as center.</p>

              <p>Center is about stage focus and placement.</p>

              <p>
                Point choreography is about the memorable move itself.
              </p>

              <p>
                A center can help a point move land clearly, but the point
                choreography belongs to the song&apos;s performance design.
              </p>

              <p>
                Beginners often notice point choreography before they know any
                member names.
              </p>

              <p>That is normal.</p>

              <p>
                You may not know the group yet, but you remember the move.
              </p>

              <p>Later, you might search the song.</p>

              <p>Then you watch the stage.</p>

              <p>Then you notice one member&apos;s fancam.</p>

              <p>
                Then maybe a killing part or stage presence pulls you deeper.
              </p>

              <p>This is a very common K-pop path.</p>

              <p>
                Point choreography can also help explain why dance challenges
                are so common in K-pop.
              </p>

              <p>
                A dance challenge usually uses a short, repeatable part of the
                choreography.
              </p>

              <p>It needs to be recognizable.</p>

              <p>It needs to fit inside a short clip.</p>

              <p>
                It needs to look good when idols, fans, or other artists copy
                it.
              </p>

              <p>
                That does not mean every point choreography is made only for
                social media.
              </p>

              <p>
                But in modern K-pop, a clear point move can help a song travel
                faster.
              </p>

              <p>
                People may hear the song because they saw the dance first.
              </p>

              <p>
                This is why some fans talk about whether a comeback has a
                strong point choreography.
              </p>

              <p>They are asking:</p>

              <p>Is there a move people will remember?</p>

              <p>Is there a part fans can copy?</p>

              <p>Does the chorus have a clear gesture?</p>

              <p>Does the dance match the song&apos;s concept?</p>

              <p>Will it look good on stage and in short clips?</p>

              <p>
                Those questions are part of how K-pop performances are
                discussed.
              </p>

              <p>Point choreography also changes by concept.</p>

              <p>A cute song may have a bright and easy gesture.</p>

              <p>A dark song may have a sharper move.</p>

              <p>
                A summer song may have a simple move that feels light and fun.
              </p>

              <p>
                An elegant song may have a smoother hand shape or body line.
              </p>

              <p>A powerful song may use bigger movement.</p>

              <p>The point choreography should match the song&apos;s mood.</p>

              <p>If it does not match, the move may feel forced.</p>

              <p>
                If it fits well, it can make the whole comeback easier to
                remember.
              </p>

              <p>
                For beginners, the easiest way to find point choreography is
                to watch the chorus.
              </p>

              <p>Not always, but often, the point move appears there.</p>

              <p>Look for the movement that repeats.</p>

              <p>Look for the gesture fans copy.</p>

              <p>Look for the part that appears in dance challenges.</p>

              <p>
                Look for the move that makes the song recognizable even without
                the full music video.
              </p>

              <p>That is probably the point choreography.</p>

              <p>Then watch a few fancams.</p>

              <p>
                You may notice how each member performs the same move
                differently.
              </p>

              <p>One member may have cleaner lines.</p>

              <p>One may have better facial timing.</p>

              <p>One may make the move look more relaxed.</p>

              <p>
                One may add a tiny expression that makes the point feel
                stronger.
              </p>

              <p>That is where stage presence comes in.</p>

              <p>The choreography gives the shape.</p>

              <p>The idol gives it feeling.</p>

              <p>This is one reason K-pop is fun to watch closely.</p>

              <p>
                A move can be simple, but the details are not always simple.
              </p>

              <p>Timing matters.</p>

              <p>Expression matters.</p>

              <p>Energy matters.</p>

              <p>Camera awareness matters.</p>

              <p>The way a member enters and exits the move matters too.</p>

              <p>
                Point choreography is small enough to remember, but it can
                reveal a lot about performance.
              </p>

              <p>It also helps fans talk about a song.</p>

              <p>
                Instead of only saying &quot;I like the dance,&quot; fans can
                point to the specific part they remember.
              </p>

              <p>The chorus hand move.</p>

              <p>The shoulder move.</p>

              <p>The pose before the beat drops.</p>

              <p>The simple step everyone copies.</p>

              <p>
                That shared memory helps the song spread inside fandom.
              </p>

              <p>It also helps casual viewers recognize the comeback.</p>

              <p>
                For HAEMIL readers, the easiest way to understand point
                choreography is this:
              </p>

              <p>A comeback gives fans a new era.</p>

              <p>A title track gives that era its main song.</p>

              <p>A performance gives the song a shape.</p>

              <p>Point choreography gives people the move they remember.</p>

              <p>A killing part gives people the moment they replay.</p>

              <p>A fancam lets fans see how one member performs it.</p>

              <p>Stage presence decides whether the move feels alive.</p>

              <p>
                So when K-pop fans talk about 포인트 안무, they are usually
                talking about the movement that makes a song stick in your head.
              </p>

              <p>Not just because it is difficult.</p>

              <p>Not just because it is flashy.</p>

              <p>
                But because once you see it, the song becomes easier to
                remember.
              </p>

              <p>That is point choreography.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">포인트 안무</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              포인트 안무 means the key dance point of a song — the signature
              move or gesture people remember and copy. English-speaking fans
              often say &quot;point choreography&quot; or &quot;point dance.&quot;
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              It is not the whole choreography. It is the part that gives the
              song a visual hook — often in the chorus, hook, or dance break.
              For how this differs from any replayable highlight, see our{" "}
              <Link
                href="/kpop/what-is-killing-part-in-kpop"
                className="font-semibold text-[var(--accent)]"
              >
                killing part guide
              </Link>
              .
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
