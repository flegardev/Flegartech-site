// Generates the app and manifest icon set from the optimized dark profile asset.
// Usage: node scripts/generate-icons.mjs
import sharp from "sharp";

const source = "public/brand/tini-flegar-profile-dark.png";

await sharp(source).resize(512, 512).png().toFile("public/favicon.png");
await sharp(source).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(source).resize(512, 512).png().toFile("public/icon-512.png");
await sharp(source)
  .resize(410, 410)
  .extend({ top: 51, bottom: 51, left: 51, right: 51, background: "#050505" })
  .png()
  .toFile("public/icon-maskable-512.png");
await sharp(source).resize(512, 512).png().toFile("src/app/icon.png");

// Apple touch icons don't support transparency — flatten onto the site background.
await sharp(source)
  .resize(160, 160)
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: "#050505" })
  .flatten({ background: "#050505" })
  .png()
  .toFile("src/app/apple-icon.png");

console.log("Generated favicon, manifest, app and Apple icon PNGs from the Tini Flegar profile asset.");
