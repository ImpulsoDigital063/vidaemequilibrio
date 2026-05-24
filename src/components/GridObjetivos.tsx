import Link from "next/link";
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
import Stagger, { StaggerItem } from "./motion/Stagger";
import TiltCard from "./motion/TiltCard";
import GlowOrb from "./motion/GlowOrb";

type Objetivo = {
  icon: typeof IconTensa;
  estado: string;
  massagem: string;
  descricao: string;
  duracao: string;
  indicacao: string;
  badge?: string;
  destaque?: boolean;
  brinde?: string;
  href: string;
  waMessage: string;
};

const OBJETIVOS: Objetivo[] = [
  {
    icon: IconTensa,
    estado: "Quero relaxar profundo",
    massagem: "Day Premium Equilíbrio",
    descricao:
      "Seis técnicas integradas: esfoliante, bolinha, pedras quentes, vela aromática, bambu e ventosa. Reset completo.",
    duracao: "120 min",
    indicacao: "Tensão acumulada · reset profundo",
    badge: "Ritual completo",
    destaque: true,
    href: "/day-premium",
    waMessage:
      "Oi Leandro, quero agendar o Day Premium Equilíbrio (120 min com 6 técnicas).",
  },
  {
    icon: IconLeaf,
    estado: "Quero uma massagem relaxante",
    massagem: "Massagem Relaxante",
    descricao:
      "Sessão de 60 min com manobras clássicas. Pode receber enhancements (pedras, vela, bambu) à parte.",
    duracao: "60 min",
    indicacao: "Soltar o dia",
    badge: "Pra começar",
    brinde: "Esfoliante de brinde no 1º atendimento",
    href: "/massagem-relaxante",
    waMessage:
      "Oi Leandro, quero agendar uma Massagem Relaxante (60 min).",
  },
  {
    icon: IconInchada,
    estado: "Estou inchada",
    massagem: "Drenagem Linfática",
    descricao:
      "Manobras manuais que mobilizam líquido retido. Indicada para retenção e pós-cirúrgico.",
    duracao: "60 min",
    indicacao: "Retenção · pós-cirúrgico",
    badge: "Mais procurada",
    href: "/drenagem-linfatica",
    waMessage:
      "Oi Leandro, quero agendar uma Drenagem Linfática (60 min).",
  },
  {
    icon: IconCorrida,
    estado: "Treino · vou correr · corri",
    massagem: "Massagem Desportiva",
    descricao:
      "Recovery muscular focal. Preparação pré-prova e pós-prova. Atendimento particular pra corredora amadora.",
    duracao: "60 min",
    indicacao: "Recovery muscular · pré e pós-prova",
    href: "/massagem-desportiva",
    waMessage:
      "Oi Leandro, quero agendar uma Massagem Desportiva (recovery).",
  },
  {
    icon: IconModelar,
    estado: "Quero modelar contorno",
    massagem: "Massagem Modeladora",
    descricao:
      "Pressão firme e ritmo intensivo. Trabalha contorno corporal com método e frequência.",
    duracao: "60 min",
    indicacao: "Contorno · em série regular",
    href: "/massagem-modeladora",
    waMessage:
      "Oi Leandro, quero agendar uma Massagem Modeladora (60 min).",
  },
  {
    icon: IconFlorescer,
    estado: "Quero cuidar do rosto",
    massagem: "Massagem Facial",
    descricao:
      "Cuidado dedicado ao rosto. Alivia tensão da mandíbula (ATM), drena, devolve viço.",
    duracao: "45 min",
    indicacao: "ATM · drenagem facial · viço",
    href: "/massagem-facial",
    waMessage:
      "Oi Leandro, quero agendar uma Massagem Facial (45 min).",
  },
];

function waLink(msg: string) {
  return `https://wa.me/5563848436460?text=${encodeURIComponent(msg)}`;
}

export default function GridObjetivos() {
  const destaque = OBJETIVOS.find((o) => o.destaque)!;
  const outros = OBJETIVOS.filter((o) => !o.destaque);
  const DestaqueIcon = destaque.icon;

  return (
    <section
      id="objetivos"
      className="relative bg-ve-cream text-ve-text-dark py-24 md:py-32 overflow-hidden"
    >
      <GlowOrb
        color="#8B6342"
        size="500px"
        opacity={0.06}
        position={{ left: "-150px", top: "10%" }}
      />

      <div className="container-x relative">
        <Reveal direction="up">
          <p className="eyebrow text-ve-terracota mb-6">A pergunta vem antes da técnica</p>
          <h2 className="display text-3xl md:text-5xl leading-[1.1] max-w-3xl text-ve-text-dark">
            Cada corpo chega de um jeito.{" "}
            <span className="display-italic">Cada massagem responde diferente.</span>
          </h2>
          <p className="mt-6 text-ve-text-dark/70 text-sm md:text-base max-w-xl">
            Escolha por <strong className="text-ve-burgundy">como você está hoje</strong>.
            Cada caminho leva pra técnica certa e abre o WhatsApp com a mensagem pronta.
          </p>
        </Reveal>

        <div className="hairline my-12 bg-ve-text-dark/15" />

        {/* DESTAQUE · Day Premium · banner escuro warm (vira protagonista) */}
        <Reveal direction="scale" duration={1} className="mb-px">
          <div className="relative group bg-ve-bg text-ve-cream overflow-hidden shadow-[0_20px_60px_rgba(110,42,74,0.18)]">
            <GlowOrb
              color="#6E2A4A"
              size="500px"
              opacity={0.35}
              position={{ right: "-100px", top: "-100px" }}
            />
            <GlowOrb
              color="#C9B79C"
              size="400px"
              opacity={0.1}
              position={{ left: "-80px", bottom: "-80px" }}
            />
            <div className="relative grid md:grid-cols-12 gap-0">
              {/* Lado esquerdo · ícone + badge */}
              <div className="md:col-span-4 p-8 md:p-12 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-[color:var(--ve-line)]">
                <div className="w-16 h-16 rounded-full bg-ve-burgundy/20 flex items-center justify-center border border-ve-burgundy/40">
                  <DestaqueIcon className="w-8 h-8 text-ve-champagne" />
                </div>
                <div>
                  <span className="inline-block eyebrow text-[10px] text-ve-bg bg-ve-champagne px-3 py-1.5">
                    {destaque.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-ve-cream/75 text-xs eyebrow">
                  <IconClock className="w-3.5 h-3.5 text-ve-champagne" />
                  {destaque.duracao}
                </div>
              </div>

              {/* Lado direito · conteúdo + CTAs */}
              <div className="md:col-span-8 p-8 md:p-12 flex flex-col gap-5">
                <p className="eyebrow text-ve-champagne text-[10px]">{destaque.estado}</p>
                <h3 className="display text-3xl md:text-5xl text-ve-cream leading-[1.05]">
                  {destaque.massagem}
                </h3>
                <p className="text-ve-cream/80 text-sm md:text-base leading-relaxed max-w-xl">
                  {destaque.descricao}
                </p>
                <p className="eyebrow text-ve-champagne text-[10px]">
                  Indicado pra: {destaque.indicacao}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Link
                    href={destaque.href}
                    className="inline-flex items-center justify-center gap-2 bg-ve-cream text-ve-bg px-5 py-3 text-sm font-medium hover:bg-ve-champagne transition-colors"
                  >
                    Ver detalhes do Day Premium
                    <IconArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={waLink(destaque.waMessage)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 border border-ve-cream/40 text-ve-cream px-5 py-3 text-sm font-medium hover:bg-ve-cream hover:text-ve-bg transition-colors"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    Agendar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid 5 cards · sub-protagonistas */}
        <Stagger
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ve-text-dark/10"
          step={0.07}
        >
          {outros.map((o) => {
            const Icon = o.icon;
            return (
              <StaggerItem key={o.massagem} direction="up" className="h-full">
                <TiltCard max={3} className="h-full">
                  <div className="group bg-ve-cream p-8 md:p-9 flex flex-col gap-5 h-full shadow-[0_1px_0_rgba(44,24,16,0.06)] hover:shadow-[0_12px_40px_rgba(110,42,74,0.16)] transition-shadow relative">
                    {/* Topo · ícone em círculo + badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-14 h-14 rounded-full bg-ve-terracota/10 flex items-center justify-center border border-ve-terracota/20 group-hover:bg-ve-burgundy/10 group-hover:border-ve-burgundy/30 transition-colors flex-shrink-0">
                        <Icon className="w-7 h-7 text-ve-burgundy" />
                      </div>
                      {o.badge && (
                        <span className="eyebrow text-[9px] text-ve-burgundy bg-ve-burgundy/8 px-2.5 py-1 mt-1 whitespace-nowrap">
                          {o.badge}
                        </span>
                      )}
                    </div>

                    {/* Estado · título */}
                    <div>
                      <p className="eyebrow text-ve-terracota mb-2">{o.estado}</p>
                      <h3 className="display text-2xl md:text-3xl text-ve-text-dark leading-tight">
                        {o.massagem}
                      </h3>
                    </div>

                    {/* Pílulas · duração + indicação */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] eyebrow text-ve-text-dark/65">
                      <span className="flex items-center gap-1.5">
                        <IconClock className="w-3 h-3 text-ve-burgundy" />
                        {o.duracao}
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
                      <p className="text-[11px] eyebrow text-ve-burgundy bg-ve-burgundy/5 px-3 py-2 border-l-2 border-ve-burgundy">
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
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-ve-burgundy/30 text-ve-burgundy hover:bg-ve-burgundy hover:text-ve-cream transition-colors"
                        aria-label={`Agendar ${o.massagem} pelo WhatsApp`}
                        title="Agendar pelo WhatsApp"
                      >
                        <IconWhatsApp className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Linha de apoio · ajuda escolha */}
        <Reveal direction="up" className="mt-12 text-center">
          <p className="text-ve-text-dark/65 text-sm">
            Em dúvida sobre qual escolher?{" "}
            <a
              href={waLink(
                "Oi Leandro, está em dúvida qual massagem é a certa pra mim. Pode me ajudar a decidir?"
              )}
              target="_blank"
              rel="noopener"
              className="text-ve-burgundy underline underline-offset-4 hover:text-ve-terracota transition-colors"
            >
              Conta o que está sentindo no WhatsApp
            </a>{" "}
            · respondo com a indicação certa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
