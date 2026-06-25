import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/motion/NoiseOverlay";
import StarField from "@/components/StarField";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.vidaemequilibriopalmas.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vida em Equilíbrio — Massagem terapêutica feminina em Palmas-TO",
  description:
    "Massagem terapêutica feminina em Palmas-TO. Day Premium, relaxante, drenagem linfática, modeladora, desportiva e facial. Atendimento privativo em clínica parceira ou domicílio.",
  keywords: [
    "massagem Palmas",
    "drenagem linfática Palmas",
    "massagem modeladora Palmas TO",
    "massagista mulher Palmas",
    "Vida em Equilíbrio",
    "Leandro Timóteo",
    "clínica feminina massagem Palmas",
  ],
  openGraph: {
    title: "Vida em Equilíbrio — Massagem feminina premium",
    description:
      "Clínica privativa em Palmas-TO. Combos VIP de massagem terapêutica para mulheres. Uma cliente por turno.",
    locale: "pt_BR",
    type: "website",
    url: SITE_URL,
    siteName: "Vida em Equilíbrio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vida em Equilíbrio",
    description: "Clínica privativa de cuidado feminino em Palmas-TO.",
  },
  robots: { index: true, follow: true }, // domínio próprio no ar (25/06)
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ve-bg text-ve-cream">
        <NoiseOverlay />
        <StarField />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
