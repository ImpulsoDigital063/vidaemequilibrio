import LogoConceito1 from "@/components/logos/LogoConceito1";
import LogoConceito2, { MonogramaVE } from "@/components/logos/LogoConceito2";
import LogoConceito3, { GlifoArco } from "@/components/logos/LogoConceito3";

export const metadata = {
  title: "Logo Preview · Vida em Equilíbrio",
  robots: { index: false, follow: false },
};

const CONCEITOS = [
  {
    n: "01",
    nome: "Wordmark Serif Puro",
    descricao:
      "Só tipografia. 'vida em equilíbrio' em serif fine-line lower-case com italic alternates. Linha editorial sutil abaixo. Premium magazine vibe — sem ornamentação, sem símbolo.",
    inspiracao: "Bamford · Susanne Kaufmann · Aman",
    Logo: LogoConceito1,
    isolado: null,
  },
  {
    n: "02",
    nome: "Wordmark + Monograma 've'",
    descricao:
      "Monograma 've' em círculo fino + wordmark + etiqueta tracked. Funciona como favicon isolado e como selo de papelaria. Marca consolidada com identidade tangível.",
    inspiracao: "Renata França 'FR' · Aesop · Heyday",
    Logo: LogoConceito2,
    isolado: MonogramaVE,
  },
  {
    n: "03",
    nome: "Wordmark + Glifo Cinemático",
    descricao:
      "Arco sutil + ponto âncora acima do wordmark. Evoca pausa, respiração, equilíbrio — sem cair em símbolo concreto (sem flor, sem mão, sem coração). Minimalismo japonês contemporâneo.",
    inspiracao: "Aman monograma · minimalismo editorial japonês",
    Logo: LogoConceito3,
    isolado: GlifoArco,
  },
];

export default function LogoPreviewPage() {
  return (
    <main className="min-h-screen bg-ve-bg text-ve-cream py-16">
      <div className="container-x">
        <header className="mb-16 max-w-3xl">
          <p className="eyebrow text-ve-champagne mb-4">
            Preview interno · não publicado
          </p>
          <h1 className="display text-4xl md:text-6xl leading-[1.05]">
            Três conceitos de logo{" "}
            <span className="display-italic text-ve-champagne">
              pra Vida em Equilíbrio
            </span>
            .
          </h1>
          <p className="mt-6 text-ve-cream/70 font-light leading-relaxed">
            Cada conceito explorado em dark warm (uso principal · header,
            hero) e cream (uso em seções de contraste). Todos em SVG escalável,
            renderizando com Fraunces (mesma fonte do site).
          </p>
        </header>

        <div className="space-y-24">
          {CONCEITOS.map((c) => {
            const { Logo, isolado: Isolado } = c;
            return (
              <article key={c.n}>
                {/* cabeçalho */}
                <div className="grid md:grid-cols-12 gap-8 mb-10">
                  <div className="md:col-span-2">
                    <p className="display text-7xl text-ve-burgundy leading-none">
                      {c.n}
                    </p>
                  </div>
                  <div className="md:col-span-10">
                    <h2 className="display text-3xl md:text-4xl text-ve-cream">
                      {c.nome}
                    </h2>
                    <p className="mt-3 text-ve-cream/75 leading-relaxed max-w-2xl font-light">
                      {c.descricao}
                    </p>
                    <p className="eyebrow text-ve-champagne mt-4">
                      Inspiração: {c.inspiracao}
                    </p>
                  </div>
                </div>

                {/* mockup DARK */}
                <div className="bg-ve-bg-card border border-[color:var(--ve-line)] p-12 md:p-20 flex items-center justify-center min-h-[260px]">
                  <Logo
                    color="#F2EBE0"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* mockup LIGHT */}
                <div className="bg-ve-cream p-12 md:p-20 flex items-center justify-center min-h-[260px] border-t border-ve-text-dark/10">
                  <Logo
                    color="#2C1810"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* mockup CHAMPAGNE accent */}
                <div className="bg-ve-burgundy p-12 md:p-20 flex items-center justify-center min-h-[260px]">
                  <Logo
                    color="#C9B79C"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>

                {/* versão isolada (favicon) se houver */}
                {Isolado && (
                  <div className="mt-10 grid grid-cols-3 gap-px bg-[color:var(--ve-line)]">
                    <div className="bg-ve-bg-card aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <Isolado color="#F2EBE0" className="w-20 h-20 mx-auto" />
                        <p className="eyebrow text-ve-muted mt-4">
                          Favicon dark
                        </p>
                      </div>
                    </div>
                    <div className="bg-ve-cream aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <Isolado color="#2C1810" className="w-20 h-20 mx-auto" />
                        <p className="eyebrow text-ve-terracota mt-4">
                          Favicon light
                        </p>
                      </div>
                    </div>
                    <div className="bg-ve-burgundy aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <Isolado color="#C9B79C" className="w-20 h-20 mx-auto" />
                        <p className="eyebrow text-ve-champagne mt-4">
                          Champagne
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* aplicação simulada: header do site */}
                <div className="mt-10">
                  <p className="eyebrow text-ve-muted mb-3">
                    Simulação · header do site
                  </p>
                  <div className="bg-ve-bg border border-[color:var(--ve-line)]">
                    <div className="container-x flex items-center justify-between py-5">
                      <Logo color="#F2EBE0" className="h-7 w-auto" />
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

        {/* nota de decisão */}
        <div className="mt-24 p-10 bg-ve-bg-soft border border-[color:var(--ve-line)]">
          <p className="eyebrow text-ve-champagne mb-3">
            Próximo passo
          </p>
          <p className="display text-2xl md:text-3xl text-ve-cream leading-tight max-w-2xl">
            Escolha um dos três pra eu aplicar no site, ou peça refinamentos
            específicos em qualquer um deles.
          </p>
        </div>
      </div>
    </main>
  );
}
