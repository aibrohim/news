import { FC, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "shared/config/";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
