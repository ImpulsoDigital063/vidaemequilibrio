import { IconWhatsApp, IconArrowRight, MarcaDagua } from "./Icons";
import Reveal from "./motion/Reveal";

export default function WhatsAppCTA() {
  return (
    <section
      id="contato"
      className="relative bg-ve-burgundy text-ve-cream py-24 md:py-36 overflow-hidden"
    >
      <MarcaDagua
        color="#F2EBE0"
        opacity={0.07}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] pointer-events-none"
      />
      <Reveal direction="blur" duration={1.2} className="container-x relative text-center">
        <p className="eyebrow text-ve-champagne mb-6">Vamos conversar</p>

        <h2 className="display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto">
          O próximo movimento{" "}
          <span className="display-italic">é seu</span>.
        </h2>

        <p className="mt-8 text-ve-cream/80 max-w-xl mx-auto leading-relaxed font-light">
          Conte rápido o que seu corpo está pedindo. Eu respondo pelo WhatsApp e
          combinamos a massagem certa.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5563848436460?text=Oi%20Leandro%2C%20quero%20saber%20mais%20sobre%20os%20rituais%20do%20Vida%20em%20Equil%C3%ADbrio"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 bg-ve-cream text-ve-burgundy px-8 py-4 text-base font-medium hover:bg-ve-champagne transition-colors"
          >
            <IconWhatsApp className="w-5 h-5" />
            Conversar pelo WhatsApp
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-8 text-ve-cream/60 text-sm">
          Atendimento por mensagem · respondido em até 12h em dias úteis
        </p>
      </Reveal>
    </section>
  );
}
