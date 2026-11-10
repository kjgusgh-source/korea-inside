import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";
import OfficialYouTubePlayer from "./OfficialYouTubePlayer";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-visual-in-kpop`;

const pageTitle = "What Does Visual Mean in K-pop? A Friendly Guide to the Role";
const pageDescription =
  "A friendly HAEMIL guide to what “visual” means in K-pop, how it differs from center, face of the group, ending fairy, and why fans use the word carefully.";

// The visible H1 is shorter than the SEO title; <title>, Open Graph, Twitter
// and JSON-LD still use pageTitle.
const visibleHeading = "What Does Visual Mean in K-pop?";

const featuredVideo = {
  videoId: "To2kgXTx1N8",
  youtubeTitle:
    "[얼빡직캠 4K] 아스트로 차은우 'Candy Sugar Pop' (ASTRO Cha Eunwoo Facecam) @뮤직뱅크(Music Bank) 220520",
  channelName: "KBS Kpop",
  channelUrl: "https://www.youtube.com/@KBSKpop",
};

const quickFacts = [
  "Korean word: Visual / 비주얼",
  "Basic meaning: A member known for standing out visually in a group’s image",
  "Official or fan-used: Often used casually by fans and media, so it does not necessarily mean an official position",
  "Not the same as: Center, face of the group, main dancer, main vocal, or ending fairy",
  "What matters: Styling, camera presence, public image, facial impression, proportions, and how memorable the member feels in photos or videos",
  "Fan phrase: 얼굴천재 can be used by fans for someone with striking visuals, but it is not a formal company role",
  "Important: “Visual” should not be treated as a simple beauty ranking",
];

const roleComparison = [
  {
    role: "Visual",
    color: "var(--vg-visual)",
    idea: "Image and visual recognition",
    where: "Photos, thumbnails, stage shots",
  },
  {
    role: "Center",
    color: "var(--vg-center)",
    idea: "Placement and performance focus",
    where: "Middle of formations, key moments",
  },
  {
    role: "Face of the group",
    color: "var(--vg-face)",
    idea: "Public recognition",
    where: "Variety, acting, ads, viral clips",
  },
];

const fanPhrases = [
  {
    phrase: "“Who is the visual?”",
    meaning:
      "They may be asking which member is known for standing out visually.",
  },
  {
    phrase: "“Her visual is crazy.”",
    meaning:
      "They usually mean her look, styling, or camera presence is very impressive.",
  },
  {
    phrase: "“This comeback fits his visual.”",
    meaning: "They mean the concept makes his image stand out well.",
  },
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

const sectionClass =
  "rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8";
const h2Class = "text-xl font-semibold text-[var(--text)] md:text-2xl";
const bodyClass =
  "max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg";
// Underlined, text-colored links keep enough contrast in both themes.
const inlineLinkClass =
  "font-semibold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4";

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

      {/* Role colors for the illustration and table, light and dark. */}
      <style>{`
        .visual-guide {
          --vg-visual: #c2410c;
          --vg-center: #0f766e;
          --vg-face: #6d28d9;
        }
        html[data-theme="dark"] .visual-guide,
        html.dark .visual-guide {
          --vg-visual: #fb923c;
          --vg-center: #2dd4bf;
          --vg-face: #a78bfa;
        }
      `}</style>

      <main className="visual-guide min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-10">
            <Link
              href="/kpop"
              className="mb-4 inline-flex text-sm font-semibold text-[var(--accent)] md:mb-6"
            >
              ← Back to K-pop
            </Link>

            <div className="flex items-center gap-3">
              <TermBadge term="visual" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-3 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-tight md:mt-4 md:text-6xl md:leading-tight">
              {visibleHeading}
            </h1>

            <p className="mt-3 max-w-3xl text-[17px] leading-7 text-[var(--text)] md:mt-6 md:text-xl md:leading-9">
              In K-pop, a <strong className="font-semibold">visual (비주얼)</strong>{" "}
              is a member known for standing out in the group&apos;s image,
              often the face people notice first in photos and on stage.
              It&apos;s an image role, not a beauty ranking.
            </p>

            <OfficialYouTubePlayer
              {...featuredVideo}
              note="Used here as an example of a facecam, not to name ASTRO’s official visual."
            />
          </article>

          <section aria-labelledby="clip-heading" className={sectionClass}>
            <div className={bodyClass}>
              <h2 id="clip-heading" className={h2Class}>
                What this clip shows (and what it can&apos;t)
              </h2>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--accent)]">•</span>
                  <span>
                    <strong className="font-semibold text-[var(--text)]">
                      It&apos;s a 얼빡직캠 (facecam).
                    </strong>{" "}
                    The camera stays close on one member for most of the
                    performance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--accent)]">•</span>
                  <span>
                    Up close, you notice the image side: expression, styling,
                    and how someone comes across on camera. These are the kinds
                    of things fans talk about when they talk about a
                    member&apos;s &quot;visual.&quot;
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--accent)]">•</span>
                  <span>
                    Still, a good fancam is not only about appearance. It is
                    also about timing, confidence, expression, and the way a
                    member holds attention on stage.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--accent)]">•</span>
                  <span>
                    <strong className="font-semibold text-[var(--text)]">
                      What it can&apos;t show:
                    </strong>{" "}
                    a facecam follows one person, so it can&apos;t tell you who
                    stands at the center or who a group&apos;s visual is. For
                    placement, you&apos;d watch a full-group stage.
                  </span>
                </li>
              </ul>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Korean media nickname
                  </p>
                  <p className="mt-1">
                    <span lang="ko" className="font-semibold text-[var(--text)]">
                      얼굴천재
                    </span>{" "}
                    (&quot;face genius&quot;) ·{" "}
                    <a
                      href="https://www.wkorea.com/2019/03/25/wonder-boy-%EC%B0%A8%EC%9D%80%EC%9A%B0"
                      className={inlineLinkClass}
                    >
                      W Korea (2019)
                    </a>
                    ,{" "}
                    <a
                      href="https://sports.khan.co.kr/article/202404161706013"
                      className={inlineLinkClass}
                    >
                      Sports Kyunghyang (2024)
                    </a>
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Nickname, not a position
                  </p>
                  <p className="mt-1">
                    A nickname like 얼굴천재 describes how people see someone.
                    It is not the same thing as an official position in a
                    group.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="compare-heading" className={sectionClass}>
            <div className="max-w-3xl">
              <h2 id="compare-heading" className={h2Class}>
                Visual vs center vs face of the group
              </h2>

              <figure className="mt-5 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] px-3 pb-3 pt-2">
                <svg
                  viewBox="0 8 340 162"
                  role="img"
                  aria-labelledby="roles-figure-title"
                  className="block h-auto w-full"
                >
                  <title id="roles-figure-title">
                    One group photo, three different questions: the member in
                    the middle is the center, a different member catches the
                    camera as the visual, and another is the face the public
                    already knows.
                  </title>
                  <line x1="16" y1="146" x2="324" y2="146" stroke="var(--border)" strokeWidth="2" />
                  <g fill="var(--muted)" opacity=".35">
                    <circle cx="50" cy="70" r="15" />
                    <rect x="31" y="90" width="38" height="56" rx="16" />
                    <circle cx="290" cy="70" r="15" />
                    <rect x="271" y="90" width="38" height="56" rx="16" />
                  </g>
                  <g fill="var(--vg-visual)">
                    <circle cx="110" cy="70" r="15" />
                    <rect x="91" y="90" width="38" height="56" rx="16" />
                  </g>
                  <g stroke="var(--vg-visual)" strokeWidth="2.5" fill="none" strokeLinecap="round">
                    <path d="M84 46 v-10 h10" />
                    <path d="M136 46 v-10 h-10" />
                    <path d="M84 96 v10 h10" />
                    <path d="M136 96 v10 h-10" />
                  </g>
                  <g fill="var(--vg-center)">
                    <circle cx="170" cy="70" r="15" />
                    <rect x="151" y="90" width="38" height="56" rx="16" />
                  </g>
                  <path d="M170 152 l-7 10 h14 z" fill="var(--vg-center)" />
                  <g fill="var(--vg-face)">
                    <circle cx="230" cy="70" r="15" />
                    <rect x="211" y="90" width="38" height="56" rx="16" />
                  </g>
                  <g transform="translate(244 30)">
                    <rect x="0" y="0" width="26" height="18" rx="4" fill="var(--vg-face)" />
                    <path d="M8 18 l-3 6 M18 18 l3 6" stroke="var(--vg-face)" strokeWidth="2" />
                    <circle cx="13" cy="9" r="3.4" fill="#fff" />
                  </g>
                  <text x="110" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--vg-visual)">
                    VISUAL
                  </text>
                  <text x="170" y="43" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--vg-center)">
                    CENTER
                  </text>
                  <text x="230" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--vg-face)">
                    FACE
                  </text>
                </svg>
              </figure>

              <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)]">
                <table className="w-full border-collapse text-left text-sm leading-6 md:text-base">
                  <caption className="sr-only">
                    How visual, center and face of the group differ
                  </caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Role</th>
                      <th scope="col">Main idea and where you notice it</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roleComparison.map((row) => (
                      <tr
                        key={row.role}
                        className="border-t border-[var(--border)] first:border-t-0"
                      >
                        <th
                          scope="row"
                          className="w-[42%] px-4 py-3 align-middle font-semibold text-[var(--text)] md:w-[30%]"
                        >
                          <span className="flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="h-2.5 w-2.5 flex-none rounded-full"
                              style={{ background: row.color }}
                            />
                            {row.role}
                          </span>
                        </th>
                        <td className="px-4 py-3 text-[var(--muted)]">
                          {row.idea}
                          <span className="block text-xs leading-5 text-[var(--muted)] md:text-sm">
                            {row.where}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                One member can be more than one of these, but not always. An{" "}
                <Link href="/kpop/what-is-ending-fairy" className={inlineLinkClass}>
                  ending fairy
                </Link>{" "}
                is different again: a short camera moment at the end of a stage,
                and any member can become one. For placement on stage, see{" "}
                <Link href="/kpop/what-is-center-in-kpop" className={inlineLinkClass}>
                  what center means
                </Link>
                .
              </p>
            </div>
          </section>

          <section aria-labelledby="more-clips-heading" className={sectionClass}>
            <div className="max-w-3xl">
              <h2 id="more-clips-heading" className={h2Class}>
                More clips to compare
              </h2>

              <div className="mt-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-base leading-7 text-[var(--muted)]">
                <p className="font-semibold text-[var(--text)]">
                  Stray Kids Felix · KBS Kpop facecam
                </p>
                <p className="mt-1">
                  In our spotlight, we look at how his deep voice and bright,
                  camera-aware expressions work together. His official JYP
                  profile (checked November 2026) lists his name and birthday,
                  not a position, so &quot;visual&quot; here is fan language.
                </p>
                <Link
                  href="/kpop/stray-kids-felix-soul-beam-facecam-spotlight"
                  className={`mt-2 inline-flex ${inlineLinkClass}`}
                >
                  Read the spotlight →
                </Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="nickname-heading" className={sectionClass}>
            <div className={bodyClass}>
              <h2 id="nickname-heading" className={h2Class}>
                Nickname or official position?
              </h2>

              <p>
                In Korean K-pop talk, fans may say 비주얼 or 비주얼 멤버. Fans
                and media often use it casually, so hearing it does not
                necessarily mean a member holds an official position.
              </p>

              <p>In Korean fan language, you may also see the phrase 얼굴천재.</p>

              <p>
                Literally, it means something like &quot;face genius.&quot;
                Fans use it when someone&apos;s face or image feels especially
                striking. It is a compliment, not a formal role. It can sound
                dramatic in English, but in Korean fandom spaces, exaggerated
                praise like this is common.
              </p>

              <p>
                Korean media use it too: W Korea&apos;s 2019 story on Cha
                Eun-woo put &quot;얼굴 천재&quot; in its headline.
              </p>

              <p>
                <span lang="ko" className="font-semibold text-[var(--text)]">
                  비주얼 담당
                </span>{" "}
                (&quot;in charge of visuals&quot;) shows up in headlines as
                well. A 2025{" "}
                <a
                  href="https://www.xportsnews.com/article/2024617"
                  className={inlineLinkClass}
                >
                  Xportsnews
                </a>{" "}
                showcase photo story used it for NOWS&apos;s Siyun. The label
                came from the headline, not an agency profile.
              </p>

              <p>
                Do not read every phrase too literally. K-pop fan language often
                uses playful exaggeration.
              </p>
            </div>
          </section>

          <section aria-labelledby="fixed-heading" className={sectionClass}>
            <div className={bodyClass}>
              <h2 id="fixed-heading" className={h2Class}>
                Why &quot;visual&quot; is not one fixed thing
              </h2>

              <p>
                A visual is a member whose appearance and image are
                especially memorable in the group&apos;s public presentation.
              </p>

              <p>
                That can include beauty. But it can also include styling,
                mood, expression, proportions, confidence, and how naturally
                the member fits the concept.
              </p>

              <p>
                For example, a cute concept, elegant concept, sporty concept,
                dreamy concept, or powerful concept can all make different
                kinds of visuals stand out. The &quot;visual&quot; feeling
                changes depending on the group. That is why the word is not
                as simple as it looks.
              </p>

              <p>
                A member can feel like a visual in one comeback because the
                styling fits them perfectly. Another member can go viral
                because a fancam captures their expression at the right
                moment. Another member can become known for photos, ads, or
                public appearances.
              </p>

              <p>
                K-pop visuals are connected to the whole idol system: music
                videos, album photos, stages, styling, thumbnails, fan edits,
                brand deals, and the way fans share images online.
              </p>

              <p>
                That does not mean fans only care about looks. K-pop fans talk
                about vocals, dance, personality, humor, stage presence,
                teamwork, fan communication, and many other things. But K-pop
                is also a very visual culture, so image language becomes part
                of how fans describe idols.
              </p>

              <h2 className={`mt-8 ${h2Class}`}>How to use the word carefully</h2>

              <p>
                For first-time fans, the best approach is simple. Use
                &quot;visual&quot; as a cultural word, not as a harsh ranking.
              </p>

              <p>
                It does not always mean, &quot;This person is officially the
                prettiest member.&quot; It can mean, &quot;This member is
                strongly remembered for their look, image, and camera
                presence.&quot;
              </p>

              <p>
                Do not use it to put members against each other. Do not
                assume every group has one official visual. Do not assume the
                visual is always the most popular member. And do not assume
                visual means the member has no other talent.
              </p>

              <p>
                Many idols called visuals are also strong performers,
                singers, dancers, hosts, actors, or variety personalities.
                The word is only one piece of the picture.
              </p>

              <ul className="space-y-3">
                {fanPhrases.map((item) => (
                  <li
                    key={item.phrase}
                    className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-base leading-7"
                  >
                    <span className="block font-semibold text-[var(--text)]">
                      If someone says {item.phrase}
                    </span>
                    <span className="block">{item.meaning}</span>
                  </li>
                ))}
              </ul>

              <p>
                Once you understand that, the word becomes less awkward. It
                is not just about looking pretty. It is about how an idol is
                seen, remembered, styled, and recognized.
              </p>

              <p>
                That is why &quot;visual&quot; appears so often in K-pop
                conversations.
              </p>

              <h2 className={`mt-8 ${h2Class}`}>
                Why the word matters so much in K-pop
              </h2>

              <p>
                K-pop is music. But it is also performance. It is also image.
                It is also camera language.
              </p>

              <p>
                And &quot;visual&quot; is one of the words fans use to talk
                about that image world.
              </p>

              <details className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4">
                <summary className="cursor-pointer text-base font-semibold text-[var(--text)]">
                  Quick facts
                </summary>
                <ul className="mt-3 space-y-3 text-base leading-7">
                  {quickFacts.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <span aria-hidden="true" className="text-[var(--gold)]">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </details>
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
