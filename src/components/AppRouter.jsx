import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "../UI/loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }) => (
        <Route exact={exact} path={path} component={component} key={path} />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }) => (
        <Route exact={exact} path={path} component={component} key={path} />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
