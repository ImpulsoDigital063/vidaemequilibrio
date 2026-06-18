import Image from "next/image";
import { IconWhatsApp, IconArrowRight } from "./Icons";
import Reveal from "./motion/Reveal";

// Nicho atleta — card destacado, separado da grade de serviços.
// PREÇO/DURAÇÃO provisórios (Timóteo não mandou a Desportiva nos prints) — confirmar.
const WA = `https://wa.me/5563984843646?text=${encodeURIComponent(
  "Olá! Quero agendar a Massagem Desportiva. Qual duração fica melhor: 60 ou 90 min?"
)}`;

export default function MassagemDesportiva() {
  return (
    <section id="desportiva" className="relative text-ve-cream pb-16 md:pb-24">
      <div className="container-x">
        <Reveal direction="up">
          <div className="grid overflow-hidden border border-ve-champagne/10 md:grid-cols-2">
            {/* Foto · corredora nítida (vertical) */}
            <div className="relative min-h-[380px] md:min-h-[500px]">
              <Image
                src="/img/desportiva-corredora.jpg"
                alt="Mulher correndo · Massagem Desportiva · Vida em Equilíbrio · Palmas-TO"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[center_35%]"
              />
              {/* Tint marrom · harmoniza o fundo claro da foto com a paleta */}
              <div className="absolute inset-0 bg-ve-bg-card/40 mix-blend-multiply" />
              {/* Funde na coluna de texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-ve-bg/70 to-transparent md:bg-gradient-to-r md:from-transparent md:to-ve-bg-card" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-5 justify-center bg-ve-bg-card p-8 md:p-14">
              <p className="eyebrow text-ve-champagne">Para quem treina</p>

              <h2 className="display text-3xl md:text-4xl leading-tight text-ve-cream">
                Massagem Desportiva
              </h2>

              <p className="max-w-md text-sm md:text-base leading-relaxed text-ve-cream/85">
                Recovery muscular focal — preparação pré-prova e recuperação
                pós-treino. Pra quem leva o corpo a sério e quer voltar mais rápido.
              </p>

              <div className="mt-1 flex max-w-xs flex-col divide-y divide-ve-cream/15 border-y border-ve-cream/15">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-ve-cream/75">60 min</span>
                  <span className="text-sm font-semibold text-ve-champagne">R$149</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-ve-cream/75">90 min</span>
                  <span className="text-sm font-semibold text-ve-champagne">R$199</span>
                </div>
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
