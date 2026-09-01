import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-enhypen`;

const pageTitle =
  "Who Is ENHYPEN? A Guide to Their First Comeback as Six";
const pageDescription =
  "A friendly HAEMIL guide to ENHYPEN, the six-member BELIFT LAB group, their 2026 comeback ‘Bloody Paradise,’ and what changed after Heeseung left the group.";

const relatedGuides = [
  {
    label: "Group page",
    title: "See the ENHYPEN group page",
    description:
      "The current six-member lineup, starter tags, and the members HAEMIL covers so far.",
    href: "/kpop/enhypen",
  },
  {
    label: "K-pop starter guide",
    title: "What does comeback mean in K-pop?",
    description:
      "A simple guide to teasers, title tracks, comeback stages, and why a comeback is a bigger deal than a normal release.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is a title track in K-pop?",
    description:
      "Learn how a title track like ‘Bloody Paradise’ gets chosen and why it represents the whole comeback.",
    href: "/kpop/what-is-a-title-track-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-enhypen",
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

export default function WhoIsEnhypenPage() {
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
          name: "ENHYPEN",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "BELIFT LAB",
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
          name: "Who is ENHYPEN?",
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
              Boy group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is ENHYPEN? A Guide to Their First Comeback as Six
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you have spent any time around K-pop conversations in the
              past few years, ENHYPEN is a name you have probably run into
              more than once, even if nobody explained exactly who they are.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                That gap is worth closing now, because the group just entered
                a new chapter. On August 21, 2026, ENHYPEN released their
                eighth mini album, &ldquo;THE SIN : BLISS,&rdquo; with the
                title track &ldquo;Bloody Paradise.&rdquo;
              </p>

              <p>
                This comeback matters for a reason that goes beyond a new
                song: it is the first release from ENHYPEN as a six-member
                group.
              </p>

              <p>
                ENHYPEN debuted in November 2020 with seven members, formed
                through I-LAND, a Korean survival show where trainees compete
                across weeks of broadcast episodes before a company puts the
                winning lineup together as a group. If K-pop is new to you,
                this kind of origin story is common &mdash; several
                well-known groups started the same way, built in public,
                episode by episode, before their first real stage.
              </p>

              <p>
                That original seven-member lineup lasted almost six years.
                Then, in March 2026, the group&apos;s agency, BELIFT LAB,
                announced that member Heeseung would be leaving ENHYPEN.
              </p>

              <p>
                The company&apos;s statement, quoted by Billboard, explained
                the decision followed &ldquo;in-depth discussions with each
                of the members about the future they envision and the
                direction of the team,&rdquo; and that Heeseung &ldquo;has
                his own distinct musical vision&rdquo; the label wanted to
                respect. Heeseung shared the news with fans directly, through
                a message on Weverse, the fan-communication app many K-pop
                groups use to post straight to fans.
              </p>

              <p>
                One detail is easy for newer fans to misread here: Heeseung
                leaving the group did not mean leaving the company. He stayed
                with BELIFT LAB and is expected to build a solo career there.
                That distinction matters: Heeseung left ENHYPEN but remained
                under BELIFT LAB and is preparing solo activities and a solo
                album there. In Korean idol culture, a
                member can step back from group promotions while remaining
                under the same agency, so his departure from ENHYPEN is a
                change in the group&apos;s lineup, not a full exit from the
                industry or the company.
              </p>

              <p>
                So &ldquo;Bloody Paradise&rdquo; is not only a comeback. It is
                the first time fans are hearing what six-member ENHYPEN
                sounds like.
              </p>

              <p>
                The current lineup is Jungwon, Jay, Jake, Sunghoon, Sunoo, and
                Ni-ki, with Jungwon serving as leader. The exact
                responsibilities of a K-pop leader vary by group.
              </p>

              <p>
                HAEMIL is not pointing to one member here as the easiest way
                into the group, the way a brand-new rookie act sometimes gets
                introduced through a single standout face. ENHYPEN has been
                active for six years, and there is not yet a clear,
                well-documented reason to push one member ahead of the rest.
              </p>

              <p>
                If you are trying to place ENHYPEN in the wider K-pop
                landscape, this comeback is a useful marker. A six-year group
                changing its member count is not a small internal update. It
                changes how fans talk about the group from here &mdash; how
                formations look on stage, how vocal lines get redistributed on
                a new title track, and how the group presents itself as six
                members instead of seven. &ldquo;THE SIN : BLISS&rdquo; is
                ENHYPEN&apos;s first album released as a six-member group.
              </p>

              <p>
                ENHYPEN&apos;s fandom is called ENGENE. According to BELIFT
                LAB, the name works two ways: ENGENE reads as fans being the
                &ldquo;engine&rdquo; that helps ENHYPEN move forward, and as
                EN + GENE, pointing to ENHYPEN and fans connecting,
                developing, and growing together.
              </p>

              <p>
                For now, &ldquo;Bloody Paradise&rdquo; is the clearest signal
                of where ENHYPEN stands: six members who spent years building
                a shared stage presence, and are now releasing a new title
                track together as a six-member group.
                That is usually a more interesting starting point than any
                single fact about the group.
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
