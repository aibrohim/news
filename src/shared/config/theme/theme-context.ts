import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY: "theme" = "theme";

export const ThemeContext = createContext<ThemeContextProps>({
  theme:
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT,
  setTheme: () => {},
});
