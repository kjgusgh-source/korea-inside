import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/illit-wonhee-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Why ILLIT Wonhee Keeps Catching Attention in Fancams";
const pageDescription =
  "A friendly K-pop spotlight on ILLIT Wonhee, her “It’s Me” fancam, and why clear expressions, small timing changes, and close-up stage clips make her easy to remember.";

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
    title: "Wonhee (ILLIT)",
    description:
      "Start here if you want a simple member guide after watching Wonhee’s fancam.",
    href: "/kpop/illit/wonhee",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/illit-wonhee-fancam-spotlight",
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

export default function IllitWonheeFancamSpotlightPage() {
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
          name: "ILLIT",
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
          name: "ILLIT Wonhee fancam spotlight",
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
              Why ILLIT Wonhee Keeps Catching Attention in Fancams
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Some idols feel familiar before you even know every detail about
              them. You see one clip, then another, then a facecam, and suddenly
              the name starts to stay in your head. For ILLIT&apos;s Wonhee,
              that is part of the charm.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official facecam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              ILLIT Wonhee — &quot;It&apos;s Me&quot; at Inkigayo
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              SBS KPOP official Inkigayo fancam: ILLIT WONHEE &quot;It&apos;s
              Me&quot; FanCam / 안방1열 직캠4K @ SBS Inkigayo 260503
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="gOGU2zO4POY"
                title="ILLIT Wonhee It's Me Fancam"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=gOGU2zO4POY"
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
                Some idols feel familiar before you even know every detail about
                them. You see one clip, then another, then a facecam, and
                suddenly the name starts to stay in your head.
              </p>

              <p>For ILLIT&apos;s Wonhee, that is part of the charm.</p>

              <p>
                Wonhee does not need a complicated introduction to be easy to
                notice. Even if you are new to ILLIT, she has the kind of facecam
                presence that makes a viewer pause for a second and keep
                watching.
              </p>

              <p>
                That is different from an idol who surprises you only once.
                Wonhee&apos;s appeal feels more repeatable. It shows up in small
                expression changes, timing, eye contact, and the way she keeps a
                bright stage from becoming too flat.
              </p>

              <p>
                The &quot;It&apos;s Me&quot; fancam works well because the camera
                stays close. In a full-stage video, you follow the choreography,
                the group shape, and the whole performance. In a fancam, the
                question becomes simpler: does this one member still feel
                interesting when the camera does not move away?
              </p>

              <p>
                With Wonhee, the answer comes through small details. She does not
                need to make every second loud. A quick look, a softer
                expression, a playful shift, or the way she resets between moves
                can be enough.
              </p>

              <p>
                That is one reason she is easy to remember. Some idols are
                impressive because they dominate the stage. Wonhee is more
                interesting because she can feel close to the camera without
                making the performance feel heavy.
              </p>

              <p>
                ILLIT&apos;s stage mood also helps. The group often works with a
                bright, youthful, slightly unpredictable energy. Wonhee fits that
                mood well because her expressions can feel clear and simple at
                first, then more playful when you keep watching.
              </p>

              <p>
                For new fans, that makes her a good entry point. You do not have
                to understand every ILLIT song or every member dynamic right
                away. Start with one close-up clip. If you remember her face, her
                timing, or one small moment after the video ends, the fancam has
                already done its job.
              </p>

              <p>
                This is why fancams still matter in K-pop. They are not just
                extra videos for fans who already know everything. Sometimes they
                are the first doorway. A music video introduces the group, but a
                fancam can make one member suddenly easier to follow.
              </p>

              <p>
                Wonhee&apos;s fancam appeal is not only about being cute or
                pretty. Those words are too small for what makes a stage clip
                work. The better point is that she feels readable. You can
                understand her charm quickly, even before you know much about
                her.
              </p>

              <p>
                That readability matters. In a fast K-pop feed, a viewer may only
                give a clip a few seconds. If an idol&apos;s expression, timing,
                or camera sense is clear enough, those few seconds can become a
                replay.
              </p>

              <p>
                The &quot;It&apos;s Me&quot; fancam is useful because it lets you
                watch that happen. You can see how Wonhee keeps the performance
                light, how she changes her face without overdoing it, and how she
                stays easy to follow even when the stage is moving around her.
              </p>

              <p>
                There is also a different feeling here compared with a new
                discovery from a smaller group. RESCENE Woni&apos;s spotlight
                feels like watching people notice a fresh name. Wonhee&apos;s
                spotlight feels more like understanding why a familiar name keeps
                appearing again and again.
              </p>

              <p>
                That difference is important. Not every K-pop spotlight has to be
                about someone suddenly going viral. Sometimes it is about why a
                member keeps staying visible. Wonhee has that kind of presence:
                simple at first glance, but easy to return to.
              </p>

              <p>
                If you are watching this fancam for the first time, do not only
                look for the biggest moment. Watch the in-between seconds. Watch
                how she moves from one expression to another. Watch how she
                handles the close camera when nothing dramatic is happening.
              </p>

              <p>
                That is where many good fancams become interesting. They show
                whether an idol can keep the camera alive without needing constant
                high-energy moments.
              </p>

              <p>
                For Wonhee, that is the point. Her charm works because it feels
                approachable. You do not have to study the performance to get it.
                You can just watch, notice one small thing, and understand why
                fans keep clipping moments like this.
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
                  Watch how Wonhee uses small expression changes instead of making
                  every moment huge.
                </li>
                <li>
                  Notice how the close camera makes her charm easier to follow
                  than a full-stage video.
                </li>
                <li>
                  Pay attention to the transitions between bigger points in the
                  choreography.
                </li>
                <li>
                  Look for the moments where she feels playful without forcing it.
                </li>
                <li>
                  If her face or timing stays in your head after the clip ends,
                  that is exactly why fancams matter.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Why this works as a HAEMIL K-pop Spotlight
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                This is not only a profile of one idol. It is a simple example of
                how member-focused K-pop discovery works. Wonhee is already a
                familiar name to many fans, but a fancam helps explain why she
                remains easy to notice: clear expressions, close-camera comfort,
                and small moments that make people want to replay.
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
