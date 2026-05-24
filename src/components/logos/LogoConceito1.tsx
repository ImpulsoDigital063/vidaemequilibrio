// CONCEITO 1 · Wordmark serif puro
// Inspiração: Bamford · Susanne Kaufmann · Aman ĀMĀN
// "vida em equilíbrio" em serif fine-line lower-case com italic alternates

import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { color?: string };

export default function LogoConceito1({
  color = "currentColor",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 480 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vida em Equilíbrio"
      {...props}
    >
      <text
        x="240"
        y="58"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={300}
        fontStyle="italic"
        fontSize={48}
        textAnchor="middle"
        fill={color}
        style={{
          letterSpacing: "0.005em",
          fontFeatureSettings: '"ss01" on, "ss02" on, "liga" on',
        }}
      >
        vida em equilíbrio
      </text>
      {/* delicado tracé abaixo evocando linha editorial */}
      <line
        x1="200"
        y1="78"
        x2="280"
        y2="78"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  );
}
