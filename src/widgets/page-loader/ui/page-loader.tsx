import { FC } from "react";
import classes from "./page-loader.module.scss";
import { Spinner } from "shared/ui/spinner";
import { Size } from "shared/constants/size";

export const PageLoader: FC = () => {
  return (
    <div className={classes.PageLoader}>
      <Spinner size={Size.LARGE} />
    </div>
  );
};
