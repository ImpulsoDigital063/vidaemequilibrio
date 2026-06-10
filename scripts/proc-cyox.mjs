import sharp from "sharp";

const FOTO = "C:/Users/Usuario/Downloads/WhatsApp Image 2026-06-03 at 17.46.54.jpeg";
const LOGO = "C:/Users/Usuario/Downloads/WhatsApp Image 2026-06-03 at 18.17.27.jpeg";

// 1) Fachada · auto-orienta (EXIF), redimensiona, otimiza
await sharp(FOTO)
  .rotate()
  .resize(1400, null, { withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/img/cyox-fachada.jpg");
console.log("cyox-fachada.jpg OK");

// 2) Logo · remove fundo branco e recolore o traço pra champagne (transparente PNG)
//    alpha = inverso da luminância (branco => transparente, traço escuro => opaco)
const trimmed = await sharp(LOGO).rotate().trim({ threshold: 12 }).toBuffer();
const meta = await sharp(trimmed).metadata();

const alpha = await sharp(trimmed)
  .greyscale()
  .negate() // 255 - luminância => traço escuro vira alpha alto
  .linear(1.5, 0) // reforça o traço (clampa em 255)
  .toBuffer();

const champagne = await sharp({
  create: {
    width: meta.width,
    height: meta.height,
    channels: 3,
    background: { r: 201, g: 183, b: 156 }, // #C9B79C champagne
  },
})
  .png()
  .toBuffer();

await sharp(champagne)
  .joinChannel(alpha)
  .resize(520, null, { withoutEnlargement: true })
  .png()
  .toFile("public/img/cyox-logo.png");
console.log(`cyox-logo.png OK (${meta.width}x${meta.height} trimmed)`);
