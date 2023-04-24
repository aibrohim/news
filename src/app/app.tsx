import { FC, Suspense } from "react";

import { Routes } from "./providers/router";
import { ErrorBoundary } from "./providers/error-boundary";

import { Header } from "widgets/header";
import { PageLoader } from "widgets/page-loader";

import { useTheme } from "shared/config/theme";

import "./assets/styles/main.scss";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Suspense fallback={<PageLoader />}>
        <ErrorBoundary>
          <Header />
          <div className={"Page"}>
            <Routes />
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
