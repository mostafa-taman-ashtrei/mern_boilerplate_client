/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthState } from '../contexts/AuthContext';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { isAuth, loading } = useAuthState();

  return (
    <Route
      {...rest}
      render={(routeProps) => (!loading && (isAuth ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to="/login" />
      )))}
    />
  );
}
