// Posts do blog · 12 títulos do plano de negócio (Seção 10)
// Status "published" aparece no índice e gera rota individual.
// Status "draft" aparece como "Em breve" no índice, sem rota.

export type Post = {
  slug: string;
  titulo: string;
  categoria: string;
  leitura: string;
  intro: string;
  hero?: string;
  publishedAt: string | null; // ISO date · null = draft
  conteudo: string; // markdown
};

export const POSTS: Post[] = [
  {
    slug: "drenagem-linfatica-inchaco-guia",
    titulo: "Como a drenagem linfática age no inchaço · guia honesto",
    categoria: "Drenagem",
    leitura: "6 min de leitura",
    intro:
      "O que de fato acontece no corpo quando você faz uma drenagem linfática · sem promessa milagrosa, com a literatura na mão.",
    hero: "/img/stillBamboo.png",
    publishedAt: "2026-05-24",
    conteudo: `
A drenagem linfática é provavelmente o serviço mais procurado em qualquer clínica de massagem feminina no Brasil. E também o que mais sofre com promessas exageradas — "perde 5 cm em uma sessão", "tira a celulite em 10 dias", "lipo sem cirurgia". A verdade é mais sóbria e, paradoxalmente, mais convincente.

## O que o sistema linfático faz (e por que importa)

Seu corpo tem uma rede paralela ao sistema circulatório que carrega líquido intersticial — aquele que fica entre as células — de volta pra circulação central. Esse líquido transporta resíduos metabólicos, proteínas que escaparam dos capilares, e células do sistema imune. Quando ele trabalha bem, você nem percebe. Quando engasga, o corpo avisa:

- Inchaço persistente em pernas, tornozelos, rosto
- Sensação de "peso" e cansaço
- Roupas que apertam sem motivo aparente
- Marcação maior de meias, anéis, sapatos

## O que a drenagem manual faz

Uma drenagem bem-feita não é uma "massagem relaxante mais leve". É um trabalho técnico que segue o caminho anatômico do retorno linfático, com pressão calibrada e ritmo contínuo. Três coisas acontecem:

1. **Bombeamento ganglionar** — pressões rítmicas em pontos onde o sistema filtra (pescoço, axila, virilha) abrem o "ralo" do sistema.
2. **Deslizamento direcional** — manobras longas seguem o sentido natural do retorno, empurrando líquido na direção certa.
3. **Compressão progressiva em membros** — trabalha braços e pernas em sequência ascendente, mobilizando retenção sem agredir o tecido.

## Resultado realista

Uma sessão isolada produz **alívio imediato de sensação de peso** e pode reduzir alguns centímetros de circunferência por **eliminação de líquido retido** — não de gordura. Esse efeito dura horas a 2-3 dias.

Pra resultado mais consistente, a drenagem precisa virar **prática regular** (semanal ou quinzenal). Mais que a manobra em si, o que muda é o sistema aprendendo a trabalhar melhor entre as sessões.

## Quando a drenagem é especialmente indicada

- **Pós-cirúrgico** (com indicação médica) — acelera reabsorção de hematomas e retorno linfático após procedimentos cirúrgicos
- **Pós-parto** — sistema fica sobrecarregado nas primeiras semanas
- **Períodos do ciclo** com retenção evidente
- **Trabalho em pé prolongado** — retorno venoso/linfático sofre
- **Hábitos sedentários** — falta de bombeamento muscular natural

## Quando NÃO fazer

- Infecções ativas (a drenagem pode espalhar o quadro)
- Trombose ou histórico recente sem liberação médica
- Insuficiência cardíaca descompensada
- Tumores sem orientação oncológica

## A diferença de quem entende

Drenagem mal-feita é massagem deslizada com nome bonito. Drenagem bem-feita é trabalho técnico calibrado pra **um corpo específico, naquele dia específico**. Por isso a primeira pergunta sempre vai ser sobre o que seu corpo está pedindo agora — não "qual é seu pacote".

Se você está considerando começar uma prática regular de drenagem, conversa com a gente pelo WhatsApp. Cada agenda é desenhada caso a caso.
`.trim(),
  },

  {
    slug: "tecnicas-pedras-vela-bambu-ventosa",
    titulo: "Pedras quentes, vela, bambu, ventosa — pra que serve cada uma",
    categoria: "Técnicas",
    leitura: "7 min de leitura",
    intro:
      "Guia honesto das 4 técnicas que compõem o Day Premium Equilíbrio · o que cada uma faz, quando indica, e por que combinam.",
    hero: "/img/stillHotStones.png",
    publishedAt: "2026-05-24",
    conteudo: `
Quando você vê "massagem com pedras quentes" ou "vela aromática" no cardápio de uma clínica, é fácil pensar que é só decoração — uma forma de cobrar mais por uma massagem comum. Não é. Cada uma dessas técnicas tem um efeito específico, e a sequência em que elas aparecem no Day Premium foi pensada justamente pra que uma prepare a próxima.

## 1. Pedras quentes

São pedras de basalto vulcânico (rocha que retém calor por mais tempo que pedras comuns) aquecidas em água a aproximadamente 50°C. Aplicadas em pontos estratégicos do corpo, elas:

- **Dilatam musculatura tensa** sem que você precise aplicar pressão profunda
- **Aumentam circulação local** por vasodilatação
- **Preparam tecido** pra receber manobras mais profundas com menos desconforto

São especialmente úteis pra clientes com tensão crônica em ombros e dorsais, onde a musculatura "trava" e qualquer pressão direta dói. As pedras suavizam o trabalho.

## 2. Vela aromática quente

A vela usada em massagem terapêutica não é a vela de aromatizar ambiente. É feita com **manteigas vegetais** (karité, cacau, semente de uva) e óleos essenciais. Quando acesa, derrete em **cera morna** (não quente · em torno de 40°C, abaixo da temperatura de queimar pele) que é aplicada diretamente como óleo de massagem.

Combina três efeitos:

- **Tato** — calor suave e contínuo durante toda a aplicação
- **Olfato** — aromaterapia ativa enquanto a vela queima
- **Hidratação** — manteigas vegetais nutrem a pele profundamente

É talvez a técnica que mais cria a **sensação de spa premium** durante a sessão, mas tem benefício técnico real além do sensorial.

## 3. Bambu terapêutico

Os bambus usados em massagem são de diferentes espessuras (do mais fino, tipo lápis, ao mais grosso, tipo cabo de vassoura). Cada um trabalha uma camada do tecido:

- **Bambus finos** — drenagem e estímulo de microcirculação
- **Bambus médios** — modelagem e quebra de fibrose superficial
- **Bambus grossos** — pressão profunda em musculatura, especialmente em coxas, glúteo e dorso

A vantagem do bambu sobre a mão: **pressão sustentada com superfície plana**. A mão se cansa em manobras longas; o bambu não. Permite trabalho de modelagem consistente em série.

## 4. Ventosa (cupping)

Ventosa é o oposto de tudo que veio antes. Em vez de pressionar pra dentro, ela **suga pra fora**. Copos (de vidro, plástico ou silicone) criam vácuo na superfície da pele, puxando os tecidos.

Três efeitos:

- **Mobilização de fáscia** — solta aderências entre camadas de tecido
- **Vascularização** — aumenta circulação local visivelmente (a pele fica avermelhada, sinal de que o sangue chegou)
- **Drenagem invertida** — ajuda a "puxar" estagnação que a manobra direta não alcança

Pode deixar marcas circulares roxas que duram 2-7 dias. **É efeito normal**, não machucado — é o tecido sendo trabalhado.

## Por que essas 4 combinam

Numa sessão de cuidado completo, cada uma resolve uma coisa que a anterior não consegue:

1. **Pedras quentes** abrem o tecido sem força — preparam.
2. **Vela** acrescenta hidratação e sensorial — eleva a experiência.
3. **Bambu** trabalha modelagem e profundidade que o calor sozinho não alcança.
4. **Ventosa** mobiliza o que ficou estagnado e finaliza com vascularização.

No Day Premium, essa sequência roda em ~120 minutos. Sai diferente de qualquer "massagem com pedras quentes" isolada que você encontre por aí — não porque alguma dessas técnicas é "exclusiva", mas porque a combinação é pensada.

## Quando faz sentido pedir cada uma isolada

Não é obrigatório fazer o Day Premium pra ter essas técnicas. Qualquer uma pode ser adicionada como **enhancement** a uma Massagem Relaxante de 60 min:

- Pedras quentes — pra tensão crônica em ombros
- Vela — pra noites em que o ritual vale mais que a técnica
- Bambu — pra trabalhar contorno em série regular (semanal/quinzenal)
- Ventosa — pra mobilizar pontos que doem mas você não consegue alcançar

A conversa antes da sessão decide o que faz sentido naquele dia.
`.trim(),
  },

  // === DRAFTS · ainda não publicados ===
  {
    slug: "massagem-desportiva-corredora",
    titulo: "O que faz uma massagem ser 'desportiva' · e por que importa pra corredora",
    categoria: "Desportiva",
    leitura: "5 min de leitura",
    intro: "A diferença entre massagem relaxante e desportiva está na função — não no nome.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "recovery-pos-prova-48h",
    titulo: "Recovery muscular: o que acontece nas 48h pós-prova",
    categoria: "Desportiva",
    leitura: "6 min de leitura",
    intro: "A janela crítica de recuperação muscular e como aproveitá-la.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "massagem-casa-clinica",
    titulo: "Massagem em casa ou em clínica: o que muda na prática",
    categoria: "Atendimento",
    leitura: "4 min de leitura",
    intro: "Comparativo honesto entre as duas modalidades · o que ganha e o que pede em cada uma.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "drenagem-pos-cirurgica-guia",
    titulo: "Drenagem pós-cirúrgica: o que esperar, quando começar, como acelerar",
    categoria: "Drenagem",
    leitura: "8 min de leitura",
    intro: "O passo a passo do pós-operatório · com indicação médica como ponto de partida.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "cuidado-feminino-nicho",
    titulo: "Cuidado feminino é nicho: por que escolhi atender só mulheres",
    categoria: "Manifesto",
    leitura: "5 min de leitura",
    intro: "A escolha profissional por trás do atendimento exclusivo · sem mistério.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "atm-mandibula-cefaleia-facial",
    titulo: "ATM, mandíbula travada, cefaleia: como a massagem facial alivia",
    categoria: "Facial",
    leitura: "6 min de leitura",
    intro: "O que você acha que é estresse pode ser tensão temporomandibular.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "massagem-modeladora-literatura",
    titulo: "Massagem modeladora: o que a literatura mostra (e o que não mostra)",
    categoria: "Modeladora",
    leitura: "7 min de leitura",
    intro: "Resultado realista, sem mistificação · e o que a frequência regular muda.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "criterios-escolher-massagista-palmas",
    titulo: "Como escolher uma massagista em Palmas: 7 critérios",
    categoria: "Guia",
    leitura: "5 min de leitura",
    intro: "Checklist prático pra quem está procurando profissional · não só por preço.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "autocuidado-feminino-presenca",
    titulo: "Auto-cuidado feminino: presença vs produto",
    categoria: "Manifesto",
    leitura: "4 min de leitura",
    intro: "Cuidado não é coisa que se compra · é prática que se cultiva.",
    publishedAt: null,
    conteudo: "",
  },
  {
    slug: "plano-horas-vale-pena",
    titulo: "Plano de Horas: vale a pena pra quem faz massagem todo mês?",
    categoria: "Guia",
    leitura: "5 min de leitura",
    intro: "Quando o plano vira economia real · e quando não compensa.",
    publishedAt: null,
    conteudo: "",
  },
];

export const POSTS_PUBLICADOS = POSTS.filter((p) => p.publishedAt !== null);
export const POSTS_DRAFT = POSTS.filter((p) => p.publishedAt === null);

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug && p.publishedAt !== null);
}
