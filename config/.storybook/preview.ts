import type { Preview } from "@storybook/react";

import { Theme } from "../../src/shared/config/theme";

import { withThemeDecorator } from "../../src/shared/config/storybook/withThemeDecorator";
import { withStylesDecorator } from "../../src/shared/config/storybook/withStylesDecorator";
import { withTranslationDecorator } from "../../src/shared/config/storybook/withTranslationDecorator";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "uz", title: "Uzbek" },
      ],
      showName: true,
    },
  },
};

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
  decorators: [
    withStylesDecorator,
    withThemeDecorator(Theme.LIGHT),
    withTranslationDecorator,
  ],
};

export default preview;
