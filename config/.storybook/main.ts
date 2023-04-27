import path from "path";

import type { StorybookConfig } from "@storybook/react-webpack5";

import { BuildPaths } from "../build/types/options";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    const paths: BuildPaths = {
      build: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push("ts", "tsx");

    config.module?.rules?.push(buildCssLoader(true));

    return config;
  },
};
export default config;
