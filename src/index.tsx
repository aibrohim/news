import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/theme";

import { App } from "app/app";

import "shared/config/i18n";

const container = document.getElementById("root");

if (container) {
  const root: ReactDOMClient.Root = ReactDOMClient.createRoot(container);
  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}
