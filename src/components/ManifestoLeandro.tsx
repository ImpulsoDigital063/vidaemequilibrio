import Image from "next/image";
import { MarcaDagua } from "./Icons";
import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";

export default function ManifestoLeandro() {
  return (
    <section id="manifesto" className="relative bg-ve-bg text-ve-cream py-24 md:py-32 overflow-hidden">
      {/* Marca d'água decorativa atrás do conteúdo */}
      <MarcaDagua
        color="#C9B79C"
        opacity={0.05}
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[640px] pointer-events-none"
      />
      <div className="container-x relative grid md:grid-cols-12 gap-10 items-center">
        {/* Coluna foto · still life mãos cinematográfico · entra da esquerda */}
        <Reveal direction="right" className="md:col-span-5 order-2 md:order-1" duration={1}>
          <div className="aspect-[4/5] border border-[color:var(--ve-line)] relative overflow-hidden">
            <Image
              src="/img/stillManifesto.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,11,8,0) 60%, rgba(15,11,8,0.65) 100%)",
              }}
            />
            <p className="absolute bottom-5 left-5 eyebrow text-ve-champagne text-[10px]">
              Foto ensaio em curso · Leandro Timóteo
            </p>
          </div>
        </Reveal>

        {/* Coluna texto · entra da direita */}
        <Reveal direction="left" className="md:col-span-7 order-1 md:order-2" duration={1}>
          <p className="eyebrow text-ve-champagne mb-6">Quem cuida</p>
          <h2 className="display text-3xl md:text-5xl leading-[1.1]">
            Leandro Timóteo.{" "}
            <span className="display-italic text-ve-champagne">
              Massoterapeuta dedicado ao cuidado feminino.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-ve-cream/80 leading-relaxed text-base md:text-lg font-light max-w-xl">
            <p>
              Antes de abrir o Vida em Equilíbrio, foram anos me preparando — em
              estúdio, em sala de aula, no toque que insiste até virar técnica.
            </p>
            <p>
              Hoje a clínica está pronta, o método está pronto, e o tempo agora
              é seu. Atendo uma cliente por turno, em clínica parceira ou em
              domicílio, sempre com a mesma escuta antes da manobra.
            </p>
            <p>
              É um cuidado profissional, presente, e exclusivo para mulheres —
              porque é nessa direção que a minha técnica ganhou profundidade.
            </p>
          </div>

          <div className="hairline my-10" />

          <Stagger className="grid sm:grid-cols-3 gap-6" step={0.12}>
            <StaggerItem direction="up">
              <p className="display text-3xl text-ve-cream">Privativo</p>
              <p className="eyebrow text-ve-muted mt-1">Uma cliente por turno</p>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="display text-3xl text-ve-cream">Híbrido</p>
              <p className="eyebrow text-ve-muted mt-1">Clínica e domicílio</p>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="display text-3xl text-ve-cream">Exclusivo</p>
              <p className="eyebrow text-ve-muted mt-1">Público feminino</p>
            </StaggerItem>
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
