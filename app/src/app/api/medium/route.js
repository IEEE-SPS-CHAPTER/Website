import Parser from "rss-parser";

function calculateReadTime(content) {
  if (!content) return "";
  const text = content.replace(/<[^>]+>/g, " ");
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

export async function GET() {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/ieee-signal-processing-society-vit"
    );
    const posts = feed.items.map((item, idx) => ({
      id: idx,
      title: item.title,
      author: item.creator || item.author || "Unknown",
      date: item.pubDate,
      excerpt: item.contentSnippet,
      link: item.link,
      category: item.categories?.[0] || "Blog",
      readTime: calculateReadTime(item["content:encoded"] || item.content),
    }));
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Medium posts." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
