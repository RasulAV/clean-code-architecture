import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ComponentFactory from "./presentation/component-factory";
import SuspenseSpinner from "./presentation/SuspenseFallback";

export type RouteItem = {
  path: string;
  key: string;
  component: JSX.Element;
};

const routes: React.FC = () => {
  const allRoutes: RouteItem[] = [
    {
      path: "/",
      key: "TODOPAGE",
      component: ComponentFactory.instance.createTodoPage(),
    },
  ];

  return (
    <Suspense fallback={<SuspenseSpinner />}>
      <Routes>
        {allRoutes.map((route) => (
          <Route key={route.key} path={route.path} element={route.component} />
        ))}

        <Route element={<h1>Not Found!</h1>} />
      </Routes>
    </Suspense>
  );
};

export default routes;
