import Image from "next/image";
import {
  IconPedras,
  IconInchada,
  IconModelar,
  IconTensa,
  IconLeaf,
  IconFlorescer,
  IconWhatsApp,
  IconArrowRight,
} from "./Icons";
import Stagger, { StaggerItem } from "./motion/Stagger";

type Variacao = { duracao: string; preco: string };

type Servico = {
  icon: typeof IconPedras;
  nome: string;
  subtitulo?: string;
  indicacao: string;
  descricao: string;
  variacoes: Variacao[];
  img: string;
  badge?: string;
  waMessage: string;
};

// Serviços definidos pelo Timóteo (10/06/2026). Preços e durações = fonte do próprio prestador.
const SERVICOS: Servico[] = [
  {
    icon: IconPedras,
    nome: "Massagem Relaxante",
    subtitulo: "Pedras Quentes",
    indicacao: "Relaxamento profundo",
    descricao:
      "Combina calor, contato e a pressão das pedras quentes vulcânicas na superfície do corpo, causando um relaxamento profundo.",
    variacoes: [
      { duracao: "50 min", preco: "R$189" },
      { duracao: "80 min", preco: "R$249" },
      { duracao: "110 min", preco: "R$299" },
    ],
    img: "/img/pedras-quentes.jpg",
    badge: "Mais pedida",
    waMessage:
      "Olá! Quero agendar a Massagem com Pedras Quentes. Qual duração fica melhor: 50, 80 ou 110 min?",
  },
  {
    icon: IconInchada,
    nome: "Drenagem Linfática",
    indicacao: "Desincha e reduz medidas",
    descricao:
      "Específica pra eliminar líquidos retidos e melhorar a circulação. Desincha, reduz medidas e melhora o aspecto da pele.",
    variacoes: [
      { duracao: "50 min", preco: "R$189" },
      { duracao: "80 min", preco: "R$249" },
      { duracao: "110 min", preco: "R$299" },
    ],
    img: "/img/drenagem.jpg",
    badge: "Mais procurada",
    waMessage:
      "Olá! Quero agendar a Drenagem Linfática. Qual duração fica melhor: 50, 80 ou 110 min?",
  },
  {
    icon: IconModelar,
    nome: "Massagem Modeladora",
    indicacao: "Contorno corporal",
    descricao:
      "Drena, relaxa e modela com movimentos firmes, mas sem dor — adaptada ao objetivo de cada cliente. Cada corpo é único.",
    variacoes: [
      { duracao: "50 min", preco: "R$189" },
      { duracao: "80 min", preco: "R$249" },
    ],
    img: "/img/massagem-modeladora.jpg",
    waMessage:
      "Olá! Quero agendar a Massagem Modeladora. Qual duração fica melhor: 50 ou 80 min?",
  },
  {
    icon: IconTensa,
    nome: "Massagem com Ventosas",
    indicacao: "Alívio de tensão",
    descricao:
      "Movimentos profundos seguidos da aplicação de ventosas, que melhoram a oxigenação muscular e aliviam dores e tensões.",
    variacoes: [
      { duracao: "50 min", preco: "R$189" },
      { duracao: "80 min", preco: "R$249" },
      { duracao: "110 min", preco: "R$299" },
    ],
    img: "/img/stillCupping.png",
    waMessage:
      "Olá! Quero agendar a Massagem com Ventosas. Qual duração fica melhor: 50, 80 ou 110 min?",
  },
  {
    icon: IconLeaf,
    nome: "Aplicação de Ventosas",
    indicacao: "Recuperação localizada",
    descricao:
      "Tratamento natural pra dores musculares localizadas. Melhora a oxigenação dos tecidos e ajuda a liberar toxinas.",
    variacoes: [{ duracao: "30 min", preco: "R$119" }],
    img: "/img/stillCupping.png",
    waMessage:
      "Olá! Quero agendar a Aplicação de Ventosas (30 min · R$119).",
  },
  {
    icon: IconFlorescer,
    nome: "Massagem Facial",
    indicacao: "Rosto e viço",
    descricao:
      "Esfoliação, hidratação e massagem na face, colo e pescoço — trabalha firmeza e contornos e devolve viço. Inclui lavagem capilar.",
    variacoes: [
      { duracao: "30 min", preco: "R$159" },
      { duracao: "50 min", preco: "R$219" },
    ],
    img: "/img/massagem-facial.jpg",
    waMessage:
      "Olá! Quero agendar a Massagem Facial. Qual duração fica melhor: 30 ou 50 min?",
  },
];

function waLink(msg: string) {
  return `https://wa.me/5563848436460?text=${encodeURIComponent(msg)}`;
}

function ServicoCard({ s }: { s: Servico }) {
  const Icon = s.icon;
  return (
    <div className="group relative flex h-full min-h-[540px] flex-col justify-end overflow-hidden border border-ve-champagne/10 shadow-[0_2px_22px_-10px_rgba(0,0,0,0.6)] transition-shadow hover:shadow-[0_12px_40px_rgba(139,99,66,0.3)]">
      {/* Imagem de FUNDO · cobre o card inteiro */}
      <Image
        src={s.img}
        alt={`${s.nome} · Vida em Equilíbrio · Palmas-TO`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {/* Overlay marrom · imagem por baixo, texto em destaque */}
      <div className="absolute inset-0 bg-gradient-to-t from-ve-bg via-ve-bg/92 to-ve-bg/35" />

      {s.badge && (
        <span className="absolute right-4 top-4 z-10 whitespace-nowrap bg-ve-champagne/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-ve-bg">
          {s.badge}
        </span>
      )}

      {/* Conteúdo · por cima da imagem, ancorado na base */}
      <div className="relative z-10 flex flex-col gap-3.5 p-7">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ve-champagne/30 bg-ve-bg/60 backdrop-blur-sm">
          <Icon className="h-4 w-4 text-ve-champagne" />
        </span>

        <div>
          {s.subtitulo ? (
            <>
              <h3 className="display text-2xl leading-tight text-ve-cream">
                {s.nome}
              </h3>
              <p className="display-italic mt-1 text-lg text-ve-champagne">
                {s.subtitulo}
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow mb-1.5 text-ve-champagne">{s.indicacao}</p>
              <h3 className="display text-2xl leading-tight text-ve-cream">
                {s.nome}
              </h3>
            </>
          )}
        </div>
        <p className="text-sm leading-relaxed text-ve-cream/75">{s.descricao}</p>

        {/* Variações de duração · preço */}
        <div className="mt-1 flex flex-col divide-y divide-ve-cream/15 border-y border-ve-cream/15">
          {s.variacoes.map((v) => (
            <div
              key={v.duracao}
              className="flex items-center justify-between py-2"
            >
              <span className="text-sm text-ve-cream/75">{v.duracao}</span>
              <span className="text-sm font-semibold text-ve-champagne">
                {v.preco}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={waLink(s.waMessage)}
          target="_blank"
          rel="noopener"
          className="mt-2 inline-flex items-center justify-center gap-2.5 bg-ve-champagne px-5 py-3.5 text-sm font-medium text-ve-bg transition-colors hover:bg-ve-cream"
        >
          <IconWhatsApp className="h-4 w-4" />
          Agendar pelo WhatsApp
          <IconArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function GridObjetivos() {
  return (
    <section id="massagens" className="relative text-ve-cream">
      <div className="relative z-10 pb-24 md:pb-32">
        <div className="container-x relative pt-20 md:pt-28">
          <Stagger
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            step={0.08}
          >
            {SERVICOS.map((s) => (
              <StaggerItem key={s.nome} direction="up" distance={28} className="h-full">
                <ServicoCard s={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
