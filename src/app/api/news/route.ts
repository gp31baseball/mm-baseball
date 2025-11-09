import { NextResponse } from "next/server";

export async function GET() {
  const urls = [
  "https://www.baseballamerica.com/stories/perfect-game-teams-up-with-prep-baseball-report/",
  "https://www.mlbtraderumors.com/",
  "https://www.baseballfactory.com/news/",
];


  const previews = await Promise.all(
    urls.map(async (url) => {
      try {
        const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        const meta = data.data;
        return {
          url,
          title: meta.title,
          description: meta.description,
          image: meta.image?.url,
          site: meta.publisher || meta.logo?.title || new URL(url).hostname,
        };
      } catch {
        return { url, title: url, description: "", image: "", site: "" };
      }
    })
  );

  return NextResponse.json(previews);
}
