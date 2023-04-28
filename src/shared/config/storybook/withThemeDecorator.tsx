/* eslint-disable react/display-name */
import { Decorator, StoryFn } from "@storybook/react";
import { Theme } from "../theme";
import { ThemeProvider } from "app/providers/theme";

export const withThemeDecorator =
  (theme: Theme): Decorator =>
    (Story: StoryFn) => {
      return (
        <ThemeProvider externalDefaultTheme={theme}>
          <div className={`App ${theme}`}>
            <div className="Page">

              <Story />
            </div>
          </div>
        </ThemeProvider>
      );
    };
