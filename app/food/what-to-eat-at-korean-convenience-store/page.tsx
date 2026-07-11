import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-to-eat-at-korean-convenience-store`;

const pageTitle =
  "What to Eat at a Korean Convenience Store: A Local-Friendly First Guide";
const pageDescription =
  "A friendly HAEMIL guide to Korean convenience store food, from triangle kimbap and cup ramyeon to lunch boxes, snacks, 24-hour stores, parcel services, and local YouTube review culture.";

const relatedGuides = [
  {
    label: "Food guide",
    title: "What to Eat in Seoul for a First-Time Visitor",
    description:
      "A practical Seoul food guide for first-time visitors, covering markets, street food, cafes, Han River ramyeon, late-night meals, and more.",
    href: "/food/what-to-eat-in-seoul-first-time",
  },
  {
    label: "Food guide",
    title: "Korean BBQ Guide for First-Time Visitors",
    description:
      "A warm beginner-friendly guide to what to order first, how to eat with banchan and ssam, and why Korean barbecue feels social.",
    href: "/food/korean-bbq-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean Street Food Guide",
    description:
      "A warm beginner-friendly guide to Korean market food, from bindaetteok and tteokbokki to hotteok, fish cake, and fried snacks.",
    href: "/food/korean-market-food-guide",
  },
  {
    label: "Food",
    title: "Food hub",
    description:
      "Simple HAEMIL food guides for understanding what to eat in Korea and how to order without turning every meal into homework.",
    href: "/food",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/what-to-eat-at-korean-convenience-store",
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

export default function WhatToEatAtKoreanConvenienceStorePage() {
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
          name: "Korean convenience store food",
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
          name: "What to eat at a Korean convenience store",
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
              What to Eat at a Korean Convenience Store: A Local-Friendly First
              Guide
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A Korean convenience store is not just a place to buy water.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                For many travelers, it becomes the easiest first food stop in
                Korea. It is bright, familiar, usually easy to enter, and often
                open late. Many stores are open 24 hours, so they can feel
                especially helpful when restaurants are closed, you arrive late,
                or you just want something simple without sitting down for a full
                meal.
              </p>

              <p>But Korean convenience stores are not all exactly the same.</p>

              <p>
                The food can change by chain, by neighborhood, by season, and
                even by the size of the store. A busy store near a subway
                station may feel different from a quiet store in a residential
                area. A large store may have more lunch boxes, desserts, and
                drinks, while a small one may focus on the basics.
              </p>

              <p>That is part of the fun.</p>

              <p>
                Instead of looking for one &quot;perfect&quot; convenience store
                food, it is better to think by situation. Are you hungry enough
                for a small meal? Do you want something hot? Do you want a snack
                for walking around? Do you need breakfast before a train ride?
                Once you choose the situation, the shelves become much easier to
                read.
              </p>

              <p>Start with triangle kimbap.</p>

              <p>
                Triangle kimbap is one of the most common quick meals in a Korean
                convenience store. It is rice wrapped in seaweed, usually with a
                filling inside, and it is shaped like a triangle. You might see
                tuna mayo, kimchi, bulgogi-style fillings, spicy chicken, or
                other flavors depending on the store.
              </p>

              <p>It is cheap, small, and easy to eat.</p>

              <p>
                If you are new to Korea, triangle kimbap is a good first choice
                because it feels local without being too difficult. The only
                tricky part is opening the plastic wrap correctly. Many packages
                have numbered steps, so follow the numbers slowly and do not rush
                it.
              </p>

              <p>Next, look at cup ramyeon.</p>

              <p>
                Cup ramyeon is one of the most useful convenience store foods in
                Korea. Many stores have hot water machines, and some also have a
                small counter or eating area. This means you can buy a cup
                noodle, add hot water, wait a few minutes, and eat it right
                there.
              </p>

              <p>Not every store has the same space or setup, so check first.</p>

              <p>
                Some convenience stores feel almost like tiny snack cafés. Others
                are too small to stay long. If there is a microwave, hot water
                machine, or seating area, you will usually notice it near the
                front or side of the store.
              </p>

              <p>Dosirak lunch boxes are another good option.</p>

              <p>
                A convenience store dosirak is a packaged lunch box with rice
                and side dishes. It is not the same as a restaurant meal, but it
                can be surprisingly useful when you want something filling and
                simple. Some include meat, egg, kimchi, vegetables, or small
                fried items. Many are designed to be heated in the microwave.
              </p>

              <p>This is where Korean convenience stores feel very practical.</p>

              <p>
                You can buy a lunch box, heat it up, grab a drink, and have a
                quick meal without needing to read a full restaurant menu. For
                travelers who feel tired, shy, or unsure what to order, this can
                be a comfortable option.
              </p>

              <p>There are also hot bars and quick snacks.</p>

              <p>
                You may see sausages, fish cake-style bars, cheese sticks,
                chicken snacks, or other items near the refrigerated section.
                These are easy to pick up when you are not hungry enough for a
                full meal but want something more than chips.
              </p>

              <p>
                They are the kind of food Koreans might grab between classes,
                after work, or late at night.
              </p>

              <p>Drinks are a big part of the experience too.</p>

              <p>
                Banana milk is one of the classic Korean convenience store drinks
                for visitors to try at least once. You will also see coffee
                drinks, fruit drinks, flavored milk, yogurt drinks, teas, and
                seasonal drinks that change often. Korean convenience stores are
                very good at making the drink section feel tempting.
              </p>

              <p>Desserts and snacks change quickly.</p>

              <p>
                This is one reason Korean convenience stores are fun even for
                locals. New desserts, collaboration snacks, limited flavors,
                character packaging, and seasonal items appear often. Some
                disappear quickly. Some become popular because people see them
                online first.
              </p>

              <p>
                That is why you should not expect every recommendation to be
                available forever.
              </p>

              <p>
                If someone tells you about a specific snack, you may not find it
                at every store. It might be sold out, seasonal, limited, or only
                available at one chain. This can be frustrating, but it is also
                part of Korean convenience store culture. People often enjoy the
                search.
              </p>

              <p>Korean convenience stores also do more than sell food.</p>

              <p>
                Depending on the chain and location, some stores may offer parcel
                services, pickup services, ticket or payment-related services,
                phone charging items, daily goods, umbrellas, masks, batteries,
                and other small emergency items. For travelers, this can be useful
                to know, but do not assume every store offers every service.
              </p>

              <p>
                Think of it this way: the convenience store is a small
                neighborhood tool.
              </p>

              <p>
                Food is the easiest part to enjoy, but the store also helps with
                little problems that come up during the day.
              </p>

              <p>
                There is also a local review culture around convenience store
                food.
              </p>

              <p>
                Because new products come out so often, Koreans often check
                YouTube, Instagram, Shorts, or blog reviews before trying them.
                This is especially true for new ramyeon, desserts, lunch boxes,
                snacks, and unusual collaborations.
              </p>

              <p>
                If you can understand some Korean, channels like sini시니 and
                맛상무 can help you see what people are noticing.
              </p>

              <p>
                sini시니 often feels casual and easy to watch, with snack-style
                food reviews and convenience store items that suit quick
                browsing.
              </p>

              <p>
                맛상무 feels more direct and review-focused, often looking at
                new food products in a practical way.
              </p>

              <p>
                These are not official travel guides. They are closer to local
                food-review channels. That makes them useful because they show
                how Korean viewers actually react to new convenience store foods:
                what looks interesting, what feels overpriced, what tastes better
                than expected, and what is mostly hype.
              </p>

              <p>For a first visit, do not make it complicated.</p>

              <p>
                Try one triangle kimbap, one cup ramyeon, one drink, and one
                dessert or snack. If the store has a microwave or hot water
                machine, try a hot item. If you are staying near a hotel or
                guesthouse, visit the convenience store once in the morning and
                once late at night. The feeling can be different.
              </p>

              <p>A Korean convenience store is not the best food in Korea.</p>

              <p>But it is one of the easiest ways to understand everyday Korea.</p>

              <p>
                Students use it. Office workers use it. Travelers use it. People
                stop by for breakfast, late-night noodles, snacks, drinks,
                emergency umbrellas, and small comforts. It is not fancy, but it
                is part of daily life.
              </p>

              <p>That is why it is worth visiting slowly.</p>

              <p>Do not just grab water and leave.</p>

              <p>
                Look at the ramyeon wall. Check the triangle kimbap section. Open
                the drink fridge. See what desserts are new. Notice whether the
                store has a microwave or hot water machine. If something looks
                strange but interesting, that is often the right thing to try.
              </p>

              <p>
                That small moment is part of the Korean convenience store
                experience.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">Related food guides</h2>
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
