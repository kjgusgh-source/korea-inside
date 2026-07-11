import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-visual-in-kpop`;

const pageTitle = "What Does Visual Mean in K-pop? A Friendly Guide to the Role";
const pageDescription =
  "A friendly HAEMIL guide to what “visual” means in K-pop, how it differs from center, face of the group, ending fairy, and why fans use the word carefully.";

const quickFacts = [
  "Korean word: Visual / 비주얼",
  "Basic meaning: A member known for standing out visually in a group’s image",
  "Official or fan-used: Sometimes official, sometimes used casually by fans",
  "Not the same as: Center, face of the group, main dancer, main vocal, or ending fairy",
  "What matters: Styling, camera presence, public image, facial impression, proportions, and how memorable the member feels in photos or videos",
  "Fan phrase: 얼굴천재 can be used by fans for someone with striking visuals, but it is not a formal company role",
  "Important: “Visual” should not be treated as a simple beauty ranking",
];

const relatedGuides = [
  {
    label: "K-pop guide",
    title: "What is a fancam?",
    description:
      "Learn why fans watch fancams, what makes them go viral, and how facecams and eolppak-jikcam clips are different.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop guide",
    title: "What is an ending fairy?",
    description:
      "Learn what ending fairy means, why final close-up shots go viral, and how idols use a few seconds to show charm after a stage.",
    href: "/kpop/what-is-ending-fairy",
  },
  {
    label: "K-pop guide",
    title: "What does maknae mean?",
    description:
      "Learn what maknae means, why the youngest member matters in K-pop, and how fans use words like golden maknae.",
    href: "/kpop/what-is-maknae",
  },
  {
    label: "K-pop guide",
    title: "What is center in K-pop?",
    description:
      "Learn what center means in K-pop, why the center member matters, and how fans understand stage focus and group image.",
    href: "/kpop/what-is-center-in-kpop",
  },
  {
    label: "K-pop guide",
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
    canonical: "/kpop/what-is-visual-in-kpop",
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

export default function WhatIsVisualInKpopPage() {
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
          name: "K-pop visual",
        },
        {
          "@type": "Thing",
          name: "K-pop",
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
          name: "What does visual mean in K-pop?",
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
              What Does Visual Mean in K-pop? A Friendly Guide to the Role
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to K-pop, the word &quot;visual&quot; can sound
              strange at first.
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
                In normal English, visual just means something you can see.
              </p>

              <p>In K-pop, it can mean something more specific.</p>

              <p>
                A visual is usually the member who is known for standing out in
                the group&apos;s image. That might mean their face is very
                memorable, their styling fits the group concept well, or they
                often catch attention in photos, thumbnails, stage shots, and
                public appearances.
              </p>

              <p>But here is the important part:</p>

              <p>
                &quot;Visual&quot; is not just a simple beauty ranking.
              </p>

              <p>It is better to understand it as an image role.</p>

              <p>
                In Korean K-pop talk, fans may say 비주얼 or 비주얼 멤버.
                Sometimes a company may describe a member this way. Sometimes
                fans use it casually even if the group does not have an official
                visual position.
              </p>

              <p>That is why you should be careful with the word.</p>

              <p>
                It does not always mean, &quot;This person is officially the
                prettiest member.&quot;
              </p>

              <p>
                It can mean, &quot;This member is strongly remembered for their
                look, image, and camera presence.&quot;
              </p>

              <p>
                A visual often helps people recognize the group quickly.
              </p>

              <p>Think of a group photo.</p>

              <p>Some members may stand out because of styling.</p>

              <p>Some may stand out because of facial features.</p>

              <p>
                Some may stand out because their image matches the group concept
                very clearly.
              </p>

              <p>
                Some may become the member casual viewers remember first after
                seeing a thumbnail, a music video scene, or a stage photo.
              </p>

              <p>
                That is the kind of feeling people often mean when they say
                &quot;visual.&quot;
              </p>

              <p>Visual is also different from center.</p>

              <p>
                The center is usually the member placed in the middle of
                choreography, formations, teasers, or key performance moments.
                A center can be chosen because of dance, balance, stage presence,
                popularity, concept fit, or the way they organize the group
                visually on stage.
              </p>

              <p>A visual may be the center sometimes.</p>

              <p>But not always.</p>

              <p>
                A center is about placement and performance focus.
              </p>

              <p>A visual is more about image and visual recognition.</p>

              <p>Visual is also different from face of the group.</p>

              <p>
                The face of the group is often the member most recognized by the
                public. That can be because of variety shows, acting,
                advertisements, viral clips, hosting, past career, or general
                popularity. A face of the group may be a visual, but the two
                ideas are not exactly the same.
              </p>

              <p>One is more about public recognition.</p>

              <p>One is more about visual image.</p>

              <p>Visual is also different from ending fairy.</p>

              <p>
                An ending fairy is a short camera moment at the end of a K-pop
                performance. A member looks into the camera after the song ends,
                usually while catching their breath and holding a memorable
                expression. Any member can become an ending fairy for a stage.
              </p>

              <p>
                A visual may get a lot of attention during ending fairy
                moments.
              </p>

              <p>But ending fairy is a moment.</p>

              <p>Visual is a broader image role.</p>

              <p>The word also connects to fancams.</p>

              <p>
                Fancams often make people notice a member&apos;s expressions,
                styling, proportions, and camera presence more clearly than a
                full-group stage. That is one reason visual talk often appears
                around fancams. A person may watch one fancam and suddenly
                understand why fans say, &quot;Their visual is strong.&quot;
              </p>

              <p>Still, a good fancam is not only about appearance.</p>

              <p>
                It is also about timing, confidence, expression, and the way a
                member holds attention on stage.
              </p>

              <p>
                In Korean fan language, you may also see the phrase 얼굴천재.
              </p>

              <p>
                Literally, it means something like &quot;face genius.&quot;
                Fans use it when someone&apos;s face or image feels especially
                striking. It is a compliment, not a formal role. It can sound
                dramatic in English, but in Korean fandom spaces, exaggerated
                praise like this is common.
              </p>

              <p>Do not read every phrase too literally.</p>

              <p>K-pop fan language often uses playful exaggeration.</p>

              <p>The safest way to understand &quot;visual&quot; is this:</p>

              <p>
                A visual is a member whose appearance and image are especially
                memorable in the group&apos;s public presentation.
              </p>

              <p>That can include beauty.</p>

              <p>
                But it can also include styling, mood, expression, proportions,
                confidence, and how naturally the member fits the concept.
              </p>

              <p>
                For example, a cute concept, elegant concept, sporty concept,
                dreamy concept, or powerful concept can all make different kinds
                of visuals stand out. The &quot;visual&quot; feeling changes
                depending on the group.
              </p>

              <p>That is why the word is not as simple as it looks.</p>

              <p>
                A member can feel like a visual in one comeback because the
                styling fits them perfectly.
              </p>

              <p>
                Another member can go viral because a fancam captures their
                expression at the right moment.
              </p>

              <p>
                Another member can become known for photos, ads, or public
                appearances.
              </p>

              <p>
                K-pop visuals are connected to the whole idol system: music
                videos, album photos, stages, styling, thumbnails, fan edits,
                brand deals, and the way fans share images online.
              </p>

              <p>That does not mean fans only care about looks.</p>

              <p>
                K-pop fans talk about vocals, dance, personality, humor, stage
                presence, teamwork, fan communication, and many other things.
                But K-pop is also a very visual culture, so image language
                becomes part of how fans describe idols.
              </p>

              <p>For first-time fans, the best approach is simple.</p>

              <p>
                Use &quot;visual&quot; as a cultural word, not as a harsh
                ranking.
              </p>

              <p>Do not use it to put members against each other.</p>

              <p>Do not assume every group has one official visual.</p>

              <p>Do not assume the visual is always the most popular member.</p>

              <p>
                And do not assume visual means the member has no other talent.
              </p>

              <p>
                Many idols called visuals are also strong performers, singers,
                dancers, hosts, actors, or variety personalities.
              </p>

              <p>The word is only one piece of the picture.</p>

              <p>
                If someone says, &quot;Who is the visual?&quot; they may be
                asking which member is known for standing out visually.
              </p>

              <p>
                If someone says, &quot;Her visual is crazy,&quot; they usually
                mean her look, styling, or camera presence is very impressive.
              </p>

              <p>
                If someone says, &quot;This comeback fits his visual,&quot; they
                mean the concept makes his image stand out well.
              </p>

              <p>Once you understand that, the word becomes less awkward.</p>

              <p>It is not just about looking pretty.</p>

              <p>
                It is about how an idol is seen, remembered, styled, and
                recognized.
              </p>

              <p>
                That is why &quot;visual&quot; appears so often in K-pop
                conversations.
              </p>

              <p>K-pop is music.</p>

              <p>But it is also performance.</p>

              <p>It is also image.</p>

              <p>It is also camera language.</p>

              <p>
                And &quot;visual&quot; is one of the words fans use to talk
                about that image world.
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
