import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

type key = "theme";
export const LOCAL_STORAGE_THEME_KEY: key = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});
