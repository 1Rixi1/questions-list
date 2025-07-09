import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/AppRouter";
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
