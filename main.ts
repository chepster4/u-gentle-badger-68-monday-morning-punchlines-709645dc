// Monday Morning Punchlines — one joke about Monday mornings.
// Node 22, standard library only. Writes the joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Monday morning called a meeting with my weekend. The weekend didn't show. Monday billed it anyway.";

// Fail loudly rather than submit an entry the gate would reject:
// the gate wants UTF-8 text of 1 to 200 characters, not only whitespace.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${chars} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
