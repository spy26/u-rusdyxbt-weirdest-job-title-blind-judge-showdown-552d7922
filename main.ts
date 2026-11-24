// Weirdest Job Title: Blind Judge Showdown.
// Deterministic: prints the entry exactly as stored in entry.txt, no trailing newline.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
let entry;
try {
  entry = readFileSync(join(here, "entry.txt"), "utf8");
} catch (err) {
  process.stderr.write(`cannot read entry.txt: ${err.message}\n`);
  process.exit(1);
}
process.stdout.write(entry);
