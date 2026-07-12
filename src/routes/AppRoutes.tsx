import type { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Work } from "../pages/Work";
import { About } from "../pages/About";
import { Header } from "../components/common/Header";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  type RoutesPaths = {
    path: string;
    element: ReactElement;
  };

  const routes: RoutesPaths[] = [
    {
      path: "/",
      element: <Home />,
    
    },
    {
      path: "/my-work",
      element: <Work />,
    },
    {
      path: "/about-me",
      element: <About />,
    },
    {
      path: "/contact-me",
      element: <Work />,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      {/* main Layout */}
      <Layout>
        <Routes>
          {routes.map((items) => (
            <Route key={items.path} path={items.path} element={items.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
