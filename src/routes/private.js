import React from 'react';
import { func, shape } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store/configStore';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: func,
  location: shape(),
};

PrivateRoute.defaultProps = {
  component: () => null,
  location: {},
};

export default PrivateRoute;
