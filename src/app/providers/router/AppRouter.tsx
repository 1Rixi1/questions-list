import { Route, Routes } from "react-router-dom";
import { Config } from "@/app/providers/router/Config";

export const AppRouter = () => {
  return (
    <Routes>
      {Config.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};
