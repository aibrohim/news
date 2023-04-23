import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Size } from "shared/constants/size";
import { Container } from "shared/ui/container";
import { Spinner } from "shared/ui/spinner";

const News: FC = () => {
  const { t } = useTranslation("news");

  return (
    <Container>
      <h1>{t("list.title")}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spinner size={Size.LARGE} />
        <Spinner size={Size.MEDIUM} />
        <Spinner size={Size.SMALL} />
      </div>
    </Container>
  );
};

export default News;
