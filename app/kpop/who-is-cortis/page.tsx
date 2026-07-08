import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-cortis`;

const pageTitle = "K-pop Rookie Guide: Who Is CORTIS?";
const pageDescription =
  "A friendly starter guide to CORTIS, the BIGHIT MUSIC boy group, with a simple way to understand the members, the debut context, and why Keonho’s fancam can be an easy first door.";

const relatedGuides = [
  {
    label: "Member guide",
    title: "Keonho (CORTIS)",
    description:
      "Start here if you first noticed Keonho through a fancam, stage clip, or Korean fan nickname.",
    href: "/kpop/cortis/keonho",
  },
  {
    label: "K-pop Spotlight",
    title:
      "Who Is CORTIS Keonho, the “French Fry Boy” Fans Keep Noticing?",
    description:
      "A closer look at Keonho’s JoyRide fancam, nickname hook, and why he can be an easy first member to remember.",
    href: "/kpop/cortis-keonho-fancam-spotlight",
  },
  {
    label: "K-pop guide",
    title: "What Is a Fancam in K-pop?",
    description:
      "Learn why fancams matter and how one focused stage clip can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-cortis",
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

export default function WhoIsCortisPage() {
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
          name: "CORTIS",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "BIGHIT MUSIC",
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
          name: "Who is CORTIS?",
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
              Rookie guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is CORTIS?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              CORTIS is one of those rookie groups where the company name makes
              people look once, but the small details make people stay. If you
              have seen Keonho&apos;s fancam, heard the BIGHIT MUSIC context, or
              simply wondered why the name CORTIS keeps appearing in K-pop
              spaces, this is a simple place to start.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                CORTIS is one of those rookie groups where the company name
                makes people look once, but the small details make people stay.
              </p>

              <p>
                For international fans, the first thing they may hear is simple:
                CORTIS is a five-member boy group from BIGHIT MUSIC. The members
                are MARTIN, JAMES, JUHOON, SEONGHYEON, and KEONHO.
              </p>

              <p>
                That already gives the group a certain kind of attention. BIGHIT
                MUSIC is not a random name in K-pop. It is the company behind BTS
                and TOMORROW X TOGETHER, so a new boy group from the label
                naturally makes Korean and international fans curious.
              </p>

              <p>But curiosity is only the first click.</p>

              <p>
                A company name can make people check a group once. It does not
                automatically make someone remember the members. That usually
                happens through something smaller: one stage, one short clip, one
                nickname, one member whose face becomes easy to recognize.
              </p>

              <p>That is a better way to understand CORTIS right now.</p>

              <p>
                CORTIS debuted in 2025, and many fans are still learning where to
                begin. Some people will start with the official music video. Some
                will start with a performance. Some will start with a member clip
                that appears in their feed before they even know the full group.
              </p>

              <p>That is very normal for rookie K-pop.</p>

              <p>
                When a group is new, fans do not always enter through the whole
                team at once. They enter through a door. One member becomes the
                first name they remember, and then the rest of the group slowly
                becomes clearer.
              </p>

              <p>For HAEMIL readers, Keonho is one useful door into CORTIS.</p>

              <p>
                That does not mean he is the only member to watch. It means his
                current clips make the group easier to approach. A fancam can do
                that because it removes some of the noise. Instead of trying to
                memorize five faces at once, you can follow one performer for a
                few minutes.
              </p>

              <p>
                This is why Keonho&apos;s &quot;JoyRide&quot; fancam matters in
                the CORTIS entry path. It gives new fans a simple first step:
                watch one member, notice the stage energy, and see whether you
                want to click another CORTIS video after it ends.
              </p>

              <p>
                The group itself also has an interesting rookie image. CORTIS
                does not only feel like a polished boy group being introduced
                from far away. The members are also being discovered through short
                clips, stage moments, fan nicknames, and casual details. That
                makes the group feel easier to talk about.
              </p>

              <p>
                This is important because new K-pop groups can feel overwhelming.
                There are names to learn, songs to catch up on, official videos,
                shorts, fancams, fandom jokes, and people online already acting
                like you should know everything.
              </p>

              <p>You do not need to know everything first.</p>

              <p>Start with the basics.</p>

              <p>
                CORTIS has five members: MARTIN, JAMES, JUHOON, SEONGHYEON, and
                KEONHO. The group comes from BIGHIT MUSIC. They debuted in 2025.
                If you want one member-focused first step, Keonho&apos;s fancam
                is a good place to begin.
              </p>

              <p>
                After that, move sideways. Watch a full CORTIS stage. Go back to
                the group performance. Notice which member your eyes follow next.
                That is usually how a rookie group becomes less confusing.
              </p>

              <p>
                The fun part is that every fan&apos;s entry point can be
                different. One person may notice MARTIN first. Another may notice
                JAMES, JUHOON, or SEONGHYEON. Someone else may remember Keonho
                because of the &quot;French Fry Boy&quot; nickname or a stage
                clip that stayed in their head.
              </p>

              <p>
                That is not a problem. That is how K-pop discovery works now.
              </p>

              <p>
                A group becomes familiar through many small doors. CORTIS is still
                new enough that those doors are being built in real time: official
                stages, member clips, fan jokes, performance edits, and the kind
                of short moments that make a name easier to remember.
              </p>

              <p>
                So if you are new to CORTIS, do not treat this like homework. You
                do not need to memorize every detail in one sitting.
              </p>

              <p>Start with one thing.</p>

              <p>
                If you like performance clips, start with Keonho&apos;s
                &quot;JoyRide&quot; fancam. If you prefer group context, start
                with a full CORTIS stage. If you like learning members slowly,
                use the five names as a map and let one clip lead to the next.
              </p>

              <p>
                That is the easiest way to enter a rookie group without feeling
                lost.
              </p>

              <p>
                CORTIS is not interesting only because of the BIGHIT MUSIC name.
                That name explains why people looked. The more interesting
                question is what makes people keep clicking.
              </p>

              <p>
                For now, the answer seems simple: a new group, clear member entry
                points, and enough small moments for fans to start choosing who
                they want to follow first.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to know first
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>CORTIS is a five-member boy group from BIGHIT MUSIC.</li>
                <li>
                  The members are MARTIN, JAMES, JUHOON, SEONGHYEON, and KEONHO.
                </li>
                <li>The group debuted in 2025.</li>
                <li>
                  For new fans, member-focused clips can make the group easier to
                  enter.
                </li>
                <li>
                  Keonho&apos;s &quot;JoyRide&quot; fancam is one easy first door,
                  especially if you prefer learning a group through stage clips.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Why this works as a HAEMIL rookie guide
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                This is not meant to be a full encyclopedia page. It is a simple
                starting point for readers who have seen the name CORTIS, noticed
                Keonho, or heard that BIGHIT MUSIC has a newer boy group. The
                best way to start is not to memorize everything. Start with one
                clip, one member, and one reason to click the next video.
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
