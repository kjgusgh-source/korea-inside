import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-buldak`;

const pageTitle = "What Is Buldak? Korea’s Fire Noodles, Explained";
const pageDescription =
  "A friendly guide to Buldak, Samyang’s spicy stir-fried noodles: what the name means, how it started, the Fire Noodle Challenge, and how spicy it gets.";

const heroImage = {
  src: "/images/food/buldak-original-cup.jpg",
  alt: "A sealed large cup of Samyang Original Buldak Bokkeum Myeon with the red Buldak logo on the lid",
  width: 1050,
  height: 1400,
  caption:
    "Original Buldak Bokkeum Myeon in a large cup, photographed by HAEMIL.",
  license: "Owned by HAEMIL",
};

const quickFacts = [
  "Korean name: 불닭볶음면 (buldak-bokkeum-myeon), often shortened to 불닭 (buldak)",
  "Made by: Samyang Foods",
  "Original launch: April 2012",
  "What the name means: bul (불) is fire and dak (닭) is chicken",
  "Style: Stir-fried noodles — cooked, drained, then mixed with sauce, not a soup",
  "Sales: Over 10 billion units sold by the end of May 2026, according to Samyang",
  "Reach: Sold in more than 100 countries, according to Samyang",
];

const spiceTips = [
  "Start with carbonara, or split one cup of the original with a friend.",
  "You do not have to use all of the sauce. Add it a little at a time and stop where it still feels good.",
  "Keep milk or a yogurt drink nearby. Cold water alone often does not help as much as people hope.",
  "Eat it with something plain — a triangle gimbap or a boiled egg from the same convenience store works well.",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Cup ramyeon convenience store guide",
    description:
      "A local-friendly guide to Korean cup ramyeon, hot water machines, convenience store counters, and easy local pairings.",
    href: "/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Korean convenience store food guide",
    description:
      "A local-friendly first guide to Korean convenience store food, quick meals, snacks, drinks, and 24-hour culture.",
    href: "/food/what-to-eat-at-korean-convenience-store",
  },
  {
    label: "Food guide",
    title: "Tteokbokki guide",
    description:
      "Korea’s chewy spicy rice cake snack, from red street-stall sauce and fish cake to bunsik shops and local pairings.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "Korean noodles guide",
    description:
      "Ramyeon vs restaurant noodles, cold naengmyeon in summer, and solo-friendly bowls when you want a simple Korean meal.",
    href: "/food/korean-noodles-guide-first-time",
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
    canonical: "/food/what-is-buldak",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "HAEMIL",
    type: "article",
    locale: "en_US",
    images: ["/brand/haemil-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/brand/haemil-og.png"],
  },
};

export default function WhatIsBuldakPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      image: `${siteUrl}${heroImage.src}`,
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
          name: "Buldak",
        },
        {
          "@type": "Thing",
          name: "Korean instant noodles",
        },
        {
          "@type": "Thing",
          name: "Korean food",
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
          name: "What is Buldak?",
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
              What Is Buldak?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you have watched people online fanning their mouths over a
              plate of red noodles, there is a good chance it was Buldak. In
              Korea, it is a spicy stir-fried ramyeon brand from Samyang Foods
              that sits on convenience store shelves next to everything else
              — familiar, easy to grab, and a lot hotter than the average
              instant noodle.
            </p>
          </article>

          <figure className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-3 shadow-lg shadow-[var(--shadow)] md:p-4">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-[1.5rem]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mx-auto max-w-md px-2 pb-1 pt-3 text-xs leading-5 text-[var(--muted)] md:px-3">
              <span>{heroImage.caption}</span>
              <span> · {heroImage.license}</span>
            </figcaption>
          </figure>

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
              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                What Does &quot;Buldak&quot; Mean?
              </h2>

              <p>
                Bul (불) means fire and dak (닭) means chicken, so buldak is
                literally &quot;fire chicken.&quot; Before it was a noodle
                brand, buldak was the name of a very spicy chicken dish in
                Korea — chicken in a fiery red sauce, the kind of plate people
                order on purpose when they want to sweat a little. Samyang
                borrowed that idea for its noodles, and the full product name,
                불닭볶음면 (buldak-bokkeum-myeon), roughly means &quot;fire
                chicken stir-fried noodles.&quot;
              </p>

              <p>
                In everyday Korean, people usually just say 불닭. Said at a
                convenience store, there is a good chance it means the noodles
                rather than the chicken dish. It also works as a loose name for
                Samyang&apos;s whole spicy noodle line — the original, the
                carbonara version, the extra-spicy one — instead of one specific
                cup. So if a Korean friend says &quot;let&apos;s get
                buldak,&quot; it is fair to ask which one.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                How Buldak Ramen Started
              </h2>

              <p>
                Samyang&apos;s official brand story puts the starting point in
                2011, in Myeongdong, one of Seoul&apos;s busiest shopping
                streets. Kim Jung-soo of Samyang noticed young diners at a
                restaurant working through a plate of fiery buldak chicken, and
                the idea grew from there: what if ramyeon could carry that kind
                of heat? After about a year of development, the original Buldak
                Ramen came out in April 2012.
              </p>

              <p>
                It started small. According to Samyang, the first exports went
                to just three markets — Japan, Germany, and New Zealand. By the
                end of May 2026, the company said the Buldak brand had passed 10
                billion units sold worldwide, with cumulative sales of roughly 7
                trillion won, and that it is now sold in more than 100
                countries. For a product that began with three export markets,
                that is a long way to travel.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                What Makes Buldak Different From Regular Ramyeon?
              </h2>

              <p>
                Most Korean ramyeon is soup. You boil the noodles in water, add
                the seasoning, and eat the noodles together with the broth.
                Buldak goes the other way. Samyang describes it as boiling the
                noodles, draining the water, and then stir-frying them with the
                sauce, so you end up with sauce-coated noodles and no broth.
              </p>

              <p>
                The cup versions follow the same idea in a simpler way: add hot
                water, let the noodles soften, pour most of the water out, then
                mix in the sauce. Read the lid before you start. If you are used
                to soup-style cup ramyeon, the draining step is the one that is
                easy to forget.
              </p>

              <p>
                As for taste, Samyang&apos;s own description is short: spicy
                and savory. Some people also describe the original as a little
                sweet under the heat, but that part comes down to personal
                taste — the spice is what most people notice first. And despite
                the name, do not expect big pieces of chicken in the cup; the
                &quot;chicken&quot; side of Buldak lives in the sauce.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                How the Fire Noodle Challenge Spread
              </h2>

              <p>
                Outside Korea, a lot of people met Buldak through a video before
                they ever saw it on a shelf. A 2014 Korean Englishman video, in
                which the YouTube channel&apos;s British friends tried the
                noodles, is often credited with helping spark what became the
                Fire Noodle Challenge. Samyang&apos;s own timeline puts the big
                moment a little later and says #FireNoodleChallenge spread
                widely online in 2015.
              </p>

              <p>
                The format was simple. Someone eats Buldak on camera, the heat
                kicks in, and the reaction becomes the content. Those videos
                turned a Korean instant noodle into a dare people wanted to try
                for themselves. For many people in Korea, though, it is still
                just a spicy cup you might grab for a late-night snack, which is
                part of what makes its second life online a little funny — the
                same cup on a convenience store shelf is, somewhere else, a
                challenge with its own hashtag.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                Original vs. Carbonara
              </h2>

              <p>
                The original is the black package with the red Buldak logo,
                like the large cup in the photo above. It is the reference point
                for the whole line and the version people usually mean when
                they talk about Buldak&apos;s heat.
              </p>

              <p>
                Carbonara joined the Buldak lineup in 2018. It keeps the Buldak
                idea but adds a creamy, carbonara-style sauce, and Samyang rates
                it lower than the original on its own spice scale. If you are
                curious about Buldak but nervous about the heat, carbonara is
                the version people often suggest starting with. The lineup has
                grown well beyond these two over the years, with more flavors
                and formats, so the shelf can look a bit crowded — but original
                and carbonara are the two names worth knowing first.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                How Spicy Is Buldak?
              </h2>

              <p>
                Spicy enough to take seriously. Samyang uses its own five-step
                Buldak Spicy Level scale to compare its flavors: carbonara sits
                at Level 2, the original at Level 4, and 2X Spicy at the top,
                Level 5. That gives you a rough map of the lineup without
                needing any lab numbers. If you do not eat much spicy food, a few
                simple habits help:
              </p>

              <ul className="space-y-3">
                {spiceTips.map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <p>
                And if you are trying it for a video, there is no prize for
                finishing the whole cup in one go. Taking breaks is completely
                normal. Spice tolerance is personal, and plenty of people in
                Korea find the original hot too, so there is nothing strange
                about needing a glass of milk halfway through.
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                Where Can You Find Buldak in Korea?
              </h2>

              <p>
                You usually do not have to look hard. Buldak is a regular sight
                in Korean convenience stores and supermarkets, and you will
                often see it in both cup and packet form. A convenience store is
                the easiest place to start, because you can buy a cup and eat it
                right there — many stores have a hot water dispenser and a
                small counter by the window. Our{" "}
                <Link
                  href="/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store"
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  cup ramyeon guide
                </Link>{" "}
                walks through that routine step by step.
              </p>

              <p>
                Supermarkets and bigger marts tend to carry more flavors and
                multi-packs of the packet version, which is handy if you want
                to cook it at your accommodation or bring a few home. Flavors
                come and go, so the exact lineup you see can change from store
                to store.
              </p>

              <p>
                It also helps to know a few words on the package. 오리지널
                (original) marks the classic one, 까르보 (kkareubo) is short for
                carbonara, and 핵 (haek) — literally &quot;nuclear&quot; — is
                the word on the extra-spicy 2X version. You do not need to read
                Korean to pick one, but spotting 까르보 or 핵 on a cup tells you
                a lot about what you are getting into.
              </p>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  A local note from HAEMIL
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] md:text-base">
                  The photo on this page shows one product: the original Buldak
                  in a large cup, or 큰컵 (keun-cup). It is just one example.
                  Buldak also comes in regular cups and packets, and the
                  flavors on the shelf change over time. If you are aiming for
                  a milder one, check the flavor name on the package before
                  you pay — the packages can look similar at a glance.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related HAEMIL guides
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
