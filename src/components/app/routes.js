import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Stream from 'components/stream/StreamContainer';
import Callback from 'components/callback/Callback';
import Container from './Container';

const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={Stream} />
    <Route path="/" component={Stream} />
    <Route path="/callback" component={Callback} />
  </Route>
);

export default routes;
