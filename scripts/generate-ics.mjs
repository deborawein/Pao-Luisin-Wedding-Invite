import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ICS_EVENT } from "../src/config/wedding.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = join(root, "public", "pao-luisi-boda.ics");

writeFileSync(outputPath, `${ICS_EVENT}\n`, "utf8");
console.log(`Wrote ${outputPath}`);
