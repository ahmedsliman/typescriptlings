export const CURRENT_FORMAT_VERSION = 1;
export const STATE_FILE = ".typescriptlings-state.txt";
export const STATE_HEADER = "DON'T EDIT THIS FILE!";

export interface ExerciseInfo {
  name: string;
  dir?: string;
  /** Run tests on the exercise. Default true. Maps to vitest. */
  test?: boolean;
  /** Deny all lint warnings. Default false. Maps to eslint --max-warnings=0. */
  strictLint?: boolean;
  inputFiles?: string[];
  hint: string;
  skipCheckUnsolved?: boolean;
}

export interface InfoFile {
  formatVersion: number;
  welcomeMessage?: string;
  finalMessage?: string;
  exercises: ExerciseInfo[];
}

/** Mirrors rustlings ExerciseInfo::path(): exercises/[dir/]name.ts */
export function exercisePath(info: Pick<ExerciseInfo, "name" | "dir">): string {
  return info.dir
    ? `exercises/${info.dir}/${info.name}.ts`
    : `exercises/${info.name}.ts`;
}

/** Mirrors solutions tree: solutions/[dir/]name.ts */
export function solutionPath(info: Pick<ExerciseInfo, "name" | "dir">): string {
  return info.dir
    ? `solutions/${info.dir}/${info.name}.ts`
    : `solutions/${info.name}.ts`;
}
