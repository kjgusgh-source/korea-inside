import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-hyorisoo`;

const pageTitle =
  "Who Is HYORISOO? A Friendly Guide to Girls' Generation's New Unit";
const pageDescription =
  "A friendly guide to HYORISOO (Girls' Generation-HRS), the new unit built from Hyoyeon, Yuri, and Sooyoung, their 'Skibidi' single, and how a K-pop unit differs from a brand-new group.";

const relatedGuides = [
  {
    label: "Group page",
    title: "Meet HYORISOO's three members",
    description:
      "See Hyoyeon, Yuri, and Sooyoung together on the HYORISOO group page, plus the starter tags HAEMIL is using so far.",
    href: "/kpop/hyorisoo",
  },
  {
    label: "K-pop term",
    title: "What does debut mean in K-pop?",
    description:
      "A friendly guide to K-pop debut meaning, pre-debut, trainees, rookie groups, and how debut differs from a comeback.",
    href: "/kpop/what-does-debut-mean-in-kpop",
  },
  {
    label: "K-pop term",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
  },
  {
    label: "Fan words",
    title: "K-pop Glossary",
    description:
      "A friendly guide to Korean K-pop fan words like bias, maknae, fancam, ending fairy, and eolppak-jikcam.",
    href: "/kpop/glossary",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-hyorisoo",
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

export default function WhoIsHyorisooPage() {
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
          name: "HYORISOO",
        },
        {
          "@type": "Thing",
          name: "Girls' Generation",
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
          name: "Who is HYORISOO?",
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

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Girl group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is HYORISOO? A Friendly Guide to Girls&apos; Generation&apos;s
              New Unit
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you know Girls&apos; Generation mainly as a full group,
              HYORISOO is a good example of how K-pop groups keep changing
              shape without actually going anywhere.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                HYORISOO is not a brand-new rookie act. It is a new unit from
                Girls&apos; Generation, built around three of its members —
                Hyoyeon, Yuri, and Sooyoung — and its debut single,
                &quot;Skibidi,&quot; arrives on August 31, 2026.
              </p>

              <p>
                If you have mostly followed groups that debut once and keep
                one fixed lineup, the word &quot;unit&quot; can be confusing
                at first. In K-pop, a unit usually means a smaller group of
                members from an already-existing act promoting together under
                their own name, while the full group still exists on its own.
                Girls&apos; Generation keeps going as a nine-member group;
                HYORISOO, officially credited as Girls&apos; Generation-HRS,
                is simply three of those members working on a separate
                project.
              </p>

              <p>
                That distinction matters here because Girls&apos; Generation
                is one of the names most people already connect to K-pop,
                even if they have never followed the group closely. A new
                unit from a group like that carries a different kind of
                attention than a rookie debut. It is less about introducing
                unfamiliar faces and more about watching three familiar
                members try something they have not done together before.
              </p>

              <p>
                HYORISOO also did not start out as a company-planned
                comeback. It grew out of Hyoyeon&apos;s own YouTube channel,
                Hyo&apos;s Level Up, where a recurring bit called
                &quot;가짜 김효연&quot; (roughly, &quot;Fake Kim
                Hyoyeon&quot;) had Hyoyeon, Yuri, and Sooyoung competing over
                roles like main vocal and center, half as a joke. That kind
                of jump — from a member&apos;s personal content into an
                official group activity — happens more often in Korean
                entertainment than a lot of international fans expect, where
                planned comebacks and casual online content usually feel like
                two separate worlds.
              </p>

              <p>
                Before the single even came out, the three performed together
                for the first time at the Cass Cool Festival on August 22,
                2026, giving fans an early look at how the unit would sound
                live.
              </p>

              <p>
                The single carries two tracks: the title song
                &quot;Skibidi&quot; and a B-side called &quot;Lowkey In
                Love.&quot; SM Entertainment has described &quot;Skibidi&quot;
                as a track that opens with a house beat before shifting into
                hip-hop, with lyrics about the three of them making a new
                path together.
              </p>

              <p>
                If the title made you do a double take, you are not alone.
                For a lot of people outside Korea, &quot;Skibidi&quot; mostly
                calls to mind the &quot;Skibidi Toilet&quot; internet meme,
                and when the song title was first announced in late July
                2026, that overlap did spark some mixed reactions among a
                small number of English-speaking fans online. Other fans
                pushed back, pointing out that a slightly cheeky title
                actually fits a unit that grew out of a comedy YouTube
                segment in the first place. Neither reaction represents an
                official position — it is a small, informal slice of the
                online conversation — but it is a good example of how the
                same word can land completely differently depending on which
                internet culture you are coming from.
              </p>

              <p>
                HAEMIL does not have individual member pages for HYORISOO
                yet, so the group page below is the best starting point for
                now. It lists Hyoyeon, Yuri, and Sooyoung together, and we
                will add more as the unit&apos;s promotions continue.
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
        </div>
      </main>
    </>
  );
}
