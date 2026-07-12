import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-center-in-kpop`;

const pageTitle =
  "What Is Center in K-pop? A Friendly Guide to the Focus Member";
const pageDescription =
  "A friendly HAEMIL guide to center meaning in K-pop, why the focus member matters, and how center differs from visual, killing part, fancam, ending fairy, and maknae.";

const quickFacts = [
  "Basic meaning: Center usually means the member placed in the main focus of a group’s stage, choreography, photo, teaser, or performance moment.",
  "Not always literal: The center is not standing in the middle every second.",
  "What matters: Choreography focus, camera attention, concept fit, group balance, and first impression.",
  "Official or fan-used: Some centers are widely recognized, while fans may also use the word casually for a comeback or stage.",
  "Different from visual: Visual is more about image and memorability; center is more about focus and placement.",
  "Different from killing part: A center moment can become a killing part, but they are not the same.",
  "Important: Center does not automatically mean the best singer, best dancer, or most popular member.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What does visual mean in K-pop?",
    description:
      "A friendly guide to what “visual” means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
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
    label: "K-pop starter guide",
    title: "What is an ending fairy?",
    description:
      "A friendly guide to K-pop ending fairy meaning, why the final close-up matters, and how it differs from fancams, facecams, visual moments, and center parts.",
    href: "/kpop/what-is-ending-fairy",
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
    canonical: "/kpop/what-is-center-in-kpop",
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

export default function WhatIsCenterInKpopPage() {
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
          name: "K-pop center",
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
          name: "What is center in K-pop?",
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
              If you search &quot;center meaning in K-pop,&quot; the simple
              answer is this: the center is the member placed in the main focus
              of a group&apos;s stage, choreography, photo, teaser, or
              performance moment.
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
              <p>That often means standing in the middle.</p>

              <p>But not always.</p>

              <p>
                In K-pop, center is not only a map position. It is a focus
                position.
              </p>

              <p>
                The center is the member the stage wants you to notice at a
                certain moment. They may start the song, stand in the middle of a
                chorus formation, appear strongly in a teaser image, take the
                first camera close-up, or make the group&apos;s concept easier to
                understand.
              </p>

              <p>That is why fans talk about center so much.</p>

              <p>A center can shape the first impression of a group.</p>

              <p>
                When a new viewer watches a stage for the first time, they may
                not know every member yet. The center helps guide the eyes. The
                camera, choreography, styling, and formation all tell the
                viewer, &quot;Look here for a second.&quot;
              </p>

              <p>That does not mean the center is the only important member.</p>

              <p>It means the center helps organize attention.</p>

              <p>
                K-pop stages are busy. Many things happen at once: singing,
                dancing, formations, facial expressions, camera cuts, styling,
                and concept details. A good center moment makes all of that
                easier to read.
              </p>

              <p>The viewer understands the song faster.</p>

              <p>The group image becomes clearer.</p>

              <p>The stage feels balanced.</p>

              <p>That is the job of center.</p>

              <p>
                Sometimes center is an official or widely recognized role.
                Sometimes fans use the word more casually. They may say a member
                &quot;felt like the center this comeback&quot; because the
                styling, choreography, camera work, or teaser images gave that
                member more focus.
              </p>

              <p>So be careful.</p>

              <p>Center is not always a fixed label in every group.</p>

              <p>It can be a role.</p>

              <p>It can be a stage function.</p>

              <p>
                It can also be a fan description for who carried the focus in a
                certain era.
              </p>

              <p>Center is different from visual.</p>

              <p>
                Visual is more about image, styling, facial impression, camera
                presence, and how memorable a member feels in photos or videos.
                A visual member may also be center often, because visual image
                and stage focus can overlap.
              </p>

              <p>But they are not the same word.</p>

              <p>Visual is about how the idol is seen and remembered.</p>

              <p>Center is about where the stage places focus.</p>

              <p>Center is also different from face of the group.</p>

              <p>
                The face of the group is usually the member most recognized by
                the public. That can come from variety shows, acting, ads, viral
                clips, hosting, popularity, or public familiarity. A face of the
                group may not always be the center on stage.
              </p>

              <p>
                Public recognition and stage focus are related, but not
                identical.
              </p>

              <p>Center is also different from a killing part.</p>

              <p>
                A killing part is the short part of a song or performance that
                fans replay, quote, or share. A center moment can become a
                killing part if it lands strongly. But a killing part can also
                belong to someone who is not center.
              </p>

              <p>
                A member at the side can still have the line everyone remembers.
              </p>

              <p>A quick gesture can become the viral moment.</p>

              <p>
                One expression before the beat drops can be the part people
                replay.
              </p>

              <p>That is killing part.</p>

              <p>Center is about focus and placement.</p>

              <p>The two can meet, but they are not the same.</p>

              <p>Center is also different from a fancam.</p>

              <p>
                A fancam is the video format that follows one member during a
                performance. If a member is often center, their fancam may help
                you see how they handle those focus moments. But the fancam
                itself is not the center role.
              </p>

              <p>A fancam shows one person.</p>

              <p>Center describes how the group stage puts attention on a person.</p>

              <p>Ending fairy is different too.</p>

              <p>
                An ending fairy is the final close-up after the performance
                ends. It is a short camera moment where one idol catches their
                breath, holds an expression, or reacts to the camera. A center
                member may get the ending fairy, but any member can.
              </p>

              <p>Center happens inside the stage structure.</p>

              <p>Ending fairy happens at the final after-moment.</p>

              <p>Maknae is different again.</p>

              <p>
                Maknae means the youngest member. A maknae can be center. A
                center can be maknae. But maknae is about age order, while
                center is about stage focus.
              </p>

              <p>
                These words often overlap in real fandom talk, which is why
                beginners get confused.
              </p>

              <p>
                One idol can be a maknae, have a strong visual image, take
                center in the chorus, get a killing part, appear in a fancam,
                and receive an ending fairy moment.
              </p>

              <p>
                But each word points to a different part of how fans watch
                K-pop.
              </p>

              <p>That is the useful way to learn them.</p>

              <p>Center is not about saying one member is &quot;the best.&quot;</p>

              <p>The center does not always sing the most.</p>

              <p>The center does not always dance the hardest.</p>

              <p>The center is not always the most popular.</p>

              <p>
                The center is the person the performance uses to make the group
                image clear at a key moment.
              </p>

              <p>Sometimes that requires strong dance.</p>

              <p>Sometimes it requires a memorable face.</p>

              <p>Sometimes it requires confidence.</p>

              <p>
                Sometimes it requires balance, because the member has to make
                the formation feel natural.
              </p>

              <p>
                Sometimes it is simply the person who fits that comeback&apos;s
                concept best.
              </p>

              <p>
                For beginners, the easiest way to notice center is to watch the
                chorus.
              </p>

              <p>Who is in the middle when the key move happens?</p>

              <p>Who does the camera find first?</p>

              <p>Who makes the formation feel balanced?</p>

              <p>
                Who seems to introduce the concept before everyone else joins
                the picture?
              </p>

              <p>Then watch another stage of the same song.</p>

              <p>Is it the same member?</p>

              <p>Does the focus move around?</p>

              <p>Does another member become center for a different part?</p>

              <p>
                K-pop stages often shift focus carefully. A group may have one
                member who feels like the main center, but many songs still move
                the center position between members. That movement helps the
                stage feel alive.
              </p>

              <p>It also gives different members their own moments.</p>

              <p>This is why center should not be understood too stiffly.</p>

              <p>It is not always a permanent crown.</p>

              <p>It is often a performance tool.</p>

              <p>
                A good center moment can make a stage easier to remember. It
                can make a chorus feel stronger. It can make a teaser image
                more striking. It can help a new viewer understand the
                group&apos;s identity faster.
              </p>

              <p>That is why fans care.</p>

              <p>Not because the center is the only member who matters.</p>

              <p>
                But because K-pop is a camera-heavy, formation-heavy,
                image-heavy performance culture.
              </p>

              <p>Where the eye goes matters.</p>

              <p>
                And the center is one of the main ways K-pop guides that eye.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand center is
                this:
              </p>

              <p>A visual makes the image memorable.</p>

              <p>A killing part makes you replay a few seconds.</p>

              <p>A fancam helps you follow one member.</p>

              <p>An ending fairy gives you the final close-up.</p>

              <p>A maknae tells you the youngest member.</p>

              <p>Center tells you where the performance wants your attention.</p>

              <p>Once you understand that, K-pop stages become easier to read.</p>

              <p>You stop asking only, &quot;Who is in the middle?&quot;</p>

              <p>You start asking, &quot;Why did the stage put them there?&quot;</p>

              <p>That question is where center starts to make sense.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">센터</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              센터 is the Korean pronunciation of the English word
              &quot;center.&quot; In K-pop fan talk, it usually describes the
              member placed in the main focus of a stage, choreography, photo,
              teaser, or performance moment — not only the person standing in
              the literal middle every second.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Fans may use it as a recognized role, a stage function, or a casual
              description for who carried the focus in a comeback or era.
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
