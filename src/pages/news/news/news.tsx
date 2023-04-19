import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const News: FC = () => {
  const { t } = useTranslation("main");

  return (
    <Container>
      <h1>{t("title")}</h1>
    </Container>
  );
};

export default News;
