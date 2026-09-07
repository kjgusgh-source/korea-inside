import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-pentagon`;

const pageTitle =
  "Who Is PENTAGON? A Friendly Guide to Their 10th Anniversary Comeback";
const pageDescription =
  "A friendly HAEMIL guide to PENTAGON's 10th anniversary comeback, the new single 'Coward,' their seven-member lineup, and what has changed since their debut.";

const relatedGuides = [
  {
    label: "K-pop term",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
  },
  {
    label: "K-pop term",
    title: "What is a title track in K-pop?",
    description:
      "A friendly guide to what a title track means in K-pop, how it differs from B-sides, and why one song usually leads a comeback.",
    href: "/kpop/what-is-a-title-track-in-kpop",
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
    canonical: "/kpop/who-is-pentagon",
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

export default function WhoIsPentagonPage() {
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
          name: "PENTAGON",
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
          name: "Who is PENTAGON?",
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
              Who Is PENTAGON? A Friendly Guide to Their 10th Anniversary
              Comeback
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If PENTAGON has been off your radar for a while, their 2026
              comeback is a good moment to catch up — and also to sort out
              what has and has not changed.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                PENTAGON has been around for a decade, but the version of the
                group meeting fans on September 11, 2026, is not quite the
                one you might remember from a few years ago. The comeback
                single, &quot;Coward&quot; (겁쟁이), marks the group&apos;s
                10th anniversary, and depending on how closely you have
                followed them, both the lineup and the people running things
                behind the scenes may have changed more than you expect.
              </p>

              <p>
                PENTAGON debuted on October 10, 2016, through Mnet&apos;s
                survival show &quot;Pentagon Maker,&quot; where the members
                were narrowed down in front of a live audience instead of
                being announced all at once by the company. That detail
                matters a little for understanding the group&apos;s early
                identity: fans who watched the show already knew each
                member&apos;s strengths and personality before the official
                debut, which is part of why PENTAGON built a close
                relationship with its fandom, known as Universe, early on.
              </p>

              <p>
                The original ten-member lineup did not stay intact for long.
                E&apos;Dawn left the group and the agency in November 2018,
                and PENTAGON has promoted as a nine-member act since. If you
                are catching up on the group now, that is worth knowing
                before anything else, since older PENTAGON content will still
                show a member who is no longer part of the group.
              </p>

              <p>
                What tends to stand out about PENTAGON, more than any single
                era or release, is how much of their own music several
                members write and produce themselves. Hui and Yeo One in
                particular have writing and producing credits across the
                group&apos;s discography, which is not the norm for every
                K-pop act and is part of why longtime fans talk about
                PENTAGON as a group that shapes its own sound rather than
                only performing it.
              </p>

              <p>
                For the 10th anniversary comeback, PENTAGON is promoting as a
                seven-member group: Jinho, Hui, Hongseok, Shinwon, Yeo One,
                Kino, and Wooseok. Yanan and Yuto are not part of this
                particular activity. Coverage around the announcement has
                used the word &quot;departure&quot; for both of them, but it
                has not been made fully clear yet whether that means a
                permanent exit from the group or simply that they are sitting
                out this comeback and tour — so it is worth treating that
                detail as unsettled for now rather than final.
              </p>

              <p>
                One detail that can be confusing if you look at PENTAGON&apos;s
                official accounts right now: the social media handles across
                X, Instagram, YouTube, and TikTok still read
                &quot;CUBE_PTG,&quot; tying the group to Cube Entertainment,
                the agency that has managed PENTAGON since debut. But several
                outlets have reported that this 10th anniversary comeback is
                actually being led by NAKED, a new one-person agency founded
                by member Kino. In Korea, it is not unusual for an idol to
                set up their own label once they have enough experience and
                creative control, but that step usually comes with a clean
                break from the original company. Here, the handles have not
                caught up with that shift, so PENTAGON&apos;s exact company
                situation right now sits somewhere between the two, and it is
                not something HAEMIL can state with full confidence yet. If
                you notice both names attached to the group, that mismatch is
                the reason why.
              </p>

              <p>
                The new single, &quot;Coward,&quot; is set for release on
                September 11, 2026, at 6 PM KST. Reports describe the
                comeback as arriving alongside PENTAGON&apos;s first tour in
                three years. Since the single had not come out yet at the
                time of this guide, we could not check the official music
                video — we will add it here once it is live on the
                group&apos;s channel.
              </p>

              <p>
                HAEMIL does not have individual profile pages for
                PENTAGON&apos;s members yet, so this page is the starting
                point for now. We plan to add more as the comeback and tour
                continue, including a clearer read on the group&apos;s
                company situation once official sources catch up, and the
                music video once it is out.
              </p>

              <p>
                What makes this comeback worth a look is not really the
                10-year milestone by itself. It is that PENTAGON is
                returning under conditions that look meaningfully different
                from where fans last saw them: a smaller lineup, a
                member-led label sitting alongside the one they came up in,
                and a decade of mostly self-written material behind them.
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
