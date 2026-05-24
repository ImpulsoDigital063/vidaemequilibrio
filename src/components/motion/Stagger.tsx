"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useIsMobile } from "./useIsMobile";

type StaggerProps = {
  children: ReactNode;
  /** Atraso entre filhos em segundos · default 0.1 · 0.06 em mobile */
  step?: number;
  /** Atraso inicial antes do 1º filho · default 0 */
  initialDelay?: number;
  /** Margem do viewport · default '-60px' desktop · '-30px' mobile */
  margin?: string;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Container que escalona a entrada dos filhos diretos.
 * Use com <StaggerItem> dentro pra cada item.
 */
export default function Stagger({
  children,
  step = 0.1,
  initialDelay = 0,
  margin,
  className = "",
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const MotionTag = motion[as] as typeof motion.div;

  const finalStep = isMobile ? Math.min(step, 0.06) : step;
  const finalMargin = margin || (isMobile ? "-30px" : "-60px");

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: finalMargin }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: finalStep,
            delayChildren: initialDelay,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type ItemProps = {
  children: ReactNode;
  /** Direção da entrada · default 'up' */
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  distance?: number;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "article";
};

function getInitial(direction: ItemProps["direction"], distance: number) {
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
    case "fade":
    default:
      return { opacity: 0 };
  }
}

function getShow(direction: ItemProps["direction"]) {
  if (direction === "up" || direction === "down")
    return { opacity: 1, y: 0 };
  if (direction === "left" || direction === "right")
    return { opacity: 1, x: 0 };
  if (direction === "scale") return { opacity: 1, scale: 1 };
  return { opacity: 1 };
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 24,
  duration = 0.75,
  className = "",
  as = "div",
}: ItemProps) {
  const isMobile = useIsMobile();
  const MotionTag = motion[as] as typeof motion.div;

  const finalDistance = isMobile ? Math.round(distance * 0.55) : distance;
  const finalDuration = isMobile ? Math.min(duration, 0.55) : duration;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: getInitial(direction, finalDistance),
        show: {
          ...getShow(direction),
          transition: { duration: finalDuration, ease: EASE },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
