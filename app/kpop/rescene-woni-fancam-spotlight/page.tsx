import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/rescene-woni-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Why RESCENE Woni Is Getting Attention Through Fancams";
const pageDescription =
  "A friendly K-pop spotlight on RESCENE Woni, her Runaway facecam, and why small moments, expressions, and replayable clips can help a new idol catch attention.";

const relatedGuides = [
  {
    label: "K-pop guide",
    title: "What Is a Fancam in K-pop?",
    description:
      "Learn why fancams matter, how fans use them, and why one close-up stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop guide",
    title: "K-pop Glossary for New Fans",
    description:
      "A beginner-friendly guide to Korean K-pop words and fan terms you will see around fancams, stages, and member clips.",
    href: "/kpop/glossary",
  },
  {
    label: "Member guide",
    title: "Woni (RESCENE)",
    description:
      "Start here if you want a simple member guide after watching Woni’s facecam.",
    href: "/kpop/rescene/woni",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/rescene-woni-fancam-spotlight",
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

export default function ResceneWoniFancamSpotlightPage() {
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
          name: "RESCENE",
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
          name: "RESCENE Woni fancam spotlight",
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
              Why RESCENE Woni Is Getting Attention Through Fancams
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Some idols catch attention through one huge viral stage. Others do
              it through smaller moments that fans keep replaying: a look, a
              reaction, a facecam, or a short clip that suddenly makes people
              ask, “Wait, who is she?” RESCENE’s Woni fits that second kind of
              discovery.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official facecam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              RESCENE Woni — “Runaway” at Music Bank
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              KBS Kpop official Music Bank facecam: RESCENE WONI &quot;Runaway&quot;
              Facecam / 얼빡직캠 @ Music Bank 260417
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="gHoKSBaLP7E"
                title="RESCENE Woni Runaway Facecam"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=gHoKSBaLP7E"
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
                Some idols catch attention through one huge viral stage. Others
                do it more slowly, through small moments that fans keep
                replaying: a look, a reaction, a facecam, or a short clip that
                suddenly makes people ask, “Wait, who is she?”
              </p>

              <p>RESCENE’s Woni fits that second kind of discovery.</p>

              <p>
                For international K-pop fans, RESCENE may still feel like a new
                name. That is part of the appeal. They do not have the automatic
                noise of a big-company debut, so when people start talking about
                them, it feels more like a discovery than a scheduled moment.
              </p>

              <p>
                Woni is one of the reasons that discovery feels easy to follow.
                She has the kind of presence that works well in short clips. You
                do not need a long introduction first. A facecam, a small
                reaction, or one replayable moment can be enough to make you pay
                attention.
              </p>

              <p>
                That is why the “Runaway” facecam is useful. A normal stage
                camera shows the whole group, the choreography, the formation,
                and the song. A facecam asks a different question: can one
                member hold your attention when the camera stays close?
              </p>

              <p>
                With Woni, the answer is not only about big expressions. It is
                more about control. She does not need to overact every second.
                The appeal is in the small changes: the eyes, the timing, the way
                she keeps the performance alive without making it feel forced.
              </p>

              <p>
                This matters because fancams are one of the easiest ways new fans
                choose a member. A music video can introduce the group, but a
                fancam can make one person stand out. It lets you notice details
                that might disappear in a full-stage edit.
              </p>

              <p>
                RESCENE’s recent attention also makes this timing interesting.
                They are not being talked about only because of one polished
                promotional line. The group’s rise feels connected to clips,
                member personality, local humor, and the kind of self-produced or
                replayable content that can spread outside the usual fandom
                route.
              </p>

              <p>
                That makes Woni a good entry point. If you are new to RESCENE,
                you do not need to understand every song, every member, or every
                inside joke right away. Start with one facecam. Watch how she
                uses the close camera. Watch when she pulls back. Watch when the
                expression changes. That is often how a K-pop “bias candidate”
                starts.
              </p>

              <p>
                There is also something refreshing about a small-agency group
                getting attention this way. It feels less like a huge campaign
                and more like people slowly noticing the same thing at the same
                time. One clip leads to another. One member name becomes easier
                to remember. One stage becomes a reason to check the group again.
              </p>

              <p>
                For Woni, the charm is not just that she is “pretty” or “cute.”
                Those words are too simple. The better point is that she feels
                watchable. In K-pop, that matters. Some idols are good in group
                shots. Some idols are good in interviews. Some idols are good in
                memes. Some idols become clearer when the camera stays close.
              </p>

              <p>
                Woni’s current appeal sits in that space between stage, clip, and
                personality. She gives fans something to replay, but she also
                gives new viewers a reason to ask about the group behind her.
              </p>

              <p>
                If you are trying to understand why fancams still matter in
                K-pop, this is a good example. A fancam is not just extra
                content. Sometimes it is the doorway. It can turn a group you
                vaguely heard about into a member you want to follow, and then
                into a group you want to understand.
              </p>

              <p>
                For RESCENE, that doorway may be especially important. A big
                company can push a group into everyone’s feed. A smaller group
                often needs moments that fans want to carry for them. Woni’s
                facecam-friendly presence gives RESCENE one of those moments.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to notice while watching
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>Do not only look for the biggest facial expression.</li>
                <li>
                  Watch how she keeps attention during smaller transitions.
                </li>
                <li>
                  Notice how the close camera changes the feeling compared with a
                  full-stage performance.
                </li>
                <li>
                  Pay attention to whether you remember her after the clip ends.
                </li>
                <li>
                  If you do, that is exactly why fancams matter.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Why this works as a HAEMIL K-pop Spotlight
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                This is not just a profile of one idol. It is a small example of
                how K-pop discovery works now. A member can catch attention
                through a facecam, a meme, a short clip, or one moment that
                feels easy to share. RESCENE Woni is interesting because her
                attention does not feel separated from that new discovery route.
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

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
