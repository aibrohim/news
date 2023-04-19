import { FC, HTMLAttributes } from "react";

import { LanguageToggler } from "features/language-toggler";
import { ThemeToggler } from "features/theme-toggler";

import { Container } from "shared/ui/container";
import { AppLink } from "shared/ui/app-link";
import { BtnTheme, Button } from "shared/ui/button";

import { classNames } from "shared/lib/classNames";
import { Theme, useTheme } from "shared/config/theme";

import DarkLogo from "shared/assets/img/logo-dark.svg";
import LightLogo from "shared/assets/img/logo-light.svg";
import Login from "shared/assets/icons/login.svg";

import { navLinks } from "../constants";

import classes from "./header.module.scss";

const ThemeLogos = {
  [Theme.LIGHT]: <DarkLogo />,
  [Theme.DARK]: <LightLogo />,
};

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Header: FC = ({ className, ...props }: HeaderProps) => {
  const { theme } = useTheme();

  return (
    <header className={classNames(classes.Header, {}, [className])} {...props}>
      <Container className={classes.Container}>
        <AppLink to="/" className={classes.LogoLink}>
          {ThemeLogos[theme]}
        </AppLink>
        <nav className={classes.Nav}>
          <ul className={classes.NavList}>
            {navLinks.map((item) => (
              <li>
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
          className={classes.Login}
          theme={BtnTheme.PRIMARY}
        >
          Login
        </Button>
      </Container>
    </header>
  );
};
