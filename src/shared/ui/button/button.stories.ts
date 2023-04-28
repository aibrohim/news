import type { Meta, StoryObj } from "@storybook/react";
import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";
import { Theme } from "shared/config/theme";

import { BtnTheme, Button } from "shared/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
    theme: BtnTheme.DEFAULT,
    children: "Button",
  },
};

export const Dark: Story = {
  args: {
    theme: BtnTheme.DEFAULT,
    children: "Button",
  },
  decorators: [withThemeDecorator(Theme.DARK)],
};
