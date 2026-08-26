import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-kimchi`;

const pageTitle = "What Is Kimchi? Korea's Fermented Vegetable Side Dish Explained";
const pageDescription =
  "A friendly HAEMIL guide to kimchi, Korea's iconic side dish, covering baechu-kimchi, kkakdugi, oi-sobagi, regional differences, and the kimjang tradition.";

const heroImage = {
  src: "/images/food/baechu-kimchi.webp",
  alt: "Bowl of traditional Korean baechu-kimchi made with whole napa cabbage",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const kkakdugiImage = {
  src: "/images/food/kkakdugi.webp",
  alt: "Kkakdugi, cubed radish kimchi, served in a small bowl",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const oiSobagiImage = {
  src: "/images/food/oi-sobagi.webp",
  alt: "Oi-sobagi, stuffed cucumber kimchi, sliced open to show the seasoned filling",
  credit: "Photo by HAEMIL",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: Kimchi / 김치",
  "Meaning: A general term for salted, seasoned, and often fermented vegetable side dishes made mostly from napa cabbage or radish, not one single recipe",
  "Most common type: Baechu-kimchi, made with whole napa cabbage",
  "Other common types: Kkakdugi (cubed radish kimchi) and oi-sobagi (stuffed cucumber kimchi)",
  "Recognition: Kimjang, the shared tradition of making kimchi together, was added to UNESCO's Intangible Cultural Heritage list in 2013",
  "Important: Flavor, sourness, and saltiness change from household to household and region to region",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean soups and stews guide",
    description:
      "A local-friendly guide to Korean soups and stews, including kimchi-jjigae, from bubbling pots at the table to how they usually get shared and ordered.",
    href: "/food/korean-soups-and-stews-guide-first-time",
  },
  {
    label: "Food guide",
    title: "What to eat in Korea, first time",
    description:
      "A relaxed starting point for first-time visitors, covering the dishes and small habits that make Korean meals feel less like homework.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "Food guide",
    title: "How to order food in Korea",
    description:
      "A practical, friendly guide to ordering at Korean restaurants, from side dishes that appear without asking to calling a server over.",
    href: "/food/how-to-order-food-in-korea",
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
    canonical: "/food/what-is-kimchi",
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

export default function WhatIsKimchiPage() {
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
          name: "Kimchi",
        },
        {
          "@type": "Thing",
          name: "Korean food",
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
          name: "What is kimchi?",
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
              What Is Kimchi?
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium text-[var(--muted)] md:text-xl">
              Korea&apos;s fermented vegetable side dish, explained simply.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Kimchi is the Korean food most people have already heard of before they ever land in Korea.
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
              <p>But hearing the name and actually understanding it are two different things.</p>

              <p>
                Kimchi is not one dish. It is a whole category of salted,
                seasoned, and often fermented vegetable side dishes. The
                vegetable, the seasoning, the saltiness, and the amount of
                time it ferments can all change, and each version has its
                own name.
              </p>

              <p>
                The version most people picture is baechu-kimchi, made with
                whole napa cabbage. The cabbage is salted, rinsed, and coated
                with a seasoning paste that usually includes red chili flakes,
                garlic, ginger, and salted seafood or fish sauce for depth.
                Then it is packed away to ferment.
              </p>

              <p>That fermenting part matters.</p>

              <p>
                Freshly made kimchi tastes different from kimchi that has sat
                for a few weeks, and both are considered normal, good kimchi.
                Younger kimchi is crisper and milder. Older kimchi turns
                sourer and softer, which is exactly what you want for
                kimchi-jjigae, the kimchi stew that shows up on so many
                Korean tables.
              </p>

              <p>Baechu-kimchi is only the beginning.</p>

              <PostImageFigure image={kkakdugiImage} variant="inline" align="left" />

              <p>
                Kkakdugi is made from radish instead of cabbage, cut into
                small cubes and seasoned the same general way. It has a
                heartier crunch than baechu-kimchi, and it is the kimchi most
                often served next to a bowl of gomtang or seolleongtang, the
                milky bone-broth soups that ask for something sharp on the
                side.
              </p>

              <p>
                Oi-sobagi takes a different vegetable again. Cucumbers are
                sliced partway through, stuffed with a seasoned filling, and
                usually eaten fresh rather than left to ferment for a long
                time. It is lighter and cooler than baechu-kimchi or
                kkakdugi, which makes it a common choice in warmer months.
              </p>

              <PostImageFigure image={oiSobagiImage} variant="inline" align="right" />

              <p>
                Once you know these three, you start noticing how much
                kimchi actually varies. Some families keep it simple. Some
                add fruit, like pear or apple, into the seasoning paste for
                sweetness. Some make it far spicier than others. There is
                even a joke in Korea that almost anything can be turned into
                kimchi if you salt it and season it the right way.
              </p>

              <p>
                Taste also shifts by region and, honestly, by household.
                What your friend's grandmother makes and what a restaurant
                serves you can taste noticeably different, and neither one is
                the &quot;wrong&quot; kimchi.
              </p>

              <p>
                Kimchi is also not just a food. It is a shared activity.
              </p>

              <p>
                Kimjang, the tradition of making large batches of kimchi
                together, usually in late autumn before winter, is a
                communal event. Families and neighbors gather, prepare
                enough kimchi to last for months, and share the finished
                batches with each other. In 2013, kimjang was added to
                UNESCO&apos;s Intangible Cultural Heritage list, recognizing
                it as a tradition of cooperation, not only a recipe.
              </p>

              <p>
                As a visitor, you will not need to search for kimchi. It
                finds you.
              </p>

              <p>
                At many Korean restaurants, kimchi often arrives as banchan,
                one of the small side dishes set on the table without you
                ordering it. Refills are often free or self-service
                depending on the restaurant, so it is worth checking rather
                than assuming.
              </p>

              <p>
                You will also meet kimchi cooked into other dishes: kimchi-
                jjigae, the stew built around well-fermented kimchi, pork,
                and tofu, and kimchi-bokkeumbap, kimchi fried rice, often
                finished with a fried egg on top. Both are good, low-risk
                ways to try kimchi if the idea of eating it plain still feels
                new to you.
              </p>

              <p>
                Kimchi is spicy for some people and completely normal for
                others, and the heat mostly comes from the chili paste
                itself rather than from how long it has fermented. What
                fermentation changes is the sourness, aroma, and texture —
                older kimchi turns tangier and softer, not necessarily
                spicier.
              </p>

              <p>
                What stays the same across every version is the idea behind
                it: vegetables, salt, seasoning, and time, turned into
                something a Korean table does not really feel complete
                without.
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
