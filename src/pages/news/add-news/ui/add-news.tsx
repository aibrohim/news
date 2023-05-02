import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const AddNews: FC = () => {
  const { t } = useTranslation("news");

  return (
    <Container>
      <h1>{t("add.title")}</h1>
    </Container>
  );
};

export default AddNews;
