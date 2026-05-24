import Link from "next/link";
import Image from "next/image";
import {
  IconArrowRight,
  IconLeaf,
  IconCorrida,
  IconPedras,
  IconFlorescer,
} from "./Icons";
import { POSTS_PUBLICADOS, POSTS_DRAFT } from "@/content/posts";

const EIXOS = [
  {
    Icon: IconLeaf,
    titulo: "Drenagem & retenção",
    descricao:
      "Como o sistema linfático age no inchaço, quando faz diferença, e por que regularidade muda mais que sessão isolada.",
  },
  {
    Icon: IconCorrida,
    titulo: "Recovery esportivo",
    descricao:
      "Recuperação muscular pra corredora · janela das 48h pós-prova · liberação miofascial pré e pós-treino longo.",
  },
  {
    Icon: IconPedras,
    titulo: "Técnicas do cuidado",
    descricao:
      "Pedras quentes, vela aromática, bambu terapêutico, ventosaterapia · pra que serve cada uma, quando combinam.",
  },
  {
    Icon: IconFlorescer,
    titulo: "Auto-cuidado & escolha",
    descricao:
      "Por que cuidado feminino é nicho · prática regular vs presente esporádico · critérios pra escolher massagista.",
  },
];

export default function Blog() {
  const destaques = POSTS_PUBLICADOS.slice(0, 2);
  return (
    <section id="blog" className="bg-ve-cream text-ve-text-dark py-24 md:py-32">
      <div className="container-x">
        {/* HERO da seção · promessa editorial */}
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-7">
            <p className="eyebrow text-ve-terracota mb-5">
              Blog · Vida em Equilíbrio
            </p>
            <h2 className="display text-3xl md:text-5xl leading-[1.08] text-ve-text-dark">
              Você sai sabendo{" "}
              <span className="display-italic text-ve-burgundy">
                o que seu corpo está pedindo
              </span>
              .
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ve-text-dark/75 leading-relaxed text-base md:text-lg font-light">
              Aqui não tem promessa milagrosa, frase de auto-ajuda nem
              técnica vendida como exclusiva. Tem o que a literatura
              mostra sobre cada manobra, quando indica, quando não, e
              como traduzir isso pra um corpo específico — o seu.
            </p>
            <p className="mt-4 text-ve-text-dark/65 text-sm">
              Conteúdo escrito por <strong className="text-ve-burgundy">Leandro Timóteo</strong> · publicado mensalmente.
            </p>
          </div>
        </div>

        {/* 4 eixos editoriais · o que vão aprender */}
        <div className="mb-16 md:mb-20">
          <p className="eyebrow text-ve-terracota mb-8">O que você vai aprender</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ve-text-dark/10">
            {EIXOS.map((eixo) => {
              const { Icon } = eixo;
              return (
                <div
                  key={eixo.titulo}
                  className="bg-ve-cream p-7 md:p-8 flex flex-col"
                >
                  <Icon className="w-7 h-7 text-ve-burgundy mb-5" />
                  <h3 className="display text-lg md:text-xl text-ve-text-dark leading-tight mb-3">
                    {eixo.titulo}
                  </h3>
                  <p className="text-ve-text-dark/70 text-sm leading-relaxed">
                    {eixo.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Destaques publicados */}
        {destaques.length > 0 && (
          <div>
            <p className="eyebrow text-ve-terracota mb-8">
              Leitura disponível agora
            </p>
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

            {/* Rodapé · contagem + CTA */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-ve-text-dark/10">
              <p className="text-xs text-ve-text-dark/55 eyebrow">
                {POSTS_PUBLICADOS.length} publicados · {POSTS_DRAFT.length} na
                fila editorial
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-ve-burgundy hover:gap-3 transition-all"
              >
                Ver todos os conteúdos do blog
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
