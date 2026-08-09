import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-fancam`;

const pageTitle = "Fancam Meaning in K-pop, Explained";
const pageDescription =
  "A fancam is a video that follows one K-pop idol during a performance. Here is what it means, why fans watch it, and how it differs from a facecam.";

const quickFacts = [
  "Basic meaning: A fancam is a video focused on one idol or member during a performance.",
  "In K-pop today: Many fancams are official videos from music shows or broadcasters, not only fan-recorded clips.",
  "Best for: Seeing expressions, styling, stage presence, and small details a full-group stage may miss.",
  "Different from: A full-stage video, facecam, close-up fancam, or ending fairy moment.",
  "Fan-taken fancams: These can come from concerts, festivals, or events, but filming rules depend on the event.",
  "Why it matters: A fancam can make one member easier to notice, remember, and understand.",
  "Local tip: Do not watch only the chorus. Sometimes the quiet seconds show the idol’s real control.",
];

const relatedGuides = [
  {
    label: "K-pop guide",
    title: "What is an ending fairy?",
    description:
      "Learn what ending fairy means, why final close-up shots go viral, and how idols use a few seconds to show charm after a stage.",
    href: "/kpop/what-is-ending-fairy",
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
    canonical: "/kpop/what-is-a-fancam",
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

export default function WhatIsAFancamPage() {
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
          name: "K-pop fancam",
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
          name: "What is a fancam?",
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
              <TermBadge term="fancam" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {pageTitle}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:mt-6 md:text-lg">
              If you search &quot;fancam meaning,&quot; the simple answer is
              this: a fancam is a video that focuses on one idol during a
              performance.
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
                What a fancam actually shows
              </h2>

              <p>
                Instead of watching the whole group at once, you follow one
                member. You see their face, movement, styling, timing, small
                reactions, and the way they hold the stage when the main camera
                is not choosing them.
              </p>

              <p>
                That is why fancams matter in K-pop. A full-stage video shows
                the group. A fancam lets you study one person.
              </p>

              <p>
                At first, the word sounds like it should mean &quot;a video
                filmed by a fan.&quot; That is where the word comes from. But
                in K-pop today, many fancams are not random fan recordings.
                Music shows, broadcasters, and official channels often upload
                member-focused fancams after performances.
              </p>

              <p>
                So when fans say &quot;fancam,&quot; they may be talking about
                an official music-show fancam. They may also be talking about
                a fan-taken video from a concert, festival, showcase, or
                public event. The important part is the focus: one idol, one
                performance, one camera following them.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Why a full-stage video isn&apos;t always enough
              </h2>

              <p>
                This is different from a full-group stage. In a full-stage
                video, the camera moves between members. You see the
                choreography, formations, center moments, and the whole
                performance shape. That is useful when you want to understand
                the song and group.
              </p>

              <p>
                But sometimes a full-stage video moves away too quickly. You
                may notice one member for two seconds and then lose them. A
                fancam fixes that. It lets you stay with one person from
                beginning to end.
              </p>

              <p>
                That is why new fans often use fancams to learn members. You
                may not know everyone&apos;s name yet. You may not understand
                the group&apos;s roles. But after watching one member-focused
                video, something clicks.
              </p>

              <p>
                You remember their expression. You remember their styling.
                You remember the way they looked at the camera. You remember a
                small gesture that the full-stage video almost missed.
              </p>

              <p>
                That is often how a casual viewer becomes curious about one
                idol.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                The small details fans are really watching for
              </h2>

              <p>
                Fancams are also useful because K-pop performances are built
                from many tiny details. The chorus matters, but it is not the
                only thing to watch.
              </p>

              <p>
                Look at the seconds before the member starts singing. Look at
                how they reset their expression after a hard move. Look at
                whether they keep the mood even when they are not in the
                center. Look at how their face changes between cute, sharp,
                calm, playful, or intense moments.
              </p>

              <p>
                Those small changes are part of why K-pop fans replay fancams.
              </p>

              <p>
                A fancam can also show stage presence more clearly. Stage
                presence does not only mean dancing hard. It can mean knowing
                when to relax, when to look into the camera, when to make a
                small expression, and when to let the choreography speak. Some
                idols are loud with their presence. Some are quieter. A fancam
                makes those differences easier to see.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How a fancam differs from a facecam or ending fairy
              </h2>

              <p>
                This is also why fancams connect to visual talk. In K-pop,
                &quot;visual&quot; is not only about saying someone is pretty
                or handsome. Fans often use it to talk about image, styling,
                facial impression, camera presence, and how memorable someone
                feels in clips or photos. A fancam can make that visual image
                easier to understand.
              </p>

              <p>
                But it should not become a beauty ranking. A good fancam is
                not only about appearance. It is also about performance
                control.
              </p>

              <p>
                A facecam, or close-up fancam, is a little different. A
                regular fancam often shows more of the full body and
                choreography. A facecam or close-up fancam focuses more on the
                idol&apos;s face, expressions, and eye contact. If you want to
                understand why fans talk about expressions so much, a
                close-up fancam can make that clearer.
              </p>

              <p>But it may show less of the full dance. That is the trade-off.</p>

              <p>
                A fancam is also different from an ending fairy. An ending
                fairy is the short camera moment after the song ends. The idol
                looks into the camera, catches their breath, and holds a final
                expression. It can become a viral moment, but it is only one
                part of the stage.
              </p>

              <p>
                A fancam follows the performance. An ending fairy is the final
                few seconds. Both matter, but they are not the same thing.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Fancams and member roles
              </h2>

              <p>Fancams can also help you understand member roles.</p>

              <p>
                For example, a center may stand out because the choreography
                places them in key moments. A maknae may feel different
                because fans are watching how the youngest member grows over
                time. A main dancer may show details in movement that are
                easier to see when the camera stays with them.
              </p>

              <p>
                But do not force every fancam into a role. Sometimes the best
                reason to watch is simple: You noticed someone. Now you want
                to see more. That is enough.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                How to watch your first fancam
              </h2>

              <p>
                If you are watching your first K-pop fancam, do not treat it
                like homework. Pick one member. Watch one video. Then ask
                yourself a few small questions.
              </p>

              <p>
                What kind of expression do they use most? Do they change mood
                between verses and chorus? Do they look relaxed or intense? Do
                they use the camera often? Does the styling change how you
                read the performance? Would you have noticed these things in
                the full-group stage?
              </p>

              <p>
                This is the real value of a fancam. It slows down the group
                performance and lets one member become clear.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[var(--text)] md:text-2xl">
                Official clips vs. fan-taken fancams
              </h2>

              <p>
                There is one more thing to remember. Not every fan-taken
                fancam is filmed under the same rules. Concerts, festivals,
                fan events, and broadcasts can have different filming
                policies. Some videos are official. Some are fan-recorded.
                Some are allowed. Some may be removed. So it is better not to
                assume every event works the same way.
              </p>

              <p>
                For beginners, official fancams are the easiest place to
                start. They are usually clean, easy to find, and focused on
                one member.
              </p>

              <p>
                Once you understand the idea, fan-taken fancams can show
                another side: live crowds, festival energy, tour stages, and
                moments that feel less polished than a broadcast. Both can be
                useful. They just feel different.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand a fancam is
                this: A full-stage video tells you what the group did. A
                fancam tells you how one member carried it.
              </p>

              <p>
                That is why fans love them. Not because every fancam is
                perfect. Not because every clip needs to go viral. But because
                sometimes one focused camera is enough to make you finally
                understand why people keep talking about a member.
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

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop Spotlight
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              See fancams in action
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link
                href="/kpop/rescene-woni-fancam-spotlight"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://img.youtube.com/vi/gHoKSBaLP7E/hqdefault.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  K-pop Spotlight
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                  Why RESCENE Woni Is Getting Attention Through Fancams
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  A spotlight example of how a close-up stage video can help a new
                  idol become easier to notice.
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Read spotlight →
                </p>
              </Link>

              <Link
                href="/kpop/illit-wonhee-fancam-spotlight"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://img.youtube.com/vi/gOGU2zO4POY/hqdefault.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  K-pop Spotlight
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                  Why ILLIT Wonhee Keeps Catching Attention in Fancams
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  A spotlight example of how clear expressions, timing, and
                  close-up camera comfort can make a familiar idol stay easy to
                  remember.
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Read spotlight →
                </p>
              </Link>

              <Link
                href="/kpop/cortis-keonho-fancam-spotlight"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://img.youtube.com/vi/qx8VbGEWcBo/hqdefault.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  K-pop Spotlight
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                  Why CORTIS Keonho Is an Easy Rookie Fancam Entry Point
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  A spotlight example of how one focused fancam can make a rookie
                  boy group easier to enter.
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Read spotlight →
                </p>
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Try watching with context
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides that use fancams
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
