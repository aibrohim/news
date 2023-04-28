import type { Meta, StoryObj } from "@storybook/react";

import { LanguageToggler } from "./language-toggler";
import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";
import { Theme } from "shared/config/theme";

const meta = {
  title: "Features/Language Toggler",
  component: LanguageToggler,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LanguageToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [withThemeDecorator(Theme.DARK)],
};
