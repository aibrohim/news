import { FC } from "react";

import { Link, LinkProps } from "react-router-dom";

import classes from "./app-link.module.scss";
import { classNames } from "shared/lib";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className, ...props }) => {
  return (
    <Link
      className={classNames(classes["app-link"], {}, [className])}
      {...props}
    ></Link>
  );
};
