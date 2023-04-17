import { FC, Suspense } from "react";

import { Routes } from "./routes";

import { Header } from "widgets";
import { useTheme } from "shared/config";

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
