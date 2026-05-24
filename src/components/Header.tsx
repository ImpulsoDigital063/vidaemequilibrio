"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMark, IconMenu, IconClose } from "./Icons";

const NAV = [
  { href: "/#massagens", label: "Massagens" },
  { href: "/#manifesto", label: "Quem cuida" },
  { href: "/#espaco", label: "Onde acontece" },
  { href: "/#corridas", label: "Corridas" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ve-bg/85 backdrop-blur-md border-b border-[color:var(--ve-line)]">
      <div className="container-x flex items-center justify-between py-5">
        <Link href="/" className="text-ve-cream hover:text-ve-champagne transition-colors">
          <LogoMark className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ve-cream/80 hover:text-ve-cream transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="https://wa.me/5563848436460"
            target="_blank"
            rel="noopener"
            className="btn-ghost text-sm"
          >
            Falar com a equipe
          </a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-ve-cream"
          aria-label="Abrir menu"
        >
          <IconMenu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ve-bg flex flex-col">
          <div className="container-x flex items-center justify-between py-5">
            <LogoMark className="h-10 w-auto text-ve-cream" />
            <button
              onClick={() => setOpen(false)}
              className="text-ve-cream"
              aria-label="Fechar menu"
            >
              <IconClose className="w-6 h-6" />
            </button>
          </div>
          <nav className="container-x flex-1 flex flex-col gap-6 pt-12">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-2xl display text-ve-cream"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/5563848436460"
              target="_blank"
              rel="noopener"
              className="btn-primary mt-8 w-fit"
            >
              Conversar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
