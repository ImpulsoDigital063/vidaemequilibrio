// Índice de busca · client-side · combina páginas estáticas + posts publicados
import { POSTS_PUBLICADOS, POSTS_DRAFT } from "@/content/posts";

export type SearchItem = {
  titulo: string;
  descricao: string;
  href: string;
  categoria: "Massagem" | "Página" | "Blog" | "Seção";
  keywords?: string[];
};

const STATIC_ITEMS: SearchItem[] = [
  // === Massagens (6) ===
  {
    titulo: "Day Premium Equilíbrio",
    descricao:
      "120 min com 6 técnicas integradas · esfoliante, pedras quentes, vela aromática, bambu e ventosa",
    href: "/day-premium",
    categoria: "Massagem",
    keywords: ["day", "premium", "120", "completo", "ritual", "tudo"],
  },
  {
    titulo: "Massagem Relaxante",
    descricao: "60 min · manobras clássicas · pode receber enhancements",
    href: "/massagem-relaxante",
    categoria: "Massagem",
    keywords: ["relax", "soltar", "tensao", "deslizar"],
  },
  {
    titulo: "Drenagem Linfática",
    descricao:
      "60 min · mobiliza líquido retido · indicada pra retenção e pós-cirúrgico",
    href: "/drenagem-linfatica",
    categoria: "Massagem",
    keywords: ["drenagem", "linfatica", "inchaco", "retencao", "pos-operatorio"],
  },
  {
    titulo: "Massagem Desportiva",
    descricao: "Recovery muscular focal · preparação pré-prova e pós-prova",
    href: "/massagem-desportiva",
    categoria: "Massagem",
    keywords: ["desportiva", "esportiva", "corredora", "recovery", "atleta", "treino"],
  },
  {
    titulo: "Massagem Modeladora",
    descricao: "60 min · pressão firme · trabalho de contorno corporal",
    href: "/massagem-modeladora",
    categoria: "Massagem",
    keywords: ["modeladora", "contorno", "modelar", "redutora", "celulite"],
  },
  {
    titulo: "Massagem Facial",
    descricao: "45 min · drenagem facial, ATM, contorno do olho, viço",
    href: "/massagem-facial",
    categoria: "Massagem",
    keywords: ["facial", "rosto", "atm", "mandibula", "olho"],
  },

  // === Páginas ===
  {
    titulo: "Catálogo",
    descricao: "Catálogo editorial completo · PDF pra baixar com modalidades e valores",
    href: "/catalogo",
    categoria: "Página",
    keywords: ["catalogo", "pdf", "precos", "valores", "tabela"],
  },
  {
    titulo: "Blog · Conteúdo",
    descricao:
      "Estudo aberto · drenagem, técnicas, autocuidado · escrito por Leandro Timóteo",
    href: "/blog",
    categoria: "Blog",
    keywords: ["blog", "conteudo", "artigos", "textos"],
  },

  // === Seções da home (anchors) ===
  {
    titulo: "Vale-Presente",
    descricao: "Presentear cuidado · 3 modalidades · Dia das Mães, aniversário, agradecimento",
    href: "/#vale-presente",
    categoria: "Seção",
    keywords: [
      "vale",
      "presente",
      "presentear",
      "gift card",
      "dia das maes",
      "aniversario",
    ],
  },
  {
    titulo: "Quem cuida · Leandro Timóteo",
    descricao: "Massoterapeuta dedicado ao cuidado feminino exclusivo",
    href: "/#manifesto",
    categoria: "Seção",
    keywords: ["leandro", "timoteo", "quem cuida", "profissional", "massagista"],
  },
  {
    titulo: "Como chegar · Clínica CYOX",
    descricao: "Clínica parceira CYOX no Setor Norte · ou atendimento em domicílio",
    href: "/#como-chegar",
    categoria: "Seção",
    keywords: ["endereco", "como chegar", "cyox", "setor norte", "mapa", "localizacao"],
  },
  {
    titulo: "Perguntas frequentes",
    descricao: "Dúvidas sobre atendimento, valores, modalidades, primeira sessão",
    href: "/#contato",
    categoria: "Seção",
    keywords: ["faq", "duvidas", "perguntas", "ajuda"],
  },
  {
    titulo: "Escolha por estado · Cada corpo chega de um jeito",
    descricao: "Quero relaxar · estou inchada · vou correr · quero modelar · cuidar do rosto",
    href: "/#objetivos",
    categoria: "Seção",
    keywords: ["objetivos", "estado", "corpo", "escolher", "comecar"],
  },
];

export function getSearchIndex(): SearchItem[] {
  const postItems: SearchItem[] = POSTS_PUBLICADOS.map((p) => ({
    titulo: p.titulo,
    descricao: p.intro,
    href: `/blog/${p.slug}`,
    categoria: "Blog" as const,
    keywords: p.keywords,
  }));
  // Drafts entram como ghost (categoria Blog mas href /blog · vão pro índice)
  const draftItems: SearchItem[] = POSTS_DRAFT.map((p) => ({
    titulo: `${p.titulo} (em breve)`,
    descricao: p.intro,
    href: "/blog",
    categoria: "Blog" as const,
    keywords: [p.categoria, "em breve"],
  }));
  return [...STATIC_ITEMS, ...postItems, ...draftItems];
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function scoreItem(item: SearchItem, q: string): number {
  const titulo = normalize(item.titulo);
  const descricao = normalize(item.descricao);
  const kw = (item.keywords ?? []).map(normalize).join(" ");

  let score = 0;
  if (titulo === q) score += 200;
  if (titulo.startsWith(q)) score += 80;
  if (titulo.includes(q)) score += 30;
  if (descricao.includes(q)) score += 10;
  if (kw.includes(q)) score += 25;

  // Match por palavras parciais
  const words = q.split(/\s+/).filter((w) => w.length >= 2);
  words.forEach((w) => {
    if (titulo.includes(w)) score += 12;
    if (descricao.includes(w)) score += 3;
    if (kw.includes(w)) score += 10;
  });

  return score;
}

export function searchItems(query: string, limit = 8): SearchItem[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  return getSearchIndex()
    .map((item) => ({ item, score: scoreItem(item, q) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item);
}

// Sugestões padrão quando o campo está vazio
export function getSugestoes(): SearchItem[] {
  return [
    STATIC_ITEMS[0], // Day Premium
    STATIC_ITEMS[2], // Drenagem
    STATIC_ITEMS[8], // Vale-Presente
    STATIC_ITEMS[7], // Blog
  ];
}
