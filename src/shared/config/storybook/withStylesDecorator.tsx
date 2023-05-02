import { StoryFn } from "@storybook/react";

import "app/assets/styles/main.scss"

export const withStylesDecorator = (Story: StoryFn) => {
  return <Story />
};
