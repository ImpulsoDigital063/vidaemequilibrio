"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { IconArrowDown, MarcaDagua } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  // Parallax: foto se move mais devagar que conteúdo · sensação de profundidade
  const { scrollY } = useScroll();
  const fotoY = useTransform(scrollY, [0, 800], [0, 180]);
  const conteudoY = useTransform(scrollY, [0, 800], [0, -40]);

  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-ve-bg">
      {/* Foto · ken-burns sutil (zoom slow) + fade in + parallax y */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        style={{ y: fotoY }}
      >
        <Image
          src="/img/heroFeminino.jpg"
          alt="Mulher recebendo massagem terapêutica · Vida em Equilíbrio · Palmas-TO"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={88}
        />
        {/* Gradiente warm bottom · respira a foto em cima, escurece embaixo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,11,8,0.25) 0%, rgba(15,11,8,0.55) 50%, rgba(15,11,8,0.96) 100%)",
          }}
        />
        {/* Glow burgundy lateral · dá warmth cinematográfico */}
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(110, 42, 74, 0.45) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* Marca d'água · canto sup direito */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.8, ease: EASE }}
        className="absolute top-32 right-6 md:right-16 w-40 md:w-64 pointer-events-none"
      >
        <MarcaDagua color="#F2EBE0" opacity={1} className="w-full" />
      </motion.div>

      {/* Conteúdo · stagger words · parallax oposto (sobe enquanto rola) */}
      <motion.div className="container-x relative z-10 pb-20 md:pb-28 pt-32" style={{ y: conteudoY }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="eyebrow text-ve-champagne mb-6"
        >
          Vida em Equilíbrio · Massagem terapêutica · Palmas-TO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
          className="display text-ve-cream text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
        >
          Que parte de você está{" "}
          <span className="display-italic text-ve-champagne">pedindo cuidado</span>{" "}
          hoje?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-8 text-ve-cream/80 text-base md:text-lg max-w-xl leading-relaxed font-light"
        >
          Atendimento privativo, em clínica parceira ou em domicílio. Massagens
          desenhadas para o que seu corpo está pedindo agora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.1, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#objetivos" className="btn-primary">
            Escolher minha massagem
            <IconArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5563848436460"
            target="_blank"
            rel="noopener"
            className="btn-ghost"
          >
            Conversar agora
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: EASE }}
          className="mt-16 hidden md:flex items-center gap-2 text-ve-cream/50 text-xs"
        >
          <IconArrowDown className="w-3 h-3 animate-pulse" />
          <span className="eyebrow">Comece pela pergunta certa</span>
        </motion.div>
      </motion.div>

      {/* Crédito foto · canto inferior esquerdo · sutil */}
      <p className="absolute bottom-3 left-4 md:left-8 text-[9px] eyebrow text-ve-cream/40 z-10">
        Foto · Simon HUMLER / Unsplash
      </p>
    </section>
  );
}
