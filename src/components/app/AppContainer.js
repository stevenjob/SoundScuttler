import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Stream from 'components/stream/StreamContainer';
import App from 'components/app/App';
import Callback from 'components/callback/Callback';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const AppContainer = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>
);

export default AppContainer;
