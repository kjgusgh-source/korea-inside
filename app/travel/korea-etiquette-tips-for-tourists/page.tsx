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
                  The goal is not to act perfectly Korean.
                </p>

                <p>
                  The goal is to avoid small moments that feel awkward or
                  uncomfortable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Subway manners
                </h2>

                <p>On the subway, keep your bag close to your body.</p>

                <p>
                  Seoul subway trains can become crowded, especially during
                  weekday rush hour. If you have a backpack, it is better to
                  hold it in front of you or keep it low instead of letting it
                  bump into people behind you.
                </p>

                <p>Try not to block the doors.</p>

                <p>People often move quickly when getting on and off.</p>

                <p>
                  If you are not sure where to stand, step to the side and let
                  people pass first.
                </p>

                <p>
                  Phone calls on the subway are usually kept short and quiet.
                </p>

                <p>
                  You may see people watching videos or using phones, but loud
                  calls or speaker sound can feel uncomfortable in a crowded
                  train.
                </p>

                <p>Use earphones if you watch something.</p>

                <p>
                  Keep your voice lower than you might in an outdoor tourist
                  area.
                </p>

                <p>Rush hour needs extra patience.</p>

                <p>
                  During morning and evening commute times, subway cars,
                  platforms, and station transfers can be very crowded. People
                  are trying to get to work, school, appointments, or home.
                </p>

                <p>
                  If you are sightseeing, it is often better to wait a little
                  instead of forcing yourself into the busiest movement time.
                </p>

                <p>
                  A cafe break can sometimes make the whole day easier.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Taxis and transport
                </h2>

                <p>
                  Taxis are useful, but they are not always the polite or
                  practical answer.
                </p>

                <p>
                  If traffic is heavy, a taxi can become slow and stressful.
                  During rush hour or rain, roads can move badly and drivers may
                  be under pressure.
                </p>

                <p>
                  Use taxis when they reduce stress, such as late at night,
                  with luggage, bad weather, or a difficult route.
                </p>

                <p>
                  For most city movement, the subway is usually more
                  predictable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Restaurant habits
                </h2>

                <p>Restaurants in Korea can work in different ways.</p>

                <p>Some restaurants have staff who take your order.</p>

                <p>Some use kiosks.</p>

                <p>Some use tablets at the table.</p>

                <p>Some ask you to pay first.</p>

                <p>
                  Some let you eat first and pay at the counter after the meal.
                </p>

                <p>This can feel confusing at first, but it is normal.</p>

                <p>Look around before you panic.</p>

                <p>
                  If there is a kiosk, check for a language button.
                </p>

                <p>
                  If there is a table bell, you can press it when you need
                  staff.
                </p>

                <p>
                  If water is not brought to you, check for a self-service
                  area.
                </p>

                <p>In many casual restaurants, water is self-service.</p>

                <p>
                  Spoons, chopsticks, napkins, or scissors may be in a drawer
                  under the table or near a self-service corner.
                </p>

                <p>This surprises many first-time visitors.</p>

                <p>
                  It is okay to look around and copy what other customers are
                  doing.
                </p>

                <p>Side dishes are part of many Korean meals.</p>

                <p>They are called banchan.</p>

                <p>Some restaurants refill side dishes.</p>

                <p>Some have a self-service banchan area.</p>

                <p>Some may not refill every item.</p>

                <p>Take a little first and avoid wasting food.</p>

                <p>
                  If there is a clear self-service section, it is usually okay
                  to take a reasonable amount.
                </p>

                <p>Table bells are common and not rude.</p>

                <p>
                  If there is a button on the table, press it when you are
                  ready to order or need help. Staff may not check on your table
                  repeatedly like in some countries.
                </p>

                <p>That does not mean they are ignoring you.</p>

                <p>It is just a different system.</p>

                <p>
                  Tipping is not normally expected in everyday Korean
                  restaurants and cafes.
                </p>

                <p>You usually pay the amount shown.</p>

                <p>
                  In many restaurants, payment happens at the counter after
                  eating. In cafes, kiosks, food courts, or casual places, you
                  may pay before eating.
                </p>

                <p>If you are unsure, watch what other customers do.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Trash, shoes, and photos
                </h2>

                <p>
                  Public trash cans can be harder to find than visitors expect.
                </p>

                <p>
                  Do not assume there will be a trash can on every street
                  corner.
                </p>

                <p>
                  It is useful to keep a small empty bag for wrappers,
                  receipts, or tissues until you find a proper place to throw
                  them away.
                </p>

                <p>
                  Convenience stores may have bins, but not every store wants
                  outside trash.
                </p>

                <p>Be considerate.</p>

                <p>Shoes can matter in some places.</p>

                <p>
                  Most modern cafes, shops, hotels, and restaurants do not
                  require you to remove shoes.
                </p>

                <p>
                  But some traditional restaurants, guesthouses, temple spaces,
                  hanok stays, or private indoor areas may ask you to take them
                  off.
                </p>

                <p>
                  If you see a shoe shelf or other people removing shoes,
                  follow them.
                </p>

                <p>
                  It is a simple habit, but it shows respect for the space.
                </p>

                <p>Be careful with photos.</p>

                <p>
                  Korea is very photo-friendly in many travel areas, but not
                  every place is a photo set.
                </p>

                <p>
                  In residential neighborhoods like parts of Bukchon, keep your
                  voice low and be respectful. People actually live there.
                </p>

                <p>
                  In temples, palaces, museums, small shops, and restaurants,
                  avoid taking close photos of strangers without permission.
                </p>

                <p>
                  If a place feels quiet or private, slow down and look for
                  signs.
                </p>

                <p>
                  This is especially important in hanok streets, cafes, and
                  small local alleys.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Queues and public noise
                </h2>

                <p>Queues matter.</p>

                <p>If people are lining up, join the line.</p>

                <p>
                  This applies to cafes, restaurants, buses, subway platforms,
                  pop-up shops, food stalls, and photo spots.
                </p>

                <p>
                  In very crowded places, the line may not always look perfect,
                  but try to follow the flow.
                </p>

                <p>Do not push forward just because you are unsure.</p>

                <p>Ask gently or wait and watch.</p>

                <p>Public noise is about context.</p>

                <p>Korea is not silent.</p>

                <p>
                  Markets, nightlife areas, festivals, shopping streets, and
                  restaurants can be lively.
                </p>

                <p>
                  But in subways, buses, quiet cafes, museums, temples,
                  residential streets, and elevators, loud talking can stand
                  out.
                </p>

                <p>
                  The local habit is often to adjust your volume to the space.
                </p>

                <p>Loud is fine in the right place.</p>

                <p>Quiet is better in shared transport or calm areas.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Cafes, cultural sites, and busy streets
                </h2>

                <p>
                  At cafes, remember that some places are about atmosphere.
                </p>

                <p>
                  Korea has many beautiful cafes, and people often stay, talk,
                  take photos, work, or rest. But in popular cafes, seats can
                  be limited and lines can form.
                </p>

                <p>
                  Avoid using a table for too long if the cafe is small and
                  crowded.
                </p>

                <p>
                  If you take photos, be careful not to block people or turn
                  the whole space into a personal shoot.
                </p>

                <p>Enjoy the cafe, but notice the room.</p>

                <p>At palaces and cultural sites, move gently.</p>

                <p>You do not need to be overly formal.</p>

                <p>
                  Just avoid loud behavior, climbing where you should not,
                  blocking paths for photos, or treating quiet cultural spaces
                  like theme park sets.
                </p>

                <p>If you rent hanbok, enjoy it respectfully.</p>

                <p>
                  Take photos, but still respect other visitors, staff, and the
                  space.
                </p>

                <p>In markets and busy shopping streets, be aware of movement.</p>

                <p>
                  Do not stop suddenly in the middle of a narrow path to check
                  your phone.
                </p>

                <p>Step to the side first.</p>

                <p>
                  This sounds small, but it helps a lot in crowded places like
                  Myeongdong, Hongdae, Namdaemun, Gwangjang Market, or popular
                  cafe streets.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Watch first
                </p>

                <p>Korea can feel fast-paced.</p>

                <p>Staff may move quickly.</p>

                <p>Restaurants may turn tables quickly.</p>

                <p>Subway crowds may move with purpose.</p>

                <p>Delivery riders may pass through busy streets.</p>

                <p>This does not mean people are angry.</p>

                <p>It often just means the rhythm is fast.</p>

                <p>
                  If you feel overwhelmed, step aside, check your map, and move
                  again when you are ready.
                </p>

                <p>One of the best etiquette tips is to watch first.</p>

                <p>Before ordering, watch how people order.</p>

                <p>Before throwing something away, check where others put trash.</p>

                <p>Before entering a room, check shoes.</p>

                <p>Before taking photos, check the mood.</p>

                <p>Before pressing a bell, see if other tables use it.</p>

                <p>You can learn a lot in ten seconds.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, Korea etiquette is not about memorizing a
                  long list.
                </p>

                <p>It is about small awareness.</p>

                <p>Keep your bag close on the subway.</p>

                <p>Use a quiet voice in shared spaces.</p>

                <p>Follow restaurant systems calmly.</p>

                <p>Do not waste side dishes.</p>

                <p>Watch for shoe rules.</p>

                <p>Be careful with photos.</p>

                <p>Respect lines.</p>

                <p>Give yourself extra patience during rush hour.</p>

                <p>And when you are unsure, pause and look around.</p>

                <p>That is enough for most situations.</p>

                <p>You do not have to be perfect.</p>

                <p>You just have to be considerate.</p>

                <p>
                  That makes travel easier for you and for the people around
                  you.
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
