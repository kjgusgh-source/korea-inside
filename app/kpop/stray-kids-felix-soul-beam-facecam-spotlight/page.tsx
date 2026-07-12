import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/stray-kids-felix-soul-beam-facecam-spotlight`;

const pageTitle =
  "Stray Kids Felix Facecam Spotlight: From Deep Voice Recognition to “Soul Beam” Stage Details";
const pageDescription =
  "A friendly HAEMIL spotlight on Stray Kids Felix’s KBSKpop “Soul Beam” facecam, his deep-voice image, camera awareness, stage presence, and why close-up fancams make his performance details easier to notice.";

const relatedGuides = [
  {
    label: "Member guide",
    title: "Felix (Stray Kids)",
    description:
      "Start here if you want a simple member guide after watching Felix’s “Soul Beam” facecam.",
    href: "/kpop/stray-kids/felix",
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
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does bias mean in K-pop?",
    description:
      "A friendly guide to K-pop bias meaning, favorite members, bias wreckers, ultimate bias, 최애, 차애, and why one member keeps catching your attention.",
    href: "/kpop/what-does-bias-mean",
  },
  {
    label: "K-pop starter guide",
    title: "What is a bias wrecker in K-pop?",
    description:
      "A friendly guide to bias wrecker meaning in K-pop, why another member keeps stealing your attention, and how it differs from your bias, ultimate bias, and bias line.",
    href: "/kpop/what-is-a-bias-wrecker-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does concept mean in K-pop?",
    description:
      "A friendly guide to K-pop concept meaning, comeback concepts, and how styling, mood, and performance image fit together on stage.",
    href: "/kpop/what-does-concept-mean-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/stray-kids-felix-soul-beam-facecam-spotlight",
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

export default function StrayKidsFelixSoulBeamFacecamSpotlightPage() {
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
          name: "Stray Kids",
        },
        {
          "@type": "Thing",
          name: "K-pop facecam",
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
          name: "Stray Kids Felix facecam spotlight",
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
              From Deep Voice Recognition to “Soul Beam” Stage Details
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to Stray Kids, Felix is often one of the easiest
              members to remember. For many casual listeners, the first hook is
              his voice — but this KBSKpop “Soul Beam” facecam shows another
              side worth watching closely.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              KBSKpop facecam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Stray Kids Felix — “Soul Beam” Facecam
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              KBSKpop: [얼빡직캠 4K] 스트레이 키즈 필릭스 &apos;신선놀음&apos;
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="GETUc1c1uAs"
                title='Stray Kids Felix "Soul Beam" Facecam'
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=GETUc1c1uAs"
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
                If you are new to Stray Kids, Felix is often one of the easiest
                members to remember.
              </p>

              <p>For many casual listeners, the first hook is his voice.</p>

              <p>
                Felix has the kind of low tone that can surprise people when
                they first hear it in a Stray Kids song. MANIAC is one song fans
                often bring up when talking about that deep-voice image, because
                his low vocal color leaves a strong contrast inside the track.
              </p>

              <p>
                But this KBSKpop “Soul Beam” facecam shows a different way to
                understand him.
              </p>

              <p>Here, the focus is not only the voice.</p>

              <p>It is the face.</p>

              <p>The camera.</p>

              <p>The expression.</p>

              <p>
                The small details that become visible when the video stays close.
              </p>

              <p>That is why this is a useful HAEMIL spotlight.</p>

              <p>
                A regular fancam lets you follow one member&apos;s full
                performance.
              </p>

              <p>
                A facecam, or close-up fancam, lets you watch how the member
                performs with their face.
              </p>

              <p>
                Felix is interesting in this format because his public image
                often has contrast.
              </p>

              <p>Many fans remember the deep voice first.</p>

              <p>
                Then they notice the softer facial impression, bright
                expressions, freckles, styling, and camera-friendly image.
              </p>

              <p>That contrast is part of why he is memorable.</p>

              <p>It should not be reduced to only “deep voice.”</p>

              <p>And it should not be reduced to only “visual.”</p>

              <p>
                The interesting part is how those pieces work together.
              </p>

              <p>
                In a close-up fancam, you can see how Felix uses expression
                timing.
              </p>

              <p>A look does not need to be huge to be noticeable.</p>

              <p>A small eye change can shift the mood.</p>

              <p>
                A soft expression can make a sharp stage feel less predictable.
              </p>

              <p>
                A direct camera moment can become the part fans replay.
              </p>

              <p>
                Those are the details a facecam makes easier to catch.
              </p>

              <p>
                This video is also a good way to understand stage presence.
              </p>

              <p>
                Stage presence does not always mean doing the biggest move.
              </p>

              <p>
                Sometimes it is the way a performer keeps attention when the
                camera is close.
              </p>

              <p>
                Sometimes it is how they hold the mood between lines.
              </p>

              <p>
                Sometimes it is how their image, styling, and expression fit the
                song&apos;s concept.
              </p>

              <p>
                Felix&apos;s facecam gives beginners a simple way to watch that.
              </p>

              <p>
                You can start with the contrast people already know: the low
                voice image.
              </p>

              <p>Then you can look closer at the stage details.</p>

              <p>That is a good K-pop path.</p>

              <p>A voice may make you remember a member.</p>

              <p>A fancam may make you understand how they perform.</p>

              <p>A facecam may make you notice the smaller choices.</p>

              <p>
                This is also where bias and bias wrecker language can appear.
              </p>

              <p>
                You may enter Stray Kids through the sound of Felix&apos;s voice.
              </p>

              <p>Then a facecam shows a softer or more playful side.</p>

              <p>Then a stage moment makes you replay the clip.</p>

              <p>That is how one member can become easier to follow.</p>

              <p>
                The point is not that every viewer must choose Felix as a bias.
              </p>

              <p>
                The point is that this kind of video explains why fans often
                connect one member to a very specific image.
              </p>

              <p>
                For Felix, that image often includes his deep voice, but it also
                includes camera awareness and visual contrast.
              </p>

              <p>
                If you are watching this video for the first time, try three
                passes.
              </p>

              <p>First, watch it casually.</p>

              <p>Notice which moments stay in your head.</p>

              <p>Second, watch his expressions.</p>

              <p>
                Look for the small changes before and after the obvious camera
                moments.
              </p>

              <p>Third, think about the contrast.</p>

              <p>
                How does someone known for a deep voice carry a close-up stage
                where the face becomes the main focus?
              </p>

              <p>That is where the fancam becomes more interesting.</p>

              <p>
                Felix&apos;s “Soul Beam” facecam is not the same as watching a
                MANIAC stage.
              </p>

              <p>It is not trying to explain his whole career.</p>

              <p>
                But it gives a clear entry point into why he is easy to remember.
              </p>

              <p>A song can make you notice a voice.</p>

              <p>A facecam can make you notice a performer.</p>

              <p>And for Felix, both sides matter.</p>

              <p>
                For HAEMIL readers, the easiest way to understand this spotlight
                is this:
              </p>

              <p>
                Felix&apos;s deep voice may be the first thing many casual fans
                remember.
              </p>

              <p>A facecam shows the other side of that image.</p>

              <p>The camera gets close.</p>

              <p>The expressions become clearer.</p>

              <p>The visual contrast becomes easier to read.</p>

              <p>The small stage details become easier to replay.</p>

              <p>
                That is why this “Soul Beam” facecam works as a good starting
                point.
              </p>

              <p>
                It shows Felix not only as a voice people recognize, but as a
                performer fans keep watching closely.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to notice while watching
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  This is a facecam for “Soul Beam,” not a MANIAC stage clip.
                </li>
                <li>
                  Watch expression timing — small eye changes and soft looks
                  matter when the camera stays close.
                </li>
                <li>
                  Notice camera awareness during direct-to-lens moments.
                </li>
                <li>
                  Think about contrast: deep-voice image vs. softer facial
                  impression on stage.
                </li>
                <li>
                  Try three passes: casual watch, expression watch, then contrast
                  watch.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                About 얼빡직캠
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                얼빡직캠 (facecam / close-up fancam) keeps the camera on one
                member&apos;s face for most of the performance. It is useful when
                you want to study expression control, camera awareness, and how a
                member&apos;s visual image fits the song — details that are harder
                to catch in a wide full-group shot.
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
