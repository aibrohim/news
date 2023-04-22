import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import { classNames } from "shared/lib/classNames";
import classes from "./button.module.scss";

export enum BtnTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  theme?: BtnTheme;
  className?: string;
  icon?: ReactElement;
}

export const Button: FC<ButtonProps> = ({
  theme = BtnTheme.CLEAR,
  className,
  icon = null,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(classes.Button, {}, [classes[theme], className])}
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
