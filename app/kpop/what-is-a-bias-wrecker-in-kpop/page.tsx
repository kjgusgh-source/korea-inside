import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-bias-wrecker-in-kpop`;

const pageTitle =
  "What Is a Bias Wrecker in K-pop? The Member Who Keeps Stealing Your Attention";
const pageDescription =
  "A friendly HAEMIL guide to bias wrecker meaning in K-pop, how it differs from your bias, ultimate bias, bias line, fancams, killing parts, and stage presence.";

const quickFacts = [
  "Basic meaning: A bias wrecker is a member who makes you question your bias.",
  "Simple feeling: You already have a favorite member, but another member keeps stealing your attention.",
  "Not serious: It is playful fandom language, not a real problem.",
  "Common triggers: A fancam, killing part, funny clip, interview moment, stage presence, or new era.",
  "Different from bias: Your bias is your main favorite member; a bias wrecker is the member who suddenly competes for your attention.",
  "Different from ultimate bias: Ultimate bias means your favorite idol across all groups.",
  "Healthy fandom note: Being bias-wrecked does not mean you need to compare or attack members.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What does bias mean in K-pop?",
    description:
      "A friendly guide to K-pop bias meaning, favorite members, bias wreckers, ultimate bias, 최애, 차애, and why one member keeps catching your attention.",
    href: "/kpop/what-does-bias-mean",
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
    title: "What is a killing part in K-pop?",
    description:
      "A friendly guide to K-pop killing part meaning, why fans replay certain lines or moves, and how it differs from center, fancam, ending fairy, and visual moments.",
    href: "/kpop/what-is-killing-part-in-kpop",
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
    title: "What is a close-up fancam?",
    description:
      "A friendly guide to close-up fancam, facecam, and 얼빡직캠 meaning in K-pop, and how face-focused videos differ from fancams and ending fairy moments.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
  },
  {
    label: "Fan words",
    title: "Open the K-pop glossary",
    description:
      "A friendly guide to Korean K-pop fan words like bias, maknae, fancam, ending fairy, and eolppak-jikcam.",
    href: "/kpop/glossary",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-a-bias-wrecker-in-kpop",
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

export default function WhatIsABiasWreckerInKpopPage() {
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
          name: "Bias wrecker",
        },
        {
          "@type": "Thing",
          name: "K-pop bias",
        },
        {
          "@type": "Thing",
          name: "Korean fan culture",
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
          name: "What is a bias wrecker?",
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
              K-pop starter guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you search &quot;bias wrecker meaning&quot; in K-pop, the simple
              answer is this: a bias wrecker is the member who makes you
              question your bias.
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
              <p>You already have a favorite member.</p>

              <p>Then another member keeps catching your eye.</p>

              <p>Maybe it happens in a fancam.</p>

              <p>Maybe it happens in one killing part.</p>

              <p>Maybe it happens in a funny interview clip.</p>

              <p>
                Maybe it happens during a new comeback, when a member suddenly
                feels different from before.
              </p>

              <p>That member is your bias wrecker.</p>

              <p>
                The word sounds dramatic, but it is usually playful. Fans use it
                when another member starts stealing attention from their main
                favorite. It does not mean you have to stop liking your bias. It
                does not mean there is a real problem.
              </p>

              <p>
                It just means your attention is being pulled in another
                direction.
              </p>

              <p>
                In K-pop fandom, a bias is usually your favorite member in a
                group. A bias wrecker is the member who makes that choice feel
                less stable.
              </p>

              <p>You may still know who your bias is.</p>

              <p>But the bias wrecker keeps appearing.</p>

              <p>You watch one more video.</p>

              <p>You save one more clip.</p>

              <p>You start noticing their expressions.</p>

              <p>You remember their line.</p>

              <p>You search their name.</p>

              <p>That is the bias wrecker feeling.</p>

              <p>A bias wrecker often appears through performance.</p>

              <p>
                A fancam can do it because it lets you follow one member from
                beginning to end. Maybe you never noticed that member much in
                full-group stages. Then one fancam shows their expression
                control, timing, or energy, and suddenly they feel impossible
                to ignore.
              </p>

              <p>A killing part can do it too.</p>

              <p>
                One short line, gesture, facial expression, or camera moment
                can make a member stand out. If you keep replaying that moment,
                the member may start to feel like a bias wrecker.
              </p>

              <p>Stage presence is another common reason.</p>

              <p>
                Some idols hold attention even when they are not in the center.
                They may have calm control, strong confidence, playful timing,
                or a way of matching the song concept that makes your eyes
                return to them again and again.
              </p>

              <p>That can wreck your bias.</p>

              <p>But bias wreckers are not only about performance.</p>

              <p>A funny variety clip can do it.</p>

              <p>A quiet behind-the-scenes moment can do it.</p>

              <p>A kind fan interaction can do it.</p>

              <p>
                A new hairstyle, a new concept, a stronger live stage, or a
                more confident era can change how you see someone.
              </p>

              <p>Sometimes fans do not choose a bias wrecker.</p>

              <p>The member just arrives.</p>

              <p>This is why the phrase is fun.</p>

              <p>
                It describes a very familiar fan experience: you thought your
                favorite member was decided, but K-pop keeps giving you reasons
                to notice someone else.
              </p>

              <p>Bias wrecker is different from bias.</p>

              <p>
                Your bias is the member you feel most attached to. They are
                usually the person you look for first, the fancam you click
                first, or the member whose content feels most personal to you.
              </p>

              <p>Your bias wrecker is the member who interrupts that.</p>

              <p>Not in a bad way.</p>

              <p>More like:</p>

              <p>&quot;Wait, why am I watching this member again?&quot;</p>

              <p>That is the difference.</p>

              <p>Bias wrecker is also different from ultimate bias.</p>

              <p>
                An ultimate bias is the idol you like most across all groups.
                You may have one bias in each group, but one ultimate bias
                overall.
              </p>

              <p>A bias wrecker usually works inside a group.</p>

              <p>
                For example, you may have a bias in one group, but another
                member in that same group keeps stealing your attention. That
                member becomes your bias wrecker.
              </p>

              <p>Bias wrecker is also different from bias line.</p>

              <p>
                A bias line is a small group of members you especially like.
                Some fans cannot choose only one favorite, so they talk about
                their bias line instead.
              </p>

              <p>A bias wrecker may become part of your bias line.</p>

              <p>
                Or they may stay as the member who always causes trouble for
                your attention.
              </p>

              <p>Both are normal.</p>

              <p>
                Bias wrecker is also not the same as visual, center, or maknae.
              </p>

              <p>
                A visual member may become a bias wrecker because their styling,
                facial impression, or camera memorability stands out.
              </p>

              <p>
                A center member may become a bias wrecker because the stage
                gives them a strong focus moment.
              </p>

              <p>
                A maknae may become a bias wrecker because fans enjoy their
                growth, confidence, or group dynamic.
              </p>

              <p>But bias wrecker is not a role.</p>

              <p>It is your reaction as a fan.</p>

              <p>This is important.</p>

              <p>
                Two fans can watch the same group and have completely different
                bias wreckers.
              </p>

              <p>One person may be pulled in by vocals.</p>

              <p>Another may be pulled in by dance.</p>

              <p>Another may like a member&apos;s humor.</p>

              <p>
                Another may suddenly notice someone through a close-up fancam.
              </p>

              <p>
                Another may get bias-wrecked by a single expression in an ending
                fairy moment.
              </p>

              <p>There is no correct answer.</p>

              <p>The bias wrecker is personal.</p>

              <p>
                For beginners, the easiest way to understand it is to imagine
                this:
              </p>

              <p>You enter a group through one member.</p>

              <p>That person becomes your bias.</p>

              <p>
                Then, while watching more stages and clips, another member
                slowly becomes harder to ignore.
              </p>

              <p>At first, you think it is just one video.</p>

              <p>Then it keeps happening.</p>

              <p>That is when fans say they are being bias-wrecked.</p>

              <p>It can happen quickly.</p>

              <p>It can also happen slowly.</p>

              <p>
                Sometimes it happens after a concert. Sometimes after a
                comeback. Sometimes after a single fancam. Sometimes after a
                funny edit that changes the way you see a member forever.
              </p>

              <p>K-pop is good at creating those moments.</p>

              <p>That is why the word exists.</p>

              <p>A bias wrecker can also change over time.</p>

              <p>During one era, a member&apos;s styling may stand out.</p>

              <p>During another era, someone&apos;s stage presence may improve.</p>

              <p>During a tour, a member may feel more confident.</p>

              <p>
                During a variety show, someone&apos;s personality may become more
                visible.
              </p>

              <p>As you watch more content, your attention changes.</p>

              <p>That does not mean your original bias was wrong.</p>

              <p>It just means you are noticing more of the group.</p>

              <p>That is one of the fun parts of K-pop fandom.</p>

              <p>
                There is also no need to make bias wrecking into a competition.
              </p>

              <p>You do not have to rank every member.</p>

              <p>You do not have to prove that one member is better.</p>

              <p>You do not have to attack another fan&apos;s bias.</p>

              <p>Being bias-wrecked is supposed to be light and fun.</p>

              <p>It is just a way of saying:</p>

              <p>
                &quot;I did not expect this member to pull me in, but here I
                am.&quot;
              </p>

              <p>
                For HAEMIL readers, the easiest way to understand bias wrecker
                is this:
              </p>

              <p>A bias is the member you already look for first.</p>

              <p>
                A bias wrecker is the member who suddenly makes you look twice.
              </p>

              <p>A fancam may introduce them.</p>

              <p>A killing part may make you replay them.</p>

              <p>Stage presence may keep your eyes on them.</p>

              <p>A close-up fancam may show details you missed.</p>

              <p>A funny clip may make them feel familiar.</p>

              <p>
                And before you notice it, your favorite-member list becomes a
                little less simple.
              </p>

              <p>That is the bias wrecker feeling.</p>

              <p>It is playful.</p>

              <p>It is common.</p>

              <p>And in K-pop, it happens all the time.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Related fan words
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Bias · ultimate bias · bias line
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Your bias is your main favorite member in a group. An ultimate
              bias is the idol you like most across all groups. A bias line is a
              small group of members you especially like when you cannot choose
              only one.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A bias wrecker sits between those ideas — not replacing your bias,
              but making your attention feel a little less settled. For the full
              picture, see our{" "}
              <Link
                href="/kpop/what-does-bias-mean"
                className="font-semibold text-[var(--accent)]"
              >
                bias meaning guide
              </Link>
              .
            </p>
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
