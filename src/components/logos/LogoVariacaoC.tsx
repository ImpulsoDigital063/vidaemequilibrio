// VARIAÇÃO C · Linha curva única contínua (Aman monograma puro · minimalismo japonês)
// Sem ponto, sem extras · uma única curva orgânica acima do wordmark
// Evoca o movimento da manobra de massagem · o gesto da mão · a respiração

import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { color?: string };

export default function LogoVariacaoC({
  color = "currentColor",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 520 170"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      {/* Glifo: curva orgânica única · gesto da mão na manobra */}
      <g transform="translate(260, 42)">
        <path
          d="M -68 18 C -50 -10, -10 -22, 12 -8 S 52 14, 68 -2"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Wordmark */}
      <text
        x="260"
        y="118"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontStyle="italic"
        fontSize={50}
        textAnchor="middle"
        fill={color}
        style={{
          letterSpacing: "0.008em",
          fontFeatureSettings: '"ss01" on, "ss02" on',
        }}
      >
        vida em equilíbrio
      </text>

      {/* Etiqueta */}
      <text
        x="260"
        y="148"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight={400}
        fontSize={8.5}
        fill={color}
        opacity="0.55"
        textAnchor="middle"
        style={{
          letterSpacing: "0.5em",
          textTransform: "uppercase",
        }}
      >
        massagem · palmas
      </text>
    </svg>
  );
}

export function GlifoCurvaC({
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
      <g transform="translate(50, 52)">
        <path
          d="M -34 10 C -22 -6, -4 -14, 6 -4 S 26 8, 34 -2"
          stroke={color}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
