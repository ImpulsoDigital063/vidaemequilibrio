import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";

const METRICAS = [
  {
    valor: "6",
    rotulo: "Massagens dedicadas",
    detalhe: "Day Premium, Relaxante, Drenagem, Desportiva, Modeladora, Facial",
  },
  {
    valor: "6",
    rotulo: "Técnicas integradas",
    detalhe: "Esfoliante, bolinha, pedras quentes, vela, bambu, ventosa",
  },
  {
    valor: "2",
    rotulo: "Modalidades de atendimento",
    detalhe: "Clínica parceira no Setor Norte e domicílio em Palmas",
  },
  {
    valor: "1",
    rotulo: "Cliente por turno",
    detalhe: "Atendimento privativo, sem sobreposição de agenda",
  },
];

export default function Metricas() {
  return (
    <section className="bg-ve-cream text-ve-text-dark py-20 md:py-28">
      <div className="container-x">
        <Reveal direction="up">
          <p className="eyebrow text-ve-terracota mb-4">O que está incluído</p>
          <h2 className="display text-2xl md:text-4xl max-w-2xl text-ve-text-dark">
            Um serviço inteiro pensado para você.
          </h2>
        </Reveal>

        <div className="hairline my-12 bg-ve-text-dark/15" />

        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ve-text-dark/10" step={0.1}>
          {METRICAS.map((m) => (
            <StaggerItem key={m.rotulo} direction="scale" className="bg-ve-cream p-6 md:p-10 h-full">
              <p className="display text-4xl md:text-6xl text-ve-burgundy leading-none">
                {m.valor}
              </p>
              <p className="mt-4 text-ve-text-dark font-medium text-sm md:text-base">
                {m.rotulo}
              </p>
              <p className="mt-1 text-ve-text-dark/60 text-xs md:text-sm leading-relaxed">
                {m.detalhe}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
