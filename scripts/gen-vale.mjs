import puppeteer from "puppeteer-core";
import { access } from "node:fs/promises";

// =====================================================================
// GERADOR DE VALE-PRESENTE · Vida em Equilíbrio
// Edite o objeto VALE abaixo e rode:  node scripts/gen-vale.mjs
// Sai um PDF (A5) no Desktop, pronto pra mandar no WhatsApp ou imprimir.
// =====================================================================

const VALE = {
  para: "Mariana",
  de: "Eduardo",
  presente: "Massagem Relaxante · 80 min", // ex: "Crédito de R$ 400"
  mensagem: "Você merece um tempo só seu. Feliz aniversário!",
  validade: "18/12/2026",
  codigo: "VE-2026-0001",
};

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
  throw new Error("Nenhum Chrome/Edge encontrado.");
}

const OUT = `C:/Users/Usuario/Desktop/Vale-Presente-${VALE.para.replace(/\s+/g, "-")}.pdf`;

const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><style>
  @page { size: 148mm 210mm; margin: 0; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: Georgia, "Times New Roman", serif; }
  .card {
    width: 148mm; height: 210mm; background: #0F0B08; color: #F2EBE0;
    padding: 16mm 14mm; display: flex; flex-direction: column;
    position: relative; overflow: hidden;
  }
  .frame { position: absolute; inset: 7mm; border: 1px solid rgba(201,183,156,0.30); pointer-events: none; }
  .glow { position: absolute; width: 320px; height: 320px; border-radius: 50%;
    background: radial-gradient(circle, rgba(139,99,66,0.28) 0%, transparent 70%);
    top: -120px; right: -110px; }
  .inner { position: relative; flex: 1; display: flex; flex-direction: column; text-align: center; align-items: center; }
  .arco { margin-top: 4mm; }
  .marca { font-style: italic; font-size: 15pt; letter-spacing: 0.5px; color: #F2EBE0; margin-top: 3mm; }
  .vale { margin-top: 10mm; font-size: 10pt; letter-spacing: 4px; color: #C9B79C; text-transform: uppercase; }
  .rotulo { font-size: 8.5pt; letter-spacing: 2.5px; color: rgba(242,235,224,0.55); text-transform: uppercase; }
  .para-nome { font-size: 30pt; line-height: 1.1; margin-top: 3mm; }
  .presente { margin-top: 9mm; padding: 6mm 8mm; border-top: 1px solid rgba(201,183,156,0.25); border-bottom: 1px solid rgba(201,183,156,0.25); }
  .presente .label { font-size: 8.5pt; letter-spacing: 2.5px; color: rgba(242,235,224,0.55); text-transform: uppercase; }
  .presente .valor { font-size: 19pt; color: #C9B79C; margin-top: 3mm; }
  .mensagem { font-style: italic; font-size: 12.5pt; line-height: 1.6; color: rgba(242,235,224,0.9); margin-top: 9mm; max-width: 105mm; }
  .de { margin-top: 7mm; font-size: 11pt; color: rgba(242,235,224,0.7); }
  .de b { color: #F2EBE0; font-style: italic; }
  .rodape { position: relative; text-align: center; font-size: 8pt; color: rgba(242,235,224,0.6); line-height: 1.7; padding-top: 6mm; border-top: 1px solid rgba(201,183,156,0.18); }
  .rodape b { color: #C9B79C; }
</style></head><body>
  <div class="card">
    <div class="frame"></div>
    <div class="glow"></div>
    <div class="inner">
      <svg class="arco" width="78" height="34" viewBox="0 0 78 34" fill="none">
        <path d="M8 28 Q39 4 70 28" stroke="#C9B79C" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <circle cx="39" cy="17" r="2.4" fill="#C9B79C"/>
      </svg>
      <div class="marca">vida em equilíbrio</div>

      <div class="vale">Vale-Presente</div>

      <div style="margin-top:9mm">
        <div class="rotulo">Para</div>
        <div class="para-nome">${VALE.para}</div>
      </div>

      <div class="presente">
        <div class="label">O presente</div>
        <div class="valor">${VALE.presente}</div>
      </div>

      <div class="mensagem">&ldquo;${VALE.mensagem}&rdquo;</div>

      <div class="de">com carinho, <b>${VALE.de}</b></div>

      <div style="flex:1"></div>

      <div class="rodape">
        Válido até <b>${VALE.validade}</b> &nbsp;·&nbsp; código ${VALE.codigo}<br/>
        Para agendar, fale no WhatsApp <b>(63) 98484-3646</b><br/>
        Atendimento na clínica (CYOX · Setor Norte) ou a domicílio — Palmas-TO
      </div>
    </div>
  </div>
</body></html>`;

const executablePath = await findBrowser();
const browser = await puppeteer.launch({ headless: true, executablePath });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.pdf({ path: OUT, width: "148mm", height: "210mm", printBackground: true });
await browser.close();
console.log("Vale gerado: " + OUT);
