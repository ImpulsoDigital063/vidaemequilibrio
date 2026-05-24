/* eslint-disable react/no-unescaped-entities */
import LogoVariacaoA, {
  MarkArcoEquilibrio,
  MarcaDagua,
} from "@/components/logos/LogoVariacaoA";
import PlanoVidaEquilibrio from "@/components/PlanoVidaEquilibrio";

export const metadata = {
  title: "Plano de Negócio · Vida em Equilíbrio",
  robots: { index: false, follow: false },
};

export default function PlanoDeNegocioPage() {
  return <PlanoVidaEquilibrio />;
}

// Re-exports usados nos mockups (pra evitar imports cíclicos no componente)
export { LogoVariacaoA, MarkArcoEquilibrio, MarcaDagua };
