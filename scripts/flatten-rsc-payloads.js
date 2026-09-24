const fs = require('fs');
const path = require('path');

/**
 * Next.js 15/16 static exports (output: "export") write RSC prefetch payloads
 * into nested folder structures (e.g. out/en/about/__next.en/about/__PAGE__.txt),
 * but the client-side router requests them as flat dot-separated files:
 * /en/about/__next.en.about.__PAGE__.txt
 *
 * This script runs after `next build` to copy the nested .txt files into their
 * parent directory as flat, dot-separated filenames matching what the browser requests.
 */

function copyNestedTxtFiles(targetDir, currentPrefix, currentDir, stats = { copied: 0 }) {
  if (!fs.existsSync(currentDir)) return;

  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      copyNestedTxtFiles(targetDir, `${currentPrefix}.${entry.name}`, fullPath, stats);
    } else if (entry.isFile() && entry.name.endsWith('.txt')) {
      const flatFileName = `${currentPrefix}.${entry.name}`;
      const flatFilePath = path.join(targetDir, flatFileName);

      try {
        fs.copyFileSync(fullPath, flatFilePath);
        stats.copied++;
      } catch (err) {
        console.warn(`Failed to copy ${flatFileName}:`, err.message);
      }
    }
  }
}

function processDirectory(dir, stats) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith('__next.')) {
        // Flatten all nested files inside this __next.* directory into `dir`
        copyNestedTxtFiles(dir, entry.name, fullPath, stats);
      } else {
        processDirectory(fullPath, stats);
      }
    }
  }
}

const outDir = path.resolve(__dirname, '..', 'out');

if (fs.existsSync(outDir)) {
  const stats = { copied: 0 };
  console.log(`[RSC Payload Flatten] Scanning "${outDir}"...`);
  processDirectory(outDir, stats);
  console.log(`[RSC Payload Flatten] Successfully generated ${stats.copied} flat prefetch payload file(s).`);
} else {
  console.log(`[RSC Payload Flatten] "out" directory not found. Skipping.`);
}
