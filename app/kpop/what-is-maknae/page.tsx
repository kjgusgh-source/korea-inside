import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

const siteUrl = "https://haemilkorea.com";
const pageUrl = `${siteUrl}/kpop/what-is-maknae`;

const pageTitle =
  "What Does Maknae Mean in K-pop? A Friendly Guide to the Youngest Member";
const pageDescription =
  "A friendly HAEMIL guide to the meaning of maknae in K-pop, how the youngest member is seen by fans, and how maknae differs from center, visual, fancam attention, and ending fairy moments.";

const quickFacts = [
  "Korean word: Maknae / 막내.",
  "Basic meaning: The youngest person in a group, family, team, or social setting.",
  "In K-pop: The youngest member of an idol group.",
  "Not just age: Fans often notice growth, group dynamics, confidence, and how older members interact with the youngest member.",
  "Related phrase: Maknae line means the younger members of a group.",
  "Fan phrase: Maknae on top means a youngest member who feels bold, confident, or unexpectedly powerful in the group dynamic.",
  "Important: A maknae is not always cute, shy, or childish. Every group’s maknae image is different.",
];

const relatedGuides = [
  {
    label: "K-pop starter guide",
    title: "What is a fancam?",
    description:
      "A friendly guide to K-pop fancam meaning, why member-focused videos matter, and how fancams differ from facecams, ending fairy moments, and full-stage clips.",
    href: "/kpop/what-is-a-fancam",
  },
  {
    label: "K-pop starter guide",
    title: "What is an ending fairy?",
    description:
      "A friendly guide to K-pop ending fairy meaning, why the final close-up matters, and how it differs from fancams, facecams, visual moments, and center parts.",
    href: "/kpop/what-is-ending-fairy",
  },
  {
    label: "K-pop starter guide",
    title: "What does visual mean in K-pop?",
    description:
      "A friendly guide to what “visual” means in K-pop, how it differs from center, and why fans use the word carefully.",
    href: "/kpop/what-is-visual-in-kpop",
  },
  {
    label: "K-pop guide",
    title: "What is center in K-pop?",
    description:
      "Learn what center means in K-pop, why the center member matters, and how fans understand stage focus and group image.",
    href: "/kpop/what-is-center-in-kpop",
  },
  {
    label: "Fan words",
    title: "Open the K-pop glossary",
    description:
      "A friendly guide to Korean K-pop fan words like bias, maknae, fancam, ending fairy, and eolppak-jikcam.",
    href: "/kpop/glossary",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kpop/what-is-maknae",
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

export default function WhatIsMaknaePage() {
  const relatedMemberGuides = getPublishedMemberGuides().slice(0, 4);

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
          name: "Maknae",
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
          name: "What does maknae mean?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 md:px-8 md:py-8">
          <SiteHeader />

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <Link
              href="/kpop"
              className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
            >
              ← Back to K-pop
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              K-pop starter guide
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              If you search &quot;maknae meaning,&quot; the simple answer is
              this: maknae, or 막내, means the youngest person in a group.
            </p>
          </article>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Quick facts
            </p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] md:text-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="text-[var(--gold)]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <div className="space-y-7 text-base leading-8 text-[var(--muted)] md:text-lg">
              <p>It can be used in a family.</p>

              <p>It can be used in a team.</p>

              <p>It can be used in a workplace or social group.</p>

              <p>In K-pop, maknae usually means the youngest member of an idol group.</p>

              <p>
                That sounds simple, but fans use the word with more feeling than
                just age.
              </p>

              <p>A maknae is not only &quot;the person born last.&quot;</p>

              <p>
                In a K-pop group, the maknae can become part of how fans
                understand the group dynamic. Older members may tease them,
                protect them, guide them, or treat them like the younger sibling
                of the team. Fans may watch the maknae grow more confident over
                time, especially across different comebacks and eras.
              </p>

              <p>That is why the word appears so often in K-pop conversations.</p>

              <p>It is an age word, but it becomes an image word too.</p>

              <p>Some maknaes feel cute.</p>

              <p>Some feel calm.</p>

              <p>Some feel powerful.</p>

              <p>Some feel shy at first and sharper later.</p>

              <p>
                Some act like the youngest member only off stage, then look
                completely different when the performance starts.
              </p>

              <p>That contrast is part of the fun.</p>

              <p>
                This is also why you should not read maknae as &quot;baby of the
                group&quot; too literally.
              </p>

              <p>
                Fans may joke like that, but every group is different. Some
                youngest members are playful and obviously treated like the
                little sibling. Others are confident, mature, quiet, athletic,
                serious, or very strong on stage.
              </p>

              <p>Being maknae does not decide someone&apos;s personality.</p>

              <p>It only tells you their place in the group&apos;s age order.</p>

              <p>The feeling around that age order comes from the group.</p>

              <p>One related phrase is maknae line.</p>

              <p>
                Maknae line usually means the younger members of a group, not
                only the single youngest member. Fans use it when they want to
                talk about the younger side of the team together. The exact
                members can depend on the group and how fans divide the ages.
              </p>

              <p>Another phrase is maknae on top.</p>

              <p>
                This is a playful fan phrase. It describes a youngest member
                who does not feel small or shy in the group dynamic. They may
                act bold, tease older members, take charge in a funny way, or
                have a strong stage presence that makes them feel bigger than
                their age order.
              </p>

              <p>It does not mean they are officially above the other members.</p>

              <p>It is fandom language.</p>

              <p>It is playful.</p>

              <p>There is also the phrase golden maknae.</p>

              <p>
                Fans may use this when the youngest member seems good at many
                things: singing, dancing, performing, sports, variety, visuals,
                or other skills. But it is not a role every group has, and it
                should not be treated like an official title unless the group or
                fandom clearly uses it that way.
              </p>

              <p>
                K-pop fans love these small labels because they help describe
                how a group feels.
              </p>

              <p>Maknae is one of those labels.</p>

              <p>
                It gives fans a simple way to talk about age, growth, and team
                chemistry.
              </p>

              <p>Maknae is different from center.</p>

              <p>
                The center is about stage placement and performance focus. A
                center may stand in the middle during key choreography or be
                placed in important visual moments. A maknae can be center
                sometimes, but the two words mean different things.
              </p>

              <p>Maknae is about being the youngest.</p>

              <p>Center is about where the stage puts attention.</p>

              <p>Maknae is also different from visual.</p>

              <p>
                Visual is about image, styling, facial impression, camera
                presence, and how memorable a member feels in photos,
                thumbnails, and stage clips. A maknae can have a strong visual
                image, but maknae itself is not a beauty role.
              </p>

              <p>Do not turn it into a ranking.</p>

              <p>That is not the point.</p>

              <p>Maknae is also different from ending fairy.</p>

              <p>
                An ending fairy is the final close-up camera moment after a
                performance ends. Any member can get that moment. If the maknae
                gets it, fans may read the expression through the maknae image:
                cute, playful, shy, fresh, confident, or surprisingly
                controlled.
              </p>

              <p>But ending fairy is a moment.</p>

              <p>Maknae is a group position by age.</p>

              <p>Fancams are another place where maknae talk appears.</p>

              <p>
                A fancam follows one member during a performance, so fans can
                watch details that a full-group stage may miss. For a maknae,
                fancams can be especially interesting because fans often compare
                earlier and later stages.
              </p>

              <p>They notice growth.</p>

              <p>They notice confidence.</p>

              <p>They notice expression changes.</p>

              <p>
                They notice when the youngest member starts looking more
                comfortable with the camera.
              </p>

              <p>That is a very K-pop way of watching.</p>

              <p>You are not only watching one stage.</p>

              <p>You are watching time pass.</p>

              <p>
                This is why fans sometimes talk about a maknae &quot;growing
                up&quot; through fancams, photos, styling, and comeback eras. It
                does not always mean age in a literal way. It can mean the
                idol&apos;s stage image is becoming clearer.
              </p>

              <p>Maybe their expressions are sharper.</p>

              <p>Maybe they look more relaxed.</p>

              <p>Maybe their ending fairy moments feel less nervous.</p>

              <p>
                Maybe their styling starts to match the group&apos;s concept
                more strongly.
              </p>

              <p>Fans notice those changes.</p>

              <p>
                For beginners, the safest way to understand maknae is this:
              </p>

              <p>Start with the basic meaning.</p>

              <p>The maknae is the youngest member.</p>

              <p>Then look at the group dynamic.</p>

              <p>How do older members treat them?</p>

              <p>
                Do fans talk about them as cute, bold, calm, funny, or
                surprisingly mature?
              </p>

              <p>Do their fancams show growth over time?</p>

              <p>Do their ending moments feel playful or controlled?</p>

              <p>Do they fit the group image in an interesting way?</p>

              <p>Those questions tell you more than the word alone.</p>

              <p>There is one more thing to remember.</p>

              <p>
                Korean age and international age can make idol ages feel
                confusing, especially in older content or fan posts. Korea has
                changed its official age-counting system, and fans online may
                use birth year, international age, or older Korean-style age
                depending on the context. For K-pop pages, it is usually safest
                to focus on birth order inside the group.
              </p>

              <p>Maknae means youngest in the group.</p>

              <p>That part stays clear.</p>

              <p>
                For HAEMIL readers, maknae is worth learning because it shows
                how K-pop fans watch more than performances.
              </p>

              <p>They watch relationships.</p>

              <p>They watch growth.</p>

              <p>They watch image changes.</p>

              <p>
                They watch how one member&apos;s role feels different beside the
                others.
              </p>

              <p>A maknae is not automatically the cutest member.</p>

              <p>Not automatically the weakest.</p>

              <p>Not automatically the most protected.</p>

              <p>Not automatically the most childish.</p>

              <p>The maknae is simply the youngest member.</p>

              <p>
                Everything else depends on the idol, the group, and the story
                fans see over time.
              </p>

              <p>That is why one small Korean word can carry so much feeling.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Korean expression
            </p>

            <h2 className="mt-3 text-3xl font-semibold">막내</h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              In Korean, 막내 is a very normal word. You can use it for the
              youngest child in a family, the youngest employee in a workplace,
              or the youngest person in a friend group. K-pop fans use it the
              same way, but because idols grow up in front of fans, the word
              often carries more feeling about growth and team chemistry.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Related fan phrases include maknae line (the younger members),
              maknae on top (a bold youngest member), and golden maknae (a
              youngest member fans see as strong in many areas). These are fan
              language, not official company roles.
            </p>
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
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
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

          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Try watching with context
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Member guides to read next
                </h2>
              </div>

              <Link
                href="/kpop"
                className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
              >
                See all K-pop →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {relatedMemberGuides.map(({ group, member }) => (
                <Link
                  key={`${group.id}-${member.id}`}
                  href={`/kpop/${group.id}/${member.id}`}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    {group.name}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {member.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
                    {member.note}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                    Read guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
