import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const path = "/kpop/kpop-concert-id-check-korea";
const pageUrl = `${siteUrl}${path}`;
const pageTitle = "K-pop Concert ID Check in Korea: Passport & Ticket Tips";
const pageDescription =
  "Going to a K-pop concert in Korea? Learn how ticket name matching, passport checks, presale verification, and venue pickup work before you go.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: path },
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

const verificationTypes = [
  {
    verification: "Ticketing account verification",
    meaning: "Confirming your identity before purchasing tickets on certain platforms",
  },
  {
    verification: "Fan-club presale verification",
    meaning: "Connecting an eligible fan-club membership with the ticketing process",
  },
  {
    verification: "Venue identity verification",
    meaning:
      "Showing that the person attending or collecting the ticket matches the required booking information",
  },
];

const ticketingWords = [
  { korean: "본인 확인", meaning: "Identity verification" },
  { korean: "신분증", meaning: "Identification document" },
  { korean: "실물 신분증", meaning: "Physical ID" },
  { korean: "여권", meaning: "Passport" },
  { korean: "예매자", meaning: "Reservation holder (person who booked)" },
  { korean: "관람자", meaning: "Attendee" },
  { korean: "예매 내역", meaning: "Booking details or purchase record" },
  { korean: "현장 수령", meaning: "On-site ticket pickup" },
  { korean: "양도 불가", meaning: "Transfer not allowed" },
  { korean: "대리 수령 불가", meaning: "Someone else cannot collect the ticket for you" },
  { korean: "선예매 인증", meaning: "Presale eligibility verification" },
];

const relatedGuides = [
  { label: "What Is a K-pop Fanchant?", href: "/kpop/what-is-a-fanchant" },
  { label: "What Is a K-pop Lightstick?", href: "/kpop/what-is-a-lightstick-in-kpop" },
  { label: "What Is a Music Show in K-pop?", href: "/kpop/what-is-a-music-show-in-kpop" },
];

const officialSources = [
  {
    label: "YES24 Global Ticket — FAQ",
    href: "https://ticket.yes24.com/Pages/English/Guidance/FnFAQ.aspx",
  },
  {
    label: "JX 2026 Concert — Official Identity Verification Notice",
    href: "https://weverse.io/kimjaejoong/notice/38661",
  },
  {
    label: "NOL World — TXT 2026 Concert Ticketing and Entry Information",
    href: "https://world.nol.com/en/ticket/products/26013161",
  },
];

const externalClass = "font-medium text-[var(--accent)] underline underline-offset-4 hover:opacity-80";
const h2Class = "text-2xl font-semibold leading-tight md:text-3xl";
const tipClass = "rounded-2xl border-l-4 border-[var(--gold)] bg-[var(--card)] p-6 md:p-8";

export default function KpopConcertIdCheckKoreaPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      author: { "@type": "Organization", name: "HAEMIL", url: siteUrl },
      publisher: { "@type": "Organization", name: "HAEMIL", url: siteUrl },
      inLanguage: "en",
      about: [
        { "@type": "Thing", name: "K-pop concerts in Korea" },
        { "@type": "Thing", name: "Concert ticketing in Korea" },
        { "@type": "Thing", name: "K-pop fan culture" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "K-pop", item: `${siteUrl}/kpop` },
        { "@type": "ListItem", position: 3, name: "K-pop Concert ID Check in Korea", item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 py-6 md:gap-10 md:px-8 md:py-8">
          <SiteHeader />
          <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]">
            <header className="border-b border-[var(--border)] px-6 py-9 md:px-12 md:py-14">
              <Link href="/kpop" className="text-sm font-medium text-[var(--accent)] hover:underline">
                ← Back to K-pop
              </Link>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                K-pop culture guide
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
                Going to a K-pop Concert in Korea? Check Your Ticket Name First
              </h1>
            </header>

            <div className="mx-auto max-w-3xl space-y-11 px-6 py-9 text-base leading-8 md:mx-0 md:max-w-[62rem] md:px-12 md:py-12 md:text-lg md:leading-9">
              <section aria-label="Introduction" className="space-y-5">
                <p>You finally get a ticket to see your favorite K-pop group in Korea.</p>
                <p>
                  You&apos;ve checked the concert date, saved the venue address, and started thinking
                  about what to wear.
                </p>
                <p>Then you notice a line in the ticket announcement:</p>
                <p>
                  <strong><span lang="ko">본인 확인 필수</span> (bonin hwagin pilsu).</strong>
                </p>
                <p>Identity verification required.</p>
                <p>
                  Does that mean you need your passport? What if your friend booked the ticket? And why
                  does your name matter when you&apos;ve already paid?
                </p>
                <p>
                  If you&apos;re attending a K-pop concert in Korea for the first time, these questions are worth answering <strong>before you buy the ticket</strong>, not when you&apos;re standing outside the venue.
                </p>
                <p>Here&apos;s what to look for.</p>
              </section>

              <section id="why-id-checks" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Why do some Korean concerts check your ID?</h2>
                <p>At certain K-pop concerts, buying a ticket isn&apos;t the last step.</p>
                <p>
                  Organizers may check whether the person arriving at the venue is the person who made
                  the reservation.
                </p>
                <p>
                  These checks can help prevent unauthorized ticket transfers, proxy bookings, and
                  ticket scalping.
                </p>
                <p>
                  You might be asked to show identification when collecting your ticket, receiving an
                  entry wristband, or entering the performance area.
                </p>
                <p>But there&apos;s one important thing to understand:</p>
                <p>
                  <strong>Not every concert follows exactly the same process.</strong>
                </p>
                <p>
                  Some use mobile tickets. Others have on-site collection. Certain performances have
                  additional verification requirements for fan-club presales or special benefits.
                </p>
                <p>The official announcement for your specific concert is always the place to start.</p>
              </section>

              <section id="whose-name" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>The first thing to check: whose name is on the ticket?</h2>
                <p>Imagine this situation.</p>
                <p>
                  You&apos;re traveling to Seoul for a concert, but your friend is better at navigating
                  Korean ticketing websites.
                </p>
                <p>They offer to book the ticket using their own account.</p>
                <p>It sounds convenient.</p>
                <p>
                  But if the concert requires the reservation holder and the attendee to be the same
                  person, that arrangement could cause problems at the venue.
                </p>
                <p>
                  For example, an official 2026 JX concert announcement specified that the NOL
                  reservation holder and the actual attendee had to match.
                </p>
                <p>
                  For its fan-club presale ticket pickup, the organizers required the booking details,
                  an accepted ID, and a Weverse membership card. For general-sale pickup, the required
                  documents were the booking details and an accepted ID. The notice also prohibited
                  ticket transfers, including between family members.
                </p>
                <p>That doesn&apos;t mean every Korean concert has identical restrictions.</p>
                <p>
                  It does mean you should check the booking rules before letting someone else buy a
                  ticket in their name.
                </p>
                <aside aria-label="HAEMIL tip" className={tipClass}>
                  <p>
                    <strong>HAEMIL tip:</strong> Before paying, look for the words <strong><span lang="ko">예매자</span> (yemaeja)</strong> and <strong><span lang="ko">관람자</span> (gwallamja)</strong>. They mean the person who booked the ticket and the person attending the show. If the notice says they must match, take that seriously.
                  </p>
                </aside>
              </section>

              <section id="what-id" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What ID should international fans bring?</h2>
                <p>
                  For international visitors, a valid original passport is often the safest document to
                  prepare when an event requires identity verification.
                </p>
                <p>
                  Some concert notices also accept a Korean Residence Card (sometimes called an Alien
                  Registration Card or Certificate of Alien Registration in event notices) for eligible
                  foreign residents.
                </p>
                <p>
                  But don&apos;t assume your driver&apos;s license, national ID card from another
                  country, or a photograph of your passport will be accepted.
                </p>
                <p>Some events explicitly reject photocopies and phone images of identification.</p>
                <p>
                  If the organizer requires a physical ID, showing a picture saved on your phone
                  isn&apos;t the same thing.
                </p>
                <p>Before leaving for the venue, check three details:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Which IDs the concert accepts for non-Korean nationals.</li>
                  <li>Whether the document must be the original physical version.</li>
                  <li>Whether your ticketing account name matches your identification details.</li>
                </ul>
                <p>
                  And check the expiration date. An expired passport may not meet the event&apos;s
                  identification requirements.
                </p>
              </section>

              <section id="booking-vs-venue" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Booking verification and concert-day ID checks aren&apos;t the same thing</h2>
                <p>This is where things can become confusing.</p>
                <p>
                  You might verify your passport while creating or using a ticketing account and assume
                  you&apos;ve already finished everything.
                </p>
                <p>Not necessarily.</p>
                <p>There can be several different kinds of verification.</p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Kinds of verification for K-pop concert tickets</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">Verification</th>
                        <th scope="col" className="p-3 font-semibold">What it means</th>
                      </tr>
                    </thead>
                    <tbody>
                      {verificationTypes.map((row) => (
                        <tr key={row.verification} className="border-t border-[var(--border)] align-top">
                          <th scope="row" className="p-3 font-medium">{row.verification}</th>
                          <td className="p-3 text-[var(--muted)]">{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>Not every concert uses all three.</p>
                <p>
                  For instance, YES24 Ticket&apos;s global site uses a <em>Verified Member Only</em> system for selected performances. Its standard global verification process involves a foreign passport and a live face check. YES24 recommends completing verification at least one or two days before tickets go on sale, rather than waiting until the last minute.
                </p>
                <p>
                  The global ticketing site at ticket.yes24.com is also separate from the regular global
                  YES24 shopping site, so make sure you&apos;re creating an account in the right place.
                </p>
                <p>Meanwhile, some fan-club presales require a separate membership check.</p>
                <p>
                  Many K-pop concerts give eligible fan-club members a chance to book tickets before
                  general sales open. But joining the fan club isn&apos;t always enough. Some concerts
                  require a separate presale application or membership verification within a specific
                  period. Presale gives you an earlier chance to book, not a guaranteed ticket, so check
                  the official notice for deadlines and eligibility.
                </p>
                <p>
                  And even if you&apos;ve completed an online verification step, your concert may still
                  require identification at the venue.
                </p>
                <p>Think of them as different questions:</p>
                <p>
                  <strong>Can you book this ticket?</strong>
                </p>
                <p>
                  <strong>Are you eligible for this presale?</strong>
                </p>
                <p>
                  <strong>Are you the person allowed to use this ticket?</strong>
                </p>
                <p>Make sure you know which questions your concert organizer will ask.</p>
              </section>

              <section id="ticketing-words" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Korean ticketing words that are worth recognizing</h2>
                <p>
                  You don&apos;t have to read every sentence in a Korean ticket announcement perfectly.
                </p>
                <p>A few words can help you spot the details that matter.</p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Korean words in K-pop concert ticket announcements</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">Korean</th>
                        <th scope="col" className="p-3 font-semibold">What it means</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ticketingWords.map((row) => (
                        <tr key={row.korean} className="border-t border-[var(--border)] align-top">
                          <th scope="row" lang="ko" className="p-3 font-medium whitespace-nowrap">{row.korean}</th>
                          <td className="p-3 text-[var(--muted)]">{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>Here&apos;s a practical example.</p>
                <p>
                  If you see <strong><span lang="ko">현장 수령</span> (hyeonjang suryeong)</strong>, don&apos;t assume your ticket will arrive by mail.
                </p>
                <p>It means the ticket is collected at the venue.</p>
                <p>
                  Now check what identification and booking details you need to show before the staff
                  can hand it over.
                </p>
                <p>
                  And if the same notice says <strong lang="ko">대리 수령 불가</strong>, sending a friend to collect it may not be allowed.
                </p>
                <p>A few Korean words can save you from a very uncomfortable surprise.</p>
              </section>

              <section id="at-the-venue" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What happens when you arrive at the concert venue?</h2>
                <p>
                  The process depends on the show, but imagine you&apos;re attending a concert with
                  on-site ticket collection and an ID check.
                </p>
                <p>You reach the venue and find the ticket booth or identity verification area.</p>
                <p>
                  Staff may ask for your booking record and an accepted ID. They compare the information
                  according to the event rules.
                </p>
                <p>After verification, you might receive your ticket or an entry wristband.</p>
                <p>
                  Other concerts use mobile tickets only, but that doesn&apos;t necessarily mean you can
                  skip the on-site identity check. Depending on the event, you may still need to verify
                  your identity through an approved method, such as Face Pass or an ID-check booth, and
                  receive an entry wristband.
                </p>
                <p>
                  The point is that the steps printed in the announcement matter more than what happened
                  at another concert last month.
                </p>
                <aside aria-label="HAEMIL tip" className={tipClass}>
                  <p>
                    <strong>HAEMIL tip:</strong>{" "}Save your booking information somewhere easy to reach, and make sure you can log in to the required ticketing app or website. A screenshot of a reservation number may be useful as a backup reference, but don&apos;t assume a screenshot can replace an official mobile ticket or a live QR code.
                  </p>
                </aside>
                <p>Also, give yourself time.</p>
                <p>
                  Finding the correct booth, waiting in line, and completing verification can take longer
                  than expected.
                </p>
              </section>

              <section id="name-mismatch" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What if your passport name and booking name look different?</h2>
                <p>This is something to check before purchasing.</p>
                <p>Your ticketing account may ask you to enter your name in English.</p>
                <p>
                  Use the same spelling shown on your passport wherever possible, and check the
                  platform&apos;s instructions about name order and formatting.
                </p>
                <p>
                  For example, don&apos;t casually use a nickname if the ticketing site asks for your
                  legal name.
                </p>
                <p>
                  But a difference in name order or formatting doesn&apos;t automatically mean every
                  organizer will reject your entry.
                </p>
                <p>Policies vary.</p>
                <p>
                  If your reservation already has a name discrepancy, contact the official ticketing
                  platform or organizer as soon as possible.
                </p>
                <p>Explain the situation and ask which documents or corrections, if any, are accepted.</p>
                <p>Don&apos;t assume you can simply change the name at the entrance.</p>
                <p>
                  And don&apos;t cancel a valid ticket before checking the event&apos;s cancellation
                  policy and the available options.
                </p>
              </section>

              <section id="resale" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Can you buy a resale ticket from another fan?</h2>
                <p>Be careful here.</p>
                <p>
                  You might see someone offering a ticket through social media, an online community, or
                  a private message.
                </p>
                <p>But possession of a ticket doesn&apos;t always mean you can use it.</p>
                <p>
                  If the concert requires the reservation and attendee details to match, a privately
                  transferred ticket could fail verification.
                </p>
                <p>
                  Some organizers explicitly prohibit unauthorized resale, proxy bookings, or transfers
                  and may cancel tickets connected to those activities.
                </p>
                <p>
                  South Korea strengthened its ticket scalping laws on August 28, 2026. Buying tickets
                  for resale by bypassing ticketing systems, or repeatedly or commercially reselling
                  them above the purchase price without the original seller&apos;s consent, can violate
                  the law. Not every personal ticket transfer is automatically a criminal offense, but a
                  concert&apos;s own no-transfer policy may still leave you with a ticket you cannot use.
                </p>
                <p>
                  Even if a seller sends you a ticket image or booking confirmation, that doesn&apos;t
                  prove the ticket can legally or successfully be transferred to your name.
                </p>
                <p>
                  <strong>The safer starting point is the concert&apos;s officially designated ticketing platform.</strong>
                </p>
                <p>
                  If the organizer offers an authorized transfer or resale process, follow that specific
                  process and its rules.
                </p>
                <p>Otherwise, don&apos;t assume that buying a ticket from someone else guarantees entry.</p>
              </section>

              <section id="before-leaving" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What should you check before leaving for the concert?</h2>
                <p>The night before the show, open the latest official announcement one more time.</p>
                <p>
                  Check whether the ticket collection method or identity verification instructions have
                  changed.
                </p>
                <p>Confirm that you have:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Your valid original ID, if required.</li>
                  <li>Access to your ticketing account and official mobile ticket or reservation record.</li>
                  <li>Any required fan-club membership information.</li>
                  <li>The correct venue, date, and entry or verification time.</li>
                  <li>Enough time to complete the process before the show.</li>
                </ul>
                <p>
                  If you&apos;ve traveled from another country, it&apos;s worth checking these details
                  before setting off rather than discovering a missing document at the ticket booth.
                </p>
              </section>

              <section id="why-it-is-interesting" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What I find interesting about this part of K-pop concerts</h2>
                <p>
                  For international fans, the hardest part of a Korean concert isn&apos;t always
                  understanding the songs or finding the venue.
                </p>
                <p>Sometimes it&apos;s a small administrative detail.</p>
                <p>A name in a reservation.</p>
                <p>A Korean sentence in a long announcement.</p>
                <p>
                  A ticket pickup rule that looked unimportant when you were excited about finally
                  getting a seat.
                </p>
                <p>
                  That&apos;s why I think learning a few Korean ticketing words can be just as useful as
                  learning a fanchant.
                </p>
                <p>It doesn&apos;t make the concert more exciting by itself.</p>
                <p>It helps keep avoidable problems from getting in the way of the excitement.</p>
                <p>
                  And once everything is checked and you&apos;re finally inside, you can focus on the
                  part you came for: the music, the stage, and the people cheering around you.
                </p>
              </section>

              <section id="before-you-buy" className="space-y-4 border-t border-[var(--border)] pt-9 scroll-mt-24">
                <h2 className={h2Class}>Before you buy: one last reminder</h2>
                <p>There isn&apos;t one universal ID-check rule for every K-pop concert in Korea.</p>
                <p>
                  Start with the official event announcement, check the ticketing platform&apos;s
                  requirements, and make sure your booking details are correct.
                </p>
                <p>Bring the documents your particular concert requires.</p>
                <p>If something doesn&apos;t match, contact the official seller before the event.</p>
                <p>A little preparation now can make the day of the concert much easier.</p>
              </section>

              <section aria-labelledby="related-guides" className="space-y-4 border-t border-[var(--border)] pt-9">
                <h2 id="related-guides" className="text-2xl font-semibold md:text-3xl">Keep exploring HAEMIL</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedGuides.map((guide) => (
                    <Link key={guide.href} href={guide.href}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                      {guide.label} →
                    </Link>
                  ))}
                </div>
                <h3 className="pt-4 text-lg font-semibold md:text-xl">Official sources and examples</h3>
                <ul className="list-disc space-y-2 pl-6">
                  {officialSources.map((source) => (
                    <li key={source.href}>
                      <a className={externalClass} href={source.href} target="_blank" rel="noopener noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
