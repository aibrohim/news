import { RouteObject } from "react-router-dom";

import { AppModules } from "../configure-router";

import { EditProfile, Profile } from "pages/profile";

export const USER_ROUTES: RouteObject = {
  path: AppModules.USER,
  children: [
    { path: "", element: <Profile /> },
    { path: "edit", element: <EditProfile /> },
  ],
};
