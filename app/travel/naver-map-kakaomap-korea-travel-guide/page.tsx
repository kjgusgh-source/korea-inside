import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/naver-map-kakaomap-korea-travel-guide`;

const pageTitle = "Naver Map or KakaoMap? A First-Time Visitor Guide to Korean Map Apps";
const pageDescription =
  "A friendly HAEMIL guide to using Naver Map and KakaoMap in Korea, why Google Maps can feel limited, and how to find subway exits, buses, restaurants, and saved places more easily.";

const quickFacts = [
  "Best first choice: Naver Map is a good all-around app for most first-time visitors",
  "Good backup: KakaoMap is also useful for routes, buses, subway directions, and local navigation",
  "Google Maps note: It can still be useful, but in Korea it may feel less detailed for exact walking, transit, and local place searches",
  "Why Google Maps feels limited: Korea has long had high-precision map data restrictions tied to national security and sensitive facility concerns; this has started changing, but local apps are still important",
  "Search tip: If English search fails, copy and paste the Korean place name",
  "Local tip: Always check the subway exit number. The wrong exit can add a long walk",
  "Night travel tip: Check last train and last bus times before staying out late",
  "Save first: Save your hotel address in Korean before your first day out",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Korean subway first-time guide",
    description:
      "A local-friendly first guide to Korean subway rides, transfers, station signs, apps, etiquette, and simple mistakes to avoid.",
    href: "/travel/how-to-use-korean-subway",
  },
  {
    label: "Travel guide",
    title: "T-money card travel guide",
    description:
      "A local-friendly guide to buying, recharging, tapping, transferring, and avoiding common T-money mistakes on Korean subways and buses.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "Seoul night travel guide",
    description:
      "Han River, Namsan, Euljiro, Cheonggyecheon, late-night streets, convenience-store snacks, and quiet city moods.",
    href: "/travel/night-seoul-han-river-namsan-euljiro",
  },
  {
    label: "Travel",
    title: "Open the Travel hub",
    description:
      "Map-friendly HAEMIL guides for exploring Korea through neighborhoods, food, local routes, and small details.",
    href: "/travel",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/naver-map-kakaomap-korea-travel-guide",
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

export default function NaverMapKakaoMapKoreaTravelGuidePage() {
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
          name: "Naver Map",
        },
        {
          "@type": "Thing",
          name: "KakaoMap",
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
          name: "Naver Map or KakaoMap?",
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
              Naver Map or KakaoMap? A First-Time Visitor Guide to Korean Map
              Apps
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Before you travel to Korea, install a Korean map app — Naver Map
              or KakaoMap. Google Maps can still help for broad planning, but for
              subway exits, bus stops, walking routes, and local place names,
              local apps usually know the city better.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>
                In many countries, Google Maps handles walking directions,
                public transport, restaurants, and saved places in one place. In
                Korea it can still be useful for broad browsing, hotel locations,
                saved pins, and reviews from foreign visitors — but for the small
                details of daily movement, Naver Map and KakaoMap usually feel
                more natural. That gap can be frustrating on your first day if
                you search a restaurant and the result feels off, or a walking
                route does not match what locals would take.
              </p>

              <p>
                Part of the reason is map-data policy: for a long time Korea has
                had restrictions around high-precision map data and exporting
                geographic information outside the country, often tied to national
                security and sensitive facilities. In 2026, Korea conditionally
                approved Google&apos;s request to export high-precision 1:5,000
                map data under strict security conditions, so the situation may
                improve over time. For a traveler today, the practical habit
                still holds — use Naver Map or KakaoMap for local movement, and
                keep Google Maps as a supplement rather than your only tool.
              </p>

              <p>
                Naver Map is usually the easiest first choice — strong for subway
                routes, bus routes, walking directions, place pages, restaurant
                and cafe search, reviews, photos, and saved places across Seoul,
                Busan, Jeju, and other cities. KakaoMap is a useful backup when
                Naver search feels unclear or you want to compare directions;
                having both installed saves you when one result looks wrong. Neither
                app is perfect, but together they cover most first-trip navigation
                better than global map habits alone.
              </p>

              <p>
                Search is where visitors stumble most. English search has
                improved, but a place may have several English spellings, a cafe
                may use a stylized name, or a small shop may appear only under its
                Korean name. If English search fails, copy and paste the Korean
                name — from Instagram, a hotel page, a Korean blog, the
                restaurant&apos;s official site, or even Google — and paste it
                into Naver Map or KakaoMap. Searching &quot;Myeongdong dumpling
                restaurant&quot; may give mixed results; the exact Korean name is
                often much cleaner, and the same applies to cafes, clinics, pop-up
                stores, and local attractions.
              </p>

              <p>
                Always check the subway exit number — in Korea it is not a tiny
                detail. Exit 1 and exit 8 can put you on opposite sides of a wide
                road or several minutes apart. Naver Map and KakaoMap often show
                which exit to use, plus bus stops, walking time after the station,
                and transfer details — much easier than standing in a large
                station and guessing from signs alone. Check line, transfer,
                direction, and exit in the app before you enter the station,
                especially before rush hour or when the station is large.
              </p>

              <p>
                For buses, local apps matter even more. Korean bus stops can
                carry many routes, and several stops with similar names may sit
                near the same intersection — the app helps you check which side
                of the road to stand on, which bus number to take, how many stops
                to ride, and where to get off. Taking the right bus in the wrong
                direction is an easy mistake without that guidance. At night,
                check last train and last bus times before staying out late near
                Hongdae, Itaewon, Euljiro, Gangnam, or the Han River — public
                transport does not run the same way all night, and checking while
                you still have energy beats deciding at midnight.
              </p>

              <p>
                For restaurants and cafes, Naver place pages often show photos,
                hours, reviews, menus, and phone numbers — useful, but not a
                perfect promise. Hours change, small shops close early, popular
                cafes move. If a place really matters, cross-check the official
                Instagram or the shop&apos;s own page. Save your hotel name and
                address in Korean on your first day — in Naver Map or KakaoMap,
                plus a screenshot — so a low battery or a taxi ride does not
                turn into explaining an address in English. Saving the nearest
                station, airport route, a few food areas, and one landmark near
                your accommodation before you land makes the first day softer.
              </p>

              <p>
                If you want one app to start with, use Naver Map; install KakaoMap
                as backup. Keep Google Maps if you already use it, but let Korean
                apps handle exits, bus stops, walking routes, and local search.
                When something does not show up in English, copy the Korean name,
                check the exit, and go — that small rhythm is what makes Korea
                feel easier to move through day by day.
              </p>
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
