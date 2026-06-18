import RitualPage, { type MassagemData } from "@/components/RitualPage";

const data: MassagemData = {
  nome: "Drenagem Linfática",
  eyebrow: "Massagem terapêutica · 60 min",
  hero: "/img/stillBamboo.png",
  intro: "Manobras manuais que mobilizam o líquido retido.",
  manifesto:
    "O sistema linfático trabalha em silêncio. Quando ele engasga, o corpo avisa em inchaço, peso, sensação de roupa que aperta sem motivo. A Drenagem é a sessão que devolve fluidez — pressão firme, ritmo contínuo, manobras que respeitam o caminho natural do líquido.",
  para: [
    "Acorda com o rosto ou as pernas mais inchadas",
    "Está em pós-cirúrgico e precisa acelerar a recuperação",
    "Sente retenção em períodos específicos do ciclo",
    "Quer aliviar peso e sensação de cansaço crônico",
  ],
  composicao: [
    {
      tecnica: "Manobras de bombeamento ganglionar",
      o_que_faz:
        "Abertura dos pontos onde o sistema linfático filtra: pescoço, axila, virilha. Sem essa etapa, o resto da sessão não escoa.",
    },
    {
      tecnica: "Deslizamento contínuo no sentido do retorno",
      o_que_faz:
        "Pressão suave e ritmo constante. Acompanha o caminho que o líquido faz pra voltar à circulação central.",
    },
    {
      tecnica: "Bolinha massageadora nos pés",
      o_que_faz:
        "Estimula os pontos finais do sistema linfático nos membros inferiores. Acelera o retorno do líquido das pernas.",
    },
    {
      tecnica: "Compressão progressiva em membros",
      o_que_faz:
        "Trabalha braços e pernas em sequência ascendente. Mobiliza retenção sem agredir o tecido.",
    },
  ],
  beneficios: [
    "Redução de inchaço e sensação de peso",
    "Aceleração de recuperação pós-cirúrgica (quando indicado pelo médico)",
    "Melhora do contorno facial e corporal pela eliminação de líquido retido",
    "Sensação de leveza prolongada nos dias seguintes",
    "Desintoxicação por estímulo do sistema linfático",
  ],
  duracao: "~60 min",
  preparar:
    "Hidrate-se bem antes e nas 24h seguintes — a sessão mobiliza líquido e o corpo precisa eliminar. Roupa leve e confortável.",
  whatsappMsg:
    "Oii! Quero saber sobre a Drenagem Linfática — valores e horários.",
};

export default function Page() {
  return <RitualPage data={data} />;
}

export const metadata = {
  title: "Drenagem Linfática | Massagem em Palmas-TO | Vida em Equilíbrio",
  description:
    "Drenagem linfática manual em Palmas-TO. Indicada para retenção, inchaço e pós-cirúrgico. 60 min.",
};
