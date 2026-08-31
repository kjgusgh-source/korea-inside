import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-ourbirthday`;

const pageTitle =
  "Who Is OURBIRTHDAY? JYP's First New Girl Group Since NMIXX";
const pageDescription =
  "A friendly HAEMIL guide to OURBIRTHDAY, the seven-member multinational girl group from JYP's INNIT Entertainment, their debut single \"SQUEEZY,\" and what \"whip-hop\" means as a concept.";

const members = [
  {
    name: "Cho Hyejin",
    note: "Leader and main dancer, from Korea.",
  },
  {
    name: "Kuk Chorok",
    note: "From Korea.",
  },
  {
    name: "Shin Hyewon",
    note: "Vocalist, from Korea.",
  },
  {
    name: "U",
    note: "Rapper, from Japan.",
  },
  {
    name: "Baby",
    note: "Main dancer, from Taiwan.",
  },
  {
    name: "Achiraya",
    note: "Vocalist, from Thailand.",
  },
  {
    name: "Kilala",
    note: "Maknae and visual, from Japan.",
  },
];

const relatedGuides = [
  {
    label: "Boy group guide",
    title: "Who Is CORTIS?",
    description:
      "A friendly first guide to CORTIS, the new BIGHIT MUSIC boy group that K-pop fans are starting to watch.",
    href: "/kpop/who-is-cortis",
  },
  {
    label: "Girl group guide",
    title: "Who Is ILLIT?",
    description:
      "How YUNAH, MINJU, MOKA, WONHEE, and IROHA formed on R U Next?, and why \"Magnetic\" caught on so quickly.",
    href: "/kpop/who-is-illit",
  },
  {
    label: "K-pop guide",
    title: "What is a rookie group in K-pop?",
    description:
      "A simple guide to how K-pop fans discover rookie groups through first stages, short clips, fancams, and the first member they remember.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
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
    canonical: "/kpop/who-is-ourbirthday",
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

export default function WhoIsOurbirthdayPage() {
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
          name: "OURBIRTHDAY",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "INNIT Entertainment",
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
          name: "Who is OURBIRTHDAY?",
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
              Who Is OURBIRTHDAY? JYP&apos;s First New Girl Group Since NMIXX
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you have not heard of OURBIRTHDAY yet, that is fair. The
              group only debuted on August 19, 2026, which makes them one of
              the newest names in K-pop right now. Here is who they are, why
              JYP fans in particular are paying attention, and where to start
              if you want to check them out.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              How OURBIRTHDAY came together
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                OURBIRTHDAY (often shortened to OBD) is a seven-member girl
                group under INNIT Entertainment, a sub-label of JYP
                Entertainment. That JYP connection is the first thing worth
                understanding, because it is a bigger deal than it might
                sound.
              </p>

              <p>
                JYP last debuted a new girl group in 2022, with NMIXX. So
                OURBIRTHDAY is the company&apos;s first new girl group in
                about four years. For a company known for TWICE and ITZY,
                that kind of gap builds a certain amount of attention before
                a single song is even released — fans of the label had been
                waiting to see what kind of group would come next.
              </p>

              <p>
                Before the official debut, the group put out a pre-release
                track called &quot;HUNGRY&quot; on July 22, 2026, released in
                two separate versions split between different member units.
                That is a fairly common rollout in K-pop now: let people hear
                smaller groupings of the lineup before the full team performs
                together. It gives new fans a softer entry point instead of
                seven unfamiliar names arriving all at once.
              </p>

              <p>
                The full debut came on August 19, 2026, with the single album{" "}
                <em>Our Birthday</em>. The title track is &quot;SQUEEZY,&quot;
                and the album also includes the song &quot;Our Birthday&quot;
                along with two versions of &quot;HUNGRY.&quot;
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Meet the seven members
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                OURBIRTHDAY is a multinational lineup: three members from
                Korea, two from Japan, one from Thailand, and one from
                Taiwan. The following breakdown is based on fan-compiled
                profiles rather than an official company chart, so treat the
                roles as a helpful starting point rather than a fixed
                record.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-4"
                >
                  <p className="text-lg font-semibold text-[var(--text)]">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    {member.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to K-pop, a lineup like this can be a lot to
              memorize on day one. You do not need to learn all seven names
              in one sitting. Watch the &quot;SQUEEZY&quot; video below once,
              see who your eyes keep going back to, and start there. That is
              usually how a new group becomes familiar in Korea too — piece
              by piece, not all at once.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              A multinational team with its own genre name
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                A Korea-Japan-Thailand-Taiwan lineup is not unusual in K-pop
                anymore, but it is still worth explaining if you are new to
                the industry. Companies like JYP run trainee systems across
                several Asian markets, and a multinational lineup is
                partly a promotion strategy: members who already speak
                Japanese or Thai can front local promotion, interviews, and
                fan events in those countries once the group is established.
                So when you see a group with members from four countries,
                that usually reflects years of company planning, not
                coincidence.
              </p>

              <p>
                OURBIRTHDAY also describes its own sound as &quot;whip-hop,&quot;
                a genre label the company created rather than an existing
                music term. This kind of self-made genre name shows up a lot
                in K-pop — it is a way for a new group to claim a specific
                identity early, instead of being described only as
                &quot;another JYP girl group.&quot; Whether the label sticks
                usually depends on whether later songs keep the sound
                consistent enough for fans to recognize it as its own thing.
              </p>

              <p>
                The name OURBIRTHDAY itself is usually explained in
                fan-compiled sources as the idea that being together with
                these members makes every day feel like a birthday — a
                small, upbeat concept rather than a deep backstory. HAEMIL
                has not been able to confirm this directly through an
                official company statement, so take it as the commonly
                repeated explanation rather than a confirmed fact.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Watch &quot;SQUEEZY&quot;
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              OURBIRTHDAY — &quot;SQUEEZY&quot; Official MV
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              This is the easiest place to start. The title track gives you
              the group&apos;s sound, styling, and choreography together in
              one place, which is usually more useful than reading a member
              list first.
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="f5W2rZ1FdBQ"
                title="OURBIRTHDAY SQUEEZY Official MV"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Official music video uploaded by JYP Entertainment.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="space-y-6 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                It is still early days for OURBIRTHDAY. A debut week brings a
                lot of attention, but it takes a few more releases before a
                group&apos;s identity really settles. For now, what makes
                them worth watching is fairly simple: a major label taking
                its first new girl-group swing in four years, a genuinely
                multinational lineup, and a debut concept confident enough to
                invent its own genre name.
              </p>

              <p>
                If OURBIRTHDAY is new to you, you are not behind. You are
                simply meeting them close to the beginning.
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
  )/
}
