// One-Liner Laughs — a single funny line, at most 200 characters.
// The program writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked my smart speaker for some privacy. It whispered, 'Of course,' then told the toaster everything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
