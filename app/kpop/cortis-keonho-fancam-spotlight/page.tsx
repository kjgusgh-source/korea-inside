import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/cortis-keonho-fancam-spotlight`;

const pageTitle =
  "K-pop Spotlight: Who Is CORTIS Keonho, the “French Fry Boy” Fans Keep Noticing?";
const pageDescription =
  "A friendly HAEMIL spotlight on CORTIS Keonho, the rookie member some fans remember as “French Fry Boy,” and why his JoyRide fancam is an easy first entry point into CORTIS.";

const relatedGuides = [
  {
    label: "Rookie guide",
    title: "K-pop Rookie Guide: Who Is CORTIS?",
    description:
      "A simple group-level starter guide if you found Keonho first and now want to understand CORTIS.",
    href: "/kpop/who-is-cortis",
  },
  {
    label: "K-pop guide",
    title: "What Is a Fancam in K-pop?",
    description:
      "Learn why fancams matter, how fans use them, and why one focused stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop guide",
    title: "K-pop Glossary for New Fans",
    description:
      "A beginner-friendly guide to Korean K-pop words and fan terms you will see around fancams, stages, and member clips.",
    href: "/kpop/glossary",
  },
  {
    label: "Member guide",
    title: "Keonho (CORTIS)",
    description:
      "Start here if you want a simple member guide after watching Keonho’s JoyRide fancam.",
    href: "/kpop/cortis/keonho",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/cortis-keonho-fancam-spotlight",
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

export default function CortisKeonhoFancamSpotlightPage() {
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
          name: "CORTIS",
        },
        {
          "@type": "Thing",
          name: "K-pop fancam",
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
          name: "CORTIS Keonho fancam spotlight",
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
              Who Is CORTIS Keonho, the &quot;French Fry Boy&quot; Fans Keep
              Noticing?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Sometimes a rookie idol becomes easier to remember because of one
              very small detail.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Not a huge viral headline. Not a dramatic title. Just a nickname, a
              short clip, or one fancam that makes people pause for a second and
              think, &quot;Wait, who is that?&quot;
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              For CORTIS Keonho, that kind of first memory matters.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official fancam
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              CORTIS Keonho — &quot;JoyRide&quot; at MCOUNTDOWN
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Mnet M2 official fancam: [입덕직캠] CORTIS KEONHO FanCam 4K
              &quot;JoyRide&quot; @ MCOUNTDOWN_2026.2.5
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="qx8VbGEWcBo"
                title="CORTIS Keonho JoyRide Fancam"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=qx8VbGEWcBo"
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
                CORTIS is a five-member boy group from BIGHIT MUSIC, with
                MARTIN, JAMES, JUHOON, SEONGHYEON, and KEONHO. Because of the
                BIGHIT name, many K-pop fans naturally check the group once. That
                part is easy to understand. A new boy group from the company
                behind BTS and TOMORROW X TOGETHER will always make people
                curious.
              </p>

              <p>But company attention is only the first click.</p>

              <p>
                The harder part is becoming the member someone remembers after
                the video ends. That usually happens through something smaller
                and more personal: a face that becomes easy to spot, a stage
                expression, a fan nickname, or a fancam that gives one member
                enough space to leave an impression.
              </p>

              <p>That is where Keonho becomes interesting.</p>

              <p>
                Some fans remember him with the nickname &quot;French Fry
                Boy,&quot; which comes from the Korean-style way fans often
                attach a small, oddly specific image to a rookie. In Korean fan
                spaces, a nickname does not always have to sound serious to
                work. Sometimes it is cute, random, and strangely sticky — and
                that is exactly why people remember it.
              </p>

              <p>
                For an international fan, &quot;French Fry Boy&quot; may sound
                funny at first. But that is part of the point. It gives Keonho a
                first hook before you even know every CORTIS song or every member
                name. You may not remember the full group order yet, but you
                might remember &quot;the French Fry Boy from CORTIS.&quot; In
                rookie K-pop, that kind of small memory can be powerful.
              </p>

              <p>
                His birthday also has that same easy-to-remember quality:
                February 14, 2009. Since it falls on Valentine&apos;s Day, it
                becomes one of those profile details fans can pick up quickly
                without feeling like they are studying a chart.
              </p>

              <p>
                Still, the nickname and birthday are only the surface. The
                better reason to watch Keonho is the stage itself.
              </p>

              <p>
                His &quot;JoyRide&quot; fancam works well as a first entry point
                because it lets you focus on one performer without trying to
                memorize the whole group at once. That is one reason fancams
                matter so much for rookie groups. A full group stage can be
                exciting, but it can also feel crowded when you are new. A fancam
                slows the process down. You follow one member, notice how they
                move, and decide whether you want to click another video.
              </p>

              <p>
                With Keonho, the appeal is not about being loud all the time. It
                is more about how quickly he becomes recognizable. In a new
                group, that matters. A rookie member does not need to look like a
                finished legend on day one. Sometimes the more interesting thing
                is seeing the shape of a performer forming in real time.
              </p>

              <p>
                That is why Keonho is a useful door into CORTIS right now.
              </p>

              <p>
                He gives new fans a simple path: learn the group name, remember
                one member, watch one fancam, then slowly connect the rest. From
                there, CORTIS starts to feel less like &quot;BIGHIT&apos;s new
                boy group&quot; and more like five individual members you can
                actually follow.
              </p>

              <p>
                So if you are new to CORTIS, Keonho is not the only place to
                start. But he is a very natural one.
              </p>

              <p>
                Start with the &quot;JoyRide&quot; fancam. Notice the stage
                energy. Notice the small details that make him easy to pick out.
                And if the phrase &quot;French Fry Boy&quot; stays in your head
                longer than expected, that is exactly how rookie K-pop often
                begins.
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
