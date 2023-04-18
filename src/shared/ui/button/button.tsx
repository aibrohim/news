import { ButtonHTMLAttributes, FC } from "react";
import classes from "./button.module.scss";
import { classNames } from "shared/lib";

export enum BtnTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  theme?: BtnTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  theme = BtnTheme.CLEAR,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(classes.Button, {}, [classes[theme], className])}
      {...props}
    ></button>
  );
};
