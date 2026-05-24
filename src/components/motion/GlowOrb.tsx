// Orbe radial decorativa · adiciona profundidade espacial atrás de elementos
// Zero JS · só CSS · pointer-events none

type Props = {
  /** Cor da orbe · default burgundy */
  color?: string;
  /** Tamanho em px ou rem (string CSS) · default '600px' */
  size?: string;
  /** Posição: top/right/bottom/left · default centro */
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  /** Opacidade 0-1 · default 0.35 */
  opacity?: number;
  className?: string;
};

export default function GlowOrb({
  color = "#6E2A4A",
  size = "600px",
  position,
  opacity = 0.35,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        ...position,
      }}
    />
  );
}
