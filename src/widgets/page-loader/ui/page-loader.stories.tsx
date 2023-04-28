import type { Meta, StoryObj } from "@storybook/react";

import { PageLoader } from "./page-loader";

const meta = {
  title: "Widgets/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
