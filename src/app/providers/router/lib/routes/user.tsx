import { RouteObject } from "react-router-dom";

import { AppModules } from "../configure-router";

import { EditProfile, Profile } from "pages";

export const USER_ROUTES: RouteObject = {
  path: AppModules.USER,
  children: [
    { path: "", element: <Profile /> },
    { path: "edit", element: <EditProfile /> },
  ],
};
