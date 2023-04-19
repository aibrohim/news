import { FC } from "react";

import { configureRoutes } from "../lib";

export const Routes: FC = () => {
  const routes = configureRoutes();

  return routes;
};
