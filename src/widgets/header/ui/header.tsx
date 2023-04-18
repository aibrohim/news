import { FC, HTMLAttributes } from "react";

import { ThemeToggler } from "features";

import { classNames } from "shared/lib";
import { AppLink, Container } from "shared/ui";
import { Theme, useTheme } from "shared/config";

import DarkLogo from "shared/assets/img/logo-dark.svg";
import LightLogo from "shared/assets/img/logo-light.svg";

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
        <ThemeToggler />
      </Container>
    </header>
  );
};
