import type { Meta, StoryObj } from "@storybook/react";

import { PageError } from "./page-error";

const meta = {
  title: "Widgets/Page Error",
  component: PageError,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
