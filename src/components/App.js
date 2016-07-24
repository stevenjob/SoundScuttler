import React from 'react';
import Stream from './stream/StreamContainer';
import configureStore from 'store/configureStore';
import { setTracks } from 'actions/tracks';
import { Provider } from 'react-redux';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other trac'
  }
];

const store = configureStore();
store.dispatch(setTracks(tracks));

const App = () => (
  <Provider store={store}>
    <Stream />
  </Provider>
);

export default App;
