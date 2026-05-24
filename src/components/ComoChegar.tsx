import { IconMapa, IconArrowRight } from "./Icons";
import Reveal from "./motion/Reveal";

// Endereço da clínica parceira CYOX
const ENDERECO = "ACNO 01, Rua O1, LT 06, Sala 01";
const BAIRRO = "Setor Norte · Palmas-TO";
const CLINICA = "CYOX Centro de Estética Avançada";
const TEL_CYOX = "(63) 99920-2028";

const QUERY_MAPS = encodeURIComponent(
  `CYOX Centro de Estética Avançada, ACNO 01 Rua O1 Setor Norte Palmas TO`
);
const EMBED_URL = `https://www.google.com/maps?q=${QUERY_MAPS}&hl=pt-BR&z=15&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${QUERY_MAPS}`;
const ROUTE_LINK = `https://www.google.com/maps/dir/?api=1&destination=${QUERY_MAPS}`;

export default function ComoChegar() {
  return (
    <section
      id="como-chegar"
      className="bg-ve-bg text-ve-cream py-24 md:py-32 border-t border-[color:var(--ve-line)]"
    >
      <div className="container-x">
        {/* Cabeçalho */}
        <Reveal direction="up" className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-ve-champagne mb-6">Como chegar</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              No coração do{" "}
              <span className="display-italic text-ve-champagne">Setor Norte</span>.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ve-cream/80 leading-relaxed text-base md:text-lg font-light max-w-xl">
              O atendimento em clínica acontece na <strong className="text-ve-cream">{CLINICA}</strong>,
              parceira do Vida em Equilíbrio, em ambiente preparado para
              atendimento privativo. Endereço exato e instruções de chegada
              também são reforçados na confirmação do WhatsApp.
            </p>
          </div>
        </Reveal>

        {/* Bloco mapa + endereço · scale-in (peso visual) */}
        <Reveal direction="scale" className="grid md:grid-cols-12 gap-0 bg-ve-bg-card border border-[color:var(--ve-line)] overflow-hidden" duration={1}>
          {/* Mapa embed */}
          <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[420px] bg-ve-bg-soft">
            <iframe
              src={EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "grayscale(0.4) brightness(0.85) saturate(0.9)" }}
              title={`Mapa · ${CLINICA}`}
              allowFullScreen
            />
          </div>

          {/* Endereço + ações */}
          <div className="md:col-span-5 p-8 md:p-10 flex flex-col gap-6">
            <div>
              <p className="eyebrow text-ve-champagne mb-3">Clínica parceira</p>
              <p className="display text-2xl md:text-3xl text-ve-cream leading-tight">
                {CLINICA}
              </p>
            </div>

            <div className="hairline" />

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <IconMapa className="w-5 h-5 text-ve-champagne mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-ve-cream text-sm font-medium leading-relaxed">
                    {ENDERECO}
                  </p>
                  <p className="text-ve-muted text-xs mt-1">{BAIRRO}</p>
                </div>
              </div>

              <p className="text-ve-cream/70 text-xs leading-relaxed">
                Ambiente preparado pra atendimento privativo · uma cliente por
                turno · agenda exclusiva do Vida em Equilíbrio.
              </p>
            </div>

            <div className="hairline" />

            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={ROUTE_LINK}
                target="_blank"
                rel="noopener"
                className="btn-primary text-sm justify-center"
              >
                Traçar rota no Google Maps
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener"
                className="btn-ghost text-sm justify-center"
              >
                Abrir endereço no Maps
              </a>
            </div>

            <p className="text-ve-muted text-[10px] leading-relaxed mt-2 eyebrow">
              Telefone da clínica · {TEL_CYOX}
              <br />
              Agendamento sempre pelo WhatsApp do Vida em Equilíbrio
            </p>
          </div>
        </Reveal>

        {/* Nota de domicílio · slide up */}
        <Reveal direction="up" className="mt-12 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-2">
            <IconMapa className="w-8 h-8 text-ve-champagne" />
          </div>
          <div className="md:col-span-10">
            <p className="display text-xl md:text-2xl text-ve-cream leading-tight">
              Prefere receber em casa?
            </p>
            <p className="text-ve-cream/70 mt-2 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              Atendo também em domicílio em Palmas (Plano Sul, Plano Norte e
              Aurenys). Levo macas portáteis e produtos profissionais — você
              não precisa preparar nada.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
