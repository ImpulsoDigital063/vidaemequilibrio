import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GridObjetivos from "@/components/GridObjetivos";
import ManifestoLeandro from "@/components/ManifestoLeandro";
import CardapioRituais from "@/components/CardapioRituais";
import Metricas from "@/components/Metricas";
import Espaco from "@/components/Espaco";
import CalendarioCorridas from "@/components/CalendarioCorridas";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import SchemaOrgVidaEquilibrio from "@/components/SchemaOrgVidaEquilibrio";

export default function Home() {
  return (
    <>
      <SchemaOrgVidaEquilibrio page="home" />
      <Header />
      <main className="flex-1">
        <Hero />
        <GridObjetivos />
        <ManifestoLeandro />
        <CardapioRituais />
        <Metricas />
        <Espaco />
        <CalendarioCorridas />
        <Blog />
        <FAQ />
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  );
}
