import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from 'reducers';
import createLogger from 'redux-logger';

const logger = createLogger();

const configureStore = () => {
  const middlewares = [logger];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
