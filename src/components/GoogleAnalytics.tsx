import Script from "next/script";

// GA4 da Vida em Equilíbrio (propriedade criada na conta-hub da Impulso, 27/06).
// O Measurement ID é público (fica exposto no navegador), então fica fixo aqui — não
// precisa de env no Vercel. A env NEXT_PUBLIC_GA_ID ainda sobrescreve, se um dia setarem.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-RBBH281DH7";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
