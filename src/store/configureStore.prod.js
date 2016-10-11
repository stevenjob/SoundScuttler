import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
  const router = routerMiddleware(browserHistory);
  const middlewares = [thunk, router];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  return store;
};

export default configureStore;
