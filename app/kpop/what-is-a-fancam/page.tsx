import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-fancam`;

const pageTitle =
  "What Is a Fancam in K-pop? | Meaning, Facecams & Korean Fan Words";
const pageDescription =
  "A friendly explanation of K-pop fancams, facecams, eolppak-jikcam, viral stage moments, and why fans love watching individual idol videos.";

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
  const relatedGuides = getPublishedMemberGuides().slice(0, 4);

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
              K-pop guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What is a fancam in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A fancam is a video that focuses on one idol during a performance.
              Instead of watching the whole group at once, you follow one member:
              their facial expressions, small gestures, dance details, eye
              contact, and the way they react between the main parts of the song.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Korean word
                </p>
                <p className="mt-2 text-2xl font-semibold">직캠</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  jikcam — a direct camera video focused on one performer.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Fan focus
                </p>
                <p className="mt-2 text-2xl font-semibold">Details</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Fans watch fancams to catch expressions and movements that full
                  stage videos often miss.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Why it matters
                </p>
                <p className="mt-2 text-2xl font-semibold">Personality</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A good fancam can make one member’s charm easier to understand.
                </p>
              </div>
            </div>
          </article>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Why fans watch them
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Fancams make a big stage feel personal.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                In a group performance, the main camera keeps changing. You may
                see the full choreography, then a close-up, then another member.
                That is exciting, but it also means you can miss small things.
                A fancam slows the experience down. You can watch how one idol
                carries the song from beginning to end.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                This is why fans often talk about stage presence through fancams.
                It is not only about the biggest dance move. Sometimes it is a
                quick smile, a sharp glance, a clean transition, or the way an
                idol keeps performing even when they are not in the center.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What fans notice
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Facial expressions:
                  </span>{" "}
                  the small changes that match the mood of the song.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Dance lines:
                  </span>{" "}
                  how clean, soft, sharp, or powerful the movement looks.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Camera awareness:
                  </span>{" "}
                  how naturally an idol finds and uses the camera.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    In-between moments:
                  </span>{" "}
                  what they do when it is not their main part.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Fancam vs facecam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              What is an eolppak-jikcam?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              A normal fancam usually shows the idol’s whole body or upper body
              so you can see the dance. An{" "}
              <span className="font-semibold text-[var(--text)]">
                eolppak-jikcam
              </span>{" "}
              is much closer. In Korean, 얼빡 is casual fan slang for a close-up
              face shot, and 직캠 means fancam. So 얼빡직캠 is a close-up fancam
              where the idol’s face fills most of the screen.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Fans like these clips because tiny expressions become easier to
              catch: a small smile, a quick eye movement, a playful reaction, or
              the moment an idol’s mood changes with the song.
            </p>

            <div className="mt-6">
              <Link
                href="/kpop/glossary"
                className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Open K-pop glossary →
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop Spotlight
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              See fancams in action
            </h2>

            <Link
              href="/kpop/rescene-woni-fancam-spotlight"
              className="group mt-6 block rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md md:max-w-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
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
              {relatedGuides.map(({ group, member }) => (
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