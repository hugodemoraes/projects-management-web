import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, SignUp, SignIn } from '@pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signin" component={SignUp} />
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
