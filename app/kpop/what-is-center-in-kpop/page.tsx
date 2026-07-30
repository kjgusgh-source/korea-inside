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
            <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <h2 className="text-xl font-semibold text-[var(--text)] md:text-2xl">
                What center actually means
              </h2>

              <p>
                That often means standing in the middle. But not always. In
                K-pop, center is not only a map position. It is a focus
                position.
              </p>

              <p>
                The center is the member the stage wants you to notice at a
                certain moment. They may start the song, stand in the middle
                of a chorus formation, appear strongly in a teaser image, take
                the first camera close-up, or make the group&apos;s concept
                easier to understand.
              </p>

              <p>
                That is why fans talk about center so much. A center can shape
                the first impression of a group.
              </p>

              <p>
                When a new viewer watches a stage for the first time, they may
                not know every member yet. The center helps guide the eyes.
                The camera, choreography, styling, and formation all tell the
                viewer, &quot;Look here for a second.&quot;
              </p>

              <p>
                That does not mean the center is the only important member. It
                means the center helps organize attention.
              </p>

              <p>
                K-pop stages are busy. Many things happen at once: singing,
                dancing, formations, facial expressions, camera cuts, styling,
                and concept details. A good center moment makes all of that
                easier to read.
              </p>

              <p>
                The viewer understands the song faster. The group image
                becomes clearer. The stage feels balanced. That is the job of
                center.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Center as a role fans use loosely
              </h2>

              <p>
                Sometimes center is an official or widely recognized role.
                Sometimes fans use the word more casually. They may say a
                member &quot;felt like the center this comeback&quot; because
                the styling, choreography, camera work, or teaser images gave
                that member more focus.
              </p>

              <p>So be careful. Center is not always a fixed label in every group.</p>

              <p>
                It can be a role. It can be a stage function. It can also be a
                fan description for who carried the focus in a certain era.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it differs from visual, face of the group, and killing part
              </h2>

              <p>
                Center is different from visual. Visual is more about image,
                styling, facial impression, camera presence, and how
                memorable a member feels in photos or videos. A visual member
                may also be center often, because visual image and stage focus
                can overlap.
              </p>

              <p>
                But they are not the same word. Visual is about how the idol
                is seen and remembered. Center is about where the stage places
                focus.
              </p>

              <p>
                Center is also different from face of the group. The face of
                the group is usually the member most recognized by the
                public. That can come from variety shows, acting, ads, viral
                clips, hosting, popularity, or public familiarity. A face of
                the group may not always be the center on stage.
              </p>

              <p>
                Public recognition and stage focus are related, but not
                identical.
              </p>

              <p>
                Center is also different from a killing part. A killing part
                is the short part of a song or performance that fans replay,
                quote, or share. A center moment can become a killing part if
                it lands strongly. But a killing part can also belong to
                someone who is not center.
              </p>

              <p>
                A member at the side can still have the line everyone
                remembers. A quick gesture can become the viral moment. One
                expression before the beat drops can be the part people
                replay. That is killing part.
              </p>

              <p>
                Center is about focus and placement. The two can meet, but
                they are not the same.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How it differs from fancam, ending fairy, and maknae
              </h2>

              <p>
                Center is also different from a fancam. A fancam is the video
                format that follows one member during a performance. If a
                member is often center, their fancam may help you see how they
                handle those focus moments. But the fancam itself is not the
                center role.
              </p>

              <p>
                A fancam shows one person. Center describes how the group
                stage puts attention on a person.
              </p>

              <p>
                Ending fairy is different too. An ending fairy is the final
                close-up after the performance ends. It is a short camera
                moment where one idol catches their breath, holds an
                expression, or reacts to the camera. A center member may get
                the ending fairy, but any member can.
              </p>

              <p>
                Center happens inside the stage structure. Ending fairy
                happens at the final after-moment.
              </p>

              <p>
                Maknae is different again. Maknae means the youngest member. A
                maknae can be center. A center can be maknae. But maknae is
                about age order, while center is about stage focus.
              </p>

              <p>
                These words often overlap in real fandom talk, which is why
                beginners get confused. One idol can be a maknae, have a
                strong visual image, take center in the chorus, get a killing
                part, appear in a fancam, and receive an ending fairy moment.
              </p>

              <p>
                But each word points to a different part of how fans watch
                K-pop. That is the useful way to learn them.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                What center is not about
              </h2>

              <p>
                Center is not about saying one member is &quot;the best.&quot;
                The center does not always sing the most. The center does not
                always dance the hardest. The center is not always the most
                popular.
              </p>

              <p>
                The center is the person the performance uses to make the
                group image clear at a key moment.
              </p>

              <p>
                Sometimes that requires strong dance. Sometimes it requires a
                memorable face. Sometimes it requires confidence. Sometimes it
                requires balance, because the member has to make the formation
                feel natural. Sometimes it is simply the person who fits that
                comeback&apos;s concept best.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How to notice center as a beginner
              </h2>

              <p>
                For beginners, the easiest way to notice center is to watch
                the chorus.
              </p>

              <p>
                Who is in the middle when the key move happens? Who does the
                camera find first? Who makes the formation feel balanced? Who
                seems to introduce the concept before everyone else joins the
                picture?
              </p>

              <p>
                Then watch another stage of the same song. Is it the same
                member? Does the focus move around? Does another member become
                center for a different part?
              </p>

              <p>
                K-pop stages often shift focus carefully. A group may have one
                member who feels like the main center, but many songs still
                move the center position between members. That movement helps
                the stage feel alive. It also gives different members their
                own moments.
              </p>

              <p>
                This is why center should not be understood too stiffly. It is
                not always a permanent crown. It is often a performance tool.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why center matters, and how it fits with the rest of K-pop terms
              </h2>

              <p>
                A good center moment can make a stage easier to remember. It
                can make a chorus feel stronger. It can make a teaser image
                more striking. It can help a new viewer understand the
                group&apos;s identity faster.
              </p>

              <p>
                That is why fans care. Not because the center is the only
                member who matters. But because K-pop is a camera-heavy,
                formation-heavy, image-heavy performance culture. Where the
                eye goes matters. And the center is one of the main ways
                K-pop guides that eye.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand center is
                this:
              </p>

              <p>
                A visual makes the image memorable. A killing part makes you
                replay a few seconds. A fancam helps you follow one member. An
                ending fairy gives you the final close-up. A maknae tells you
                the youngest member. Center tells you where the performance
                wants your attention.
              </p>

              <p>
                Once you understand that, K-pop stages become easier to read.
                You stop asking only, &quot;Who is in the middle?&quot; You
                start asking, &quot;Why did the stage put them there?&quot;
                That question is where center starts to make sense.
              </p>
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
