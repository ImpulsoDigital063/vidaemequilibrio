#!/usr/bin/env node
/**
 * Gera retrato editorial do Leandro:
 *   1) cena base via Flux 1.1 Pro (vertical · warm tungsten)
 *   2) face-swap preservando rosto via codeplugtech/face-swap
 *
 * Custo: ~$0.16 por execução.
 * Uso: node scripts/gen-leandro.mjs
 */

import { config } from "dotenv";
import Replicate from "replicate";
import { writeFile, readFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

config({ path: ".env.local" });
config();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("✗ REPLICATE_API_TOKEN não encontrada");
  process.exit(1);
}

const replicate = new Replicate({ auth: TOKEN });

const SOURCE_FACE = resolve("public/img/leandro-source.jpg");
const OUT_CENA = resolve("public/img/leandro-cena-base.jpg");
const OUT_FINAL = resolve("public/img/leandro-manifesto.jpg");

// CENA A · retrato editorial meio-busto contemplativo warm tungsten
const PROMPT_CENA = `editorial cinematic portrait, masculine massage therapist, brown short hair, around 28-32 years old, half-bust framing, contemplative lateral gaze looking off-camera, calm serene expression, wearing soft cream linen shirt, warm tungsten side lighting at 45 degrees, dark warm brown out-of-focus background, fine art photography, Aman resort aesthetic, Bamford editorial mood, shallow depth of field, film grain, natural skin texture, soft shadows, 4:5 vertical portrait, low-key cinematic lighting, premium spa atmosphere, contemplative silence`;

const NEGATIVE = `cartoon, 3d render, illustration, painting, drawing, smiling teeth, multiple people, woman, female, child, plastic skin, oversaturated, neon, blue tint, cool lighting, white clinical light, watermark, text, logo, signature, hands visible, full body, busy background, modern office, clinical setting, hospital`;

async function gerarCena() {
  console.log("\n▶ Etapa 1/2 · Gerando cena base com Flux 1.1 Pro...");
  console.log("   modelo: black-forest-labs/flux-1.1-pro\n");

  const output = await replicate.run("black-forest-labs/flux-1.1-pro", {
    input: {
      prompt: PROMPT_CENA,
      aspect_ratio: "4:5",
      output_format: "jpg",
      output_quality: 92,
      safety_tolerance: 5,
      prompt_upsampling: true,
    },
  });

  // output é uma URL (string) ou objeto FileOutput
  const url = typeof output === "string" ? output : await output.url();
  console.log("✓ Cena gerada:", url);

  const buffer = await fetch(url).then((r) => r.arrayBuffer());
  await mkdir(dirname(OUT_CENA), { recursive: true });
  await writeFile(OUT_CENA, Buffer.from(buffer));
  console.log("✓ Cena base salva em", OUT_CENA);

  return url;
}

async function faceSwap(cenaInput) {
  console.log("\n▶ Etapa 2/2 · Aplicando face-swap (preserva rosto do Leandro)...");
  console.log("   modelo: codeplugtech/face-swap\n");

  // Lê a foto source e converte pra base64 (data URI)
  const sourceBuffer = await readFile(SOURCE_FACE);
  const sourceBase64 = `data:image/jpeg;base64,${sourceBuffer.toString("base64")}`;

  const output = await replicate.run(
    "codeplugtech/face-swap:278a81e7ebb22db98bcba54de985d22cc1abeead2754eb1f2af717247be69b34",
    {
      input: {
        swap_image: sourceBase64, // rosto a preservar
        input_image: cenaInput, // cena onde aplicar (URL ou base64)
      },
    }
  );

  const url = typeof output === "string" ? output : await output.url();
  console.log("✓ Face-swap concluído:", url);

  const buffer = await fetch(url).then((r) => r.arrayBuffer());
  await writeFile(OUT_FINAL, Buffer.from(buffer));
  console.log("✓ Retrato final salvo em", OUT_FINAL);

  const finalStat = await stat(OUT_FINAL);
  console.log(`   tamanho: ${(finalStat.size / 1024).toFixed(1)} KB`);
}

async function main() {
  try {
    let cenaInput;
    const args = process.argv.slice(2);
    const skipCena = args.includes("--skip-cena") || existsSync(OUT_CENA);

    if (skipCena) {
      console.log("▶ Reusando cena base local (skip flux):", OUT_CENA);
      const cenaBuffer = await readFile(OUT_CENA);
      cenaInput = `data:image/jpeg;base64,${cenaBuffer.toString("base64")}`;
    } else {
      cenaInput = await gerarCena();
    }

    await faceSwap(cenaInput);
    console.log("\n✓ Pronto. Use no Manifesto: /img/leandro-manifesto.jpg");
  } catch (err) {
    console.error("\n✗ Erro:", err.message);
    if (err.response) {
      try {
        const text = await err.response.text();
        console.error("Response body:", text);
      } catch {}
    }
    process.exit(1);
  }
}

main();
