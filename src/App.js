import React from 'react';
import { Provider } from 'react-redux';

import store from './store/configStore';
import Routes from './routes/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
