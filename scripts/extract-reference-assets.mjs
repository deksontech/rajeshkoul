import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const sourceRoot = path.resolve("../reference-assets/Rajesh Koul .com");
const outputRoot = path.resolve("public/art");

await fs.mkdir(outputRoot, { recursive: true });

const jobs = [
  ["home-hero.jpg", "home page/Home -1.png", { left: 780, top: 0, width: 892, height: 941 }],
  ["home-author-card.jpg", "home page/Home -2.png", { left: 130, top: 100, width: 405, height: 355 }],
  ["home-expertise.jpg", "home page/Home -3.png", { left: 855, top: 105, width: 817, height: 760 }],
  ["home-book.jpg", "home page/Home -4.png", { left: 790, top: 65, width: 810, height: 710 }],
  ["digilean.jpg", "home page/Home-6.png", { left: 720, top: 0, width: 1285, height: 784 }],
  ["mission-card-1.jpg", "home page/Home -6.99999999.png", { left: 162, top: 316, width: 428, height: 190 }],
  ["mission-card-2.jpg", "home page/Home -6.99999999.png", { left: 626, top: 316, width: 418, height: 190 }],
  ["mission-card-3.jpg", "home page/Home -6.99999999.png", { left: 1084, top: 316, width: 425, height: 190 }],
  ["about-hero.jpg", "About us/about us -1.png", { left: 790, top: 20, width: 800, height: 890 }],
  ["about-system.jpg", "About us/about us -2.png", { left: 90, top: 30, width: 475, height: 610 }],
  ["literary-hero.jpg", "others/1-1.png", { left: 745, top: 95, width: 927, height: 625 }],
  ["book-toyota.jpg", "others/1-2 books.png", { left: 100, top: 500, width: 195, height: 270 }],
  ["book-strategy.jpg", "others/1-2 books.png", { left: 618, top: 500, width: 175, height: 270 }],
  ["book-product.jpg", "others/1-2 books.png", { left: 1110, top: 500, width: 178, height: 270 }],
  ["books-hero.jpg", "others/1-2 books.png", { left: 830, top: 95, width: 842, height: 380 }],
  ["coaching-hero.jpg", "others/1-3 personal leadership.png", { left: 830, top: 90, width: 842, height: 570 }],
  ["talks-hero.jpg", "others/Industry and campus talks.png", { left: 860, top: 90, width: 812, height: 625 }],
  ["podcast-hero.jpg", "others/Podcast.png", { left: 845, top: 90, width: 827, height: 680 }],
];

for (const [name, source, extract] of jobs) {
  await sharp(path.join(sourceRoot, source)).extract(extract).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(outputRoot, name));
}

const footerSource = path.resolve("../../../../Downloads/bottom image for all pages minus lean nervous system.png");
await sharp(footerSource)
  .extract({ left: 1400, top: 354, width: 272, height: 372 })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outputRoot, "footer-portrait.jpg"));

await sharp(footerSource)
  .extract({ left: 0, top: 288, width: 1672, height: 66 })
  .png()
  .toFile(path.join(outputRoot, "footer-top-wave.png"));

await sharp(footerSource)
  .extract({ left: 70, top: 60, width: 390, height: 150 })
  .png()
  .toFile(path.join(outputRoot, "signature.png"));

const authorSource = path.join(sourceRoot, "home page/Home -2.png");
await sharp(authorSource)
  .extract({ left: 155, top: 350, width: 375, height: 88 })
  .png()
  .toFile(path.join(outputRoot, "home-author-card-wave.png"));

await sharp(authorSource)
  .extract({ left: 470, top: 106, width: 60, height: 332 })
  .png()
  .toFile(path.join(outputRoot, "home-author-card-side.png"));

await sharp(authorSource)
  .extract({ left: 1250, top: 463, width: 293, height: 116 })
  .png()
  .toFile(path.join(outputRoot, "home-author-mission-art.png"));

await sharp(authorSource)
  .extract({ left: 0, top: 719, width: 600, height: 222 })
  .png()
  .toFile(path.join(outputRoot, "home-author-wave-left.png"));

await sharp(authorSource)
  .extract({ left: 1072, top: 719, width: 600, height: 222 })
  .png()
  .toFile(path.join(outputRoot, "home-author-wave-right.png"));

console.log(`Created ${jobs.length + 8} extracted assets in ${outputRoot}`);
