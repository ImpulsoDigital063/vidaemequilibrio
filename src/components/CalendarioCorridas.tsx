import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconWhatsApp } from "./Icons";
import {
  corridasFuturas,
  formataData,
  badgeData,
  type Corrida,
} from "@/data/corridas";

const WA_RECOVERY = `https://wa.me/5563984843646?text=${encodeURIComponent(
  "Oii! Sou corredora e quero saber sobre o recovery pré e pós-prova. Pode me contar?"
)}`;

// CTA de recovery amarrado a uma prova específica.
function waProva(c: Corrida): string {
  const msg = `Oii! Vou correr a ${c.nome} (${formataData(
    c.data
  )}) e quero saber sobre o recovery pré e pós-prova. Pode me contar?`;
  return `https://wa.me/5563984843646?text=${encodeURIComponent(msg)}`;
}

export default function CalendarioCorridas() {
  const provas = corridasFuturas();

  return (
    <section
      id="corridas"
      className="relative text-ve-cream overflow-hidden"
    >
      <div className="grid md:grid-cols-12 min-h-[80vh]">
        {/* Imagem cinemática lado esquerdo */}
        <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto">
          <Image
            src="/img/corredora-orla.jpg"
            alt="Corredora ao pôr do sol · recovery do atleta · Vida em Equilíbrio · Palmas-TO"
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

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href={WA_RECOVERY}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 bg-ve-champagne text-ve-bg px-6 py-3.5 text-sm font-medium hover:bg-ve-cream transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
                Falar sobre recovery
              </a>
              <Link
                href="/massagem-desportiva"
                className="inline-flex items-center gap-2 text-ve-champagne hover:text-ve-cream transition-colors text-sm font-medium"
              >
                Ver a Massagem Desportiva
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Calendário real de provas de Palmas-TO · atualizado mensalmente */}
      {provas.length > 0 && (
        <div className="border-t border-ve-cream/10">
          <div className="container-x py-16 md:py-24 md:max-w-5xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow text-ve-champagne mb-4">
                  Agenda de provas
                </p>
                <h3 className="display text-2xl md:text-4xl leading-[1.1]">
                  Próximas corridas em{" "}
                  <span className="display-italic text-ve-champagne">
                    Palmas-TO
                  </span>
                </h3>
              </div>
              <p className="text-xs text-ve-cream/50 font-light sm:text-right max-w-[14rem]">
                Lista atualizada todo mês a partir dos calendários oficiais da
                cidade.
              </p>
            </div>

            <ul>
              {provas.map((c) => {
                const { dia, mes } = badgeData(c.data);
                return (
                  <li
                    key={c.nome}
                    className="flex flex-col gap-5 border-t border-ve-cream/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center border border-ve-champagne/40 text-ve-champagne">
                        <span className="text-xl font-medium leading-none tabular-nums">
                          {dia}
                        </span>
                        <span className="mt-1 text-[0.65rem] uppercase tracking-widest">
                          {mes}
                        </span>
                      </div>
                      <div>
                        <p className="text-base md:text-lg text-ve-cream leading-snug">
                          {c.nome}
                        </p>
                        {c.distancias.length > 0 && (
                          <p className="mt-1.5 text-sm text-ve-champagne/70 font-light">
                            {c.distancias.join(" · ")}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-5 sm:shrink-0 pl-[5.25rem] sm:pl-0">
                      {c.linkInscricao && (
                        <a
                          href={c.linkInscricao}
                          target="_blank"
                          rel="noopener"
                          className="text-sm text-ve-cream/60 hover:text-ve-cream transition-colors font-light"
                        >
                          Inscrição
                        </a>
                      )}
                      <a
                        href={waProva(c)}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ve-champagne hover:text-ve-cream transition-colors"
                      >
                        <IconWhatsApp className="w-4 h-4" />
                        Recovery
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
