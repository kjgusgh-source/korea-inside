import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/dramas/why-teach-you-a-lesson-is-a-good-first-kdrama`;

const pageTitle =
  "Why Teach You a Lesson Is a Good First K-drama for Understanding Korea Right Now";
const pageDescription =
  "A friendly HAEMIL guide to Teach You a Lesson, Netflix's most-watched K-drama of 2026, and an honest look at whether its intense, TV-MA take on school violence is the right first watch for you.";

const quickFacts = [
  "Korean title: Teach You a Lesson / 참교육",
  "Released on Netflix June 5, 2026 · 10-episode limited series · TV-MA",
  "Based on the Naver webtoon Get Schooled (참교육)",
  "Main cast: Kim Moo-yeol, Lee Sung-min, Jin Ki-joo, P.O (Pyo Ji-hoon)",
  "Netflix's global non-English #1 for two straight weeks, reaching the top 10 in 90+ countries and #1 in 46 of them in its second week, according to Wikipedia's summary of Netflix chart and Korea Times reporting",
  "Rotten Tomatoes critic score: 83%, based on early reviews",
];

const relatedGuides = [
  {
    label: "K-drama guide",
    title: "Why Itaewon Class Is a Good First K-drama",
    description:
      "A calmer, character-driven first K-drama, if you would rather ease in with something warmer before watching this one.",
    href: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
  },
  {
    label: "K-drama guide",
    title: "Why Seoul feels like a K-drama",
    description:
      "A gentle Seoul guide for K-drama fans, connecting everyday drama scenes with real places like the Han River, cafes, and night views.",
    href: "/dramas/why-seoul-feels-like-a-kdrama",
  },
  {
    label: "Drama / Film",
    title: "Open the Drama hub",
    description:
      "HAEMIL guides for understanding Korean dramas, films, city moods, and the cultural details that make them feel familiar.",
    href: "/dramas",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/dramas/why-teach-you-a-lesson-is-a-good-first-kdrama",
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

export default function WhyTeachYouALessonIsAGoodFirstKdramaPage() {
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
          name: "Teach You a Lesson",
        },
        {
          "@type": "Thing",
          name: "K-drama",
        },
        {
          "@type": "Thing",
          name: "Korean culture",
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
          name: "Drama & Film",
          item: `${siteUrl}/dramas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why Teach You a Lesson is a good first K-drama",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
          <SiteHeader />

          <article className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/dramas"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Drama & Film
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-drama guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Why Teach You a Lesson Is a Good First K-drama for Understanding
              Korea Right Now
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              This is the drama Korea and the rest of the world are currently
              watching together. It is also not a gentle one.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--electric)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="official-trailer"
            className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official trailer
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Teach You a Lesson official trailer
            </h2>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="LdezlX84py0"
                title="Teach You a Lesson | Official Trailer | Netflix [ENG SUB]"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=LdezlX84py0"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Watch on YouTube →
            </a>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                For two weeks in a row, Teach You a Lesson has been
                Netflix&apos;s most-watched non-English show in the world. By
                its second week it was in the top 10 in more than 90
                countries and sitting at number one in 46 of them. If you
                want the drama that the most people are currently talking
                about, this is it.
              </p>

              <p>
                But before you press play expecting something like Itaewon
                Class, here is the honest version: this is not a cozy show.
              </p>

              <p>
                Teach You a Lesson (참교육 in Korean) is a TV-MA action drama
                built around a government agency that does not exist in real
                life: the Education Rights Protection Bureau, or ERPB. In the
                story, school violence and the collapse of teacher authority
                have gotten bad enough that the state sends in inspectors who
                are allowed to use physical force to restore order. Netflix&apos;s
                own description calls it &quot;sharp, no-nonsense lessons you
                won&apos;t find in textbooks,&quot; and the show plays that
                literally. Corporal punishment, bullying, and the damage kids
                do to each other are not background texture here. They are
                the plot.
              </p>

              <p>
                That is a heavier premise than most first-K-drama
                recommendations carry, so it is worth naming upfront.
              </p>

              <p>Four ERPB members carry most of the story.</p>

              <p>
                Na Hwa-jin, played by Kim Moo-yeol, is a former special
                forces soldier turned ERPB investigator. He reads as the calm
                one on paper, but the show keeps putting him in situations
                where calm and violent turn out to be the same thing. He is
                the character most directly responsible for making sure
                victims of school violence actually see some form of
                justice.
              </p>

              <p>
                Choi Kang-seok, played by Lee Sung-min, is the Minister of
                Education who created the ERPB in the first place. He is less
                an action lead than the person whose convictions the whole
                agency is built on, which makes him the character the show
                leans on when it wants to argue for its own premise.
              </p>

              <p>
                Im Han-rim, played by Jin Ki-joo, is another former special
                forces investigator, and the show does not soften her role.
                She goes after violent students without much hesitation,
                which is part of why she has become one of the more
                discussed characters online since the release.
              </p>

              <p>
                Bong Geun-dae, played by P.O (Pyo Ji-hoon), is the ERPB&apos;s
                deputy director and its least physical member. He is built
                for undercover work rather than force, which gives the team a
                different way in when brute strength is not the right tool.
              </p>

              <p>
                That is the core group. The show adds more people around
                them, but for a first watch, those four roles are enough to
                follow the season without needing a character map.
              </p>

              <p>
                To understand why this premise landed the way it did in
                Korea, it helps to know that school violence and teachers
                losing authority in the classroom have been real, widely
                reported problems there for years, serious enough that
                teacher advocacy groups have spoken publicly about how far a
                school&apos;s disciplinary power should go. Teach You a
                Lesson takes that anxiety and turns it into fiction with the
                volume turned up: instead of a slow policy debate, a state
                agency is simply allowed to hit back. The original webtoon it
                is based on drew objections from Korean teacher rights groups
                on similar grounds, and reviewers have been split on the
                result. Forbes called it one of the year&apos;s smartest and
                most addictive K-dramas, while the South China Morning Post
                described a government agency built around corporal
                punishment as &quot;alarming&quot; rather than cathartic.
                HAEMIL is not going to settle that argument here, but it is
                worth knowing before you watch: the show is not neutral about
                its own premise. It wants you to feel the release of someone
                finally fighting back, and it is also the kind of premise
                that will not sit comfortably with every viewer.
              </p>

              <p>So is it a good first K-drama? That depends on what you want.</p>

              <p>
                If you want to understand what a huge share of the world is
                currently watching, yes. Following Teach You a Lesson right
                now puts you in the same conversation as viewers across
                dozens of countries, and Rotten Tomatoes critics have given it
                an 83% score across early reviews, so the craft behind it is
                not in question.
              </p>

              <p>
                If you were hoping for something as warm as Itaewon Class,
                this is a different kind of show. The tone is faster, angrier,
                and more violent, and it deals directly with subjects
                including corporal punishment, bullying, and the idea of a
                state agency handing out physical justice, none of which
                every viewer wants from a first K-drama. Both things can be
                true at once: it is one of the best-made and most talked-
                about Korean shows of the year, and it is also not the
                gentlest place to start.
              </p>

              <p>
                If that trade-off sounds right to you, Teach You a Lesson is
                a strong, current way into Korean television, as long as you
                go in knowing it is built to unsettle you a little, not just
                entertain you. If you would rather ease in with something
                calmer first,{" "}
                <Link
                  href="/dramas/why-itaewon-class-is-a-good-first-kdrama"
                  className="font-semibold text-[var(--accent)]"
                >
                  Itaewon Class
                </Link>{" "}
                is still there, and it will still be worth watching after
                this one.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related guides
                </h2>
              </div>

              <Link
                href="/dramas"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Drama & Film →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
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

            <Link
              href="#official-trailer"
              className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
            >
              Watch the official trailer →
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}
