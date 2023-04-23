import { FC } from "react";
import classes from "./spinner.module.scss";
import { classNames } from "shared/lib/classNames";
import { Size } from "shared/constants/size";

interface SpinnerProps {
  size?: Size;
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({
  size = Size.MEDIUM,
  className,
}) => {
  return (
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
      {/* <div></div> */}
    </div>
  );
};
