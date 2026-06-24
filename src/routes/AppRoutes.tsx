import type { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../layout/Layout";

export const AppRoutes = () => {

  type RoutesPaths = {
    path: string;
    element: ReactElement ;
  };

  const routes: RoutesPaths[] = [
    {
      path: "/",
      element: <Home/>,
    },
  ];

  return (
    <Router>
      <Layout>
        <Routes>
        {routes.map((items) => (
          <Route key={items.path} path={items.path} element={items.element} />
        ))}
      </Routes>
      </Layout>
    </Router>
  );
};
