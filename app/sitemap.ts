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
      url: `${baseUrl}/food/what-is-dujjonku-dubai-chewy-cookie`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/kpop`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/travel`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/travel/seoul`,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/travel/how-to-use-korean-subway`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-use-t-money-card-in-korea`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/do-i-need-to-tap-out-on-korean-buses`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-use-subway-lockers-in-seoul`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/naver-map-kakaomap-korea-travel-guide`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/korea-travel-apps-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/korea-sim-esim-wifi-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/korea-arrival-day-checklist-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/luggage-storage-in-seoul-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-get-from-incheon-airport-to-seoul`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/what-to-do-in-myeongdong-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/where-to-stay-in-seoul-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/seoul-neighborhood-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/3-days-in-seoul-itinerary-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/7-days-in-korea-itinerary-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/how-to-get-around-seoul-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/things-to-know-before-visiting-korea-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/korea-etiquette-tips-for-tourists`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/best-time-to-visit-korea-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/what-to-wear-in-korea-by-season`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/is-korea-expensive-to-visit-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/what-to-buy-in-korea-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/gangneung-travel-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/chuseok-korea-holiday-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel/korea-autumn-foliage-guide`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/food/what-to-eat-in-korea-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/how-to-order-food-in-korea`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-soups-and-stews-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-pocha-night-food-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-breakfast-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-fried-chicken-chimaek-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-fried-chicken-menu-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-noodles-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/naengmyeon-korean-cold-noodles-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/gwangjang-market-food-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/myeongdong-street-food-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/korean-cafe-culture-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-to-eat-at-korean-convenience-store`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-korean-street-toast`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-bungeoppang`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/how-to-eat-cup-ramyeon-at-a-korean-convenience-store`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-tteokbokki`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-hotteok`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-butter-tteok`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-eomuk-korean-fish-cake`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-twigim-korean-fried-snacks`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-sundae-korean-blood-sausage`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-gimbap-korean-seaweed-rice-roll`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-bunsik-korean-snack-food`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-a-korean-corn-dog`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/what-is-kimchi`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/food/vegan-vegetarian-korea-guide-first-time`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dramas`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/dramas/what-is-a-sageuk-in-kdramas`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dramas/why-itaewon-class-is-a-good-first-kdrama`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dramas/why-teach-you-a-lesson-is-a-good-first-kdrama`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dramas/what-is-second-lead-syndrome-in-kdramas`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dramas/what-is-makjang`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lifestyle`,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
  const kpopGuideRoutes: MetadataRoute.Sitemap = getKpopGuideArticles().map(
    (article) => ({
      url: `${baseUrl}${article.href}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const kpopGroupRoutes: MetadataRoute.Sitemap = getKpopGroups().map(
    (group) => ({
      url: `${baseUrl}/kpop/${group.id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const kpopMemberRoutes: MetadataRoute.Sitemap = publishedMemberIds.map(
    ({ groupId, memberId }) => ({
      url: `${baseUrl}/kpop/${groupId}/${memberId}`,
      changeFrequency: "weekly",
      priority: 0.75,
    })
  );

  const kpopSoloProfileRoutes: MetadataRoute.Sitemap = getKpopSoloArtists()
    .filter((artist) => artist.href === `/kpop/${artist.id}`)
    .map((artist) => ({
      url: `${baseUrl}${artist.href}`,
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
