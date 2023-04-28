import type { Meta, StoryObj } from "@storybook/react";

import { withRouterDecorator } from "shared/config/storybook/withRouterDecorator";
import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";

import { Theme } from "shared/config/theme";
import { Header } from "./header";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Widgets/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/"
  },
  decorators: [withRouterDecorator]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [withThemeDecorator(Theme.DARK)]
};