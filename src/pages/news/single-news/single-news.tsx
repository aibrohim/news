import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const SingleNews: FC = () => {
  const { t } = useTranslation("news");

  return (
    <Container>
      <h1>{t("single.title")}</h1>
    </Container>
  );
};

export default SingleNews;
