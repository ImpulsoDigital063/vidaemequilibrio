// VARIAÇÃO A · ESCOLHIDA · Arco + Ponto refinado
// Storytelling cravado por Eduardo: o PONTO reflete o EQUILÍBRIO (centro · âncora · presença)
// O ARCO evoca o gesto da manobra de massagem (movimento · respiração · pausa)
// Inspiração: Aman monograma + Bamford fine-line

import type { SVGProps } from "react";

type SvgProps = SVGProps<SVGSVGElement>;

type LogoProps = SvgProps & {
  color?: string;
  showTagline?: boolean;
};

export default function LogoVariacaoA({
  color = "currentColor",
  showTagline = true,
  ...props
}: LogoProps) {
  const height = showTagline ? 170 : 130;
  return (
    <svg
      viewBox={`0 0 520 ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      {/* Glifo: arco + ponto · gesto + equilíbrio */}
      <g transform="translate(260, 38)">
        <path
          d="M -70 14 Q 0 -14 70 14"
          stroke={color}
          strokeWidth={0.8}
          fill="none"
          strokeLinecap="round"
          opacity={0.85}
        />
        <circle cx="0" cy="14" r="1.4" fill={color} />
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

      {/* Tagline (opcional) */}
      {showTagline && (
        <text
          x="260"
          y="148"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight={400}
          fontSize={8.5}
          fill={color}
          opacity={0.55}
          textAnchor="middle"
          style={{
            letterSpacing: "0.5em",
            textTransform: "uppercase",
          }}
        >
          massagem · palmas
        </text>
      )}
    </svg>
  );
}

// Símbolo isolado (favicon · marca registrada · selo)
type MarkProps = SvgProps & { color?: string; thickness?: number };

export function MarkArcoEquilibrio({
  color = "currentColor",
  thickness = 1.8,
  ...props
}: MarkProps) {
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
          d="M -36 8 Q 0 -24 36 8"
          stroke={color}
          strokeWidth={thickness}
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="0" cy="8" r="3" fill={color} />
      </g>
    </svg>
  );
}

// Marca d'água: glifo gigante translúcido pra usar como decoração de fundo
type MarcaDaguaProps = SvgProps & { color?: string; opacity?: number };

export function MarcaDagua({
  color = "currentColor",
  opacity = 0.06,
  style,
  ...props
}: MarcaDaguaProps) {
  return (
    <MarkArcoEquilibrio
      color={color}
      thickness={0.4}
      style={{ opacity, ...style }}
      {...props}
    />
  );
}
