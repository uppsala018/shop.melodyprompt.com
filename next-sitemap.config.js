/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shop.melodyprompt.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/thanks", "/api/*", "/terms", "/privacy", "/license", "/og/*"],
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => {
    const books = require("./lib/books").BOOKS;
    return books.map((book) => ({
      loc: `/books/${book.slug}`,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString().split("T")[0],
    }));
  },
};
