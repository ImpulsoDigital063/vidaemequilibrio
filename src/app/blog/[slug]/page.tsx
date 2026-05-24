import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconArrowRight, IconArrowDown } from "@/components/Icons";
import { POSTS_PUBLICADOS, getPostBySlug } from "@/content/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://vidaemequilibrio.com.br";

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
    openGraph: {
      title: post.titulo,
      description: post.intro,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      ...(post.publishedAt && { publishedTime: post.publishedAt }),
    },
  };
}

function formatarData(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  marked.setOptions({ gfm: true, breaks: false });
  const html = marked.parse(post.conteudo) as string;

  // Schema.org BlogPosting · AEO + Google Discover
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.intro,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Leandro Timóteo",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Vida em Equilíbrio",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: post.hero ? `${SITE_URL}${post.hero}` : undefined,
    articleSection: post.categoria,
  };

  // Outros 3 posts publicados pra "Leitura relacionada"
  const outros = POSTS_PUBLICADOS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1 bg-ve-cream text-ve-text-dark">
        {/* HERO */}
        <article>
          <header className="container-x py-16 md:py-24 max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ve-terracota hover:text-ve-burgundy text-xs eyebrow mb-10"
            >
              <IconArrowDown className="w-3 h-3 rotate-90" />
              Voltar ao conteúdo
            </Link>
            <p className="eyebrow text-ve-terracota mb-4">
              {post.categoria} · {post.leitura}
            </p>
            <h1 className="display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-ve-text-dark">
              {post.titulo}
            </h1>
            <p className="mt-8 display-italic text-ve-text-dark/75 text-lg md:text-xl leading-relaxed max-w-3xl">
              {post.intro}
            </p>
            <div className="mt-10 flex items-center gap-4 text-xs eyebrow text-ve-text-dark/55">
              <span>Por Leandro Timóteo</span>
              {post.publishedAt && (
                <>
                  <span className="opacity-50">·</span>
                  <span>{formatarData(post.publishedAt)}</span>
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

          {/* Corpo do post */}
          <div className="container-x py-8 md:py-16 max-w-3xl">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* CTA fim de post */}
          <section className="container-x py-12 md:py-16 max-w-3xl">
            <div className="bg-ve-text-dark/5 border-l-4 border-ve-burgundy p-8 md:p-10">
              <p className="eyebrow text-ve-terracota mb-3">Pra conversar</p>
              <h2 className="display text-2xl md:text-3xl text-ve-text-dark leading-tight">
                Cada agenda é pensada caso a caso.
              </h2>
              <p className="mt-4 text-ve-text-dark/75 text-sm md:text-base">
                Se algo aqui fez sentido pra você, vamos conversar no
                WhatsApp · primeira resposta da equipe, depois entro
                pessoalmente.
              </p>
              <a
                href="https://wa.me/5563848436460"
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 bg-ve-burgundy text-ve-cream px-6 py-3 text-sm font-medium hover:bg-ve-burgundy/85 transition-colors"
              >
                Conversar pelo WhatsApp
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Leitura relacionada */}
          {outros.length > 0 && (
            <section className="container-x py-16 md:py-24 max-w-4xl border-t border-ve-text-dark/10">
              <p className="eyebrow text-ve-terracota mb-8">Leitura relacionada</p>
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
        </article>
      </main>
      <Footer />
    </>
  );
}
