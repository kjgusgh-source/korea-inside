import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store`;

const pageTitle = "How to Eat Cup Ramyeon at a Korean Convenience Store";
const pageDescription =
  "A friendly HAEMIL guide to eating cup ramyeon at a Korean convenience store, from hot water machines and chopsticks to local pairings like triangle kimbap, eggs, and cheese.";

const heroImage = {
  src: "/images/food/korean-cup-ramyeon-pexels-aibek-skakov.jpg",
  alt: "A Korean cup ramyeon with chopsticks, shown as an example of convenience store cup noodles.",
  credit: "Photo by Aibek Skakov on Pexels.",
  license: "Pexels License",
};

const quickFacts = [
  "Korean name: Cup ramyeon / 컵라면",
  "Where to try it: Korean convenience stores, especially ones with hot water machines or small eating areas",
  "What to check first: Hot water, chopsticks, microwave area, trash station, and whether eating inside is allowed",
  "Common pairings: Triangle kimbap, gimbap, boiled eggs, cheese, sausage snacks, or convenience store drinks",
  "Spice note: Many Korean cup ramyeon options are spicy, so check the package image and flavor name",
  "Important: Not every convenience store has seating or the same setup",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Korean street toast guide",
    description:
      "A local-friendly guide to Korea’s sweet egg sandwich, from old street stalls to modern toast chains.",
    href: "/food/what-is-korean-street-toast",
  },
  {
    label: "Food guide",
    title: "Bungeoppang winter snack guide",
    description:
      "A local-friendly guide to Korea’s fish-shaped winter snack, from red bean filling to the cold-weather street stall feeling.",
    href: "/food/what-is-bungeoppang",
  },
  {
    label: "Food",
    title: "Open the Food hub",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea and how to order without turning every meal into homework.",
    href: "/food",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
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

export default function HowToEatCupRamyeonAtKoreanConvenienceStorePage() {
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
          name: "Korean cup ramyeon",
        },
        {
          "@type": "Thing",
          name: "Korean convenience store food",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
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
          name: "Food",
          item: `${siteUrl}/food`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to eat cup ramyeon at a Korean convenience store",
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
              href="/food"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Food
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Food guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              How to Eat Cup Ramyeon at a Korean Convenience Store
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Cup ramyeon is one of the easiest foods to try in Korea.
            </p>
          </article>

          <PostImageFigure image={heroImage} variant="hero" priority />

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>But the most Korean part is not just the noodle cup.</p>

              <p>It is where people eat it.</p>

              <p>
                In many Korean convenience stores, cup ramyeon is not only
                something you buy and take home. If the store has a hot water
                machine, chopsticks, and a small counter, you can make it right
                there. For a traveler, that small setup can feel surprisingly
                useful. You do not need to read a restaurant menu. You do not
                need to order in long Korean sentences. You just choose a cup,
                add hot water, wait, and eat.
              </p>

              <p>
                That is why cup ramyeon belongs so naturally to Korean
                convenience store culture.
              </p>

              <p>First, check the store.</p>

              <p>
                Not every convenience store has the same setup. Some stores have
                a hot water machine, microwave, trash area, and a few seats.
                Some only have hot water. Some are too small or too busy to eat
                inside comfortably. Before you buy, look around for the hot water
                area, chopsticks, and whether other people are eating there.
              </p>

              <p>
                If locals are already standing or sitting with noodles, you are
                probably fine.
              </p>

              <p>
                If there is no eating area, you can still buy cup ramyeon, but it
                may be better to take it back to your hotel or guesthouse.
              </p>

              <p>Choosing the cup is the fun part.</p>

              <p>
                Korean cup ramyeon shelves can look intense at first. There are
                red packages, black packages, cheese flavors, seafood flavors,
                spicy chicken flavors, jjajang-style noodles, and limited
                editions that change over time. You do not have to find the
                &quot;best&quot; one on your first try.
              </p>

              <p>Start with what you can handle.</p>

              <p>
                If the package looks very red, has fire symbols, or uses words
                like spicy, hot, buldak, or maeun, expect heat. Korean instant
                noodles can be much spicier than some visitors expect. If you are
                not used to spicy food, choose something milder-looking, or
                prepare a drink nearby.
              </p>

              <p>The basic steps are simple.</p>

              <p>Open the lid halfway.</p>

              <p>Take out the seasoning packets.</p>

              <p>Add the powder or sauce.</p>

              <p>Pour hot water up to the line inside the cup.</p>

              <p>Close the lid.</p>

              <p>Wait for the minutes written on the package.</p>

              <p>Then stir and eat.</p>

              <p>
                That sounds easy, but the first time can still feel a little
                awkward. The hot water machine may look unfamiliar. The lid may
                not stay closed. You may wonder where to throw away the soup.
                That is normal. Korean convenience stores often have a trash
                station or liquid disposal area nearby, but the exact setup
                depends on the store.
              </p>

              <p>
                Do not pour leftover soup into a random sink unless the store
                clearly has a place for it.
              </p>

              <p>Look for where others throw away their cups.</p>

              <p>Cup ramyeon is also better when you pair it with something.</p>

              <p>
                The classic convenience store pairing is triangle kimbap. The
                rice makes the meal feel more complete, and it helps balance the
                salty, spicy soup. A tuna mayo triangle kimbap with spicy
                ramyeon is an easy first combination for many visitors.
              </p>

              <p>Gimbap rolls also work.</p>

              <p>So do boiled eggs.</p>

              <p>
                Some people add cheese to spicy ramyeon to make it softer and
                richer. Others eat a sausage snack or hot bar on the side. These
                are not formal rules. They are just small convenience store
                habits that make the meal feel more local.
              </p>

              <p>If you want a very simple first order, try this:</p>

              <p>One cup ramyeon.</p>

              <p>One triangle kimbap.</p>

              <p>One drink.</p>

              <p>That is enough.</p>

              <p>The drink matters more than you think.</p>

              <p>
                If your ramyeon is spicy, a sweet milk drink, yogurt drink, or
                cold tea can help. Water is fine too, but spicy Korean noodles
                sometimes feel better with something creamy or sweet nearby.
                This is one reason the convenience store meal feels easy:
                everything you need is in the same small space.
              </p>

              <p>
                There is also a quiet comfort to eating cup ramyeon in a
                convenience store.
              </p>

              <p>
                It is not fancy food. Nobody is pretending it is. But after a
                long walk, a late arrival, a rainy night, or a day when you are
                too tired to search for a restaurant, a hot cup of noodles can
                feel exactly right.
              </p>

              <p>That is the feeling many Koreans know too.</p>

              <p>Students eat it between classes.</p>

              <p>Office workers eat it when they need something quick.</p>

              <p>
                People eat it late at night when restaurants feel like too much
                effort.
              </p>

              <p>
                Travelers eat it because it is cheap, warm, and easy to
                understand.
              </p>

              <p>Cup ramyeon is not the best meal in Korea.</p>

              <p>But it is one of the easiest ways to feel everyday Korea.</p>

              <p>
                The photo on this page shows one cup ramyeon example, but do not
                think you need to find that exact product. Korean convenience
                stores carry different brands and flavors depending on the
                chain, neighborhood, season, and stock. The point is not one
                perfect cup.
              </p>

              <p>The point is the small routine.</p>

              <p>Choose a noodle.</p>

              <p>Add hot water.</p>

              <p>Wait a few minutes.</p>

              <p>Pair it with rice if you want.</p>

              <p>Eat it while it is hot.</p>

              <p>
                For HAEMIL readers, this is a good food experience because it is
                simple but very real. It does not require a famous restaurant
                or a long plan. It is the kind of thing you can do on your first
                night in Korea, even if you are tired, nervous, or hungry after
                everything else has closed.
              </p>

              <p>That is why Korean convenience store cup ramyeon is worth trying.</p>

              <p>Not because it is rare.</p>

              <p>Because it is ordinary in the best way.</p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related food guides
                </h2>
              </div>

              <Link
                href="/food"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Food →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--celadon)]">
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
        </section>
      </main>
    </>
  );
}
