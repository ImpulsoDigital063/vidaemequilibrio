"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useIsMobile } from "./useIsMobile";

type Props = {
  children: ReactNode;
  /** Velocidade · -1 = anda 1× contra o scroll (mais profundo) · 0 = sem · 1 = anda com o scroll (mais perto)
   *  Default -0.15 (sutil) */
  speed?: number;
  className?: string;
};

/**
 * Faz o conteúdo se mover em velocidade diferente do scroll · sensação de profundidade.
 * Em mobile, reduz pra metade · em prefers-reduced-motion, desliga.
 */
export default function Parallax({ children, speed = -0.15, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  // scroll do elemento entrando/saindo do viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const finalSpeed = isMobile ? speed * 0.4 : speed;
  // converte progress (0→1) em pixels de offset · alcance ~180px desktop · ~70px mobile
  const range = isMobile ? 70 : 180;
  const y = useTransform(scrollYProgress, [0, 1], [
    -range * finalSpeed,
    range * finalSpeed,
  ]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}
