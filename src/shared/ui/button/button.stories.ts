import type { Meta, StoryObj } from "@storybook/react";

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
export const Default: Story = {
  args: {
    theme: BtnTheme.PRIMARY,
    children: "Button",
  },
};
