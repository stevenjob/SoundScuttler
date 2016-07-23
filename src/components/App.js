import React from 'react';
import Stream from './Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const App = () => (
  <Stream tracks={tracks} />
);

export default App;
