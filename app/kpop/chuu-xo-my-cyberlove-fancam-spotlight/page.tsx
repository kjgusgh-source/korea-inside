import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/chuu-xo-my-cyberlove-fancam-spotlight`;

const pageTitle =
  "CHUU Fancam Spotlight: Why “XO, My Cyberlove” Shows Her Solo Artist Charm";
const pageDescription =
  "A friendly HAEMIL spotlight on CHUU’s “XO, My Cyberlove” Mnet M2 fancam, her solo artist image, Chuu Can Do It presence, and why her expressions and camera awareness are easy to notice.";

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
    title: "What is a close-up fancam?",
    description:
      "A friendly guide to close-up fancam, facecam, and 얼빡직캠 meaning in K-pop, and how face-focused videos differ from fancams and ending fairy moments.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
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
    title: "What does bias mean in K-pop?",
    description:
      "A friendly guide to K-pop bias meaning, favorite members, bias wreckers, ultimate bias, 최애, 차애, and why one member keeps catching your attention.",
    href: "/kpop/what-does-bias-mean",
  },
  {
    label: "K-pop starter guide",
    title: "What is a bias wrecker in K-pop?",
    description:
      "A friendly guide to bias wrecker meaning in K-pop, why another member keeps stealing your attention, and how it differs from your bias, ultimate bias, and bias line.",
    href: "/kpop/what-is-a-bias-wrecker-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does concept mean in K-pop?",
    description:
      "A friendly guide to K-pop concept meaning, how idols change their image each comeback, and how music, styling, choreography, stages, and visuals create an era.",
    href: "/kpop/what-does-concept-mean-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/chuu-xo-my-cyberlove-fancam-spotlight",
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

export default function ChuuXoMyCyberloveFancamSpotlightPage() {
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
          name: "CHUU",
        },
        {
          "@type": "Thing",
          name: "K-pop fancam",
        },
        {
          "@type": "Thing",
          name: "K-pop",
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
          name: "CHUU XO My Cyberlove fancam spotlight",
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
              K-pop Spotlight
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Why &quot;XO, My Cyberlove&quot; Shows CHUU&apos;s Solo Artist Charm
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you only know CHUU as a bright and cute public figure, her
              fancams are a good reminder that her image is more layered than
              that. This Mnet M2 입덕직캠 for &quot;XO, My Cyberlove&quot; shows
              CHUU as a solo artist on stage — not only as a variety personality.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official fancam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              CHUU — &quot;XO, My Cyberlove&quot; at MCOUNTDOWN
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Mnet M2 입덕직캠: CHUU FanCam 4K &quot;XO, My Cyberlove&quot; @
              MCOUNTDOWN
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="_-g3FoBXD3I"
                title='CHUU "XO, My Cyberlove" FanCam'
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=_-g3FoBXD3I"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Watch on YouTube →
            </a>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                This Mnet M2 입덕직캠 for &quot;XO, My Cyberlove&quot; is a
                useful entry point because it shows CHUU as a solo artist on
                stage.
              </p>

              <p>Not as a group member inside a large formation.</p>

              <p>Not only as a variety personality.</p>

              <p>
                Just CHUU, carrying the mood of the song with her own
                expressions, timing, and camera awareness.
              </p>

              <p>
                That matters because CHUU&apos;s public image in Korea is not
                built from one place.
              </p>

              <p>Many people first noticed her through LOONA.</p>

              <p>Many also know her through her bright entertainment image.</p>

              <p>
                Many know her from Chuu Can Do It, the YouTube variety channel
                connected to her warm and approachable personality. At the time
                of this HAEMIL update, the channel is listed at around 1.41
                million subscribers, which shows how familiar her non-stage
                image has become to many viewers.
              </p>

              <p>
                But CHUU is also a solo artist who had to rebuild her path after
                a difficult agency transition.
              </p>

              <p>That part should be handled carefully.</p>

              <p>It is not just a simple &quot;underdog wins&quot; story.</p>

              <p>It is also not something that should turn into fan-war content.</p>

              <p>
                A safer way to understand it is this: many fans remember CHUU
                as someone who kept her public warmth, stayed visible through
                different kinds of work, and continued building her own name
                after a complicated period.
              </p>

              <p>
                That is one reason her solo stages can feel meaningful to watch.
              </p>

              <p>
                The fancam is not only about whether the performance is cute or
                pretty.
              </p>

              <p>
                It is about seeing how she controls a stage that depends on her
                alone.
              </p>

              <p>
                In &quot;XO, My Cyberlove,&quot; one thing to watch is how CHUU
                keeps the mood light without making it feel empty.
              </p>

              <p>Her expressions often have a clear shape.</p>

              <p>A smile does not just sit there.</p>

              <p>A small look can change the feeling of a line.</p>

              <p>
                A camera moment can feel playful, then slightly sharper, then
                soft again.
              </p>

              <p>That kind of control is important for a solo artist.</p>

              <p>
                In a group stage, the viewer&apos;s attention can move between
                members.
              </p>

              <p>
                In a solo stage, the performer has to carry more of the frame.
              </p>

              <p>
                The camera comes back to the same person again and again.
              </p>

              <p>
                That means expression control, timing, and energy changes become
                easier to notice.
              </p>

              <p>This is where CHUU&apos;s fancam is helpful for beginners.</p>

              <p>
                You can watch how she uses her face without turning every
                moment into the same expression.
              </p>

              <p>You can watch how she keeps eye contact with the camera.</p>

              <p>
                You can watch how she handles the brighter parts of the song
                without making them feel too forced.
              </p>

              <p>You can also watch how she resets between moments.</p>

              <p>That reset is easy to miss, but it matters.</p>

              <p>Good stage presence is not only the highlight.</p>

              <p>It is also what happens between the highlights.</p>

              <p>
                A performer has to move from one line to the next, from one
                expression to another, from one camera angle to another.
              </p>

              <p>
                If those small transitions feel natural, the performance becomes
                easier to keep watching.
              </p>

              <p>
                CHUU&apos;s public charm has always been connected to warmth.
              </p>

              <p>But warmth on stage still needs control.</p>

              <p>If it becomes too casual, the performance can lose shape.</p>

              <p>
                If it becomes too polished, the natural feeling can disappear.
              </p>

              <p>
                The interesting part of this fancam is watching how she balances
                those sides.
              </p>

              <p>She keeps the stage friendly.</p>

              <p>But she still knows where the camera is.</p>

              <p>That is why this is a good HAEMIL spotlight.</p>

              <p>It connects several K-pop ideas in one video.</p>

              <p>
                If you want to understand fancams, this is a member-focused
                solo-stage example.
              </p>

              <p>
                If you want to understand close-up moments, watch how much
                meaning comes from small facial changes.
              </p>

              <p>
                If you want to understand stage presence, notice whether your
                attention stays with her even when the choreography is not the
                biggest part.
              </p>

              <p>
                If you want to understand bias or bias wrecker language, this is
                the kind of video that can make a viewer think, &quot;I
                understand why people look for her.&quot;
              </p>

              <p>The point is not to say that every viewer must become a fan.</p>

              <p>The point is that this fancam gives a clear starting point.</p>

              <p>
                CHUU&apos;s appeal is easy to misunderstand if you only describe
                it as brightness.
              </p>

              <p>Brightness is part of it.</p>

              <p>But there is also persistence.</p>

              <p>There is variety sense.</p>

              <p>There is a public image built through many appearances.</p>

              <p>
                There is a solo artist trying to keep her own color after a
                complicated career turn.
              </p>

              <p>A fancam cannot explain all of that by itself.</p>

              <p>But it can show how some of that image appears on stage.</p>

              <p>
                For beginners, try watching this video in three passes.
              </p>

              <p>First, watch it casually.</p>

              <p>See whether the stage mood feels easy to follow.</p>

              <p>Second, watch her expressions.</p>

              <p>
                Notice how quickly she moves between playful, soft, focused, and
                camera-aware moments.
              </p>

              <p>Third, watch the small transitions.</p>

              <p>
                Look at what she does right before and right after the obvious
                camera moments.
              </p>

              <p>
                That is where solo performance style often becomes clearer.
              </p>

              <p>
                CHUU&apos;s &quot;XO, My Cyberlove&quot; fancam is not only a
                clip for existing fans.
              </p>

              <p>
                It is a good entry point for people who are trying to understand
                why a solo idol can stay memorable outside a group structure.
              </p>

              <p>A group can introduce an idol.</p>

              <p>A variety show can make them familiar.</p>

              <p>A YouTube channel can make them feel close.</p>

              <p>
                But a fancam shows what happens when the music starts and the
                camera stays on them.
              </p>

              <p>
                For CHUU, that is where her bright image becomes a performance
                style.
              </p>

              <p>Friendly, but not careless.</p>

              <p>Cute, but not one-note.</p>

              <p>Soft, but still aware of the stage.</p>

              <p>That is why this fancam is worth watching closely.</p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to notice while watching
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  Watch how she keeps the mood light without making it feel
                  empty.
                </li>
                <li>
                  Notice expression changes — playful, soft, focused, and
                  camera-aware.
                </li>
                <li>
                  Pay attention to transitions between highlights, not only the
                  highlights themselves.
                </li>
                <li>
                  Remember this is a solo stage — the camera keeps returning to
                  the same performer.
                </li>
                <li>
                  Try a three-pass watch: casual, expressions, then small
                  transitions.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                About CHUU on HAEMIL
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                CHUU (Kim Ji-woo / 김지우, born October 20, 1999) is treated here
                as a solo artist. HAEMIL does not have a LOONA group page — this
                spotlight focuses on her solo-stage image, Chuu Can Do It variety
                presence, and how she rebuilt her public path after a difficult
                agency transition.
              </p>
            </div>
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
