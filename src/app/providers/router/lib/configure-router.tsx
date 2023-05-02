import { RouteObject } from "react-router-dom";

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

export const configureRoutes = (): RouteObject[] => [
  NEWS_ROUTES,
  CATEGORIES_ROUTES,
  USER_ROUTES,
  AUTH_ROUTES,
  NOT_FOUND_ROUTE,
];
