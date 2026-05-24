import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconArrowRight } from "@/components/Icons";
import { POSTS_PUBLICADOS, POSTS_DRAFT } from "@/content/posts";

export const metadata = {
  title: "Conteúdo · Vida em Equilíbrio · Massagem terapêutica feminina em Palmas-TO",
  description:
    "Estudo aberto sobre técnicas de massagem, drenagem linfática, recovery muscular, ATM, autocuidado feminino. Conteúdo escrito por Leandro Timóteo.",
};

function formatarData(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ve-cream text-ve-text-dark">
        {/* HERO */}
        <section className="container-x py-20 md:py-32 border-b border-ve-text-dark/10">
          <p className="eyebrow text-ve-terracota mb-6">Conteúdo · em construção</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.05] max-w-3xl text-ve-text-dark">
            Um espaço para{" "}
            <span className="display-italic text-ve-burgundy">estudo aberto</span>.
          </h1>
          <p className="mt-8 text-ve-text-dark/75 leading-relaxed text-base md:text-lg font-light max-w-2xl">
            Textos sobre as técnicas, o que o corpo pede em cada fase, e o
            que a literatura mostra sobre cuidado terapêutico. Sem
            promessa milagrosa, sem jargão técnico exibicionista.
          </p>
        </section>

        {/* PUBLICADOS */}
        {POSTS_PUBLICADOS.length > 0 && (
          <section className="container-x py-16 md:py-24">
            <p className="eyebrow text-ve-terracota mb-10">Publicados</p>
            <div className="grid md:grid-cols-2 gap-px bg-ve-text-dark/10">
              {POSTS_PUBLICADOS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-ve-cream p-8 md:p-10 flex flex-col hover:bg-ve-cream-soft transition-colors"
                >
                  {p.hero && (
                    <div className="aspect-[16/10] relative overflow-hidden mb-6 -mx-8 md:-mx-10 -mt-8 md:-mt-10">
                      <Image
                        src={p.hero}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(15,11,8,0) 50%, rgba(15,11,8,0.6) 100%)",
                        }}
                      />
                      <p className="absolute bottom-5 left-5 eyebrow text-ve-cream/80">
                        {p.categoria} · {p.leitura}
                      </p>
                    </div>
                  )}
                  <h2 className="display text-2xl md:text-3xl text-ve-text-dark leading-tight">
                    {p.titulo}
                  </h2>
                  <p className="mt-4 text-ve-text-dark/70 text-sm leading-relaxed">
                    {p.intro}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-ve-text-dark/55 eyebrow">
                      {p.publishedAt && formatarData(p.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-ve-burgundy group-hover:gap-3 transition-all">
                      Ler
                      <IconArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* DRAFTS · em breve */}
        {POSTS_DRAFT.length > 0 && (
          <section className="container-x py-16 md:py-24 border-t border-ve-text-dark/10">
            <p className="eyebrow text-ve-terracota mb-10">Em breve · linha editorial mensal</p>
            <ul className="divide-y divide-ve-text-dark/10">
              {POSTS_DRAFT.map((p) => (
                <li key={p.slug} className="py-6 grid md:grid-cols-12 gap-6 items-baseline">
                  <p className="md:col-span-2 eyebrow text-ve-terracota">{p.categoria}</p>
                  <h3 className="md:col-span-8 display text-lg md:text-xl text-ve-text-dark leading-snug">
                    {p.titulo}
                  </h3>
                  <span className="md:col-span-2 text-xs text-ve-text-dark/50 eyebrow md:text-right">
                    {p.leitura}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-ve-text-dark/55 text-xs eyebrow text-center">
              {POSTS_PUBLICADOS.length} publicados · {POSTS_DRAFT.length} na fila editorial
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
