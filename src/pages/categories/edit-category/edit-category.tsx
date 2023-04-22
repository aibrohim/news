// template-folder-name -> [page].js
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const EditCategory: FC = () => {
  const { t } = useTranslation("categories");

  return (
    <Container>
      <h1>{t("edit.title")}</h1>
    </Container>
  );
};

export default EditCategory;
