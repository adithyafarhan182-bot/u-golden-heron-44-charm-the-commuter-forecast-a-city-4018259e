// Mizzlewick — a one-line weather forecast for a city that doesn't exist.
// Charm the Commuter: Forecast a City That Isn't (make.fun)
// The program is deterministic: no network, no secrets, no randomness.
// It writes exactly one forecast line (134 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Mizzlewick: light drizzle, 14°C, umbrellas up — the 8:04 bus is late again, but the rain smells of fresh bread from the corner bakery.";

// The grader reads /output/entry.txt; honour $OUTPUT_DIR when set.
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");

console.log(`wrote ${outFile} (${[...ENTRY].length} characters)`);
console.log(ENTRY);
