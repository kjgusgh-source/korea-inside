import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-does-concept-mean-in-kpop`;

const pageTitle =
  "What Does Concept Mean in K-pop? How Idols Change Their Image Each Era";
const pageDescription =
  "A friendly HAEMIL guide to concept meaning in K-pop, how concepts shape comebacks, styling, music videos, stages, choreography, visual image, and fan discussions.";

const quickFacts = [
  "Basic meaning: In K-pop, concept means the overall mood, image, story, and style of a song, comeback, or era.",
  "Not only clothes: Concept can include music, styling, choreography, music video, photos, stage outfits, expressions, and fan mood.",
  "Common place to see it: Concept photos, teaser images, music videos, comeback stages, and album design.",
  "Connected to comeback: A comeback often introduces a new concept or a new version of a group's image.",
  "Connected to visual: Concept affects how members are styled, photographed, and remembered on camera.",
  "Connected to stage presence: Idols often adjust expressions, energy, and performance style to match the concept.",
  "Local tip: Korean fans may talk about whether a concept \"fits\" a group or member.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What does comeback mean in K-pop?",
    description:
      "A friendly guide to K-pop comeback meaning, why new releases are called comebacks, and how teasers, title tracks, comeback stages, and promotions work.",
    href: "/kpop/what-does-comeback-mean-in-kpop",
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
      "A friendly guide to what \"visual\" means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is point choreography in K-pop?",
    description:
      "A friendly guide to point choreography and 포인트 안무 in K-pop, the signature move fans remember, copy, replay, and connect to killing parts and dance challenges.",
    href: "/kpop/what-is-point-choreography-in-kpop",
  },
  {
    label: "K-pop starter guide",
    title: "What is center in K-pop?",
    description:
      "A friendly guide to center meaning in K-pop, why the focus member matters, and how center differs from visual, killing part, fancam, and ending fairy moments.",
    href: "/kpop/what-is-center-in-kpop",
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
    canonical: "/kpop/what-does-concept-mean-in-kpop",
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

export default function WhatDoesConceptMeanInKpopPage() {
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
          name: "K-pop concept",
        },
        {
          "@type": "Thing",
          name: "컨셉",
        },
        {
          "@type": "Thing",
          name: "K-pop comeback",
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
          name: "What does concept mean?",
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
              If you search &quot;concept meaning in K-pop,&quot; the simple
              answer is this: a concept is the overall mood, image, story, and
              style of a K-pop song, comeback, or era.
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
              <p>It is not only clothes.</p>

              <p>It is not only the music.</p>

              <p>It is not only the music video.</p>

              <p>In K-pop, concept is the feeling that connects everything.</p>

              <p>The song.</p>

              <p>The styling.</p>

              <p>The hair and makeup.</p>

              <p>The teaser photos.</p>

              <p>The album design.</p>

              <p>The music video.</p>

              <p>The choreography.</p>

              <p>The stage outfits.</p>

              <p>The expressions.</p>

              <p>The way members act on camera.</p>

              <p>The way fans remember that era.</p>

              <p>All of that can be part of a concept.</p>

              <p>This is why K-pop fans talk about concept so often.</p>

              <p>
                When a group has a comeback, fans do not only ask, &quot;Is the
                song good?&quot;
              </p>

              <p>They also ask:</p>

              <p>What is the concept?</p>

              <p>Does the concept fit the group?</p>

              <p>Which member suits this concept?</p>

              <p>Is the styling strong?</p>

              <p>Does the choreography match the mood?</p>

              <p>Does the music video make the concept clear?</p>

              <p>That is how K-pop is often watched.</p>

              <p>A concept gives a comeback its identity.</p>

              <p>One comeback may feel bright and playful.</p>

              <p>Another may feel dark and sharp.</p>

              <p>Another may feel elegant.</p>

              <p>Another may feel dreamy.</p>

              <p>
                Another may feel sporty, nostalgic, futuristic, school-like,
                fantasy-like, or summer-like.
              </p>

              <p>
                The concept helps fans understand what kind of world the song
                is trying to create.
              </p>

              <p>This is why concept photos matter.</p>

              <p>
                Concept photos are teaser images that show the visual mood of a
                comeback before the song is released.
              </p>

              <p>
                They may show the members in certain outfits, lighting, colors,
                locations, poses, or facial expressions.
              </p>

              <p>
                Fans look at concept photos and start guessing the direction of
                the comeback.
              </p>

              <p>Will it be soft?</p>

              <p>Will it be intense?</p>

              <p>Will it be cute?</p>

              <p>Will it be mature?</p>

              <p>Will it be strange in a good way?</p>

              <p>Will it be connected to a story?</p>

              <p>Sometimes concept photos are very clear.</p>

              <p>Sometimes they are mysterious.</p>

              <p>
                Either way, they help build the feeling before the music
                arrives.
              </p>

              <p>A concept is also connected to the title track.</p>

              <p>
                The title track is usually the main song promoted during a
                comeback. Because it gets the music video, stages, choreography,
                and most public attention, the title track often becomes the
                clearest expression of the concept.
              </p>

              <p>
                If the title track is bright, the stage may feel bright too.
              </p>

              <p>
                If the title track is intense, the choreography and expressions
                may become sharper.
              </p>

              <p>
                If the title track is elegant, the styling and body lines may
                be smoother.
              </p>

              <p>The song and concept work together.</p>

              <p>This is also why K-pop fans talk about eras.</p>

              <p>An era is the period around a comeback.</p>

              <p>
                Fans may say they love a certain era because of the styling,
                hair, outfits, stage mood, choreography, or member image during
                that time.
              </p>

              <p>
                Sometimes fans remember an era even more clearly than the exact
                release date.
              </p>

              <p>They remember the feeling.</p>

              <p>That feeling is often the concept.</p>

              <p>Concept is also connected to visual.</p>

              <p>
                In K-pop, visual does not only mean &quot;a good-looking
                member.&quot; It can also include image, styling, facial
                impression, camera memorability, and how a member is presented
                to fans.
              </p>

              <p>A concept changes how visuals are read.</p>

              <p>
                The same member can feel cute in one era, elegant in another,
                sharp in another, and relaxed in another.
              </p>

              <p>
                Hair color, makeup, outfit shape, lighting, camera angles, and
                expressions can all change how fans see someone.
              </p>

              <p>
                That is why fans may say a member &quot;fits the concept.&quot;
              </p>

              <p>
                They mean the member&apos;s image, performance, and mood match
                the comeback well.
              </p>

              <p>Concept also affects stage presence.</p>

              <p>
                Stage presence is how an idol holds attention during a
                performance.
              </p>

              <p>
                But stage presence does not look the same in every concept.
              </p>

              <p>A bright concept may need playful energy.</p>

              <p>A dark concept may need stronger eye contact.</p>

              <p>An elegant concept may need smoother control.</p>

              <p>A cute concept may need warmth and timing.</p>

              <p>
                A powerful concept may need sharp movement and confidence.
              </p>

              <p>A good performer adjusts.</p>

              <p>They do not perform every song with the same face.</p>

              <p>
                They read the concept and change their expression, energy, and
                body control to match it.
              </p>

              <p>
                That is part of why K-pop stages are fun to compare across
                eras.
              </p>

              <p>You can see how idols change.</p>

              <p>
                Sometimes a member who felt quiet in one concept becomes very
                noticeable in another.
              </p>

              <p>
                Sometimes a member&apos;s stage presence grows because the
                concept fits them better.
              </p>

              <p>
                Sometimes fans discover a new side of someone during a
                comeback.
              </p>

              <p>That is normal in K-pop.</p>

              <p>Concept is also connected to point choreography.</p>

              <p>
                Point choreography is the signature move or gesture people
                remember from a song.
              </p>

              <p>
                If the concept is playful, the point move may be easy and cute.
              </p>

              <p>If the concept is intense, the point move may be sharp.</p>

              <p>
                If the concept is elegant, the point move may use smoother
                lines.
              </p>

              <p>
                The choreography should help the concept become visible.
              </p>

              <p>
                A song can have a strong sound, but the dance gives fans
                something to see and copy.
              </p>

              <p>That is why concept and choreography work together.</p>

              <p>Concept can also affect killing parts.</p>

              <p>
                A killing part is the short moment fans replay again and again.
              </p>

              <p>
                It may be a vocal line, dance move, expression, lyric, camera
                moment, or gesture.
              </p>

              <p>A strong concept can make a killing part feel clearer.</p>

              <p>
                If the concept is mysterious, a small look can become
                memorable.
              </p>

              <p>
                If the concept is powerful, one sharp movement can stand out.
              </p>

              <p>
                If the concept is bright, a playful expression can become the
                part fans replay.
              </p>

              <p>The concept gives the moment its mood.</p>

              <p>
                For beginners, it helps to know that K-pop concepts are not
                always fixed forever.
              </p>

              <p>Some groups keep a strong overall identity.</p>

              <p>Other groups change concepts often.</p>

              <p>Some idols become known for fitting many concepts.</p>

              <p>Some groups slowly grow from one image to another.</p>

              <p>
                This is why fans may say a group is versatile.
              </p>

              <p>
                They mean the group can handle different moods without losing
                themselves.
              </p>

              <p>
                A concept change can be exciting, but it can also divide fans.
              </p>

              <p>Some fans may prefer the group&apos;s older image.</p>

              <p>Some may like the new direction.</p>

              <p>
                Some may think the concept fits one member more than another.
              </p>

              <p>These conversations are common.</p>

              <p>They are part of how fans experience comebacks.</p>

              <p>Concept is also not always deep lore.</p>

              <p>Sometimes a concept is simple.</p>

              <p>
                A summer concept can just feel fresh, bright, and easy to enjoy.
              </p>

              <p>
                A school concept can use uniforms, classroom imagery, or
                youthful energy.
              </p>

              <p>
                An elegant concept can focus on clean styling, graceful
                movement, and polished visuals.
              </p>

              <p>
                A dark concept can use stronger colors, sharper expressions,
                and heavier mood.
              </p>

              <p>Not every concept needs a complicated story.</p>

              <p>The important thing is that the mood feels clear.</p>

              <p>That clarity helps fans remember the comeback.</p>

              <p>
                If you are new to K-pop, the easiest way to notice concept is
                to look at the whole package.
              </p>

              <p>Watch the music video.</p>

              <p>Then look at the concept photos.</p>

              <p>Then watch a stage.</p>

              <p>Then watch a fancam.</p>

              <p>Ask yourself:</p>

              <p>What mood is this comeback trying to create?</p>

              <p>Do the outfits match the song?</p>

              <p>Do the expressions match the lyrics?</p>

              <p>Does the choreography match the sound?</p>

              <p>
                Does the music video show the same feeling as the stage?
              </p>

              <p>Do the members seem comfortable in this image?</p>

              <p>Those questions will help you understand concept quickly.</p>

              <p>
                Concept also explains why the same group can feel different
                every comeback.
              </p>

              <p>The members are the same.</p>

              <p>But the world around them changes.</p>

              <p>The styling changes.</p>

              <p>The song changes.</p>

              <p>The stage mood changes.</p>

              <p>The fan conversation changes.</p>

              <p>
                That is why K-pop can feel fresh even when you already know the
                group.
              </p>

              <p>A comeback gives fans a new version to watch.</p>

              <p>
                For HAEMIL readers, the easiest way to understand concept is
                this:
              </p>

              <p>A comeback gives fans a new era.</p>

              <p>A title track gives that era its main song.</p>

              <p>Concept gives the era its mood and image.</p>

              <p>Visual shows how that image is remembered on camera.</p>

              <p>
                Stage presence shows how idols perform inside that mood.
              </p>

              <p>Point choreography gives people a move to remember.</p>

              <p>Killing parts give fans moments to replay.</p>

              <p>All of these pieces work together.</p>

              <p>
                So when K-pop fans say, &quot;I love this concept,&quot; they
                usually mean more than one thing.
              </p>

              <p>They may love the song.</p>

              <p>They may love the styling.</p>

              <p>They may love the stage.</p>

              <p>They may love the way a member fits the mood.</p>

              <p>They may love the whole feeling of that era.</p>

              <p>That is concept in K-pop.</p>

              <p>
                It is the image, sound, mood, and performance all moving in the
                same direction.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">컨셉</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              컨셉 is the Korean word for concept. You will hear it in fan
              posts, comments, and comeback discussions. It means the overall
              mood, image, and style of an era — not only outfits or one photo
              set.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              English-speaking fans say &quot;concept&quot; too. Fans may talk
              about a bright concept, dark concept, elegant concept, or summer
              concept when describing how a comeback feels. For the full
              promotion cycle, see our{" "}
              <Link
                href="/kpop/what-does-comeback-mean-in-kpop"
                className="font-semibold text-[var(--accent)]"
              >
                comeback guide
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
