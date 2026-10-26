import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const path = "/kpop/what-is-a-fanchant";
const pageUrl = `${siteUrl}${path}`;
const pageTitle = "What Is a K-pop Fanchant? A Local Guide to 응원법";
const pageDescription =
  "Learn what K-pop fanchants (응원법) are, why fans shout names together, where to find official guides, and how to join in at a show.";

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
  { korean: "응원법", meaning: "Fanchant or cheering guide" },
  { korean: "공식 응원법", meaning: "Official fanchant" },
  { korean: "응원법 영상", meaning: "Fanchant guide video" },
  { korean: "응원 구호", meaning: "Cheering slogan or chant" },
  { korean: "떼창", meaning: "Group singalong" },
  { korean: "응원봉", meaning: "Light stick" },
];

const comparison = [
  {
    fanchant: "Specific words or responses at set moments",
    singalong: "Many people singing lyrics together",
  },
  {
    fanchant: "May include members' names",
    singalong: "Usually follows the song's melody and lyrics",
  },
  {
    fanchant: "May have an official guide",
    singalong: "Can happen spontaneously",
  },
  {
    fanchant: "Often heard during music-show stages",
    singalong: "Common at concerts and other live performances",
  },
];

const relatedGuides = [
  { label: "What Is a Music Show in K-pop?", href: "/kpop/what-is-a-music-show-in-kpop" },
  { label: "What Is a Fancam?", href: "/kpop/what-is-a-fancam" },
  { label: "What Is a Lightstick in K-pop?", href: "/kpop/what-is-a-lightstick-in-kpop" },
];

const externalClass = "font-medium text-[var(--accent)] underline underline-offset-4 hover:opacity-80";
const h2Class = "text-2xl font-semibold leading-tight md:text-3xl";
const tipClass = "rounded-2xl border-l-4 border-[var(--gold)] bg-[var(--card)] p-6 md:p-8";

export default function WhatIsAFanchantPage() {
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
        { "@type": "Thing", name: "K-pop fanchant" },
        { "@type": "Thing", name: "K-pop fan culture" },
        { "@type": "Thing", name: "K-pop" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "K-pop", item: `${siteUrl}/kpop` },
        { "@type": "ListItem", position: 3, name: "What Is a K-pop Fanchant?", item: pageUrl },
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
                What Is a K-pop Fanchant? Why Fans Shout Together During Performances
              </h1>
            </header>

            <div className="mx-auto max-w-3xl space-y-11 px-6 py-9 text-base leading-8 md:mx-0 md:max-w-[62rem] md:px-12 md:py-12 md:text-lg md:leading-9">
              <section aria-label="Introduction" className="space-y-5">
                <p>You&apos;re watching a K-pop performance.</p>
                <p>
                  The song starts. The idols begin singing. Then, suddenly, you hear hundreds of
                  people shouting the same names at exactly the same time.
                </p>
                <p>Nobody seems confused about when to start or stop.</p>
                <p>
                  If you&apos;re new to K-pop, you might wonder:{" "}
                  <em>How does everyone know what to shout?</em>
                </p>
                <p>
                  The answer is <strong><span lang="ko">응원법</span> (eungwonbeop)</strong>, usually
                  called a <strong>fanchant</strong> in English.
                </p>
                <p>
                  And it&apos;s one of those small details that makes watching a Korean music-show
                  performance feel different from just listening to the song.
                </p>
              </section>

              <section id="what-is-a-fanchant" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What is a K-pop fanchant?</h2>
                <p>
                  A fanchant is a set of words or responses fans shout or sing at particular moments
                  during a performance.
                </p>
                <p>
                  It might involve calling out the members&apos; names, repeating a short phrase,
                  responding to a line, or singing along during a particular section.
                </p>
                <p>
                  The important part isn&apos;t how loud the fans are. It&apos;s that people know
                  when their part comes.
                </p>
                <p>
                  In Korean, <strong><span lang="ko">응원</span> (eungwon)</strong> means cheering or
                  support, while <strong><span lang="ko">법</span> (beop)</strong> can mean a method
                  or way of doing something.
                </p>
                <p>
                  Put together, <span lang="ko">응원법</span> means a way of cheering.
                </p>
                <p>
                  A fanchant is different from simply shouting because you&apos;re excited. It
                  follows a pattern connected to the song.
                </p>
                <p>
                  But not every song has an official fanchant, and not every audience follows one in
                  exactly the same way.
                </p>
              </section>

              <section id="member-names" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Why do fans shout the members&apos; names?</h2>
                <p>
                  One of the most recognizable types of fanchant involves calling the members&apos;
                  names in rhythm.
                </p>
                <p>
                  If you&apos;ve watched a BTS performance, you may have heard fans calling their
                  names in a familiar sequence.
                </p>
                <p>It can sound like the crowd is introducing the group while the music is playing.</p>
                <p>
                  For someone who doesn&apos;t know the group, it might sound strangely formal. For
                  fans, it&apos;s part of the shared rhythm of supporting the members.
                </p>
                <p>
                  Member-name chants are especially memorable because they&apos;re easy to recognize
                  even when you don&apos;t understand the song&apos;s lyrics.
                </p>
                <p>
                  Still, <strong>not every fanchant is a list of names</strong>.
                </p>
                <p>
                  Some guides tell fans to sing along with a particular part of the chorus. Others use
                  a short response or a group name.
                </p>
                <p>The pattern depends on the song and the official guide, if one exists.</p>
              </section>

              <section id="official-fanchant" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Who creates an official fanchant?</h2>
                <p>This is something that can surprise new international fans.</p>
                <p>
                  You might imagine that fans spontaneously invent every chant they use. Sometimes
                  fans do create their own cheers, but many K-pop artists also release official
                  cheering guides.
                </p>
                <p>
                  These may be published through an entertainment company&apos;s website, the
                  group&apos;s official community, or an official video channel.
                </p>
                <p>
                  For example, BTS has published song-specific fan chant guides on Weverse, with
                  instructions distinguishing parts to shout from parts to sing along with.
                </p>
                <p>
                  That doesn&apos;t mean fans always follow every instruction perfectly. A live crowd
                  is still a crowd.
                </p>
                <p>But it does explain why a music-show audience can sound unusually coordinated.</p>
                <p>They&apos;re not necessarily guessing. They may have practiced.</p>
              </section>

              <section id="find-the-fanchant" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>How to find the official fanchant for a K-pop song</h2>
                <p>
                  If you want to learn an <span lang="ko">응원법</span>, start with the artist&apos;s
                  official channels.
                </p>
                <p>
                  To find an official guide, search the group name and song title with{" "}
                  <span lang="ko">응원법</span>, <span lang="ko">공식 응원법</span>, or{" "}
                  <span lang="ko">응원법 영상</span>. The table below also includes related Korean fan
                  terms you may encounter.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Korean search terms for K-pop fanchants</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">Search term</th>
                        <th scope="col" className="p-3 font-semibold">Meaning</th>
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
                <p>For example, you could search:</p>
                <p>
                  <strong lang="ko">BTS 응원법</strong>
                </p>
                <p>Or add the title of a specific song.</p>
                <p>If you find several results, check who posted them.</p>
                <p>
                  An official channel&apos;s guide and a fan-made tutorial aren&apos;t necessarily the
                  same thing. Fan tutorials can be useful, especially when they explain Korean
                  pronunciation, but the official notice is a better starting point for verifying the
                  intended pattern.
                </p>
                <aside aria-label="HAEMIL tip" className={tipClass}>
                  <p>
                    <strong>HAEMIL tip:</strong>{" "}Don&apos;t try to memorize an entire guide
                    immediately. Listen to the song first, then focus on one repeated response or a
                    name chant. Once you know where it fits, the rest becomes easier to follow.
                  </p>
                </aside>
              </section>

              <section id="fanchant-vs-ttechang" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>
                  Fanchant vs. <span lang="ko">떼창</span>: Are they the same thing?
                </h2>
                <p>Not exactly.</p>
                <p>
                  You may also hear the Korean word{" "}
                  <strong><span lang="ko">떼창</span> (ttechang)</strong>.
                </p>
                <p>
                  <span lang="ko">떼창</span> means a group singalong — the kind of moment when lots
                  of people sing the same lyrics together.
                </p>
                <p>
                  Imagine a concert where the artist stops singing for a moment and the audience
                  carries the chorus.
                </p>
                <p>
                  That&apos;s a <span lang="ko">떼창</span> moment.
                </p>
                <p>
                  A fanchant, on the other hand, is usually a more specific cheering pattern tied to
                  particular parts of a song.
                </p>
                <p>The two can overlap, but they aren&apos;t interchangeable.</p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Fanchant (응원법) compared with group singalong (떼창)</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">
                          Fanchant <span className="whitespace-nowrap">(<span lang="ko">응원법</span>)</span>
                        </th>
                        <th scope="col" className="p-3 font-semibold">
                          Group singalong <span className="whitespace-nowrap">(<span lang="ko">떼창</span>)</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row) => (
                        <tr key={row.fanchant} className="border-t border-[var(--border)]">
                          <td className="p-3">{row.fanchant}</td>
                          <td className="p-3 text-[var(--muted)]">{row.singalong}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  Both can make the audience feel like part of the performance, but they work in
                  slightly different ways.
                </p>
              </section>

              <section id="if-you-dont-know" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What happens if you don&apos;t know the fanchant?</h2>
                <p>Nothing bad.</p>
                <p>
                  You don&apos;t need to know every word to enjoy a K-pop concert or music-show
                  performance.
                </p>
                <p>
                  And you definitely don&apos;t need to prove that you&apos;re a real fan by
                  memorizing a guide.
                </p>
                <p>
                  You can listen, clap where appropriate, or join the parts you recognize, while
                  following the venue&apos;s rules.
                </p>
                <p>
                  Some people enjoy learning the complete <span lang="ko">응원법</span> before a
                  show. Others would rather focus on the performance.
                </p>
                <p>Either is fine.</p>
                <p>
                  If you&apos;re attending a music-show recording or a special fan event, check the
                  organizer&apos;s latest audience instructions. Different events may have rules about
                  cheering, recording, light sticks, or other items.
                </p>
              </section>

              <section id="fanchant-in-fancams" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Why does the fanchant sound so different in a fancam?</h2>
                <p>Here&apos;s something interesting to try.</p>
                <p>
                  Watch a full-stage video of a K-pop song, then watch a member-focused fancam from
                  another performance of the same song.
                </p>
                <p>In some recordings, you may notice the fan voices more clearly.</p>
                <p>
                  You might hear individual names or short responses that were less obvious in the
                  main performance video.
                </p>
                <p>This can make the song feel different even though the choreography hasn&apos;t changed.</p>
                <p>
                  A fancam follows one member. The fanchant reminds you that a whole audience is
                  responding around that member.
                </p>
                <p>
                  It&apos;s a nice example of how a K-pop stage has more than one story happening at
                  once.
                </p>
              </section>

              <section id="why-it-is-interesting" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>What I find interesting about Korean fanchants</h2>
                <p>
                  To me, the most interesting part of <span lang="ko">응원법</span>{" "}isn&apos;t that
                  fans can memorize a long sequence of names.
                </p>
                <p>It&apos;s the moment when individual voices become one sound.</p>
                <p>
                  A K-pop stage is carefully prepared by the performers. But the audience has its own
                  part to play, even when that part is only a few words.
                </p>
                <p>
                  And there&apos;s something charming about how a fan can listen to the same song
                  alone through headphones, then hear it surrounded by voices responding at exactly
                  the right moment.
                </p>
                <p>The recording hasn&apos;t changed.</p>
                <p>The feeling has.</p>
                <p>
                  That&apos;s why I think learning even one small fanchant can make a familiar
                  performance feel new.
                </p>
                <p>
                  You aren&apos;t just recognizing the melody anymore. You&apos;re starting to
                  recognize how Korean fans participate in it.
                </p>
              </section>

              <section id="before-your-first-show" className="space-y-4 border-t border-[var(--border)] pt-9 scroll-mt-24">
                <h2 className={h2Class}>Before your first K-pop show</h2>
                <p>
                  If you want to try an <span lang="ko">응원법</span>, find the artist&apos;s official
                  guide, listen to the song, and learn a few recognizable responses.
                </p>
                <p>If you don&apos;t know every word, don&apos;t worry.</p>
                <p>The point isn&apos;t to pass a test.</p>
                <p>
                  It&apos;s to enjoy the music and understand a little more of what&apos;s happening
                  between the stage and the audience.
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
                  <strong>Official example:</strong>{" "}
                  <a className={externalClass}
                    href="https://weverse.io/bts/notice/34599"
                    target="_blank" rel="noopener noreferrer">BTS Fan Chant Guide — Weverse</a>
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
