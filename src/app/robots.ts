import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://www.vidaemequilibriopalmas.com.br";
// PRA INDEXAR DE VERDADE quando o domínio próprio for ao ar:
// 1. Definir env NEXT_PUBLIC_BASE_URL com a URL final
// 2. Tirar `robots: { index: false, follow: false }` de layout.tsx
// 3. Submeter /sitemap.xml no Google Search Console
// 4. Verificar indexação via "site:vidaemequilibrio.com.br" em 7-14 dias

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Páginas internas + plano confidencial não vão pro Google
        disallow: ["/plano-de-negocio", "/logo-preview"],
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
