import { classNames } from "../../lib/classNames";
import { HTMLAttributes, ReactNode } from "react";
import classes from "./container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={classNames(classes.container, {}, [className])} {...props}>
      {children}
    </div>
  );
};
