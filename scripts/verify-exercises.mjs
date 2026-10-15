#!/usr/bin/env node
// Verify the core invariant (also enforced in CI):
// - every unsolved exercise must FAIL `tsc --strict`
//   (except `skip_check_unsolved`, which must PASS)
// - every solution must PASS `tsc --strict`
// Usage: npm run check:exercises
import { spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { parse } from "smol-toml";

function tscPasses(file) {
  const r = spawnSync("npx", ["tsc", "--noEmit", "--strict", file], {
    stdio: "pipe",
  });
  return r.status === 0;
}

const info = parse(readFileSync("exercises/info.toml", "utf8"));
let failures = 0;

for (const e of info.exercises) {
  const file = e.dir
    ? `exercises/${e.dir}/${e.name}.ts`
    : `exercises/${e.name}.ts`;
  if (!existsSync(file)) {
    console.error(`MISSING: ${file}`);
    failures++;
    continue;
  }
  const passes = tscPasses(file);
  if (e.skip_check_unsolved) {
    if (!passes) {
      console.error(
        `FAIL: ${e.name} is skip_check_unsolved but does not pass tsc`,
      );
      failures++;
    } else {
      console.log(`ok (solved intro): ${e.name}`);
    }
  } else if (passes) {
    console.error(`FAIL: ${e.name} passes tsc but should be unsolved`);
    failures++;
  } else {
    console.log(`ok (unsolved): ${e.name}`);
  }

  const sol = e.dir
    ? `solutions/${e.dir}/${e.name}.ts`
    : `solutions/${e.name}.ts`;
  if (!existsSync(sol)) {
    console.error(`MISSING SOLUTION: ${sol}`);
    failures++;
  } else if (!tscPasses(sol)) {
    console.error(`FAIL: solution ${sol} does not pass tsc`);
    failures++;
  } else {
    console.log(`ok (solution): ${e.name}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log(`\nAll ${info.exercises.length} exercises verified.`);
