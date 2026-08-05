import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/le-sserafim-kim-chaewon-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Why LE SSERAFIM Leader Kim Chaewon Is an Easy Member to Start With";
const pageDescription =
  "A friendly HAEMIL spotlight on LE SSERAFIM leader Kim Chaewon, her “HOT” fancam, and why her IZ*ONE background and quick cute-to-sharp expression changes make her fancams worth watching first.";

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
    label: "Member guide",
    title: "Kim Chaewon (LE SSERAFIM)",
    description:
      "Start here if you want a simple member guide after watching Chaewon’s fancam.",
    href: "/kpop/le-sserafim/kim-chaewon",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/le-sserafim-kim-chaewon-fancam-spotlight",
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

export default function LeSserafimKimChaewonFancamSpotlightPage() {
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
          name: "LE SSERAFIM",
        },
        {
          "@type": "Thing",
          name: "K-pop fancam",
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
          name: "LE SSERAFIM Kim Chaewon fancam spotlight",
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
              K-pop Spotlight
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Why LE SSERAFIM Leader Kim Chaewon Is an Easy Member to Start
              With
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Some idols make you notice the group first. Others make you
              notice one member first, and the group comes into focus after
              that.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              For LE SSERAFIM, that member is often Kim Chaewon.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Not because she performs louder than anyone else. It is more
              about how naturally she moves from cute to sharp, in a way
              that lines up with her role as the group&apos;s leader.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official fancam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Kim Chaewon — &quot;HOT&quot; Fancam
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              STUDIO CHOOM&apos;s official fancam of Chaewon performing
              &quot;HOT&quot; keeps the camera close enough to catch her
              timing and expression changes clearly, without the rest of the
              stage pulling your attention away.
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="Xn5UNB6ZOA0"
                title="Kim Chaewon HOT Fancam"
              />
            </div>

            <p className="mt-3 text-sm text-[var(--muted)]">
              Official facecam uploaded by STUDIO CHOOM ORIGINAL.
            </p>

            <a
              href="https://www.youtube.com/watch?v=Xn5UNB6ZOA0"
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
                LE SSERAFIM is a five-member group from SOURCE MUSIC with a
                sharp, confident performance identity. If you are just
                starting to watch the group, Chaewon is a solid first member
                to follow — a lot of that comes from what she carries as
                leader.
              </p>

              <p>
                Before LE SSERAFIM, plenty of fans already knew her name from
                IZ*ONE, one of the project groups a lot of international fans
                used as their own entry point into K-pop. That history is
                part of why her fancams feel less like meeting someone new
                and more like watching a familiar face take on a sharper
                concept.
              </p>

              <p>
                That leadership shows up less in big gestures and more in
                small, steady choices — where she stands, how she times a
                reaction, the way the people around her seem to settle into
                place once she is on stage.
              </p>

              <p>
                The detail worth watching for is how fast she moves between
                a cute expression and a sharp one — quicker than a wide
                group shot usually lets you catch. The &quot;HOT&quot;
                fancam captures it clearly because the camera stays close on
                her the whole time. Once you have watched it, a full stage
                recording makes a lot more sense — you already know which
                change to look for.
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
