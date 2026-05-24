import { IconArrowDown } from "./Icons";

export default function Blog() {
  return (
    <section className="bg-ve-cream text-ve-text-dark py-20 md:py-24">
      <div className="container-x text-center max-w-2xl mx-auto">
        <p className="eyebrow text-ve-terracota mb-4">Em breve</p>
        <h2 className="display text-2xl md:text-4xl leading-[1.15]">
          Um espaço para{" "}
          <span className="display-italic">estudo aberto</span>.
        </h2>
        <p className="mt-6 text-ve-text-dark/70 leading-relaxed text-sm md:text-base">
          Conteúdo sobre as técnicas, o que o corpo pede em cada fase, e o
          que a literatura mostra sobre cuidado terapêutico. Em construção.
        </p>
        <div className="mt-8 flex justify-center">
          <IconArrowDown className="w-5 h-5 text-ve-terracota animate-pulse" />
        </div>
      </div>
    </section>
  );
}
