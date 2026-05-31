// SVG inline central · Vida em Equilíbrio
// Pega: line-art fine 1.5px, stroke currentColor. Zero emoji.
// Estilo: mínimo, geométrico, sem preenchimento por padrão.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// ============ OBJETIVOS (estados do corpo) ============

export function IconTensa(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 8c2 0 3-2 7-2s5 2 7 2" />
      <path d="M5 14c2 0 3-2 7-2s5 2 7 2" />
      <path d="M5 20c2 0 3-2 7-2s5 2 7 2" />
    </svg>
  );
}

export function IconInchada(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3c-4 0-7 3-7 7 0 6 7 11 7 11s7-5 7-11c0-4-3-7-7-7z" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconModelar(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <path d="M9 8c0 2 2 2 6 0" />
      <path d="M9 16c0 -2 2 -2 6 0" />
    </svg>
  );
}

export function IconCorrida(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="15" cy="5" r="2" />
      <path d="M9 22l3-7 4 3v6" />
      <path d="M6 14l3-6 4 1 3-3" />
      <path d="M3 10l4 1" />
    </svg>
  );
}

export function IconFlorescer(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5c1 -1 3 -1 4 0 1 1 1 3 0 4" />
      <path d="M19 12c1 1 1 3 0 4 -1 1 -3 1 -4 0" />
      <path d="M12 19c-1 1 -3 1 -4 0 -1 -1 -1 -3 0 -4" />
      <path d="M5 12c-1 -1 -1 -3 0 -4 1 -1 3 -1 4 0" />
    </svg>
  );
}

// ============ TÉCNICAS ============

export function IconVela(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3c0 2 -2 2 -2 4s2 3 2 3 2 -1 2 -3 -2 -2 -2 -4z" />
      <rect x="8" y="10" width="8" height="11" rx="1" />
      <path d="M8 14h8" />
    </svg>
  );
}

export function IconPedras(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="12" cy="17" rx="9" ry="3" />
      <ellipse cx="10" cy="13" rx="6" ry="2" />
      <ellipse cx="13" cy="9" rx="4" ry="1.5" />
    </svg>
  );
}

export function IconBambu(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 3v18" />
      <path d="M12 3v18" />
      <path d="M17 3v18" />
      <path d="M5 8h4M10 8h4M15 8h4" />
      <path d="M5 16h4M10 16h4M15 16h4" />
    </svg>
  );
}

export function IconVentosa(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 8h10v8a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3z" />
      <path d="M9 8v-3a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

export function IconEsfoliante(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 11h14a0 0 0 0 1 0 0v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-6a0 0 0 0 1 0 0z" />
      <path d="M8 11v-2a4 4 0 0 1 8 0v2" />
      <path d="M2 14l3 -1" />
      <path d="M19 13l3 1" />
    </svg>
  );
}

export function IconBolinha(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v14M5 12h14" strokeOpacity="0.3" />
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <circle cx="15" cy="9" r="0.5" fill="currentColor" />
      <circle cx="9" cy="15" r="0.5" fill="currentColor" />
      <circle cx="15" cy="15" r="0.5" fill="currentColor" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconMao(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 11v-6a1.5 1.5 0 1 1 3 0v6" />
      <path d="M12 11v-4a1.5 1.5 0 1 1 3 0v6" />
      <path d="M15 11v-3a1.5 1.5 0 1 1 3 0v9a5 5 0 0 1 -5 5h-3a4 4 0 0 1 -3.5 -2l-4 -6a1.5 1.5 0 0 1 2.5 -1.5l2 2" />
      <path d="M6 11v-2a1.5 1.5 0 1 1 3 0v2" />
    </svg>
  );
}

// ============ STATUS / SOCIAL ============

export function IconWhatsApp(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 21l1.5 -5a8 8 0 1 1 3.5 3.5z" />
      <path d="M9 10a4 4 0 0 0 5 5l1 -1 -2 -1.5 -1 1c-1 -.5 -2 -1.5 -2.5 -2.5l1 -1 -1.5 -2 -1 1z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconMapa(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 21s7 -6 7 -12a7 7 0 1 0 -14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconPorta(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 21h14" />
      <path d="M7 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" />
      <path d="M14 12h.01" />
    </svg>
  );
}

export function IconClima(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M5.6 5.6l12.8 12.8" />
      <path d="M18.4 5.6 5.6 18.4" />
    </svg>
  );
}

export function IconRecepcao(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 18h16" />
      <path d="M5 18a7 7 0 0 1 14 0" />
      <path d="M12 8V6" />
      <path d="M10 6h4" />
    </svg>
  );
}

// ============ NAV / UI ============

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14M13 6l6 6 -6 6" />
    </svg>
  );
}

export function IconArrowDown(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14M6 13l6 6 6 -6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3 -4.3" />
    </svg>
  );
}

export function IconCommand(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 3h6v6h-6zM9 15h6v6h-6zM3 9h6v6H3zM15 9h6v6h-6z" />
      <path d="M9 9V6a3 3 0 0 0 -3 -3M15 9V6a3 3 0 0 1 3 -3M9 15v3a3 3 0 0 1 -3 3M15 15v3a3 3 0 0 0 3 3" />
    </svg>
  );
}

// ============ DECORATIVOS ============

export function IconLeaf(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 19c0 -8 6 -14 14 -14 0 8 -6 14 -14 14z" />
      <path d="M5 19c4 -4 8 -8 14 -14" />
    </svg>
  );
}

export function IconWave(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 12c2 -3 5 -3 7 0s5 3 7 0 4 -3 4 -3" />
      <path d="M3 18c2 -3 5 -3 7 0s5 3 7 0 4 -3 4 -3" />
    </svg>
  );
}

// Logo oficial · Variação A (Conceito 3) · cravada 24/05/2026
// Storytelling: o PONTO reflete o EQUILÍBRIO · o ARCO é o gesto da manobra
import LogoVariacaoA from "./logos/LogoVariacaoA";

export function LogoMark({ className }: { className?: string }) {
  return <LogoVariacaoA showTagline={false} className={className} />;
}

export { MarkArcoEquilibrio, MarcaDagua } from "./logos/LogoVariacaoA";
