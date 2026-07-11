import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/why-kpop-idols-feel-like-anime-characters`;

const pageTitle = "Why Do Some K-pop Idols Feel Like Anime Characters?";
const pageDescription =
  "A friendly HAEMIL guide to why Korean fans sometimes describe certain K-pop idols as anime-like, 2D-like, or almost like someone who stepped out of Oshi no Ko.";

const relatedGuides = [
  {
    label: "Solo spotlight",
    title: "Watch Choi Yena’s Catch Catch spotlight",
    description:
      "A friendly spotlight on Choi Yena’s close-up fancam, anime-idol stage image, and the small playful expressions that make the clip easy to replay.",
    href: "/kpop/choi-yena-catch-catch-fancam-spotlight",
  },
  {
    label: "K-pop term",
    title: "Learn what an 얼빡직캠 means",
    description:
      "A friendly guide to Korean close-up fancams, where one face, one expression, or one quick mood change can make a stage easy to replay.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
  },
  {
    label: "K-pop guide",
    title: "Learn the basic idea of fancams",
    description:
      "Learn why fancams matter, how fans use them, and why one focused stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
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
    canonical: "/kpop/why-kpop-idols-feel-like-anime-characters",
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

export default function WhyKpopIdolsFeelLikeAnimeCharactersPage() {
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
          name: "K-pop fan culture",
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
          name: "Why K-pop idols feel like anime characters",
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
              K-pop culture guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Why Do Some K-pop Idols Feel Like Anime Characters?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Sometimes Korean fans describe an idol with a phrase that sounds a
              little strange in English.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>&quot;She looks like a character.&quot;</p>

              <p>&quot;She feels 2D.&quot;</p>

              <p>&quot;She looks like she stepped out of an anime.&quot;</p>

              <p>
                It does not always mean the idol literally looks unreal. It is
                more about the feeling. The styling, the facial expressions, the
                camera timing, the colors, and the stage mood all come together
                so clearly that the idol starts to feel like a character you
                could recognize right away.
              </p>

              <p>
                For international fans, this can be a useful piece of Korean
                fan language to understand.
              </p>

              <p>
                In Korean fandom spaces, &quot;2D-like&quot; or
                &quot;anime-like&quot; is often used when someone has a very
                strong visual image. Not just a pretty face, but a face and mood
                that feel easy to remember. Big eyes, clear expressions, bright
                styling, sharp reactions, or a slightly unreal stage presence
                can all create that feeling.
              </p>

              <p>
                That is why people sometimes bring up Oshi no Ko when talking
                about certain idol images.
              </p>

              <p>
                Oshi no Ko is already tied to the idea of idol fantasy, stage
                brightness, and the strange feeling of someone looking almost
                too polished for real life. So when a K-pop idol gives off a
                very animated, character-like stage image, Korean fans may use
                that kind of comparison to explain the mood quickly.
              </p>

              <p>It is not usually a serious label.</p>

              <p>
                It is more like saying, &quot;This person has the kind of image
                that would make sense in an idol anime.&quot;
              </p>

              <p>That is different from simply saying someone is cute.</p>

              <p>
                Cute can be part of it, but it is not the whole thing. An
                anime-like idol image often comes from timing. The idol knows
                when to look at the camera, when to switch expressions, when to
                make a small reaction feel bigger, and when to turn a simple
                moment into something fans want to replay.
              </p>

              <p>Close-up fancams make this even easier to notice.</p>

              <p>
                In a full-stage video, you are watching the whole performance.
                You see the dance, the formation, the outfits, and the group
                shape. But in a close-up fancam, the camera stays with one
                person. Suddenly, every small eye movement or smile matters
                more. The idol&apos;s face becomes the center of the stage.
              </p>

              <p>That is where the anime-character feeling often appears.</p>

              <p>
                A member may not be doing the biggest move in the choreography.
                But the camera catches one perfect expression, and the clip
                suddenly feels like a character introduction scene. You
                understand the mood before you even know every detail about the
                idol.
              </p>

              <p>Choi Yena is a good example for HAEMIL readers.</p>

              <p>
                In her &quot;Catch Catch&quot; close-up fancam, the fun is not
                only the song or the outfit. It is the way her expressions keep
                moving. She looks bright, then mischievous, then focused, then
                playful again. The camera has something to catch almost every
                second.
              </p>

              <p>
                That is why the &quot;anime idol&quot; comparison makes sense as
                a feeling.
              </p>

              <p>
                Yena does not need to copy an anime character. Her stage
                already has that pop, color, and quick expression timing that
                makes the comparison easy. She feels like someone with a clear
                character image, and that is exactly what close-up fancams are
                good at showing.
              </p>

              <p>K-pop fans often remember idols through this kind of image.</p>

              <p>
                Of course, official facts matter. Group names, agencies,
                positions, albums, and debut dates are useful. But fandom does
                not grow only from profile information. A lot of it grows from
                small impressions: one fancam, one meme, one face, one stage
                outfit, one reaction that people keep talking about.
              </p>

              <p>
                That is why &quot;anime-like&quot; can be a compliment in fan
                language.
              </p>

              <p>
                It means the idol&apos;s image is strong enough to feel drawn.
                Not fake, but sharply remembered. Like someone whose character
                design is already clear in your head.
              </p>

              <p>For new K-pop fans, this is a helpful way to watch stages.</p>

              <p>
                Instead of asking only, &quot;Who sings the best?&quot; or
                &quot;Who dances the best?&quot;, you can also ask, &quot;Who
                leaves the clearest image behind?&quot; Sometimes that image is
                chic. Sometimes it is powerful. Sometimes it is soft. And
                sometimes it feels like an idol from an anime world stepped into
                a real stage.
              </p>

              <p>Once you notice that, Korean fan comments start to make more sense.</p>

              <p>They are not always trying to give a formal review.</p>

              <p>Sometimes they are just trying to describe a feeling quickly.</p>

              <p>&quot;This person feels like a character.&quot;</p>

              <p>And in K-pop, that can be enough to make someone unforgettable.</p>
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
