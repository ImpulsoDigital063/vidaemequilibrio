import RitualPage, { type MassagemData } from "@/components/RitualPage";

const data: MassagemData = {
  nome: "Massagem Desportiva",
  eyebrow: "Massagem terapêutica · 60 min",
  hero: "/img/heroCorredora.jpg",
  intro: "Pra você que corre em Palmas. Pré-prova e recovery.",
  manifesto:
    "Treino bom é o que tem recovery bom. A Massagem Desportiva foi desenhada para corredora amadora — pré-prova pra preparar a musculatura, pós-prova pra acelerar a recuperação. Trabalho focal nas regiões que a corrida castiga: panturrilha, quadríceps, isquiotibial, glúteo, lombar.",
  para: [
    "Tem prova marcada e quer chegar com a musculatura preparada",
    "Acabou de correr e quer evitar dor muscular tardia",
    "Treina de forma constante e precisa de manutenção muscular",
    "Não quer interromper a sequência de treinos por causa de tensão acumulada",
  ],
  composicao: [
    {
      tecnica: "Avaliação rápida (5 min)",
      o_que_faz:
        "Conversa curta sobre treino recente, prova alvo, dores específicas. Define onde focar.",
    },
    {
      tecnica: "Liberação miofascial",
      o_que_faz:
        "Solta aderências entre as camadas de fáscia. Restaura amplitude de movimento sem afetar performance.",
    },
    {
      tecnica: "Pressão focal nos pontos-gatilho",
      o_que_faz:
        "Trabalha pontos específicos onde a tensão acumulou. Pressão sustentada que libera sem agredir.",
    },
    {
      tecnica: "Deslizamento de drenagem ascendente",
      o_que_faz:
        "Acelera remoção de metabólitos do exercício (ácido lático e similares). Reduz inflamação local.",
    },
  ],
  beneficios: [
    "Recovery muscular acelerado pós-prova",
    "Preparação muscular pré-prova com ganho de amplitude",
    "Redução do risco de lesão por tensão acumulada",
    "Melhora da percepção corporal entre treinos",
    "Manutenção da sequência de treino sem interrupção por dor",
  ],
  duracao: "~60 min",
  preparar:
    "Pré-prova: agende 48h antes pra dar tempo do tecido se reorganizar sem fadiga. Pós-prova: nas primeiras 48h o ganho de recovery é maior. Use roupa de treino confortável. Atendimento sob contratação particular.",
  whatsappMsg:
    "Oii! Sou corredora e quero saber sobre a Massagem Desportiva.",
};

export default function Page() {
  return <RitualPage data={data} />;
}

export const metadata = {
  title: "Massagem Desportiva pra Corredoras | Vida em Equilíbrio Palmas-TO",
  description:
    "Massagem desportiva pra corredora amadora em Palmas-TO. Pré-prova e recovery pós-prova. 60 min sob contratação particular.",
};
