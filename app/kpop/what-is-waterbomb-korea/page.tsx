import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-waterbomb-korea`;

const pageTitle =
  "What Is WATERBOMB Korea? The Summer Festival Behind Viral K-pop Fancams";
const pageDescription =
  "A friendly HAEMIL guide to WATERBOMB Korea, the summer music festival where K-pop stages, water, crowd energy, and viral fancams come together.";

const relatedGuides = [
  {
    label: "Festival spotlight",
    title: "Why Kwon Eunbi Is Called Korea’s “Waterbomb Goddess”",
    description:
      "A friendly look at Kwon Eunbi, WATERBOMB Korea, and how one summer festival image reshaped her solo stage identity.",
    href: "/kpop/kwon-eunbi-waterbomb-fancam-spotlight",
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
    canonical: "/kpop/what-is-waterbomb-korea",
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

export default function WhatIsWaterbombKoreaPage() {
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
          name: "WATERBOMB Korea",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "K-pop fan culture",
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
          name: "What is WATERBOMB Korea?",
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
              What Is WATERBOMB Korea? The Summer Festival Behind Viral K-pop
              Fancams
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you follow K-pop for a while, you will eventually hear someone
              mention WATERBOMB.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                At first, it may sound like just another music festival. But in
                Korea, WATERBOMB has become something more specific: a summer
                stage where K-pop, water, heat, crowd noise, and viral fancams
                all meet in one place.
              </p>

              <p>
                That is why WATERBOMB clips often feel different from normal
                music show videos.
              </p>

              <p>
                A regular music show stage is polished. The camera angles are
                planned, the lighting is clean, and the idol performs inside a
                controlled TV setting. WATERBOMB feels looser and louder. The
                stage is outside, the crowd is close, and water is part of the
                whole atmosphere. It makes the performance feel less like a
                broadcast and more like a summer memory people want to replay.
              </p>

              <p>This is also why WATERBOMB fancams spread so easily.</p>

              <p>
                You do not always need to know the full group, the full comeback
                story, or every detail of an artist&apos;s career. Sometimes one
                short clip is enough. The performer looks confident, the crowd
                reacts, the stage feels hot and alive, and suddenly people start
                asking, &quot;Who is that?&quot;
              </p>

              <p>
                In Korea, that kind of moment can change an artist&apos;s image
                very quickly.
              </p>

              <p>
                Kwon Eunbi is one of the clearest examples. Many fans already
                knew her as a former IZ*ONE member and solo singer, but WATERBOMB
                gave her a new public image. The nickname &quot;Waterbomb
                Goddess&quot; did not come from a normal music show stage. It
                came from the way people remembered her in that summer festival
                setting: confident, direct, and easy to recognize even from a
                short clip.
              </p>

              <p>That is the important part.</p>

              <p>
                When Korean fans talk about WATERBOMB, they are not only talking
                about water or styling. They are talking about stage presence.
                Can the artist hold attention in a loud outdoor festival? Can
                they make the crowd react? Can one moment become clear enough
                that casual viewers remember it later?
              </p>

              <p>For K-pop idols, that can matter a lot.</p>

              <p>
                Music shows are important for fandoms. Festivals are different.
                They can reach people who are not already fans. Someone may not
                search for a group&apos;s official stage, but they might click a
                WATERBOMB clip because it looks fun, intense, or very
                Korean-summer-coded. That small click can become the first step
                into an artist.
              </p>

              <p>This is why WATERBOMB works well for HAEMIL readers too.</p>

              <p>
                If you are new to Korean pop culture, WATERBOMB is a good way to
                understand how K-pop lives outside TV shows. It is not only about
                choreography. It is about weather, crowds, festival styling,
                fan cameras, online clips, and the feeling that one performance
                can suddenly become the thing everyone talks about.
              </p>

              <p>Of course, not every WATERBOMB stage becomes viral.</p>

              <p>
                Some performances are just fun festival stages. Some clips stay
                inside the fandom. But when the right artist, song, mood, and
                crowd reaction come together, WATERBOMB can create a very strong
                public memory.
              </p>

              <p>That is why people keep paying attention to it every summer.</p>

              <p>
                For new fans, the easiest way to understand WATERBOMB is simple:
                do not watch it like a normal comeback stage. Watch it like a
                Korean summer festival scene. Notice the crowd. Notice how the
                artist uses the space. Notice why a short fancam might travel
                faster than a full performance video.
              </p>

              <p>
                Once you see that, the phrase &quot;WATERBOMB moment&quot;
                starts to make sense.
              </p>

              <p>
                It means a stage that feels bigger than the song alone. A stage
                that gives an artist a clearer image. A stage that people can
                describe in one sentence, share in one clip, and remember long
                after the festival ends.
              </p>

              <p>That is WATERBOMB Korea in K-pop culture.</p>

              <p>
                Not just water. Not just a festival. A place where one summer
                stage can turn into a viral memory.
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
