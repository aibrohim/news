import { FC, HTMLAttributes } from "react";

import { Button } from "shared/ui/button";

import classes from "./language-toggler.module.scss";
import { useTranslation } from "react-i18next";

export enum Language {
  "EN" = "en",
  "UZ" = "uz",
}

const nextLanguages = {
  [Language.EN]: Language.UZ,
  [Language.UZ]: Language.EN,
};

interface LanguageTogglerProps extends HTMLAttributes<HTMLElement> {}

export const LanguageToggler: FC = ({ ...props }: LanguageTogglerProps) => {
  const { i18n } = useTranslation();

  const handleTogglerClick = () => {
    i18n.changeLanguage(nextLanguages[i18n.language as Language]);
  };

  return (
    <Button
      className={classes.LanguageToggler}
      onClick={handleTogglerClick}
      {...props}
    >
      {nextLanguages[i18n.language as Language]}
    </Button>
  );
};
