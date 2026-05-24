// CONCEITO 3 · Wordmark + glifo cinemático abstrato
// Inspiração: Aman monograma · minimalismo japonês
// Arco sutil acima do wordmark · evoca pausa, respiração, equilíbrio

import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { color?: string };

export default function LogoConceito3({
  color = "currentColor",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 480 150"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      {/* Glifo: arco superior · pausa + ponto central · equilíbrio */}
      <g transform="translate(240, 38)">
        {/* arco cinemático */}
        <path
          d="M -50 12 Q 0 -18 50 12"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* ponto central · âncora de presença */}
        <circle cx="0" cy="12" r="1.6" fill={color} />
      </g>

      {/* Wordmark centralizado */}
      <text
        x="240"
        y="100"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontStyle="italic"
        fontSize={44}
        textAnchor="middle"
        fill={color}
        style={{
          letterSpacing: "0.005em",
          fontFeatureSettings: '"ss01" on, "ss02" on',
        }}
      >
        vida em equilíbrio
      </text>

      {/* etiqueta tracked */}
      <text
        x="240"
        y="128"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight={400}
        fontSize={9}
        fill={color}
        opacity="0.6"
        textAnchor="middle"
        style={{
          letterSpacing: "0.4em",
          textTransform: "uppercase",
        }}
      >
        massagem · palmas-to
      </text>
    </svg>
  );
}

// Versão isolada do glifo (pra favicon ou selo)
export function GlifoArco({
  color = "currentColor",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      <g transform="translate(50, 50)">
        <path
          d="M -34 8 Q 0 -22 34 8"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="0" cy="8" r="3" fill={color} />
      </g>
    </svg>
  );
}
