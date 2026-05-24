import LogoVariacaoA, { MarkArcoEquilibrio as GlifoArcoA } from "@/components/logos/LogoVariacaoA";
import LogoVariacaoB, { GlifoMacronB } from "@/components/logos/LogoVariacaoB";
import LogoVariacaoC, { GlifoCurvaC } from "@/components/logos/LogoVariacaoC";

export const metadata = {
  title: "Logo Variações · Conceito 3 · Vida em Equilíbrio",
  robots: { index: false, follow: false },
};

const VARIACOES = [
  {
    n: "A",
    nome: "Arco + Ponto (refinado)",
    descricao:
      "Refinamento do Conceito 3 original. Arco mais sutil, ponto âncora mais discreto, wordmark maior e respirado. Mantém a referência Aman mas em proporções mais editoriais. Conserva o gesto de 'pausa + presença'.",
    racional:
      "Se você quer manter o equilíbrio formal entre símbolo e palavra. O arco e o ponto se tornam uma assinatura reconhecível em 0,5s, mas sem competir com o wordmark.",
    Logo: LogoVariacaoA,
    Glifo: GlifoArcoA,
  },
  {
    n: "B",
    nome: "Macron flutuante (Aman ĀMĀN style)",
    descricao:
      "Sem glifo separado. Apenas um macron (linha horizontal fina) flutuando acima do wordmark, centralizado. Minimalismo absoluto. A letra do wordmark vira o ponto âncora visual.",
    racional:
      "Se você quer o máximo de pureza editorial. É a opção mais 'apothecary' (Anatomē, Aman, Susanne Kaufmann). Funciona excepcionalmente bem em papelaria e impresso.",
    Logo: LogoVariacaoB,
    Glifo: GlifoMacronB,
  },
  {
    n: "C",
    nome: "Curva orgânica (gesto da mão)",
    descricao:
      "Uma única curva contínua orgânica, sem ponto, sem extras. Evoca o gesto da manobra de massagem — o movimento contínuo da mão deslizando. Minimalismo japonês puro.",
    racional:
      "Se você quer o glifo mais simbólico e expressivo. A curva é metafórica (massagem, respiração, fluxo) sem ser literal (não é flor, mão, gota). É a opção mais autoral.",
    Logo: LogoVariacaoC,
    Glifo: GlifoCurvaC,
  },
];

export default function LogoPreviewV2() {
  return (
    <main className="min-h-screen bg-ve-bg text-ve-cream py-16">
      <div className="container-x">
        <header className="mb-16 max-w-3xl">
          <p className="eyebrow text-ve-champagne mb-4">
            Conceito 3 escolhido · 3 variações de execução
          </p>
          <h1 className="display text-4xl md:text-6xl leading-[1.05]">
            Refinamentos do{" "}
            <span className="display-italic text-ve-champagne">
              glifo cinemático
            </span>
            .
          </h1>
          <p className="mt-6 text-ve-cream/70 font-light leading-relaxed">
            Mesma direção (wordmark + glifo abstrato), três execuções distintas.
            Cada variação em dark warm, cream e burgundy + favicon isolado +
            simulação do header.
          </p>
        </header>

        <div className="space-y-24">
          {VARIACOES.map((v) => {
            const { Logo, Glifo } = v;
            return (
              <article key={v.n}>
                {/* cabeçalho */}
                <div className="grid md:grid-cols-12 gap-8 mb-10">
                  <div className="md:col-span-2">
                    <p className="display text-7xl text-ve-burgundy leading-none">
                      {v.n}
                    </p>
                  </div>
                  <div className="md:col-span-10">
                    <h2 className="display text-3xl md:text-4xl text-ve-cream">
                      {v.nome}
                    </h2>
                    <p className="mt-3 text-ve-cream/75 leading-relaxed max-w-2xl font-light">
                      {v.descricao}
                    </p>
                    <p className="mt-4 text-ve-champagne text-sm italic">
                      {v.racional}
                    </p>
                  </div>
                </div>

                {/* mockup DARK */}
                <div className="bg-ve-bg-card border border-[color:var(--ve-line)] p-12 md:p-20 flex items-center justify-center min-h-[280px]">
                  <Logo
                    color="#F2EBE0"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* mockup LIGHT */}
                <div className="bg-ve-cream p-12 md:p-20 flex items-center justify-center min-h-[280px] border-t border-ve-text-dark/10">
                  <Logo
                    color="#2C1810"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* mockup BURGUNDY */}
                <div className="bg-ve-burgundy p-12 md:p-20 flex items-center justify-center min-h-[280px]">
                  <Logo
                    color="#C9B79C"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* favicon */}
                <div className="mt-10 grid grid-cols-3 gap-px bg-[color:var(--ve-line)]">
                  <div className="bg-ve-bg-card aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <Glifo color="#F2EBE0" className="w-20 h-20 mx-auto" />
                      <p className="eyebrow text-ve-muted mt-4">
                        Favicon dark
                      </p>
                    </div>
                  </div>
                  <div className="bg-ve-cream aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <Glifo color="#2C1810" className="w-20 h-20 mx-auto" />
                      <p className="eyebrow text-ve-terracota mt-4">
                        Favicon light
                      </p>
                    </div>
                  </div>
                  <div className="bg-ve-burgundy aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <Glifo color="#C9B79C" className="w-20 h-20 mx-auto" />
                      <p className="eyebrow text-ve-champagne mt-4">
                        Champagne
                      </p>
                    </div>
                  </div>
                </div>

                {/* simulação header */}
                <div className="mt-10">
                  <p className="eyebrow text-ve-muted mb-3">
                    Simulação · header do site
                  </p>
                  <div className="bg-ve-bg border border-[color:var(--ve-line)]">
                    <div className="container-x flex items-center justify-between py-5">
                      <Logo color="#F2EBE0" className="h-10 w-auto" />
                      <nav className="hidden md:flex items-center gap-6 text-sm text-ve-cream/70">
                        <span>Massagens</span>
                        <span>Quem cuida</span>
                        <span>Onde acontece</span>
                        <span className="text-ve-champagne border border-ve-cream/40 px-4 py-2">
                          Conversar
                        </span>
                      </nav>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* próximo passo */}
        <div className="mt-24 p-10 bg-ve-bg-soft border border-[color:var(--ve-line)]">
          <p className="eyebrow text-ve-champagne mb-3">
            Próximo passo
          </p>
          <p className="display text-2xl md:text-3xl text-ve-cream leading-tight max-w-2xl">
            Escolha uma das três variações pra eu aplicar no site como logo
            final, ou peça refinamento específico.
          </p>
        </div>
      </div>
    </main>
  );
}
