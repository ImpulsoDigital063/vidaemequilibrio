"use client";

import { useEffect, useRef, useState, useMemo, type ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { IconSearch, IconClose, IconArrowRight } from "./Icons";
import {
  searchItems,
  getSugestoes,
  type SearchItem,
} from "@/lib/searchIndex";

type Props = {
  open: boolean;
  onClose: () => void;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Foco automático quando abre
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  // Esc fecha · Ctrl/Cmd+K abre (handled outside)
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Trava scroll do body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const resultados = useMemo<SearchItem[]>(() => {
    if (query.trim().length < 2) return getSugestoes();
    return searchItems(query, 10);
  }, [query]);

  const isShowingSugestoes = query.trim().length < 2;

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-ve-bg/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={onClose}
            aria-hidden
          />

          {/* Painel · slide down do topo */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Buscar no site"
            className="fixed inset-x-0 top-0 z-[101] flex justify-center pt-6 md:pt-20 pointer-events-none"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="w-full max-w-2xl mx-4 bg-ve-bg-soft border border-[color:var(--ve-line)] shadow-2xl pointer-events-auto">
              {/* Linha do input */}
              <div className="flex items-center gap-4 px-5 py-4 border-b border-[color:var(--ve-line)]">
                <IconSearch className="w-5 h-5 text-ve-champagne flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setQuery(e.target.value)
                  }
                  placeholder="Buscar massagem, conteúdo, modalidade…"
                  className="flex-1 bg-transparent border-0 outline-none text-ve-cream placeholder:text-ve-muted text-base md:text-lg"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="text-ve-muted hover:text-ve-cream transition-colors px-2 py-1 -mr-2 flex items-center gap-2"
                  aria-label="Fechar busca"
                >
                  <span className="hidden md:inline text-[10px] eyebrow">
                    Esc
                  </span>
                  <IconClose className="w-4 h-4" />
                </button>
              </div>

              {/* Eyebrow */}
              <div className="px-5 pt-4 pb-2">
                <p className="eyebrow text-ve-terracota text-[0.65rem]">
                  {isShowingSugestoes
                    ? "Sugestões"
                    : resultados.length === 0
                    ? "Nenhum resultado"
                    : `${resultados.length} resultado${
                        resultados.length === 1 ? "" : "s"
                      }`}
                </p>
              </div>

              {/* Resultados */}
              <ul className="max-h-[60vh] overflow-y-auto pb-3">
                {resultados.length === 0 ? (
                  <li className="px-5 py-12 text-center text-ve-muted text-sm">
                    Não encontramos isso. Tente <em>drenagem</em>,{" "}
                    <em>day premium</em>, <em>vale</em> ou <em>blog</em>.
                  </li>
                ) : (
                  resultados.map((r, i) => (
                    <li key={`${r.href}-${i}`}>
                      <Link
                        href={r.href}
                        onClick={onClose}
                        className="group flex items-center gap-4 px-5 py-3.5 hover:bg-ve-bg-card transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[0.6rem] eyebrow text-ve-terracota">
                              {r.categoria}
                            </span>
                          </div>
                          <p className="display text-ve-cream text-base md:text-lg leading-tight">
                            {r.titulo}
                          </p>
                          <p className="text-ve-muted text-xs mt-1 line-clamp-1">
                            {r.descricao}
                          </p>
                        </div>
                        <IconArrowRight className="w-4 h-4 text-ve-champagne flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))
                )}
              </ul>

              {/* Rodapé · dica de atalho */}
              <div className="px-5 py-3 border-t border-[color:var(--ve-line)] flex items-center justify-between text-[10px] eyebrow text-ve-muted">
                <span>Pressione Enter pra abrir</span>
                <span className="hidden md:flex items-center gap-2">
                  <kbd className="px-1.5 py-0.5 border border-[color:var(--ve-line)] rounded">
                    ↑↓
                  </kbd>
                  navegar
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
