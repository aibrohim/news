import { useRoutes } from "react-router-dom";

import { ReactElement } from "react";

import {
  AUTH_ROUTES,
  CATEGORIES_ROUTES,
  NEWS_ROUTES,
  NOT_FOUND_ROUTE,
  USER_ROUTES,
} from "./routes";

export const enum AppModules {
  NEWS = "news",
  CATEGORIES = "categories",
  AUTH = "auth",
  USER = "user",
}

console.log([
  NEWS_ROUTES,
  CATEGORIES_ROUTES,
  USER_ROUTES,
  AUTH_ROUTES,
  NOT_FOUND_ROUTE,
]);

export const configureRoutes = (): ReactElement | null =>
  useRoutes([
    NEWS_ROUTES,
    CATEGORIES_ROUTES,
    USER_ROUTES,
    AUTH_ROUTES,
    NOT_FOUND_ROUTE,
  ]);
