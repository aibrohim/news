import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const EditProfile: FC = () => {
  const { t } = useTranslation("profile");

  return (
    <Container>
      <h1>{t("edit.title")}</h1>
    </Container>
  );
};

export default EditProfile;
