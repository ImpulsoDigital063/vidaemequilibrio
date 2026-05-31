"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import {
  IconTensa,
  IconInchada,
  IconModelar,
  IconCorrida,
  IconFlorescer,
  IconLeaf,
  IconArrowRight,
  IconWhatsApp,
  IconClock,
} from "./Icons";
import Reveal from "./motion/Reveal";
import TiltCard from "./motion/TiltCard";
import GlowOrb from "./motion/GlowOrb";

type Objetivo = {
  icon: typeof IconTensa;
  estado: string;
  massagem: string;
  descricao: string;
  duracao: string;
  preco: string;
  indicacao: string;
  img: string;
  badge?: string;
  destaque?: boolean;
  brinde?: string;
  href: string;
  waMessage: string;
};

const OBJETIVOS: Objetivo[] = [
  {
    icon: IconTensa,
    estado: "Quero o cuidado completo",
    massagem: "Day Premium Equilíbrio",
    descricao:
      "Duas horas de cuidado contínuo, com seis técnicas integradas: esfoliação, bolinha, pedras quentes, vela aromática, bambu e ventosa. Seu corpo entra tenso e sai em outro estado.",
    duracao: "120 min",
    preco: "R$429",
    indicacao: "Tensão acumulada · reset profundo",
    img: "/img/day-premium.jpg",
    badge: "Experiência completa",
    destaque: true,
    href: "/day-premium",
    waMessage:
      "Olá! Quero agendar o Day Premium Equilíbrio (120 min · R$429).",
  },
  {
    icon: IconLeaf,
    estado: "Quero desacelerar",
    massagem: "Massagem Relaxante",
    descricao:
      "Manobras clássicas pra soltar a tensão do dia inteiro — pescoço, costas, ombros. A porta de entrada pra quem nunca fez.",
    duracao: "60 min",
    preco: "R$189",
    indicacao: "Soltar o dia",
    img: "/img/massagem-costas-1.jpg",
    badge: "Pra começar",
    brinde: "Esfoliante de boas-vindas no 1º atendimento",
    href: "/massagem-relaxante",
    waMessage:
      "Olá! Quero agendar uma Massagem Relaxante (60 min · R$189).",
  },
  {
    icon: IconInchada,
    estado: "Sinto o corpo inchado",
    massagem: "Drenagem Linfática",
    descricao:
      "Manobras que mobilizam o líquido retido e desincham. Indicada pra retenção e pós-operatório.",
    duracao: "60 min",
    preco: "R$199",
    indicacao: "Retenção · pós-operatório",
    img: "/img/drenagem.jpg",
    badge: "Mais procurada",
    href: "/drenagem-linfatica",
    waMessage:
      "Olá! Quero agendar uma Drenagem Linfática (60 min · R$199).",
  },
  {
    icon: IconCorrida,
    estado: "Treino, corro, me recupero",
    massagem: "Massagem Desportiva",
    descricao:
      "Recovery muscular focal — preparação pré-prova e recuperação pós-prova. Pra quem leva o corpo a sério.",
    duracao: "60 min",
    preco: "R$199",
    indicacao: "Recovery muscular · pré e pós-prova",
    img: "/img/desportiva.jpg",
    href: "/massagem-desportiva",
    waMessage:
      "Olá! Quero agendar uma Massagem Desportiva (60 min · R$199).",
  },
  {
    icon: IconModelar,
    estado: "Quero trabalhar o contorno",
    massagem: "Massagem Modeladora",
    descricao:
      "Pressão firme e ritmo intensivo no contorno corporal. Funciona em série, com método e frequência.",
    duracao: "60 min",
    preco: "R$199",
    indicacao: "Contorno · em série regular",
    img: "/img/massagem-costas-2.jpg",
    href: "/massagem-modeladora",
    waMessage:
      "Olá! Quero agendar uma Massagem Modeladora (60 min · R$199).",
  },
  {
    icon: IconFlorescer,
    estado: "Quero cuidar do rosto",
    massagem: "Massagem Facial",
    descricao:
      "Alivia a tensão da mandíbula (ATM), drena e devolve viço. O cuidado que aparece no espelho.",
    duracao: "45 min",
    preco: "R$149",
    indicacao: "ATM · drenagem facial · viço",
    img: "/img/massagem-facial.jpg",
    href: "/massagem-facial",
    waMessage:
      "Olá! Quero agendar uma Massagem Facial (45 min · R$149).",
  },
];

function waLink(msg: string) {
  return `https://wa.me/5563848436460?text=${encodeURIComponent(msg)}`;
}

export default function GridObjetivos() {
  const destaque = OBJETIVOS.find((o) => o.destaque)!;
  const outros = OBJETIVOS.filter((o) => !o.destaque);

  // Scroll-stacking: o texto-intro fica sticky e RECUA (escala + desbota)
  // enquanto a camada dos cards sobe por cima e o cobre.
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });
  const introScale = useTransform(scrollYProgress, [0.35, 1], [1, 0.8]);
  const introOpacity = useTransform(scrollYProgress, [0.45, 0.98], [1, 0]);
  const introY = useTransform(scrollYProgress, [0.35, 1], [0, -56]);
  const introBlur = useTransform(
    scrollYProgress,
    [0.45, 1],
    ["blur(0px)", "blur(4px)"]
  );

  return (
    <section id="massagens" className="relative bg-ve-cream text-ve-text-dark">
      {/* ─── Camada 1 · intro STICKY que recua (empurrada pra trás) ─── */}
      <div ref={introRef} className="relative h-[92vh] md:h-[96vh]">
        <div className="sticky top-24 md:top-28">
          <motion.div
            style={{
              scale: introScale,
              opacity: introOpacity,
              y: introY,
              filter: introBlur,
            }}
            className="container-x origin-top pt-12 md:pt-20"
          >
            <p className="eyebrow text-ve-terracota mb-6">
              A pergunta vem antes da técnica
            </p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1] max-w-3xl text-ve-text-dark">
              Cada corpo chega de um jeito.{" "}
              <span className="display-italic">
                Cada massagem responde diferente.
              </span>
            </h2>
            <p className="mt-6 text-ve-text-dark/70 text-sm md:text-base max-w-xl">
              Escolha por{" "}
              <strong className="text-ve-burgundy">como você está hoje</strong>.
              Cada caminho leva pra técnica certa e abre o WhatsApp com a
              mensagem pronta.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── Camada 2 · conteúdo que SOBE e COBRE · fundo sólido + sombra ─── */}
      <div className="relative z-10 bg-ve-cream pb-24 md:pb-32 shadow-[0_-32px_64px_-12px_rgba(44,24,16,0.32)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <GlowOrb
            color="#8B6342"
            size="500px"
            opacity={0.06}
            position={{ left: "-150px", top: "8%" }}
          />
        </div>

        <div className="container-x relative pt-10 md:pt-14">
          {/* DESTAQUE · Day Premium · card horizontal compacto com imagem */}
          <Reveal direction="up" duration={0.9}>
            <div className="relative grid md:grid-cols-2 bg-ve-bg text-ve-cream overflow-hidden shadow-[0_20px_60px_rgba(110,42,74,0.18)]">
              {/* Imagem · carrega o peso visual */}
              <div className="relative h-52 sm:h-72 md:h-auto md:min-h-[400px]">
                <Image
                  src="/img/day-premium.jpg"
                  alt="Day Premium Equilíbrio · massagem com pedras quentes"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-ve-bg via-ve-bg/15 to-transparent" />
                <span className="absolute top-5 left-5 uppercase tracking-[0.18em] text-[10px] font-semibold text-ve-bg bg-ve-champagne px-3 py-1.5">
                  {destaque.badge}
                </span>
              </div>

              {/* Conteúdo · enxuto */}
              <div className="relative p-7 md:p-11 flex flex-col gap-4 justify-center overflow-hidden">
                <GlowOrb
                  color="#6E2A4A"
                  size="420px"
                  opacity={0.3}
                  position={{ right: "-130px", top: "-90px" }}
                />
                <p className="eyebrow text-ve-champagne text-[10px] relative">
                  {destaque.estado}
                </p>
                <h3 className="display text-3xl md:text-4xl text-ve-cream leading-[1.05] relative">
                  {destaque.massagem}
                </h3>
                <p className="text-ve-cream/75 text-sm leading-relaxed relative">
                  Seis técnicas integradas em duas horas de cuidado contínuo.
                  Seu corpo entra tenso e sai em outro estado.
                </p>
                <p className="display text-ve-cream text-3xl mt-1 relative">
                  {destaque.preco}
                  <span className="text-ve-cream/45 text-sm">
                    {" "}
                    · {destaque.duracao}
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-1 relative">
                  <Link
                    href={destaque.href}
                    className="inline-flex items-center justify-center gap-2 bg-ve-cream text-ve-bg px-5 py-3 text-sm font-medium hover:bg-ve-champagne transition-colors"
                  >
                    Ver detalhes
                    <IconArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={waLink(destaque.waMessage)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 border border-ve-cream/40 text-ve-cream px-5 py-3 text-sm font-medium hover:bg-ve-cream hover:text-ve-bg transition-colors"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Grid 5 cards · sub-protagonistas */}
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-px md:bg-ve-text-dark/10">
            {outros.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.massagem} className="h-full">
                  <TiltCard max={3} className="h-full">
                    <div className="group bg-ve-cream flex flex-col h-full overflow-hidden shadow-[0_2px_22px_-10px_rgba(44,24,16,0.16)] hover:shadow-[0_12px_40px_rgba(110,42,74,0.16)] transition-shadow">
                      {/* Imagem topo · mulher recebendo o tratamento */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={o.img}
                          alt={`${o.massagem} · Vida em Equilíbrio · Palmas-TO`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ve-cream via-transparent to-transparent" />
                        {o.badge && (
                          <span className="absolute top-4 right-4 uppercase tracking-[0.16em] text-[9px] font-semibold text-ve-bg bg-ve-champagne/95 px-2.5 py-1 whitespace-nowrap">
                            {o.badge}
                          </span>
                        )}
                        {/* selo do ícone · sobre a borda inferior */}
                        <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-ve-cream border border-ve-burgundy/20 flex items-center justify-center shadow-[0_4px_14px_rgba(44,24,16,0.18)] z-10">
                          <Icon className="w-5 h-5 text-ve-burgundy" />
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="p-7 pt-8 flex flex-col gap-4 flex-1">
                        <div>
                          <p className="eyebrow text-ve-terracota mb-2">
                            {o.estado}
                          </p>
                          <h3 className="display text-2xl text-ve-text-dark leading-tight">
                            {o.massagem}
                          </h3>
                        </div>

                        {/* Pílulas · duração + preço + indicação */}
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] text-ve-text-dark/65">
                          <span className="flex items-center gap-1.5">
                            <IconClock className="w-3 h-3 text-ve-burgundy" />
                            {o.duracao}
                          </span>
                          <span className="text-ve-text-dark/30">·</span>
                          <span className="text-ve-burgundy font-semibold">
                            {o.preco}
                          </span>
                          <span className="text-ve-text-dark/30">·</span>
                          <span>{o.indicacao}</span>
                        </div>

                        {/* Descrição */}
                        <p className="text-ve-text-dark/72 text-sm leading-relaxed">
                          {o.descricao}
                        </p>

                        {/* Brinde · destaque sutil */}
                        {o.brinde && (
                          <p className="text-[11px] text-ve-burgundy bg-ve-burgundy/5 px-3 py-2 border-l-2 border-ve-burgundy">
                            {o.brinde}
                          </p>
                        )}

                        {/* CTAs duplos · empurrados pro fim */}
                        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-ve-text-dark/10">
                          <Link
                            href={o.href}
                            className="inline-flex items-center gap-2 text-sm font-medium text-ve-text-dark group-hover:text-ve-burgundy transition-colors"
                          >
                            Ver detalhes
                            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                          <a
                            href={waLink(o.waMessage)}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ve-burgundy/30 text-ve-burgundy hover:bg-ve-burgundy hover:text-ve-cream transition-colors flex-shrink-0"
                            aria-label={`Agendar ${o.massagem} pelo WhatsApp`}
                            title="Agendar pelo WhatsApp"
                          >
                            <IconWhatsApp className="w-[18px] h-[18px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
