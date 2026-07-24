import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/korean-fried-chicken-menu-guide-first-time`;

const pageTitle =
  "Korean Fried Chicken Menu Guide: Yangnyeom, Soy Garlic, Snow Cheese, and Boneless Chicken";
const pageDescription =
  "A friendly guide to Korean chicken menu styles, including fried chicken, yangnyeom, soy garlic, snow cheese, oven-roasted chicken, boneless chicken, and banban half-and-half orders.";

const quickAnswer = [
  "Korean chicken menus name the coating or sauce, not just “fried chicken.”",
  "Fried (plain) chicken = crispy coating without sticky sauce.",
  "Oven-roasted or baked chicken = less batter, more roasted skin — not always on every menu.",
  "Yangnyeom = sweet, spicy, red sticky sauce.",
  "Soy garlic = salty-sweet, often easier than red sauce for first-timers.",
  "Snow cheese = powder-style topping; messy but popular.",
  "Boneless is called sunsal; bone-in feels more classic to some locals.",
  "Banban = half-and-half — the easiest first order for two styles in one box.",
  "For spicy sauces, ask if the sauce can come on the side — not every style works that way.",
];

const relatedGuides = [
  {
    label: "Food guide",
    title: "Korean Fried Chicken and Chimaek Guide for First-Time Visitors",
    description:
      "Banban, yangnyeom, chicken-mu, delivery, Han River tips, and chimaek — the practical side of ordering chicken in Korea.",
    href: "/food/korean-fried-chicken-chimaek-guide-first-time",
  },
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
      "Apps worth setting up before landing — Naver Map, KakaoMap, Papago, Kakao T, and a few others for maps, rides, and reservations.",
    href: "/travel/korea-travel-apps-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/korean-fried-chicken-menu-guide-first-time",
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

export default function KoreanFriedChickenMenuGuideFirstTimePage() {
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
          name: "Yangnyeom chicken",
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
          name: "Korean fried chicken menu guide",
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
              Walk into a Korean chicken shop and the menu is not one generic
              bucket. You will see fried chicken, oven-roasted options at some
              shops, yangnyeom, soy garlic, snow cheese, sunsal, banban — names
              that describe the cooking style, sauce, cut, or how the order is
              split. This guide is for reading those words before you order, not
              for ranking brands.
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
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Why Korean chicken menus have so many names
                </h2>

                <p>
                  Korean chicken shops compete on sauce, crunch, cooking style,
                  and portion size — so the menu reads like a list of flavors and
                  cuts, not one generic bucket. A shop might offer plain fried
                  chicken, oven-roasted chicken, sauced chicken, powder-topped
                  chicken, bone-in, boneless, and half-and-half combos on the
                  same order screen. That is normal. Once you know what each
                  word means, ordering gets much easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Fried chicken: the basic crispy style
                </h2>

                <p>
                  Plain fried chicken — often just called fried chicken or
                  tongdak-style — is chicken with a crispy coating and no sticky
                  sauce on top. This is the style to order if you want crunch
                  first. Sauced chicken can soften the coating over time; plain
                  fried keeps the texture clearer. Many locals still order this
                  even when yangnyeom is popular, especially in a banban box.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Oven-roasted or baked chicken: the lighter-feeling option
                </h2>

                <p>
                  Not every Korean chicken order is deep-fried. Some shops also
                  sell oven-roasted or baked chicken, where the chicken comes out
                  with less batter and a more roasted skin texture. It can feel
                  lighter than crispy fried chicken, especially if you do not
                  want a heavy sauce-covered meal.
                </p>

                <p>
                  That does not mean it is automatically “diet food.” It is still
                  chicken from a delivery-style menu, and some versions come with
                  sweet, salty, or spicy sauces. But if you want something that
                  feels less oily than classic fried chicken, oven-roasted
                  chicken is worth knowing.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Yangnyeom chicken: sweet, spicy, sticky sauce
                </h2>

                <p>
                  Yangnyeom chicken is coated in a sweet, spicy, red sauce. It
                  is one of the most common orders in Korea and what many
                  visitors picture when they think of Korean chicken. The sauce
                  is sticky — expect messy fingers. It can feel spicy even when
                  it also tastes sweet. If you are unsure about heat, read the
                  menu carefully or choose soy garlic instead.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Soy garlic chicken: salty-sweet and easy to like
                </h2>

                <p>
                  Soy garlic chicken — sometimes labeled ganjang or soy-garlic —
                  is salty-sweet and glossy. For many first-time visitors, it is
                  an easier entry than red yangnyeom. It still feels clearly
                  Korean, but the flavor is less sharp. In a banban order, fried
                  plus soy garlic is a safe first combination.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Snow cheese or powder-style chicken
                </h2>

                <p>
                  Snow cheese chicken — or similar powder-topped styles — comes
                  with a white cheese or seasoning powder shaken over the
                  chicken. It is rich, a bit messy, and very snack-like. Names
                  vary by shop, but if you see “snow,” “cheese powder,” or
                  similar wording, expect a dry topping rather than a wet sauce.
                  Fine as a second order once you know the basic styles; not
                  necessary for a first night.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Boneless vs bone-in chicken
                </h2>

                <p>
                  Boneless chicken is called sunsal in Korean. It is easier to
                  share, eat in a hotel room, or handle with one hand. Bone-in
                  chicken feels more classic to some people and can taste a
                  little different, but it is messier. Neither is “correct” —
                  pick what fits your setting. Visitors eating casually or in a
                  group often choose sunsal; bone-in works fine for sit-down
                  meals with gloves.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Banban: half-and-half chicken
                </h2>

                <p>
                  Banban means half and half — one order split into two flavors.
                  A common first choice is half plain fried and half yangnyeom,
                  or half fried and half soy garlic. That way you taste crisp
                  chicken and sauced chicken without committing to one style for
                  the whole box. If you are ordering for two people, banban is
                  usually the most practical first move.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What to order first as a visitor
                </h2>

                <p>
                  Start simple: banban with fried plus soy garlic, or fried plus
                  yangnyeom if you handle spice well. Add sunsal if bones feel
                  inconvenient. Skip snow cheese and trend flavors until you
                  know what you like. One whole chicken can be a lot for one
                  person — share when you can. For delivery, takeout, chimaek,
                  and Han River tips, the{" "}
                  <Link
                    href="/food/korean-fried-chicken-chimaek-guide-first-time"
                    className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                  >
                    chimaek guide
                  </Link>{" "}
                  covers the practical side without repeating every menu name
                  here.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What to eat with Korean chicken
                </h2>

                <p>
                  Chicken-mu — white pickled radish — usually comes on the side.
                  Eat it between oily or sauced bites; it cuts through the
                  richness. Beer is common (chimaek), but soda, sparkling water,
                  or no alcohol is completely fine. Some shops give plastic
                  gloves and wet wipes; use them for sauced chicken. Cola is
                  also normal if you want something cold and simple.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <h2 className="text-xl font-semibold text-[var(--text)]">
                  Local tip: ask about the spicy sauce, not just the spice level
                </h2>

                <p>
                  When you see a spicy chicken menu, do not choose only by the
                  word “spicy.” Korean spicy sauces can be sweet, smoky, garlicky,
                  peppery, or very hot, depending on the shop.
                </p>

                <p>
                  If you are worried, you can ask whether the spicy sauce can
                  come on the side. That way, you can try a little first instead
                  of covering every piece from the beginning.
                </p>

                <p>
                  A small note, though: some spicy chicken menus are designed to
                  taste better when the sauce is fully coated on the chicken. For
                  classic yangnyeom chicken, sauce on the side can work well for
                  first-timers. For other spicy signature sauces, the coated
                  version may taste closer to what the shop intended.
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
