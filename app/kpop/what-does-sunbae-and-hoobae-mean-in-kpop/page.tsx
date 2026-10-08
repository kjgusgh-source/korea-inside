import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://haemilkorea.com";
const path = "/kpop/what-does-sunbae-and-hoobae-mean-in-kpop";
const pageUrl = `${siteUrl}${path}`;
const pageTitle = "Sunbae vs Hoobae: What These Korean Words Really Mean";
const pageDescription =
  "What do sunbae and hoobae mean in Korean? A local explains seniority through school, work, military life, and K-pop — and why age isn't the whole story.";

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

const terms = [
  { korean: "선배", label: "Sunbae", detail: "Someone who started before you in the same school or field." },
  { korean: "후배", label: "Hoobae", detail: "Someone who joined or started later." },
  { korean: "선배님", label: "Sunbaenim", detail: "A respectful way to address a sunbae." },
];

const workplaceTerms = [
  { term: "선배 · 후배", meaning: "Sunbae / hoobae", basis: "Who started earlier or later" },
  { term: "상사", meaning: "Sangsa · superior", basis: "Position at work" },
  { term: "사수", meaning: "Sasu · informal trainer", basis: "Who guides you through the job" },
  { term: "대리", meaning: "Daeri · assistant manager", basis: "An organizational job title" },
];

const relatedGuides = [
  { label: "What Does Maknae Mean?", href: "/kpop/what-is-maknae" },
  { label: "What Does Debut Mean in K-pop?", href: "/kpop/what-does-debut-mean-in-kpop" },
  { label: "What Is a Rookie Group?", href: "/kpop/what-is-a-rookie-group-in-kpop" },
  { label: "Korean Age Explained", href: "/expressions/korean-age" },
  { label: "What Is Nunchi?", href: "/expressions/nunchi" },
  { label: "Who Is CORTIS?", href: "/kpop/who-is-cortis" },
  { label: "K-pop Glossary", href: "/kpop/glossary" },
];

const externalClass = "font-medium text-[var(--accent)] underline underline-offset-4 hover:opacity-80";

export default function SunbaeHoobaePage() {
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
        { "@type": "Thing", name: "Sunbae and hoobae" },
        { "@type": "Thing", name: "Korean seniority culture" },
        { "@type": "Thing", name: "K-pop terminology" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "K-pop", item: `${siteUrl}/kpop` },
        { "@type": "ListItem", position: 3, name: "Sunbae vs Hoobae", item: pageUrl },
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
                Korean culture through K-pop · A local take
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
                Sunbae vs Hoobae: What These Korean Words Really Mean
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                You may have heard an idol say “sunbaenim.” Here is what it means, and how
                seniority felt to me at school, at work, and during military service in Korea.
              </p>
            </header>

            <div className="mx-auto max-w-3xl space-y-11 px-6 py-9 text-base leading-8 md:mx-0 md:max-w-[62rem] md:px-12 md:py-12 md:text-lg md:leading-9">
              <section aria-label="Quick answer" className="space-y-5">
                <p>
                  If you watch K-pop interviews or variety shows, you have probably heard an
                  idol call another artist <em>sunbaenim</em> (선배님). Maybe you have wondered
                  why they say it, especially when the person they are talking to is younger.
                </p>
                <p>
                  Here is the short answer: <strong>sunbae</strong> (선배) means someone who
                  started before you in the same school or field. <strong>Hoobae</strong> (후배)
                  means someone who came after you. Adding <em>-nim</em> (님) makes
                  <em> sunbaenim</em> a respectful form of address.
                </p>
                <p>
                  That is the definition. What these relationships feel like in real life is
                  another story. I grew up in Korea, went through school and military service,
                  and worked at a Korean company. They each felt a little different.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {terms.map((term) => (
                    <div key={term.korean} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                      <p className="text-2xl font-semibold">{term.korean}</p>
                      <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{term.label}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{term.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="meaning" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">What do sunbae and hoobae mean?</h2>
                <p>
                  The National Institute of Korean Language’s <a className={externalClass}
                  href="https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=66306"
                  target="_blank" rel="noopener noreferrer">dictionary entry for 선배</a>{" "}
                  describes someone who started earlier in the same field, or entered the same
                  school before you. Its <a className={externalClass}
                  href="https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=73247"
                  target="_blank" rel="noopener noreferrer">entry for 후배</a> describes
                  the person who came later.
                </p>
                <p>
                  You might also see these words written as <em>seonbae</em> and <em>hubae</em>.
                  Those follow the official Korean romanization rules; <em>sunbae</em> and
                  <em> hoobae</em> are spellings you will often see in English-language fan discussions.
                </p>
                <p>
                  One thing worth remembering: <strong>being someone’s sunbae does not
                  automatically make you their boss.</strong> They might simply have been in
                  that field longer.
                </p>
              </section>

              <section id="age" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Can someone younger be your sunbae?</h2>
                <p>
                  Yes. Imagine you join a university club at 22. Another member is 20, but
                  they joined the club a year before you.
                </p>
                <p>
                  Even though they’re younger than you, they’re your sunbae in that club
                  because they joined earlier and have been a member longer.
                </p>
                <p>
                  Being a sunbae in this situation is about how long you’ve been part of the
                  club, not how old you are.
                </p>
                <p>
                  Age still matters in Korean social situations. It is just not the same thing
                  as seniority. How people actually speak to each other may depend on their
                  relationship, how well they know each other, and the setting. There is no
                  one rule that answers every situation. If Korean age itself is confusing,
                  our <Link className={externalClass} href="/expressions/korean-age">Korean age guide</Link>{" "}
                  helps with that part.
                </p>
              </section>

              <section id="school" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">What it felt like at school</h2>
                <p>
                  I grew up in a small town in Korea, where people tended to know each other,
                  or at least know someone in common.
                </p>
                <p>
                  Manners were a big deal while I was growing up. Even with someone just one
                  year ahead of me at school, I was careful to be polite. To be honest, I found
                  seniors a little scary back then.
                </p>
                <p>
                  It was not because they had threatened me or done anything wrong. Just being
                  around them could feel intimidating. Because the town was small and people
                  seemed connected, I worried that getting on the wrong side of one senior
                  could make things awkward with other seniors too.
                </p>
                <p>
                  Looking back, I do not know whether that would really have happened. But as
                  a teenager, that was how it felt. Someone who grew up elsewhere or went to
                  a different school might remember their seniors very differently.
                </p>
              </section>

              <section id="work" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">At work, job titles add another layer</h2>
                <p>
                  In a Korean office, people do not necessarily call each other sunbae and
                  hoobae all day. Job titles are often more useful.
                </p>
                <p>
                  I used to work as a <em>daeri</em> (대리), a job title often translated as
                  assistant manager. Some employees in more junior positions were older than
                  me, but they still called me <em>daeri-nim</em> (대리님) out of respect for
                  my position. I was polite to them too, because they were older.
                </p>
                <p>
                  For me, respect for someone’s position and respect for their age could exist
                  side by side. A higher job title did not mean I could ignore someone’s age.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full min-w-[520px] border-collapse text-left text-sm md:text-base">
                    <caption className="sr-only">Common Korean workplace terms</caption>
                    <thead className="bg-[var(--card)]">
                      <tr>
                        <th scope="col" className="p-3 font-semibold">Korean</th>
                        <th scope="col" className="p-3 font-semibold">English guide</th>
                        <th scope="col" className="p-3 font-semibold">What matters</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workplaceTerms.map((term) => (
                        <tr key={term.term} className="border-t border-[var(--border)]">
                          <th scope="row" className="p-3 font-medium">{term.term}</th>
                          <td className="p-3">{term.meaning}</td>
                          <td className="p-3 text-[var(--muted)]">{term.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  Your boss can be younger than you. Someone who joined first might hold a
                  lower job title. The person training you, informally called a <em>sasu</em>{" "}
                  (사수) in some workplaces, might not be your manager either.
                </p>
              </section>

              <section id="military" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">The military has its own seniority culture</h2>
                <p>
                  Most Korean men are required to complete military service, with exceptions
                  and different service arrangements. People do not all enlist at the same
                  age, so a younger soldier can be someone else’s <em>seonim</em> (선임),
                  or senior soldier. The soldier who comes later is a <em>huim</em> (후임),
                  or junior soldier. In that relationship, age does not decide who is senior.
                </p>
                <p>
                  The way soldiers spoke to one another made that especially clear when I
                  served. Senior soldiers commonly used <em>banmal</em> (반말), or casual
                  speech, with juniors. Juniors used much more formal speech when addressing
                  seniors. We often called it the <em>danakka</em> (다나까) style: expressions
                  like “알겠습니다” or “알겠습니까?” rather than an everyday polite “-요” ending.
                </p>
                <p>
                  Military language has been changing, although that does not mean every
                  unit speaks the same way today. A <a className={externalClass}
                  href="https://www.korean.go.kr/nkview/nklife/2018_1/28_0103.pdf"
                  target="_blank" rel="noopener noreferrer">2018 article published by
                  the National Institute of Korean Language</a> describes the pressure
                  around strict military speech and discussions about using more everyday
                  polite forms.
                </p>
                <p>
                  Military seniority also exists alongside official rank and the chain of
                  command. Respecting a senior does not mean accepting bullying or unfair
                  orders. Still, this is one of the clearest ways to see how age and seniority
                  can differ in Korea.
                </p>
              </section>

              <section id="kpop" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Why K-pop idols say sunbaenim</h2>
                <p>
                  In K-pop, the word often comes up when idols speak about artists who
                  <Link className={externalClass} href="/kpop/what-does-debut-mean-in-kpop"> debuted</Link>{" "}
                  earlier or have worked in the industry longer. It is a way of acknowledging
                  someone’s experience, not necessarily a sign that they know each other well.
                </p>
                <p>
                  Take BoA, who debuted in 2000. During her 20th-anniversary press event,
                  she called veteran singer Na Hoon-a <em>sunbaenim</em> while discussing
                  what she had learned from watching his performance
                  (<a className={externalClass} href="https://www.yna.co.kr/view/AKR20201201114000005"
                  target="_blank" rel="noopener noreferrer">Yonhap News</a>).
                  In 2022, Yuna from the rookie group CSR called BoA <em>sunbaenim</em>{" "}
                  when naming her as a role model
                  (<a className={externalClass} href="https://www.nocutnews.co.kr/news/5793840"
                  target="_blank" rel="noopener noreferrer">CBS NoCut News</a>).
                  BoA can be a senior to one artist and a junior to another.
                </p>
                <p>
                  At the 2025 debut showcase for <Link className={externalClass}
                  href="/kpop/who-is-cortis">CORTIS</Link>, Martin spoke about having
                  worked on music for senior artists at HYBE before finally standing on
                  stage with his own group
                  (<a className={externalClass} href="https://www.hankyung.com/article/202508186044H"
                  target="_blank" rel="noopener noreferrer">Korea Economic Daily</a>).
                </p>
                <p>
                  That kind of respect feels familiar to me. Artists do not need to work at
                  the same company to recognize someone who started in the same industry
                  earlier. But their personal relationship is another question, and we
                  cannot tell how close they are from the word <em>sunbaenim</em> alone.
                </p>
              </section>

              <section id="relationships" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">The good side and the difficult side</h2>
                <p>
                  Seniority can be uncomfortable. I remember being nervous around seniors
                  as a student, and I understand why the pressure to show respect can feel
                  heavy at times. Just because a relationship has a senior and a junior does
                  not mean those people will automatically get along.
                </p>
                <p>
                  But when people get closer, it can become a really good relationship.
                  A senior may look after a junior, help them settle in, or share things they
                  learned the hard way. The junior might come to trust them, and the two can
                  become much less formal with each other. That side of the culture matters
                  to me too.
                </p>
              </section>

              <aside aria-label="A local take from HAEMIL" className="rounded-2xl border-l-4 border-[var(--gold)] bg-[var(--card)] p-6 md:p-8">
                <h2 className="text-xl font-semibold md:text-2xl">A local take from HAEMIL</h2>
                <p className="mt-4">
                  When I hear someone say <em>sunbaenim</em> now, I barely think about it.
                  It is a word I have heard all my life. But I can see why it might be confusing
                  if you did not grow up here. Being someone’s sunbae tells you something
                  about when they started. It does not tell you everything about their
                  relationship. That depends on the people themselves.
                </p>
              </aside>

              <section aria-labelledby="related-guides" className="space-y-4 border-t border-[var(--border)] pt-9">
                <h2 id="related-guides" className="text-2xl font-semibold md:text-3xl">Keep exploring Korea</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedGuides.map((guide) => (
                    <Link key={guide.href} href={guide.href}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                      {guide.label} →
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
