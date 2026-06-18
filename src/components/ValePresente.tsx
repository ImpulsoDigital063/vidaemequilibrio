import { IconArrowRight, IconWhatsApp, MarcaDagua } from "./Icons";
import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";

const WA_MSG = encodeURIComponent(
  "Oii! Quero presentear alguém com um vale do Vida em Equilíbrio. Como funciona?"
);
const WA_LINK = `https://wa.me/5563984843646?text=${WA_MSG}`;

const MODALIDADES = [
  {
    nome: "Vale Massagem",
    preco: "a partir de R$119",
    descricao:
      "Você escolhe uma massagem do catálogo e presenteia. A pessoa agenda quando quiser, na clínica ou em casa.",
    wa: "Oii! Quero garantir um Vale Massagem do Vida em Equilíbrio pra presentear alguém. Como faço?",
  },
  {
    nome: "Vale Crédito",
    preco: "R$200 · R$400 · R$600",
    descricao:
      "Prefere deixar a escolha com ela? Presenteia um valor — ela usa na massagem que quiser, ou completa pra uma mais longa.",
    wa: "Oii! Quero garantir um Vale Crédito do Vida em Equilíbrio pra presentear alguém. Como faço?",
  },
];

const PASSOS = [
  {
    n: "01",
    t: "Você escolhe",
    d: "A massagem ou o valor do crédito — a gente combina pelo WhatsApp.",
  },
  {
    n: "02",
    t: "Paga no PIX",
    d: "À vista. Você recebe o vale em até 2h, em horário comercial.",
  },
  {
    n: "03",
    t: "Recebe o vale",
    d: "Em PDF, com a sua mensagem — pra enviar digital ou imprimir e entregar na mão.",
  },
  {
    n: "04",
    t: "Ela agenda",
    d: "A pessoa presenteada fala direto pelo WhatsApp e marca quando quiser.",
  },
];

export default function ValePresente() {
  return (
    <section
      id="vale-presente"
      className="relative text-ve-cream py-24 md:py-32 overflow-hidden"
    >
      <MarcaDagua
        color="#C9B79C"
        opacity={0.05}
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] pointer-events-none"
      />

      <div className="container-x relative">
        {/* Cabeçalho */}
        <Reveal direction="up" className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="eyebrow text-ve-champagne mb-6">Pra presentear</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              Um cuidado{" "}
              <span className="display-italic text-ve-champagne">de presente</span>.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ve-cream/80 leading-relaxed text-base md:text-lg font-light max-w-xl">
              Aniversário, Dia das Mães ou só porque ela merece — dê de presente
              um tempo de cuidado. Você escolhe a massagem (ou um valor); o resto
              a gente cuida.
            </p>
          </div>
        </Reveal>

        {/* 2 modalidades · cards transparentes com borda (fundo coeso) */}
        <Stagger className="grid gap-5 md:grid-cols-2" step={0.12}>
          {MODALIDADES.map((m) => (
            <StaggerItem
              key={m.nome}
              direction="up"
              distance={28}
              className="flex flex-col border border-ve-champagne/15 p-8 md:p-10 hover:border-ve-champagne/35 transition-colors"
            >
              <p className="eyebrow text-ve-champagne mb-3">Modalidade</p>
              <h3 className="display text-2xl md:text-3xl text-ve-cream">
                {m.nome}
              </h3>
              <p className="display text-xl text-ve-champagne mt-2">{m.preco}</p>
              <p className="mt-4 text-ve-cream/80 text-sm leading-relaxed">
                {m.descricao}
              </p>
              <p className="eyebrow text-ve-cream/55 mt-6">Validade de 6 meses</p>
              <a
                href={`https://wa.me/5563984843646?text=${encodeURIComponent(m.wa)}`}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center justify-center gap-2.5 self-start bg-ve-champagne px-5 py-3 text-sm font-medium text-ve-bg transition-colors hover:bg-ve-cream"
              >
                <IconWhatsApp className="w-4 h-4" />
                Garantir esse vale
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Como funciona · 4 passos limpos */}
        <div className="mt-20">
          <p className="eyebrow text-ve-champagne border-b border-ve-cream/15 pb-4 mb-8">
            Como funciona
          </p>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
            {PASSOS.map((p) => (
              <StaggerItem key={p.n} direction="up" distance={22}>
                <p className="display text-3xl text-ve-champagne/80">{p.n}</p>
                <p className="display text-lg text-ve-cream mt-2">{p.t}</p>
                <p className="text-ve-cream/65 text-sm mt-2 leading-relaxed">
                  {p.d}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* CTA */}
        <Reveal direction="scale" className="mt-20 text-center">
          <p className="display-italic text-ve-cream/85 text-xl md:text-2xl max-w-2xl mx-auto">
            &ldquo;Presentear cuidado é uma das formas mais bonitas de dizer
            obrigada.&rdquo;
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
        </Reveal>
      </div>
    </section>
  );
}
