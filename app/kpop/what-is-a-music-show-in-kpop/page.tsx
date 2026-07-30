import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-music-show-in-kpop`;

const pageTitle =
  "What Is a Music Show in K-pop? Why Comeback Stages and Fancams Matter";
const pageDescription =
  "A friendly HAEMIL guide to K-pop music shows, how comeback stages, title tracks, fancams, ending fairy moments, outfits, and music show wins fit into idol promotions.";

const quickFacts = [
  "Basic meaning: A K-pop music show is a Korean broadcast program where idols perform current songs.",
  "Korean word: 음악방송 is often shortened to 음방.",
  "Best known for: Comeback stages, title track performances, fancams, ending fairy moments, stage outfits, and weekly performance clips.",
  "Comeback stage: A promoted performance of a new song during a comeback period.",
  "Fancams: Music shows often upload member-focused videos after performances.",
  "Music show win: A weekly trophy or first-place result, but rules vary by program and time.",
  "Local tip: Korean fans may say 음방 활동 when talking about a group’s music show promotion period.",
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
    title: "What is a title track in K-pop?",
    description:
      "A friendly guide to title track meaning in K-pop, how it differs from B-sides and pre-releases, and why one song usually represents a comeback.",
    href: "/kpop/what-is-a-title-track-in-kpop",
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
    title: "What is an ending fairy?",
    description:
      "A friendly guide to K-pop ending fairy meaning, why the final close-up matters, and how it differs from fancams, facecams, visual moments, and center parts.",
    href: "/kpop/what-is-ending-fairy",
  },
  {
    label: "K-pop starter guide",
    title: "What is dance practice in K-pop?",
    description:
      "A friendly guide to K-pop dance practice videos, why fans watch choreography clearly, and how they differ from fancams, stages, performance videos, and dance challenges.",
    href: "/kpop/what-is-dance-practice-in-kpop",
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
    canonical: "/kpop/what-is-a-music-show-in-kpop",
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

export default function WhatIsAMusicShowInKpopPage() {
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
          name: "K-pop music show",
        },
        {
          "@type": "Thing",
          name: "음악방송",
        },
        {
          "@type": "Thing",
          name: "Comeback stage",
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
          name: "What is a music show?",
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

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop starter guide
            </p>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {pageTitle}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:mt-6 md:text-lg">
              If you search &quot;music show meaning in K-pop,&quot; the simple
              answer is this: a K-pop music show is a Korean broadcast program
              where idols perform current songs.
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
                What a music show actually is
              </h2>

              <p>
                In Korean, music show is 음악방송. Fans often shorten it to
                음방.
              </p>

              <p>
                Music shows are one of the main places where K-pop comebacks
                become visible.
              </p>

              <p>
                A group releases a title track. Then they perform it on
                music shows. Fans watch the stage. Then they watch fancams.
                Then they notice outfits, choreography, center moments,
                killing parts, and ending fairy clips.
              </p>

              <p>
                That is why music shows matter so much in K-pop. They are not
                only TV performances. They are part of the comeback cycle.
              </p>

              <p>
                For beginners, the easiest way to understand a music show is
                to think of it as a weekly performance stage. Artists come to
                perform songs they are currently promoting.
              </p>

              <p>
                Some are big groups. Some are rookies. Some are solo
                artists. Some are returning with a comeback. Some are
                introducing themselves for the first time.
              </p>

              <p>
                Not every artist appears on every show. Not every
                performance has the same level of attention. But music shows
                are still one of the easiest ways to follow active K-pop
                promotions.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How a music show stage differs from the music video
              </h2>

              <p>
                A music show stage is often where fans first see how a title
                track works outside the music video. A music video can show
                concept, editing, sets, story, styling, and camera
                direction.
              </p>

              <p>
                A music show stage shows the performance version. The
                choreography becomes clearer. The outfits are different. The
                camera work is different. The live-stage energy feels
                different.
              </p>

              <p>
                Sometimes a song becomes easier to understand after watching
                a music show stage. That is very normal in K-pop.
              </p>

              <p>
                A title track is not only heard. It is watched again and
                again through stages.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Comeback stages, and the questions fans ask
              </h2>

              <p>
                One phrase you may see often is comeback stage. A comeback
                stage is a promoted performance of a new song during the
                comeback period.
              </p>

              <p>
                For many fans, the comeback stage is exciting because it is
                the first time they can see the new choreography, styling,
                and stage image together.
              </p>

              <p>
                Fans may ask: How does the title track look on stage? Who
                stands out this era? What is the point choreography? What is
                the killing part? Who gets the center moment? How does the
                concept feel outside the music video?
              </p>

              <p>Music shows help answer those questions.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How music shows create fancams, and how members get discovered
              </h2>

              <p>
                They also create fancams. A fancam is a member-focused video.
                Instead of watching the whole group, you follow one idol
                through the performance.
              </p>

              <p>
                Many official fancams come from music shows. That is why
                music shows are important for member discovery.
              </p>

              <p>
                A full stage shows the group. A fancam shows one person
                inside the group. A close-up fancam or facecam shows
                expressions and camera awareness more clearly.
              </p>

              <p>
                For new fans, this can be the moment a member becomes easier
                to remember.
              </p>

              <p>
                You may watch the full stage first. Then you watch one
                fancam. Then another. Then you notice a bias or bias
                wrecker. That path often starts with music show content.
              </p>

              <p>
                Music shows are also where ending fairy moments became part
                of modern K-pop watching. An ending fairy is the final
                close-up after a performance ends.
              </p>

              <p>
                The idol catches their breath, holds an expression, smiles,
                reacts to the camera, or gives a small playful moment.
              </p>

              <p>
                Not every ending is serious. Not every ending is perfect.
                That is part of the charm.
              </p>

              <p>
                The ending fairy became popular because music show cameras
                often give one or more idols a final close-up after the
                stage.
              </p>

              <p>
                Fans clip those moments. They share them. They compare them.
                They remember them.
              </p>

              <p>
                So if you want to understand ending fairy culture, music
                shows are one of the best places to start.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Stage outfits, and how a music show can reveal stage presence
              </h2>

              <p>
                Music shows also make stage outfits important. During a
                comeback, a group may perform the same title track many
                times.
              </p>

              <p>
                The song is the same. The choreography is mostly the same.
                But the outfits change.
              </p>

              <p>
                The hair styling may change. The camera angles may change.
                The stage background may change. The expressions may become
                more relaxed after a few performances.
              </p>

              <p>
                That is why fans watch multiple stages of the same song.
                They are not only watching the song again. They are watching
                the era from different angles.
              </p>

              <p>
                A music show can also reveal stage presence. Stage presence
                is how an idol holds attention during a performance.
              </p>

              <p>
                On a music show, fans can compare several things: How a
                member uses the camera. How they handle transitions. How
                they perform the point choreography. How they keep the mood
                when they are not in the center. How they react during
                close-up moments.
              </p>

              <p>
                A music video may hide some of that with editing. A music
                show stage can make it easier to feel. Fancams make it even
                clearer.
              </p>

              <p>
                This is why K-pop fans often watch the same comeback through
                many layers. Music video. Music show stage. Fancam. Facecam.
                Dance practice. Dance challenge. Behind-the-scenes clip.
              </p>

              <p>
                Each one shows a different part of the performance. Music
                shows sit near the center of that system. They connect the
                comeback to the weekly fan experience.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Music show wins, and why they&apos;re not the whole story
              </h2>

              <p>
                Another phrase beginners may see is music show win. A music
                show win means an artist receives first place or a trophy on
                a music show for that week.
              </p>

              <p>
                Fans often celebrate these wins, especially a group&apos;s
                first win. It can feel meaningful because it shows that the
                comeback was recognized during that promotion period.
              </p>

              <p>
                But it is important to be careful. Music show rules can vary
                by program and time. Different shows may use different
                scoring systems.
              </p>

              <p>
                Digital results, album sales, voting, broadcasts, video
                views, or other factors may matter depending on the program.
                Because those rules can change, HAEMIL does not treat music
                show wins as a simple universal ranking. It is better to
                understand them as part of K-pop promotion culture.
              </p>

              <p>
                A music show win can be emotional for fans. It can be a
                milestone. But it is not the only way to measure an
                artist&apos;s value.
              </p>

              <p>
                Some songs become loved without many wins. Some artists grow
                slowly. Some performances become famous through fancams or
                short clips. Some stages matter because of fan memory, not
                only trophies.
              </p>

              <p>That balance is important.</p>

              <p>
                Music shows are also useful for rookie groups. When a rookie
                group debuts, music show stages help viewers learn the
                members.
              </p>

              <p>
                The camera introduces faces. The choreography introduces
                performance style. Fancams help fans choose who to follow.
              </p>

              <p>
                A rookie group may not be familiar yet, but a good music
                show stage can make one member or one point move easier to
                remember.
              </p>

              <p>
                This is why early music show performances can matter. They
                give the group repeated chances to be seen.
              </p>

              <p>
                Music shows also help explain why K-pop promotions can feel
                so busy. During a comeback, an artist may release a music
                video, perform on several shows, upload fancams, appear in
                interviews, post dance challenges, and share
                behind-the-scenes content.
              </p>

              <p>
                For fans, this creates a rhythm. A new stage comes out. A new
                outfit appears. A fancam is uploaded. A member has a funny
                ending fairy. A killing part starts spreading. A challenge
                clip gets shared. The comeback keeps moving.
              </p>

              <p>That rhythm is part of why K-pop fandom feels active.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How to watch music show content, and how it all connects to a comeback
              </h2>

              <p>For beginners, one simple way to watch music show content is this:</p>

              <p>
                Start with the music video. Then watch a music show stage.
                Then watch a dance practice. Then choose one fancam. Then
                watch the ending fairy or close-up clips if they interest
                you.
              </p>

              <p>This order helps you understand the comeback from wide to close.</p>

              <p>
                The music video shows concept. The music show shows
                performance. The dance practice shows choreography. The
                fancam shows one member. The close-up shows expression. The
                ending fairy shows the final camera moment.
              </p>

              <p>
                You do not have to watch everything. But knowing the
                difference makes K-pop easier to follow.
              </p>

              <p>
                Music shows are also a good place to understand title
                tracks. The title track is the main song promoted during a
                comeback.
              </p>

              <p>
                Because music shows usually focus on the promoted song, they
                help define what the public sees from that era.
              </p>

              <p>
                If the title track has strong point choreography, music
                shows show it repeatedly. If a member has a memorable
                killing part, music show clips can help it spread. If the
                concept depends on styling, different music show outfits can
                shape how fans remember the comeback.
              </p>

              <p>
                So music shows are not separate from the comeback. They are
                one of the main ways a comeback lives.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand music
                shows is this:
              </p>

              <p>
                A comeback gives fans a new era. A title track gives that
                era its main song. A music show gives that song a stage.
              </p>

              <p>
                A fancam lets fans follow one member. An ending fairy gives
                the final close-up. A music show win can become a milestone.
              </p>

              <p>
                And week by week, fans watch the comeback unfold through
                performances.
              </p>

              <p>
                That is why K-pop music shows matter. They are where a song
                becomes a stage. And where a stage becomes many small
                moments fans remember.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">음악방송 · 음방</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              음악방송 means music show — a Korean broadcast program where idols
              perform current songs. Fans often shorten it to 음방. When a group
              is promoting on music shows, fans may say they are doing 음방
              활동.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A music show win is often called 음방 1위. Rules vary by program
              and time, so it helps to think of wins as part of promotion culture
              — meaningful for fans, but not the only measure of an artist&apos;s
              value.
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
