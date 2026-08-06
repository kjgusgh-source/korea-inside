import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-illit`;

const pageTitle =
  "Who Is ILLIT? A Friendly Guide to the Five-Member Group Behind ‘Magnetic’";
const pageDescription =
  "A friendly HAEMIL guide to ILLIT, the five-member BELIFT LAB girl group behind ‘Magnetic,’ and why new K-pop fans may want to start with their group page and Wonhee fancam spotlight.";

const relatedGuides = [
  {
    label: "Group page",
    title: "Start with the ILLIT group page",
    description:
      "See the group overview, starter tags, and the members HAEMIL covers so far.",
    href: "/kpop/illit",
  },
  {
    label: "Member guide",
    title: "Meet Wonhee",
    description:
      "Start here if you first noticed Wonhee through a fancam, a close-up clip, or one of ILLIT’s bright stage moments.",
    href: "/kpop/illit/wonhee",
  },
  {
    label: "K-pop Spotlight",
    title: "Watch the Wonhee fancam spotlight",
    description:
      "A closer look at Wonhee’s ‘It’s Me’ fancam and why clear expressions and small timing changes make her easy to remember.",
    href: "/kpop/illit-wonhee-fancam-spotlight",
  },
  {
    label: "K-pop guide",
    title: "Learn what a rookie group means in K-pop",
    description:
      "A simple guide to how K-pop fans discover rookie groups through first stages, short clips, fancams, and the first member they remember.",
    href: "/kpop/what-is-a-rookie-group-in-kpop",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-illit",
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

export default function WhoIsIllitPage() {
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
          name: "ILLIT",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "BELIFT LAB",
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
          name: "Who is ILLIT?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
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
              Girl group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is ILLIT? A Friendly Guide to the Five-Member Group Behind
              &apos;Magnetic&apos;
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to K-pop, ILLIT might be a name you have seen
              everywhere without quite knowing where to start.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>That is a fair place to be.</p>

              <p>
                They are a five-member girl group under BELIFT LAB — YUNAH,
                MINJU, MOKA, Wonhee, and IROHA — and they debuted in March
                2024 through a very public route: the survival show{" "}
                <em>R U Next?</em>, a joint project between HYBE and JTBC
                that let viewers watch the group come together in real time.
              </p>

              <p>
                For Korean viewers, that already explains a lot of the
                appeal. A rookie group is not always introduced through a
                polished profile video. ILLIT arrived through weeks of
                broadcast, so by debut day, some fans already felt like they
                had watched the group get built.
              </p>

              <p>
                For international fans discovering ILLIT later, that
                backstory can be easy to miss. What is easier to notice
                first is the music.
              </p>

              <p>
                Their debut mini album, <em>SUPER REAL ME</em>, and its title
                track &quot;Magnetic,&quot; did something rookie groups
                rarely manage this quickly — the song reached both the
                Billboard Hot 100 and the Billboard Global 200. That is the
                kind of detail that tends to make new listeners stop and pay
                closer attention.
              </p>

              <p>
                But chart placements are not always the easiest way into a
                group. A number is hard to feel connected to. A face is not.
              </p>

              <p>That is where Wonhee comes in.</p>

              <p>
                For many new HAEMIL readers, Wonhee has been an easy first
                member to notice inside ILLIT. Her expressions come through
                clearly on camera, and close-up fancams tend to catch small
                timing changes — a glance, a smile held a beat too long —
                that make her presence easy to follow even before you know
                the rest of the group.
              </p>

              <p>You do not need to start with all five members at once.</p>

              <p>
                Watch one Wonhee clip. Let her become familiar. Then widen
                out to the rest of ILLIT — YUNAH, MINJU, MOKA, and IROHA —
                once one face already feels like something you recognize.
              </p>

              <p>
                This is also a good moment to mention the name itself,
                because it is one of those small K-pop details that makes
                more sense once someone explains it. ILLIT comes from
                combining &quot;I will&quot; and &quot;it&quot; — the idea of
                becoming an &quot;it&quot; group, the kind of act people
                cannot stop talking about. Their fandom name, GLLIT, follows
                the same idea.
              </p>

              <p>
                None of this means ILLIT is a finished story. They are still
                a young group, and several members do not yet have a full
                individual guide on HAEMIL. That is normal for a group only a
                couple of years into a career built around a survival-show
                debut and one breakout title track.
              </p>

              <p>
                What ILLIT already has is a real entry point for new fans — a
                hit song people can look up, a member who is easy to notice
                on camera, and a debut story that explains why the group
                already feels different from a typical rookie introduction.
              </p>

              <p>
                So if ILLIT is a name you keep half-recognizing without
                knowing why, that is a fine place to start.
              </p>

              <p>
                Watch one Wonhee fancam. Read about how the group came
                together on <em>R U Next?</em>. Then let the rest of ILLIT
                open up from there, one member at a time.
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
