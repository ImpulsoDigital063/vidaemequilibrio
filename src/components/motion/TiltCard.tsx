"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useIsMobile } from "./useIsMobile";

type Props = {
  children: ReactNode;
  /** Inclinação máxima em graus · default 4 (sutil) */
  max?: number;
  /** Glare effect (brilho que segue mouse) · default true */
  glare?: boolean;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Card com leve inclinação 3D que segue o mouse.
 * Mobile: desliga · prefers-reduced-motion: desliga.
 */
export default function TiltCard({
  children,
  max = 4,
  glare = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  const desabilitado = reduce || isMobile;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (desabilitado) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width; // 0-1
    const y = (e.clientY - rect.top) / rect.height; // 0-1
    setTilt({
      x: (0.5 - y) * max * 2, // rotateX
      y: (x - 0.5) * max * 2, // rotateY
      glareX: x * 100,
      glareY: y * 100,
    });
  };

  const onLeave = () => {
    setHovering(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  if (desabilitado) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
      {glare && hovering && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(242, 235, 224, 0.12), transparent 60%)`,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </motion.div>
  );
}
