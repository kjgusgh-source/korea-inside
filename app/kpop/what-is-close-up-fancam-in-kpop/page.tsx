import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-close-up-fancam-in-kpop`;

const pageTitle =
  "What Is an “얼빡직캠”? Close-Up Fancams in K-pop, Explained";
const pageDescription =
  "A friendly HAEMIL guide to 얼빡직캠, the Korean close-up fancam style where facial expressions, eye contact, and tiny mood changes become the main reason fans replay a stage.";

const relatedGuides = [
  {
    label: "K-pop guide",
    title: "Learn the basic idea of fancams",
    description:
      "Learn why fancams matter, how fans use them, and why one focused stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "Fancam spotlight",
    title: "Watch Kim ChaeYeon’s Baby Flower spotlight",
    description:
      "A close-up look at Kim ChaeYeon’s Baby Flower facecam, her familiar Korean TV background, and why she is an easy first door into tripleS.",
    href: "/kpop/triples-kim-chaeyeon-baby-flower-fancam-spotlight",
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
    canonical: "/kpop/what-is-close-up-fancam-in-kpop",
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

export default function WhatIsCloseUpFancamInKpopPage() {
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
          name: "얼빡직캠",
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
          name: "What is an 얼빡직캠?",
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
              K-pop term
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What Is an &quot;얼빡직캠&quot;? Close-Up Fancams in K-pop,
              Explained
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you watch Korean K-pop clips for long enough, you may run into
              the word 얼빡직캠.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                It looks a little intense at first, but the idea is simple. An
                얼빡직캠 is a close-up fancam where the camera stays tight on
                the idol&apos;s face. Instead of showing the full choreography
                or the whole group, it lets you follow one face, one expression,
                and one small mood change at a time.
              </p>

              <p>That is why fans replay them.</p>

              <p>
                A normal full-stage video helps you understand the performance.
                You can see the formation, the choreography, the styling, and
                how the group moves together. A close-up fancam does something
                different. It makes the performance feel personal. You are not
                watching the whole stage from far away. You are watching how one
                idol handles the camera.
              </p>

              <p>In Korean fan spaces, that can matter a lot.</p>

              <p>
                Sometimes the moment fans remember is not the biggest dance
                move. It is a quick smile. A tiny eye movement. A sudden switch
                from soft to sharp. A member looking relaxed for one second, then
                completely focused the next. Those small details can be hard to
                notice in a full group shot, but an 얼빡직캠 makes them easy to
                catch.
              </p>

              <p>That is also why this kind of video is useful for new fans.</p>

              <p>
                When a group has many members, a full performance can feel
                overwhelming. You may not know who is who yet. A close-up fancam
                makes the first step smaller. You follow one person, remember one
                face, and then the group starts to feel less distant.
              </p>

              <p>
                Kim ChaeYeon&apos;s &quot;Baby Flower&quot; close-up fancam is
                a good example.
              </p>

              <p>
                tripleS is a large group, so a new fan may not know where to
                begin. But a facecam gives you one clear starting point. You can
                watch ChaeYeon&apos;s expressions, notice the soft and bright
                stage mood, and understand why she feels easy to remember before
                learning the whole group.
              </p>

              <p>That does not mean an 얼빡직캠 is only about looking pretty.</p>

              <p>
                The better way to read it is this: it is about how well someone
                carries a close camera. Some idols are strong in full-stage
                choreography. Some are memorable because of vocal tone. Some
                become easier to understand when the camera stays close and
                catches the small details that fans like to replay.
              </p>

              <p>A close-up fancam can show that very quickly.</p>

              <p>
                This is why Korean fans sometimes talk about &quot;facecam
                moments&quot; almost like separate stage memories. The song may
                be the same. The outfit may be the same. But one close-up clip
                can make people remember a member differently because the camera
                caught the right expression at the right time.
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand 얼빡직캠 is
                not to treat it like a complicated K-pop term.
              </p>

              <p>Think of it as a replay-friendly close-up.</p>

              <p>
                It is the kind of fancam you watch when you want to see the
                small things: eye contact, facial timing, mood switches, and
                the little details that make one member feel familiar.
              </p>

              <p>Once you understand that, a lot of K-pop fan behavior makes more sense.</p>

              <p>
                Fans are not only watching stages to check whether someone
                performed correctly. They are also looking for the tiny moments
                that make an idol easy to remember. An 얼빡직캠 gives those
                moments more space.
              </p>

              <p>
                That is why a short close-up fancam can sometimes do what a
                full profile cannot.
              </p>

              <p>It gives you one face to remember first.</p>

              <p>And in K-pop, that is often where becoming a fan begins.</p>
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
