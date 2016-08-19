import React, { PropTypes } from 'react';

function Stream({ user, tracks = [], onAuth }) {
  return (
    <div>
      <div>
        {
          user ?
            <div>{user.username}</div> :
            <button onClick={onAuth} type="button">Login</button>
        }
      </div>
      <br />
      <div>
      {
        tracks.map((track) => (<div className="track" key={`${track.title}-${track.id}`}>{track.title}</div>))
      }
      </div>
    </div>
  );
}

Stream.propTypes = {
  tracks: PropTypes.array,
  onAuth: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default Stream;
