import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/app-router.tsx";
import { Header } from "@/widgets/header";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
