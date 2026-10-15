#!/usr/bin/env node
// Check a single exercise: typecheck it, then run it if it passes.
// Usage: npm run exercise -- <name>
import { spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { parse } from "smol-toml";

const name = process.argv[2];
if (!name) {
  console.error("Usage: npm run exercise -- <name>");
  console.error("Example: npm run exercise -- variables1");
  process.exit(2);
}

const info = parse(readFileSync("exercises/info.toml", "utf8"));
const exercise = info.exercises.find((e) => e.name === name);
if (!exercise) {
  console.error(`Unknown exercise: ${name}`);
  process.exit(2);
}

const file = exercise.dir
  ? `exercises/${exercise.dir}/${exercise.name}.ts`
  : `exercises/${exercise.name}.ts`;
if (!existsSync(file)) {
  console.error(`Missing file: ${file}`);
  process.exit(2);
}

const tsc = spawnSync("npx", ["tsc", "--noEmit", "--strict", file], {
  stdio: "inherit",
});
if (tsc.status !== 0) {
  console.error(
    `\n${name}: typecheck FAILED — keep going, read the errors above!`,
  );
  process.exit(1);
}

console.log(`\n${name}: typecheck passed, running...\n`);
const run = spawnSync("npx", ["tsx", file], { stdio: "inherit" });
process.exit(run.status ?? 1);
