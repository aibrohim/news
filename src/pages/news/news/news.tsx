import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const News: FC = () => {
  const { t } = useTranslation("news");

  return (
    <Container>
      <h1>{t("list.title")}</h1>
    </Container>
  );
};

export default News;
