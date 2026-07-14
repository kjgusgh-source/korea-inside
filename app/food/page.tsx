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
      "Where to start with Korean food on a first trip — everyday meals, street bites, and dishes locals actually order without overplanning every meal.",
    href: "/food/what-to-eat-in-korea-first-time",
    readingTime: "9 min read",
  },
  {
    id: "how-to-order-food-in-korea",
    category: "food",
    categoryLabel: "Food guide",
    title: "How to Order Food in Korea",
    description:
      "How to handle kiosks, table bells, side dishes, and pay-at-the-counter moments when a Korean restaurant works differently from home.",
    href: "/food/how-to-order-food-in-korea",
    readingTime: "8 min read",
  },
  {
    id: "korean-soups-and-stews-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Korean Soups and Stews Guide for First-Time Visitors",
    description:
      "What to expect from jjigae, gukbap, and hot pots — warming one-bowl Korean meals that are easier to order once you know the basics.",
    href: "/food/korean-soups-and-stews-guide-first-time",
    readingTime: "10 min read",
  },
  {
    id: "korean-pocha-night-food-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Korean Pocha and Night Food Guide for First-Time Visitors",
    description:
      "Pocha nights explained — anju with drinks, old street tents vs indoor pocha, and the cash and price checks worth doing first.",
    href: "/food/korean-pocha-night-food-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "korean-breakfast-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Korean Breakfast Guide for First-Time Visitors",
    description:
      "A realistic look at breakfast in Korea — gimbap, convenience stores, soup shops, and street toast, not one fixed traditional morning meal.",
    href: "/food/korean-breakfast-guide-first-time",
    readingTime: "8 min read",
  },
  {
    id: "korean-fried-chicken-chimaek-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Korean Fried Chicken and Chimaek Guide for First-Time Visitors",
    description:
      "Banban, yangnyeom, chicken-mu, and chimaek — Korean fried chicken without the menu confusion, from dine-in to delivery.",
    href: "/food/korean-fried-chicken-chimaek-guide-first-time",
    readingTime: "8 min read",
  },
  {
    id: "korean-noodles-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Korean Noodles Guide for First-Time Visitors",
    description:
      "Ramyeon vs restaurant noodles, cold naengmyeon in summer, and solo-friendly bowls when you want a simple Korean meal.",
    href: "/food/korean-noodles-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "gwangjang-market-food-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Gwangjang Market Food Guide for First-Time Visitors",
    description:
      "What to expect at Gwangjang Market — crowded aisles, bindaetteok and mayak gimbap, cash, and checking prices before you sit down.",
    href: "/food/gwangjang-market-food-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "myeongdong-street-food-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Myeongdong Street Food Guide for First-Time Visitors",
    description:
      "Fun first-time snacks in Myeongdong, with tourist-price reality on the main streets and easier bites one alley over.",
    href: "/food/myeongdong-street-food-guide-first-time",
    readingTime: "8 min read",
  },
  {
    id: "korean-cafe-culture-guide-first-time",
    category: "food",
    categoryLabel: "Food guide",
    title: "Korean Cafe Culture Guide for First-Time Visitors",
    description:
      "The local details that make Korean cafes work — Wi-Fi, receipts, outlets, one-drink seating, and pretty cafes vs everyday ones.",
    href: "/food/korean-cafe-culture-guide-first-time",
    readingTime: "9 min read",
  },
  {
    id: "what-to-eat-at-korean-convenience-store",
    category: "food",
    categoryLabel: "Food guide",
    title: "What to Eat at a Korean Convenience Store",
    description:
      "For days when a CU or GS25 meal is the plan — triangle gimbap, hot counter food, and what locals grab between sightseeing stops.",
    href: "/food/what-to-eat-at-korean-convenience-store",
    readingTime: "7 min read",
  },
  {
    id: "what-is-korean-street-toast",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Korean Street Toast?",
    description:
      "Korea’s sweet egg sandwich from old stalls to Isaac Toast — what goes inside and why it fits a quick Seoul morning.",
    href: "/food/what-is-korean-street-toast",
    readingTime: "6 min read",
  },
  {
    id: "what-is-bungeoppang",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Bungeoppang?",
    description:
      "Fish-shaped winter street snacks — red bean bungeoppang and the cold-day stall mood that feels local, not staged.",
    href: "/food/what-is-bungeoppang",
    readingTime: "6 min read",
  },
  {
    id: "how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
    category: "food",
    categoryLabel: "Food guide",
    title: "How to Eat Cup Ramyeon at a Korean Convenience Store",
    description:
      "How to use the hot water machine, pick a cup ramyeon, and eat at the convenience store counter without guessing the steps.",
    href: "/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
    readingTime: "6 min read",
  },
  {
    id: "what-is-tteokbokki",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Tteokbokki?",
    description:
      "Chewy rice cakes in red sauce — what tteokbokki is, where you find it, and the classic add-ons at bunsik shops.",
    href: "/food/what-is-tteokbokki",
    readingTime: "7 min read",
  },
  {
    id: "what-is-eomuk-korean-fish-cake",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Eomuk?",
    description:
      "Warm fish-cake skewers and broth at street stalls — the snack you see beside tteokbokki almost everywhere in Korea.",
    href: "/food/what-is-eomuk-korean-fish-cake",
    readingTime: "7 min read",
  },
  {
    id: "what-is-twigim-korean-fried-snacks",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Twigim?",
    description:
      "Korean fried snack-shop sides — gimmari, mandu, and dipping twigim back into tteokbokki sauce like locals do.",
    href: "/food/what-is-twigim-korean-fried-snacks",
    readingTime: "7 min read",
  },
  {
    id: "what-is-sundae-korean-blood-sausage",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Sundae?",
    description:
      "Korean blood sausage at markets and bunsik shops — what sundae tastes like and how locals eat it with sauce or salt.",
    href: "/food/what-is-sundae-korean-blood-sausage",
    readingTime: "7 min read",
  },
  {
    id: "what-is-gimbap-korean-seaweed-rice-roll",
    category: "food",
    categoryLabel: "Food guide",
    title: "What Is Gimbap?",
    description:
      "Korea’s everyday seaweed rice roll — from bunsik counters and convenience stores to picnic-style tuna gimbap.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
    readingTime: "7 min read",
  },
  {
    id: "what-is-bunsik-korean-snack-food",
    category: "food",
    categoryLabel: "Food culture guide",
    title: "What Is Bunsik?",
    description:
      "Snack-shop food culture where tteokbokki, gimbap, twigim, and eomuk share one table — a good lens for cheap Korean eating.",
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
