import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Size } from "shared/constants/size";
import { Container } from "shared/ui/container";
import { Direction, Spinner } from "shared/ui/spinner";

const News: FC = () => {
  const { t } = useTranslation("news");

  return (
    <Container>
      <h1>{t("list.title")}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spinner size={Size.LARGE} direction={Direction.ROW} tip="Hello" />
        <Spinner size={Size.MEDIUM} tip="Mello" />
        <Spinner size={Size.SMALL} tip="Shmello" />
      </div>
    </Container>
  );
};

export default News;
