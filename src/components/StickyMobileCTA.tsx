"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconWhatsApp, IconArrowRight } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Barra fixa no rodapé mobile com CTA WhatsApp.
 * Aparece após scroll > 280px (passa do hero) e some no fim (FAQ/Footer).
 * Desktop: hidden.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      // Mostra após passar 280px · esconde nos últimos 600px (próximo do WhatsAppCTA da seção final)
      const shouldShow = y > 280 && y < max - 600;
      setVisible(shouldShow);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-ve-bg/95 backdrop-blur-md border-t border-[color:var(--ve-line)] px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]"
        >
          <a
            href="https://wa.me/5563848436460?text=Oi%20Leandro%2C%20quero%20conhecer%20o%20Vida%20em%20Equil%C3%ADbrio"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-3 w-full bg-ve-champagne text-ve-bg py-3.5 text-sm font-medium hover:bg-ve-cream transition-colors"
            aria-label="Conversar com Leandro pelo WhatsApp"
          >
            <IconWhatsApp className="w-5 h-5" />
            <span>Conversar pelo WhatsApp</span>
            <IconArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
