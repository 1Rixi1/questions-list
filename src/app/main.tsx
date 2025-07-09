import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/index";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

import "./styles/global.css";
import "./styles/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
