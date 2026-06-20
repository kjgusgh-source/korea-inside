export type PostCategory =
  | "memes"
  | "expressions"
  | "travel"
  | "food"
  | "kpop"
  | "dramas"
  | "lifestyle"
  | "nightlife";

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
