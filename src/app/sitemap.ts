import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/digiturk-tv-paketleri", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/neo-paketleri", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/tv-internet-paketleri", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/sikca-sorulan-sorular", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/iletisim", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  }));
}
