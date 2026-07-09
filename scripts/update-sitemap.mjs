import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const sitemapPath = resolve(process.cwd(), "public/sitemap.xml");
const today = new Date().toISOString().slice(0, 10);
const sitemap = readFileSync(sitemapPath, "utf8");

const updatedSitemap = sitemap.replace(
  /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/,
  `<lastmod>${today}</lastmod>`
);

writeFileSync(sitemapPath, updatedSitemap);
