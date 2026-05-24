#!/usr/bin/env node
/**
 * Gerador de imagens via Replicate Flux pra Vida em Equilíbrio.
 *
 * Uso:
 *   npm run img -- <prompt-key>                            (modelo default da key)
 *   npm run img -- <prompt-key> <out.png>
 *   npm run img -- <prompt-key> <out.png> <schnell|dev|pro>
 *   npm run img -- "<custom prompt completo>" <out.png>
 *
 * Prompts cravados: ver VE_PROMPTS abaixo.
 */

import { config } from "dotenv";
import Replicate from "replicate";
import { writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";

config({ path: ".env.local" });
config();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("✗ REPLICATE_API_TOKEN não encontrada");
  process.exit(1);
}

const MODEL_IDS = {
  schnell: "black-forest-labs/flux-schnell",
  dev: "black-forest-labs/flux-dev",
  pro: "black-forest-labs/flux-1.1-pro",
};

// =============================================================
// PROMPTS · VIDA EM EQUILÍBRIO
// Mood global: cinematic low-light tungsten warm. Editorial.
// NUNCA gerar rosto/pessoa reconhecível (preservação).
// =============================================================

const VE_PROMPTS = {
  heroHands: {
    prompt:
      "Editorial photography of female hands receiving a slow massage on a shoulder, soft warm tungsten lighting, deep amber and dark brown tones, very shallow depth of field, single subject, intimate cinematic atmosphere, faces not visible, dark warm background, photorealistic, high quality, no text, no logo, magazine quality",
    negativePrompt:
      "bright lighting, white background, cold tones, blue, multiple people, faces visible, cartoon, illustration, text overlay, watermark, logo, cluttered",
    aspectRatio: "16:9",
    suggestedModel: "pro",
    note: "Hero principal — mão recebendo massagem em ombro feminino",
  },

  stillHotStones: {
    prompt:
      "Editorial still life of a stack of black basalt hot stones in a warm copper bowl, gentle steam rising, dark warm background, candlelight, single subject, golden brown amber tones, photorealistic, magazine product photography, no text",
    negativePrompt:
      "cold lighting, multiple objects, cluttered, white background, blue tones, cartoon, illustration, text",
    aspectRatio: "1:1",
    suggestedModel: "pro",
    note: "Still life · pedras quentes",
  },

  stillCandle: {
    prompt:
      "Editorial still life of a lit aromatic massage candle on a dark stone surface, melted wax pool, warm glowing flame, very dark warm background, intimate spa atmosphere, single subject, amber and bronze tones, photorealistic, magazine quality, no text",
    negativePrompt:
      "bright, cold light, multiple candles, white background, cartoon, text, watermark",
    aspectRatio: "1:1",
    suggestedModel: "pro",
    note: "Still life · vela aromática quente",
  },

  stillBamboo: {
    prompt:
      "Editorial still life of bamboo massage sticks arranged on a folded dark linen towel, warm side lighting from a candle, dark wood surface, single subject still life, amber and chocolate tones, photorealistic, magazine product photography, no text",
    negativePrompt:
      "bright daylight, white background, multiple subjects, cold tones, blue, cartoon, text",
    aspectRatio: "1:1",
    suggestedModel: "pro",
    note: "Still life · bambus terapêuticos",
  },

  stillCupping: {
    prompt:
      "Editorial still life of glass cupping therapy cups arranged on a dark surface, soft tungsten reflection on the glass, dark warm background, intimate spa, single subject still life, amber tones, photorealistic, magazine quality, no text",
    negativePrompt:
      "bright light, white background, multiple subjects cluttered, cold tones, cartoon, text",
    aspectRatio: "1:1",
    suggestedModel: "pro",
    note: "Still life · ventosas",
  },

  stillEsfoliante: {
    prompt:
      "Editorial still life of a ceramic bowl with creamy body scrub, a bamboo spoon resting beside, warm wood background, soft amber tungsten light, single subject, intimate spa atmosphere, photorealistic, magazine quality, no text",
    negativePrompt:
      "bright daylight, white background, multiple bowls, cold lighting, cartoon, text",
    aspectRatio: "1:1",
    suggestedModel: "pro",
    note: "Still life · esfoliante corporal (brinde 1º atendimento)",
  },

  textureLinen: {
    prompt:
      "Macro photograph of folded warm beige linen towel with soft side lighting, deep folds creating shadows, single subject texture study, amber and cream tones, photorealistic, magazine quality, no text",
    negativePrompt:
      "bright light, multiple subjects, cold tones, cartoon, text, watermark",
    aspectRatio: "16:9",
    suggestedModel: "schnell",
    note: "Textura · tecido para background",
  },

  ambientLowLight: {
    prompt:
      "Empty massage therapy room with single warm candle on a wooden side table, dark warm tungsten atmosphere, intimate spa interior, no people, single subject moody atmosphere, amber and chocolate tones, photorealistic, magazine quality, no text",
    negativePrompt:
      "bright daylight, white walls, multiple people, cold lighting, blue tones, cartoon, text",
    aspectRatio: "16:9",
    suggestedModel: "pro",
    note: "Ambiente · placeholder pra seção Espaço (até foto real do Leandro)",
  },

  heroCorredora: {
    prompt:
      "Editorial photography of a female athlete running on a city street at night, cinematic long exposure motion blur, urban lights streaking warm amber and bronze tones, deep dark background, athletic woman in black running outfit and sneakers, dynamic athletic pose, motion captured in single frame, magazine cinematic quality, photorealistic, faces blurred not identifiable",
    negativePrompt:
      "bright daylight, white background, cold tones, blue, cartoon, illustration, text overlay, watermark, logo, static pose, multiple people clearly visible",
    aspectRatio: "16:9",
    suggestedModel: "pro",
    note: "Hero corredora noturna · seção Massagem Desportiva (Restauração)",
  },

  stillManifesto: {
    prompt:
      "Editorial still life photograph of female hands folded gently on lap, close-up, soft warm tungsten lighting, very dark amber and chocolate brown background, intimate cinematic atmosphere, single subject, hands only, no face visible, magazine quality photography, photorealistic, golden warm tones, evokes contemplation and presence, vertical 4:5 frame",
    negativePrompt:
      "bright daylight, white background, cold tones, blue, faces visible, multiple people, cartoon, illustration, text overlay, watermark, logo, sketch",
    aspectRatio: "4:5",
    suggestedModel: "pro",
    note: "Substitui placeholder 'Foto profissional pendente' no Manifesto Leandro",
  },

  stillBraco: {
    prompt:
      "Editorial photography of professional female hands giving a back massage, close-up of fingers pressing softly into shoulder blade muscles, warm tungsten lighting, deep amber and bronze tones, very dark background, cinematic intimate atmosphere, single subject, no face visible, magazine photography, photorealistic, golden brown tones",
    negativePrompt:
      "bright lighting, white background, multiple people, face visible, cold tones, cartoon, illustration, text, watermark, logo, sketch",
    aspectRatio: "16:9",
    suggestedModel: "pro",
    note: "Alternativa pro hero ou seção Espaço · close técnico de manobra",
  },

  stillBolinha: {
    prompt:
      "Editorial still life of a small spiky rubber massage ball on a folded dark linen towel, dark warm tungsten background, intimate spa atmosphere, single subject, amber and chocolate tones, photorealistic, magazine quality, no text",
    negativePrompt:
      "bright daylight, white background, multiple objects cluttered, cold lighting, cartoon, text",
    aspectRatio: "1:1",
    suggestedModel: "pro",
    note: "Still life · bolinha massageadora",
  },

  // backgrounds e divisores
  backgroundDark: {
    prompt:
      "Abstract dark warm tungsten gradient background, soft amber glow in center, deep brown and almost black edges, no objects, photorealistic, magazine quality, no text",
    negativePrompt: "objects, text, cartoon, bright, cold tones",
    aspectRatio: "16:9",
    suggestedModel: "schnell",
    note: "Background · divisor entre seções",
  },
};

const [, , keyOrPrompt, outArg, modelArg, arArg] = process.argv;

if (!keyOrPrompt) {
  console.error(`
Uso: npm run img -- <prompt-key-ou-custom> [out=auto] [model=schnell|dev|pro]

Prompts cravados:
${Object.entries(VE_PROMPTS)
  .map(([k, v]) => `  - ${k.padEnd(22)} ${v.note} (default: ${v.suggestedModel})`)
  .join("\n")}

Exemplos:
  npm run img -- heroHands
  npm run img -- stillHotStones ./public/img/pedras.png pro
`);
  process.exit(1);
}

let prompt, aspectRatio, model, negativePrompt, note;
if (VE_PROMPTS[keyOrPrompt]) {
  const p = VE_PROMPTS[keyOrPrompt];
  prompt = p.prompt;
  aspectRatio = p.aspectRatio;
  model = modelArg || p.suggestedModel;
  negativePrompt = p.negativePrompt;
  note = p.note;
} else {
  prompt = keyOrPrompt;
  aspectRatio = arArg || "1:1";
  model = modelArg || "schnell";
}

if (arArg) aspectRatio = arArg;

const out =
  outArg ||
  `./public/img/${keyOrPrompt.slice(0, 30).replace(/\W+/g, "-")}.png`;
const outPath = resolve(out);
await mkdir(dirname(outPath), { recursive: true });

console.log(`Modelo: ${MODEL_IDS[model]}`);
console.log(`Aspect: ${aspectRatio}`);
if (note) console.log(`Note:   ${note}`);
console.log(`→ Gerando...`);

const t0 = Date.now();
const replicate = new Replicate({ auth: TOKEN });

const input = {
  prompt,
  aspect_ratio: aspectRatio,
  output_format: "png",
  output_quality: 95,
};
if (model !== "schnell" && negativePrompt) {
  input.negative_prompt = negativePrompt;
}

const output = await replicate.run(MODEL_IDS[model], { input });

let url;
if (Array.isArray(output)) {
  const first = output[0];
  url =
    typeof first === "string"
      ? first
      : typeof first?.url === "function"
        ? first.url()
        : null;
} else if (typeof output === "string") {
  url = output;
} else if (output?.url) {
  url = typeof output.url === "function" ? output.url() : output.url;
}

if (!url) {
  console.error("✗ Output Replicate inesperado:", JSON.stringify(output).slice(0, 200));
  process.exit(1);
}

console.log(`✓ Gerada em ${((Date.now() - t0) / 1000).toFixed(1)}s`);
console.log(`URL: ${url}`);

const res = await fetch(url);
const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outPath, buf);
console.log(`✓ Salvo: ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`);
