import Link from "next/link";
import { IconArrowRight, IconWhatsApp, MarkArcoEquilibrio } from "./Icons";
import Reveal from "./motion/Reveal";

function waLink(msg: string) {
  return `https://wa.me/5563984843646?text=${encodeURIComponent(msg)}`;
}

// Conversa de exemplo · voz da marca · zero emoji
const CONVERSA: { side: "in" | "out"; text: string }[] = [
  {
    side: "in",
    text: "Oi! Passo o dia no computador e tô com o pescoço e os ombros travados. Qual massagem vocês indicam?",
  },
  {
    side: "out",
    text: "Oi! Pra essa tensão de tela, a Relaxante de 60 min foca pescoço, ombros e costas. Alivia bem.",
  },
  { side: "in", text: "Perfeito. Consigo amanhã?" },
  {
    side: "out",
    text: "Consigo sim — 14h ou 16h, na clínica ou na sua casa. Qual fica melhor?",
  },
];

function ChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-[28px] border border-ve-text-dark/10 bg-ve-bg shadow-[0_30px_70px_-20px_rgba(44,24,16,0.45)]">
        {/* Header · marca */}
        <div className="flex items-center gap-3 bg-ve-bg-card px-4 py-3 text-ve-cream">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ve-cream/15">
            <MarkArcoEquilibrio color="#F2EBE0" thickness={2.4} className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium leading-tight">Vida em Equilíbrio</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-ve-cream/70">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              online · responde rápido
            </p>
          </div>
        </div>

        {/* Mensagens */}
        <div className="flex flex-col gap-2.5 bg-[#ece4d6] px-4 py-5">
          {CONVERSA.map((m, i) =>
            m.side === "in" ? (
              <div
                key={i}
                className="max-w-[82%] self-start rounded-xl rounded-tl-sm bg-white px-3 py-2 text-[13px] leading-snug text-ve-text-dark shadow-sm"
              >
                {m.text}
              </div>
            ) : (
              <div
                key={i}
                className="max-w-[82%] self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[13px] leading-snug text-ve-text-dark shadow-sm"
              >
                {m.text}
              </div>
            )
          )}
        </div>

        {/* Barra de input · decorativa */}
        <div className="flex items-center gap-2 border-t border-ve-text-dark/10 bg-ve-cream px-3 py-2.5">
          <div className="flex-1 rounded-full bg-white px-4 py-2 text-xs text-ve-text-dark/40">
            Mensagem
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
            <IconArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AjudaCatalogo() {
  return (
    <section className="text-ve-cream py-16 md:py-24">
      <div className="container-x">
        {/* Em dúvida · texto + chat mockup */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="right">
            <p className="eyebrow text-ve-champagne mb-4">Não sabe qual escolher?</p>
            <h2 className="display text-3xl md:text-4xl leading-[1.1] text-ve-cream">
              Me conta o que você está sentindo —{" "}
              <span className="display-italic text-ve-champagne">
                a gente indica a certa.
              </span>
            </h2>
            <p className="mt-5 text-ve-cream/65 text-sm md:text-base leading-relaxed max-w-md">
              Não precisa saber o nome da técnica. Você descreve a dor, a tensão ou
              o cansaço pelo WhatsApp — a gente entende o seu caso e indica a
              massagem que resolve, com horário na clínica ou em casa.
            </p>
            <a
              href={waLink(
                "Oii! Tô em dúvida sobre qual massagem é a melhor pra mim. Pode me ajudar a escolher?"
              )}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-flex items-center gap-2.5 bg-ve-champagne text-ve-bg px-6 py-3.5 text-sm font-medium hover:bg-ve-cream transition-colors"
            >
              <IconWhatsApp className="h-[18px] w-[18px]" />
              Conversar no WhatsApp
            </a>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <ChatMockup />
          </Reveal>
        </div>

        {/* Catálogo · faixa secundária */}
        <Reveal
          direction="up"
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-5 border-t border-ve-cream/15 pt-10"
        >
          <div className="max-w-xl">
            <p className="eyebrow text-ve-champagne mb-2">Prefere decidir com calma?</p>
            <p className="display text-xl md:text-2xl text-ve-cream leading-tight">
              Todas as massagens e os preços, num lugar só.
            </p>
            <p className="mt-2 text-ve-cream/65 text-sm leading-relaxed">
              Compare as opções, veja os adicionais (pedras, vela, bambu, ventosa)
              e baixe o PDF pra olhar quando quiser.
            </p>
          </div>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-medium text-ve-champagne hover:gap-3 transition-all whitespace-nowrap"
          >
            Abrir o catálogo
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
