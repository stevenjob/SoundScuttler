import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
  const middlewares = [];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  return store;
};

export default configureStore;
