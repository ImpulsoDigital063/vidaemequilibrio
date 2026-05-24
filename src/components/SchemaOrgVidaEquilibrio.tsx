// Schema.org JSON-LD pra Google e LLMs (ChatGPT, Gemini, Perplexity)
// Cobre: LocalBusiness/HealthAndBeautyBusiness + OfferCatalog + Provider
// Documentado no plano-de-negocio · seção 10 (AEO)

type SchemaProps = {
  page?: "home" | "service";
  serviceName?: string;
  serviceDescription?: string;
  serviceDuration?: string;
  servicePriceMin?: number;
  servicePriceMax?: number;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://vidaemequilibrio.com.br";

const baseProvider = {
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Vida em Equilíbrio",
  alternateName: "Vida em Equilíbrio · Massagem feminina premium",
  description:
    "Clínica privativa de massagem terapêutica feminina em Palmas-TO. Atendimento exclusivo a mulheres, modelo híbrido (clínica parceira + domicílio), uma cliente por turno. Operado por Leandro Timóteo.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/img/heroHands.png`,
  telephone: "+5563848436460",
  priceRange: "R$180 - R$680",
  paymentAccepted: "PIX, Cartão de crédito",
  currenciesAccepted: "BRL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ACNO 01, Rua O1, LT 06, Sala 01 (clínica parceira CYOX)",
    addressLocality: "Palmas",
    addressRegion: "TO",
    postalCode: "77000-000",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Palmas" },
    { "@type": "State", name: "Tocantins" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Leandro Timóteo",
    jobTitle: "Massoterapeuta",
    sameAs: ["https://instagram.com/timoteoofficial.__"],
  },
  sameAs: [
    "https://instagram.com/timoteoofficial.__",
    "https://wa.me/5563848436460",
  ],
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Mulheres adultas",
    suggestedGender: "female",
    suggestedMinAge: 18,
  },
};

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Massagens · Vida em Equilíbrio",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Day Premium Equilíbrio",
      description:
        "Programa completo de 120 minutos com 6 técnicas integradas: esfoliante corporal, bolinha massageadora, pedras quentes, vela aromática, bambu terapêutico e ventosa de finalização.",
      url: `${SITE_URL}/day-premium`,
      priceCurrency: "BRL",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 520,
        maxPrice: 680,
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Offer",
      name: "Massagem Relaxante",
      description:
        "Sessão clássica de 60 minutos com manobras de deslizamento e amassamento. Pode receber enhancements.",
      url: `${SITE_URL}/massagem-relaxante`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 180,
        maxPrice: 240,
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Offer",
      name: "Drenagem Linfática",
      description:
        "Manobras manuais de bombeamento ganglionar e deslizamento contínuo. Indicada para retenção, inchaço e pós-cirúrgico.",
      url: `${SITE_URL}/drenagem-linfatica`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 190,
        maxPrice: 250,
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Offer",
      name: "Massagem Desportiva",
      description:
        "Liberação miofascial, pressão em pontos-gatilho e deslizamento de drenagem ascendente. Pra corredoras amadoras: preparação pré-prova e recovery pós-prova.",
      url: `${SITE_URL}/massagem-desportiva`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 200,
        maxPrice: 280,
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Offer",
      name: "Massagem Modeladora",
      description:
        "Amassamento profundo, pinçamento e rolamento. Trabalho de contorno corporal com pressão direcionada.",
      url: `${SITE_URL}/massagem-modeladora`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 200,
        maxPrice: 280,
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Offer",
      name: "Massagem Facial",
      description:
        "Drenagem facial, liberação de ATM e pressão suave no contorno do olho. Alivia tensão e devolve viço.",
      url: `${SITE_URL}/massagem-facial`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 160,
        maxPrice: 220,
        priceCurrency: "BRL",
      },
    },
  ],
};

function buildSchema(props: SchemaProps) {
  if (props.page === "service") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: props.serviceName,
      description: props.serviceDescription,
      provider: baseProvider,
      areaServed: { "@type": "City", name: "Palmas" },
      serviceType: "Massagem terapêutica",
      audience: baseProvider.audience,
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        ...(props.servicePriceMin && {
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: props.servicePriceMin,
            maxPrice: props.servicePriceMax,
            priceCurrency: "BRL",
          },
        }),
      },
    };
  }
  // Home: LocalBusiness completo + catálogo
  return {
    "@context": "https://schema.org",
    ...baseProvider,
    hasOfferCatalog: offerCatalog,
  };
}

export default function SchemaOrgVidaEquilibrio(props: SchemaProps) {
  const schema = buildSchema(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema separado · usar dentro do componente FAQ pra evitar duplicação de dados
export function SchemaFAQ({
  perguntas,
}: {
  perguntas: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: p.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
