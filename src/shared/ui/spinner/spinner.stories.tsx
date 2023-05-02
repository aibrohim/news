import type { Meta, StoryObj } from "@storybook/react";

import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";

import { Theme } from "shared/config/theme";

import { Direction, Spinner } from "./spinner";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Shared/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
    
  },
};

export const LightWithText: Story = {
  args: {
    tip: "Loading..."
  },
};

export const Dark: Story = {
  args: {
    
  },
  decorators: [withThemeDecorator(Theme.DARK)]
};

export const DarkWithTextInRow: Story = {
  args: {
    tip: "Loading...",
    direction: Direction.ROW
  },
  decorators: [withThemeDecorator(Theme.DARK)]
};