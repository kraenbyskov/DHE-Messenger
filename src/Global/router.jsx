import React from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "./routes";
import { Helmet } from "react-helmet";

const Router = (props) => {
  const { UserData } = props;
  return (
    <Route
      render={({ location }) => {
        return (
          <Switch location={location}>
            {Routes.map(({ name, path, Component, id, exact }) => (
              <Route
                key={id}
                path={path}
                exact={exact}
                render={(props) => (
                  <Component {...props} location={location} UserData={UserData}>
                    <Helmet>
                      <title>{name}</title>
                    </Helmet>
                  </Component>
                )}
              />
            ))}
          </Switch>
        );
      }}
    />
  );
};

export default Router;
