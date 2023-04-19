import { RouteObject } from "react-router-dom";
import { AppModules } from "../configure-router";
import { AddNews, EditNews, News, SingleNews } from "pages/news";

export const NEWS_ROUTES: RouteObject = {
  path: "",
  children: [
    {
      path: "",
      element: <News />,
    },
    {
      path: AppModules.NEWS,
      children: [
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
  ],
};
