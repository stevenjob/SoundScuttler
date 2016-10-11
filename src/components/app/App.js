import React from 'react';
import SC from 'soundcloud';
import { Router, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { CLIENT_ID, REDIRECT_URI } from 'constants/auth';
import routes from './routes';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

useStrict(true);

const App = () => (
  <Router
    history={browserHistory}
    routes={routes}
  />
);

export default App;
