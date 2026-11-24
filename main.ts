import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your password is correct, but the login page timed out while checking it. Sign in again; the server has had its coffee now.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, checkedLine(LINE));
