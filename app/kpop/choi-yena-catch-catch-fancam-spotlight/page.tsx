import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/choi-yena-catch-catch-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Why Choi Yena’s “Catch Catch” Fancam Feels Like an Anime Idol Moment";
const pageDescription =
  "A friendly HAEMIL spotlight on Choi Yena’s “Catch Catch” close-up fancam, the anime-idol feeling around her stage image, and why her playful expressions are so easy to replay.";

const relatedGuides = [
  {
    label: "K-pop term",
    title: "Learn what an 얼빡직캠 means",
    description:
      "A friendly guide to Korean close-up fancams, where one face, one expression, or one quick mood change can make a stage easy to replay.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
  },
  {
    label: "K-pop culture guide",
    title: "Why some idols feel like anime characters",
    description:
      "A friendly guide to the Korean fan feeling behind anime-like idol images, 2D-style visuals, close-up fancams, and Oshi no Ko comparisons.",
    href: "/kpop/why-kpop-idols-feel-like-anime-characters",
  },
  {
    label: "K-pop guide",
    title: "Learn the basic idea of fancams",
    description:
      "Learn why fancams matter, how fans use them, and why one focused stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "Solo spotlight",
    title: "Compare with Kwon Eunbi’s Waterbomb spotlight",
    description:
      "A friendly look at Kwon Eunbi, WATERBOMB Korea, and how one summer festival image reshaped her solo stage identity.",
    href: "/kpop/kwon-eunbi-waterbomb-fancam-spotlight",
  },
  {
    label: "K-pop guide",
    title: "Open the K-pop glossary",
    description:
      "A beginner-friendly guide to Korean K-pop words and fan terms you will see around fancams, stages, and member clips.",
    href: "/kpop/glossary",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/choi-yena-catch-catch-fancam-spotlight",
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

export default function ChoiYenaCatchCatchFancamSpotlightPage() {
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
          name: "Choi Yena",
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
          name: "Choi Yena Catch Catch fancam spotlight",
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
              Why Choi Yena&apos;s &quot;Catch Catch&quot; Fancam Feels Like an
              Anime Idol Moment
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
              Choi Yena &quot;Catch Catch&quot; close-up fancam
            </h2>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="bOVZcRK1fyw"
                title="Choi Yena Catch Catch close-up fancam"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=bOVZcRK1fyw"
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
                If you watch Choi Yena&apos;s &quot;Catch Catch&quot; close-up
                fancam, the first thing you may notice is not a big dance move.
              </p>

              <p>It is the image.</p>

              <p>
                The bright styling, the quick expressions, the playful mood,
                and the way she looks into the camera all create a very specific
                feeling. In Korea, this is the kind of idol image people might
                describe as feeling like an anime character — almost like
                someone who stepped out of Oshi no Ko.
              </p>

              <p>That does not mean Yena is copying an anime.</p>

              <p>
                It means the stage has that kind of pop, sparkle, and slightly
                unreal idol energy. The face is expressive. The mood changes
                quickly. The camera feels close enough that every small reaction
                becomes part of the performance.
              </p>

              <p>That is why this fancam works so well.</p>

              <p>
                Choi Yena, often styled as YENA, has always had a bright and
                playful image, but &quot;bright&quot; alone is not enough to
                explain her. A lot of idols can smile on stage. What makes Yena
                memorable is that her expressions feel alive. She does not just
                hold one cute face for the whole song. She keeps changing the
                temperature of the stage.
              </p>

              <p>One second, she looks sweet.</p>

              <p>The next second, she looks mischievous.</p>

              <p>
                Then she catches the camera again like she knows exactly what
                fans are waiting for.
              </p>

              <p>That is the fun of watching her close-up.</p>

              <p>
                A full-stage video shows the choreography and the whole
                performance shape. A close-up fancam shows something smaller and
                more personal. It lets you see how an idol handles the camera
                when there is nowhere to hide. For Yena, that close camera feels
                natural because her stage charm is built from tiny reactions.
              </p>

              <p>
                This is also why &quot;Catch Catch&quot; feels like a good title
                for this kind of fancam.
              </p>

              <p>
                The song already has a playful feeling, and the camera keeps
                catching little pieces of her mood. A smile. A glance. A quick
                switch. A face that feels almost too animated to be still.
                These are the parts fans tend to replay, not because they are
                complicated, but because they are easy to enjoy again.
              </p>

              <p>
                For international fans, this is a useful way to understand Yena
                as a solo artist.
              </p>

              <p>
                Many people first knew her as a former IZ*ONE member. That
                background still matters, but a solo close-up fancam shows
                something different. It shows how she can fill the screen by
                herself. She does not need a large group around her for the
                stage to feel busy. Her face, timing, and playful energy already
                give the camera a lot to follow.
              </p>

              <p>
                That is why comparing her to an anime idol makes sense as a
                feeling.
              </p>

              <p>
                It is not about saying she is fictional or perfect. It is about
                the kind of idol fantasy the stage creates. Bright colors, quick
                charm, camera awareness, and a character-like image that stays
                in your head after the clip ends.
              </p>

              <p>K-pop fans often remember idols this way.</p>

              <p>Not only through official profiles.</p>

              <p>Not only through positions or album facts.</p>

              <p>
                Sometimes one short fancam gives a clearer first impression than
                a long biography. You watch the clip and think, &quot;Ah, I get
                what kind of performer she is.&quot;
              </p>

              <p>Yena&apos;s &quot;Catch Catch&quot; fancam does that.</p>

              <p>
                It makes her feel easy to recognize. Not just because she is
                cute. Not just because she is energetic. But because she knows
                how to make small expressions feel like little events.
              </p>

              <p>
                That is the kind of stage detail a close-up fancam is made for.
              </p>

              <p>And once you notice it, the replay button makes a lot more sense.</p>
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
