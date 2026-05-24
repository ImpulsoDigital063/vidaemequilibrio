import Image from "next/image";
import {
  IconMapa,
  IconClock,
  IconArrowRight,
  IconWhatsApp,
} from "./Icons";
import Reveal from "./motion/Reveal";
import GlowOrb from "./motion/GlowOrb";
import Spotlight from "./motion/Spotlight";

// ============== Clínica parceira ==============
const CLINICA_NOME = "CYOX Centro de Estética Avançada";
const CLINICA_ENDERECO = "ACNO 01, Rua O1, LT 06, Sala 01";
const CLINICA_BAIRRO = "Setor Norte · Palmas-TO";

const QUERY_MAPS = encodeURIComponent(
  `CYOX Centro de Estética Avançada, ACNO 01 Rua O1 Setor Norte Palmas TO`
);
const EMBED_URL = `https://www.google.com/maps?q=${QUERY_MAPS}&hl=pt-BR&z=15&output=embed`;
const MAPS_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${QUERY_MAPS}`;

// ============== WhatsApp ==============
const WA_CLINICA = `https://wa.me/5563848436460?text=${encodeURIComponent(
  "Oi Leandro, quero agendar na clínica parceira (CYOX · Setor Norte)."
)}`;
const WA_DOMICILIO = `https://wa.me/5563848436460?text=${encodeURIComponent(
  "Oi Leandro, prefiro atendimento em domicílio. Posso saber as condições?"
)}`;

export default function Espaco() {
  return (
    <section
      id="espaco"
      className="relative bg-ve-bg-soft text-ve-cream py-24 md:py-32 overflow-hidden border-t border-[color:var(--ve-line)]"
    >
      <Spotlight color="rgba(201, 183, 156, 0.4)" size={520} intensity={0.35} />
      <GlowOrb
        color="#6E2A4A"
        size="700px"
        opacity={0.14}
        position={{ right: "-200px", top: "20%" }}
      />

      <div className="container-x relative">
        {/* Cabeçalho */}
        <Reveal direction="up" className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="eyebrow text-ve-champagne mb-6">Onde acontece</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              Escolha como{" "}
              <span className="display-italic text-ve-champagne">receber</span>.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ve-cream/80 leading-relaxed text-base md:text-lg max-w-xl font-light">
              Atendimento privativo em{" "}
              <strong className="text-ve-cream">duas modalidades</strong>. Cada
              uma com endereço, fluxo e WhatsApp próprios — você escolhe e o
              link já abre com a mensagem certa.
            </p>
          </div>
        </Reveal>

        {/* 2 cards · Clínica (com mapa) × Domicílio (com cobertura) */}
        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--ve-line)]">
          {/* CARD 1 · CLÍNICA · entra da esquerda */}
          <Reveal
            direction="right"
            className="bg-ve-bg-card flex flex-col"
            duration={1}
          >
            {/* Mapa embed · vira a "imagem" do card */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-ve-bg-soft overflow-hidden">
              <iframe
                src={EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{
                  border: 0,
                  filter:
                    "grayscale(0.4) brightness(0.85) saturate(0.9)",
                }}
                title={`Mapa · ${CLINICA_NOME}`}
                allowFullScreen
              />
              <p className="absolute top-4 left-4 eyebrow text-[10px] text-ve-cream bg-ve-bg/85 px-3 py-1.5 backdrop-blur-sm">
                Opção 1 · Clínica
              </p>
            </div>

            <div className="p-8 md:p-10 flex flex-col gap-5 flex-1">
              <h3 className="display text-2xl md:text-3xl text-ve-cream">
                Na clínica parceira
              </h3>

              <div className="flex items-start gap-3">
                <IconMapa className="w-4 h-4 text-ve-champagne mt-1 flex-shrink-0" />
                <div>
                  <p className="text-ve-cream font-medium text-sm leading-snug">
                    {CLINICA_NOME}
                  </p>
                  <p className="text-ve-muted text-xs mt-1">
                    {CLINICA_ENDERECO}
                  </p>
                  <p className="text-ve-muted text-xs">
                    {CLINICA_BAIRRO}
                  </p>
                </div>
              </div>

              <p className="text-ve-cream/75 text-xs leading-relaxed">
                Ambiente preparado pra atendimento privativo · sala dedicada à
                sua sessão · estacionamento e acesso fácil.
              </p>

              <div className="mt-auto pt-4 flex flex-col gap-2.5 border-t border-[color:var(--ve-line)]">
                <a
                  href={WA_CLINICA}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 bg-ve-cream text-ve-bg px-5 py-3 text-sm font-medium hover:bg-ve-champagne transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  Agendar na clínica
                  <IconArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={MAPS_ROUTE}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 text-ve-champagne hover:text-ve-cream text-xs eyebrow transition-colors py-1"
                >
                  Traçar rota no Google Maps
                  <IconArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* CARD 2 · DOMICÍLIO · entra da direita */}
          <Reveal
            direction="left"
            className="bg-ve-bg-card flex flex-col"
            duration={1}
            delay={0.1}
          >
            {/* Imagem textura linho · vira a "imagem" do card */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-ve-bg overflow-hidden">
              <Image
                src="/img/textureLinen.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,11,8,0.15) 0%, rgba(15,11,8,0.75) 100%)",
                }}
              />
              <p className="absolute top-4 left-4 eyebrow text-[10px] text-ve-cream bg-ve-bg/85 px-3 py-1.5 backdrop-blur-sm">
                Opção 2 · Domicílio
              </p>
              <p className="absolute bottom-5 left-5 display text-2xl text-ve-cream">
                Em casa
              </p>
            </div>

            <div className="p-8 md:p-10 flex flex-col gap-5 flex-1">
              <h3 className="display text-2xl md:text-3xl text-ve-cream">
                Em domicílio
              </h3>

              <div className="flex items-start gap-3">
                <IconMapa className="w-4 h-4 text-ve-champagne mt-1 flex-shrink-0" />
                <div>
                  <p className="text-ve-cream font-medium text-sm leading-snug">
                    Cobertura · Palmas-TO
                  </p>
                  <p className="text-ve-muted text-xs mt-1">
                    Plano Sul · Plano Norte · Aurenys
                  </p>
                </div>
              </div>

              <p className="text-ve-cream/75 text-xs leading-relaxed">
                Eu levo maca portátil profissional, óleos, esfoliantes e todo o
                material necessário · você não precisa preparar nada ·
                privacidade máxima.
              </p>

              <div className="mt-auto pt-4 flex flex-col gap-2.5 border-t border-[color:var(--ve-line)]">
                <a
                  href={WA_DOMICILIO}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 bg-ve-burgundy text-ve-cream px-5 py-3 text-sm font-medium hover:bg-ve-burgundy/85 transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  Agendar em casa
                  <IconArrowRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-center text-ve-muted text-xs eyebrow py-1">
                  Bairros fora da cobertura · consultar pelo WhatsApp
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Linha de apoio */}
        <Reveal
          direction="up"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ve-muted text-xs eyebrow"
        >
          <span className="flex items-center gap-2">
            <IconClock className="w-4 h-4 text-ve-champagne" />
            Atendimento por hora marcada
          </span>
          <span className="text-ve-cream/40">·</span>
          <span>Uma cliente por turno</span>
          <span className="text-ve-cream/40">·</span>
          <span>Agenda flexível sob consulta</span>
        </Reveal>
      </div>
    </section>
  );
}
