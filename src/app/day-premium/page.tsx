import RitualPage, { type MassagemData } from "@/components/RitualPage";

const data: MassagemData = {
  nome: "Day Premium Equilíbrio",
  eyebrow: "Day Premium · 120 min",
  hero: "/img/stillCandle.png",
  intro: "O programa completo. Seis técnicas em uma única sessão.",
  manifesto:
    "Quando o corpo já não distingue mais o que é cansaço, o que é tensão e o que é hábito, ele precisa de um intervalo que não negocia. O Day Premium é esse intervalo. Seis camadas de cuidado, em sequência pensada, devolvendo presença a cada parte.",
  para: [
    "Acumulou semanas (ou meses) sem parar",
    "Sente que o corpo virou um lugar de fundo, não o lugar onde mora",
    "Precisa de um cuidado que abrace inteiro, não só a região da dor",
    "Quer começar a se cuidar com profundidade — e só lembrar disso por hábito",
  ],
  composicao: [
    {
      tecnica: "Esfoliante corporal",
      o_que_faz:
        "Abertura. Renova a textura da pele, prepara o tecido pra receber o toque com mais sensibilidade. No primeiro atendimento, por conta da casa.",
    },
    {
      tecnica: "Bolinha massageadora nos pés",
      o_que_faz:
        "Ativa pontos de reflexologia. Pés tensos seguram o corpo inteiro — aliviar aqui muda o resto da sessão.",
    },
    {
      tecnica: "Pedras quentes de basalto",
      o_que_faz:
        "Calor profundo que dilata a musculatura tensa. Permite que as manobras seguintes alcancem camadas mais fundas sem força excessiva.",
    },
    {
      tecnica: "Vela aromática quente",
      o_que_faz:
        "A cera derretida na pele é morna, hidratante, perfumada. Combina o tato com o olfato — eleva a sessão ao sensorial.",
    },
    {
      tecnica: "Bambu terapêutico",
      o_que_faz:
        "Trabalha contorno e fáscia. Movimento longo, deslizante, que reorganiza tecido e melhora circulação.",
    },
    {
      tecnica: "Ventosa de finalização",
      o_que_faz:
        "Selo da sessão. Mobiliza fáscia e estimula vascularização — o corpo termina mais leve, com sensação de circulação ativa.",
    },
  ],
  beneficios: [
    "Alívio profundo da tensão muscular acumulada",
    "Melhora da circulação e da sensação de leveza",
    "Renovação do tecido cutâneo pela esfoliação inicial",
    "Sensação prolongada de presença no corpo (não só no momento — nos dias seguintes)",
    "Aprofundamento do sono na noite seguinte ao atendimento",
  ],
  duracao: "~120 min",
  preparar:
    "Chegue 10 minutos antes pra desacelerar. Evite refeições pesadas até 1h antes. Roupa confortável pra ir embora — você vai querer permanecer no estado em que sair daqui.",
  whatsappMsg:
    "Oi Leandro, quero saber sobre o Day Premium Equilíbrio — valores e horários.",
};

export default function Page() {
  return <RitualPage data={data} />;
}

export const metadata = {
  title: "Day Premium Equilíbrio | Massagem completa 120 min | Vida em Equilíbrio Palmas",
  description:
    "Day Premium com seis técnicas integradas: esfoliante, bolinha, pedras quentes, vela, bambu e ventosa. 120 min. Palmas-TO.",
};
