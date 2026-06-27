import Image from "next/image";
import Link from "next/link";
import { MarcaDagua, IconArrowRight, IconWhatsApp } from "./Icons";
import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";
import Parallax from "./motion/Parallax";
import GlowOrb from "./motion/GlowOrb";
import Spotlight from "./motion/Spotlight";

const WA = `https://wa.me/5563984843646?text=${encodeURIComponent(
  "Oii! Vim pelo site e quero conversar sobre uma massagem. Pode me ajudar?"
)}`;

// id mantido como "manifesto" (menu "Sobre" e busca já apontam pra cá)
export default function ManifestoLeandro() {
  return (
    <section
      id="manifesto"
      className="relative text-ve-cream py-24 md:py-32 overflow-hidden"
    >
      {/* Spotlight do mouse · sutil · só desktop */}
      <Spotlight color="rgba(201, 183, 156, 0.4)" size={520} intensity={0.4} />

      {/* GlowOrb terracota · profundidade espacial */}
      <GlowOrb
        color="#8B6342"
        size="700px"
        opacity={0.16}
        position={{ left: "-200px", top: "40%" }}
      />

      {/* Marca d'água decorativa atrás do conteúdo */}
      <MarcaDagua
        color="#C9B79C"
        opacity={0.05}
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[640px] pointer-events-none"
      />

      <div className="container-x relative grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Coluna foto · retrato editorial · entra da esquerda + parallax */}
        <Reveal
          direction="right"
          className="md:col-span-5 order-2 md:order-1"
          duration={1}
        >
          <div className="aspect-[4/5] border border-[color:var(--ve-line)] relative overflow-hidden">
            <Parallax speed={-0.2} className="absolute inset-0">
              <Image
                src="/img/timoteo-sobre.jpg"
                alt="Leandro Timóteo · massoterapeuta · Vida em Equilíbrio · Palmas-TO"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 480px"
                className="object-cover scale-105"
                style={{ objectPosition: "50% 20%" }}
                priority
              />
            </Parallax>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,11,8,0) 52%, rgba(15,11,8,0.62) 100%)",
              }}
            />
            <p className="absolute bottom-5 left-5 eyebrow text-ve-champagne text-[10px] z-10">
              Leandro Timóteo · massoterapeuta · Palmas-TO
            </p>
          </div>
        </Reveal>

        {/* Coluna texto · entra da direita */}
        <Reveal
          direction="left"
          className="md:col-span-7 order-1 md:order-2"
          duration={1}
        >
          <p className="eyebrow text-ve-champagne mb-6">Sobre</p>
          <h2 className="display text-3xl md:text-5xl leading-[1.1]">
            Quem vai cuidar de você{" "}
            <span className="display-italic text-ve-champagne">
              estuda o que faz
            </span>
            .
          </h2>

          <div className="mt-8 space-y-5 text-ve-cream/80 leading-relaxed text-base md:text-lg font-light max-w-xl">
            <p>
              Sou{" "}
              <strong className="text-ve-cream font-medium">
                Leandro Timóteo
              </strong>
              , massoterapeuta em Palmas. A Vida em Equilíbrio nasceu de um jeito
              de atender: uma pessoa por turno, tempo dedicado, e a escuta antes
              da manobra — porque cada corpo chega com uma história.
            </p>
            <p>
              Não trabalho com promessa milagrosa. Te digo o que a técnica
              resolve, o que ela não resolve, e o que faz sentido pra você. Por
              isso tudo o que escrevo no blog vem{" "}
              <strong className="text-ve-cream font-medium">
                com as fontes citadas
              </strong>{" "}
              — pra você conferir, não só acreditar.
            </p>
            <p>
              Atendo dentro da CYOX ou em domicílio. Privativo, sem corredor de
              espera, com o tempo que o seu corpo pede.
            </p>
          </div>

          {/* Assinatura · a frase-âncora da marca */}
          <div className="mt-9 flex items-center gap-4">
            <span className="block w-10 h-px bg-ve-champagne/60 flex-shrink-0" />
            <p className="display-italic text-xl md:text-2xl text-ve-champagne">
              Cada massagem começa na escuta.
            </p>
          </div>

          <div className="hairline my-10" />

          <Stagger className="grid sm:grid-cols-3 gap-6" step={0.12}>
            <StaggerItem direction="up">
              <p className="display text-3xl text-ve-cream">Privativo</p>
              <p className="eyebrow text-ve-muted mt-1">Uma pessoa por turno</p>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="display text-3xl text-ve-cream">Honesto</p>
              <p className="eyebrow text-ve-muted mt-1">
                Técnica com fonte, sem milagre
              </p>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="display text-3xl text-ve-cream">Presente</p>
              <p className="eyebrow text-ve-muted mt-1">Escuta antes da manobra</p>
            </StaggerItem>
          </Stagger>

          {/* CTA duplo · agendar + prova de autoridade (blog) */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2.5 bg-ve-champagne text-ve-bg px-6 py-3.5 text-sm font-medium hover:bg-ve-cream transition-colors"
            >
              <IconWhatsApp className="w-4 h-4" />
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ve-champagne hover:text-ve-cream transition-colors text-sm font-medium"
            >
              Ver o que escrevo
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
