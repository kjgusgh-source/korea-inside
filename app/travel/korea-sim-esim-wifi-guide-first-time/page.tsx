import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/korea-sim-esim-wifi-guide-first-time`;

const pageTitle =
  "Korea SIM, eSIM, and Wi-Fi Guide for First-Time Visitors: Data, Cafe Wi-Fi, and Battery Tips";
const pageDescription =
  "A practical HAEMIL guide to internet in Korea for first-time visitors, comparing eSIM, SIM cards, roaming, pocket Wi-Fi, cafe Wi-Fi, public Wi-Fi, phone numbers, and power bank tips.";

const quickAnswer = [
  "Local reality: Korea has lots of Wi-Fi, but you still want basic data for maps and movement",
  "Cafe Wi-Fi: check the wall, counter, small sign, or receipt for the name and password",
  "Easiest for many visitors: eSIM, if your phone supports it",
  "Traditional option: physical SIM for reliable data and possibly a Korean number",
  "Groups: pocket Wi-Fi can work, but it is one more device to charge and carry",
  "Emotionally easiest: roaming, depending on your home carrier plan and limits",
  "Battery: power bank rental stations exist in busy areas, but your own power bank is safer",
  "Arrival tip: set up data before leaving the airport and save your hotel address offline",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Best Korea travel apps for first-time visitors",
    description:
      "A practical guide to Korean apps travelers may actually use, from Naver Map, KakaoMap, Papago, Kakao T, and subway apps to Baemin, CatchTable, Yanolja, and Yeogi Eottae.",
    href: "/travel/korea-travel-apps-first-time",
  },
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
    title: "Naver Map and KakaoMap travel guide",
    description:
      "A local-friendly guide to Korean map apps, why Google Maps can feel limited in Korea, and how to find subway exits, buses, restaurants, and saved places.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
  },
  {
    label: "Travel guide",
    title: "How to get from Incheon Airport to Seoul",
    description:
      "A local-friendly first guide to AREX trains, airport buses, taxis, Kakao T, late-night arrivals, luggage, and choosing the easiest route into Seoul.",
    href: "/travel/how-to-get-from-incheon-airport-to-seoul",
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
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/korea-sim-esim-wifi-guide-first-time",
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

export default function KoreaSimEsimWifiGuideFirstTimePage() {
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
          name: "Korea travel internet",
        },
        {
          "@type": "Thing",
          name: "Korea eSIM",
        },
        {
          "@type": "Thing",
          name: "Korea Wi-Fi",
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
          name: "Korea SIM and eSIM guide",
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
              If you are visiting Korea for the first time, internet access is
              important. But here is the more honest local answer: Korea is not
              a country where Wi-Fi is hard to find. Many travelers are surprised
              by how often Wi-Fi appears — in hotels, cafes, malls, stations,
              and restaurants. Still, free Wi-Fi alone is not the same as a
              full travel internet plan.
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
                  Korea has a lot of Wi-Fi
                </h2>

                <p>
                  In many parts of Seoul and other big cities, you will see
                  Wi-Fi in hotels, guesthouses, cafes, malls, stations,
                  restaurants, and public spaces.
                </p>

                <p>
                  Korea is a very connected country, and many travelers are
                  surprised by how often Wi-Fi appears.
                </p>

                <p>
                  In cafes, the Wi-Fi name and password are often written
                  somewhere inside.
                </p>

                <p>Sometimes it is on the wall.</p>

                <p>Sometimes it is near the counter.</p>

                <p>Sometimes it is on a small sign.</p>

                <p>Sometimes it is printed on the receipt.</p>

                <p>
                  So if you sit down in a cafe and need Wi-Fi, check the wall,
                  receipt, or counter before asking.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Why you still want your own data
                </h2>

                <p>
                  That said, free Wi-Fi is not the same as a full travel
                  internet plan.
                </p>

                <p>You may need data while walking between places.</p>

                <p>You may need maps before you enter a cafe.</p>

                <p>You may need translation at a kiosk.</p>

                <p>You may need to find the right subway exit.</p>

                <p>You may need to contact your stay after landing.</p>

                <p>You may need to call a taxi in the rain.</p>

                <p>
                  That is where having your own data makes the trip much
                  smoother.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  eSIM
                </h2>

                <p>
                  For many visitors, an eSIM is the easiest option.
                </p>

                <p>
                  If your phone supports eSIM, it can be simple because you do
                  not need to change a physical SIM card. You can prepare it
                  before the trip and turn it on when you arrive, depending on
                  the provider and your phone.
                </p>

                <p>The trade-off is compatibility.</p>

                <p>Not every phone supports eSIM.</p>

                <p>Some phones are carrier-locked.</p>

                <p>
                  Some setups are confusing if you have never used eSIM before.
                </p>

                <p>So check your phone before buying anything.</p>

                <p>
                  Do not wait until you are tired at the airport to discover
                  your phone cannot use it.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Physical SIM card
                </h2>

                <p>A physical SIM card is another common option.</p>

                <p>
                  This can be useful if you prefer a more traditional setup or
                  if you want a Korean phone number depending on the plan.
                </p>

                <p>
                  A Korean number can help in some situations, such as
                  reservations, taxis, waiting systems, or contact forms.
                </p>

                <p>But be careful.</p>

                <p>
                  A tourist SIM with a Korean number does not automatically make
                  every Korean app work like it does for a local resident.
                </p>

                <p>
                  Some services may still depend on account setup, payment
                  method, identity verification, app policy, or provider details.
                </p>

                <p>
                  So do not buy a SIM thinking it will unlock everything.
                </p>

                <p>Buy it mainly because you need reliable data.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  International roaming
                </h2>

                <p>Roaming is the easiest emotionally.</p>

                <p>
                  You keep your normal number and your normal phone setup.
                </p>

                <p>There is less to learn.</p>

                <p>
                  This can be worth it if your home carrier has a travel plan
                  that fits your trip.
                </p>

                <p>The trade-off is cost and limits.</p>

                <p>
                  Roaming can be expensive depending on your plan, and speed or
                  data limits may vary.
                </p>

                <p>Check before you leave.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Pocket Wi-Fi
                </h2>

                <p>Pocket Wi-Fi can be good for groups.</p>

                <p>
                  If several people need internet, one pocket Wi-Fi device can
                  keep everyone connected. It can also help if one person&apos;s
                  phone does not support eSIM or SIM changes.
                </p>

                <p>
                  The trade-off is that it becomes one more thing to carry.
                </p>

                <p>You need to charge it.</p>

                <p>You need to remember who has it.</p>

                <p>
                  If the person carrying it walks away, everyone else may lose
                  connection.
                </p>

                <p>
                  For solo travelers, eSIM or SIM is usually simpler.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Free Wi-Fi as backup
                </h2>

                <p>
                  Free Wi-Fi is useful, but it should be your backup.
                </p>

                <p>Hotel Wi-Fi is good for planning.</p>

                <p>Cafe Wi-Fi is good for resting and checking routes.</p>

                <p>Mall or station Wi-Fi can help in a pinch.</p>

                <p>
                  But if you rely only on free Wi-Fi, the stressful moments
                  happen between Wi-Fi spots.
                </p>

                <p>That is exactly when you usually need help most.</p>

                <p>On the street.</p>

                <p>At a bus stop.</p>

                <p>Inside a huge subway station.</p>

                <p>In front of a restaurant kiosk.</p>

                <p>While trying to find your hotel entrance.</p>

                <p>
                  So the best mindset is not &quot;Korea has Wi-Fi, so I need
                  nothing.&quot;
                </p>

                <p>It is:</p>

                <p>
                  Korea has lots of Wi-Fi, but I still want basic data for
                  movement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Battery and power bank rental
                </h2>

                <p>Battery matters too.</p>

                <p>
                  Maps, translation, photos, messaging, taxi apps, and route
                  searches can drain your phone quickly.
                </p>

                <p>
                  In Korea, you may see power bank rental stations or battery
                  rental options in busy areas, shopping districts, stations,
                  malls, or near popular streets.
                </p>

                <p>They can be useful when your battery is low.</p>

                <p>But do not depend on them completely.</p>

                <p>
                  The app, payment, sign-up, language support, location, and
                  return method may vary. If you are a first-time visitor,
                  finding a rental battery when your phone is already dying can
                  feel stressful.
                </p>

                <p>
                  If you rely heavily on your phone, carrying your own small
                  power bank is still the safest choice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Arrival day preparation
                </h2>

                <p>
                  Arrival day is the most important time to be prepared.
                </p>

                <p>Before you leave the airport area, make sure you can:</p>

                <p>open your map app,</p>

                <p>search your hotel,</p>

                <p>see your route,</p>

                <p>use translation if needed,</p>

                <p>
                  and contact your accommodation if something goes wrong.
                </p>

                <p>Save your hotel name and address in Korean.</p>

                <p>Screenshot your airport-to-hotel route.</p>

                <p>Save your first subway station.</p>

                <p>Save your hotel&apos;s nearest station exit.</p>

                <p>
                  This helps even if your data has a bad moment.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Easiest setup for most visitors
                </p>

                <p>
                  Use an eSIM if your phone supports it and you want
                  convenience.
                </p>

                <p>
                  Use a physical SIM if you prefer a SIM card or want a Korean
                  number option.
                </p>

                <p>
                  Use roaming if your carrier plan is simple and worth the cost.
                </p>

                <p>
                  Use pocket Wi-Fi if you are traveling as a group.
                </p>

                <p>Use cafe and hotel Wi-Fi as helpful support.</p>

                <p>Carry a power bank if you use maps all day.</p>

                <p>That balance is enough.</p>

                <p>You do not need the perfect internet setup.</p>

                <p>
                  You just need enough connection to move around without
                  stress.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Final note
                </p>

                <p>
                  For HAEMIL readers, Korea is actually a very connected place.
                </p>

                <p>You will probably find Wi-Fi often.</p>

                <p>
                  You will probably see people charging phones everywhere.
                </p>

                <p>
                  You may even notice battery rental options in busy areas.
                </p>

                <p>
                  But your first trip becomes easier when your phone works
                  before you need help.
                </p>

                <p>Not after.</p>

                <p>Prepare basic data.</p>

                <p>Use Wi-Fi when it is available.</p>

                <p>Keep your battery alive.</p>

                <p>And save a few important things offline.</p>

                <p>
                  That is the most realistic way to travel Korea comfortably.
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
