import { FC, HTMLAttributes } from "react";

import { Button } from "shared/ui/button";

import classes from "./language-toggler.module.scss";

interface LanguageTogglerProps extends HTMLAttributes<HTMLElement> {}

export const LanguageToggler: FC = ({ ...props }: LanguageTogglerProps) => {
  return (
    <Button className={classes.LanguageToggler} {...props}>
      EN
    </Button>
  );
};
