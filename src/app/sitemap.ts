import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://vidaemequilibrio.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/day-premium",
    "/massagem-relaxante",
    "/drenagem-linfatica",
    "/massagem-desportiva",
    "/massagem-modeladora",
    "/massagem-facial",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
