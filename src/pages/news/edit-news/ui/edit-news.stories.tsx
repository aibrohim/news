import type { Meta, StoryObj } from "@storybook/react";

import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";
import { Theme } from "shared/config/theme";

import EditNews from "./edit-news";

const meta = {
  title: "Pages/News/Edit News",
  component: EditNews,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof EditNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [withThemeDecorator(Theme.DARK)],
};
