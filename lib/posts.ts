export type PostCategory =
  | "memes"
  | "expressions"
  | "travel"
  | "food"
  | "kpop"
  | "dramas"
  | "lifestyle"
  | "nightlife";

export type TravelMapSpot = {
  name: string;
  area: string;
  category: string;
  mapQuery: string;
  note?: string;
};

export type TravelQuickGuideGroup = {
  title: string;
  items: string[];
};

export type TravelQuickGuide = {
  sectionTitle: string;
  groups: TravelQuickGuideGroup[];
};

export type RelatedGuide = {
  label: string;
  title: string;
  href: string;
};

export type PostImage = {
  src: string;
  alt: string;
  credit: string;
  sourceUrl?: string;
  license: string;
  group?: string;
};

export type PostTrailer = {
  title: string;
  koreanTitle?: string;
  youtubeId: string;
  sourceLabel: string;
  note?: string;
};

export interface Post {
  id: number;
  title: string;
  slug: string;
  category: PostCategory;
  categorySlug: string;
  categoryLabel: string;
  description: string;
  excerpt: string;
  content: string[];
  culturalContext: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  mapSpots?: TravelMapSpot[];
  mapSectionTitle?: string;
  quickGuide?: TravelQuickGuide;
  relatedGuides?: RelatedGuide[];
  heroImage?: PostImage;
  galleryImages?: PostImage[];
  trailers?: PostTrailer[];
}

export const POSTS: Post[] = [
  {
    id: 1,
    title: "Why Koreans Say “폼 미쳤다”",
    slug: "form-is-crazy",
    category: "memes",
    categorySlug: "memes",
    categoryLabel: "Korean Memes",
    description:
      "A Korean phrase you will hear when someone’s performance, style, or energy is simply too good.",
    excerpt:
      "Not literally crazy. More like: that person is on fire, and everyone knows it.",
    content: [
      "Imagine a singer hitting a perfect high note, a football player suddenly playing like a legend, or your friend showing up with an outfit that completely changes the room.",
      "That is when many Koreans might say, “폼 미쳤다” (pom michyeotda). Literally, it sounds like “the form is crazy,” but the feeling is closer to “they are absolutely on fire.”",
      "The word “폼” comes from “form,” as in someone’s condition, skill, or overall vibe. When Koreans say it, they are not calmly evaluating you. They are reacting with excitement.",
      "You can use it for a dancer, a gamer, a chef, an actor, an idol, or even a friend who suddenly becomes very good at something. It is a compliment with energy."
    ],
    culturalContext:
      "This phrase fits Korea’s love for quick, emotional reactions. In Korean online culture, people often celebrate a moment instantly: a great stage, a great scene, a great play, a great photo. “폼 미쳤다” is less about analysis and more about sharing the excitement together.",
    tags: ["Korean slang", "Korean memes", "K-pop", "Sports", "Online culture"],
    publishedAt: "2026-06-20",
    readingTime: "3 min read",
    seoTitle: "What Does “폼 미쳤다” Mean? Korean Slang Explained",
    seoDescription:
      "Learn what the Korean phrase “폼 미쳤다” means and how Koreans use it to praise someone’s amazing performance, style, or energy."
  },
  {
    id: 2,
    title: "Lucky Vicky: Korea’s Cheerful Way of Reframing Bad Luck",
    slug: "lucky-vicky",
    category: "memes",
    categorySlug: "memes",
    categoryLabel: "Korean Memes",
    description:
      "A bright Korean meme about turning an unlucky moment into something strangely lucky.",
    excerpt:
      "When something goes wrong, Lucky Vicky finds the tiny sparkle hiding inside it.",
    content: [
      "You missed the bus. Annoying, right? But then you realize the next bus is less crowded, the weather is nice, and you have ten quiet minutes to breathe.",
      "That is the mood behind “럭키비키” (Lucky Vicky). It is a playful way of saying, “Maybe this is lucky after all.”",
      "The phrase became popular in Korean pop culture because it feels light, cute, and surprisingly comforting. It is not about pretending everything is perfect.",
      "It is more like choosing a small positive angle, even when the day does not go exactly your way."
    ],
    culturalContext:
      "Koreans often live with pressure from school, work, competition, and fast city life. A phrase like Lucky Vicky feels charming because it softens that pressure. It turns frustration into a small smile, which is very Korean in its own way: emotional, playful, and quietly resilient.",
    tags: ["Lucky Vicky", "Korean meme", "K-pop culture", "Positive mindset"],
    publishedAt: "2026-06-20",
    readingTime: "3 min read",
    seoTitle: "What Is Lucky Vicky? Korean Meme and Meaning Explained",
    seoDescription:
      "Discover the meaning of Lucky Vicky, a Korean meme about finding a lucky side even in unlucky moments."
  },
  {
    id: 3,
    title: "억텐 vs 찐텐: How Koreans Read Real and Fake Energy",
    slug: "eokten-vs-jjinten",
    category: "expressions",
    categorySlug: "expressions",
    categoryLabel: "Korean Expressions",
    description:
      "Two useful Korean words for understanding whether someone’s energy feels forced or genuine.",
    excerpt:
      "Sometimes the mood is real. Sometimes someone is trying a little too hard.",
    content: [
      "In Korea, people do not only listen to what you say. They also notice the temperature of your energy.",
      "“찐텐” (jjin-ten) means genuine tension or genuine energy. It is when someone’s reaction feels real, natural, and unforced.",
      "“억텐” (eok-ten) means forced energy. It is the kind of excitement someone creates because the situation demands it, even if they are not truly feeling it.",
      "You might hear these words while watching variety shows, livestreams, idol content, or friends joking with each other. Koreans are often very sensitive to whether the mood feels natural."
    ],
    culturalContext:
      "These words are connected to 눈치 (nunchi), the Korean ability to sense the atmosphere. In a culture where group mood matters, people quickly notice when someone is genuinely excited or simply pushing the mood forward.",
    tags: ["Korean slang", "Nunchi", "Variety shows", "Korean expressions"],
    publishedAt: "2026-06-20",
    readingTime: "4 min read",
    seoTitle: "억텐 vs 찐텐 Meaning: Korean Slang Explained",
    seoDescription:
      "Learn the difference between 억텐 and 찐텐, two Korean slang words used to describe forced and genuine energy."
  },
  {
    id: 4,
    title: "도파민: Why Koreans Talk About Dopamine So Much",
    slug: "dopamine-korean-culture",
    category: "lifestyle",
    categorySlug: "lifestyle",
    categoryLabel: "Korean Lifestyle",
    description:
      "In Korea, dopamine is not only a science word. It has become a playful way to talk about small bursts of pleasure.",
    excerpt:
      "From spicy food to short videos, Koreans use “dopamine” to describe the tiny thrills of modern life.",
    content: [
      "A spicy tteokbokki video at midnight. A dramatic plot twist in a dating show. A perfectly edited idol fancam. A convenience store snack you did not expect to be good.",
      "Koreans often call these small thrills “도파민” (dopamine). Of course, it comes from the brain chemical, but online it is used much more casually.",
      "When someone says, “This gives me dopamine,” they usually mean it is exciting, addictive, funny, satisfying, or emotionally stimulating.",
      "It is a word that fits very well with Korea’s fast-moving entertainment culture, where food, music, shows, games, shopping, and social media all compete for your attention."
    ],
    culturalContext:
      "Modern Korean life is fast, dense, and full of stimulation. But underneath that speed, there is also a strong culture of sharing enjoyment together. A funny clip, a good meal, or a dramatic scene becomes more enjoyable when people react to it as a group.",
    tags: ["Korean lifestyle", "Dopamine", "Korean internet culture", "Modern Korea"],
    publishedAt: "2026-06-20",
    readingTime: "4 min read",
    seoTitle: "Why Koreans Say Dopamine: Korean Internet Culture Explained",
    seoDescription:
      "Learn how Koreans use the word dopamine in everyday internet culture to describe small thrills, pleasure, and addictive content."
  },
  {
    id: 5,
    title: "Korean Convenience Stores Are 24-Hour Mini Life Stations",
    slug: "korean-convenience-store-culture",
    category: "lifestyle",
    categorySlug: "lifestyle",
    categoryLabel: "Korean Lifestyle",
    description:
      "In Korea, a convenience store is not just a place to buy snacks. It can feel like a tiny restaurant, cafe, and daily-life helper.",
    excerpt:
      "A place where you can cook ramen, heat a lunch box, grab coffee, and sit down even after midnight.",
    content: [
      "Walk into a Korean convenience store late at night, and you may see someone eating ramen, a student heating a lunch box, and a traveler charging their phone with a canned coffee beside them.",
      "Many Korean convenience stores are open 24 hours, but the more interesting part is not just the opening time. It is how much life fits into such a small space.",
      "You can find instant ramen machines, microwaves, ready-made meals, seasonal snacks, coffee, umbrellas, batteries, medicine-like daily items, and sometimes small tables where people actually sit and eat.",
      "For visitors, it can feel surprising. A convenience store in Korea is not only for emergencies. It is part of the rhythm of the city."
    ],
    culturalContext:
      "This culture reflects Korea’s dense neighborhoods, long study and work hours, small living spaces, and love for quick but thoughtful convenience. It also carries a little bit of 정 (jeong), the warm feeling of everyday care, because even at 2 a.m., there is usually a bright place where you can find something warm to eat.",
    tags: ["Convenience store", "Korean food", "Korean lifestyle", "Jeong"],
    publishedAt: "2026-06-20",
    readingTime: "4 min read",
    seoTitle: "Korean Convenience Store Culture Explained",
    seoDescription:
      "Explore why Korean convenience stores feel like 24-hour mini life stations with ramen, lunch boxes, coffee, and everyday services."
  },
  {
    id: 6,
    title: "PC Bang: Korea’s 24-Hour Gaming Lounge",
    slug: "pc-bang-culture",
    category: "lifestyle",
    categorySlug: "lifestyle",
    categoryLabel: "Korean Lifestyle",
    description:
      "A PC Bang is not just an internet cafe. It is where gaming, food, friendship, and esports culture meet.",
    excerpt:
      "High-performance computers, fast internet, cheap hourly rates, and ramen ordered from your seat.",
    content: [
      "If you hear the soft clicking of keyboards, the glow of large monitors, and someone ordering ramen without leaving their chair, you may be inside a Korean PC Bang.",
      "A PC Bang (PC방) is often open 24 hours and feels closer to a gaming lounge than an ordinary internet cafe.",
      "People go there to play games alone, meet friends after school, practice competitive games, watch videos, or simply spend time in a comfortable seat with a good computer.",
      "One of the most Korean details is the food. You can often order ramen, fried rice, snacks, drinks, or full meals directly from your screen."
    ],
    culturalContext:
      "PC Bang culture grew together with Korea’s fast internet and online gaming boom. But it is not only about technology. It also shows Korea’s shared-room culture: people enjoy private focus, but inside a lively social space where everyone is doing something together.",
    tags: ["PC Bang", "Korean gaming", "Esports", "Korean lifestyle"],
    publishedAt: "2026-06-20",
    readingTime: "4 min read",
    seoTitle: "What Is a PC Bang? Korean Gaming Culture Explained",
    seoDescription:
      "Learn what a Korean PC Bang is and why it became a 24-hour gaming lounge connected to esports, food, and youth culture."
  },
  {
    id: 7,
    title: "Nunchi: The Quiet Skill Behind Korean Social Life",
    slug: "nunchi",
    category: "expressions",
    categorySlug: "expressions",
    categoryLabel: "Korean Expressions",
    description:
      "Nunchi is the Korean skill of sensing the mood before everything has to be said out loud.",
    excerpt:
      "If you have Korean friends, you may have noticed this invisible social sense already.",
    content: [
      "Sometimes in Korea, the most important thing in the room is not what someone says. It is what everyone quietly understands.",
      "That is where 눈치 (nunchi) comes in. It is often translated as “reading the room,” but it feels a little deeper than that.",
      "Nunchi is noticing when someone is uncomfortable, when the mood has changed, when it is better to speak, or when silence is kinder.",
      "It appears in offices, family meals, group chats, dates, restaurants, schools, and even variety shows. Once you notice it, Korean social life becomes much easier to understand."
    ],
    culturalContext:
      "Nunchi is connected to Korea’s long tradition of valuing harmony, respect, and group atmosphere. It is not only about being careful. At its best, it is a form of consideration: paying attention so others do not always have to explain themselves.",
    tags: ["Nunchi", "Korean culture", "Korean expressions", "Social life"],
    publishedAt: "2026-06-20",
    readingTime: "4 min read",
    seoTitle: "What Is Nunchi? Korean Culture Explained",
    seoDescription:
      "Learn what nunchi means and why this quiet skill of reading the room is important in Korean social life."
  },
  {
    id: 8,
    title: "Seoul After Midnight: Why Korea Feels Alive at Night",
    slug: "seoul-after-midnight",
    category: "nightlife",
    categorySlug: "nightlife",
    categoryLabel: "Korean Nightlife",
    description:
      "Korea’s night culture is not only about clubs or parties. Sometimes it is ramen by the river, a quiet walk, or a bright convenience store at 2 a.m.",
    excerpt:
      "The city does not simply sleep. It softens, glows, and keeps small doors open.",
    content: [
      "At midnight in Seoul, you may still find people walking near the Han River, eating convenience store ramen, singing in coin karaoke rooms, or sitting in a cafe that has not yet turned off its lights.",
      "Korea’s night culture can surprise visitors because it is not only loud nightlife. It can also be ordinary, calm, and strangely comfortable.",
      "A student may study late. A worker may eat a simple meal after overtime. Friends may sit by the river with instant noodles and talk until the air becomes cool.",
      "The beauty is not that everything is perfect. It is that the city leaves room for people whose day does not end early."
    ],
    culturalContext:
      "This is where modern infrastructure and Korean togetherness meet. Bright streets, 24-hour stores, public spaces, food culture, and the habit of gathering around small meals all create a night that feels active but familiar. It is one of the easiest ways to feel Korea’s everyday warmth without being told about it.",
    tags: ["Seoul", "Korean nightlife", "Han River", "Convenience store", "Korean culture"],
    publishedAt: "2026-06-20",
    readingTime: "5 min read",
    seoTitle: "Seoul After Midnight: Korean Night Culture Explained",
    seoDescription:
      "Explore Seoul after midnight, from Han River ramen and 24-hour convenience stores to Korea’s warm and lively night culture."
  },
  {
    id: 9,
    title:
      "Where Koreans Actually Go in Busan: A Map-Friendly Guide for First-Time Visitors",
    slug: "where-to-go-in-busan-first-time",
    category: "travel",
    categorySlug: "travel",
    categoryLabel: "Travel",
    description:
      "A simple Busan guide for first-time visitors, with beaches, markets, cafe streets, local food, stay areas, and map-friendly stops Koreans often visit.",
    excerpt:
      "Busan is not only Haeundae. This guide collects the places many Korean travelers actually visit: sea-view villages, markets, cafe streets, night beaches, coastal trains, food stops, and easy areas to stay.",
    content: [
      "Busan is often introduced as Korea’s beach city, but that is only one part of it. For many Korean travelers, Busan is a mix of sea views, hillside villages, markets, cafe streets, night beaches, and food that feels different from Seoul.",
      "This guide is not a strict 1-night, 2-day itinerary. Think of it as a map-friendly starting point. You can choose one area if you only have a short trip, or combine several areas if you want to spend more time in the city.",
      "Getting to Busan is easier than many first-time visitors expect. From Seoul, many travelers take the KTX to Busan Station. If you are flying in, Busan also has Gimhae International Airport, which connects the city with domestic routes and nearby international destinations.",
      "Busan is wide, so it helps to think in areas. West and old Busan are good for markets, older neighborhoods, and colorful village views. Central Busan is good for Seomyeon, Jeonpo, Gwangalli, and a younger city mood. East Busan is good for Haeundae, coastal trains, Cheongsapo, and the sea temple side.",
      "Gamcheon Culture Village is one of the classic Busan stops. It is colorful, hilly, and popular with both Korean and international visitors. It can be busy, but it gives you the famous “Busan hillside village” feeling in one place.",
      "Bupyeong Kkangtong Market is a good stop if you want market food and an older city atmosphere. It works well with Nampo, Jagalchi, or Gamcheon because they are on the same general side of Busan.",
      "Huinnyeoul Culture Village in Yeongdo has a quieter seaside mood. The charm is in the narrow alleys, small cafes, stairs, and sudden ocean views between buildings. It is a good place to walk slowly rather than rush through.",
      "Jeonpo Cafe Street is one of the easiest places to feel Busan’s younger local mood. It is not about one famous cafe only. The fun is walking through small streets, choosing a cafe, and taking a break between bigger sightseeing stops.",
      "Gwangalli Beach is one of the best first-night places in Busan. During the day it is a beach, but at night the lights of Gwangandaegyo Bridge make the whole area feel different. If you want one simple night view in Busan, Gwangalli is an easy choice.",
      "Millak The Market is near the Gwangalli side and works well as a casual food or evening stop. It is useful when you want something more relaxed than a formal restaurant and still want to stay near the beach mood.",
      "Haeundae Beach is the classic Busan beach. It is famous, busy, and easy to understand for first-time visitors. Even if you do not spend the whole day there, it is still a useful anchor for exploring the east side of Busan.",
      "Haeridan-gil is a smaller street area near Haeundae with cafes, restaurants, and a softer walking mood. It is a good balance if Haeundae Beach feels too large or crowded.",
      "Haeundae Blue Line Park, including the Beach Train and Sky Capsule around the Mipo and Cheongsapo side, is popular because the ride itself becomes part of the view. It is one of the easiest ways to enjoy Busan’s coast without making the day too complicated.",
      "Cheongsapo is a good slow stop near the Blue Line Park route. It has a calmer coastal feeling and works well if you want to make the east side of Busan feel less rushed.",
      "Haedong Yonggungsa Temple is farther out toward Gijang, but many visitors remember it because it is a temple by the sea. It takes more time than the central spots, so it is better when you are already focusing on the Haeundae or east Busan side.",
      "Food is part of the Busan trip too. Dwaeji gukbap, a pork and rice soup, is one of the foods many Koreans connect with Busan. Milmyeon, a cold wheat noodle dish, is another Busan classic, especially when the weather is warm.",
      "Seafood is also easy to connect with Busan, from raw fish and grilled seafood to fish cake and market snacks. You do not need to turn every meal into a famous restaurant hunt. Sometimes the best Busan meal is simply choosing one local food near the area you are already visiting.",
      "For places to stay, Seomyeon is convenient if you want to move around different parts of Busan. Gwangalli is good if you care about night views and beach atmosphere. Haeundae works well if you want the classic beach, Blue Line Park, Cheongsapo, or Gijang side. Nampo or Busan Station can be useful if you arrive by KTX and want easier access to markets, Gamcheon, or Yeongdo.",
      "Busan can also be a sea gateway. Some travelers use Busan as a starting point for a ferry trip to Tsushima, Japan. If you want to plan that, check the current ferry schedule, ticket rules, and passport requirements before making it part of your trip.",
      "The easiest way to enjoy Busan is not to chase every famous place at once. Pick one side of the city, understand the mood of that area, and leave enough time for the sea, food, and small streets to do their work.",
    ],
    culturalContext:
      "For Koreans, Busan is not just a beach destination. It is a city people visit for short getaways, food trips, night views, markets, and a feeling that is different from Seoul. A good Busan trip often mixes famous places with slower moments: a bowl of dwaeji gukbap, a walk near the sea, a cafe street, a bridge view at night, or a train ride along the coast.",
    tags: [
      "Busan",
      "Korea travel",
      "Travel course",
      "Food",
      "Haeundae",
      "Gwangalli",
    ],
    publishedAt: "2026-07-05",
    readingTime: "7 min read",
    seoTitle:
      "Where to Go in Busan for First-Time Visitors | HAEMIL Korea Travel Guide",
    seoDescription:
      "A map-friendly Busan travel guide for first-time visitors: Gamcheon Culture Village, Gwangalli, Haeundae, Blue Line Park, markets, food, stay areas, and more.",
    quickGuide: {
      sectionTitle: "Quick Busan guide",
      groups: [
        {
          title: "Getting there",
          items: [
            "From Seoul: Take the KTX to Busan Station.",
            "By air: Busan has Gimhae International Airport.",
            "First-time note: Busan is easy to add after Seoul, but the city itself is wide.",
          ],
        },
        {
          title: "Places to put on your map",
          items: [
            "West / Old Busan: Gamcheon Culture Village, Bupyeong Kkangtong Market, Huinnyeoul Culture Village, Yeongdo.",
            "Central / Gwangalli / Seomyeon: Jeonpo Cafe Street, Gwangalli Beach, Millak The Market.",
            "East / Haeundae / Gijang: Haeundae Beach, Haeridan-gil, Haeundae Blue Line Park, Mipo Beach Train / Sky Capsule, Cheongsapo, Haedong Yonggungsa Temple.",
          ],
        },
        {
          title: "What to eat",
          items: [
            "Dwaeji gukbap: Pork and rice soup many Koreans connect with Busan.",
            "Milmyeon: Cold wheat noodles, especially good in warm weather.",
            "Seafood: Raw fish, grilled seafood, fish cake, and market snacks.",
            "Market food: Good around Bupyeong Kkangtong Market, Nampo, and nearby areas.",
          ],
        },
        {
          title: "Where to stay",
          items: [
            "Seomyeon: Convenient if you want to move around different parts of Busan.",
            "Gwangalli: Good for night views, beach mood, and Gwangandaegyo Bridge.",
            "Haeundae: Good for the classic beach, Blue Line Park, Cheongsapo, and east Busan.",
            "Nampo / Busan Station: Useful for KTX access, markets, Gamcheon, and Yeongdo.",
          ],
        },
        {
          title: "Extra idea",
          items: [
            "Busan to Tsushima: Some travelers take a ferry from Busan to Tsushima, Japan. Always check current ferry schedules, ticket rules, and passport requirements before planning.",
          ],
        },
      ],
    },
    mapSpots: [
      {
        name: "Gamcheon Culture Village",
        area: "West / Old Busan",
        category: "Colorful hillside village",
        mapQuery: "Gamcheon Culture Village Busan",
        note: "A classic Busan photo stop with hillside streets and colorful village views.",
      },
      {
        name: "Bupyeong Kkangtong Market",
        area: "West / Old Busan",
        category: "Market food",
        mapQuery: "Bupyeong Kkangtong Market Busan",
        note: "Good for market snacks, older city energy, and the Nampo side of Busan.",
      },
      {
        name: "Huinnyeoul Culture Village",
        area: "West / Old Busan",
        category: "Sea-view alleys",
        mapQuery: "Huinnyeoul Culture Village Busan",
        note: "A Yeongdo seaside village with alleys, stairs, cafes, and ocean views.",
      },
      {
        name: "Jeonpo Cafe Street",
        area: "Central / Gwangalli / Seomyeon",
        category: "Cafes and local mood",
        mapQuery: "Jeonpo Cafe Street Busan",
        note: "A good cafe break area near Seomyeon with small streets and local energy.",
      },
      {
        name: "Gwangalli Beach",
        area: "Central / Gwangalli / Seomyeon",
        category: "Night view",
        mapQuery: "Gwangalli Beach Busan",
        note: "One of Busan’s easiest night-view stops, with Gwangandaegyo Bridge in the background.",
      },
      {
        name: "Millak The Market",
        area: "Central / Gwangalli / Seomyeon",
        category: "Food and evening stop",
        mapQuery: "Millak The Market Busan",
        note: "A casual stop near the Gwangalli side for food, drinks, and evening atmosphere.",
      },
      {
        name: "Haeundae Beach",
        area: "East / Haeundae / Gijang",
        category: "Classic beach",
        mapQuery: "Haeundae Beach Busan",
        note: "The most famous Busan beach and a useful base for the east side of the city.",
      },
      {
        name: "Haeridan-gil",
        area: "East / Haeundae / Gijang",
        category: "Small streets and cafes",
        mapQuery: "Haeridan-gil Busan",
        note: "A smaller Haeundae-area street with cafes, restaurants, and a calmer walking mood.",
      },
      {
        name: "Haeundae Blue Line Park",
        area: "East / Haeundae / Gijang",
        category: "Coastal train",
        mapQuery: "Haeundae Blue Line Park Busan",
        note: "A popular coastal route around Mipo, Cheongsapo, and Songjeong.",
      },
      {
        name: "Mipo Beach Train / Sky Capsule",
        area: "East / Haeundae / Gijang",
        category: "Coastal ride",
        mapQuery: "Mipo Sky Capsule Busan",
        note: "A visual coastal ride that many travelers connect with modern Busan travel.",
      },
      {
        name: "Cheongsapo",
        area: "East / Haeundae / Gijang",
        category: "Slow coastal stop",
        mapQuery: "Cheongsapo Busan",
        note: "A slower coastal area that pairs naturally with the Blue Line Park route.",
      },
      {
        name: "Haedong Yonggungsa Temple",
        area: "East / Haeundae / Gijang",
        category: "Temple by the sea",
        mapQuery: "Haedong Yonggungsa Temple Busan",
        note: "A sea-side temple often added to east Busan or Gijang-focused trips.",
      },
    ],
    mapSectionTitle: "Busan stops by area",
    relatedGuides: [
      {
        label: "Food guide",
        title: "What to Eat in Busan",
        href: "/food/what-to-eat-in-busan",
      },
    ],
  },
  {
    id: 12,
    title:
      "Old Seoul for First-Time Visitors: Jongno, Ikseon-dong, Insadong, and Bukchon",
    slug: "old-seoul-jongno-ikseondong-bukchon",
    category: "travel",
    categorySlug: "travel",
    categoryLabel: "Travel",
    description:
      "A map-friendly Old Seoul guide for first-time visitors, covering Jongno, Gyeongbokgung, Changdeokgung, Bukchon, Insadong, Ikseon-dong, Cheonggyecheon, and Gwangjang Market.",
    excerpt:
      "Old Seoul is where palaces, hanok alleys, tea houses, markets, and quiet city walks sit close together. This guide explains where to go and what each area feels like.",
    content: [
      "Old Seoul is not one single place. It is a cluster of palaces, alleys, markets, tea houses, and older streets around Jongno. For first-time visitors, this area is one of the easiest ways to feel that Seoul is not only a modern city of towers, cafes, and subway stations.",
      "The mood here is slower. You can move from a palace gate to a hanok alley, from a tea house to a market, and from a busy street to a quiet stream walk without leaving central Seoul. That mix is what makes Old Seoul useful for travelers who want more than one famous photo spot.",
      "Gyeongbokgung Palace is the most classic starting point. It feels formal, wide, and symbolic. If this is your first trip to Korea, it gives you a clear sense of royal Seoul and pairs easily with Gwanghwamun, Bukchon, or Insadong.",
      "Changdeokgung Palace has a slightly quieter feeling. It can feel less like a landmark checklist and more like a place to slow down. If you prefer softer walks and older textures, it is a good palace to keep on your map.",
      "Bukchon Hanok Village is one of the most recognizable old street areas in Seoul. The narrow roads, tiled roofs, and uphill views can feel very cinematic. But Bukchon is not a theme park. It is also a real residential neighborhood, so visit quietly and avoid treating private homes like photo props.",
      "Insadong is easier and more relaxed. It is a good place for tea houses, galleries, small craft shops, souvenirs, and traditional snacks. For many visitors, Insadong works well as a gentle cultural stop between palace walks and cafe time.",
      "Ikseon-dong has a different energy. The lanes are narrow and often crowded, but the area is full of small cafes, restaurants, and hanok-style storefronts. It is less formal than the palaces and more social than Bukchon, which makes it a useful stop for couples, friends, and anyone who wants Old Seoul with a trendier mood.",
      "Jongno ties these places together. It is not always polished, but that is part of the point. The area has offices, older restaurants, small streets, signs, food alleys, and daily city movement. It feels lived-in rather than staged.",
      "Cheonggyecheon Stream is a simple break between stops. It does not need to be the main reason to visit, but it helps soften the city. After walking through busy streets, a short stream walk can make central Seoul feel easier to understand.",
      "Gwangjang Market gives Old Seoul a louder and warmer food side. This is where the area becomes less quiet and more energetic. Visitors often come for market food, snacks, and the feeling of sitting close to the movement of the city.",
      "The best way to visit Old Seoul is not to rush every place in one day. Pick one palace, one alley area, one tea or cafe stop, and one food stop. That is enough to feel the area without turning the day into a checklist.",
      "For K-drama fans, Old Seoul can also feel familiar in a different way. It is not only about famous filming locations. The small streets, old walls, cafes, markets, and night walks are the kind of everyday spaces that Korean dramas often turn into emotional places.",
    ],
    culturalContext:
      "Old Seoul is important because it shows how old and new Korea sit close together. A palace may be near an office street. A hanok alley may be beside a trendy cafe. A market may be only a short walk from a stream in the middle of the city. For Korean people, these contrasts are normal parts of Seoul. For visitors, they can make the city feel layered instead of simple.",
    tags: [
      "Seoul",
      "Jongno",
      "Ikseon-dong",
      "Insadong",
      "Bukchon",
      "Korea travel",
      "Old Seoul",
    ],
    publishedAt: "2026-07-06",
    readingTime: "6 min read",
    seoTitle:
      "Old Seoul for First-Time Visitors | Jongno, Ikseon-dong, Insadong & Bukchon",
    seoDescription:
      "A map-friendly Old Seoul travel guide covering Jongno, Gyeongbokgung, Changdeokgung, Bukchon, Insadong, Ikseon-dong, Cheonggyecheon, and Gwangjang Market.",
    quickGuide: {
      sectionTitle: "Quick Old Seoul guide",
      groups: [
        {
          title: "What this area feels like",
          items: [
            "Old Seoul is slower than Gangnam, Hongdae, or Seongsu.",
            "This area is good for palaces, hanok streets, tea houses, markets, and quiet walks.",
            "It is one of the easiest places to feel the older side of Seoul without leaving the city center.",
          ],
        },
        {
          title: "Best places to put on your map",
          items: [
            "Gyeongbokgung Palace: A classic first palace stop near Gwanghwamun.",
            "Changdeokgung Palace: A calmer palace choice with a more garden-like mood.",
            "Bukchon Hanok Village: Hanok alleys and old residential streets between the palaces.",
            "Insadong: Tea houses, crafts, galleries, souvenirs, and traditional snacks.",
            "Ikseon-dong: Narrow hanok-style alleys with cafes, small restaurants, and date-course energy.",
            "Cheonggyecheon Stream: A simple city walk through central Seoul.",
            "Gwangjang Market: Market food, old Seoul energy, and a busy local eating scene.",
          ],
        },
        {
          title: "Good for",
          items: [
            "First-time visitors who want Seoul to feel more local and historical.",
            "K-drama fans who like alleys, small streets, and emotional city walks.",
            "Travelers who prefer walking, cafes, snacks, and cultural stops over a packed schedule.",
            "People who want a Seoul area that can work in any season.",
          ],
        },
        {
          title: "How to visit",
          items: [
            "Do not try to rush every stop in one straight line.",
            "Pick one palace, one alley area, one cafe or tea stop, and one food stop.",
            "Bukchon is a real residential area, so keep your voice low and be respectful.",
            "Gwangjang Market is better when you are ready to eat, not just look around.",
          ],
        },
        {
          title: "Pair with another HAEMIL guide",
          items: [
            "Read the K-drama Seoul guide if you want to understand why ordinary Seoul streets, cafes, and night walks often feel emotional on screen.",
          ],
        },
      ],
    },
    mapSectionTitle: "Old Seoul stops on your map",
    mapSpots: [
      {
        name: "Gyeongbokgung Palace",
        area: "Palaces & landmarks",
        category: "Palace",
        mapQuery: "Gyeongbokgung Palace Seoul",
        note: "A classic first palace stop near Gwanghwamun, good for understanding the scale and formality of old royal Seoul.",
      },
      {
        name: "Changdeokgung Palace",
        area: "Palaces & landmarks",
        category: "Palace",
        mapQuery: "Changdeokgung Palace Seoul",
        note: "A calmer palace choice with a softer mood, often paired with nearby Bukchon or Jongno walks.",
      },
      {
        name: "Bukchon Hanok Village",
        area: "Hanok streets & alleys",
        category: "Hanok neighborhood",
        mapQuery: "Bukchon Hanok Village Seoul",
        note: "A hanok neighborhood between the palaces, best visited slowly and respectfully because people still live there.",
      },
      {
        name: "Insadong",
        area: "Hanok streets & alleys",
        category: "Cultural street",
        mapQuery: "Insadong Seoul",
        note: "A central area for tea houses, galleries, crafts, souvenirs, and traditional snacks.",
      },
      {
        name: "Ikseon-dong",
        area: "Hanok streets & alleys",
        category: "Hanok alleys",
        mapQuery: "Ikseon-dong Seoul",
        note: "A narrow-lane neighborhood with hanok-style cafes, small restaurants, and an easy date-course mood.",
      },
      {
        name: "Jongno",
        area: "Central Jongno",
        category: "Central district",
        mapQuery: "Jongno Seoul",
        note: "A central Seoul district where old streets, offices, food alleys, and historic stops sit close together.",
      },
      {
        name: "Cheonggyecheon Stream",
        area: "Central Jongno",
        category: "City walk",
        mapQuery: "Cheonggyecheon Stream Seoul",
        note: "A simple stream walk through the city, useful when you want a break between palace, market, or shopping stops.",
      },
      {
        name: "Gwangjang Market",
        area: "Markets & food",
        category: "Market food",
        mapQuery: "Gwangjang Market Seoul",
        note: "A busy old market known for food stalls, snacks, and a more local eating atmosphere.",
      },
    ],
    relatedGuides: [
      {
        label: "Drama guide",
        title: "Why Seoul Feels Like a K-drama",
        href: "/dramas/why-seoul-feels-like-a-kdrama",
      },
      {
        label: "Travel guide",
        title: "West Seoul for First-Time Visitors",
        href: "/travel/west-seoul-hongdae-yeonnam-mangwon",
      },
      {
        label: "Travel guide",
        title: "Trendy Seoul for First-Time Visitors",
        href: "/travel/trendy-seoul-seongsu-apgujeong-cheongdam",
      },
      {
        label: "Travel guide",
        title: "Shopping Seoul for First-Time Visitors",
        href: "/travel/shopping-seoul-myeongdong-namsan-dongdaemun",
      },
    ],
  },
  {
    id: 13,
    title:
      "West Seoul for First-Time Visitors: Hongdae, Yeonnam, Mangwon, and Hapjeong",
    slug: "west-seoul-hongdae-yeonnam-mangwon",
    category: "travel",
    categorySlug: "travel",
    categoryLabel: "Travel",
    description:
      "A map-friendly West Seoul guide for first-time visitors, covering Hongdae, Yeonnam-dong, Gyeongui Line Forest Park, Mangwon, Hapjeong, and Sangsu.",
    excerpt:
      "West Seoul feels younger, looser, and more local than the palace side of the city. This guide explains where to go around Hongdae, Yeonnam, Mangwon, Hapjeong, and Sangsu.",
    content: [
      "West Seoul is the side of the city that feels young, casual, and easy to wander. It does not have the formal mood of the palaces or the polished feeling of Gangnam. Instead, this area is built around cafes, small shops, music, side streets, markets, and nights that can start without a strict plan.",
      "For first-time visitors, the easiest way to understand West Seoul is to think of Hongdae as the loud anchor. Around it, Yeonnam, Mangwon, Hapjeong, Sangsu, and Seogyo-dong each soften or change the mood. You can move from busy streets to quiet cafes, from a park walk to a market snack, and from dinner to a casual night out without leaving the area.",
      "Hongdae is the name most visitors hear first. It is connected with youth culture, street music, shops, nightlife, and creative energy. It can feel crowded, especially in the evening, but that busyness is part of its character. If you want Seoul to feel energetic rather than quiet, Hongdae is an easy place to start.",
      "Yeonnam-dong is close to Hongdae, but the mood is different. It feels slower, more cafe-heavy, and better for wandering without a fixed destination. The side streets are useful for small shops, dessert stops, simple restaurants, and casual photos that do not need a famous landmark.",
      "Gyeongui Line Forest Park helps connect the area on foot. It gives Yeonnam a softer feeling and makes the neighborhood easier to enjoy slowly. You do not need to treat it like a major tourist attraction. It works better as a walking line between cafes, streets, and small stops.",
      "Mangwon feels more local. It is not as loud as Hongdae and not as polished as trendier cafe districts. Mangwon Market is the easiest place to understand that mood. It is good for snacks, simple food, and the feeling of a neighborhood that people actually use in daily life.",
      "Mangwon also pairs well with the Han River. If you want the area to feel more open, Mangwon Hangang Park can be a good final stop after market food or cafe time. This is one reason West Seoul works well for slower travelers: it can move from dense streets to riverside space.",
      "Hapjeong is a good connector. It sits between Hongdae, Mangwon, and Sangsu, and it has plenty of cafes, restaurants, bookstores, and small streets without always feeling as crowded as central Hongdae. It is useful when you want the area to feel social but not too loud.",
      "Sangsu has a smaller and slightly more hidden mood. It is close enough to Hongdae to reach easily, but it often feels more relaxed. For visitors who like bars, cafes, and side streets, Sangsu can be a good way to enjoy West Seoul without staying only on the busiest streets.",
      "Seogyo-dong is part of the wider Hongdae feeling. It is useful to know because many restaurants, cafes, small venues, and evening streets sit around this area. You do not need to separate it too strongly from Hongdae, but it helps explain why the neighborhood feels bigger than one main street.",
      "The best way to visit West Seoul is not to rush every name on the map. Choose the mood first. If you want energy, start with Hongdae. If you want cafes and slower streets, start with Yeonnam. If you want market food and a more local feeling, start with Mangwon. If you want an easy evening, use Hapjeong or Sangsu as your base.",
      "Compared with Old Seoul, West Seoul feels less historical and more everyday. That is why the two areas work well together. Old Seoul shows palaces, hanok alleys, markets, and older city layers. West Seoul shows how younger people, small businesses, cafes, and casual night streets shape the city now.",
      "For K-drama fans, West Seoul can also feel familiar. It is not about one famous filming location. It is about the kind of everyday places dramas often use: a cafe table, a side street, a late walk, a market snack, a casual dinner, or a night when the city feels open-ended.",
    ],
    culturalContext:
      "West Seoul is important because it shows a less formal side of the city. Many visitors think of Seoul through palaces, shopping streets, or skyscrapers, but everyday Seoul is also made of neighborhoods where people meet friends, walk between cafes, eat simple food, browse small shops, and stay out a little later than planned. Hongdae, Yeonnam, Mangwon, Hapjeong, and Sangsu show that side of Seoul clearly.",
    tags: [
      "Seoul",
      "Hongdae",
      "Yeonnam",
      "Mangwon",
      "Hapjeong",
      "Korea travel",
      "West Seoul",
    ],
    publishedAt: "2026-07-06",
    readingTime: "6 min read",
    seoTitle:
      "West Seoul for First-Time Visitors | Hongdae, Yeonnam, Mangwon & Hapjeong",
    seoDescription:
      "A map-friendly West Seoul travel guide covering Hongdae, Yeonnam-dong, Gyeongui Line Forest Park, Mangwon Market, Hapjeong, and Sangsu.",
    quickGuide: {
      sectionTitle: "Quick West Seoul guide",
      groups: [
        {
          title: "What this area feels like",
          items: [
            "West Seoul feels younger, more casual, and less formal than the palace side of the city.",
            "This area is good for cafes, small shops, street music, casual nightlife, markets, and relaxed walks.",
            "Hongdae is the loudest anchor, but Yeonnam, Mangwon, Hapjeong, and Sangsu make the area feel more local.",
          ],
        },
        {
          title: "Best places to put on your map",
          items: [
            "Hongdae: Youth culture, street energy, music, shops, and nightlife.",
            "Yeonnam-dong: Cafes, side streets, small stores, and slower walks near Gyeongui Line Forest Park.",
            "Gyeongui Line Forest Park: A long green walking path that makes the area easier to enjoy slowly.",
            "Mangwon Market: A local market stop for snacks, simple food, and everyday neighborhood energy.",
            "Mangwon Hangang Park: A good riverside pairing if you want to end the area with open space.",
            "Hapjeong: Cafes, restaurants, bookstores, and a calmer bridge between Hongdae and Mangwon.",
            "Sangsu: Smaller streets, bars, cafes, and a softer alternative to the busiest Hongdae blocks.",
          ],
        },
        {
          title: "Good for",
          items: [
            "First-time visitors who want Seoul to feel youthful and casual.",
            "Travelers who like cafes, walking, small shops, and street atmosphere.",
            "People who want a local-feeling area without leaving central Seoul too far.",
            "Anyone who wants a contrast with Old Seoul, palaces, and hanok streets.",
          ],
        },
        {
          title: "How to visit",
          items: [
            "Do not treat West Seoul as one checklist.",
            "Pick one main area, then walk into nearby streets instead of jumping too quickly.",
            "Hongdae is better when you want energy; Yeonnam and Mangwon are better when you want a slower mood.",
            "If you visit at night, keep the plan simple: dinner, a walk, and one cafe or bar area.",
          ],
        },
        {
          title: "Pair with another HAEMIL guide",
          items: [
            "Read the Old Seoul guide if you want the traditional palace-and-alley side of the city.",
            "Read the K-drama Seoul guide if you want to understand why cafes, small streets, and night walks often feel emotional on screen.",
          ],
        },
      ],
    },
    mapSectionTitle: "West Seoul stops on your map",
    mapSpots: [
      {
        name: "Hongdae",
        area: "Hongdae & street energy",
        category: "Neighborhood",
        mapQuery: "Hongdae Seoul",
        note: "The loudest anchor of West Seoul, known for youth culture, street energy, shops, music, and casual nightlife.",
      },
      {
        name: "Yeonnam-dong",
        area: "Yeonnam & walks",
        category: "Neighborhood",
        mapQuery: "Yeonnam-dong Seoul",
        note: "A cafe-and-side-street area near Hongdae, good for slower walks, small shops, and a more relaxed mood.",
      },
      {
        name: "Gyeongui Line Forest Park",
        area: "Yeonnam & walks",
        category: "Park",
        mapQuery: "Gyeongui Line Forest Park Seoul",
        note: "A long green walking path that runs through Yeonnam and helps make West Seoul feel easier to explore on foot.",
      },
      {
        name: "Mangwon Market",
        area: "Mangwon & local food",
        category: "Market",
        mapQuery: "Mangwon Market Seoul",
        note: "A local market stop for snacks, simple meals, and everyday neighborhood energy.",
      },
      {
        name: "Mangwon Hangang Park",
        area: "Mangwon & local food",
        category: "Riverside",
        mapQuery: "Mangwon Hangang Park Seoul",
        note: "A riverside pairing for Mangwon, useful when you want open space after market food or cafe streets.",
      },
      {
        name: "Hapjeong",
        area: "Hapjeong & Sangsu",
        category: "Neighborhood",
        mapQuery: "Hapjeong Seoul",
        note: "A calmer connector area with cafes, restaurants, bookstores, and easy access toward Hongdae, Sangsu, and Mangwon.",
      },
      {
        name: "Sangsu",
        area: "Hapjeong & Sangsu",
        category: "Neighborhood",
        mapQuery: "Sangsu Seoul",
        note: "A smaller-street area with cafes, bars, and a softer alternative to the busiest Hongdae blocks.",
      },
      {
        name: "Seogyo-dong",
        area: "Hongdae & street energy",
        category: "Neighborhood",
        mapQuery: "Seogyo-dong Seoul",
        note: "A useful Hongdae-side area for restaurants, cafes, small venues, and casual evening walks.",
      },
    ],
    relatedGuides: [
      {
        label: "Travel guide",
        title: "Old Seoul for First-Time Visitors",
        href: "/travel/old-seoul-jongno-ikseondong-bukchon",
      },
      {
        label: "Drama guide",
        title: "Why Seoul Feels Like a K-drama",
        href: "/dramas/why-seoul-feels-like-a-kdrama",
      },
      {
        label: "Travel guide",
        title: "Trendy Seoul for First-Time Visitors",
        href: "/travel/trendy-seoul-seongsu-apgujeong-cheongdam",
      },
      {
        label: "Travel guide",
        title: "Shopping Seoul for First-Time Visitors",
        href: "/travel/shopping-seoul-myeongdong-namsan-dongdaemun",
      },
    ],
  },
  {
    id: 14,
    title:
      "Trendy Seoul for First-Time Visitors: Seongsu, Apgujeong, Cheongdam, and Cafe Streets",
    slug: "trendy-seoul-seongsu-apgujeong-cheongdam",
    category: "travel",
    categorySlug: "travel",
    categoryLabel: "Travel",
    description:
      "A map-friendly Trendy Seoul guide for first-time visitors, covering Seongsu, Seoul Forest, Apgujeong Rodeo, Cheongdam, Dosan Park, Garosu-gil, and Sinsa.",
    excerpt:
      "Trendy Seoul is where cafes, pop-ups, fashion streets, beauty stores, and polished Gangnam energy come together. This guide explains where to go and what each area feels like.",
    content: [
      "Trendy Seoul is not only one neighborhood. It is a mood that appears in cafes, pop-ups, fashion streets, beauty stores, design spaces, and polished city blocks. For first-time visitors, this side of Seoul can feel very different from palaces, markets, or old alleys.",
      "The easiest way to understand Trendy Seoul is to separate it into two feelings. Seongsu feels creative, cafe-heavy, and a little industrial. Apgujeong, Cheongdam, Sinsa, and Garosu-gil feel more polished, fashion-focused, and Gangnam-side.",
      "Seongsu is one of the best places to start if you want modern Seoul without going straight to luxury shopping. The area has cafes, converted industrial spaces, pop-ups, design stores, and brand experiences. It can feel busy, but it still has a creative street mood that makes walking part of the visit.",
      "Seoul Forest gives Seongsu a softer side. It is not only a park stop. It helps balance the area. After moving through cafes, shops, and crowded streets, Seoul Forest gives you open space and a slower pace.",
      "Seongsu Cafe Street is useful because it shows why this neighborhood became so popular. The point is not to visit one famous cafe and leave. The better way is to walk slowly, look at the storefronts, and choose a place that matches your mood.",
      "Apgujeong Rodeo has a different feeling. It is more polished, more style-conscious, and more connected with fashion, beauty, restaurants, and nightlife. If Hongdae feels young and loose, Apgujeong Rodeo feels more dressed-up.",
      "Cheongdam is the high-end side of this guide. Luxury shops, entertainment-company atmosphere, and polished streets shape the area. It may not feel casual, but it helps visitors understand another side of Seoul: the side connected with image, status, fashion, and entertainment.",
      "Dosan Park is a good softer stop between Apgujeong and Cheongdam. The area around it has cafes, restaurants, and quieter streets where the mood feels less rushed. It is useful when you want Gangnam style without staying only on the busiest shopping streets.",
      "Garosu-gil gives Sinsa a stylish walking route. It is known for cafes, boutiques, fashion stores, and tree-lined streets. The mood can change over time, but it remains useful for visitors who want a simple Gangnam-side walk with shopping and cafe stops.",
      "Sinsa is a good base for this part of Seoul. It connects Garosu-gil, cafes, shopping, and nearby Gangnam areas without feeling as intense as some parts of Apgujeong or Cheongdam. It works well for visitors who want a polished area but still want to walk casually.",
      "The best way to visit Trendy Seoul is to choose your mood first. If you want cafes, pop-ups, and creative streets, start with Seongsu. If you want fashion, beauty, and a more polished city feeling, start with Apgujeong, Cheongdam, or Sinsa.",
      "Compared with Old Seoul, this area is less about history and more about what feels current. Compared with West Seoul, it feels less loose and more curated. That contrast is useful. It shows that Seoul is not one style of city. It changes depending on which side you enter.",
      "For K-drama fans, Trendy Seoul can also feel familiar. These are the kinds of areas where a cafe table, beauty store, brand event, quiet street, or night drive can become part of a scene. The emotion may be fictional, but the city mood is real.",
    ],
    culturalContext:
      "Trendy Seoul changes quickly because many neighborhoods are shaped by cafes, brands, pop-ups, fashion, beauty, and social media attention. A street can feel popular for a few years and then shift again. For visitors, the best approach is not to chase every famous store. It is better to understand the mood: Seoul as a city where style, image, everyday walking, and commercial spaces often blend together.",
    tags: [
      "Seoul",
      "Seongsu",
      "Apgujeong",
      "Cheongdam",
      "Garosu-gil",
      "Korea travel",
      "Trendy Seoul",
    ],
    publishedAt: "2026-07-06",
    readingTime: "6 min read",
    seoTitle:
      "Trendy Seoul for First-Time Visitors | Seongsu, Apgujeong, Cheongdam & Cafe Streets",
    seoDescription:
      "A map-friendly Trendy Seoul travel guide covering Seongsu, Seoul Forest, Apgujeong Rodeo, Cheongdam, Dosan Park, Garosu-gil, and Sinsa.",
    quickGuide: {
      sectionTitle: "Quick Trendy Seoul guide",
      groups: [
        {
          title: "What this area feels like",
          items: [
            "Trendy Seoul feels more polished, brand-focused, and style-conscious than Old Seoul or West Seoul.",
            "This area is good for cafes, pop-ups, fashion streets, beauty stores, design spaces, and people-watching.",
            "Seongsu feels creative and cafe-heavy, while Apgujeong and Cheongdam feel more polished and upscale.",
          ],
        },
        {
          title: "Best places to put on your map",
          items: [
            "Seongsu: Cafes, converted industrial spaces, pop-ups, design stores, and creative energy.",
            "Seoul Forest: A large green break beside Seongsu, useful when you want the area to feel less crowded.",
            "Seongsu Cafe Street: A simple way to understand why this neighborhood became known for cafes and brand spaces.",
            "Apgujeong Rodeo: Fashion, beauty, restaurants, and a polished Gangnam street mood.",
            "Cheongdam: Luxury shops, entertainment-company atmosphere, and a more high-end side of Seoul.",
            "Dosan Park: A calmer pocket near Apgujeong and Cheongdam, good for cafes and a slower stop.",
            "Garosu-gil: A Sinsa street known for fashion, cafes, boutiques, and a stylish walking mood.",
            "Sinsa: A useful base for Garosu-gil, cafes, shopping, and a softer Gangnam-side walk.",
          ],
        },
        {
          title: "Good for",
          items: [
            "First-time visitors who want modern Seoul, not only palaces, markets, or nightlife.",
            "Travelers interested in cafes, pop-ups, K-beauty, fashion, and brand spaces.",
            "People who want a polished contrast with Hongdae, Mangwon, Jongno, or Bukchon.",
            "Visitors who like walking slowly, browsing stores, and stopping often.",
          ],
        },
        {
          title: "How to visit",
          items: [
            "Do not try to visit every trendy place in one day.",
            "Pick one side first: Seongsu for creative cafes and pop-ups, or Apgujeong and Cheongdam for polished Gangnam energy.",
            "Trendy areas change quickly, so treat this guide as a mood map, not a fixed checklist.",
            "If a cafe or pop-up is too crowded, walk one or two streets away and look for a quieter stop.",
          ],
        },
        {
          title: "Pair with another HAEMIL guide",
          items: [
            "Read the Old Seoul guide if you want palaces, hanok alleys, markets, and older city layers.",
            "Read the West Seoul guide if you want a younger, looser, more casual side of the city.",
            "Read the K-drama Seoul guide if you want to understand why cafes, streets, and night views often feel emotional on screen.",
          ],
        },
      ],
    },
    mapSectionTitle: "Trendy Seoul stops on your map",
    mapSpots: [
      {
        name: "Seongsu",
        area: "Seongsu & creative streets",
        category: "Neighborhood",
        mapQuery: "Seongsu Seoul",
        note: "A creative east Seoul area known for cafes, converted industrial spaces, pop-ups, design stores, and brand experiences.",
      },
      {
        name: "Seoul Forest",
        area: "Seongsu & creative streets",
        category: "Park",
        mapQuery: "Seoul Forest Seoul",
        note: "A large green stop near Seongsu, useful when you want a quieter break between cafes, shops, and pop-up spaces.",
      },
      {
        name: "Seongsu Cafe Street",
        area: "Seongsu & creative streets",
        category: "Cafe area",
        mapQuery: "Seongsu Cafe Street Seoul",
        note: "A cafe-heavy area that helps explain why Seongsu became one of Seoul’s most talked-about neighborhoods.",
      },
      {
        name: "Apgujeong Rodeo",
        area: "Apgujeong & Cheongdam",
        category: "Shopping street",
        mapQuery: "Apgujeong Rodeo Street Seoul",
        note: "A polished Gangnam-side street for fashion, beauty, restaurants, and a more style-conscious Seoul mood.",
      },
      {
        name: "Cheongdam",
        area: "Apgujeong & Cheongdam",
        category: "Neighborhood",
        mapQuery: "Cheongdam Seoul",
        note: "A high-end area connected with luxury shopping, entertainment-company atmosphere, and polished city streets.",
      },
      {
        name: "Dosan Park",
        area: "Apgujeong & Cheongdam",
        category: "Park",
        mapQuery: "Dosan Park Seoul",
        note: "A calmer pocket near Apgujeong and Cheongdam, good for cafes, short walks, and a slower stop.",
      },
      {
        name: "Garosu-gil",
        area: "Sinsa & Garosu-gil",
        category: "Shopping street",
        mapQuery: "Garosu-gil Seoul",
        note: "A stylish Sinsa street known for fashion stores, cafes, boutiques, and an easy walking mood.",
      },
      {
        name: "Sinsa",
        area: "Sinsa & Garosu-gil",
        category: "Neighborhood",
        mapQuery: "Sinsa Seoul",
        note: "A useful base for Garosu-gil, cafes, shopping, and a softer Gangnam-side neighborhood walk.",
      },
    ],
    relatedGuides: [
      {
        label: "Travel guide",
        title: "Old Seoul for First-Time Visitors",
        href: "/travel/old-seoul-jongno-ikseondong-bukchon",
      },
      {
        label: "Travel guide",
        title: "West Seoul for First-Time Visitors",
        href: "/travel/west-seoul-hongdae-yeonnam-mangwon",
      },
      {
        label: "Drama guide",
        title: "Why Seoul Feels Like a K-drama",
        href: "/dramas/why-seoul-feels-like-a-kdrama",
      },
      {
        label: "Travel guide",
        title: "Shopping Seoul for First-Time Visitors",
        href: "/travel/shopping-seoul-myeongdong-namsan-dongdaemun",
      },
    ],
  },
  {
    id: 15,
    title:
      "Shopping Seoul for First-Time Visitors: Myeongdong, Namsan, Dongdaemun, and DDP",
    slug: "shopping-seoul-myeongdong-namsan-dongdaemun",
    category: "travel",
    categorySlug: "travel",
    categoryLabel: "Travel",
    description:
      "A map-friendly Shopping Seoul guide for first-time visitors, covering Myeongdong, Namsan, Euljiro, Cheonggyecheon, Dongdaemun, Dongdaemun Fashion Market, and DDP.",
    excerpt:
      "Shopping Seoul is where first-time shopping, cosmetics, street food, night views, design spaces, and late-night fashion energy come together around Myeongdong, Namsan, and Dongdaemun.",
    content: [
      "Shopping Seoul is not only about buying things. For first-time visitors, it is often the easiest way to understand central Seoul: bright streets, cosmetics shops, snacks, signs, night views, design buildings, and busy movement between subway stations.",
      "This guide focuses on the Myeongdong, Namsan, Euljiro, Cheonggyecheon, Dongdaemun, and DDP area. These places do not all have the same mood, but they sit close enough to work as one shopping-and-city zone.",
      "Myeongdong is the classic first shopping stop. It is tourist-friendly, easy to understand, and full of cosmetics stores, street food, snacks, souvenirs, and simple browsing. It can feel crowded and commercial, but that is also why it works well for a first visit.",
      "Myeongdong Shopping Street is the busiest part of the area. It is not the place to look for a quiet local mood. It is better for quick shopping, trying snacks, comparing cosmetics stores, and getting a simple sense of how busy central Seoul can feel.",
      "Namsan Seoul Tower gives the area a different feeling. After shopping streets and bright signs, the city view makes Seoul feel wider and calmer. This is why many visitors pair Myeongdong with Namsan, especially near sunset or at night.",
      "Namsan itself is useful because it softens the area. It is close to the city center, but it adds trees, hills, walking paths, and views. If Myeongdong feels too crowded, Namsan can make the same area feel less compressed.",
      "Euljiro is the older and rougher contrast near this shopping zone. It has restaurants, cafes, bars, older signs, printing shops, small streets, and a more local atmosphere. It does not feel as easy or polished as Myeongdong, but it helps show another layer of central Seoul.",
      "Cheonggyecheon Stream is a simple way to move through the city. It appears in more than one Seoul guide because it connects different moods: old streets, shopping areas, office blocks, markets, and Dongdaemun. In this guide, it works as a break between busy shopping streets and Dongdaemun.",
      "Dongdaemun has a different energy from Myeongdong. It feels more practical, faster, and more connected to fashion markets. The area is known for shopping buildings, wholesale energy, late-night movement, and busy city streets.",
      "Dongdaemun Fashion Market is useful if you want to understand why the area has a fashion identity. You do not need to buy something for it to be interesting. The point is to feel the speed and density of a market area built around clothes, fabric, and shopping.",
      "Dongdaemun Design Plaza, usually called DDP, gives Dongdaemun a more modern and design-focused side. Its shape, open space, exhibitions, and lights make the area feel different from ordinary shopping streets. At night, DDP can feel especially photo-friendly.",
      "The best way to visit Shopping Seoul is to choose one side first. If you want easy shopping, cosmetics, snacks, and a night view, use Myeongdong and Namsan. If you want older streets, design, and fashion-market energy, use Euljiro, Cheonggyecheon, Dongdaemun, and DDP.",
      "Compared with Old Seoul, this area is less quiet and less historical. Compared with West Seoul, it is more tourist-friendly and commercial. Compared with Trendy Seoul, it is less curated and more practical. That mix is what makes it useful for first-time visitors.",
      "For K-drama fans, this side of Seoul can also feel familiar. Night views, bright streets, subway exits, shopping bags, and walks after dinner often appear on screen because they are normal parts of city life. The locations may not always be famous, but the mood is easy to recognize.",
    ],
    culturalContext:
      "Shopping areas in Seoul are not only places to buy things. They are also meeting points, food stops, night-view routes, subway hubs, and everyday city spaces. Myeongdong, Namsan, Euljiro, Cheonggyecheon, Dongdaemun, and DDP show how Seoul mixes tourism, commerce, design, old streets, and late-night movement in one central area.",
    tags: [
      "Seoul",
      "Myeongdong",
      "Namsan",
      "Dongdaemun",
      "DDP",
      "Korea travel",
      "Shopping Seoul",
    ],
    publishedAt: "2026-07-06",
    readingTime: "6 min read",
    seoTitle:
      "Shopping Seoul for First-Time Visitors | Myeongdong, Namsan, Dongdaemun & DDP",
    seoDescription:
      "A map-friendly Shopping Seoul travel guide covering Myeongdong, Namsan Seoul Tower, Euljiro, Cheonggyecheon, Dongdaemun, Dongdaemun Fashion Market, and DDP.",
    quickGuide: {
      sectionTitle: "Quick Shopping Seoul guide",
      groups: [
        {
          title: "What this area feels like",
          items: [
            "Shopping Seoul feels practical, busy, and easy for first-time visitors.",
            "This area is good for cosmetics, street food, shopping streets, night views, design spaces, and late-night fashion energy.",
            "Myeongdong and Namsan feel tourist-friendly, while Euljiro and Dongdaemun add an older, busier, more city-like mood.",
          ],
        },
        {
          title: "Best places to put on your map",
          items: [
            "Myeongdong: A classic first shopping area for cosmetics, street food, and easy tourist energy.",
            "Myeongdong Shopping Street: The busiest part of the area, useful for quick browsing and snacks.",
            "Namsan Seoul Tower: A simple night-view stop that pairs well with Myeongdong.",
            "Namsan: A hill and park area that gives the shopping district a softer city-view side.",
            "Euljiro: Older streets, restaurants, cafes, bars, and a more local contrast near central Seoul.",
            "Cheonggyecheon Stream: A useful walking line between central shopping, Euljiro, and Dongdaemun.",
            "Dongdaemun: Fashion markets, wholesale energy, late-night shopping mood, and busy city streets.",
            "Dongdaemun Fashion Market: A practical stop for understanding the area’s fashion-market identity.",
            "DDP: A design landmark, exhibition space, and photo-friendly night stop.",
          ],
        },
        {
          title: "Good for",
          items: [
            "First-time visitors who want an easy shopping base.",
            "Travelers looking for cosmetics, snacks, souvenirs, and simple city movement.",
            "People who want to pair shopping with a night view or design stop.",
            "Visitors who want a contrast with Old Seoul, West Seoul, and Trendy Seoul.",
          ],
        },
        {
          title: "How to visit",
          items: [
            "Do not treat this area as one long checklist.",
            "Use Myeongdong and Namsan together if you want shopping plus a night view.",
            "Use Euljiro, Cheonggyecheon, Dongdaemun, and DDP together if you want older streets, design, and late shopping energy.",
            "If Myeongdong feels too crowded, step away from the main shopping street and use it as a short stop, not your whole day.",
          ],
        },
        {
          title: "Pair with another HAEMIL guide",
          items: [
            "Read the Old Seoul guide if you want palaces, hanok alleys, markets, and older city layers.",
            "Read the West Seoul guide if you want a younger, looser, more casual side of the city.",
            "Read the Trendy Seoul guide if you want cafes, pop-ups, fashion, beauty, and polished Gangnam energy.",
            "Read the K-drama Seoul guide if you want to understand why night views, streets, and everyday spaces often feel emotional on screen.",
          ],
        },
      ],
    },
    mapSectionTitle: "Shopping Seoul stops on your map",
    mapSpots: [
      {
        name: "Myeongdong",
        area: "Myeongdong & Namsan",
        category: "Neighborhood",
        mapQuery: "Myeongdong Seoul",
        note: "A classic first shopping area for cosmetics, street food, souvenirs, and easy tourist energy.",
      },
      {
        name: "Myeongdong Shopping Street",
        area: "Myeongdong & Namsan",
        category: "Shopping street",
        mapQuery: "Myeongdong Shopping Street Seoul",
        note: "The busiest part of Myeongdong, useful for quick browsing, snacks, cosmetics, and first-time Seoul shopping.",
      },
      {
        name: "Namsan Seoul Tower",
        area: "Myeongdong & Namsan",
        category: "Viewpoint",
        mapQuery: "Namsan Seoul Tower",
        note: "A simple night-view stop that pairs well with Myeongdong when you want the city to feel more open.",
      },
      {
        name: "Namsan",
        area: "Myeongdong & Namsan",
        category: "Park",
        mapQuery: "Namsan Seoul",
        note: "A hill and park area that gives the shopping district a softer walking and city-view side.",
      },
      {
        name: "Euljiro",
        area: "Euljiro & Cheonggyecheon",
        category: "Neighborhood",
        mapQuery: "Euljiro Seoul",
        note: "An older central area with restaurants, cafes, bars, signs, and a more local contrast near shopping streets.",
      },
      {
        name: "Cheonggyecheon Stream",
        area: "Euljiro & Cheonggyecheon",
        category: "Walk",
        mapQuery: "Cheonggyecheon Stream Seoul",
        note: "A useful walking line between central Seoul, Euljiro, and Dongdaemun when the streets feel crowded.",
      },
      {
        name: "Dongdaemun",
        area: "Dongdaemun & DDP",
        category: "Neighborhood",
        mapQuery: "Dongdaemun Seoul",
        note: "A busy east-central area known for fashion markets, late-night shopping mood, and practical city energy.",
      },
      {
        name: "Dongdaemun Fashion Market",
        area: "Dongdaemun & DDP",
        category: "Market",
        mapQuery: "Dongdaemun Fashion Market Seoul",
        note: "A practical stop for understanding Dongdaemun’s fashion-market identity and wholesale shopping atmosphere.",
      },
      {
        name: "Dongdaemun Design Plaza",
        area: "Dongdaemun & DDP",
        category: "Design landmark",
        mapQuery: "Dongdaemun Design Plaza Seoul",
        note: "A design landmark, exhibition space, and photo-friendly stop that feels especially strong at night.",
      },
    ],
    relatedGuides: [
      {
        label: "Travel guide",
        title: "Old Seoul for First-Time Visitors",
        href: "/travel/old-seoul-jongno-ikseondong-bukchon",
      },
      {
        label: "Travel guide",
        title: "West Seoul for First-Time Visitors",
        href: "/travel/west-seoul-hongdae-yeonnam-mangwon",
      },
      {
        label: "Travel guide",
        title: "Trendy Seoul for First-Time Visitors",
        href: "/travel/trendy-seoul-seongsu-apgujeong-cheongdam",
      },
      {
        label: "Drama guide",
        title: "Why Seoul Feels Like a K-drama",
        href: "/dramas/why-seoul-feels-like-a-kdrama",
      },
    ],
  },
  {
    id: 10,
    title:
      "What to Eat in Busan: Dwaeji Gukbap, Milmyeon, Seafood, and Market Snacks",
    slug: "what-to-eat-in-busan",
    category: "food",
    categorySlug: "food",
    categoryLabel: "Food",
    description:
      "A simple Busan food guide for first-time visitors, covering pork rice soup, cold wheat noodles, seafood, fish cake, market food, and where to eat by area.",
    excerpt:
      "Busan food does not have to be complicated. Start with dwaeji gukbap, milmyeon, seafood, fish cake, and market snacks, then choose an area that fits your route.",
    content: [
      "Busan food is not about making every meal complicated. For many Korean travelers, the best Busan meals are simple: a hot bowl of soup, cold noodles after walking, seafood near the coast, or market snacks while moving through an older part of the city.",
      "If this is your first time in Busan, start with a few foods that appear again and again in local travel conversations: dwaeji gukbap, milmyeon, seafood, eomuk, and market food. You do not need to eat everything in one trip. Pick the food that fits the area you are already visiting.",
      "Dwaeji gukbap is one of the easiest Busan foods to understand. It is a pork and rice soup, usually warm, filling, and straightforward. For many Koreans, it feels like a practical Busan meal rather than a special occasion food.",
      "The good thing about dwaeji gukbap is that it works almost any time. It can be lunch after arriving at Busan Station, dinner after walking around the city, or a simple meal when you do not want to think too much. If you want your first Busan food to feel local and comforting, this is a strong place to start.",
      "Milmyeon is a cold wheat noodle dish often connected with Busan. It is lighter than soup and especially good when the weather is warm. The taste can feel refreshing, slightly sweet, tangy, and cold in a way that makes sense after walking around beaches, markets, or cafe streets.",
      "If dwaeji gukbap feels like the warm side of Busan, milmyeon feels like the cool side. It is a good choice when you want something quick, casual, and not too heavy.",
      "Seafood is another natural part of Busan. You do not have to plan a luxury seafood meal to enjoy it. Depending on your route, seafood can mean raw fish, grilled shellfish, fish cake, or a simple meal near a market or beach area.",
      "Gwangalli and Haeundae are easy areas to connect with seafood because they already have a beach mood. Nampo and nearby market areas can feel more casual and older. The best choice depends less on one famous restaurant and more on where you are already spending the day.",
      "Eomuk, or Korean fish cake, is one of the easiest foods to try while walking. Busan is strongly associated with fish cake, and it works well as a snack rather than a full meal. It is useful when you are near markets, stations, or older shopping streets.",
      "Market food is good when you do not want a formal restaurant. Around places like Bupyeong Kkangtong Market or Nampo, you can try smaller foods, snacks, and simple dishes while walking. This kind of meal can feel less planned, but sometimes that is what makes it memorable.",
      "Where you stay can also shape what you eat. Seomyeon is convenient if you want many restaurant choices and easy movement around the city. Nampo and Bupyeong are better for market food and older Busan atmosphere. Gwangalli works well for evening meals, seafood, and beach mood. Haeundae is useful if your route is focused on the classic beach, Blue Line Park, Cheongsapo, or east Busan.",
      "The easiest way to eat well in Busan is to match the food to the area. If you are near old Busan, try market food or fish cake. If you are near the coast, think about seafood. If you want something warm and local, choose dwaeji gukbap. If the day is hot, milmyeon makes sense.",
      "A good Busan food trip does not need to become a checklist. Eat one thing well, leave room for the next area, and let the city’s food feel connected to the route you are already walking.",
    ],
    culturalContext:
      "For Koreans, Busan food often feels practical, local, and tied to movement through the city. A bowl of dwaeji gukbap, a plate of milmyeon, seafood near the coast, or snacks in a market are not only foods to try. They are part of how people remember a short Busan trip: where they walked, where they rested, and what kind of mood the city had that day.",
    tags: [
      "Busan",
      "Korean food",
      "Food",
      "Dwaeji gukbap",
      "Milmyeon",
      "Seafood",
    ],
    publishedAt: "2026-07-06",
    readingTime: "6 min read",
    seoTitle:
      "What to Eat in Busan for First-Time Visitors | HAEMIL Korea Food Guide",
    seoDescription:
      "A simple guide to Busan food for first-time visitors: dwaeji gukbap, milmyeon, seafood, fish cake, market snacks, and where to eat by area.",
    heroImage: {
      src: "/food/busan/pixabay-dwaeji-gukbap.jpg",
      alt: "A bowl of dwaeji gukbap served with rice, pork, and side dishes",
      credit: "Photo from Pixabay",
      sourceUrl:
        "https://pixabay.com/ko/photos/%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5-%ED%95%9C%EA%B5%AD-%EC%9A%94%EB%A6%AC-%EC%88%98%ED%94%84-10220566/",
      license: "Pixabay Content License",
    },
    galleryImages: [
      {
        group: "Dwaeji gukbap",
        src: "/food/busan/dwaeji-gukbap-1.jpg",
        alt: "A local-style bowl of dwaeji gukbap with rice and side dishes",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Dwaeji gukbap",
        src: "/food/busan/dwaeji-gukbap-2.jpg",
        alt: "Close-up of dwaeji gukbap with pork, green onions, and seasoning",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Milmyeon",
        src: "/food/busan/pixabay-milmyeon.jpg",
        alt: "A bowl of Busan milmyeon with cold broth, noodles, egg, and red sauce",
        credit: "Photo from Pixabay",
        sourceUrl:
          "https://pixabay.com/ko/photos/%EB%AC%BC%EB%83%89%EB%A9%B4-%EB%B0%80%EB%A9%B4-%EB%B6%80%EC%82%B0%EB%B0%80%EB%A9%B4-3683050/",
        license: "Pixabay Content License",
      },
      {
        group: "Milmyeon",
        src: "/food/busan/milmyeon.jpg",
        alt: "A bowl of milmyeon with cold broth and red sauce on a metal table",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Milmyeon",
        src: "/food/busan/bibim-milmyeon.jpg",
        alt: "Bibim milmyeon with spicy red sauce and sesame seeds",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Eomuk / fish cake",
        src: "/food/busan/busan-eomuk.jpg",
        alt: "Busan eomuk fish cake skewers at a street food stall",
        credit: "Photo by travel oriented, via Wikimedia Commons",
        sourceUrl: "https://en.wikipedia.org/wiki/File:Street_eomuk.jpg",
        license: "CC BY-SA 2.0",
      },
      {
        group: "Seafood",
        src: "/food/busan/seafood-sashimi-1.jpg",
        alt: "A plate of assorted sashimi served with side dishes",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Seafood",
        src: "/food/busan/seafood-sashimi-2.jpg",
        alt: "A large Korean seafood sashimi platter with side dishes",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Seafood",
        src: "/food/busan/seafood-sashimi-3.jpg",
        alt: "Korean sashimi meal served with many small side dishes",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
      {
        group: "Seafood",
        src: "/food/busan/seafood-sashimi-4.jpg",
        alt: "Assorted seafood sashimi plate with shrimp, fish, and side dishes",
        credit: "Photo by HAEMIL",
        license: "Owned by HAEMIL",
      },
    ],
    quickGuide: {
      sectionTitle: "Quick Busan food guide",
      groups: [
        {
          title: "Start with these foods",
          items: [
            "Dwaeji gukbap: Pork and rice soup that many Koreans connect with Busan.",
            "Milmyeon: Cold wheat noodles, especially good in warm weather.",
            "Seafood: Raw fish, grilled seafood, shellfish, and simple coastal meals.",
            "Eomuk: Korean fish cake, easy to find around markets and street-food areas.",
            "Market snacks: Good when you want to taste small things instead of planning a full meal.",
          ],
        },
        {
          title: "If it is your first Busan meal",
          items: [
            "Choose dwaeji gukbap if you want something warm, filling, and local.",
            "Choose milmyeon if the weather is hot or you want something lighter.",
            "Choose seafood if you are staying near the coast or visiting a market.",
            "Choose market food if you want a casual stop while walking around Nampo or Bupyeong.",
          ],
        },
        {
          title: "Where to eat by area",
          items: [
            "Seomyeon: Convenient for restaurants, casual meals, and moving around the city.",
            "Nampo / Bupyeong: Good for markets, snacks, fish cake, and older Busan food mood.",
            "Gwangalli: Good for seafood, evening meals, and beach atmosphere.",
            "Haeundae: Good if you are staying near the beach or exploring east Busan.",
          ],
        },
        {
          title: "Easy ordering note",
          items: [
            "Many Busan foods are simple and direct. You do not need to find the most famous restaurant for every meal.",
            "If a place is busy with locals, has a short menu, and specializes in one dish, that is often enough.",
            "For soups and noodles, look at what people nearby are eating before deciding.",
          ],
        },
        {
          title: "Pair with a route",
          items: [
            "If you are planning where to go in Busan, read the Busan travel guide too.",
            "Food is easier when it follows your route: markets on the west side, cafes around Jeonpo, night meals near Gwangalli, and coastal stops near Haeundae.",
          ],
        },
      ],
    },
    relatedGuides: [
      {
        label: "Travel guide",
        title: "Where Koreans Actually Go in Busan",
        href: "/travel/where-to-go-in-busan-first-time",
      },
    ],
  },
  {
    id: 11,
    title:
      "Why Seoul Feels Like a K-drama: Everyday Places Fans Can Actually Visit",
    slug: "why-seoul-feels-like-a-kdrama",
    category: "dramas",
    categorySlug: "dramas",
    categoryLabel: "Drama / Film",
    description:
      "A gentle Seoul guide for K-drama fans, connecting everyday drama scenes with real places like the Han River, cafes, convenience stores, alleys, night views, and late-night food streets.",
    excerpt:
      "K-dramas often make ordinary Seoul places feel emotional. This guide explains the real places fans can actually visit, from the Han River and cafes to convenience stores, alleys, and night views.",
    content: [
      "K-dramas often make ordinary places feel bigger than they are. A convenience store becomes a place for a quiet confession. A bridge becomes a place to think. A small cafe becomes the background for a conversation people remember.",
      "That is why Seoul can feel familiar to K-drama fans even before they visit. The city is not always shown through famous landmarks. Many memorable drama moments happen in everyday spaces: riverside walks, bus stops, office streets, small restaurants, convenience stores, and late-night sidewalks.",
      "This guide is not a list of exact filming locations. It is a softer way to understand the Seoul mood that appears again and again in Korean dramas. Instead of chasing one scene, you can visit the kinds of places that make those scenes feel possible.",
      "The Han River is one of the easiest places to start. In real life, people walk, bike, sit, eat convenience-store food, and watch the city lights near the river. In dramas, the Han River often becomes a place where characters pause, think, or say something they could not say indoors.",
      "Convenience stores are another everyday space that K-dramas use well. They are not glamorous, but that is the point. A character can buy ramyeon, sit outside, talk quietly, or simply exist for a moment without needing a big plan.",
      "Cafes and small streets are also important. Seoul has many neighborhoods where a short walk can turn into a cafe stop, a small shop, or a quiet conversation. For visitors, this is one of the easiest ways to feel a drama-like mood without looking for a specific shooting spot.",
      "Old alleys give a different feeling. Areas with hanok-style buildings, narrow lanes, or older neighborhood textures can make Seoul feel slower and more personal. Places like Ikseon-dong or Bukchon-style streets are not only photo spots; they help visitors feel how old and new Seoul sit close together.",
      "Night views are where Seoul often becomes emotional. Namsan, bridges, apartment lights, and streets after dark can make the city feel more cinematic. A night view does not need to be dramatic by itself. It becomes meaningful because someone is standing there with a feeling.",
      "Late-night food is part of the mood too. Pojangmacha-style streets, simple restaurants, and after-work meals often show the social side of Korean life. In dramas, food is rarely just food. It can be comfort, apology, friendship, tension, or a reason to stay a little longer.",
      "The official trailers on this page are not here as a ranking of dramas. They are mood examples. Watch them to notice how Korean dramas use city spaces, ordinary conversations, language, work, romance, and night streets to create emotion.",
      "When you visit Seoul as a K-drama fan, do not try to make the city act like a drama for you. Choose one river walk, one cafe street, one small food stop, and one night view. That is enough to understand why ordinary Seoul can stay in someone’s memory.",
    ],
    culturalContext:
      "K-dramas often turn everyday Korean spaces into emotional places. For Korean viewers, a convenience store, bus stop, cafe, riverside bench, or late-night restaurant can feel familiar because these are not fantasy locations. They are normal parts of city life. That familiarity is one reason the scenes can feel close, even when the story is romantic, dramatic, or unrealistic.",
    tags: [
      "K-drama",
      "Seoul",
      "Korea travel",
      "Drama",
      "Han River",
      "Korean culture",
    ],
    publishedAt: "2026-07-06",
    readingTime: "6 min read",
    seoTitle:
      "Why Seoul Feels Like a K-drama | HAEMIL Drama & Travel Guide",
    seoDescription:
      "A Seoul guide for K-drama fans: Han River, cafes, convenience stores, alleys, night views, late-night food, and official K-drama trailers to understand the mood.",
    quickGuide: {
      sectionTitle: "Quick K-drama Seoul guide",
      groups: [
        {
          title: "Places fans can actually visit",
          items: [
            "Han River: A common place for walking, eating ramyeon, thinking, or having quiet conversations.",
            "Convenience stores: Small everyday spaces that often become emotional in Korean dramas.",
            "Cafes and small streets: Good for slow conversations, dates, and city mood.",
            "Old alleys: Ikseon-dong, Bukchon-style streets, and older neighborhoods can feel familiar to drama fans.",
            "Night views: Namsan, bridges, and city lights often carry the emotional side of Seoul.",
          ],
        },
        {
          title: "What to look for",
          items: [
            "K-dramas often make normal places feel bigger than they are.",
            "A bench, bridge, bus stop, cafe table, or convenience store can become the main emotional space.",
            "The point is not to copy a scene exactly, but to understand why ordinary Seoul feels memorable on screen.",
          ],
        },
        {
          title: "How to visit",
          items: [
            "Do not expect every place to feel dramatic all the time.",
            "Visit slowly, especially near the Han River, small streets, and night-view areas.",
            "If you are a fan, combine one famous area with one ordinary everyday stop.",
          ],
        },
        {
          title: "Good first Seoul moods",
          items: [
            "Han River at sunset or night.",
            "A small cafe street in the afternoon.",
            "Convenience store snacks after walking.",
            "Namsan or a bridge view after dark.",
            "A late-night food street when the city feels quieter.",
          ],
        },
      ],
    },
    relatedGuides: [
      {
        label: "Travel guide",
        title: "Old Seoul for First-Time Visitors",
        href: "/travel/old-seoul-jongno-ikseondong-bukchon",
      },
      {
        label: "Travel guide",
        title: "West Seoul for First-Time Visitors",
        href: "/travel/west-seoul-hongdae-yeonnam-mangwon",
      },
      {
        label: "Travel guide",
        title: "Trendy Seoul for First-Time Visitors",
        href: "/travel/trendy-seoul-seongsu-apgujeong-cheongdam",
      },
      {
        label: "Travel guide",
        title: "Shopping Seoul for First-Time Visitors",
        href: "/travel/shopping-seoul-myeongdong-namsan-dongdaemun",
      },
    ],
    trailers: [
      {
        title: "Our Unwritten Seoul",
        koreanTitle: "미지의 서울",
        youtubeId: "zGSvSRLlyUA",
        sourceLabel: "Official trailer from tvN DRAMA",
        note: "A trailer to feel Seoul as a city of identity, work, family, and quiet emotional change.",
      },
      {
        title: "Can This Love Be Translated?",
        koreanTitle: "이 사랑 통역 되나요?",
        youtubeId: "IIHQ1Z2yu80",
        sourceLabel: "Official trailer from Netflix Korea",
        note: "A trailer that fits HAEMIL’s language and culture angle: translation, emotion, and the distance between people.",
      },
      {
        title: "Boyfriend on Demand",
        koreanTitle: "월간남친",
        youtubeId: "ZnS0sRSWPuc",
        sourceLabel: "Official trailer from Netflix Korea",
        note: "A trailer for a more modern romance mood, with city life, dating imagination, and digital-era relationships.",
      },
    ],
  }
];

export function getAllPosts() {
  return POSTS;
}

export function getPostBySlug(category: string, slug: string) {
  return POSTS.find((post) => post.categorySlug === category && post.slug === slug);
}

export function getPostsByCategory(category: string) {
  return POSTS.filter((post) => post.categorySlug === category);
}

export function getRelatedPosts(currentPost: Post, limit = 3) {
  return POSTS.filter(
    (post) =>
      post.id !== currentPost.id &&
      (post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag)))
  ).slice(0, limit);
}
