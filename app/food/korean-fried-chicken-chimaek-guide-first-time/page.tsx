import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-fried-chicken-chimaek-guide-first-time`;

const pageTitle =
  "Korean Fried Chicken and Chimaek Guide for First-Time Visitors: What to Order and Local Tips";
const pageDescription =
  "A practical HAEMIL guide to Korean fried chicken and chimaek for first-time visitors, including banban chicken, yangnyeom, soy garlic, boneless chicken, chicken-mu, delivery, takeout, Han River tips, and local etiquette.";

const quickAnswer = [
  "Best first order: banban chicken, half fried and half yangnyeom or soy garlic",
  "Easier texture: boneless chicken, called sunsal",
  "Classic side: chicken-mu, pickled radish",
  "Good with beer: chimaek, but alcohol is optional",
  "Tourist tip: takeout or eat-in can be easier than delivery apps",
  "Portion warning: one whole chicken can be too much for one person",
  "Han River tip: fun if planned well, but clean up everything and choose a clear meeting/delivery spot",
  "Local caution: sauce gets messy, so use gloves or wet wipes if provided",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "Food guide",
    title: "How to order food in Korea",
    description:
      "A practical guide for first-time visitors, with Korean restaurant ordering tips, kiosks, table bells, side dishes, self-service water, paying, solo dining, and spicy food notes.",
    href: "/food/how-to-order-food-in-korea",
  },
  {
    label: "Food guide",
    title: "Korean Fried Chicken Menu Guide: Yangnyeom, Soy Garlic, Snow Cheese, and Boneless Chicken",
    description:
      "What yangnyeom, soy garlic, snow cheese, sunsal, and banban mean on a Korean chicken menu — for first-time orders without the guesswork.",
    href: "/food/korean-fried-chicken-menu-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean pocha and night food guide for first-time visitors",
    description:
      "A practical guide to Korean pocha night food, with anju, pojangmacha, eomuk-tang, tteokbokki, dakbal, jeon, cash tips, price checks, and local etiquette.",
    href: "/food/korean-pocha-night-food-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean cafe culture guide for first-time visitors",
    description:
      "A practical guide to Korean cafes, including ordering, Wi-Fi, receipts, outlets, desserts, study mood, photo spots, one-drink rules, and local etiquette.",
    href: "/food/korean-cafe-culture-guide-first-time",
  },
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "A practical guide to Korean apps travelers may actually use, from Naver Map, KakaoMap, Papago, Kakao T, and subway apps to Baemin, CatchTable, Yanolja, and Yeogi Eottae.",
    href: "/travel/korea-travel-apps-first-time",
  },
  {
    label: "Travel guide",
    title: "Korea etiquette tips for tourists",
    description:
      "A practical first-time Korea etiquette guide with subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
  {
    label: "Travel guide",
    title: "Seoul neighborhood guide for first-time visitors",
    description:
      "A practical guide to Seoul neighborhoods, from Myeongdong and Hongdae to Gangnam, Insadong, Euljiro, Seongsu, Jamsil, and Itaewon.",
    href: "/travel/seoul-neighborhood-guide-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-fried-chicken-chimaek-guide-first-time",
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

export default function KoreanFriedChickenChimaekGuideFirstTimePage() {
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
          name: "Korean fried chicken",
        },
        {
          "@type": "Thing",
          name: "Chimaek",
        },
        {
          "@type": "Thing",
          name: "Yangnyeom chicken",
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
          name: "Korean fried chicken and chimaek guide",
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
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Korean fried chicken is lazy dinner food, late-night delivery food,
              and after-work food — not just a restaurant special. A box on the
              table, chicken-mu on the side, and sauce on your fingers is the
              usual mood.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick answer
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickAnswer.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-8 text-base leading-8 text-[var(--muted)] md:text-lg">
              <div className="space-y-4">
                <p>
                  Korean fried chicken is lazy dinner food, late-night delivery,
                  after-work food — a box on the table, chicken-mu on the side,
                  plastic gloves, sauce on your fingers, someone debating fried
                  vs yangnyeom. That situation is as much part of the meal as
                  the chicken itself.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Banban chicken — the easiest first order
                </h2>

                <p>The easiest first order is banban chicken.</p>

                <p>Banban means half and half.</p>

                <p>
                  For fried chicken, it usually means you can choose two styles in
                  one order. If menu names like yangnyeom, soy garlic, or snow
                  cheese feel confusing, see the{" "}
                  <Link
                    href="/food/korean-fried-chicken-menu-guide-first-time"
                    className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                  >
                    menu guide
                  </Link>{" "}
                  first — then come back here for banban, delivery, and chimaek
                  tips.
                </p>

                <p>
                  A common first choice is half plain fried chicken and half
                  yangnyeom chicken.
                </p>

                <p>
                  Plain fried chicken lets you taste the crisp coating more
                  clearly.
                </p>

                <p>
                  Yangnyeom chicken has a sweet, spicy, sticky red sauce.
                </p>

                <p>
                  If you are not sure about spice, choose soy garlic or
                  ganjang-style chicken instead of a very spicy sauce.
                </p>

                <p>Soy garlic is often easier for first-time visitors.</p>

                <p>
                  It still feels Korean, but it is not as intense as red spicy
                  sauce.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bone-in vs sunsal (boneless)
                </h2>

                <p>Boneless chicken is called sunsal.</p>

                <p>If you do not want to deal with bones, order sunsal.</p>

                <p>
                  It is easier to share, easier to eat in a hotel room, and easier
                  if you are walking around or eating casually.
                </p>

                <p>Bone-in chicken can feel more classic to some people, but it is messier.</p>

                <p>There is no correct choice.</p>

                <p>Choose the version that fits the moment.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Chicken-mu and sauce styles
                </h2>

                <p>
                  Chicken-mu is the white pickled radish that often comes with
                  Korean fried chicken.
                </p>

                <p>
                  Chicken-mu cuts through the oil and sauce — eat it between
                  heavy bites. Yangnyeom is sticky and can soften the crunch; try
                  plain fried first if you want crisp, or soy garlic if red sauce
                  feels like too much. Cheese, honey butter, and other trend
                  flavors are fine, but fried plus yangnyeom, or fried plus soy
                  garlic, is a solid first order.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Chimaek — beer is optional
                </h2>

                <p>
                  Chimaek means chicken and beer, but soda, sparkling water, or
                  no alcohol at all works fine. If you drink, keep your pace; if
                  you do not, just order chicken — the box is still the main point.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Portions and solo travelers
                </h2>

                <p>Portion size matters.</p>

                <p>
                  One whole chicken can be a lot for one person, especially if you
                  already ate dinner or are ordering sauced chicken.
                </p>

                <p>
                  For two people, one chicken may be enough depending on appetite.
                </p>

                <p>
                  For a group, it is easier to order a few styles and share.
                </p>

                <p>
                  Solo travelers can still eat Korean fried chicken, but it may be
                  harder to finish a full order.
                </p>

                <p>
                  Look for smaller portions, boneless options, takeout, or places
                  where eating alone feels comfortable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Delivery, takeout, and hotel rooms
                </h2>

                <p>
                  Delivery is huge in Korean chicken culture, but visitors often
                  struggle with app address entry, phone verification, hotel lobby
                  pickup, and rider communication. Locals make it look easy; on
                  your first night, takeout or eat-in is usually simpler. In a
                  hotel room, think about smell and trash — sauce cups, bones,
                  gloves, and radish containers add up; tie bags properly and
                  follow the hotel&apos;s rules.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Han River chimaek
                </h2>

                <p>
                  Han River chimaek — chicken, a mat, river wind — can be fun when
                  the weather and meeting spot are clear and delivery drivers know
                  where to find you. Clean up everything: boxes, cups, sauce,
                  radish containers. Not every riverside moment looks like a drama
                  scene, and that is fine.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Eat-in shops and hof-style places
                </h2>

                <p>
                  Eat-in shops range from family-friendly to loud hof-style beer
                  pubs. If you only want a quick meal, read the tables and mood
                  before sitting — you do not have to take the first place you see.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Simple first order
                </p>

                <p>
                  Banban chicken with fried and yangnyeom, or fried and soy garlic,
                  plus chicken-mu, plus beer if you want chimaek, or soda if you do
                  not.
                </p>

                <p>That is a good first experience.</p>

                <p>No need to order five sauces.</p>

                <p>No need to make the meal complicated.</p>

                <p>Korean fried chicken is best when it feels easy.</p>
              </div>

              <div className="space-y-4">
                <p>
                  Start with banban, use gloves if they give them, eat chicken-mu
                  between oily bites, and do not assume delivery will be easy just
                  because it is for locals. Chimaek does not require beer — after a
                  long day in Seoul, a box at the right moment may be exactly what
                  you wanted.
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
