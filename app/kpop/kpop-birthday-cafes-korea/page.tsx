import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const path = "/kpop/kpop-birthday-cafes-korea";
const pageUrl = `${siteUrl}${path}`;
const pageTitle = "K-pop Birthday Cafes in Korea: How to Find and Visit One";
const pageDescription =
  "Want to visit a K-pop birthday cafe in Korea? Learn how to find fan-run events, read Korean notices, understand freebies, and enjoy your first visit.";

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

const searchTerms = [
  { korean: "카리나 생일카페", meaning: "Karina birthday café" },
  { korean: "카리나 생카", meaning: "Karina birthday café (short form)" },
  { korean: "카리나 컵홀더", meaning: "Karina cup-sleeve event" },
  { korean: "생일카페 서울", meaning: "Birthday cafés in Seoul" },
];

const noticeWords = [
  { korean: "생일카페 / 생카", meaning: "Birthday café" },
  { korean: "장소", meaning: "Venue or location" },
  { korean: "일정 / 기간", meaning: "Event dates or period" },
  { korean: "운영시간", meaning: "Operating hours" },
  { korean: "기본 특전", meaning: "Basic event gifts or benefits" },
  { korean: "선착순", meaning: "First come, first served" },
  { korean: "소진", meaning: "Stock has run out" },
  { korean: "예약", meaning: "Reservation" },
  { korean: "대기", meaning: "Waiting or queue" },
  { korean: "조기 종료 / 조기 마감", meaning: "Early finish or early closing" },
  { korean: "1인 1음료", meaning: "One drink per person" },
];

const relatedGuides = [
  { label: "What Does Bias Mean in K-pop?", href: "/kpop/what-does-bias-mean" },
  { label: "What Is a K-pop Photocard?", href: "/kpop/what-is-a-photocard" },
  { label: "Naver Map vs. KakaoMap for Korea Travel", href: "/travel/naver-map-kakaomap-korea-travel-guide" },
];

const externalClass = "font-medium text-[var(--accent)] underline underline-offset-4 hover:opacity-80";
const h2Class = "text-2xl font-semibold leading-tight md:text-3xl";
const h3Class = "text-xl font-semibold leading-snug md:text-2xl";
const tipClass = "rounded-2xl border-l-4 border-[var(--gold)] bg-[var(--card)] p-6 md:p-8";

export default function KpopBirthdayCafesKoreaPage() {
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
        { "@type": "Thing", name: "K-pop birthday cafés" },
        { "@type": "Thing", name: "K-pop fan culture" },
        { "@type": "Thing", name: "Travel in Korea" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "K-pop", item: `${siteUrl}/kpop` },
        { "@type": "ListItem", position: 3, name: "K-pop Birthday Cafes in Korea", item: pageUrl },
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
                K-pop Birthday Cafes in Korea: How to Find One and What to Expect
              </h1>
            </header>

            <div className="mx-auto max-w-3xl space-y-11 px-6 py-9 text-base leading-8 md:mx-0 md:max-w-[62rem] md:px-12 md:py-12 md:text-lg md:leading-9">
              <section aria-label="Introduction" className="space-y-5">
                <p>Outside, it might look like an ordinary café.</p>
                <p>
                  Step inside during the right week, though, and you could find an idol&apos;s
                  face on the walls, photo cards arranged near the counter, and a special cup
                  sleeve waiting beside someone&apos;s iced drink.
                </p>
                <p>The idol isn&apos;t there. The fans are.</p>
                <p>
                  Welcome to a <strong><span lang="ko">생일카페</span> (saengil kape)</strong>,
                  usually shortened to <strong><span lang="ko">생카</span> (saengka)</strong> in
                  Korean fan conversations.
                </p>
                <p>
                  If you&apos;re visiting Korea and want to experience one, the tricky part
                  isn&apos;t ordering coffee. It&apos;s finding the right event, reading the
                  Korean announcement, and knowing what you&apos;re supposed to do when you
                  arrive.
                </p>
                <p>Here&apos;s how it works.</p>
              </section>

              <section id="what-is-a-birthday-cafe" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What exactly is a K-pop birthday cafe?</h2>
                <p>
                  A birthday café is a temporary event organized by fans to celebrate an
                  idol&apos;s birthday. Organizers work with a regular café to decorate the space
                  and prepare themed items for visitors.
                </p>
                <p>
                  You might see birthday banners, photos, handwritten messages, cup sleeves,
                  postcards, or little displays inspired by the idol&apos;s songs and image.
                </p>
                <p>
                  The café is still a café. You order something, enjoy the space, and sometimes
                  receive fan-made items with your purchase.
                </p>
                <p>
                  These events are generally organized by fans rather than the idol&apos;s
                  entertainment company. That distinction matters: the decorations and goods
                  reflect how the organizers want to celebrate the artist, not necessarily an
                  official promotion.
                </p>
                <p>
                  And a birthday café is not a meet-and-greet. You shouldn&apos;t expect the idol
                  to appear.
                </p>
              </section>

              <section id="how-to-find" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>How to find a birthday cafe in Korea</h2>
                <p>
                  Here&apos;s one useful piece of local knowledge:{" "}
                  <strong>search in Korean, even if you&apos;re planning your trip in English.</strong>
                </p>
                <p>
                  A normal map search might show the café, but not the temporary birthday event
                  happening inside it.
                </p>
                <p>
                  Fan organizers often share event notices on X, and some also use Instagram. Fan-event listing
                  services can also help you discover events, but the organizer&apos;s latest
                  announcement is the one to check before visiting.
                </p>
                <p>Try searching for your idol&apos;s Korean name with these words:</p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Korean searches for birthday café events</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">Korean search</th>
                        <th scope="col" className="p-3 font-semibold">What it means</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchTerms.map((row) => (
                        <tr key={row.korean} className="border-t border-[var(--border)]">
                          <th scope="row" lang="ko" className="p-3 font-medium">{row.korean}</th>
                          <td className="p-3 text-[var(--muted)]">{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  Karina is just an example. Replace her name with your favorite idol&apos;s
                  Korean name.
                </p>
                <p>When you find an event poster, don&apos;t stop at the first pretty image.</p>
                <p>
                  Check the year, event dates, café address, and the organizer&apos;s most recent
                  update. Old event posters can remain searchable long after the celebration is
                  over.
                </p>
                <aside aria-label="HAEMIL tip" className={tipClass}>
                  <p>
                    <strong>HAEMIL tip:</strong> Save both the event notice and the Korean street
                    address. Search that address in Naver Map or KakaoMap before leaving.
                    It&apos;s much more useful than trying to remember the café from a social
                    media photo.
                  </p>
                </aside>
                <p>
                  Hongdae and nearby areas are well-known for birthday café events, but events
                  can happen elsewhere in Seoul and other Korean cities too.
                </p>
              </section>

              <section id="read-a-notice" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>How to read a Korean birthday cafe notice</h2>
                <p>
                  You don&apos;t need to speak fluent Korean to understand the most important
                  parts of an event announcement.
                </p>
                <p>A few words will save you a lot of confusion.</p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Korean words in birthday café notices</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">Korean</th>
                        <th scope="col" className="p-3 font-semibold">Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticeWords.map((row) => (
                        <tr key={row.korean} className="border-t border-[var(--border)]">
                          <th scope="row" lang="ko" className="p-3 font-medium">{row.korean}</th>
                          <td className="p-3 text-[var(--muted)]">{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  For example, if a notice says <strong lang="ko">선착순 특전</strong>, it means an
                  additional gift is available to early visitors, subject to the organizer&apos;s
                  conditions.
                </p>
                <p>
                  If a later notice says <strong lang="ko">특전 소진</strong>, those gifts have run
                  out. The café might still be serving drinks, but you shouldn&apos;t assume the
                  event goods are still available.
                </p>
                <p>
                  One more thing: <strong lang="ko">1인 1음료</strong> is a rule you may encounter,
                  not a universal rule for every birthday café. Always follow that event&apos;s own
                  instructions.
                </p>
              </section>

              <section id="your-visit" className="space-y-6 scroll-mt-24">
                <h2 className={h2Class}>What happens when you actually visit?</h2>
                <p>
                  Imagine you&apos;ve found a birthday café notice, checked the address, and
                  arrived during the event hours.
                </p>
                <p>Here&apos;s a realistic way the visit might unfold.</p>

                <div className="space-y-4">
                  <h3 className={h3Class}>1. Check the entrance before walking in</h3>
                  <p>
                    There may be a poster on the door, people waiting outside, or a small sign
                    explaining the ordering process.
                  </p>
                  <p>
                    Some events welcome walk-ins. Others may use reservations, numbered queue
                    tickets, or special arrangements for busy periods.
                  </p>
                  <p>Don&apos;t assume the rules are identical at every café.</p>
                </div>

                <div className="space-y-4">
                  <h3 className={h3Class}>2. Order the drink or set listed in the notice</h3>
                  <p>At many events, ordering an eligible drink comes with a basic gift set.</p>
                  <p>That might include a decorated cup sleeve, a photo card, a postcard, or a sticker.</p>
                  <p>
                    But not every item on the promotional poster is necessarily included in that
                    drink price.
                  </p>
                  <p>Read the conditions before ordering, especially if you came for a specific collectible.</p>
                </div>

                <div className="space-y-4">
                  <h3 className={h3Class}>3. Collect your event gifts</h3>
                  <p>
                    Depending on the café, the staff might hand you the items with your order, or
                    an event organizer might distribute them separately.
                  </p>
                  <p>
                    There may also be a lucky draw or additional merchandise available under
                    different conditions.
                  </p>
                  <p>If you&apos;re unsure, it&apos;s completely reasonable to ask.</p>
                  <p lang="ko" className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 font-semibold">
                    음료 주문하면 특전 받을 수 있나요?
                  </p>
                  <p>&quot;Can I receive the event gifts if I order a drink?&quot;</p>
                  <p>You can show the Korean sentence on your phone if speaking is difficult.</p>
                </div>

                <div className="space-y-4">
                  <h3 className={h3Class}>4. Look around and enjoy the little details</h3>
                  <p>
                    Take a look at the photographs, the colors, and the tiny references in the
                    decorations.
                  </p>
                  <p>
                    Sometimes the interesting part is not the most expensive display. It might be
                    an inside joke written on a banner, a familiar lyric, or a particular stage
                    photo the organizers chose.
                  </p>
                  <p>
                    That is where a birthday café starts to feel different from ordinary idol
                    merchandise.
                  </p>
                  <p>
                    You&apos;re seeing an artist through the tastes and memories of the fans
                    celebrating them.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className={h3Class}>5. Take photos without making the space uncomfortable</h3>
                  <p>
                    Taking pictures of the decorations may be part of the experience, but ask
                    before photographing other visitors, staff, or areas with special rules.
                  </p>
                  <p>If there is a line for a photo spot, don&apos;t hold it up unnecessarily.</p>
                  <p>Remember that the space is still a working café.</p>
                </div>
              </section>

              <section id="gifts" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Basic gifts, limited gifts, and lucky draws aren&apos;t the same thing</h2>
                <p>
                  This is one of the easiest things to misunderstand when looking at a birthday
                  café poster.
                </p>
                <p>
                  <strong>Basic gifts (<span lang="ko">기본 특전</span>)</strong> are the items
                  included when you meet the stated order conditions. A cup sleeve and a printed
                  card might be part of this set.
                </p>
                <p>
                  <strong>First-come gifts (<span lang="ko">선착순 특전</span>)</strong> are limited
                  extras. They may be available only to a certain number of visitors, even while
                  the basic event continues.
                </p>
                <p>
                  <strong>Lucky draws (<span lang="ko">럭키드로우</span>)</strong> involve a random
                  result. An event may require a qualifying purchase, a separate payment, or
                  another condition to participate.
                </p>
                <p>
                  <strong>Additional merchandise (<span lang="ko">굿즈</span>)</strong> may be sold
                  separately rather than given away.
                </p>
                <p>
                  A poster can show all four together, so look at the labels rather than assuming
                  everything pictured is free.
                </p>
                <p>
                  And if you arrive after a limited gift has run out, it doesn&apos;t automatically
                  mean your visit is ruined. The decorations and the shared birthday atmosphere can
                  still be worth enjoying.
                </p>
              </section>

              <section id="morning-check" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What should you check on the morning of your visit?</h2>
                <p>Before getting on the subway, look for one last announcement from the event organizer.</p>
                <p>Check whether:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>The café is still running the event that day.</li>
                  <li>The opening hours or queue rules have changed.</li>
                  <li>The gift you want is still available.</li>
                  <li>Reservations or purchase conditions have been updated.</li>
                </ul>
                <p>
                  It&apos;s a small habit, but it can save you a trip to a café where the event has
                  already ended.
                </p>
                <aside aria-label="HAEMIL tip" className={tipClass}>
                  <p>
                    <strong>HAEMIL tip:</strong> If you&apos;re visiting several birthday cafés in
                    one day, prioritize the event with the most limited item or the strictest
                    schedule. Then plan the rest around café locations and opening times.
                  </p>
                </aside>
              </section>

              <section id="visit-alone" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Is it okay to visit alone or if you&apos;re not a big fan?</h2>
                <p>
                  Yes. You don&apos;t have to know every member&apos;s birthday, own a light stick,
                  or recognize every song to appreciate a fan-organized celebration.
                </p>
                <p>
                  Some visitors go because they love the artist. Others are curious about Korean
                  fan culture or simply notice a beautiful event while exploring a neighborhood.
                </p>
                <p>
                  Just be respectful of the people who organized it and follow the café&apos;s
                  visitor rules.
                </p>
                <p>
                  Going alone is fine too. You can order your drink, enjoy the decorations, take a
                  few photos where permitted, and leave whenever you&apos;re ready.
                </p>
                <p>You don&apos;t need to perform your fandom for anyone.</p>
              </section>

              <section id="why-korean" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What makes birthday cafes feel so Korean?</h2>
                <p>What I find interesting about birthday cafés isn&apos;t just the merchandise.</p>
                <p>It&apos;s the way fans turn an ordinary place into a shared celebration.</p>
                <p>
                  A café may have been serving the same drinks yesterday. Today, a few carefully
                  chosen photos and a fan-made banner give it a completely different meaning.
                </p>
                <p>
                  There is also a kind of creativity in the details. Fans choose a theme, decide
                  which image of an idol they want to celebrate, and create something other fans
                  can recognize.
                </p>
                <p>
                  To me, that is one of the more interesting sides of Korean fan culture: affection
                  becomes something you can actually visit, even when the person being celebrated
                  is nowhere nearby.
                </p>
                <p>You don&apos;t need a concert ticket to see it.</p>
                <p>
                  Sometimes, all you need is the correct Korean address, an event notice, and a cup
                  of coffee.
                </p>
              </section>

              <section id="before-you-go" className="space-y-4 border-t border-[var(--border)] pt-9 scroll-mt-24">
                <h2 className={h2Class}>Before you go: a quick reminder</h2>
                <p>
                  Find the latest organizer notice. Check the correct date and venue. Understand the
                  drink and gift conditions. Recheck stock and queue updates on the day.
                </p>
                <p>
                  Then enjoy the café for what it is: a temporary little space created by fans who
                  wanted to celebrate someone together.
                </p>
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
                <p className="pt-2">
                  <strong>Further reading:</strong>{" "}
                  <a className={externalClass}
                    href="https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=862&vcontsId=197902"
                    target="_blank" rel="noopener noreferrer">VISITKOREA — Hongdae Birthday Café Tour</a>
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
