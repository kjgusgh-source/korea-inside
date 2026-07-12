import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import MediaFeatureCard from "../../../components/MediaFeatureCard";
import { getMediaItems } from "../../../lib/media";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/chuu`;

const pageTitle =
  "CHUU Profile: Solo Artist, Chuu Can Do It, and a Bright Image With More Behind It";
const pageDescription =
  "A friendly HAEMIL profile of CHUU, the solo artist also known for Chuu Can Do It, her warm public image, solo career turn, and why her fancams are a good entry point.";

const intro =
  "CHUU is a solo artist many people recognize before they fully know her music. On HAEMIL, she is treated as a solo artist — not through a LOONA group page. Her page starts with a fancam-focused entry point because member-focused videos are one of the easiest ways to understand individual performance style.";

const profileFacts = [
  { label: "Stage name", value: "CHUU / 츄" },
  { label: "Korean name", value: "Kim Jiwoo / 김지우" },
  { label: "Born", value: "October 20, 1999" },
  { label: "Artist type", value: "Solo artist" },
  {
    label: "Known for",
    value:
      "Solo music, Chuu Can Do It, bright public image, warm variety presence",
  },
  { label: "Former group", value: "LOONA" },
  {
    label: "Subscriber snapshot",
    value:
      "At the time of this HAEMIL update, Chuu Can Do It is listed at around 1.41 million subscribers.",
  },
];

const whyFansLike = [
  "Many fans see CHUU as someone who kept her warmth and continued building her own name after a difficult agency transition — not as a simple underdog story or fan-war topic.",
  "Her public image is not only bright or cute. Solo stages show expression control, camera awareness, and how warmth becomes a performance style.",
  "Chuu Can Do It helped make her non-stage image familiar to many viewers, but her fancams show how she carries a stage when the camera keeps returning to one person.",
  "For new listeners, her “XO, My Cyberlove” fancam works well as a first clip because small facial details are easier to notice in a solo performance.",
];

const watchPoints = [
  "Start with the “XO, My Cyberlove” fancam before trying to learn every part of her career at once.",
  "Watch how she uses her face without turning every moment into the same expression.",
  "Notice camera awareness — eye contact, softer lines, and resets between expressions.",
  "Try a three-pass watch: casual first, then expressions, then small transitions before and after obvious camera moments.",
  "Read the fancam spotlight for a longer guide to her solo-stage style.",
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
  const featuredMedia = getMediaItems().find(
    (item) => item.id === "chuu-xo-my-cyberlove-mcountdown-fancam"
  );

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
        <SiteHeader />

        <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <Link
            href="/kpop"
            className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
          >
            ← Back to K-pop
          </Link>

          <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Solo artist profile
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              CHUU
            </h1>

            <p className="mt-3 text-lg font-medium text-[var(--muted)]">
              Solo artist · Former LOONA member · Chuu Can Do It
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2 md:items-start md:gap-6">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-5">
                <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                  {intro}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Quick notes
                </p>
                <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                  A few basics before you watch the fancam.
                </p>
                <dl className="mt-3 space-y-2.5">
                  {profileFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text)]">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <section className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                Why fans notice CHUU
              </p>

              <div className="mt-5 space-y-4">
                {whyFansLike.map((point) => (
                  <p
                    key={point}
                    className="rounded-2xl bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                Watch points
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {watchPoints.map((point) => (
                  <li key={point} className="rounded-2xl bg-[var(--surface)] p-4">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                Some people first met her through LOONA. Some found her through
                variety clips. Some know her from Chuu Can Do It. At the time of
                this HAEMIL update, the channel is listed at around 1.41 million
                subscribers — a snapshot that can change, but it shows how
                familiar her non-stage image has become.
              </p>

              <p>
                Still, CHUU should not be explained only as &quot;bright&quot; or
                &quot;cute.&quot; She is also a solo artist who rebuilt her public
                path after a difficult agency transition. Many fans see her as
                someone who kept her warmth and stayed visible through different
                kinds of work.
              </p>

              <p>
                When CHUU performs alone, the camera keeps returning to the same
                person. That makes small details easier to notice — a smile, a
                quick eye change, a softer line, a reset between expressions.
                Friendly, but not careless. Cute, but not one-note. Soft, but
                still aware of the stage.
              </p>

              <p>
                If you want to start with one performance, her{" "}
                <Link
                  href="/kpop/chuu-xo-my-cyberlove-fancam-spotlight"
                  className="font-semibold text-[var(--accent)]"
                >
                  “XO, My Cyberlove” fancam spotlight
                </Link>{" "}
                is a useful place to begin.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Video shelf
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Start with one clip
                </h2>
              </div>

              <Link
                href="/kpop/chuu-xo-my-cyberlove-fancam-spotlight"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                Open fancam spotlight →
              </Link>
            </div>

            {featuredMedia ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <MediaFeatureCard
                  item={featuredMedia}
                  featured
                  showGuideLink
                  currentPath="/kpop/chuu"
                />
              </div>
            ) : (
              <div className="mt-8 rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm font-semibold text-[var(--text)]">
                  Videos coming soon
                </p>
              </div>
            )}
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
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
        </section>
      </main>
    </>
  );
}
