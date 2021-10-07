import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loader from "./Loader";
import ProtectedRoutes from "./ProtectedRoutes"; //Authenticated routes
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";

const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Signup"));
// const ForgotPassword = lazy(() => import('components/ForgotPassword'));
// const NoFoundComponent = lazy(() => import('components/NoFoundComponent'));
const RouteHelper = ({ isAuthenticated, setAuthenticated, handleLogout }) => {
  console.log(isAuthenticated);
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
            setAuthenticated={setAuthenticated}
          >
            <Login
              isAuthenticated={isAuthenticated}
              setAuthenticated={setAuthenticated}
            />
          </PublicRoute>
          <PublicRoute path="/signup" isAuthenticated={isAuthenticated}>
            <Signup />
          </PublicRoute>
          {/* <PublicRoute
            path="/forgot-password"
            isAuthenticated={isAuthenticated}
          >
            <ForgotPassword />
          </PublicRoute> */}
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes handleLogout={handleLogout} />
          </PrivateRoute>
          {/* <Route path="*">
            <NoFoundComponent />
          </Route> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouteHelper;
