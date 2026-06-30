import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import { getPublishedMemberGuides } from "../../../lib/publishedGuides";

export const metadata: Metadata = {
  title: "What does bias mean in K-pop?",
  description:
    "A friendly guide to the meaning of bias in K-pop, including bias wrecker, choe-ae, cha-ae, and how fans talk about their favorite idols.",
};

export default function WhatDoesBiasMeanPage() {
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
            What does bias mean in K-pop?
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            In K-pop, your bias is your favorite member in a group. It is the
            idol you naturally pay more attention to — the one whose fancams you
            replay, whose small expressions you notice, and whose name you look
            for first when a new performance drops.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                English fandom word
              </p>
              <p className="mt-2 text-2xl font-semibold">Bias</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                The member you like the most in a K-pop group.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                Korean word
              </p>
              <p className="mt-2 text-2xl font-semibold">최애</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                choe-ae — the person you love or like the most.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                Common phrase
              </p>
              <p className="mt-2 text-2xl font-semibold">My bias is...</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                A simple way fans introduce their favorite member.
              </p>
            </div>
          </div>
        </article>

        <section className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Not just “favorite”
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Bias is personal, but also very fandom-coded.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Saying someone is your favorite member is easy to understand. But
              in K-pop fandom, “bias” feels a little more specific. It usually
              means the member you feel attached to inside the group’s world:
              their performances, personality, jokes, interviews, styling,
              growth, and the way other fans talk about them.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              That is why two people can like the same group but have completely
              different biases. One fan might choose the strongest dancer.
              Another might choose the member with the warmest personality. Some
              fans choose the person who simply made them curious first.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Fan vocabulary
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-xl font-semibold">Bias</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Your favorite member in a group.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Bias wrecker</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Another member who suddenly makes you question your bias
                  because they become too charming to ignore.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Ultimate bias</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Your favorite idol overall, not only inside one group.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Korean fan words
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            최애 and 차애: how Korean fans say it
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                최애 · choe-ae
              </p>

              <h3 className="mt-2 text-2xl font-semibold">Your top favorite</h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                최 means “most” or “best,” and 애 comes from love or affection.
                In Korean fan language, 최애 means the person you like the most.
                It is close to “bias,” but it sounds very natural in Korean
                fandom spaces.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-semibold text-[var(--gold)]">
                차애 · cha-ae
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Your second favorite
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                차애 means the member you like after your 최애. It is not a cold
                ranking system. Fans often use it playfully when another member
                keeps catching their attention.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/kpop/glossary"
              className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Open K-pop glossary →
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Why bias changes
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Sometimes a fancam changes everything.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Many fans do not choose a bias immediately. Sometimes it happens
            after watching a fancam, a variety show clip, a live performance, or
            a small moment that suddenly makes one member feel different. That
            is why K-pop guides often focus on details: camera awareness, dance
            lines, expressions, humor, leadership, and how a member fits inside
            the group.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            A bias can also change over time. Fans might start with the most
            eye-catching member, then slowly become attached to someone quieter,
            funnier, warmer, or more emotionally expressive.
          </p>

          <div className="mt-6">
            <Link
              href="/kpop/what-is-a-fancam"
              className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              What is a fancam? →
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Find your bias
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Start with a member guide
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