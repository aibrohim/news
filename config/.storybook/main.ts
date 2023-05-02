import path from "path";

import type { StorybookConfig } from "@storybook/react-webpack5";

import { BuildPaths } from "../build/types/options";

import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

import webpack from "webpack";

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
  staticDirs: ["../../public/"],
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

    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule: any) => {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      });
    }
    config.module?.rules?.push(buildSvgLoader());

    config.plugins?.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(false),
      })
    );

    return config;
  },
};
export default config;
