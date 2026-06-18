import puppeteer from "puppeteer-core";
import { access } from "node:fs/promises";

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

const OUT = "C:/Users/Usuario/Desktop/Declaracao-Comparecimento-Leandro-Timoteo.pdf";

const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 2.5cm 2.6cm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, "Times New Roman", serif; color: #1a1a1a; font-size: 12.5pt; line-height: 1.85; margin: 0; }
  .header { text-align: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 12px; margin-bottom: 40px; }
  .header .name { font-size: 20pt; font-weight: bold; letter-spacing: 3px; }
  .header .sub { font-size: 9.5pt; letter-spacing: 1.5px; color: #555; margin-top: 4px; text-transform: uppercase; }
  .header .doc { font-size: 9pt; color: #555; margin-top: 6px; }
  h1 { text-align: center; font-size: 14pt; letter-spacing: 2px; margin: 0 0 38px; }
  p { text-align: justify; margin: 0 0 18px; }
  .strong { font-weight: bold; }
  .fill { border-bottom: 1px solid #999; display: inline-block; min-width: 150px; }
  .local-data { margin-top: 30px; }
  .assinatura { margin-top: 52px; text-align: center; }
  .linha { border-top: 1px solid #1a1a1a; width: 320px; margin: 0 auto 6px; }
  .assinatura .n { font-weight: bold; }
  .assinatura .c { font-size: 10pt; color: #444; }
  .rodape { margin-top: 30px; font-size: 8.5pt; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px; }
</style></head><body>

  <div class="header">
    <div class="name">IMPULSO DIGITAL</div>
    <div class="sub">Criação de Sites &amp; Identidade de Marca</div>
    <div class="doc">CNPJ 64.585.949/0001-83 &nbsp;·&nbsp; Palmas — TO</div>
  </div>

  <h1>DECLARAÇÃO DE COMPARECIMENTO</h1>

  <p><span class="strong">EDUARDO BARROS CHAVES</span>, microempreendedor
  individual (MEI) inscrito no CNPJ sob o nº
  <span class="strong">64.585.949/0001-83</span>, que atua sob o nome fantasia
  <span class="strong">IMPULSO DIGITAL</span>, com sede na Quadra ARSE 122,
  Alameda 9, nº 09, Plano Diretor Sul, Palmas — TO, CEP 77.024-462,
  <span class="strong">DECLARA</span>, para os devidos fins, que:</p>

  <p>O Sr. <span class="strong">LEANDRO TIMÓTEO GABINO</span>, portador do CPF nº
  <span class="strong">068.817.101-00</span>, compareceu a esta empresa no dia
  <span class="strong">10 de junho de 2026</span>, no período das
  <span class="strong">15h00 às 17h00</span>, para reunião de trabalho
  referente ao desenvolvimento do site e da identidade visual do projeto
  <span class="strong">"VIDA EM EQUILÍBRIO"</span> (atividade de massoterapia),
  do qual é titular, serviço atualmente prestado por esta empresa.</p>

  <p>A presente declaração é emitida a pedido do interessado, para comprovação
  de comparecimento junto aos órgãos competentes.</p>

  <p class="local-data">Palmas — TO, 10 de junho de 2026.</p>

  <div class="assinatura">
    <div class="linha"></div>
    <div class="n">Eduardo Barros Chaves</div>
    <div class="c">Titular — MEI · Impulso Digital</div>
    <div class="c">CNPJ: 64.585.949/0001-83 &nbsp;·&nbsp; CPF: 615.079.733-30</div>
    <div class="c">Contato: ____________________</div>
  </div>

  <div class="rodape">
    Documento emitido por Impulso Digital · Palmas — TO · Para conferência dos dados, contate o responsável acima.
  </div>

</body></html>`;

const executablePath = await findBrowser();
const browser = await puppeteer.launch({ headless: true, executablePath });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.pdf({ path: OUT, format: "A4", printBackground: true });
await browser.close();
console.log("PDF gerado: " + OUT);
