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
                  Korean fried chicken is not only a &ldquo;special food&rdquo; in
                  Korea.
                </p>

                <p>It is also lazy dinner food.</p>

                <p>Late-night food.</p>

                <p>Delivery food.</p>

                <p>After-work food.</p>

                <p>Friend-group food.</p>

                <p>
                  A weekend food you order when nobody wants to cook.
                </p>

                <p>
                  That is why it feels different from simply eating fried chicken
                  at a restaurant.
                </p>

                <p>The chicken is part of the situation.</p>

                <p>A box on the table.</p>

                <p>Pickled radish on the side.</p>

                <p>Plastic gloves.</p>

                <p>Sauce on your fingers.</p>

                <p>Someone choosing between fried and yangnyeom.</p>

                <p>
                  Someone saying one chicken is enough, then ordering more later.
                </p>

                <p>That is the mood.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Banban chicken — the easiest first order
                </h2>

                <p>The easiest first order is banban chicken.</p>

                <p>Banban means half and half.</p>

                <p>
                  For fried chicken, it usually means you can choose two styles in
                  one order.
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

                <p>Do not ignore it.</p>

                <p>It cuts through the oil and sauce.</p>

                <p>
                  When the chicken starts feeling heavy, chicken-mu makes the next
                  bite easier.
                </p>

                <p>Some visitors think it is just a small side.</p>

                <p>
                  But for Koreans, chicken without chicken-mu can feel incomplete.
                </p>

                <p>
                  Yangnyeom chicken is famous, but it is not always the best first
                  bite for everyone.
                </p>

                <p>The sauce can be sticky, sweet, spicy, and heavy.</p>

                <p>It gets on your fingers.</p>

                <p>It can make the crispy coating softer.</p>

                <p>That is part of the style.</p>

                <p>If you want crunch, eat some plain fried chicken first.</p>

                <p>If you want sauce, go for yangnyeom.</p>

                <p>If you want something safer, soy garlic is a good middle ground.</p>

                <p>
                  You may also see cheese, honey butter, spicy fire flavors,
                  creamy sauces, or other newer styles.
                </p>

                <p>Some are fun.</p>

                <p>Some feel more like trend food than classic chicken.</p>

                <p>Do not feel like you have to chase the strangest flavor.</p>

                <p>For a first order, simple is usually better.</p>

                <p>Fried plus yangnyeom.</p>

                <p>Or fried plus soy garlic.</p>

                <p>That is enough.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Chimaek — beer is optional
                </h2>

                <p>Now, chimaek.</p>

                <p>Chimaek means chicken and maekju, or beer.</p>

                <p>
                  It is one of the most familiar Korean food words for night plans.
                </p>

                <p>
                  But you do not have to drink beer to enjoy Korean fried chicken.
                </p>

                <p>Many people eat chicken with soda.</p>

                <p>Some eat it with sparkling water.</p>

                <p>Some eat it with no alcohol at all.</p>

                <p>If you drink, drink at your own pace.</p>

                <p>If you do not drink, just order chicken.</p>

                <p>The chicken is still the main point.</p>
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

                <p>Delivery is a huge part of Korean chicken culture.</p>

                <p>But for visitors, delivery is not always the easiest route.</p>

                <p>
                  Korean delivery apps can involve address details, phone
                  verification, payment methods, building entrances, hotel rules,
                  and rider communication.
                </p>

                <p>
                  If you are staying at a hotel, delivery may need to be picked up
                  in the lobby or outside.
                </p>

                <p>Some hotels may have their own rules.</p>

                <p>
                  If your Korean address is not clear, the rider may have trouble
                  finding you.
                </p>

                <p>
                  So even though locals order chicken delivery all the time,
                  tourists should not assume it will be simple on the first night.
                </p>

                <p>Takeout can be easier.</p>

                <p>Eating in the shop can be easier.</p>

                <p>
                  If you really want delivery, make sure your address is clear and
                  your stay allows it.
                </p>

                <p>
                  Chicken in a hotel room sounds easy, but think about the smell
                  and trash.
                </p>

                <p>Korean fried chicken can smell strong.</p>

                <p>
                  Sauce containers, bones, gloves, napkins, and radish containers
                  create more trash than expected.
                </p>

                <p>Do not leave messy food waste sitting around.</p>

                <p>Tie it up properly.</p>

                <p>Use the hotel trash rules if there are instructions.</p>

                <p>It is a small thing, but it matters.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Han River chimaek
                </h2>

                <p>Han River chimaek is a real image people have of Seoul.</p>

                <p>Chicken, beer, a mat, river wind, city lights.</p>

                <p>It can be fun.</p>

                <p>But it works best when you plan it lightly.</p>

                <p>The weather matters.</p>

                <p>The exact meeting spot matters.</p>

                <p>Delivery drivers need a clear location.</p>

                <p>Trash cleanup matters.</p>

                <p>And not every riverside moment looks like a drama scene.</p>

                <p>If you bring chicken to the Han River, clean up everything.</p>

                <p>
                  Do not leave boxes, cups, sauce, or radish containers behind.
                </p>

                <p>The place is shared.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Eat-in shops and hof-style places
                </h2>

                <p>Eat-in chicken places can feel different depending on the shop.</p>

                <p>Some are family-friendly restaurants.</p>

                <p>Some are casual beer pubs.</p>

                <p>Some are more like hof-style drinking places.</p>

                <p>Some are loud with groups.</p>

                <p>
                  If the place feels more like a drinking spot and you only want a
                  quick meal, it may not be the best match.
                </p>

                <p>
                  Look at the tables, menu, and mood before sitting.
                </p>

                <p>You do not need to force the first place you see.</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the honest way to enjoy Korean fried chicken
                  is this:
                </p>

                <p>Start with banban.</p>

                <p>Choose boneless if you want less mess.</p>

                <p>Use the gloves if they give you gloves.</p>

                <p>Eat the chicken-mu between oily bites.</p>

                <p>Do not over-order.</p>

                <p>
                  Do not assume delivery will be easy just because it is easy for
                  locals.
                </p>

                <p>And do not turn chimaek into pressure to drink.</p>

                <p>A box of chicken at the right moment is enough.</p>

                <p>
                  After a long day in Seoul, that may be exactly the meal you
                  needed.
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
