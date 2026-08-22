import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import TermBadge from "../../../components/TermBadge";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-a-photocard`;

const pageTitle = "What Is a Photocard (PC) in K-pop? | PC, POB & Photocard Meaning";
const pageDescription =
  "PC, POB, and “poca” all show up when you open your first K-pop album — here is what a photocard actually is and how the terms differ.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-a-photocard",
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

export default function WhatIsAPhotocardPage() {
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
          name: "K-pop photocard",
        },
        {
          "@type": "Thing",
          name: "Pre-order benefit",
        },
        {
          "@type": "Thing",
          name: "K-pop",
        },
        {
          "@type": "Thing",
          name: "Korean fan culture",
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
          name: "K-pop",
          item: `${siteUrl}/kpop`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is a photocard?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <div className="flex items-center gap-3">
              <TermBadge term="photocard" className="h-11 w-11 flex-none" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                K-pop starter guide
              </p>
            </div>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What is a photocard in K-pop?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you just opened your first K-pop album and found a small
              printed photo of one member tucked inside, you already met a
              photocard. Fans call it a PC, or 포카 (poca) when they are
              writing in Korean fan chatter. The confusing part is not the
              card itself — it is figuring out how PC, POB, and 포카 fit
              together, since they get used almost interchangeably online.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Korean word
                </p>
                <p className="mt-2 text-2xl font-semibold">포토카드</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  potokadeu — a small printed photo of one member,
                  usually about the size of a standard trading card.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  In K-pop
                </p>
                <p className="mt-2 text-2xl font-semibold">A random pull</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  You do not pick which member you get — the card is
                  sealed inside the album before you buy it.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold text-[var(--gold)]">
                  Not the same thing
                </p>
                <p className="mt-2 text-2xl font-semibold">POB</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A separate, store-exclusive bonus you only get by
                  pre-ordering from a specific seller.
                </p>
              </div>
            </div>
          </article>

          <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What&apos;s actually inside the album
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                One small card, randomly assigned.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                A photocard is a small printed photo of one member from the
                group, roughly the size of a standard trading card. It comes
                packaged inside the album, and which member you get is left
                to chance — the card is sealed in before the album ever
                reaches a store shelf or warehouse.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                That randomness is the whole reason photocards became a thing
                fans talk about. Two people can buy the identical album on
                the identical day and walk away with completely different
                members. For a new fan, that is often the first moment
                K-pop&apos;s collecting culture becomes real instead of
                theoretical.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Where the confusion starts
              </p>

              <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    PC:
                  </span>{" "}
                  the general fan shorthand for any member photocard,
                  wherever it came from.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    포카 (poca):
                  </span>{" "}
                  the Korean fandom&apos;s own short form of 포토카드 —
                  fan slang, not an official term a label prints anywhere.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    POB:
                  </span>{" "}
                  short for pre-order benefit, a different kind of bonus tied
                  to when and where you order, not to the album itself.
                </li>
                <li>
                  <span className="font-semibold text-[var(--text)]">
                    Why it matters:
                  </span>{" "}
                  mixing these up is the easiest way to order the wrong thing
                  as a first-time buyer.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              The other card people mean
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A POB is not a regular photocard — it is a store&apos;s
              own bonus.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              A pre-order benefit, or POB, is an extra item a specific
              retailer creates for people who order during the pre-order
              window — often a photocard, but sometimes a poster,
              sticker, or postcard instead. Each store generally designs its
              own version, so ordering the same album from two different
              sellers can get you two different POB items.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              That store-exclusive structure is also why POB tends to
              disappear fast. It is only offered while pre-orders are open at
              that particular seller, so once regular sales start, that
              specific version is generally no longer available through the
              store itself. Fans who missed the pre-order window are left
              looking for it secondhand.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Why some cards trade for more than they cost
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Scarcity, not the card itself, drives the price.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Once a POB window closes or an album stops being reprinted, the
              cards that came with it do not become available again through
              official channels. Combine that with the random-pull system for
              regular photocards, and a small paper card can end up being the
              only reason some fans track down a specific old album years
              later.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              That is the honest explanation for why popular cards sometimes
              get traded or resold above their original cost — it comes
              down to how limited a specific member, era, or store-exclusive
              version turned out to be, not a fixed value printed anywhere.
              Exact prices vary too widely by group, member, and moment to
              treat any single number as a rule.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kpop/glossary"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Open K-pop glossary →
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Related K-pop guides
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link
                href="/kpop/what-is-a-fancam"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  K-pop starter guide
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                  What is a fancam in K-pop?
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Another fan word that trips up new listeners — what a
                  fancam actually shows and why fans watch it.
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Read guide →
                </p>
              </Link>

              <Link
                href="/kpop/what-is-aegyo"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  K-pop guide
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                  What is aegyo in K-pop?
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  A friendly guide to another word that shows up constantly
                  in K-pop fan spaces — and why it means more than
                  “acting cute.”
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Read guide →
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
