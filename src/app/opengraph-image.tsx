import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vida em Equilíbrio · Massagem terapêutica feminina em Palmas-TO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "linear-gradient(135deg, #0F0B08 0%, #1A1310 55%, #2C1810 100%)",
          color: "#F2EBE0",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Glifo (arco + ponto) topo direito */}
        <svg
          viewBox="0 0 100 100"
          width="120"
          height="120"
          style={{ position: "absolute", top: 60, right: 80 }}
        >
          <g transform="translate(50, 52)">
            <path
              d="M -36 8 Q 0 -24 36 8"
              stroke="#C9B79C"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="0" cy="8" r="4" fill="#C9B79C" />
          </g>
        </svg>

        {/* eyebrow */}
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C9B79C",
            fontFamily: "sans-serif",
          }}
        >
          Vida em Equilíbrio · Palmas-TO
        </div>

        {/* título */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              color: "#F2EBE0",
              letterSpacing: "-0.02em",
              fontWeight: 300,
            }}
          >
            Massagem terapêutica
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              color: "#C9B79C",
              fontStyle: "italic",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginTop: 4,
            }}
          >
            feminina premium.
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ fontSize: 22, color: "rgba(242, 235, 224, 0.75)" }}>
            Atendimento privativo · clínica ou domicílio
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9B79C",
            }}
          >
            uma cliente por turno
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
