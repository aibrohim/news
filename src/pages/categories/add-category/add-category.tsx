import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const AddCategory: FC = () => {
  const { t } = useTranslation("categories");

  return (
    <Container>
      <h1>{t("add.title")}</h1>
    </Container>
  );
};

export default AddCategory;
