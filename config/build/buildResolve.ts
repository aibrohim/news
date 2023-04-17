import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/options";

export function buildResolve(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
