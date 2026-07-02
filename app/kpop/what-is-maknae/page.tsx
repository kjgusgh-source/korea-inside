import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-maknae`;

const pageTitle =
  "What Is Maknae in K-pop? | Meaning, Examples & Korean Fan Culture";
const pageDescription =
  "A friendly guide to what maknae means in K-pop, why the youngest member matters, and how fans use words like maknae and golden maknae.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-maknae",
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

export default function WhatIsMaknaePage() {
  const relatedGuides = getPublishedMemberGuides()
    .filter(
      ({ group, member }) =>
        group.id === "bts" ||
        member.id === "jang-wonyoung" ||
        member.id === "karina"
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
          name: "Maknae",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "Korean fan culture",
        },
        {
          "@type": "Thing",
          name: "Golden maknae",
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
          name: "What is maknae?",
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
              What is maknae in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In K-pop, maknae means the youngest member of a group. But fans do
              not use the word only like a simple age label. A maknae often has a
              special place in the team’s story: the member people watched grow,
              the one older members tease or protect, and sometimes the one who
              surprises everyone by becoming powerful on stage.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Korean word
                </p>
                <p className="mt-2 text-2xl font-semibold">막내</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  maknae — the youngest person in a group, family, team, or
                  social circle.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In K-pop
                </p>
                <p className="mt-2 text-2xl font-semibold">Youngest member</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The maknae can be cute, quiet, playful, serious, talented, or
                  unexpectedly confident.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Related word
                </p>
                <p className="mt-2 text-2xl font-semibold">Golden maknae</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A youngest member who seems good at almost everything.
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
                Maknae is about age, but fans often read it emotionally.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                In Korean, 막내 is a very normal word. You can use it for the
                youngest child in a family, the youngest employee in a workplace,
                or the youngest person in a friend group. K-pop fans use it the
                same way, but because idols grow up in front of fans, the word
                becomes more emotional.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                A group’s maknae might start as the shy youngest member, then
                slowly become confident, skilled, or even one of the strongest
                performers. Watching that change is part of why fans like the
                word.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What fans notice
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Growth:
                  </span>{" "}
                  fans enjoy seeing the youngest member mature over time.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Team chemistry:
                  </span>{" "}
                  older members may tease, protect, or spoil the maknae.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Gap charm:
                  </span>{" "}
                  a cute youngest member can suddenly look powerful on stage.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Identity:
                  </span>{" "}
                  being the maknae can become part of a member’s image.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Golden maknae
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              What does golden maknae mean?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Golden maknae means a youngest member who seems good at many
              things. In Korean, 황금 means gold, and 막내 means youngest member.
              The phrase became especially famous because of Jung Kook of BTS,
              who fans often connect with singing, dancing, performing, sports,
              and many other skills.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              The phrase does not mean every maknae has to be perfect. It is
              more like a fan nickname for a youngest member who feels talented,
              reliable, and surprisingly capable in many areas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kpop/bts/jung-kook"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Read Jung Kook guide →
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
              Why age words matter in Korean groups
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Korean has many words that show age and relationship. Words like
              hyung, unnie, noona, oppa, and maknae are not only about numbers.
              They also show how people relate to each other. That is why fans
              often pay attention to age order inside a K-pop group.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              For international fans, maknae is one of the easiest Korean fan
              words to learn first. Once you understand it, group dynamics in
              behind-the-scenes videos, interviews, and variety clips become
              easier to follow.
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