import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-title-track-in-kpop`;

const pageTitle =
  "What Is a Title Track in K-pop? The Song That Represents a Comeback";
const pageDescription =
  "A friendly HAEMIL guide to title track meaning in K-pop, how it differs from B-sides and pre-releases, and why title tracks shape comebacks, stages, fancams, and fan discussions.";

const quickFacts = [
  "Basic meaning: A title track is the main song promoted during a K-pop comeback.",
  "Usually gets: The music video, main choreography, music show stages, fancams, dance challenges, and the most public attention.",
  "Not always the best song: It is the song chosen to represent the comeback, not necessarily every fan’s favorite.",
  "B-side meaning: A B-side is another song on the album that is not the main title track.",
  "Pre-release meaning: A pre-release is a song released before the main comeback or title track.",
  "Connected to concept: The title track usually shows the comeback’s concept most clearly.",
  "Local tip: Korean fans may say 타이틀곡 for title track and 수록곡 for B-side.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
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
    title: "What is point choreography in K-pop?",
    description:
      "A friendly guide to point choreography and 포인트 안무 in K-pop, the signature move fans remember, copy, replay, and connect to killing parts and dance challenges.",
    href: "/kpop/what-is-point-choreography-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
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
    canonical: "/kpop/what-is-a-title-track-in-kpop",
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

export default function WhatIsATitleTrackInKpopPage() {
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
          name: "K-pop title track",
        },
        {
          "@type": "Thing",
          name: "타이틀곡",
        },
        {
          "@type": "Thing",
          name: "B-side",
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
          name: "What is a title track?",
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
              <TermBadge term="title-track" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {pageTitle}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:mt-6 md:text-lg">
              If you search &quot;title track meaning in K-pop,&quot; the simple
              answer is this: a title track is the main song promoted during a
              K-pop comeback.
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
                What a title track actually is
              </h2>

              <p>
                It is usually the song with the music video. The main
                choreography. The music show stages. The fancams. The dance
                challenges. The song most casual viewers notice first.
              </p>

              <p>
                In Korean, fans often call it 타이틀곡. That means title
                track.
              </p>

              <p>
                But the title track is not always the only good song on an
                album. It is the song chosen to represent the comeback. That
                difference matters.
              </p>

              <p>
                A K-pop album can have several songs. One song becomes the
                title track. The other songs are often called B-sides. In
                Korean, fans may call them 수록곡, which means songs included
                on the album.
              </p>

              <p>
                A B-side is not necessarily less loved. Sometimes fans like a
                B-side more than the title track. Sometimes a B-side becomes
                popular through performances, fan edits, concerts, or short
                clips.
              </p>

              <p>
                But the title track is usually the song the company chooses
                as the main face of the comeback. That is why title tracks
                matter so much in K-pop.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                What fans want from a title track, and how it shapes the music video
              </h2>

              <p>
                When a group has a comeback, fans wait to see what the title
                track will sound like. They want to know the concept. They
                want to see the choreography. They want to know the killing
                part. They want to see which member stands out. They want to
                know whether the song feels like the group&apos;s image or a
                new direction.
              </p>

              <p>The title track carries a lot of that attention.</p>

              <p>
                A title track is also connected to the music video. For many
                international fans, the music video is the first full look
                at a comeback.
              </p>

              <p>
                The styling becomes clearer. The concept becomes easier to
                read. The main choreography appears. The members&apos;
                images for the era become more memorable.
              </p>

              <p>
                That is why a title track can shape how people remember an
                entire comeback. Even if the album has many songs, the title
                track often becomes the entry point.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How the title track works as a performance
              </h2>

              <p>
                A title track is also connected to stages. After the song is
                released, K-pop artists usually perform the title track on
                music shows and other stages.
              </p>

              <p>
                This is where fans start watching live performances, comeback
                stages, fancams, facecams, and dance practices. The title
                track has to work not only as a song, but also as a
                performance.
              </p>

              <p>
                That is one reason K-pop title tracks often have clear
                choreography. They need moments people can remember.
              </p>

              <p>
                A chorus move. A point choreography. A center moment. A
                killing part. A camera close-up. A performance detail that
                fans want to replay.
              </p>

              <p>
                The title track gives those moments a place to happen. This
                is also why some songs feel different after you watch the
                stage.
              </p>

              <p>
                You may hear the title track once and feel unsure. Then you
                watch a comeback stage. You see the choreography. You notice
                the point move. You watch a fancam. You notice one
                member&apos;s stage presence.
              </p>

              <p>
                Suddenly, the song becomes easier to understand. That is
                very normal in K-pop.
              </p>

              <p>A title track is not only heard. It is watched.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How the title track differs from a B-side
              </h2>

              <p>
                A B-side works differently. A B-side may be softer, more
                experimental, more emotional, more playful, or more
                fan-focused.
              </p>

              <p>
                It may not get the main music video. It may not have full
                promotions. But fans often care deeply about B-sides because
                they can show another side of the artist.
              </p>

              <p>
                Sometimes a B-side becomes a hidden favorite. Sometimes fans
                say, &quot;This should have been the title track.&quot;
              </p>

              <p>
                That does not mean the actual title track was wrong. It just
                means fans connect with different songs in different ways.
              </p>

              <p>
                The title track represents the comeback publicly. A B-side
                can feel more personal inside the fandom. That is the
                difference.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Pre-release, and how the release cycle fits together
              </h2>

              <p>
                Then there is a pre-release. A pre-release is a song released
                before the main comeback or title track. In Korean, fans may
                call it 선공개곡.
              </p>

              <p>
                A pre-release can build attention before the album arrives.
                It can show part of the concept. It can give fans something
                to listen to before the title track. It can also help casual
                listeners notice the comeback earlier.
              </p>

              <p>
                But a pre-release is not always the main title track.
                Sometimes it is a separate song that opens the door. Then the
                title track arrives later as the main focus.
              </p>

              <p>
                This can be confusing for beginners because K-pop release
                plans can be very detailed. A comeback may include: a
                scheduler, concept photos, track list, highlight medley,
                pre-release, music video teaser, title track, album release,
                comeback stage, dance practice, fancams, and promotions.
              </p>

              <p>
                The title track sits near the center of that whole cycle. It
                is the song most people use to understand the comeback.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How the title track connects to concept, point choreography, and killing parts
              </h2>

              <p>
                Title track is also connected to concept. A concept is the
                overall mood, image, and style of a comeback. The title track
                usually shows that concept most clearly.
              </p>

              <p>
                If the concept is bright, the title track may sound bright.
                If the concept is dark, the title track may have sharper
                styling and performance. If the concept is elegant, the
                choreography and visuals may feel smoother.
              </p>

              <p>
                The title track helps the concept become real. Not only in
                the music. In the video. In the stage. In the outfits. In
                the expressions. In the fan conversation.
              </p>

              <p>
                That is why fans may ask, &quot;Does the title track fit the
                concept?&quot; They are asking whether the main song matches
                the era&apos;s image.
              </p>

              <p>
                A title track is also connected to point choreography. Point
                choreography is the signature move people remember from a
                song.
              </p>

              <p>
                Because the title track gets the main stages and challenges,
                it often has the clearest point move. That move can help the
                song spread.
              </p>

              <p>
                Fans copy it. Other idols may do challenges. Short clips use
                it. A simple gesture can become part of how people remember
                the comeback.
              </p>

              <p>
                This is one reason title tracks are designed carefully. The
                song needs a hook. The performance needs a visual hook too.
              </p>

              <p>
                A title track can also create killing parts. A killing part
                is the short moment fans replay. It can be a vocal line,
                dance move, expression, lyric, camera moment, or gesture.
              </p>

              <p>
                In many comebacks, the title track is where the most
                talked-about killing parts appear. Not always. But often.
              </p>

              <p>
                Because that is the song with the most stages, fancams, and
                attention. The more people watch, the more replay moments
                they find.
              </p>

              <p>
                That is also how a member can become more noticeable during a
                comeback. Maybe they have a strong line in the title track.
                Maybe they lead a point choreography. Maybe their fancam
                shows strong stage presence. Maybe a close-up moment makes
                fans remember them.
              </p>

              <p>
                The title track becomes the place where those impressions
                gather.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                The simple map: title track, B-side, and pre-release
              </h2>

              <p>
                For beginners, the easiest way to understand title track,
                B-side, and pre-release is this:
              </p>

              <p>
                The title track is the main promoted song. A B-side is
                another song on the album. A pre-release is a song released
                before the main comeback or title track.
              </p>

              <p>They can all be good. They just play different roles.</p>

              <p>
                The title track is public-facing. The B-side can be
                fan-favorite. The pre-release can build attention. That is
                the simple map.
              </p>

              <p>
                It also helps to remember that &quot;title track&quot; does
                not mean &quot;the song with the album title.&quot;
                Sometimes the title track and album title may be connected.
                Sometimes they are different.
              </p>

              <p>
                In K-pop fan talk, title track usually means the main
                promoted song. So do not overthink the English phrase. Think
                of it as the comeback&apos;s main song. That is usually
                enough.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand it is
                this:
              </p>

              <p>
                A comeback gives fans a new era. A concept gives that era its
                mood. A title track gives that era its main song.
              </p>

              <p>
                Point choreography gives people a move to remember. Killing
                parts give people moments to replay. Fancams let fans follow
                individual members.
              </p>

              <p>
                B-sides give fans more of the artist beyond the main
                promotion. And a pre-release can open the door before
                everything arrives.
              </p>

              <p>
                So when K-pop fans ask, &quot;What is the title track?&quot;
                they are really asking: Which song is going to represent
                this comeback? That is the title track.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">타이틀곡 · 수록곡 · 선공개곡</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              타이틀곡 is the Korean word for title track — the main song
              promoted during a comeback. 수록곡 refers to B-sides, the other
              songs included on the album. 선공개곡 means pre-release, a song
              released before the main title track or full comeback.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              English-speaking fans often say &quot;title track,&quot;
              &quot;B-side,&quot; and &quot;pre-release&quot; too. The roles are
              the same: one song represents the comeback publicly, other songs
              live on the album, and a pre-release can build attention before the
              main era arrives.
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
