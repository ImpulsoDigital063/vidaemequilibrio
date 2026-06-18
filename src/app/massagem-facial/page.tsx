import RitualPage, { type MassagemData } from "@/components/RitualPage";

const data: MassagemData = {
  nome: "Massagem Facial",
  eyebrow: "Massagem estética · 45 min",
  hero: "/img/stillEsfoliante.png",
  intro: "Cuidado que ninguém vê — e que aparece.",
  manifesto:
    "O rosto carrega tensão que a gente nem percebe que carrega. Mandíbula travada, contração entre as sobrancelhas, peso no olhar. A Massagem Facial trabalha essas regiões com manobras precisas, devolvendo viço e relaxamento profundo a um lugar que recebe cuidado raramente.",
  para: [
    "Trava a mandíbula sem perceber (ATM)",
    "Sente o rosto pesado, marcado, cansado",
    "Tem cefaleia tensional frequente",
    "Quer somar cuidado facial ao Day Premium (combinação possível)",
  ],
  composicao: [
    {
      tecnica: "Manobras de drenagem facial",
      o_que_faz:
        "Reduz inchaço, especialmente na região dos olhos e maxilar. Trabalho no caminho linfático do rosto.",
    },
    {
      tecnica: "Liberação de ATM",
      o_que_faz:
        "Trabalho dedicado na articulação temporomandibular. Alivia tensão que se acumula em quem trinca dente, mastiga muito ou tem cefaleia tensional.",
    },
    {
      tecnica: "Pressão suave no contorno do olho",
      o_que_faz:
        "Reduz peso no olhar e melhora o aspecto da região mais cansada do rosto.",
    },
    {
      tecnica: "Modelagem facial leve",
      o_que_faz:
        "Trabalha contorno do rosto e estimula circulação superficial. Devolve cor e viço.",
    },
  ],
  beneficios: [
    "Alívio imediato de tensão da mandíbula",
    "Redução do inchaço facial (especialmente matinal)",
    "Melhora do aspecto descansado e viçoso",
    "Diminuição de cefaleia tensional recorrente",
    "Sensação de presença e leveza na expressão",
  ],
  duracao: "~45 min",
  preparar:
    "Chegue com o rosto limpo (sem maquiagem se possível — eu retiro com cuidado). Cabelo preso. Roupa leve.",
  whatsappMsg:
    "Oii! Quero saber sobre a Massagem Facial — valores e horários.",
};

export default function Page() {
  return <RitualPage data={data} />;
}

export const metadata = {
  title: "Massagem Facial | Vida em Equilíbrio Palmas-TO",
  description:
    "Massagem facial dedicada com liberação de ATM e drenagem em Palmas-TO. 45 min.",
};
