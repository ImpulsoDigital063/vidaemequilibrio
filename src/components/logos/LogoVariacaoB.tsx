// VARIAÇÃO B · Macron sobre letra (Aman ĀMĀN-inspired)
// Sem glifo separado · diacrítico macron sobre o "i" central de "equilíbrio"
// Minimalismo extremo · letra do wordmark vira ponto âncora visual

import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { color?: string };

export default function LogoVariacaoB({
  color = "currentColor",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 520 140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      {/* Wordmark com 'i' de equilíbrio destacado por macron customizado */}
      <text
        x="260"
        y="82"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontStyle="italic"
        fontSize={54}
        textAnchor="middle"
        fill={color}
        style={{
          letterSpacing: "0.008em",
          fontFeatureSettings: '"ss01" on, "ss02" on',
        }}
      >
        vida em equilíbrio
      </text>

      {/* Macron flutuante acima do wordmark · centralizado */}
      <line
        x1="223"
        y1="32"
        x2="297"
        y2="32"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Etiqueta · tracked sutil */}
      <text
        x="260"
        y="112"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight={400}
        fontSize={8.5}
        fill={color}
        opacity="0.55"
        textAnchor="middle"
        style={{
          letterSpacing: "0.55em",
          textTransform: "uppercase",
        }}
      >
        massagem · palmas
      </text>
    </svg>
  );
}

export function GlifoMacronB({
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
      {/* Versão isolada: "ve" com macron · vira favicon poético */}
      <line
        x1="22"
        y1="28"
        x2="78"
        y2="28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="74"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontStyle="italic"
        fontSize={42}
        textAnchor="middle"
        fill={color}
        style={{ fontFeatureSettings: '"ss01" on' }}
      >
        ve
      </text>
    </svg>
  );
}
