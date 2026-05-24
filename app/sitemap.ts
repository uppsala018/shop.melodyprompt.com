import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shop.melodyprompt.com";

  const bookRoutes: MetadataRoute.Sitemap = BOOKS.map((book) => ({
    url: `${base}/books/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...bookRoutes,
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/license`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
