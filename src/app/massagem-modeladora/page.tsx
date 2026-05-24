import RitualPage, { type MassagemData } from "@/components/RitualPage";

const data: MassagemData = {
  nome: "Massagem Modeladora",
  eyebrow: "Massagem estética · 60 min",
  hero: "/img/stillHotStones.png",
  intro: "Contorno trabalhado com método e frequência.",
  manifesto:
    "Modelar não é prometer milagre. É trabalhar tecido com técnica, ritmo firme e pressão direcionada, em série consistente. A Massagem Modeladora é pra quem quer ver mudança real — entendendo que ela vem com frequência, não com sessão única.",
  para: [
    "Quer trabalhar contorno e definição em regiões específicas",
    "Já faz exercício e quer somar uma camada de atuação no tecido",
    "Busca constância de cuidado, não promessa de antes-e-depois mágico",
    "Quer combinar modeladora com drenagem em sessões alternadas",
  ],
  composicao: [
    {
      tecnica: "Amassamento profundo",
      o_que_faz:
        "Manobra-base da modeladora. Trabalha o tecido com pressão e ritmo firmes, mobilizando gordura localizada.",
    },
    {
      tecnica: "Pinçamento e rolamento",
      o_que_faz:
        "Mobiliza a pele e o tecido subcutâneo. Quebra fibrose e melhora textura.",
    },
    {
      tecnica: "Percussão controlada",
      o_que_faz:
        "Estimula circulação local e tonifica musculatura superficial.",
    },
    {
      tecnica: "Manobras de finalização",
      o_que_faz:
        "Deslizamento de fechamento que dispersa o que foi mobilizado e acalma o tecido trabalhado.",
    },
  ],
  beneficios: [
    "Melhora visível do contorno corporal com frequência",
    "Mobilização de gordura localizada em regiões específicas",
    "Estímulo de circulação local",
    "Trabalho complementar a rotina de exercício e alimentação",
    "Quebra de fibrose pós-cirúrgica (em combinação com drenagem)",
  ],
  duracao: "~60 min",
  preparar:
    "Hidrate-se bem antes. Pode haver sensibilidade no dia seguinte — é normal. Considere série de sessões (semanal ou quinzenal) pra ver resultado consistente.",
  whatsappMsg:
    "Oi Leandro, quero saber sobre a Massagem Modeladora — valores e como funciona o pacote.",
};

export default function Page() {
  return <RitualPage data={data} />;
}

export const metadata = {
  title: "Massagem Modeladora | Vida em Equilíbrio Palmas-TO",
  description:
    "Massagem modeladora intensiva em Palmas-TO. Trabalho de contorno corporal com técnica e frequência. 60 min.",
};
