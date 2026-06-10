"use client";

import { useState } from "react";
import { IconPlus } from "./Icons";
import { SchemaFAQ } from "./SchemaOrgVidaEquilibrio";
import Reveal from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";

const PERGUNTAS = [
  {
    q: "Quem é o profissional do Vida em Equilíbrio?",
    a: "Leandro Timóteo, massoterapeuta em Palmas-TO. Cada atendimento é feito pessoalmente por ele, em sessão privativa de uma cliente por turno.",
  },
  {
    q: "Quem pode agendar?",
    a: "A prática do Vida em Equilíbrio é desenhada pra cuidado feminino — desde a calibragem da pressão até o ambiente da sessão. Se você é mulher e está considerando o atendimento, a primeira conversa pelo WhatsApp já esclarece se faz sentido pra você.",
  },
  {
    q: "Por que os valores não aparecem no site?",
    a: "Cada agenda é desenhada individualmente — duração, combinação de técnicas, frequência, local de atendimento. Os valores são compartilhados no contato, com a clareza que o seu caso pede.",
  },
  {
    q: "Onde acontecem os atendimentos?",
    a: "Em duas modalidades: clínica parceira (CYOX Centro de Estética Avançada, no Setor Norte de Palmas) ou em domicílio — eu levo macas e produtos profissionais até você.",
  },
  {
    q: "Como funciona a primeira conversa pelo WhatsApp?",
    a: "Você manda mensagem e a primeira resposta é da nossa equipe de atendimento — pra entender o que seu corpo está pedindo e que tipo de massagem encaixa. Quando estiver tudo claro, eu entro pra confirmar agenda. Assim você chega já decidida.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "Conversamos antes pelo WhatsApp e combinamos a massagem, o local e o horário. No primeiro atendimento, esfoliante corporal por conta da casa — é o jeito de te receber.",
  },
  {
    q: "As massagens podem ser combinadas?",
    a: "Sim. Cada massagem pode receber enhancements (pedras quentes, vela aromática, bambu, ventosa, esfoliante, bolinha). A composição é decidida na conversa antes do atendimento.",
  },
  {
    q: "Aceita cartão, PIX, parcelado?",
    a: "PIX e cartão à vista. Detalhes financeiros são confirmados no WhatsApp, junto com o agendamento.",
  },
  {
    q: "E para corridas?",
    a: "Atendimento sob contratação particular para corredora amadora — preparação pré-prova e recovery pós-prova. Atendimento em massa em eventos de corrida está em planejamento para o futuro.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="text-ve-cream py-24 md:py-32">
      <SchemaFAQ perguntas={PERGUNTAS} />
      <div className="container-x grid md:grid-cols-12 gap-10">
        <Reveal direction="right" className="md:col-span-4">
          <p className="eyebrow text-ve-champagne mb-6">Perguntas</p>
          <h2 className="display text-3xl md:text-4xl leading-[1.1]">
            O que costuma{" "}
            <span className="display-italic text-ve-champagne">aparecer</span>.
          </h2>
        </Reveal>

        <Stagger
          as="ul"
          step={0.04}
          className="md:col-span-8 divide-y divide-[color:var(--ve-line)]"
        >
          {PERGUNTAS.map((p, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={p.q} as="li" direction="up" distance={16}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <span className="display text-xl md:text-2xl text-ve-cream group-hover:text-ve-champagne transition-colors">
                    {p.q}
                  </span>
                  <IconPlus
                    className={`w-5 h-5 text-ve-champagne flex-shrink-0 mt-2 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 pr-12 text-ve-cream/80 leading-relaxed font-light">
                    {p.a}
                  </p>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
