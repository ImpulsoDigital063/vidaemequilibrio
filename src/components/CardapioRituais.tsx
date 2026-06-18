import Link from "next/link";
import Image from "next/image";
import {
  IconArrowRight,
  IconVela,
  IconPedras,
  IconBambu,
  IconVentosa,
  IconEsfoliante,
  IconBolinha,
} from "./Icons";
import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";
import GlowOrb from "./motion/GlowOrb";

// Estrutura por CATEGORIAS (estilo Alivièr) — adaptado pra língua do Leandro

const DAY_PREMIUM = {
  nome: "Day Premium Equilíbrio",
  descricao:
    "O programa completo. Esfoliante corporal, bolinha massageadora nos pés, pedras quentes, vela aromática, bambu terapêutico e ventosa de finalização. Cento e vinte minutos pensados em sequência.",
  duracao: "~120 min",
  indicacao: "Tensão acumulada. Reset profundo.",
  href: "/day-premium",
  img: "/img/stillCandle.png",
  destaque: true,
};

const CATEGORIAS = [
  {
    titulo: "Massagens Relaxantes",
    intro: "Para soltar o que o dia acumulou.",
    massagens: [
      {
        nome: "Massagem Relaxante",
        descricao:
          "Sessão de abertura. Manobras clássicas de deslizamento e amassamento, sem pressa. Pode somar enhancements.",
        duracao: "~60 min",
        href: "/massagem-relaxante",
        img: "/img/heroHands.png",
      },
    ],
  },
  {
    titulo: "Massagens Terapêuticas",
    intro: "Para o que dói, retém ou pede recuperação técnica.",
    massagens: [
      {
        nome: "Drenagem Linfática",
        descricao:
          "Pressão firme e ritmo contínuo no caminho do retorno linfático. Indicada para inchaço, retenção e pós-cirúrgico.",
        duracao: "~60 min",
        href: "/drenagem-linfatica",
        img: "/img/stillBamboo.png",
      },
      {
        nome: "Massagem Desportiva",
        descricao:
          "Liberação miofascial e trabalho em pontos-gatilho. Recovery focal para corredora amadora — pré-prova e pós.",
        duracao: "~60 min",
        href: "/massagem-desportiva",
        img: "/img/heroCorredora.jpg",
      },
    ],
  },
  {
    titulo: "Massagens Estéticas",
    intro: "Para o corpo e o rosto, com método e frequência.",
    massagens: [
      {
        nome: "Massagem Modeladora",
        descricao:
          "Amassamento profundo, pinçamento, rolamento. Trabalho de contorno em série consistente.",
        duracao: "~60 min",
        href: "/massagem-modeladora",
        img: "/img/stillHotStones.png",
      },
      {
        nome: "Massagem Facial",
        descricao:
          "Drenagem facial, liberação de ATM, contorno do olho. Devolve viço.",
        duracao: "~45 min",
        href: "/massagem-facial",
        img: "/img/stillEsfoliante.png",
      },
    ],
  },
];

const ENHANCEMENTS = [
  { icon: IconEsfoliante, nome: "Esfoliante corporal", nota: "Brinde no 1º atendimento" },
  { icon: IconBolinha, nome: "Bolinha massageadora nos pés" },
  { icon: IconPedras, nome: "Pedras quentes" },
  { icon: IconVela, nome: "Vela aromática" },
  { icon: IconBambu, nome: "Bambu terapêutico" },
  { icon: IconVentosa, nome: "Ventosa de finalização" },
];


export default function CardapioRituais() {
  return (
    <section id="massagens" className="relative bg-ve-bg-soft text-ve-cream py-24 md:py-32 overflow-hidden">
      {/* GlowOrbs · profundidade espacial */}
      <GlowOrb
        color="#6E2A4A"
        size="800px"
        opacity={0.12}
        position={{ right: "-300px", top: "20%" }}
      />
      <GlowOrb
        color="#8B6342"
        size="600px"
        opacity={0.08}
        position={{ left: "-200px", bottom: "10%" }}
      />

      <div className="container-x relative">
        <Reveal direction="up">
          <p className="eyebrow text-ve-champagne mb-6">O catálogo</p>
          <h2 className="display text-3xl md:text-5xl leading-[1.1] max-w-4xl">
            Um programa completo,{" "}
            <span className="display-italic text-ve-champagne">
              cinco massagens dedicadas
            </span>
            .
          </h2>
        </Reveal>

        {/* DAY PREMIUM — destaque · scale-in pra dar peso · sombra cinematográfica */}
        <Reveal direction="scale" className="mt-16 group block relative shadow-[0_20px_60px_rgba(110,42,74,0.35)]" duration={1}>
          <Link href={DAY_PREMIUM.href} className="block">
            <div className="grid md:grid-cols-12 gap-0 items-stretch bg-ve-burgundy hover:bg-ve-burgundy/90 transition-colors overflow-hidden">
              <div className="md:col-span-5 aspect-[4/3] md:aspect-auto relative">
                <Image
                  src={DAY_PREMIUM.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center">
                <p className="eyebrow text-ve-champagne mb-3">
                  Day Premium · {DAY_PREMIUM.duracao}
                </p>
                <h3 className="display text-3xl md:text-5xl text-ve-cream leading-tight">
                  {DAY_PREMIUM.nome}
                </h3>
                <p className="mt-4 text-ve-cream/85 leading-relaxed max-w-xl">
                  {DAY_PREMIUM.descricao}
                </p>
                <p className="eyebrow text-ve-champagne mt-4">
                  Indicado para: {DAY_PREMIUM.indicacao}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-ve-cream font-medium">
                  Ver o Day Premium completo
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* CATEGORIAS */}
        {CATEGORIAS.map((cat) => (
          <div key={cat.titulo} className="mt-20">
            <Reveal direction="up" className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="eyebrow text-ve-champagne mb-2">Categoria</p>
                <h3 className="display text-2xl md:text-4xl text-ve-cream">
                  {cat.titulo}
                </h3>
                <p className="mt-2 text-ve-cream/70 text-sm md:text-base max-w-xl">
                  {cat.intro}
                </p>
              </div>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 gap-px bg-[color:var(--ve-line)]" step={0.1}>
              {cat.massagens.map((m, idx) => (
                <StaggerItem key={m.nome} direction={idx % 2 === 0 ? "left" : "right"} distance={32}>
                  <Link
                    href={m.href}
                    className="group bg-ve-bg-soft hover:bg-ve-bg-card transition-colors block h-full"
                  >
                  <div className="aspect-[16/9] relative overflow-hidden bg-ve-bg-card">
                    <Image
                      src={m.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60 group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-8">
                    <p className="eyebrow text-ve-muted mb-2">{m.duracao}</p>
                    <h4 className="display text-2xl md:text-3xl text-ve-cream">
                      {m.nome}
                    </h4>
                    <p className="mt-3 text-ve-cream/70 leading-relaxed text-sm">
                      {m.descricao}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-ve-champagne group-hover:text-ve-cream transition-colors">
                      Conhecer
                      <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}

        {/* ENHANCEMENTS */}
        <div className="mt-24">
          <Reveal direction="up">
            <p className="eyebrow text-ve-champagne mb-4">Adicionais</p>
            <h3 className="display text-2xl md:text-3xl max-w-2xl">
              Compose sua massagem com{" "}
              <span className="display-italic">enhancements</span>.
            </h3>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-[color:var(--ve-line)]" step={0.05}>
            {ENHANCEMENTS.map((e) => {
              const Icon = e.icon;
              return (
                <StaggerItem key={e.nome} direction="up" distance={16}>
                  <div className="bg-ve-bg-soft p-6 flex items-center gap-4 h-full">
                    <Icon className="w-7 h-7 text-ve-champagne flex-shrink-0" />
                    <div>
                      <p className="text-ve-cream text-sm font-medium">{e.nome}</p>
                      {e.nota && (
                        <p className="eyebrow text-ve-burgundy mt-1">{e.nota}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* CTA · sem preço */}
        <Reveal direction="scale" className="mt-20 text-center">
          <p className="display-italic text-ve-cream/80 text-xl md:text-2xl max-w-xl mx-auto">
            "Os valores são compartilhados no contato — cada agenda é pensada
            individualmente."
          </p>
          <a
            href="https://wa.me/5563984843646"
            target="_blank"
            rel="noopener"
            className="btn-primary mt-8"
          >
            Receber valores pelo WhatsApp
            <IconArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
