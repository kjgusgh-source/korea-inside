import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-stage-presence-in-kpop`;

const pageTitle =
  "What Is Stage Presence in K-pop? Why Some Idols Are Hard to Look Away From";
const pageDescription =
  "A friendly HAEMIL guide to stage presence in K-pop, why some idols hold attention on stage, and how it differs from center, visual, fancam, ending fairy, and killing part moments.";

const quickFacts = [
  "Basic meaning: Stage presence is the way an idol holds attention during a performance.",
  "Not only power: It is not just dancing hard, making big faces, or being loud on stage.",
  "What matters: Confidence, timing, expression control, body control, camera awareness, energy, and concept fit.",
  "Quiet or loud: Strong stage presence can feel intense, playful, calm, sharp, elegant, or subtle.",
  "Why fancams help: A fancam lets you watch whether one member stays interesting from beginning to end.",
  "Different from center: Center is where the stage places focus; stage presence is how the idol uses or holds attention.",
  "Local tip: Sometimes stage presence shows most clearly when the idol is not singing or standing in the middle.",
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
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
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
    title: "What does visual mean in K-pop?",
    description:
      "A friendly guide to what “visual” means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is an ending fairy?",
    description:
      "A friendly guide to K-pop ending fairy meaning, why the final close-up matters, and how it differs from fancams, facecams, visual moments, and center parts.",
    href: "/kpop/what-is-ending-fairy",
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
    canonical: "/kpop/what-is-stage-presence-in-kpop",
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

export default function WhatIsStagePresenceInKpopPage() {
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
          name: "K-pop stage presence",
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
          name: "What is stage presence in K-pop?",
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
              K-pop starter guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you search &quot;stage presence in K-pop,&quot; the simple
              answer is this: stage presence is the way an idol holds attention
              during a performance.
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
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                It is the reason your eyes keep going back to one member.
              </p>

              <p>Even when they are not singing.</p>

              <p>Even when they are not in the center.</p>

              <p>
                Even when the choreography is busy and everyone is doing the
                same move.
              </p>

              <p>
                Some idols make the stage feel larger when they are on it. That
                is stage presence.
              </p>

              <p>But it is not as simple as &quot;dancing hard.&quot;</p>

              <p>It is not only big facial expressions.</p>

              <p>
                It is not only being loud, fierce, or dramatic.
              </p>

              <p>
                Stage presence can be powerful, but it can also be quiet. Some
                idols pull attention with sharp energy. Some do it with calm
                control. Some are playful. Some are intense. Some barely move
                their face, but the camera still feels like it belongs to them.
              </p>

              <p>That is why fans talk about stage presence so much.</p>

              <p>It is difficult to measure, but easy to feel.</p>

              <p>
                A strong performer knows how to stay connected to the song. They
                understand when to push energy forward and when to hold back.
                They know when to look into the camera, when to focus on the
                choreography, when to soften their expression, and when to make
                one small movement feel important.
              </p>

              <p>That control is part of stage presence.</p>

              <p>
                For beginners, the easiest mistake is thinking stage presence
                means &quot;the idol who does the most.&quot;
              </p>

              <p>Sometimes that is true.</p>

              <p>A high-energy performer can dominate a stage.</p>

              <p>
                But sometimes the idol with the strongest stage presence is not
                doing the biggest move. They may simply understand the mood
                better. Their timing may be cleaner. Their expression may change
                at the right second. Their body may look relaxed even during
                hard choreography.
              </p>

              <p>Stage presence is not only effort.</p>

              <p>It is control.</p>

              <p>This is why fancams are useful.</p>

              <p>
                A full-group stage shows the whole performance. It tells you
                how the group looks together. But a fancam lets you follow one
                member from beginning to end. You can see whether they stay
                interesting during quiet parts, transitions, side positions, and
                moments when the main camera would usually move away.
              </p>

              <p>That is where stage presence often becomes clear.</p>

              <p>Do they disappear when they are not in the center?</p>

              <p>Do they keep the mood when another member is singing?</p>

              <p>Do they reset their face naturally after a difficult move?</p>

              <p>Do they look aware of the camera without looking stiff?</p>

              <p>
                Do they make the performance feel alive even in small seconds?
              </p>

              <p>Those are the things fans notice.</p>

              <p>Stage presence also connects to killing parts.</p>

              <p>
                A killing part is the short moment fans replay: a line, gesture,
                expression, camera close-up, or dance move that lands strongly.
                But a killing part does not work only because the song gives
                someone a good moment. The idol has to deliver it.
              </p>

              <p>
                The same line can feel ordinary with one performance and
                unforgettable with another.
              </p>

              <p>That difference is often stage presence.</p>

              <p>
                A member with strong stage presence can make a few seconds feel
                bigger than they look on paper.
              </p>

              <p>
                Stage presence is also related to center, but it is not the
                same.
              </p>

              <p>
                The center is where the stage places focus. The member may
                stand in the middle, take the key formation, or receive the main
                camera attention during an important part. Center is about
                focus and placement.
              </p>

              <p>Stage presence is how the idol uses that focus.</p>

              <p>Or how they hold attention even without it.</p>

              <p>
                A center moment can reveal stage presence, but it does not
                create it by itself. If the camera gives someone the focus and
                they do nothing with it, the moment may feel flat. If the camera
                barely focuses on someone and you still notice them, that can be
                stage presence too.
              </p>

              <p>
                That is why fans often say a member &quot;has presence&quot;
                even when they are not the official center.
              </p>

              <p>Stage presence is also different from visual.</p>

              <p>
                Visual is about image, styling, facial impression, camera
                memorability, and how a member is remembered in photos or
                clips. Stage presence is more about performance pull. It is what
                happens when the music starts and the idol has to carry energy
                in real time.
              </p>

              <p>The two can overlap.</p>

              <p>
                A member with strong visual image may also have strong stage
                presence.
              </p>

              <p>But they are not the same thing.</p>

              <p>
                A beautiful photo does not automatically mean strong stage
                presence.
              </p>

              <p>
                And strong stage presence does not always need the most polished
                beauty image.
              </p>

              <p>It is about how someone holds the stage.</p>

              <p>Ending fairy is another related idea.</p>

              <p>
                An ending fairy is the final close-up after a K-pop performance
                ends. The idol catches their breath, holds an expression, or
                reacts to the camera. Stage presence can show there too, because
                the idol still needs timing and camera awareness.
              </p>

              <p>But ending fairy is only a short final moment.</p>

              <p>Stage presence is the feeling across the performance.</p>

              <p>From the first second to the last.</p>

              <p>That is the difference.</p>

              <p>
                K-pop fans often notice stage presence because K-pop stages are
                camera-heavy. Idols are not only performing for the people in
                front of them. They are performing for music-show cameras,
                fancams, short clips, thumbnails, edits, and fans watching
                later on their phones.
              </p>

              <p>That changes the skill.</p>

              <p>A stage performer needs energy for the room.</p>

              <p>A K-pop idol also needs awareness for the camera.</p>

              <p>
                They have to know how a small expression will look in a
                close-up. They have to keep the concept even during transitions.
                They have to move as part of the group while still giving fans a
                reason to notice them individually.
              </p>

              <p>That balance is hard.</p>

              <p>The best performers make it look easy.</p>

              <p>
                For a beginner, one good way to watch stage presence is to pick
                a fancam and ignore the chorus for a moment.
              </p>

              <p>Watch the parts between the obvious highlights.</p>

              <p>The walk to the next formation.</p>

              <p>The second before their line.</p>

              <p>The way they breathe after a hard move.</p>

              <p>The way their expression changes when the song mood shifts.</p>

              <p>
                The way they act when the camera is not directly centered on
                them.
              </p>

              <p>Stage presence often lives there.</p>

              <p>Not only in the big moment.</p>

              <p>Another thing to remember: stage presence changes by song.</p>

              <p>
                An idol may look powerful in one concept and softer in another.
                They may suit bright songs, elegant songs, dark songs, cute
                songs, or festival stages differently. A performer with good
                stage presence understands how to adjust.
              </p>

              <p>They do not perform every song with the same face.</p>

              <p>They read the mood.</p>

              <p>That is why fans compare eras.</p>

              <p>
                They watch how an idol changes across comebacks. Maybe the idol
                becomes more relaxed. Maybe their expressions become sharper.
                Maybe they stop overdoing it. Maybe they start trusting smaller
                gestures. Maybe they learn when not to smile, when not to push,
                when to let the camera come to them.
              </p>

              <p>That growth is part of K-pop watching.</p>

              <p>Stage presence is not fixed forever.</p>

              <p>It can improve.</p>

              <p>It can change.</p>

              <p>It can fit one concept better than another.</p>

              <p>
                It can surprise people in a fancam, a festival stage, or a tour
                performance.
              </p>

              <p>
                This is why fans argue about it so much. Stage presence is
                partly skill, partly taste, and partly chemistry with the song.
                One fan may love clean control. Another may love wild energy.
                Another may prefer subtle expressions. Another may want strong
                eye contact.
              </p>

              <p>There is no single perfect style.</p>

              <p>But there is one useful question:</p>

              <p>Do they make you want to keep watching?</p>

              <p>
                If the answer is yes, you are probably feeling stage presence.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand stage presence
                is this:
              </p>

              <p>
                Center tells you where the performance wants your attention.
              </p>

              <p>Visual tells you how image and camera memorability work.</p>

              <p>A killing part gives you the few seconds you replay.</p>

              <p>A fancam lets you follow one member.</p>

              <p>An ending fairy gives you the final close-up.</p>

              <p>
                Stage presence is the reason someone stays interesting through
                all of it.
              </p>

              <p>It is not always loud.</p>

              <p>It is not always obvious.</p>

              <p>
                But once you notice it, K-pop stages become much more fun to
                watch.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">무대 존재감</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In Korean fan talk, stage presence is often discussed with the
              English phrase &quot;stage presence&quot; or with 무대 존재감 —
              the feeling that an idol&apos;s presence on stage is noticeable
              and hard to ignore.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              It is not an official company role. It is fan language for how an
              idol holds attention through confidence, timing, expression
              control, and camera awareness during a performance.
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
