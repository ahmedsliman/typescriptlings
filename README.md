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

## Execution model (vs `cargo build/test/clippy`)

| Rustlings                  | TypeScriptlings (planned)                  |
| -------------------------- | ------------------------------------------ |
| `cargo build --bin`        | `tsc --noEmit` (typecheck exercise)        |
| `cargo test --bin`         | `vitest run <file>` (or `node --test`)     |
| `cargo clippy -D warnings` | `eslint --max-warnings=0`                  |
| run `target/debug/<bin>`   | run `tsx <file>`                           |
| `.rustlings-state.txt`     | `.typescriptlings-state.txt` (same format) |
