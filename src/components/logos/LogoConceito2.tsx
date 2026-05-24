// CONCEITO 2 · Wordmark + monograma "ve" sutil
// Inspiração: Renata França "FR" · Aesop · Heyday
// Monograma "ve" em círculo fino + wordmark · funciona como favicon isolado

import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { color?: string };

export default function LogoConceito2({
  color = "currentColor",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 560 110"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      {/* Monograma "ve" em círculo */}
      <g transform="translate(55, 55)">
        <circle
          cx="0"
          cy="0"
          r="42"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
        />
        <text
          x="0"
          y="6"
          fontFamily="var(--font-fraunces), Georgia, serif"
          fontWeight={300}
          fontStyle="italic"
          fontSize={36}
          textAnchor="middle"
          fill={color}
          dominantBaseline="middle"
          style={{ fontFeatureSettings: '"ss01" on' }}
        >
          ve
        </text>
      </g>

      {/* Wordmark à direita */}
      <text
        x="125"
        y="58"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontSize={38}
        fill={color}
        style={{
          letterSpacing: "0.01em",
          fontFeatureSettings: '"ss01" on',
        }}
      >
        vida em equilíbrio
      </text>

      {/* etiqueta sob o wordmark */}
      <text
        x="126"
        y="80"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight={400}
        fontSize={9}
        fill={color}
        opacity="0.7"
        style={{
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
      >
        massagem terapêutica · palmas
      </text>
    </svg>
  );
}

// Versão isolada do monograma (pra favicon)
export function MonogramaVE({
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
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="50"
        y="56"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontStyle="italic"
        fontSize={38}
        textAnchor="middle"
        fill={color}
        dominantBaseline="middle"
        style={{ fontFeatureSettings: '"ss01" on' }}
      >
        ve
      </text>
    </svg>
  );
}
