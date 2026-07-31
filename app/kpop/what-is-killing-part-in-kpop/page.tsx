import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-killing-part-in-kpop`;

const pageTitle =
  "What Is a Killing Part in K-pop? The Moment Fans Replay Again and Again";
const pageDescription =
  "A friendly HAEMIL guide to killing part meaning in K-pop, why fans replay certain lines, moves, expressions, and camera moments, and how it differs from center, fancam, ending fairy, and visual talk.";

const quickFacts = [
  "Korean expression: Killing part / 킬링파트.",
  "Basic meaning: The short part of a song or performance that fans remember, replay, quote, or share.",
  "It can be: A vocal line, rap line, dance move, facial expression, hand gesture, camera moment, or center moment.",
  "Not literal: “Killing” here does not mean violence. It means the standout part that hits strongly.",
  "Why fans care: It makes a song or member easier to remember.",
  "Different from: Center, fancam, ending fairy, visual, or point choreography.",
  "Local tip: A good killing part is often only a few seconds long, but it can shape how fans remember the whole stage.",
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
    label: "K-pop guide",
    title: "What is center in K-pop?",
    description:
      "Learn what center means in K-pop, why the center member matters, and how fans understand stage focus and group image.",
    href: "/kpop/what-is-center-in-kpop",
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
    title: "What does maknae mean?",
    description:
      "A friendly guide to maknae meaning in K-pop, why the youngest member matters, and how maknae differs from center, visual, fancam, and ending fairy talk.",
    href: "/kpop/what-is-maknae",
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
    canonical: "/kpop/what-is-killing-part-in-kpop",
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

export default function WhatIsKillingPartInKpopPage() {
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
          name: "K-pop killing part",
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
          name: "What is a killing part in K-pop?",
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
              <TermBadge term="killing-part" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {pageTitle}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:mt-6 md:text-lg">
              If you search &quot;killing part meaning&quot; in K-pop, the simple
              answer is this: a killing part is the short part of a song or
              performance that fans remember, replay, quote, or share.
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
                What a killing part looks like
              </h2>

              <p>
                It might be one vocal line. One rap line. One hand gesture. One
                facial expression. One dance move. One camera close-up.
              </p>

              <p>
                Sometimes it is only two or three seconds long. But after the
                stage ends, that is the part people keep talking about.
              </p>

              <p>
                The word can sound strange in English because
                &quot;killing&quot; looks serious or violent. In K-pop fan
                language, it does not mean that. It is closer to saying,
                &quot;That part hits hard,&quot; or &quot;That is the standout
                moment.&quot;
              </p>

              <p>
                In Korean fandom talk, fans often say 킬링파트, written from
                the English words &quot;killing part.&quot; It is not usually
                a formal music term. It is more like fan language for the
                moment that makes a song or stage stick in your head.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Where a killing part can happen
              </h2>

              <p>A killing part can happen in the chorus. But it does not have to.</p>

              <p>
                Sometimes it appears right before the chorus, when the beat is
                about to drop. Sometimes it is a short line in the bridge.
                Sometimes it is a member&apos;s expression during a quiet
                second. Sometimes it is the move everyone copies in a dance
                challenge. Sometimes it is the camera finding one member at
                exactly the right moment.
              </p>

              <p>
                That is why killing parts are so important in K-pop. K-pop is
                built for replay.
              </p>

              <p>
                Fans do not only listen once and move on. They watch music
                videos, stage clips, fancams, shorts, edits, dance practices,
                and ending moments. A strong killing part gives people a reason
                to replay the same few seconds again.
              </p>

              <p>
                It becomes the part fans wait for. When the song starts, they
                already know it is coming. That small anticipation is part of
                the fun.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it becomes an entry point through fancams
              </h2>

              <p>
                A killing part can also make one member easier to remember.
                Maybe you do not know all the members yet. Then one person
                gets a line, a move, or a camera moment that feels especially
                clear.
              </p>

              <p>
                You search the group. You watch the fancam. You learn the
                member&apos;s name. That is a very normal K-pop path. One
                small part becomes the entry point.
              </p>

              <p>
                This is why killing part connects naturally to fancams. A
                full-stage video shows the whole group, but a fancam lets you
                follow one member. If that member has a killing part, the
                fancam makes it easier to watch how they prepare for it,
                deliver it, and move on after it.
              </p>

              <p>
                Sometimes the best part is not only the killing part itself.
                It is the second before. The eye contact. The breath. The tiny
                expression change. The way the member resets after the moment
                passes.
              </p>

              <p>A fancam helps you notice those details.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it differs from center, ending fairy, and visual talk
              </h2>

              <p>
                Killing part is also related to center, but it is not the same
                thing. The center is the member placed in the middle or given
                focus during key stage moments. A center moment can become a
                killing part if fans remember it strongly. But a killing part
                does not always belong to the center.
              </p>

              <p>
                A member can stand at the side and still have the line
                everyone replays. A member can get only one short phrase and
                still make it memorable. That is why killing part is more
                about impact than position.
              </p>

              <p>
                It is also different from an ending fairy. An ending fairy
                happens after the performance ends. It is the final close-up
                camera moment when one idol catches their breath, holds an
                expression, or reacts to the camera.
              </p>

              <p>
                A killing part usually happens inside the song or performance.
                The killing part is part of the stage. The ending fairy is the
                final after-moment. Both can go viral, but they work
                differently.
              </p>

              <p>
                Killing part can also connect to visual talk. If a
                member&apos;s styling, expression, or camera presence makes a
                moment feel especially memorable, fans may talk about their
                visual image. But this should not become a beauty ranking. A
                killing part is not simply &quot;the prettiest few
                seconds.&quot;
              </p>

              <p>
                It is the moment that lands. Sometimes that comes from a
                strong face. Sometimes from timing. Sometimes from confidence.
                Sometimes from a clever gesture. Sometimes from the song
                giving the member exactly the right line.
              </p>

              <p>That is the difference.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Point choreography, and the many forms a killing part can take
              </h2>

              <p>
                Another related idea is point choreography, or 포인트 안무.
                Point choreography is the dance move that represents the song.
                It is often easy to remember, easy to copy, and good for short
                videos or dance challenges. A point choreography move can
                become a killing part, but not every killing part is
                choreography.
              </p>

              <p>
                A killing part can be a sound. A face. A lyric. A pause. A
                camera cut. A move. Or all of those at once.
              </p>

              <p>That flexibility is why fans use the word so often.</p>

              <p>For beginners, the easiest way to find a killing part is to ask:</p>

              <p>
                Which moment do fans keep clipping? Which line do people
                quote? Which gesture shows up in short videos? Which member do
                people suddenly notice? Which few seconds make you want to
                replay the stage?
              </p>

              <p>That is probably the killing part.</p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why fans care, and how to watch for your own killing part
              </h2>

              <p>
                There can also be more than one. A song may have an
                official-feeling killing part that everyone knows. But
                different fans may have their own favorite moments. One person
                may replay the chorus gesture. Another person may love a
                pre-chorus expression. Another person may care more about a
                rap line or a final camera shot.
              </p>

              <p>
                That is okay. K-pop watching is personal. Fan language helps
                people explain what caught them. The killing part is the word
                for that replay button feeling.
              </p>

              <p>
                It is also one reason idols practice camera awareness so
                carefully. A killing part can be ruined if it feels too flat.
                It can also feel awkward if it is pushed too hard.
              </p>

              <p>
                The strongest ones often feel confident but not forced. The
                idol knows the moment matters, but they do not look like they
                are begging you to notice it. That balance is difficult. And
                when it works, fans remember.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand killing part
                is this:
              </p>

              <p>
                A fancam helps you follow one member. A center moment shows
                where the stage puts focus. An ending fairy gives you the
                final close-up. A visual moment makes image and camera
                presence stand out. A killing part is the few seconds you want
                to replay.
              </p>

              <p>
                It is small, but it can shape the whole memory of a song. That
                is why K-pop fans talk about it so much.
              </p>

              <p>
                Not because every song needs one perfect viral moment. But
                because sometimes one line, one look, or one move is enough to
                make people say:
              </p>

              <p>Wait. Play that part again.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">킬링파트</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              킬링파트 comes from the English phrase &quot;killing part.&quot; In
              K-pop fan talk, it usually means the standout moment in a song or
              stage — the part that hits strongly and stays in your memory.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Fans may also say a part feels &quot;legendary&quot; or describe
              it as &quot;the part everyone waits for.&quot; These are casual
              fandom phrases, not official music industry terms.
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
