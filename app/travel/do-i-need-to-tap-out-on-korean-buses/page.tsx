import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/do-i-need-to-tap-out-on-korean-buses`;

const pageTitle = "Do I Need to Tap Out on Korean Buses?";
const pageDescription =
  "Learn when to tap your transit card on Korean buses, why the exit tap matters for fares and transfers, and what happens if you forget.";

const quickAnswer = [
  "Yes — in Seoul and the wider metropolitan area (Seoul, Incheon, Gyeonggi), tap your transit card when you board a bus and tap the same card again when you get off.",
  "The exit tap is what lets the system calculate distance-based fares and apply transfer discounts correctly.",
  "Skipping it does not stop the bus ride, but it can affect your next fare or transfer discount.",
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
    title: "Things to Know Before Visiting Korea for the First Time",
    description:
      "Small systems that surprise first-time visitors — maps, subway rush hour, and famous-area prices.",
    href: "/travel/things-to-know-before-visiting-korea-first-time",
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
    canonical: "/travel/do-i-need-to-tap-out-on-korean-buses",
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

export default function DoINeedToTapOutOnKoreanBusesPage() {
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
          name: "Korean bus transit card tapping",
        },
        {
          "@type": "Thing",
          name: "T-money",
        },
        {
          "@type": "Thing",
          name: "Korea public transportation",
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
          name: "Do I Need to Tap Out on Korean Buses?",
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
              Do I Need to Tap Out on Korean Buses?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Short answer: yes, if you are using a transit card on buses in
              Seoul and the surrounding metropolitan area. Here is why that
              second tap matters and what actually happens if you forget it.
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
                  Why do you need to tap when getting off?
                </h2>

                <p>
                  In Seoul and the surrounding metropolitan area, bus fares
                  under the integrated transfer system are calculated by
                  distance, and transfer discounts between buses and the
                  subway depend on the system reading both your boarding tap
                  and your exit tap. The exit tap tells the system where your
                  ride ended, which is what lets it work out any extra
                  distance fare and apply a transfer discount if you switch to
                  another bus or the subway soon after.
                </p>

                <p>
                  This only works if you use the same transit card for both
                  taps — boarding and exiting with two different cards breaks
                  the calculation, even if both cards belong to you.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  What happens if you forget to tap out?
                </h2>

                <p>
                  According to Seoul&apos;s official transit guidance, missing
                  the exit tap breaks the transfer chain for that ride. The
                  system treats the trip as a single, non-transferring ride,
                  and any base-fare amount that would normally have been
                  waived under a transfer discount can instead be charged on
                  your next tap. In other words, forgetting to tap out does
                  not just lose you a discount on the ride you just took — it
                  can add a charge the next time you tap your card.
                </p>

                <p>
                  Exactly how much extra you are charged depends on the fare
                  rules in effect and the specific transfer you missed, so it
                  is not one fixed penalty amount. The safer way to think
                  about it: tapping out protects both your current fare and
                  your next one.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Where do you tap?
                </h2>

                <p>
                  Tap your card on the reader near the door when you board,
                  and tap the same card again on a reader near the door before
                  you get off — usually right before or as you step down.
                  Reader placement can vary a little by bus, so if you do not
                  see one right away, check near the front and rear doors
                  rather than assuming there is only one spot.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">
                  Does this apply everywhere in Korea?
                </h2>

                <p>
                  The integrated transfer system described above officially
                  covers Seoul, Incheon, and Gyeonggi buses along with the
                  metropolitan subway network — this is the system most
                  first-time visitors experience. Other cities, including
                  Busan, run their own transit card systems where tapping off
                  also affects transfer discounts, though the exact rules
                  (transfer windows, number of free transfers, fare
                  structure) are set locally and are not identical to
                  Seoul&apos;s.
                </p>

                <p>
                  A practical rule of thumb: if a bus has a card reader by the
                  door, tap it both when you board and when you get off. It
                  costs nothing extra if it is not required, and it protects
                  you in every system where it is.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Quick bus tip for first-time visitors
                </p>

                <ul className="mt-2 space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Use the same card to tap on and tap off — switching
                      cards partway breaks the transfer link.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Keep your card out and ready before your stop so you are
                      not digging through a bag while the bus is moving.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Watch for the reader&apos;s beep or screen confirmation
                      on both taps — a silent or unclear read is worth
                      trying again.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--celadon)]">•</span>
                    <span>
                      Transfers depend on tagging correctly every time, so a
                      missed tap can quietly affect your next ride, not just
                      the one you are on.
                    </span>
                  </li>
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
