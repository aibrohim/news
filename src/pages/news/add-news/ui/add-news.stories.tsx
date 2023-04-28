import type { Meta, StoryObj } from "@storybook/react";

import { withThemeDecorator } from "shared/config/storybook/withThemeDecorator";
import { Theme } from "shared/config/theme";

import AddNews from "./add-news";

const meta = {
  title: "Pages/News/Add News",
  component: AddNews,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AddNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [withThemeDecorator(Theme.DARK)],
};
