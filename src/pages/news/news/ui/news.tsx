import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Size } from "shared/constants/size";
import { BtnTheme, Button } from "shared/ui/button";
import { Container } from "shared/ui/container";
import { Direction, Spinner } from "shared/ui/spinner";

const News: FC = () => {
  const { t } = useTranslation("news");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw Error("error!");
    }
  }, [error]);

  return (
    <Container>
      <h1>{t("list.title")}</h1>
      <button onClick={() => setError(true)}>{"Error"}</button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spinner size={Size.LARGE} direction={Direction.ROW} tip="Hello" />
        <Spinner size={Size.MEDIUM} tip="Mello" />
        <Spinner size={Size.SMALL} tip="Shmello" />
      </div>

      <Button theme={BtnTheme.PRIMARY}>{"Button Primary"}</Button>
      <Button theme={BtnTheme.PRIMARY} outline>
        {"Button Primary Outlined"}
      </Button>
      <Button theme={BtnTheme.DEFAULT}>{"Button Default"}</Button>
      <Button theme={BtnTheme.DEFAULT} outline>
        {"Button Default Outlined"}
      </Button>
    </Container>
  );
};

export default News;
