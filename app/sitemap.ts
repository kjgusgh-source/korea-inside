import type { MetadataRoute } from "next";
import { getKpopGroups } from "../lib/kpopData";

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
      url: `${baseUrl}/kpop/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
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

  const kpopGroupRoutes: MetadataRoute.Sitemap = getKpopGroups().map(
    (group) => ({
      url: `${baseUrl}/kpop/${group.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const kpopMemberRoutes: MetadataRoute.Sitemap = getKpopGroups().flatMap(
    (group) =>
      group.members.map((member) => ({
        url: `${baseUrl}/kpop/${group.id}/${member.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.75,
      }))
  );

  return [...staticRoutes, ...kpopGroupRoutes, ...kpopMemberRoutes];
}