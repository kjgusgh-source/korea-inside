import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/triples-kim-chaeyeon-baby-flower-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Why tripleS Kim ChaeYeon’s “Baby Flower” Facecam Feels So Easy to Remember";
const pageDescription =
  "A friendly HAEMIL spotlight on tripleS Kim ChaeYeon, her familiar Korean TV background, and why her “Baby Flower” close-up fancam is an easy first entry point into tripleS.";

const relatedGuides = [
  {
    label: "Member guide",
    title: "Kim ChaeYeon (tripleS)",
    description:
      "Start here if you want a simple member guide after watching ChaeYeon’s Baby Flower facecam.",
    href: "/kpop/triples/kim-chaeyeon",
  },
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
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/triples-kim-chaeyeon-baby-flower-fancam-spotlight",
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

export default function TriplesKimChaeYeonBabyFlowerFancamSpotlightPage() {
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
          name: "tripleS",
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
          name: "tripleS Kim ChaeYeon Baby Flower fancam spotlight",
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
              Why tripleS Kim ChaeYeon&apos;s &quot;Baby Flower&quot; Facecam
              Feels So Easy to Remember
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
              Kim ChaeYeon &quot;Baby Flower&quot; close-up fancam
            </h2>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="4USO1Vxxz18"
                title="Kim ChaeYeon Baby Flower close-up fancam"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=4USO1Vxxz18"
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
                Kim ChaeYeon does not feel like a completely unfamiliar face to
                many Korean viewers.
              </p>

              <p>
                Before tripleS, she was already known through childhood acting
                and Korean TV, especially BoNiHaNi, the kind of children&apos;s
                program many Koreans remember from after-school television. So
                when she appears in a tripleS fancam, the feeling is a little
                different. It is not only, &quot;Who is this new idol?&quot; It
                can also feel like, &quot;Oh, I remember her — and now she is
                standing on this kind of stage.&quot;
              </p>

              <p>
                That background makes her &quot;Baby Flower&quot; close-up
                fancam a useful entry point.
              </p>

              <p>
                tripleS is a very large group, and for new fans, that can feel
                overwhelming at first. You may not know where to begin, which
                unit to watch, or how to remember every member. A close-up
                fancam makes the process smaller. Instead of trying to learn
                the whole group at once, you can follow one face, one
                expression, and one stage mood.
              </p>

              <p>
                For ChaeYeon, &quot;Baby Flower&quot; works because it matches
                her bright image without making the performance feel too heavy.
                The charm is not about forcing a big reaction every second. It
                is more about how naturally she handles the camera when it stays
                close.
              </p>

              <p>That matters in an 얼빡직캠.</p>

              <p>
                In Korean K-pop spaces, 얼빡직캠 usually means a close-up fancam
                where the camera stays tight on the idol&apos;s face. It makes
                small expressions feel more important. A glance, a smile, a
                quick change in mood — those details can become the reason
                someone replays the video.
              </p>

              <p>
                ChaeYeon fits that format well because her expressions feel
                easy to follow. She has the kind of camera-friendly brightness
                that does not need too much explanation. For international fans
                who are just starting tripleS, that can be helpful. She gives
                you one simple first memory before the larger group becomes
                clearer.
              </p>

              <p>There is also a summer feeling around this kind of stage.</p>

              <p>
                Some fans imagine ChaeYeon fitting a future Korean summer
                festival mood, even WATERBOMB-style stages, because bright
                confidence and close-up-friendly expressions are the kind of
                details that work well in that setting. That does not mean
                &quot;Waterbomb goddess&quot; is her official title. It is
                better to read it as fan expectation — a mood people can
                picture, not a label that has already been fixed.
              </p>

              <p>That distinction is important.</p>

              <p>
                The interesting part is not about forcing a new nickname onto
                her. It is that her current image already gives fans something
                to imagine. A fresh stage, a bright facecam, a familiar Korean
                TV history, and a group that many people are still learning one
                member at a time.
              </p>

              <p>
                So if tripleS feels too big to approach at first, ChaeYeon is a
                good small door.
              </p>

              <p>
                Start with the &quot;Baby Flower&quot; facecam. Watch how she
                handles the close camera. Notice why she feels familiar to
                Korean viewers. Then, once one face becomes easy to remember,
                the wider world of tripleS becomes much easier to enter.
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
