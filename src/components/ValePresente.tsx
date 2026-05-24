import { IconArrowRight, MarcaDagua } from "./Icons";

const WA_MSG = encodeURIComponent(
  "Oi Leandro, quero presentear alguém com um vale do Vida em Equilíbrio."
);
const WA_LINK = `https://wa.me/5563848436460?text=${WA_MSG}`;

const MODALIDADES = [
  {
    nome: "Vale Massagem",
    preco: "R$ 180 — 280",
    descricao:
      "Escolhe uma das massagens (Relaxante, Drenagem, Modeladora ou Facial) e presenteia. Beneficiária agenda direto pelo WhatsApp.",
    detalhe: "Validade 6 meses",
  },
  {
    nome: "Vale Crédito",
    preco: "R$ 200 / 400 / 600",
    descricao:
      "Valor flexível em crédito · ela escolhe a massagem ou combina com enhancements no atendimento.",
    detalhe: "Validade 6 meses",
  },
  {
    nome: "Vale Day Premium",
    preco: "R$ 520 — 680",
    descricao:
      "O presente completo. 120 minutos com seis técnicas integradas. Pra quem você quer cuidar de verdade.",
    detalhe: "Validade 6 meses · brinde no 1º atendimento",
    destaque: true,
  },
];

export default function ValePresente() {
  return (
    <section
      id="vale-presente"
      className="relative bg-ve-bg-soft text-ve-cream py-24 md:py-32 overflow-hidden border-t border-[color:var(--ve-line)]"
    >
      <MarcaDagua
        color="#C9B79C"
        opacity={0.05}
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] pointer-events-none"
      />

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="eyebrow text-ve-champagne mb-6">Pra presentear</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              Um cuidado{" "}
              <span className="display-italic text-ve-champagne">de presente</span>.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ve-cream/80 leading-relaxed text-base md:text-lg font-light max-w-xl">
              Aniversário, Dia das Mães, agradecimento, ou só porque ela
              merece. Você escolhe a sessão, paga pelo PIX, e a gente envia
              um vale em PDF editorial (com a sua mensagem incluída) pra
              entregar digital ou impresso. Ela agenda quando quiser.
            </p>
          </div>
        </div>

        {/* Modalidades */}
        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--ve-line)]">
          {MODALIDADES.map((m) => (
            <div
              key={m.nome}
              className={`p-8 md:p-10 ${m.destaque ? "bg-ve-burgundy" : "bg-ve-bg-soft"}`}
            >
              <p className="eyebrow text-ve-champagne mb-3">Modalidade</p>
              <h3 className="display text-2xl md:text-3xl text-ve-cream">
                {m.nome}
              </h3>
              <p className="display text-xl text-ve-champagne mt-2">{m.preco}</p>
              <p className="mt-4 text-ve-cream/85 text-sm leading-relaxed">
                {m.descricao}
              </p>
              <p className="eyebrow text-ve-cream/60 mt-5">{m.detalhe}</p>
            </div>
          ))}
        </div>

        {/* Como funciona */}
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-[color:var(--ve-line)]">
          {[
            { n: "01", t: "Você escolhe", d: "A massagem ou o valor do crédito · combinamos pelo WhatsApp" },
            { n: "02", t: "Paga pelo PIX", d: "À vista · você recebe o vale em até 2h em horário comercial" },
            { n: "03", t: "Entrega", d: "PDF editorial digital · ou imprime e entrega na mão (envelope cravado da marca)" },
            { n: "04", t: "Ela agenda", d: "Beneficiária fala direto comigo pelo WhatsApp · sem fricção" },
          ].map((p) => (
            <div key={p.n} className="bg-ve-bg-soft p-6 md:p-8">
              <p className="display text-3xl text-ve-burgundy">{p.n}</p>
              <p className="display text-lg text-ve-cream mt-3">{p.t}</p>
              <p className="text-ve-cream/70 text-sm mt-2 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="display-italic text-ve-cream/85 text-xl md:text-2xl max-w-2xl mx-auto">
            "Presentear cuidado é uma das formas mais bonitas de dizer obrigada."
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-8"
          >
            Quero presentear alguém
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
