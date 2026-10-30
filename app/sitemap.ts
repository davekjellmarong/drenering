import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { ContentMethods } from "@/src/queryFactory/Article";
import { CityMethods } from "@/src/queryFactory/City";

// Built into out/sitemap.xml by `next build`, so it doesn't depend on which
// build command the host runs.
export const dynamic = "force-static";

const SITE = "https://www.dindrenering.no";

// Pages that exist but shouldn't be offered to search engines.
const EXCLUDE = ["/tilbud/takk", "/bli-partner/takk"];

// Every static app/**/page.tsx route; dynamic segments ([city], [slug]) are
// added below from their data.
const staticRoutes = (dir = "app", route = ""): string[] => {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") routes.push(route || "/");
    if (entry.isDirectory() && !entry.name.startsWith("[")) {
      routes.push(
        ...staticRoutes(path.join(dir, entry.name), `${route}/${entry.name}`)
      );
    }
  }
  return routes;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cities = await CityMethods.getAll();
  const articles = await ContentMethods.getAll("blog");
  const guides = await ContentMethods.getAll("guides");
  const services = await ContentMethods.getAll("tjenester");

  const pages = staticRoutes()
    .filter((route) => !EXCLUDE.includes(route))
    .map((route) => ({ url: `${SITE}${route === "/" ? "" : route}` }));

  return [
    ...pages,
    ...guides.map((guide) => ({
      url: `${SITE}/drenering/${guide.slug}`,
      lastModified: guide.updated,
    })),
    ...services.map((service) => ({
      url: `${SITE}/tjenester/${service.slug}`,
      lastModified: service.updated,
    })),
    ...cities.map((city) => ({ url: `${SITE}/drenering/${city.slug}` })),
    ...articles.map((article) => ({
      url: `${SITE}/blog/${article.slug}`,
      lastModified: article.updated,
    })),
  ];
}
