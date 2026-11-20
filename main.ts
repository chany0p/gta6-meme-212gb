// gta6-meme-x-01 entry: copies POST.json (the X post to enter) to /output/POST.json.
// Node 22, standard library only. No network, no other work.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "POST.json");
// The grader runs this with /output as the deliverable directory; OUTPUT_DIR
// only exists so the copy can be tested locally without touching /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const data = readFileSync(src);
writeFileSync(join(outDir, "POST.json"), data);
console.log(`Wrote ${join(outDir, "POST.json")} (${data.length} bytes) from ${src}`);
