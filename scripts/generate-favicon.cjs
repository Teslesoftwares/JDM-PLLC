/**
 * Generates the app icons from `public/logo.svg`:
 *   - src/app/icon.png    512x512, used by browsers and the home-screen icon
 *   - src/app/favicon.ico PNG-compressed ICO at 16/32/48/256 px
 *
 * Run with `node scripts/generate-favicon.cjs` (or `npm run icons`).
 * The brand background is white (#FFFFFF), so the mark is centred on a white
 * square with a small margin rather than stretched, which keeps its proportions
 * at every size.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const source = path.join(root, "public", "logo.svg");

const ICON_PX = 512;
const FAVICON_SIZES = [16, 32, 48, 256];

/** Intrinsic width of `public/logo.svg`, read from its viewBox. */
const SOURCE_WIDTH = Number(
  /viewBox="[\d.]+ [\d.]+ ([\d.]+) /.exec(fs.readFileSync(source, "utf8"))?.[1] || 512
);

/** White brand background, used behind the mark on every icon size. */
const BACKGROUND = { r: 255, g: 255, b: 255, alpha: 1 };

/** Fraction of the square the mark spans on its longer axis. */
const FILL = 0.86;

/**
 * Rasterises the mark at `size` px on a white square, scaled to fit and
 * centred. The source document is declared in millimetres, so the rasteriser
 * density is chosen to land on a 4x intermediate instead of a huge canvas.
 */
async function render(size) {
  const density = Math.max(1, (size * 4 * 72) / SOURCE_WIDTH);
  const svg = await sharp(source, { density, limitInputPixels: false })
    .resize(Math.round(size * FILL), Math.round(size * FILL), {
      fit: "inside",
      background: BACKGROUND,
    })
    .png()
    .toBuffer();

  return sharp(svg)
    .resize(size, size, {
      fit: "contain",
      background: BACKGROUND,
    })
    .flatten({ background: BACKGROUND })
    // Next's image pipeline only decodes RGBA PNGs inside the .ico
    .ensureAlpha()
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function main() {
  if (!fs.existsSync(source)) {
    throw new Error(`missing ${source}`);
  }

  const iconPath = path.join(root, "src", "app", "icon.png");
  fs.writeFileSync(iconPath, await render(ICON_PX));

  const payloads = [];
  for (const size of FAVICON_SIZES) {
    payloads.push({ size, data: await render(size) });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(payloads.length, 4);

  const entries = [];
  let offset = header.length + payloads.length * 16;
  for (const { size, data } of payloads) {
    const entry = Buffer.alloc(16);
    entry[0] = size === 256 ? 0 : size;
    entry[1] = size === 256 ? 0 : size;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  const icoPath = path.join(root, "src", "app", "favicon.ico");
  fs.writeFileSync(icoPath, Buffer.concat([header, ...entries, ...payloads.map((p) => p.data)]));

  process.stdout.write(`wrote ${path.relative(root, iconPath)} (${ICON_PX} px)\n`);
  process.stdout.write(
    `wrote ${path.relative(root, icoPath)} (${FAVICON_SIZES.map((s) => `${s}px`).join(", ")})\n`
  );
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});