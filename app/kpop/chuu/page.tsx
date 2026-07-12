import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/chuu`;

const pageTitle =
  "CHUU Profile: Solo Artist, Chuu Can Do It, and a Bright Image With More Behind It";
const pageDescription =
  "A friendly HAEMIL profile of CHUU, the solo artist also known for Chuu Can Do It, her warm public image, solo career turn, and why her fancams are a good entry point.";

const quickFacts = [
  "Stage name: CHUU / 츄",
  "Korean name: Kim Jiwoo / 김지우",
  "Birth date: 1999-10-20",
  "Artist type: Solo artist",
  "Known for: Solo music, Chuu Can Do It, bright public image, warm variety presence",
  "Former group: LOONA",
  "Good entry point: “XO, My Cyberlove” fancam spotlight",
  "Subscriber snapshot: At the time of this HAEMIL update, Chuu Can Do It is listed at around 1.41 million subscribers.",
];

const relatedGuides = [
  {
    label: "K-pop spotlight",
    title: "CHUU “XO, My Cyberlove” fancam spotlight",
    description:
      "A friendly look at CHUU’s Mnet M2 “XO, My Cyberlove” fancam, her solo artist charm, Chuu Can Do It presence, and why her bright but controlled stage style is easy to notice.",
    href: "/kpop/chuu-xo-my-cyberlove-fancam-spotlight",
  },
  {
    label: "K-pop starter guide",
    title: "What is a fancam?",
    description:
      "A friendly guide to K-pop fancam meaning, why member-focused videos matter, and how fancams differ from facecams, ending fairy moments, and full-stage clips.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop starter guide",
    title: "What is a close-up fancam?",
    description:
      "A friendly guide to close-up fancam, facecam, and 얼빡직캠 meaning in K-pop, and how face-focused videos differ from fancams and ending fairy moments.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is stage presence in K-pop?",
    description:
      "A friendly guide to stage presence in K-pop, why some idols are hard to look away from, and how it connects to fancams, center, visual, and killing parts.",
    href: "/kpop/what-is-stage-presence-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does bias mean in K-pop?",
    description:
      "A friendly guide to K-pop bias meaning, favorite members, bias wreckers, ultimate bias, 최애, 차애, and why one member keeps catching your attention.",
    href: "/kpop/what-does-bias-mean",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/chuu",
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

export default function ChuuProfilePage() {
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
          name: "CHUU",
        },
        {
          "@type": "Thing",
          name: "K-pop solo artist",
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
          name: "CHUU",
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
              Solo artist profile
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              CHUU is one of those K-pop names many people recognize before they
              fully know her music. On HAEMIL, she is treated as a solo artist —
              not through a LOONA group page.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--gold)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                CHUU is one of those K-pop names many people recognize before
                they fully know her music.
              </p>

              <p>Some people first met her through LOONA.</p>

              <p>Some found her through variety clips.</p>

              <p>
                Some know her from Chuu Can Do It, the YouTube show connected to
                her warm and approachable public image.
              </p>

              <p>
                At the time of this HAEMIL update, the Chuu Can Do It channel is
                listed at around 1.41 million subscribers. That number can
                change, but it shows how familiar her non-stage image has become
                to many viewers.
              </p>

              <p>
                Still, CHUU should not be explained only as &quot;bright&quot; or
                &quot;cute.&quot;
              </p>

              <p>That is part of her image, but not the whole thing.</p>

              <p>
                CHUU is also a solo artist who had to rebuild her public path
                after a difficult agency transition. That story should be handled
                carefully. It is not simply an &quot;underdog wins&quot; story,
                and it should not become fan-war content.
              </p>

              <p>A better way to understand it is this:</p>

              <p>
                Many fans see CHUU as someone who kept her warmth, stayed visible
                through different kinds of work, and continued building her own
                name after a complicated period.
              </p>

              <p>
                That is why her solo stages can feel meaningful to watch.
              </p>

              <p>
                When CHUU performs alone, the stage depends on her timing,
                expression control, and camera awareness. In a group, attention
                can move between members. In a solo performance, the camera keeps
                returning to the same person.
              </p>

              <p>That makes small details easier to notice.</p>

              <p>A smile.</p>

              <p>A quick eye change.</p>

              <p>A softer line.</p>

              <p>A brighter camera moment.</p>

              <p>A reset between expressions.</p>

              <p>
                Those details are part of why CHUU&apos;s fancams can work well
                for beginners.
              </p>

              <p>
                They show how her public warmth becomes a performance style.
              </p>

              <p>Friendly, but not careless.</p>

              <p>Cute, but not one-note.</p>

              <p>Soft, but still aware of the stage.</p>

              <p>
                For HAEMIL readers, CHUU is a good solo artist entry point
                because her career connects several sides of K-pop:
              </p>

              <p>a group history,</p>

              <p>a recognizable variety image,</p>

              <p>a YouTube presence,</p>

              <p>a solo career turn,</p>

              <p>
                and fancams that show how much expression control matters when
                one performer carries the frame.
              </p>

              <p>
                If you want to start with one performance, her &quot;XO, My
                Cyberlove&quot; fancam is a useful place to begin.
              </p>

              <p>Watch it casually first.</p>

              <p>Then watch her expressions.</p>

              <p>
                Then watch the small transitions before and after the obvious
                camera moments.
              </p>

              <p>That is where her solo-stage style becomes clearer.</p>
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
