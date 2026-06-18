// Página interna de curadoria · candidatas de foto pra Massagem Desportiva.
// Temporária — só pra o Eduardo escolher. Apagar depois.
const FOTOS = [
  { n: 1, src: "/img/_run/n1.jpg", nota: "NÍTIDA · correndo na pista, mulher bem visível, dia (recomendada ✓) · vertical" },
  { n: 2, src: "/img/_run/n7.jpg", nota: "Nítida, rosto visível · MAS ela está parada (não correndo) · vertical" },
  { n: 3, src: "/img/_run/n2.jpg", nota: "Nítida correndo · porém com flare de sol à direita" },
  { n: 4, src: "/img/corredora-orla.jpg", nota: "ATUAL no site · pôr do sol (a que você achou 'no sol')" },
];

export default function SelecaoFotos() {
  return (
    <main className="min-h-screen bg-ve-bg text-ve-cream px-5 py-12 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-ve-champagne mb-2">Curadoria · uso interno</p>
        <h1 className="display text-3xl md:text-4xl mb-2">
          Mulher correndo — opções nítidas
        </h1>
        <p className="text-ve-cream/70 text-sm mb-10 max-w-2xl">
          Real talk: o acervo gratuito é pobre pra "nítida + correndo + horizontal".
          A <strong className="text-ve-champagne">nº 1</strong> é a única realmente
          nítida com a corredora bem visível (mas é vertical — eu ajusto o card pra
          ela caber). Me diz o número, ou se prefere outro caminho.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {FOTOS.map((f) => (
            <div key={f.n} className="flex flex-col overflow-hidden border border-ve-champagne/15 bg-ve-bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.src} alt={`Opção ${f.n}`} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ve-champagne text-ve-bg text-sm font-bold">
                  {f.n}
                </span>
              </div>
              <p className="p-4 text-xs text-ve-cream/75 leading-snug">{f.nota}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
