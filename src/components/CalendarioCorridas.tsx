import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./Icons";

export default function CalendarioCorridas() {
  return (
    <section
      id="corridas"
      className="relative bg-ve-bg text-ve-cream overflow-hidden border-t border-[color:var(--ve-line)]"
    >
      <div className="grid md:grid-cols-12 min-h-[80vh]">
        {/* Imagem cinemática lado esquerdo */}
        <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto">
          <Image
            src="/img/heroCorredora.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,11,8,0.4) 0%, rgba(15,11,8,0.1) 50%, rgba(15,11,8,0.6) 100%)",
            }}
          />
        </div>

        {/* Conteúdo lado direito */}
        <div className="md:col-span-6 flex items-center py-20 md:py-32">
          <div className="container-x md:px-12 md:max-w-none">
            <p className="eyebrow text-ve-champagne mb-6">Para corredoras</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1] max-w-lg">
              Recovery muscular{" "}
              <span className="display-italic text-ve-champagne">por contratação particular</span>.
            </h2>
            <p className="mt-8 text-ve-cream/80 leading-relaxed font-light max-w-md">
              Se você treina para uma prova específica e quer cuidado focal
              antes ou depois da corrida, eu atendo sob contratação
              individual. Pacote pré-prova para preparar musculatura, pacote
              pós-prova para acelerar o recovery.
            </p>

            <div className="hairline my-10" />

            <div className="space-y-4 text-sm text-ve-cream/80">
              <p>
                <span className="text-ve-champagne">Preparação pré-prova</span> · 48h antes,
                amplitude e tônus muscular
              </p>
              <p>
                <span className="text-ve-champagne">Recovery pós-prova</span> · primeiras 48h,
                janela ótima de remoção de metabólitos
              </p>
              <p>
                <span className="text-ve-champagne">Acompanhamento periódico</span> · sessões
                regulares pra atleta amadora em ciclo de treino
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/massagem-desportiva"
                className="inline-flex items-center gap-2 text-ve-champagne hover:text-ve-cream transition-colors text-sm font-medium"
              >
                Conhecer Massagem Desportiva
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="mt-10 text-ve-muted text-xs eyebrow">
              Atendimento em massa em eventos de corrida · em planejamento para 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
