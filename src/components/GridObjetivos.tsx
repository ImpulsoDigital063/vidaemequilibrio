import Link from "next/link";
import {
  IconTensa,
  IconInchada,
  IconModelar,
  IconCorrida,
  IconFlorescer,
  IconLeaf,
  IconArrowRight,
} from "./Icons";
import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";

const OBJETIVOS = [
  {
    icon: IconTensa,
    estado: "Quero relaxar profundo",
    massagem: "Day Premium Equilíbrio",
    descricao:
      "120 min com seis técnicas integradas: esfoliante, bolinha, pedras quentes, vela aromática, bambu e ventosa. Reset completo.",
    href: "/day-premium",
  },
  {
    icon: IconLeaf,
    estado: "Quero uma massagem relaxante",
    massagem: "Massagem Relaxante",
    descricao:
      "Sessão de 60 min com manobras clássicas. Pode receber enhancements (pedras, vela, bambu) à parte.",
    href: "/massagem-relaxante",
  },
  {
    icon: IconInchada,
    estado: "Estou inchada",
    massagem: "Drenagem Linfática",
    descricao:
      "Manobras manuais que mobilizam líquido retido. Indicada para retenção e pós-cirúrgico.",
    href: "/drenagem-linfatica",
  },
  {
    icon: IconCorrida,
    estado: "Treino · vou correr · corri",
    massagem: "Massagem Desportiva",
    descricao:
      "Recovery muscular focal. Preparação pré-prova e pós-prova. Atendimento particular pra corredora amadora.",
    href: "/massagem-desportiva",
  },
  {
    icon: IconModelar,
    estado: "Quero modelar contorno",
    massagem: "Massagem Modeladora",
    descricao:
      "Pressão firme e ritmo intensivo. Trabalha contorno corporal com método e frequência.",
    href: "/massagem-modeladora",
  },
  {
    icon: IconFlorescer,
    estado: "Quero cuidar do rosto",
    massagem: "Massagem Facial",
    descricao:
      "Cuidado dedicado ao rosto. Alivia tensão da mandíbula (ATM), drena, devolve viço.",
    href: "/massagem-facial",
  },
];

export default function GridObjetivos() {
  return (
    <section id="objetivos" className="bg-ve-cream text-ve-text-dark py-24 md:py-32">
      <div className="container-x">
        <Reveal direction="up">
          <p className="eyebrow text-ve-terracota mb-6">A pergunta vem antes da técnica</p>
          <h2 className="display text-3xl md:text-5xl leading-[1.1] max-w-3xl text-ve-text-dark">
            Cada corpo chega de um jeito.{" "}
            <span className="display-italic">Cada massagem responde diferente.</span>
          </h2>
        </Reveal>

        <div className="hairline my-12 bg-ve-text-dark/15" />

        <Stagger
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ve-text-dark/10"
          step={0.08}
        >
          {OBJETIVOS.map((o) => {
            const Icon = o.icon;
            return (
              <StaggerItem key={o.massagem} direction="up">
                <Link
                  href={o.href}
                  className="group bg-ve-cream p-8 md:p-10 flex flex-col gap-6 hover:bg-ve-cream-soft transition-colors h-full"
                >
                  <Icon className="w-10 h-10 text-ve-burgundy" />
                  <div>
                    <p className="eyebrow text-ve-terracota mb-2">{o.estado}</p>
                    <h3 className="display text-2xl md:text-3xl text-ve-text-dark">
                      {o.massagem}
                    </h3>
                  </div>
                  <p className="text-ve-text-dark/70 text-sm leading-relaxed">
                    {o.descricao}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-ve-text-dark group-hover:text-ve-burgundy transition-colors">
                    Conhecer
                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
