import type { MetadataRoute } from "next";
import { POSTS_PUBLICADOS } from "@/content/posts";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://www.vidaemequilibriopalmas.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const rotasFixas = [
    "",
    "/day-premium",
    "/massagem-relaxante",
    "/drenagem-linfatica",
    "/massagem-desportiva",
    "/massagem-modeladora",
    "/massagem-facial",
    "/blog",
  ];

  const fixas = rotasFixas.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const posts = POSTS_PUBLICADOS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...fixas, ...posts];
}
