import { FC } from "react";

import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import classes from "./app-link.module.scss";

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
