// Prepare optimized web copies without modifying the supplied originals.
// Usage: node scripts/prepare-brand-assets.mjs <light-banner> <dark-banner> <light-profile> <dark-profile>
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const inputs = process.argv.slice(2);

if (inputs.length !== 4) {
  throw new Error(
    "Expected four source PNG paths: light banner, dark banner, light profile, dark profile.",
  );
}

const outputDirectory = "public/brand";
await mkdir(outputDirectory, { recursive: true });

const pngOptions = {
  adaptiveFiltering: true,
  compressionLevel: 9,
  effort: 10,
};

async function prepareBanner(input, output) {
  await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .removeAlpha()
    .png(pngOptions)
    .toFile(`${outputDirectory}/${output}`);
}

async function prepareProfile(input, output) {
  const image = sharp(input);
  const metadata = await image.metadata();
  const sourceSize = Math.min(metadata.width ?? 0, metadata.height ?? 0);

  if (!sourceSize) {
    throw new Error(`Unable to read dimensions for ${input}`);
  }

  const cropSize = Math.round(sourceSize * 0.84);
  const left = Math.round(((metadata.width ?? sourceSize) - cropSize) / 2);
  const top = Math.round(((metadata.height ?? sourceSize) - cropSize) / 2);

  await image
    .extract({ left, top, width: cropSize, height: cropSize })
    .resize(768, 768, { fit: "cover" })
    .removeAlpha()
    .png(pngOptions)
    .toFile(`${outputDirectory}/${output}`);
}

await Promise.all([
  prepareBanner(inputs[0], "tini-flegar-banner-light.png"),
  prepareBanner(inputs[1], "tini-flegar-banner-dark.png"),
  prepareProfile(inputs[2], "tini-flegar-profile-light.png"),
  prepareProfile(inputs[3], "tini-flegar-profile-dark.png"),
]);

console.log(`Prepared four optimized brand assets in ${outputDirectory}.`);
