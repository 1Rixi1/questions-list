import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app";
import { Provider } from "react-redux";
import { store } from "@/app/store/store.ts";

import "./app/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
