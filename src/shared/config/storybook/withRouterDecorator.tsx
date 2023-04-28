import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const withRouterDecorator = (Story: StoryFn) => {
  return <BrowserRouter><Story /></BrowserRouter>
};
