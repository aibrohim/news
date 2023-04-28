import { FC } from "react";

import { Button } from "shared/ui/button";

import { useTranslation } from "react-i18next";
import classes from "./language-toggler.module.scss";

export enum Language {
  "EN" = "en",
  "UZ" = "uz",
}

const nextLanguages = {
  [Language.EN]: Language.UZ,
  [Language.UZ]: Language.EN,
};


export const LanguageToggler: FC = () => {
  const { i18n } = useTranslation();

  const handleTogglerClick = () => {
    i18n.changeLanguage(nextLanguages[i18n.language as Language]);
  };

  return (
    <Button
      className={classes.LanguageToggler}
      onClick={handleTogglerClick}
    >
      {nextLanguages[i18n.language as Language]}
    </Button>
  );
};
