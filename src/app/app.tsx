import { FC, Suspense } from "react";

import { Routes } from "./providers/router";

import { Header } from "widgets/header";
import { useTheme } from "shared/config/theme";

import "./assets/styles/main.scss";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={"app " + theme}>
      <Header />
      <Suspense fallback="Loading...">
        <Routes />
      </Suspense>
    </div>
  );
};
