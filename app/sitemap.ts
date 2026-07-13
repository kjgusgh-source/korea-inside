import type { MetadataRoute } from "next";
import { getKpopGroups } from "../lib/kpopData";
import { publishedMemberIds } from "../lib/publishedGuides";
import { getKpopGuideArticles } from "../lib/kpopGuideArticles";
import { getKpopSoloArtists } from "../lib/kpopSoloArtists";
import { getAllPosts } from "../lib/posts";

const baseUrl = "https://haemilkorea.com";

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
      url: `${baseUrl}/travel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/travel/seoul`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/travel/how-to-use-korean-subway`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-use-t-money-card-in-korea`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/naver-map-kakaomap-korea-travel-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-get-from-incheon-airport-to-seoul`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/what-to-do-in-myeongdong-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/where-to-stay-in-seoul-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/seoul-neighborhood-guide-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/3-days-in-seoul-itinerary-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-get-around-seoul-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/things-to-know-before-visiting-korea-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/korea-etiquette-tips-for-tourists`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/best-time-to-visit-korea-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/what-to-wear-in-korea-by-season`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/is-korea-expensive-to-visit-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/what-to-buy-in-korea-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/food/what-to-eat-in-korea-first-time`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/how-to-order-food-in-korea`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-korean-street-toast`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-bungeoppang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-tteokbokki`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-eomuk-korean-fish-cake`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-twigim-korean-fried-snacks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-sundae-korean-blood-sausage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-gimbap-korean-seaweed-rice-roll`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-bunsik-korean-snack-food`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dramas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/dramas/why-itaewon-class-is-a-good-first-kdrama`,
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

  const kpopSoloProfileRoutes: MetadataRoute.Sitemap = getKpopSoloArtists()
    .filter((artist) => artist.href === `/kpop/${artist.id}`)
    .map((artist) => ({
      url: `${baseUrl}${artist.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    }));

  const culturePostRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/${post.categorySlug}/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...culturePostRoutes,
    ...kpopGuideRoutes,
    ...kpopGroupRoutes,
    ...kpopMemberRoutes,
    ...kpopSoloProfileRoutes,
  ];
}