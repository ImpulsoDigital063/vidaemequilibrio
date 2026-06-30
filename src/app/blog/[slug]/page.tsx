import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconArrowRight, IconArrowDown } from "@/components/Icons";
import {
  POSTS_PUBLICADOS,
  getPostBySlug,
  contarPalavras,
  getCta,
  getRelacionados,
} from "@/content/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.vidaemequilibriopalmas.com.br";

// Posts que oferecem a isca do guia de recovery (corredora/esporte)
const ISCA_RECOVERY = new Set([
  "massagem-desportiva-corredora",
  "lesoes-mais-comuns-corrida-palmas",
  "beach-tennis-lesoes-recovery-palmas",
]);
const WA_GUIA = `https://wa.me/5563984843646?text=${encodeURIComponent(
  "Oii! Queria o guia de recovery em PDF. Me manda?"
)}`;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return POSTS_PUBLICADOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.titulo} · Vida em Equilíbrio`,
    description: post.intro,
    keywords: post.keywords,
    authors: [{ name: "Leandro Timóteo" }],
    openGraph: {
      title: post.titulo,
      description: post.intro,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      ...(post.publishedAt && { publishedTime: post.publishedAt }),
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      authors: ["Leandro Timóteo"],
      section: post.categoria,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.titulo,
      description: post.intro,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

function formatarData(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Extrai H2 do markdown pra gerar TOC + adiciona id em cada h2 renderizado
function extrairTOC(md: string): { texto: string; id: string }[] {
  const re = /^##\s+(.+)$/gm;
  const out: { texto: string; id: string }[] = [];
  let m;
  while ((m = re.exec(md)) !== null) {
    const texto = m[1].trim();
    out.push({ texto, id: slugify(texto) });
  }
  return out;
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extrairTOC(post.conteudo);
  const wordCount = contarPalavras(post.conteudo);

  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const raw = tokens.map((t) => ("text" in t ? t.text : "")).join("");
        if (depth === 2) {
          const id = slugify(raw);
          return `<h2 id="${id}">${text}</h2>`;
        }
        return `<h${depth}>${text}</h${depth}>`;
      },
    },
  });
  marked.setOptions({ gfm: true, breaks: false });
  const html = marked.parse(post.conteudo) as string;
  const cta = getCta(post.slug);
  const relacionados = getRelacionados(post.slug);

  // ============== JSON-LD ==============

  // 1 · Article (rico em metadados pra Google + LLMs)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.intro,
    abstract: post.resumoExecutivo,
    articleBody: post.conteudo.slice(0, 5000),
    articleSection: post.categoria,
    keywords: post.keywords?.join(", "),
    about: post.about?.map((a) => ({ "@type": "Thing", name: a })),
    wordCount,
    inLanguage: "pt-BR",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: "Leandro Timóteo",
      jobTitle: "Massoterapeuta",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Vida em Equilíbrio",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: post.hero ? `${SITE_URL}${post.hero}` : undefined,
    citation: post.referencias?.map((r) => ({
      "@type": "CreativeWork",
      name: r.titulo,
      author: r.autor,
      datePublished: typeof r.ano === "number" ? String(r.ano) : undefined,
      publisher: r.fonte,
      url: r.url,
    })),
  };

  // 2 · FAQPage (rich result People-Also-Ask + LLMs)
  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((q) => ({
            "@type": "Question",
            name: q.pergunta,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.resposta,
            },
          })),
        }
      : null;

  // 3 · BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.titulo,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  // Outros 3 posts publicados pra "Leitura relacionada"
  const outros = POSTS_PUBLICADOS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="flex-1 bg-ve-cream text-ve-text-dark">
        <article>
          {/* Cabeçalho · breadcrumb · título */}
          <header className="container-x py-14 md:py-20 max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs eyebrow text-ve-text-dark/55 mb-8"
            >
              <Link href="/" className="hover:text-ve-burgundy transition-colors">
                Início
              </Link>
              <span>›</span>
              <Link
                href="/blog"
                className="hover:text-ve-burgundy transition-colors"
              >
                Blog
              </Link>
              <span>›</span>
              <span className="text-ve-text-dark/40">{post.categoria}</span>
            </nav>

            <p className="eyebrow text-ve-terracota mb-4">
              {post.categoria} · {post.leitura} · {wordCount.toLocaleString("pt-BR")}{" "}
              palavras
            </p>
            <h1 className="display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-ve-text-dark">
              {post.titulo}
            </h1>
            <p className="mt-8 display-italic text-ve-text-dark/75 text-lg md:text-xl leading-relaxed max-w-3xl">
              {post.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs eyebrow text-ve-text-dark/55">
              <span>Vida em Equilíbrio · Revisão clínica</span>
              {post.publishedAt && (
                <>
                  <span className="opacity-50">·</span>
                  <span>Publicado em {formatarData(post.publishedAt)}</span>
                </>
              )}
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <>
                  <span className="opacity-50">·</span>
                  <span>Revisado em {formatarData(post.updatedAt)}</span>
                </>
              )}
            </div>
          </header>

          {post.hero && (
            <div className="container-x max-w-4xl mb-12">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={post.hero}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Resumo executivo */}
          {post.resumoExecutivo && (
            <section className="container-x max-w-3xl pb-8">
              <div className="bg-ve-burgundy/[0.04] border-l-4 border-ve-burgundy p-6 md:p-8">
                <p className="eyebrow text-ve-burgundy mb-3">Resumo executivo</p>
                <p className="text-ve-text-dark/85 leading-relaxed text-sm md:text-base">
                  {post.resumoExecutivo}
                </p>
              </div>
            </section>
          )}

          {/* Sumário (TOC) · auto-gerado dos H2 */}
          {toc.length > 0 && (
            <section className="container-x max-w-3xl pb-12">
              <div className="border-t border-b border-ve-text-dark/15 py-6">
                <p className="eyebrow text-ve-terracota mb-4">Neste texto</p>
                <ol className="space-y-2 text-sm text-ve-text-dark/80 list-none counter-reset-[item]">
                  {toc.map((item, i) => (
                    <li key={item.id} className="flex gap-3">
                      <span className="text-ve-text-dark/40 tabular-nums w-6 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-ve-burgundy transition-colors flex-1"
                      >
                        {item.texto.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* Corpo do post · markdown renderizado */}
          <div className="container-x py-4 md:py-8 max-w-3xl">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* FAQ visível */}
          {post.faq && post.faq.length > 0 && (
            <section className="container-x py-12 md:py-16 max-w-3xl">
              <h2
                id="perguntas-frequentes"
                className="display text-2xl md:text-4xl text-ve-burgundy leading-tight mb-2"
              >
                Perguntas frequentes
              </h2>
              <p className="text-ve-text-dark/65 text-sm mb-8">
                Respostas curtas pras dúvidas mais comuns sobre o tema.
              </p>
              <div className="divide-y divide-ve-text-dark/15">
                {post.faq.map((q, i) => (
                  <details
                    key={i}
                    className="group py-5 cursor-pointer"
                    {...(i === 0 ? { open: true } : {})}
                  >
                    <summary className="flex items-start justify-between gap-6 list-none">
                      <h3 className="display text-lg md:text-xl text-ve-text-dark leading-snug flex-1">
                        {q.pergunta}
                      </h3>
                      <span className="text-ve-burgundy text-2xl leading-none group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-ve-text-dark/80 leading-relaxed text-sm md:text-base pr-12">
                      {q.resposta}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Isca · guia de recovery em PDF (gated por WhatsApp) */}
          {ISCA_RECOVERY.has(post.slug) && (
            <section className="container-x py-8 max-w-3xl">
              <div className="border border-ve-terracota/30 bg-ve-champagne/[0.10] p-7 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <p className="eyebrow text-ve-terracota mb-2">Guia grátis · PDF</p>
                  <h3 className="display text-xl md:text-2xl text-ve-text-dark leading-snug">
                    Recovery pré e pós-prova, num guia honesto
                  </h3>
                  <p className="mt-2 text-ve-text-dark/70 text-sm md:text-base">
                    O resumo prático do que fazer antes, depois e na janela de
                    48h. Te mando no WhatsApp, sem custo.
                  </p>
                </div>
                <a
                  href={WA_GUIA}
                  target="_blank"
                  rel="noopener"
                  className="shrink-0 inline-flex items-center gap-2 bg-ve-terracota text-ve-cream px-6 py-3 text-sm font-medium hover:bg-ve-terracota/85 transition-colors"
                >
                  Quero o guia
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          )}

          {/* CTA fim de post · contextual por tema */}
          <section className="container-x py-12 md:py-16 max-w-3xl">
            <div className="bg-ve-text-dark/5 border-l-4 border-ve-burgundy p-8 md:p-10">
              <p className="eyebrow text-ve-terracota mb-3">
                {cta?.eyebrow ?? "Pra conversar"}
              </p>
              <h2 className="display text-2xl md:text-3xl text-ve-text-dark leading-tight">
                {cta?.titulo ?? "Cada agenda é pensada caso a caso."}
              </h2>
              <p className="mt-4 text-ve-text-dark/75 text-sm md:text-base">
                {cta?.texto ??
                  "Se algo aqui fez sentido pra você, vamos conversar no WhatsApp · primeira resposta da equipe, depois entro pessoalmente."}
              </p>
              <a
                href={`https://wa.me/5563984843646?text=${encodeURIComponent(
                  cta?.msg ??
                    "Oii! Vim pelo blog e queria conversar sobre uma massagem."
                )}`}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 bg-ve-burgundy text-ve-cream px-6 py-3 text-sm font-medium hover:bg-ve-burgundy/85 transition-colors"
              >
                {cta?.label ?? "Conversar pelo WhatsApp"}
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Continue lendo · cluster interno */}
          {relacionados.length > 0 && (
            <section className="container-x py-12 md:py-16 max-w-3xl border-t border-ve-text-dark/10">
              <p className="eyebrow text-ve-terracota mb-6">Continue lendo</p>
              <div className="grid sm:grid-cols-2 gap-px bg-ve-text-dark/10">
                {relacionados.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group bg-ve-cream p-6 flex flex-col hover:bg-ve-text-dark/[0.03] transition-colors"
                  >
                    <span className="eyebrow text-ve-text-dark/45 text-[0.65rem] mb-3">
                      {r.categoria} · {r.leitura}
                    </span>
                    <h3 className="display text-lg md:text-xl text-ve-text-dark leading-snug">
                      {r.titulo}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ve-burgundy group-hover:gap-3 transition-all">
                      Ler
                      <IconArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Bibliografia · referências */}
          {post.referencias && post.referencias.length > 0 && (
            <section className="container-x py-12 md:py-16 max-w-3xl border-t border-ve-text-dark/10">
              <h2
                id="referencias"
                className="display text-2xl md:text-3xl text-ve-burgundy leading-tight mb-3"
              >
                Referências
              </h2>
              <p className="text-ve-text-dark/65 text-sm mb-8">
                Fontes citadas neste texto · revisões sistemáticas, RCTs,
                documentos oficiais e literatura técnica.
              </p>
              <ol className="space-y-4 text-sm text-ve-text-dark/85">
                {post.referencias.map((r, i) => (
                  <li key={i} className="flex gap-4 leading-relaxed">
                    <span className="text-ve-text-dark/40 tabular-nums w-7 text-right pt-[1px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <strong className="text-ve-text-dark">{r.autor}</strong>
                      {r.ano ? ` (${r.ano}). ` : ". "}
                      <em>{r.titulo}.</em>
                      {r.fonte && <> {r.fonte}.</>}{" "}
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener nofollow"
                        className="text-ve-burgundy underline underline-offset-2 hover:text-ve-terracota break-words"
                      >
                        {r.url.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-10 text-xs text-ve-text-dark/55 italic leading-relaxed">
                Este conteúdo tem caráter informativo · não substitui
                avaliação de profissional de saúde habilitado. Em quadros
                clínicos, sempre consulte fisioterapeuta, médico ou
                profissional regulamentado.
              </p>
            </section>
          )}

          {/* Leitura relacionada */}
          {outros.length > 0 && (
            <section className="container-x py-16 md:py-24 max-w-4xl border-t border-ve-text-dark/10">
              <p className="eyebrow text-ve-terracota mb-8">
                Leitura relacionada
              </p>
              <ul className="divide-y divide-ve-text-dark/10">
                {outros.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="py-6 grid md:grid-cols-12 gap-4 items-baseline hover:text-ve-burgundy transition-colors group"
                    >
                      <p className="md:col-span-3 eyebrow text-ve-terracota">
                        {p.categoria}
                      </p>
                      <h3 className="md:col-span-7 display text-lg md:text-xl text-ve-text-dark leading-snug group-hover:text-ve-burgundy">
                        {p.titulo}
                      </h3>
                      <span className="md:col-span-2 text-xs text-ve-text-dark/50 eyebrow md:text-right">
                        {p.leitura}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Voltar */}
          <div className="container-x py-10 max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ve-terracota hover:text-ve-burgundy text-xs eyebrow"
            >
              <IconArrowDown className="w-3 h-3 rotate-90" />
              Voltar ao blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
