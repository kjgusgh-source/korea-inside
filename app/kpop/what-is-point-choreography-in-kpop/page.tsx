import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";

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
              <TermBadge term="point-choreography" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {pageTitle}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:mt-6 md:text-lg">
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
            <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <h2 className="text-xl font-semibold text-[var(--text)] md:text-2xl">
                What point choreography means
              </h2>

              <p>
                In Korean, fans often call it 포인트 안무. It means the key
                dance point of the song. Not the whole choreography. Not every
                move.
              </p>

              <p>
                The part that makes people say, &quot;Oh, I know that
                dance.&quot; That is point choreography.
              </p>

              <p>
                In K-pop, a song is not only remembered by melody or lyrics. It
                is also remembered by movement. A hand gesture, a small pose,
                a chorus move, a shoulder movement, a finger sign, or a simple
                step can become the part everyone copies.
              </p>

              <p>
                That is why point choreography matters. It gives the song a
                visual hook.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why point choreography matters for a comeback
              </h2>

              <p>
                When a group has a comeback, fans often look for the point
                choreography quickly. They watch the music video, the
                comeback stage, and the dance practice, then start noticing
                which move feels like the key point of the era.
              </p>

              <p>
                Sometimes the move is easy to copy. Sometimes it is sharp and
                stylish. Sometimes it is cute. Sometimes it is powerful.
                Sometimes it is very small, but the timing makes it memorable.
              </p>

              <p>
                A good point choreography does not need to be difficult.
                Actually, many strong point dances are simple enough for fans
                to remember. That is part of the reason they spread.
              </p>

              <p>
                If people can copy the move, it can travel through dance
                challenges, short clips, fan edits, school performances,
                random play dance, and social media.
              </p>

              <p>
                This is why K-pop companies and choreographers often think
                about point choreography carefully. A title track needs a
                part that people can recognize quickly. The music may be
                catchy, but the dance gives fans something to see and repeat.
              </p>

              <p>
                Point choreography is also one reason K-pop stages feel so
                replayable. You may watch the full stage once for the group.
                Then you watch again to see the chorus move. Then you watch a
                fancam to see how one member performs that point. Then you
                watch a close-up fancam to see their expression during the
                same move.
              </p>

              <p>The move becomes a small anchor for the whole comeback.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it differs from a killing part
              </h2>

              <p>
                Point choreography is related to killing part, but it is not
                exactly the same. A killing part is any short moment fans
                replay again and again.
              </p>

              <p>
                It can be a vocal line. It can be a facial expression. It can
                be a camera close-up. It can be a lyric. It can be a gesture.
                It can be a dance move.
              </p>

              <p>
                Point choreography is more specific. It is the dance or
                gesture people remember from the choreography.
              </p>

              <p>
                So a point choreography can become a killing part. But not
                every killing part is point choreography. That difference is
                important.
              </p>

              <p>
                For example, if fans keep replaying one member&apos;s
                expression before the chorus, that may be a killing part. If
                fans remember the chorus hand move and copy it, that is point
                choreography.
              </p>

              <p>
                Sometimes both happen at the same time. The move is
                memorable, and the idol performing it makes it even more
                replayable. That is where point choreography, killing part,
                and stage presence can overlap.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How stage presence brings the move to life
              </h2>

              <p>
                Stage presence is how an idol holds attention during a
                performance. Point choreography is the move the song wants
                people to remember.
              </p>

              <p>
                A performer with strong stage presence can make point
                choreography feel sharper, softer, cooler, cuter, or more
                powerful depending on the concept. The same move can feel
                different depending on who performs it.
              </p>

              <p>
                One member may make it playful. Another may make it intense.
                Another may make it clean and elegant.
              </p>

              <p>
                That is why fans still watch individual fancams even when
                everyone is doing the same choreography.
              </p>

              <p>The move is the same. The feeling can be different.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Point choreography vs. center, and how beginners notice it first
              </h2>

              <p>
                Point choreography is also connected to center moments. In
                many K-pop stages, the point move appears when the formation
                gives focus to one or more members. The center may lead the
                shape, start the movement, or make the key gesture easier to
                see.
              </p>

              <p>
                But point choreography is not the same as center. Center is
                about stage focus and placement. Point choreography is about
                the memorable move itself.
              </p>

              <p>
                A center can help a point move land clearly, but the point
                choreography belongs to the song&apos;s performance design.
              </p>

              <p>
                Beginners often notice point choreography before they know
                any member names. That is normal. You may not know the group
                yet, but you remember the move.
              </p>

              <p>
                Later, you might search the song. Then you watch the stage.
                Then you notice one member&apos;s fancam. Then maybe a killing
                part or stage presence pulls you deeper.
              </p>

              <p>This is a very common K-pop path.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why point choreography drives dance challenges and concept design
              </h2>

              <p>
                Point choreography can also help explain why dance challenges
                are so common in K-pop. A dance challenge usually uses a
                short, repeatable part of the choreography.
              </p>

              <p>
                It needs to be recognizable. It needs to fit inside a short
                clip. It needs to look good when idols, fans, or other
                artists copy it.
              </p>

              <p>
                That does not mean every point choreography is made only for
                social media. But in modern K-pop, a clear point move can
                help a song travel faster. People may hear the song because
                they saw the dance first.
              </p>

              <p>
                This is why some fans talk about whether a comeback has a
                strong point choreography. They are asking:
              </p>

              <p>
                Is there a move people will remember? Is there a part fans can
                copy? Does the chorus have a clear gesture? Does the dance
                match the song&apos;s concept? Will it look good on stage and
                in short clips?
              </p>

              <p>
                Those questions are part of how K-pop performances are
                discussed.
              </p>

              <p>
                Point choreography also changes by concept. A cute song may
                have a bright and easy gesture. A dark song may have a
                sharper move. A summer song may have a simple move that feels
                light and fun. An elegant song may have a smoother hand shape
                or body line. A powerful song may use bigger movement.
              </p>

              <p>
                The point choreography should match the song&apos;s mood. If
                it does not match, the move may feel forced. If it fits well,
                it can make the whole comeback easier to remember.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How to spot it, and how it fits with fancams, killing parts, and stage presence
              </h2>

              <p>
                For beginners, the easiest way to find point choreography is
                to watch the chorus. Not always, but often, the point move
                appears there.
              </p>

              <p>
                Look for the movement that repeats. Look for the gesture fans
                copy. Look for the part that appears in dance challenges. Look
                for the move that makes the song recognizable even without the
                full music video.
              </p>

              <p>That is probably the point choreography.</p>

              <p>
                Then watch a few fancams. You may notice how each member
                performs the same move differently.
              </p>

              <p>
                One member may have cleaner lines. One may have better facial
                timing. One may make the move look more relaxed. One may add
                a tiny expression that makes the point feel stronger.
              </p>

              <p>
                That is where stage presence comes in. The choreography gives
                the shape. The idol gives it feeling.
              </p>

              <p>
                This is one reason K-pop is fun to watch closely. A move can
                be simple, but the details are not always simple.
              </p>

              <p>
                Timing matters. Expression matters. Energy matters. Camera
                awareness matters. The way a member enters and exits the move
                matters too.
              </p>

              <p>
                Point choreography is small enough to remember, but it can
                reveal a lot about performance. It also helps fans talk about
                a song.
              </p>

              <p>
                Instead of only saying &quot;I like the dance,&quot; fans can
                point to the specific part they remember.
              </p>

              <p>
                The chorus hand move. The shoulder move. The pose before the
                beat drops. The simple step everyone copies.
              </p>

              <p>
                That shared memory helps the song spread inside fandom. It
                also helps casual viewers recognize the comeback.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand point
                choreography is this:
              </p>

              <p>
                A comeback gives fans a new era. A title track gives that era
                its main song. A performance gives the song a shape. Point
                choreography gives people the move they remember.
              </p>

              <p>
                A killing part gives people the moment they replay. A fancam
                lets fans see how one member performs it. Stage presence
                decides whether the move feels alive.
              </p>

              <p>
                So when K-pop fans talk about 포인트 안무, they are usually
                talking about the movement that makes a song stick in your
                head.
              </p>

              <p>
                Not just because it is difficult. Not just because it is
                flashy. But because once you see it, the song becomes easier
                to remember.
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
