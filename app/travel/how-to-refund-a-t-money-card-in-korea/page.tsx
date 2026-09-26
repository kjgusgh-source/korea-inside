import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/travel/how-to-refund-a-t-money-card-in-korea`;

const pageTitle = "How to Refund a T-money Card in Korea";
const pageDescription =
  "Learn where to refund the remaining balance on a T-money card in Korea, including convenience stores, subway service desks, refund fees, and limits.";

const refundStops = [
  {
    label: "Small balance",
    detail: "A participating convenience store (GS25, 7-Eleven, CU, emart24)",
    note: "Limits vary by chain — usually up to 20,000–30,000 won",
  },
  {
    label: "Larger balance",
    detail: "A subway station T-money service desk",
    note: "Handles partial refunds between 10,000 and 50,000 won",
  },
  {
    label: "Very large balance",
    detail: "T-money Town, T-money's own service center",
    note: "Up to 500,000 won a day; ID check for 50,000 won or more",
  },
];

const refundSteps = [
  "Check your remaining balance on the card reader at a subway gate, bus reader, or convenience store register.",
  "Go to a refund location that matches your balance — convenience store for a smaller amount, subway service desk or T-money Town for a larger one.",
  "Hand the physical card to the staff and say you want a T-money balance refund.",
  "The refund fee is deducted automatically before you're paid.",
  "Receive the remaining balance in cash (convenience stores and subway service desks) or by bank transfer (T-money Town, for larger amounts).",
  "Ask whether the card itself is kept or handed back — this can vary by location, and either way the card's purchase price is not part of the refund.",
];

const beforeYouLeaveTips = [
  "Don't load a large amount onto the card right before your last day — it's easier to spend it down than to refund it.",
  "Check your balance before heading to the airport, since airport terminals are not a reliable place to refund a T-money card.",
  "Refund limits vary by location, so a convenience store that can't handle your balance doesn't mean no one can — try a subway service desk instead.",
  "Keep enough balance for your last subway or bus ride before you refund the rest, so you're not caught short at the gate.",
];

const relatedGuides = [
  {
    label: "Travel guide",
    title: "How to Use a T-money Card in Korea",
    description:
      "Buying, recharging, and tapping a T-money card for the first time — the guide to read before this one if you haven't used T-money yet.",
    href: "/travel/how-to-use-t-money-card-in-korea",
  },
  {
    label: "Travel guide",
    title: "How to Use the Korean Subway",
    description:
      "Tap in and out, follow line colors, survive long transfers, and find the right exit before a huge Seoul station swallows you.",
    href: "/travel/how-to-use-korean-subway",
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
    canonical: "/travel/how-to-refund-a-t-money-card-in-korea",
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

export default function HowToRefundATMoneyCardInKoreaPage() {
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
          name: "T-money card",
        },
        {
          "@type": "Thing",
          name: "Korean public transportation",
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
          name: "How to Refund a T-money Card in Korea",
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
              How to Refund a T-money Card in Korea
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Yes — in most cases, you can get the remaining balance on a
              physical T-money card back before you leave Korea. Where you
              should go mainly depends on how much money is left on the
              card, and a small fee is taken out either way.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              This guide focuses on a standard physical T-money card — the
              kind most visitors buy at a convenience store or subway
              station. Mobile T-money, the Climate Card, Cashbee, and other
              transit products follow different rules.
            </p>
          </article>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Where can you refund a T-money card?
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Think of it in three tiers, from smallest balance to largest.
              The exact cutoffs vary a little by location, but this is the
              general shape of it.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {refundStops.map((stop) => (
                <div
                  key={stop.label}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--celadon)]">
                    {stop.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-snug">
                    {stop.detail}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {stop.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              How to refund your T-money balance
            </p>

            <ol className="mt-4 space-y-4 text-base leading-7 text-[var(--muted)] md:text-lg">
              {refundSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-semibold text-[var(--text)]">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              How much is the refund fee?
            </p>

            <div className="mt-4 space-y-5 text-base leading-7 text-[var(--muted)] md:text-lg">
              <p>
                For a standard physical T-money card, T-money&apos;s own fee
                schedule sets a flat{" "}
                <strong className="text-[var(--text)]">500 won</strong>{" "}
                refund fee, whether you refund the whole balance or a
                partial amount at a convenience store, a subway service
                desk, or T-money Town. That fee is taken out of your balance
                automatically — you don&apos;t pay it separately.
              </p>
              <p>
                This fee is separate from the price you paid for the card
                itself. The refund only covers whatever balance is left on
                the card; it does not include the card&apos;s original
                purchase price.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Can you refund at a convenience store?
            </p>

            <div className="mt-4 space-y-5 text-base leading-7 text-[var(--muted)] md:text-lg">
              <p>
                Participating convenience stores can handle smaller
                refunds, but the limit is not the same at every chain. By
                T-money&apos;s own published guidance, GS25 handles refunds
                under 20,000 won, 7-Eleven and most independent convenience
                shops handle up to 20,000 won, and CU and emart24 handle up
                to 30,000 won. It is not true that any convenience store can
                refund any amount.
              </p>
              <p>
                Convenience stores refund the balance only — the card&apos;s
                purchase price is not included. If a store can&apos;t
                process your refund (the amount is too large, the system is
                down, or the staff member simply isn&apos;t able to help),
                that doesn&apos;t mean refunds aren&apos;t possible — try
                another branch, or head to a subway station service desk
                instead.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              What if you have more than the normal refund limit?
            </p>

            <div className="mt-4 space-y-5 text-base leading-7 text-[var(--muted)] md:text-lg">
              <p>
                Once your balance is above what a convenience store can
                handle, a subway station T-money service desk is the next
                stop. Service desks (and T-money Town) are also the only
                places that can do a partial refund — taking out a set
                amount between 10,000 and 50,000 won, in 10,000 won steps,
                rather than emptying the whole card.
              </p>
              <p>
                If your balance is over 50,000 won, T-money&apos;s guidance
                points you to T-money Town, the company&apos;s own service
                center, or a bank ATM with T-money refund service linked to
                an account in your name. T-money Town can refund up to
                500,000 won per person per day, and asks for ID (name,
                birth date, contact) on refunds of 50,000 won or more. The
                bank ATM route is generally more useful if you already have
                a Korean bank account than for a short visit.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Do you get the price of the card back?
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
              No. A refund gives you back the remaining balance you loaded
              onto the card, minus the fee — not the few thousand won you
              originally paid to buy the card itself. That purchase price
              stays with the card issuer for a normal, working card.
          </p>
        </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              What if your T-money card is damaged?
            </p>

            <div className="mt-4 space-y-5 text-base leading-7 text-[var(--muted)] md:text-lg">
              <p>
                A card that no longer works is handled differently from a
                normal working card. Instead of a quick counter refund,
                T-money processes damaged cards through a separate
                request — by mailing the card in with a refund form, by
                submitting a photo of the cut-up card online, or in person
                at T-money Town.
              </p>
              <p>
                The outcome also depends on why the card stopped working.
                If it genuinely malfunctioned within two years of its first
                top-up, T-money refunds the card&apos;s purchase price along
                with the balance. If the card was damaged through normal
                wear, dropping, bending, or cutting, only the remaining
                balance is refunded — not the purchase price.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Before you leave Korea
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {beforeYouLeaveTips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="text-[var(--celadon)]">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
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
