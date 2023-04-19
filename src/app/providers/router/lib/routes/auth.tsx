import { RouteObject } from "react-router-dom";

import { AppModules } from "../configure-router";

import { Login, SignUp } from "pages/auth";

export const AUTH_ROUTES: RouteObject = {
  path: AppModules.AUTH,
  children: [
    { path: "login", element: <Login /> },
    { path: "sign-up", element: <SignUp /> },
  ],
};
