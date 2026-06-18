import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconWhatsApp, IconArrowRight, IconArrowDown } from "@/components/Icons";

export const metadata = {
  title: "Catálogo · Vida em Equilíbrio",
  description:
    "Todas as massagens da Vida em Equilíbrio (Palmas-TO) com durações e valores — relaxante, drenagem, modeladora, ventosas, facial e desportiva.",
};

function wa(msg: string) {
  return `https://wa.me/5563984843646?text=${encodeURIComponent(msg)}`;
}

type Variacao = { duracao: string; preco: string };
type Item = {
  nome: string;
  subtitulo?: string;
  descricao: string;
  variacoes: Variacao[];
};
type Grupo = { titulo: string; itens: Item[] };

const GRUPOS: Grupo[] = [
  {
    titulo: "Massagens corporais",
    itens: [
      {
        nome: "Massagem Relaxante",
        subtitulo: "Pedras Quentes",
        descricao:
          "Calor, contato e a pressão das pedras quentes vulcânicas na superfície do corpo. Relaxamento profundo, do tipo que desliga a cabeça.",
        variacoes: [
          { duracao: "50 min", preco: "R$189" },
          { duracao: "80 min", preco: "R$249" },
          { duracao: "110 min", preco: "R$299" },
        ],
      },
      {
        nome: "Drenagem Linfática",
        descricao:
          "Específica pra eliminar líquidos retidos e melhorar a circulação. Desincha, reduz medidas e melhora o aspecto da pele.",
        variacoes: [
          { duracao: "50 min", preco: "R$189" },
          { duracao: "80 min", preco: "R$249" },
          { duracao: "110 min", preco: "R$299" },
        ],
      },
      {
        nome: "Massagem Modeladora",
        descricao:
          "Drena, relaxa e modela com movimentos firmes, mas sem dor — adaptada ao objetivo de cada cliente. Cada corpo é único.",
        variacoes: [
          { duracao: "50 min", preco: "R$189" },
          { duracao: "80 min", preco: "R$249" },
        ],
      },
      {
        nome: "Massagem com Ventosas",
        descricao:
          "Movimentos profundos seguidos da aplicação de ventosas, que melhoram a oxigenação muscular e aliviam dores e tensões.",
        variacoes: [
          { duracao: "50 min", preco: "R$189" },
          { duracao: "80 min", preco: "R$249" },
          { duracao: "110 min", preco: "R$299" },
        ],
      },
    ],
  },
  {
    titulo: "Tratamentos específicos",
    itens: [
      {
        nome: "Massagem Facial",
        descricao:
          "Esfoliação, hidratação e massagem na face, colo e pescoço — trabalha firmeza e contornos e devolve viço. Inclui lavagem capilar.",
        variacoes: [
          { duracao: "30 min", preco: "R$159" },
          { duracao: "50 min", preco: "R$219" },
        ],
      },
      {
        nome: "Aplicação de Ventosas",
        descricao:
          "Tratamento natural pra dores musculares localizadas. Melhora a oxigenação dos tecidos e ajuda a liberar toxinas.",
        variacoes: [{ duracao: "30 min", preco: "R$119" }],
      },
    ],
  },
  {
    titulo: "Para quem treina",
    itens: [
      {
        nome: "Massagem Desportiva",
        descricao:
          "Recovery muscular focal — preparação pré-prova e recuperação pós-treino. Pra quem leva o corpo a sério e quer voltar mais rápido.",
        variacoes: [
          { duracao: "60 min", preco: "R$149" },
          { duracao: "90 min", preco: "R$199" },
        ],
      },
    ],
  },
];

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        {/* Hero do catálogo */}
        <section className="container-x pt-28 pb-12 md:pt-36 md:pb-16 text-ve-cream">
          <p className="eyebrow text-ve-champagne mb-5">Catálogo · Vida em Equilíbrio</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Todas as massagens e os{" "}
            <span className="display-italic text-ve-champagne">valores</span>.
          </h1>
          <p className="mt-6 text-ve-cream/70 text-sm md:text-base max-w-xl leading-relaxed">
            Compare com calma. Atendimento na clínica (CYOX, Setor Norte) ou a
            domicílio em Palmas. Na dúvida de qual escolher, é só chamar — a gente
            indica a certa pro seu caso.
          </p>
          <a
            href={wa("Oii! Vim pelo catálogo e quero agendar uma massagem. Pode me ajudar?")}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2.5 bg-ve-champagne text-ve-bg px-6 py-3.5 text-sm font-medium hover:bg-ve-cream transition-colors"
          >
            <IconWhatsApp className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
        </section>

        {/* Grupos de serviços */}
        {GRUPOS.map((grupo) => (
          <section key={grupo.titulo} className="container-x py-10 md:py-12 text-ve-cream">
            <h2 className="eyebrow text-ve-champagne border-b border-ve-cream/15 pb-4 mb-8">
              {grupo.titulo}
            </h2>

            <div className="flex flex-col gap-px bg-ve-cream/10">
              {grupo.itens.map((item) => (
                <div
                  key={item.nome}
                  className="grid gap-6 bg-ve-bg py-7 md:grid-cols-[1fr_auto] md:gap-12"
                >
                  {/* Nome + descrição */}
                  <div className="max-w-xl">
                    <h3 className="display text-2xl md:text-3xl leading-tight">
                      {item.nome}
                      {item.subtitulo && (
                        <span className="display-italic text-ve-champagne text-xl md:text-2xl">
                          {" "}
                          · {item.subtitulo}
                        </span>
                      )}
                    </h3>
                    <p className="mt-3 text-ve-cream/70 text-sm md:text-base leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>

                  {/* Variações + CTA */}
                  <div className="md:min-w-[200px] md:text-right">
                    <div className="flex flex-col divide-y divide-ve-cream/10 border-y border-ve-cream/10">
                      {item.variacoes.map((v) => (
                        <div
                          key={v.duracao}
                          className="flex items-center justify-between gap-8 py-2"
                        >
                          <span className="text-sm text-ve-cream/70">{v.duracao}</span>
                          <span className="text-sm font-semibold text-ve-champagne">
                            {v.preco}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={wa(
                        `Oii! Quero agendar a ${item.nome}. Pode me passar os horários?`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ve-champagne hover:gap-3 transition-all"
                    >
                      Agendar
                      <IconArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA final */}
        <section className="container-x py-16 md:py-24 text-center text-ve-cream">
          <h2 className="display text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
            Não sabe por onde começar?
          </h2>
          <p className="mt-5 text-ve-cream/70 text-sm md:text-base max-w-lg mx-auto">
            Me conta o que você está sentindo e a gente indica a massagem certa,
            com horário na clínica ou em casa.
          </p>
          <a
            href={wa("Oii! Tô em dúvida sobre qual massagem é a melhor pra mim. Pode me ajudar a escolher?")}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2.5 bg-ve-champagne text-ve-bg px-7 py-4 text-sm md:text-base font-medium hover:bg-ve-cream transition-colors"
          >
            <IconWhatsApp className="w-5 h-5" />
            Conversar pelo WhatsApp
          </a>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-ve-cream/60 hover:text-ve-cream transition-colors"
            >
              <IconArrowDown className="w-4 h-4 rotate-90" />
              Voltar pro início
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
