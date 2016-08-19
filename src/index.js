
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import App from 'components/app/AppContainer';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HotLoaderContainer>
    <App />
  </HotLoaderContainer>,
  rootElement
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('components/app/AppContainer', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('components/app/AppContainer').default;
    ReactDOM.render(
      <HotLoaderContainer>
        <NextApp />
      </HotLoaderContainer>,
      rootElement
    );
  });
}
