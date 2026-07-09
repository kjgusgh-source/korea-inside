import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/who-is-triples`;

const pageTitle =
  "Who Is tripleS? A Friendly Guide to K-pop’s Big, Unit-Based Girl Group";
const pageDescription =
  "A friendly HAEMIL guide to tripleS, the 24-member MODHAUS girl group built around units, fan participation, and many small entry points for new K-pop fans.";

const relatedGuides = [
  {
    label: "Group page",
    title: "Start with the tripleS group page",
    description:
      "See the group overview, starter tags, and the members HAEMIL covers so far.",
    href: "/kpop/triples",
  },
  {
    label: "Member guide",
    title: "Meet Kim ChaeYeon",
    description:
      "Start here if you want a simple member guide after watching ChaeYeon’s Baby Flower facecam.",
    href: "/kpop/triples/kim-chaeyeon",
  },
  {
    label: "Fancam spotlight",
    title: "Watch the Baby Flower spotlight",
    description:
      "A close-up look at Kim ChaeYeon’s Baby Flower facecam, her familiar Korean TV background, and why she is an easy first door into tripleS.",
    href: "/kpop/triples-kim-chaeyeon-baby-flower-fancam-spotlight",
  },
  {
    label: "K-pop guide",
    title: "Learn what a fancam means in K-pop",
    description:
      "Learn why fancams matter, how fans use them, and why one focused stage video can make a member stand out.",
    href: "/kpop/what-is-a-fancam",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/who-is-triples",
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

export default function WhoIsTriplesPage() {
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
          name: "tripleS",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "MODHAUS",
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
          name: "Who is tripleS?",
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
              Girl group guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Who Is tripleS? A Friendly Guide to K-pop&apos;s Big, Unit-Based
              Girl Group
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are new to K-pop, tripleS can look a little overwhelming at
              first.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>That is normal.</p>

              <p>
                tripleS is a 24-member girl group under MODHAUS, and the group
                is built around a unit-based, fan-participation idea. Instead of
                feeling like one small fixed team, tripleS feels more like a big
                K-pop world with many doors. There are members, units, songs, fan
                votes, and different ways to enter depending on what catches your
                eye first.
              </p>

              <p>That can sound complicated when someone explains it all at once.</p>

              <p>But you do not need to learn tripleS that way.</p>

              <p>
                The easiest way to understand tripleS is to start small. Pick one
                member. Watch one fancam. Follow one song. Let one face become
                familiar before trying to understand the whole system. Once you
                do that, the group becomes much less intimidating.
              </p>

              <p>
                This is why Kim ChaeYeon is a useful first entry point for
                HAEMIL readers.
              </p>

              <p>
                For many Korean viewers, ChaeYeon does not feel like a
                completely unfamiliar face. Before tripleS, she was already known
                through childhood acting and Korean TV, including BoNiHaNi, the
                kind of after-school children&apos;s program many Koreans
                remember. So when she appears in a tripleS stage or close-up
                fancam, there is a small feeling of recognition around her.
              </p>

              <p>That makes her a good first door into a very large group.</p>

              <p>
                A group like tripleS can be hard to approach if you begin with a
                full member list. Twenty-four names at once is a lot. But one
                ChaeYeon fancam is simple. You can watch her expressions, notice
                the stage mood, and get one clear memory before moving outward
                to the group.
              </p>

              <p>That is often how K-pop actually works.</p>

              <p>
                People do not always become fans by reading a complete profile.
                Sometimes they start with one clip that feels easy to replay.
                Then they learn the member&apos;s name. Then they find the
                group. Then another member starts to stand out. The fandom grows
                one small moment at a time.
              </p>

              <p>
                tripleS fits that pattern especially well because the group is
                designed to move in many directions.
              </p>

              <p>
                Some fans enter through a full-group performance. Some enter
                through a unit. Some enter through a member edit, a fancam, or a
                song that happens to match their taste. That is part of the
                charm. tripleS is not asking every new fan to understand
                everything on day one.
              </p>

              <p>It gives you many ways in.</p>

              <p>
                The fan-participation side is also important, but it is better to
                think of it simply at first. tripleS has a system where fans can
                take part in parts of the group&apos;s direction, including
                unit-related choices. For new fans, the main thing to know is
                not every technical detail. It is that tripleS was built with the
                idea that fans are not just watching from far away.
              </p>

              <p>They are closer to the structure of the group.</p>

              <p>
                That is one reason tripleS feels different from many other K-pop
                teams. The group is not only large in member count. It also feels
                large in shape. It can split, rotate, introduce different moods,
                and give different members a chance to become someone&apos;s
                starting point.
              </p>

              <p>For international fans, this can be a good thing.</p>

              <p>
                You do not have to choose the &quot;correct&quot; way to start.
                If ChaeYeon catches your eye, start there. If a unit song
                catches your ear, start there. If a close-up fancam makes one
                member easy to remember, that is also a real entrance.
              </p>

              <p>
                K-pop is often easier when you stop trying to master it like
                homework.
              </p>

              <p>With tripleS, that is especially true.</p>

              <p>
                Think of the group less like a list you must memorize and more
                like a map you can walk through slowly. One member leads to one
                stage. One stage leads to one unit. One unit leads to the full
                group. After a while, the size of tripleS stops feeling like a
                wall and starts feeling like part of the fun.
              </p>

              <p>So if tripleS feels too big at first, you are not behind.</p>

              <p>Start with one small door.</p>

              <p>
                For HAEMIL readers, Kim ChaeYeon is a good place to begin. Watch
                her &quot;Baby Flower&quot; close-up fancam, then visit the
                tripleS group page, then let the rest of the group open up
                naturally from there.
              </p>

              <p>That is probably the most comfortable way to meet tripleS.</p>

              <p>
                Not all at once. One face, one clip, one song, one unit at a
                time.
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
