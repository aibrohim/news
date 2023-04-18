import { FC, HTMLAttributes } from "react";

import { ThemeToggler } from "features";

import { classNames } from "shared/lib";
import { AppLink, Container } from "shared/ui";

import { navLinks } from "../constants";

import classes from "./header.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Header: FC = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={classNames(classes.Header, {}, [className])} {...props}>
      <Container className={classes.Container}>
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
