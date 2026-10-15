# TypeScriptlings

> Initiated by [Rustlings](https://github.com/rust-lang/rustlings) (v6.5.0) —
> a TypeScript port of its CLI, exercise format, and workflow.

Small exercises to get you used to reading and writing TypeScript code.

```ts
// exercises/01_variables/variables1.ts
function main(): void {
  // TODO: Add the missing keyword to declare `x`.
  x = 5; // error TS2304: Cannot find name 'x'.
  console.log(`x has the value ${x}`);
}
```

Fix the `// TODO:`, re-run, move to the next exercise.

## Quick start

Prerequisite: Node.js >= 20.

```bash
git clone https://github.com/ahmedsliman/typescriptlings.git
cd typescriptlings
npm install
npm run exercise -- variables1
```

`npm run exercise -- <name>` typechecks the exercise and runs it if it
passes. Each exercise file contains a `// TODO:` comment — fix the error
until the typechecker passes, then compare with `solutions/` if you get stuck.
(Full watch-mode CLI in progress, see `CONTRIBUTING.md`.)

## Progress

| Topic                | Exercises | Status                         |
| -------------------- | --------- | ------------------------------ |
| `00_intro`           | 2         | ✅ done                        |
| `01_variables`       | 3         | ✅ done                        |
| `02_functions`       | 3         | ✅ done                        |
| `03_if`              | 1         | ✅ done                        |
| `04_primitive_types` | 2         | ✅ done                        |
| `05_arrays`          | 1         | ✅ done                        |
| _more topics_        | —         | 🚧 planned (`CONTRIBUTING.md`) |

## Layout

```
src/            CLI runner (in progress)
scripts/        exercise helpers (check-exercise, verify-exercises)
exercises/      <topic>/<name>.ts + README.md + info.toml
solutions/      mirror of exercises/
```

## How exercises are checked

1. **Typecheck** — `tsc --noEmit --strict` must pass (no type errors).
2. **Run** — the exercise runs with `tsx` and its output is shown.

Test-based (`vitest`) and lint-gated (`eslint`) exercises will follow the same
pattern once those topics land. CI enforces the core invariant on every push:
all unsolved exercises fail the typechecker, all solutions pass
(`npm run check:exercises`).
