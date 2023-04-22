import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const Login: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <Container>
      <h1>{t("login.title")}</h1>
    </Container>
  );
};

export default Login;
