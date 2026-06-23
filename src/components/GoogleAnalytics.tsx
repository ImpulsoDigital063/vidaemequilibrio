import Script from "next/script";

// GA4 só carrega se NEXT_PUBLIC_GA_ID estiver setado no ambiente (Vercel).
// Sem o ID (ex: local/preview), renderiza nada — zero risco de subir antes da hora.
// Quando o CIC entregar o Measurement ID (G-XXXXXXXXXX), basta setar a env no Vercel e redeployar.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
