import { FC } from "react";

import { configureRoutes } from "../lib";
import { useRoutes } from "react-router-dom";

export const Routes: FC = () => {
  const routes = useRoutes(configureRoutes())

  return routes;
};
