import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pagePath = "/travel/jjimjilbang-korean-bathhouse-guide-first-time";
const pageUrl = `${siteUrl}${pagePath}`;

const pageTitle = "Jjimjilbang Guide: How to Use a Korean Bathhouse";
const pageDescription =
  "A first-time guide to Korean jjimjilbangs: what to wear, how the bath area works, basic etiquette, food, rest spaces, and what to expect inside.";

const quickAnswer = [
  "What it is: a Korean bathhouse with extra shared spaces — heated rooms, rest areas, and usually somewhere to eat.",
  "Bath and changing areas: generally separated by gender, and people generally bathe without clothes there.",
  "Shared areas: generally used in the clothes the facility gives you, so the common rooms are not a no-clothes space.",
  "Before the bath: wash first, and keep your towel out of the water.",
  "Heated rooms: some can be very hot, so start with a milder room and take breaks.",
  "Prices, opening hours, overnight stays, and tattoo policies vary by facility.",
  "Local tip: when unsure, follow the posted signs or watch what people around you do.",
];

const entrySteps = [
  "Put your shoes in a small shoe locker near the entrance.",
  "Pay at the front desk and get a locker key — often on a band you wear on your wrist or ankle — along with towels and a set of jjimjil clothes.",
  "Go to the changing room for your gender and undress at your locker.",
  "Wash, then use the bath area.",
  "When you are done, dry off, change into the jjimjil clothes, and head out to the shared heated and rest areas.",
];

const etiquetteTips = [
  "Wash before you get into the shared baths. The shower stations are there for exactly this.",
  "Keep your towel and clothes out of the bath water.",
  "Keep your phone away in the bath and changing areas. It is a private space for everyone there.",
  "Keep your voice down and give people some room, especially in quieter rest spaces.",
  "Follow posted signs and staff instructions, since each facility sets its own rules.",
];

const checklist = [
  "Check opening hours, overnight rules, and prices on the facility's own information before you go.",
  "If tattoos are a concern for you, check that facility's policy in advance.",
  "Bring a small toiletry kit if you like your own products. What is provided varies.",
  "Keep your locker key on you. At some places it is also used to pay for snacks and extras.",
  "Wash before using the baths, and keep your towel out of the water.",
  "Start with milder heated rooms, take breaks, and drink water.",
  "Change into the provided clothes before going to the shared areas.",
  "When in doubt, follow the signs or ask the staff.",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Korea etiquette tips for tourists",
    description:
      "Subway manners, restaurant habits, tipping, trash, shoes, and the quiet rules that help you blend in without overthinking every step.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "Small systems that surprise first-time visitors — maps, subway rush hour, restaurant ordering, and famous-area prices without a warning-list tone.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Is Korea expensive to visit?",
    description:
      "An honest cost picture for first-time travelers — hotels, food, cafes, transport, and where famous Seoul areas quietly raise the bill.",
    href: "/travel/is-korea-expensive-to-visit-first-time",
  },
  {
    label: "Travel guide",
    title: "Where to stay in Seoul for the first time",
    description:
      "Choosing a Seoul base by subway stop, not just neighborhood name — Myeongdong, Hongdae, Gangnam, Jongno, and when convenience beats hype.",
    href: "/travel/where-to-stay-in-seoul-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
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

const linkClass =
  "font-semibold text-[var(--accent)] underline-offset-4 hover:underline";

export default function JjimjilbangGuidePage() {
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
          name: "Jjimjilbang",
        },
        {
          "@type": "Thing",
          name: "Korean bathhouse",
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
          name: "Travel",
          item: `${siteUrl}/travel`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jjimjilbang guide",
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
              href="/travel"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to Travel
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Travel guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you are thinking about trying a jjimjilbang, a few questions
              are probably running through your head. Where do I change? Is
              everyone naked the whole time? Is this just a sauna with a
              different name? Here is the short version: the area where people
              bathe without clothes is separated by gender, and the big shared
              spaces work differently — there, people wear the loose outfit the
              facility hands out. Once that clicks, a jjimjilbang feels a lot
              less mysterious.
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
                  What is a jjimjilbang?
                </h2>

                <p>
                  A jjimjilbang (찜질방) is a Korean bathhouse and sauna that
                  comes with much more than the bath. Next to the bathing area,
                  you usually find shared heated rooms, places to lie down and
                  rest, and somewhere to get snacks or a meal. Korea&apos;s
                  official tourism site, VisitKorea, describes jjimjilbangs as
                  places that go beyond saunas, with themed rooms, snack bars,
                  and other ways to relax. That mix is the point: people come to
                  wash, sweat, eat, nap, and spend time together, sometimes for
                  hours.
                </p>

                <p>
                  Some jjimjilbangs are large multi-floor complexes; others are
                  a few rooms above a neighborhood bathhouse. So treat this
                  guide as the common pattern, not a promise of what every
                  single place looks like.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Jjimjilbang vs. mogyoktang
                </h2>

                <p>
                  A mogyoktang (목욕탕) is a bathhouse in the simpler sense:
                  baths, showers, and often a sauna, all inside the
                  gender-separated bath area. You go in, wash, soak, and leave.
                  A jjimjilbang usually has that same kind of bath area and then
                  adds shared spaces on top — heated rooms, lounges, and food.
                </p>

                <p>
                  In everyday life the line is not always sharp. Some
                  neighborhood bathhouses have a small heated area of their own,
                  and setups differ from place to place. A simple way to think
                  about it: if you just want a good wash and a hot soak, a
                  mogyoktang is enough. If you want somewhere to spend a slow
                  afternoon or evening, a jjimjilbang is what you are looking
                  for.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What happens when you enter?
                </h2>

                <p>
                  The details change from place to place, but the general flow
                  often looks like this:
                </p>

                <ol className="space-y-3">
                  {entrySteps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-[var(--celadon)]">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <p>
                  Some places hand you the clothes at the front desk, some keep
                  them in the changing room, and key systems differ too. If
                  something is unclear, it is completely fine to ask the staff
                  or simply watch what the person ahead of you does.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What do you wear?
                </h2>

                <p>
                  If the naked bath area is the part making you nervous, the
                  important thing to know is that the shared rest area is
                  different. Bath and changing areas are generally separated by
                  gender, and in the bath area itself people generally bathe
                  without clothes. That is simply how it works there, and most
                  people are focused on washing and relaxing, not on anyone
                  else.
                </p>

                <p>
                  The shared spaces — the heated rooms, lounges, and eating
                  areas — are generally used in the matching T-shirt and shorts
                  that the facility provides. You change into them after the
                  bath and back into your own clothes before you leave. So the
                  no-clothes part stays inside the same-gender bath area, and
                  in the common rooms you look just like everyone else.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Bath area etiquette
                </h2>

                <p>
                  You do not need to memorize a rulebook. A few habits cover
                  most situations:
                </p>

                <ul className="space-y-3">
                  {etiquetteTips.map((tip) => (
                    <li key={tip} className="flex gap-3">
                      <span className="text-[var(--celadon)]">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  For the everyday manners that help in other places too, our{" "}
                  <Link
                    href="/travel/korea-etiquette-tips-for-tourists"
                    className={linkClass}
                  >
                    Korea etiquette guide
                  </Link>{" "}
                  is a good companion read.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What are the heated rooms like?
                </h2>

                <p>
                  The shared side is where the &quot;jjimjil&quot; in the name
                  comes in — 찜질 roughly means warming up and sweating in a
                  heated space. Many jjimjilbangs have several heated or themed
                  rooms, and they are not all the same temperature. VisitKorea
                  suggests starting in a milder room before moving to hotter
                  ones.
                </p>

                <p>
                  Some heated rooms can be very hot, so start with a milder
                  room, take breaks, and drink water. You do not have to try
                  every room either. Lying on a warm floor in one of the lounges
                  is a perfectly good way to spend the afternoon.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Food and rest areas
                </h2>

                <p>
                  Food is a big part of the fun. Many jjimjilbangs have a snack
                  bar or small restaurant, and two snacks come up again and
                  again: baked eggs, often called sauna eggs, and sikhye (식혜),
                  a sweet, chilled rice drink. VisitKorea calls that pairing a
                  classic. Depending on the place, you may also find simple
                  meals, cup noodles, or ice cream — but not every facility
                  offers the same menu.
                </p>

                <p>
                  Rest areas vary as well. Some have big open lounges with
                  heated floors, and some add massage chairs, TV corners, or
                  quieter rooms for lying down. If one of these matters to you,
                  check what that particular place offers before you go.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Can you sleep at a jjimjilbang?
                </h2>

                <p>
                  Some jjimjilbangs have rest or sleeping areas, but overnight
                  access and operating hours vary by facility. Not every place
                  is open through the night, and rules for longer stays differ.
                  Sleeping in a shared lounge also means lights, footsteps, and
                  other people around you.
                </p>

                <p>
                  It can work for a flexible night if you have checked the
                  place in advance, but it is not a straight swap for a hotel or
                  guesthouse. If you are still choosing a base for your trip,
                  our{" "}
                  <Link
                    href="/travel/where-to-stay-in-seoul-first-time"
                    className={linkClass}
                  >
                    where to stay in Seoul guide
                  </Link>{" "}
                  is a better starting point.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How much does it cost?
                </h2>

                <p>
                  Prices and opening hours vary by facility. A large complex and
                  a small neighborhood place can be priced quite differently,
                  and food, drinks, and extra services are usually paid for
                  separately. Check the facility&apos;s own information before
                  you go, and keep a little extra for snacks. For a wider look
                  at trip costs, see{" "}
                  <Link
                    href="/travel/is-korea-expensive-to-visit-first-time"
                    className={linkClass}
                  >
                    is Korea expensive to visit?
                  </Link>
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What about tattoos?
                </h2>

                <p>
                  Tattoo policies can vary by facility, so check before
                  visiting. If it matters to you, look at that facility&apos;s
                  own information or ask the staff before you pay, rather than
                  assuming one rule applies everywhere.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  First-time visitor checklist
                </h2>

                <ul className="space-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[var(--celadon)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  New to Korea in general? Our{" "}
                  <Link
                    href="/travel/things-to-know-before-visiting-korea-first-time"
                    className={linkClass}
                  >
                    things to know before visiting Korea
                  </Link>{" "}
                  guide covers the small systems that surprise first-time
                  visitors.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  A local note from HAEMIL
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] md:text-base">
                  The first few minutes are usually the most confusing part —
                  finding your locker and figuring out where to change. After
                  that, a jjimjilbang is mostly a slow, quiet place to warm up
                  and rest. Nobody expects a first-timer to know every rule, so
                  go slowly, follow the signs, and copy what the people around
                  you are doing.
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
                href="/travel"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all Travel →
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
