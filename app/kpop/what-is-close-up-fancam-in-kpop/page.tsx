import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-close-up-fancam-in-kpop`;

const pageTitle =
  "What Is a Close-up Fancam in K-pop? Facecam and 얼빡직캠 Meaning";
const pageDescription =
  "A friendly HAEMIL guide to close-up fancams, facecams, and 얼빡직캠 in K-pop, how they differ from regular fancams, ending fairy moments, visual talk, and stage presence.";

const quickFacts = [
  "Basic meaning: A close-up fancam is a member-focused video that stays closer to the idol’s face and expressions.",
  "Korean slang: 얼빡직캠 is fan slang for a very face-focused close-up fancam.",
  "Also called: Facecam, close-up fancam, or face-focused fancam depending on the channel or fan community.",
  "Best for: Expressions, eye contact, breathing, lip movement, camera timing, styling, and tiny mood changes.",
  "Different from a normal fancam: A regular fancam often shows more full-body performance and choreography.",
  "Different from ending fairy: Ending fairy is the final close-up after the performance ends; a facecam follows the idol during the stage.",
  "Important: It is not only about looking pretty. It also shows control, timing, and camera awareness.",
];

const relatedGuides = [
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
    title: "What does visual mean in K-pop?",
    description:
      "A friendly guide to what “visual” means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
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
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
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
    canonical: "/kpop/what-is-close-up-fancam-in-kpop",
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

export default function WhatIsCloseUpFancamInKpopPage() {
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
          name: "Close-up fancam",
        },
        {
          "@type": "Thing",
          name: "얼빡직캠",
        },
        {
          "@type": "Thing",
          name: "K-pop fancam",
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
          name: "What is a close-up fancam?",
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
              If you search &quot;close-up fancam meaning&quot; or &quot;facecam
              meaning&quot; in K-pop, the simple answer is this: a close-up
              fancam is a member-focused video that stays closer to the
              idol&apos;s face and expressions.
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
                How a close-up fancam differs from a regular fancam
              </h2>

              <p>
                A regular fancam usually helps you follow one member&apos;s
                full performance. A close-up fancam helps you watch their
                face. That small difference changes what you notice.
              </p>

              <p>
                In Korean fan talk, you may also see the word 얼빡직캠,
                sometimes written in English as eolppak-jikcam. It is casual
                fan slang for a very close, face-focused fancam. The word can
                sound strange if you translate it directly, so it is better to
                understand the feeling: the camera is close enough that the
                idol&apos;s face, eyes, expression, and small reactions become
                the main point.
              </p>

              <p>
                It is not a formal role. It is not a serious technical term.
                It is fandom language for a kind of video fans know very
                quickly when they see it.
              </p>

              <p>
                A normal fancam often shows more of the body. You can see
                dance lines, footwork, arm movement, formations, and how the
                member moves through the stage. That is useful when you want
                to understand performance and choreography.
              </p>

              <p>
                A close-up fancam gives up some of that full-body view.
                Instead, it lets you see smaller things.
              </p>

              <p>
                A quick eye movement. A breath after a hard move. A smile that
                disappears in one second. A change from cute to sharp. A lip
                movement during a quiet line. A moment where the idol knows
                the camera is close and reacts without making it too obvious.
              </p>

              <p>Those are the details close-up fancams are made for.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why close-up fancams connect to expression and visual talk
              </h2>

              <p>
                This is why close-up fancams connect naturally to expression
                talk. K-pop stages are not only about big moves. Idols also
                perform with their faces. They change mood between verses and
                chorus. They match the song concept. They react to lyrics.
                They hold eye contact. They sometimes play with the camera.
              </p>

              <p>
                A close-up fancam makes all of that easier to see. But it
                should not be reduced to &quot;watching a pretty face.&quot;
                That is too simple.
              </p>

              <p>
                Of course, close-up fancams can make fans talk about visual
                image. Styling, makeup, facial impression, and camera
                memorability all become clearer when the shot is close. But
                visual talk in K-pop should not become a beauty ranking. A
                good close-up fancam is not only about appearance. It is also
                about control.
              </p>

              <p>
                Can the idol stay in the mood of the song? Can they make small
                expressions feel natural? Can they avoid looking stiff when
                the camera is close? Can they keep the performance alive even
                when the choreography is not the biggest part?
              </p>

              <p>Those questions matter.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it differs from ending fairy, stage presence, and killing part
              </h2>

              <p>
                Close-up fancams are also different from ending fairy moments.
                An ending fairy happens after the song ends. It is the final
                close-up when one idol catches their breath, holds an
                expression, or reacts to the camera.
              </p>

              <p>
                A close-up fancam happens during the performance. It may
                include the ending moment, but it is not only that. The
                facecam follows the idol through the stage. The ending fairy
                is the final few seconds. That difference is important.
              </p>

              <p>
                Close-up fancams also connect to stage presence. Sometimes
                stage presence is loud: strong movement, big energy, sharp
                expressions. But sometimes it is quieter. A close-up fancam
                can show whether an idol keeps your attention even with small
                changes. Maybe they do not overact. Maybe they know exactly
                when to look at the camera. Maybe they hold the mood with
                their eyes instead of a big gesture.
              </p>

              <p>
                That kind of presence is easier to notice when the camera is
                close.
              </p>

              <p>
                Close-up fancams can also make killing parts stand out. A
                killing part is the short part of a song or performance that
                fans replay. In a close-up fancam, a killing part may not only
                be a dance move or line. It can be the expression right before
                the beat drops, the look during one lyric, or the small
                reaction after a center moment.
              </p>

              <p>
                The close camera makes the replay point feel more personal.
                That is one reason fans like these videos. They make a
                performance feel closer than the full-stage version.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How to watch a close-up fancam for the first time
              </h2>

              <p>
                For beginners, the easiest way to understand close-up fancams
                is to compare three videos of the same stage.
              </p>

              <p>
                Watch the full-group stage first. Then watch a regular
                fancam. Then watch a close-up fancam or facecam.
              </p>

              <p>
                The full-stage video tells you what the group did. The
                regular fancam tells you how one member performed. The
                close-up fancam tells you what happened on that member&apos;s
                face while they performed.
              </p>

              <p>All three can be useful. They just answer different questions.</p>

              <p>
                If you are watching a close-up fancam for the first time, do
                not only wait for the chorus. Watch the quiet seconds too.
              </p>

              <p>
                The moment before the member sings. The second after a
                difficult move. The way their eyes change when the song mood
                changes. The way they breathe while staying in character. The
                way they react when the camera stays close longer than
                expected.
              </p>

              <p>Those are the parts fans often replay.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How a close-up fancam can make a member memorable
              </h2>

              <p>
                Close-up fancams can also be useful for learning why one
                member suddenly becomes memorable. Maybe you watched the full
                stage and did not notice them much.
              </p>

              <p>
                Then a facecam shows their expression control. Or their
                styling. Or their calm confidence. Or the way they handle a
                concept.
              </p>

              <p>
                Suddenly, the member becomes easier to remember. That is a
                very normal K-pop path.
              </p>

              <p>A close-up fancam is not better than a normal fancam. It is just different.</p>

              <p>
                If you care about choreography, a full-body fancam may be
                better. If you care about expressions, a close-up fancam may
                be better. If you care about the full performance, watch the
                full-group stage too.
              </p>

              <p>
                The best way to understand K-pop is not to choose only one
                format. It is to know what each format shows you.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it fits with the rest of K-pop fan terms
              </h2>

              <p>
                For HAEMIL readers, the easiest way to understand close-up
                fancam is this:
              </p>

              <p>
                A fancam follows one member. A close-up fancam follows one
                member&apos;s face. An ending fairy gives you the final
                close-up. A visual moment shows how image and camera
                memorability work. Stage presence shows how the idol holds
                attention. A killing part gives you the few seconds you
                replay.
              </p>

              <p>
                Close-up fancams sit right in the middle of all of that. They
                are small videos for small details. And in K-pop, small
                details can change everything.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">얼빡직캠</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              얼빡직캠 is casual Korean fan slang for a very close, face-focused
              fancam. You may also see it written as eolppak-jikcam in English
              fan spaces. It is not a formal broadcast term — it is fandom
              language for a video where the idol&apos;s face, eyes, and small
              reactions become the main point.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              English-speaking fans often say &quot;facecam&quot; or
              &quot;close-up fancam&quot; for the same idea. The words differ,
              but the feeling is the same: the camera stays close enough that
              expression, eye contact, and tiny mood changes are easy to see.
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
