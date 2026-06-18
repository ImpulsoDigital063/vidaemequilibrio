import Image from "next/image";
import { IconWhatsApp, IconArrowRight } from "./Icons";
import Reveal from "./motion/Reveal";

// Nicho atleta — card destacado, separado da grade de serviços.
// PREÇO/DURAÇÃO provisórios (Timóteo não mandou a Desportiva nos prints) — confirmar.
const WA = `https://wa.me/5563984843646?text=${encodeURIComponent(
  "Olá! Quero agendar a Massagem Desportiva."
)}`;

export default function MassagemDesportiva() {
  return (
    <section id="desportiva" className="relative text-ve-cream pb-16 md:pb-24">
      <div className="container-x">
        <Reveal direction="up">
          <div className="relative flex min-h-[420px] overflow-hidden border border-ve-champagne/10">
            {/* Foto · mulher correndo ao pôr do sol (tom quente casa com o marrom) */}
            <Image
              src="/img/corredora-orla.jpg"
              alt="Mulher correndo ao pôr do sol · Massagem Desportiva · Vida em Equilíbrio · Palmas-TO"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Overlay · base uniforme (mobile) + gradiente lateral escurecendo à direita (desktop) */}
            <div className="absolute inset-0 bg-ve-bg/45" />
            <div className="absolute inset-0 md:bg-gradient-to-l md:from-ve-bg md:via-ve-bg/75 md:to-transparent" />

            {/* Conteúdo · à direita no desktop, ela corre em direção ao texto */}
            <div className="relative z-10 flex w-full flex-col gap-5 justify-center p-8 md:ml-auto md:max-w-xl md:items-end md:p-14 md:text-right">
              <p className="eyebrow text-ve-champagne">Para quem treina</p>

              <h2 className="display text-3xl md:text-4xl leading-tight text-ve-cream">
                Massagem Desportiva
              </h2>

              <p className="max-w-md text-sm md:text-base leading-relaxed text-ve-cream/85">
                Recovery muscular focal — preparação pré-prova e recuperação
                pós-treino. Pra quem leva o corpo a sério e quer voltar mais rápido.
              </p>

              <div className="flex items-center gap-3 border-y border-ve-cream/15 py-3">
                <span className="text-sm text-ve-cream/75">60 min</span>
                <span className="text-ve-cream/30">·</span>
                <span className="text-sm font-semibold text-ve-champagne">R$199</span>
              </div>

              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 bg-ve-champagne px-6 py-3.5 text-sm font-medium text-ve-bg transition-colors hover:bg-ve-cream"
              >
                <IconWhatsApp className="h-4 w-4" />
                Agendar pelo WhatsApp
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
