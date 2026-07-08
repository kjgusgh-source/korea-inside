import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/kwon-eunbi-waterbomb-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Why Kwon Eunbi Is Called Korea’s “Waterbomb Goddess”";
const pageDescription =
  "A friendly HAEMIL spotlight on Kwon Eunbi, WATERBOMB Korea, and how a summer festival fancam helped reshape the way Korean fans remember her stage image.";

const relatedGuides = [
  {
    label: "K-pop guide",
    title: "What Is a Fancam in K-pop?",
    description:
      "Learn why fancams matter, how fans use them, and why one focused stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop guide",
    title: "K-pop Glossary for New Fans",
    description:
      "A beginner-friendly guide to Korean K-pop words and fan terms you will see around fancams, stages, and member clips.",
    href: "/kpop/glossary",
  },
  {
    label: "Fancam spotlight",
    title:
      "Why tripleS Kim ChaeYeon’s “Baby Flower” Facecam Feels So Easy to Remember",
    description:
      "A close-up look at Kim ChaeYeon’s Baby Flower facecam, her familiar Korean TV background, and why she is an easy first door into tripleS.",
    href: "/kpop/triples-kim-chaeyeon-baby-flower-fancam-spotlight",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/kwon-eunbi-waterbomb-fancam-spotlight",
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

export default function KwonEunbiWaterbombFancamSpotlightPage() {
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
          name: "Kwon Eunbi",
        },
        {
          "@type": "Thing",
          name: "WATERBOMB",
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
          name: "Kwon Eunbi WATERBOMB fancam spotlight",
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
              K-pop Spotlight
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Why Kwon Eunbi Is Called Korea&apos;s &quot;Waterbomb
              Goddess&quot;
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {pageDescription}
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official fancam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Kwon Eunbi &quot;Crazy in Love&quot; WATERBOMB fancam
            </h2>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="CfwQ2fe7LH0"
                title="Kwon Eunbi Crazy in Love WATERBOMB fancam"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=CfwQ2fe7LH0"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Watch on YouTube →
            </a>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Kwon Eunbi is one of the clearest examples of how a Korean
                summer festival can change the way people remember an artist.
              </p>

              <p>
                Before the WATERBOMB nickname, many K-pop fans already knew her
                as a former IZ*ONE member and a solo singer. But in Korea, one
                strong festival moment can give an artist a new public image
                very quickly. For Eunbi, WATERBOMB became that moment.
              </p>

              <p>
                That is why people call her Korea&apos;s &quot;Waterbomb
                Goddess.&quot;
              </p>

              <p>
                The phrase can sound dramatic in English, so it is worth
                understanding the Korean context. WATERBOMB is not a normal music
                show stage. It is a summer festival built around live
                performance, water, crowd energy, and short clips that spread
                fast online. The stage does not only show choreography. It shows
                whether an artist can hold attention in a hot, loud, outdoor
                festival setting.
              </p>

              <p>
                Eunbi&apos;s WATERBOMB image worked because she looked confident
                inside that setting.
              </p>

              <p>
                The point is not to reduce her to appearance. That would miss
                why the moment became so memorable. What Korean fans responded
                to was the full stage image: the summer mood, the confidence, the
                way she handled the crowd, and the way the clips made her solo
                identity feel clearer.
              </p>

              <p>In K-pop, that kind of moment can matter a lot.</p>

              <p>
                A music show performance can show polish. A festival fancam can
                show presence. It feels less controlled, more direct, and easier
                for casual viewers to share. That is why WATERBOMB fancams often
                travel outside the usual fandom space. Someone who does not
                follow an artist closely may still click the clip because the
                stage image is instantly clear.
              </p>

              <p>For Eunbi, that visibility helped people see her differently.</p>

              <p>
                She was not only &quot;a former IZ*ONE member.&quot; She became
                a solo performer with a strong summer festival identity. That
                shift is important. Many idols are known first through a group,
                but solo recognition often needs one moment where the public can
                describe the artist in a simple way. For Eunbi, &quot;Waterbomb
                Goddess&quot; became that shortcut.
              </p>

              <p>
                This &quot;Crazy in Love&quot; fancam fits that story because it
                connects her to the exact kind of stage where the nickname makes
                sense. The performance is not just about a song. It is about the
                environment around it: water, crowd noise, summer styling, and a
                performer who understands how to make the moment feel bigger.
              </p>

              <p>
                For HAEMIL readers, the useful way to read this is simple.
              </p>

              <p>
                WATERBOMB is a place where K-pop performance becomes festival
                culture. Kwon Eunbi is one of the artists who made that
                connection easy to understand. Her fancams show how a single
                festival image can travel through Korean pop culture and stay
                attached to an artist&apos;s name.
              </p>

              <p>
                So when Korean fans call her &quot;Waterbomb Goddess,&quot; it
                is not just a random compliment.
              </p>

              <p>
                It is a nickname built from a very specific kind of stage
                memory: summer, water, confidence, viral clips, and the moment a
                solo artist became much easier for the public to recognize.
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
