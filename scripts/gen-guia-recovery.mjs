#!/usr/bin/env node
/**
 * Gera o PDF "Guia de recovery pré e pós-prova" (isca de lead da corredora).
 * Creme editorial · A4 · 2 páginas · marca Vida em Equilíbrio.
 * Standalone: não precisa do dev server.
 *
 * Uso: node scripts/gen-guia-recovery.mjs
 * Saída: public/guia-recovery-corredora.pdf
 */
import puppeteer from "puppeteer-core";
import { mkdir, stat, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  `${process.env.LOCALAPPDATA || ""}/Google/Chrome/Application/chrome.exe`,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];
async function findBrowser() {
  for (const p of CANDIDATES) {
    try { await access(p); return p; } catch {}
  }
  throw new Error("Chrome/Edge não encontrado.");
}

const OUT = resolve("./public/guia-recovery-corredora.pdf");
await mkdir(dirname(OUT), { recursive: true });

const HTML = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: "Inter", system-ui, sans-serif; color: #2C1810; }
  .page {
    width: 210mm; height: 297mm; padding: 20mm 22mm;
    background: #F2EBE0; position: relative; overflow: hidden;
    display: flex; flex-direction: column;
  }
  .page + .page { page-break-before: always; }
  .wordmark { font-family: "Fraunces"; font-style: italic; font-weight: 400;
    font-size: 15pt; color: #2C1810; letter-spacing: .2px; }
  .rule { height: 1px; background: #C9B79C; margin: 7mm 0; }
  .rule-soft { height: 1px; background: rgba(44,24,16,.14); margin: 6mm 0; }
  .eyebrow { font-size: 7.5pt; letter-spacing: 2.5px; text-transform: uppercase;
    color: #8B6342; font-weight: 500; }
  h1 { font-family: "Fraunces"; font-weight: 400; font-size: 30pt; line-height: 1.05;
    color: #2C1810; margin: 5mm 0 4mm; }
  h1 em { font-style: italic; color: #8B6342; }
  .lead { font-size: 10.5pt; line-height: 1.6; color: rgba(44,24,16,.82);
    max-width: 150mm; font-weight: 300; }
  h2 { font-family: "Fraunces"; font-weight: 400; font-size: 15pt; color: #2C1810;
    margin: 0 0 2.5mm; }
  .sec { margin-top: 7mm; }
  .sec .eyebrow { display: block; margin-bottom: 2mm; }
  ul { list-style: none; }
  li { font-size: 9.7pt; line-height: 1.55; color: rgba(44,24,16,.85);
    padding-left: 7mm; position: relative; margin-bottom: 2.2mm; font-weight: 300; }
  li::before { content: ""; position: absolute; left: 0; top: 3.2mm;
    width: 3mm; height: 1px; background: #C9B79C; }
  li b { font-weight: 500; color: #2C1810; }
  .card { background: rgba(139,99,66,.07); border-left: 3px solid #8B6342;
    padding: 5mm 6mm; margin-top: 4mm; }
  .card p { font-size: 9.5pt; line-height: 1.55; color: rgba(44,24,16,.85); font-weight: 300; }
  .card b { color: #2C1810; font-weight: 500; }
  .spacer { flex: 1; }
  .foot { font-size: 8pt; color: rgba(44,24,16,.55); line-height: 1.5; font-weight: 300; }
  .foot b { color: #8B6342; font-weight: 500; }
  .cta { background: #2C1810; color: #F2EBE0; padding: 6mm 7mm; margin-top: 5mm; }
  .cta .eyebrow { color: #C9B79C; }
  .cta h3 { font-family: "Fraunces"; font-weight: 400; font-size: 14pt; margin: 2mm 0 1.5mm; }
  .cta p { font-size: 9pt; color: rgba(242,235,224,.8); line-height: 1.5; font-weight: 300; }
  .cta .wa { font-size: 10pt; color: #C9B79C; margin-top: 3mm; font-weight: 500; }
  .pagenum { position: absolute; bottom: 12mm; right: 22mm; font-size: 7.5pt; color: rgba(44,24,16,.4); }
</style></head>
<body>

  <!-- PÁGINA 1 -->
  <section class="page">
    <div class="wordmark">vida em equilíbrio</div>
    <div class="rule"></div>

    <span class="eyebrow">Guia · corredora</span>
    <h1>Recovery <em>pré e pós-prova</em></h1>
    <p class="lead">O que a ciência mostra sobre cuidar do corpo em volta da sua prova — sem mito do ácido lático, sem promessa de milagre. Um resumo honesto e prático pra você render mais e sofrer menos no dia seguinte.</p>

    <div class="sec">
      <span class="eyebrow">Antes da prova</span>
      <h2>Aqui, menos é mais</h2>
      <ul>
        <li><b>Nada de massagem profunda e longa.</b> Massagem pesada antes de competir pode reduzir sua força de pico. Deixe pra depois.</li>
        <li><b>Aqueça ativo.</b> Trote leve e mobilidade preparam melhor que qualquer manobra forte. Se quiser, só um estímulo curto e leve.</li>
        <li><b>Hidrate ao longo do dia</b> — no calor de Palmas isso pesa ainda mais na sua percepção de esforço.</li>
      </ul>
    </div>

    <div class="sec">
      <span class="eyebrow">Logo após cruzar a linha</span>
      <h2>Desaquecer, não massagear</h2>
      <ul>
        <li><b>Trote leve de 10 a 15 minutos.</b> É o desaquecimento ativo que ajuda a limpar o lactato — não a massagem.</li>
        <li><b>O "ácido lático" é mito.</b> A massagem não o elimina, e ele nem é a causa da dor que vem depois.</li>
        <li><b>No mesmo dia, priorize descanso e hidratação.</b> A massagem profunda tem hora melhor — veja na próxima página.</li>
      </ul>
    </div>

    <div class="spacer"></div>
    <div class="rule-soft"></div>
    <p class="foot">Material educativo da <b>Vida em Equilíbrio</b> · massoterapia em Palmas-TO · baseado em revisões sistemáticas e meta-análises. Não substitui avaliação médica.</p>
    <div class="pagenum">01 — 02</div>
  </section>

  <!-- PÁGINA 2 -->
  <section class="page">
    <div class="wordmark">vida em equilíbrio</div>
    <div class="rule"></div>

    <div class="sec" style="margin-top:0">
      <span class="eyebrow">A janela de ouro</span>
      <h2>Marque o recovery 1 a 3 dias depois</h2>
      <ul>
        <li><b>A dor muscular tardia pica entre 24 e 72h.</b> Por isso você acorda mais dolorida no segundo dia, não no primeiro.</li>
        <li><b>É nessa janela que a massagem rende mais</b> — alivia a dor e a sensação de fadiga quando o corpo mais sente.</li>
        <li>No dia da prova, recovery é trote leve e descanso. A massagem entra depois.</li>
      </ul>
    </div>

    <div class="sec">
      <span class="eyebrow">Onde a massagem ajuda (e onde não)</span>
      <h2>Aliada do recovery, não cura</h2>
      <ul>
        <li><b>Ajuda de verdade:</b> reduz a dor muscular e a fadiga, devolve leveza pras pernas entre os treinos.</li>
        <li><b>O que ela não faz:</b> não trata lesão por sobrecarga (joelho de corredor, canelite, Aquiles) — isso é carga progressiva e fortalecimento, sobretudo do quadril.</li>
      </ul>
    </div>

    <div class="card">
      <p><b>Bandeira vermelha:</b> dor óssea num ponto exato (canela, pé, quadril) que piora com o impacto e não melhora reduzindo a corrida pode ser fratura por estresse. Aí o caminho é avaliação médica — não massagem.</p>
    </div>

    <div class="spacer"></div>

    <div class="cta">
      <span class="eyebrow">Pra fechar o ciclo</span>
      <h3>Quer encaixar o recovery na sua rotina de treino?</h3>
      <p>A gente desenha o cuidado em volta da sua prova — preparação antes, recovery na janela certa depois. Sem promessa de milagre, sem empurrar pacote.</p>
      <div class="wa">WhatsApp (63) 8484-3646 · atendimento em Palmas, clínica ou domicílio</div>
    </div>
    <div class="pagenum">02 — 02</div>
  </section>

</body></html>`;

const browser = await puppeteer.launch({
  headless: true,
  executablePath: await findBrowser(),
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
try {
  const page = await browser.newPage();
  await page.setContent(HTML, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluateHandle("document.fonts.ready");
  await new Promise((r) => setTimeout(r, 600));
  await page.emulateMediaType("print");
  await page.pdf({ path: OUT, format: "A4", printBackground: true, preferCSSPageSize: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" } });
  const s = await stat(OUT);
  console.log(`✓ Guia gerado: ${OUT} (${(s.size / 1024).toFixed(1)} KB)`);
} finally {
  await browser.close();
}
