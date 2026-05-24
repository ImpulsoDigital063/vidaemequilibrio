import Image from "next/image";
import { IconMapa, IconClock } from "./Icons";

export default function Espaco() {
  return (
    <section id="espaco" className="bg-ve-bg-soft text-ve-cream py-24 md:py-32">
      <div className="container-x grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <p className="eyebrow text-ve-champagne mb-6">Onde acontece</p>
          <h2 className="display text-3xl md:text-5xl leading-[1.1]">
            Em clínica parceira{" "}
            <span className="display-italic text-ve-champagne">ou na sua casa</span>.
          </h2>
          <p className="mt-8 text-ve-cream/80 leading-relaxed text-base md:text-lg max-w-xl font-light">
            Você escolhe como receber. Atendimento privativo em ambiente
            preparado ou no conforto da sua própria casa — com todo o
            equipamento que a sessão precisa.
          </p>

          <div className="hairline my-10" />

          <div className="space-y-6 text-ve-cream/90">
            <div className="flex items-start gap-4">
              <IconMapa className="w-5 h-5 text-ve-champagne mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">
                  Clínica parceira · CYOX Centro de Estética Avançada
                </p>
                <p className="text-ve-muted text-xs mt-1 leading-relaxed">
                  ACNO 01, Rua O1, LT 06, Sala 01 · Setor Norte · Palmas-TO
                  <br />
                  Parceria com Cleide Tosta · ambiente preparado para atendimento privativo
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconMapa className="w-5 h-5 text-ve-champagne mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Atendimento em domicílio</p>
                <p className="text-ve-muted text-xs mt-1 leading-relaxed">
                  Levo macas e produtos profissionais até a sua casa. Setor Norte e Sul de Palmas-TO.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconClock className="w-5 h-5 text-ve-champagne mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">
                  Atendimento por hora marcada
                </p>
                <p className="text-ve-muted text-xs mt-1">
                  Agenda flexível · horários estendidos sob consulta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="aspect-[4/5] relative overflow-hidden border border-[color:var(--ve-line)]">
            <Image
              src="/img/ambientLowLight.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,11,8,0) 50%, rgba(15,11,8,0.6) 100%)",
              }}
            />
            <p className="absolute bottom-6 left-6 eyebrow text-ve-cream/70">
              Foto do espaço real · pendente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
