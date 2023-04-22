// template-folder-name -> [page].js
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const Categories: FC = () => {
  const { t } = useTranslation("categories");

  return (
    <Container>
      <h1>{t("list.title")}</h1>
    </Container>
  );
};

export default Categories;
