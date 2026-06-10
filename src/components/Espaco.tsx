import Image from "next/image";
import {
  IconMapa,
  IconClock,
  IconArrowRight,
  IconWhatsApp,
  IconPorta,
  IconClima,
  IconRecepcao,
  MarkArcoEquilibrio,
} from "./Icons";
import Reveal from "./motion/Reveal";
import GlowOrb from "./motion/GlowOrb";
import Spotlight from "./motion/Spotlight";

// ============== Clínica (CYOX) ==============
const CLINICA_NOME = "CYOX — Instituto de Estética Avançada";
const CLINICA_ENDERECO = "ACNO 01, Rua O1, LT 06, Sala 01 · Setor Norte · Palmas-TO";

const QUERY_MAPS = encodeURIComponent(
  `CYOX Instituto de Estética Avançada, ACNO 01 Rua O1 Setor Norte Palmas TO`
);
const EMBED_URL = `https://www.google.com/maps?q=${QUERY_MAPS}&hl=pt-BR&z=15&output=embed`;
const MAPS_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${QUERY_MAPS}`;

const FATOS = [
  { icon: IconPorta, label: "Sala própria" },
  { icon: IconClima, label: "Ambiente climatizado" },
  { icon: IconRecepcao, label: "Recepção" },
  { icon: IconClock, label: "Hora marcada" },
];

// ============== WhatsApp ==============
const WA_CLINICA = `https://wa.me/5563848436460?text=${encodeURIComponent(
  "Olá! Quero agendar na clínica (CYOX · Setor Norte)."
)}`;
const WA_DOMICILIO = `https://wa.me/5563848436460?text=${encodeURIComponent(
  "Olá! Prefiro atendimento a domicílio. Quais as condições?"
)}`;

export default function Espaco() {
  return (
    <section
      id="clinica"
      className="relative text-ve-cream py-24 md:py-32 overflow-hidden"
    >
      <Spotlight color="rgba(201, 183, 156, 0.4)" size={520} intensity={0.35} />
      <GlowOrb
        color="#8B6342"
        size="700px"
        opacity={0.14}
        position={{ right: "-200px", top: "20%" }}
      />

      <div className="container-x relative">
        {/* Cabeçalho */}
        <Reveal direction="up" className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="eyebrow text-ve-champagne mb-6">A Clínica</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              Um espaço pronto pra te{" "}
              <span className="display-italic text-ve-champagne">receber</span>.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ve-cream/85 leading-[1.7] text-lg md:text-2xl max-w-2xl font-light tracking-[0.01em]">
              A Vida em Equilíbrio atende dentro da{" "}
              <span className="display-italic text-ve-champagne">
                CYOX — Instituto de Estética Avançada
              </span>
              , no Plano Diretor Norte, em Palmas. Você escolhe como ser
              atendida: na clínica ou no conforto da sua casa.
            </p>
          </div>
        </Reveal>

        {/* CLÍNICA · destaque imagem + marca CYOX */}
        <Reveal
          direction="up"
          duration={1}
          className="grid md:grid-cols-2 overflow-hidden mb-12 md:mb-16"
        >
          {/* Imagem do ambiente (placeholder até a foto real da CYOX) */}
          <div className="relative h-80 sm:h-[26rem] md:h-auto md:min-h-[580px]">
            <Image
              src="/img/cyox-fachada.jpg"
              alt="Fachada da CYOX · Instituto de Estética Avançada · Palmas-TO"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-ve-bg via-ve-bg/15 to-transparent" />
            <span className="absolute top-5 left-5 uppercase tracking-[0.18em] text-[10px] font-semibold text-ve-bg bg-ve-champagne px-3 py-1.5">
              Onde você é cuidada
            </span>
          </div>

          {/* Conteúdo · marca CYOX elevada */}
          <div className="p-8 md:p-12 flex flex-col gap-6 justify-center">
            {/* Logo oficial da CYOX */}
            <Image
              src="/img/cyox-logo.png"
              alt="CYOX · Instituto de Estética Avançada"
              width={520}
              height={431}
              className="w-44 md:w-52 h-auto"
            />

            <p className="text-ve-cream/80 text-sm md:text-base leading-relaxed">
              Um instituto de estética avançada já estabelecido em Palmas — onde a
              massagem terapêutica e a estética dividem o mesmo endereço.
              Cuidado completo num lugar só.
            </p>

            {/* Fatos · mini-cards com ícone */}
            <div className="grid grid-cols-2 gap-2.5">
              {FATOS.map((f) => {
                const FIcon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 border border-ve-champagne/20 bg-ve-bg/30 px-3.5 py-3 hover:border-ve-champagne/50 transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-ve-champagne/10 text-ve-champagne flex-shrink-0">
                      <FIcon className="w-[18px] h-[18px]" />
                    </span>
                    <span className="text-xs md:text-sm text-ve-cream/85 leading-tight">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Endereço */}
            <div className="flex items-start gap-3">
              <IconMapa className="w-4 h-4 text-ve-champagne mt-0.5 flex-shrink-0" />
              <p className="text-ve-muted text-xs leading-relaxed">
                {CLINICA_ENDERECO}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_CLINICA}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-ve-cream text-ve-bg px-5 py-3 text-sm font-medium hover:bg-ve-champagne transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
                Agendar na clínica
              </a>
              <a
                href={MAPS_ROUTE}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 border border-ve-cream/30 text-ve-cream px-5 py-3 text-sm font-medium hover:bg-ve-cream hover:text-ve-bg transition-colors"
              >
                Ver rota
                <IconArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* MAPA · tratamento de marca + pin custom + cartão flutuante */}
        <Reveal
          direction="up"
          className="relative h-72 md:h-80 overflow-hidden mb-12 md:mb-16 border border-ve-champagne/15"
        >
          <iframe
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              border: 0,
              filter: "grayscale(0.85) brightness(0.7) contrast(1.05) sepia(0.35)",
            }}
            title={`Mapa · ${CLINICA_NOME}`}
          />
          {/* Tint burgundy de marca */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139,99,66,0.25) 0%, rgba(15,11,8,0.55) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Vinheta · funde no escuro da seção */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_90px_36px_rgba(15,11,8,0.75)]" />

          {/* Pin custom · símbolo Arco+Ponto */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[150%] pointer-events-none">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ve-terracota border-2 border-ve-champagne/70 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
                <MarkArcoEquilibrio color="#F2EBE0" thickness={2.4} className="w-6 h-6" />
              </div>
              <div className="w-3 h-3 bg-ve-terracota border-r-2 border-b-2 border-ve-champagne/70 rotate-45 -mt-1.5" />
            </div>
          </div>

          {/* Cartão flutuante · endereço + rota */}
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-ve-bg/85 backdrop-blur-md border border-ve-champagne/20 p-4 flex items-center justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.18em] text-[10px] font-semibold text-ve-champagne">
                CYOX · Setor Norte
              </p>
              <p className="text-ve-cream/80 text-xs mt-1 leading-snug">
                {CLINICA_ENDERECO}
              </p>
            </div>
            <a
              href={MAPS_ROUTE}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-ve-cream hover:text-ve-champagne text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0"
            >
              Traçar rota
              <IconArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>

        {/* DOMICÍLIO · bloco image-led */}
        <Reveal
          direction="up"
          className="grid md:grid-cols-2 overflow-hidden"
        >
          {/* Imagem em ARCO · quebra o padrão retangular · ecoa o símbolo da marca */}
          <div className="relative flex items-center justify-center p-8 md:p-12 md:order-2 overflow-hidden min-h-[400px]">
            <GlowOrb
              color="#8B6342"
              size="420px"
              opacity={0.35}
              position={{ left: "50%", top: "45%" }}
            />
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-t-[140px] overflow-hidden border border-ve-champagne/25 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/img/domicilio-massagem.jpg"
                alt="Atendimento de massagem a domicílio · Vida em Equilíbrio · Palmas-TO"
                fill
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ve-bg/40 to-transparent" />
            </div>
            <span className="absolute top-6 left-6 md:left-10 uppercase tracking-[0.18em] text-[10px] font-semibold text-ve-cream bg-ve-terracota px-3 py-1.5 z-10">
              A domicílio
            </span>
          </div>

          {/* Conteúdo */}
          <div className="p-8 md:p-12 flex flex-col gap-5 justify-center md:order-1">
            <div>
              <p className="eyebrow text-ve-champagne mb-3">
                Atendimento a domicílio · Palmas
              </p>
              <h3 className="display text-3xl md:text-4xl text-ve-cream leading-[1.05]">
                A massagem vai{" "}
                <span className="display-italic text-ve-champagne">até você</span>.
              </h3>
            </div>
            <p className="text-ve-cream/80 text-sm md:text-base leading-relaxed">
              A mesma técnica da clínica, com a privacidade de estar em casa.
              Sem deslocamento, sem trânsito — você só relaxa.
            </p>

            {/* Como funciona · 3 passos · quebra a objeção de "dá trabalho" */}
            <div className="flex flex-col gap-4">
              {[
                {
                  n: "01",
                  t: "Você agenda",
                  d: "Marca o horário e passa o endereço pelo WhatsApp.",
                },
                {
                  n: "02",
                  t: "Eu levo tudo",
                  d: "Maca profissional e os cremes — chego pronto pra te atender.",
                },
                {
                  n: "03",
                  t: "Você só relaxa",
                  d: "Monto tudo no seu espaço e cuido de você.",
                },
              ].map((passo) => (
                <div key={passo.n} className="flex gap-4">
                  <span className="display text-lg text-ve-champagne/80 leading-none pt-1">
                    {passo.n}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ve-cream">{passo.t}</p>
                    <p className="text-sm leading-relaxed text-ve-cream/65">
                      {passo.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WA_DOMICILIO}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center sm:self-start gap-2 bg-ve-champagne text-ve-bg px-6 py-3.5 text-sm font-medium hover:bg-ve-cream transition-colors whitespace-nowrap"
            >
              <IconWhatsApp className="w-4 h-4" />
              Agendar em casa
            </a>
          </div>
        </Reveal>

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
          <span>Agenda flexível sob consulta</span>
        </Reveal>
      </div>
    </section>
  );
}
