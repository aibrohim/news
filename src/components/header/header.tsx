import { Container } from "../container";
import { FC, HTMLAttributes } from "react";
import classes from "./header.module.scss";
import { classNames } from "../../lib/classNames";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Header: FC = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={classNames(classes.header, {}, [className])} {...props}>
      <Container>fdsa</Container>
    </header>
  );
};
