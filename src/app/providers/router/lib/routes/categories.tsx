import { RouteObject } from "react-router-dom";

import { AppModules } from "../configure-router";

import {
  AddCategory,
  Categories,
  EditCategory,
  SingleCategory,
} from "pages/categories";

export const CATEGORIES_ROUTES: RouteObject = {
  path: AppModules.CATEGORIES,
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
};
