import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Loader from "./Loader";

const ProtectedRoutes = ({ handleLogout }) => (
  <Switch>
    <Suspense fallback={<Loader />}>
      {routes.map(({ component: Component, path, exact }) => (
        <Route path={`/${path}`} key={path} exact={exact}>
          <Component handleLogout={handleLogout} />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default ProtectedRoutes;
