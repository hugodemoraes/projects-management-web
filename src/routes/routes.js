import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';
import Private from './private';
import Guest from './guest';

import { Main, SignUp, SignIn } from '@pages';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signin" component={SignUp} />
      <Private exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
