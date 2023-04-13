import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

import "./assets/styles/main.scss";

const container = document.getElementById("root");

if (container) {
  const root: ReactDOMClient.Root = ReactDOMClient.createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
