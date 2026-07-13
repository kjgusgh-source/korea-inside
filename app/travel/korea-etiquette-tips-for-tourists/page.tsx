import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/korea-etiquette-tips-for-tourists`;

const pageTitle =
  "Korea Etiquette Tips for Tourists: What to Know Before Your First Trip";
const pageDescription =
  "A practical HAEMIL guide to Korea etiquette for first-time visitors, including subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.";

const quickAnswer = [
  "Subway: keep bags close, avoid loud calls, and be careful during rush hour.",
  "Restaurants: systems vary; kiosks, table bells, self-service water, and counter payment are common.",
  "Tipping: not normally expected in everyday restaurants.",
  "Trash: public trash cans can be less common than visitors expect.",
  "Shoes: some places may ask you to remove shoes.",
  "Noise: public spaces can be busy, but loud phone calls may feel uncomfortable.",
  "Photos: be careful in residential areas, temples, palaces, and around strangers.",
  "Local tip: watch what people around you do, then follow gently.",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Things to know before visiting Korea for the first time",
    description:
      "A practical first-time Korea travel guide with local tips on Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and common travel mistakes.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "How to get around Seoul for first-time visitors",
    description:
      "A practical Seoul transport guide for first-time visitors, with subway, taxi, rush hour, airport routes, walking, maps, and local trade-offs.",
    href: "/travel/how-to-get-around-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "How to use the Korean subway",
    description:
      "A local-friendly first guide to Korean subway rides, T-money cards, transfers, station signs, apps, etiquette, and simple mistakes to avoid.",
    href: "/travel/how-to-use-korean-subway",
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
    title: "What to eat in Korea for the first time",
    description:
      "A friendly food guide for first-time Korea visitors, with Korean BBQ, gimbap, tteokbokki, soups, fried chicken, convenience stores, cafes, and realistic local tips.",
    href: "/food/what-to-eat-in-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Seoul neighborhood guide for first-time visitors",
    description:
      "A practical guide to Seoul neighborhoods, from Myeongdong and Hongdae to Gangnam, Insadong, Euljiro, Seongsu, Jamsil, and Itaewon.",
    href: "/travel/seoul-neighborhood-guide-first-time",
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
    canonical: "/travel/korea-etiquette-tips-for-tourists",
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

export default function KoreaEtiquetteTipsForTouristsPage() {
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
          name: "Korea etiquette",
        },
        {
          "@type": "Thing",
          name: "Korea travel",
        },
        {
          "@type": "Thing",
          name: "First-time visitors",
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
          name: "Korea etiquette tips",
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
              Korea is not a difficult country to visit. But a few small
              etiquette habits can make your first trip feel much smoother. You
              do not need to know every rule — most people understand that
              visitors are learning. Think of this as a local friend&apos;s quiet
              guide, not a strict rulebook.
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
                  The goal is not to act perfectly Korean — it is to avoid small
                  moments that feel awkward. Watch what people around you do, then
                  follow gently.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Subway manners
                </h2>

                <p>
                  On the subway, keep your bag close — hold a backpack in front
                  during crowded weekday rush hour instead of letting it bump
                  people behind you. Step aside near doors and let others pass
                  first if you are unsure where to stand. Phone calls are usually
                  kept short and quiet; use earphones for videos and keep your
                  voice lower than in outdoor tourist areas. If you are
                  sightseeing, waiting out rush hour with a cafe break often
                  makes the rest of the day easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Taxis and transport
                </h2>

                <p>
                  Taxis help with luggage, rain, or late nights, but heavy
                  traffic can make them slow and stressful during rush hour. For
                  most city movement, the subway stays more predictable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Restaurant habits
                </h2>

                <p>
                  Korean restaurants work in different ways — staff may take
                  your order, or you may use a kiosk, tablet, or pay-first
                  system, then eat and pay at the counter afterward. Look around
                  before you panic: check for a language button on kiosks, a table
                  bell for staff, or a self-service water corner. In many casual
                  spots, water, spoons, chopsticks, and napkins are self-serve
                  from a drawer under the table or a corner station — copying
                  other customers is fine.
                </p>

                <p>
                  Side dishes (banchan) come with many meals; some places refill,
                  some have a self-service area, some do not refill every item.
                  Take a reasonable amount and avoid wasting food. Table bells
                  are normal, not rude — staff may not check on your table
                  repeatedly like in some countries. Tipping is not expected in
                  everyday restaurants and cafes; you usually pay the amount
                  shown, often at the counter after eating.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Trash, shoes, and photos
                </h2>

                <p>
                  Public trash cans can be harder to find than visitors expect
                  — keep a small bag for wrappers and tissues until you find a
                  proper bin. Convenience stores sometimes have bins, but not
                  every store wants outside trash.
                </p>

                <p>
                  Most modern cafes, shops, and restaurants do not require shoe
                  removal, but traditional restaurants, guesthouses, temple
                  spaces, and hanok stays may ask you to take shoes off — if you
                  see a shoe shelf or others removing shoes, follow them.
                </p>

                <p>
                  Korea is photo-friendly in many travel areas, but residential
                  streets like parts of Bukchon are where people actually live —
                  keep your voice low. In temples, palaces, museums, and small
                  shops, avoid close photos of strangers without permission, and
                  slow down if a space feels quiet or private.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Queues and public noise
                </h2>

                <p>
                  If people are lining up at a cafe, restaurant, bus, or food
                  stall, join the line — in crowded spots the queue may not look
                  perfect, but follow the flow rather than pushing forward. Korea
                  is not silent: markets and nightlife areas can be lively, but
                  in subways, buses, quiet cafes, museums, temples, and
                  residential streets, loud talking stands out. Match your volume
                  to the space.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes, cultural sites, and busy streets
                </h2>

                <p>
                  In popular cafes, seats can be limited — enjoy the atmosphere
                  but notice the room, and avoid turning a small space into a
                  personal photo shoot. At palaces and cultural sites, move
                  gently: no loud behavior, blocking paths for photos, or
                  treating quiet spaces like theme park sets. Hanbok rentals are
                  fine; just respect other visitors and staff. In crowded markets
                  and shopping streets like Myeongdong or Gwangjang, step to the
                  side before stopping to check your phone — small habit, big
                  difference in narrow paths.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Watch first
                </p>

                <p>
                  Korea can feel fast-paced — staff move quickly, restaurants
                  turn tables, subway crowds flow with purpose. That does not
                  mean people are angry; the rhythm is just fast. If you feel
                  overwhelmed, step aside, check your map, and move when ready.
                  Before ordering, watch how people order; before throwing
                  something away, see where others put trash; before photos,
                  read the mood. Ten seconds of watching goes a long way.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Korea etiquette is mostly small awareness — bag close on the
                  subway, quiet voice in shared spaces, follow restaurant systems
                  calmly, take banchan without wasting, watch for shoe rules, be
                  careful with photos, respect lines, and give yourself patience
                  during rush hour. When unsure, pause and look around. You do
                  not have to be perfect; being considerate is enough for most
                  situations.
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
                  Related travel guides
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
