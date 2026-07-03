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
      "In English-speaking fandoms, people often say 'my bias.' In Korean, fans usually say 최애, which means the person you like the most.",
    example: "My bias in IVE is Wonyoung.",
    href: "/kpop/what-does-bias-mean",
  },
  {
    term: "Maknae",
    korean: "막내",
    romanization: "maknae",
    meaning: "The youngest member of a group.",
    note:
      "Maknae is not only about age. In K-pop, fans often enjoy watching how the youngest member grows inside the team.",
    example: "Jung Kook is BTS’s maknae.",
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
      "The member who often represents the group’s image or catches attention in a performance.",
    note:
      "Center does not only mean standing in the middle. It can also mean the member who best delivers the group’s mood at a certain moment.",
    example: "Wonyoung is often talked about as a strong center figure.",
    href: "/kpop/what-is-center-in-kpop"
  },
  {
    term: "Fancam",
    korean: "직캠",
    romanization: "jikcam",
    meaning: "A video focused on one idol during a performance.",
    note:
      "Fancams are a big part of K-pop culture because they let fans watch small expressions, gestures, and details that are easy to miss in a full-stage video.",
    example: "A Karina fancam can show her sharp stage presence clearly.",
    href: "/kpop/what-is-fancam"
  },
  {
    term: "Eolppak-jikcam",
    korean: "얼빡직캠",
    romanization: "eolppak-jikcam",
    meaning:
      "A very close-up fancam where an idol’s face fills most of the screen.",
    note:
      "얼빡 is casual fan slang for a close face shot, and 직캠 means fancam. Fans watch these clips to catch tiny changes in expression.",
    example: "Hayoung’s eolppak-jikcam makes her small smiles easier to notice.",
    href: "/kpop/what-is-a-fancam"
  },
  {
    term: "Ending fairy",
    korean: "엔딩요정",
    romanization: "ending-yojeong",
    meaning:
      "The idol shown in a close-up at the end of a music show performance.",
    note:
      "Ending fairy moments became famous because idols use that short final camera shot to show charm, humor, confidence, or a memorable expression.",
    example: "An ending fairy clip can become viral even after the stage ends.",
    href: "/kpop/what-is-ending-fairy"
  },
  {
    term: "Aegyo",
    korean: "애교",
    romanization: "aegyo",
    meaning: "Cute behavior, expressions, or speech used to charm people.",
    note:
      "Aegyo can be natural, playful, or intentionally exaggerated. Some idols are known for being good at it, while others are loved because they feel awkward doing it.",
    example: "Fans sometimes ask idols to show aegyo during live streams.",
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