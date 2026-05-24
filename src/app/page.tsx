import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GridObjetivos from "@/components/GridObjetivos";
import Metricas from "@/components/Metricas";
import ManifestoLeandro from "@/components/ManifestoLeandro";
import Espaco from "@/components/Espaco";
import ValePresente from "@/components/ValePresente";
import CalendarioCorridas from "@/components/CalendarioCorridas";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import SchemaOrgVidaEquilibrio from "@/components/SchemaOrgVidaEquilibrio";

// Jornada AIDA (Atenção · Interesse · Desejo · Ação)
//   1 Hero ............. Atenção · pergunta
//   2 GridObjetivos .... Interesse · escolha por estado (decisão primária)
//   3 Metricas ......... Qualidade · "o que está incluído"
//   4 ManifestoLeandro . Confiança · quem cuida
//   5 Espaco ........... Desejo · onde acontece (clínica + domicílio + mapa fundidos)
//   6 ValePresente ..... Cross-sell · "pode presentear também"
//   7 CalendarioCorridas Nicho corredora · sub-protagonista
//   8 Blog ............. Autoridade · estudo aberto
//   9 FAQ .............. Objeções restantes
//  10 WhatsAppCTA ...... Ação · empurrão final

export default function Home() {
  return (
    <>
      <SchemaOrgVidaEquilibrio page="home" />
      <Header />
      <main className="flex-1">
        <Hero />
        <GridObjetivos />
        <Metricas />
        <ManifestoLeandro />
        <Espaco />
        <ValePresente />
        <CalendarioCorridas />
        <Blog />
        <FAQ />
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  );
}
