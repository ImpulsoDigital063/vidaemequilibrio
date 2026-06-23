#!/usr/bin/env node
// Raspador mensal do calendário de corridas de rua de Palmas-TO.
//
// Uso:
//   node scripts/scrape-corridas.mjs           dry-run: raspa, mostra o diff vs src/data/corridas.ts (NÃO escreve)
//   node scripts/scrape-corridas.mjs --write    regenera o array CORRIDAS em src/data/corridas.ts
//
// Modelo A (λ.prova-na-fonte): o agente mensal roda o dry-run, manda o diff pro Eduardo,
// e só roda --write + commit/push depois do ok. Não publica dado raspado direto na produção.
//
// Fontes (validadas 22/06/2026):
//   primária   todascorridas.com.br/corridas-em/to/palmas/  (HTML estável, já filtrado por cidade)
//   cross-check brasilquecorre.com/tocantins                 (confiança 2 fontes; best-effort)
// ARMADILHA: "Palmas" sozinho traz Palmas-PR (Paraná) — guard ehTocantins() filtra.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, "..", "src", "data", "corridas.ts");

const FONTE_PRIMARIA =
  "https://www.todascorridas.com.br/corridas-em/to/palmas/";
const FONTE_CROSSCHECK = "https://www.brasilquecorre.com/tocantins";

const MESES_ABREV = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];

const UA = { "User-Agent": "Mozilla/5.0 (compatible; VidaEquilibrioBot/1.0)" };

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchHtml(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`HTTP ${r.status} em ${url}`);
  return r.text();
}

// Siglas/marcas que devem ficar em CAIXA-ALTA (não viram Título).
const ACRONIMOS = new Set([
  "RUN", "GP", "TO", "PF", "FTTRI", "CAIXA", "SESI", "TJTO", "UNITINS", "PM", "CBM",
]);

function tituloCaso(palavra) {
  const limpa = palavra.replace(/[^A-Za-zÀ-ú0-9]/g, "");
  if (limpa && ACRONIMOS.has(limpa.toUpperCase())) {
    // conserta "Gp"→"GP", mantém "CAIXA", "RUN"
    return palavra.replace(limpa, limpa.toUpperCase());
  }
  if (/^\d/.test(palavra)) return palavra; // 5k, números
  // palavra TODA MAIÚSCULA (≥2 letras) vira Título: "ETAPA"→"Etapa"
  if (palavra.length > 1 && palavra === palavra.toUpperCase() && /[A-ZÀ-Ú]/.test(palavra)) {
    return palavra.charAt(0) + palavra.slice(1).toLowerCase();
  }
  return palavra;
}

// Deixa o nome cru da fonte apresentável e ESTÁVEL (pra automação não exigir limpeza manual).
function normalizaNome(bruto) {
  let n = bruto;
  n = n.replace(/^\s*to\s*[–—-]\s*/i, ""); // prefixo "To – "
  n = n.replace(/\s*[–—-]?\s*registro federativo/i, ""); // ruído "– Registro Federativo"
  n = n.replace(/\s*[–—-]?\s*\b20\d{2}\b/g, ""); // ano redundante
  n = n.replace(/\s*[–—-]\s*/g, " · "); // en/em-dash → separador da marca
  n = n.split(/\s+/).map(tituloCaso).join(" ");
  n = n.replace(/(\s*·\s*)+/g, " · ").replace(/^\s*·\s*|\s*·\s*$/g, ""); // colapsa/apara separadores
  return n.replace(/\s+/g, " ").trim();
}

function normalizaCidade(local) {
  if (!local) return "Palmas-TO";
  const m = local.match(/([A-Za-zÀ-ú\s]+?)\s*\/\s*([A-Za-z]{2})/);
  return m ? `${m[1].trim()}-${m[2].trim().toUpperCase()}` : local.trim();
}

// Parser da fonte primária. Ancora em cada card pela <a class="block w-full h-full" title="...">,
// pega a janela do card e extrai data (mini-calendário), local e distâncias.
function parsePrimaria(html) {
  const cards = [];
  const anchorRe =
    /<a href="(https?:\/\/[^"]*\/corrida\/[^"]+)" class="block w-full h-full" title="([^"]+)">/g;
  const anchors = [...html.matchAll(anchorRe)];

  for (let k = 0; k < anchors.length; k++) {
    const start = anchors[k].index;
    const end = k + 1 < anchors.length ? anchors[k + 1].index : start + 3000;
    const win = html.slice(start, end);

    const url = anchors[k][1];
    const nome = normalizaNome(decodeEntities(anchors[k][2]));

    const mes = win.match(/bg-red-600[^>]*>\s*([a-zç]{3,4})\s*</i)?.[1]?.toLowerCase();
    const dia = win.match(/leading-none">\s*(\d{1,2})\s*</)?.[1];
    const ano = win.match(/pb-1">\s*(\d{4})\s*</)?.[1];
    const local = win.match(/<span class="truncate">([^<]+)<\/span>/)?.[1]?.trim();
    const distRaw = win.match(
      /<span class="truncate font-medium text-gray-700">([^<]+)<\/span>/
    )?.[1];

    if (!mes || !dia || !ano) continue; // sem data confiável, descarta o card
    const mesIdx = MESES_ABREV.indexOf(mes.slice(0, 3));
    if (mesIdx < 0) continue;

    const data = `${ano}-${String(mesIdx + 1).padStart(2, "0")}-${String(+dia).padStart(2, "0")}`;
    const distancias = distRaw
      ? distRaw.split(/[,·]/).map((d) => d.trim()).filter(Boolean)
      : [];

    cards.push({
      nome,
      data,
      distancias,
      cidade: normalizaCidade(local),
      local,
      linkInscricao: url,
      fonte: "todascorridas.com.br",
    });
  }
  return cards;
}

// Guard anti Palmas-PR: só passa o que é de Tocantins.
function ehTocantins(c) {
  return /-TO$|Tocantins/i.test(c.cidade) || /\/\s*TO\b/i.test(c.local || "");
}

function selecionaFuturas(cards, hojeIso) {
  const visto = new Set();
  return cards
    .filter(ehTocantins)
    .filter((c) => c.data >= hojeIso)
    .filter((c) => {
      const k = c.linkInscricao || c.nome;
      if (visto.has(k)) return false;
      visto.add(k);
      return true;
    })
    .sort((a, b) => a.data.localeCompare(b.data));
}

// Cross-check best-effort: marca quais provas aparecem também na 2ª fonte (confiança).
async function crossCheck(cards) {
  try {
    const texto = (await fetchHtml(FONTE_CROSSCHECK))
      .replace(/<[^>]+>/g, " ")
      .toLowerCase();
    for (const c of cards) {
      const tokens = c.nome
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length >= 4 && !/palmas|corrida|etapa|tocantins/.test(w));
      c.confirmada2Fontes = tokens.length > 0 && tokens.some((t) => texto.includes(t));
    }
  } catch {
    for (const c of cards) c.confirmada2Fontes = null; // 2ª fonte indisponível
  }
}

// Lê o calendário atual (pares nome|data) pro diff.
function lerAtuais(tsText) {
  const itens = [];
  const re = /nome:\s*"([^"]+)",[\s\S]*?data:\s*"(\d{4}-\d{2}-\d{2})"/g;
  let m;
  while ((m = re.exec(tsText))) itens.push({ nome: m[1], data: m[2] });
  return itens;
}

function calculaDiff(atuais, novas) {
  const mapA = new Map(atuais.map((c) => [c.nome, c.data]));
  const mapN = new Map(novas.map((c) => [c.nome, c.data]));
  return {
    add: novas.filter((c) => !mapA.has(c.nome)),
    rem: atuais.filter((c) => !mapN.has(c.nome)),
    chg: novas
      .filter((c) => mapA.has(c.nome) && mapA.get(c.nome) !== c.data)
      .map((c) => ({ nome: c.nome, de: mapA.get(c.nome), para: c.data })),
  };
}

function geraArrayLiteral(cards) {
  const body = cards
    .map((c) => {
      const dist = `[${c.distancias.map((d) => `"${d}"`).join(", ")}]`;
      const link = c.linkInscricao
        ? `\n    linkInscricao:\n      "${c.linkInscricao}",`
        : "";
      return `  {
    nome: "${c.nome.replace(/"/g, '\\"')}",
    data: "${c.data}",
    distancias: ${dist},
    cidade: "${c.cidade}",${link}
    fonte: "${c.fonte}",
  },`;
    })
    .join("\n");
  return `export const CORRIDAS: Corrida[] = [\n${body}\n];`;
}

async function regenera(cards) {
  let ts = await readFile(DATA_FILE, "utf8");
  ts = ts.replace(
    /export const CORRIDAS: Corrida\[\] = \[[\s\S]*?\n\];/,
    geraArrayLiteral(cards)
  );
  const hoje = new Date().toISOString().slice(0, 10);
  ts = ts.replace(
    /\/\/ Última atualização:.*$/m,
    `// Última atualização: ${hoje} (automático · scripts/scrape-corridas.mjs).`
  );
  await writeFile(DATA_FILE, ts, "utf8");
}

// ---- main ----
const WRITE = process.argv.includes("--write");
const hojeIso = new Date().toISOString().slice(0, 10);

const cards = selecionaFuturas(parsePrimaria(await fetchHtml(FONTE_PRIMARIA)), hojeIso);

if (cards.length === 0) {
  console.error(
    "⚠ Nenhuma prova futura raspada — abortando pra não esvaziar o calendário (fonte mudou de layout?)."
  );
  process.exit(1);
}

await crossCheck(cards);

console.log(`\n${cards.length} provas futuras em Palmas-TO · fonte: todascorridas.com.br\n`);
for (const c of cards) {
  const flag =
    c.confirmada2Fontes === true
      ? "✓ 2 fontes"
      : c.confirmada2Fontes === false
        ? "· só 1 fonte"
        : "· cross-check off";
  console.log(
    `  ${c.data}  ${c.nome}  [${c.distancias.join(", ") || "—"}]  ${flag}`
  );
}

const diff = calculaDiff(lerAtuais(await readFile(DATA_FILE, "utf8")), cards);
console.log(`\nDIFF vs calendário atual:`);
console.log(`  + ${diff.add.length} nova(s):  ${diff.add.map((c) => c.nome).join("; ") || "—"}`);
console.log(`  - ${diff.rem.length} saída(s): ${diff.rem.map((c) => c.nome).join("; ") || "—"}`);
console.log(
  `  ~ ${diff.chg.length} data muda:  ${diff.chg.map((c) => `${c.nome} ${c.de}→${c.para}`).join("; ") || "—"}`
);

if (WRITE) {
  await regenera(cards);
  console.log(`\n✓ src/data/corridas.ts regenerado.`);
} else {
  console.log(`\n(dry-run — nada escrito. Rode com --write pra aplicar.)`);
}
