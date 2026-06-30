import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

export const metadata: Metadata = {
  title: "What is an ending fairy in K-pop?",
  description:
    "A friendly guide to K-pop ending fairy moments, why they go viral, and how idols use the final camera shot after a music show stage.",
};

export default function WhatIsEndingFairyPage() {
  const relatedGuides = getPublishedMemberGuides().slice(0, 4);

  return (
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
            K-pop guide
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            What is an ending fairy in K-pop?
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            An ending fairy is the idol who gets a close-up camera shot at the
            very end of a K-pop music show performance. The song is over, the
            choreography has stopped, and for a few seconds one member has to
            hold the camera with a final expression, pose, smile, wink, joke, or
            dramatic look.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                Korean word
              </p>
              <p className="mt-2 text-2xl font-semibold">엔딩요정</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                ending-yojeong — literally, ending fairy.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                When it happens
              </p>
              <p className="mt-2 text-2xl font-semibold">After the stage</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                The camera stays on one idol for a short final close-up.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                Why fans love it
              </p>
              <p className="mt-2 text-2xl font-semibold">Personality</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                A few seconds can show charm, humor, confidence, or awkwardness.
              </p>
            </div>
          </div>
        </article>

        <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Why it became a thing
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              K-pop does not end when the song ends.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              In many K-pop stages, fans watch every detail: the choreography,
              outfits, live singing, facial expressions, camera work, and even
              what happens after the final pose. The ending fairy moment became
              popular because it turns the last few seconds of a performance
              into a small personality test.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Some idols use the moment seriously, holding a confident or
              elegant expression. Others make fans laugh with a cute pose,
              surprised face, or intentionally awkward reaction. That tiny final
              moment can become the part fans replay the most.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Types of ending fairy
            </p>

            <ul className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Cute ending:
                </span>{" "}
                a smile, wink, heart, or playful pose.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Cool ending:
                </span>{" "}
                a serious stare or confident expression that matches the song.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Funny ending:
                </span>{" "}
                an idol breaks the mood on purpose and makes fans laugh.
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">
                  Awkward ending:
                </span>{" "}
                the idol looks shy, surprised, or unsure what to do — and fans
                love it even more.
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Why it goes viral
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            A short close-up is easy to share.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Ending fairy clips are short, clear, and easy to understand even if
            you do not know the whole performance. That is why they spread well
            on social media. You do not need to watch a full stage to understand
            why a smile, wink, or funny reaction is charming.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            For new fans, ending fairy moments are also a simple way to notice a
            member’s personality. A strong performer might suddenly look shy. A
            quiet member might surprise people with a bold expression. A member
            known for humor might turn the ending shot into a small joke.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kpop/what-is-a-fancam"
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              What is a fancam? →
            </Link>

            <Link
              href="/kpop/glossary"
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Open K-pop glossary →
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Korean expression
          </p>

          <h2 className="mt-3 text-3xl font-semibold">엔딩요정</h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            엔딩 means ending, and 요정 means fairy. The word sounds cute, but
            the role can be funny, cool, elegant, awkward, or dramatic depending
            on the idol. That flexibility is why fans keep using the phrase.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            In Korean fan culture, the word is not only about beauty. It is
            about the final impression. The idol gets a few seconds to leave a
            tiny memory after the stage is already finished.
          </p>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Keep exploring
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Watch members with stage context
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
            {relatedGuides.map(({ group, member }) => (
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
  );
}