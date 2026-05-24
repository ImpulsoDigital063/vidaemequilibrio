#!/usr/bin/env node
/**
 * Gera PDF do plano de negócio.
 *
 * Pré-requisito: `npm run dev` rodando em outra aba (porta 3002 por padrão).
 *
 * Uso:
 *   npm run pdf
 *   npm run pdf -- 3000        (se dev tá na 3000)
 *   npm run pdf -- 3002 ./out-artes/plano-v2.pdf
 */

import puppeteer from "puppeteer-core";
import { mkdir, stat, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";

// Detecta Chrome ou Edge no Windows
const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  `${process.env.LOCALAPPDATA || ""}/Google/Chrome/Application/chrome.exe`,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

async function findBrowser() {
  for (const p of CANDIDATES) {
    try {
      await access(p);
      return p;
    } catch {}
  }
  throw new Error("Nenhum Chrome/Edge encontrado nos caminhos padrão.");
}

const PORT = process.argv[2] || "3002";
const OUT = process.argv[3] || `./out-artes/plano-de-negocio.pdf`;
const URL = `http://localhost:${PORT}/plano-de-negocio`;

const outPath = resolve(OUT);
await mkdir(dirname(outPath), { recursive: true });

console.log(`📄 Gerando PDF de ${URL}`);
console.log(`   → ${outPath}`);

const executablePath = await findBrowser();
console.log(`   browser: ${executablePath}`);

const t0 = Date.now();
const browser = await puppeteer.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();

try {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });

  // Aguarda fontes carregarem
  await page.evaluateHandle("document.fonts.ready");

  // Aguarda 500ms pra garantir render final
  await new Promise((r) => setTimeout(r, 500));

  await page.emulateMediaType("print");

  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      bottom: "0mm",
      left: "0mm",
      right: "0mm",
    },
    preferCSSPageSize: true,
  });

  const s = await stat(outPath);
  console.log(`✓ PDF gerado em ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  console.log(`✓ Salvo: ${outPath} (${(s.size / 1024).toFixed(1)} KB)`);
} catch (e) {
  console.error("✗ Erro ao gerar PDF:", e.message);
  if (e.message.includes("ERR_CONNECTION_REFUSED")) {
    console.error(
      "\n💡 Dev server não está rodando. Em outro terminal: `npm run dev`"
    );
  }
  process.exitCode = 1;
} finally {
  await browser.close();
}
