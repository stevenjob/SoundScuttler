import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default App;
