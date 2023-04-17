import { FC, HTMLAttributes } from "react";

import { ThemeToggler } from "features";

import { classNames } from "shared/lib";
import { Container } from "shared/ui";

import classes from "./header.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Header: FC = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={classNames(classes.header, {}, [className])} {...props}>
      <Container>
        <ThemeToggler />
      </Container>
    </header>
  );
};
