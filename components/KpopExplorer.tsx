"use client";

import Link from "next/link";
import { useState } from "react";
import type { KpopGroup, KpopGroupCategory } from "../lib/kpopData";

type KpopExplorerProps = {
  groups: KpopGroup[];
};

const CATEGORY_LABELS: Record<KpopGroupCategory, string> = {
  "girl-groups": "Girl Groups",
  "boy-groups": "Boy Groups",
};

const CATEGORY_DESCRIPTIONS: Record<KpopGroupCategory, string> = {
  "girl-groups":
    "Explore girl groups, members, fancams, expressions, and stage moments.",
  "boy-groups":
    "Explore boy groups, members, performances, fandom moments, and stage culture.",
};

export default function KpopExplorer({ groups }: KpopExplorerProps) {
  const [openCategories, setOpenCategories] = useState<KpopGroupCategory[]>([]);
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleCategory = (category: KpopGroupCategory) => {
    setOpenCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  };

  const toggleGroup = (groupId: string) => {
    setOpenGroups((current) =>
      current.includes(groupId)
        ? current.filter((item) => item !== groupId)
        : [...current, groupId]
    );
  };

  const categories: KpopGroupCategory[] = ["girl-groups", "boy-groups"];

  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            K-pop / Idols
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Find a group, then follow the moment.
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
          K-pop is not the whole site, but it is one of the easiest doors into
          Korean culture. Start with a group, open a member, then follow the
          fancams, words, and little stage details.
        </p>
      </div>

      <div className="space-y-5">
        {categories.map((category) => {
          const categoryGroups = groups.filter(
            (group) => group.category === category
          );
          const isCategoryOpen = openCategories.includes(category);

          return (
            <div
              key={category}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)]"
            >
              <button
                type="button"
                onClick={() => toggleCategory(category)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {CATEGORY_LABELS[category]}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {CATEGORY_DESCRIPTIONS[category]}
                  </p>
                </div>

                <span className="text-2xl text-[var(--accent)]">
                  {isCategoryOpen ? "▲" : "▼"}
                </span>
              </button>

              {isCategoryOpen && (
                <div className="space-y-4 border-t border-[var(--border)] p-5">
                  {categoryGroups.map((group) => {
                    const isGroupOpen = openGroups.includes(group.id);

                    return (
                      <div
                        key={group.id}
                        className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)]"
                      >
                        <button
                          type="button"
                          onClick={() => toggleGroup(group.id)}
                          className="flex w-full items-start justify-between gap-4 p-5 text-left"
                        >
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-xl font-semibold text-[var(--text)]">
                                {group.name}
                              </h4>
                              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
                                Group page
                              </span>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                              {group.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {group.starterTags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className="text-xl text-[var(--accent)]">
                            {isGroupOpen ? "▲" : "▼"}
                          </span>
                        </button>

                        {isGroupOpen && (
                          <div className="border-t border-[var(--border)] p-5">
                            <Link
                              href={`/kpop/${group.id}`}
                              className="mb-5 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                              Open group page →
                            </Link>

                            <div className="grid gap-3 md:grid-cols-3">
                              {group.members.map((member) => (
                                <Link
                                  key={member.id}
                                  href={`/kpop/${group.id}/${member.id}`}
                                  className="rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-md"
                                >
                                  <p className="font-semibold text-[var(--text)]">
                                    {member.name}
                                  </p>
                                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                    {member.note}
                                  </p>
                                  <p className="mt-4 text-xs font-semibold text-[var(--accent)]">
                                    Open member page →
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}