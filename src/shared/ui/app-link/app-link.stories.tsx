import type { Meta, StoryObj } from "@storybook/react";

import { withRouterDecorator } from "shared/config/storybook/withRouterDecorator";

import { AppLink } from "./app-link";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Shared/App Link",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/"
  },
  decorators: [withRouterDecorator]
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button",
  },
};