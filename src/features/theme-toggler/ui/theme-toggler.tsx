import { FC } from "react";

import { Button } from "shared/ui/button";
import { Theme, useTheme } from "shared/config/theme";

import Moon from "shared/assets/icons/moon.svg";
import Sun from "shared/assets/icons/sun.svg";

import classes from "./theme-toggler.module.scss";
import { useTranslation } from "react-i18next";

const ThemeIcons = {
  [Theme.LIGHT]: <Moon aria-hidden="true" />,
  [Theme.DARK]: <Sun aria-hidden="true" />,
};

export const ThemeToggler: FC = () => {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useTheme();

  const handleTogglerClick = () => toggleTheme();

  return (
    <Button
      icon={ThemeIcons[theme]}
      className={classes.ThemeToggler}
      onClick={handleTogglerClick}
      aria-label={t("toggle-theme")}
      data-testid="theme-toggler"
    />
  );
};
