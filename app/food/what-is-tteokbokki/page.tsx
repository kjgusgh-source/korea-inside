import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import PostImageFigure from "../../../components/PostImageFigure";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/what-is-tteokbokki`;

const pageTitle = "What Is Tteokbokki? Korea’s Spicy Rice Cake Street Food";
const pageDescription =
  "A friendly HAEMIL guide to tteokbokki, Korea’s chewy spicy rice cake snack, from red street-stall sauce and fish cake to bunsik shops, school memories, and local pairings.";

const heroImage = {
  src: "/images/food/tteokbokki-pixabay-709k.jpg",
  alt: "A plate of Korean tteokbokki with red spicy sauce and rice cakes.",
  credit: "Image by 709K from Pixabay.",
  license: "Pixabay License",
};

const quickFacts = [
  "Korean name: Tteokbokki / 떡볶이",
  "Main ingredient: Chewy rice cakes called tteok",
  "Sauce: Usually a red gochujang-based spicy-sweet sauce",
  "Common extras: Eomuk fish cake, boiled eggs, ramyeon noodles, jjolmyeon, cheese, fried snacks, and sundae",
  "Where to find it: Bunsik shops, markets, street stalls, school areas, casual restaurants, and delivery menus",
  "Taste: Spicy, sweet, chewy, saucy, and comforting",
  "Spice note: It can be very spicy, so first-time visitors should start carefully",
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
    title: "Cup ramyeon convenience store guide",
    description:
      "A local-friendly guide to Korean cup ramyeon, hot water machines, convenience store counters, and easy local pairings.",
    href: "/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store",
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
    canonical: "/food/what-is-tteokbokki",
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

export default function WhatIsTteokbokkiPage() {
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
          name: "Tteokbokki",
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
          name: "What is tteokbokki?",
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
              What Is Tteokbokki? Korea&apos;s Spicy Rice Cake Street Food
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Tteokbokki is one of the Korean foods that looks simple until you
              take the first bite.
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
              <p>It is red.</p>

              <p>It is chewy.</p>

              <p>It is usually spicy.</p>

              <p>
                And somehow, it feels more like a memory than a normal snack.
              </p>

              <p>
                Tteokbokki, or 떡볶이, is made with chewy rice cakes called tteok.
                The most familiar version is cooked in a red sauce made with
                gochujang, Korean red pepper paste. The sauce is usually spicy,
                a little sweet, thick, and sticky enough to coat the rice cakes.
              </p>

              <p>For many Koreans, tteokbokki is not fancy food.</p>

              <p>It is after-school food.</p>

              <p>It is market food.</p>

              <p>
                It is something you eat standing near a small shop, sharing a
                plate with friends, or ordering when you want something spicy
                and comforting at the same time.
              </p>

              <p>The texture is the first thing to notice.</p>

              <p>
                Tteokbokki rice cakes are not soft like noodles and not crunchy
                like fried snacks. They are chewy. That chewiness is part of the
                fun. You bite into one piece, the sauce sticks to it, and the
                heat builds slowly.
              </p>

              <p>If you are new to Korean food, the texture may surprise you.</p>

              <p>That is normal.</p>

              <p>
                Tteokbokki is not trying to be delicate. It is bold, saucy, and
                direct.
              </p>

              <p>
                The classic red tteokbokki usually includes eomuk, or Korean
                fish cake. These thin fish cake pieces soak up the sauce and
                make the dish feel more like a snack meal. Some places also add
                boiled eggs, cabbage, green onion, or extra fish cake depending
                on the shop.
              </p>

              <p>But there is no single fixed version.</p>

              <p>A market stall may make it one way.</p>

              <p>A school-area bunsik shop may make it another way.</p>

              <p>
                A modern chain or delivery restaurant may add cheese, noodles,
                sausages, bacon, or cream sauce. Some versions are very spicy.
                Some are sweeter. Some are thick and dark red. Some are lighter
                and more soupy.
              </p>

              <p>That variety is part of tteokbokki culture.</p>

              <p>The word bunsik is useful here.</p>

              <p>
                Bunsik means casual snack food, and a bunsikjip is a Korean
                snack shop. These shops often sell tteokbokki, gimbap, fried
                snacks, ramyeon, sundae, fish cake soup, and other simple foods.
                For many Koreans, a bunsik shop is not only a place to eat. It
                is a small piece of school life, neighborhood life, and cheap
                comfort food.
              </p>

              <p>That is why tteokbokki feels emotional.</p>

              <p>It is not only about the spice.</p>

              <p>
                A lot of Koreans remember eating tteokbokki after school,
                dipping fried snacks into the sauce, sharing one plate with
                friends, or buying it from a small shop near a market. Even
                adults who do not eat it every week can still feel that old pull
                when they smell the sauce.
              </p>

              <p>
                For travelers, the best way to try tteokbokki is to understand
                the pairings.
              </p>

              <p>
                Tteokbokki is good by itself, but it often feels better with
                something next to it.
              </p>

              <p>
                Fried snacks, called twigim, are one of the best pairings. You
                can dip fried dumplings, seaweed rolls, squid, or vegetables
                into the red sauce. The crisp outside and spicy sauce work well
                together.
              </p>

              <p>Sundae is another common pairing.</p>

              <p>
                This is Korean blood sausage, and it may sound scary to some
                visitors, but it is a very normal bunsik food in Korea. Many
                people order tteokbokki and sundae together, then dip the sundae
                pieces into the sauce.
              </p>

              <p>Boiled eggs are easier for first-timers.</p>

              <p>
                The egg softens the spice and makes the plate feel more filling.
              </p>

              <p>
                Noodles are also common. Some people add ramyeon noodles or
                jjolmyeon noodles to make the sauce stretch further. Cheese is
                popular too, especially for people who want the spice to feel
                creamier and softer.
              </p>

              <p>If you are worried about spice, start carefully.</p>

              <p>
                Korean tteokbokki can be much hotter than it looks. The red
                color is a warning, but it does not tell the whole story. Some
                versions are mild and sweet. Others are seriously spicy. If you
                are not used to Korean spice, order a small portion first, drink
                water slowly, and do not be embarrassed if you need a break.
              </p>

              <p>Locals do that too.</p>

              <p>
                Tteokbokki is not a food you have to act tough with.
              </p>

              <p>
                One thing visitors should know is that old-school tteokbokki and
                modern tteokbokki can feel different.
              </p>

              <p>
                Old-school market tteokbokki is usually simple: rice cakes, red
                sauce, fish cake, maybe eggs. It feels direct and nostalgic.
                Modern chain or delivery tteokbokki can be heavier, richer, and
                more customizable. You may see cheese tteokbokki, rose
                tteokbokki, extra-spicy versions, cream versions, and big sets
                with fried food and noodles.
              </p>

              <p>Both can be fun.</p>

              <p>But they do not give the same feeling.</p>

              <p>
                If you want the classic local mood, try a small bunsik shop or
                market stall first. If you want something filling to share with
                friends, a modern delivery-style tteokbokki set can also be a
                very Korean experience.
              </p>

              <p>
                For HAEMIL readers, tteokbokki is worth trying because it
                shows a side of Korean food that is casual and emotional at the
                same time.
              </p>

              <p>It is not royal cuisine.</p>

              <p>It is not a beautiful plated dish.</p>

              <p>
                It is the food people crave when they want something spicy,
                chewy, cheap, and familiar.
              </p>

              <p>
                The photo on this page shows one common red-sauce style, but
                tteokbokki can look different depending on where you buy it. Do
                not worry too much about finding the perfect one. If you see a
                small shop with steam, red sauce, and people eating from paper
                plates or simple bowls, that is already a good sign.
              </p>

              <p>Order a small portion.</p>

              <p>Add fried snacks if you can.</p>

              <p>Try one rice cake while it is hot.</p>

              <p>
                Then you will understand why this simple red snack has stayed
                in Korean daily life for so long.
              </p>

              <p>It is not just spicy rice cake.</p>

              <p>It is a small plate of Korean comfort.</p>
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
