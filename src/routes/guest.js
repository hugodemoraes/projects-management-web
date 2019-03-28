import React from 'react';
import { func, shape } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store/configStore';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

GuestRoute.propTypes = {
  component: func,
  location: shape(),
};

GuestRoute.defaultProps = {
  component: () => null,
  location: {},
};

export default GuestRoute;
