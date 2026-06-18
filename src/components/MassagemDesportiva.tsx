import Image from "next/image";
import { IconCorrida, IconWhatsApp, IconArrowRight } from "./Icons";
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
          <div className="relative flex min-h-[400px] overflow-hidden border border-ve-champagne/10">
            {/* Imagem de fundo */}
            <Image
              src="/img/desportiva.jpg"
              alt="Massagem Desportiva · recovery do atleta · Vida em Equilíbrio · Palmas-TO"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Overlay marrom · texto à esquerda em destaque */}
            <div className="absolute inset-0 bg-gradient-to-r from-ve-bg via-ve-bg/85 to-ve-bg/25" />

            {/* Conteúdo */}
            <div className="relative z-10 flex max-w-xl flex-col gap-5 justify-center p-8 md:p-14">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ve-champagne/30 bg-ve-bg/60 backdrop-blur-sm">
                  <IconCorrida className="h-4 w-4 text-ve-champagne" />
                </span>
                <p className="eyebrow text-ve-champagne">Para quem treina</p>
              </div>

              <h2 className="display text-3xl md:text-4xl leading-tight text-ve-cream">
                Massagem Desportiva
              </h2>

              <p className="max-w-md text-sm md:text-base leading-relaxed text-ve-cream/80">
                Recovery muscular focal — preparação pré-prova e recuperação
                pós-treino. Pra quem leva o corpo a sério e quer voltar mais rápido.
              </p>

              <div className="flex items-center gap-3 border-y border-ve-cream/15 py-3 max-w-xs">
                <span className="text-sm text-ve-cream/75">60 min</span>
                <span className="text-ve-cream/30">·</span>
                <span className="text-sm font-semibold text-ve-champagne">R$199</span>
              </div>

              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center sm:self-start gap-2.5 bg-ve-champagne px-6 py-3.5 text-sm font-medium text-ve-bg transition-colors hover:bg-ve-cream"
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
