/* eslint-disable react/display-name */
import { Decorator, StoryFn } from "@storybook/react";
import { Theme } from "../theme";

export const withThemeDecorator =
  (theme: Theme): Decorator =>
    (Story: StoryFn) => {
      return (
        <div className={`App ${theme}`}>
          <div className="Page">

            <Story />
          </div>
        </div>
      );
    };
