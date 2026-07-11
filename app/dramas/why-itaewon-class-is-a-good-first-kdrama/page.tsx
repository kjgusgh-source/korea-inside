import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/dramas/why-itaewon-class-is-a-good-first-kdrama`;

const pageTitle =
  "Why Itaewon Class Is a Good First K-drama for Understanding Korea";
const pageDescription =
  "A friendly HAEMIL guide to Itaewon Class, the 2020 JTBC hit K-drama, and why its story of Itaewon, stubborn youth, small business dreams, unfair power, and starting over still feels deeply Korean.";

const quickFacts = [
  "Korean title: Itaewon Class / 이태원 클라쓰",
  "Aired: 2020 · Network: JTBC · Episodes: 16",
  "Based on the webtoon of the same name",
  "Main cast: Park Seo-joon, Kim Da-mi, Yoo Jae-myung, Kwon Nara",
  "The final episode recorded 16.548% nationwide paid-household viewership in Korea, according to Nielsen Korea reports",
  "International viewers often met the drama through Netflix",
];

const relatedGuides = [
  {
    label: "K-drama guide",
    title: "Why Seoul feels like a K-drama",
    description:
      "A gentle Seoul guide for K-drama fans, connecting everyday drama scenes with real places like the Han River, cafes, and night views.",
    href: "/dramas/why-seoul-feels-like-a-kdrama",
  },
  {
    label: "Travel guide",
    title: "Explore Seoul travel guides",
    description:
      "Map-friendly HAEMIL guides for understanding Seoul by area, mood, and local movement.",
    href: "/travel/seoul",
  },
  {
    label: "Drama / Film",
    title: "Open the Drama hub",
    description:
      "HAEMIL guides for understanding Korean dramas, films, city moods, and the cultural details that make them feel familiar.",
    href: "/dramas",
  },
  {
    label: "Travel guide",
    title: "International Seoul: Itaewon & nearby moods",
    description:
      "Itaewon, Hannam, Haebangchon, global food, hillside streets, art spaces, and mixed local-global Seoul.",
    href: "/travel/international-seoul-itaewon-hannam-haebangchon",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/dramas/why-itaewon-class-is-a-good-first-kdrama",
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

export default function WhyItaewonClassIsAGoodFirstKdramaPage() {
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
          name: "Itaewon Class",
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
          name: "Why Itaewon Class is a good first K-drama",
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
              Why Itaewon Class Is a Good First K-drama for Understanding Korea
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Itaewon Class is one of those K-dramas that many international
              viewers still remember by mood.
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
            id="official-clip"
            className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Official clip
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Itaewon Class JTBC highlight
            </h2>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId="67fnZvwVamM"
                title="Itaewon Class JTBC highlight"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=67fnZvwVamM"
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
                The haircut. The street. The pub. The revenge. The song that
                sounds like someone trying to stand up again.
              </p>

              <p>
                It aired on JTBC in 2020, ran for 16 episodes, and became one
                of the dramas that helped many viewers outside Korea step deeper
                into modern K-drama. In Korea, it was also a real hit. The final
                episode recorded 16.548% nationwide paid-household viewership in
                Korea, according to Nielsen Korea reports, which is a very strong
                number for a cable drama. It was widely recommended to
                international K-drama viewers through Netflix and overseas media
                lists.
              </p>

              <p>But Itaewon Class is not memorable only because it was popular.</p>

              <p>
                It is memorable because it takes several very Korean feelings
                and puts them into one easy-to-follow story.
              </p>

              <p>
                At first, the drama looks like a revenge story. Park Sae-ro-yi,
                played by Park Seo-joon, is a young man who refuses to kneel when
                someone powerful tells him to. That one stubborn choice changes
                his life. Years later, he opens a small bar-restaurant called
                DanBam in Itaewon and starts building his own path against
                people with more money, more connections, and more power.
              </p>

              <p>That setup is simple.</p>

              <p>The feeling underneath it is not.</p>

              <p>
                In Korea, the idea of refusing to kneel hits differently. Korean
                dramas often use hierarchy very strongly: school seniors and
                juniors, company bosses and workers, rich families and ordinary
                people, powerful parents and powerless young adults. Itaewon
                Class turns that pressure into one clear image. Sae-ro-yi is not
                the smartest person in every room. He is not smooth. He is not
                flexible. But he has one thing he refuses to give away: his own
                line.
              </p>

              <p>That is why Korean viewers remembered him.</p>

              <p>
                He is stubborn in a way that can feel frustrating, but also
                comforting. In a world where people are often told to be
                practical, quiet, and careful, Sae-ro-yi becomes a fantasy of
                someone who says, &quot;No, I will live my way.&quot;
              </p>

              <p>The setting matters too.</p>

              <p>
                Itaewon is not just a random Seoul neighborhood. It has long
                been known as one of Seoul&apos;s more international, mixed, and
                open-feeling areas. You can feel different languages, different
                restaurants, different music, different kinds of people. For a
                drama about outsiders trying to build their own place, Itaewon
                is a very fitting stage.
              </p>

              <p>DanBam, the small pub in the story, is also important.</p>

              <p>
                It is not a glamorous office or a giant company at first. It is
                a small place with tables, food, drinks, mistakes, staff
                problems, and late nights. That makes the dream feel closer.
                Many Korean viewers understand the fantasy of opening a small
                restaurant, bar, café, or pocha-style place. It is risky,
                exhausting, and not always romantic, but it feels like a dream
                you can imagine with your own hands.
              </p>

              <p>That is one reason the drama worked.</p>

              <p>It turns business into emotion.</p>

              <p>
                DanBam is not only a restaurant. It is Sae-ro-yi&apos;s pride,
                his revenge, his home, and his promise to himself. When the team
                improves the food, changes the store, argues, fails, and tries
                again, the drama becomes less about &quot;becoming rich&quot;
                and more about surviving without losing your shape.
              </p>

              <p>
                This is also where Jo Yi-seo, played by Kim Da-mi, changes the
                energy of the show.
              </p>

              <p>
                Yi-seo is sharp, strange, difficult, and very modern. She does
                not feel like a soft helper character. She enters the story with
                her own ambition and her own uncomfortable edges. For some
                viewers, she was refreshing. For others, she was hard to like at
                first. But that friction is part of why the drama stayed
                interesting.
              </p>

              <p>Itaewon Class also talks about unfair power.</p>

              <p>
                In Korean, people often use the word gapjil for abusive behavior
                from someone in a stronger position. A boss abusing workers. A
                rich family humiliating someone. A powerful person expecting
                others to bow, apologize, or disappear. Itaewon Class is full of
                that feeling.
              </p>

              <p>The villain is not scary only because he is rich.</p>

              <p>
                He is scary because he represents a system where power expects
                obedience.
              </p>

              <p>
                That is why Sae-ro-yi&apos;s refusal feels bigger than one
                personal fight. It becomes a small emotional rebellion against a
                world where ordinary people are often told to accept unfairness
                because &quot;that is just how things work.&quot;
              </p>

              <p>
                For international viewers, this is one reason Itaewon Class is a
                good first K-drama.
              </p>

              <p>
                You can enjoy the story without understanding every Korean
                social detail. But if you pay attention to the hierarchy, the
                restaurant dream, the neighborhood, the pressure to kneel, and
                the meaning of starting over, the drama becomes much more Korean
                than it first appears.
              </p>

              <p>The OST helped too.</p>

              <p>
                Gaho&apos;s &quot;Start Over&quot; became one of the songs people
                strongly connect with the drama. Even if you forget some plot
                details, that emotional push remains: run again, stand again,
                try again. It matches the whole drama&apos;s mood so clearly
                that the song almost feels like part of Sae-ro-yi&apos;s
                character.
              </p>

              <p>That is why Itaewon Class still works as a cultural entry point.</p>

              <p>
                It is not the softest K-drama. It is not the most realistic
                business story. Some parts feel dramatic, and some viewers may
                feel the later episodes move differently from the early ones. But
                the center is easy to understand: a young person gets crushed by
                unfair power, refuses to disappear, and builds a place where he
                can stand.
              </p>

              <p>That feeling travels well.</p>

              <p>
                Even if you have never been to Itaewon, you can understand
                wanting a place of your own.
              </p>

              <p>
                Even if you do not know Korean workplace hierarchy, you can
                understand the anger of being told to kneel.
              </p>

              <p>
                Even if you do not know every K-drama trope, you can understand
                the hope inside the words &quot;start over.&quot;
              </p>

              <p>
                For HAEMIL readers, that is the best way to watch Itaewon Class.
              </p>

              <p>
                Do not treat it only as a revenge drama. Watch it as a story
                about a city street, a small store, a stubborn young man, and
                the Korean feeling of trying to live without bending too much.
              </p>

              <p>That is why it stayed memorable.</p>

              <p>Not just because it was a hit.</p>

              <p>
                Because it made &quot;starting over&quot; feel like a whole mood.
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
              href="#official-clip"
              className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
            >
              Watch the Itaewon Class highlight →
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}
