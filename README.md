# TypeScriptlings

> Initiated by [Rustlings](https://github.com/rust-lang/rustlings) (v6.5.0) —
> a TypeScript port of its CLI, exercise format, and workflow.

Small exercises to get you used to reading and writing TypeScript code.

## Status

Scaffold stage — see `CONTRIBUTING.md` for the roadmap and exercise format.

## Quick start

Prerequisite: Node.js >= 20.

```bash
git clone https://github.com/ahmedsliman/typescriptlings.git
cd typescriptlings
npm install
```

Work on an exercise manually (CLI runner in progress, see `CONTRIBUTING.md`):

```bash
npx tsc --noEmit --strict exercises/01_variables/variables1.ts  # check
npx tsx exercises/01_variables/variables1.ts                    # run
```

Each exercise file contains a `// TODO:` comment. Fix the error until the
typechecker passes, then compare with `solutions/` if you get stuck.

## Layout (mirrors rustlings/)

```
src/            CLI + runner (commander, chokidar, execa)
exercises/      <topic>/<name>.ts + README.md + info.toml
solutions/      mirror of exercises/
tests/          vitest integration tests
```

## How exercises are checked

Each exercise is verified in three steps:

1. **Typecheck** — `tsc --noEmit` must pass (no type errors).
2. **Tests** — `vitest run <exercise>` must pass (for exercises with tests).
3. **Lint** — `eslint --max-warnings=0` must pass (for `strictLint` exercises).

The exercise is then run with `tsx <exercise>` and its output is shown.
Progress is tracked in `.typescriptlings-state.txt` in the project root.
