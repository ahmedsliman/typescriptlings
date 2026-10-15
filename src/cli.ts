import { Command } from "commander";

export function buildProgram(): Command {
  const program = new Command();
  program
    .name("typescriptlings")
    .description(
      "Small exercises to get you used to reading and writing TypeScript code!",
    )
    .option("--no-editor", "Don't auto-open the current exercise in an editor")
    .option("--edit-cmd <cmd>", "Custom editor command (path appended)")
    .option("--manual-run", "Disable file watcher, press `r` to run manually");

  program
    .command("init")
    .description("Initialize exercises in the current directory")
    .action(() => {
      throw new Error("init: not implemented yet (see ANALYSIS.md §10)");
    });

  program
    .command("run")
    .argument("[name]", "Exercise name")
    .description("Run a single exercise")
    .action(() => {
      throw new Error("run: not implemented yet (see ANALYSIS.md §10)");
    });

  program
    .command("check-all")
    .description("Check all exercises")
    .action(() => {
      throw new Error("check-all: not implemented yet (see ANALYSIS.md §10)");
    });

  program
    .command("reset")
    .argument("<name>", "Exercise name")
    .description("Reset an exercise to its original state")
    .action(() => {
      throw new Error("reset: not implemented yet (see ANALYSIS.md §10)");
    });

  program
    .command("hint")
    .argument("[name]", "Exercise name")
    .description("Show the hint for an exercise")
    .action(() => {
      throw new Error("hint: not implemented yet (see ANALYSIS.md §10)");
    });

  program
    .command("dev")
    .description("Developer tooling (new/check/update)")
    .action(() => {
      throw new Error("dev: not implemented yet (see ANALYSIS.md §10)");
    });

  return program;
}
