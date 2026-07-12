import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/babymonster-ahyeon-fancam-spotlight`;

const pageTitle =
  "BABYMONSTER Ahyeon Fancam Spotlight: Why Her Favorite Fancam Compilation Is a Good Entry Point";
const pageDescription =
  "A friendly HAEMIL spotlight on BABYMONSTER Ahyeon’s MBCkpop #최애ZIP캠 compilation, why it works as an entry point, and how her expressions, camera awareness, and stage presence stand out across performances.";

const relatedGuides = [
  {
    label: "Member guide",
    title: "Ahyeon (BABYMONSTER)",
    description:
      "Start here if you want a simple member guide after watching Ahyeon’s #최애ZIP캠 compilation.",
    href: "/kpop/babymonster/ahyeon",
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
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
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
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/babymonster-ahyeon-fancam-spotlight",
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

export default function BabymonsterAhyeonFancamSpotlightPage() {
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
          name: "BABYMONSTER",
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
          name: "BABYMONSTER Ahyeon fancam spotlight",
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
              Why Ahyeon&apos;s Favorite Fancam Compilation Is a Good Entry Point
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to BABYMONSTER, Ahyeon can be an easy member to
              notice through fancams. This MBCkpop #최애ZIP캠 video is especially
              useful because it is not just one stage — it gathers Ahyeon-focused
              fancam moments from DRIP through SUGAR HONEY ICE TEA.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              MBCkpop compilation
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              BABYMONSTER Ahyeon — #최애ZIP캠 Favorite Fancam Collection
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              MBCkpop: [#최애ZIP캠] BABYMONSTER 아현 최애직캠 모음집 | DRIP부터
              SUGAR HONEY ICE TEA까지 | 쇼! 음악중심
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="ZbxCI7ibDWk"
                title="BABYMONSTER Ahyeon Favorite Fancam Compilation"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=ZbxCI7ibDWk"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Watch on YouTube →
            </a>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>That makes it a good entry point.</p>

              <p>A single fancam can show one stage.</p>

              <p>A compilation can show a pattern.</p>

              <p>
                For Ahyeon, the pattern is not only about strong moments. It is
                also about how she changes her face, energy, and camera focus
                depending on the song.
              </p>

              <p>Sometimes the performance feels sharp.</p>

              <p>Sometimes it feels brighter.</p>

              <p>
                Sometimes the camera is close enough that small details matter
                more than big movement.
              </p>

              <p>That is why this kind of video works well for beginners.</p>

              <p>You do not need to know every BABYMONSTER song first.</p>

              <p>
                You can simply watch how one member carries herself across
                different clips.
              </p>

              <p>
                In K-pop, fancams are not only about &quot;watching one
                idol.&quot;
              </p>

              <p>
                They help you understand how a member performs inside the group.
              </p>

              <p>A full-stage video shows the group picture.</p>

              <p>A fancam lets you follow one person.</p>

              <p>
                A close-up moment lets you notice expressions, eye contact,
                breathing, and timing.
              </p>

              <p>Ahyeon&apos;s compilation sits between those ideas.</p>

              <p>
                It gives enough variety to show why fans may keep replaying her
                stages, but it still feels simple enough for a new viewer to
                follow.
              </p>

              <p>One thing to watch is expression control.</p>

              <p>
                In a compilation, you can see how quickly an idol has to move
                between moods.
              </p>

              <p>A strong look cannot stay strong forever.</p>

              <p>A smile cannot feel random.</p>

              <p>A small reaction has to match the song.</p>

              <p>
                When the camera stays on one member, those details become easier
                to notice.
              </p>

              <p>
                That is where Ahyeon&apos;s fancam moments can be interesting.
              </p>

              <p>
                She often gives the camera something to read without making
                every second feel the same.
              </p>

              <p>Another thing to watch is stage presence.</p>

              <p>
                Stage presence does not always mean doing the biggest move.
              </p>

              <p>
                Sometimes it is the way an idol keeps attention during
                transitions.
              </p>

              <p>Sometimes it is the way they prepare before a line.</p>

              <p>
                Sometimes it is the way their energy changes when the chorus
                arrives.
              </p>

              <p>
                In a group like BABYMONSTER, where the overall performance image
                is strong, a member-focused video helps you notice those smaller
                choices.
              </p>

              <p>
                This is also why a compilation can create a bias or bias wrecker
                moment.
              </p>

              <p>You may start the video just to check one clip.</p>

              <p>Then you notice another moment.</p>

              <p>Then another.</p>

              <p>
                By the end, you may understand why fans keep talking about that
                member.
              </p>

              <p>That is a very normal K-pop path.</p>

              <p>
                The point is not that you must choose a favorite right away.
              </p>

              <p>
                The point is that fancams make individual performance style
                easier to see.
              </p>

              <p>
                For beginners, try watching this video in three passes.
              </p>

              <p>First, watch it casually.</p>

              <p>Do not analyze too much.</p>

              <p>Just see which moments stay in your head.</p>

              <p>Second, watch her expressions.</p>

              <p>
                Look at how her face changes before and after the obvious
                highlight moments.
              </p>

              <p>Third, watch camera awareness.</p>

              <p>
                Notice when she looks into the camera, when she focuses on the
                choreography, and when she keeps the mood even without a big
                gesture.
              </p>

              <p>That is where fancams become more fun.</p>

              <p>
                This video is also a useful bridge to several K-pop terms.
              </p>

              <p>
                If you want to understand fancams, this is a real example of a
                member-focused video.
              </p>

              <p>
                If you want to understand close-up fancams, watch the moments
                where the face and expression become the main point.
              </p>

              <p>
                If you want to understand stage presence, notice whether your
                attention stays with her even between highlights.
              </p>

              <p>
                If you want to understand killing parts, pay attention to the
                short moments you want to replay.
              </p>

              <p>
                That is why Ahyeon&apos;s #최애ZIP캠 works well on HAEMIL.
              </p>

              <p>It is not only a video to watch.</p>

              <p>
                It is a way to understand how K-pop fans learn a member through
                repeated moments.
              </p>

              <p>A full group stage introduces the team.</p>

              <p>A fancam introduces the person inside the team.</p>

              <p>
                A compilation lets you see whether that person keeps pulling
                your attention across more than one stage.
              </p>

              <p>For Ahyeon, this video gives new viewers a simple starting point.</p>

              <p>Watch the expressions.</p>

              <p>Watch the timing.</p>

              <p>Watch how the mood changes from clip to clip.</p>

              <p>
                Then, if one moment makes you replay the video, you are already
                watching K-pop the way many fans do.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to notice while watching
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  Remember this is a compilation, not one single-stage fancam.
                </li>
                <li>
                  Watch how her face and energy change from clip to clip.
                </li>
                <li>
                  Notice expression control during transitions, not only during
                  highlights.
                </li>
                <li>
                  Pay attention to camera awareness when the shot stays close.
                </li>
                <li>
                  If one moment makes you replay the video, that is a normal
                  K-pop discovery path.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                About #최애ZIP캠
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                #최애ZIP캠 is an MBCkpop compilation-style label for
                favorite-cam collections. It gathers member-focused fancam
                moments in one video — useful when you want to compare how one
                idol performs across different stages without searching each clip
                separately.
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
                href="/kpop/babymonster"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                BABYMONSTER group page →
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
