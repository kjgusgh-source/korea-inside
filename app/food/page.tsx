import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { getPostsByCategory } from "../../lib/posts";

const STANDALONE_FOOD_GUIDES = [
  {
    id: "what-to-eat-in-korea-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "What to Eat in Korea for the First Time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
    readingTime: "9 min read",
  },
  {
    id: "how-to-order-food-in-korea",
    category: "food",
    categoryLabel: "Food guide",
    title: "How to Order Food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
    readingTime: "8 min read",
  },
  {
    id: "gwangjang-market-food-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Gwangjang Market Food Guide for First-Time Visitors",
    description:
      "A practical first-time guide to eating at Gwangjang Market, with bindaetteok, mayak gimbap, yukhoe, noodles, cash tips, crowds, and tourist-pricing cautions.",
    href: "/food/gwangjang-market-food-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "what-to-eat-at-korean-convenience-store",
    category: "food",
    categoryLabel: "Food guide",
    title: "What to Eat at a Korean Convenience Store",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, 24-hour culture, and how locals follow new items.",
    href: "/food/what-to-eat-at-korean-convenience-store",
    readingTime: "7 min read",
  },
  {
    id: "what-is-korean-street-toast",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Korean Street Toast?",
    description:
      "A local-friendly guide to Korea’s sweet egg sandwich, from old street stalls to modern toast chains like Isaac Toast and Eggdrop.",
    href: "/food/what-is-korean-street-toast",
    readingTime: "6 min read",
  },
  {
    id: "what-is-bungeoppang",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Bungeoppang?",
    description:
      "A local-friendly guide to Korea’s fish-shaped winter snack, from red bean filling to the cold-weather street stall feeling.",
    href: "/food/what-is-bungeoppang",
    readingTime: "6 min read",
  },
  {
    id: "how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
    category: "food",
    categoryLabel: "Food guide",
    title: "How to Eat Cup Ramyeon at a Korean Convenience Store",
    description:
      "A local-friendly guide to Korean cup ramyeon, hot water machines, convenience store counters, spicy flavors, and easy local pairings.",
    href: "/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
    readingTime: "6 min read",
  },
  {
    id: "what-is-tteokbokki",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Tteokbokki?",
    description:
      "A local-friendly guide to Korea’s spicy rice cake snack, from chewy tteok and red sauce to bunsik shops, markets, and classic add-ons.",
    href: "/food/what-is-tteokbokki",
    readingTime: "7 min read",
  },
  {
    id: "what-is-eomuk-korean-fish-cake",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Eomuk?",
    description:
      "A local-friendly guide to Korean fish cake, from street-stall skewers and warm broth to the many shapes you see in tteokbokki, soup, and snack shops.",
    href: "/food/what-is-eomuk-korean-fish-cake",
    readingTime: "7 min read",
  },
  {
    id: "what-is-twigim-korean-fried-snacks",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Twigim?",
    description:
      "A local-friendly guide to Korean fried snacks, from gimmari and fried mandu to the very Korean habit of dipping twigim in tteokbokki sauce.",
    href: "/food/what-is-twigim-korean-fried-snacks",
    readingTime: "7 min read",
  },
  {
    id: "what-is-sundae-korean-blood-sausage",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Sundae?",
    description:
      "A local-friendly guide to Korean blood sausage, from market stalls and bunsik shops to tteokbokki sauce, dipping salts, and regional styles.",
    href: "/food/what-is-sundae-korean-blood-sausage",
    readingTime: "7 min read",
  },
  {
    id: "what-is-gimbap-korean-seaweed-rice-roll",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Gimbap?",
    description:
      "A local-friendly guide to Korea’s seaweed rice roll, from everyday bunsik shops and convenience stores to tuna gimbap, mini gimbap, and picnic memories.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
    readingTime: "7 min read",
  },
  {
    id: "what-is-bunsik-korean-snack-food",
    category: "food",
    categoryLabel: "Food culture guide",
    title: "What Is Bunsik?",
    description:
      "A local-friendly guide to Korean snack-shop food culture, where tteokbokki, gimbap, twigim, sundae, and eomuk all belong on the same table.",
    href: "/food/what-is-bunsik-korean-snack-food",
    readingTime: "8 min read",
  },
];

export const metadata: Metadata = {
  title: "Food in Korea | HAEMIL",
  description:
    "Simple HAEMIL food guides for understanding what to eat in Korea, where certain dishes feel local, and how to order without turning every meal into homework.",
  openGraph: {
    title: "Food in Korea | HAEMIL",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea, where certain dishes feel local, and how to order without turning every meal into homework.",
    type: "website",
  },
};

function getPostAccent(category: string) {
  if (category === "travel" || category === "food") {
    return "var(--celadon)";
  }

  return "var(--accent)";
}

export default function FoodPage() {
  const foodPosts = getPostsByCategory("food");
  const foodGuides = [
    ...STANDALONE_FOOD_GUIDES.map((guide) => ({
      id: guide.id,
      category: guide.category,
      categoryLabel: guide.categoryLabel,
      title: guide.title,
      description: guide.description,
      href: guide.href,
      readingTime: guide.readingTime,
    })),
    ...foodPosts.map((post) => ({
      id: String(post.id),
      category: post.category,
      categoryLabel: post.categoryLabel,
      title: post.title,
      description: post.description,
      href: `/${post.categorySlug}/${post.slug}`,
      readingTime: post.readingTime,
    })),
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <SiteHeader />

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
          <div className="absolute right-6 top-6 text-7xl font-semibold text-[var(--celadon)] opacity-10">
            F
          </div>

          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          >
            ← Back home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Food
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Food in Korea
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Simple HAEMIL food guides for understanding what to eat in Korea,
            where certain dishes feel local, and how to order without turning
            every meal into homework.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Start here when you want Korean food to feel less confusing. HAEMIL
            food guides explain local dishes, common eating situations, and the
            small details that help a meal make sense.
          </p>
        </section>

        <section className="mt-12 pb-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Food guides
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {foodGuides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span style={{ color: getPostAccent(guide.category) }}>
                    {guide.categoryLabel}
                  </span>
                  <span className="text-[var(--muted)]">{guide.readingTime}</span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {guide.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-[var(--accent)]">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
