import type { Meta, StoryObj } from "@storybook/react";

import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";
import { Theme } from "shared/config/theme";

import News from "./news";

const meta = {
  title: "Pages/News/News",
  component: News,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof News>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [withThemeDecorator(Theme.DARK)],
};
