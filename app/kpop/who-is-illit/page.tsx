import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-illit`;

const pageTitle = "Who Is ILLIT? The Five-Member Group Behind 'Magnetic'";
const pageDescription =
  "A friendly HAEMIL guide to ILLIT, the five-member BELIFT LAB girl group behind 'Magnetic' — how they formed on R U Next?, why the song caught on, and where their sound has gone since.";

const relatedGuides = [
  {
    label: "Group page",
    title: "Explore ILLIT's group page",
    description:
      "See the current five-member lineup and find the ILLIT guides available on HAEMIL.",
    href: "/kpop/illit",
  },
  {
    label: "Member guide",
    title: "Meet WONHEE",
    description:
      "Read WONHEE's member guide and learn more about her place within ILLIT.",
    href: "/kpop/illit/wonhee",
  },
  {
    label: "K-pop Spotlight",
    title: "Watch WONHEE perform \"It's Me\"",
    description:
      "Take a closer look at WONHEE's expressions and timing in an official SBS Inkigayo fancam.",
    href: "/kpop/illit-wonhee-fancam-spotlight",
  },
  {
    label: "K-pop guide",
    title: "What is a rookie group in K-pop?",
    description:
      "Learn how the Korean music industry uses the term \"rookie\" during a group's early career.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-illit",
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

export default function WhoIsIllitPage() {
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
          name: "ILLIT",
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
          name: "Who is ILLIT?",
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
              Who Is ILLIT? The Five-Member Group Behind &quot;Magnetic&quot;
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              ILLIT arrived with one of those K-pop debuts that seemed to be
              everywhere at once. &quot;Magnetic&quot; was light, catchy, and
              easy to recognize within a few seconds—but the group&apos;s
              story did not begin with a viral chorus. Here is how YUNAH,
              MINJU, MOKA, WONHEE, and IROHA came together, why their debut
              caught on so quickly, and where their music has gone since
              then.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              How ILLIT came together
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                ILLIT is a five-member girl group under BELIFT LAB. The
                members are YUNAH, MINJU, MOKA, WONHEE, and IROHA, and they
                officially debuted on March 25, 2024.
              </p>

              <p>
                The group was formed through <em>R U Next?</em>, a survival
                program produced by BELIFT LAB and JTBC. Like many Korean
                idol survival shows, it let viewers watch trainees compete
                through performances before the final lineup was chosen.
              </p>

              <p>
                That background matters because ILLIT did not first appear
                as five completely unfamiliar faces on debut day. Some
                viewers had already followed the members through the
                program, debated the lineup, and watched them adjust from
                individual trainees into one team.
              </p>

              <p>
                For people discovering ILLIT from outside Korea, that part
                of the story can be easy to miss. &quot;Magnetic&quot; may
                have been the first thing they heard, but Korean viewers had
                already seen the group&apos;s beginning unfold on
                television.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Why &quot;Magnetic&quot; became so big
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                ILLIT debuted with the mini album <em>SUPER REAL ME</em> and
                its title track, &quot;Magnetic.&quot;
              </p>

              <p>
                The song stood out almost immediately. Its soft vocals and
                bright electronic beat gave it a dreamy feel, while the
                rhythm stayed playful enough to make the chorus stick after
                one listen. It sounded polished, but not heavy or
                intimidating.
              </p>

              <p>
                The choreography helped too. The small hand movements in the
                chorus were easy to recognize in a short clip, so
                &quot;Magnetic&quot; worked naturally as a dance challenge.
                You did not need to know the members or understand the
                lyrics to remember that one part.
              </p>

              <p>
                That combination—an instantly recognizable chorus, simple
                point choreography, and a visual style that felt youthful
                without looking ordinary—made the song especially suited to
                short-form video. The challenge spread quickly, but the song
                also held up outside those clips. &quot;Magnetic&quot;
                entered the Billboard Hot 100, making ILLIT one of the rare
                K-pop groups to reach the chart with a debut song.
              </p>

              <p>
                The chart result showed how far the song had travelled. The
                reason people kept returning to it was simpler: it was fun
                to replay.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Watch &quot;Magnetic&quot;
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              ILLIT — &quot;Magnetic&quot; Official MV
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              The official music video is the clearest place to see the idea
              behind ILLIT&apos;s debut. The song, choreography, styling, and
              slightly unreal visual world all arrive together rather than
              feeling like separate concepts.
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="Vk5-c_v4gMU"
                title="ILLIT Magnetic Official MV"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Official music video uploaded by HYBE LABELS.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">What ILLIT sounds like</h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                &quot;Magnetic&quot; introduced the group through light
                electronic production, soft voices, and a melody that seemed
                to bounce rather than push forward. That sound became
                closely associated with ILLIT, but the group has not simply
                remade its debut song each time.
              </p>

              <p>
                Later releases kept the youthful energy while changing its
                shape. &quot;Cherish (My Love)&quot; leaned further into the
                feeling of being openly absorbed in a crush, while songs
                such as &quot;Tick-Tack&quot; played with sharper rhythms and
                more restless movement. The group&apos;s music continued to
                feel cute and imaginative, but it was not limited to one
                version of cuteness.
              </p>

              <p>
                That is an important part of ILLIT&apos;s appeal. Their
                songs often deal with familiar emotions—liking someone,
                wondering how they feel, becoming impatient for an
                answer—but present them through unusual sounds, playful
                wording, and choreography made for close attention.
              </p>

              <p>
                By 2026, &quot;It&apos;s Me&quot; showed a bolder side of
                that same personality. The song appears on the group&apos;s
                fourth mini album, <em>MAMIHLAPINATAPAI</em>, which follows
                the complicated feelings that appear as a relationship grows
                closer.
              </p>

              <p>
                &quot;It&apos;s Me&quot; takes place after a first date,
                when the excitement has already happened but the
                relationship is still unclear. Instead of waiting quietly,
                the song has ILLIT speak up and ask to be chosen. Its lively
                electronic sound feels more direct and restless than
                &quot;Magnetic,&quot; but the emotion is still easy to
                understand: they like someone and no longer want to pretend
                otherwise.
              </p>

              <p>
                That change makes ILLIT more interesting than a group built
                around one viral debut. Their music is still colorful and
                playful, but it has gradually become more confident about
                saying what it wants.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Meet the five members</h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                ILLIT works because the five members do not present the same
                kind of energy.
              </p>

              <p>
                YUNAH often brings a stronger, more outgoing presence to the
                group. MINJU has a calmer tone that can soften the center of
                a song. MOKA is especially good at adjusting small
                expressions to fit a concept. WONHEE has an open,
                immediately readable style on camera, while IROHA brings
                precision and control to the group&apos;s dance line.
              </p>

              <p>
                Those differences are easier to notice once you watch a
                full-group performance rather than focusing only on one
                viral moment. &quot;Magnetic&quot; may have introduced ILLIT
                to a wide audience, but the members are what allow the group
                to move beyond that first impression.
              </p>

              <p>
                You do not need to learn every detail at once. Start with
                the music, notice which voice or performance style catches
                your attention, and follow that curiosity naturally.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              What does the name ILLIT mean?
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                The name ILLIT combines &quot;I will&quot; with &quot;it.&quot;
              </p>

              <p>
                According to BELIFT LAB, &quot;I will&quot; represents an
                independent and adventurous spirit, while &quot;it&quot;
                leaves room for the group to become something unique. The
                idea is that the five members are not restricted to one
                fixed image or possibility.
              </p>

              <p>
                Their fandom is called GLLIT, pronounced like
                &quot;glit.&quot; The name is connected to the word
                &quot;glitter,&quot; describing fans as the people who shine
                alongside ILLIT.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              Why ILLIT is worth following
            </h2>

            <div className="mt-5 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                ILLIT&apos;s debut success was not only the result of being
                attached to a large company or coming from a survival show.
                Those things gave the group attention, but
                &quot;Magnetic&quot; turned that attention into genuine
                public interest because the song was easy to remember and
                enjoyable to share.
              </p>

              <p>
                What has happened since then matters just as much. The group
                has kept the playful, electronic character that people first
                recognized while becoming more direct and varied in how it
                expresses young emotions.
              </p>

              <p>
                That makes ILLIT a useful group to watch beyond a single
                hit. Their story begins with <em>R U Next?</em> and
                &quot;Magnetic,&quot; but it is now moving into a stage
                where the five members are building a clearer identity of
                their own.
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
