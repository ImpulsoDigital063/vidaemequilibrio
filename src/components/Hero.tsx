"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { IconArrowDown, IconWhatsApp, LogoMark } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const WA_AGENDAR =
  "https://wa.me/5563984843646?text=Ol%C3%A1!%20Quero%20agendar%20uma%20massagem.";

export default function Hero() {
  // Sticky-cover: a foto fica PARADA (sem parallax) enquanto a próxima seção cobre.
  // O conteúdo sobe de leve pra dar vida aos textos antes de serem cobertos.
  const { scrollY } = useScroll();
  const conteudoY = useTransform(scrollY, [0, 800], [0, -40]);

  // Logo grande da Hero encolhe e sobe ao rolar (desliza pro header)
  const logoOpacity = useTransform(scrollY, [0, 160], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 160], [1, 0.78]);
  const logoSlideY = useTransform(scrollY, [0, 160], [0, -28]);

  return (
    <section className="relative min-h-[82vh] md:min-h-[92vh] overflow-hidden bg-ve-bg">
      {/* Foto · ken-burns sutil (zoom slow) + fade in + parallax y */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <Image
          src="/img/pedras-quentes.jpg"
          alt="Massagem com pedras quentes · Vida em Equilíbrio · Palmas-TO"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={86}
        />
        {/* Gradiente warm · respira a foto em cima, escurece embaixo pra leitura */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,11,8,0.90) 0%, rgba(15,11,8,0.45) 38%, rgba(15,11,8,0.32) 62%, rgba(15,11,8,0.82) 100%)",
          }}
        />
        {/* Glow burgundy lateral · warmth cinematográfico (suave) */}
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(ellipse at 80% 28%, rgba(139, 99, 66, 0.34) 0%, transparent 58%)",
          }}
        />
      </motion.div>

      {/* Conteúdo · ancorado no topo · parallax oposto (sobe enquanto rola) */}
      <motion.div
        className="container-x relative z-10 min-h-[82vh] md:min-h-[92vh] flex flex-col justify-between pt-20 md:pt-24 pb-10"
        style={{ y: conteudoY }}
      >
        {/* Topo · logo grande (desliza pro header ao rolar) + título */}
        <div>
        <motion.div
          style={{ opacity: logoOpacity, scale: logoScale, y: logoSlideY }}
          className="origin-top mx-auto mb-10 w-[230px] md:w-[320px] drop-shadow-[0_2px_14px_rgba(15,11,8,0.55)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <LogoMark className="w-full h-auto text-ve-cream" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
          className="display text-ve-cream text-4xl md:text-6xl lg:text-7xl leading-[1.04] max-w-4xl"
        >
          Massagem terapêutica que alivia o corpo e{" "}
          <span className="display-italic text-ve-champagne">acalma a rotina.</span>
        </motion.h1>
        </div>

        {/* Base · sub + ação (desce junto, longe do título) */}
        <div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="text-ve-cream/70 text-sm md:text-[15px] max-w-xl leading-relaxed font-light"
        >
          Você cuida de tudo. Aqui, alguém cuida de você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.1, ease: EASE }}
          className="mt-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7"
        >
          <a
            href={WA_AGENDAR}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2.5 bg-ve-champagne text-ve-bg px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-ve-cream transition-colors"
          >
            <IconWhatsApp className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#massagens"
            className="group inline-flex items-center gap-2 text-ve-cream/80 text-sm hover:text-ve-cream transition-colors"
          >
            Ver as massagens
            <IconArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* Linha fina de modalidade · diferencial no ponto de decisão */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
          className="mt-5 text-ve-cream/55 text-xs md:text-sm tracking-wide"
        >
          Atendimento na clínica (CYOX) ou a domicílio — Palmas-TO
        </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
