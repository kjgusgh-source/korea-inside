import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/vegan-vegetarian-korea-guide-first-time`;

const pageTitle =
  "Vegan and Vegetarian in Korea: Why “No Meat” Isn’t Enough";
const pageDescription =
  "Is kimchi vegan? Is Korean food vegan at all? A local friend explains how to eat vegan or vegetarian in Korea — from hidden fish sauce to how to actually order in Korean.";

const relatedGuides = [
  {
    label: "Food guide",
    title: "What Is Kimchi?",
    description:
      "The fermentation basics behind kimchi, including why jeotgal (salted seafood) is part of the traditional recipe and why not every jar is vegan.",
    href: "/food/what-is-kimchi",
  },
  {
    label: "Food guide",
    title: "What Is Tteokbokki?",
    description:
      "Chewy rice cakes in red sauce, and why the anchovy broth underneath is worth asking about if you are avoiding seafood.",
    href: "/food/what-is-tteokbokki",
  },
  {
    label: "Food guide",
    title: "What Is Gimbap?",
    description:
      "Korea's everyday seaweed rice roll, and where egg, fish cake, or imitation crab usually show up in the standard version.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
  },
  {
    label: "Food guide",
    title: "Naengmyeon Guide: Korean Cold Noodles",
    description:
      "Mul and bibim naengmyeon styles, and why the traditional broth is easy to miss as a beef-based one.",
    href: "/food/naengmyeon-korean-cold-noodles-guide-first-time",
  },
  {
    label: "Food guide",
    title: "Korean Soups and Stews Guide for First-Time Visitors",
    description:
      "What to expect from jjigae, gukbap, and hot pots, including how often anchovy or bone broth is the base under the surface.",
    href: "/food/korean-soups-and-stews-guide-first-time",
  },
  {
    label: "Food guide",
    title: "How to Order at a Korean Restaurant",
    description:
      "The everyday mechanics of ordering in Korea, useful groundwork before adding vegan or vegetarian requests on top.",
    href: "/food/how-to-order-at-a-korean-restaurant",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/vegan-vegetarian-korea-guide-first-time",
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

export default function VeganVegetarianKoreaGuideFirstTimePage() {
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
          name: "Vegan food in Korea",
        },
        {
          "@type": "Thing",
          name: "Vegetarian food in Korea",
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
          name: "Vegan and vegetarian in Korea",
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
              If you have searched “vegan in Korea” or “is Korean food
              vegan,” you have probably found two very different answers.
              Some say Korea is surprisingly easy for plant-based eating.
              Others say it is nearly impossible. Both are a little bit
              right, and the reason is simpler than it sounds: a dish can
              look vegetarian without actually being vegetarian.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Plant-based options have been growing in Korea, especially in
              Seoul and among younger diners. But “growing” does not
              mean “everywhere,” and it definitely does not mean every
              restaurant defines things the way you might expect. This
              guide is not a list of restaurant recommendations. It is the
              kind of explanation a local friend would give you before you
              sit down to order — what to actually watch for, and how to
              ask about it in Korean.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-8 text-base leading-8 text-[var(--muted)] md:text-lg">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  “No Meat” and “Vegan” Don’t Always Mean the
                  Same Thing Here
                </h2>

                <p>
                  Here is the first thing worth knowing: when a restaurant
                  says “고기 안 들어가요” (no meat goes in), that usually
                  refers to actual pieces of meat — beef, pork, chicken.
                  It does not automatically include things like anchovy
                  broth, fish sauce, or salted shrimp, because in many
                  Korean kitchens those are not mentally filed under
                  “meat” at all.
                </p>

                <p>
                  This is not a case of Korean restaurants not
                  understanding vegan food. It is more that “meat-free”
                  and “vegan” are drawing the line in different places,
                  and neither side usually realizes it until the food is
                  already on the table. Once you know that, ordering gets a
                  lot easier, because you can ask about the specific things
                  that tend to fall into that gap.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  A Dish Can Look Vegetarian Without Being Vegetarian
                </h2>

                <p>
                  Korean food relies heavily on a handful of savory bases
                  that do not always show up on the surface of a dish:
                </p>

                <ul className="space-y-2 pl-1">
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Anchovy or dried-fish broth (myeolchi yuksu), commonly
                      used as a base for{" "}
                      <Link
                        href="/food/korean-soups-and-stews-guide-first-time"
                        className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                      >
                        soups and stews
                      </Link>
                      , and even{" "}
                      <Link
                        href="/food/what-is-tteokbokki"
                        className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                      >
                        tteokbokki
                      </Link>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Beef or bone broth, especially in noodle soups
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Fish sauce or salted shrimp (jeotgal), often used as a
                      seasoning rather than a visible ingredient
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Fish cake (eomuk), which shows up in soups,
                      stir-fries, and tteokbokki
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Compound seasoning powders and stock bases, which may
                      contain beef, anchovy, shellfish, or other
                      animal-derived ingredients
                    </span>
                  </li>
                </ul>

                <p>
                  None of these are things you would necessarily see just
                  by looking at a bowl of soup or a plate of vegetables.
                  That is the core issue: vegan and vegetarian caution in
                  Korea is less about spotting meat and more about asking
                  what is underneath it.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <h2 className="text-xl font-semibold text-[var(--text)]">
                  MSG, Miwon, and Dasida Are Not the Same Thing
                </h2>

                <p>
                  These three get lumped together in a lot of traveler
                  advice, but they are not interchangeable. MSG
                  (monosodium glutamate) itself is generally not the
                  problem for vegans — it is produced by fermenting
                  plant-based carbohydrate sources like sugar cane or corn,
                  similar to how vinegar or yogurt is made, and it is not
                  derived from animal protein. Miwon is a branded seasoning
                  product built around MSG — the fermented version
                  (Fermented Miwon) is described as roughly 98.5% MSG and
                  1.5% 5’-ribonucleotide. The manufacturer describes its
                  MSG as made through sugar-cane fermentation. That
                  composition describes that specific product line, not
                  every seasoning sold under the Miwon name, so it is worth
                  checking the individual product rather than assuming the
                  whole brand is automatically vegan. Dasida and similar
                  stock powders are a different matter altogether: beef
                  Dasida and anchovy Dasida are built on actual beef or
                  anchovy extract, not just MSG. So “does this have
                  MSG?” is not really the useful question. MSG is not the
                  problem. The seasoning blend might be — and a more
                  useful question is what broth, stock, or seasoning
                  powder was actually used.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Foods That Look Vegetarian but May Not Be
                </h2>

                <p>
                  None of the dishes below are automatically off-limits —
                  but each one has a spot where animal-derived ingredients
                  commonly show up, depending on the restaurant, the
                  region, or even the specific kitchen.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    <Link
                      href="/food/what-is-kimchi"
                      className="text-[var(--accent)] transition hover:opacity-80"
                    >
                      Kimchi
                    </Link>
                  </strong>{" "}
                  often contains jeotgal (salted shrimp or fish sauce) as
                  part of the traditional fermentation process, so is
                  kimchi vegan is a genuinely fair question to ask — some
                  restaurants and brands now make vegan kimchi, but it is
                  not the default.
                </p>

                <p>
                  <strong className="text-[var(--text)]">Bibimbap</strong>{" "}
                  commonly includes a fried or raw egg and often beef. The
                  gochujang used in the sauce is also a premixed product,
                  and like any premixed sauce, its exact ingredients vary
                  by brand — so it is worth checking what is in it rather
                  than assuming.
                </p>

                <p>
                  <strong className="text-[var(--text)]">Tteokbokki</strong>
                  {" "}
                  is typically simmered in anchovy broth and often includes
                  fish cake, even in versions that look like “just rice
                  cakes in sauce.”
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    <Link
                      href="/food/what-is-gimbap-korean-seaweed-rice-roll"
                      className="text-[var(--accent)] transition hover:opacity-80"
                    >
                      Gimbap
                    </Link>
                  </strong>{" "}
                  usually includes a strip of egg and, depending on the
                  type, fish cake or imitation crab — vegetable-only
                  versions exist, but they are a specific request, not the
                  standard.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    Doenjang jjigae
                  </strong>{" "}
                  is usually built on an anchovy or seafood-based broth,
                  even though the soybean paste itself is plant-based.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    Sundubu jjigae
                  </strong>{" "}
                  frequently goes further and includes actual seafood —
                  clams or shrimp — on top of a broth that is often
                  anchovy-based to begin with.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    <Link
                      href="/food/naengmyeon-korean-cold-noodles-guide-first-time"
                      className="text-[var(--accent)] transition hover:opacity-80"
                    >
                      Naengmyeon
                    </Link>
                  </strong>{" "}
                  traditionally uses a beef-based broth, which is easy to
                  miss since the noodles and toppings can look light and
                  vegetable-forward.
                </p>

                <p>
                  <strong className="text-[var(--text)]">Japchae</strong>{" "}
                  is often made with beef and topped with egg, though the
                  noodles and sauce (soy sauce and sesame oil) are usually
                  plant-based on their own.
                </p>

                <p>
                  <strong className="text-[var(--text)]">Jeon</strong>{" "}
                  (Korean pancakes) may use egg in the batter or coating,
                  depending on the type, so it is worth asking rather than
                  assuming a vegetable-topped pancake is egg-free.
                </p>

                <p>
                  <strong className="text-[var(--text)]">
                    Instant ramen
                  </strong>{" "}
                  can be another trap, especially for anyone stocking up at
                  a convenience store. Even if the visible flakes look
                  vegetable-based, the soup powder in many popular Korean
                  ramen products contains beef- or anchovy-based flavoring.
                  That said, this varies a lot by product: some Korean
                  brands make dedicated vegan instant noodles, and some
                  manufacturers now sell a vegan version of an otherwise
                  non-vegan classic. The only reliable approach is to check
                  the full ingredient list — flakes and soup powder both
                  — on the actual packet in front of you, rather than
                  judging by the toppings.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Why Even the Staff May Not Know Every Ingredient
                </h2>

                <p>
                  This part matters more than it sounds like it should.
                  Korean restaurant kitchens often rely on premade sauces,
                  seasoning mixes, pre-portioned broth bases, and a
                  rotating set of side dishes (banchan). That means the
                  person taking your order — even the owner — may not
                  always know, with complete certainty, exactly what is in
                  every component of every dish.
                </p>

                <p>
                  This is not about restaurants being careless. It is a
                  structural reality of how a lot of Korean food service
                  works day to day. A staff member telling you “아마 안
                  들어갈 거예요” (probably not in there) is usually an
                  honest answer, not a dismissive one — it just is not
                  the same thing as a guarantee. If you need certainty, the
                  more specific and narrow your question, the better your
                  odds of getting an accurate one.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What About Temple Food?
                </h2>

                <p>
                  Korean temple food (사찰음식) is often mentioned as the
                  safest option for vegans, and there is real substance
                  behind that. According to Korea's official tourism
                  information, temple food excludes animal-based
                  ingredients with the exception of dairy, and it also
                  avoids “oshinchae” — five pungent vegetables: green
                  onions, garlic, chives, wild chives, and Chinese squill
                  — based on Buddhist principles that go back centuries.
                </p>

                <p>
                  That dairy exception is worth pausing on: it means temple
                  food is not automatically the same thing as strict vegan
                  by definition, even though it excludes meat, fish, and
                  eggs. If a strict vegan standard matters to you, it is
                  still worth asking specifically about dairy, rather than
                  assuming temple food is a guaranteed match.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Vegan, Vegetarian, or Lacto-Ovo — Know Which One You Are
                </h2>

                <p>
                  These terms get used loosely, but they mean different
                  things, and being clear on your own definition makes
                  ordering in Korean much easier:
                </p>

                <ul className="space-y-2 pl-1">
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      <strong className="text-[var(--text)]">Vegan</strong>{" "}
                      excludes all animal products — meat, fish, seafood,
                      eggs, dairy, and typically honey.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      <strong className="text-[var(--text)]">
                        Vegetarian
                      </strong>{" "}
                      excludes meat and fish but may or may not include
                      eggs or dairy, depending on the person.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      <strong className="text-[var(--text)]">
                        Lacto-ovo vegetarian
                      </strong>{" "}
                      excludes meat and fish specifically, but includes
                      both eggs and dairy.
                    </span>
                  </li>
                </ul>

                <p>
                  If you know which one you are before you sit down, you
                  can skip the label entirely and just name your
                  ingredients — which, in a Korean restaurant, tends to
                  work better anyway.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How to Actually Order in Korean
                </h2>

                <p>
                  Saying “I{"'"}m vegan” is a fine start, but naming the
                  actual ingredients you avoid is usually more useful than
                  the label itself, especially since “비건” is a
                  borrowed English word that not every restaurant uses the
                  same way. Naming ingredients also solves the “no
                  meat” gap from earlier — it forces the broth question
                  into the open. Before ordering, it also helps to know the
                  basics covered in{" "}
                  <Link
                    href="/food/how-to-order-at-a-korean-restaurant"
                    className="font-semibold text-[var(--accent)] transition hover:opacity-80"
                  >
                    how to order at a Korean restaurant
                  </Link>
                  .
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    If you just want to avoid meat (simplest, least strict)
                  </p>
                  <p className="font-semibold text-[var(--text)]">
                    고기는 빼주세요.
                  </p>
                  <p className="text-sm italic text-[var(--muted)]">
                    (gogi-neun ppae-juseyo)
                  </p>
                  <p>“Please leave out the meat.”</p>
                  <p className="text-sm">
                    Good for a quick, casual request — but this alone will
                    not flag broth, fish sauce, or seafood, so it is not
                    enough for anyone avoiding those too.
                  </p>
                </div>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    If you are vegetarian and also want to avoid fish-based
                    broth
                  </p>
                  <p className="font-semibold text-[var(--text)]">
                    고기, 생선, 해산물은 못 먹어요. 육수에도 들어가면 안
                    돼요.
                  </p>
                  <p className="text-sm italic text-[var(--muted)]">
                    (gogi, saengseon, haesanmul-eun mot meogeoyo. Yuksu-e-do
                    deureogamyeon an dwaeyo.)
                  </p>
                  <p>
                    “I can{"'"}t eat meat, fish, or seafood. It should not
                    be in the broth either.”
                  </p>
                  <p className="text-sm">
                    This covers more ground than the meat-only phrase, but
                    it still does not mention eggs or dairy.
                  </p>
                </div>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    If you are strictly vegan
                  </p>
                  <p className="font-semibold text-[var(--text)]">
                    저는 비건이에요. 고기, 생선, 해산물, 계란, 유제품을
                    먹지 않아요. 혹시 육수나 소스에도 들어가 있을까요?
                  </p>
                  <p className="text-sm italic text-[var(--muted)]">
                    (Jeo-neun bigeon-ieyo. Gogi, saengseon, haesanmul,
                    gyeran, yujepum-eul meokji anayo. Hoksi yuksu-na
                    soseu-edo deureoga isseulkkayo?)
                  </p>
                  <p>
                    “I{"'"}m vegan. I don{"'"}t eat meat, fish, seafood,
                    eggs, or dairy. Could you tell me if it{"'"}s in the
                    broth or sauce too?”
                  </p>
                  <p className="text-sm">
                    Phrasing the broth question this way — as a genuine
                    question rather than a rule — tends to get a more
                    careful, thought-through answer.
                  </p>
                </div>

                <p>
                  Asking what is in the broth is useful. Asking a
                  restaurant to replace the broth with plain water is a
                  different question. For a lot of Korean soups and stews,
                  the broth is not a garnish you can just remove — it is
                  the base the whole dish is built on, and it is often
                  already made in a big batch or from a pre-made stock. A
                  kitchen may not be able to make a one-off water version
                  on request, and even if they technically can, the dish
                  will usually taste noticeably flatter without it. Rather
                  than assuming that is an option, it works better to ask
                  carefully and accept “no” gracefully if that is the
                  answer.
                </p>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    If you would rather ask about the broth than assume it
                    can be swapped (situational, not universal)
                  </p>
                  <p className="font-semibold text-[var(--text)]">
                    혹시 이 메뉴는 고기나 해산물 육수 없이 조리할 수
                    있을까요? 어려우면 괜찮아요.
                  </p>
                  <p className="text-sm italic text-[var(--muted)]">
                    (hoksi i menyu-neun gogi-na haesanmul yuksu eopsi
                    jorihal su isseulkkayo? eoryeoumyeon gwaenchanayo.)
                  </p>
                  <p>
                    “Would it be possible to make this dish without a
                    meat or seafood broth? If that{"'"}s difficult, that
                    {"'"}s okay.”
                  </p>
                  <p className="text-sm">
                    This is a situational, optional question — not
                    something that works for every dish, and not a request
                    to phrase as a demand. It is there for dishes where it
                    might genuinely be possible, asked in a way that gives
                    the kitchen an easy way to say no.
                  </p>
                </div>

                <div className="space-y-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    If the answer comes back uncertain
                  </p>
                  <p className="font-semibold text-[var(--text)]">
                    확실하지 않으시면 편하게 말씀해 주세요.
                  </p>
                  <p className="text-sm italic text-[var(--muted)]">
                    (Hwaksilhaji anheusimyeon pyeonhage malsseumhae
                    juseyo.)
                  </p>
                  <p>
                    “If you{"'"}re not sure, please feel free to just
                    tell me.”
                  </p>
                  <p className="text-sm">
                    This one is small but useful — it tells the staff
                    that “I don{"'"}t know” is a completely acceptable
                    answer, which can prevent a rushed “no” that is not
                    actually accurate.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  A Quick Note on Allergies
                </h2>

                <p>
                  This guide is about food preferences — vegan and
                  vegetarian eating — not medical allergy safety. If you
                  have a food allergy, especially a serious one involving
                  shellfish, fish, or eggs, treat this article as general
                  orientation only, and communicate your allergy directly
                  and specifically to restaurant staff, ideally with a
                  written note in Korean, rather than relying on vegan or
                  vegetarian phrasing alone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  If Your Diet Is Strict, Start With a Vegan Restaurant
                </h2>

                <p>
                  If you need a strict vegan standard with no exceptions,
                  the most reliable option is a dedicated vegan restaurant
                  or a menu that is clearly labeled vegan. That is not
                  because general Korean restaurants are unwilling to
                  help — it is because broth, premade seasoning products,
                  sauces, and the rotating side dishes that come with most
                  meals make it genuinely hard to verify every ingredient
                  with full certainty, even with a cooperative staff. For
                  everything else, the questions and phrases above will
                  get you further than the label “vegan” alone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  The Short Version
                </h2>

                <p>
                  Nothing on this list means you cannot eat well in Korea
                  as a vegan or vegetarian — plenty of people do it
                  happily every day. It just means the more useful question
                  usually is not “is this vegan?” but “what is
                  actually in this?” Ask about the broth. Name your
                  ingredients instead of just the label. And if the answer
                  feels uncertain, that is a normal part of eating out here
                  — not a sign that no one is trying to help you.
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
