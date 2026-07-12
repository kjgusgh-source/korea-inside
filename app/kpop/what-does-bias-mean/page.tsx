import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-does-bias-mean`;

const pageTitle =
  "What Does Bias Mean in K-pop? A Friendly Guide to Favorite Members";
const pageDescription =
  "A friendly HAEMIL guide to bias meaning in K-pop, how fans choose a favorite member, and what bias wrecker, ultimate bias, bias line, 최애, and 차애 can mean.";

const quickFacts = [
  "Basic meaning: A bias is usually your favorite member in a K-pop group.",
  "Deeper feeling: It can be the member you naturally notice, follow, rewatch, collect, or feel attached to.",
  "Korean fan word: 최애 is close to bias, though fandom words do not always translate perfectly.",
  "Related word: 차애 can mean a second favorite.",
  "Bias wrecker: A member who keeps stealing your attention and makes you question your bias.",
  "Ultimate bias: The idol you like most across all groups.",
  "Important: Having a bias does not mean you need to ignore or attack other members.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What is a bias wrecker in K-pop?",
    description:
      "A friendly guide to bias wrecker meaning in K-pop, why another member keeps stealing your attention, and how it differs from your bias, ultimate bias, and bias line.",
    href: "/kpop/what-is-a-bias-wrecker-in-kpop",
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
    title: "What does visual mean in K-pop?",
    description:
      "A friendly guide to what “visual” means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What does maknae mean?",
    description:
      "A friendly guide to maknae meaning in K-pop, why the youngest member matters, and how maknae differs from center, visual, fancam, and ending fairy talk.",
    href: "/kpop/what-is-maknae",
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
    canonical: "/kpop/what-does-bias-mean",
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

export default function WhatDoesBiasMeanPage() {
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
          name: "K-pop bias",
        },
        {
          "@type": "Thing",
          name: "Bias wrecker",
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
          name: "What does bias mean?",
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
              If you search &quot;bias meaning in K-pop,&quot; the simple answer
              is this: a bias is your favorite member in a K-pop group.
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
                But in fandom talk, it usually feels a little warmer than just
                &quot;favorite.&quot;
              </p>

              <p>Your bias is the member your eyes keep finding.</p>

              <p>The member whose fancams you click first.</p>

              <p>The member whose photo card you hope to pull.</p>

              <p>
                The member whose interviews, funny clips, ending moments, or
                small habits stay in your head.
              </p>

              <p>That is the feeling behind bias.</p>

              <p>
                It does not always mean romantic attraction. For many fans, bias
                can mean admiration, comfort, performance taste, personality,
                humor, style, or simply the member they enjoy watching most.
                Sometimes it starts with a stage. Sometimes it starts with a
                variety clip. Sometimes it starts with one line in a song.
              </p>

              <p>
                K-pop fandom has many ways for one member to catch your
                attention.
              </p>

              <p>A fancam can do it.</p>

              <p>
                You watch one member for the full performance, and suddenly the
                group becomes easier to understand through that person.
              </p>

              <p>A killing part can do it.</p>

              <p>
                One short line, gesture, or camera moment makes you remember a
                member&apos;s name.
              </p>

              <p>Stage presence can do it.</p>

              <p>
                Even when the member is not in the center, your eyes keep going
                back to them.
              </p>

              <p>Personality can do it too.</p>

              <p>
                A quiet answer in an interview, a funny reaction, a kind fan
                moment, or a small habit can make someone feel familiar.
              </p>

              <p>That is why bias is not only about appearance.</p>

              <p>
                Of course, visual image can be part of it. K-pop is a very
                camera-aware culture, and fans notice styling, photos,
                thumbnails, stage clips, and facial impressions. But having a
                bias is not the same as ranking members by looks.
              </p>

              <p>It is more personal than that.</p>

              <p>One fan may choose a bias because of vocals.</p>

              <p>Another may choose one because of dance.</p>

              <p>Another may notice the maknae image.</p>

              <p>Another may like a member&apos;s calm energy.</p>

              <p>
                Another may be pulled in by a fancam where the idol looked
                completely different from the full-group stage.
              </p>

              <p>There is no one correct reason.</p>

              <p>In Korean fandom language, 최애 is close to bias.</p>

              <p>
                It means the member or person you like the most. You may see fans
                say 최애 멤버, meaning their favorite member. But fandom words do
                not always translate perfectly. Bias is the word many
                English-speaking K-pop fans use, while 최애 carries its own
                Korean fan feeling.
              </p>

              <p>You may also see 차애.</p>

              <p>
                This can mean a second favorite, or the member you like right
                after your 최애. Again, do not treat it like a perfect math
                system. Fans use these words playfully, emotionally, and
                sometimes differently depending on the fandom.
              </p>

              <p>Then there is bias wrecker.</p>

              <p>A bias wrecker is the member who makes you question your bias.</p>

              <p>You thought you had one favorite member.</p>

              <p>
                Then another member keeps appearing in fancams, interviews, live
                clips, or funny edits.
              </p>

              <p>You start noticing them more.</p>

              <p>
                You still have your bias, but now this other member is causing
                trouble.
              </p>

              <p>That is the bias wrecker.</p>

              <p>It is not a serious problem.</p>

              <p>
                It is fandom language for &quot;Why do I suddenly like this
                member so much?&quot;
              </p>

              <p>Some fans also use the phrase ultimate bias.</p>

              <p>
                Your ultimate bias is the idol you like most across all groups,
                not only inside one group. For example, you may have one bias in
                each group you follow, but one ultimate bias overall.
              </p>

              <p>Another phrase is bias line.</p>

              <p>
                A bias line is a small group of members you especially like.
                Maybe you cannot choose only one. Maybe you have a main bias and
                two other members who keep pulling your attention. Fans may call
                that their bias line.
              </p>

              <p>
                These words can sound complicated at first, but the feeling is
                simple.
              </p>

              <p>K-pop groups have many members.</p>

              <p>Fans naturally connect with different people.</p>

              <p>Bias is the word that helps explain that connection.</p>

              <p>Bias is different from center.</p>

              <p>
                The center is about where the stage places focus. A center may
                stand in the middle during key choreography or become the main
                visual focus of a performance moment. Your bias may be the
                center, but not always.
              </p>

              <p>Bias is about your attachment.</p>

              <p>Center is about stage focus.</p>

              <p>Bias is also different from visual.</p>

              <p>
                Visual is about image, styling, facial impression, and camera
                memorability. A visual member may become your bias, but the word
                bias is broader. You might bias someone because of their voice,
                humor, performance control, or the way they communicate with
                fans.
              </p>

              <p>Bias is different from fancam too.</p>

              <p>
                A fancam is a member-focused video. It can help you find your
                bias, but the fancam itself is not the bias. It is often the
                doorway.
              </p>

              <p>You watch the video.</p>

              <p>You notice one person.</p>

              <p>Then you search their name.</p>

              <p>That is how it starts.</p>

              <p>Bias is also different from killing part.</p>

              <p>
                A killing part is the short moment fans replay. It can make one
                member stand out, and that member may become your bias after you
                keep replaying the clip. But the killing part is the moment. Bias
                is the longer feeling that grows after that.
              </p>

              <p>Bias is different from stage presence.</p>

              <p>
                Stage presence is how an idol holds attention during a
                performance. Strong stage presence can make someone become your
                bias, but stage presence is a performance quality. Bias is how
                you, as a fan, respond to that person.
              </p>

              <p>Bias is also different from maknae.</p>

              <p>
                Maknae means the youngest member. Some fans are drawn to the
                maknae because they enjoy watching growth, confidence, and group
                dynamics. But maknae is age order. Bias is personal preference.
              </p>

              <p>
                This is why two fans can watch the same group and choose
                completely different biases.
              </p>

              <p>They are noticing different things.</p>

              <p>One person remembers the voice.</p>

              <p>One person remembers the smile.</p>

              <p>One person remembers the dance line.</p>

              <p>
                One person remembers the quiet member who was funny in a
                behind-the-scenes clip.
              </p>

              <p>
                One person watches a close-up fancam and suddenly cannot look
                away.
              </p>

              <p>That variety is normal.</p>

              <p>
                Having a bias is one of the most ordinary parts of K-pop
                fandom.
              </p>

              <p>But there is one small thing to keep in mind.</p>

              <p>
                Having a bias does not mean you need to dislike the other
                members.
              </p>

              <p>It does not mean you need to ignore the group.</p>

              <p>
                It does not mean you should attack people who have a different
                bias.
              </p>

              <p>
                A healthy bias is just the member you feel closest to as a fan.
              </p>

              <p>That is enough.</p>

              <p>
                For beginners, the easiest way to find your bias is not to force
                it.
              </p>

              <p>Watch a full-group stage.</p>

              <p>Then watch a few fancams.</p>

              <p>Watch an interview.</p>

              <p>Watch a funny clip.</p>

              <p>Listen to the vocals.</p>

              <p>Look at how members interact.</p>

              <p>
                Over time, you will probably notice that one member keeps
                coming back into your attention.
              </p>

              <p>That may be your bias.</p>

              <p>Or maybe it changes.</p>

              <p>That is normal too.</p>

              <p>
                Fans sometimes change bias after a comeback, a concert, a
                fancam, a new era, or one unexpectedly strong performance. Some
                people keep the same bias for years. Some people get
                bias-wrecked every week.
              </p>

              <p>K-pop fandom has room for both.</p>

              <p>
                For HAEMIL readers, the easiest way to understand bias is this:
              </p>

              <p>A fancam may introduce you to a member.</p>

              <p>A killing part may make you replay them.</p>

              <p>Stage presence may keep your eyes on them.</p>

              <p>A visual image may make them easy to remember.</p>

              <p>A maknae image may make you notice their growth.</p>

              <p>
                But bias is the member who stays with you after all of that.
              </p>

              <p>It is not always logical.</p>

              <p>It does not need to be.</p>

              <p>
                Sometimes one member just becomes the person you look for
                first.
              </p>

              <p>That is your bias.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">최애 · 차애</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              최애 is close to bias in Korean fan language. It means the member
              or person you like the most. 차애 can mean a second favorite, or
              the member you like right after your 최애 — but fans use these
              words playfully, not as a strict ranking system.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              English-speaking fans often say &quot;my bias,&quot; while Korean
              fans may say 최애 멤버. The feeling is similar, but the words carry
              slightly different fandom moods.
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
