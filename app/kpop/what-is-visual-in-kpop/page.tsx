import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-visual-in-kpop`;

const pageTitle =
  "What Is Visual in K-pop? | Meaning, Examples & Group Image";
const pageDescription =
  "A friendly guide to what visual means in K-pop, how it connects to group image and concept photos, and why it is not a beauty ranking.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-visual-in-kpop",
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

const relatedMemberIds = ["jang-wonyoung", "karina", "v", "mingyu"];

export default function WhatIsVisualInKpopPage() {
  const publishedGuides = getPublishedMemberGuides();
  const relatedGuides = relatedMemberIds.flatMap((memberId) => {
    const match = publishedGuides.find(({ member }) => member.id === memberId);
    return match ? [match] : [];
  });

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
          name: "K-pop visual",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "Group image",
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
          name: "What is visual in K-pop?",
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
              What is visual in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
  In K-pop, visual usually refers to a member known for strong looks,
  styling, camera presence, and the way they shape a group&apos;s first
  impression. Fans often use it as a compliment, and appearance is
  definitely part of the word. But visual is not usually meant as an
  objective ranking of every member&apos;s looks. It is more about the
  member whose image, mood, and presence strongly match the group&apos;s
  concept.
</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Korean word
                </p>
                <p className="mt-2 text-2xl font-semibold">비주얼</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  bijueol — visual; often used for image, presentation, or how
                  someone fits a group&apos;s look.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In K-pop
                </p>
                <p className="mt-2 text-2xl font-semibold">Group image</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The member who often represents the group&apos;s visual
                  identity in photos, teasers, and public-facing moments.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Not the same as
                </p>
                <p className="mt-2 text-2xl font-semibold">Center</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Visual and center can overlap, but center is more about stage
                  focus and performance attention.
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
  Visual starts with appearance, but it is not only about appearance.
</h2>

<p className="mt-5 text-base leading-8 text-[var(--muted)]">
  비주얼 comes from the English word visual. In K-pop, it often starts
  from appearance: looks, styling, proportions, facial features, and
  the way someone appears on camera. That part is real, so it would
  feel strange to explain visual as if beauty has nothing to do with
  it.
</p>

<p className="mt-4 text-base leading-8 text-[var(--muted)]">
  But the word does not stop at “this person is good-looking.” Fans and
  companies often connect visual to a group&apos;s concept, public image,
  teaser photos, profile shots, and first impression. A visual member
  may be the person who makes a group&apos;s image easier to remember at a
  glance.
</p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Where fans notice it
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Concept photos:
                  </span>{" "}
                  comeback images often set the tone for who feels most tied to
                  the era&apos;s look.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Teasers & thumbnails:
                  </span>{" "}
                  the member on a cover image can shape first impressions before
                  anyone hears the song.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Red carpet & interviews:
                  </span>{" "}
                  styling, posture, and camera presence all feed into public
                  image.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Stage close-ups & profile images:
                  </span>{" "}
                  fans notice who carries the group&apos;s visual mood in still
                  and moving shots.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              What visual does not mean
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
  It does not mean the other members are not attractive.
</h2>

<p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
  Calling one member the visual does not mean the other members are not
  attractive. It also does not mean visual is the most important role in
  the group. K-pop fans often use the word to talk about who leaves a
  strong visual impression, especially in photos, teasers, thumbnails,
  or public appearances.
</p>

<p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
  Visual can overlap with center, but they are not exactly the same.
  Center is usually about stage focus, formation, and performance
  attention. Visual is more about appearance, image, camera presence,
  and how strongly someone fits the group&apos;s visual concept.
</p>

<p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
  “Face of the group” is a little different too. That phrase usually
  points to the member many people recognize first outside the fandom,
  through variety shows, acting, interviews, ads, or viral moments. A
  visual may shape the group&apos;s image in photos and concepts, while
  the face of the group often carries public recognition beyond the
  stage.
</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kpop/what-is-center-in-kpop"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Read center guide →
              </Link>

              <Link
                href="/kpop/glossary"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Open K-pop glossary →
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean culture note
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Official position or casual fan word?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              In some groups, visual appears in profile charts or introduction
              materials almost like a formal role. In others, fans use it more
              loosely when a member&apos;s styling or photo presence fits a
              comeback especially well. Both uses exist, and they do not always
              match.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              For international fans, the helpful way to read visual is through
              context: what concept is the group pushing, what image are they
              showing publicly, and which member keeps appearing in the photos
              or moments that define that era. That approach keeps the word
              useful without turning it into objectifying language or a shallow
              ranking.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides to read next
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
