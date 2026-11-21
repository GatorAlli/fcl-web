#!/usr/bin/env node
import { spawnSync } from "node:child_process";

const FORMATTABLE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".md",
  ".mdx",
  ".html",
  ".yml",
  ".yaml",
]);

function getExtension(filePath) {
  const match = /\.[^./\\]+$/.exec(filePath);
  return match ? match[0].toLowerCase() : "";
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function main() {
  const raw = await readStdin();
  const payload = JSON.parse(raw);
  const filePath = payload?.tool_input?.file_path;

  if (!filePath || !FORMATTABLE_EXTENSIONS.has(getExtension(filePath))) return;

  spawnSync("npx", ["--no-install", "prettier", "--write", filePath], {
    stdio: "ignore",
  });
}

main().catch(() => {});
