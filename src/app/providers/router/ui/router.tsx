import { FC, Suspense } from "react";

import { configureRoutes } from "../lib";
import { useRoutes } from "react-router-dom";
import { PageLoader } from "widgets/page-loader";

export const Routes: FC = () => {
  const routes = useRoutes(configureRoutes());

  return <Suspense fallback={<PageLoader />}>{routes}</Suspense>;
};
