"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LogoMark, IconSearch } from "./Icons";
import SearchOverlay from "./SearchOverlay";

const NAV = [
  { href: "/#massagens", label: "Massagens" },
  { href: "/#clinica", label: "A Clínica" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/blog", label: "Blog" },
  { href: "/#manifesto", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // No topo da home o logo grande mora na Hero; no header ele só desliza ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const logoShown = pathname !== "/" || scrolled;

  // Cmd/Ctrl+K abre a busca em qualquer lugar
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Fecha drawer ao trocar pra desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => mq.matches && setOpen(false);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-ve-bg/85 backdrop-blur-md border-b border-[color:var(--ve-line)]">
        <div className="container-x flex items-center justify-between py-5 gap-6">
          <Link
            href="/"
            aria-hidden={!logoShown}
            className={`text-ve-cream hover:text-ve-champagne transition-all duration-500 ease-out flex-shrink-0 ${
              logoShown
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <LogoMark className="h-10 w-auto" />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-ve-cream/80 hover:text-ve-cream transition-colors whitespace-nowrap"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Ações desktop · busca + CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="group flex items-center gap-3 pl-3 pr-2 py-2 border border-[color:var(--ve-line)] hover:border-ve-champagne/40 text-ve-cream/60 hover:text-ve-cream transition-colors min-w-[180px] xl:min-w-[220px]"
              aria-label="Buscar no site"
            >
              <IconSearch className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs flex-1 text-left">Buscar…</span>
              <kbd className="text-[9px] eyebrow border border-[color:var(--ve-line)] px-1.5 py-0.5 text-ve-muted hidden xl:inline">
                ⌘K
              </kbd>
            </button>

            <a
              href="https://wa.me/5563984843646"
              target="_blank"
              rel="noopener"
              className="btn-ghost text-sm whitespace-nowrap"
            >
              Falar com a equipe
            </a>
          </div>

          {/* Mobile · busca + hamburguer */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-ve-cream p-2"
              aria-label="Buscar no site"
            >
              <IconSearch className="w-5 h-5" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="text-ve-cream p-2 relative w-9 h-9 flex items-center justify-center"
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              {/* Hambúrguer animado · 3 linhas */}
              <span className="absolute w-5 h-px bg-ve-cream -translate-y-1.5" />
              <span className="absolute w-5 h-px bg-ve-cream" />
              <span className="absolute w-5 h-px bg-ve-cream translate-y-1.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer mobile · com motion */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-ve-bg/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer · vem da esquerda */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-[61] w-[88%] max-w-sm bg-ve-bg border-r border-[color:var(--ve-line)] flex flex-col md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {/* Topo · logo + close X animado */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[color:var(--ve-line)]">
                <LogoMark className="h-9 w-auto text-ve-cream" />
                <button
                  onClick={() => setOpen(false)}
                  className="text-ve-cream relative w-9 h-9 flex items-center justify-center"
                  aria-label="Fechar menu"
                >
                  <span className="absolute w-5 h-px bg-ve-cream rotate-45" />
                  <span className="absolute w-5 h-px bg-ve-cream -rotate-45" />
                </button>
              </div>

              {/* Botão de busca dentro do drawer */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => setSearchOpen(true), 250);
                }}
                className="mx-6 mt-6 flex items-center gap-3 px-4 py-3 border border-[color:var(--ve-line)] text-ve-cream/65 hover:text-ve-cream hover:border-ve-champagne/40 transition-colors"
              >
                <IconSearch className="w-4 h-4" />
                <span className="text-sm">Buscar no site…</span>
              </button>

              {/* Nav stagger */}
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
                {NAV.map((n, i) => (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + i * 0.05,
                      ease: EASE,
                    }}
                    className="display text-3xl text-ve-cream py-3 hover:text-ve-champagne transition-colors border-b border-[color:var(--ve-line)]"
                  >
                    {n.label}
                  </motion.a>
                ))}
              </nav>

              {/* Rodapé · CTA WhatsApp */}
              <div className="px-6 pb-8 pt-4 border-t border-[color:var(--ve-line)]">
                <a
                  href="https://wa.me/5563984843646"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary w-full justify-center"
                >
                  Conversar pelo WhatsApp
                </a>
                <p className="mt-4 text-center text-ve-muted text-[10px] eyebrow">
                  Vida em Equilíbrio · Palmas-TO
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Overlay de busca · fullscreen */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
