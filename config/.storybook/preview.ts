import type { Preview } from "@storybook/react";

import { Theme } from "../../src/shared/config/theme";

import { withThemeDecorator } from "../../src/shared/config/storybook/withThemeDecorator";
import { withStylesDecorator } from "../../src/shared/config/storybook/withStylesDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withStylesDecorator, withThemeDecorator(Theme.LIGHT)],
};

export default preview;
