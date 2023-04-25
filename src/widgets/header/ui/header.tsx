import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { LanguageToggler } from "features/language-toggler";
import { ThemeToggler } from "features/theme-toggler";

import { AppLink } from "shared/ui/app-link";
import { BtnTheme, Button } from "shared/ui/button";
import { Container } from "shared/ui/container";

import { Theme, useTheme } from "shared/config/theme";
import { classNames } from "shared/lib/classNames";

import Login from "shared/assets/icons/login.svg";
import DarkLogo from "shared/assets/img/logo-dark.svg";
import LightLogo from "shared/assets/img/logo-light.svg";

import { navLinks } from "../constants";

import classes from "./header.module.scss";

const ThemeLogos = {
  [Theme.LIGHT]: <DarkLogo />,
  [Theme.DARK]: <LightLogo />,
};

interface HeaderProps {
  className?: string;
}

export const Header: FC = ({ className }: HeaderProps) => {
  const { t } = useTranslation();

  const { theme } = useTheme();

  return (
    <header
      className={classNames(classes.Header, {}, [className])}
      data-testid="header"
    >
      <Container className={classes.Container}>
        <AppLink to="/" className={classes.LogoLink}>
          {ThemeLogos[theme]}
        </AppLink>
        <nav className={classes.Nav}>
          <ul className={classes.NavList}>
            {navLinks.map((item) => (
              <li key={item.to}>
                <AppLink className={classes.NavLink} to={item.to}>
                  {item.text}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageToggler />
        <ThemeToggler />

        <Button
          icon={<Login stroke="currentColor" width={22} height={22} />}
          theme={BtnTheme.PRIMARY}
        >
          {t("login-btn")}
        </Button>
      </Container>
    </header>
  );
};
