import { FC, Suspense } from "react";

import { Header } from "widgets/header";
import { useTheme } from "shared/config/theme";

import { Routes } from "./providers/router";

import "./assets/styles/main.scss";
import { PageLoader } from "widgets/page-loader";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Suspense fallback={<PageLoader />}>
        <Header />
        <div className={"Page"}>
          <Routes />
        </div>
      </Suspense>
    </div>
  );
};
