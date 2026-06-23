// Calendário de corridas de rua de Palmas-TO.
//
// Fonte raspável (validada 22/06/2026): todascorridas.com.br/corridas-em/to/palmas/
// Cross-check: brasilquecorre.com/tocantins · detalhe/inscrição: viaesporte.com (LCM Gestão Esportiva).
// ARMADILHA: "Palmas" sozinho traz Palmas-PR (Paraná) — sempre filtrar TO/Tocantins.
//
// Este arquivo é atualizado MENSALMENTE pelo agente agendado (scripts/scrape-corridas.mjs),
// que monta o diff e manda pro Eduardo aprovar ANTES do push (modelo A · λ.prova-na-fonte).
// Evite editar à mão — a próxima raspagem sobrescreve.
//
// Última atualização: 2026-06-23 (automático · scripts/scrape-corridas.mjs).

export interface Corrida {
  nome: string;
  data: string; // ISO YYYY-MM-DD
  distancias: string[];
  cidade: string;
  linkInscricao?: string;
  fonte: string;
}

export const CORRIDAS: Corrida[] = [
  {
    nome: "I Corrida Solidária da Câmara Municipal de Palmas",
    data: "2026-06-27",
    distancias: ["4k", "10k"],
    cidade: "Palmas-TO",
    linkInscricao:
      "https://todascorridas.com.br/corrida/i-corrida-solidaria-da-camara-municipal-de-palmas/",
    fonte: "todascorridas.com.br",
  },
  {
    nome: "Circuito CAIXA Sunset RUN · Etapa Palmas",
    data: "2026-07-11",
    distancias: ["5k", "10k"],
    cidade: "Palmas-TO",
    linkInscricao:
      "https://todascorridas.com.br/corrida/circuito-caixa-sunset-run-etapa-palmas/",
    fonte: "todascorridas.com.br",
  },
  {
    nome: "Cats RUN TO",
    data: "2026-07-19",
    distancias: ["3k", "5k", "250m"],
    cidade: "Palmas-TO",
    linkInscricao:
      "https://todascorridas.com.br/corrida/cats-run-to-2026/",
    fonte: "todascorridas.com.br",
  },
  {
    nome: "Corrida GP Brasil · Tocantins",
    data: "2026-08-30",
    distancias: ["3k", "5k", "10k", "15k"],
    cidade: "Palmas-TO",
    linkInscricao:
      "https://todascorridas.com.br/corrida/corrida-gp-brasil-2026-tocantins/",
    fonte: "todascorridas.com.br",
  },
  {
    nome: "Federação Tocantinense de Triathlon · FTTRI",
    data: "2026-11-30",
    distancias: [],
    cidade: "Palmas-TO",
    linkInscricao:
      "https://todascorridas.com.br/corrida/to-federacao-tocantinense-de-triathlon-fttri-registro-federativo-2026/",
    fonte: "todascorridas.com.br",
  },
];

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const MESES_ABREV = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

// "2026-06-27" → "27 de junho" (parse manual pra não cair em bug de fuso horário).
export function formataData(iso: string): string {
  const [, mes, dia] = iso.split("-").map(Number);
  return `${dia} de ${MESES[mes - 1]}`;
}

// "2026-06-27" → { dia: "27", mes: "jun" } pro badge de data.
export function badgeData(iso: string): { dia: string; mes: string } {
  const [, mes, dia] = iso.split("-").map(Number);
  return { dia: String(dia).padStart(2, "0"), mes: MESES_ABREV[mes - 1] };
}

// Só provas de hoje em diante, ordenadas por data (a mais próxima primeiro).
export function corridasFuturas(hoje = new Date()): Corrida[] {
  const hojeIso = hoje.toISOString().slice(0, 10);
  return CORRIDAS.filter((c) => c.data >= hojeIso).sort((a, b) =>
    a.data.localeCompare(b.data)
  );
}
