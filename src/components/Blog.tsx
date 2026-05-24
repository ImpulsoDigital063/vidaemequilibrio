import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "./Icons";
import { POSTS_PUBLICADOS, POSTS_DRAFT } from "@/content/posts";

export default function Blog() {
  const destaques = POSTS_PUBLICADOS.slice(0, 2);
  return (
    <section className="bg-ve-cream text-ve-text-dark py-20 md:py-28">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-ve-terracota mb-4">Conteúdo</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.1]">
              Um espaço para{" "}
              <span className="display-italic text-ve-burgundy">estudo aberto</span>.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ve-text-dark/70 leading-relaxed text-sm md:text-base">
              Textos sobre técnicas, o que o corpo pede em cada fase, e o
              que a literatura mostra. Sem promessa milagrosa.
            </p>
          </div>
        </div>

        {/* Destaques publicados */}
        {destaques.length > 0 && (
          <div className="grid md:grid-cols-2 gap-px bg-ve-text-dark/10 mb-10">
            {destaques.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-ve-cream p-6 md:p-8 flex flex-col hover:bg-ve-cream-soft transition-colors"
              >
                {p.hero && (
                  <div className="aspect-[16/10] relative overflow-hidden mb-5 -mx-6 md:-mx-8 -mt-6 md:-mt-8">
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
                          "linear-gradient(180deg, rgba(15,11,8,0) 50%, rgba(15,11,8,0.55) 100%)",
                      }}
                    />
                    <p className="absolute bottom-4 left-4 eyebrow text-ve-cream/80 text-[0.6rem]">
                      {p.categoria}
                    </p>
                  </div>
                )}
                <h3 className="display text-xl md:text-2xl text-ve-text-dark leading-tight">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-ve-text-dark/65 text-sm leading-relaxed line-clamp-2">
                  {p.intro}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-ve-text-dark/50 eyebrow">
                    {p.leitura}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ve-burgundy group-hover:gap-3 transition-all">
                    Ler
                    <IconArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-ve-text-dark/10">
          <p className="text-xs text-ve-text-dark/55 eyebrow">
            {POSTS_PUBLICADOS.length} publicados · {POSTS_DRAFT.length} na fila editorial
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ve-burgundy hover:gap-3 transition-all"
          >
            Ver todos os conteúdos
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
