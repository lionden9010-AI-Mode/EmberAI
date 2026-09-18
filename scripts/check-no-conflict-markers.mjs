import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const marker = /^(?:<{7}|={7}|>{7})(?:\s|$)/m;
const files = execFileSync("git", ["ls-files", "-z"], { encoding: "buffer" })
  .toString("utf8")
  .split("\0")
  .filter(Boolean);

const conflicts = files.filter((file) => {
  const content = readFileSync(file);
  return !content.includes(0) && marker.test(content.toString("utf8"));
});

if (conflicts.length > 0) {
  console.error(`Unresolved merge conflict markers found in:\n${conflicts.map((file) => ` - ${file}`).join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${files.length} tracked files: no unresolved merge conflict markers found.`);
