"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useIsMobile } from "./useIsMobile";

type Props = {
  /** Cor da spotlight · default burgundy */
  color?: string;
  /** Raio em px · default 480 */
  size?: number;
  /** Intensidade 0-1 · default 0.4 */
  intensity?: number;
  className?: string;
};

/**
 * Orbe radial que segue o mouse dentro do container.
 * Usar wrapping numa <section> com `position: relative`.
 * Mobile: desliga (não tem mouse) · prefers-reduced-motion: desliga.
 */
export default function Spotlight({
  color = "rgba(110, 42, 74, 0.5)",
  size = 480,
  intensity = 0.4,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (reduce || isMobile) return;
    const el = ref.current?.parentElement;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, isMobile]);

  if (reduce || isMobile) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${className}`}
      style={{
        opacity: visible ? intensity : 0,
        background: `radial-gradient(circle ${size}px at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
        mixBlendMode: "soft-light",
      }}
    />
  );
}
