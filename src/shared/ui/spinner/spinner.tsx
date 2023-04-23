import { FC, ReactNode } from "react";

import { classNames } from "shared/lib/classNames";
import { Size } from "shared/constants/size";

import classes from "./spinner.module.scss";

export enum Direction {
  COLUMN = "Column",
  ROW = "Row",
}

interface SpinnerProps {
  size?: Size;
  className?: string;
  direction?: Direction;
  tip?: string;
}

export const Spinner: FC<SpinnerProps> = ({
  size = Size.MEDIUM,
  direction = Direction.COLUMN,
  className,
  tip = "",
}) => {
  return (
    <div className={classNames(classes.Wrapper, {}, [classes[direction]])}>
      <div
        className={classNames(classes.Spinner, {}, [classes[size], className])}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={classNames(classes.Text, {}, [classes[size]])}>{tip}</p>
    </div>
  );
};
