import * as fs from "node:fs";
import * as path from "node:path";

// Everyday Wonder: one sentence about a small everyday moment made strange
// and new, grounded in something real.
const entry =
  "The escalator handrail arrives warm from the hands before mine, still carrying strangers I will never meet.";

// Self-check against the competition gate before writing: the entry must be
// one sentence of 1-200 characters, not only white space. Fail loudly
// instead of writing an invalid entry.
const codePoints = [...entry].length;
if (entry.trim().length === 0) {
  throw new Error("entry must not be empty or whitespace-only");
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
