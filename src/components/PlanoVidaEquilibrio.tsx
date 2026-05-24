"use client";

import LogoVariacaoA, { MarcaDagua, MarkArcoEquilibrio } from "./logos/LogoVariacaoA";

// =====================================================================
// PLANO COMPLETO VIDA EM EQUILÍBRIO — formato Impulso Digital
// Paleta: Editorial Tungsten light (cream warm + warm brown + burgundy + champagne)
// Sem preto puro. Otimizado pra impressão (Ctrl+P → Salvar como PDF).
// Rodapé poético em cada seção · frases bíblicas + jornada + recomeço.
// =====================================================================

// Frases motivacionais · uma por seção · mix bíblicas + jornada + recomeço
// Selecionadas pra dialogar com o Leandro: jovem em transição profissional,
// bio com Provérbios 16:3 + "SEM SACRIFÍCIO NÃO HÁ VITÓRIA"
const FRASES = [
  { texto: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.", autor: "Provérbios 16:3" },
  { texto: "Encomenda ao Senhor o teu caminho, confia nele, e ele tudo fará.", autor: "Salmos 37:5" },
  { texto: "Os planos do diligente conduzem à abundância.", autor: "Provérbios 21:5" },
  { texto: "Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.", autor: "Eclesiastes 3:1" },
  { texto: "Posso todas as coisas naquele que me fortalece.", autor: "Filipenses 4:13" },
  { texto: "Cada manhã renova-se a Tua misericórdia, ó Senhor.", autor: "Lamentações 3:23" },
  { texto: "O Senhor te abençoará em todas as obras das tuas mãos.", autor: "Deuteronômio 28:12" },
  { texto: "Faze o que tens a fazer, mas faze de coração, como para o Senhor.", autor: "Colossenses 3:23" },
  { texto: "Sem visão, o povo se desvia. Onde há orientação, há prosperidade.", autor: "Provérbios 29:18" },
  { texto: "Quem cuida dos outros precisa primeiro cuidar de si.", autor: "Provérbio antigo" },
  { texto: "A jornada de mil quilômetros começa com um único passo.", autor: "Lao Tsé" },
  { texto: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", autor: "Robert Collier" },
  { texto: "Não tenha pressa. Tenha rumo.", autor: "" },
  { texto: "Construir não é grandeza. É continuar.", autor: "" },
  { texto: "O que parecia limitação um dia, hoje é técnica nas mãos.", autor: "" },
  { texto: "Tudo que você prepara em silêncio, um dia vira sua entrega.", autor: "" },
  { texto: "Quem pagou o preço da preparação não tem medo da entrega.", autor: "" },
  { texto: "Cada manhã é uma nova folha em branco. Escreve nela com cuidado.", autor: "" },
  { texto: "Coragem não é a ausência do medo. É decidir que outra coisa importa mais.", autor: "" },
  { texto: "A maior glória em viver não está em nunca cair, mas em levantar a cada vez que caímos.", autor: "Nelson Mandela" },
  { texto: "Sonhos não trabalham até que você trabalhe.", autor: "" },
  { texto: "Tudo que vale a pena exige tempo.", autor: "" },
  { texto: "Quem cuida das pequenas coisas é quem constrói as grandes.", autor: "" },
  { texto: "Sem sacrifício não há vitória — e nenhuma vitória te pertence se você não pagou o preço dela.", autor: "" },
  { texto: "O bem que você fez aos outros volta multiplicado pelas mãos de quem você nem conhece ainda.", autor: "" },
];

function Frase({ n }: { n: number }) {
  // Renderiza apenas na capa (n=0) · resto das frases vai no @page bottom-center via CSS print.
  if (n !== 0) return null;
  const f = FRASES[n % FRASES.length];
  return (
    <footer style={{
      marginTop: 24,
      paddingTop: 18,
      borderTop: "1px dotted var(--p-border-soft)",
      textAlign: "center",
    }}>
      <div style={{
        fontFamily: "var(--p-font-display)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: 14.5,
        lineHeight: 1.5,
        color: "var(--p-text-soft)",
        maxWidth: 540,
        margin: "0 auto",
      }}>
        "{f.texto}"
      </div>
      {f.autor && (
        <div style={{
          marginTop: 8,
          fontFamily: "var(--p-font-body)",
          fontSize: 9.5,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--p-champagne-deep)",
        }}>
          — {f.autor}
        </div>
      )}
    </footer>
  );
}

export default function PlanoVidaEquilibrio() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

        :root {
          --p-bg: #F2EBE0;
          --p-bg-soft: #E8DFD2;
          --p-bg-card: #FBF6EC;
          --p-bg-warm: #F7ECDD;
          --p-text: #3D2517;
          --p-text-soft: #6B4E37;
          --p-text-muted: #998571;
          --p-burgundy: #6E2A4A;
          --p-burgundy-deep: #4A1B30;
          --p-burgundy-soft: rgba(110, 42, 74, 0.08);
          --p-champagne: #C9B79C;
          --p-champagne-deep: #9F8B6A;
          --p-terracota: #8B6342;
          --p-tungsten: #1A1310;
          --p-border: rgba(61, 37, 23, 0.16);
          --p-border-soft: rgba(61, 37, 23, 0.08);
          --p-font-display: "Manrope", -apple-system, "Segoe UI", sans-serif;
          --p-font-body: "Manrope", -apple-system, "Segoe UI", sans-serif;
        }
        body { background: var(--p-bg) !important; color: var(--p-text) !important; }
        .plano-doc {
          font-family: var(--p-font-body);
          font-weight: 400;
          line-height: 1.78;
          color: var(--p-text);
          background: var(--p-bg);
          letter-spacing: -0.003em;
        }
        .plano-doc h1, .plano-doc h2, .plano-doc h3, .plano-doc h4 {
          font-family: var(--p-font-display);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.018em;
          color: var(--p-text);
        }
        .plano-doc h2 {
          color: var(--p-burgundy);
          margin: 0 0 8px;
        }
        .plano-doc h3 {
          font-weight: 500;
          color: var(--p-text);
          margin: 32px 0 10px;
        }
        .plano-doc h4 {
          font-family: var(--p-font-body);
          font-weight: 500;
          font-style: normal;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--p-terracota);
          margin: 24px 0 8px;
        }
        .plano-doc p { margin: 0 0 14px; }
        .plano-doc strong { color: var(--p-burgundy); font-weight: 500; }
        .plano-doc em { font-style: italic; color: var(--p-text-soft); }
        .plano-doc code {
          font-family: ui-monospace, "Cascadia Code", monospace;
          font-size: 12px;
          background: var(--p-burgundy-soft);
          color: var(--p-burgundy);
          padding: 1px 6px;
          border-radius: 4px;
        }
        .plano-doc table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0 28px;
          font-size: 13px;
          page-break-inside: avoid;
        }
        .plano-doc th {
          background: var(--p-burgundy-soft);
          color: var(--p-burgundy);
          font-weight: 500;
          text-align: left;
          padding: 14px 14px;
          border-bottom: 2px solid var(--p-burgundy);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .plano-doc td {
          padding: 14px 14px;
          border-bottom: 1px solid var(--p-border-soft);
          color: var(--p-text);
          vertical-align: top;
          line-height: 1.55;
        }
        .plano-doc tr:last-child td { border-bottom: none; }
        .plano-doc ul, .plano-doc ol { margin: 14px 0 22px; padding-left: 24px; }
        .plano-doc li { margin: 10px 0; line-height: 1.65; }
        .plano-doc ul li { list-style: none; position: relative; }
        .plano-doc ul li::before {
          content: "·";
          position: absolute;
          left: -14px;
          color: var(--p-burgundy);
          font-weight: 700;
          font-size: 1.2em;
        }
        .plano-doc ol li::marker { color: var(--p-burgundy); font-weight: 500; }
        .plano-quote {
          background: rgba(201, 183, 156, 0.15);
          border-left: 3px solid var(--p-champagne);
          padding: 14px 22px;
          margin: 16px 0;
          font-style: italic;
          color: var(--p-text-soft);
          font-size: 14px;
        }
        .plano-callout {
          background: var(--p-bg-card);
          border: 1px solid var(--p-border-soft);
          border-left: 3px solid var(--p-terracota);
          padding: 22px 26px;
          margin: 22px 0;
          border-radius: 4px;
          page-break-inside: avoid;
        }
        .plano-callout h3 { margin-top: 0 !important; }
        .plano-callout h4 { margin-top: 12px !important; }
        .plano-callout.is-burgundy {
          background: var(--p-burgundy-soft);
          border-left-color: var(--p-burgundy);
        }
        .plano-callout.is-champagne {
          background: rgba(201, 183, 156, 0.12);
          border-left-color: var(--p-champagne-deep);
        }
        .plano-callout.is-warm {
          background: var(--p-bg-warm);
          border-left-color: var(--p-terracota);
        }
        .plano-flow {
          background: var(--p-bg-card);
          border: 1px solid var(--p-border-soft);
          border-radius: 6px;
          padding: 18px 22px;
          margin: 14px 0;
          font-family: ui-monospace, "Cascadia Code", monospace;
          font-size: 12px;
          line-height: 1.9;
          color: var(--p-text);
          page-break-inside: avoid;
        }
        .plano-page-marker {
          display: inline-block;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--p-champagne-deep);
          background: var(--p-bg-card);
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
          border: 1px solid var(--p-border-soft);
        }
        .plano-toc { list-style: none; padding: 0; margin: 20px 0; }
        .plano-toc li {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 11px 0;
          border-bottom: 1px dashed var(--p-border-soft);
          font-size: 13px;
        }
        .plano-toc li:last-child { border-bottom: none; }
        .plano-toc li::before { display: none; }
        .plano-toc a {
          color: var(--p-text);
          text-decoration: none;
          font-weight: 400;
          flex: 1;
        }
        .plano-toc a:hover { color: var(--p-burgundy); }
        .plano-toc-page {
          font-family: ui-monospace, monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--p-champagne-deep);
          background: var(--p-bg-card);
          padding: 3px 10px;
          border-radius: 4px;
          min-width: 56px;
          text-align: center;
        }
        .plano-page { page-break-after: always; }
        .plano-section { margin-bottom: 56px; }
        .plano-section h2 { font-size: 30px; }
        .plano-cor-swatch {
          display: flex;
          gap: 14px;
          padding: 12px;
          background: var(--p-bg-card);
          border-radius: 6px;
          margin: 8px 0;
          align-items: center;
        }
        .plano-cor-block { width: 60px; height: 60px; border-radius: 4px; flex-shrink: 0; border: 1px solid var(--p-border-soft); }
        @media print {
          .no-print { display: none !important; }
          /* OVERRIDE pra impressão · CINZA ESCURO NEUTRO no corpo (imprime com tinta preta · não depende de tinta colorida)
             warm burgundy mantido só em headings/strong (identidade) */
          :root {
            --p-text: #1A1A1A !important;
            --p-text-soft: #2E2E2E !important;
            --p-text-muted: #4A4A4A !important;
            --p-border: rgba(26, 26, 26, 0.45) !important;
            --p-border-soft: rgba(26, 26, 26, 0.25) !important;
          }
          body {
            background: white !important;
            color: #1A1A1A !important;
            font-size: 9.5pt;
            -webkit-font-smoothing: antialiased;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .plano-doc {
            background: white !important;
            color: #1A1A1A !important;
            font-weight: 500;
            line-height: 1.55;
            max-width: none !important;
            padding: 0 !important;
          }
          /* main wrapper · sem padding extra em print */
          main.plano-doc { padding: 0 !important; }

          /* FORÇA cor escura em TODOS os elementos de texto (override inline styles) */
          .plano-doc p,
          .plano-doc li,
          .plano-doc span:not([style*="color"]),
          .plano-doc div:not([style*="color"]) {
            color: #1A1A1A !important;
          }

          @page {
            size: A4;
            margin: 12mm 13mm 16mm 13mm;
            @top-left {
              content: "Vida em Equilíbrio";
              font-family: var(--p-font-body);
              font-weight: 500;
              font-size: 7.5pt;
              letter-spacing: 0.01em;
              color: #1F0E08;
              padding-bottom: 4mm;
            }
            @top-right {
              content: "Confidencial · Leandro Timóteo";
              font-family: var(--p-font-body);
              font-size: 7pt;
              color: #6B4E37;
              padding-bottom: 4mm;
            }
            @bottom-center {
              content: "“Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.”  —  Provérbios 16:3";
              font-family: var(--p-font-display);
              font-weight: 400;
              font-size: 7.5pt;
              color: #6B4E37;
              padding-top: 5mm;
            }
            @bottom-right {
              content: "p. " counter(page) "/" counter(pages);
              font-family: var(--p-font-body);
              font-size: 7pt;
              color: #6B4E37;
              padding-top: 5mm;
            }
          }

          /* Tipografia compacta em print · cinza no corpo · burgundy só em h2/strong (identidade) */
          .plano-doc h2 { font-size: 15pt !important; page-break-after: avoid; margin: 0 0 6px !important; color: #4A1B30 !important; font-weight: 700 !important; }
          .plano-doc h3 { font-size: 11.5pt !important; page-break-after: avoid; margin: 18px 0 6px !important; color: #1A1A1A !important; font-weight: 700 !important; }
          .plano-doc h4 { font-size: 10pt !important; margin: 14px 0 5px !important; color: #2E2E2E !important; font-weight: 600 !important; }
          .plano-doc p, .plano-doc li, .plano-doc td { font-size: 9.5pt !important; color: #1A1A1A !important; }
          .plano-doc p { margin: 0 0 8px !important; }
          .plano-doc li { margin: 5px 0 !important; line-height: 1.5 !important; }
          .plano-doc ul, .plano-doc ol { margin: 8px 0 14px !important; }
          .plano-doc strong { color: #4A1B30 !important; font-weight: 700 !important; }
          .plano-doc em { color: #2E2E2E !important; }

          /* Seções · menos espaço entre */
          .plano-section { margin-bottom: 28px !important; page-break-inside: auto; }

          /* Marker de página · menor */
          .plano-page-marker { font-size: 7.5pt !important; padding: 3px 10px !important; margin-bottom: 10px !important; background: transparent !important; border-color: rgba(31, 14, 8, 0.2) !important; color: #6B4E37 !important; }

          /* Callouts · menor padding + sem fundo (economia tinta) */
          .plano-callout { padding: 14px 18px !important; margin: 14px 0 !important; background: transparent !important; border: 1px solid rgba(31, 14, 8, 0.18) !important; border-left-width: 3px !important; border-radius: 0 !important; }
          .plano-callout.is-burgundy { background: transparent !important; border-left-color: #4A1B30 !important; }
          .plano-callout.is-champagne { background: transparent !important; border-left-color: #9F8B6A !important; }
          .plano-callout.is-warm { background: transparent !important; border-left-color: #8B6342 !important; }

          /* Quote · menor padding · cinza médio italic */
          .plano-quote { padding: 8px 16px !important; margin: 10px 0 !important; font-size: 10pt !important; background: transparent !important; color: #2E2E2E !important; font-weight: 500 !important; }

          /* Tabelas · linhas mais finas + texto escuro · header burgundy mantém identidade */
          .plano-doc table { margin: 12px 0 18px !important; font-size: 9pt !important; }
          .plano-doc th { padding: 8px 10px !important; font-size: 8.5pt !important; background: rgba(74, 27, 48, 0.10) !important; color: #4A1B30 !important; font-weight: 700 !important; border-bottom-width: 1.5px !important; border-bottom-color: #4A1B30 !important; }
          .plano-doc td { padding: 7px 10px !important; line-height: 1.45 !important; color: #1A1A1A !important; }

          /* Flow blocks · sem fundo · borda forte */
          .plano-flow { padding: 12px 16px !important; margin: 10px 0 !important; background: transparent !important; border: 1px solid rgba(26, 26, 26, 0.25) !important; font-size: 9.5pt !important; line-height: 1.7 !important; color: #1A1A1A !important; }

          /* Page break · só capa força */
          .plano-page { page-break-after: always; }
          #sumario.plano-page { page-break-after: always; }
          /* Outras seções fluem · só evita break dentro de callout/tabela */

          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div className="no-print" style={{ position: "fixed", top: 16, right: 16, zIndex: 50, display: "flex", gap: 8 }}>
        <a href="/" style={{ background: "white", border: "1px solid var(--p-border)", padding: "10px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "var(--p-text)", textDecoration: "none" }}>← Site</a>
        <button type="button" onClick={() => window.print()} style={{ background: "var(--p-burgundy)", color: "#F2EBE0", border: "none", padding: "11px 22px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", letterSpacing: "0.04em" }}>Imprimir · PDF</button>
      </div>

      <main className="plano-doc" style={{ maxWidth: 820, margin: "0 auto", padding: "48px 32px 96px" }}>

        {/* ═══════════════════ CAPA · enriquecida modelo Aura ═══════════════════ */}
        <section className="plano-page" id="capa" style={{ minHeight: "calc(100vh - 96px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 30px", position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at top, rgba(201, 183, 156, 0.18) 0%, rgba(242, 235, 224, 0) 60%), radial-gradient(ellipse at bottom, rgba(110, 42, 74, 0.08) 0%, rgba(242, 235, 224, 0) 50%)" }}>

          {/* Marca d'água sutil ao fundo */}
          <MarcaDagua color="#C9B79C" opacity={0.05} style={{ position: "absolute", right: -160, top: "20%", width: 720, pointerEvents: "none" }} />

          {/* Selo confidencial top */}
          <div style={{ position: "absolute", top: 30, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 10, fontSize: 9, fontWeight: 500, letterSpacing: "0.28em", color: "var(--p-text-muted)", textTransform: "uppercase" }}>
            <span style={{ width: 28, height: 1, background: "var(--p-text-muted)", opacity: 0.4 }} />
            Documento confidencial
            <span style={{ width: 28, height: 1, background: "var(--p-text-muted)", opacity: 0.4 }} />
          </div>

          {/* Selo Impulso · sobe pra ficar ACIMA da logo */}
          <div style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.32em", color: "var(--p-champagne-deep)", marginTop: 70, padding: "7px 18px", border: "1px solid var(--p-border-soft)", borderRadius: 999, background: "rgba(255, 255, 255, 0.5)" }}>
            Impulso Digital · Plano Completo
          </div>

          {/* LOGO OFICIAL · protagonista da capa · firma identidade */}
          <div style={{ position: "relative", marginTop: 36, marginBottom: 8, padding: "26px 40px", borderRadius: 12 }}>
            {/* Glow radial atrás da logo · sutil, só pra dar profundidade */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201, 183, 156, 0.28) 0%, rgba(201, 183, 156, 0) 75%)", borderRadius: "50%", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <LogoVariacaoA color="#4A1B30" showTagline={true} style={{ width: 380, height: "auto", maxWidth: "85vw" }} />
            </div>
          </div>

          {/* Linha decorativa fina */}
          <div style={{ width: 64, height: 2, background: "linear-gradient(90deg, #6E2A4A 0%, #C9B79C 100%)", borderRadius: 2, margin: "18px 0 22px" }} />

          {/* Subtítulo · contextualiza o documento */}
          <h2 style={{ fontSize: 18, fontWeight: 400, color: "var(--p-text-soft)", maxWidth: 520, marginBottom: 8, lineHeight: 1.3, letterSpacing: "-0.005em" }}>
            Plano Completo de Marca, Operação e Captação Digital
          </h2>

          {/* Tagline */}
          <p style={{ fontSize: 13, fontStyle: "italic", color: "var(--p-text-muted)", marginBottom: 32 }}>
            12 meses de estratégia · execução · resultado
          </p>

          {/* 4 pilares visuais com pílula gradient */}
          <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { letter: "1", title: "Posicionamento" },
              { letter: "2", title: "Operação" },
              { letter: "3", title: "Aquisição" },
              { letter: "4", title: "Escala" },
            ].map((pilar) => (
              <div key={pilar.title} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid var(--p-border-soft)", borderRadius: 999 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, #6E2A4A 0%, #C9B79C 100%)", color: "#F2EBE0", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {pilar.letter}
                </span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--p-text)" }}>
                  {pilar.title}
                </span>
              </div>
            ))}
          </div>

          {/* Card de dados com faixa lateral */}
          <div style={{ background: "white", border: "1px solid var(--p-border-soft)", borderRadius: 12, padding: "24px 30px 24px 36px", maxWidth: 560, width: "100%", boxShadow: "0 12px 40px -16px rgba(110, 42, 74, 0.18)", position: "relative", overflow: "hidden" }}>
            {/* Faixa lateral colorida */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: "linear-gradient(180deg, #6E2A4A 0%, #C9B79C 100%)" }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left", fontSize: 12 }}>
              {[
                ["Cliente", "Leandro Timóteo"],
                ["Marca", "Vida em Equilíbrio"],
                ["Localização", "Palmas-TO + região"],
                ["Modalidade", "Clínica parceira + domicílio"],
                ["Preparado por", "Eduardo Barros"],
                ["Data", "Maio · 2026"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--p-champagne-deep)", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontWeight: 500, color: "var(--p-burgundy-deep)" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer da capa com dots */}
          <div style={{ marginTop: 30, fontSize: 11.5, color: "var(--p-text-muted)", display: "flex", alignItems: "center", gap: 12 }}>
            <span>Impulso Digital</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--p-burgundy)" }} />
            <span>2026-05-24</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--p-burgundy)" }} />
            <span>Versão 1.0</span>
          </div>

          <div style={{ marginTop: 20, fontSize: 11, color: "var(--p-text-muted)", fontStyle: "italic" }}>
            Sumário completo na próxima página →
          </div>

          <div style={{ position: "relative", marginTop: 22, maxWidth: 540 }}>
            <Frase n={0} />
          </div>
        </section>

        {/* ═══════════════════ SUMÁRIO ═══════════════════ */}
        <section className="plano-page plano-section" id="sumario">
          <div className="plano-page-marker">Página 2</div>
          <h2>Sumário</h2>
          <p style={{ color: "var(--p-text-muted)", fontSize: 13, marginBottom: 18 }}>Pra navegar pelo documento ou voltar a uma seção específica.</p>
          <ul className="plano-toc">
            {[
              ["3", "1 · Visão geral do Vida em Equilíbrio", "secao-visao"],
              ["4", "2 · Resumo executivo", "secao-resumo"],
              ["5", "3 · Quem é Leandro Timóteo", "secao-leandro"],
              ["6", "4 · Diagnóstico de mercado em Palmas", "secao-mercado"],
              ["8", "5 · Posicionamento (4 pilares)", "secao-posicionamento"],
              ["10", "6 · Identidade visual · logo, cores, marca d'água", "secao-identidade"],
              ["13", "7 · Cardápio e pricing", "secao-cardapio"],
              ["15", "8 · Modelo operacional", "secao-operacao"],
              ["16", "9 · Estrutura do site (já implementada)", "secao-site"],
              ["17", "10 · Funil de aquisição", "secao-funil"],
              ["19", "11 · Ecossistema Corrida · wedge subnicho", "secao-corrida"],
              ["20", "12 · Conteúdo, blog e Instagram", "secao-conteudo"],
              ["22", "13 · Cronograma 12 meses · mês a mês", "secao-cronograma"],
              ["25", "14 · Métricas e indicadores de sucesso", "secao-metricas"],
              ["27", "15 · Riscos e mitigações", "secao-riscos"],
              ["28", "16 · Investimento inicial estimado", "secao-investimento"],
              ["29", "17 · Setup completo + próximos serviços", "secao-pricing"],
              ["30", "18 · Checklist próximos 30 dias", "secao-checklist"],
            ].map(([pg, label, id]) => (
              <li key={id}>
                <span className="plano-toc-page">Pág. {pg}</span>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <Frase n={1} />
        </section>

        {/* ═══════════════════ 1 · VISÃO GERAL ═══════════════════ */}
        <section className="plano-section" id="secao-visao">
          <div className="plano-page-marker">Página 3 · Seção 1</div>
          <h2>Visão geral do Vida em Equilíbrio</h2>
          <p>O Vida em Equilíbrio é uma marca de <strong>massagem terapêutica feminina premium</strong> em Palmas-TO, operada pessoalmente por <strong>Leandro Timóteo</strong>. Atende em duas modalidades — clínica parceira (CYOX Centro de Estética Avançada, Setor Norte) e domicílio — com atendimento privativo de uma cliente por turno.</p>

          <h3>O que oferece</h3>
          <ul>
            <li>6 massagens dedicadas: Day Premium · Relaxante · Drenagem Linfática · Desportiva · Modeladora · Facial</li>
            <li>6 técnicas complementares: esfoliante corporal · bolinha massageadora · pedras quentes · vela aromática · bambu terapêutico · ventosa</li>
            <li>Atendimento exclusivo a público feminino · combos escalonados · esfoliante de brinde no 1º atendimento</li>
            <li>Faixa de preço posicionada como premium (R$180-680 por sessão dependendo da escolha)</li>
          </ul>

          <h3>Pra quem</h3>
          <p>Mulher entre 25-55 anos, classe média-alta, em Palmas-TO e arredores. Vai do cuidado rotineiro (drenagem mensal, recovery muscular) ao ritualizado (Day Premium em datas especiais), com forte espaço pra corredora amadora interessada em recovery muscular.</p>

          <h3>O que diferencia</h3>
          <div className="plano-callout is-burgundy">
            Dos 39 concorrentes de massagem mapeados em Palmas, <strong>nenhum ocupa simultaneamente</strong> os três quadrantes que o Vida em Equilíbrio entra: <strong>premium real</strong> (não popular/médio) <strong>+ rosto próprio</strong> (Leandro como protagonista da marca) <strong>+ design editorial diferenciado</strong> (Editorial Tungsten · sem cair na paleta verde-dourado-bege saturada). É um quadrante vazio.
          </div>

          <h3>Pra onde vai (12 meses)</h3>
          <ul>
            <li><strong>50-130 clientes únicas acumuladas</strong> · 45% de retorno · LTV ~R$1.200</li>
            <li><strong>Faturamento bruto mensal R$25-45k</strong> no Mês 12 (cenário conservador)</li>
            <li><strong>Equipe de 4-5 pessoas</strong> (Leandro + 2 atendentes WhatsApp + 1-2 massoterapeutas auxiliares)</li>
            <li><strong>Plano de Horas dividível</strong> como produto-âncora de fidelização</li>
            <li><strong>Presença consolidada</strong> no Google (top 10 em "massagem palmas" e variações) + IG @vidaemequilibrio com 5k+ seguidoras</li>
          </ul>
          <Frase n={2} />
        </section>

        {/* ═══════════════════ 2 · RESUMO EXECUTIVO ═══════════════════ */}
        <section className="plano-section" id="secao-resumo">
          <div className="plano-page-marker">Página 4 · Seção 2</div>
          <h2>Resumo executivo</h2>
          <p>O lançamento do Vida em Equilíbrio foi desenhado em <strong>3 camadas simultâneas</strong>:</p>
          <table>
            <thead><tr><th>Camada</th><th>Entregas</th><th>Quem produz</th></tr></thead>
            <tbody>
              <tr><td><strong>Site institucional</strong></td><td>Home + 6 páginas internas (uma por massagem) + blog estruturado + catálogo PDF</td><td>Impulso Digital constrói e mantém</td></tr>
              <tr><td><strong>Identidade visual</strong></td><td>Logo (arco+ponto) + paleta Editorial Tungsten + tipografia Fraunces/Inter + marca d'água + sistema de aplicação</td><td>Impulso Digital entrega manual + assets</td></tr>
              <tr><td><strong>Plano de marketing</strong></td><td>Google Ads + IG (estratégia migração @timoteoofficial) + SEO blog + parcerias B2B + Ecossistema Corrida</td><td>Impulso Digital roteiriza · Leandro executa pontas</td></tr>
            </tbody>
          </table>
          <div className="plano-callout is-burgundy">
            <strong>Regra de ouro do lançamento:</strong> cada peça (site, post, anúncio, busca no Google, indicação) leva a cliente em potencial para um CTA único — <strong>WhatsApp do Vida em Equilíbrio</strong> com mensagem pré-preenchida.
          </div>
          <Frase n={3} />
        </section>

        {/* ═══════════════════ 3 · QUEM É LEANDRO ═══════════════════ */}
        <section className="plano-section" id="secao-leandro">
          <div className="plano-page-marker">Página 5 · Seção 3</div>
          <h2>Quem é Leandro Timóteo</h2>
          <p>Leandro é massoterapeuta vindo do interior pra Palmas, em transição profissional declarada publicamente. <strong>Já tem clínica física pronta</strong>, equipamentos, formação ativa em finalização. Falta a camada digital — exatamente onde o Vida em Equilíbrio entra como marca consolidada.</p>

          <h3>O ativo invisível: 11,6k seguidores no @timoteoofficial.__</h3>
          <p>Leandro é <strong>figura pública regional</strong> com 11.600 seguidores no perfil pessoal e 2 milhões de visualizações nos últimos 30 dias. Esse capital social vai ser convertido em capital comercial via <strong>pivot gradual</strong> do perfil pessoal para o perfil do negócio (@vidaemequilibrio.palmas).</p>

          <h3>O que diferencia ele dos concorrentes</h3>
          <table>
            <thead><tr><th>Eixo</th><th>Vantagem competitiva</th></tr></thead>
            <tbody>
              <tr><td>Audiência prévia</td><td>11,6k seguidoras já familiarizadas com a pessoa Leandro · base inicial de clientes pré-qualificadas</td></tr>
              <tr><td>Formação</td><td>Massoterapeuta + cursando fisioterapia + finalizando drenagem linfática</td></tr>
              <tr><td>Posicionamento</td><td>Único masculino qualificado no nicho feminino premium em Palmas (território branco)</td></tr>
              <tr><td>Operação</td><td>Modelo híbrido raro (clínica parceira + domicílio) · privacidade como produto</td></tr>
              <tr><td>Filosofia</td><td>"Escuta antes da manobra" · cada sessão desenhada caso a caso (não protocolo)</td></tr>
            </tbody>
          </table>

          <h3>Voz e vocabulário</h3>
          <p>Mistura aspiração premium ("top", "chave de ouro", "VIP") com fala palmense direta ("pai", "o povo", "meu negócio"). A copy do site e da comunicação <strong>costura os dois registros</strong> — nem 100% sofisticado (perde a alma), nem 100% informal (perde o premium aspirado).</p>

          <div className="plano-quote">
            "Meu intuito aqui é diminuir o máximo de fala com meu paciente, pra ele chegar em mim já sabendo o que quer e eu só finalizar."
            <br /><span style={{ fontSize: 11, opacity: 0.6 }}>— Leandro, áudio 13:37:51 · 23/05/2026</span>
          </div>
          <Frase n={4} />
        </section>

        {/* ═══════════════════ 4 · DIAGNÓSTICO DE MERCADO ═══════════════════ */}
        <section className="plano-section" id="secao-mercado">
          <div className="plano-page-marker">Página 6 · Seção 4</div>
          <h2>Diagnóstico de mercado em Palmas</h2>
          <p>Pesquisa exaustiva mapeou <strong>39 operadores ativos</strong> em Palmas-TO oferecendo massagem terapêutica, drenagem, modeladora, desportiva ou facial. Distribuição por faixa de preço:</p>
          <table>
            <thead><tr><th>Faixa</th><th>Nº competidores</th><th>Característica</th></tr></thead>
            <tbody>
              <tr><td>Popular (≤R$120)</td><td>~5</td><td>Honório Terapias ("menor preço da região"), autônomos sem IG, salões-massagem em Taquaralto</td></tr>
              <tr><td><strong>Médio (R$120-180)</strong></td><td>~18</td><td>Bulk do mercado · Neide Martins, Dion, Edna Borges (parcial), Geiciane, Fast Massagem</td></tr>
              <tr><td><strong>Premium (R$180-280)</strong></td><td>~8</td><td>C'Alma, Alivièr, Aurora, SPA Noah, Eliá (parcial), Tactus, Edna Borges (top), Neide (protocolos)</td></tr>
              <tr><td>Luxo (R$280+)</td><td>~2</td><td>Eliá SPA (Day Spas R$309-1.089) · C'Alma (R$320-830)</td></tr>
            </tbody>
          </table>

          <h3>Os 5 competidores mais relevantes</h3>
          <table>
            <thead><tr><th>Marca</th><th>Força principal</th><th>Onde dá pra ganhar</th></tr></thead>
            <tbody>
              <tr><td><strong>Alivièr SPA</strong></td><td>9 anos · 2 unidades · 26,7k IG · único com Google Ads · catálogo PDF público com 45+ combos</td><td>Identidade visual saturada (verde-dourado-bege) · fundadora subutilizada · engajamento IG 0,2-0,4% (base inflada)</td></tr>
              <tr><td><strong>Eliá SPA</strong></td><td>"Melhor SPA do Brasil 3 anos" · rede 4 cidades · presença em mídia (Metrópoles)</td><td>Sem rosto · diluída em 4 cidades</td></tr>
              <tr><td><strong>C'Alma SPA Urbano</strong></td><td>253 reviews 5★ (maior volume) · site mais moderno · fisio integrada</td><td>Marca anônima · horário curto (até 16h)</td></tr>
              <tr><td><strong>Aurora Spa</strong></td><td>14k seguidores (maior IG) · até 22h · localização premium</td><td>Reviews baixos pro tamanho do IG (audiência inflada) · sem catálogo público</td></tr>
              <tr><td><strong>Edna Borges</strong> ⚠️</td><td>100% feminino · combo idêntico (vela+ventosa+pedras+drenagem) · 22h · 6,7k IG com storytelling pessoal forte</td><td>Faixa popular-médio · sem premium consolidado</td></tr>
            </tbody>
          </table>

          <h3>Gaps de mercado em Palmas</h3>
          <ol>
            <li><strong>Premium + Rosto próprio + Design vencedor</strong> — quadrante vazio. Edna tem rosto mas faixa popular. Alivièr tem operação mas design saturado. Vida em Equilíbrio entra exatamente aqui.</li>
            <li><strong>Vertical Desportiva</strong> — só Geiciane Aguiar atende corridas, sem marca/posicionamento de subnicho. "Spa do Atleta em Palmas" não existe.</li>
            <li><strong>Atendimento masculino qualificado em nicho feminino premium</strong> — quase ninguém faz. Maioria do mercado feminino tem barreira psicológica de "massagista homem" · destravável por storytelling forte.</li>
            <li><strong>Plano de Horas dividível</strong> — só Alivièr oferece (R$799-2.646). Vence quem agregar essa mecânica com naming proprietário.</li>
            <li><strong>Cardápio por OBJETIVO</strong> (não por técnica) — todos em Palmas organizam por técnica. Lapinha (PR) e Anatomē mostram que organizar por objetivo converte mais.</li>
            <li><strong>Geografia mal atendida</strong> — Plano Norte (Aurenys, Taquaralto, Lago Norte) tem bulk dos concorrentes premium concentrado no Plano Sul.</li>
          </ol>

          <h3>Saturações a evitar</h3>
          <div className="plano-callout">
            <strong>Vocabulário:</strong> "ritual", "sensorial", "revitalizar", "cuidar de verdade", "personalizado" — todos saturados.<br />
            <strong>Paleta:</strong> verde-dourado-bege-mármore tropical · usada por Alivièr, Eliá, Lapinha.<br />
            <strong>Símbolos:</strong> flor estilizada, folha tropical, mandala, mão, gota.<br />
            <strong>Tipografia:</strong> Cormorant Garamond, Playfair Display sem customização.
          </div>
          <Frase n={5} />
        </section>

        {/* ═══════════════════ 5 · POSICIONAMENTO ═══════════════════ */}
        <section className="plano-section" id="secao-posicionamento">
          <div className="plano-page-marker">Página 8 · Seção 5</div>
          <h2>Posicionamento · 4 pilares</h2>

          <div className="plano-quote" style={{ fontSize: 17 }}>
            Vida em Equilíbrio é a clínica privativa de massagem terapêutica feminina em Palmas — atendida pessoalmente por Leandro Timóteo, em ambiente preparado ou em domicílio, com técnica e tempo dedicado a uma cliente por turno.
          </div>

          <h3>Os 4 pilares</h3>
          <table>
            <thead><tr><th>Pilar</th><th>O que comunica</th></tr></thead>
            <tbody>
              <tr><td><strong>Privativo</strong></td><td>Uma cliente por turno · sem corredor de espera · sem sobreposição de agenda</td></tr>
              <tr><td><strong>Híbrido</strong></td><td>Clínica parceira (CYOX, Setor Norte) ou domicílio · você escolhe como receber</td></tr>
              <tr><td><strong>Dedicado ao feminino</strong></td><td>Técnica calibrada para corpo feminino · ambiente pensado para mulher</td></tr>
              <tr><td><strong>Técnico</strong></td><td>Leandro com formação ativa em fisio e drenagem · massoterapia integrada ao recovery</td></tr>
            </tbody>
          </table>

          <h3>Promessa de marca</h3>
          <div className="plano-callout is-champagne">
            <em>Cada massagem começa na escuta. Antes da manobra, entendemos o que seu corpo está pedindo. Depois, sessão desenhada caso a caso — não protocolo fixo.</em>
          </div>

          <h3>Tom de voz</h3>
          <ul>
            <li><strong>Poético-clínico:</strong> frase curta · autoridade técnica sem academicismo</li>
            <li><strong>Mistura aspiração premium + fala palmense:</strong> "presença", "escuta", "tempo dedicado" + "pra você", "no seu ritmo"</li>
            <li><strong>NÃO usa:</strong> "democratizar", "exatamente", frases paralelas tipo "Primeira... Segunda..."</li>
            <li><strong>Vocabulário próprio:</strong> presença · escuta · pausa · silêncio · refúgio · manobra · recovery · privativo</li>
          </ul>

          <h3>Diferencial defensável (resumo)</h3>
          <p>Único massoterapeuta <strong>homem qualificado em nicho feminino premium</strong> em Palmas. Barreira psicológica real (cliente nova desconfia), mas ângulo único — destrancável por storytelling forte e prova social rápida nas primeiras semanas de operação.</p>
          <Frase n={6} />
        </section>

        {/* ═══════════════════ 6 · IDENTIDADE VISUAL ═══════════════════ */}
        <section className="plano-section" id="secao-identidade">
          <div className="plano-page-marker">Página 10 · Seção 6</div>
          <h2>Identidade visual · logo, cores, marca d'água</h2>

          <h3>A logo · Arco + Ponto</h3>
          <div style={{ display: "flex", gap: 30, alignItems: "center", padding: 24, background: "var(--p-bg-card)", borderRadius: 6, margin: "12px 0 20px" }}>
            <LogoVariacaoA color="#2C1810" showTagline={true} className="h-28 w-auto" />
          </div>

          <p>A logo é composta por três camadas com significado próprio:</p>
          <ul>
            <li><strong>O ARCO</strong> — linha curva fina sobre o wordmark. Significa o gesto da manobra de massagem · movimento da mão deslizando · respiração · pausa antes da próxima ação.</li>
            <li><strong>O PONTO</strong> — pequeno círculo cheio abaixo do arco. <strong>É o coração da marca:</strong> equilíbrio · centro · âncora · presença. Sem ele, é só movimento. Com ele, é gesto com propósito.</li>
            <li><strong>vida em equilíbrio</strong> — wordmark serif fine-line italic lower-case (Fraunces). Poética sem solenidade.</li>
            <li><strong>massagem · palmas</strong> — tagline tracked sob o wordmark · ancora serviço e território (importante pra SEO local).</li>
          </ul>

          <h3>A marca d'água</h3>
          <p>Versão decorativa do glifo (arco + ponto) em escala grande e opacidade muito baixa (5-8%), usada como elemento de fundo em seções estratégicas. Função: a marca <strong>respira em silêncio</strong> pela página. Não é ornamento — é assinatura visual.</p>
          <table>
            <thead><tr><th>Onde aparece</th><th>Cor</th><th>Opacidade</th><th>Função</th></tr></thead>
            <tbody>
              <tr><td>Hero (canto superior direito)</td><td>cream warm</td><td>8%</td><td>Presença discreta sobre foto cinemática</td></tr>
              <tr><td>Manifesto Leandro (lateral)</td><td>champagne</td><td>5%</td><td>Atmosfera contemplativa atrás do texto</td></tr>
              <tr><td>WhatsApp CTA gigante</td><td>cream</td><td>7%</td><td>Ancora o último call-to-action</td></tr>
              <tr><td>Capa de catálogo PDF</td><td>champagne</td><td>4%</td><td>"Papel da marca"</td></tr>
              <tr><td>Cartão de visita (verso)</td><td>champagne</td><td>6%</td><td>Assinatura visual da papelaria</td></tr>
            </tbody>
          </table>

          <h3>Paleta · Editorial Tungsten</h3>
          <p>Combina <strong>luz tungsten warm</strong> (lâmpadas de filamento) com <strong>paleta apothecary editorial</strong> (Aman, Bamford, Anatomē). Diferencia em 0,5 segundo do verde-dourado-bege saturado em Palmas.</p>

          {[
            ["#0F0B08", "Tungsten Warm Dark", "silêncio · profundidade · noite acolhedora", "Backgrounds do site (hero, header, footer). Posts institucionais IG."],
            ["#F2EBE0", "Cream Warm", "claridade · pele · respiração · lençol limpo", "Texto sobre dark. Seções de contraste. Fundo deste documento."],
            ["#8B6342", "Terracota Dimmed", "terra · ancoragem · técnica · raiz", "Eyebrows, labels, acentos estruturais."],
            ["#6E2A4A", "Burgundy Feminino", "feminino · vitalidade premium · profundidade emocional", "CTAs, headlines de promoção, cor de 'limitado/exclusivo'."],
            ["#C9B79C", "Champagne Metálico", "sofisticação discreta · selo · detalhe premium", "Detalhes, marca d'água, etiquetas, cor de 'VIP'."],
            ["#2C1810", "Text Dark (Warm Brown Deep)", "leitura confortável sem preto frio", "Texto principal sobre cream. Substitui preto puro."],
          ].map(([hex, nome, sig, uso]) => (
            <div key={hex} className="plano-cor-swatch">
              <div className="plano-cor-block" style={{ background: hex }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "var(--p-champagne-deep)" }}>{hex}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--p-text)" }}>{nome}</div>
                <div style={{ fontSize: 11.5, color: "var(--p-text-muted)", fontStyle: "italic" }}>{sig}</div>
                <div style={{ fontSize: 11.5, color: "var(--p-text-soft)", marginTop: 4 }}>{uso}</div>
              </div>
            </div>
          ))}

          <h3>Tipografia</h3>
          <ul>
            <li><strong>Display · Fraunces</strong> (Google Fonts) — serif variable com italic alternates muito sensuais. Headlines, nomes de massagens, valores numéricos grandes. Carrega editorial premium feminina sem ser estereotipada.</li>
            <li><strong>Corpo · Inter</strong> (Google Fonts) — sans neutra geométrica. Descrições, FAQ, textos longos. Legibilidade profissional sem distrações.</li>
            <li><strong>Tracking customizado</strong> em eyebrows (0.18em uppercase) e tagline da logo (0.5em uppercase) — atmosfera "editorial · rótulo de perfumaria".</li>
          </ul>

          <h3>Lógica das cores no marketing (por canal)</h3>
          <table>
            <thead><tr><th>Canal</th><th>Composição cromática</th></tr></thead>
            <tbody>
              <tr><td>Site (header/hero/footer)</td><td>Tungsten dark + texto cream + CTA burgundy</td></tr>
              <tr><td>IG · posts emocionais (60%)</td><td>Tungsten dark + tipografia cream + accent champagne</td></tr>
              <tr><td>IG · posts educativos (30%)</td><td>Cream com texto warm brown + eyebrow terracota</td></tr>
              <tr><td>IG · posts institucionais (10%)</td><td>Burgundy com tipografia cream + acento champagne</td></tr>
              <tr><td>Google Ads (display)</td><td>Tungsten dark + wordmark cream + CTA burgundy</td></tr>
              <tr><td>Catálogo PDF</td><td>Capa tungsten + páginas internas cream + divisores burgundy</td></tr>
              <tr><td>Cartão de visita</td><td>Frente cream + wordmark tungsten · verso burgundy + marca d'água champagne</td></tr>
            </tbody>
          </table>
          <Frase n={7} />
        </section>

        {/* ═══════════════════ 7 · CARDÁPIO E PRICING ═══════════════════ */}
        <section className="plano-section" id="secao-cardapio">
          <div className="plano-page-marker">Página 13 · Seção 7</div>
          <h2>Cardápio e pricing</h2>
          <p>Estrutura cravada conforme modelo Alivièr (referência declarada do cliente) + língua do Leandro ("massagem", não "ritual"). Calibração de preço também base Alivièr: <em>"os valores dele estão bons, vai ser nessa base aí"</em>.</p>

          <h3>Day Premium · destaque</h3>
          <table>
            <thead><tr><th>Nome</th><th>Composição</th><th>Duração</th><th>Faixa-alvo</th></tr></thead>
            <tbody>
              <tr><td><strong>Day Premium Equilíbrio</strong></td><td>Esfoliante + bolinha massageadora + pedras quentes + vela aromática + bambu terapêutico + ventosa de finalização</td><td>~120 min</td><td><strong>R$520-680</strong></td></tr>
            </tbody>
          </table>

          <h3>Massagens Relaxantes</h3>
          <table>
            <tbody>
              <tr><td>Massagem Relaxante</td><td>60 min</td><td><strong>R$180-240</strong></td></tr>
              <tr><td>Massagem Relaxante + 2 enhancements</td><td>90 min</td><td><strong>R$280-360</strong></td></tr>
            </tbody>
          </table>

          <h3>Massagens Terapêuticas</h3>
          <table>
            <tbody>
              <tr><td>Drenagem Linfática</td><td>60 min</td><td><strong>R$190-250</strong></td></tr>
              <tr><td>Drenagem Linfática Pós-operatório</td><td>90 min</td><td><strong>R$280-380</strong></td></tr>
              <tr><td>Massagem Desportiva</td><td>60 min</td><td><strong>R$200-280</strong></td></tr>
            </tbody>
          </table>

          <h3>Massagens Estéticas</h3>
          <table>
            <tbody>
              <tr><td>Massagem Modeladora</td><td>60 min</td><td><strong>R$200-280</strong></td></tr>
              <tr><td>Massagem Facial</td><td>45 min</td><td><strong>R$160-220</strong></td></tr>
            </tbody>
          </table>

          <h3>Enhancements (adicionais)</h3>
          <p>Cliente compõe sua massagem adicionando técnicas à base. Ticket adicional R$40-80 por item, exceto esfoliante <strong>de brinde no 1º atendimento</strong>.</p>
          <ul>
            <li>Esfoliante corporal · pedras quentes · vela aromática · bambu terapêutico · ventosa · bolinha massageadora nos pés</li>
          </ul>

          <h3>Vale-Presente (lançamento desde Mês 1)</h3>
          <p>Produto pra presentear · alto potencial em datas comemorativas (Dia das Mães, Dia dos Namorados, aniversários). Funciona como gift card editorial: quem presenteia paga via PIX, recebe PDF cravado da marca com mensagem personalizada, e a beneficiária agenda direto pelo WhatsApp.</p>
          <table>
            <thead><tr><th>Modalidade</th><th>Faixa</th><th>Característica</th></tr></thead>
            <tbody>
              <tr><td><strong>Vale Massagem</strong></td><td>R$180-280</td><td>Presenteia uma massagem específica · validade 6 meses</td></tr>
              <tr><td><strong>Vale Crédito</strong></td><td>R$200 / 400 / 600</td><td>Valor flexível · beneficiária escolhe no atendimento · validade 6 meses</td></tr>
              <tr><td><strong>Vale Day Premium</strong></td><td>R$520-680</td><td>Produto-âncora de presente · 120min · 6 técnicas</td></tr>
            </tbody>
          </table>
          <div className="plano-callout is-champagne">
            <strong>Por que importa:</strong> Dia das Mães + Dia dos Namorados + aniversários geram pico sazonal de vendas. Vale-Presente em formato premium (PDF editorial) diferencia da concorrência (Honório, Edna Borges, etc não oferecem) · vira ativo de receita de janelas comerciais sem depender de cliente nova fazendo cold contact.
          </div>

          <h3>Plano de Horas (pós-MVP · Mês 4-6)</h3>
          <table>
            <thead><tr><th>Plano</th><th>Total horas</th><th>À vista</th><th>Por sessão</th><th>Validade</th></tr></thead>
            <tbody>
              <tr><td>Equilíbrio 5h</td><td>5h</td><td><strong>R$899</strong></td><td>R$179,80</td><td>2 meses</td></tr>
              <tr><td>Equilíbrio 10h</td><td>10h</td><td><strong>R$1.690</strong></td><td>R$169,00</td><td>4 meses</td></tr>
              <tr><td>Equilíbrio 15h</td><td>15h</td><td><strong>R$2.385</strong></td><td>R$159,00</td><td>6 meses</td></tr>
              <tr><td>Equilíbrio 20h</td><td>20h</td><td><strong>R$2.980</strong></td><td>R$149,00</td><td>6 meses</td></tr>
            </tbody>
          </table>
          <div className="plano-callout">
            <strong>Mecânica do Plano de Horas:</strong> dividível com terceiros (esposa/mãe/amiga) — funciona como gift card familiar. Só Alivièr oferece em Palmas. Cobre todas as massagens exceto Day Premium e enhancements (à parte). Lançar quando tiver 50+ clientes pagantes (Mês 4-6).
          </div>

          <h3>Lógica de pricing (resumo)</h3>
          <ul>
            <li>Posicionar <strong>ligeiramente acima do Alivièr</strong> — Leandro disse "vai ser mais avançado um pouco"</li>
            <li>Day Premium ancora o premium (R$520-680 vs Alivièr R$389-649)</li>
            <li>Enhancements desbloqueiam upsell sem fricção</li>
            <li>Esfoliante de brinde no 1º atendimento ancora retenção e diferenciação</li>
            <li><strong>NÃO mostrar preço no site</strong> (decisão cravada do Leandro · "pra não assustar")</li>
          </ul>
          <Frase n={8} />
        </section>

        {/* ═══════════════════ 8 · MODELO OPERACIONAL ═══════════════════ */}
        <section className="plano-section" id="secao-operacao">
          <div className="plano-page-marker">Página 15 · Seção 8</div>
          <h2>Modelo operacional</h2>
          <h3>Modalidades de atendimento</h3>
          <table>
            <thead><tr><th>Modalidade</th><th>Como funciona</th></tr></thead>
            <tbody>
              <tr><td><strong>Clínica parceira CYOX</strong></td><td>ACNO 01, Rua O1, LT 06, Sala 01 · Setor Norte · parceria com Cleide Tosta · ambiente preparado para atendimento privativo. Modelo a definir formalmente (aluguel de sala · comissão · percentual).</td></tr>
              <tr><td><strong>Domicílio</strong></td><td>Leandro leva macas portáteis + produtos profissionais. Setores cobertos: Plano Sul, Plano Norte (sem custo extra), Aurenys/Taquaralto (com taxa).</td></tr>
              <tr><td><strong>Contratação particular pra corrida</strong></td><td>Atendimento pré-prova (preparação muscular) + pós-prova (recovery) sob agendamento específico.</td></tr>
            </tbody>
          </table>

          <h3>Equipe (construída em ondas)</h3>
          <div className="plano-callout">
            <h4 style={{ marginTop: 0 }}>Mês 1-3 (MVP)</h4>
            <ul>
              <li>Leandro atende tudo · acompanha WhatsApp · faz conteúdo</li>
              <li>+ 1 atendente WhatsApp part-time (4h/dia) · faz triagem inicial e agendamento</li>
            </ul>
            <h4>Mês 4-9 (consolidação)</h4>
            <ul>
              <li>+ 1 atendente WhatsApp (cobertura noite/fim de semana)</li>
              <li>+ 1 massoterapeuta auxiliar (especialidade drenagem ou modeladora)</li>
            </ul>
            <h4>Mês 10-12 (escala)</h4>
            <ul>
              <li>+ 1 SDR/recepcionista (conversões, B2B, agenda)</li>
              <li>+ 1 massoterapeuta auxiliar (facial ou desportiva)</li>
            </ul>
          </div>

          <h3>Funil de atendimento (cravado pelo Leandro)</h3>
          <div className="plano-flow">
            Cliente vê conteúdo (IG · Google · indicação)<br />
            ↓<br />
            Clica em CTA → WhatsApp Business com mensagem pré-preenchida<br />
            ↓<br />
            <strong>Atendente humana</strong> recebe · pergunta o que o corpo está pedindo<br />
            ↓<br />
            Cliente decide a massagem · local · horário<br />
            ↓<br />
            <strong>Leandro entra pra confirmar</strong> e cravar agenda<br />
            ↓<br />
            Cliente chega "decidida" — Leandro só finaliza a entrega
          </div>
          <p style={{ fontSize: 12, color: "var(--p-text-muted)", fontStyle: "italic" }}>Citação do Leandro: <em>"meu intuito é diminuir o máximo de fala com meu paciente, pra ele chegar em mim já sabendo o que quer e eu só finalizar."</em></p>

          <h3>Política de agendamento (publicar no site)</h3>
          <ul>
            <li>Cancelamento até <strong>48h antes</strong> · sem custo</li>
            <li>Cancelamento entre <strong>24-48h antes</strong> · taxa de 30%</li>
            <li>No-show ou cancelamento &lt;24h · cobrança de <strong>100%</strong></li>
            <li>Reagendamento livre uma vez por sessão</li>
            <li>Confirmação automática 24h antes via WhatsApp</li>
          </ul>
          <Frase n={9} />
        </section>

        {/* ═══════════════════ 9 · ESTRUTURA DO SITE ═══════════════════ */}
        <section className="plano-section" id="secao-site">
          <div className="plano-page-marker">Página 16 · Seção 9</div>
          <h2>Estrutura do site (já implementada)</h2>
          <p>Site rodando em Next 16 · React 19 · Tailwind 4 · TS 5 · hospedagem Vercel. 10 páginas estáticas pré-renderizadas.</p>

          <h3>Arquitetura informacional da home</h3>
          <div className="plano-flow">
            HEADER (sticky · logo + nav)<br />
            ↓<br />
            HERO ("Que parte de você está pedindo cuidado hoje?")<br />
            ↓<br />
            GRID OBJETIVOS (6 cards Lapinha-style)<br />
            ↓<br />
            MANIFESTO LEANDRO (storytelling Bamford-style)<br />
            ↓<br />
            CARDÁPIO COMPLETO (Day Premium destaque + 3 categorias + 6 enhancements)<br />
            ↓<br />
            MÉTRICAS DO SERVIÇO (6 massagens · 6 técnicas · 2 modalidades · 1 cliente por turno)<br />
            ↓<br />
            ESPAÇO (modelo híbrido CYOX + domicílio)<br />
            ↓<br />
            CONTRATAÇÃO CORRIDA (massagem desportiva sob demanda)<br />
            ↓<br />
            BLOG (em breve)<br />
            ↓<br />
            FAQ (9 perguntas: profissional · só mulheres · sem preço · híbrido · WhatsApp · combinações · pagamento · corrida)<br />
            ↓<br />
            CTA WHATSAPP gigante<br />
            ↓<br />
            FOOTER
          </div>

          <h3>Páginas internas dedicadas (uma por massagem)</h3>
          <table>
            <thead><tr><th>Rota</th><th>Pra quem</th></tr></thead>
            <tbody>
              <tr><td><code>/day-premium</code></td><td>Pacote completo 120min · 6 técnicas</td></tr>
              <tr><td><code>/massagem-relaxante</code></td><td>Sessão base · com possíveis enhancements</td></tr>
              <tr><td><code>/drenagem-linfatica</code></td><td>Retenção · pós-cirúrgico · inchaço</td></tr>
              <tr><td><code>/massagem-desportiva</code></td><td>Corredora amadora · pré e pós prova</td></tr>
              <tr><td><code>/massagem-modeladora</code></td><td>Contorno corporal · frequência regular</td></tr>
              <tr><td><code>/massagem-facial</code></td><td>ATM · drenagem facial · viço</td></tr>
            </tbody>
          </table>

          <p><strong>Cada página interna</strong> tem hero próprio + manifesto + indicação ("Você que...") + composição técnica + benefícios observados + duração + como se preparar + CTA WhatsApp pré-formatado com o nome da massagem.</p>
          <Frase n={10} />
        </section>

        {/* ═══════════════════ 10 · FUNIL DE AQUISIÇÃO + SEO + AEO ═══════════════════ */}
        <section className="plano-section" id="secao-funil">
          <div className="plano-page-marker">Página 17 · Seção 10</div>
          <h2>Funil de aquisição · Google + IG + B2B + AEO</h2>

          <h3>Canais ativos no MVP (Mês 1-3)</h3>
          <table>
            <thead><tr><th>Canal</th><th>Função</th><th>Investimento mensal</th></tr></thead>
            <tbody>
              <tr><td>Google Ads</td><td>Captura busca quente · termos long-tail</td><td>R$1.500-3.000</td></tr>
              <tr><td>SEO orgânico</td><td>Captura busca informacional via blog</td><td>R$0 (incluso na operação)</td></tr>
              <tr><td>Google Meu Negócio</td><td>Captura busca local "massagem perto de mim"</td><td>R$0</td></tr>
              <tr><td>Instagram orgânico</td><td>Conversão da audiência-ponte 11,6k</td><td>R$0 (Leandro produz)</td></tr>
              <tr><td>llms.txt + AEO</td><td>Aparece quando perguntam ao ChatGPT/Gemini</td><td>R$0 (Impulso configura)</td></tr>
              <tr><td>Indicação orgânica</td><td>"Convide uma Amiga" pós-atendimento</td><td>R$0 (custa só o enhancement de brinde)</td></tr>
            </tbody>
          </table>

          <h3>Como as palmenses pesquisam massagem no Google (study real)</h3>
          <p>Cada uma dessas buscas tem volume estimado e <strong>nenhum concorrente direto em Palmas posiciona bem em todas</strong>:</p>
          <table>
            <thead><tr><th>Tipo de busca</th><th>Termo exato</th><th>Volume estimado mês</th><th>Concorrência</th></tr></thead>
            <tbody>
              <tr><td>Transacional</td><td>"massagem palmas"</td><td>1.500-3.000</td><td>Alta · Alivièr roda Ads aqui</td></tr>
              <tr><td>Transacional</td><td>"drenagem linfática palmas"</td><td>500-1.000</td><td>Média · gap pra modeladora premium</td></tr>
              <tr><td>Transacional</td><td>"massagem domicílio palmas"</td><td>200-500</td><td>Baixa · ninguém ataca</td></tr>
              <tr><td>Transacional</td><td>"massagista feminina palmas"</td><td>100-300</td><td>Baixa · oportunidade</td></tr>
              <tr><td>Transacional</td><td>"drenagem pós cirurgia palmas"</td><td>300-700</td><td>Baixa-média · alto valor</td></tr>
              <tr><td>Transacional</td><td>"massagem desportiva palmas"</td><td>100-300</td><td>Quase nenhuma · gap claro</td></tr>
              <tr><td>Informacional</td><td>"como funciona drenagem linfática"</td><td>5k+ (BR)</td><td>Alta nacional · baixa local</td></tr>
              <tr><td>Informacional</td><td>"vale a pena massagem modeladora"</td><td>2k+ (BR)</td><td>Média · captura quem decide</td></tr>
              <tr><td>Informacional</td><td>"diferença massagem relaxante e terapêutica"</td><td>1k+ (BR)</td><td>Média</td></tr>
              <tr><td>Informacional</td><td>"o que esperar de massagem pós cirúrgica"</td><td>800+ (BR)</td><td>Baixa · alto intent</td></tr>
              <tr><td>Local</td><td>"massagem perto de mim"</td><td>variado · alto em horário comercial</td><td>Resolvido por GMB</td></tr>
            </tbody>
          </table>

          <h3>Estratégia Google Ads (MVP)</h3>
          <p>Foco em <strong>termos transacionais de baixa-média concorrência</strong>. Não disputar "massagem palmas" no leilão direto com o Alivièr — atacar long-tail onde CPC é menor e intenção é mais qualificada.</p>
          <ul>
            <li><strong>Headline 1:</strong> Massagem terapêutica feminina · Palmas-TO</li>
            <li><strong>Headline 2:</strong> Atendimento privativo em clínica ou domicílio</li>
            <li><strong>Headline 3:</strong> Day Premium · Drenagem · Desportiva · Modeladora</li>
            <li><strong>Descrição:</strong> Uma cliente por turno. Técnica e tempo dedicado. Esfoliante corporal de brinde no 1º atendimento. Agende pelo WhatsApp.</li>
          </ul>

          <h3>SEO + Blog (12 posts no primeiro semestre)</h3>
          <p>Blog estruturado pra capturar a busca informacional acima. Cada post: 1.500-2.500 palavras · 1-2 imagens próprias · 3-5 links internos pras páginas de massagem · CTA pro WhatsApp.</p>
          <ol>
            <li>Como a drenagem linfática age no inchaço · guia honesto</li>
            <li>O que faz uma massagem ser "desportiva" · e por que importa pra corredora</li>
            <li>Recovery muscular: o que acontece nas 48h pós-prova</li>
            <li>Massagem em casa ou em clínica: o que muda na prática</li>
            <li>Pedras quentes, vela, bambu, ventosa — pra que serve cada uma</li>
            <li>Drenagem pós-cirúrgica: o que esperar, quando começar, como acelerar</li>
            <li>Cuidado feminino é nicho: por que escolhi atender só mulheres</li>
            <li>ATM, mandíbula travada, cefaleia: como a massagem facial alivia</li>
            <li>Massagem modeladora: o que a literatura mostra (e o que não mostra)</li>
            <li>Como escolher uma massagista em Palmas: 7 critérios</li>
            <li>Auto-cuidado feminino: presença vs produto</li>
            <li>Plano de Horas: vale a pena pra quem faz massagem todo mês?</li>
          </ol>

          <h3>llms.txt · AEO (Answer Engine Optimization)</h3>
          <div className="plano-callout is-burgundy">
            <p style={{ marginTop: 0 }}><strong>O que é llms.txt:</strong> arquivo de texto na raiz do site (similar ao robots.txt) que <strong>fala diretamente com modelos de linguagem</strong> (ChatGPT, Gemini, Claude, Perplexity) explicando o que o negócio é, o que oferece, pra quem, em quais condições e em quais palavras.</p>
            <p><strong>Por que importa:</strong> em 2026, parte crescente das buscas migrou do Google tradicional pra interfaces de IA. Quando alguém em Palmas pergunta ao ChatGPT "qual a melhor massagista feminina em Palmas?", a resposta depende do que esses modelos conseguem ler na web. Sem llms.txt, o site é mal interpretado · com llms.txt, o Vida em Equilíbrio aparece como resposta direta.</p>
            <p style={{ marginBottom: 0 }}><strong>Quem já faz em Palmas:</strong> ninguém. É vetor de aquisição vazio.</p>
          </div>

          <h4>O que o llms.txt do Vida em Equilíbrio vai conter</h4>
          <ul>
            <li>Quem é o negócio em 2 frases · público-alvo · diferencial</li>
            <li>Mapa das massagens com link pra cada página interna</li>
            <li>Modalidades de atendimento e localização (Palmas Setor Norte + domicílio)</li>
            <li>Faixa de preço genérica (R$180-680 dependendo da massagem) · forma de contato</li>
            <li>Restrições explícitas (atende só mulheres · não atende em casa fora de Palmas)</li>
            <li>Vocabulário próprio que o modelo deve usar (presença · escuta · privativo · uma cliente por turno)</li>
            <li>Frases prontas pro modelo responder (ex: "para drenagem linfática pós-cirúrgica em Palmas, o Vida em Equilíbrio atende em sessões de 90 minutos com técnica calibrada")</li>
          </ul>

          <h4>Outras peças AEO complementares</h4>
          <ul>
            <li><strong>Schema.org LocalBusiness</strong> em JSON-LD na home — Google e ChatGPT consomem essa estrutura</li>
            <li><strong>FAQPage Schema</strong> na FAQ do site — vira "respostas diretas" no Google Search e na resposta de IA</li>
            <li><strong>OpenGraph + Twitter Cards</strong> bem configurados — preview de IA fica bonito</li>
            <li><strong>Sitemap.xml</strong> submetido ao Google Search Console + IndexNow (Bing/Yandex)</li>
          </ul>

          <h3>Parcerias B2B (Mês 2-3)</h3>
          <p>Canal pouco explorado em Palmas premium. Mapear e contatar:</p>
          <ul>
            <li><strong>OAB-TO</strong> (advogadas) · <strong>CRM-TO</strong> (médicas) · <strong>Crefito-TO</strong> (fisios — rede natural do Leandro)</li>
            <li><strong>AMHP-TO</strong> · sindicatos de servidores TO (funcionalismo feminino)</li>
            <li><strong>Academias premium</strong> Palmas (Smart Fit Plus, Bio Ritmo, Energy) · indicação cruzada</li>
            <li><strong>CYOX</strong> (já parceira) · cross-sell estético ↔ massagem</li>
          </ul>
          <p>Modelo: convênio com desconto 10% pra associadas · indicação cruzada · presença em eventos da associação.</p>

          <h3>Programa "Convide uma Amiga"</h3>
          <p>Cliente que indica ganha <strong>1 enhancement grátis</strong>. Amiga indicada ganha brinde de esfoliante + 15% off na 1ª sessão. Comunicação: WhatsApp pós-atendimento, sem cartão físico (queima percepção premium). Só digital.</p>
          <Frase n={11} />
        </section>

        {/* ═══════════════════ 11 · ECOSSISTEMA CORRIDA ═══════════════════ */}
        <section className="plano-section" id="secao-corrida">
          <div className="plano-page-marker">Página 19 · Seção 11</div>
          <h2>Ecossistema Corrida · wedge subnicho</h2>
          <p>Dos 39 concorrentes mapeados em Palmas, <strong>apenas Geiciane Aguiar atende corredora em eventos</strong> — e sem marca/posicionamento de subnicho. "Spa do Atleta em Palmas" não existe. Gap aberto e defensável que o Vida em Equilíbrio pode ocupar.</p>

          <h3>3 pernas que se compõem</h3>
          <div className="plano-callout">
            <h4 style={{ marginTop: 0 }}>1 · Calendário de Corridas no Site</h4>
            <p>Hub atualizado com todas as corridas de Palmas/TO. SEO local: cada atleta que pesquisa "corridas Palmas 2026" cai na casa do Leandro. <strong>Custo: zero.</strong> Retorno: SEO long-tail + autoridade técnica.</p>
            <h4>2 · Tenda nas provas (Mês 6+)</h4>
            <p>Cabine de massagem expressa pós-prova. Parceria oficial com 1-2 corridas locais (alvos: Corrida 100% Você Hospital Yano · Corrida SESI · Corrida do Fogo · Night Run Palmas). Cupom no kit do atleta + banner no site da prova. <strong>Custo: R$300-500 por evento.</strong></p>
            <h4>3 · Programa "Recovery do Corredor"</h4>
            <p>Pacote pré-prova (preparação, 48h antes) + pós-prova (recovery, primeiras 48h). Combina fisio + massagem desportiva + drenagem linfática. <strong>Custo: desenho de protocolo.</strong> Retorno: ticket alto + recorrência (atleta corre várias provas/ano).</p>
          </div>

          <h3>Frições conhecidas</h3>
          <ul>
            <li>Regra "só feminino" do Leandro vs corredor homem na tenda → confirmar na reunião</li>
            <li>Operação física exige Leandro presente em prova (fim de semana cedo) ou equipe</li>
            <li>Relacionamento com organizadores · quem fecha parcerias</li>
            <li>Capacidade pós-prova em massa exige escala que ainda não existe</li>
          </ul>

          <h3>Cronograma do Ecossistema Corrida</h3>
          <table>
            <tbody>
              <tr><td>Mês 1-3</td><td>Página <code>/desportiva</code> · calendário básico · contratação particular</td></tr>
              <tr><td>Mês 4-6</td><td>Mapear organizadores · primeira parceria (1 prova)</td></tr>
              <tr><td>Mês 7-9</td><td>Tenda em 1-2 provas como teste · ajustar protocolo</td></tr>
              <tr><td>Mês 10-12</td><td>Avaliar adesão · decidir se vira vertical permanente</td></tr>
            </tbody>
          </table>
          <Frase n={12} />
        </section>

        {/* ═══════════════════ 12 · CONTEÚDO ═══════════════════ */}
        <section className="plano-section" id="secao-conteudo">
          <div className="plano-page-marker">Página 20 · Seção 12</div>
          <h2>Conteúdo, blog e Instagram</h2>

          <h3>Estratégia Instagram · 60-30-10</h3>
          <table>
            <thead><tr><th>Pilar</th><th>%</th><th>Tipo de post</th></tr></thead>
            <tbody>
              <tr><td><strong>Emocional</strong></td><td>60%</td><td>Depoimentos · bastidores · frase poética + foto cinemática · storytelling do Leandro · cliente de costas (com permissão)</td></tr>
              <tr><td><strong>Educativo</strong></td><td>30%</td><td>Carrossel "O que faz a drenagem" · reel "Como é a manobra" · carrossel "ATM: como aliviar" · lives mensais</td></tr>
              <tr><td><strong>Institucional</strong></td><td>10%</td><td>Espaço · equipe · marcos · agenda (sem clichê)</td></tr>
            </tbody>
          </table>
          <div className="plano-callout">
            <strong>Aprendizado do Alivièr:</strong> posts emocionais performam <strong>7× mais</strong> que institucionais. Pivotar conteúdo nessa direção desde dia 1.
          </div>

          <h3>Estratégia de migração @timoteoofficial → @vidaemequilibrio</h3>
          <table>
            <tbody>
              <tr><td><strong>Fase A · Mês 1-3</strong></td><td>Manter @timoteoofficial ativo · criar @vidaemequilibrio.palmas · cross-post 30% (perfil pessoal redireciona pro do negócio)</td></tr>
              <tr><td><strong>Fase B · Mês 4-6</strong></td><td>70% conteúdo profissional vai pro @vidaemequilibrio · bio do @timoteoofficial redireciona</td></tr>
              <tr><td><strong>Fase C · Mês 7+</strong></td><td>@timoteoofficial vira arquivo · @vidaemequilibrio é o canal principal</td></tr>
            </tbody>
          </table>

          <h3>Frequência</h3>
          <p><strong>3 posts/semana</strong> no feed + <strong>5 stories/semana</strong> no mínimo + <strong>1 reel/semana</strong> obrigatório. Algoritmo IG 2026 premia reels.</p>

          <h3>Blog (cobertura recap)</h3>
          <p>12 posts SEO no primeiro semestre, foco em palavras-chave informacionais. Estrutura, palavras-chave e cronograma editorial detalhados na <strong>Seção 10</strong>. Cada post puxa pra páginas de massagem + CTA WhatsApp.</p>
          <Frase n={13} />
        </section>

        {/* ═══════════════════ 13 · CRONOGRAMA 12 MESES ═══════════════════ */}
        <section className="plano-section" id="secao-cronograma">
          <div className="plano-page-marker">Página 22 · Seção 13</div>
          <h2>Cronograma 12 meses · mês a mês</h2>
          <p>O setup entrega o ponto de partida. A operação real acontece ao longo de 4 trimestres, com fases bem definidas:</p>

          <div className="plano-callout is-warm">
            <h3 style={{ marginTop: 0 }}>Trimestre 1 · Mês 1-3 · MVP Digital e Operacional</h3>
            <h4>Marca</h4>
            <ul>
              <li>Site implementado ✓ · identidade visual cravada ✓ · logo escolhida ✓</li>
              <li>Foto profissional do Leandro (ensaio com fotógrafo Palmas)</li>
              <li>Foto real da clínica CYOX</li>
              <li>Catálogo PDF público no Google Drive</li>
            </ul>
            <h4>Operação</h4>
            <ul>
              <li>Formalizar parceria CYOX (contrato simples)</li>
              <li>Contratar 1 atendente WhatsApp part-time</li>
              <li>Configurar WhatsApp Business + mensagens automáticas + llms.txt</li>
              <li>Comprar produtos profissionais faltantes · macas portáteis</li>
            </ul>
            <h4>Marketing</h4>
            <ul>
              <li>Lançar Google Ads (R$1.500-3.000/mês)</li>
              <li>Criar @vidaemequilibrio.palmas · cross-post começar</li>
              <li>Publicar 4-6 posts no blog</li>
              <li>Iniciar programa "Convide uma Amiga"</li>
            </ul>
            <p><strong>Meta:</strong> 10-15 clientes únicas no Mês 1 → 25-35 no Mês 3 · 5-8 retornantes</p>
          </div>

          <div className="plano-callout is-burgundy">
            <h3 style={{ marginTop: 0 }}>Trimestre 2 · Mês 4-6 · Consolidação e Expansão</h3>
            <h4>Operação</h4>
            <ul>
              <li>Avaliar pivot IG (timoteoofficial → vidaemequilibrio gradual)</li>
              <li>Contratar 2ª atendente WhatsApp (cobertura noite/sábado)</li>
              <li>Contratar 1ª massoterapeuta auxiliar (drenagem ou modeladora)</li>
              <li>Sistema de agendamento online (Trinks ou Booksy)</li>
            </ul>
            <h4>Marketing</h4>
            <ul>
              <li>Lançar <strong>Plano de Horas Equilíbrio</strong> (5h, 10h, 15h, 20h)</li>
              <li>Fechar 2-3 parcerias B2B (OAB-TO, Crefito-TO, academia premium)</li>
              <li>Lançar página <code>/desportiva</code> com cardápio próprio</li>
              <li>Buscar parceria com 1 corrida local</li>
              <li>+ 4 posts no blog (total 8-10)</li>
              <li>Primeiro reel do Leandro com 1k+ views</li>
            </ul>
            <p><strong>Meta:</strong> 40-55 clientes únicas acumuladas · 15-25 retornantes · 3-5 Planos de Horas vendidos</p>
          </div>

          <div className="plano-callout is-champagne">
            <h3 style={{ marginTop: 0 }}>Trimestre 3 · Mês 7-9 · Escala Inicial</h3>
            <h4>Operação</h4>
            <ul>
              <li>Avaliar 2ª massoterapeuta auxiliar (facial ou desportiva)</li>
              <li>Considerar 2ª clínica parceira ou expansão da CYOX</li>
              <li>Implementar CRM básico (planilha rica · histórico de cliente)</li>
            </ul>
            <h4>Marketing</h4>
            <ul>
              <li>Tenda em 1-2 corridas locais (teste de subnicho)</li>
              <li>Lançar canal YouTube (5-8 reels educativos)</li>
              <li>Aumentar Google Ads (R$3.000-5.000/mês se ROAS bom)</li>
              <li>Pesquisar parcerias com hotéis premium (Pousada dos Pireneus, Hotel Rio do Sono)</li>
            </ul>
            <p><strong>Meta:</strong> 70-90 clientes únicas acumuladas · 25-35 retornantes · 8-12 Planos de Horas ativos · 15-25 indicações orgânicas</p>
          </div>

          <div className="plano-callout">
            <h3 style={{ marginTop: 0 }}>Trimestre 4 · Mês 10-12 · Consolidação do Quadrante</h3>
            <h4>Operação</h4>
            <ul>
              <li>Time consolidado: Leandro + 2 atendentes + 2 massoterapeutas</li>
              <li>Avaliar abertura de unidade própria (sair da CYOX pra espaço dedicado)</li>
            </ul>
            <h4>Marketing</h4>
            <ul>
              <li>Plano de Horas é produto-âncora (gift card familiar)</li>
              <li>Considerar <strong>Diário Vida em Equilíbrio</strong> (versão mini da Revista Alivièr) — 100 unidades premium pra clientes VIP e parceiros</li>
              <li>Aparição em mídia local (G1 Tocantins · Surgiu · Conexão Tocantins)</li>
              <li>Avaliar expansão pra Araguaína · Gurupi (modelo franquia ou método certificado)</li>
            </ul>
            <p><strong>Meta:</strong> 100-150 clientes únicas acumuladas · 50-80 retornantes recorrentes · 20-30 Planos de Horas ativos · faturamento bruto mensal R$25-40k</p>
          </div>
          <Frase n={14} />
        </section>

        {/* ═══════════════════ 14 · MÉTRICAS ═══════════════════ */}
        <section className="plano-section" id="secao-metricas">
          <div className="plano-page-marker">Página 25 · Seção 14</div>
          <h2>Métricas e indicadores de sucesso</h2>
          <p>Sem métrica clara, marketing vira achismo. Indicadores objetivos que mostram, mês a mês, se o setup está entregando resultado.</p>

          <h3>Indicadores comerciais</h3>
          <table>
            <thead><tr><th>Métrica</th><th>Mês 1</th><th>Mês 3</th><th>Mês 6</th><th>Mês 12</th></tr></thead>
            <tbody>
              <tr><td>Clientes únicas acumuladas</td><td>10-15</td><td>35</td><td>55</td><td>130</td></tr>
              <tr><td>Sessões/mês</td><td>15-25</td><td>40-60</td><td>80-100</td><td>150-200</td></tr>
              <tr><td>Ticket médio sessão</td><td>R$200</td><td>R$215</td><td>R$225</td><td>R$240</td></tr>
              <tr><td>Faturamento bruto/mês</td><td>R$3-5k</td><td>R$8-13k</td><td>R$18-22k</td><td>R$35-48k</td></tr>
              <tr><td>Custo Google Ads/mês</td><td>R$1.500</td><td>R$2.000</td><td>R$2.500</td><td>R$4.000</td></tr>
              <tr><td>ROAS</td><td>2-3×</td><td>4-5×</td><td>5-7×</td><td>8-10×</td></tr>
              <tr><td>Taxa de retorno</td><td>—</td><td>20%</td><td>30%</td><td>45%</td></tr>
              <tr><td>LTV médio (12m)</td><td>—</td><td>—</td><td>R$680</td><td>R$1.200</td></tr>
              <tr><td>CAC</td><td>R$150-200</td><td>R$100-150</td><td>R$70-100</td><td>R$40-60</td></tr>
            </tbody>
          </table>

          <h3>Indicadores de marca e presença digital</h3>
          <table>
            <thead><tr><th>Métrica</th><th>Mês 1</th><th>Mês 6</th><th>Mês 12</th></tr></thead>
            <tbody>
              <tr><td>Followers @vidaemequilibrio</td><td>500-1.000 (via cross-post)</td><td>3.000-5.000</td><td>8.000-12.000</td></tr>
              <tr><td>Engajamento médio Insta</td><td>2-3%</td><td>2,5-3,5%</td><td>3-4% (vs 0,4% Alivièr)</td></tr>
              <tr><td>Acessos site/mês</td><td>500-800</td><td>2.000-3.500</td><td>5.000-8.000</td></tr>
              <tr><td>Conversão site → WhatsApp</td><td>3-5%</td><td>6-8%</td><td>8-12%</td></tr>
              <tr><td>Posições Google (palavras-chave alvo)</td><td>fora do top 50</td><td>top 30 (long-tail blog)</td><td>top 10 (3-5 termos principais)</td></tr>
              <tr><td>Aparições em IA (ChatGPT/Gemini)</td><td>baixíssima</td><td>menções esporádicas</td><td>resposta direta quando perguntam "massagem feminina premium Palmas"</td></tr>
            </tbody>
          </table>

          <h3>Como acompanhamos</h3>
          <p>Dashboard semanal pelo WhatsApp + 1 reunião mensal de revisão (45 min). Toda métrica tem fonte clara (Insta Insights, Google Analytics, Search Console, planilha de clientes). Sem número estimado "de cabeça" — só o que dá pra rastrear.</p>
          <Frase n={15} />
        </section>

        {/* ═══════════════════ 15 · RISCOS ═══════════════════ */}
        <section className="plano-section" id="secao-riscos">
          <div className="plano-page-marker">Página 27 · Seção 15</div>
          <h2>Riscos e mitigações</h2>
          <table>
            <thead><tr><th>Risco</th><th>Probabilidade</th><th>Mitigação</th></tr></thead>
            <tbody>
              <tr><td><strong>Barreira "homem atendendo mulher"</strong></td><td>Alta</td><td>Storytelling forte do Leandro · FAQ explícita · indicação · 10-15 primeiras clientes da audiência @timoteoofficial</td></tr>
              <tr><td><strong>Operação híbrida (CYOX + domicílio) confunde</strong></td><td>Média</td><td>Site explica claramente · WhatsApp pergunta "prefere clínica ou casa?" · cobertura de bairros declarada</td></tr>
              <tr><td><strong>Esconder preço perde lead se contato não-premium</strong></td><td>Média</td><td>Tom premium consistente · treinar atendente com script · resposta em até 2h em horário comercial</td></tr>
              <tr><td><strong>Equipe ainda não existe (gargalo Leandro)</strong></td><td>Alta</td><td>Atendente WhatsApp já no Mês 1 (part-time) · agenda inicial limitada a 4-5 sessões/dia · bloqueios pra estudo e captação</td></tr>
              <tr><td><strong>Subnicho corrida fraco em Palmas</strong></td><td>Alta (validada)</td><td>Tratar como vertical futura · calendário no site cobre SEO · validar contratação particular antes de investir em evento</td></tr>
              <tr><td><strong>Plano de Horas não converte (raro em Palmas)</strong></td><td>Média</td><td>Lançar só após 50+ clientes (Mês 4-6) · testar com 10 primeiras como exclusividade discreta · posicionar como gift card familiar</td></tr>
              <tr><td><strong>Pivot @timoteoofficial perde audiência</strong></td><td>Média-Alta</td><td>Pivot gradual em 3 fases · cross-post estratégico 3 meses · manter perfil pessoal até @vidaemequilibrio passar 5k</td></tr>
              <tr><td><strong>Concorrência reage (Alivièr aumenta investimento)</strong></td><td>Baixa-Média</td><td>Quadrante diferente (premium + rosto) · não disputar termo direto no Google · diferencial "homem-terapeuta" difícil de copiar</td></tr>
            </tbody>
          </table>
          <Frase n={16} />
        </section>

        {/* ═══════════════════ 16 · SETUP COMPLETO IMPULSO ═══════════════════ */}
        <section className="plano-section" id="secao-pricing">
          <div className="plano-page-marker">Página 28 · Seção 16</div>
          <h2>Setup completo Impulso · o que está incluso</h2>

          <div
            className="plano-callout"
            style={{
              background: "linear-gradient(135deg, rgba(110, 42, 74, 0.12) 0%, rgba(201, 183, 156, 0.18) 100%)",
              borderLeft: "4px solid var(--p-burgundy)",
              padding: "26px 28px",
              borderRadius: 8,
            }}
          >
            {/* Bloco de preço · centralizado, peso visual grande */}
            <div style={{ textAlign: "center", padding: "8px 0 24px", borderBottom: "1px solid var(--p-border-soft)", marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--p-champagne-deep)", marginBottom: 14, fontWeight: 500 }}>
                Investimento único · setup completo
              </p>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6, lineHeight: 1 }}>
                <span style={{ fontSize: 26, fontWeight: 500, color: "var(--p-burgundy)" }}>R$</span>
                <span style={{ fontSize: 78, fontWeight: 600, color: "var(--p-burgundy)", letterSpacing: "-0.04em" }}>1.997</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--p-text-soft)", marginTop: 10, marginBottom: 0 }}>
                pago uma vez · vira ativo permanente da marca
              </p>
            </div>

            {/* CONDIÇÕES DE PAGAMENTO · cravadas */}
            <div style={{ marginBottom: 28, padding: "20px 24px", background: "var(--p-bg-card)", border: "1px solid var(--p-border-soft)", borderLeft: "3px solid var(--p-burgundy)", borderRadius: 4 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--p-champagne-deep)", fontWeight: 500, marginBottom: 12 }}>
                Como pagar
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 16px", alignItems: "baseline", fontSize: 13.5 }}>
                <strong style={{ color: "var(--p-burgundy)", fontVariantNumeric: "tabular-nums" }}>50% entrada</strong>
                <span style={{ color: "var(--p-text)" }}>R$ 998,50 · libera produção · PIX ou cartão</span>
                <strong style={{ color: "var(--p-burgundy)", fontVariantNumeric: "tabular-nums" }}>50% saldo</strong>
                <span style={{ color: "var(--p-text)" }}>Você decide: à vista na entrega · ou parcelado no cartão (até 3×)</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginTop: 16, padding: "7px 16px", background: "var(--p-bg)", borderRadius: 999, fontSize: 11, color: "var(--p-text-soft)" }}>
                <span><strong style={{ color: "var(--p-burgundy)" }}>7 dias</strong> de garantia incondicional</span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--p-champagne)" }} />
                <span><strong style={{ color: "var(--p-burgundy)" }}>1 mês</strong> de calibragem pós-entrega</span>
              </div>
            </div>

            {/* BÔNUS · 12 MESES DE HOSPEDAGEM */}
            <div style={{ marginBottom: 32, padding: "22px 26px", background: "linear-gradient(135deg, rgba(110, 42, 74, 0.10) 0%, rgba(201, 183, 156, 0.18) 100%)", border: "1px dashed var(--p-burgundy)", borderRadius: 6, textAlign: "center" }}>
              <p style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--p-burgundy)", fontWeight: 600, marginBottom: 10 }}>
                ★ Bônus incluso
              </p>
              <p style={{ fontSize: 22, fontWeight: 600, color: "var(--p-burgundy)", marginBottom: 8, letterSpacing: "-0.01em" }}>
                12 meses de hospedagem · grátis
              </p>
              <p style={{ fontSize: 13, color: "var(--p-text)", margin: "0 auto 10px", maxWidth: 480, lineHeight: 1.6 }}>
                Site no ar pelo primeiro ano sem cobrança mensal de hospedagem. Já incluso no Setup.
              </p>
              <p style={{ fontSize: 12, color: "var(--p-text-soft)", margin: 0 }}>
                Economia direta no bolso: <strong style={{ color: "var(--p-burgundy)" }}>R$ 600 a R$ 1.000/ano</strong> que ficariam recorrentes em hospedagem profissional.
              </p>
            </div>

            <p style={{ fontSize: 14, textAlign: "center", maxWidth: 560, margin: "0 auto 32px", color: "var(--p-text-soft)" }}>
              Tudo que o Vida em Equilíbrio precisa pra entrar no ar com identidade profissional, materiais prontos pros primeiros 30 dias, sistema completo de captação e direção estratégica do que vem depois.
            </p>

            {/* 5 categorias de entrega · número grande + lista enxuta */}
            {[
              {
                num: "01",
                titulo: "Site profissional completo",
                itens: [
                  "Home + 6 páginas internas (uma por massagem)",
                  "Blog estruturado + FAQ + seção Como Chegar",
                  "Rodando em Next.js no Vercel · domínio próprio",
                  "Schema.org LocalBusiness + FAQPage · SEO técnico completo",
                  "Sitemap.xml · robots.txt · cadastro Google Search Console",
                ],
              },
              {
                num: "02",
                titulo: "Identidade visual autoral",
                itens: [
                  "Logo arco + ponto cravado · 3 variações entregues + escolhida aplicada",
                  "Paleta Editorial Tungsten · 8 cores documentadas + uso por contexto",
                  "Tipografia editorial (Fraunces + Inter)",
                  "Marca d'água sistemática · digital + papelaria",
                  "OG image dinâmica · favicon · cartão de visita",
                ],
              },
              {
                num: "03",
                titulo: "Captação Google + IA (AEO)",
                itens: [
                  "Google Ads configurado · 11 termos long-tail + criativos prontos",
                  "llms.txt cravado · marca aparece em ChatGPT/Gemini/Perplexity",
                  "Blog editorial · 12 títulos pré-pesquisados (palavras-chave reais)",
                  "Único negócio de massagem em Palmas com AEO ativo",
                ],
              },
              {
                num: "04",
                titulo: "Inteligência de mercado",
                itens: [
                  "Análise de 39 concorrentes ativos em Palmas",
                  "5 dossiês profundos (Alivièr, Eliá, C'Alma, Aurora, Edna Borges)",
                  "Dossiê Alivièr Deep Dive · 45+ combos mapeados",
                  "Gaps identificados + posicionamento defensável cravado",
                ],
              },
              {
                num: "05",
                titulo: "Plano de Negócio + Marketing",
                itens: [
                  "Este documento · 30+ páginas executivas",
                  "Cronograma trimestral · 12 meses mês a mês",
                  "Catálogo PDF separado · pra enviar no WhatsApp e B2B",
                  "Estratégia de migração @timoteoofficial → @vidaemequilibrio (3 fases)",
                  "Métricas-alvo + indicadores de sucesso",
                ],
              },
            ].map((cat) => (
              <div key={cat.num} style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "60px 1fr", gap: 18, padding: "20px 0", borderBottom: "1px solid var(--p-border-soft)" }}>
                <div>
                  <p style={{ fontSize: 36, fontWeight: 600, color: "var(--p-burgundy)", margin: 0, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{cat.num}</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--p-font-body)", fontWeight: 600, fontSize: 16, color: "var(--p-text)", margin: "0 0 10px", textTransform: "none", letterSpacing: "-0.01em" }}>
                    {cat.titulo}
                  </h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {cat.itens.map((it) => (
                      <li key={it} style={{ position: "relative", paddingLeft: 16, margin: "5px 0", fontSize: 12.5, lineHeight: 1.6, color: "var(--p-text-soft)" }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--p-champagne-deep)" }}>—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Selo de valor */}
            <div style={{ marginTop: 32, padding: "20px 28px", background: "var(--p-bg-warm)", borderLeft: "4px solid var(--p-champagne-deep)", borderRadius: 4 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--p-champagne-deep)", fontWeight: 500, marginBottom: 8 }}>
                Comparativo de mercado
              </p>
              <p style={{ fontSize: 13, color: "var(--p-text)", margin: 0, lineHeight: 1.7 }}>
                Site profissional avulso em Palmas: <strong>R$ 2.500-5.000</strong> · identidade visual com manual: <strong>R$ 2.000-4.000</strong> · plano de marketing: <strong>R$ 1.500-3.000</strong> · análise de concorrência: <strong>R$ 800-2.000</strong>. Contratados separados, fica entre <strong>R$ 6.800 e R$ 14.000</strong> · sem integração entre as peças. O Setup Vida em Equilíbrio entrega tudo integrado por <strong style={{ color: "var(--p-burgundy)" }}>R$ 1.997</strong>.
              </p>
            </div>
          </div>

          <div className="plano-quote">
            Traduzindo: o Leandro não precisa pensar em como o site vai funcionar, qual paleta usar, o que postar, qual termo atacar no Google, como aparecer no ChatGPT, como organizar o catálogo. Só precisa atender bem suas clientes e mandar fotos. A Impulso entrega o resto · o R$ 1.997 paga isso de uma vez.
          </div>

          <div className="plano-callout is-burgundy">
            <h3 style={{ marginTop: 0 }}>Próximos serviços (a definir conforme o Vida em Equilíbrio avança)</h3>
            <p>O R$ 1.997 entrega o setup completo. A partir daí, conforme a tração apareça, vamos discutir os próximos passos em momentos diferentes — sem amarração de contrato longo, sem pressão.</p>

            <h4>Operação digital contínua (mensal)</h4>
            <ul>
              <li>Gestão de tráfego pago (Google Ads + Meta Ads quando ativar)</li>
              <li>Produção mensal de posts + stories + reels (Instagram)</li>
              <li>Manutenção do site (atualizações conforme novos serviços ou cases)</li>
              <li>Manutenção mensal de SEO + Google Meu Negócio + llms.txt</li>
              <li>Dashboard semanal de métricas pelo WhatsApp</li>
              <li>Reunião mensal de revisão estratégica (45 min)</li>
            </ul>

            <h4>Materiais avançados (quando faz sentido)</h4>
            <ul>
              <li>Vídeo institucional do Vida em Equilíbrio (2-3 min) pra site + apresentações</li>
              <li>Coleta e produção de depoimentos em vídeo das primeiras clientes</li>
              <li><strong>Diário Vida em Equilíbrio</strong> impresso (Mês 10-12) · objeto premium pra clientes VIP e parceiros</li>
              <li>Modelo de proposta corporativa (convênios B2B)</li>
            </ul>

            <h4>Captação ativa B2B</h4>
            <ul>
              <li>Prospecção de associações profissionais (OAB-TO, CRM-TO, Crefito-TO)</li>
              <li>Playbook de abordagem corporativa</li>
              <li><strong>RadarPRO</strong> · plataforma proprietária Impulso pra captação B2B (a discutir quando operação consolidar)</li>
            </ul>

            <p style={{ marginTop: 14, fontSize: 12, fontStyle: "italic", color: "var(--p-text-muted)" }}>
              Cada item dessa lista vira pauta de uma reunião específica quando fizer sentido. A discussão de valor acontece no momento certo, com o Vida em Equilíbrio já rodando.
            </p>
          </div>
          <Frase n={17} />
        </section>


        {/* ═══════════════════ 18 · CHECKLIST 30 DIAS ═══════════════════ */}
        <section className="plano-section" id="secao-checklist">
          <div className="plano-page-marker">Página 31 · Seção 18</div>
          <h2>Checklist próximos 30 dias</h2>
          <p>Ações práticas pra colocar o Vida em Equilíbrio no ar e começar a captar cliente já no primeiro mês.</p>

          <h3>Semana 1 · pós-reunião com Leandro</h3>
          <ul>
            <li>☐ <strong>Leandro</strong>: validar plano (cardápio · preço · diferencial · roadmap)</li>
            <li>☐ <strong>Leandro</strong>: decidir logo final entre as 3 variações (já apresentadas em <code>/logo-preview/v2</code>)</li>
            <li>☐ <strong>Impulso</strong>: aplicar logo escolhida no site (header, footer, OG, favicon)</li>
            <li>☐ <strong>Leandro</strong>: formalizar parceria CYOX (acordo simples por escrito)</li>
            <li>☐ <strong>Leandro</strong>: cravar preço final por massagem (com base no benchmark Alivièr)</li>
          </ul>

          <h3>Semana 2 · produção e setup</h3>
          <ul>
            <li>☐ <strong>Leandro</strong>: ensaio fotográfico (contratar fotógrafo Palmas) · ele + espaço CYOX</li>
            <li>☐ <strong>Leandro</strong>: comprar produtos profissionais faltantes</li>
            <li>☐ <strong>Leandro</strong>: comprar maca portátil pra domicílio</li>
            <li>☐ <strong>Impulso</strong>: configurar WhatsApp Business + mensagens automáticas</li>
            <li>☐ <strong>Impulso</strong>: comprar e apontar domínio vidaemequilibrio.com.br</li>
            <li>☐ <strong>Impulso</strong>: publicar site em produção (Vercel)</li>
            <li>☐ <strong>Impulso</strong>: subir llms.txt + sitemap.xml · submeter Google Search Console</li>
          </ul>

          <h3>Semana 3 · lançamento de marca</h3>
          <ul>
            <li>☐ <strong>Impulso</strong>: criar @vidaemequilibrio.palmas (perfil, bio, link, destaques)</li>
            <li>☐ <strong>Leandro</strong>: 1º cross-post do @timoteoofficial pro novo perfil</li>
            <li>☐ <strong>Impulso</strong>: criar Google Ads (campanhas iniciais · termos prioritários)</li>
            <li>☐ <strong>Impulso</strong>: configurar Google Analytics 4 + Meta Pixel + GMB</li>
            <li>☐ <strong>Impulso</strong>: catálogo PDF v1 publicado no Drive</li>
            <li>☐ <strong>Impulso</strong>: publicar 1º post no blog</li>
          </ul>

          <h3>Semana 4 · aceleração</h3>
          <ul>
            <li>☐ <strong>Leandro</strong>: contratar atendente WhatsApp part-time (entrevistas · script)</li>
            <li>☐ <strong>Impulso</strong>: 5 stories + 3 posts no IG</li>
            <li>☐ <strong>Leandro</strong>: receber primeiras 3-5 clientes (validação operacional)</li>
            <li>☐ <strong>Leandro</strong>: coletar 1º depoimento longo com nome real</li>
            <li>☐ <strong>Impulso</strong>: avaliar indicadores de Google Ads (CPC, CTR, conversões)</li>
            <li>☐ <strong>Impulso</strong>: 1ª reunião mensal de revisão (45 min)</li>
          </ul>

          <h3>Informações ainda a coletar com Leandro</h3>
          <ul>
            <li>Composição exata de cada combo escalonado (sem pedras / sem ventosa)</li>
            <li>Política de cancelamento e no-show (validar regra)</li>
            <li>Quantos atendentes a equipe vai ter (curto e médio prazo)</li>
            <li>Quando o IG do negócio vai nascer (data específica do pivot)</li>
            <li>Como vai operar agenda (WhatsApp puro? Trinks? Booksy?)</li>
            <li>Acupuntura e auriculoterapia · cronograma de entrada no cardápio</li>
            <li>Modelo formal de parceria com CYOX (% comissão · aluguel · contrato)</li>
            <li>Memberships (Plano de Horas) · aprovar formato e cronograma de lançamento</li>
            <li>Quanto da história pessoal entra em copy pública</li>
          </ul>
          <Frase n={19} />
        </section>

        {/* ═══════════════════ ASSINATURA FINAL ═══════════════════ */}
        <section className="plano-section" style={{ marginTop: 60, paddingTop: 32, borderTop: "2px solid var(--p-burgundy)", textAlign: "center" }}>
          <MarkArcoEquilibrio color="#6E2A4A" thickness={1.5} className="mx-auto" style={{ width: 60, height: 60 }} />
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--p-text-muted)" }}>
            <strong style={{ color: "var(--p-burgundy)" }}>Plano preparado por:</strong> Eduardo Barros · Impulso Digital<br />
            <strong style={{ color: "var(--p-burgundy)" }}>Cliente:</strong> Leandro Timóteo · Vida em Equilíbrio · Palmas-TO<br />
            <strong style={{ color: "var(--p-burgundy)" }}>Data:</strong> Maio · 2026 · Versão 1.0
          </p>
          <p style={{ marginTop: 14, fontSize: 11, color: "var(--p-text-muted)", fontStyle: "italic" }}>
            Documento confidencial. Conteúdo derivado de 45 transcrições do cliente, dossiê de 39 concorrentes em Palmas, deep dive do Alivièr SPA, pesquisa de mercado global wellness e visão de negócio destilada do empreendedor.
          </p>
        </section>

      </main>
    </>
  );
}
