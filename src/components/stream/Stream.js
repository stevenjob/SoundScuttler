import React, { PropTypes } from 'react';

function Stream({ user, tracks = [], onAuth }) {
  console.log(tracks);
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
        // TODO key={key} is not great
        tracks.map((track, key) => (<div className="track" key={key}>{track.origin.title}</div>))
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
