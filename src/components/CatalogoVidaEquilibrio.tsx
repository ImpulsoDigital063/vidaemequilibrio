"use client";

import Image from "next/image";
import LogoVariacaoA, { MarcaDagua, MarkArcoEquilibrio } from "./logos/LogoVariacaoA";

// =====================================================================
// CATÁLOGO VIDA EM EQUILÍBRIO · entrega pra cliente (WhatsApp + impresso)
// 14 páginas · paleta Editorial Tungsten · Manrope mono-font
// =====================================================================

const FRASE_ANCORA = "“Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.”  —  Provérbios 16:3";

const MASSAGENS = [
  {
    nome: "Day Premium Equilíbrio",
    eyebrow: "Programa completo · ~120 min",
    img: "/img/stillCandle.png",
    descricao: "O programa completo. Seis camadas de cuidado em sequência pensada, devolvendo presença a cada parte do corpo. Pra quem precisa de um intervalo que não negocia.",
    composicao: [
      "Esfoliante corporal · abertura · renova textura da pele",
      "Bolinha massageadora nos pés · ativa reflexologia",
      "Pedras quentes de basalto · calor profundo, dilata músculo tenso",
      "Vela aromática quente · cera morna que hidrata e perfuma",
      "Bambu terapêutico · trabalha contorno e fáscia",
      "Ventosa de finalização · selo do programa, mobiliza fáscia",
    ],
    para: "Quem acumulou semanas sem parar e precisa de um cuidado que abrace inteiro.",
    destaque: true,
  },
  {
    nome: "Massagem Relaxante",
    eyebrow: "Sessão clássica · ~60 min",
    img: "/img/heroHands.png",
    descricao: "Sessão de abertura. Manobras clássicas de deslizamento e amassamento, sem pressa. Quando o corpo não pede técnica específica, só precisa de um intervalo.",
    composicao: [
      "Deslizamento · manobra de abertura, aquece o tecido",
      "Amassamento · trabalha musculatura em camadas",
      "Fricção e percussão leve · tonifica camada superficial",
      "Finalização · devolve o corpo a um estado calmo e integrado",
    ],
    para: "Quem está acumulando tensão sem dor específica · quem quer começar uma prática de autocuidado.",
  },
  {
    nome: "Drenagem Linfática",
    eyebrow: "Massagem terapêutica · ~60 min",
    img: "/img/stillBamboo.png",
    descricao: "O sistema linfático trabalha em silêncio. Quando engasga, o corpo avisa em inchaço, peso, sensação de roupa que aperta. A Drenagem devolve fluidez — pressão firme, ritmo contínuo, manobras que respeitam o caminho natural do líquido.",
    composicao: [
      "Bombeamento ganglionar · abre os pontos de filtração",
      "Deslizamento contínuo no sentido do retorno",
      "Bolinha massageadora nos pés · ativa pontos finais",
      "Compressão progressiva em membros",
    ],
    para: "Quem acorda com rosto ou pernas inchadas · pós-cirúrgico (com indicação médica) · retenção em períodos específicos do ciclo.",
  },
  {
    nome: "Massagem Desportiva",
    eyebrow: "Massagem terapêutica · ~60 min",
    img: "/img/heroCorredora.jpg",
    descricao: "Treino bom é o que tem recovery bom. Desenhada pra corredora amadora — pré-prova prepara a musculatura, pós-prova acelera o recovery. Trabalho focal nas regiões que a corrida castiga.",
    composicao: [
      "Avaliação rápida · onde focar baseado no treino recente",
      "Liberação miofascial · solta aderências entre fáscias",
      "Pressão focal nos pontos-gatilho",
      "Drenagem ascendente · remove metabólitos do exercício",
    ],
    para: "Corredora amadora com prova marcada (pré-prova) · acabou de correr (pós-prova) · quem treina constante e quer manutenção.",
  },
  {
    nome: "Massagem Modeladora",
    eyebrow: "Massagem estética · ~60 min",
    img: "/img/stillHotStones.png",
    descricao: "Modelar é trabalhar tecido com técnica, ritmo firme e pressão direcionada, em série consistente. Pra quem entende que mudança vem com frequência, não com sessão única.",
    composicao: [
      "Amassamento profundo · manobra-base, mobiliza gordura",
      "Pinçamento e rolamento · quebra fibrose, melhora textura",
      "Percussão controlada · estimula circulação local",
      "Manobras de finalização · acalma o tecido trabalhado",
    ],
    para: "Quem quer trabalhar contorno em regiões específicas · quem busca constância (não promessa de antes-e-depois mágico).",
  },
  {
    nome: "Massagem Facial",
    eyebrow: "Massagem estética · ~45 min",
    img: "/img/stillEsfoliante.png",
    descricao: "O rosto carrega tensão que a gente nem percebe que carrega. Mandíbula travada, contração entre as sobrancelhas, peso no olhar. A Facial trabalha essas regiões com manobras precisas.",
    composicao: [
      "Manobras de drenagem facial · reduz inchaço",
      "Liberação de ATM · alivia tensão da mandíbula",
      "Pressão suave no contorno do olho · reduz peso no olhar",
      "Modelagem facial leve · devolve cor e viço",
    ],
    para: "Quem trava a mandíbula sem perceber (ATM) · quem tem cefaleia tensional · quem quer somar ao Day Premium.",
  },
];

const ENHANCEMENTS = [
  { nome: "Esfoliante corporal", nota: "Brinde no 1º atendimento" },
  { nome: "Pedras quentes" },
  { nome: "Vela aromática" },
  { nome: "Bambu terapêutico" },
  { nome: "Ventosa de finalização" },
  { nome: "Bolinha massageadora nos pés" },
];

export default function CatalogoVidaEquilibrio() {
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
          --p-champagne: #C9B79C;
          --p-champagne-deep: #9F8B6A;
          --p-terracota: #8B6342;
          --p-tungsten: #1A1310;
          --p-border-soft: rgba(61, 37, 23, 0.10);
          --p-font: "Manrope", -apple-system, "Segoe UI", sans-serif;
        }

        body { background: var(--p-bg) !important; color: var(--p-text) !important; }

        .cat-doc {
          font-family: var(--p-font);
          font-weight: 400;
          line-height: 1.7;
          color: var(--p-text);
          background: var(--p-bg);
          letter-spacing: -0.003em;
        }

        .cat-doc h1, .cat-doc h2, .cat-doc h3 {
          font-family: var(--p-font);
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.018em;
          color: var(--p-text);
        }

        .cat-doc p { margin: 0 0 18px; }
        .cat-doc strong { color: var(--p-burgundy); font-weight: 500; }

        .cat-doc ul { margin: 12px 0 22px; padding-left: 22px; list-style: none; }
        .cat-doc li {
          margin: 10px 0;
          line-height: 1.6;
          position: relative;
          padding-left: 4px;
        }
        .cat-doc li::before {
          content: "·";
          position: absolute;
          left: -14px;
          color: var(--p-burgundy);
          font-weight: 700;
          font-size: 1.2em;
        }

        .cat-page {
          page-break-after: always;
          min-height: calc(100vh - 96px);
          display: flex;
          flex-direction: column;
        }

        .cat-eyebrow {
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--p-champagne-deep);
        }

        @page {
          size: A4;
          margin: 22mm 18mm 24mm 18mm;
          @top-left {
            content: "Vida em Equilíbrio · Catálogo";
            font-family: var(--p-font);
            font-weight: 500;
            font-size: 8pt;
            color: var(--p-text);
            padding-bottom: 6mm;
          }
          @top-right {
            content: "Massagem terapêutica feminina · Palmas-TO";
            font-family: var(--p-font);
            font-size: 7.5pt;
            color: var(--p-champagne-deep);
            padding-bottom: 6mm;
          }
          @bottom-center {
            content: "“Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.”  —  Provérbios 16:3";
            font-family: var(--p-font);
            font-weight: 300;
            font-size: 8.5pt;
            color: var(--p-champagne-deep);
            padding-top: 7mm;
          }
          @bottom-right {
            content: counter(page);
            font-family: var(--p-font);
            font-size: 7.5pt;
            color: var(--p-text-muted);
            padding-top: 8mm;
          }
        }

        @media print {
          .no-print { display: none !important; }
          body, .cat-doc {
            background: var(--p-bg) !important;
            color: var(--p-text) !important;
            font-size: 10.5pt;
          }
          .cat-doc h1 { font-size: 38pt; page-break-after: avoid; }
          .cat-doc h2 { font-size: 22pt; page-break-after: avoid; }
          .cat-doc h3 { font-size: 13pt; page-break-after: avoid; }
          .cat-doc p, .cat-doc li { font-size: 10.5pt; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div className="no-print" style={{ position: "fixed", top: 16, right: 16, zIndex: 50, display: "flex", gap: 8 }}>
        <a href="/" style={{ background: "white", border: "1px solid var(--p-border-soft)", padding: "10px 16px", borderRadius: 8, fontSize: 13, color: "var(--p-text)", textDecoration: "none" }}>← Site</a>
        <button type="button" onClick={() => window.print()} style={{ background: "var(--p-burgundy)", color: "#F2EBE0", border: "none", padding: "11px 22px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Imprimir · PDF</button>
      </div>

      <main className="cat-doc" style={{ maxWidth: 720, margin: "0 auto", padding: "40px 30px 60px" }}>

        {/* ═══════════════════ CAPA ═══════════════════ */}
        <section className="cat-page" style={{ justifyContent: "space-between", padding: "30px 20px", position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at top, rgba(201, 183, 156, 0.18) 0%, rgba(242, 235, 224, 0) 60%), radial-gradient(ellipse at bottom, rgba(110, 42, 74, 0.06) 0%, rgba(242, 235, 224, 0) 50%)" }}>
          <MarcaDagua color="#C9B79C" opacity={0.06} style={{ position: "absolute", right: -120, top: "25%", width: 620, pointerEvents: "none" }} />

          <header style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <LogoVariacaoA color="#3D2517" showTagline={false} className="h-14 w-auto" />
          </header>

          <div style={{ position: "relative", textAlign: "center" }}>
            <p className="cat-eyebrow" style={{ marginBottom: 18 }}>Catálogo · 2026</p>
            <h1 style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: "-0.025em", color: "var(--p-text)", marginBottom: 16 }}>
              Cinco massagens<br />
              <span style={{ color: "var(--p-burgundy)" }}>dedicadas.</span>
            </h1>
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #6E2A4A 0%, #C9B79C 100%)", borderRadius: 2, margin: "20px auto" }} />
            <p style={{ fontSize: 16, color: "var(--p-text-soft)", maxWidth: 420, margin: "0 auto", lineHeight: 1.6, fontWeight: 300 }}>
              Pra escolher o cuidado que seu corpo está pedindo hoje. Sem pressa, sem protocolo fixo. Uma cliente por turno.
            </p>
          </div>

          <div style={{ position: "relative", textAlign: "center", fontSize: 11.5, color: "var(--p-text-muted)" }}>
            <p style={{ margin: 0 }}>Operado por Leandro Timóteo · Palmas-TO</p>
            <p style={{ margin: "4px 0 0", fontSize: 10.5 }}>Clínica parceira · Setor Norte · ou atendimento em domicílio</p>
          </div>
        </section>

        {/* ═══════════════════ QUEM CUIDA ═══════════════════ */}
        <section className="cat-page" style={{ justifyContent: "center", paddingTop: 40 }}>
          <p className="cat-eyebrow" style={{ marginBottom: 14 }}>Quem cuida</p>
          <h2 style={{ fontSize: 36, marginBottom: 28, maxWidth: 480 }}>
            Leandro Timóteo.<br />
            <span style={{ color: "var(--p-burgundy)" }}>Massoterapeuta dedicado ao cuidado feminino.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 12 }}>
            <div style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden", borderRadius: 4 }}>
              <Image src="/img/stillManifesto.png" alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div style={{ paddingTop: 8 }}>
              <p style={{ fontSize: 13, lineHeight: 1.75 }}>Antes de abrir o Vida em Equilíbrio, foram anos me preparando — em estúdio, em sala de aula, no toque que insiste até virar técnica.</p>
              <p style={{ fontSize: 13, lineHeight: 1.75 }}>Hoje a clínica está pronta, o método está pronto, e o tempo agora é seu. Atendo uma cliente por turno, em clínica parceira ou em domicílio, sempre com a mesma escuta antes da manobra.</p>
              <p style={{ fontSize: 13, lineHeight: 1.75 }}>É um cuidado profissional, presente, e exclusivo para mulheres — porque é nessa direção que a minha técnica ganhou profundidade.</p>
            </div>
          </div>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, paddingTop: 24, borderTop: "1px solid var(--p-border-soft)" }}>
            <div><p style={{ fontSize: 22, fontWeight: 600, color: "var(--p-burgundy)", margin: 0 }}>Privativo</p><p className="cat-eyebrow" style={{ marginTop: 4 }}>Uma cliente por turno</p></div>
            <div><p style={{ fontSize: 22, fontWeight: 600, color: "var(--p-burgundy)", margin: 0 }}>Híbrido</p><p className="cat-eyebrow" style={{ marginTop: 4 }}>Clínica e domicílio</p></div>
            <div><p style={{ fontSize: 22, fontWeight: 600, color: "var(--p-burgundy)", margin: 0 }}>Exclusivo</p><p className="cat-eyebrow" style={{ marginTop: 4 }}>Público feminino</p></div>
          </div>
        </section>

        {/* ═══════════════════ COMO FUNCIONA ═══════════════════ */}
        <section className="cat-page" style={{ justifyContent: "center", paddingTop: 40 }}>
          <p className="cat-eyebrow" style={{ marginBottom: 14 }}>Como funciona</p>
          <h2 style={{ fontSize: 36, marginBottom: 28, maxWidth: 480 }}>
            Você chega <span style={{ color: "var(--p-burgundy)" }}>decidida</span>.
          </h2>

          {[
            { n: "01", t: "Você manda mensagem no WhatsApp", d: "A primeira resposta é da nossa equipe de atendimento. Conta o que seu corpo está pedindo — a gente sugere a massagem que encaixa." },
            { n: "02", t: "Combinamos a massagem, o local e o horário", d: "Clínica parceira (Setor Norte) ou domicílio. Eu confirmo a agenda pessoalmente antes de fechar." },
            { n: "03", t: "Você chega · uma cliente por turno", d: "Sem corredor de espera, sem sobreposição. O tempo do atendimento é só seu. No primeiro atendimento, esfoliante corporal por conta da casa." },
            { n: "04", t: "Eu escuto antes da manobra", d: "Cada sessão é desenhada caso a caso — não protocolo fixo. A massagem que sai responde ao que seu corpo está pedindo naquele dia." },
          ].map((p) => (
            <div key={p.n} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 20, padding: "18px 0", borderBottom: "1px solid var(--p-border-soft)" }}>
              <p style={{ fontSize: 26, fontWeight: 600, color: "var(--p-burgundy)", margin: 0, lineHeight: 1 }}>{p.n}</p>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{p.t}</h3>
                <p style={{ fontSize: 12, color: "var(--p-text-soft)", marginTop: 4, marginBottom: 0, lineHeight: 1.65 }}>{p.d}</p>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 28, padding: "16px 20px", background: "var(--p-bg-card)", borderLeft: "3px solid var(--p-champagne)", borderRadius: 4 }}>
            <p style={{ fontSize: 12, color: "var(--p-text-soft)", margin: 0, fontStyle: "italic" }}>
              Os valores são compartilhados no WhatsApp — cada agenda é pensada individualmente.
            </p>
          </div>
        </section>

        {/* ═══════════════════ MASSAGENS (uma página cada) ═══════════════════ */}
        {MASSAGENS.map((m, i) => (
          <section key={m.nome} className="cat-page" style={{ paddingTop: 30 }}>
            <p className="cat-eyebrow" style={{ marginBottom: 10 }}>{m.eyebrow}</p>
            <h2 style={{ fontSize: 36, color: m.destaque ? "var(--p-burgundy)" : "var(--p-text)", marginBottom: 20 }}>
              {m.nome}
            </h2>

            <div style={{ aspectRatio: "16/8", position: "relative", overflow: "hidden", borderRadius: 4, marginBottom: 24 }}>
              <Image src={m.img} alt="" fill className="object-cover" sizes="700px" style={{ filter: m.destaque ? "none" : "brightness(0.95)" }} />
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--p-text)" }}>{m.descricao}</p>

            <h3 style={{ fontSize: 13, fontWeight: 600, marginTop: 28, marginBottom: 8, color: "var(--p-burgundy)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Composição
            </h3>
            <ul style={{ marginTop: 4 }}>
              {m.composicao.map((c) => (<li key={c} style={{ fontSize: 12.5 }}>{c}</li>))}
            </ul>

            <div style={{ marginTop: 24, padding: "14px 18px", background: "var(--p-bg-card)", borderLeft: "3px solid var(--p-terracota)", borderRadius: 4 }}>
              <p className="cat-eyebrow" style={{ marginBottom: 6, color: "var(--p-terracota)" }}>Indicada para</p>
              <p style={{ fontSize: 12.5, color: "var(--p-text)", margin: 0, lineHeight: 1.6 }}>{m.para}</p>
            </div>

            <p style={{ fontSize: 10.5, textAlign: "center", marginTop: "auto", paddingTop: 24, color: "var(--p-text-muted)" }}>
              {i + 1} de {MASSAGENS.length} · agendamento pelo WhatsApp
            </p>
          </section>
        ))}

        {/* ═══════════════════ ENHANCEMENTS ═══════════════════ */}
        <section className="cat-page" style={{ paddingTop: 40 }}>
          <p className="cat-eyebrow" style={{ marginBottom: 14 }}>Adicionais</p>
          <h2 style={{ fontSize: 36, marginBottom: 16 }}>
            Compose sua massagem <span style={{ color: "var(--p-burgundy)" }}>com enhancements.</span>
          </h2>
          <p style={{ fontSize: 14, color: "var(--p-text-soft)", marginBottom: 28, maxWidth: 520 }}>
            Qualquer massagem pode receber enhancements adicionais · a composição é decidida na conversa antes do atendimento.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {ENHANCEMENTS.map((e) => (
              <div key={e.nome} style={{ padding: "20px 22px", background: "var(--p-bg-card)", borderRadius: 4 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--p-text)", margin: 0 }}>{e.nome}</p>
                {e.nota && (<p className="cat-eyebrow" style={{ color: "var(--p-burgundy)", marginTop: 6 }}>{e.nota}</p>)}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, padding: "20px 22px", background: "var(--p-burgundy)", color: "#F2EBE0", borderRadius: 4 }}>
            <p className="cat-eyebrow" style={{ color: "#C9B79C", marginBottom: 8 }}>Brinde de boas-vindas</p>
            <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6 }}>
              No <strong style={{ color: "#C9B79C" }}>primeiro atendimento</strong>, esfoliante corporal por conta da casa. É o jeito de te receber.
            </p>
          </div>
        </section>

        {/* ═══════════════════ VALE-PRESENTE ═══════════════════ */}
        <section className="cat-page" style={{ paddingTop: 40 }}>
          <p className="cat-eyebrow" style={{ marginBottom: 14 }}>Pra presentear</p>
          <h2 style={{ fontSize: 36, marginBottom: 16 }}>
            Um cuidado <span style={{ color: "var(--p-burgundy)" }}>de presente.</span>
          </h2>
          <p style={{ fontSize: 14, color: "var(--p-text-soft)", marginBottom: 28, maxWidth: 540 }}>
            Aniversário, Dia das Mães, agradecimento, ou só porque ela merece. Você escolhe a sessão, paga pelo PIX, e a gente envia um vale em PDF editorial (com a sua mensagem incluída) pra entregar digital ou impresso. Ela agenda quando quiser.
          </p>

          {[
            { nome: "Vale Massagem", descricao: "Presenteia uma massagem específica do catálogo. Validade 6 meses." },
            { nome: "Vale Crédito", descricao: "Valor flexível em crédito. Beneficiária escolhe a massagem ou combina com enhancements no atendimento. Validade 6 meses." },
            { nome: "Vale Day Premium", descricao: "O presente completo. 120 minutos com seis técnicas integradas. Pra quem você quer cuidar de verdade. Validade 6 meses + brinde no 1º atendimento.", destaque: true },
          ].map((v) => (
            <div key={v.nome} style={{ padding: "18px 22px", marginBottom: 12, background: v.destaque ? "var(--p-burgundy)" : "var(--p-bg-card)", color: v.destaque ? "#F2EBE0" : "var(--p-text)", borderRadius: 4 }}>
              <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{v.nome}</p>
              <p style={{ fontSize: 12, marginTop: 6, marginBottom: 0, lineHeight: 1.6, opacity: 0.9 }}>{v.descricao}</p>
            </div>
          ))}

          <p style={{ fontSize: 11, color: "var(--p-text-muted)", marginTop: 18, textAlign: "center", fontStyle: "italic" }}>
            Valores compartilhados no WhatsApp · vale editorial em PDF com mensagem personalizada.
          </p>
        </section>

        {/* ═══════════════════ CONTATO + ENDEREÇO ═══════════════════ */}
        <section className="cat-page" style={{ justifyContent: "space-between", paddingTop: 30 }}>
          <div>
            <p className="cat-eyebrow" style={{ marginBottom: 14 }}>Contato e endereço</p>
            <h2 style={{ fontSize: 36, marginBottom: 28 }}>
              Vamos <span style={{ color: "var(--p-burgundy)" }}>conversar</span>.
            </h2>

            <div style={{ marginBottom: 32 }}>
              <p className="cat-eyebrow" style={{ color: "var(--p-burgundy)", marginBottom: 6 }}>WhatsApp</p>
              <p style={{ fontSize: 24, fontWeight: 600, color: "var(--p-text)", margin: 0 }}>(63) 98484-3646</p>
              <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginTop: 4 }}>Atendimento por mensagem · respondido em até 12h em dias úteis.</p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p className="cat-eyebrow" style={{ color: "var(--p-burgundy)", marginBottom: 6 }}>Instagram</p>
              <p style={{ fontSize: 16, fontWeight: 500, margin: 0 }}>@timoteoofficial.__</p>
              <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginTop: 4 }}>Migração pra @vidaemequilibrio.palmas em curso.</p>
            </div>

            <div style={{ padding: "20px 24px", background: "var(--p-bg-card)", borderLeft: "3px solid var(--p-champagne)", borderRadius: 4 }}>
              <p className="cat-eyebrow" style={{ color: "var(--p-champagne-deep)", marginBottom: 8 }}>Clínica parceira</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--p-text)", margin: 0 }}>CYOX Centro de Estética Avançada</p>
              <p style={{ fontSize: 12, color: "var(--p-text-soft)", marginTop: 6, marginBottom: 0, lineHeight: 1.65 }}>
                ACNO 01, Rua O1, LT 06, Sala 01<br />
                Setor Norte · Palmas-TO
              </p>
              <p style={{ fontSize: 11, color: "var(--p-text-muted)", marginTop: 10, marginBottom: 0 }}>
                Endereço exato e instruções de chegada são reforçados na confirmação do WhatsApp.
              </p>
            </div>

            <div style={{ marginTop: 24 }}>
              <p className="cat-eyebrow" style={{ color: "var(--p-burgundy)", marginBottom: 6 }}>Atendimento em domicílio</p>
              <p style={{ fontSize: 13, color: "var(--p-text)", margin: 0, lineHeight: 1.65 }}>
                Plano Sul, Plano Norte e Aurenys. Levo macas portáteis e produtos profissionais.
              </p>
            </div>
          </div>

          <footer style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--p-border-soft)", textAlign: "center" }}>
            <MarkArcoEquilibrio color="#6E2A4A" thickness={1.8} style={{ width: 44, height: 44, margin: "0 auto 12px" }} />
            <p style={{ fontSize: 11, color: "var(--p-text-muted)", margin: 0 }}>
              Vida em Equilíbrio · Massagem terapêutica feminina · Palmas-TO · 2026
            </p>
            <p style={{ fontSize: 10, color: "var(--p-champagne-deep)", marginTop: 6, fontStyle: "italic" }}>
              {FRASE_ANCORA}
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
