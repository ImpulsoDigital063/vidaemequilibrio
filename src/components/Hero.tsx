import Image from "next/image";
import { IconArrowDown, MarcaDagua } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-ve-bg">
      <div className="absolute inset-0">
        <Image
          src="/img/heroHands.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,11,8,0.35) 0%, rgba(15,11,8,0.65) 55%, rgba(15,11,8,0.95) 100%)",
          }}
        />
      </div>

      {/* Marca d'água decorativa · canto superior direito */}
      <MarcaDagua
        color="#F2EBE0"
        opacity={0.08}
        className="absolute top-32 right-6 md:right-16 w-40 md:w-64 pointer-events-none"
      />

      <div className="container-x relative z-10 pb-20 pt-32">
        <p className="eyebrow text-ve-champagne mb-6">
          Vida em Equilíbrio · Massagem terapêutica feminina · Palmas-TO
        </p>

        <h1 className="display text-ve-cream text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
          Que parte de você está{" "}
          <span className="display-italic text-ve-champagne">pedindo cuidado</span>{" "}
          hoje?
        </h1>

        <p className="mt-8 text-ve-cream/75 text-base md:text-lg max-w-xl leading-relaxed font-light">
          Atendimento privativo, em clínica parceira ou em domicílio. Massagens
          desenhadas para o que seu corpo está pedindo agora.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#objetivos" className="btn-primary">
            Escolher minha massagem
            <IconArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5563848436460"
            target="_blank"
            rel="noopener"
            className="btn-ghost"
          >
            Conversar agora
          </a>
        </div>

        <div className="mt-16 hidden md:flex items-center gap-2 text-ve-cream/50 text-xs">
          <IconArrowDown className="w-3 h-3 animate-pulse" />
          <span className="eyebrow">Comece pela pergunta certa</span>
        </div>
      </div>
    </section>
  );
}
