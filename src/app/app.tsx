import { FC, Suspense } from "react";

import { Header } from "widgets/header";
import { useTheme } from "shared/config/theme";

import { Routes } from "./providers/router";

import "./assets/styles/main.scss";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Suspense fallback="Loading...">
        <Header />
        <Suspense fallback="Loading...">
          <Routes />
        </Suspense>
      </Suspense>
    </div>
  );
};
