import Image from "next/image";
import { IconMapa, IconClock, IconArrowRight, IconWhatsApp } from "./Icons";

const WA_CLINICA = `https://wa.me/5563848436460?text=${encodeURIComponent(
  "Oi Leandro, quero agendar na clínica parceira (Setor Norte)."
)}`;
const WA_DOMICILIO = `https://wa.me/5563848436460?text=${encodeURIComponent(
  "Oi Leandro, prefiro atendimento em domicílio. Posso saber as condições?"
)}`;

export default function Espaco() {
  return (
    <section id="espaco" className="bg-ve-bg-soft text-ve-cream py-24 md:py-32">
      <div className="container-x">
        {/* Cabeçalho */}
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="eyebrow text-ve-champagne mb-6">Onde acontece</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              Escolha como{" "}
              <span className="display-italic text-ve-champagne">receber</span>.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ve-cream/80 leading-relaxed text-base md:text-lg max-w-xl font-light">
              Atendimento privativo em <strong className="text-ve-cream">duas modalidades</strong>.
              Cada uma com seu próprio fluxo de agendamento — você escolhe
              e o WhatsApp já abre com a mensagem certa.
            </p>
          </div>
        </div>

        {/* 2 cards · lado a lado */}
        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--ve-line)]">
          {/* Card 1 · Clínica */}
          <div className="bg-ve-bg-card p-8 md:p-10 flex flex-col">
            <div className="aspect-[16/10] relative overflow-hidden mb-6 -mx-8 md:-mx-10 -mt-8 md:-mt-10">
              <Image
                src="/img/ambientLowLight.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,11,8,0.1) 50%, rgba(15,11,8,0.85) 100%)",
                }}
              />
              <p className="absolute top-5 left-5 eyebrow text-ve-champagne">
                Opção 1
              </p>
              <p className="absolute bottom-5 left-5 display text-2xl text-ve-cream">
                Na clínica parceira
              </p>
            </div>

            <div className="flex-1 space-y-4 text-ve-cream/85 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <IconMapa className="w-4 h-4 text-ve-champagne mt-1 flex-shrink-0" />
                <div>
                  <p className="text-ve-cream font-medium text-sm">
                    CYOX Centro de Estética Avançada
                  </p>
                  <p className="text-ve-muted text-xs mt-1">
                    ACNO 01, Rua O1, LT 06, Sala 01 · Setor Norte · Palmas-TO
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed pl-7">
                Ambiente preparado pra atendimento privativo · sala dedicada
                à sua sessão · estacionamento e acesso fácil.
              </p>
            </div>

            <a
              href={WA_CLINICA}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-ve-cream text-ve-text-dark px-5 py-3 text-sm font-medium hover:bg-ve-champagne transition-colors"
            >
              <IconWhatsApp className="w-4 h-4" />
              Agendar na clínica
              <IconArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2 · Domicílio */}
          <div className="bg-ve-bg-card p-8 md:p-10 flex flex-col">
            <div className="aspect-[16/10] relative overflow-hidden mb-6 -mx-8 md:-mx-10 -mt-8 md:-mt-10 bg-ve-bg">
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
                    "linear-gradient(180deg, rgba(15,11,8,0.2) 50%, rgba(15,11,8,0.85) 100%)",
                }}
              />
              <p className="absolute top-5 left-5 eyebrow text-ve-champagne">
                Opção 2
              </p>
              <p className="absolute bottom-5 left-5 display text-2xl text-ve-cream">
                Em domicílio
              </p>
            </div>

            <div className="flex-1 space-y-4 text-ve-cream/85 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <IconMapa className="w-4 h-4 text-ve-champagne mt-1 flex-shrink-0" />
                <div>
                  <p className="text-ve-cream font-medium text-sm">
                    Cobertura · Palmas-TO
                  </p>
                  <p className="text-ve-muted text-xs mt-1">
                    Plano Sul · Plano Norte · Aurenys
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed pl-7">
                Eu levo maca portátil profissional, óleos, esfoliantes e
                todo o material necessário · você não precisa preparar
                nada · privacidade máxima.
              </p>
            </div>

            <a
              href={WA_DOMICILIO}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-ve-burgundy text-ve-cream px-5 py-3 text-sm font-medium hover:bg-ve-burgundy/85 transition-colors"
            >
              <IconWhatsApp className="w-4 h-4" />
              Agendar em casa
              <IconArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Linha de apoio */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ve-muted text-xs eyebrow">
          <span className="flex items-center gap-2">
            <IconClock className="w-4 h-4 text-ve-champagne" />
            Atendimento por hora marcada
          </span>
          <span className="text-ve-cream/40">·</span>
          <span>Uma cliente por turno</span>
          <span className="text-ve-cream/40">·</span>
          <span>Agenda flexível sob consulta</span>
        </div>
      </div>
    </section>
  );
}
