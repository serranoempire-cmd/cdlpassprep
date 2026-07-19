// Generates a placeholder single-page PDF for the free Air Brakes cheat sheet lead magnet,
// from the existing inside-airbrake-psi.jpg screenshot. Run: node scripts/generate-placeholder-cheat-sheet.mjs
//
// OWNER TODO: replace public/downloads/airbrakes-cheat-sheet.pdf with the real,
// polished cheat-sheet page exported directly from Guide 3 (Air Brakes) once available.
import { PDFDocument } from "pdf-lib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imagePath = path.join(root, "public", "inside-airbrake-psi.jpg");
const outPath = path.join(root, "public", "downloads", "airbrakes-cheat-sheet.pdf");

async function main() {
  const imageBytes = fs.readFileSync(imagePath);
  const pdfDoc = await PDFDocument.create();
  const jpgImage = await pdfDoc.embedJpg(imageBytes);
  const { width, height } = jpgImage;

  const page = pdfDoc.addPage([width, height]);
  page.drawImage(jpgImage, { x: 0, y: 0, width, height });

  const pdfBytes = await pdfDoc.save();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`Wrote ${outPath}`);
}

main();
