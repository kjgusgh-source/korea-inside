import { getKpopGuideArticles } from "./kpopGuideArticles";
import { getPublishedMemberGuides } from "./publishedGuides";
import { getAllPosts } from "./posts";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactText(value: string) {
  return normalizeText(value).replace(/[\s_-]/g, "");
}

export function getSearchIndex(): SearchItem[] {
  const culturePosts: SearchItem[] = getAllPosts().map((post) => ({
    title: post.title,
    description: post.description,
    href: `/${post.categorySlug}/${post.slug}`,
    category: post.categoryLabel,
    keywords: [
      post.title,
      post.description,
      post.excerpt,
      post.categoryLabel,
      post.categorySlug,
      post.slug,
      ...(post.tags ?? []),
    ],
  }));

  const kpopGuides: SearchItem[] = getKpopGuideArticles().map((article) => ({
    title: article.title,
    description: article.description,
    href: article.href,
    category: article.label,
    keywords: [
      article.title,
      article.description,
      article.label,
      article.href,
      "kpop",
      "k-pop",
      "korean fan words",
    ],
  }));

  const memberGuides: SearchItem[] = getPublishedMemberGuides().map(
    ({ group, member }) => ({
      title: `${member.name} ${group.name} Guide`,
      description:
        member.intro ??
        member.note ??
        `A friendly guide to ${member.name} from ${group.name}.`,
      href: `/kpop/${group.id}/${member.id}`,
      category: `${group.name} member guide`,
      keywords: [
        member.name,
        member.id,
        member.note,
        member.intro ?? "",
        member.koreanExpression?.hangul ?? "",
        member.koreanExpression?.romanization ?? "",
        member.koreanExpression?.meaning ?? "",
        group.name,
        group.id,
        "kpop",
        "k-pop",
        "idol",
        "fancam",
        "member guide",
      ],
    })
  );

  return [...kpopGuides, ...memberGuides, ...culturePosts];
}

export function searchItems(query: string) {
  const normalizedQuery = normalizeText(query);
  const compactQuery = compactText(query);

  if (!normalizedQuery) {
    return [];
  }

  const queryTerms = normalizedQuery.split(" ").filter(Boolean);

  return getSearchIndex()
    .map((item) => {
      const title = normalizeText(item.title);
      const description = normalizeText(item.description);
      const category = normalizeText(item.category);
      const href = normalizeText(item.href);
      const keywords = normalizeText(item.keywords.join(" "));
      const haystack = `${title} ${description} ${category} ${href} ${keywords}`;
      const compactHaystack = compactText(haystack);

      let score = 0;

      if (title.includes(normalizedQuery)) score += 20;
      if (category.includes(normalizedQuery)) score += 10;
      if (href.includes(normalizedQuery)) score += 8;
      if (keywords.includes(normalizedQuery)) score += 8;
      if (description.includes(normalizedQuery)) score += 5;
      if (compactQuery && compactHaystack.includes(compactQuery)) score += 8;

      queryTerms.forEach((term) => {
        if (title.includes(term)) score += 6;
        if (category.includes(term)) score += 4;
        if (href.includes(term)) score += 3;
        if (keywords.includes(term)) score += 3;
        if (description.includes(term)) score += 2;
        if (haystack.includes(term)) score += 1;
      });

      return {
        item,
        score,
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item);
}