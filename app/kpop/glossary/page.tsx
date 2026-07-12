import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/glossary`;

const pageTitle =
  "K-pop Glossary | Bias, Maknae, Fancam, Ending Fairy & Korean Fan Words";
const pageDescription =
  "A friendly guide to Korean K-pop fan words like bias, maknae, center, fancam, ending fairy, eolppak-jikcam, aegyo, and horanghae.";
  export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: "/kpop/glossary",
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

const glossaryTerms = [
  {
    term: "Bias",
    korean: "최애",
    romanization: "choe-ae",
    meaning: "Your favorite member in a K-pop group.",
    note:
      "In fandom talk, bias is often the member you naturally notice, follow, rewatch, or feel attached to — not only a simple favorite. Having a bias does not mean you need to ignore other members.",
    example:
      "You watch one fancam and suddenly keep searching that member.",
    href: "/kpop/what-does-bias-mean",
  },
  {
    term: "Maknae",
    korean: "막내",
    romanization: "maknae",
    meaning: "The youngest person in a group, family, team, or social setting.",
    note:
      "In K-pop, maknae usually means the youngest idol member. Fans often notice growth, group dynamics, and how older members interact with the youngest — not only age.",
    example: "Fans may watch a maknae grow more confident across comeback eras.",
    href: "/kpop/what-is-maknae",
  },
  {
    term: "Golden maknae",
    korean: "황금막내",
    romanization: "hwanggeum-maknae",
    meaning: "A youngest member who seems good at almost everything.",
    note:
      "This expression is strongly connected with Jung Kook because fans noticed his singing, dancing, performing, and many other skills from early on.",
    example: "ARMY often call Jung Kook the golden maknae.",
    href: "/kpop/what-is-maknae"
  },
  {
    term: "Center",
    korean: "센터",
    romanization: "senteo",
    meaning:
      "The member placed in the main focus of a group’s stage, choreography, photo, teaser, or performance moment.",
    note:
      "Center is about focus and placement, not only standing in the literal middle. It does not automatically mean the best singer, dancer, or most popular member.",
    example:
      "The member in the middle of the chorus formation is often where fans first notice center.",
    href: "/kpop/what-is-center-in-kpop"
  },
  {
    term: "Visual",
    korean: "비주얼",
    romanization: "bijueol",
    meaning:
      "The member often associated with a group's public image or visual identity.",
    note:
      "Visual does not mean the only attractive member. It often points to who fits the group's concept photos, teasers, or first impression especially well.",
    example:
      "Fans may talk about a member's visual fit in a comeback concept photo.",
    href: "/kpop/what-is-visual-in-kpop",
  },
  {
    term: "Fancam",
    korean: "직캠",
    romanization: "jikcam",
    meaning: "A video focused on one idol during a performance.",
    note:
      "In K-pop today, many fancams are official music-show videos, not only fan recordings. They let fans watch small expressions, styling, and details that are easy to miss in a full-stage video.",
    example: "A Karina fancam can show her sharp stage presence clearly.",
    href: "/kpop/what-is-a-fancam"
  },
  {
    term: "Rookie group",
    korean: "루키",
    romanization: "ruki",
    meaning:
      "A K-pop group in its early debut period, when fans are still learning the members and the team's public image.",
    note:
      "Fans often discover a rookie group through one fancam, one short clip, or the first member they remember — not the whole team at once.",
    example:
      "A fan may hear CORTIS first, then remember Keonho through a JoyRide fancam before learning every member name.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
  },
  {
    term: "Eolppak-jikcam",
    korean: "얼빡직캠",
    romanization: "eolppak-jikcam",
    meaning:
      "A Korean fan slang term for a close-up fancam where the idol’s face fills much of the screen.",
    note:
      "It is casual fandom language, not a formal broadcast term. Fans watch for expressions, eye contact, breathing, and tiny mood changes that are easy to miss in a full-stage video.",
    example:
      "Eye contact during a quiet line can become the moment fans replay in an 얼빡직캠.",
    href: "/kpop/what-is-close-up-fancam-in-kpop",
  },
  {
    term: "Ending fairy",
    korean: "엔딩요정",
    romanization: "ending-yojeong",
    meaning:
      "The final close-up camera moment after a K-pop performance ends.",
    note:
      "Fans notice timing, breathing, expression control, and camera awareness — not only appearance. A strong ending fairy is about how the idol uses those final few seconds.",
    example: "An ending fairy clip can become viral even after the stage ends.",
    href: "/kpop/what-is-ending-fairy"
  },
  {
    term: "Killing part",
    korean: "킬링파트",
    romanization: "killing part",
    meaning:
      "The short part of a song or performance that fans remember, replay, quote, or share.",
    note:
      "“Killing” here does not mean violence. In K-pop fan language, it means the standout moment that hits strongly — a vocal line, move, expression, or camera moment.",
    example:
      "Fans may replay one line before the chorus or a hand gesture everyone copies in a dance challenge.",
    href: "/kpop/what-is-killing-part-in-kpop",
  },
  {
    term: "Stage presence",
    korean: "무대 존재감",
    romanization: "mude jonsaegam",
    meaning:
      "The way an idol holds attention during a performance.",
    note:
      "Stage presence is not only dancing hard or making big expressions. It can include timing, expression control, camera awareness, energy control, and how well the idol fits the song concept.",
    example:
      "Fans may notice stage presence when a member stays interesting even while not singing or standing in the center.",
    href: "/kpop/what-is-stage-presence-in-kpop",
  },
  {
    term: "Aegyo",
    korean: "애교",
    romanization: "aegyo",
    meaning: "Cute behavior, expressions, or speech used to charm people.",
    note:
      "Aegyo can be natural, playful, or intentionally exaggerated. Some idols are known for being good at it, while others are loved because they feel awkward doing it.",
    example: "Fans sometimes ask idols to show aegyo during live streams.",
    href: "/kpop/what-is-aegyo",
  },
  {
    term: "All-rounder",
    korean: "올라운더",
    romanization: "olla-undeo",
    meaning:
      "An idol who can do many things well, such as singing, dancing, rapping, and performing.",
    note:
      "Korean fans also use the English-based word 올라운더. It is often used for members who do not fit into only one role.",
    example: "Hayoung is often appreciated as an all-rounder type member.",
  },
  {
    term: "Horanghae",
    korean: "호랑해",
    romanization: "horanghae",
    meaning: "A playful Hoshi phrase mixing tiger and love.",
    note:
      "It sounds like 사랑해, meaning 'I love you,' but uses 호랑 from 호랑이, meaning tiger. It is closely connected with Hoshi’s tiger character.",
    example: "CARAT know horanghae as one of Hoshi’s signature expressions.",
  },
];

export default function KpopGlossaryPage() {
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
          name: "K-pop glossary",
        },
        {
          "@type": "Thing",
          name: "Korean fan words",
        },
        {
          "@type": "Thing",
          name: "K-pop fandom culture",
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
          name: "K-pop Glossary",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "K-pop Glossary",
      description: pageDescription,
      url: pageUrl,
      inLanguage: "en",
      hasDefinedTerm: glossaryTerms.map((item) => ({
        "@type": "DefinedTerm",
        name: item.term,
        description: item.meaning,
        termCode: item.korean,
        alternateName: [item.korean, item.romanization],
      })),
    },
  ];
  return (
    <>
      <JsonLd data={structuredData} />

    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
        <SiteHeader />

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <Link
            href="/kpop"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back to K-pop
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop glossary
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            K-pop fan words, explained like a local friend would.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            K-pop has its own language. Some words come from Korean, some come
            from English-speaking fandoms, and some only make sense after you
            watch a few stages. This glossary keeps things simple so new fans
            can understand the words they see in comments, fancams, and idol
            guides.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {glossaryTerms.map((item) => (
            <article
              key={item.term}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {item.korean} · {item.romanization}
                </p>

                <h2 className="text-2xl font-semibold">{item.term}</h2>
              </div>

              <p className="mt-4 text-base font-medium leading-7">
                {item.meaning}
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.note}
              </p>

              <div className="mt-5 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.example}
                </p>
              </div>
              {"href" in item && item.href && (
  <Link
    href={item.href}
    className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
  >
    Read full guide →
  </Link>
)}
            </article>
          ))}
        </section>
      </div>
    </main>
    </>
  );
}