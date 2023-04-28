import type { Meta, StoryObj } from "@storybook/react";

import { ThemeToggler } from "./theme-toggler";
import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";
import { Theme } from "shared/config/theme";

const meta = {
  title: "Features/Theme Toggler",
  component: ThemeToggler,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ThemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [withThemeDecorator(Theme.DARK)],
};
