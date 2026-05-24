import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shop.melodyprompt.com";
  const today = new Date().toISOString().split("T")[0];

  const bookRoutes: MetadataRoute.Sitemap = BOOKS.map((book) => ({
    url: `${base}/books/${book.slug}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    { url: base, lastModified: today, changeFrequency: "weekly", priority: 1 },
    ...bookRoutes,
  ];
}
