import { FC } from "react";

import { Theme, useTheme } from "shared/config";

import Moon from "shared/assets/icons/moon.svg";
import Sun from "shared/assets/icons/sun.svg";

import classes from "./theme-toggler.module.scss";

const ThemeIcons = {
  [Theme.LIGHT]: <Moon />,
  [Theme.DARK]: <Sun />,
};

export const ThemeToggler: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleTogglerClick = () => toggleTheme();

  return (
    <button className={classes.ThemeToggler} onClick={handleTogglerClick}>
      <span className="visually-hidden">Toggle Theme</span>
      {ThemeIcons[theme]}
    </button>
  );
};
