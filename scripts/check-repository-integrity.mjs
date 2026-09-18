import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const conflictMarker = /^(?:<{7}|={7}|>{7})(?:\s|$)/m;
const trackedFiles = execFileSync("git", ["ls-files", "-z"], { encoding: "buffer" })
  .toString("utf8")
  .split("\0")
  .filter(Boolean);
const conflicts = [];
const invalidJson = [];

for (const file of trackedFiles) {
  if (!existsSync(file)) continue;
  const content = readFileSync(file);
  if (!content.includes(0) && conflictMarker.test(content.toString("utf8"))) conflicts.push(file);
  if (file.endsWith(".json")) {
    try { JSON.parse(content.toString("utf8")); } catch { invalidJson.push(file); }
  }
}

if (conflicts.length || invalidJson.length) {
  if (conflicts.length) console.error(`Unresolved Git conflict markers:\n${conflicts.map((file) => ` - ${file}`).join("\n")}`);
  if (invalidJson.length) console.error(`Invalid JSON files:\n${invalidJson.map((file) => ` - ${file}`).join("\n")}`);
  process.exit(1);
}
console.log(`Repository integrity verified: ${trackedFiles.length} tracked files, no conflict markers, valid JSON.`);
