import { ButtonHTMLAttributes, FC, ReactElement } from "react";

import { classNames } from "shared/lib/classNames";
import { Size } from "shared/constants/size";

import classes from "./button.module.scss";

export enum BtnTheme {
  CLEAR = "Clear",
  PRIMARY = "Primary",
  DEFAULT = "Default",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  theme?: BtnTheme;
  className?: string;
  icon?: ReactElement;
  size?: Size;
}

export const Button: FC<ButtonProps> = ({
  theme = BtnTheme.CLEAR,
  className,
  icon = null,
  size = Size.MEDIUM,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(classes.Button, {}, [
        classes[theme],
        classes[size],
        className,
      ])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <span className={classes.BtnWrapper}>
        {icon && <span className={classes.IconWrapper}>{icon}</span>}
        {children && <span className={classes.BtnContent}>{children}</span>}
      </span>
    </button>
  );
};
