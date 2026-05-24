import RitualPage, { type MassagemData } from "@/components/RitualPage";

const data: MassagemData = {
  nome: "Massagem Relaxante",
  eyebrow: "Massagem relaxante · 60 min",
  hero: "/img/heroHands.png",
  intro: "Sessão clássica para soltar o que o dia acumulou.",
  manifesto:
    "Quando o corpo não pede técnica específica — só precisa de um intervalo. A Massagem Relaxante é a sessão de base do Vida em Equilíbrio: manobras clássicas, ritmo suave, foco em desacelerar o sistema nervoso e devolver leveza ao tecido.",
  para: [
    "Está acumulando tensão sem dor específica",
    "Quer começar a praticar autocuidado e ainda não sabe por onde",
    "Procura uma sessão regular pra incluir na rotina",
    "Quer testar antes de partir para um Day Premium",
  ],
  composicao: [
    {
      tecnica: "Deslizamento",
      o_que_faz:
        "Manobra de abertura. Movimento longo e contínuo que aquece o tecido e prepara pra trabalho mais profundo.",
    },
    {
      tecnica: "Amassamento",
      o_que_faz:
        "Trabalha musculatura em camadas. Solta a tensão e melhora circulação local.",
    },
    {
      tecnica: "Fricção e percussão leve",
      o_que_faz:
        "Estimula a pele e tonifica musculatura superficial.",
    },
    {
      tecnica: "Manobras de finalização",
      o_que_faz:
        "Deslizamento de fechamento que devolve o corpo a um estado calmo e integrado.",
    },
  ],
  beneficios: [
    "Redução imediata de tensão acumulada",
    "Sensação de leveza e desaceleração",
    "Melhora da qualidade do sono na noite seguinte",
    "Base ideal para combinar com enhancements (pedras, vela, bambu)",
  ],
  duracao: "~60 min",
  preparar:
    "Chegue tranquila, sem pressa pra sair depois. Roupa confortável. Se quiser, posso adicionar enhancements na hora — combinamos no início.",
  whatsappMsg:
    "Oi Leandro, quero saber sobre a Massagem Relaxante — valores e horários.",
};

export default function Page() {
  return <RitualPage data={data} />;
}

export const metadata = {
  title: "Massagem Relaxante 60 min | Vida em Equilíbrio Palmas-TO",
  description:
    "Massagem relaxante clássica em Palmas-TO. Sessão de 60 min com manobras de deslizamento, amassamento e fricção.",
};
