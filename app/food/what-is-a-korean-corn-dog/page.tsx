import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-a-korean-corn-dog`;

const pageTitle = "What Is a Korean Corn Dog? A Local Guide to Korean Hot Dogs";
const pageDescription =
  "In Korea, the fried snack English speakers call a Korean corn dog is usually just called 핫도그. Here’s how it differs from a bun-style hot dog and which versions you’ll actually see.";

const classicImage = {
  src: "/images/food/korean-hotdog-classic.webp",
  alt: "Classic Korean hot dog on a stick",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const bunImage = {
  src: "/images/food/western-hotdog-bun.webp",
  alt: "Sausage served in a bun for comparison with a Korean fried hot dog",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const potatoImage = {
  src: "/images/food/korean-hotdog-potato.webp",
  alt: "Korean potato hot dog with potato pieces on the outside",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: 핫도그 (hatdog) — “Korean corn dog” is mainly an English-language label",
  "Fillings vary: sausage is the classic base, but cheese and even rice cake (tteok) show up too",
  "Common types: classic sausage, mozzarella, half sausage-half cheese, and potato-coated versions",
  "Finish: ketchup, mustard, and sometimes sugar, depending on the shop and style",
  "A sausage in a bun is also called a hot dog in Korea — context usually makes it clear which one",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Tteokbokki spicy rice cake guide",
    description:
      "A local-friendly guide to Korea’s spicy rice cake snack, from chewy tteok and red sauce to bunsik shops, markets, and classic add-ons.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "Bungeoppang fish-shaped snack guide",
    description:
      "Fish-shaped winter street snacks — red bean bungeoppang and the cold-day stall mood that feels local, not staged.",
    href: "/food/what-is-bungeoppang",
  },
  {
    label: "Food guide",
    title: "Myeongdong street food guide",
    description:
      "Fun first-time snacks in Myeongdong, with tourist-price reality on the main streets and easier bites one alley over.",
    href: "/food/myeongdong-street-food-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean pocha and night food guide",
    description:
      "Pocha nights explained — anju with drinks, old street tents vs indoor pocha, and the cash and price checks worth doing first.",
    href: "/food/korean-pocha-night-food-guide-first-time",
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
    canonical: "/food/what-is-a-korean-corn-dog",
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

export default function WhatIsAKoreanCornDogPage() {
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
          name: "Korean corn dog",
        },
        {
          "@type": "Thing",
          name: "Korean street food",
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
          name: "What is a Korean corn dog?",
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

          <article className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
            <Link
              href="/food"
              className="mb-4 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Food
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Food guide
            </p>

            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              What Is a Korean Corn Dog?
            </h1>

            <p className="mt-2 max-w-3xl text-lg font-medium text-[var(--muted)] md:text-xl">
              A Local Guide to Korean Hot Dogs
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In Korea, the snack English speakers call a &quot;Korean corn
              dog&quot; is usually just called 핫도그 (hatdog).
            </p>
          </article>

          <div className="mx-auto max-w-[820px] [&>figure]:mt-6 [&>figure]:shadow-sm">
            <PostImageFigure image={classicImage} variant="hero" priority />
          </div>

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
            <h2 className="text-2xl font-semibold md:text-3xl">
              What does &quot;hot dog&quot; mean in Korea?
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_300px] md:items-start md:gap-8">
              <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                Search for &quot;Korean corn dog&quot; in English and
                you’ll probably picture a fried snack on a stick. In
                Korea, though, most people simply call that 핫도그
                (hatdog). The slightly confusing part is that the
                sausage-in-a-bun version can also be called a hot dog
                here. If someone points at a snack-shop menu and says
                핫도그, they may mean the fried one on a stick; at another
                shop, the same word can mean a sausage in a bun. Usually,
                the place and the menu make it obvious.
              </p>

              <PostImageFigure image={bunImage} variant="gallery" />
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              How is it different from an American corn dog?
            </h2>

            <div className="mt-6 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                The biggest difference is the outside. A classic American
                corn dog is known for its cornmeal batter. Korean hot dogs
                usually use a wheat-based dough or batter, often finished
                with breadcrumbs, although the exact recipe changes from
                shop to shop. That gives the Korean version a thicker,
                crunchier outside and also makes it easier to add cheese,
                potato pieces, or other coatings.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              The versions you’ll actually see
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_300px] md:items-start md:gap-8">
              <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
                <p>
                  Korean hot dogs are more flexible than one
                  sausage-and-batter formula. Sausage is the familiar
                  starting point, but you can also find mozzarella,
                  half-sausage-half-cheese versions, and hot dogs with
                  rice cake (tteok) inside instead of sausage. The
                  outside changes too: some are kept simple, while
                  others are coated with potato pieces or other crunchy
                  toppings.
                </p>

                <p>
                  Chains also occasionally play with the format for
                  limited-time or novelty menus. One memorable example
                  came from Myungrang Hot Dog, which temporarily sold a
                  cucumber hot dog with a whole cucumber in place of the
                  sausage. These experimental versions are not what
                  Koreans mean by a standard hot dog, but they show how
                  loosely the basic idea can be interpreted.
                </p>
              </div>

              <PostImageFigure image={potatoImage} variant="gallery" />
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              What should you try first?
            </h2>

            <div className="mt-6 space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                If it is your first one, start with the plain
                sausage version rather than jumping straight to the
                cheese-pull versions you see online — it gives you the
                clearest idea of what a normal Korean hot dog tastes
                like. From there, it is easy to branch out: mozzarella
                if you want the cheese pull, 감자핫도그 (potato hot
                dog) if you want something crunchier and more filling,
                or a tteok (rice cake) version if you want the inside
                swapped out entirely. Depending on the shop, you may
                be asked whether you want sugar on the outside before
                ketchup or mustard goes on top — that sweet-and-savory
                combination can sound strange at first, but it is a
                familiar hot-dog-shop style in Korea.
              </p>

              <p>
                Korean hot dogs became much more visible overseas through
                cheese-pull videos and &quot;Korean corn dog&quot; shops,
                but in Korea the food itself does not feel like a new
                internet trend. It is a familiar snack-shop food — the
                kind of thing people have eaten long before it became an
                English-language social-media category.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
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
