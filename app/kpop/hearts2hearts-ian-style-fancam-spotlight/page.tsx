import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/hearts2hearts-ian-style-fancam-spotlight`;

const pageTitle =
  "Hearts2Hearts Ian Fancam Spotlight: Why “STYLE” Shows Her Challenge-Friendly Stage Appeal";
const pageDescription =
  "A friendly HAEMIL spotlight on Hearts2Hearts Ian’s MBCkpop “STYLE” fancam, the Ian challenge effect, and how point choreography, camera timing, and stage presence make a rookie member easier to notice.";

const relatedGuides = [
  {
    label: "Member guide",
    title: "Ian (Hearts2Hearts)",
    description:
      "Start here if you want a simple member guide after watching Ian’s STYLE fancam.",
    href: "/kpop/hearts2hearts/ian",
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
    label: "K-pop term",
    title: 'What does "rookie group" mean in K-pop?',
    description:
      "A simple guide to how K-pop fans discover rookie groups through first stages, short clips, fancams, and the first member they remember.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/hearts2hearts-ian-style-fancam-spotlight",
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

export default function Hearts2HeartsIanStyleFancamSpotlightPage() {
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
          name: "Hearts2Hearts",
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
          name: "Hearts2Hearts Ian STYLE fancam spotlight",
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
              Why &quot;STYLE&quot; Shows Ian&apos;s Challenge-Friendly Stage
              Appeal
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to Hearts2Hearts, Ian is one of the members who can
              be easy to notice through short performance clips. This MBCkpop
              &quot;STYLE&quot; fancam lets you see how point choreography,
              camera timing, and stage presence work together — without reducing
              her to one viral moment.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official fancam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Hearts2Hearts Ian — &quot;STYLE&quot; at Show! Music Core
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              MBCkpop 최애직캠: Hearts2Hearts IAN FanCam | STYLE | 쇼! 음악중심
              | MBC250628
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="HvnrZARfPi0"
                title='Hearts2Hearts Ian "STYLE" FanCam'
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=HvnrZARfPi0"
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
                That does not mean she should be reduced to one viral moment.
              </p>

              <p>
                But for many casual viewers, the Ian challenge made her name
                easier to remember before they fully knew the group.
              </p>

              <p>That is a very common K-pop path now.</p>

              <p>A short movement spreads first.</p>

              <p>Then people look for the member.</p>

              <p>Then they watch the fancam.</p>

              <p>
                This MBCkpop &quot;STYLE&quot; fancam is useful because it lets
                you see why that kind of attention can happen.
              </p>

              <p>The point is not only that the choreography is catchy.</p>

              <p>It is how Ian handles the moment.</p>

              <p>
                In K-pop, a challenge-friendly part works best when the move is
                simple enough to remember but clear enough to feel like a
                signature. That is close to what fans call point choreography.
              </p>

              <p>A point move can make a song easier to recognize.</p>

              <p>A fancam can make the person performing it easier to remember.</p>

              <p>Ian&apos;s &quot;STYLE&quot; fancam sits right between those ideas.</p>

              <p>You can watch the movement.</p>

              <p>You can watch the expression.</p>

              <p>You can watch the camera timing.</p>

              <p>
                You can watch how a rookie member uses a short part to leave a
                stronger impression.
              </p>

              <p>
                This is also why the Ian challenge should be explained carefully.
              </p>

              <p>It is not a magic reason for popularity.</p>

              <p>It is not the whole story of Hearts2Hearts.</p>

              <p>It is one entry point.</p>

              <p>
                For a new group, one memorable performance moment can help casual
                viewers understand who to look for first.
              </p>

              <p>That is what happened for many people with Ian.</p>

              <p>One thing to watch in this fancam is timing.</p>

              <p>A challenge-friendly move cannot feel too loose.</p>

              <p>It also cannot feel too stiff.</p>

              <p>
                The performer has to make the movement readable right away.
              </p>

              <p>
                Ian&apos;s appeal in this kind of clip comes from how the
                movement lands clearly, then connects back to the rest of the
                stage.
              </p>

              <p>
                That matters because a fancam is not only one highlight.
              </p>

              <p>
                It follows the member before and after the part people already
                know.
              </p>

              <p>
                You can see whether the performance still holds together outside
                the short clip.
              </p>

              <p>You can see whether the expression resets naturally.</p>

              <p>
                You can see whether the member keeps the stage mood even when
                the obvious challenge moment is over.
              </p>

              <p>That is where stage presence becomes important.</p>

              <p>
                Stage presence does not always mean doing the biggest move.
              </p>

              <p>
                Sometimes it is the way an idol prepares for a key part.
              </p>

              <p>Sometimes it is the way they know when the camera is close.</p>

              <p>
                Sometimes it is the way they keep the same mood through a
                transition.
              </p>

              <p>
                For a rookie idol, those details are especially interesting
                because viewers are still learning their style.
              </p>

              <p>
                Ian&apos;s fancam gives beginners a simple way to watch that
                process.
              </p>

              <p>You do not need to know every Hearts2Hearts member first.</p>

              <p>
                You can start with one performance, one member, and one point
                move.
              </p>

              <p>
                Then you can slowly understand how the group&apos;s stage image
                works.
              </p>

              <p>This is also connected to killing parts.</p>

              <p>A killing part is the short moment fans replay.</p>

              <p>
                In Ian&apos;s case, the challenge-friendly movement can become
                that replay point for many viewers.
              </p>

              <p>But the fancam adds more context.</p>

              <p>It shows what happens before the replay moment.</p>

              <p>It shows what happens after it.</p>

              <p>
                It shows whether the idol can keep attention across the whole
                clip.
              </p>

              <p>That is why fancams are useful.</p>

              <p>
                They turn a short viral moment into a fuller performance.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand Ian&apos;s
                &quot;STYLE&quot; fancam is this:
              </p>

              <p>A point choreography gives people the move they remember.</p>

              <p>A killing part gives people the moment they replay.</p>

              <p>
                A fancam lets people follow the member behind that moment.
              </p>

              <p>Stage presence decides whether the attention stays.</p>

              <p>The Ian challenge may be the doorway.</p>

              <p>But the fancam is where you can watch the performer more closely.</p>

              <p>Try watching this video in three passes.</p>

              <p>
                First, watch the part that feels most familiar from challenge
                clips.
              </p>

              <p>
                Second, watch what Ian does right before and right after that
                part.
              </p>

              <p>
                Third, watch her face and timing when she is not the main
                highlight.
              </p>

              <p>
                That is where a rookie member&apos;s performance style becomes
                easier to read.
              </p>

              <p>
                Ian is still early in her career, so it is better not to write
                her story too heavily.
              </p>

              <p>What makes this spotlight useful is not a final judgment.</p>

              <p>It is a starting point.</p>

              <p>
                A rookie idol can become recognizable because one short movement
                travels online.
              </p>

              <p>
                But the reason people keep watching usually comes from the
                details after that.
              </p>

              <p>The fancam helps you see those details.</p>

              <p>And for Ian, &quot;STYLE&quot; is a good place to start.</p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to notice while watching
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  Watch how the challenge-friendly move lands clearly, then
                  connects back to the rest of the stage.
                </li>
                <li>
                  Notice timing — the movement should feel readable without
                  being too stiff.
                </li>
                <li>
                  Pay attention to what happens before and after the familiar
                  challenge moment.
                </li>
                <li>
                  Watch facial timing when Ian is not the main highlight.
                </li>
                <li>
                  Remember the Ian challenge is one entry point, not the whole
                  story.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                About Hearts2Hearts on HAEMIL
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Hearts2Hearts (하츠투하츠) is a rookie girl group from SM
                Entertainment. HAEMIL currently starts with Ian as the first
                covered member — other official members exist, and member guides
                may be added later.
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
                href="/kpop/hearts2hearts"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                Hearts2Hearts group page →
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
