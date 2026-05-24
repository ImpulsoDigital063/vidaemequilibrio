import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import SchemaOrgVidaEquilibrio from "./SchemaOrgVidaEquilibrio";
import { IconArrowRight, IconArrowDown } from "./Icons";

export type MassagemData = {
  nome: string;
  eyebrow: string; // "Massagem terapêutica · 60 min"
  hero: string;
  intro: string;
  manifesto: string;
  para: string[];
  composicao: { tecnica: string; o_que_faz: string }[];
  beneficios: string[];
  duracao: string;
  preparar: string;
  whatsappMsg: string;
};

// Faixa de preço por massagem · pra Schema.org Service
const FAIXA_PRECO: Record<string, [number, number]> = {
  "Day Premium Equilíbrio": [520, 680],
  "Massagem Relaxante": [180, 240],
  "Drenagem Linfática": [190, 250],
  "Massagem Desportiva": [200, 280],
  "Massagem Modeladora": [200, 280],
  "Massagem Facial": [160, 220],
};

// (Mantemos o nome RitualPage do arquivo pra não quebrar imports, mas conceito é "MassagemPage")
export default function RitualPage({ data }: { data: MassagemData }) {
  const [priceMin, priceMax] = FAIXA_PRECO[data.nome] ?? [180, 280];
  return (
    <>
      <SchemaOrgVidaEquilibrio
        page="service"
        serviceName={data.nome}
        serviceDescription={data.intro}
        serviceDuration={data.duracao}
        servicePriceMin={priceMin}
        servicePriceMax={priceMax}
      />
      <Header />
      <main className="flex-1 bg-ve-bg">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={data.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-85"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,11,8,0.4) 0%, rgba(15,11,8,0.7) 60%, rgba(15,11,8,0.95) 100%)",
              }}
            />
          </div>
          <div className="container-x relative z-10 pb-16 pt-32">
            <p className="eyebrow text-ve-champagne mb-6">{data.eyebrow}</p>
            <h1 className="display text-ve-cream text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
              {data.nome}
            </h1>
            <p className="display-italic text-ve-champagne text-xl md:text-2xl mt-6 max-w-xl">
              {data.intro}
            </p>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="bg-ve-bg text-ve-cream py-20 md:py-28">
          <div className="container-x grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="eyebrow text-ve-champagne">A massagem</p>
            </div>
            <div className="md:col-span-8">
              <p className="display text-2xl md:text-4xl leading-[1.2] text-ve-cream font-light">
                {data.manifesto}
              </p>
            </div>
          </div>
        </section>

        {/* PARA QUEM */}
        <section className="bg-ve-cream text-ve-text-dark py-20 md:py-28">
          <div className="container-x grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="eyebrow text-ve-terracota">Indicada para</p>
              <h2 className="display text-3xl md:text-4xl mt-4">
                Você que…
              </h2>
            </div>
            <ul className="md:col-span-8 space-y-4">
              {data.para.map((p) => (
                <li
                  key={p}
                  className="flex gap-4 text-ve-text-dark/90 text-base md:text-lg leading-relaxed border-b border-ve-text-dark/10 pb-4"
                >
                  <span className="text-ve-burgundy mt-1">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMPOSIÇÃO */}
        <section className="bg-ve-bg-soft text-ve-cream py-20 md:py-28">
          <div className="container-x">
            <p className="eyebrow text-ve-champagne mb-6">Composição</p>
            <h2 className="display text-3xl md:text-5xl max-w-2xl mb-12">
              Cada técnica tem um{" "}
              <span className="display-italic">propósito</span>.
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-[color:var(--ve-line)]">
              {data.composicao.map((c) => (
                <div
                  key={c.tecnica}
                  className="bg-ve-bg-soft p-8 md:p-10"
                >
                  <h3 className="display text-2xl text-ve-champagne">
                    {c.tecnica}
                  </h3>
                  <p className="mt-3 text-ve-cream/80 leading-relaxed font-light">
                    {c.o_que_faz}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="bg-ve-bg text-ve-cream py-20 md:py-28">
          <div className="container-x grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow text-ve-champagne">O que o corpo sente</p>
              <h2 className="display text-3xl md:text-5xl mt-4 leading-[1.1]">
                Benefícios{" "}
                <span className="display-italic text-ve-champagne">observados</span>.
              </h2>
            </div>
            <ul className="md:col-span-7 space-y-3">
              {data.beneficios.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 items-start py-3 border-b border-[color:var(--ve-line)]"
                >
                  <IconArrowRight className="w-4 h-4 text-ve-champagne mt-1 flex-shrink-0" />
                  <span className="text-ve-cream/90 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INFOS PRÁTICAS */}
        <section className="bg-ve-cream text-ve-text-dark py-20 md:py-28">
          <div className="container-x grid md:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow text-ve-terracota mb-4">Duração</p>
              <p className="display text-4xl md:text-5xl">{data.duracao}</p>
            </div>
            <div>
              <p className="eyebrow text-ve-terracota mb-4">Como se preparar</p>
              <p className="text-ve-text-dark/80 leading-relaxed">
                {data.preparar}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ve-burgundy text-ve-cream py-20 md:py-28">
          <div className="container-x text-center">
            <h2 className="display text-3xl md:text-5xl max-w-3xl mx-auto leading-[1.1]">
              Pronta para{" "}
              <span className="display-italic">essa massagem</span>?
            </h2>
            <a
              href={`https://wa.me/5563848436460?text=${encodeURIComponent(data.whatsappMsg)}`}
              target="_blank"
              rel="noopener"
              className="mt-10 inline-flex items-center gap-3 bg-ve-cream text-ve-burgundy px-8 py-4 text-base font-medium hover:bg-ve-champagne transition-colors"
            >
              Receber valores e horários
              <IconArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-6 text-ve-cream/70 text-sm">
              Os valores são compartilhados no WhatsApp
            </p>
          </div>
        </section>

        {/* Outras massagens */}
        <section className="bg-ve-bg text-ve-cream py-16 border-t border-[color:var(--ve-line)]">
          <div className="container-x">
            <Link
              href="/#massagens"
              className="inline-flex items-center gap-2 text-ve-champagne hover:text-ve-cream transition-colors text-sm"
            >
              <IconArrowDown className="w-4 h-4 rotate-90" />
              Ver outras massagens
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
