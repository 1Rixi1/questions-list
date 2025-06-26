import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/app-router.tsx";

export const App = () => {
  return (
    <div>
      App
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
