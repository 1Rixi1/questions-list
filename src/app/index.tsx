import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/app-router.tsx";
import { Header } from "@/widgets/header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
