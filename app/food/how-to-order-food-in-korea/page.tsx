import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/food/how-to-order-food-in-korea`;

const pageTitle =
  "How to Order Food in Korea: A Friendly Restaurant Guide for First-Time Visitors";
const pageDescription =
  "A practical HAEMIL guide to ordering food in Korea, covering kiosks, table bells, self-service water, side dishes, paying, solo dining, spicy food, and restaurant tips for first-time visitors.";

const quickAnswer = [
  "Most common ways to order: staff, kiosk, table tablet, or counter",
  'Useful Korean phrase: "이거 하나 주세요" means "One of this, please"',
  "Water: often self-service",
  "Side dishes: usually come with the meal, but refills depend on the restaurant",
  "Table bell: press it when you need staff, if there is one",
  "Payment: often at the counter after eating",
  "Solo dining: easy for noodles, gimbap, soups, bunsik, convenience stores; BBQ can be harder",
  "Main caution: tourist areas are easier but can be pricier and crowded",
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
    title: "What to eat in Seoul for the first time",
    description:
      "A practical Seoul food guide for first-time visitors, covering markets, street food, cafes, Han River ramyeon, late-night meals, and more.",
    href: "/food/what-to-eat-in-seoul-first-time",
  },
  {
    label: "Food guide",
    title: "Korean BBQ guide for first-time visitors",
    description:
      "A warm beginner-friendly guide to what to order first, how to eat with banchan and ssam, and why Korean barbecue feels social.",
    href: "/food/korean-bbq-guide-first-time",
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
    title: "What is bunsik?",
    description:
      "A local-friendly guide to Korean snack-shop food culture, where tteokbokki, gimbap, twigim, sundae, and eomuk all belong on the same table.",
    href: "/food/what-is-bunsik-korean-snack-food",
  },
  {
    label: "Food guide",
    title: "What is gimbap?",
    description:
      "A local-friendly guide to Korea's seaweed rice roll, from everyday bunsik shops and convenience stores to tuna gimbap and picnic memories.",
    href: "/food/what-is-gimbap-korean-seaweed-rice-roll",
  },
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "A practical local-style guide to choosing your Seoul base, from Myeongdong and Hongdae to Gangnam, Insadong, Seoul Station, and Jamsil.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/food/how-to-order-food-in-korea",
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

export default function HowToOrderFoodInKoreaPage() {
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
          name: "Korean food",
        },
        {
          "@type": "Thing",
          name: "Korean restaurant etiquette",
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
          name: "How to order food in Korea",
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
              Ordering food in Korea can feel a little scary on your first trip.
              Not because it is impossible — but because the system may be
              different from what you are used to. Once you know these patterns,
              eating in Korea becomes much easier.
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
                  Some restaurants have staff who take your order.
                </p>

                <p>Some use kiosks.</p>

                <p>Some use tablets at the table.</p>

                <p>Some ask you to order and pay first.</p>

                <p>Some let you eat first and pay at the counter later.</p>

                <p>Some have self-service water.</p>

                <p>Some have a table bell.</p>

                <p>Some move very quickly during busy hours.</p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  First thing to know
                </p>

                <p>
                  There is not one single restaurant system in Korea.
                </p>

                <p>
                  A small gimbap shop, a Korean BBQ restaurant, a cafe, a food
                  court, a bunsik place, and a traditional soup restaurant may
                  all work differently.
                </p>

                <p>So do not worry if one place feels confusing.</p>

                <p>Look around for small clues.</p>

                <p>Is there a kiosk near the entrance?</p>

                <p>Is there a menu on the wall?</p>

                <p>Is there a tablet on the table?</p>

                <p>Are people paying before they sit down?</p>

                <p>Is there a table bell?</p>

                <p>Is water near a self-service corner?</p>

                <p>These clues usually tell you what to do.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Ordering from staff
                </h2>

                <p>
                  In many simple restaurants, you sit down, look at the menu,
                  and order from staff.
                </p>

                <p>
                  If you do not speak Korean, pointing is completely normal.
                </p>

                <p>You can point to the menu and say:</p>

                <p className="rounded-[1rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)]">
                  &ldquo;이거 하나 주세요.&rdquo;
                </p>

                <p>It means &ldquo;One of this, please.&rdquo;</p>

                <p>You do not need perfect pronunciation.</p>

                <p>
                  Most staff will understand the situation if you point clearly
                  and stay polite.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Tourist areas
                </h2>

                <p>
                  In tourist-heavy areas like Myeongdong, Hongdae, Insadong,
                  Gangnam, or near major attractions, restaurants may be more
                  used to foreign visitors. Some may have English menus or
                  picture menus.
                </p>

                <p>That can make ordering easier.</p>

                <p>
                  The trade-off is that these areas can be more expensive or
                  crowded because they are convenient and visitor-friendly.
                </p>

                <p>That does not mean you should avoid them.</p>

                <p>For a first trip, easy ordering can be worth it.</p>

                <p>
                  But if you want better value, try walking one or two streets
                  away from the busiest road.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Kiosks
                </h2>

                <p>
                  Kiosks are common in many casual restaurants, cafes, fast-food
                  places, and food courts.
                </p>

                <p>
                  A kiosk is a machine where you choose your food and pay before
                  eating.
                </p>

                <p>Some kiosks have English.</p>

                <p>Some do not.</p>

                <p>Some accept foreign cards smoothly.</p>

                <p>Some may be confusing.</p>

                <p>
                  If the kiosk feels difficult, do not panic. Look for a
                  language button first. It may say English, EN, or show a globe
                  icon.
                </p>

                <p>
                  If it still does not work for you, choose another place or ask
                  staff politely.
                </p>

                <p>
                  Kiosks are convenient when they work, but they can be
                  stressful when the line behind you is moving fast.
                </p>

                <p>This is normal.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Table tablets and counter ordering
                </h2>

                <p>Table tablets are also common in some restaurants.</p>

                <p>
                  You sit down, choose food on the tablet, and send the order
                  from the table.
                </p>

                <p>
                  This can be easier than speaking, but the menu may still be
                  mostly Korean.
                </p>

                <p>Photos help a lot.</p>

                <p>
                  If you are unsure, choose simple dishes you recognize or use a
                  translation app carefully.
                </p>

                <p>At some restaurants, you order at the counter first.</p>

                <p>
                  This is common in cafes, food courts, some noodle places, and
                  casual restaurants.
                </p>

                <p>
                  You pay, get a receipt or number, and wait for your food.
                </p>

                <p>
                  When your number is called or shown on a screen, you pick it
                  up.
                </p>

                <p>After eating, you may need to return the tray yourself.</p>

                <p>This is why looking around helps.</p>

                <p>
                  If other people are carrying trays back, you probably should
                  too.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Water and utensils
                </h2>

                <p>Water is often self-service.</p>

                <p>
                  Many Korean restaurants have a water machine, cups, or a
                  water bottle area.
                </p>

                <p>Sometimes water is already on the table.</p>

                <p>Sometimes staff bring it.</p>

                <p>Sometimes you get it yourself.</p>

                <p>
                  If you do not see water, look near the wall, counter, or
                  self-service corner.
                </p>

                <p>You may also see utensils there.</p>

                <p>
                  Spoons, chopsticks, napkins, scissors, tongs, or extra side
                  dishes can sometimes be in a drawer under the table or near a
                  self-service station.
                </p>

                <p>This can surprise first-time visitors.</p>

                <p>
                  In Korea, it is very normal to open the table drawer for
                  spoons and chopsticks.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Side dishes (banchan)
                </h2>

                <p>Side dishes are called banchan.</p>

                <p>Many Korean meals come with small side dishes.</p>

                <p>
                  They may include kimchi, pickled vegetables, fish cake, salad,
                  or other small plates.
                </p>

                <p>
                  In some restaurants, side dishes are refilled for free.
                </p>

                <p>In others, only some are refillable.</p>

                <p>
                  In self-service places, you may get more from a side-dish
                  corner.
                </p>

                <p>
                  Do not assume every side dish can be refilled endlessly.
                </p>

                <p>
                  But if the place clearly has a self-service banchan area, it
                  is usually okay to take a reasonable amount.
                </p>

                <p>Take a little first.</p>

                <p>You can go back if you need more.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Table bell and payment
                </h2>

                <p>Table bells are common.</p>

                <p>
                  If there is a small button on the table, you can press it
                  when you need staff.
                </p>

                <p>This is not rude.</p>

                <p>It is part of the restaurant system.</p>

                <p>
                  Use it when you are ready to order, need more water, want
                  extra side dishes, or need help.
                </p>

                <p>
                  If there is no bell, raise your hand slightly or make eye
                  contact with staff.
                </p>

                <p>
                  In a busy restaurant, staff may not check on your table often
                  unless you call them.
                </p>

                <p>That is normal in Korea.</p>

                <p>Payment often happens at the counter after eating.</p>

                <p>
                  In many Korean restaurants, you finish your meal, stand up,
                  and pay near the entrance or cashier.
                </p>

                <p>The staff may already know your table number.</p>

                <p>
                  In other places, especially kiosks or cafes, you pay first.
                </p>

                <p>Both systems are normal.</p>

                <p>If you are unsure, watch what other customers do.</p>

                <p>Tipping is not a normal part of Korean restaurant culture.</p>

                <p>You do not need to add a tip after a meal.</p>

                <p>Just pay the amount shown.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Spicy food and solo dining
                </h2>

                <p>For spicy food, be careful at first.</p>

                <p>
                  Some Korean food is mild, but spicy food can be stronger than
                  expected.
                </p>

                <p>
                  Tteokbokki, spicy stews, spicy noodles, and red-sauce dishes
                  can vary a lot by restaurant.
                </p>

                <p>
                  If you are sensitive to spice, start with foods like gimbap,
                  kalguksu, seolleongtang, gukbap, dumplings, grilled meat,
                  porridge, or non-spicy noodles.
                </p>

                <p>
                  You can still enjoy Korean food without eating spicy dishes
                  every day.
                </p>

                <p>
                  Solo dining is possible, but some foods are easier than
                  others.
                </p>

                <p>
                  Gimbap, noodles, soups, stews, convenience store meals,
                  bunsik, food courts, cafes, and simple rice dishes are
                  usually solo-friendly.
                </p>

                <p>
                  Korean BBQ can be harder alone because some restaurants expect
                  at least two servings of meat or are designed for groups.
                </p>

                <p>That does not mean solo BBQ is impossible.</p>

                <p>
                  It just may not be the easiest first restaurant experience.
                </p>

                <p>If you are eating alone on your first day, choose something simple.</p>

                <p>
                  A gimbap place, noodle shop, soup restaurant, food court, or
                  convenience store meal can feel much less stressful.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Busy times
                </p>

                <p>Busy times matter.</p>

                <p>
                  During lunch, dinner, weekends, or after work hours,
                  restaurants can move quickly.
                </p>

                <p>Staff may not have time to explain everything slowly.</p>

                <p>Popular restaurants can have waiting lines.</p>

                <p>Tourist areas can be crowded.</p>

                <p>
                  If you feel nervous, eat a little earlier or later than the
                  busiest meal time.
                </p>

                <p>
                  A quiet restaurant is much easier for your first ordering
                  experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Save a few food names
                </h2>

                <p>
                  One useful habit is to save a few food names before you go.
                </p>

                <p>You do not need to memorize the whole menu.</p>

                <p>Just know a few beginner-friendly options:</p>

                <p>
                  gimbap, tteokbokki, kal-guksu, gukbap, bibimbap, fried
                  chicken, Korean BBQ, soft tofu stew, or convenience store cup
                  ramyeon.
                </p>

                <p>
                  When you recognize even one word on a menu, the restaurant
                  feels less intimidating.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, the best way to order food in Korea is to
                  stay flexible.
                </p>

                <p>If there is a kiosk, try the language button.</p>

                <p>If there is a table bell, use it.</p>

                <p>
                  If water is not brought to you, check for self-service.
                </p>

                <p>If there are side dishes, try a little first.</p>

                <p>If the restaurant feels too busy, choose an easier place.</p>

                <p>
                  If Korean BBQ feels complicated alone, save it for another
                  meal.
                </p>

                <p>You do not have to do everything perfectly.</p>

                <p>
                  Most first-time visitors learn by watching the room.
                </p>

                <p>That is very normal.</p>

                <p>
                  Look around, point clearly, stay polite, and choose food that
                  matches your energy.
                </p>

                <p>
                  Korean restaurants become much easier after the first few
                  meals.
                </p>

                <p>
                  And once ordering feels less stressful, the food becomes much
                  more fun.
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
