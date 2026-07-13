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
                  In Seoul and other big cities, Wi-Fi shows up in hotels,
                  guesthouses, cafes, malls, and stations more often than many
                  visitors expect. In cafes, the name and password are often on
                  the wall, near the counter, on a small sign, or printed on the
                  receipt — check those before asking staff.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Why you still want your own data
                </h2>

                <p>
                  Free Wi-Fi still is not the same as travel data — you need
                  maps between cafes, translation at kiosks, the right subway
                  exit, and a way to reach your stay after landing. That is when
                  your own connection matters most.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  eSIM
                </h2>

                <p>
                  For many visitors, eSIM is the easiest option — no physical
                  card swap, and you can often set it up before landing. The
                  catch is compatibility: not every phone supports eSIM, some are
                  carrier-locked, and first-time setup can confuse you if you wait
                  until you are tired at the airport. Check your phone before you
                  buy anything.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Physical SIM card
                </h2>

                <p>
                  A physical SIM is another common choice, and some plans include
                  a Korean number — useful for reservations, taxis, or contact
                  forms. A tourist number does not unlock every Korean app like a
                  local account would; sign-up, payment, and verification still
                  vary. Buy it for reliable data, not because it opens every door.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  International roaming
                </h2>

                <p>
                  Roaming keeps your normal number and setup, which feels simple
                  if your home carrier has a decent travel plan — but cost and
                  data limits vary a lot. Check your plan before you leave.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Pocket Wi-Fi
                </h2>

                <p>
                  Pocket Wi-Fi works well for groups — one device keeps several
                  phones online, and it helps if someone cannot use eSIM. You
                  carry and charge one more thing, and if the person holding it
                  walks off, everyone loses connection. Solo travelers usually
                  find eSIM or a SIM simpler.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Free Wi-Fi as backup
                </h2>

                <p>
                  Korea has lots of Wi-Fi, but the stressful moments happen
                  between Wi-Fi spots — on the street, at a bus stop, inside a
                  huge station, in front of a restaurant kiosk. Use hotel and cafe
                  Wi-Fi for planning; keep basic data for moving.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Battery and power bank rental
                </h2>

                <p>
                  Maps, translation, photos, and taxi apps drain battery fast.
                  You may see power bank rental stations in busy districts,
                  stations, and malls — handy when you are low, but app, payment,
                  and return rules vary. If you map all day, your own small power
                  bank is still the safer backup.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Arrival day preparation
                </h2>

                <p>
                  Before leaving the airport area, confirm you can open maps,
                  search your hotel, read your route, translate if needed, and
                  message your stay. Save the hotel name and address in Korean,
                  screenshot the airport-to-hotel route, and note your nearest
                  station exit — that helps even if data hiccups once.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Easiest setup for most visitors
                </p>

                <p>
                  eSIM if your phone supports it, physical SIM or roaming if that
                  fits better, pocket Wi-Fi for groups, cafe and hotel Wi-Fi as
                  backup, and your own power bank if you map all day — enough
                  connection to move without stress, not a perfect setup.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Korea is a connected country — you will find Wi-Fi often and
                  see people charging everywhere. Your trip goes smoother when
                  basic data works before you need help, not after: prepare data,
                  use Wi-Fi when it is there, keep your battery alive, and save a
                  few things offline.
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
