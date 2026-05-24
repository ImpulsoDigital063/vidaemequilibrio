// Posts do blog · 12 títulos do plano de negócio (Seção 10)
// Status "published" aparece no índice e gera rota individual.
// Status "draft" aparece como "Em breve" no índice, sem rota.

export type FAQ = { pergunta: string; resposta: string };
export type Referencia = {
  autor: string;
  titulo: string;
  ano: number | string;
  fonte?: string;
  url: string;
};

export type Post = {
  slug: string;
  titulo: string;
  categoria: string;
  leitura: string;
  intro: string;
  hero?: string;
  publishedAt: string | null; // ISO date · null = draft
  updatedAt?: string;
  conteudo: string; // markdown
  resumoExecutivo?: string; // bullet TL;DR pro topo
  keywords?: string[]; // Schema.org keywords + meta keywords
  about?: string[]; // Schema.org about (entidades cobertas)
  faq?: FAQ[]; // gera FAQPage JSON-LD
  referencias?: Referencia[]; // bibliografia ao final + Schema.org citation
};

export const POSTS: Post[] = [
  // ============================================================
  // POST 1 · DRENAGEM LINFATICA (revisao cientifica)
  // ============================================================
  {
    slug: "drenagem-linfatica-inchaco-guia",
    titulo: "Drenagem linfática manual: como age no inchaço · guia clínico honesto",
    categoria: "Drenagem",
    leitura: "14 min de leitura",
    intro:
      "Revisão clínica do que a literatura mostra sobre drenagem linfática manual (DLM). Métodos Vodder, Leduc e Földi · evidência Cochrane · contra-indicações ISL 2020 · diferença entre DLM e a 'drenagem modeladora' que muita clínica vende com esse nome.",
    hero: "/img/stillBamboo.png",
    publishedAt: "2026-05-24",
    updatedAt: "2026-05-24",
    keywords: [
      "drenagem linfática manual",
      "drenagem linfática",
      "DLM",
      "método Vodder",
      "método Leduc",
      "método Földi",
      "linfedema",
      "pós-operatório lipoaspiração",
      "drenagem pós-parto",
      "insuficiência venosa crônica",
      "retenção de líquido",
      "massagem terapêutica feminina",
      "Palmas TO",
      "Vida em Equilíbrio",
      "Leandro Timóteo",
    ],
    about: [
      "Drenagem linfática manual",
      "Sistema linfático",
      "Linfedema",
      "Terapia descongestiva complexa",
      "Fisioterapia dermatofuncional",
    ],
    resumoExecutivo:
      "Drenagem linfática manual é técnica suave (pressão 15-40 mmHg) que mobiliza líquido intersticial. Os métodos Vodder, Leduc e Földi têm princípios em comum. A evidência Cochrane (Ezzo, 2015) mostra benefício adjuvante em linfedema pós-mastectomia. Em pós-operatório estético e insuficiência venosa há melhora de qualidade de vida. Sessão isolada alivia sensação de peso · resultado consistente exige série regular. NÃO é a mesma coisa que massagem modeladora.",
    conteudo: `
A drenagem linfática é provavelmente o serviço mais procurado em qualquer clínica de massagem feminina no Brasil. E também o que mais sofre com promessas exageradas — "perde 5 cm em uma sessão", "tira a celulite em 10 dias", "lipo sem cirurgia". O que a literatura mostra é diferente, e paradoxalmente mais convincente: drenagem linfática manual (DLM) tem efeito real, modesto, e respaldado em série regular, não em sessão isolada.

Este texto reúne o que está consolidado em revisões sistemáticas (Cochrane, meta-análises PubMed) e no consenso de 2020 da International Society of Lymphology, traduzido pra linguagem clínica acessível.

## 1. O sistema linfático e por que ele engasga

Seu corpo tem uma rede de vasos paralela ao sistema circulatório que carrega líquido intersticial — aquele que fica entre as células — de volta pra circulação central. Esse líquido transporta resíduos metabólicos, proteínas que escaparam dos capilares, e células do sistema imune.

A unidade contrátil dessa rede chama-se **linfangion** — o segmento entre duas válvulas. Ele tem contração espontânea com frequência média de **10 ciclos por minuto**. O retorno linfático segue sempre o mesmo caminho: distal → proximal → cadeias ganglionares regionais → ducto torácico → veias subclávias.

Quando esse fluxo trabalha bem, você nem percebe. Quando engasga (sedentarismo, fase do ciclo, gestação, pós-cirúrgico, insuficiência venosa, pós-mastectomia), o corpo avisa:

- Inchaço persistente em pernas, tornozelos, mãos, rosto
- Sensação de "peso" e cansaço desproporcional
- Roupas que apertam sem motivo aparente
- Marcação maior de meias, anéis, sapatos
- Em casos mais severos, linfedema crônico com endurecimento do tecido

## 2. O que é (e o que NÃO é) drenagem linfática manual

A drenagem linfática manual tem regra técnica clara:

- **Pressão** entre **15 e 40 mmHg**. Acima de ~60 mmHg, os capilares linfáticos colapsam e o fluxo *reduz* em vez de aumentar — é a razão fisiológica pela qual a DLM é leve.
- **Não desliza** sobre a pele com óleo abundante. Ela mobiliza a pele *sobre* o tecido subjacente em ciclos de estiramento e relaxamento.
- **Ritmo lento**, próximo da frequência intrínseca do linfangion (~10 ciclos/min).
- **Sentido anatômico** estrito — sempre do distal ao proximal, sempre rumo às cadeias ganglionares.
- Começa pelas **cadeias ganglionares proximais** (pescoço, axila, virilha), abrindo o "ralo" antes de mobilizar líquido distalmente.

Massagem deslizada com óleo, pressão firme e ritmo rápido **não é DLM** — independentemente do nome no cardápio. A diferença está no que cada uma faz: a DLM real mobiliza fluido; a "massagem modeladora" trabalha tecido adiposo e fáscia, com pressões e objetivos diferentes (mais sobre isso na seção 7).

## 3. Os três métodos clássicos: Vodder, Leduc e Földi

### Vodder

Sistematizado pelo casal dinamarquês Emil e Estrid Vodder em **1936**, inicialmente pra tratar pacientes com sinusite crônica. O método tem quatro manobras básicas — *círculos estacionários, bombeamento (pump), concha (scoop) e rotatória* — sempre executadas em fase de trabalho (estiramento da pele) seguida por relaxamento, sem deslizar (Wittlinger, 1998).

### Leduc

Desenvolvido pelo médico belga Albert Leduc a partir do trabalho de Vodder. Organiza o atendimento em **duas manobras principais**: *manobras de chamada* (que estimulam a contração do linfangion em direção proximal) e *manobras de reabsorção* (que atuam sobre os capilares iniciais). A regra é trabalhar **primeiro as cadeias ganglionares proximais, depois o edema distal** (Williams, 2010).

### Földi

Variação derivada do Vodder que enfatiza fases de impulso (thrust) e relaxamento com manobras envolventes (encircling strokes). É a técnica usada dentro da **Terapia Descongestiva Complexa (TDC)** — o padrão-ouro pra linfedema crônico, que combina DLM + bandagem compressiva + exercício + cuidados de pele.

**Há diferença clínica entre eles?** Pouca. Comparando Vodder *vs* Casley-Smith em pós-lipoaspiração, Mojallal e colegas (2022) não encontraram diferença significativa de desfecho entre as duas técnicas. Importam mais o domínio técnico do profissional e a aderência ao protocolo do que a escola.

## 4. Evidência clínica · o que está consolidado

### 4.1 · Linfedema pós-mastectomia

A referência metodologicamente mais forte é a revisão Cochrane de Ezzo e colegas (2015), com 6 ensaios randomizados (208 mulheres):

- DLM é **segura e bem tolerada**.
- A combinação de **bandagem compressiva intensiva** reduz o edema em 30-37%; adicionar DLM gera redução incremental de aproximadamente **7,11%**.
- Mulheres com linfedema **leve a moderado** parecem se beneficiar mais da adição de DLM do que casos moderados a severos.

Meta-análise mais recente de Liang e colegas (2020), com 17 RCTs e 1.911 pacientes, confirma o benefício pra tratamento de linfedema estabelecido, mas mostra que a evidência pra *prevenção* ainda é fraca.

### 4.2 · Pós-operatório de cirurgias estéticas

Em estudo prospectivo com 18 mulheres em pós-operatório tardio de lipoabdominoplastia/lipoaspiração, Schiavinato e colegas (2014) mostraram que **12 sessões de ultrassom terapêutico seguido de DLM** reduziram edema, fibrose tecidual e dor.

Maningas e colegas (2020) documentaram que a DLM em pós-operatório de abdominoplastia com lipoaspiração core promove resolução mais rápida do edema. Importante: os próprios autores apontam ausência de estudos que comparem DLM *isolada* vs controle — a evidência mais forte vem de **protocolos combinados** (DLM + ultrassom + compressão), não da DLM em monoterapia.

### 4.3 · Retenção idiopática (ciclo menstrual, gestação, pós-parto)

Aqui o terreno é menos consolidado:

- Em **gestação**, estudo na revista *Lymphology* (PMID 24251034) mostra que DLM reduziu significativamente o edema dos membros inferiores de gestantes ao longo do dia.
- Em **TPM**, há trabalhos brasileiros em periódicos universitários indicando atenuação de edema pré-menstrual, mas a evidência é de baixo poder estatístico.
- Não há revisão sistemática Cochrane específica pra "retenção hídrica idiopática" como categoria isolada — a maior parte da literatura forte está em populações com edema patológico definido.

Na prática clínica, isso significa: DLM em fase pré-menstrual ou no pós-parto **é segura, costuma trazer alívio sintomático real**, e tem fundamento mecanístico — mas a expectativa precisa ser calibrada (alívio de sintoma, não cura).

### 4.4 · Insuficiência venosa crônica (IVC)

Em RCT com 70 pacientes com doença venosa crônica candidatos a cirurgia eletiva, Molski e colegas (2013) mostraram que a DLM melhora qualidade de vida no pré-operatório (sem diferença em volume de edema vs controle).

dos Santos Crisóstomo e colegas (2015) confirmaram, em RCT simples-cego com 41 pacientes, que **10 sessões em 4 semanas** melhoram qualidade de vida e sintomatologia.

Revisão sistemática de Müller e colegas (2018) aponta heterogeneidade alta entre estudos — o efeito existe, mas a magnitude varia bastante.

## 5. Contra-indicações · consenso ISL 2020

O documento de referência internacional é o consenso 2020 da International Society of Lymphology. As contra-indicações mais consensuadas:

### Absolutas

- **Infecção aguda local** (celulite, erisipela, linfangite) — exige resolução clínica antes
- **Trombose venosa profunda** (TVP) aguda não tratada — risco de embolia
- **Insuficiência cardíaca congestiva descompensada** / edema pulmonar
- **Hemorragia ativa** ou aneurisma agudo
- **Febre** de origem indeterminada

### Relativas (exigem avaliação médica)

- Câncer em tratamento ou recente — coordenar com oncologista (importante: o consenso ISL 2020 esclarece que evidência atual **não sustenta** a ideia de que DLM "espalha câncer" quando executada corretamente)
- Insuficiência renal
- Disfunção tireoidiana descompensada
- Gestação (especialmente 1º trimestre — recomendação conservadora)
- Asma brônquica
- Uso de anticoagulantes

## 6. Frequência recomendada · o que a evidência sugere

Não existe número universal — depende da indicação:

| Indicação | Esquema sugerido pela literatura |
|---|---|
| **Linfedema (fase intensiva)** | 5 sessões/semana por 2-4 semanas + fase de manutenção com bandagem/malha + auto-DLM |
| **Pós-operatório estético** | 10-12 sessões; 2-3x/semana nas primeiras 3 semanas, reduzindo para 1x/semana até 4-6 semanas |
| **IVC sintomática** | 10 sessões em 4 semanas (~2-3x/semana) |
| **Manutenção / prevenção** | 1-2x/semana ou sob demanda sintomática |
| **Sessão única** | Não há evidência de benefício clínico sustentado isolado — todos os RCTs com desfecho em volume usam séries |

Tradução prática: **uma sessão isolada alivia sensação de peso e melhora subjetivamente o inchaço por 24-72h.** Pra resultado consistente (redução de centímetros sustentada, melhora de qualidade de vida mensurável), a DLM precisa virar prática regular — semanal ou quinzenal — durante semanas. Mais que a manobra em si, o que muda é o sistema *aprendendo a trabalhar melhor* entre as sessões.

## 7. DLM × massagem "modeladora": a distinção que ninguém explica

| Critério | DLM (Vodder/Leduc/Földi) | Massagem modeladora |
|---|---|---|
| **Profundidade** | Superficial (epiderme/derme) | Profunda (tecido adiposo) |
| **Pressão** | 15-40 mmHg | Vigorosa, sem padronização |
| **Movimento** | Estiramento da pele sem deslizar | Deslizamento + amassamento |
| **Ritmo** | Lento (~10 ciclos/min) | Rápido, repetitivo |
| **Objetivo** | Drenagem de fluido intersticial | Mobilização de gordura, "quebra de fibrose" |
| **Indicação** | Edema, linfedema, pós-op | Estética (gordura localizada) |
| **Evidência clínica** | RCTs e revisão Cochrane | Praticamente ausente em PubMed |

No Brasil, a Resolução COFFITO nº 394/2011 reconhece a **Fisioterapia Dermatofuncional** como especialidade — e a DLM como técnica fisioterapêutica regulamentada. A "massagem modeladora" não tem o mesmo status regulatório.

Isso não significa que massagem modeladora não tenha valor estético — significa que **as duas resolvem coisas diferentes**. Uma pessoa pode precisar das duas em fases diferentes do tratamento. O problema é vender uma com nome da outra.

## 8. O que esperar de uma sessão honesta

Uma drenagem bem-feita não é uma "massagem relaxante mais leve". É um trabalho técnico que segue o caminho anatômico do retorno linfático, com pressão calibrada e ritmo contínuo. Três coisas acontecem:

1. **Bombeamento ganglionar** — pressões rítmicas em pontos onde o sistema filtra (pescoço, axila, virilha) abrem o "ralo".
2. **Deslizamento direcional** — manobras longas seguem o sentido natural do retorno.
3. **Compressão progressiva em membros** — trabalha braços e pernas em sequência ascendente, mobilizando retenção sem agredir o tecido.

Resultado realista por sessão isolada: **alívio imediato de sensação de peso**, redução de alguns centímetros de circunferência por **eliminação de líquido retido** (não de gordura), efeito que dura horas a 2-3 dias. Pra resultado consistente, prática regular.

## 9. Quando faz sentido procurar DLM

- **Pós-cirúrgico estético** (com liberação médica) — acelera reabsorção de hematomas e retorno linfático
- **Pós-cirúrgico oncológico** (linfedema pós-mastectomia) — sempre com coordenação oncológica
- **Pós-parto** — sistema fica sobrecarregado nas primeiras semanas
- **Fases do ciclo** com retenção evidente
- **Trabalho em pé prolongado** — retorno venoso/linfático sofre
- **IVC sintomática** — pra alívio adjuvante, com acompanhamento médico

A primeira pergunta antes de qualquer sessão precisa ser sobre **o que o seu corpo está pedindo agora** — não "qual é seu pacote". Se você está considerando começar uma prática regular de drenagem, conversa com a gente pelo WhatsApp. Cada agenda é desenhada caso a caso.
`.trim(),
    faq: [
      {
        pergunta: "Drenagem linfática manual emagrece?",
        resposta:
          "Não. A DLM mobiliza líquido intersticial retido, não tecido adiposo. Pode haver redução de circunferência pela eliminação de líquido (resultado que dura 24-72h), mas isso é diferente de perda de gordura. Quem busca redução de medida sustentada precisa combinar alimentação, exercício e, eventualmente, técnicas específicas de modelagem corporal.",
      },
      {
        pergunta: "Quantas sessões são necessárias pra ver resultado?",
        resposta:
          "Depende da indicação. Pra alívio sintomático (sensação de peso, retenção pré-menstrual), uma sessão isolada já produz efeito imediato. Pra resultado clínico sustentado (linfedema, pós-operatório), a literatura recomenda séries de 10-12 sessões com frequência de 2-3x/semana, seguidas de manutenção.",
      },
      {
        pergunta: "Qual a diferença entre Vodder, Leduc e Földi?",
        resposta:
          "São três escolas com princípios em comum (pressão leve, sentido proximal-distal, ritmo lento) que diferem na execução. Vodder usa estiramento cutâneo em quatro padrões geométricos. Leduc estrutura o atendimento em sequência fixa de chamada e reabsorção. Földi enfatiza fases de impulso e relaxamento e é a técnica usada dentro da Terapia Descongestiva Complexa. Não há evidência de superioridade clínica entre elas.",
      },
      {
        pergunta: "Posso fazer drenagem linfática durante a gestação?",
        resposta:
          "Sim, com ressalvas. Há evidência (Lymphology, PMID 24251034) de que a DLM reduz edema em membros inferiores de gestantes. A recomendação conservadora é evitar o 1º trimestre e ter liberação obstétrica. A pressão é leve por natureza, então a sessão é segura na maioria dos casos sem complicações.",
      },
      {
        pergunta: "Drenagem linfática espalha câncer?",
        resposta:
          "Não. O consenso da International Society of Lymphology (ISL 2020) esclarece que a evidência atual não sustenta essa ideia quando a DLM é executada por profissional capacitado e em coordenação com a equipe oncológica. Em pacientes com câncer ativo ou em tratamento, a recomendação é sempre conversar com o oncologista antes.",
      },
      {
        pergunta: "Como diferenciar drenagem real de massagem deslizada vendida como drenagem?",
        resposta:
          "A DLM real é leve (15-40 mmHg de pressão), lenta (~10 ciclos/min), não desliza com óleo abundante e começa sempre pelas cadeias ganglionares proximais (pescoço, axila, virilha) antes de mobilizar líquido distalmente. Massagem firme, deslizada com óleo, em ritmo rápido, não é drenagem linfática — pode ser massagem modeladora ou relaxante com outro nome.",
      },
      {
        pergunta: "Quanto tempo dura o efeito de uma sessão isolada?",
        resposta:
          "Entre 24 e 72 horas. O alívio sintomático (sensação de peso, leveza) é imediato. A redução de circunferência por eliminação de líquido dura algumas horas a poucos dias. Resultado clínico sustentado exige série regular.",
      },
    ],
    referencias: [
      {
        autor: "Wittlinger H",
        titulo: "The Vodder School: the Vodder method",
        ano: 1998,
        fonte: "Cancer. 83(12 Suppl):2840-2",
        url: "https://pubmed.ncbi.nlm.nih.gov/9874409/",
      },
      {
        autor: "Williams A",
        titulo: "Manual lymphatic drainage: exploring the history and evidence base",
        ano: 2010,
        fonte: "British Journal of Community Nursing. 15(Sup4):S18-S24",
        url: "https://www.researchgate.net/publication/44683866",
      },
      {
        autor: "Mojallal A et al",
        titulo:
          "Vodder manual lymphatic drainage technique versus Casley-Smith manual lymphatic drainage technique for cellulite after thigh liposuction",
        ano: 2022,
        fonte: "PMC9131957",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9131957/",
      },
      {
        autor: "Ezzo J, Manheimer E, McNeely ML et al",
        titulo: "Manual lymphatic drainage for lymphedema following breast cancer treatment",
        ano: 2015,
        fonte: "Cochrane Database Syst Rev. (5):CD003475",
        url: "https://pubmed.ncbi.nlm.nih.gov/25994425/",
      },
      {
        autor: "Liang M et al",
        titulo:
          "Manual lymphatic drainage for lymphedema in patients after breast cancer surgery: a systematic review and meta-analysis of RCTs",
        ano: 2020,
        fonte: "Medicine (Baltimore). 99(49):e23192",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7717855/",
      },
      {
        autor: "Schiavinato AM et al",
        titulo:
          "Manual lymphatic drainage and therapeutic ultrasound in liposuction and lipoabdominoplasty post-operative period",
        ano: 2014,
        fonte: "PMC4075221",
        url: "https://pubmed.ncbi.nlm.nih.gov/24987208/",
      },
      {
        autor: "Maningas T et al",
        titulo:
          "Manual Lymphatic Drainage in Postoperative Abdominoplasty With Core Liposuction Patients",
        ano: 2020,
        fonte: "SAGE Journals",
        url: "https://journals.sagepub.com/doi/10.1177/0748806819874941",
      },
      {
        autor: "Molski P et al",
        titulo:
          "Manual lymphatic drainage improves the quality of life in patients with chronic venous disease: a randomized controlled trial",
        ano: 2013,
        fonte: "PMC3701980",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3701980/",
      },
      {
        autor: "dos Santos Crisóstomo RS et al",
        titulo:
          "Influence of Manual Lymphatic Drainage on Health-Related Quality of Life and Symptoms of Chronic Venous Insufficiency",
        ano: 2015,
        fonte: "Arch Phys Med Rehabil",
        url: "https://pubmed.ncbi.nlm.nih.gov/25308883/",
      },
      {
        autor: "Müller M et al",
        titulo:
          "Manual lymphatic drainage and quality of life in patients with lymphoedema and mixed oedema: a systematic review of RCTs",
        ano: 2018,
        fonte: "Qual Life Res. 27(6):1403-1414",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5951867/",
      },
      {
        autor: "Executive Committee of the International Society of Lymphology",
        titulo:
          "The diagnosis and treatment of peripheral lymphedema: 2020 Consensus Document",
        ano: 2020,
        fonte: "Lymphology. 53:3-19",
        url: "https://pubmed.ncbi.nlm.nih.gov/32521126/",
      },
      {
        autor: "Lymphology",
        titulo: "Lymph drainage in pregnant women",
        ano: 2013,
        fonte: "PubMed PMID 24251034",
        url: "https://pubmed.ncbi.nlm.nih.gov/24251034/",
      },
      {
        autor: "Physiopedia",
        titulo: "Manual Lymphatic Drainage",
        ano: "consulta 2026",
        fonte: "Physiopedia",
        url: "https://www.physio-pedia.com/Manual_Lymphatic_Drainage",
      },
      {
        autor: "COFFITO",
        titulo: "Resolução nº 394/2011 — Fisioterapia Dermatofuncional",
        ano: 2011,
        fonte: "Conselho Federal de Fisioterapia e Terapia Ocupacional",
        url: "https://www.coffito.gov.br/",
      },
    ],
  },

  // ============================================================
  // POST 2 · 4 TECNICAS (revisao cientifica)
  // ============================================================
  {
    slug: "tecnicas-pedras-vela-bambu-ventosa",
    titulo:
      "Pedras quentes, vela aromática, bambu e ventosa: o que cada técnica faz · revisão clínica",
    categoria: "Técnicas",
    leitura: "16 min de leitura",
    intro:
      "Guia clínico das 4 técnicas que compõem o Day Premium Equilíbrio. Origem, mecanismo fisiológico, temperatura segura, evidência científica (PubMed, Cochrane, NCCIH) e posição da PNPIC-SUS pra cada uma. Sem mistificação, sem promessa.",
    hero: "/img/stillHotStones.png",
    publishedAt: "2026-05-24",
    updatedAt: "2026-05-24",
    keywords: [
      "massagem com pedras quentes",
      "hot stone massage",
      "pedras de basalto",
      "vela de massagem",
      "vela aromática terapêutica",
      "bambuterapia",
      "massagem com bambu",
      "ventosaterapia",
      "cupping therapy",
      "Day Premium",
      "massagem terapêutica",
      "aromaterapia lavanda",
      "PNPIC SUS",
      "Palmas TO",
      "Vida em Equilíbrio",
    ],
    about: [
      "Hot stone massage",
      "Aromaterapia",
      "Bambuterapia",
      "Ventosaterapia",
      "Cupping therapy",
      "Medicina tradicional chinesa",
      "Práticas integrativas e complementares",
    ],
    resumoExecutivo:
      "Pedras quentes (basalto vulcânico, 49-57°C): vasodilatação e relaxamento muscular. Vela de massagem (manteigas vegetais, ~40°C): aromaterapia ativa + hidratação. Bambuterapia (origem francesa, Gil Amsallem): mobilização fascial com pressão sustentada. Ventosaterapia (3000 anos · incluída na PNPIC-SUS desde 2017): hiperemia local e liberação miofascial · evidência sólida em dor lombar crônica (Cochrane 2025). A combinação no Day Premium é pensada pra que uma técnica prepare a próxima.",
    conteudo: `
Quando você vê "massagem com pedras quentes" ou "vela aromática" no cardápio de uma clínica, é fácil pensar que é só decoração — uma forma de cobrar mais por uma massagem comum. Não é. Cada uma dessas técnicas tem origem, mecanismo, temperatura segura e nível de evidência distintos. Este texto reúne o que está consolidado em PubMed, Cochrane, NCCIH e na Política Nacional de Práticas Integrativas e Complementares (PNPIC) do SUS — pra que você saiba o que está recebendo.

## 1. Massagem com Pedras Quentes (Hot Stone Massage)

### Origem documentada

O uso ritual de pedras aquecidas em sweat lodges nativo-americanos e em medicina ayurvédica é descrito como precedente milenar, mas a forma terapêutica contemporânea foi **sistematizada por Mary Nelson em Tucson, Arizona, em 1993**, sob o nome *LaStone Therapy*. Nelson, que sofria de lesão no manguito rotador, é a referência documentada da técnica como protocolo clínico moderno.

### Por que basalto

A pedra usada não é qualquer rocha — é **basalto vulcânico**, rocha rica em ferro com **alta capacidade de retenção térmica**. Isso permite distribuição uniforme do calor e maior controle de temperatura durante a aplicação. Pedras comuns esfriam rápido; basalto mantém calor por toda a manobra.

### Temperatura segura

A literatura técnica de massoterapia recomenda aquecimento da água entre **43-54°C (110-130°F)**, com limite superior em torno de **63°C (145°F)** em protocolos específicos. A **faixa profissional mais usada é 49-57°C (120-135°F)**, com ajuste pra baixo em áreas sensíveis e em pacientes idosos. Acima desses limites há risco real de queimadura de 1º e 2º grau.

### O que acontece fisiologicamente

Três efeitos consistentes na literatura:

1. **Vasodilatação local** — o calor abre capilares, aumenta circulação e prepara o tecido pra receber pressão profunda sem desconforto.
2. **Relaxamento muscular** — a temperatura reduz a viscosidade do tecido conectivo e diminui a tonicidade dos músculos tensos.
3. **Resposta neuroendócrina** — Field e colegas (Touch Research Institute, University of Miami) demonstraram que massagem terapêutica estimula o sistema nervoso parassimpático, reduz cortisol e aumenta serotonina/dopamina. Morhenn e colegas (2012) mostraram aumento de ocitocina e redução de ACTH após sessão.

### Evidência em dor crônica

Um protocolo de RCT multicêntrico publicado em 2023 inclui **fibromialgia** entre os critérios de inclusão pra dor primária crônica em estudo com pedras aquecidas. Li e colegas (2024), usando dispositivo com pedra controlada por temperatura, mostraram modulação de espessura muscular profunda e redução de **dor lombar crônica**.

Conclusão prática: pedras quentes têm uso bem estabelecido pra tensão crônica em ombros e dorsais, onde a musculatura "trava" e qualquer pressão direta dói. As pedras suavizam o trabalho.

## 2. Vela Aromática Terapêutica (Massage Candle)

### Composição

A vela usada em massagem terapêutica **não é** a vela de aromatizar ambiente. É feita com **manteigas vegetais** (karité, cacau, semente de uva) combinadas com ceras de baixo ponto de fusão (soja, coco). **Evita-se parafina e cera de abelha** porque seus pontos de fusão são altos demais pra contato com pele.

### Ponto de fusão seguro

A **manteiga de karité derrete a aproximadamente 32°C** (90°F), derretendo em contato com a mão. A faixa de aplicação segura fica em torno de **40°C**, abaixo do limiar de queimadura cutânea (~44°C pra exposição prolongada).

### A distinção crítica

| | Vela de massagem | Vela de aromatizar ambiente |
|---|---|---|
| **Função** | Cosmético tópico | Aromatização |
| **Cera** | Manteigas vegetais (karité, cacau) + soja/coco | Parafina, cera de abelha |
| **Ponto de fusão** | ~32-45°C | 60-70°C+ |
| **Aplicação na pele** | Sim, derretida diretamente | Nunca — risco de queimadura |

Essa diferença é central pra entender por que a vela de massagem é segura: ela é **formulada pra derreter a baixa temperatura e ser aplicada como óleo de massagem aquecido**.

### Aromaterapia · o que a evidência mostra

A revisão sistemática de Donelli e colegas (2023) — *"Anxiety-Reducing Effects of Lavender Essential Oil Inhalation: A Systematic Review"* — analisou 11 estudos (n=972) e encontrou que **10 deles reportaram redução significativa de ansiedade** após inalação de óleo essencial de lavanda.

Meta-análise mais recente de Cheong e colegas (2025) — publicada no *Holistic Nursing Practice* — analisou 11 RCTs (n=628) e **confirmou melhora de qualidade do sono** com lavanda.

O **NCCIH (National Center for Complementary and Integrative Health/NIH)** reconhece aromaterapia como prática complementar com evidência preliminar pra ansiedade. Estudos com camomila aplicada via massagem mostram **redução de ansiedade superior** comparado a massagem sem aromaterapia.

### Combinação de efeitos

A vela de massagem ativa três canais simultaneamente:

- **Tato** — calor suave e contínuo durante toda a aplicação
- **Olfato** — aromaterapia ativa enquanto a vela queima e enquanto a cera é aplicada
- **Hidratação cutânea** — manteigas vegetais nutrem a pele profundamente

É a técnica que mais cria a **sensação imersiva de spa premium**, mas tem fundamento técnico real além do sensorial.

## 3. Bambuterapia (Bamboo Massage)

### Origem · correção importante

Existe muita confusão sobre a origem da bambuterapia. A literatura disponível **atribui a criação ao fisioterapeuta francês Gil Amsallem** ("Gill Amsallem"), nos anos 2000, com posterior popularização no Brasil. No país, nomes como Lúcia Sahdo aparecem como referência da técnica em material de divulgação, mas **não como criadora documentada** em literatura acadêmica.

A técnica é, portanto, de **origem clínica francesa adaptada e disseminada no Brasil** — não tradição milenar oriental como às vezes se vende.

### Os bambus

Os bambus usados em massagem são de diferentes diâmetros (**geralmente 2 a 6 cm**) e comprimentos. Cada espessura trabalha uma camada do tecido:

- **Bambus finos** (2-3 cm) — áreas de tecido superficial: braços, rosto, drenagem
- **Bambus médios** (3-4 cm) — modelagem e quebra de fibrose superficial
- **Bambus grossos** (5-6 cm) — pressão profunda em grandes grupos musculares: coxas, glúteos, dorso

### A vantagem técnica sobre a mão

**Pressão sustentada com superfície plana.** A mão se cansa em manobras longas; o bambu não. Permite trabalho de modelagem consistente em série, especialmente em áreas grandes (posterior de coxa, glúteo, dorsal) onde a mão precisaria refazer a manobra muitas vezes.

### Honestidade sobre a evidência

Aqui vale uma ressalva importante: **busca direta em SciELO não retorna estudos controlados de bambuterapia com desfechos de circunferência abdominal ou fibrose**. A literatura disponível trata de fibrose pós-operatória com técnicas de liberação miofascial em geral, não de bambuterapia especificamente.

Material técnico clínico afirma que "a técnica não remove gordura nem altera profundamente a estrutura da pele — o que ocorre é melhora momentânea no aspecto de celulite por redução de edema local". É importante calibrar a promessa.

Tradução: bambuterapia tem **uso clínico bem estabelecido como técnica de massagem adjuvante** em protocolos de modelagem corporal e liberação miofascial, mas a evidência específica em RCTs ainda é escassa. Quem promete que "bambuterapia derrete gordura" está vendendo coisa que a literatura não sustenta.

## 4. Ventosaterapia (Cupping Therapy)

### Origem documentada

A ventosaterapia é prática documentada há **mais de 3000 anos** — descrita no papiro de Ebers (Egito, ~1550 a.C.) e nos textos da Medicina Tradicional Chinesa. Citada também em textos de **Hipócrates** como tratamento de doenças internas e estruturais.

### Tipos principais

| Tipo | Como funciona | Uso típico |
|---|---|---|
| **Seca (dry cupping)** | Sucção sem incisão · plástico, vidro ou silicone | Hiperemia local, liberação miofascial |
| **Úmida (wet cupping / hijama)** | Sucção + microincisões + segunda sucção pra extração de pequeno volume de sangue | Tradição médica do Oriente Médio · não aplicada em massagem terapêutica |
| **Fogo (fire cupping)** | Algodão embebido em álcool é aceso no interior do copo de vidro · o consumo de oxigênio gera vácuo | Tradição chinesa · efeito termo-vacuolar |
| **Bomba a vácuo** | Copo plástico com válvula manual ou pistola | Controle preciso de pressão · uso mais comum em clínica brasileira |
| **Silicone deslizante (sliding)** | Óleo aplicado, copo flexível desliza realizando liberação miofascial dinâmica | Trabalho em fáscia · mobilização contínua |

### Mecanismo fisiológico

Três efeitos principais documentados:

1. **Hiperemia local por sucção** — sangue é trazido à superfície, aumentando perfusão tecidual local de forma marcada e duradoura
2. **Mobilização miofascial** — solta aderências entre camadas de tecido que a manobra direta não alcança
3. **"Drenagem invertida"** — ajuda a mobilizar estagnação venosa/linfática que a compressão direta não resolve

Hipóteses neurofisiológicas (Lauche e colegas): estímulo de fibras Aβ por deformação cutânea, ativação de neurônios inibitórios do corno dorsal, efeito relaxante contextual.

### As marcas circulares · o que são (e o que não são)

A sucção rompe capilares da derme papilar, produzindo **petéquias e púrpura**. **NÃO é hematoma traumático** — não há lesão de fibra muscular. A evolução típica das cores:

vermelho-rosado → roxo → azul-esverdeado → reabsorção

**Duração típica: 7 a 14 dias.** Em pessoas com pele clara, fica mais visível. Em pessoas com tendência a marcas escuras, pode demorar mais a desaparecer. Sempre comunicado antes da sessão.

### Evidência clínica em PubMed

A ventosaterapia tem hoje a **evidência mais sólida entre as 4 técnicas** discutidas neste post:

- **Cochrane 2025** — protocolo *"Cupping therapy for chronic non-specific low back pain"* — revisão de benefícios e danos pra lombalgia crônica não-específica
- **Wang e colegas (2024)** — meta-análise no *Complementary Therapies in Clinical Practice* — evidência de alta qualidade pra melhora de dor lombar em 2-8 semanas
- **Frontiers in Neurology (2023)** — *evidence-mapping study* — benefícios potenciais pra: lombalgia, espondilite anquilosante, osteoartrite de joelho, cervicalgia, herpes-zóster, enxaqueca
- **Kim e colegas (2011)** — revisão sistemática sobre cupping pra tratamento de dor

### Posição institucional · PNPIC-SUS

A **Política Nacional de Práticas Integrativas e Complementares (PNPIC)** foi instituída no Brasil em **2006** pela Portaria GM/MS nº 971, aprovada por unanimidade no Conselho Nacional de Saúde.

A **ventosaterapia foi formalmente incluída em 2017** pela Portaria nº 849/2017, junto com mais 13 práticas. Em 2018, expansão adicional com 10 novas (Portaria nº 702/2018).

Tradução: a ventosaterapia é prática **reconhecida pelo Ministério da Saúde** e **oferecida gratuitamente em UBSs do SUS** — não é "coisa esotérica" ou prática alternativa marginal. Tem respaldo institucional formal.

A OMS, via *WHO Traditional Medicine Strategy 2014-2023*, reconhece medicina tradicional/integrativa como componente da atenção à saúde, sem endossar técnica específica como tratamento isolado de patologia grave.

## 5. Por que as 4 combinam · a lógica do Day Premium

Numa sessão de cuidado completo, cada uma resolve uma coisa que a anterior não consegue:

1. **Pedras quentes** abrem o tecido sem força — preparam.
2. **Vela** acrescenta hidratação e ativa aromaterapia — eleva a experiência sensorial e tem efeito ansiolítico documentado.
3. **Bambu** trabalha modelagem e profundidade que o calor sozinho não alcança.
4. **Ventosa** mobiliza estagnação que ficou e finaliza com hiperemia local.

No **Day Premium Equilíbrio**, essa sequência roda em aproximadamente **120 minutos**. Sai diferente de qualquer "massagem com pedras quentes" isolada que você encontre por aí — não porque alguma técnica seja exclusiva, mas porque **a combinação é pensada** pra que cada etapa prepare a próxima.

## 6. Quando faz sentido pedir cada uma isolada

Não é obrigatório fazer o Day Premium pra ter essas técnicas. Qualquer uma pode ser adicionada como **enhancement** a uma Massagem Relaxante de 60 min:

- **Pedras quentes** — pra tensão crônica em ombros e dorsais
- **Vela** — pra noites em que o ritual vale mais que a técnica, e pra quem está com sono prejudicado por ansiedade (evidência forte de lavanda + massagem)
- **Bambu** — pra trabalhar contorno em série regular (semanal/quinzenal), como adjuvante a hábitos de exercício e alimentação
- **Ventosa** — pra mobilizar pontos que doem mas você não consegue alcançar; melhor evidência clínica em dor lombar e cervical

A conversa antes da sessão decide o que faz sentido pra você naquele dia. Cada agenda é desenhada caso a caso.
`.trim(),
    faq: [
      {
        pergunta: "As pedras quentes podem queimar a pele?",
        resposta:
          "Quando a temperatura é controlada (faixa profissional: 49-57°C), não. Acima de 63°C há risco real de queimadura de 1º e 2º grau. Por isso a técnica exige termômetro de água e ajuste pra baixo em áreas sensíveis e em pessoas com sensibilidade térmica alterada (diabéticos, idosos).",
      },
      {
        pergunta: "Vela de massagem é a mesma coisa que vela de aromatizar ambiente?",
        resposta:
          "Não. São produtos completamente diferentes. A vela de massagem é cosmético tópico feito com manteigas vegetais (karité, cacau, semente de uva) que derretem a 32-45°C — segura pra contato com a pele. A vela de aromatizar ambiente usa parafina ou cera de abelha, com ponto de fusão de 60-70°C+ — aplicar na pele causa queimadura.",
      },
      {
        pergunta: "Bambuterapia derrete gordura?",
        resposta:
          "Não. Material técnico clínico afirma claramente que a técnica não remove gordura nem altera profundamente a estrutura da pele. O que acontece é melhora momentânea no aspecto de celulite por redução de edema local e mobilização miofascial. Quem promete derretimento de gordura está vendendo algo que a literatura não sustenta.",
      },
      {
        pergunta: "As marcas roxas da ventosa são hematomas?",
        resposta:
          "Não. São petéquias e púrpura por extravasamento capilar na derme papilar — não há lesão de fibra muscular como ocorre em hematoma traumático. A evolução de cor vai de vermelho-rosado → roxo → azul-esverdeado → reabsorção, e a duração típica é de 7 a 14 dias. Em pele clara, fica mais visível.",
      },
      {
        pergunta: "Ventosaterapia é prática reconhecida pelo SUS?",
        resposta:
          "Sim. A ventosaterapia foi formalmente incluída na Política Nacional de Práticas Integrativas e Complementares (PNPIC-SUS) em 2017, pela Portaria nº 849/2017 do Ministério da Saúde. É ofertada gratuitamente em Unidades Básicas de Saúde que aderiram à política.",
      },
      {
        pergunta: "Qual técnica tem mais evidência científica?",
        resposta:
          "Ventosaterapia tem a evidência mais sólida atualmente — com revisão Cochrane 2025 e meta-análises sustentando uso em dor lombar e cervical crônicas. Pedras quentes têm evidência consistente pra dor musculoesquelética. Vela de massagem se apoia em evidência robusta sobre aromaterapia (lavanda especialmente). Bambuterapia tem a evidência específica mais escassa, embora a base de massagem miofascial seja sólida.",
      },
      {
        pergunta: "Posso fazer todas as 4 em uma única sessão?",
        resposta:
          "Sim — é exatamente o que compõe o Day Premium Equilíbrio, em aproximadamente 120 minutos. A sequência é pensada pra que cada técnica prepare a próxima: pedras abrem o tecido, vela hidrata e ativa aromaterapia, bambu trabalha em profundidade, ventosa finaliza mobilizando estagnação.",
      },
    ],
    referencias: [
      {
        autor: "LaStone Therapy / Mary Nelson",
        titulo: "History of LaStone Therapy",
        ano: 1993,
        fonte: "Site oficial",
        url: "https://www.lastone-therapy.com/",
      },
      {
        autor: "Healthline",
        titulo: "6 Benefits of Hot Stone Massage",
        ano: "consulta 2026",
        fonte: "Healthline / Spa Theory",
        url: "https://www.healthline.com/health/hot-stone-massage",
      },
      {
        autor: "Field TM",
        titulo: "Massage therapy research review",
        ano: 2014,
        fonte: "Touch Research Institute · University of Miami",
        url: "https://www6.miami.edu/touch-research/",
      },
      {
        autor: "Morhenn V et al",
        titulo:
          "Massage Increases Oxytocin and Reduces Adrenocorticotropin Hormone in Humans",
        ano: 2012,
        fonte: "Alternative Therapies in Health and Medicine",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3666184/",
      },
      {
        autor: "PMC10466406",
        titulo:
          "Heat-stone massage for patients with chronic musculoskeletal pain: a protocol for multicenter randomized controlled trial",
        ano: 2023,
        fonte: "PubMed ID 37654653",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10466406/",
      },
      {
        autor: "Li et al",
        titulo:
          "Temperature-controlled stone device for chronic low back pain",
        ano: 2024,
        fonte: "Clinical and Translational Discovery · DOI 10.1002/ctd2.330",
        url: "https://onlinelibrary.wiley.com/doi/full/10.1002/ctd2.330",
      },
      {
        autor: "Donelli D et al",
        titulo:
          "Anxiety-Reducing Effects of Lavender Essential Oil Inhalation: A Systematic Review",
        ano: 2023,
        fonte: "PMC10671255 · PubMed 37998470",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10671255/",
      },
      {
        autor: "Cheong M et al",
        titulo:
          "The Sleep-Enhancing Effect of Lavender Essential Oil in Adults: A Systematic Review and Meta-Analysis",
        ano: 2025,
        fonte: "Holistic Nursing Practice · PubMed 40600743",
        url: "https://pubmed.ncbi.nlm.nih.gov/40600743/",
      },
      {
        autor: "NCCIH · National Center for Complementary and Integrative Health (NIH)",
        titulo: "Aromatherapy: What You Need To Know",
        ano: "consulta 2026",
        fonte: "NIH",
        url: "https://www.nccih.nih.gov/health/aromatherapy",
      },
      {
        autor: "Physiopedia",
        titulo: "Cupping Therapy",
        ano: "consulta 2026",
        fonte: "Physiopedia",
        url: "https://www.physio-pedia.com/Cupping_Therapy",
      },
      {
        autor: "Cureus · PMC12317738",
        titulo:
          "Circular Skin Lesions Mimicking Blunt Trauma: A Forensic Case of Cupping Therapy",
        ano: 2024,
        fonte: "Cureus",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12317738/",
      },
      {
        autor: "Cochrane Database 2025 · PMC12175213",
        titulo: "Cupping therapy for chronic non-specific low back pain",
        ano: 2025,
        fonte: "DOI 10.1002/14651858.CD015269",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12175213/",
      },
      {
        autor: "Frontiers in Neurology · PMC10640990",
        titulo:
          "Efficacy of cupping therapy on pain outcomes: an evidence-mapping study",
        ano: 2023,
        fonte: "Frontiers",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10640990/",
      },
      {
        autor: "Kim TH et al · PMC3136528",
        titulo: "Cupping for Treating Pain: A Systematic Review",
        ano: 2011,
        fonte: "Evidence-Based Complementary and Alternative Medicine",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3136528/",
      },
      {
        autor: "Ministério da Saúde · Brasil",
        titulo:
          "Política Nacional de Práticas Integrativas e Complementares (PNPIC) · Portaria GM/MS nº 971/2006 · ampliação 2017 (Portaria 849) e 2018 (Portaria 702)",
        ano: 2006,
        fonte: "bvsms.saude.gov.br · gov.br/saude",
        url: "https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_praticas_integrativas_complementares_2ed.pdf",
      },
      {
        autor: "OMS · World Health Organization",
        titulo: "WHO Traditional Medicine Strategy 2014-2023",
        ano: 2013,
        fonte: "World Health Organization",
        url: "https://www.who.int/publications/i/item/9789241506096",
      },
    ],
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

// Conta palavras do conteúdo MD (descarta markdown syntax) pra Schema.org wordCount
export function contarPalavras(md: string): number {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#*_>\[\]()`!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}
