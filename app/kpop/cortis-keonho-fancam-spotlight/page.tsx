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
  "A friendly K-pop spotlight on CORTIS Keonho, the BIGHIT rookie member fans are noticing through “JoyRide” fancams, Korean nickname moments, and his easy-to-remember stage presence.";

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
              Before some fans even learned every CORTIS member&apos;s name, they
              had already seen Keonho somewhere: a fancam, a stage clip, a
              photo, or a Korean post calling him the &quot;French Fry Boy.&quot;
              It sounds random, but that is exactly how K-pop discovery often
              works now. One small nickname, one good fancam, one moment that is
              easy to remember — and suddenly a rookie member starts feeling
              familiar.
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
                Before some fans even learned every CORTIS member&apos;s name,
                they had already seen Keonho somewhere: a fancam, a stage clip, a
                photo, or a Korean post calling him the &quot;French Fry Boy.&quot;
              </p>

              <p>
                It sounds random, but that is exactly how K-pop discovery often
                works now. One small nickname, one good fancam, one moment that
                is easy to remember — and suddenly a rookie member starts feeling
                familiar.
              </p>

              <p>
                Keonho is a member of CORTIS, a five-member boy group from BIGHIT
                MUSIC. For international fans, that company name already gives the
                group attention. But attention is not the same as attachment. A
                fan still needs one member, one clip, or one small detail that
                makes the group feel personal.
              </p>

              <p>For some people, Keonho becomes that first detail.</p>

              <p>
                Part of it is simple profile memory. Keonho is often introduced
                as born on February 14, 2009. A Valentine&apos;s Day birthday is
                easy to remember, and in K-pop, small profile details like that
                can become part of how fans first organize a new group in their
                heads.
              </p>

              <p>
                But the more interesting part is the nickname. Korean fans and
                K-pop accounts have used &quot;감튀보이,&quot; which basically
                means &quot;French Fry Boy,&quot; around Keonho. It comes from the
                kind of casual, slightly silly moment that does not feel like a
                company-made concept. Someone sees a good-looking rookie connected
                with a random French-fry moment, the nickname sticks, and
                suddenly he becomes easier to recognize.
              </p>

              <p>
                That is why this kind of attention feels different from a normal
                profile introduction. &quot;Keonho, member of CORTIS&quot; is
                correct, but a little flat. &quot;The French-fry guy from
                CORTIS&quot; is less formal, but much easier to remember.
              </p>

              <p>
                This does not mean the whole appeal is only a meme. The nickname
                just opens the door. Once people click the fancam, they still
                need a reason to keep watching.
              </p>

              <p>That is where the &quot;JoyRide&quot; fancam matters.</p>

              <p>
                A full group stage can be hard when you are new to CORTIS. There
                are five members, fast movement, and a lot of rookie energy
                happening at once. A fancam makes the choice easier. It says: do
                not try to learn everything yet. Just watch this one member for a
                few minutes.
              </p>

              <p>
                In Keonho&apos;s case, the fancam works because he feels easy to
                track. He has the kind of stage presence that does not need a long
                explanation first. You can understand the basic appeal quickly:
                clean focus, bright rookie energy, and a face that stays easy to
                remember after the clip ends.
              </p>

              <p>
                The best part is that he does not need the article to
                over-explain him. Watch the video and the reason becomes clearer.
                The camera gives you a simple question: do your eyes keep coming
                back to him?
              </p>

              <p>
                For many new fans, that is how a bias candidate starts. Not from a
                full biography. Not from knowing every role. Just from one clip
                where a member suddenly becomes the person you recognize first.
              </p>

              <p>
                Keonho also fits CORTIS&apos;s current image as a rookie group
                people are still figuring out. They are not only being introduced
                through polished stages. Fans are also meeting them through short
                clips, self-made moments, nicknames, and casual content. That
                makes the group feel less distant.
              </p>

              <p>
                Compared with the RESCENE Woni spotlight, this is not a
                small-agency discovery story. Compared with the ILLIT Wonhee
                spotlight, this is not about a familiar idol staying visible.
                Keonho&apos;s case is more like this: a new BIGHIT boy group is
                already on people&apos;s radar, but one member starts becoming
                easier to remember because the internet gives him a hook.
              </p>

              <p>
                That hook might be a nickname. It might be a facecam. It might be
                the way he looks in a thumbnail. It might be the fact that people
                keep saying, &quot;Wait, is that the French-fry guy?&quot;
              </p>

              <p>That is very K-pop.</p>

              <p>
                It is a little funny, a little visual, a little stage-focused,
                and very replayable. More importantly, it gives international
                fans a way to enter the group without feeling lost.
              </p>

              <p>
                If you are watching Keonho for the first time, do not start by
                trying to decide whether he is your bias. Start smaller. Watch
                the &quot;JoyRide&quot; fancam. Notice whether you remember him
                after the video ends. Notice whether the nickname makes him easier
                to find again later.
              </p>

              <p>That is enough for a first step.</p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What to notice while watching
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  Watch whether your eyes return to Keonho even when the
                  choreography moves quickly.
                </li>
                <li>
                  Notice how a focused fancam makes CORTIS easier to enter one
                  member at a time.
                </li>
                <li>
                  Pay attention to his smaller transitions, not only the biggest
                  moves.
                </li>
                <li>
                  Remember the nickname context: sometimes a silly fan hook makes
                  a new idol easier to remember.
                </li>
                <li>
                  If the clip makes you want to search another Keonho or CORTIS
                  stage, the fancam has done its job.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Why this works as a HAEMIL K-pop Spotlight
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                This is not only a profile of one idol. It is an example of how
                rookie K-pop discovery actually happens now. A company name can
                make people look once, but a nickname, a fancam, or one memorable
                clip can make a member stick. Keonho is interesting because he
                gives new fans both: the CORTIS/BIGHIT context and a small Korean
                fan hook that is easy to remember.
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
