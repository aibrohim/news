import { useRoutes } from "react-router-dom";

import {
  AddNews,
  EditNews,
  News,
  SingleNews,
  Categories,
  SingleCategory,
  EditCategory,
  AddCategory,
  Profile,
  EditProfile,
  Login,
  SignUp,
} from "pages";
import { ReactElement } from "react";

export const configureRoutes = (): ReactElement | null =>
  useRoutes([
    { path: "/", element: <News /> },
    {
      path: "/news",
      children: [
        { path: "", element: <News /> },
        {
          path: ":id",
          children: [
            { path: "", element: <SingleNews /> },
            { path: "edit", element: <EditNews /> },
          ],
        },
        { path: "add", element: <AddNews /> },
      ],
    },
    {
      path: "/categories",
      children: [
        { path: "", element: <Categories /> },
        {
          path: ":id",
          children: [
            { path: "", element: <SingleCategory /> },
            { path: "edit", element: <EditCategory /> },
          ],
        },
        { path: "add", element: <AddCategory /> },
      ],
    },
    {
      path: "/profile",
      children: [
        { path: "", element: <Profile /> },
        { path: "edit", element: <EditProfile /> },
      ],
    },
    {
      path: "/auth",
      children: [
        { path: "login", element: <Login /> },
        { path: "sign-up", element: <SignUp /> },
      ],
    },
    {
      path: "*",
      element: "Not found",
    },
  ]);
