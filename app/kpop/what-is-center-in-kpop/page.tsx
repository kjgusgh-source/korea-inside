import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-center-in-kpop`;

const pageTitle =
  "What Is Center in K-pop? | Meaning, Examples & Stage Role";
const pageDescription =
  "A friendly guide to what center means in K-pop, why the center member matters, and how fans understand stage presence, image, and performance focus.";

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
  const relatedGuides = getPublishedMemberGuides()
    .filter(
      ({ member }) =>
        member.id === "jang-wonyoung" ||
        member.id === "karina" ||
        member.id === "an-yujin" ||
        member.id === "jimin"
    )
    .slice(0, 4);

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
          name: "K-pop positions",
        },
        {
          "@type": "Thing",
          name: "Stage presence",
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
              K-pop guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What is center in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In K-pop, the center is the member who often stands in the most
              visually important position during a performance, photo, or key
              moment. But center does not only mean “the person in the middle.”
              Fans use the word to talk about image, balance, stage focus, and
              the member who makes the group’s concept feel clear.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Korean word
                </p>
                <p className="mt-2 text-2xl font-semibold">센터</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  senteo — the Korean pronunciation of “center.”
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In performances
                </p>
                <p className="mt-2 text-2xl font-semibold">Focus point</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The center often draws the eye during important choreography
                  or camera moments.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Why it matters
                </p>
                <p className="mt-2 text-2xl font-semibold">Group image</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A strong center can make a group’s concept feel easier to
                  understand.
                </p>
              </div>
            </div>
          </article>

          <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Meaning
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Center is about attention, not just position.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                A center member may stand in the middle during the opening,
                chorus, ending pose, group photo, or highlight part. But the
                reason fans notice them is not only because of placement. A
                center usually has the kind of presence that makes the stage
                feel organized around them.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                That presence can look different depending on the group. It can
                be elegant, powerful, cute, charismatic, calm, or bright. The
                important thing is that when the camera or formation gives them
                focus, the group’s mood becomes clearer.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What fans notice
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Camera awareness:
                  </span>{" "}
                  how naturally the member uses close-ups and key angles.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Balance:
                  </span>{" "}
                  how well the member makes the group formation feel stable.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Concept delivery:
                  </span>{" "}
                  how clearly the member expresses the song’s mood.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Memorability:
                  </span>{" "}
                  whether people remember the stage through that member’s image.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Center vs main role
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Is center the same as main dancer or main vocal?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Not exactly. Main dancer, main vocal, main rapper, and leader are
              usually role-based positions. Center is more about visual focus,
              stage balance, and the image a group wants to show at a certain
              moment.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Sometimes the center is also a strong dancer or vocalist, but that
              is not required. A member can be talked about as a center because
              they fit the group’s concept, make photos feel balanced, or catch
              attention naturally when the camera lands on them.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kpop/glossary"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Open K-pop glossary →
              </Link>

              <Link
                href="/kpop/what-is-a-fancam"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                What is a fancam? →
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Examples
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Why fans often talk about Wonyoung and Karina as center figures
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Fans often mention Jang Wonyoung of IVE when talking about center
              energy because she has strong camera awareness and a polished
              image that fits IVE’s elegant confidence. When she is placed in
              the middle, the group’s visual mood often feels immediately clear.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Karina of aespa is another easy example for international fans to
              understand. Her sharp stage image, futuristic aura, and confident
              expressions match aespa’s concept strongly, so fans often notice
              how naturally she holds the visual focus of a stage.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kpop/ive/jang-wonyoung"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Read Wonyoung guide →
              </Link>

              <Link
                href="/kpop/aespa/karina"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Read Karina guide →
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides with strong stage focus
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