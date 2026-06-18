// Página interna de curadoria · candidatas de foto pra Massagem Desportiva.
// Temporária — só pra o Eduardo escolher. Apagar depois.
const FOTOS = [
  { n: 1, src: "/img/corredora-orla.jpg", nota: "ATUAL no site · perfil, pôr do sol, orla" },
  { n: 2, src: "/img/_run/r1.jpg", nota: "Colina dourada + vista da cidade · tom quente (recomendada ✓)" },
  { n: 3, src: "/img/_run/r5.jpg", nota: "Pôr do sol na grama · perfil dinâmico" },
  { n: 4, src: "/img/_run/r2.jpg", nota: "Silhueta no topo da rocha · sol explodindo · dramática" },
  { n: 5, src: "/img/heroCorredora-alt.jpg", nota: "Silhueta + skyline · dourada (vertical)" },
];

export default function SelecaoFotos() {
  return (
    <main className="min-h-screen bg-ve-bg text-ve-cream px-5 py-12 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-ve-champagne mb-2">Curadoria · uso interno</p>
        <h1 className="display text-3xl md:text-4xl mb-2">
          Opções de foto — Massagem Desportiva
        </h1>
        <p className="text-ve-cream/70 text-sm mb-10 max-w-2xl">
          Mulher correndo, tom quente (casa com o marrom). Me diz o número que
          você prefere. Recomendação: a <strong className="text-ve-champagne">nº 2</strong>.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {FOTOS.map((f) => (
            <div key={f.n} className="flex flex-col overflow-hidden border border-ve-champagne/15 bg-ve-bg-card">
              <div className="relative aspect-[3/2] overflow-hidden">
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
