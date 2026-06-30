import type { MetadataRoute } from "next";
import { getKpopGroups } from "../lib/kpopData";
import { publishedMemberIds } from "../lib/publishedGuides";
import { getKpopGuideArticles } from "../lib/kpopGuideArticles";

const baseUrl = "https://korea-inside.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/kpop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
   
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
  const kpopGuideRoutes: MetadataRoute.Sitemap = getKpopGuideArticles().map(
    (article) => ({
      url: `${baseUrl}${article.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const kpopGroupRoutes: MetadataRoute.Sitemap = getKpopGroups().map(
    (group) => ({
      url: `${baseUrl}/kpop/${group.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const kpopMemberRoutes: MetadataRoute.Sitemap = publishedMemberIds.map(
    ({ groupId, memberId }) => ({
      url: `${baseUrl}/kpop/${groupId}/${memberId}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    })
  );

  return [
    ...staticRoutes,
    ...kpopGuideRoutes,
    ...kpopGroupRoutes,
    ...kpopMemberRoutes,
  ];
}