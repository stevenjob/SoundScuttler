import React, { PropTypes } from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => (<div className="track" key={key}>{track.title}</div>))
      }
    </div>
  );
}

Stream.propTypes = {
  tracks: PropTypes.array
};

export default Stream;
