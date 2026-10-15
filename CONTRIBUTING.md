# Contributing to TypeScriptlings

Thanks for taking the time to contribute!

TypeScriptlings is initiated by [Rustlings](https://github.com/rust-lang/rustlings)
(v6.5.0) — a port of its CLI, exercise format, and workflow to TypeScript.
Upstream conventions (exercise format, `dev check` rules) apply here unless
stated otherwise.

## Quick reference

- _report a bug!_ → open an issue (include `node --version`, `npm --version`, OS, repro steps)
- _fix a bug!_ → open a pull request
- _implement a new feature!_ → open an issue to discuss it first, then a pull request
- _add an exercise!_ → read [Adding an exercise](#adding-an-exercise)
- _update an outdated exercise!_ → open a pull request (update the solution too)

Unless a PR is small and trivial, please open an issue to discuss the idea first.
It may take time to review — thanks for your patience.

## Roadmap

### Phase 1 — core runner (blocks everything)

1. `src/infoFile.ts` (TOML parse + validation of `exercises/info.toml`)
2. `src/exercise.ts` (`tsc --noEmit` + `vitest run` + `tsx` run, 30s timeout)
3. `src/appState.ts` (progress tracking in `.typescriptlings-state.txt`)
4. Commands: `run [name]`, `hint [name?]`, `reset <name>`, `check-all`
5. `tests/` fixture mirror (`compile_success/failure`, `test_success/failure`) + vitest integration
6. `dev check` validator before bulk porting:
   - `main()` + `// TODO` present
   - `test` flag ↔ `describe|it|test(` consistency
   - unsolved exercise must FAIL, solution must PASS + `prettier --check`
   - naming `^[A-Za-z0-9_]+$`, ≤32 chars, unique; no stray files

### Phase 2 — loop UX

7. `watch.ts` (chokidar + same `n/r/h/l/x/q` keymap as rustlings)
8. `list.ts` (plain table first, fullscreen TUI later)
9. `init.ts` + `editor.ts` (VS Code → `--edit-cmd` → none)
10. CI: `eslint --max-warnings=0`, `prettier --check`, `vitest` (ubuntu/windows/macos), `dev check`

### Phase 3 — exercises

11. Port `00_intro`, `01_variables` first as template, then topic-by-topic
12. Open TS topic mapping still to confirm: `lifetimes` / `move-semantics` /
    `smart-pointers` / `threads` / `macros` need TS analogues
    (scope/GC/workers/decorators) or should be dropped

## Adding an exercise

- Name the file `exercises/<topic>/<name>.ts` (`name` ≤32 chars, `[A-Za-z0-9_]` only, unique).
- Put a `// TODO: …` comment where user changes are required.
- Must contain a `main()` entry (even empty, avoids editor/LSP noise).
- `test = true` (default) ↔ file contains `describe|it|test(` (vitest);
  `test = false` ↔ no test block.
- Add a solution at `solutions/<topic>/<name>.ts` with comments explaining it.
- Exercise must FAIL as shipped (unless `skip_check_unsolved = true`, only `intro1`-style);
  solution must PASS `tsc + vitest + prettier --check`.
- Add metadata in `exercises/info.toml`:

```toml
[[exercises]]
name = "yourTopicN"
dir = "yourTopic"
hint = """
A useful (multi-line) hint for your exercise.
Include links to TypeScript docs."""
# test = false # only if no vitest block; default true
# strictLint = true # only to deny all eslint warnings; default false
```

- Add helpful links in `exercises/<topic>/README.md`.
- Open a pull request.

## Exercise metadata reference

| Field                 | Required | Default | Notes                           |
| --------------------- | -------- | ------- | ------------------------------- |
| `name`                | yes      | —       | file `name.ts`, unique          |
| `dir`                 | no       | —       | subdir of `exercises/`          |
| `test`                | no       | `true`  | `false` = compile/run only      |
| `strictLint` | no | `false` | deny all eslint warnings |
| `input_files`         | no       | `[]`    | data files read by the exercise |
| `hint`                | yes      | —       | non-empty                       |
| `skip_check_unsolved` | no       | `false` | only already-passing intros     |
