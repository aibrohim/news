import { FC } from "react";

import { useTranslation } from "react-i18next";

import classes from "./page-error.module.scss";
import { BtnTheme, Button } from "shared/ui/button";

export const PageError: FC = () => {
  const { t } = useTranslation();

  const handleRefreshClick = () => window.location.reload();

  return (
    <div className={classes.PageError}>
      <p className={classes.Title}>{t("error.title")}</p>
      <Button
        onClick={handleRefreshClick}
        theme={BtnTheme.DEFAULT}
        className={classes.Refresh}
      >
        {t("error.refresh")}
      </Button>
    </div>
  );
};
