import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/chuseok-korea-holiday-guide-first-time`;

const pageTitle =
  "Visiting Korea During Chuseok: 2026 Dates, What Closes, and What You Can Only See Now";
const pageDescription =
  "A practical HAEMIL guide to visiting Korea during Chuseok 2026 (September 24–26), covering what actually closes, subway and KTX travel, and the free palace access that only happens during the holiday.";

const quickAnswer = [
  "Chuseok 2026 falls on September 25, with the official holiday running September 24–26",
  "Korea does not shut down for the holiday — but plenty of small shops, traditional markets, and some clinics do",
  "Seoul's busy commercial streets tend to close for less of the holiday than smaller cities and quieter neighborhoods",
  "The subway keeps running on its normal schedule the entire time",
  "Highways get heavy with holiday travel, and KTX seats for Chuseok week sell out fast once booking opens",
  "The four grand palaces have opened free during past Chuseok weeks — worth checking again closer to September",
  "If you need a clinic or pharmacy, e-Gen (e-gen.or.kr) or the Dasan Call Center (120) can tell you what's open that day",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "Best Time to Visit Korea for First-Time Visitors",
    description:
      "A practical HAEMIL guide to the best time to visit Korea for first-time travelers, comparing spring, summer, autumn, and winter by weather, crowds, costs, clothing, and travel style.",
    href: "/travel/best-time-to-visit-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "Things to Know Before Visiting Korea for the First Time",
    description:
      "A practical HAEMIL guide to what first-time visitors should know before traveling to Korea, including Seoul transport, maps, rush hour, food ordering, costs, cafes, weather, and local tips.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
  {
    label: "Travel guide",
    title: "How to Use the Korean Subway",
    description:
      "A friendly HAEMIL guide to using the Korean subway for the first time, from T-money cards and station gates to transfers, apps, etiquette, and when a Climate Card may be worth considering.",
    href: "/travel/how-to-use-korean-subway",
  },
  {
    label: "Travel guide",
    title: "Naver Map or KakaoMap?",
    description:
      "A friendly HAEMIL guide to using Naver Map and KakaoMap in Korea, why Google Maps can feel limited, and how to find subway exits, buses, restaurants, and saved places more easily.",
    href: "/travel/naver-map-kakaomap-korea-travel-guide",
  },
  {
    label: "Travel guide",
    title: "Korea Etiquette Tips for Tourists",
    description:
      "A practical HAEMIL guide to Korea etiquette for first-time visitors, including subway manners, restaurant habits, table bells, tipping, trash, shoes, public noise, and local travel tips.",
    href: "/travel/korea-etiquette-tips-for-tourists",
  },
  {
    label: "Travel guide",
    title: "7 Days in Korea Itinerary for First-Time Visitors",
    description:
      "One week split between Seoul and a second city — realistic pacing, transport between stops, and room for food detours.",
    href: "/travel/7-days-in-korea-itinerary-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/chuseok-korea-holiday-guide-first-time",
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

export default function ChuseokKoreaHolidayGuideFirstTimePage() {
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
          name: "Chuseok",
        },
        {
          "@type": "Thing",
          name: "Korean holidays",
        },
        {
          "@type": "Thing",
          name: "First time Korea",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Korea closed during Chuseok?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — Chuseok is not a nationwide shutdown. Restaurants, markets, and some clinics close more than others depending on the area, but the subway runs on its normal schedule and several sites, including the grand palaces, have opened for free in past years rather than closing.",
          },
        },
        {
          "@type": "Question",
          name: "What are the exact Chuseok 2026 dates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chuseok itself falls on September 25, 2026, with the official holiday running from September 24 to September 26.",
          },
        },
        {
          "@type": "Question",
          name: "Should I avoid visiting Korea during Chuseok?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Intercity travel and some small businesses get harder to plan around, but free palace access and quieter versions of usually packed sites can make it a good time for a trip that mostly stays in one city.",
          },
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
          name: "Visiting Korea during Chuseok",
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
              If your trip lands anywhere near late September 2026, you have
              probably wondered whether Chuseok will get in the way. It will
              change a few things about how the week feels, but it is not a
              reason to rearrange your dates — you just need to know what
              actually closes, what stays open, and what only happens because
              the holiday is on.
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
                  What Chuseok actually is
                </h2>

                <p>
                  Chuseok is Korea&apos;s autumn harvest holiday, timed to the
                  full moon on the 15th day of the 8th lunar month — in 2026
                  that lands on September 25. Families travel back to their
                  hometowns to share a meal, visit ancestral graves, and see
                  relatives in person, which is exactly why the highways get
                  so busy and why a stretch of ordinary streets goes quiet for
                  a few days. It has less in common with a single festival day
                  and more with how many countries treat their biggest family
                  holiday of the year — everyone moving at once, toward the
                  same place, for the same reason.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What closes, what stays open
                </h2>

                <p>
                  What actually shuts down depends a lot on where you are and
                  what kind of business you are looking at. Small, family-run
                  restaurants and traditional markets are the most likely to
                  close. Locals describe a pattern where shops in Seoul&apos;s
                  busier commercial streets often close only on Chuseok day
                  itself, while shops in smaller cities or quieter
                  neighborhoods are more likely to stay closed for all three
                  days — that is a local observation rather than something
                  written into an official schedule, so it is worth treating
                  any single store&apos;s hours as unconfirmed until you check
                  Naver Map or call ahead.
                </p>

                <p>
                  Government-run museums and public offices close for the
                  holiday, and hospitals largely follow the same
                  public-holiday schedule — but &quot;hospitals close&quot; is
                  not the whole story. On past Chuseok holidays, Seoul alone
                  has kept well over a thousand clinics and a similar number
                  of pharmacies open on any given day of the break, plus
                  dozens of 24-hour emergency rooms across the city. The
                  useful part is finding them: e-Gen (e-gen.or.kr) is the
                  government&apos;s real-time portal for which clinics and
                  pharmacies are open right now, and the Dasan Call Center
                  (120) or 119 can point you to the nearest open option if
                  you would rather not navigate the site yourself.
                </p>

                <p>
                  Not every publicly run site follows that closed pattern,
                  either. The four grand palaces — Gyeongbokgung,
                  Changdeokgung, Changgyeonggung, and Deoksugung — along with
                  Jongmyo Shrine and the Joseon royal tombs, have opened for
                  free during past Chuseok weeks instead of closing, since the
                  holiday is exactly when the government wants people walking
                  through them, locals and visitors alike. The exact 2026
                  dates for this had not been announced as of this writing, so
                  treat it as likely rather than guaranteed until it is
                  confirmed closer to September.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Getting around during the holiday
                </h2>

                <p>
                  Getting around Seoul itself stays simple — the subway runs
                  on its normal schedule through the whole holiday, so you can
                  rely on it exactly the way you would any other week. Getting
                  between cities is the part that changes. Chuseok is when a
                  huge share of the country travels to see family, and that
                  turns the highways connecting major cities into multi-hour
                  crawls — a Seoul-to-Busan drive that normally takes four to
                  five hours can stretch past seven or eight. KTX tickets for
                  Chuseok week go on a special early sale about a month before
                  the holiday and sell out quickly, so if intercity train
                  travel is part of your plan, it is worth booking as soon as
                  tickets open rather than waiting. Korail had not announced
                  the exact 2026 sale date as of this writing — expected
                  toward the end of August — so check closer to the date if a
                  trip between cities falls inside the holiday window.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What you can only see during Chuseok
                </h2>

                <p>
                  The clearest upside of visiting during Chuseok is the
                  free palace access mentioned above, alongside a couple of
                  things that run year-round but pair naturally with a
                  holiday visit: the changing of the guard ceremony at
                  Gyeongbokgung, held mornings and afternoons with no
                  reservation needed, and free palace entry for anyone
                  wearing hanbok, which is a standing policy rather than a
                  holiday-only perk. Combined with a quieter, less crowded
                  palace during the free-admission stretch, Chuseok week can
                  end up being a better time to see the palaces than an
                  ordinary weekend, even while the rest of the city moves a
                  little slower than usual.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Checklist before you go
                </h2>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Confirm the 2026 palace free-admission dates and
                      Korail&apos;s Chuseok ticket sale date closer to
                      September — both were unannounced as of this research.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Check e-Gen or call 120 before assuming a clinic or
                      pharmacy is closed.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Book KTX early if you are traveling between cities
                      during the holiday window.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Build slack into intercity plans — highway travel
                      times can more than double.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Do not assume everything is closed inside Seoul&apos;s
                      main tourist areas — check the specific address instead
                      of guessing.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      If a shop or restaurant matters to your plans, check its
                      Naver Map hours or message ahead before you go.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  FAQ
                </h2>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[var(--text)]">
                      Is Korea closed during Chuseok?
                    </p>
                    <p>
                      No — this is not a nationwide shutdown. Restaurants,
                      markets, and some clinics close more than others
                      depending on the area, but the subway runs normally and
                      several sites, including the grand palaces, have opened
                      for free in past years rather than closing.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[var(--text)]">
                      What are the exact Chuseok 2026 dates?
                    </p>
                    <p>
                      Chuseok itself falls on September 25, 2026, with the
                      official holiday running from September 24 to
                      September 26.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[var(--text)]">
                      Should I avoid visiting Korea during Chuseok?
                    </p>
                    <p>
                      Not necessarily. Intercity travel and some small
                      businesses get harder to plan around, but the free
                      palace access and a quieter version of usually packed
                      sites can make it a good time for a trip that mostly
                      stays in one city.
                    </p>
                  </div>
                </div>
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
