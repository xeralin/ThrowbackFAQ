import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { allRoutes } from "@/config/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}/`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
