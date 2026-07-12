import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-ending-fairy`;

const pageTitle =
  "What Is an Ending Fairy in K-pop? The Meaning Behind the Final Camera Moment";
const pageDescription =
  "A friendly HAEMIL guide to the meaning of ending fairy in K-pop, why fans notice the final close-up, and how it differs from fancams, facecams, visual moments, and center parts.";

const quickFacts = [
  "Basic meaning: An ending fairy is the final close-up camera moment after a K-pop performance ends.",
  "What happens: One idol is shown while catching their breath, holding an expression, or reacting to the camera.",
  "Why fans care: Timing, eye contact, breathing, expression control, and personality can all show in a few seconds.",
  "Different from: A fancam, facecam, visual moment, or center part.",
  "Common feeling: Cute, funny, calm, intense, shy, confident, or playful depending on the idol and stage.",
  "Local tip: The best ending fairy moments often feel small, not forced.",
  "Important: It is not only about looking pretty.",
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
    label: "K-pop guide",
    title: "What is a close-up fancam?",
    description:
      "A friendly guide to Korean close-up fancams, where one face, one expression, or one quick mood change can make a stage easy to replay.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does visual mean in K-pop?",
    description:
      "A friendly guide to what “visual” means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
  },
  {
    label: "K-pop guide",
    title: "What is center in K-pop?",
    description:
      "Learn what center means in K-pop, why the center member matters, and how fans understand stage focus and group image.",
    href: "/kpop/what-is-center-in-kpop",
  },
  {
    label: "K-pop guide",
    title: "What does maknae mean?",
    description:
      "Learn what maknae means, why the youngest member matters in K-pop, and how fans use words like golden maknae.",
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
    canonical: "/kpop/what-is-ending-fairy",
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

export default function WhatIsEndingFairyPage() {
  const relatedMemberGuides = getPublishedMemberGuides().slice(0, 4);

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
          name: "K-pop ending fairy",
        },
        {
          "@type": "Thing",
          name: "K-pop music shows",
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
          name: "What is an ending fairy?",
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
              If you search &quot;ending fairy meaning,&quot; the simple answer
              is this: an ending fairy is the final close-up camera moment after
              a K-pop performance ends.
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
              <p>The song finishes.</p>

              <p>The choreography stops.</p>

              <p>The idol is still catching their breath.</p>

              <p>Then the camera stays on one member for a few seconds.</p>

              <p>That short moment is the ending fairy.</p>

              <p>It can be cute.</p>

              <p>It can be funny.</p>

              <p>It can be calm.</p>

              <p>It can be intense.</p>

              <p>
                Sometimes it is only a small look into the camera, but fans still
                replay it because those few seconds can show a lot.
              </p>

              <p>
                At first, ending fairy may sound like a strange K-pop word. The
                &quot;fairy&quot; part makes it sound soft or magical, but in
                real fan talk, it usually means the member who gets the final
                camera close-up. The idol becomes the last image people remember
                from that stage.
              </p>

              <p>That is why it matters.</p>

              <p>
                A K-pop performance is full of movement. There are formations,
                center parts, choreography changes, live expressions, and camera
                cuts. During the song, the camera does not stay still for long.
              </p>

              <p>But the ending fairy moment slows everything down.</p>

              <p>
                For a few seconds, there is no big choreography to hide behind.
              </p>

              <p>Only the idol, the camera, and the expression they choose.</p>

              <p>That is why fans notice timing.</p>

              <p>
                If the idol looks into the camera too early, the moment can feel
                awkward.
              </p>

              <p>
                If they hold the expression too long, it can feel forced.
              </p>

              <p>
                If they are too tired to react, that can also become part of the
                charm.
              </p>

              <p>
                A good ending fairy does not always need a dramatic pose.
              </p>

              <p>
                Sometimes the best one is just a natural breath, a quick smile, a
                shy laugh, or a tiny change in the eyes.
              </p>

              <p>That is very K-pop.</p>

              <p>Small details become replay moments.</p>

              <p>Ending fairy is also different from a fancam.</p>

              <p>
                A fancam follows one idol during the performance. It can show
                the full body, choreography, expressions, and how the member
                carries the whole stage from beginning to end.
              </p>

              <p>An ending fairy is only the final close-up.</p>

              <p>A fancam is the performance focus.</p>

              <p>An ending fairy is the last few seconds.</p>

              <p>They often connect, but they are not the same thing.</p>

              <p>
                Ending fairy is also different from a facecam or close-up
                fancam.
              </p>

              <p>
                A facecam focuses on the idol&apos;s face for more of the
                performance. It helps fans see expressions, eye contact, and
                small changes during the song. An ending fairy is shorter and
                more specific. It happens after the performance ends, when the
                idol is no longer dancing but still being watched.
              </p>

              <p>That makes it feel more personal.</p>

              <p>Not always more important.</p>

              <p>Just different.</p>

              <p>
                Ending fairy also connects to visual talk, but it should not be
                reduced to &quot;the prettiest member gets the camera.&quot;
              </p>

              <p>
                In K-pop, fans may talk about visual image, styling, facial
                impression, and camera presence. Ending fairy moments can make
                those things easier to notice. A member&apos;s styling may look
                especially good. Their face may suit the concept. Their
                expression may match the song&apos;s mood.
              </p>

              <p>But the moment is not only about appearance.</p>

              <p>A strong ending fairy is about control.</p>

              <p>Can the idol hold the camera?</p>

              <p>Can they make a few seconds feel memorable?</p>

              <p>
                Can they stay in the mood of the song even after the choreography
                ends?
              </p>

              <p>Can they show personality without overdoing it?</p>

              <p>That is why some ending fairy moments go viral.</p>

              <p>They are short.</p>

              <p>They are easy to screenshot.</p>

              <p>They are easy to share.</p>

              <p>And they give fans a clean final image of the idol.</p>

              <p>Sometimes the idol looks confident.</p>

              <p>Sometimes they look embarrassed.</p>

              <p>Sometimes they do something playful.</p>

              <p>Sometimes they try not to laugh.</p>

              <p>
                Sometimes they are clearly out of breath, and fans like that
                because it feels real.
              </p>

              <p>
                That little mix of performance and reality is part of the
                appeal.
              </p>

              <p>Ending fairy can also help new fans learn members.</p>

              <p>
                If you do not know a group well yet, a final close-up can make
                one member easier to remember. You may not catch their name
                during the full stage. But after the ending shot, you might
                search the member, watch a fancam, or look for another
                performance.
              </p>

              <p>That is how small K-pop moments become entry points.</p>

              <p>The center of the performance is another related idea.</p>

              <p>
                A center is usually the member placed in key visual or
                choreography positions during the stage. The center helps
                organize the performance while the song is happening. An ending
                fairy is not the same thing. A member can be center during the
                song and not get the final camera. Another member can get the
                ending fairy even if they were not the main focus of the
                performance.
              </p>

              <p>So do not mix the terms too quickly.</p>

              <p>Center is about stage placement and focus.</p>

              <p>Ending fairy is about the final camera moment.</p>

              <p>
                For beginners, the easiest way to watch an ending fairy is
                simple:
              </p>

              <p>Do not only ask, &quot;Was the idol pretty?&quot;</p>

              <p>Ask what the idol did with the moment.</p>

              <p>Did they stay in the concept?</p>

              <p>Did they smile?</p>

              <p>Did they look playful?</p>

              <p>Did they look calm?</p>

              <p>Did they make the camera feel intentional?</p>

              <p>Did the expression match the song?</p>

              <p>Did the moment feel natural or too planned?</p>

              <p>There is no single correct answer.</p>

              <p>Some fans like polished ending fairies.</p>

              <p>Some like funny ones.</p>

              <p>Some like shy reactions.</p>

              <p>Some like idols who look completely in control.</p>

              <p>Some like moments where the idol almost breaks character.</p>

              <p>That variety is why ending fairy clips are fun.</p>

              <p>They are small, but they are not all the same.</p>

              <p>There is also a local fan feeling here.</p>

              <p>
                K-pop fans often enjoy watching how idols handle the camera when
                the big choreography is over. The ending fairy moment is a tiny
                test of awareness. The idol knows the camera is there. The fans
                know the idol knows. That little shared awareness makes the
                moment feel playful.
              </p>

              <p>It is staged, but it can still feel spontaneous.</p>

              <p>That is the balance.</p>

              <p>
                For HAEMIL readers, the easiest way to understand ending fairy is
                this:
              </p>

              <p>A fancam shows how one member performs.</p>

              <p>A center part shows where the stage places attention.</p>

              <p>A visual moment shows how image and camera presence work.</p>

              <p>An ending fairy shows how one idol uses the final few seconds.</p>

              <p>
                It is a small part of K-pop stage culture, but once you notice
                it, you will start seeing it everywhere.
              </p>

              <p>The final breath.</p>

              <p>The final look.</p>

              <p>The tiny smile.</p>

              <p>The camera staying just a little longer.</p>

              <p>That is the ending fairy.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">엔딩요정</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              엔딩 means ending, and 요정 means fairy. The word sounds cute, but
              the role can be funny, cool, elegant, awkward, or dramatic
              depending on the idol. That flexibility is why fans keep using the
              phrase.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In Korean fan culture, the word is not only about beauty. It is
              about the final impression. The idol gets a few seconds to leave a
              tiny memory after the stage is already finished.
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

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Try watching with context
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides with ending fairy notes
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {relatedMemberGuides.map(({ group, member }) => (
                <Link
                  key={`${group.id}-${member.id}`}
                  href={`/kpop/${group.id}/${member.id}`}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    {group.name}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {member.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
                    {member.note}
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
