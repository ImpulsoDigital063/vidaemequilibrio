"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useIsMobile } from "./useIsMobile";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale" | "blur";

type RevealProps = {
  children: ReactNode;
  /** Direção da entrada · default 'up' */
  direction?: Direction;
  /** Distância em px (desktop) · default 28 · reduz pra metade em mobile */
  distance?: number;
  /** Atraso em segundos · usado pra escalonar manualmente */
  delay?: number;
  /** Duração em segundos · default 0.85 · reduz pra 0.6 em mobile */
  duration?: number;
  /** className do wrapper */
  className?: string;
  /** id pra anchor */
  id?: string;
  /** Margem do viewport pra disparar · default '-80px' desktop · '-40px' mobile */
  margin?: string;
  /** Anima toda vez (default false · só na 1ª) */
  repeat?: boolean;
  /** Tag a renderizar · default 'div' */
  as?: "div" | "section" | "article" | "header" | "li";
};

// ease-out-expo · cinematográfico, anti-gravidade · não bouncy
const EASE = [0.16, 1, 0.3, 1] as const;

function getInitial(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: distance };
    case "down":
      return { opacity: 0, y: -distance };
    case "left":
      return { opacity: 0, x: distance };
    case "right":
      return { opacity: 0, x: -distance };
    case "scale":
      return { opacity: 0, scale: 0.94 };
    case "blur":
      return { opacity: 0, filter: "blur(12px)" };
    case "fade":
    default:
      return { opacity: 0 };
  }
}

function getAnimate(direction: Direction) {
  const base = { opacity: 1 };
  if (direction === "up" || direction === "down") return { ...base, y: 0 };
  if (direction === "left" || direction === "right") return { ...base, x: 0 };
  if (direction === "scale") return { ...base, scale: 1 };
  if (direction === "blur") return { ...base, filter: "blur(0px)" };
  return base;
}

export default function Reveal({
  children,
  direction = "up",
  distance = 28,
  delay = 0,
  duration = 0.85,
  className = "",
  id,
  margin,
  repeat = false,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const MotionTag = motion[as] as typeof motion.div;

  // Em mobile · distância menor, duração mais curta, trigger mais cedo
  const finalDistance = isMobile ? Math.round(distance * 0.55) : distance;
  const finalDuration = isMobile ? Math.min(duration, 0.65) : duration;
  const finalMargin = margin || (isMobile ? "-40px" : "-80px");

  if (reduce) {
    return (
      <MotionTag id={id} className={className}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      initial={getInitial(direction, finalDistance)}
      whileInView={getAnimate(direction)}
      viewport={{ once: !repeat, margin: finalMargin }}
      transition={{ duration: finalDuration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
