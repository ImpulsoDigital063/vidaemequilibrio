import Link from "next/link";
import { LogoMark, IconInstagram, IconWhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ve-bg text-ve-cream/70 border-t border-[color:var(--ve-line)] py-12">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <LogoMark className="h-12 w-auto text-ve-cream" />
            <p className="mt-4 text-sm leading-relaxed font-light max-w-sm">
              Massagem terapêutica em Palmas-TO. Atendimento privativo
              em clínica parceira ou em domicílio.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-ve-champagne mb-4">Massagens</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/day-premium" className="hover:text-ve-cream transition-colors">Day Premium</Link></li>
              <li><Link href="/massagem-relaxante" className="hover:text-ve-cream transition-colors">Relaxante</Link></li>
              <li><Link href="/drenagem-linfatica" className="hover:text-ve-cream transition-colors">Drenagem</Link></li>
              <li><Link href="/massagem-desportiva" className="hover:text-ve-cream transition-colors">Desportiva</Link></li>
              <li><Link href="/massagem-modeladora" className="hover:text-ve-cream transition-colors">Modeladora</Link></li>
              <li><Link href="/massagem-facial" className="hover:text-ve-cream transition-colors">Facial</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-ve-champagne mb-4">Contato</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5563984843646"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 hover:text-ve-cream transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  WhatsApp · (63) 98484-3646
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/timoteoofficial.__"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 hover:text-ve-cream transition-colors"
                >
                  <IconInstagram className="w-4 h-4" />
                  @timoteoofficial.__
                </a>
              </li>
              <li className="text-ve-muted">
                Atendimento em clínica parceira (Setor Norte) e domicílio
              </li>
              <li className="text-ve-muted">Palmas-TO · Brasil</li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ve-muted">
          <p>© {new Date().getFullYear()} Vida em Equilíbrio · Leandro Timóteo</p>
          <p className="eyebrow">Feito com cuidado em Palmas</p>
        </div>
      </div>
    </footer>
  );
}
