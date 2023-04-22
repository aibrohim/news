import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/container";

const SignUp: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <Container>
      <h1>{t("sign-up.title")}</h1>
    </Container>
  );
};

export default SignUp;
