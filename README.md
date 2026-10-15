# TypeScriptlings

> Initiated by [Rustlings](https://github.com/rust-lang/rustlings) (v6.5.0) —
> a TypeScript port of its CLI, exercise format, and workflow.

Small exercises to get you used to reading and writing TypeScript code.

## Status

Scaffold stage — see `CONTRIBUTING.md` for the roadmap and exercise format.

## Quick start (planned)

```bash
npm install
npm run dev -- init      # scaffold ./exercises + info.toml (mirrors `rustlings init`)
npm run dev -- run       # run current exercise
npm run dev -- check-all # check all exercises
npm run dev -- hint      # show hint
npm run dev -- reset <name>
npm run dev              # watch mode (default)
```

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
