import { Route, Routes } from "react-router-dom";
import { config } from "@/app/providers/router/config.tsx";

export const AppRouter = () => {
  return (
      <Routes>
        {config.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
  );
};
