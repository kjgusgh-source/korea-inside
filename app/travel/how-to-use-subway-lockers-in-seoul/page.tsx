import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-use-subway-lockers-in-seoul`;

const pageTitle = "How to Use Subway Lockers in Seoul";
const pageDescription =
  "Learn how to use T-Locker, Seoul subway station lockers, including sizes, prices, hours, the app, and what first-time visitors should know before storing a bag.";

const quickAnswer = [
  "Yes — many Seoul subway stations have T-Locker, the city's smart luggage locker system.",
  "The basic flow: find an available locker, choose a size, follow the app instructions, pay, store your bag, and keep your retrieval information until you return.",
  "Lockers only work during operating hours, and not every station has the same number or size of lockers, so it helps to have a backup plan.",
];

const lockerFees = [
  { size: "Small (S)", dims: "about 50 × 30 × 60 cm", weekday: "2,200 KRW", weekend: "3,100 KRW", extra: "+500 KRW / hour" },
  { size: "Medium (M)", dims: "about 50 × 45 × 60 cm", weekday: "3,300 KRW", weekend: "4,600 KRW", extra: "+800 KRW / hour" },
  { size: "Large (L)", dims: "about 50 × 90 × 60 cm", weekday: "4,400 KRW", weekend: "6,100 KRW", extra: "+1,000 KRW / hour" },
];

const quickTips = [
  "Take a quick photo of the locker number and the nearby exit — one useful habit that saves you from hunting later.",
  "Keep your retrieval information (in the app, or on your phone) safe until you come back for your bag.",
  "Check the operating hours before you store anything — you cannot retrieve a bag outside them.",
  "Extra hourly charges add up if you stay out longer than planned, so check the base hours for your size.",
  "Don't assume every station has the same number of lockers, or the same sizes available — a bigger hub is a safer bet than a small local stop.",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "How to Use a T-money Card in Korea",
    description:
      "Buy, recharge, tap on buses twice, and keep enough balance for daily subway and bus movement.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "How to Get Around Seoul for First-Time Visitors",
    description:
      "Subway as your base, taxis when traffic allows, and why a simple route beats a fast-looking one.",
    href: "/travel/how-to-get-around-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "Luggage Storage in Seoul for First-Time Visitors",
    description:
      "A wider look at managing luggage in Seoul — hotel storage, station lockers, rush hour, and where not to bring a suitcase.",
    href: "/travel/luggage-storage-in-seoul-first-time",
  },
  {
    label: "Travel guide",
    title: "Things to Know Before Visiting Korea for the First Time",
    description:
      "Small systems that surprise first-time visitors — maps, subway rush hour, and famous-area prices.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/travel/how-to-use-subway-lockers-in-seoul",
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

export default function HowToUseSubwayLockersInSeoulPage() {
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
          name: "Seoul subway luggage lockers",
        },
        {
          "@type": "Thing",
          name: "T-Locker",
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
          name: "How to Use Subway Lockers in Seoul",
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
              Short answer: yes, if you are carrying a bag around Seoul for a
              few hours before check-in or after check-out, T-Locker is worth
              knowing about. Here is where to find one, what it costs, and
              what to do if the app or the locker gives you trouble.
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
                  Where can you find subway lockers in Seoul?
                </h2>

                <p>
                  Seoul&apos;s subway luggage lockers are run under a system
                  called T-Locker (또타라커), operated by Seoul Metro. According
                  to Seoul Metro&apos;s official page, T-Locker is currently
                  installed at 273 stations across 336 locations, with 5,557
                  compartments in total — but not every single station has
                  the same number of lockers, and a few line sections outside
                  Seoul Metro&apos;s own operating range are not included.
                  Bigger hub stations tend to have more lockers than small
                  local stops, so do not assume one will be free, or even
                  present, at every station you pass through.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How do you use a subway locker?
                </h2>

                <p>
                  T-Locker&apos;s current lockers are operated through the
                  official T-Locker app, based on Seoul Metro&apos;s own
                  usage guide. The general flow looks like this:
                </p>

                <ol className="mt-2 space-y-3">
                  <li>1. Open the T-Locker app and check which lockers near you are available.</li>
                  <li>2. Choose a locker size that fits your bag.</li>
                  <li>3. Follow the in-app instructions to select that specific locker.</li>
                  <li>4. Pay through the app.</li>
                  <li>5. Put your bag inside and close the door.</li>
                  <li>6. Make sure the door actually locks before you walk away.</li>
                  <li>7. Save your retrieval information in the app, or take a screenshot.</li>
                  <li>8. When you return, open the app and follow the retrieval steps to unlock the same locker.</li>
                </ol>

                <p>
                  Locker screens and door types can vary a little from
                  station to station, so if what is in front of you does not
                  exactly match what you expect, follow the on-screen or
                  in-app instructions at that specific locker rather than
                  assuming every T-Locker works identically.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  How much do Seoul subway lockers cost?
                </h2>

                <p>
                  Pricing is based on a 4-hour base rate, then an hourly
                  charge after that, and it is higher on weekends and public
                  holidays than on weekdays. Based on Seoul Metro&apos;s
                  official fee table:
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {lockerFees.map((row) => (
                    <div
                      key={row.size}
                      className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5"
                    >
                      <p className="text-lg font-semibold text-[var(--text)]">
                        {row.size}
                      </p>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {row.dims}
                      </p>
                      <div className="mt-4 space-y-1 text-sm leading-6 text-[var(--muted)]">
                        <p>
                          <span className="font-semibold text-[var(--celadon)]">
                            {row.weekday}
                          </span>{" "}
                          weekday / 4 hrs
                        </p>
                        <p>
                          <span className="font-semibold text-[var(--celadon)]">
                            {row.weekend}
                          </span>{" "}
                          weekend &amp; holiday / 4 hrs
                        </p>
                        <p>{row.extra} after that</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm">
                  Prices can change over time, so treat these as a current
                  reference rather than a permanent guarantee — the app
                  always shows the live rate before you pay.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What size locker do you need?
                </h2>

                <p>
                  Small (about 50 × 30 × 60 cm) suits a daypack or a small
                  bag. Medium (about 50 × 45 × 60 cm) fits most carry-on
                  suitcases. Large (about 50 × 90 × 60 cm) is built for a
                  bigger checked-size suitcase. Measurements matter more than
                  luggage labels here — a bag marketed as “carry-on” by an
                  airline is not always the same size as what a locker
                  actually measures, so it is worth checking your bag&apos;s
                  real dimensions against the locker sizes above rather than
                  guessing.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What time can you use the lockers?
                </h2>

                <p>
                  T-Locker operates from 05:00 to 24:00, every day of the
                  week, including weekends and public holidays. Outside that
                  window, you cannot store a new bag or retrieve one that is
                  already inside — so plan your storage and pickup times
                  around those hours, especially on a late-night arrival or a
                  very early departure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Do you need the T-Locker app?
                </h2>

                <p>
                  Based on Seoul Metro&apos;s own usage guide, checking
                  availability, paying, storing, and retrieving are all done
                  through the T-Locker app — so yes, plan to install it
                  before you need a locker, not after. The app&apos;s
                  official store listing currently shows support for English,
                  Japanese, Korean, and Simplified Chinese, so it is not a
                  Korean-only interface.
                </p>

                <p>
                  A practical heads-up: some travelers have reported the app
                  occasionally showing a locker as occupied when it is
                  actually free (or the reverse), and a few have run into
                  login or payment hiccups. None of that is guaranteed to
                  happen to you, but it is worth having a backup plan — a
                  different bank of lockers nearby, or calling the T-Locker
                  customer line — if the app does not cooperate.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What if your suitcase doesn&apos;t fit?
                </h2>

                <p>
                  If your bag does not fit even the large T-Locker size,
                  check whether a bigger hub station nearby has more or
                  larger lockers, since availability is not identical across
                  stations. For an oversized suitcase, or if you would rather
                  hand your bag to a staffed counter than a self-service
                  locker, T-Locker&apos;s sister service T-Luggage
                  (또타러기지) is worth knowing about — but do not confuse the
                  two. T-Luggage is a separate, staffed luggage storage and
                  same-day delivery service, currently available only at six
                  stations: Seoul Station, Hongik University, Jamsil,
                  Myeongdong, Gimpo Airport, and Jongno 3-ga, with its own
                  inch-based pricing and 09:00–22:00 hours.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Quick tips before you store your bag
                </h2>

                <ul className="mt-2 space-y-3">
                  {quickTips.map((tip) => (
                    <li key={tip} className="flex gap-3">
                      <span className="text-[var(--celadon)]">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
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
